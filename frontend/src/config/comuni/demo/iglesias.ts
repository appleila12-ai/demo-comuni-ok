import type { ComuneConfig } from "../types";

// Comune di Iglesias (SU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 19 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare. Pagina "Politiche Sociali" dal menu del sito del Comune. Iglesias è capoluogo, insieme a Carbonia, della provincia del Sulcis Iglesiente. Sigla provincia come nelle altre schede sarde già presenti: la riforma delle province del 2025 è da recepire per tutti i Comuni sardi.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const iglesias: ComuneConfig = {
  slug: "iglesias",
  tipo: "comune",
  nome: "Comune di Iglesias",
  nomeBreve: "Iglesias",
  delEnte: "del Comune di Iglesias",
  soggetto: "Il Comune",
  provincia: "SU",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.iglesias.ca.it",

  logo: null,

  theme: {
    warm: "#938BCF",
    warmSoft: "#E0DDF2",
    warmDark: "#322A6E",
    cream: "#F3F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.iglesias.ca.it/it/tematiche/servizi-sociali/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Sulcis",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslsulcis.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Sulcis · Esenzioni ticket",
    url: "https://www.aslsulcis.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
