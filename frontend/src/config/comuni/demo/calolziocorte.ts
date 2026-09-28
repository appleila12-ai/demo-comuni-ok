import type { ComuneConfig } from "../types";

// Comune di Calolziocorte (LC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. Email nominativa (l'unica pubblicata): chiedere un indirizzo d'ufficio.
export const calolziocorte: ComuneConfig = {
  slug: "calolziocorte",
  tipo: "comune",
  nome: "Comune di Calolziocorte",
  nomeBreve: "Calolziocorte",
  delEnte: "del Comune di Calolziocorte",
  soggetto: "Il Comune",
  provincia: "LC",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore 4 – Servizi alla Persona e alla Famiglia",
  indirizzo: "Piazza Vittorio Veneto 13, 23801 Calolziocorte (LC)",
  telefono: "0341 639216",
  email: "battiata.mariaconcetta@comune.calolziocorte.lc.it",
  orari: "Lun 14:30–17:30; Mar 8:30–14:30; Gio 9:30–12:30",
  sitoWeb: "https://www.comune.calolziocorte.lc.it/Amministrazione/Uffici/Servizi-Sociali",

  logo: null,

  theme: {
    warm: "#8FB5A6",
    warmSoft: "#E3EFEA",
    warmDark: "#355E50",
    cream: "#F3F7F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Calolziocorte",
      subtitle: "Settore 4 – Servizi alla Persona e alla Famiglia · Piazza Vittorio Veneto 13, 23801 Calolziocorte (LC) · Tel. 0341 639216",
      action: { type: "tel", value: "0341639216" },
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

  trasporto: "Chiedi ai Servizi Sociali di Calolziocorte (0341 639216) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Lecco · Esenzioni ticket",
    url: "https://www.asst-lecco.it/esenzioni/",
  },

  daVerificare: true,
  dimostrativo: true,
};
