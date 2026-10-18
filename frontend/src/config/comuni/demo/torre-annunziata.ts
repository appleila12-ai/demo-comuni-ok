import type { ComuneConfig } from "../types";

// Comune di Torre Annunziata (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Assistenza sociale" verificati il 18/10/2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const torreAnnunziata: ComuneConfig = {
  slug: "torre-annunziata",
  tipo: "comune",
  nome: "Comune di Torre Annunziata",
  nomeBreve: "Torre Annunziata",
  delEnte: "del Comune di Torre Annunziata",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.torreannunziata.na.it",

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
      action: { type: "web", value: "https://comune.torreannunziata.na.it/argomento/assistenza-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 3 Sud",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli3sud.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 3 Sud",
    url: "https://www.aslnapoli3sud.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
