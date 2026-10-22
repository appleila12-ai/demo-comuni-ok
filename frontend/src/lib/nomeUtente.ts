// Il nome della persona che usa TutelApp: si chiede al primo accesso e poi l'app
// la chiama sempre per nome (Home, "Riprendi", pagine, copia di sicurezza).
//
// Resta solo su questo dispositivo, come tutto il resto: nessun account, nessun invio.
// A differenza dei dati della pratica NON è legato al Comune: se la persona cambia
// Comune, il nome resta lo stesso.

import { useEffect, useState } from "react";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const NOME_KEY = "tutelapp:nomeUtente";
export const NOME_LUNGHEZZA_MAX = 30;

let nome = "";
const ascoltatori = new Set<(n: string) => void>();

/** Toglie gli spazi in più e mette la maiuscola all'inizio di ogni parola ("anna maria" → "Anna Maria"). */
export function pulisciNome(testo: string): string {
  const t = String(testo ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, NOME_LUNGHEZZA_MAX)
    .trim();
  return t
    .split(" ")
    .map((p) => (p ? p.charAt(0).toLocaleUpperCase("it-IT") + p.slice(1) : p))
    .join(" ");
}

// Sul sito il nome si conosce subito, prima che le pagine vengano disegnate.
if (Platform.OS === "web" && typeof window !== "undefined") {
  try {
    nome = pulisciNome(window.localStorage?.getItem(NOME_KEY) ?? "");
  } catch {
    /* ignora */
  }
}

/** Su telefono il nome si legge in modo asincrono: va chiamata una volta all'avvio. */
export async function caricaNomeSalvato(): Promise<void> {
  if (Platform.OS === "web") return;
  try {
    const v = await AsyncStorage.getItem(NOME_KEY);
    if (v) nome = pulisciNome(v);
  } catch {
    /* ignora */
  }
}

/** Il nome della persona ("" se non l'ha ancora detto). */
export function getNome(): string {
  return nome;
}

/** Salva il nome. Restituisce false se il testo è vuoto (in quel caso non cambia nulla). */
export function impostaNome(testo: string): boolean {
  const pulito = pulisciNome(testo);
  if (!pulito) return false;
  nome = pulito;
  if (Platform.OS === "web") {
    try {
      window.localStorage?.setItem(NOME_KEY, pulito);
    } catch {
      /* ignora */
    }
  }
  AsyncStorage.setItem(NOME_KEY, pulito).catch(() => {});
  ascoltatori.forEach((fn) => fn(pulito));
  return true;
}

/** Il nome sempre aggiornato: le pagine si ridisegnano se la persona lo cambia. */
export function useNomeUtente(): string {
  const [n, setN] = useState(nome);
  useEffect(() => {
    setN(nome);
    ascoltatori.add(setN);
    return () => {
      ascoltatori.delete(setN);
    };
  }, []);
  return n;
}
