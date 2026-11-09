// "Il mio diario": lettura e salvataggio sul dispositivo. La logica vera è in diarioCore.ts
// (pura e provata con npm run prova:diario). Nessun dato esce dal telefono.

import { storage } from "@/src/utils/storage";
import { aggiornaPromemoria } from "@/src/lib/promemoriaApp";
import { SCADENZE_KEY, type Scadenza } from "@/src/lib/scadenze";
import {
  DIARIO_KEY,
  DIARIO_VUOTO,
  leggiDiario,
  senzaDataPasso,
  sincronizzaScadenze,
  type Diario,
} from "@/src/lib/diarioCore";

export async function caricaDiario(): Promise<Diario> {
  const raw = await storage.getItem<string>(DIARIO_KEY, "");
  return leggiDiario(raw);
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

/** I passi con una data diventano scadenze dell'agenda (stesso archivio delle altre date). */
async function sincronizzaAgenda(d: Diario): Promise<void> {
  const prima = await leggiScadenze();
  const dopo = sincronizzaScadenze(prima, d);
  if (JSON.stringify(prima) === JSON.stringify(dopo)) return;
  await storage.setItem(SCADENZE_KEY, JSON.stringify(dopo));
  await aggiornaPromemoria();
}

export async function salvaDiario(d: Diario): Promise<boolean> {
  // Un diario vuoto non lascia nulla sul telefono (così non conta come "dati personali")
  const ok = d.voci.length === 0 ? await storage.removeItem(DIARIO_KEY) : await storage.setItem(DIARIO_KEY, JSON.stringify(d));
  if (ok) await sincronizzaAgenda(d);
  return ok;
}

/** Cancella tutto il diario e le scadenze che ne erano nate. */
export async function cancellaDiario(): Promise<boolean> {
  return salvaDiario({ ...DIARIO_VUOTO, voci: [] });
}

/**
 * Quando la persona toglie dall'agenda una scadenza nata da un passo, il passo resta nel diario
 * ma senza data: altrimenti la scadenza ricomparirebbe al prossimo salvataggio.
 */
export async function togliDataPasso(passoId: string): Promise<void> {
  const d = await caricaDiario();
  const nuovo = senzaDataPasso(d, passoId);
  if (JSON.stringify(nuovo) === JSON.stringify(d)) return;
  await storage.setItem(DIARIO_KEY, JSON.stringify(nuovo));
}
