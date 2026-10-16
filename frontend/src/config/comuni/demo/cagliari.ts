import type { ComuneConfig } from "../types";

// Comune di Cagliari (CA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Pagina "Salute, benessere e assistenza" del sito del Comune, controllata il 13 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const cagliari: ComuneConfig = {
  slug: "cagliari",
  tipo: "comune",
  nome: "Comune di Cagliari",
  nomeBreve: "Cagliari",
  delEnte: "del Comune di Cagliari",
  soggetto: "Il Comune",
  provincia: "CA",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "070 6771",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.cagliari.it/portale/page/it/servizi_salute",

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
      action: { type: "web", value: "https://www.comune.cagliari.it/portale/page/it/servizi_salute" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Cagliari",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl8cagliari.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Cagliari · Esenzioni ticket",
    url: "https://www.asl8cagliari.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
