import type { ComuneConfig } from "../types";

// Comune di Aulla (MS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (21 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina dell'Ufficio Servizi Sociali, Sanità e Sport del Comune letta il 21 ottobre 2026 (sede, telefono, email e orari). Il piè di pagina del sito riporta Piazza Gramsci 24 come sede del Comune; l'ufficio è indicato in Piazza Gramsci 1.
// Da fare: associazioni, sport e tempo libero, bandi del Comune (la pagina non dice se il contributo L.R. 73/2018 per famiglie con figlio minorenne con disabilità sia aperto).
export const aulla: ComuneConfig = {
  slug: "aulla",
  tipo: "comune",
  nome: "Comune di Aulla",
  nomeBreve: "Aulla",
  delEnte: "del Comune di Aulla",
  soggetto: "Il Comune",
  provincia: "MS",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Municipio, Piazza Gramsci 1, 54011 Aulla (MS)",
  telefono: "0187 400229",
  email: "sociale@comune.aulla.ms.it",
  pec: "",
  orari: "Lun, mar, mer e ven 9:00–12:00; giovedì 9:00–12:00 e 15:00–17:00",
  sitoWeb: "https://comune.aulla.ms.it/?post_type=unita_organizzativa&p=2180",

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
      subtitle: "Ufficio Servizi Sociali, Sanità e Sport · Tel. 0187 400229 · sociale@comune.aulla.ms.it",
      action: { type: "tel", value: "0187400229" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest · Esenzioni ticket",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
