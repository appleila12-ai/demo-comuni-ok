// Costruisce l'anagrafica nazionale dei Comuni (src/content/comuni-istat.json).
// Uso:  node scripts/costruisci-anagrafica.js /percorso/di/main.csv
//
// Fonte: file main.csv del repository opendatasicilia/comuni-italiani (codici ISTAT,
// coordinate del municipio, sito web da IndicePA). Il file di partenza è del 25/10/2025:
// va riconfrontato con l'elenco ufficiale ISTAT più recente (fusioni e cambi di sigla).
//
// Cosa fa:
//  1. legge i Comuni e controlla i codici ISTAT (6 cifre, unici);
//  2. corregge le coordinate con il punto decimale perso e le controlla una per una;
//  3. allinea i nomi delle regioni a quelli usati dall'app;
//  4. collega ogni scheda già presente nell'app (cartella src/config/comuni) al suo codice ISTAT;
//  5. assegna a ogni Comune uno slug unico (quelli delle schede esistenti non cambiano).
//
// Formato di ogni voce del file JSON (array, per tenere il file piccolo):
//   [0] codice ISTAT (6 cifre, testo)   [1] nome   [2] sigla provincia   [3] regione (nome dell'app)
//   [4] latitudine   [5] longitudine    [6] slug
//   [7] 1 se esiste già una scheda dell'app, 0 se è solo nell'elenco
// Il sito web del Comune (presente nel file di partenza, da IndicePA) NON si copia: sono indirizzi
// non verificati, quasi tutti vecchi "http://". Compare in app solo dove è stato controllato a mano.
const fs = require("fs");
const path = require("path");

const radice = path.join(__dirname, "..");
const sorgente = process.argv[2];
if (!sorgente) {
  console.error("Uso: node scripts/costruisci-anagrafica.js /percorso/di/main.csv");
  process.exit(1);
}

