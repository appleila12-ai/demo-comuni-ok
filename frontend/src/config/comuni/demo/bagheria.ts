import type { ComuneConfig } from "../types";

// Comune di Bagheria (PA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina del Distretto socio-sanitario 39 del sito del Comune (controllata il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const bagheria: ComuneConfig = {
  slug: "bagheria",
  tipo: "comune",
  nome: "Comune di Bagheria",
  nomeBreve: "Bagheria",
  delEnte: "del Comune di Bagheria",
  soggetto: "Il Comune",
  provincia: "PA",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.bagheria.pa.it/it/page/133342",

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
      action: { type: "web", value: "https://www.comune.bagheria.pa.it/it/page/133342" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Palermo",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asppalermo.org" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Palermo · Esenzioni ticket",
    url: "https://www.asppalermo.org",
  },

  daVerificare: true,
  dimostrativo: true,
};
