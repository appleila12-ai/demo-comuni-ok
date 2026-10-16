import type { ComuneConfig } from "../types";

// Comune di Martina Franca (TA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Argomento "Politica sociale" del sito del Comune (controllato il 15 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const martinaFranca: ComuneConfig = {
  slug: "martina-franca",
  tipo: "comune",
  nome: "Comune di Martina Franca",
  nomeBreve: "Martina Franca",
  delEnte: "del Comune di Martina Franca",
  soggetto: "Il Comune",
  provincia: "TA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "080 4836111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.martinafranca.ta.it/Argomenti/Politica-sociale",

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
      action: { type: "web", value: "https://www.comune.martinafranca.ta.it/Argomenti/Politica-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Taranto",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl.taranto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Taranto · Esenzioni ticket",
    url: "https://www.asl.taranto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
