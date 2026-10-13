import type { ComuneConfig } from "../types";

// Comune di Napoli (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune e del CIP Campania non si aprono in automatico: non ho potuto leggere recapiti. Il link agli indirizzi dei Centri Servizi
// Sociali Territoriali (uno per Municipalità) è la pagina ufficiale trovata con la ricerca web il 13 ottobre 2026, da confermare.
// Da fare: telefoni, email e orari dei Centri Servizi Sociali Territoriali; bonus del Comune, associazioni, sport e tempo libero.
export const napoli: ComuneConfig = {
  slug: "napoli",
  tipo: "comune",
  nome: "Comune di Napoli",
  nomeBreve: "Napoli",
  delEnte: "del Comune di Napoli",
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
  sitoWeb: "https://www.comune.napoli.it",

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
      title: "Centri Servizi Sociali Territoriali",
      subtitle: "Primo ascolto sociale: ce n'è uno per ogni Municipalità. Gli indirizzi sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.napoli.it/articolo_tematico/welfare-e-pari-opportunita/segretariato-sociale-e-servizio-sociale/indirizzi-centri-servizi-sociali-territoriali/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 1 Centro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli1centro.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 1 Centro · Esenzioni ticket",
    url: "https://www.aslnapoli1centro.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
