import type { ComuneConfig } from "../types";

// Comune di San Severo (FG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune non è leggibile in automatico (robots): indirizzo e pagina dei servizi sociali vanno verificati. Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const sanSevero: ComuneConfig = {
  slug: "san-severo",
  tipo: "comune",
  nome: "Comune di San Severo",
  nomeBreve: "San Severo",
  delEnte: "del Comune di San Severo",
  soggetto: "Il Comune",
  provincia: "FG",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0882 339111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.san-severo.fg.it",

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
      action: { type: "web", value: "https://www.comune.san-severo.fg.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Foggia",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it/web/asl-foggia" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Foggia · Esenzioni ticket",
    url: "https://www.sanita.puglia.it/web/asl-foggia",
  },

  daVerificare: true,
  dimostrativo: true,
};
