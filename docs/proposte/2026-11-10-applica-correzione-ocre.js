#!/usr/bin/env node
// Eseguire dalla radice del repository: node docs/proposte/2026-11-10-applica-correzione-ocre.js [--scrivi]
// Senza --scrivi: solo controllo, nessuna modifica.
const fs = require("node:fs");
const path = require("node:path");
const file = path.resolve(__dirname, "../../frontend/src/lib/bonus.ts");
let data = fs.readFileSync(file, "utf8");
const marker = 'id: "ocre-vita-indipendente-2026"';
const pos = data.indexOf(marker);
if (pos === -1 || data.indexOf(marker, pos + marker.length) !== -1) throw Error("ID assente o duplicato");
const end = data.indexOf("\n  },", pos);
if (end === -1) throw Error("Record non delimitato");
let record = data.slice(pos, end);
const changes = [
  ["L'Aquila Blog · Vita indipendente 2026, avviso Montagna Aquilana (10/01/2026)", "Unione dei Comuni Montagna Aquilana · Avviso ufficiale Vita indipendente 2026 (09/01/2026)"],
  ["https://www.laquilablog.it/vita-indipendente-2026-montagna-aquilana/", "https://www.unionecomunimontagnaaquilana.it/wp-content/uploads/2026/01/AVVISO-2026-Vita-indipendente.pdf"],
  ["L'articolo non scrive gli importi.", "L'avviso ufficiale prevede importi massimi annuali in base al livello di bisogno assistenziale; consultare il PDF per gli importi e i requisiti."],
  ["(secondo la fonte che abbiamo letto, Ocre è incluso)", "(Ocre è incluso nell'Ambito n. 5)"],
  ["Fonte giornalistica: chiedi al Comune di Ocre o all'Unione Montana se è previsto un nuovo avviso.", "Fonte istituzionale: avviso 2026 dell'Unione. Finestra di domanda scaduta il 31/01/2026; eventuali nuove finestre da verificare con l'ente."],
  ['verificatoIl: "12/10/2026"', 'verificatoIl: "10/11/2026"']
];
if (!record.includes('stato: "chiuso"')) throw Error("Lo stato non è quello atteso");
for (const [oldValue, newValue] of changes) {
  if (record.split(oldValue).length !== 2) throw Error("Testo mancante o duplicato: " + oldValue);
  record = record.replace(oldValue, newValue);
}
if (process.argv.includes("--scrivi")) {
  data = data.slice(0, pos) + record + data.slice(end);
  fs.writeFileSync(file, data, "utf8");
  console.log("Correzione Ocre applicata. Eseguire: node frontend/scripts/controlla-dati.js");
} else {
  console.log("Verifica superata: 6 sostituzioni circoscritte pronte, file NON modificato.");
}
