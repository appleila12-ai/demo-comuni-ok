// Copia di sicurezza dei dati che esistono SOLO dentro TutelApp: appuntamenti e scadenze,
// tappe della pratica, dati delle lettere, salvati, Progetto di Vita, elenco documenti.
// I documenti originali NON sono inclusi: restano dove la persona li ha presi
// (telefono, Foto, File). La copia è un file che la persona conserva dove vuole;
// TutelApp non la invia a nessuno.

import { Platform } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system/legacy";

import { comune } from "@/src/config/comune";
import { scaricaFile } from "@/src/lib/documenti";
import { getNome, impostaNome } from "@/src/lib/nomeUtente";
import { storage } from "@/src/utils/storage";

/** Chiavi incluse nella copia (si leggono e si scrivono sempre per il Comune attivo). */
export const CHIAVI_COPIA = [
  "tutelapp:scadenze",
  "tutelapp:tracker",
  "tutelapp:lettere:dati",
  "tutelapp:reclamo:dati",
  "tutelapp:salvati",
  "tutelapp:verbale",
  "tutelapp:progetto",
  "tutelapp:agevolazioni",
  "tutelapp:contatti",
  "tutelapp:hub:momento",
  "tutelapp:promemoria-impostazioni",
  "tutelapp:paese",
  "salutenav:regione",
  "salutenav:reports",
  "salutenav:vaultFiles",
] as const;

const VAULT_KEY = "salutenav:vaultFiles";

export type Copia = {
  app: "TutelApp";
  versione: 1;
  creata: string;
  comune: string;
  /** il nome della persona (non legato al Comune); le copie vecchie non ce l'hanno */
  nome?: string;
  dati: Record<string, string>;
};

const dueCifre = (n: number) => String(n).padStart(2, "0");

export function nomeFileCopia(adesso = new Date()): string {
  return `TutelApp-copia-${adesso.getFullYear()}-${dueCifre(adesso.getMonth() + 1)}-${dueCifre(adesso.getDate())}.json`;
}

/** Legge i dati del Comune attivo e li mette in un testo JSON. */
export async function creaCopia(adesso = new Date()): Promise<{ testo: string; nomeFile: string; voci: number }> {
  const dati: Record<string, string> = {};
  for (const chiave of CHIAVI_COPIA) {
    const v = await storage.getItem<string>(chiave, "");
    if (typeof v === "string" && v) dati[chiave] = v;
  }
  // Nell'elenco documenti si tolgono gli indirizzi dei file: valgono solo su questo dispositivo.
  if (dati[VAULT_KEY]) {
    try {
      const lista = JSON.parse(dati[VAULT_KEY]);
      if (Array.isArray(lista)) {
        dati[VAULT_KEY] = JSON.stringify(lista.map((f: any) => ({ ...f, uri: undefined })));
      }
    } catch {
      delete dati[VAULT_KEY];
    }
  }
  const copia: Copia = {
    app: "TutelApp",
    versione: 1,
    creata: adesso.toISOString(),
    comune: comune.nome,
    ...(getNome() ? { nome: getNome() } : {}),
    dati,
  };
  return { testo: JSON.stringify(copia), nomeFile: nomeFileCopia(adesso), voci: Object.keys(dati).length };
}

/** Crea la copia e la consegna: sul sito si scarica il file, sul telefono si apre la condivisione. */
export async function consegnaCopia(): Promise<{ voci: number }> {
  const { testo, nomeFile, voci } = await creaCopia();
  await scaricaFile(nomeFile, testo, "application/json");
  return { voci };
}

/** Controlla che il testo sia una copia di TutelApp e che si possa leggere. */
export function leggiCopia(testo: string): Copia | null {
  try {
    const c = JSON.parse(testo);
    if (!c || c.app !== "TutelApp" || c.versione !== 1) return null;
    if (!c.dati || typeof c.dati !== "object" || Array.isArray(c.dati)) return null;
    return c as Copia;
  } catch {
    return null;
  }
}

/** Scrive i dati della copia (solo le chiavi note, solo testi) nel Comune attivo. */
export async function applicaCopia(c: Copia): Promise<{ scritte: number }> {
  let scritte = 0;
  for (const chiave of CHIAVI_COPIA) {
    const v = c.dati[chiave];
    if (typeof v !== "string" || !v) continue;
    if (await storage.setItem(chiave, v)) scritte += 1;
  }
  // Il nome si ripristina solo se qui non c'è già: non si sovrascrive quello scelto adesso
  if (c.nome && !getNome()) impostaNome(c.nome);
  return { scritte };
}

/** Fa scegliere un file di copia e ne restituisce il contenuto (null = scelta annullata). */
export async function scegliFileCopia(): Promise<string | null> {
  const res = await DocumentPicker.getDocumentAsync({
    type: "*/*",
    copyToCacheDirectory: true,
    multiple: false,
  });
  if (res.canceled || !res.assets?.length) return null;
  const uri = res.assets[0].uri;
  if (Platform.OS === "web") {
    const r = await fetch(uri);
    return await r.text();
  }
  return await FileSystem.readAsStringAsync(uri);
}
