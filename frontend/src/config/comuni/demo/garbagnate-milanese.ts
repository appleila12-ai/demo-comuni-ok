import type { ComuneConfig } from "../types";

// Comune di Garbagnate Milanese (MI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune: indirizzo indicato dalla titolare il 27/10/2026. PEC: domicilio digitale su IndicePA. Coordinate: database ISTAT/Belfiore dell'archivio. Link dell'azienda sanitaria da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const garbagnateMilanese: ComuneConfig = {
  slug: "garbagnate-milanese",
  tipo: "comune",
  nome: "Comune di Garbagnate Milanese",
  nomeBreve: "Garbagnate Milanese",
  delEnte: "del Comune di Garbagnate Milanese",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "comune@garbagnate-milanese.legalmail.it",
  orari: "",
  sitoWeb: "https://comune.garbagnate-milanese.mi.it",

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
      action: { type: "web", value: "https://comune.garbagnate-milanese.mi.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Rhodense",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-rhodense.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Rhodense · Esenzioni ticket",
    url: "https://www.asst-rhodense.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
