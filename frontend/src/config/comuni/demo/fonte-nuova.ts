import type { ComuneConfig } from "../types";

// Comune di Fonte Nuova (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune: indirizzo indicato dalla titolare il 27/10/2026. PEC: domicilio digitale su IndicePA. Coordinate: database ISTAT/Belfiore dell'archivio. Link dell'azienda sanitaria da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const fonteNuova: ComuneConfig = {
  slug: "fonte-nuova",
  tipo: "comune",
  nome: "Comune di Fonte Nuova",
  nomeBreve: "Fonte Nuova",
  delEnte: "del Comune di Fonte Nuova",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "protocollo@cert.fonte-nuova.it",
  orari: "",
  sitoWeb: "https://comune.fontenuova.rm.it",

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
      action: { type: "web", value: "https://comune.fontenuova.rm.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 5",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma5.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 5 · Esenzioni ticket",
    url: "https://www.aslroma5.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
