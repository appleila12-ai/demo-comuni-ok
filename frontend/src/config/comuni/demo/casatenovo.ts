import type { ComuneConfig } from "../types";

// Comune di Casatenovo (LC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const casatenovo: ComuneConfig = {
  slug: "casatenovo",
  tipo: "comune",
  nome: "Comune di Casatenovo",
  nomeBreve: "Casatenovo",
  delEnte: "del Comune di Casatenovo",
  soggetto: "Il Comune",
  provincia: "LC",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali",
  indirizzo: "Piazza Repubblica 7, 23880 Casatenovo (LC)",
  telefono: "039 9235282",
  email: "servizio.sociale@comune.casatenovo.lc.it",
  orari: "Lun 9:00–12:30 e 16:00–18:00; Mar, Gio, Ven 9:00–13:00",
  sitoWeb: "https://comune.casatenovo.lc.it/unità-organizzative/2198744/ufficio-servizi-sociali",

  logo: null,

  theme: {
    warm: "#D4A373",
    warmSoft: "#F6EADC",
    warmDark: "#7A4E22",
    cream: "#FAF5EF",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Casatenovo",
      subtitle: "Ufficio Servizi Sociali · Piazza Repubblica 7, 23880 Casatenovo (LC) · Tel. 039 9235282",
      action: { type: "tel", value: "0399235282" },
    },
    {
      icon: "business-outline",
      title: "Ambito di Merate – Retesalute",
      subtitle: "Servizi sociali associati dei Comuni del Meratese (Retesalute, azienda speciale consortile)",
      action: { type: "web", value: "https://www.ambitomerate.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Lecco",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-lecco.it/esenzioni/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Casatenovo (039 9235282) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Lecco · Esenzioni ticket",
    url: "https://www.asst-lecco.it/esenzioni/",
  },

  daVerificare: true,
  dimostrativo: true,
};
