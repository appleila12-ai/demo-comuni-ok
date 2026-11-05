import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorso } from "../percorso";

// Comune di Pantigliate (MI) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e del Distretto Sociale Paullese, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente).
// Il portale elenca anche contributi per le barriere architettoniche: requisiti e importi non trovati, non inseriti.
// Il Fondo per la non autosufficienza 2025-2026 (ex Misura B2) del Distretto ha le domande chiuse; la misura regionale è già tra i bonus della Lombardia, quindi non è duplicata a livello di Comune.
// Da verificare con l'ente: associazioni per la disabilità con recapiti, sportello sanitario di riferimento per certificati ed esenzioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const pantigliate: ComuneConfig = {
  slug: "pantigliate",
  tipo: "comune",
  nome: "Comune di Pantigliate",
  nomeBreve: "Pantigliate",
  delEnte: "del Comune di Pantigliate",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi sociali e servizi alla persona",
  responsabile: "Assistente sociale",
  indirizzo: "Piazza Comunale 10, Villa Mora, 20068 Pantigliate (MI)",
  telefono: "02 906886402",
  email: "servizisociali@comune.pantigliate.mi.it",
  pec: "comune.pantigliate@legalmail.it",
  orari: "Lun e mer 9:00–12:00 su appuntamento · mar 16:00–18:30 e ven 9:00–12:00 accesso libero",
  sitoWeb: "https://www.comune.pantigliate.mi.it/it/unita_organizzative/servizi-sociali-e-servizi-alla-persona",

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
      title: "Servizi sociali – Pantigliate",
      subtitle:
        "Assistente sociale · Piazza Comunale 10, Villa Mora · Tel. 02 906886402 · lun e mer 9:00–12:00 su appuntamento; mar 16:00–18:30 e ven 9:00–12:00 accesso libero · assistentesociale@comune.pantigliate.mi.it",
      action: { type: "tel", value: "02906886402" },
    },
    {
      icon: "git-network-outline",
      title: "Distretto Sociale Paullese – Ufficio di Piano",
      subtitle:
        "Servizi sociali gestiti insieme da Mediglia, Pantigliate, Paullo, Peschiera Borromeo (capofila) e Tribiano · Via XXV Aprile 1, Peschiera Borromeo · Tel. 02 516902.57 / 02 516902.14 · distrettosociale1@comune.peschieraborromeo.mi.it",
      action: { type: "tel", value: "0251690257" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi sociali di Pantigliate (02 906886402) quali servizi di trasporto sociale sono attivi. In Lombardia puoi rivolgerti anche alla Croce Rossa o alla Pubblica Assistenza della tua zona.",

  esenzioneTicket: {
    label: "ATS Città Metropolitana di Milano · Esenzioni",
    url: "https://www.ats-milano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte.
pantigliate.percorsoTerritorio = percorso(pantigliate.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
pantigliate.percorsoTerritorio = { ...pantigliate.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
