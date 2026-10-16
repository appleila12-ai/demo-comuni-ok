// Cassetto Personale — lettura aggregata dei dati già salvati sul dispositivo.
// Nessuna nuova chiave storage: si leggono le stesse chiavi usate dai singoli
// componenti (vault, tracker, scadenze, lettere, salvati, verbale).
// Il cassetto è SOLO LETTURA: non scrive, non duplica, non invia nulla.

import { storage } from "@/src/utils/storage";
import { loadVaultFiles, subscribeVault, type VaultFile } from "@/src/lib/vault";
import {
  calcolaEventi,
  type Evento,
  type Scadenza,
} from "@/src/lib/scadenze";

// ---- Chiavi (le stesse usate dai rispettivi componenti) ----

const TRACKER_KEY = "tutelapp:tracker";
const SCADENZE_KEY = "tutelapp:scadenze";
const LETTERE_DATI_KEY = "tutelapp:lettere:dati";
const SALVATI_KEY = "tutelapp:salvati";
const VERBALE_KEY = "tutelapp:verbale";

// ---- Tipi ----

export type TappaTracker = {
  id: string;
  title: string;
  done: boolean;
  date?: string;
  note?: string;
};

type TrackerEntry = { date: string; note: string; done: boolean };
type TrackerData = Record<string, TrackerEntry>;

export type DatiLettera = Record<string, string>;

export type SalvatoItem = {
  id: string;
  titolo: string;
  sotto?: string;
  route?: string;
  quando?: number;
};

export type CassettoData = {
  documenti: VaultFile[];
  tappe: TappaTracker[];
  scadenze: Evento[];
  datiLettera: DatiLettera;
  salvati: SalvatoItem[];
  haVerbale: boolean;
};

// ---- Etichette tappe (stessa sequenza di tracker.tsx) ----

const STAGES: { id: string; title: string }[] = [
  { id: "richiesta", title: "Richiesta inviata" },
  { id: "presa_carico", title: "Presa in carico" },
  { id: "uvm", title: "Convocazione UVM" },
  { id: "progetto", title: "Progetto di Vita attivo" },
];

// ---- Caricamento aggregato ----

export async function caricaCassetto(): Promise<CassettoData> {
  const [documenti, trackerRaw, scadenzeRaw, lettereRaw, salvatiRaw, verbaleRaw] =
    await Promise.all([
      loadVaultFiles(),
      storage.getItem<string>(TRACKER_KEY, ""),
      storage.getItem<string>(SCADENZE_KEY, ""),
      storage.getItem<string>(LETTERE_DATI_KEY, ""),
      storage.getItem<string>(SALVATI_KEY, ""),
      storage.getItem<string>(VERBALE_KEY, ""),
    ]);

  // Tappe tracker
  let tappe: TappaTracker[] = [];
  try {
    if (trackerRaw) {
      const parsed = JSON.parse(trackerRaw) as TrackerData;
      tappe = STAGES.map((s) => ({
        id: s.id,
        title: s.title,
        done: !!parsed[s.id]?.done,
        date: parsed[s.id]?.date || undefined,
        note: parsed[s.id]?.note || undefined,
      }));
    }
  } catch {
    /* dati corrotti: ignora */
  }

  // Scadenze → eventi calcolati
  let scadenze: Evento[] = [];
  try {
    if (scadenzeRaw) {
      const lista = JSON.parse(scadenzeRaw) as Scadenza[];
      if (Array.isArray(lista)) scadenze = calcolaEventi(lista);
    }
  } catch {
    /* ignora */
  }

  // Dati lettere (campi personali ricordati)
  let datiLettera: DatiLettera = {};
  try {
    if (lettereRaw) datiLettera = JSON.parse(lettereRaw) as DatiLettera;
  } catch {
    /* ignora */
  }

  // Salvati (segnalibri)
  let salvati: SalvatoItem[] = [];
  try {
    if (salvatiRaw) {
      const parsed = JSON.parse(salvatiRaw);
      if (Array.isArray(parsed)) salvati = parsed as SalvatoItem[];
    }
  } catch {
    /* ignora */
  }

  // Verbale: basta sapere se c'è
  let haVerbale = false;
  try {
    if (verbaleRaw) {
      const v = JSON.parse(verbaleRaw);
      haVerbale = v && typeof v === "object" && Object.keys(v).length > 0;
    }
  } catch {
    /* ignora */
  }

  return { documenti, tappe, scadenze, datiLettera, salvati, haVerbale };
}

// Riesporta il subscribe del vault per aggiornamenti in tempo reale
export { subscribeVault } from "@/src/lib/vault";
