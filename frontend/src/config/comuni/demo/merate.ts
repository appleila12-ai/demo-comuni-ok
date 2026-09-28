import type { ComuneConfig } from "../types";

// Comune di Merate (LC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const merate: ComuneConfig = {
  slug: "merate",
  tipo: "comune",
  nome: "Comune di Merate",
  nomeBreve: "Merate",
  delEnte: "del Comune di Merate",
  soggetto: "Il Comune",
  provincia: "LC",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Assistenza alla Persona",
  indirizzo: "Piazza degli Eroi 3, 23807 Merate (LC)",
  telefono: "039 5915351",
  email: "servizi.sociali@comune.merate.lc.it",
  orari: "Lun e Mar 9:00–12:00 e 15:30–16:30; Mer e Ven 10:30–13:30",
  sitoWeb: "https://www.comune.merate.lc.it/amministrazione/uffici/ufficio_20.html",

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
      title: "Servizi Sociali – Merate",
      subtitle: "Ufficio Assistenza alla Persona · Piazza degli Eroi 3, 23807 Merate (LC) · Tel. 039 5915351",
      action: { type: "tel", value: "0395915351" },
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

  trasporto: "Chiedi ai Servizi Sociali di Merate (039 5915351) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Lecco · Esenzioni ticket",
    url: "https://www.asst-lecco.it/esenzioni/",
  },

  daVerificare: true,
  dimostrativo: true,
};
