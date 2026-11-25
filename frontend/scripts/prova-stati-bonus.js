// Prova della regola dei tre stati dei bonus (attivo/aperto, in scadenza, scaduto) e dei dieci giorni.
// Uso: node frontend/scripts/prova-stati-bonus.js
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

const src = fs.readFileSync(path.join(__dirname, "../src/lib/bonus.ts"), "utf8")
  .replace('import { comune } from "@/src/config/comune";', 'const comune = { regione: "x", slug: "x" };');
const tmp = path.join(os.tmpdir(), "bonus-prova.ts");
fs.writeFileSync(tmp, src + `
const base = { id: "t", regione: "x", titolo: "t", perChi: "", cosa: "", comeSiChiede: "", fonte: { label: "", url: "" }, verificatoIl: "" };
const prova = (stato: any, scade: string | undefined, oggi: string) => {
  const r = conScadenza({ ...base, stato, scade } as any, new Date(oggi + "T12:00:00"));
  return r === null ? "nascosto" : r.stato;
};
const casi: [string, any, string | undefined, string, string][] = [
  ["attivo, 30 giorni prima", "attivo", "2026-12-31", "2026-12-01", "attivo"],
  ["attivo, 8 giorni prima", "attivo", "2026-12-31", "2026-12-23", "attivo"],
  ["attivo, 7 giorni prima", "attivo", "2026-12-31", "2026-12-24", "in-scadenza"],
  ["aperto, 1 giorno prima", "aperto", "2026-12-31", "2026-12-30", "in-scadenza"],
  ["aperto, ultimo giorno", "aperto", "2026-12-31", "2026-12-31", "in-scadenza"],
  ["aperto, giorno dopo", "aperto", "2026-12-31", "2027-01-01", "scaduto"],
  ["scaduto da 10 giorni", "aperto", "2026-12-31", "2027-01-10", "scaduto"],
  ["scaduto da 11 giorni", "aperto", "2026-12-31", "2027-01-11", "nascosto"],
  ["senza scadenza", "attivo", undefined, "2026-12-30", "attivo"],
  ["chiuso resta chiuso", "chiuso", "2026-12-31", "2026-12-30", "chiuso"],
  ["proroga: nuova data dopo 7 giorni", "aperto", "2027-01-31", "2026-12-30", "aperto"],
];
let errori = 0;
for (const [nome, stato, scade, oggi, atteso] of casi) {
  const got = prova(stato, scade, oggi);
  if (got !== atteso) { errori++; console.log("ERRORE", nome, "atteso", atteso, "ottenuto", got); } else console.log("ok  ", nome, "->", got);
}
if (errori) process.exit(1);
`);
execFileSync("node", ["--experimental-strip-types", "--no-warnings", tmp], { stdio: "inherit" });
