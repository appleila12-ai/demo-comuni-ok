// "La mia pagina" (demo bianca): lettura e salvataggio sul telefono.
// Le chiavi del verbale e delle scadenze sono quelle già usate da "Il mio verbale" e "Le mie scadenze":
// qui si LEGGE soltanto, non si duplica nulla. Si scrive solo la chiave della pagina (scelte della persona).
// Niente server, niente account.

import { storage } from "@/src/utils/storage";
import { associazioniDelComune } from "@/src/lib/associazioni";
import type { Verbale } from "@/src/lib/verbale";
import {
  filtraPerCategoria,
  haDatiVerbale,
  leggiStatoGrezzo,
  STATO_VUOTO,
  type AssociazioniCategoria,
  type CategoriaId,
  type StatoBianca,
} from "@/src/lib/paginaBiancaCore";

export * from "@/src/lib/paginaBiancaCore";

const KEY_PAGINA = "tutelapp:bianca";
const KEY_VERBALE = "tutelapp:verbale";
const KEY_SCADENZE = "tutelapp:scadenze";

export async function caricaStato(): Promise<StatoBianca> {
  const raw = await storage.getItem<string>(KEY_PAGINA, "");
  try {
    return raw ? leggiStatoGrezzo(JSON.parse(raw)) : { ...STATO_VUOTO };
  } catch {
    return { ...STATO_VUOTO };
  }
}

export function salvaStato(s: StatoBianca) {
  storage.setItem(KEY_PAGINA, JSON.stringify(s));
}

export type DatiVerbale = {
  /** le risposte che la persona ha dato in "Il mio verbale" (null se non ce ne sono) */
  verbale: Verbale | null;
  /** data di revisione indicata dalla persona, formato AAAA-MM-GG */
  revisione: string | null;
};

export async function caricaVerbale(): Promise<DatiVerbale> {
  const [rawV, rawS] = await Promise.all([
    storage.getItem<string>(KEY_VERBALE, ""),
    storage.getItem<string>(KEY_SCADENZE, ""),
  ]);

  let verbale: Verbale | null = null;
  try {
    const v = rawV ? JSON.parse(rawV) : null;
    if (haDatiVerbale(v)) verbale = v;
  } catch {
    /* risposte non leggibili: come se non ci fossero */
  }

  let revisione: string | null = null;
  try {
    const l = rawS ? JSON.parse(rawS) : [];
    if (Array.isArray(l)) {
      const r = l.find((x: { tipo?: string; data?: string }) => x && x.tipo === "revisione" && typeof x.data === "string");
      if (r) revisione = r.data as string;
    }
  } catch {
    /* date non leggibili: si ignorano */
  }

  return { verbale, revisione };
}

/** Associazioni e sport del Comune attivo che nella loro scheda dicono di occuparsi della categoria. */
export function associazioniPerCategoria(id: CategoriaId): AssociazioniCategoria {
  return filtraPerCategoria(id, associazioniDelComune());
}
