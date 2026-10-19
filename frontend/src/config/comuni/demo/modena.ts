import type { ComuneConfig } from "../types";

// Comune di Modena (MO) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Pagina "Salute, benessere e assistenza" del sito del Comune, controllata il 13 ottobre 2026.
// Completata il 19 ottobre 2026: 2 misure del Comune in bonus.ts (assegno di cura per disabili, Disability Card), Anffas Modena e 6 realtà sportive in associazioni.ts, da pagine del sito del Comune.
// Da confermare con l'ente: importi dell'assegno di cura (pagina del 2015), recapiti delle associazioni sportive (elenco del 2023); email, indirizzo e orari dei Servizi Sociali (non verificati).
export const modena: ComuneConfig = {
  slug: "modena",
  tipo: "comune",
  nome: "Comune di Modena",
  nomeBreve: "Modena",
  delEnte: "del Comune di Modena",
  soggetto: "Il Comune",
  provincia: "MO",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "059 20311",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.modena.it/servizi/salute-benessere-e-assistenza",

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
      action: { type: "web", value: "https://www.comune.modena.it/servizi/salute-benessere-e-assistenza" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL Modena",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.mo.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL Modena · Esenzioni ticket",
    url: "https://www.ausl.mo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
