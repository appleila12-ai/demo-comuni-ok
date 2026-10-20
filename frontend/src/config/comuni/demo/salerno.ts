import type { ComuneConfig } from "../types";

// Comune di Salerno (SA) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Completata in parte il 20 ottobre 2026: 1 misura del Comune in bonus.ts (assegni di cura), da pagine del sito del Comune.
// Da confermare con l'ente: importi, scadenze e requisiti dei bandi; telefono, email, indirizzo e orari dei Servizi Sociali; associazioni e sport.
export const salerno: ComuneConfig = {
  slug: "salerno",
  tipo: "comune",
  nome: "Comune di Salerno",
  nomeBreve: "Salerno",
  delEnte: "del Comune di Salerno",
  soggetto: "Il Comune",
  provincia: "SA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "089 661111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.salerno.it/tutti-gli-argomenti/assistenza-sociale",

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
      action: { type: "web", value: "https://www.comune.salerno.it/tutti-gli-argomenti/assistenza-sociale" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.salerno.it/tutti-gli-argomenti/assistenza-sociale",
  },

  daVerificare: true,
  dimostrativo: true,
};
