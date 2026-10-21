import type { ComuneConfig } from "../types";

// Comune di Jesi (AN) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 19 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare. Categoria "Salute, benessere e assistenza" del sito del Comune; il sito indica l'ASP Ambito 9 come azienda che gestisce le funzioni socio-assistenziali.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const jesi: ComuneConfig = {
  slug: "jesi",
  tipo: "comune",
  nome: "Comune di Jesi",
  nomeBreve: "Jesi",
  delEnte: "del Comune di Jesi",
  soggetto: "Il Comune",
  provincia: "AN",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.jesi.an.it",

  logo: null,

  theme: {
    warm: "#B49AC7",
    warmSoft: "#EEE6F4",
    warmDark: "#5A3E73",
    cream: "#F6F3F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.jesi.an.it/servizi-categoria/-/category_servizi-categoria/41886" },
    },
    {
      icon: "business-outline",
      title: "ASP Ambito 9",
      subtitle: "Azienda Servizi alla Persona: gestisce le funzioni socio-assistenziali dell'ambito di Jesi",
      action: { type: "web", value: "http://www.aspambitonove.it/" },
    },
    {
      icon: "medkit-outline",
      title: "AST Ancona",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ast-ancona.marche.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AST Ancona · Esenzioni ticket",
    url: "https://www.ast-ancona.marche.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
