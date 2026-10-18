import type { ComuneConfig } from "../types";

// Comune di Merano (BZ) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dominio del Comune verificato il 18/10/2026 (sito non leggibile in automatico): la pagina dei servizi sociali va cercata e confermata. Comune bilingue (italiano/tedesco).
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const merano: ComuneConfig = {
  slug: "merano",
  tipo: "comune",
  nome: "Comune di Merano",
  nomeBreve: "Merano",
  delEnte: "del Comune di Merano",
  soggetto: "Il Comune",
  provincia: "BZ",
  regione: "Trentino-Alto Adige",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.merano.bz.it",

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
      action: { type: "web", value: "https://www.comune.merano.bz.it" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda Sanitaria dell'Alto Adige",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sabes.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda Sanitaria dell'Alto Adige",
    url: "https://www.sabes.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
