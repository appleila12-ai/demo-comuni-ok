#!/usr/bin/env node
// Applica una sostituzione puntuale, controllata, a una sola fonte del catalogo.
// Uso: node frontend/scripts/correggi-fonte-ocre.js --scrivi
// Senza --scrivi: verifica soltanto, senza modificare.
const fs = require("node:fs");
const path = require("node:path");
const file = path.join(__dirname, "../src/lib/bonus.ts");
const source = fs.readFileSync(file, "utf8");
const id = 'id: "ocre-vita-indipendente-2026"';
const start = source.indexOf(id);
if (start < 0 || source.indexOf(id, start + id.length) >= 0) throw Error("ID mancante o duplicato");
const next = source.indexOf("\n  },", start);
if (next < 0) throw Error("Fine record non trovata");
const oldUrl = "https://www.laquilablog.it/vita-indipendente-2026-montagna-aquilana/";
const newUrl = "https://www.unionecomunimontagnaaquilana.it/wp-content/uploads/2026/01/AVVISO-2026-Vita-indipendente.pdf";
const oldLabel = "L'Aquila Blog · Vita indipendente 2026, avviso Montagna Aquilana (10/01/2026)";
const newLabel = "Unione dei Comuni Montagna Aquilana · Avviso ufficiale Vita indipendente 2026 (09/01/2026)";
const record = source.slice(start, next);
if (!record.includes(oldUrl) || !record.includes(oldLabel) || !record.includes('stato: "chiuso"')) {
  throw Error("Record inatteso: nessuna modifica eseguita");
}
const revised = record.replace(oldUrl, newUrl).replace(oldLabel, newLabel);
if (revised === record) throw Error("Nessuna modifica");
if (process.argv.includes("--scrivi")) {
  fs.writeFileSync(file, source.slice(0, start) + revised + source.slice(next), "utf8");
  console.log("Fonte ufficiale Ocre sostituita; stato chiuso conservato");
} else {
  console.log("Controllo OK: sostituzione puntuale pronta, eseguire con --scrivi");
}
