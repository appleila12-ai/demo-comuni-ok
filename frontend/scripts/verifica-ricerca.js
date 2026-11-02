// Controlla che ogni schermata dell'app si possa trovare dalla casella "Di cosa hai bisogno?".
// Uso: node scripts/verifica-ricerca.js   (esce con errore se manca una schermata)
const fs = require("fs");
const path = require("path");

// Schermate che non si cercano: tecniche, riservate al team o pagine di rinvio.
const ESCLUSE = new Set([
  "+html", "_layout", "index", "[comune]", "cittadino", "contatti",
  "cruscotto", "sentinella", "test-pdf", "per-i-comuni", "risultati",
]);

const radice = path.join(__dirname, "..");
const schermate = [];
(function leggi(dir, prefisso) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.isDirectory()) leggi(path.join(dir, f.name), prefisso + f.name + "/");
    else if (/\.tsx?$/.test(f.name)) schermate.push((prefisso + f.name).replace(/\.tsx?$/, ""));
  }
})(path.join(radice, "app"), "");

const ricerca = fs.readFileSync(path.join(radice, "src/lib/ricerca.ts"), "utf8");
const mancanti = schermate.filter((s) => {
  if (ESCLUSE.has(s.split("/")[0])) return false;
  return !new RegExp(`route: \`?"?/${s}(["?\`&])`).test(ricerca);
});

if (mancanti.length) {
  console.error("Schermate NON collegate alla ricerca:\n - " + mancanti.join("\n - "));
  console.error("\nAggiungi una voce in src/lib/ricerca.ts (oppure, se è una pagina tecnica, in ESCLUSE qui sopra).");
  process.exit(1);
}
console.log(`Ricerca completa: ${schermate.length - ESCLUSE.size} schermate collegate.`);
