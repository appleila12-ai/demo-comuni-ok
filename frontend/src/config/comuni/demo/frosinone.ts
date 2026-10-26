import type { ComuneConfig } from "../types";

// Comune di Frosinone (FR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Aggiornamento 26/10/2026: Sportello Famiglia e Segretariato sociale (pagina del Comune agg. 18/06/2025, letta il 26/10/2026).
// Il link dell'azienda sanitaria è da verificare.
// Da fare: orari dello Sportello, bonus del Comune, associazioni, sport e tempo libero.
export const frosinone: ComuneConfig = {
  slug: "frosinone",
  tipo: "comune",
  nome: "Comune di Frosinone",
  nomeBreve: "Frosinone",
  delEnte: "del Comune di Frosinone",
  soggetto: "Il Comune",
  provincia: "FR",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Sportello Famiglia e Segretariato sociale",
  indirizzo: "Via Armando Fabi 129–131, 03100 Frosinone",
  telefono: "0775 2651",
  email: "sportellofamiglia@comune.frosinone.it",
  pec: "pec@pec.comune.frosinone.it",
  orari: "",
  sitoWeb: "https://www.comune.frosinone.it",

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
      title: "Sportello Famiglia e Segretariato sociale",
      subtitle: "Ascolto, orientamento e accompagnamento ai servizi del territorio; accoglie le domande per contributi economici. Via Armando Fabi 129–131 · Centralino del Comune 0775 2651 · sportellofamiglia@comune.frosinone.it · si può prenotare un appuntamento dal sito del Comune",
      action: { type: "web", value: "https://comune.frosinone.it/servizio/sportello-famiglia-e-segretariato-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Frosinone",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslfrosinone.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Frosinone · Esenzioni ticket",
    url: "https://www.aslfrosinone.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
