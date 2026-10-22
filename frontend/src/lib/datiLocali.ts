// "C'è qualcosa di mio su questo dispositivo?" Serve a due cose:
//  - proporre di mettere al sicuro i dati, ma solo a chi ne ha davvero
//  - proporre di ripristinare una copia, ma solo a chi non ha più nulla
// Conta solo i dati creati dalla persona, non le semplici scelte di navigazione.

import { storage } from "@/src/utils/storage";

const CHIAVI_PERSONALI = [
  "tutelapp:scadenze",
  "tutelapp:tracker",
  "tutelapp:lettere:dati",
  "tutelapp:reclamo:dati",
  "tutelapp:salvati",
  "tutelapp:verbale",
  "tutelapp:progetto",
  "tutelapp:agevolazioni",
  "tutelapp:contatti",
  "salutenav:reports",
  "salutenav:vaultFiles",
] as const;

const VUOTI = new Set(["", "[]", "{}", "null", '""']);

/** Un valore salvato conta solo se non è vuoto */
export function contaValore(v: unknown): boolean {
  if (typeof v !== "string") return false;
  return !VUOTI.has(v.trim());
}

export async function haDatiPersonali(): Promise<boolean> {
  for (const k of CHIAVI_PERSONALI) {
    const v = await storage.getItem<string>(k, "");
    if (contaValore(v)) return true;
  }
  return false;
}
