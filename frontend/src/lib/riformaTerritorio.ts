// Dove la Riforma della disabilità (D.Lgs. 62/2024) è già attiva.
// ----------------------------------------------------------------------------
// Fino al 31/12/2026 la riforma vale solo nelle province in sperimentazione;
// altrove restano le regole attuali (certificato + domanda all'INPS).
// Dal 1/1/2027 vale in tutta Italia.
//
// Fonte: INPS, messaggio n. 637 del 23/02/2026 (elenco delle tre fasi).
// Verificato il 05/10/2026. Da ricontrollare a fine anno: la data nazionale
// è già slittata una volta (decreto Milleproroghe).

import { comune } from "@/src/config/comune";

export const RIFORMA_NAZIONALE = "2027-01-01";
export const RIFORMA_VERIFICATA = "5 ottobre 2026";
export const RIFORMA_FONTE = "INPS, messaggio n. 637 del 23/02/2026";

type Fase = { dal: string; dalTesto: string; sigle: string[] };

const FASI: Fase[] = [
  {
    dal: "2025-01-01",
    dalTesto: "1° gennaio 2025",
    // Brescia, Catanzaro, Firenze, Forlì-Cesena, Frosinone, Perugia, Salerno, Sassari, Trieste
    sigle: ["BS", "CZ", "FI", "FC", "FR", "PG", "SA", "SS", "TS"],
  },
  {
    dal: "2025-09-30",
    dalTesto: "30 settembre 2025",
    // Alessandria, Genova, Isernia, Lecce, Macerata, Matera, Palermo, Teramo,
    // Vicenza, Valle d'Aosta, Provincia autonoma di Trento
    sigle: ["AL", "GE", "IS", "LE", "MC", "MT", "PA", "TE", "VI", "AO", "TN"],
  },
  {
    dal: "2026-03-01",
    dalTesto: "1° marzo 2026",
    // Ancona, Arezzo, Ascoli Piceno, Asti, Bergamo, Bologna, Bolzano, Brindisi,
    // Cagliari, Caltanissetta, Campobasso, Caserta, Catania, Chieti, Como,
    // Cosenza, Crotone, Cuneo, La Spezia, Massa-Carrara, Messina, Milano,
    // Mantova, Pavia, Piacenza, Pordenone, Potenza, Ravenna, Reggio Calabria,
    // Rimini, Roma, Savona, Sondrio, Terni, Torino, Treviso, Udine, Venezia,
    // Verona, Vibo Valentia
    sigle: [
      "AN", "AR", "AP", "AT", "BG", "BO", "BZ", "BR", "CA", "CL",
      "CB", "CE", "CT", "CH", "CO", "CS", "KR", "CN", "SP", "MS",
      "ME", "MI", "MN", "PV", "PC", "PN", "PZ", "RA", "RC", "RN",
      "RM", "SV", "SO", "TR", "TO", "TV", "UD", "VE", "VR", "VV",
    ],
  },
];

export type StatoRiforma = {
  /** true = nel territorio del Comune valgono già le regole della riforma */
  attiva: boolean;
  /** Frase breve da mostrare al cittadino */
  frase: string;
};

function oggiISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Stato della riforma per una provincia (sigla, es. "SP"). */
export function statoRiformaProvincia(sigla: string | undefined): StatoRiforma {
  if (oggiISO() >= RIFORMA_NAZIONALE) {
    return { attiva: true, frase: "La riforma vale in tutta Italia dal 1° gennaio 2027." };
  }
  const s = (sigla ?? "").trim().toUpperCase();
  const fase = FASI.find((f) => f.sigle.includes(s));
  if (fase) {
    return {
      attiva: true,
      frase: `Nella tua provincia la riforma è già attiva dal ${fase.dalTesto}.`,
    };
  }
  return {
    attiva: false,
    frase:
      "Nella tua provincia la riforma non è ancora attiva: fino al 31 dicembre 2026 valgono le regole attuali. Dal 1° gennaio 2027 cambierà.",
  };
}

/** Stato della riforma per il Comune attivo nell'app. */
export function statoRiforma(): StatoRiforma {
  return statoRiformaProvincia(comune.provincia);
}
