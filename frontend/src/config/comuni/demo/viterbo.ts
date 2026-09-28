import type { ComuneConfig } from "../types";

// Comune di Viterbo (VT) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const viterbo: ComuneConfig = {
  slug: "viterbo",
  tipo: "comune",
  nome: "Comune di Viterbo",
  nomeBreve: "Viterbo",
  delEnte: "del Comune di Viterbo",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "V Settore – Servizi Sociali · Segretariato Sociale",
  indirizzo: "Via del Ginnasio 1, 01100 Viterbo (VT)",
  telefono: "0761 348567",
  email: "segretariatosocialevt@comune.viterbo.it",
  orari: "Lun, Mer, Ven 10:00–12:00; Mar e Gio 15:00–16:30",
  sitoWeb: "https://comune.viterbo.it/amministrazione/unita_organizzativa/ufficio-servizi-amministrativi-sociali/",

  logo: null,

  theme: {
    warm: "#C9A27E",
    warmSoft: "#F3E9DF",
    warmDark: "#6E4A2A",
    cream: "#F8F4F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Viterbo",
      subtitle: "V Settore – Servizi Sociali · Segretariato Sociale · Via del Ginnasio 1, 01100 Viterbo (VT) · Tel. 0761 348567",
      action: { type: "tel", value: "0761348567" },
    },
    {
      icon: "business-outline",
      title: "Distretto Sociosanitario VT3",
      subtitle: "Servizi sociali associati · capofila Comune di Viterbo",
      action: { type: "web", value: "https://comune.viterbo.it/distretto-sociosanitario-vt3/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Viterbo (0761 348567) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
