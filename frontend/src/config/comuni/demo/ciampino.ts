import type { ComuneConfig } from "../types";

// Comune di Ciampino (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Salute, benessere e assistenza del Comune letta il 15 ottobre 2026: centralino, indirizzo e PEC generali. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const ciampino: ComuneConfig = {
  slug: "ciampino",
  tipo: "comune",
  nome: "Comune di Ciampino",
  nomeBreve: "Ciampino",
  delEnte: "del Comune di Ciampino",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Largo Felice Armati 1, 00043 Ciampino (RM)",
  telefono: "06 790971",
  email: "",
  pec: "protocollo@pec.comune.ciampino.roma.it",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina",
  sitoWeb: "https://www.comune.ciampino.roma.it/it/page/140610?fromService=1",

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
      action: { type: "tel", value: "06790971" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 6",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma6.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 6 · Esenzioni ticket",
    url: "https://www.aslroma6.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
