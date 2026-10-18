import type { ComuneConfig } from "../types";

// Comune di Avezzano (AQ) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Salute, benessere e assistenza" verificati il 18/10/2026. Bonus, associazioni e sport nei file condivisi.
// Da confermare con l'ente: telefono, email, indirizzo e orari dei Servizi Sociali.
export const avezzano: ComuneConfig = {
  slug: "avezzano",
  tipo: "comune",
  nome: "Comune di Avezzano",
  nomeBreve: "Avezzano",
  delEnte: "del Comune di Avezzano",
  soggetto: "Il Comune",
  provincia: "AQ",
  regione: "Abruzzo",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.avezzano.aq.it",

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
      action: { type: "web", value: "https://comune.avezzano.aq.it/servizi-categoria/salute-benessere-e-assistenza/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 1 Avezzano-Sulmona-L'Aquila",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl1abruzzo.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 1 Avezzano-Sulmona-L'Aquila",
    url: "https://www.asl1abruzzo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
