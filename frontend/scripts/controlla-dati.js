#!/usr/bin/env node
// Controlla i dati territoriali di TutelApp (bonus, Comuni, destinatari, associazioni).
// Solo Node, nessuna installazione. NON modifica mai nessun file: legge e riferisce.
//
// Uso (dalla cartella frontend/):
//   node scripts/controlla-dati.js                       rapporto completo (errori, avvisi, copertura, coda di lavoro)
//   node scripts/controlla-dati.js --bloccante           solo errori strutturali, in breve (usato dal build di Netlify)
//   node scripts/controlla-dati.js --confronta origin/main   confronta con il ramo base: voci tolte non dichiarate = errore
//   node scripts/controlla-dati.js --classifica origin/main  dice se la modifica è A (solo dati), B (codice) o C (file protetti)
//   node scripts/controlla-dati.js --coda --max 25       mostra più voci per ogni punto della coda di lavoro
//   node scripts/controlla-dati.js --json                stesso rapporto in JSON
//   node scripts/controlla-dati.js --oggi 2026-11-10     data di riferimento (per prove ripetibili)
//
// Esce con codice 1 se ci sono ERRORI. Gli AVVISI non bloccano: sono la coda di lavoro.
// Riusa i controlli già esistenti (verifica-anagrafica.js e verifica-ricerca.js) nel rapporto completo.
const fs = require("fs");
const path = require("path");
const { execFileSync, spawnSync } = require("child_process");
const L = require("./archivi-lib");

const args = process.argv.slice(2);
const ha = (n) => args.includes(n);
const valore = (n) => {
  const i = args.indexOf(n);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : undefined;
};
const BLOCCANTE = ha("--bloccante");
const MAX = parseInt(valore("--max") || "15", 10);
const OGGI = valore("--oggi") ? new Date(valore("--oggi") + "T00:00:00Z") : new Date(new Date().toISOString().slice(0, 10) + "T00:00:00Z");
const fmt = (d) => d.toISOString().slice(0, 10).split("-").reverse().join("/");

const errori = [], avvisi = [];
const err = (area, msg, dove) => errori.push({ area, msg, dove });
const avv = (area, msg, dove) => avvisi.push({ area, msg, dove });

// ------------------------------------------------------------------ fonti istituzionali (controllo di massima)
// Non è una prova: segnala solo i domini che non si riconoscono come enti pubblici, perché li guardi una persona.
function istituzionale(host) {
  const h = host.toLowerCase().replace(/^www\d?\./, "");
  if (/\.gov\.it$/.test(h) || /(^|\.)(inps|inail|agenziaentrate|istat|governo|camera|senato|mef|invalsi|anpal|agid)\.it$/.test(h)) return true;
  return h.split(".").some((e) =>
    ["regione", "comune", "comuni", "provincia", "prefettura", "municipiumapp", "consiglio", "garante"].includes(e) ||
    /^(asl|ausl|aulss|ulss|asst|ats|asp|usl|distretto|unione|cittametropolitana|ambito)/.test(e));
}

