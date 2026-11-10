// Lettura degli archivi territoriali di TutelApp con Node puro: nessuna dipendenza, nessun build.
// Serve a controlla-dati.js e indice-archivi.js. NON modifica mai nessun file.
//
// Perché esiste: i dati stanno in file TypeScript grandi (bonus.ts, associazioni.ts, un file per Comune).
// Questa libreria li legge "come testo", estrae gli elenchi e restituisce anche la riga di ogni voce,
// così chi corregge sa dove andare. Funziona sia sul disco sia su un ramo git (per i confronti).
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const FRONTEND = path.join(__dirname, "..");
const REPO = path.join(FRONTEND, "..");

const REGIONI = [
  "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia",
  "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna",
  "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto",
];

// ------------------------------------------------------------------ sorgenti
/** Legge i file dal disco (la cartella frontend/ del repository). */
function sorgenteDisco(frontend = FRONTEND) {
  return {
    nome: "disco",
    leggi: (rel) => {
      const p = path.join(frontend, rel);
      return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
    },
    elenca: (rel) => {
      const p = path.join(frontend, rel);
      return fs.existsSync(p) ? fs.readdirSync(p) : [];
    },
  };
}

/** Legge i file come erano in un ramo git (es. origin/main), senza toccare il disco. */
function sorgenteGit(ref) {
  const git = (args) =>
    execFileSync("git", args, { cwd: REPO, encoding: "utf8", maxBuffer: 128 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] });
  return {
    nome: "git:" + ref,
    leggi: (rel) => {
      try { return git(["show", `${ref}:frontend/${rel}`]); } catch { return null; }
    },
    elenca: (rel) => {
      try { return git(["ls-tree", "--name-only", `${ref}:frontend/${rel}`]).split("\n").filter(Boolean); } catch { return []; }
    },
  };
}

// ------------------------------------------------------------------ scansione del testo
/** Percorre il testo saltando stringhe e commenti: restituisce [posizione, carattere] del solo codice. */
function* codice(testo, da = 0) {
  let inStr = null, esc = false, riga = false, blocco = false;
  for (let j = da; j < testo.length; j++) {
    const c = testo[j], n = testo[j + 1];
    if (riga) { if (c === "\n") riga = false; continue; }
    if (blocco) { if (c === "*" && n === "/") { blocco = false; j++; } continue; }
    if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === inStr) inStr = null; continue; }
    if (c === "/" && n === "/") { riga = true; continue; }
    if (c === "/" && n === "*") { blocco = true; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    yield [j, c];
  }
}

const rigaDi = (testo, pos) => {
  let r = 1;
  for (let i = 0; i < pos && i < testo.length; i++) if (testo.charCodeAt(i) === 10) r++;
  return r;
};

/** Dal marcatore (es. "export const BONUS: Bonus[]") al literal [...] o {...} che segue il "=". */
function estraiLiterale(testo, marcatore) {
  const i = testo.indexOf(marcatore);
  if (i < 0) throw new Error(`non trovo "${marcatore}"`);
  let k = testo.indexOf("=", i) + 1;
  while (/\s/.test(testo[k])) k++;
  const apri = testo[k], chiudi = apri === "[" ? "]" : apri === "{" ? "}" : null;
  if (!chiudi) throw new Error(`dopo "${marcatore}" non c'è un elenco [...] o un oggetto {...}`);
  let prof = 0;
  for (const [j, c] of codice(testo, k)) {
    if (c === apri) prof++;
    else if (c === chiudi) { prof--; if (prof === 0) return { src: testo.slice(k, j + 1), inizio: k }; }
  }
  throw new Error(`"${marcatore}": parentesi non chiusa`);
}

/** Gli oggetti {...} di primo livello dentro un elenco [...], con la loro riga. */
function elementiOggetto(literale, testoCompleto) {
  const out = [];
  let prof = 0, ini = -1;
  for (const [j, c] of codice(literale.src)) {
    if (c === "[" || c === "{" || c === "(") {
      prof++;
      if (c === "{" && prof === 2) ini = j;
    } else if (c === "]" || c === "}" || c === ")") {
      if (c === "}" && prof === 2 && ini >= 0) {
        out.push({ src: literale.src.slice(ini, j + 1), riga: rigaDi(testoCompleto, literale.inizio + ini) });
        ini = -1;
      }
      prof--;
    }
  }
  return out;
}

