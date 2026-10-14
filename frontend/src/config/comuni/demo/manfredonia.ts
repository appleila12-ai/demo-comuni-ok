import type { ComuneConfig } from "../types";

// Comune di Manfredonia (FG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Voce "Assistenza sociale" del menu del sito del Comune (controllata il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const manfredonia: ComuneConfig = {
  slug: "manfredonia",
  tipo: "comune",
  nome: "Comune di Manfredonia",
  nomeBreve: "Manfredonia",
  delEnte: "del Comune di Manfredonia",
  soggetto: "Il Comune",
  provincia: "FG",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.manfredonia.fg.it/area_areaTematica/15725/pagsistema.html",

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
      action: { type: "web", value: "https://www.comune.manfredonia.fg.it/area_areaTematica/15725/pagsistema.html" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Foggia",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it/web/asl-foggia" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Foggia · Esenzioni ticket",
    url: "https://www.sanita.puglia.it/web/asl-foggia",
  },

  daVerificare: true,
  dimostrativo: true,
};
