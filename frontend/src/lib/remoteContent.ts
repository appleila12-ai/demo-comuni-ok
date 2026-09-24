// Contenuti di TutelApp (importi, FAQ, glossario, dopo-verbale, riforma).
// Una versione è inclusa nell'app (src/content/contenuti-base.json, copia del
// seed in backend/app_content.py); il server può fornirne una più recente,
// ad esempio dopo un aggiornamento approvato dalla Sentinella.

import { storage } from "@/src/utils/storage";
import contenutiBase from "@/src/content/contenuti-base.json";

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;
const CACHE_KEY = "salutenav:remoteContent";

export interface Importo {
  nome: string;
  importo: string;
  requisiti: string;
  reddito: string;
  url: string;
}

export interface FaqItem {
  d: string;
  r: string;
}

export interface GlossaryItem {
  t: string;
  d: string;
}

export interface VerbaleStep {
  titolo: string;
  come: string;
}

export interface RiformaCambio {
  titolo: string;
  testo: string;
}

export interface RiformaFase {
  dal: string;
  etichetta: string;
  province: string[];
}

export interface Riforma {
  regimeNazionale: string;
  fonteUrl: string;
  intro: string;
  cosaCambia: RiformaCambio[];
  salvaguardia: string;
  fasi?: RiformaFase[];
}

export interface LivelloSostegno {
  nome: string;
  colore: string;
  descrizione: string;
  fisco: string[];
  lavoro: string[];
}

export interface LivelliSostegno {
  intro: string;
  livelli: LivelloSostegno[];
}

export interface AppContent {
  updatedAt: string;
  fonte: string;
  importi: Importo[];
  faq: FaqItem[];
  glossario: GlossaryItem[];
  dopoVerbale: VerbaleStep[];
  riforma?: Riforma;
  livelliSostegno?: LivelliSostegno;
}

/** Contenuti inclusi nell'app: ci sono sempre, anche offline o senza backend. */
export const CONTENUTI_BASE = contenutiBase as AppContent;

// A parità di data vince la fonte controllata dopo (cache, poi server).
const piuRecente = (a: AppContent, b: AppContent) =>
  (b.updatedAt || "") >= (a.updatedAt || "") ? b : a;

/**
 * Contenuti (importi, FAQ, glossario, riforma...): usa la versione più
 * recente tra quella del server (aggiornata anche dalla Sentinella), l'ultima
 * scaricata e quella inclusa nell'app. Non restituisce mai "vuoto".
 */
export async function loadAppContent(): Promise<AppContent> {
  let migliore: AppContent = CONTENUTI_BASE;

  const cached = await storage.getItem<string>(CACHE_KEY, "");
  if (cached) {
    try {
      migliore = piuRecente(migliore, JSON.parse(cached) as AppContent);
    } catch {
      /* cache illeggibile: ignora */
    }
  }

  if (BACKEND_URL) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/content`);
      if (res.ok) {
        const data = (await res.json()) as AppContent;
        if (data && Array.isArray(data.faq) && Array.isArray(data.importi)) {
          await storage.setItem(CACHE_KEY, JSON.stringify(data));
          migliore = piuRecente(migliore, data);
        }
      }
    } catch {
      /* offline o backend non raggiungibile: restano cache/contenuti base */
    }
  }
  return migliore;
}

export function formatUpdatedAt(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/** Normalizza un nome provincia per il confronto (accenti, trattini, spazi). */
export function normalizzaTesto(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-'\s]/g, "");
}

/** Cerca la provincia tra le fasi della sperimentazione (match esatto o prefisso). */
export function trovaProvincia(
  fasi: RiformaFase[],
  query: string,
): { fase: RiformaFase; provincia: string } | null {
  const q = normalizzaTesto(query);
  if (q.length < 3) return null;
  for (const fase of fasi) {
    for (const p of fase.province) {
      const np = normalizzaTesto(p);
      if (np === q || np.startsWith(q)) return { fase, provincia: p };
    }
  }
  return null;
}
