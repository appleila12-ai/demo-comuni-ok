import type { ComuneConfig } from "../types";

// Comune di Pisa (PI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Home del sito del Comune, controllata il 14 ottobre 2026: la pagina dei servizi sociali va cercata e confermata.
// 26/10/2026: email dell'Ufficio Sociale (affari.sociali@comune.pisa.it, dati forniti da Ilaria dalla pagina del Comune).
// Da fare: indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const pisa: ComuneConfig = {
  slug: "pisa",
  tipo: "comune",
  nome: "Comune di Pisa",
  nomeBreve: "Pisa",
  delEnte: "del Comune di Pisa",
  soggetto: "Il Comune",
  provincia: "PI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "050 910111",
  email: "affari.sociali@comune.pisa.it",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.pisa.it",

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
      action: { type: "web", value: "https://www.comune.pisa.it" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest · Esenzioni ticket",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
