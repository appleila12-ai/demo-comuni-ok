import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Brugherio (MB) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Assistenza sociale del Comune letta il 15 ottobre 2026: centralino, indirizzo e PEC generali; Settore Servizi alle Persone. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const brugherio: ComuneConfig = {
  slug: "brugherio",
  tipo: "comune",
  nome: "Comune di Brugherio",
  nomeBreve: "Brugherio",
  delEnte: "del Comune di Brugherio",
  soggetto: "Il Comune",
  provincia: "MB",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Cesare Battisti 1, 20861 Brugherio (MB)",
  telefono: "039 28931",
  email: "",
  pec: "protocollo.brugherio@legalmail.it",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina",
  sitoWeb: "https://www.comune.brugherio.mb.it/it/topics/7",

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
      action: { type: "tel", value: "03928931" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Monza",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-monza.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Monza · Esenzioni ticket",
    url: "https://www.asst-monza.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

brugherio.percorsoTerritorio = percorso(brugherio.puntiSupporto, [2]);