// ------------------------------------------------------------------ controlli
function controlla(src) {
  const bonus = L.caricaBonus(src);
  const anagrafica = L.caricaAnagrafica(src);
  const sch = L.caricaSchede(src);
  const dest = L.caricaDestinatari(src);
  const ass = L.caricaAssociazioni(src);
  const coordinate = L.caricaCoordinate(src);

  const slugNoti = new Set([...anagrafica.slugs, ...sch.schede.map((s) => s.slug)]);
  const province = new Set(anagrafica.voci.map((v) => v[2]));
  const regioni = new Set(L.REGIONI);

  // ---- BONUS
  for (const p of bonus.problemi) err("bonus", p.msg, `src/lib/bonus.ts:${p.riga}`);
  const visti = new Map();
  for (const v of bonus.voci) {
    const dove = `src/lib/bonus.ts:${v._riga}`;
    const idv = v.id || "(senza id)";
    if (!v.id || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(v.id)) err("bonus", `${idv}: id mancante o non valido (solo minuscole, numeri e trattini)`, dove);
    else if (visti.has(v.id)) err("bonus", `${v.id}: id duplicato (già alla riga ${visti.get(v.id)})`, dove);
    else visti.set(v.id, v._riga);
    for (const k of ["regione", "titolo", "perChi", "cosa", "stato", "comeSiChiede", "verificatoIl"])
      if (typeof v[k] !== "string" || !v[k].trim()) err("bonus", `${idv}: campo «${k}» vuoto o mancante`, dove);
    if (!v.fonte || !String(v.fonte.label || "").trim()) err("bonus", `${idv}: fonte senza etichetta`, dove);
    const url = v.fonte && v.fonte.url;
    let host = null;
    try { host = new URL(url).hostname; } catch { err("bonus", `${idv}: indirizzo della fonte mancante o non valido`, dove); }
    if (host && !/^https:\/\//.test(url)) err("bonus", `${idv}: l'indirizzo della fonte deve iniziare con https://`, dove);
    if (v.stato && !["aperto", "attivo", "chiuso", "scaduto", "da-verificare"].includes(v.stato)) err("bonus", `${idv}: stato «${v.stato}» non valido`, dove);
    if (v.regione && v.regione !== "Italia" && !regioni.has(v.regione)) err("bonus", `${idv}: regione «${v.regione}» non valida`, dove);
    const dv = L.dataIt(v.verificatoIl);
    if (v.verificatoIl && !dv) err("bonus", `${idv}: «verificatoIl» deve essere gg/mm/aaaa (trovato «${v.verificatoIl}»)`, dove);
    else if (dv && dv > OGGI) err("bonus", `${idv}: «verificatoIl» è nel futuro (${v.verificatoIl})`, dove);
    for (const s of v.comuni || []) if (!slugNoti.has(s)) err("bonus", `${idv}: il Comune «${s}» non esiste nell'app`, dove);
    // avvisi editoriali
    if (host && !istituzionale(host)) avv("fonti", `${idv}: dominio «${host}» non riconosciuto come ente pubblico: controllare a mano`, dove);
    if (v.stato === "da-verificare") avv("da-verificare", `${idv}: stato «da verificare»: non è ammesso in app (regola del 20/10/2026)`, dove);
    const date = L.dateNelTesto(v.quando);
    if (date.length) {
      const ultima = new Date(Math.max(...date));
      const gg = L.giorniTra(OGGI, ultima);
      if ((v.stato === "aperto" || v.stato === "attivo") && gg > 0) avv("scaduti", `${idv}: stato «${v.stato}» ma l'ultima data indicata è ${fmt(ultima)} (scaduto da ${gg} giorni)`, dove);
      if (v.stato === "chiuso" && gg > 10) avv("chiusi-vecchi", `${idv}: chiuso da ${gg} giorni (dopo 10 giorni la scheda si toglie)`, dove);
    }
    if (dv && L.giorniTra(OGGI, dv) > 90) avv("da-ricontrollare", `${idv}: ultimo controllo il ${v.verificatoIl} (oltre 90 giorni)`, dove);
  }

  // ---- SCHEDE DEI COMUNI
  for (const p of sch.problemi) err("comuni", p.msg, "src/config/comuni/demo/index.ts");
  const slugVisti = new Map();
  for (const s of sch.schede) {
    const dove = `src/config/comuni/${s.cartella === "demo" ? "demo/" : ""}${s.file}`;
    if (!s.slug) { err("comuni", `${s.file}: manca lo slug`, dove); continue; }
    if (s.slug + ".ts" !== s.file) err("comuni", `${s.file}: lo slug «${s.slug}» deve coincidere con il nome del file`, dove);
    if (slugVisti.has(s.slug)) err("comuni", `${s.slug}: slug duplicato (${slugVisti.get(s.slug)} e ${dove})`, dove);
    else slugVisti.set(s.slug, dove);
    if (!["comune", "unione"].includes(s.tipo)) err("comuni", `${s.slug}: «tipo» deve essere "comune" o "unione"`, dove);
    if (!s.nome) err("comuni", `${s.slug}: manca il nome`, dove);
    if (!/^[A-Z]{2}$/.test(s.provincia || "")) err("comuni", `${s.slug}: sigla provincia non valida («${s.provincia}»)`, dove);
    if (!regioni.has(s.regione)) err("comuni", `${s.slug}: regione non valida («${s.regione}»)`, dove);
    if (s.email && !L.EMAIL.test(s.email)) err("comuni", `${s.slug}: email non valida («${s.email}»)`, dove);
    if (s.cartella === "demo") {
      if (!s.dimostrativo) err("comuni", `${s.slug}: nella cartella demo/ deve avere «dimostrativo: true»`, dove);
      const nomeFile = s.file.replace(/\.ts$/, "");
      if (!sch.registrazione.importati.has(nomeFile)) err("comuni", `${s.slug}: file non importato in demo/index.ts (il Comune non comparirebbe)`, dove);
      else if (!sch.registrazione.inElenco.has(sch.registrazione.importati.get(nomeFile))) err("comuni", `${s.slug}: importato ma non aggiunto all'elenco COMUNI_DEMO in demo/index.ts`, dove);
    }
  }
  const fileDemo = new Set(sch.schede.filter((s) => s.cartella === "demo").map((s) => s.file.replace(/\.ts$/, "")));
  for (const [file] of sch.registrazione.importati) if (!fileDemo.has(file)) err("comuni", `demo/index.ts importa «${file}» ma il file non esiste`, "src/config/comuni/demo/index.ts");

  // ---- DESTINATARI
  for (const p of dest.problemi) err("destinatari", p.msg, "src/config/comuni/destinatari.ts");
  for (const [slug, d] of Object.entries(dest.voci)) {
    const dove = "src/config/comuni/destinatari.ts";
    if (!slugNoti.has(slug)) err("destinatari", `${slug}: il Comune non esiste nell'app`, dove);
    if (!d || !L.EMAIL.test(d.email || "")) err("destinatari", `${slug}: email non valida («${d && d.email}»)`, dove);
    if (!d || !["ordinaria", "pec"].includes(d.tipo)) err("destinatari", `${slug}: «tipo» deve essere "ordinaria" o "pec"`, dove);
    if (!d || !String(d.fonte || "").trim()) err("destinatari", `${slug}: manca la fonte dell'indirizzo`, dove);
  }

  // ---- ASSOCIAZIONI
  for (const p of ass.problemi) err("associazioni", p.msg, "src/lib/associazioni.ts");
  const nomi = new Map();
  for (const a of ass.voci) {
    const dove = `src/lib/associazioni.ts:${a._riga}`;
    if (!a.nome || !String(a.nome).trim()) { err("associazioni", `voce senza nome`, dove); continue; }
    if (!String(a.cosa || "").trim()) err("associazioni", `${a.nome}: manca la descrizione («cosa»)`, dove);
    if (a.email && !L.EMAIL.test(a.email)) err("associazioni", `${a.nome}: email non valida («${a.email}»)`, dove);
    if (a.sito && !/^https?:\/\//.test(a.sito)) err("associazioni", `${a.nome}: «sito» deve iniziare con http:// o https://`, dove);
    for (const s of a.comuni || []) if (!slugNoti.has(s)) err("associazioni", `${a.nome}: il Comune «${s}» non esiste nell'app`, dove);
    for (const p of a.province || []) if (!province.has(p)) err("associazioni", `${a.nome}: sigla provincia «${p}» sconosciuta`, dove);
    const k = a.nome.toLowerCase().trim();
    if (nomi.has(k)) avv("associazioni-doppie", `${a.nome}: nome ripetuto (righe ${nomi.get(k)} e ${a._riga}): controllare se è lo stesso ente`, dove);
    else nomi.set(k, a._riga);
  }

  // ---- COPERTURA (avvisi)
  const conRecapito = new Set([...Object.keys(dest.voci), ...sch.schede.filter((s) => s.email).map((s) => s.slug)]);
  const regionaliPer = {}, comunaliPer = {};
  for (const v of bonus.voci) {
    const mappa = v.comuni && v.comuni.length ? comunaliPer : regionaliPer;
    mappa[v.regione] = (mappa[v.regione] || 0) + 1;
  }
  const comuniSchede = sch.schede.filter((s) => s.tipo === "comune");
  for (const s of comuniSchede) {
    if (!conRecapito.has(s.slug)) avv("senza-destinatario", `${s.slug} (${s.provincia}): manca l'indirizzo per «Scrivi al tuo Comune»`, `src/config/comuni/${s.cartella === "demo" ? "demo/" : ""}${s.file}`);
    if (!coordinate[s.slug]) avv("senza-coordinate", `${s.slug} (${s.provincia}): mancano le coordinate (servono per il raggio di 30 km)`, "src/content/coordinate-comuni.json");
    if (!s.email && !s.indirizzo) avv("scheda-snella", `${s.slug} (${s.provincia}): scheda snella, mancano email e indirizzo dei Servizi Sociali`, `src/config/comuni/${s.cartella === "demo" ? "demo/" : ""}${s.file}`);
  }
  for (const r of L.REGIONI) if ((regionaliPer[r] || 0) < 3) avv("regioni-povere", `${r}: ${regionaliPer[r] || 0} misure regionali in app`, "src/lib/bonus.ts");

  const copertura = L.REGIONI.map((r) => ({
    regione: r,
    comuni: comuniSchede.filter((s) => s.regione === r).length,
    senzaDestinatario: comuniSchede.filter((s) => s.regione === r && !conRecapito.has(s.slug)).length,
    misureRegionali: regionaliPer[r] || 0,
    misureComunali: comunaliPer[r] || 0,
  }));

  return {
    dati: { bonus, anagrafica, sch, dest, ass, coordinate },
    conteggi: {
      bonus: bonus.voci.length, schede: sch.schede.length, comuniDemo: sch.schede.filter((s) => s.cartella === "demo").length,
      anagraficaIstat: anagrafica.voci.length, destinatari: Object.keys(dest.voci).length, associazioni: ass.voci.length,
    },
    copertura,
  };
}

// ------------------------------------------------------------------ confronto con un ramo base
const chiavi = (src) => {
  const b = L.caricaBonus(src), sc = L.caricaSchede(src), d = L.caricaDestinatari(src), a = L.caricaAssociazioni(src);
  return {
    bonus: new Set(b.voci.map((v) => v.id)),
    comuni: new Set(sc.schede.map((s) => s.slug)),
    destinatari: new Set(Object.keys(d.voci)),
    associazioni: new Set(a.voci.map((x) => String(x.nome || "").toLowerCase().trim())),
  };
};
const git = (a) => execFileSync("git", a, { cwd: L.REPO, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
function fileModificati(ref) {
  const diff = git(["diff", "--name-only", ref]).split("\n").filter(Boolean);
  const nuovi = git(["ls-files", "-o", "--exclude-standard"]).split("\n").filter(Boolean);
  return [...new Set([...diff, ...nuovi])];
}
function confronta(ref) {
  const base = chiavi(L.sorgenteGit(ref)), ora = chiavi(L.sorgenteDisco());
  const modificati = fileModificati(ref);
  // Le rimozioni volute si dichiarano in docs/registro/*.md con una riga «RIMOSSO: chiave1; chiave2»
  const dichiarate = new Set();
  for (const f of modificati.filter((x) => /^docs\/registro\/.+\.md$/.test(x) && !/\/(README|_[^/]*)\.md$/.test(x))) {
    const p = path.join(L.REPO, f);
    if (!fs.existsSync(p)) continue;
    for (const m of fs.readFileSync(p, "utf8").matchAll(/RIMOSS[OI]\s*:\s*(.+)/gi))
      m[1].split(/[;,]/).map((x) => x.replace(/[`*]/g, "").trim().toLowerCase()).filter(Boolean).forEach((x) => dichiarate.add(x));
  }
  const esito = {};
  for (const tipo of Object.keys(base)) {
    const tolte = [...base[tipo]].filter((k) => !ora[tipo].has(k));
    const aggiunte = [...ora[tipo]].filter((k) => !base[tipo].has(k));
    const nonDichiarate = tolte.filter((k) => !dichiarate.has(String(k).toLowerCase()));
    esito[tipo] = { base: base[tipo].size, ora: ora[tipo].size, aggiunte, tolte, nonDichiarate };
    for (const k of nonDichiarate) err("confronto", `${tipo}: «${k}» c'era in ${ref} e ora non c'è, e la rimozione non è dichiarata (riga «RIMOSSO: ${k}» in docs/registro/)`, ref);
  }
  return esito;
}

// ------------------------------------------------------------------ classificazione dei file modificati
const PROTETTI = [/^\.github\//, /^netlify\.toml$/, /^frontend\/netlify\.toml$/, /^(frontend\/)?package\.json$/, /^(frontend\/)?yarn\.lock$/, /^frontend\/scripts\//, /^AGENTS\.md$/, /^CHATGPT_WORKFLOW\.md$/, /^docs\/AUTORIZZAZIONI\.md$/, /(^|\/)\.env/];
const OBSOLETE = [/^app\//, /^src\//, /^tutelapp-demo-parte1\//];
const DATI = [
  /^frontend\/src\/lib\/(bonus|associazioni|esenzione\w*)\.ts$/,
  /^frontend\/src\/config\/comuni\/(destinatari\.ts|demo\/[^/]+\.ts|sarzana\.ts|erba\.ts|vigne-e-vini\.ts|ventimiglia\.ts|mediglia\.ts)$/,
  /^frontend\/src\/content\/[^/]+\.json$/, /^frontend\/public\//, /^docs\//,
];
function classifica(ref) {
  const files = fileModificati(ref);
  const righe = files.map((f) => ({
    file: f,
    classe: OBSOLETE.some((r) => r.test(f)) ? "OBSOLETA" : PROTETTI.some((r) => r.test(f)) ? "PROTETTO" : DATI.some((r) => r.test(f)) ? "DATI" : "CODICE",
  }));
  for (const r of righe.filter((x) => x.classe === "OBSOLETA")) err("classifica", `«${r.file}» è una copia obsoleta in radice: la cartella viva è frontend/`, r.file);
  const livello = righe.some((r) => r.classe === "PROTETTO" || r.classe === "OBSOLETA") ? "C" : righe.some((r) => r.classe === "CODICE") ? "B" : "A";
  return { livello, righe };
}

// ------------------------------------------------------------------ coda di lavoro
function costruisciCoda() {
  const per = (area) => avvisi.filter((a) => a.area === area);
  const punti = [
    ["scaduti", "Bonus «aperti/attivi» con data già passata", "Rischio per i cittadini: verificare sulla fonte, segnare «scaduto» o aggiornare"],
    ["da-verificare", "Bonus in stato «da verificare»", "Non ammessi in app (regola 20/10/2026): confermare sulla fonte o togliere"],
    ["fonti", "Fonti non riconosciute come enti pubblici", "Regola: solo siti istituzionali. Sostituire con la fonte ufficiale o togliere la voce"],
    ["chiusi-vecchi", "Bonus chiusi da oltre 10 giorni", "Decisione 9/11/2026: le schede scadute da oltre 10 giorni si cancellano (prima controlla se una PR aperta lo sta già facendo)"],
    ["da-ricontrollare", "Bonus non ricontrollati da oltre 90 giorni", "Regola: ricontrollo ogni 3 mesi e sempre a gennaio"],
    ["regioni-povere", "Regioni con meno di 3 misure regionali", "Cercare le misure sui siti della Regione (uffici disabilità, politiche sociali)"],
    ["senza-destinatario", "Comuni senza indirizzo per «Scrivi al tuo Comune»", "Regola 20/10/2026: servono per ogni Comune; solo indirizzi del sito istituzionale"],
    ["senza-coordinate", "Comuni senza coordinate", "Servono per il raggio di 30 km delle associazioni"],
    ["scheda-snella", "Comuni con scheda ancora snella (Servizi Sociali senza email né indirizzo)", "Cercare i recapiti sul sito del Comune, dell'ambito o dell'ASL; se non si trovano, preparare la mail all'URP. Mai inventare o copiare da siti non istituzionali"],
    ["associazioni-doppie", "Associazioni con nome ripetuto", "Controllare se sono la stessa realtà"],
  ];
  return punti
    .map(([area, titolo, come]) => ({ area, titolo, come, n: per(area).length, esempi: per(area).slice(0, MAX).map((a) => a.msg) }))
    .filter((p) => p.n)
    .map((p, i) => ({ priorita: i + 1, ...p }));
}

// ------------------------------------------------------------------ esecuzione
const esito = controlla(L.sorgenteDisco());
let confronto = null, classificazione = null, riuso = [];

if (!BLOCCANTE) {
  const ref = valore("--confronta");
  if (ref) { try { confronto = confronta(ref); } catch (e) { err("confronto", `impossibile leggere «${ref}»: ${String(e.message).split("\n")[0]} (serve «git fetch origin»)`, ref); } }
  const refC = valore("--classifica");
  if (refC) { try { classificazione = classifica(refC); } catch (e) { err("classifica", `impossibile leggere «${refC}»: ${String(e.message).split("\n")[0]}`, refC); } }
  if (!ref && !refC) {
    // rapporto completo: riusa i controlli già esistenti
    for (const nome of ["verifica-anagrafica.js", "verifica-ricerca.js"]) {
      const r = spawnSync(process.execPath, [path.join(__dirname, nome)], { encoding: "utf8", cwd: L.FRONTEND });
      const out = ((r.stdout || "") + (r.stderr || "")).trim().split("\n").slice(-8).join("\n");
      riuso.push({ nome, ok: r.status === 0, out });
      if (r.status !== 0) err("controlli-esistenti", `${nome} ha trovato problemi:\n${out}`, `scripts/${nome}`);
    }
  }
}
const coda = costruisciCoda();

if (ha("--json")) {
  console.log(JSON.stringify({ data: fmt(OGGI), esito: errori.length ? "ERRORI" : "OK", errori, avvisi: avvisi.length, conteggi: esito.conteggi, copertura: esito.copertura, coda, confronto, classificazione, riuso }, (k, v) => (v instanceof Set ? [...v] : v), 2));
  process.exit(errori.length ? 1 : 0);
}

const out = [];
if (BLOCCANTE) {
  if (errori.length) {
    out.push(`CONTROLLO DATI: ${errori.length} errori strutturali. Il build si ferma perché la pubblicazione romperebbe l'app o i dati.`);
    for (const e of errori.slice(0, 40)) out.push(` - [${e.area}] ${e.msg}${e.dove ? `  → ${e.dove}` : ""}`);
    if (errori.length > 40) out.push(` ... e altri ${errori.length - 40}`);
    out.push("Per vedere il rapporto completo: node scripts/controlla-dati.js");
  } else {
    const c = esito.conteggi;
    out.push(`Controllo dati OK: ${c.bonus} bonus, ${c.schede} schede Comune, ${c.destinatari} destinatari, ${c.associazioni} associazioni.`);
  }
  console.log(out.join("\n"));
  process.exit(errori.length ? 1 : 0);
}

const c = esito.conteggi;
out.push(`# Controllo dati TutelApp — ${fmt(OGGI)}`, "");
out.push(errori.length ? `## ❌ ${errori.length} errori da correggere prima di pubblicare` : "## ✅ Nessun errore strutturale", "");
for (const e of errori.slice(0, 60)) out.push(`- **[${e.area}]** ${e.msg}${e.dove ? `  \n  → \`${e.dove}\`` : ""}`);
if (errori.length > 60) out.push(`- … e altri ${errori.length - 60}`);
out.push("", "## Archivi letti", "");
out.push(`| Archivio | Voci |`, `|---|---|`);
out.push(`| Bonus e misure (src/lib/bonus.ts) | ${c.bonus} |`, `| Schede Comune (src/config/comuni, demo/) | ${c.schede} (di cui demo: ${c.comuniDemo}) |`);
out.push(`| Anagrafica ISTAT (src/content/comuni-istat.json) | ${c.anagraficaIstat} |`, `| Destinatari «Scrivi al tuo Comune» (destinatari.ts) | ${c.destinatari} |`, `| Associazioni (src/lib/associazioni.ts) | ${c.associazioni} |`);
if (riuso.length) {
  out.push("", "## Controlli già esistenti (riusati)", "");
  for (const r of riuso) out.push(`- ${r.ok ? "✅" : "❌"} \`${r.nome}\`${r.ok ? " — " + r.out.split("\n").pop() : ""}`);
}
if (confronto) {
  out.push("", `## Confronto con ${valore("--confronta")}`, "", "| Archivio | Prima | Ora | Aggiunte | Tolte |", "|---|---|---|---|---|");
  for (const [t, v] of Object.entries(confronto)) out.push(`| ${t} | ${v.base} | ${v.ora} | ${v.aggiunte.length} | ${v.tolte.length}${v.nonDichiarate.length ? ` (**${v.nonDichiarate.length} non dichiarate**)` : ""} |`);
  for (const [t, v] of Object.entries(confronto)) {
    if (v.aggiunte.length) out.push("", `Aggiunte in ${t}: ${v.aggiunte.slice(0, MAX).map((k) => `\`${k}\``).join(", ")}${v.aggiunte.length > MAX ? ` … (+${v.aggiunte.length - MAX})` : ""}`);
    if (v.tolte.length) out.push("", `Tolte da ${t}: ${v.tolte.slice(0, MAX).map((k) => `\`${k}\``).join(", ")}`);
  }
}
if (classificazione) {
  const sp = { A: "A — solo dati: può procedere da solo fino alla PR con i controlli verdi", B: "B — tocca il codice: serve il «pubblica» della dott.ssa Baudone", C: "C — tocca file protetti o copie obsolete: fermarsi e chiedere" };
  out.push("", `## Classe della modifica: ${sp[classificazione.livello]}`, "");
  for (const r of classificazione.righe.slice(0, 60)) out.push(`- \`${r.classe}\` ${r.file}`);
  if (!classificazione.righe.length) out.push("- (nessun file modificato)");
}
if (!confronto && !classificazione || ha("--coda")) {
  out.push("", "## Copertura per Regione", "", "| Regione | Comuni in app | Senza destinatario | Misure regionali | Misure di Comuni |", "|---|---|---|---|---|");
  for (const r of esito.copertura) out.push(`| ${r.regione} | ${r.comuni} | ${r.senzaDestinatario} | ${r.misureRegionali} | ${r.misureComunali} |`);
  out.push("", "## Coda di lavoro (dalla più urgente)", "");
  if (!coda.length) out.push("Niente in coda.");
  for (const p of coda) {
    out.push(`### ${p.priorita}. ${p.titolo} — ${p.n}`, `_${p.come}_`, "");
    for (const e of p.esempi) out.push(`- ${e}`);
    if (p.n > p.esempi.length) out.push(`- … e altri ${p.n - p.esempi.length} (usa \`--max ${p.n}\`)`);
    out.push("");
  }
}
console.log(out.join("\n"));
process.exit(errori.length ? 1 : 0);
