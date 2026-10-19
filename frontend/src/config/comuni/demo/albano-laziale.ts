import type { ComuneConfig } from "../types";

// Comune di Albano Laziale (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 19 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare. Categoria "Salute, benessere e assistenza" del sito del Comune; il sito indica il Consorzio dei Laghi come ente che gestisce i servizi sociali del Distretto RM 6.2.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const albanoLaziale: ComuneConfig = {
  slug: "albano-laziale",
  tipo: "comune",
  nome: "Comune di Albano Laziale",
  nomeBreve: "Albano Laziale",
  delEnte: "del Comune di Albano Laziale",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.albanolaziale.rm.it",

  logo: null,

  theme: {
    warm: "#B88BCF",
    warmSoft: "#EBDDF2",
    warmDark: "#572A6E",
    cream: "#F5F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.albanolaziale.rm.it/servizi-categoria/salute-benessere-e-assistenza/" },
    },
    {
      icon: "business-outline",
      title: "Consorzio dei Laghi",
      subtitle: "Gestisce interventi e servizi sociali dei Comuni del Distretto sociosanitario RM 6.2, tra cui Albano Laziale",
      action: { type: "web", value: "https://consorziodeilaghi.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 6",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma6.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 6 · Esenzioni ticket",
    url: "https://www.aslroma6.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
