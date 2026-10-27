import type { ComuneConfig } from "../types";

// Comune di San Giuliano Milanese (MI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 19 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare. Categoria "Salute, benessere e assistenza" del sito del Comune.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const sanGiulianoMilanese: ComuneConfig = {
  slug: "san-giuliano-milanese",
  tipo: "comune",
  nome: "Comune di San Giuliano Milanese",
  nomeBreve: "San Giuliano Milanese",
  delEnte: "del Comune di San Giuliano Milanese",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "comune.sangiulianomilanese@cert.legalmail.it",
  orari: "",
  sitoWeb: "https://comune.sangiulianomilanese.mi.it",

  logo: null,

  theme: {
    warm: "#8BCFC0",
    warmSoft: "#DDF2ED",
    warmDark: "#2A6E60",
    cream: "#F2F6F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.sangiulianomilanese.mi.it/servizio/tipologia/salute-benessere-e-assistenza/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Melegnano e della Martesana",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-melegnano-martesana.it/" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Melegnano e della Martesana · Esenzioni ticket",
    url: "https://www.asst-melegnano-martesana.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
