import type { ComuneConfig } from "../types";

// Comune di Rimini (RN) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Completata in parte il 20 ottobre 2026: 1 misura del Comune in bonus.ts (mobilità casa-lavoro 2026, chiusa), da pagine del sito del Comune.
// Da confermare con l'ente: importi, scadenze e requisiti dei bandi; telefono, email, indirizzo e orari dei Servizi Sociali; associazioni e sport.
export const rimini: ComuneConfig = {
  slug: "rimini",
  tipo: "comune",
  nome: "Comune di Rimini",
  nomeBreve: "Rimini",
  delEnte: "del Comune di Rimini",
  soggetto: "Il Comune",
  provincia: "RN",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0541 704111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.rimini.it",

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
      action: { type: "web", value: "https://www.comune.rimini.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.rimini.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
