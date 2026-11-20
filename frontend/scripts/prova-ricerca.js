// Prova della casella «Di cosa hai bisogno?» con ricerche vere (frontend/scripts/ricerca-prove.json).
// Uso (solo Node 22, nessuna installazione):  node frontend/scripts/prova-ricerca.js
// Per ogni ricerca verifica che esca almeno una risposta e, se indicata, che la pagina attesa sia tra le prime 3.
// Prova le risposte fisse dell'app (src/lib/ricerca.ts); bonus, associazioni e FAQ dei singoli Comuni non sono inclusi.
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const radice = path.join(__dirname, "..");
const prove = JSON.parse(fs.readFileSync(path.join(__dirname, "ricerca-prove.json"), "utf8"));

let sorgente = fs.readFileSync(path.join(radice, "src/lib/ricerca.ts"), "utf8").replace(/^import .*$/gm, "");
const finti =
  'const CONTENUTI_BASE:any={faq:[],glossario:[]};const comune:any={slug:"prova",regione:"prova"};const LETTERE:any[]=[];\n' +
  "const bonusDelComune=()=>({locali:[],regionali:[],nazionali:[]});const lavoroDelComune=()=>({locali:[],regionali:[],nazionali:[]});\n" +
  "const associazioniDelComune=()=>({});const getHelpCards=(_:any)=>[];const AREE:any[]=[];\n";

const cartella = fs.mkdtempSync(path.join(os.tmpdir(), "prova-ricerca-"));
fs.writeFileSync(path.join(cartella, "r.ts"), finti + sorgente);
fs.writeFileSync(
  path.join(cartella, "run.mjs"),
  `import { cerca } from "./r.ts";
const prove = JSON.parse(process.argv[2]);
const errori = [];
for (const p of prove) {
  const ids = cerca(p.q).map((x) => x.id);
  if (!ids.length) errori.push('"' + p.q + '": nessuna risposta');
  else if (p.primo && !ids.slice(0, 3).includes(p.primo)) errori.push('"' + p.q + '": atteso ' + p.primo + ", uscito " + ids.slice(0, 3).join(", "));
}
console.log(errori.length ? "Ricerche con problemi:\\n - " + errori.join("\\n - ") : "Ricerca: " + prove.length + " prove superate.");
process.exit(errori.length ? 1 : 0);
`,
);
const r = spawnSync(process.execPath, ["--experimental-strip-types", "--no-warnings", path.join(cartella, "run.mjs"), JSON.stringify(prove)], { encoding: "utf8" });
fs.rmSync(cartella, { recursive: true, force: true });
process.stdout.write(r.stdout || "");
process.stderr.write(r.stderr || "");
process.exit(r.status === null ? 1 : r.status);
