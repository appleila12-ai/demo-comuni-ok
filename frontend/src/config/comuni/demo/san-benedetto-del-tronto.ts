import type { ComuneConfig } from "../types";

// Comune di San Benedetto del Tronto (AP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dominio del Comune verificato il 18/10/2026 (sito non leggibile in automatico: robots). Il Comune è capofila dell'Ambito Territoriale Sociale 21. Azienda sanitaria: AST Ascoli Piceno (sito da confermare); per l'esenzione ticket si rimanda intanto al portale del Ministero della Salute.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const sanBenedettoDelTronto: ComuneConfig = {
  slug: "san-benedetto-del-tronto",
  tipo: "comune",
  nome: "Comune di San Benedetto del Tronto",
  nomeBreve: "San Benedetto del Tronto",
  delEnte: "del Comune di San Benedetto del Tronto",
  soggetto: "Il Comune",
  provincia: "AP",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comunesbt.it",

  logo: null,

  theme: {
    warm: "#D98A8A",
    warmSoft: "#F6E0E0",
    warmDark: "#8F3B3B",
    cream: "#F8F2F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comunesbt.it" },
    },
    {
      icon: "medkit-outline",
      title: "Esenzione ticket per patologia e invalidità",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.salute.gov.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzione ticket per patologia e invalidità",
    url: "https://www.salute.gov.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
