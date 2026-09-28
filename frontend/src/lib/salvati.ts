// "I miei salvati": pagine, servizi, contatti e associazioni che il cittadino vuole
// ritrovare più tardi. Restano solo su questo dispositivo (e per questo Comune).

import { useEffect, useState } from "react";
import { storage } from "@/src/utils/storage";

export type Salvato = {
  id: string;
  titolo: string;
  sotto?: string;
  /** pagina dell'app da riaprire (es. "/salute", "/lettere?id=sad") */
  route?: string;
  tel?: string;
  email?: string;
  url?: string;
  quando?: number;
};

const KEY = "tutelapp:salvati";
let lista: Salvato[] | null = null;
const ascoltatori = new Set<(l: Salvato[]) => void>();

async function carica(): Promise<Salvato[]> {
  if (lista) return lista;
  const raw = await storage.getItem<string>(KEY, "");
  try {
    lista = raw ? (JSON.parse(raw) as Salvato[]) : [];
  } catch {
    lista = [];
  }
  return lista;
}

function aggiorna(nuova: Salvato[]) {
  lista = nuova;
  storage.setItem(KEY, JSON.stringify(nuova));
  ascoltatori.forEach((f) => f(nuova));
}

export async function salva(s: Salvato) {
  const l = await carica();
  if (l.some((x) => x.id === s.id)) return;
  aggiorna([{ ...s, quando: Date.now() }, ...l]);
}

export async function rimuovi(id: string) {
  const l = await carica();
  aggiorna(l.filter((x) => x.id !== id));
}

export function useSalvati() {
  const [l, setL] = useState<Salvato[]>(lista ?? []);
  useEffect(() => {
    let vivo = true;
    carica().then((x) => vivo && setL(x));
    ascoltatori.add(setL);
    return () => {
      vivo = false;
      ascoltatori.delete(setL);
    };
  }, []);
  return {
    lista: l,
    eSalvato: (id: string) => l.some((x) => x.id === id),
    alterna: (s: Salvato) => (l.some((x) => x.id === s.id) ? rimuovi(s.id) : salva(s)),
    rimuovi,
  };
}
