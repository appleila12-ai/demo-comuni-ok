import type { ComuneConfig } from "../types";

// Comune di Augusta (SR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Home del sito del Comune (controllata il 15 ottobre 2026): la pagina dei servizi sociali va cercata e confermata. Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const augusta: ComuneConfig = {
  slug: "augusta",
  tipo: "comune",
  nome: "Comune di Augusta",
  nomeBreve: "Augusta",
  delEnte: "del Comune di Augusta",
  soggetto: "Il Comune",
  provincia: "SR",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.augusta.sr.it",

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
      action: { type: "web", value: "https://www.comune.augusta.sr.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Siracusa",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asp.sr.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Siracusa · Esenzioni ticket",
    url: "https://www.asp.sr.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
