import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorso } from "../percorso";

// Comune di Tribiano (MI) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e del Distretto Sociale Paullese, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente).
// Una pagina del 2023 riporta anche 02 906290213: si usa 02 906290216, associato all'assistente nella scheda attuale dell'ufficio.
// Il Fondo per la non autosufficienza 2025-2026 (ex Misura B2) del Distretto ha le domande chiuse; la misura regionale è già tra i bonus della Lombardia, quindi non è duplicata a livello di Comune.
// Da verificare con l'ente: associazioni per la disabilità con recapiti, sportello sanitario di riferimento per certificati ed esenzioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const tribiano: ComuneConfig = {
  slug: "tribiano",
  tipo: "comune",
  nome: "Comune di Tribiano",
  nomeBreve: "Tribiano",
  delEnte: "del Comune di Tribiano",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Settore Sociale e Cultura · Segretariato sociale",
  responsabile: "Segretariato sociale",
  indirizzo: "Piazza Giovanni Paolo II, 20067 Tribiano (MI) · ingresso da via Liberazione, piano terra",
  telefono: "02 906290216",
  email: "serviziallapersona@comune.tribiano.mi.it",
  pec: "postacertificata@pec.comune.tribiano.mi.it",
  orari: "Lun 9:00–12:00 accesso libero · lun 14:00–16:30, mer e ven 9:00–13:00 su appuntamento",
  sitoWeb: "https://www.comune.tribiano.mi.it/it-it/amministrazione/uffici/servizi/settore-sociale-e-cultura-5228-1-d2b60c08e52b63f7c864bde73a5262f4",

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
      title: "Segretariato sociale – Tribiano",
      subtitle:
        "Piazza Giovanni Paolo II, ingresso da via Liberazione, piano terra · Tel. 02 906290216 · lun 9:00–12:00 accesso libero; lun 14:00–16:30, mer e ven 9:00–13:00 su appuntamento",
      action: { type: "tel", value: "02906290216" },
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
    "Chiedi ai Servizi sociali di Tribiano (02 906290216) quali servizi di trasporto sociale sono attivi. In Lombardia puoi rivolgerti anche alla Croce Rossa o alla Pubblica Assistenza della tua zona.",

  esenzioneTicket: {
    label: "ATS Città Metropolitana di Milano · Esenzioni",
    url: "https://www.ats-milano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte.
tribiano.percorsoTerritorio = percorso(tribiano.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
tribiano.percorsoTerritorio = { ...tribiano.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
