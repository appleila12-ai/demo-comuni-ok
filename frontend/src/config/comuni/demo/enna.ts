import type { ComuneConfig } from "../types";

// Comune di Enna (EN) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Area 5 del Comune letta il 14 ottobre 2026: non riporta recapiti dei servizi sociali. Centralino del Comune: 0935 40111, piazza Coppola 1. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const enna: ComuneConfig = {
  slug: "enna",
  tipo: "comune",
  nome: "Comune di Enna",
  nomeBreve: "Enna",
  delEnte: "del Comune di Enna",
  soggetto: "Il Comune",
  provincia: "EN",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0935 40446",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.enna.it/amministrazione/unita-organizzativa/5/AREA-5",

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
      action: { type: "web", value: "https://www.comune.enna.it/amministrazione/unita-organizzativa/5/AREA-5" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Enna",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asp.enna.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Enna · Esenzioni ticket",
    url: "https://www.asp.enna.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
