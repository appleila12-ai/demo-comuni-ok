// "Riprendi da dove eri rimasto": ricorda l'ultima ricerca scritta nella casella
// "Di cosa hai bisogno?". Resta SOLO su questo dispositivo, si può dimenticare in un tocco
// e scade da sola dopo 14 giorni.

import { storage } from "@/src/utils/storage";

export const RICERCA_KEY = "tutelapp:ultima-ricerca";
const SCADE_DOPO_GIORNI = 14;

export type UltimaRicerca = { testo: string; quando: string };

export async function salvaRicerca(testo: string): Promise<void> {
  const t = testo.trim().slice(0, 120);
  if (t.length < 3) return;
  await storage.setItem(RICERCA_KEY, JSON.stringify({ testo: t, quando: new Date().toISOString() }));
}

export async function leggiRicerca(adesso = new Date()): Promise<UltimaRicerca | null> {
  const raw = await storage.getItem<string>(RICERCA_KEY, "");
  if (!raw) return null;
  try {
    const v = JSON.parse(raw);
    if (!v || typeof v.testo !== "string" || typeof v.quando !== "string") return null;
    const quando = new Date(v.quando);
    if (isNaN(quando.getTime())) return null;
    if (adesso.getTime() - quando.getTime() > SCADE_DOPO_GIORNI * 86400000) return null;
    return { testo: v.testo, quando: v.quando };
  } catch {
    return null;
  }
}

export async function dimenticaRicerca(): Promise<void> {
  await storage.removeItem(RICERCA_KEY);
}
