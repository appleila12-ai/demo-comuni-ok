// Statistiche ANONIME per il Comune.
// ----------------------------------------------------------------------------
// L'app invia solo conteggi per categoria (es. "momento: diagnosi"), presi da
// elenchi predefiniti: mai nomi, testi scritti dall'utente, identificativi del
// dispositivo o dell'account. Ogni categoria viene contata al massimo una volta
// al mese per dispositivo, così una persona non "pesa" più di un'altra.
// Se il backend non risponde, non succede nulla: l'app funziona lo stesso.

import { useEffect } from "react";

import { getComuneAttivo } from "@/src/config/comune";
import { storage } from "@/src/utils/storage";

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL || "";

export type Metrica =
  | "visita"
  | "momento"
  | "tappa"
  | "area_progetto"
  | "progetto_pdf"
  | "questionario"
  | "chi"
  | "quando"
  | "lavoro"
  | "certificato"
  | "desiderio"
  | "sezione"
  | "paese"
  | "verbale";

type Evento = { m: Metrica; v: string };

let coda: Evento[] = [];
let timer: ReturnType<typeof setTimeout> | null = null;

const meseCorrente = () => new Date().toISOString().slice(0, 7);
const chiave = (e: Evento) => `tutelapp:stat:${meseCorrente()}:${e.m}:${e.v}`;

async function invia() {
  timer = null;
  const batch = coda;
  coda = [];
  if (!BACKEND_URL || batch.length === 0) return;

  // Solo le categorie non ancora contate questo mese su questo dispositivo
  const nuovi: Evento[] = [];
  for (const e of batch) {
    if (nuovi.some((x) => x.m === e.m && x.v === e.v)) continue;
    const gia = await storage.getItem<string>(chiave(e), "");
    if (!gia) nuovi.push(e);
  }
  if (nuovi.length === 0) return;

  try {
    const res = await fetch(`${BACKEND_URL}/api/stats/eventi`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comune: getComuneAttivo().slug, eventi: nuovi }),
    });
    if (res.ok) {
      await Promise.all(nuovi.map((e) => storage.setItem(chiave(e), "1")));
    }
  } catch {
    /* rete assente: si riproverà alla prossima occasione */
  }
}

/** Conta (in forma anonima) una o più categorie. */
export function registra(m: Metrica, ...valori: string[]) {
  valori.filter(Boolean).forEach((v) => coda.push({ m, v }));
  if (!timer) timer = setTimeout(invia, 1500);
}

/** Da usare nelle pagine principali: conta la sezione consultata (e la visita). */
export function useSezione(nome: string) {
  useEffect(() => {
    registra("visita", "mese");
    registra("sezione", nome);
  }, [nome]);
}
