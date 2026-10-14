import type { ComuneConfig } from "../types";

// Comune di Misterbianco (CT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Nessun link ancora verificato: l'indirizzo del sito del Comune non è stato aperto in questo giro. Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const misterbianco: ComuneConfig = {
  slug: "misterbianco",
  tipo: "comune",
  nome: "Comune di Misterbianco",
  nomeBreve: "Misterbianco",
  delEnte: "del Comune di Misterbianco",
  soggetto: "Il Comune",
  provincia: "CT",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.misterbianco.ct.it",

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
      action: { type: "web", value: "https://www.comune.misterbianco.ct.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Catania",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aspct.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Catania · Esenzioni ticket",
    url: "https://www.aspct.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
