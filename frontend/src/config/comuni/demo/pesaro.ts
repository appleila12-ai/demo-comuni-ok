import type { ComuneConfig } from "../types";

// Comune di Pesaro (PU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina contatti dei Servizi Sociali del Comune letta il 14 ottobre 2026: indirizzo, telefono, PEC e orari (la pagina li dice precedenti all'emergenza Covid: da riconfermare). Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const pesaro: ComuneConfig = {
  slug: "pesaro",
  tipo: "comune",
  nome: "Comune di Pesaro",
  nomeBreve: "Pesaro",
  delEnte: "del Comune di Pesaro",
  soggetto: "Il Comune",
  provincia: "PU",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Mameli 9, 3° piano, 61121 Pesaro",
  telefono: "0721 387401",
  email: "",
  pec: "comune.pesaro@emarche.it",
  orari: "Segretariato sociale: lun, mar e gio 10:00-13:00, gio anche 15:00-17:00 (colloqui per telefono fino a nuove disposizioni). Informazioni: lun-ven 8:00-14:00, mar e gio anche 15:00-17:00",
  sitoWeb: "https://www.comune.pesaro.pu.it/servizisociali/",

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
      action: { type: "tel", value: "0721387401" },
    },
    {
      icon: "medkit-outline",
      title: "AST Pesaro Urbino",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ast-pesarourbino.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AST Pesaro Urbino · Esenzioni ticket",
    url: "https://www.ast-pesarourbino.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
