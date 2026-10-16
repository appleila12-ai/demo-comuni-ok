import type { ComuneConfig } from "../types";

// Comune di Padova (PD) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Home del sito del Comune, controllata il 13 ottobre 2026; la pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const padova: ComuneConfig = {
  slug: "padova",
  tipo: "comune",
  nome: "Comune di Padova",
  nomeBreve: "Padova",
  delEnte: "del Comune di Padova",
  soggetto: "Il Comune",
  provincia: "PD",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "049 8205111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.padova.it",

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
      action: { type: "web", value: "https://www.comune.padova.it" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 6 Euganea",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss6.veneto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ULSS 6 Euganea · Esenzioni ticket",
    url: "https://www.aulss6.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
