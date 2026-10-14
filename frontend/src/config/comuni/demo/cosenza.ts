import type { ComuneConfig } from "../types";

// Comune di Cosenza (CS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Argomento "Assistenza sociale" del sito del Comune, controllato il 14 ottobre 2026. Il sito dell'ASP non si è letto in automatico.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const cosenza: ComuneConfig = {
  slug: "cosenza",
  tipo: "comune",
  nome: "Comune di Cosenza",
  nomeBreve: "Cosenza",
  delEnte: "del Comune di Cosenza",
  soggetto: "Il Comune",
  provincia: "CS",
  regione: "Calabria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.cosenza.it/it/argomenti/assistenza-sociale",

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
      action: { type: "web", value: "https://www.comune.cosenza.it/it/argomenti/assistenza-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Cosenza",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aspcs.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Cosenza · Esenzioni ticket",
    url: "https://www.aspcs.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
