// UICI (Unione Italiana dei Ciechi e degli Ipovedenti) e radiofari LETIsmart.
// Dati in `src/content/uici-sedi.json` e `src/content/letismart.json`: ogni riga ha la fonte
// e la data di consultazione. Regole fisse:
//  - si pubblica solo ciò che è scritto da UICI o da LETIsmart; niente recapiti dedotti
//  - i recapiti su cui l'indice regionale UICI e il sito della sezione non concordano sono
//    stati lasciati fuori (vedi DATI-UICI-LETISMART.md) finché la sezione non conferma
//  - un Comune senza informazioni NON viene dato per "senza radiofari"
// La provincia di ogni sezione UICI si ricava dal nome della sezione (es. "CHIETI" → CH).

import SEDI_JSON from "@/src/content/uici-sedi.json";
import LETI_JSON from "@/src/content/letismart.json";
import { comune } from "@/src/config/comune";

export type SedeUici = {
  id: string;
  tipo: "nazionale" | "regionale" | "provinciale" | "da_verificare";
  den: string;
  regione?: string;
  /** sigla della provincia (solo sezioni provinciali) */
  prov?: string;
  /** true se la sezione non copre tutta la provincia (es. Chiavari, Civitavecchia) */
  parziale?: boolean;
  ind?: string;
  tel?: string[];
  email?: string[];
  pec?: string[];
  sito?: string;
  orari?: string;
  servizi?: string;
  /** altre pagine ufficiali da cui vengono i dati, oltre all'indice regionale */
  fonti?: string[];
};

export type Luogo = { nome: string; tipo: string; data: string; fonte: string };
export type StatoLeti = "attiva" | "tavola" | "interesse" | "non_verificato";
type CittaLeti = { citta: string; stato: StatoLeti; mappa?: string; luoghi?: Luogo[] };
type LuogoAltro = Luogo & { citta: string };

const SEDI = (SEDI_JSON as unknown as { sedi: SedeUici[] }).sedi;
const INDICI = (SEDI_JSON as unknown as { indici: Record<string, string> }).indici;
const CONSULTAZIONE_UICI = (SEDI_JSON as unknown as { consultazione: string }).consultazione;
const LETI = LETI_JSON as unknown as {
  consultazione: string;
  fonte: string;
  citta: CittaLeti[];
  altriLuoghi: LuogoAltro[];
};

const MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

/** "2026-11-09" → "9 novembre 2026" */
export function dataLeggibile(iso: string): string {
  const [a, m, g] = iso.split("-").map(Number);
  if (!a || !m || !g) return iso;
  return `${g} ${MESI[m - 1]} ${a}`;
}

export const DATA_UICI = dataLeggibile(CONSULTAZIONE_UICI);
export const DATA_LETISMART = dataLeggibile(LETI.consultazione);
export const URL_MAPPA_LETISMART = LETI.fonte;
export const URL_UICI_NAZIONALE = "https://www.uiciechi.it/";
export const CONTATTI_LETISMART = { email: "info@letismart.it", telefono: "040 231778" };

/** Frase da usare quando per il Comune non ci sono informazioni verificate sui radiofari. */
export const NESSUN_RADIOFARO = "Non abbiamo ancora informazioni verificate sulla presenza di radiofari in questo Comune.";

const norm = (s: string) =>
  String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

// ---------------------------------------------------------------- nomi leggibili
const MINUSCOLE = new Set(["di", "del", "della", "e"]);

