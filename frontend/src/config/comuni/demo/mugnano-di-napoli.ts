import type { ComuneConfig } from "../types";

// Comune di Mugnano di Napoli (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Link ai Servizi Sociali: Pagina "Servizi Sociali" sul sito ufficiale (controllato il 19 ottobre 2026). Link dell'azienda sanitaria controllato sul sito dell'azienda il 19 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const mugnanoDiNapoli: ComuneConfig = {
  slug: "mugnano-di-napoli",
  tipo: "comune",
  nome: "Comune di Mugnano di Napoli",
  nomeBreve: "Mugnano di Napoli",
  delEnte: "del Comune di Mugnano di Napoli",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.mugnano.na.it",

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
      action: { type: "web", value: "https://www.comune.mugnano.na.it/it/struttura/servizi-sociali" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 2 Nord",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli2nord.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 2 Nord · Esenzioni ticket",
    url: "https://www.aslnapoli2nord.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
