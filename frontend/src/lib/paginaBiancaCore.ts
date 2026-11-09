// "La mia pagina" (demo bianca): logica pura, senza dipendenze dall'app, così si può provare da sola.
//
// IDEA (Ilaria, 09/11/2026): la pagina bianca si compone con ciò che la persona fa davvero.
//  - azioni esplicite (salvo il mio verbale, aggiungo una categoria) → la sezione compare da sola
//  - la persona vede sempre PERCHÉ una sezione è lì e la può togliere con un tocco
//
// REGOLE
//  - il verbale lo scrive la persona: l'app non lo verifica, lo registra. Si dice "come l'hai indicato tu",
//    mai "verificato"
//  - la categoria (es. cecità) non si deduce da una ricerca: la persona la aggiunge con un tocco
//  - niente bonus o importi per categoria senza fonte istituzionale letta: qui per ora solo associazioni e sport
//    che l'app ha già in elenco
//  - tutto resta sul telefono

import type { Associazione } from "@/src/lib/associazioni";
import type { Verbale } from "@/src/lib/verbale";

// ---------------------------------------------------------------- categorie

export type CategoriaId = "cecita";

export type Categoria = {
  id: CategoriaId;
  titolo: string;
  /** frase corta mostrata sul tastino "Aggiungi alla mia pagina" */
  invito: string;
  /**
   * Come si riconosce, DALLA DESCRIZIONE GIÀ SCRITTA nella scheda, un'associazione di questa categoria.
   * Nessuna etichetta inventata: se la scheda non dice "non vedenti", "ciechi", "ipovedenti"
   * o "disabilità visiva", non compare.
   */
  riconosci: RegExp;
};

export const CATEGORIE: Record<CategoriaId, Categoria> = {
  cecita: {
    id: "cecita",
    titolo: "Cecità e ipovisione",
    invito: "Associazioni e sport per persone cieche e ipovedenti",
    riconosci: /non\s*vedent|ciech|ipovedent|disabilit[àa]\s+visiv/i,
  },
};

export const ID_CATEGORIE = Object.keys(CATEGORIE) as CategoriaId[];

export const eCategoria = (x: unknown): x is CategoriaId => typeof x === "string" && x in CATEGORIE;

// ---------------------------------------------------------------- colori delle sezioni
// Assegnati da Ilaria: percorso del Comune verde, verbale/moduli/lettere marrone, associazioni rosso.
// Le tinte sono prese dalla tavolozza dell'app; le altre sezioni NON hanno ancora un colore deciso.
// Il colore non basta mai da solo: ogni sezione ha anche icona e nome scritto.

export type SezioneId = "verbale" | "associazioni";

export const COLORI_SEZIONE: Record<SezioneId, { main: string; soft: string }> = {
  verbale: { main: "#AD8C74", soft: "#F0E6DC" }, // marrone
  associazioni: { main: "#C66A5E", soft: "#F8E6E2" }, // rosso
};

// ---------------------------------------------------------------- stato della pagina

export type StatoBianca = {
  /** categorie che la persona ha aggiunto con il tastino */
  categorie: CategoriaId[];
  /** sezioni che la persona ha tolto (es. "verbale") */
  tolte: string[];
};

export const STATO_VUOTO: StatoBianca = { categorie: [], tolte: [] };

/** Legge uno stato salvato anche se rovinato o scritto da una versione diversa. */
export function leggiStatoGrezzo(raw: unknown): StatoBianca {
  if (!raw || typeof raw !== "object") return { categorie: [], tolte: [] };
  const o = raw as { categorie?: unknown; tolte?: unknown };
  const categorie = Array.isArray(o.categorie) ? o.categorie.filter(eCategoria) : [];
  const tolte = Array.isArray(o.tolte) ? o.tolte.filter((x): x is string => typeof x === "string") : [];
  return { categorie: Array.from(new Set(categorie)), tolte: Array.from(new Set(tolte)) };
}

// ---------------------------------------------------------------- verbale

const L104: Record<NonNullable<Verbale["legge104"]>, string> = {
  nessuna: "Legge 104: non riconosciuta",
  art3c1: "Legge 104: articolo 3, comma 1",
  art3c3: "Legge 104: articolo 3, comma 3 (gravità)",
};
const INVALIDITA: Record<NonNullable<Verbale["invalidita"]>, string> = {
  nessuna: "Invalidità civile: non riconosciuta",
  fino45: "Invalidità civile: fino al 45%",
  da46a99: "Invalidità civile: dal 46% al 99%",
  "100": "Invalidità civile: 100% (totale e permanente)",
};
const ACCOMPAGNAMENTO: Record<NonNullable<Verbale["accompagnamento"]>, string> = {
  si: "Indennità di accompagnamento: scritta sul verbale",
  no: "Indennità di accompagnamento: non scritta",
};

/** C'è almeno una risposta nel verbale salvato dalla persona? */
export function haDatiVerbale(v: Verbale | null | undefined): v is Verbale {
  return !!v && typeof v === "object" && Object.values(v).some((x) => !!x);
}

/** Le righe da mostrare, esattamente con ciò che la persona ha indicato (nient'altro). */
export function righeVerbale(v: Verbale): string[] {
  const r: string[] = [];
  if (v.legge104 && L104[v.legge104]) r.push(L104[v.legge104]);
  if (v.invalidita && INVALIDITA[v.invalidita]) r.push(INVALIDITA[v.invalidita]);
  if (v.accompagnamento && ACCOMPAGNAMENTO[v.accompagnamento]) r.push(ACCOMPAGNAMENTO[v.accompagnamento]);
  return r;
}

/** "tra 12 giorni", "oggi", "12 giorni fa" */
export function quandoFra(giorni: number): string {
  if (giorni === 0) return "oggi";
  if (giorni === 1) return "domani";
  if (giorni === -1) return "ieri";
  return giorni > 0 ? `tra ${giorni} giorni` : `${-giorni} giorni fa`;
}

// ---------------------------------------------------------------- associazioni per categoria

/** La parte dell'elenco del Comune che serve qui (è il risultato di associazioniDelComune()). */
export type ElencoAssociazioni = {
  volontariato: Associazione[];
  volontariatoNazionali: Associazione[];
  sport: Associazione[];
  sportRegione: Associazione[];
  sportNazionali: Associazione[];
  vicina: (a: Associazione) => boolean;
};

export type AssociazioniCategoria = {
  volontariato: Associazione[];
  sport: Associazione[];
  vicina: (a: Associazione) => boolean;
};

/**
 * Dall'elenco del Comune attivo tiene solo le associazioni che nella loro scheda dicono di occuparsi
 * della categoria. Le schede con recapito "da confermare" NON entrano (regola: nessuna informazione dubbia).
 * L'ordine dell'elenco di partenza resta: prima quelle vicine, poi le altre, poi le nazionali.
 */
export function filtraPerCategoria(id: CategoriaId, d: ElencoAssociazioni): AssociazioniCategoria {
  const re = CATEGORIE[id].riconosci;
  const viste = new Set<string>();
  const prendi = (lista: Associazione[]) => {
    const fuori: Associazione[] = [];
    for (const a of lista) {
      if (a.verificare) continue;
      if (!re.test(`${a.nome} ${a.cosa}`)) continue;
      if (viste.has(a.nome)) continue;
      viste.add(a.nome);
      fuori.push(a);
    }
    return fuori;
  };
  const volontariato = prendi([...d.volontariato, ...d.volontariatoNazionali]);
  const sport = prendi([...d.sport, ...d.sportRegione, ...d.sportNazionali]);
  return { volontariato, sport, vicina: d.vicina };
}
