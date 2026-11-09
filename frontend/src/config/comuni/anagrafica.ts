// ============================================================================
// ANAGRAFICA NAZIONALE — tutti i Comuni italiani (elenco ISTAT).
// ----------------------------------------------------------------------------
// Il file `src/content/comuni-istat.json` si costruisce con
// `node scripts/costruisci-anagrafica.js <main.csv>` (vedi ANAGRAFICA-COMUNI.md).
// Ogni Comune dell'elenco si può cercare e scegliere. Chi non ha una scheda propria
// (cartella `comuni/`) riceve qui una scheda MINIMA e onesta: versione dimostrativa,
// nessun recapito, nessun servizio. Non si attribuisce mai a un Comune ciò che non è verificato.
// ============================================================================

import type { ComuneConfig } from "./types";

export type VoceAnagrafica = {
  /** Codice ISTAT a 6 cifre (testo): identificativo stabile del Comune */
  istat: string;
  nome: string;
  /** Sigla della provincia */
  sigla: string;
  /** Regione, col nome usato in tutta l'app */
  regione: string;
  /** Coordinate del municipio (WGS84) */
  lat: number;
  lon: number;
  /** Indirizzo leggibile del Comune nell'app (es. /sarzana) */
  slug: string;
  /** true se il Comune ha già una scheda propria nella cartella `comuni/` */
  conScheda: boolean;
};

type Grezza = [string, string, string, string, number, number, string, number];

let TUTTI: VoceAnagrafica[] | null = null;
let NORMALIZZATI: string[] = [];
let PER_SLUG: Map<string, VoceAnagrafica> | null = null;

/** Minuscolo e senza accenti/apostrofi, per confrontare i nomi. */
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’`.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** L'elenco si legge solo la prima volta che serve (non all'avvio dell'app). */
export function anagrafica(): VoceAnagrafica[] {
  if (!TUTTI) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const grezzo = require("../../content/comuni-istat.json") as Grezza[];
    TUTTI = grezzo.map(([istat, nome, sigla, regione, lat, lon, slug, scheda]) => ({
      istat,
      nome,
      sigla,
      regione,
      lat,
      lon,
      slug,
      conScheda: scheda === 1,
    }));
    NORMALIZZATI = TUTTI.map((v) => norm(v.nome));
    PER_SLUG = new Map(TUTTI.map((v) => [v.slug, v]));
  }
  return TUTTI;
}

export function voceDaSlug(slug: string): VoceAnagrafica | undefined {
  anagrafica();
  return PER_SLUG!.get(slug);
}

/**
 * Cerca per nome tra i Comuni che NON hanno una scheda propria (gli altri si trovano
 * già nell'elenco delle schede). Prima chi inizia col testo scritto, poi gli altri.
 * Si scrive anche la sigla della provincia (es. "TO") per vedere i Comuni di quella provincia.
 */
export function cercaAnagrafica(query: string, limite = 60): { voci: VoceAnagrafica[]; totale: number } {
  const q = norm(query);
  if (q.length < 2) return { voci: [], totale: 0 };
  const tutti = anagrafica();
  const trovati: { v: VoceAnagrafica; rango: number }[] = [];
  tutti.forEach((v, i) => {
    if (v.conScheda) return;
    const n = NORMALIZZATI[i];
    let rango = -1;
    // Con due sole lettere si cerca la sigla della provincia o i nomi che iniziano così
    if (q.length === 2 && v.sigla.toLowerCase() === q) rango = 0;
    else if (n.startsWith(q)) rango = 1;
    else if (q.length > 2 && n.includes(" " + q)) rango = 2;
    else if (q.length > 2 && n.includes(q)) rango = 3;
    if (rango >= 0) trovati.push({ v, rango });
  });
  trovati.sort((a, b) => a.rango - b.rango || a.v.nome.localeCompare(b.v.nome, "it"));
  return { voci: trovati.slice(0, limite).map((t) => t.v), totale: trovati.length };
}

// Portali delle Regioni (gli stessi di REGIONAL_PORTALS in src/lib/territorio.ts: si ripetono qui
// per non creare un giro di importazioni con la configurazione del Comune).
const PORTALI_REGIONE: Record<string, string> = {
  Abruzzo: "https://www.regione.abruzzo.it",
  Basilicata: "https://www.regione.basilicata.it",
  Calabria: "https://www.regione.calabria.it",
  Campania: "https://www.regione.campania.it",
  "Emilia-Romagna": "https://salute.regione.emilia-romagna.it",
  "Friuli-Venezia Giulia": "https://www.regione.fvg.it",
  Lazio: "https://www.salutelazio.it",
  Liguria: "https://www.regione.liguria.it",
  Lombardia: "https://www.regione.lombardia.it",
  Marche: "https://www.regione.marche.it",
  Molise: "https://www.regione.molise.it",
  Piemonte: "https://www.regione.piemonte.it",
  Puglia: "https://www.sanita.puglia.it",
  Sardegna: "https://www.regione.sardegna.it",
  Sicilia: "https://www.regione.sicilia.it",
  Toscana: "https://www.regione.toscana.it",
  "Trentino-Alto Adige": "https://www.regione.taa.it",
  Umbria: "https://www.regione.umbria.it",
  "Valle d'Aosta": "https://www.regione.vda.it",
  Veneto: "https://www.regione.veneto.it",
};

const TEMA_ELENCO = {
  warm: "#9AA9B5",
  warmSoft: "#E8EDF1",
  warmDark: "#3F5361",
  cream: "#F4F6F8",
};

const TRASPORTO_GENERICO =
  "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.";

const schede = new Map<string, ComuneConfig>();

/**
 * Scheda MINIMA di un Comune presente solo nell'elenco ISTAT: nome, provincia e regione.
 * Nessun telefono, email, indirizzo, orario o servizio: non sono verificati.
 */
export function schedaDaAnagrafica(v: VoceAnagrafica): ComuneConfig {
  const esistente = schede.get(v.slug);
  if (esistente) return esistente;
  const scheda: ComuneConfig = {
    slug: v.slug,
    tipo: "comune",
    nome: `Comune di ${v.nome}`,
    nomeBreve: v.nome,
    delEnte: `del Comune di ${v.nome}`,
    soggetto: "Il Comune",
    provincia: v.sigla,
    regione: v.regione,

    ente: "Servizi Sociali",
    responsabile: "",
    indirizzo: "",
    telefono: "",
    email: "",
    pec: "",
    orari: "",
    sitoWeb: "",

    logo: null,
    theme: TEMA_ELENCO,

    puntiSupporto: [],
    trasporto: TRASPORTO_GENERICO,
    esenzioneTicket: {
      label: "Esenzioni ticket · sito della tua Regione",
      url: PORTALI_REGIONE[v.regione] ?? "",
    },

    daVerificare: true,
    dimostrativo: true,
    soloElenco: true,
  };
  schede.set(v.slug, scheda);
  return scheda;
}