// ---------- lettura CSV (con virgolette) ----------
function leggiCsv(testo) {
  const righe = [];
  let campo = "", riga = [], dentro = false;
  for (let i = 0; i < testo.length; i++) {
    const c = testo[i];
    if (dentro) {
      if (c === '"' && testo[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') dentro = false;
      else campo += c;
    } else if (c === '"') dentro = true;
    else if (c === ",") { riga.push(campo); campo = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && testo[i + 1] === "\n") i++;
      riga.push(campo); campo = "";
      if (riga.length > 1 || riga[0] !== "") righe.push(riga);
      riga = [];
    } else campo += c;
  }
  if (campo !== "" || riga.length) { riga.push(campo); righe.push(riga); }
  const [intest, ...dati] = righe;
  return dati.map((r) => Object.fromEntries(intest.map((h, i) => [h, r[i] ?? ""])));
}

const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const slugDi = (s) => norm(s).replace(/ /g, "-");

const REGIONI_APP = {
  "Trentino-Alto Adige/Südtirol": "Trentino-Alto Adige",
  "Valle d'Aosta/Vallée d'Aoste": "Valle d'Aosta",
};
const REGIONI_VALIDE = new Set([
  "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia",
  "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna",
  "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto",
]);

const righe = leggiCsv(fs.readFileSync(sorgente, "utf8"));
// Coordinate sbagliate nel file di partenza che i controlli automatici non vedono (il punto cade in un altro
// Comune): corrette a mano e controllate sui Comuni confinanti.
const CORREZIONI_COORDINATE = {
  // nel file ha le coordinate di Roma; il Comune (LT) sta accanto a Castelforte (41.299, 13.824)
  "059026": { lat: 41.275, long: 13.85, nota: "Santi Cosma e Damiano (LT): aveva le coordinate di Roma" },
};
for (const r of righe) {
  const c = CORREZIONI_COORDINATE[r.pro_com_t];
  if (c) { r.lat = String(c.lat); r.long = String(c.long); }
}
const rapporto = { coordinateCorrette: [], coordinateDaControllare: [] };

// ---------- 1. codici ----------
const ids = new Set();
for (const r of righe) {
  if (!/^\d{6}$/.test(r.pro_com_t)) throw new Error(`Codice ISTAT non valido: ${r.comune} ${r.pro_com_t}`);
  if (ids.has(r.pro_com_t)) throw new Error(`Codice ISTAT doppio: ${r.pro_com_t}`);
  ids.add(r.pro_com_t);
}

// ---------- 2. coordinate ----------
const inItalia = (lat, lon) => lat > 35.4 && lat < 47.2 && lon > 6.5 && lon < 18.7;
// Corregge un numero senza punto decimale ("8339" -> 8.339) provando le posizioni possibili.
function ripristina(testo, controllo) {
  if (testo.includes(".")) return Number(testo);
  const cifre = testo.replace(/\D/g, "");
  for (const k of [1, 2]) {
    const v = Number(cifre.slice(0, k) + "." + cifre.slice(k));
    if (controllo(v)) return v;
  }
  return NaN;
}
for (const r of righe) {
  let lat = Number(r.lat), lon = Number(r.long);
  const rotte = !r.lat.includes(".") || !r.long.includes(".") || !inItalia(lat, lon);
  if (rotte) {
    const originale = `${r.lat}, ${r.long}`;
    lat = ripristina(r.lat, (v) => v > 35.4 && v < 47.2);
    lon = ripristina(r.long, (v) => v > 6.5 && v < 18.7);
    r._corretta = originale;
  }
  r._lat = lat; r._lon = lon;
}
// Controllo di vicinanza alla provincia (mediana delle coordinate buone della stessa sigla)
const mediana = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
const perProv = {};
for (const r of righe) if (!r._corretta && inItalia(r._lat, r._lon)) (perProv[r.sigla] ||= []).push(r);
const centri = Object.fromEntries(
  Object.entries(perProv).map(([s, v]) => [s, [mediana(v.map((x) => x._lat)), mediana(v.map((x) => x._lon))]])
);
function km(a, b) {
  const q = Math.PI / 180, dl = (b[0] - a[0]) * q, dn = (b[1] - a[1]) * q;
  const h = Math.sin(dl / 2) ** 2 + Math.cos(a[0] * q) * Math.cos(b[0] * q) * Math.sin(dn / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}
for (const r of righe) {
  if (!inItalia(r._lat, r._lon)) throw new Error(`Coordinate non valide: ${r.comune} ${r.lat} ${r.long}`);
  const c = centri[r.sigla];
  const d = c ? km(c, [r._lat, r._lon]) : 0;
  if (r._corretta) rapporto.coordinateCorrette.push(`${r.comune} (${r.sigla}): "${r._corretta}" -> ${r._lat}, ${r._lon} · a ${Math.round(d)} km dal centro della provincia`);
  else if (d > 120) rapporto.coordinateDaControllare.push(`${r.comune} (${r.sigla}): ${r._lat}, ${r._lon} · a ${Math.round(d)} km dal centro della provincia`);
}

// ---------- 3-4. schede esistenti ----------
const base = path.join(radice, "src/config/comuni");
const fileSchede = ["sarzana", "erba", "vigne-e-vini", "ventimiglia", "mediglia"].map((f) => path.join(base, f + ".ts"))
  .concat(fs.readdirSync(path.join(base, "demo")).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => path.join(base, "demo", f)));
const campo = (t, k) => (t.match(new RegExp("^\\s*" + k + ':\\s*"((?:[^"\\\\]|\\\\.)*)"', "m")) || [])[1];
const schede = fileSchede.map((f) => {
  const t = fs.readFileSync(f, "utf8");
  const paesi = [...((t.match(/paesi:\s*\[([\s\S]*?)\n\s*\],/) || [])[1] || "").matchAll(/nome:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
  return { slug: campo(t, "slug"), tipo: campo(t, "tipo"), nomeBreve: campo(t, "nomeBreve"), sigla: campo(t, "provincia"), paesi };
});

// Casi in cui il nome della scheda è diverso da quello ISTAT (controllati a mano sull'elenco)
const NOMI_DIVERSI = {
  portovenere: "Portovenere",
  "ricco-del-golfo": "Riccò del Golfo di Spezia",
  "reggio-calabria": "Reggio di Calabria",
  "reggio-emilia": "Reggio nell'Emilia",
};
const perNome = new Map();
for (const r of righe) perNome.set(norm(r.comune) + "|" + r.sigla, r);
const slugGiaScheda = new Map(); // istat -> slug
const unioni = [];
for (const s of schede) {
  if (s.tipo === "unione") { unioni.push(s); continue; }
  const nome = NOMI_DIVERSI[s.slug] || s.nomeBreve;
  const r = perNome.get(norm(nome) + "|" + s.sigla);
  if (!r) throw new Error(`Scheda senza Comune ISTAT: ${s.slug} (${nome}, ${s.sigla})`);
  if (slugGiaScheda.has(r.pro_com_t)) throw new Error(`Due schede per lo stesso Comune: ${r.comune}`);
  slugGiaScheda.set(r.pro_com_t, s.slug);
}
// I Comuni che fanno parte di un'Unione si trovano già cercando l'Unione: non si ripetono come voci a sé.
const inUnione = new Set();
for (const u of unioni) for (const p of u.paesi) {
  const r = perNome.get(norm(p) + "|" + u.sigla);
  if (r) inUnione.add(r.pro_com_t);
  else rapporto.paesiUnioneNonTrovati = [...(rapporto.paesiUnioneNonTrovati || []), `${p} (${u.slug})`];
}

// ---------- 5. slug ----------
const slugUsati = new Set(schede.map((s) => s.slug));
const ROTTE = new Set(fs.readdirSync(path.join(radice, "app")).map((f) => f.replace(/\.tsx?$/, "")).concat(["index", "comuni", "per-i-comuni", "risultati"]));
const nomiConteggio = {};
for (const r of righe) nomiConteggio[slugDi(r.comune)] = (nomiConteggio[slugDi(r.comune)] || 0) + 1;

const out = [];
for (const r of righe.sort((a, b) => a.pro_com_t.localeCompare(b.pro_com_t))) {
  if (inUnione.has(r.pro_com_t) && !slugGiaScheda.has(r.pro_com_t)) continue;
  const regione = REGIONI_APP[r.den_reg] || r.den_reg;
  if (!REGIONI_VALIDE.has(regione)) throw new Error(`Regione sconosciuta: ${r.den_reg}`);
  let slug = slugGiaScheda.get(r.pro_com_t);
  if (!slug) {
    slug = slugDi(r.comune);
    if (nomiConteggio[slug] > 1 || slugUsati.has(slug) || ROTTE.has(slug)) slug += "-" + r.sigla.toLowerCase();
    if (slugUsati.has(slug)) throw new Error(`Slug già usato: ${slug}`);
    slugUsati.add(slug);
  }
  out.push([r.pro_com_t, r.comune, r.sigla, regione, Number(r._lat.toFixed(4)), Number(r._lon.toFixed(4)), slug, slugGiaScheda.has(r.pro_com_t) ? 1 : 0]);
}

fs.writeFileSync(path.join(radice, "src/content/comuni-istat.json"), JSON.stringify(out));
const conScheda = out.filter((v) => v[7]).length;
console.log(`Comuni nel file: ${out.length} (con scheda già nell'app: ${conScheda}; solo elenco: ${out.length - conScheda})`);
console.log(`Escluse perché fanno parte di un'Unione con scheda propria: ${inUnione.size - [...inUnione].filter((i) => slugGiaScheda.has(i)).length}`);
console.log("\nCoordinate corrette:\n - " + rapporto.coordinateCorrette.join("\n - "));
console.log("\nCoordinate lontane dal centro della provincia (>120 km), da guardare:\n - " + (rapporto.coordinateDaControllare.join("\n - ") || "nessuna"));
if (rapporto.paesiUnioneNonTrovati) console.log("\nComuni di Unioni non trovati nell'elenco:\n - " + rapporto.paesiUnioneNonTrovati.join("\n - "));
