import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorso } from "../percorso";

// Comune di Paullo (MI) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e del Distretto Sociale Paullese, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente).
// Nessuna email ordinaria dei servizi sociali trovata (solo la PEC): il destinatario di 'Scrivi al tuo Comune' è l'email del protocollo.
// Il Fondo per la non autosufficienza 2025-2026 (ex Misura B2) del Distretto ha le domande chiuse; la misura regionale è già tra i bonus della Lombardia, quindi non è duplicata a livello di Comune.
// Da verificare con l'ente: associazioni per la disabilità con recapiti, sportello sanitario di riferimento per certificati ed esenzioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const paullo: ComuneConfig = {
  slug: "paullo",
  tipo: "comune",
  nome: "Comune di Paullo",
  nomeBreve: "Paullo",
  delEnte: "del Comune di Paullo",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi sociali",
  responsabile: "Servizi sociali",
  indirizzo: "Via del Ronco 5, 20067 Paullo (MI)",
  telefono: "02 90632454",
  email: "",
  pec: "servizisociali@pec.comune.paullo.mi.it",
  orari: "Segretariato sociale mercoledì 8:30–10:30 su appuntamento · altri giorni su appuntamento",
  sitoWeb: "https://comune.paullo.mi.it/it/unita_organizzative/servizi-sociali",

  logo: null,

  theme: {
    warm: "#C3B4D9",
    warmSoft: "#ECE6F4",
    warmDark: "#5B4682",
    cream: "#F6F4F1",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi sociali – Paullo",
      subtitle:
        "Via del Ronco 5 · Tel. 02 90632454 · segretariato mercoledì 8:30–10:30 su appuntamento; altri giorni su appuntamento",
      action: { type: "tel", value: "0290632454" },
    },
    {
      icon: "git-network-outline",
      title: "Distretto Sociale Paullese – Ufficio di Piano",
      subtitle:
        "Servizi sociali gestiti insieme da Mediglia, Pantigliate, Paullo, Peschiera Borromeo (capofila) e Tribiano · Via XXV Aprile 1, Peschiera Borromeo · Tel. 02 51690595 / 02 516902.57 / 02 516902.14 · distrettosociale1@comune.peschieraborromeo.mi.it",
      action: { type: "tel", value: "0251690595" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi sociali di Paullo (02 90632454) quali servizi di trasporto sociale sono attivi. In Lombardia puoi rivolgerti anche alla Croce Rossa o alla Pubblica Assistenza della tua zona.",

  esenzioneTicket: {
    label: "ATS Città Metropolitana di Milano · Esenzioni",
    url: "https://www.ats-milano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte.
paullo.percorsoTerritorio = percorso(paullo.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
paullo.percorsoTerritorio = { ...paullo.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
