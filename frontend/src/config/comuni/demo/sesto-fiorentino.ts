import type { ComuneConfig } from "../types";

// Comune di Sesto Fiorentino (FI) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Salute, benessere e assistenza" verificati il 18/10/2026. Bonus, associazioni e sport nei file condivisi (bonus.ts, associazioni.ts).
// Da confermare con l'ente: telefono, email, indirizzo e orari dei Servizi Sociali.
export const sestoFiorentino: ComuneConfig = {
  slug: "sesto-fiorentino",
  tipo: "comune",
  nome: "Comune di Sesto Fiorentino",
  nomeBreve: "Sesto Fiorentino",
  delEnte: "del Comune di Sesto Fiorentino",
  soggetto: "Il Comune",
  provincia: "FI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.sesto-fiorentino.fi.it",

  logo: null,

  theme: {
    warm: "#E3A94A",
    warmSoft: "#F7E7C6",
    warmDark: "#A86F1F",
    cream: "#F7F3EA",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.sesto-fiorentino.fi.it/servizi/salute-benessere-e-assistenza" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Centro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslcentro.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Centro",
    url: "https://www.uslcentro.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
