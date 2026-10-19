import type { ComuneConfig } from "../types";

// Comune di Formigine (MO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Link ai Servizi Sociali: Pagina "Servizio Sociale territoriale di Formigine" dell'Unione dei Comuni del Distretto Ceramico, che gestisce i servizi sociali in forma associata (controllato il 19 ottobre 2026). Link dell'azienda sanitaria controllato sul sito dell'azienda il 19 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const formigine: ComuneConfig = {
  slug: "formigine",
  tipo: "comune",
  nome: "Comune di Formigine",
  nomeBreve: "Formigine",
  delEnte: "del Comune di Formigine",
  soggetto: "Il Comune",
  provincia: "MO",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.formigine.mo.it",

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
      subtitle: "Servizio sociale gestito dall'Unione dei Comuni del Distretto Ceramico: recapiti e orari sono sul sito dell'Unione",
      action: { type: "web", value: "https://www.distrettoceramico.mo.it/amministrazione/uffici/settore-politiche-sociali/servizio-sociale-territoriale-di-formigine" },
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
