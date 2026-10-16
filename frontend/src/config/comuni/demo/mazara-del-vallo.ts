import type { ComuneConfig } from "../types";

// Comune di Mazara del Vallo (TP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina "Salute, benessere e assistenza" del sito del Comune (controllata il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const mazaraDelVallo: ComuneConfig = {
  slug: "mazara-del-vallo",
  tipo: "comune",
  nome: "Comune di Mazara del Vallo",
  nomeBreve: "Mazara del Vallo",
  delEnte: "del Comune di Mazara del Vallo",
  soggetto: "Il Comune",
  provincia: "TP",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0923 671111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.mazaradelvallo.tp.it/it/page/salute-benessere-e-assistenza-299?fromService=1",

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
      action: { type: "web", value: "https://www.comune.mazaradelvallo.tp.it/it/page/salute-benessere-e-assistenza-299?fromService=1" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Trapani",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asptrapani.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Trapani · Esenzioni ticket",
    url: "https://www.asptrapani.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