function iniziali(s: string): string {
  return s
    .toLowerCase()
    .split(" ")
    .map((p, i) => {
      if (p === "bat") return "BAT";
      if (i > 0 && MINUSCOLE.has(p)) return p;
      return p.replace(/(^|')(\p{L})/gu, (_m, a: string, b: string) => a + b.toUpperCase());
    })
    .join(" ");
}

/** Primo numero di telefono scritto in un testo come "0922/605724 Segr. Tel. 0922/605725", solo cifre. */
export function numeroDaChiamare(t: string): string {
  const m = t.match(/\+?\d[\d\s/.\-]*/);
  return (m ? m[0] : t).replace(/[^\d+]/g, "");
}

/** Nome da mostrare per una sede (la denominazione ufficiale è in maiuscolo nella fonte). */
export function nomeSede(s: SedeUici): string {
  if (s.tipo === "nazionale") return `UICI nazionale – ${s.den}`;
  if (s.tipo === "regionale") return `UICI – Consiglio regionale ${s.regione}`;
  if (s.tipo === "provinciale") return `UICI – sezione di ${iniziali(s.den)}`;
  const reg = norm(s.regione || "");
  return s.den
    .toLowerCase()
    .split(" ")
    .map((p, i) => (p === "uici" ? "UICI" : i === 0 || norm(p) === reg ? p.charAt(0).toUpperCase() + p.slice(1) : p))
    .join(" ");
}

/** Pagine ufficiali da cui vengono i dati di una sede. */
export function fontiSede(s: SedeUici): string[] {
  const indice = s.regione ? INDICI[s.regione] : undefined;
  return [...(indice ? [indice] : []), ...(s.fonti ?? [])];
}

// ---------------------------------------------------------------- sede UICI del Comune
export type SediDelComune = {
  /** sezioni della provincia del Comune (di solito una) */
  principali: SedeUici[];
  /** Consiglio regionale, sempre indicato come riferimento in più */
  regionale?: SedeUici;
  nazionale?: SedeUici;
  /** true se in questa provincia ci sono più sezioni e non si può dire quale sia la competente */
  piuSezioni: boolean;
  /** true se per il Comune non c'è una sezione provinciale verificata */
  soloRegionale: boolean;
};

export function sediDelComune(): SediDelComune {
  const reg = norm(comune.regione);
  let principali = SEDI.filter((s) => s.tipo === "provinciale" && s.prov === comune.provincia);
  // Molise: UICI usa qualifiche diverse ("sezione regionale", "rappresentanza"); si mostrano come scritte
  if (!principali.length && reg === "molise") principali = SEDI.filter((s) => s.tipo === "da_verificare");
  const mio = norm(comune.nomeBreve);
  // prima la sezione che porta il nome del Comune, poi le sezioni che coprono tutta la provincia
  const peso = (x: SedeUici) => (norm(x.den) === mio ? 0 : x.parziale ? 2 : 1);
  principali = [...principali].sort((a, b) => peso(a) - peso(b));
  return {
    principali,
    regionale: SEDI.find((s) => s.tipo === "regionale" && norm(s.regione || "") === reg),
    nazionale: SEDI.find((s) => s.tipo === "nazionale"),
    piuSezioni: principali.length > 1,
    soloRegionale: principali.length === 0,
  };
}

// ---------------------------------------------------------------- radiofari LETIsmart
// Nomi della mappa che LETIsmart scrive diversi da quelli del Comune (corrispondenze ovvie
// dalle pagine stesse di LETIsmart: es. gli indirizzi delle pagine usano "sabbioneta").
const ALIAS: Record<string, string[]> = {
  mestre: ["venezia"],
  alatrento: ["ala"],
  sabbionetta: ["sabbioneta"],
  reggiocalabria: ["reggiodicalabria"],
  reggioemilia: ["reggionellemilia"],
  monterusciello: ["pozzuoli"],
};

const chiaviCitta = (nome: string) => [norm(nome), ...(ALIAS[norm(nome)] ?? [])];

function chiaviComune(): string[] {
  return [norm(comune.nomeBreve), norm(String(comune.nome).replace(/^(comune|città) di /i, ""))];
}

export type RadiofariDelComune = {
  /** voci della mappa che riguardano il Comune, con la categoria scritta da LETIsmart */
  voci: { citta: string; stato: Exclude<StatoLeti, "non_verificato"> }[];
  /** installazioni documentate in pagine ufficiali LETIsmart (non è un elenco completo dei radiofari) */
  luoghi: Luogo[];
  /** nessuna informazione verificata per il Comune */
  vuoto: boolean;
};

export function radiofariDelComune(): RadiofariDelComune {
  const mie = chiaviComune();
  const mio = (nome: string) => chiaviCitta(nome).some((k) => mie.includes(k));
  const voci = LETI.citta.filter((c) => mio(c.citta) && c.stato !== "non_verificato");
  const luoghi: Luogo[] = [
    ...voci.flatMap((c) => c.luoghi ?? []),
    ...LETI.altriLuoghi.filter((l) => mio(l.citta)),
  ];
  return {
    voci: voci.map((c) => ({ citta: c.citta, stato: c.stato as Exclude<StatoLeti, "non_verificato"> })),
    luoghi,
    vuoto: voci.length === 0 && luoghi.length === 0,
  };
}

export const TESTO_STATO: Record<Exclude<StatoLeti, "non_verificato">, string> = {
  attiva: "LETIsmart indica questa città tra quelle già attive.",
  tavola: "LETIsmart indica una tavola rotonda in corso in questa città.",
  interesse: "LETIsmart indica che questa città ha manifestato interesse al progetto.",
};

/** Elenco nazionale per stato (alternativa testuale alla mappa di LETIsmart). Le voci dubbie restano fuori. */
export function cittaPerStato(): { attiva: string[]; tavola: string[]; interesse: string[] } {
  const ord = (a: string, b: string) => a.localeCompare(b, "it");
  const per = (s: StatoLeti) => LETI.citta.filter((c) => c.stato === s).map((c) => c.citta).sort(ord);
  return { attiva: per("attiva"), tavola: per("tavola"), interesse: per("interesse") };
}

// ---------------------------------------------------------------- conteggi (per i controlli)
export function conteggiSedi() {
  const per: Record<string, Record<string, number>> = {};
  for (const s of SEDI) {
    const r = s.regione || "Nazionale";
    per[r] = per[r] || {};
    per[r][s.tipo] = (per[r][s.tipo] || 0) + 1;
  }
  return { totale: SEDI.length, per };
}

export function tutteLeSedi(): SedeUici[] {
  return SEDI;
}
