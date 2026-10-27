import type { ComuneConfig } from "../types";

// Comune di Capannori (LU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Assistenza sociale" verificati il 18/10/2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const capannori: ComuneConfig = {
  slug: "capannori",
  tipo: "comune",
  nome: "Comune di Capannori",
  nomeBreve: "Capannori",
  delEnte: "del Comune di Capannori",
  soggetto: "Il Comune",
  provincia: "LU",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "pg.comune.capannori.lu.it@cert.legalmail.it",
  orari: "",
  sitoWeb: "https://www.comune.capannori.lu.it",

  logo: null,

  theme: {
    warm: "#D98A8A",
    warmSoft: "#F6E0E0",
    warmDark: "#8F3B3B",
    cream: "#F8F2F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.capannori.lu.it/argomento/assistenza-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
