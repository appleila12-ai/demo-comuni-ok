const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'../../frontend/public/prove/cartella-blu.html'),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const context={Intl,Date,TextEncoder,structuredClone};vm.createContext(context);vm.runInContext(script,context);
const c=context.CartellaBluCore;let n=0;
function test(name,fn){fn();n++;console.log('OK '+name);}
test('data valida',()=>assert.equal(c.validDate('2026-11-30'),true));
test('data impossibile rifiutata',()=>assert.equal(c.validDate('2026-02-30'),false));
test('anno bisestile',()=>assert.equal(c.validDate('2028-02-29'),true));
test('passaggio di anno',()=>assert.equal(c.addDays('2026-12-29',7),'2027-01-05'));
test('Europe/Rome inverno',()=>assert.equal(c.instant('2026-11-30','12:00').toISOString(),'2026-11-30T11:00:00.000Z'));
test('Europe/Rome estate',()=>assert.equal(c.instant('2027-07-01','12:00').toISOString(),'2027-07-01T10:00:00.000Z'));
test('ora inesistente rifiutata',()=>assert.throws(()=>c.instant('2027-03-28','02:30')));
test('ora ambigua rifiutata',()=>assert.throws(()=>c.instant('2027-10-31','02:30')));
const s=c.fresh();Object.assign(s,{saved:true,step1:true,step2:true,date:'2026-11-30',time:'12:00',calendar:{uid:'demo-00000000-0000-4000-8000-000000000001@tutelapp.invalid',sequence:0,modifiedAt:'2026-11-17T10:00:00Z',generatedAt:null}});
const data=c.ics(s,new Date('2026-11-17T10:00:00Z'));
test('titolo generico di prova',()=>assert(data.includes('SUMMARY:PROVA TutelApp — promemoria\r\n')));
test('fuso e ora',()=>assert(data.includes('DTSTART;TZID=Europe/Rome:20261130T120000')));
test('VTIMEZONE presente',()=>assert(data.includes('BEGIN:VTIMEZONE\r\nTZID:Europe/Rome')));
test('avviso all’ora scelta',()=>assert(data.includes('TRIGGER:PT0S')));
test('avviso quindici minuti prima',()=>assert(c.ics({...s,alarm:15}).includes('TRIGGER:-PT15M')));
test('avviso un giorno prima',()=>assert(c.ics({...s,alarm:1440}).includes('TRIGGER:-P1D')));
test('CRLF',()=>assert(!/(?<!\r)\n/.test(data)));
test('folding UTF-8',()=>assert(data.split('\r\n').every(x=>Buffer.byteLength(x)<=75)));
test('assenza invitati e indirizzi',()=>assert(!/^(ATTENDEE|ORGANIZER|LOCATION|URL):/m.test(data)));
test('UID stabile',()=>assert(c.ics(s).includes('UID:'+s.calendar.uid)));
const restored=c.validate({format:'cartella-blu-backup',schema:1,state:s});
test('ripristino UID e stato',()=>{assert.equal(restored.calendar.uid,s.calendar.uid);assert.equal(restored.step2,true);});
test('copia diversa rifiutata',()=>assert.throws(()=>c.validate({format:'other',schema:1,state:s})));
test('data falsa nella copia rifiutata',()=>assert.throws(()=>c.validate({format:'cartella-blu-backup',schema:1,state:{...s,date:'2026-02-30'}})));
test('campi estranei non importati',()=>assert.equal(c.validate({format:'cartella-blu-backup',schema:1,state:{...s,secret:'ignore'}}).secret,undefined));
test('UID con injection rifiutato',()=>assert.throws(()=>c.validate({format:'cartella-blu-backup',schema:1,state:{...s,calendar:{...s.calendar,uid:'bad\r\nATTENDEE:x'}}})));
test('controllo statico API di rete',()=>assert(!/\b(fetch|XMLHttpRequest|WebSocket|sendBeacon)\s*\(/.test(script)));
test('nessuna risorsa remota',()=>{assert(!/<script[^>]*\bsrc=/i.test(html));assert(!/https?:\/\//i.test(html));});
test('CSP blocca connessioni e worker',()=>{assert(html.includes("connect-src 'none'"));assert(html.includes("worker-src 'none'"));});
test('nessun form inviabile al server',()=>assert(html.includes("form-action 'none'")));
test('migrazione 0.1.1 conserva dati e UID',()=>{const old={...s,appVersion:'0.1.1',revision:12};const next=c.upgrade(old);assert.equal(next.date,s.date);assert.equal(next.revision,12);assert.equal(next.calendar.uid,s.calendar.uid);assert.equal(next.appVersion,'0.1.3');});
test('migrazione 0.1.0 con nomi originari',()=>{const old={...s,appVersion:'0.1.0',deadlineDate:s.deadline,personalDate:s.date,personalTime:s.time,alarmMinutes:s.alarm};delete old.deadline;delete old.date;delete old.time;delete old.alarm;const next=c.upgrade(old);assert.equal(next.date,s.date);assert.equal(next.step2,true);assert.equal(next.calendar.uid,s.calendar.uid);});
test('versione sconosciuta rifiutata senza alterare input',()=>{const old={...s,appVersion:'9.9.9'},before=JSON.stringify(old);assert.throws(()=>c.upgrade(old));assert.equal(JSON.stringify(old),before);});
// Additional asynchronous checks cover delayed local file reads, not browser UI.
async function asyncTest(name,fn){await fn();n++;console.log('OK '+name);}
(async()=>{
const backup=JSON.stringify({format:'cartella-blu-backup',schema:1,state:s});
const file=text=>({size:Buffer.byteLength(text),text:async()=>text});
await asyncTest('lettura copia non scrive lo stato corrente',async()=>{const before=JSON.stringify(s),r=await c.importGate().read(file(backup),8);assert.equal(r.revision,8);assert.equal(r.state.date,s.date);assert.equal(JSON.stringify(s),before);});
await asyncTest('selezione successiva prevale su lettura lenta',async()=>{const gate=c.importGate();let finish;const slow={size:1,text:()=>new Promise(r=>finish=r)};const first=gate.read(slow,1);const second=await gate.read(file(backup),2);finish(backup);assert.equal(await first,null);assert.equal(second.revision,2);});
await asyncTest('annullamento invalida lettura in corso',async()=>{const gate=c.importGate();let finish;const pending=gate.read({size:1,text:()=>new Promise(r=>finish=r)},3);gate.cancel();finish(backup);assert.equal(await pending,null);});
await asyncTest('cambio schermata o modalita discreta scarta la copia',async()=>{let current=true,finish;const pending=c.importGate().read({size:1,text:()=>new Promise(r=>finish=r)},4,()=>current);current=false;finish(backup);assert.equal(await pending,null);});
await asyncTest('JSON malformato e file eccessivo rifiutati',async()=>{await assert.rejects(()=>c.importGate().read(file('{'),1));await assert.rejects(()=>c.importGate().read({size:65537,text:async()=>backup},1));});
await asyncTest('errore di selezione superata non altera nuovo risultato',async()=>{const gate=c.importGate();let fail;const old=gate.read({size:1,text:()=>new Promise((r,j)=>fail=j)},1);const latest=await gate.read(file(backup),9);fail(Error('lettura fallita'));assert.equal(await old,null);assert.equal(latest.revision,9);});
console.log('Totale: '+n+' controlli superati. Non equivalgono a un audit di rete né a test di calendari reali.');

})().catch(e=>{console.error(e);process.exitCode=1;});
