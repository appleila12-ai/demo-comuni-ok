import type { ComuneConfig } from "../types";

// Comune di Vibo Valentia (VV) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Servizi Sociali del Comune letta il 14 ottobre 2026 (il sito è comune.vibovalentia.vv.it, senza trattino). La pagina non riporta recapiti: da cercare. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const viboValentia: ComuneConfig = {
  slug: "vibo-valentia",
  tipo: "comune",
  nome: "Comune di Vibo Valentia",
  nomeBreve: "Vibo Valentia",
  delEnte: "del Comune di Vibo Valentia",
  soggetto: "Il Comune",
  provincia: "VV",
  regione: "Calabria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.vibovalentia.vv.it/servizi/salute-benessere-e-assistenza/servizi-sociali",

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
      action: { type: "web", value: "https://www.comune.vibovalentia.vv.it/servizi/salute-benessere-e-assistenza/servizi-sociali" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Vibo Valentia",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asp.vv.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Vibo Valentia · Esenzioni ticket",
    url: "https://www.asp.vv.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
