import type { ComuneConfig } from "../types";

// Comune di Cesena (FC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: email
export const cesena: ComuneConfig = {
  slug: "cesena",
  tipo: "comune",
  nome: "Comune di Cesena",
  nomeBreve: "Cesena",
  delEnte: "del Comune di Cesena",
  soggetto: "Il Comune",
  provincia: "FC",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "Unione dei Comuni Valle del Savio – Settore Servizi Sociali",
  indirizzo: "Piazzetta Cesenati del 1377 n. 1 (Palazzo Comunale, ingresso lato Rocca), 47521 Cesena (FC)",
  telefono: "0547 356856",
  email: "protocollo@unionevallesavio.it",
  pec: "protocollo@pec.unionevallesavio.it",
  orari: "Lun, Mar e Gio 13:00–15:00; Mer 9:00–12:00 (su appuntamento)",
  sitoWeb: "https://www.unionevallesavio.it/en/contatti-servizi-sociali",

  logo: null,

  theme: {
    warm: "#CF8B93",
    warmSoft: "#F2DDE0",
    warmDark: "#6E2A32",
    cream: "#F6F2F3",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Cesena",
      subtitle: "Unione dei Comuni Valle del Savio – Settore Servizi Sociali · Piazzetta Cesenati del 1377 n. 1 (Palazzo Comunale, ingresso lato Rocca), 47521 Cesena (FC) · Tel. 0547 356856",
      action: { type: "tel", value: "0547356856" },
    },
    {
      icon: "business-outline",
      title: "Unione dei Comuni Valle del Savio",
      subtitle: "Ente che gestisce i servizi sociali di Cesena e dei comuni della valle",
      action: { type: "tel", value: "0547356111" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL della Romagna",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.auslromagna.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Cesena (0547 356856) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AUSL della Romagna · Esenzioni ticket",
    url: "https://www.auslromagna.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
