import type { ComuneConfig } from "../types";

// Comune di Fasano (BR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale del Comune controllato il 19 ottobre 2026: una pagina dedicata ai Servizi Sociali non è stata trovata, quindi il link porta alla home del sito (da cercare). Link dell'azienda sanitaria controllato sul sito dell'azienda il 19 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const fasano: ComuneConfig = {
  slug: "fasano",
  tipo: "comune",
  nome: "Comune di Fasano",
  nomeBreve: "Fasano",
  delEnte: "del Comune di Fasano",
  soggetto: "Il Comune",
  provincia: "BR",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.fasano.br.it",

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
      action: { type: "web", value: "https://www.comune.fasano.br.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Brindisi",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl.brindisi.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Brindisi · Esenzioni ticket",
    url: "https://www.asl.brindisi.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
