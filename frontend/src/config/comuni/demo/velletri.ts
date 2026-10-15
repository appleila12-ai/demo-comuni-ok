import type { ComuneConfig } from "../types";

// Comune di Velletri (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Salute, benessere e assistenza del Comune letta il 15 ottobre 2026: recapiti generali del Comune. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const velletri: ComuneConfig = {
  slug: "velletri",
  tipo: "comune",
  nome: "Comune di Velletri",
  nomeBreve: "Velletri",
  delEnte: "del Comune di Velletri",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Cesare Ottaviano Augusto 1, 00049 Velletri (RM)",
  telefono: "06 961581",
  email: "",
  pec: "protocollo@pec.comune.velletri.rm.it",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina",
  sitoWeb: "https://www.comune.velletri.rm.it/area_letturaServizio/pagsistema.html?type=28",

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
      subtitle: "Primo ascolto sociale: recapiti e orari in questa scheda e sul sito del Comune",
      action: { type: "tel", value: "06961581" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 6",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma6.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 6 · Esenzioni ticket",
    url: "https://www.aslroma6.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
