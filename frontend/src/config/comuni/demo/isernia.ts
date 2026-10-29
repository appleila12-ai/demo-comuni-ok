import type { ComuneConfig } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";

// Comune di Isernia (IS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Assistenza sociale del Comune letta il 15 ottobre 2026: centralino, indirizzo e PEC generali; esiste un Ufficio politiche sociali senza recapiti sulla pagina e l'Ambito sociale territoriale (atsisernia.com). Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const isernia: ComuneConfig = {
  slug: "isernia",
  tipo: "comune",
  nome: "Comune di Isernia",
  nomeBreve: "Isernia",
  delEnte: "del Comune di Isernia",
  soggetto: "Il Comune",
  provincia: "IS",
  regione: "Molise",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Marconi 3, 86170 Isernia",
  telefono: "0865 4491",
  email: "",
  pec: "comuneisernia@pec.it",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina",
  sitoWeb: "https://comune.isernia.it/argomento/assistenza-sociale/",

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
      action: { type: "tel", value: "08654491" },
    },
    {
      icon: "medkit-outline",
      title: "ASReM Molise",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asrem.molise.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASReM Molise · Esenzioni ticket",
    url: "https://www.asrem.molise.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
isernia.percorsoTerritorio = { ...isernia.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
