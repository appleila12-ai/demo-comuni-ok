import type { ComuneConfig } from "../types";

// Comune di Urbino (PU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 19 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare. Pagina "Assistenza sociale" del sito del Comune. Urbino è capoluogo, insieme a Pesaro, della provincia di Pesaro e Urbino.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const urbino: ComuneConfig = {
  slug: "urbino",
  tipo: "comune",
  nome: "Comune di Urbino",
  nomeBreve: "Urbino",
  delEnte: "del Comune di Urbino",
  soggetto: "Il Comune",
  provincia: "PU",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "comune.urbino@emarche.it",
  orari: "",
  sitoWeb: "https://www.comune.urbino.pu.it",

  logo: null,

  theme: {
    warm: "#CF8B9C",
    warmSoft: "#F2DDE2",
    warmDark: "#6E2A3B",
    cream: "#F6F2F3",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.urbino.pu.it/argomenti/a/assistenza-sociale" },
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
