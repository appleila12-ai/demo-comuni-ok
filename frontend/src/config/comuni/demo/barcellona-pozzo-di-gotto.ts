import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Barcellona Pozzo di Gotto (ME) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Argomento "Assistenza sociale" del sito del Comune (controllato il 15 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const barcellonaPozzoDiGotto: ComuneConfig = {
  slug: "barcellona-pozzo-di-gotto",
  tipo: "comune",
  nome: "Comune di Barcellona Pozzo di Gotto",
  nomeBreve: "Barcellona Pozzo di Gotto",
  delEnte: "del Comune di Barcellona Pozzo di Gotto",
  soggetto: "Il Comune",
  provincia: "ME",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "090 9790246",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.barcellona-pozzo-di-gotto.me.it/argomento/assistenza-sociale/",

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
      action: { type: "web", value: "https://www.comune.barcellona-pozzo-di-gotto.me.it/argomento/assistenza-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Messina",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asp.messina.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Messina · Esenzioni ticket",
    url: "https://www.asp.messina.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
barcellonaPozzoDiGotto.percorsoTerritorio = { ...barcellonaPozzoDiGotto.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
