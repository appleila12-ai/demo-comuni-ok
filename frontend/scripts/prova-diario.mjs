// Prove sulla logica del diario (senza app, senza rete): node scripts/prova-diario.mjs
import assert from "node:assert/strict";
import * as core from "../src/lib/diarioCore.ts";
import * as scad from "../src/lib/scadenze.ts";

let n = 0;
const prova = (nome, f) => {
  f();
  n++;
  console.log("ok  " + nome);
};
const voce = (o = {}) => ({
  id: "v1", creata: "2027-03-01T10:00:00.000Z", data: "2027-03-01", titolo: "Sportello",
  passi: [], documenti: [], ...o,
});
const diario = (...voci) => ({ versione: 1, voci });

prova("leggiDiario scarta dati rovinati", () => {
  assert.deepEqual(core.leggiDiario("non json").voci, []);
  assert.deepEqual(core.leggiDiario('{"voci":5}').voci, []);
  assert.deepEqual(core.leggiDiario(null).voci, []);
  const d = core.leggiDiario(JSON.stringify({ voci: [{ id: "a", data: "2027-02-30" }, { id: "b", data: "2027-02-10", passi: [{ id: "p", testo: "x", data: "boh" }, { testo: "senza id" }] }] }));
  assert.equal(d.voci.length, 1);
  assert.equal(d.voci[0].passi.length, 1);
  assert.equal(d.voci[0].passi[0].data, undefined);
});

prova("limiti di lunghezza e numero", () => {
  const passi = Array.from({ length: 9 }, (_, i) => ({ id: "p" + i, testo: "x".repeat(300), fatto: false }));
  const d = core.leggiDiario(JSON.stringify({ voci: [{ id: "a", data: "2027-02-10", capito: "y".repeat(900), passi }] }));
  assert.equal(d.voci[0].passi.length, core.MAX_PASSI);
  assert.equal(d.voci[0].passi[0].testo.length, core.MAX_TESTO_ELENCO);
  assert.equal(d.voci[0].capito.length, core.MAX_CAPITO);
});

prova("conVoce ordina dalla più recente e sostituisce lo stesso id", () => {
  let d = core.conVoce(diario(), voce({ id: "a", data: "2027-01-01" }));
  d = core.conVoce(d, voce({ id: "b", data: "2027-03-01" }));
  assert.deepEqual(d.voci.map((v) => v.id), ["b", "a"]);
  d = core.conVoce(d, voce({ id: "a", data: "2027-01-01", titolo: "nuovo" }));
  assert.equal(d.voci.length, 2);
  assert.equal(d.voci.find((v) => v.id === "a").titolo, "nuovo");
});

prova("nuovoId ha lunghezza fissa (nessun id è l'inizio di un altro)", () => {
  const ids = [core.nuovoId("p", 1, 0.5), core.nuovoId("p", Date.now(), 0.99999), core.nuovoId("p", 36 ** 8, 0)];
  assert.equal(new Set(ids.map((i) => i.length)).size, 1);
});

prova("sincronizzaScadenze è ripetibile e non tocca le altre date", () => {
  const altre = [{ id: "altro-1", tipo: "altro", data: "2027-05-05", titolo: "Visita" }];
  const d = diario(voce({ passi: [
    { id: "p1", testo: "Chiamare", data: "2027-04-01", fatto: false },
    { id: "p2", testo: "Fatto già", data: "2027-04-02", fatto: true },
    { id: "p3", testo: "Senza data", fatto: false },
  ] }));
  const uno = core.sincronizzaScadenze(altre, d);
  const due = core.sincronizzaScadenze(uno, d);
  assert.deepEqual(uno, due);
  assert.equal(uno.length, 2);
  assert.equal(uno[0].id, "altro-1");
  assert.equal(uno[1].id, "passo-p1");
  assert.deepEqual(core.sincronizzaScadenze(uno, diario()), altre);
});

prova("togliere la data di un passo la toglie anche dall'agenda", () => {
  const d = diario(voce({ passi: [{ id: "p1", testo: "Chiamare", data: "2027-04-01", fatto: false }] }));
  const senza = core.senzaDataPasso(d, "p1");
  assert.equal(senza.voci[0].passi[0].data, undefined);
  assert.equal(core.sincronizzaScadenze([], senza).length, 0);
  assert.equal(core.passoDaScadenza("passo-p1"), "p1");
  assert.equal(core.passoDaScadenza("altro-1"), null);
});

prova("incontroDaRaccontare: finestra da ieri a 30 giorni, solo incontri senza nota", () => {
  const oggi = new Date(2027, 2, 15);
  const inc = (id, data) => ({ id, tipo: "altro", data, incontro: true });
  const lista = [inc("oggi", "2027-03-15"), inc("ieri", "2027-03-14"), inc("vecchio", "2027-01-01"), { id: "x", tipo: "altro", data: "2027-03-10" }];
  assert.equal(core.incontroDaRaccontare(lista, diario(), oggi).id, "ieri");
  assert.equal(core.incontroDaRaccontare(lista, diario(voce({ appuntamentoId: "ieri" })), oggi), null);
  assert.equal(core.incontroDaRaccontare([inc("oggi", "2027-03-15")], diario(), oggi), null);
  assert.equal(core.incontroDaRaccontare([inc("vecchio", "2027-01-01")], diario(), oggi), null);
});

prova("passi aperti: prima quelli con data più vicina", () => {
  const d = diario(voce({ passi: [
    { id: "a", testo: "senza", fatto: false },
    { id: "b", testo: "tardi", data: "2027-06-01", fatto: false },
    { id: "c", testo: "presto", data: "2027-04-01", fatto: false },
    { id: "d", testo: "fatto", fatto: true },
  ] }));
  assert.deepEqual(core.passiAperti(d).map((x) => x.passo.id), ["c", "b", "a"]);
  assert.equal(core.prossimoPassoAperto(diario()), null);
});

prova("il file del calendario non contiene le note della persona", () => {
  const eventi = scad.calcolaEventi([{
    id: "altro-1", tipo: "altro", data: "2099-05-05", titolo: "Sportello", ora: "09:30",
    nota: "NOTA-RISERVATA", incontro: true, dove: "Ufficio", portare: ["DOCUMENTO-X"], chiedere: ["DOMANDA-Y"],
  }], new Date(2099, 0, 1));
  assert.equal(eventi.length, 1);
  assert.equal(eventi[0].incontro, true);
  const ics = scad.creaIcs(eventi, "Comune di prova");
  assert.ok(ics.includes("Sportello"));
  for (const segreto of ["NOTA-RISERVATA", "DOCUMENTO-X", "DOMANDA-Y"]) assert.ok(!ics.includes(segreto), segreto);
});

console.log(`\n${n} prove superate`);
