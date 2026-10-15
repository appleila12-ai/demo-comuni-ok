import type { ComuneConfig } from "../types";

// Comune di Favara (AG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune non è leggibile in automatico (robots): indirizzo e pagina dei servizi sociali vanno verificati. Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const favara: ComuneConfig = {
  slug: "favara",
  tipo: "comune",
  nome: "Comune di Favara",
  nomeBreve: "Favara",
  delEnte: "del Comune di Favara",
  soggetto: "Il Comune",
  provincia: "AG",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.favara.ag.it",

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
      action: { type: "web", value: "https://www.comune.favara.ag.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Agrigento",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aspag.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Agrigento · Esenzioni ticket",
    url: "https://www.aspag.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
