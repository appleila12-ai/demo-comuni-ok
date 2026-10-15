import type { ComuneConfig } from "../types";

// Comune di Terracina (LT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina "Salute, benessere e assistenza" del sito del Comune (controllata il 15 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const terracina: ComuneConfig = {
  slug: "terracina",
  tipo: "comune",
  nome: "Comune di Terracina",
  nomeBreve: "Terracina",
  delEnte: "del Comune di Terracina",
  soggetto: "Il Comune",
  provincia: "LT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.terracina.lt.it/servizi/categoria-servizi/2703112",

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
      action: { type: "web", value: "https://comune.terracina.lt.it/servizi/categoria-servizi/2703112" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Latina",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.latina.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Latina · Esenzioni ticket",
    url: "https://www.ausl.latina.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
