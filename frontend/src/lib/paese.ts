// "Il mio paese" — per le Unioni di Comuni il cittadino sceglie il proprio
// Comune di residenza e ne ritrova i recapiti del municipio.
// La scelta è salvata sul dispositivo, separata per ogni Unione.

import { useEffect, useState } from "react";

import { comune, onComuneChange, type Paese } from "@/src/config/comune";
import { storage } from "@/src/utils/storage";
import { registra } from "@/src/lib/statistiche";

export const PAESE_KEY = "tutelapp:paese";

let corrente: string | null | undefined; // undefined = non ancora letto
const listeners = new Set<(nome: string | null) => void>();

function trova(nome: string | null | undefined): Paese | undefined {
  if (!nome) return undefined;
  return comune.paesi?.find((p) => p.nome === nome);
}

export async function salvaPaese(nome: string | null): Promise<void> {
  corrente = nome;
  if (nome) {
    await storage.setItem(PAESE_KEY, nome);
    registra("paese", nome);
  }
  else await storage.removeItem(PAESE_KEY);
  listeners.forEach((fn) => fn(nome));
}

/** Il paese scelto, letto al volo (es. per i PDF). */
export function getPaeseCorrente(): Paese | undefined {
  return trova(corrente);
}

/** Il paese scelto (se l'ente è un'Unione) e la funzione per cambiarlo. */
export function usePaese(): {
  paese: Paese | undefined;
  pronto: boolean;
  scegli: (nome: string | null) => Promise<void>;
} {
  const [nome, setNome] = useState<string | null | undefined>(corrente);

  useEffect(() => {
    const onChange = (n: string | null) => setNome(n);
    listeners.add(onChange);
    if (corrente === undefined) {
      storage.getItem<string>(PAESE_KEY, "").then((v) => {
        corrente = v || null;
        setNome(corrente);
      });
    }
    return () => {
      listeners.delete(onChange);
    };
  }, []);

  return { paese: trova(nome), pronto: nome !== undefined, scegli: salvaPaese };
}

// Cambiando Comune la scelta va riletta (ogni Unione ha la sua).
onComuneChange(() => {
  corrente = undefined;
});
