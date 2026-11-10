#!/usr/bin/env node
// Allinea l'anagrafica ISTAT alle schede Comune presenti, senza modificare a mano file da una sola riga.
//
// Perché esiste: aggiungere (o togliere) la scheda di un Comune obbliga a cambiare il segno «ha scheda»
// (ultimo campo, 0 → 1) dentro src/content/comuni-istat.json, un file di 560 KB su UNA riga. Farlo a mano
// o con strumenti che lavorano per righe/per intero file è rischioso. Questo script lo fa in modo preciso.
//
// Uso (dalla cartella frontend/):
//   node scripts/segna-scheda.js              mostra cosa cambierebbe (non scrive nulla)
//   node scripts/segna-scheda.js --scrivi     scrive il file comuni-istat.json allineato alle schede
//   node scripts/segna-scheda.js --coordinate [--scrivi]
//                                             aggiunge a coordinate-comuni.json i Comuni con scheda che mancano,
//                                             usando le coordinate del municipio già presenti nell'anagrafica
//
// Non cambia mai altro che il segno 0/1 (o le coordinate mancanti) e controlla che il file, riscritto senza
// modifiche, risulti identico all'originale: se non lo è, si ferma e non scrive nulla.
const fs = require("fs");
const path = require("path");
const L = require("./archivi-lib");

const args = process.argv.slice(2);
const SCRIVI = args.includes("--scrivi");
const COORD = args.includes("--coordinate");
const radice = L.FRONTEND;
const fAnag = path.join(radice, "src/content/comuni-istat.json");
const fCoord = path.join(radice, "src/content/coordinate-comuni.json");

const src = L.sorgenteDisco();
const originale = fs.readFileSync(fAnag, "utf8");
const voci = JSON.parse(originale);
if (JSON.stringify(voci) !== originale.trim()) {
  console.error("Il file comuni-istat.json non ha il formato atteso (una riga, senza spazi): mi fermo senza scrivere nulla.");
  process.exit(1);
}

const conScheda = new Set(L.caricaSchede(src).schede.filter((s) => s.tipo === "comune").map((s) => s.slug));
const daAccendere = [], daSpegnere = [];
for (const v of voci) {
  const deve = conScheda.has(v[6]) ? 1 : 0;
  if (v[7] !== deve) (deve ? daAccendere : daSpegnere).push(v[6]);
  v[7] = deve;
}
const sconosciute = [...conScheda].filter((s) => !voci.some((v) => v[6] === s));

console.log(`Schede Comune presenti: ${conScheda.size}`);
console.log(`«Ha scheda» da attivare: ${daAccendere.length}${daAccendere.length ? " → " + daAccendere.join(", ") : ""}`);
console.log(`«Ha scheda» da togliere: ${daSpegnere.length}${daSpegnere.length ? " → " + daSpegnere.join(", ") : ""}`);
if (sconosciute.length) console.log(`ATTENZIONE: schede senza Comune nell'anagrafica (slug da correggere): ${sconosciute.join(", ")}`);

if (COORD) {
  const coord = JSON.parse(fs.readFileSync(fCoord, "utf8"));
  const mancanti = [...conScheda].filter((s) => !coord[s]);
  const trovate = [], nonTrovate = [];
  for (const s of mancanti) {
    const v = voci.find((x) => x[6] === s);
    if (v) { coord[s] = [v[4], v[5]]; trovate.push(s); } else nonTrovate.push(s);
  }
  console.log(`Coordinate mancanti: ${mancanti.length}; prese dall'anagrafica: ${trovate.length}${trovate.length ? " → " + trovate.join(", ") : ""}${nonTrovate.length ? "; NON trovate: " + nonTrovate.join(", ") : ""}`);
  if (SCRIVI && trovate.length) fs.writeFileSync(fCoord, JSON.stringify(coord));
}

const nulla = !daAccendere.length && !daSpegnere.length;
if (sconosciute.length) process.exit(1);
if (nulla) { console.log("Anagrafica già allineata."); process.exit(0); }
if (!SCRIVI) { console.log("\n(prova: nessun file scritto. Aggiungi --scrivi per applicare.)"); process.exit(0); }
fs.writeFileSync(fAnag, JSON.stringify(voci));
console.log("\ncomuni-istat.json aggiornato. Esegui ora: node scripts/verifica-anagrafica.js");
