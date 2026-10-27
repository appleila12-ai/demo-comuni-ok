import type { ComuneConfig } from "../types";

// Comune di Trieste (TS) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Il sito del Comune non si legge in automatico: la pagina dei servizi sociali va cercata e confermata.
// Completata il 20 ottobre 2026: 2 misure regionali del Friuli-Venezia Giulia in bonus.ts (FAP, barriere architettoniche) e il Comitato Paralimpico regionale in associazioni.ts, da pagine della Regione.
// Da confermare con l'ente: misure e bandi del Comune di Trieste (la ricerca ha trovato solo il bando affitti 2026, non specifico per la disabilità); associazioni locali; recapiti dei Servizi Sociali (non verificati).
export const trieste: ComuneConfig = {
  slug: "trieste",
  tipo: "comune",
  nome: "Comune di Trieste",
  nomeBreve: "Trieste",
  delEnte: "del Comune di Trieste",
  soggetto: "Il Comune",
  provincia: "TS",
  regione: "Friuli-Venezia Giulia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "040 6751",
  email: "",
  pec: "comune.trieste@certgov.fvg.it",
  orari: "",
  sitoWeb: "https://www.comune.trieste.it",

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
      action: { type: "web", value: "https://www.comune.trieste.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASUGI",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://asugi.sanita.fvg.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASUGI · Esenzioni ticket",
    url: "https://asugi.sanita.fvg.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
