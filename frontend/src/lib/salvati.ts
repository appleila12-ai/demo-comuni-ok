// "I miei salvati": pagine, servizi, contatti e associazioni che il cittadino vuole
// ritrovare più tardi. Restano solo su questo dispositivo (e per questo Comune).

import { useEffect, useState } from "react";
import { storage } from "@/src/utils/storage";
import { getComuneAttivo } from "@/src/config/comune";

export type Salvato = {
  id: string;
  titolo: string;
  sotto?: string;
  /** pagina dell'app da riaprire (es. "/salute", "/lettere?id=sad") */
  route?: string;
  tel?: string;
  email?: string;
  url?: string;
  whatsapp?: string;
  quando?: number;
};

const KEY = "tutelapp:salvati";
let lista: Salvato[] | null = null;
/** Comune a cui appartiene `lista`: i salvati sono separati per Comune, quindi la copia in memoria vale solo per quello */
let listaComune = "";
const ascoltatori = new Set<(l: Salvato[]) => void>();

async function carica(): Promise<Salvato[]> {
  const comune = getComuneAttivo().slug;
  // Cambiando Comune la copia in memoria non vale più: si rilegge dal telefono.
  // (Prima restava quella del Comune precedente, e il salvataggio successivo
  // la scriveva nel Comune sbagliato: così i salvati "sparivano" al ricaricamento.)
  if (lista && listaComune === comune) return lista;
  const raw = await storage.getItem<string>(KEY, "");
  let letta: Salvato[] = [];
  try {
    const v = raw ? JSON.parse(raw) : [];
    letta = Array.isArray(v) ? (v as Salvato[]) : [];
  } catch {
    letta = [];
  }
  lista = letta;
  listaComune = comune;
  return lista;
}

function aggiorna(nuova: Salvato[]) {
  lista = nuova;
  listaComune = getComuneAttivo().slug;
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
  const [l, setL] = useState<Salvato[]>(lista && listaComune === getComuneAttivo().slug ? lista : []);
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
