import type { ComuneConfig } from "../types";

// Comune di Aosta (AO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Sportello sociale della Regione, indicato dal sito del Comune il 14 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const aosta: ComuneConfig = {
  slug: "aosta",
  tipo: "comune",
  nome: "Comune di Aosta",
  nomeBreve: "Aosta",
  delEnte: "del Comune di Aosta",
  soggetto: "Il Comune",
  provincia: "AO",
  regione: "Valle d'Aosta",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.sociale.vda.it/it/sportello-sociale/funzioni-dello-sportello-sociale",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.sociale.vda.it/it/sportello-sociale/funzioni-dello-sportello-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL Valle d'Aosta",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.vda.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL Valle d'Aosta · Esenzioni ticket",
    url: "https://www.ausl.vda.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
