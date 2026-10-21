import type { ComuneConfig } from "../types";

// Comune di Quarto (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 19 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare. Argomento "Assistenza sociale" del sito del Comune.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const quarto: ComuneConfig = {
  slug: "quarto",
  tipo: "comune",
  nome: "Comune di Quarto",
  nomeBreve: "Quarto",
  delEnte: "del Comune di Quarto",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.quarto.na.it",

  logo: null,

  theme: {
    warm: "#8BCF9B",
    warmSoft: "#DDF2E2",
    warmDark: "#2A6E3A",
    cream: "#F2F6F3",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.quarto.na.it/argomento/assistenza-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 2 Nord",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli2nord.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 2 Nord · Esenzioni ticket",
    url: "https://www.aslnapoli2nord.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
