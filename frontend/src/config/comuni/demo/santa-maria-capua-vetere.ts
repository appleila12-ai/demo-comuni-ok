import type { ComuneConfig } from "../types";

// Comune di Santa Maria Capua Vetere (CE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 20 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare. Categoria "Salute, benessere e assistenza" del sito del Comune; il sito rimanda al Consorzio dei Servizi Sociali e Socio-Sanitari dell'Ambito C08.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const santaMariaCapuaVetere: ComuneConfig = {
  slug: "santa-maria-capua-vetere",
  tipo: "comune",
  nome: "Comune di Santa Maria Capua Vetere",
  nomeBreve: "Santa Maria Capua Vetere",
  delEnte: "del Comune di Santa Maria Capua Vetere",
  soggetto: "Il Comune",
  provincia: "CE",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.santa-maria-capua-vetere.ce.it",

  logo: null,

  theme: {
    warm: "#8BCF96",
    warmSoft: "#DDF2E1",
    warmDark: "#2A6E35",
    cream: "#F2F6F3",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.santa-maria-capua-vetere.ce.it/it/page/145370?fromService=1" },
    },
    {
      icon: "business-outline",
      title: "Consorzio Ambito C08",
      subtitle: "Consorzio dei servizi sociali e socio-sanitari dell'Ambito Territoriale C08, indicato dal sito del Comune",
      action: { type: "web", value: "https://www.ambitoterritorialec8.it/it-it/home" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Caserta",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslcaserta.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Caserta · Esenzioni ticket",
    url: "https://www.aslcaserta.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
