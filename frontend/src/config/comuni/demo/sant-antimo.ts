import type { ComuneConfig } from "../types";

// Comune di Sant'Antimo (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 20 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare. Categoria "Salute, benessere e assistenza" del sito del Comune; il sito non ha una pagina chiamata "Servizi Sociali".
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const santAntimo: ComuneConfig = {
  slug: "sant-antimo",
  tipo: "comune",
  nome: "Comune di Sant'Antimo",
  nomeBreve: "Sant'Antimo",
  delEnte: "del Comune di Sant'Antimo",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.santantimo.na.it",

  logo: null,

  theme: {
    warm: "#B9A27C",
    warmSoft: "#F1EBE0",
    warmDark: "#5E4A27",
    cream: "#F7F4EF",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.santantimo.na.it/area_letturaServizio/pagsistema.html?type=28" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 2 Nord",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli2nord.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 2 Nord · Esenzioni ticket",
    url: "https://www.aslnapoli2nord.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
