import type { ComuneConfig } from "../types";

// Comune di Taranto (TA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Argomento "Assistenza sociale" del sito del Comune, controllato il 13 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const taranto: ComuneConfig = {
  slug: "taranto",
  tipo: "comune",
  nome: "Comune di Taranto",
  nomeBreve: "Taranto",
  delEnte: "del Comune di Taranto",
  soggetto: "Il Comune",
  provincia: "TA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "099 4581111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.taranto.it/it/topics/7",

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
      action: { type: "web", value: "https://www.comune.taranto.it/it/topics/7" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Taranto",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it/web/asl-taranto" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Taranto · Esenzioni ticket",
    url: "https://www.sanita.puglia.it/web/asl-taranto",
  },

  daVerificare: true,
  dimostrativo: true,
};
