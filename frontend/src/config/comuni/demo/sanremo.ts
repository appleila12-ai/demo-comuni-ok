import type { ComuneConfig } from "../types";

// Comune di Sanremo (IM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Argomento "Integrazione sociale" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const sanremo: ComuneConfig = {
  slug: "sanremo",
  tipo: "comune",
  nome: "Comune di Sanremo",
  nomeBreve: "Sanremo",
  delEnte: "del Comune di Sanremo",
  soggetto: "Il Comune",
  provincia: "IM",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0184 5801",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.sanremo.im.it/it/topics/integrazione-sociale",

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
      action: { type: "web", value: "https://www.comune.sanremo.im.it/it/topics/integrazione-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 1 Imperiese",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl1.liguria.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 1 Imperiese · Esenzioni ticket",
    url: "https://www.asl1.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
