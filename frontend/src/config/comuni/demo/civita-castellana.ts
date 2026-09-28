import type { ComuneConfig } from "../types";

// Comune di Civita Castellana (VT) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. Email non trovata: da inserire.
export const civitaCastellana: ComuneConfig = {
  slug: "civita-castellana",
  tipo: "comune",
  nome: "Comune di Civita Castellana",
  nomeBreve: "Civita Castellana",
  delEnte: "del Comune di Civita Castellana",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali",
  indirizzo: "Corso Buozzi 17, 01033 Civita Castellana (VT)",
  telefono: "0761 590311",
  email: "",
  orari: "Mar 9:00–13:00; Gio 9:00–13:00 e 15:00–17:00",
  sitoWeb: "https://comune.civitacastellana.vt.it/amministrazione/unita_organizzativa/ufficio-servizi-sociali/",

  logo: null,

  theme: {
    warm: "#A9A3CF",
    warmSoft: "#ECEAF6",
    warmDark: "#4A4480",
    cream: "#F5F4FA",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Civita Castellana",
      subtitle: "Ufficio Servizi Sociali · Corso Buozzi 17, 01033 Civita Castellana (VT) · Tel. 0761 590311",
      action: { type: "tel", value: "0761590311" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Civita Castellana (0761 590311) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
