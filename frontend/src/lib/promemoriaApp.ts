// Collega i dati salvati sul dispositivo (scadenze, pratica, ricerca) ai promemoria.
// Si richiama: all'apertura dell'app, quando cambiano le scadenze, quando si accendono
// o spengono gli avvisi. La logica vera è in promemoria.ts (pura e provata).

import { storage } from "@/src/utils/storage";
import { IMPOSTAZIONI_BASE, pianifica, type Impostazioni, type Sospeso } from "@/src/lib/promemoria";
import { SCADENZE_KEY, calcolaEventi, type Scadenza } from "@/src/lib/scadenze";
import { prossimoPasso } from "@/src/lib/prossimoPasso";
import { PROGETTO_KEY } from "@/src/lib/progetto";
import { leggiRicerca } from "@/src/lib/riprendi";
import { getNome } from "@/src/lib/nomeUtente";
import { annullaTutti, notificheDisponibili, riprogramma } from "@/src/lib/notifiche";

const IMPOSTAZIONI_KEY = "tutelapp:promemoria-impostazioni";
const ATTIVITA_KEY = "tutelapp:ultima-attivita";
const TRACKER_KEY = "tutelapp:tracker";
const VERBALE_KEY = "tutelapp:verbale";

export async function leggiImpostazioni(): Promise<Impostazioni> {
  const raw = await storage.getItem<string>(IMPOSTAZIONI_KEY, "");
  if (!raw) return IMPOSTAZIONI_BASE;
  try {
    const v = JSON.parse(raw);
    return {
      attivi: v?.attivi === true,
      silenzioDa: Number.isInteger(v?.silenzioDa) ? v.silenzioDa : IMPOSTAZIONI_BASE.silenzioDa,
      silenzioA: Number.isInteger(v?.silenzioA) ? v.silenzioA : IMPOSTAZIONI_BASE.silenzioA,
    };
  } catch {
    return IMPOSTAZIONI_BASE;
  }
}

export async function salvaImpostazioni(i: Impostazioni): Promise<void> {
  await storage.setItem(IMPOSTAZIONI_KEY, JSON.stringify(i));
}

/** Ricorda che la persona ha appena aperto l'app (serve a non disturbarla subito dopo). */
export async function segnaAttivita(): Promise<void> {
  await storage.setItem(ATTIVITA_KEY, new Date().toISOString());
}

async function leggiAttivita(): Promise<Date | null> {
  const raw = await storage.getItem<string>(ATTIVITA_KEY, "");
  const d = raw ? new Date(raw) : null;
  return d && !isNaN(d.getTime()) ? d : null;
}

async function leggiScadenze(): Promise<Scadenza[]> {
  const raw = await storage.getItem<string>(SCADENZE_KEY, "");
  if (!raw) return [];
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

/** Cosa è rimasto a metà, secondo ciò che la persona ha già salvato. */
async function trovaSospeso(oggi: Date): Promise<Sospeso | null> {
  const [tracker, verbale, progetto] = await Promise.all([
    storage.getItem<string>(TRACKER_KEY, ""),
    storage.getItem<string>(VERBALE_KEY, ""),
    storage.getItem<string>(PROGETTO_KEY, ""),
  ]);
  const s = prossimoPasso({ tracker, verbale, progetto });
  if (s.tipo === "tracker" && s.route) return { tipo: "pratica", route: s.route };
  if (s.tipo === "progetto" && s.route) return { tipo: "progetto", route: s.route };
  if (s.tipo === "verbale" && s.route) return { tipo: "verbale", route: s.route };
  if (await leggiRicerca(oggi)) return { tipo: "ricerca", route: "/hub" };
  return null;
}

/**
 * Ricalcola e riprogramma gli avvisi. Se sono spenti li cancella tutti.
 * Restituisce quanti avvisi sono programmati (0 sul sito web).
 */
export async function aggiornaPromemoria(): Promise<number> {
  if (!notificheDisponibili()) return 0;
  const imp = await leggiImpostazioni();
  if (!imp.attivi) {
    await annullaTutti();
    return 0;
  }
  const oggi = new Date();
  const [scadenze, sospeso, ultimaAttivita] = await Promise.all([
    leggiScadenze(),
    trovaSospeso(oggi),
    leggiAttivita(),
  ]);
  const lista = pianifica({ eventi: calcolaEventi(scadenze, oggi), sospeso, ultimaAttivita, oggi, imp, nome: getNome() });
  return riprogramma(lista);
}
