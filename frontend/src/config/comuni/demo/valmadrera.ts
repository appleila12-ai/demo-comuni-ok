import type { ComuneConfig } from "../types";

// Comune di Valmadrera (LC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const valmadrera: ComuneConfig = {
  slug: "valmadrera",
  tipo: "comune",
  nome: "Comune di Valmadrera",
  nomeBreve: "Valmadrera",
  delEnte: "del Comune di Valmadrera",
  soggetto: "Il Comune",
  provincia: "LC",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali",
  indirizzo: "Via Roma 31, 23868 Valmadrera (LC)",
  telefono: "0341 205235",
  email: "tutelaminori@comune.valmadrera.lc.it",
  pec: "info@pec.comune.valmadrera.lc.it",
  orari: "Su appuntamento, Lun–Ven; al telefono 9:00–12:30",
  sitoWeb: "https://www.comune.valmadrera.lc.it/it/organizational_unit/ufficio-servizi-sociali-tutela-minori",

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
      title: "Servizi Sociali – Valmadrera",
      subtitle: "Ufficio Servizi Sociali · Via Roma 31, 23868 Valmadrera (LC) · Tel. 0341 205235",
      action: { type: "tel", value: "0341205235" },
    },
    {
      icon: "business-outline",
      title: "Ambito Territoriale di Lecco",
      subtitle: "Servizi sociali associati · capofila Comune di Lecco, Via M. D'Oggiono 15",
      action: { type: "web", value: "https://www.comune.lecco.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Lecco",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-lecco.it/esenzioni/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Valmadrera (0341 205235) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Lecco · Esenzioni ticket",
    url: "https://www.asst-lecco.it/esenzioni/",
  },

  daVerificare: true,
  dimostrativo: true,
};
