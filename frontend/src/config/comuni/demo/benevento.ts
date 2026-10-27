import type { ComuneConfig } from "../types";

// Comune di Benevento (BN) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Argomento "Servizi Sociali" del sito del Comune, controllato il 14 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const benevento: ComuneConfig = {
  slug: "benevento",
  tipo: "comune",
  nome: "Comune di Benevento",
  nomeBreve: "Benevento",
  delEnte: "del Comune di Benevento",
  soggetto: "Il Comune",
  provincia: "BN",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0824 772111",
  email: "",
  pec: "protocollogenerale@pec.comunebn.it",
  orari: "",
  sitoWeb: "https://comune.benevento.it/argomento/assistenza-sociale/",

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
      action: { type: "web", value: "https://comune.benevento.it/argomento/assistenza-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Benevento",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslbenevento.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Benevento · Esenzioni ticket",
    url: "https://www.aslbenevento.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
