import type { ComuneConfig } from "../types";

// Comune di Grottaglie (TA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 20 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare. Categoria "Salute, benessere e assistenza" del sito del Comune.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const grottaglie: ComuneConfig = {
  slug: "grottaglie",
  tipo: "comune",
  nome: "Comune di Grottaglie",
  nomeBreve: "Grottaglie",
  delEnte: "del Comune di Grottaglie",
  soggetto: "Il Comune",
  provincia: "TA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.grottaglie.ta.it",

  logo: null,

  theme: {
    warm: "#9FA8DA",
    warmSoft: "#E6E8F6",
    warmDark: "#3A437A",
    cream: "#F4F4F9",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.grottaglie.ta.it/it/page/132063?fromService=1" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Taranto",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl.taranto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Taranto · Esenzioni ticket",
    url: "https://www.asl.taranto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
