import type { ComuneConfig } from "../types";

// Comune di Foligno (PG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Assistenza sociale" verificati il 18/10/2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const foligno: ComuneConfig = {
  slug: "foligno",
  tipo: "comune",
  nome: "Comune di Foligno",
  nomeBreve: "Foligno",
  delEnte: "del Comune di Foligno",
  soggetto: "Il Comune",
  provincia: "PG",
  regione: "Umbria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.foligno.pg.it",

  logo: null,

  theme: {
    warm: "#C9A24B",
    warmSoft: "#EFE6C8",
    warmDark: "#7E6220",
    cream: "#F6F3E9",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.foligno.pg.it/argomento/assistenza-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Umbria 2",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslumbria2.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Umbria 2",
    url: "https://www.uslumbria2.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
