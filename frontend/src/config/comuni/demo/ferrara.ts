import type { ComuneConfig } from "../types";

// Comune di Ferrara (FE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const ferrara: ComuneConfig = {
  slug: "ferrara",
  tipo: "comune",
  nome: "Comune di Ferrara",
  nomeBreve: "Ferrara",
  delEnte: "del Comune di Ferrara",
  soggetto: "Il Comune",
  provincia: "FE",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0532 419111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.ferrara.it/it/b/11294/sportello-sociale-unico-integrato",

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
      action: { type: "web", value: "https://www.comune.ferrara.it/it/b/11294/sportello-sociale-unico-integrato" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.ferrara.it/it/b/11294/sportello-sociale-unico-integrato",
  },

  daVerificare: true,
  dimostrativo: true,
};