const valuta = (src) => vm.runInNewContext("(" + src + ")", Object.create(null), { timeout: 5000 });

const stringhe = (t) => [...(t || "").matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
const campoTesto = (t, k) => (t.match(new RegExp("^\\s*" + k + ':\\s*"((?:[^"\\\\]|\\\\.)*)"', "m")) || [])[1];

// ------------------------------------------------------------------ bonus
function caricaBonus(src) {
  const t = src.leggi("src/lib/bonus.ts");
  if (t == null) return { voci: [], problemi: [{ riga: 0, msg: "src/lib/bonus.ts non trovato" }] };
  const voci = [], problemi = [];
  try {
    const lit = estraiLiterale(t, "export const BONUS: Bonus[]");
    for (const el of elementiOggetto(lit, t)) {
      try { voci.push({ ...valuta(el.src), _riga: el.riga }); }
      catch (e) { problemi.push({ riga: el.riga, msg: "voce non leggibile: " + e.message.slice(0, 100) }); }
    }
  } catch (e) { problemi.push({ riga: 0, msg: "bonus.ts: " + e.message }); }
  return { voci, problemi };
}

// ------------------------------------------------------------------ anagrafica e coordinate
function caricaAnagrafica(src) {
  const t = src.leggi("src/content/comuni-istat.json");
  if (t == null) return { voci: [], slugs: new Set() };
  const voci = JSON.parse(t); // [istat, nome, sigla, regione, lat, lon, slug, conScheda]
  return { voci, slugs: new Set(voci.map((v) => v[6])) };
}

function caricaCoordinate(src) {
  const t = src.leggi("src/content/coordinate-comuni.json");
  return t ? JSON.parse(t) : {};
}

// ------------------------------------------------------------------ schede dei Comuni
const SCHEDE_PRINCIPALI = ["sarzana", "erba", "vigne-e-vini", "ventimiglia", "mediglia"];

function leggiScheda(t, file, cartella) {
  return {
    file, cartella,
    id: (t.match(/export const (\w+)\s*:\s*ComuneConfig/) || [])[1],
    slug: campoTesto(t, "slug"),
    tipo: campoTesto(t, "tipo"),
    nome: campoTesto(t, "nome"),
    provincia: campoTesto(t, "provincia"),
    regione: campoTesto(t, "regione"),
    email: campoTesto(t, "email") || "",
    pec: campoTesto(t, "pec") || "",
    telefono: campoTesto(t, "telefono") || "",
    indirizzo: campoTesto(t, "indirizzo") || "",
    orari: campoTesto(t, "orari") || "",
    sitoWeb: campoTesto(t, "sitoWeb") || "",
    dimostrativo: /^\s*dimostrativo:\s*true/m.test(t),
    daVerificare: /^\s*daVerificare:\s*true/m.test(t),
    byte: Buffer.byteLength(t),
  };
}

function caricaSchede(src) {
  const schede = [], problemi = [];
  for (const f of src.elenca("src/config/comuni")) {
    if (!f.endsWith(".ts") || ["_modello.ts", "anagrafica.ts", "destinatari.ts", "index.ts", "percorso.ts", "types.ts"].includes(f)) continue;
    const t = src.leggi("src/config/comuni/" + f);
    if (t != null) schede.push(leggiScheda(t, f, "comuni"));
  }
  for (const f of src.elenca("src/config/comuni/demo")) {
    if (!f.endsWith(".ts") || f === "index.ts") continue;
    const t = src.leggi("src/config/comuni/demo/" + f);
    if (t != null) schede.push(leggiScheda(t, f, "demo"));
  }
  // registrazione dei Comuni demo in demo/index.ts: import + elenco COMUNI_DEMO
  const idx = src.leggi("src/config/comuni/demo/index.ts");
  const registrazione = { importati: new Map(), inElenco: new Set(), ok: false };
  if (idx != null) {
    for (const m of idx.matchAll(/import \{ (\w+) \} from "\.\/([^"]+)";/g)) registrazione.importati.set(m[2], m[1]);
    try {
      const lit = estraiLiterale(idx, "export const COMUNI_DEMO");
      const senzaCommenti = lit.src.replace(/\/\/.*$/gm, "");
      for (const m of senzaCommenti.matchAll(/[A-Za-z_]\w*/g)) registrazione.inElenco.add(m[0]);
      registrazione.ok = true;
    } catch (e) { problemi.push({ riga: 0, msg: "demo/index.ts: " + e.message }); }
  } else problemi.push({ riga: 0, msg: "src/config/comuni/demo/index.ts non trovato" });
  return { schede, registrazione, problemi };
}

// ------------------------------------------------------------------ destinatari ("Scrivi al tuo Comune")
function caricaDestinatari(src) {
  const t = src.leggi("src/config/comuni/destinatari.ts");
  if (t == null) return { voci: {}, problemi: [{ riga: 0, msg: "destinatari.ts non trovato" }] };
  try { return { voci: valuta(estraiLiterale(t, "export const DESTINATARI").src), problemi: [] }; }
  catch (e) { return { voci: {}, problemi: [{ riga: 0, msg: "destinatari.ts: " + e.message }] }; }
}

// ------------------------------------------------------------------ associazioni
// associazioni.ts mescola dati e codice (unshift, cicli for): non si può "valutare" tutto il file.
// Si cercano quindi tutti gli oggetti che hanno la chiave `nome:` e se ne leggono i campi.
function caricaAssociazioni(src) {
  const t = src.leggi("src/lib/associazioni.ts");
  if (t == null) return { voci: [], problemi: [{ riga: 0, msg: "src/lib/associazioni.ts non trovato" }] };
  const grezzi = [], pila = [];
  let prev = "";
  for (const [j, c] of codice(t)) {
    if (c === "{") pila.push({ inizio: j, nome: false });
    else if (c === "}") {
      const o = pila.pop();
      if (o && o.nome) grezzi.push({ src: t.slice(o.inizio, j + 1), riga: rigaDi(t, o.inizio) });
    } else if (c === "n" && pila.length && (prev === "{" || prev === ",") && /^nome\s*:\s*["'`]/.test(t.slice(j, j + 40))) {
      // solo `nome: "testo"`: esclude la definizione di tipo (`nome: string;`)
      pila[pila.length - 1].nome = true;
    }
    if (!/\s/.test(c)) prev = c;
  }
  const voci = [];
  for (const g of grezzi) {
    let o;
    try { o = valuta(g.src); }
    catch { // contiene riferimenti a variabili (es. ...GAZEBO): lettura per campi
      o = {
        nome: campoTesto(g.src, "nome"),
        telefono: campoTesto(g.src, "telefono"),
        email: campoTesto(g.src, "email"),
        sito: campoTesto(g.src, "sito"),
        cosa: campoTesto(g.src, "cosa"),
        dove: campoTesto(g.src, "dove"),
        comuni: stringhe((g.src.match(/comuni:\s*\[([^\]]*)\]/) || [])[1]),
        province: stringhe((g.src.match(/province:\s*\[([^\]]*)\]/) || [])[1]),
        _approssimata: true,
      };
    }
    voci.push({ ...o, _riga: g.riga });
  }
  return { voci, problemi: [] };
}

// ------------------------------------------------------------------ utilità comuni
const EMAIL = /^[^\s@,;]+@[^\s@,;]+\.[A-Za-z]{2,}$/;
const dataIt = (s) => {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s || "");
  if (!m) return null;
  const d = new Date(Date.UTC(+m[3], +m[2] - 1, +m[1]));
  return d.getUTCDate() === +m[1] && d.getUTCMonth() === +m[2] - 1 ? d : null;
};
/** Tutte le date gg/mm/aaaa scritte in un testo libero. */
const dateNelTesto = (s) => [...(s || "").matchAll(/\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g)]
  .map((m) => dataIt(`${m[1].padStart(2, "0")}/${m[2].padStart(2, "0")}/${m[3]}`)).filter(Boolean);
const giorniTra = (a, b) => Math.round((a - b) / 86400000);

module.exports = {
  FRONTEND, REPO, REGIONI, SCHEDE_PRINCIPALI, EMAIL,
  sorgenteDisco, sorgenteGit,
  caricaBonus, caricaAnagrafica, caricaCoordinate, caricaSchede, caricaDestinatari, caricaAssociazioni,
  dataIt, dateNelTesto, giorniTra,
};
