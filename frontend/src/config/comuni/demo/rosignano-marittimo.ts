import type { ComuneConfig } from "../types";

// Comune di Rosignano Marittimo (LI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Azienda sanitaria non indicata: da cercare. Lo stesso indirizzo compare nei documenti ufficiali trovati con la ricerca.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const rosignanoMarittimo: ComuneConfig = {
  slug: "rosignano-marittimo",
  tipo: "comune",
  nome: "Comune di Rosignano Marittimo",
  nomeBreve: "Rosignano Marittimo",
  delEnte: "del Comune di Rosignano Marittimo",
  soggetto: "Il Comune",
  provincia: "LI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.rosignano.livorno.it",

  logo: null,

  theme: {
    warm: "#CFC38B",
    warmSoft: "#F2EEDD",
    warmDark: "#6E622A",
    cream: "#F6F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.rosignano.livorno.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.rosignano.livorno.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
