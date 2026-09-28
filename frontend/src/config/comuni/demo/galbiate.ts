import type { ComuneConfig } from "../types";

// Comune di Galbiate (LC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const galbiate: ComuneConfig = {
  slug: "galbiate",
  tipo: "comune",
  nome: "Comune di Galbiate",
  nomeBreve: "Galbiate",
  delEnte: "del Comune di Galbiate",
  soggetto: "Il Comune",
  provincia: "LC",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Struttura 6 – Servizi Sociali",
  indirizzo: "Piazza Martiri della Liberazione 6, 23851 Galbiate (LC)",
  telefono: "0341 2414252",
  email: "centromed@comune.galbiate.lc.it",
  pec: "galbiate@cert.legalmail.it",
  orari: "Lun–Ven 8:30–12:30; Lun anche 13:00–17:00; Mer e Ven 14:00–16:00",
  sitoWeb: "https://www.comune.galbiate.lc.it/it-it/amministrazione/aree/struttura-6-servizi-sociali-1224-1-0ae3b220235a56f8818b26335ec4af5b",

  logo: null,

  theme: {
    warm: "#88AFC7",
    warmSoft: "#E2EDF4",
    warmDark: "#2F5874",
    cream: "#F3F6F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Galbiate",
      subtitle: "Struttura 6 – Servizi Sociali · Piazza Martiri della Liberazione 6, 23851 Galbiate (LC) · Tel. 0341 2414252",
      action: { type: "tel", value: "03412414252" },
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

  trasporto: "Chiedi ai Servizi Sociali di Galbiate (0341 2414252) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Lecco · Esenzioni ticket",
    url: "https://www.asst-lecco.it/esenzioni/",
  },

  daVerificare: true,
  dimostrativo: true,
};
