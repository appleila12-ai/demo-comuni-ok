import type { ComuneConfig } from "../types";

// Comune di Massafra (TA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 20 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare. Categoria "Salute, benessere e assistenza" del sito del Comune. Il vecchio indirizzo comunedimassafra.it rimanda a questo sito.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const massafra: ComuneConfig = {
  slug: "massafra",
  tipo: "comune",
  nome: "Comune di Massafra",
  nomeBreve: "Massafra",
  delEnte: "del Comune di Massafra",
  soggetto: "Il Comune",
  provincia: "TA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.massafra.ta.it",

  logo: null,

  theme: {
    warm: "#CF8BCA",
    warmSoft: "#F2DDF0",
    warmDark: "#6E2A69",
    cream: "#F6F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.massafra.ta.it/servizi-categoria/salute-benessere-e-assistenza/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Taranto",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl.taranto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Taranto · Esenzioni ticket",
    url: "https://www.asl.taranto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
