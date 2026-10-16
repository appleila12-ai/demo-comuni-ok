import type { ComuneConfig } from "../types";

// Comune di Perugia (PG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Il sito del Comune non è stato leggibile in automatico: la pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const perugia: ComuneConfig = {
  slug: "perugia",
  tipo: "comune",
  nome: "Comune di Perugia",
  nomeBreve: "Perugia",
  delEnte: "del Comune di Perugia",
  soggetto: "Il Comune",
  provincia: "PG",
  regione: "Umbria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "075 5771",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.perugia.it",

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
      action: { type: "web", value: "https://www.comune.perugia.it" },
    },
    {
      icon: "medkit-outline",
      title: "USL Umbria 1",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslumbria1.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "USL Umbria 1 · Esenzioni ticket",
    url: "https://www.uslumbria1.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
