import type { ComuneConfig } from "../types";

// Comune di Limbiate (MB) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Link ai Servizi Sociali: Pagina "Servizi Sociali Di Base" del Settore Welfare sul sito ufficiale (controllato il 19 ottobre 2026). Link dell'azienda sanitaria controllato sul sito dell'azienda il 19 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const limbiate: ComuneConfig = {
  slug: "limbiate",
  tipo: "comune",
  nome: "Comune di Limbiate",
  nomeBreve: "Limbiate",
  delEnte: "del Comune di Limbiate",
  soggetto: "Il Comune",
  provincia: "MB",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.limbiate.mb.it",

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
      action: { type: "web", value: "https://comune.limbiate.mb.it/amministrazione/unita-organizzativa/settore-welfare/servizi-sociali-di-base/" },
    },
    {
      icon: "medkit-outline",
      title: "ATS Brianza",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ats-brianza.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ATS Brianza · Esenzioni ticket",
    url: "https://www.ats-brianza.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
