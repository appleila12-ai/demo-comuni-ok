import type { ComuneConfig } from "../types";

// Comune di Matera (MT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Pagina "Salute, benessere e assistenza" del sito del Comune, controllata il 14 ottobre 2026 (il Comune ha anche un servizio di pronto intervento sociale attivo 24 ore su 24).
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const matera: ComuneConfig = {
  slug: "matera",
  tipo: "comune",
  nome: "Comune di Matera",
  nomeBreve: "Matera",
  delEnte: "del Comune di Matera",
  soggetto: "Il Comune",
  provincia: "MT",
  regione: "Basilicata",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.matera.it/servizi-categoria/salute-benessere-e-assistenza/",

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
      action: { type: "web", value: "https://comune.matera.it/servizi-categoria/salute-benessere-e-assistenza/" },
    },
    {
      icon: "medkit-outline",
      title: "ASM Matera",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asmbasilicata.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASM Matera · Esenzioni ticket",
    url: "https://www.asmbasilicata.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
