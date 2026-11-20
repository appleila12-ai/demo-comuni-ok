// Controlla l'anagrafica nazionale dei Comuni (src/content/comuni-istat.json).
// Uso: node scripts/verifica-anagrafica.js   (esce con errore se qualcosa non torna)
const fs = require("fs");
const path = require("path");

const radice = path.join(__dirname, "..");
const dati = JSON.parse(fs.readFileSync(path.join(radice, "src/content/comuni-istat.json"), "utf8"));
const errori = [];
const err = (m) => errori.push(m);

const REGIONI = new Set([
  "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia",
  "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna",
  "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto",
]);
const ROTTE = new Set(
  fs.readdirSync(path.join(radice, "app")).map((f) => f.replace(/\.tsx?$/, "")).concat(["index", "comuni", "per-i-comuni", "risultati"])
);

// ---- struttura e unicità
const istat = new Set(), slugs = new Set();
for (const v of dati) {
  const [id, nome, sigla, regione, lat, lon, slug, scheda] = v;
  if (v.length !== 8) { err(`Voce con ${v.length} campi: ${id}`); continue; }
  if (!/^\d{6}$/.test(id)) err(`Codice ISTAT non valido: ${id} (${nome})`);
  if (istat.has(id)) err(`Codice ISTAT doppio: ${id}`);
  istat.add(id);
  if (!nome) err(`Nome vuoto: ${id}`);
  if (!/^[A-Z]{2}$/.test(sigla)) err(`Sigla non valida: ${nome} ${sigla}`);
  if (!REGIONI.has(regione)) err(`Regione non valida: ${nome} ${regione}`);
  if (!(typeof lat === "number" && lat > 35.4 && lat < 47.2 && typeof lon === "number" && lon > 6.5 && lon < 18.7)) err(`Coordinate fuori dall'Italia: ${nome} ${lat}, ${lon}`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) err(`Slug non valido: ${slug}`);
  if (slugs.has(slug)) err(`Slug doppio: ${slug}`);
  slugs.add(slug);
  if (!scheda && ROTTE.has(slug)) err(`Slug uguale a una pagina dell'app: ${slug}`);
  if (scheda !== 0 && scheda !== 1) err(`Campo scheda non valido: ${nome}`);
}

// ---- schede esistenti: ognuna (tranne le Unioni) deve essere collegata a un Comune dell'elenco
const base = path.join(radice, "src/config/comuni");
const file = ["sarzana", "erba", "vigne-e-vini", "ventimiglia", "mediglia"].map((f) => path.join(base, f + ".ts"))
  .concat(fs.readdirSync(path.join(base, "demo")).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => path.join(base, "demo", f)));
const campo = (t, k) => (t.match(new RegExp("^\\s*" + k + ':\\s*"((?:[^"\\\\]|\\\\.)*)"', "m")) || [])[1];
const conScheda = new Set(dati.filter((v) => v[7] === 1).map((v) => v[6]));
let singole = 0;
for (const f of file) {
  const t = fs.readFileSync(f, "utf8");
  const slug = campo(t, "slug"), tipo = campo(t, "tipo");
  if (tipo === "unione") continue;
  singole++;
  if (!conScheda.has(slug)) err(`Scheda senza Comune nell'anagrafica: ${slug}`);
}
if (singole !== conScheda.size) err(`Schede singole ${singole} ≠ voci con scheda ${conScheda.size}`);

if (errori.length) {
  console.error("Anagrafica NON valida:\n - " + errori.slice(0, 40).join("\n - ") + (errori.length > 40 ? `\n ... e altri ${errori.length - 40}` : ""));
  process.exit(1);
}
console.log(`Anagrafica valida: ${dati.length} Comuni (${conScheda.size} con scheda propria, ${dati.length - conScheda.size} solo nell'elenco).`);
