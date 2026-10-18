import type { ComuneConfig } from "../types";

// Comune di Sassuolo (MO) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Salute, benessere e assistenza" verificati il 18/10/2026. I servizi sociali sono gestiti in forma associata nell'Unione dei Comuni del Distretto Ceramico. Bonus, associazioni e sport nei file condivisi.
// Da confermare con l'ente: telefono, email, indirizzo e orari dei Servizi Sociali.
export const sassuolo: ComuneConfig = {
  slug: "sassuolo",
  tipo: "comune",
  nome: "Comune di Sassuolo",
  nomeBreve: "Sassuolo",
  delEnte: "del Comune di Sassuolo",
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
  sitoWeb: "https://www.comune.sassuolo.mo.it",

  logo: null,

  theme: {
    warm: "#E59866",
    warmSoft: "#F7E3D2",
    warmDark: "#955327",
    cream: "#F8F3ED",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.sassuolo.mo.it/servizi/salute-benessere-e-assistenza" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL di Modena",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.mo.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL di Modena",
    url: "https://www.ausl.mo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
