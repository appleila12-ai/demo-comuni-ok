import type { ComuneConfig } from "../types";

// Comune di Barletta (BT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Home del sito del Comune, controllata il 14 ottobre 2026: la pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const barletta: ComuneConfig = {
  slug: "barletta",
  tipo: "comune",
  nome: "Comune di Barletta",
  nomeBreve: "Barletta",
  delEnte: "del Comune di Barletta",
  soggetto: "Il Comune",
  provincia: "BT",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0883 578111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.barletta.bt.it",

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
      action: { type: "web", value: "https://www.comune.barletta.bt.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL BAT",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it/web/asl-bt" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL BAT · Esenzioni ticket",
    url: "https://www.sanita.puglia.it/web/asl-bt",
  },

  daVerificare: true,
  dimostrativo: true,
};
