import type { ComuneConfig } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";

// Comune di Civitanova Marche (MC) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dominio del Comune verificato il 18/10/2026 (sito non leggibile in automatico: robots). Azienda sanitaria di riferimento: AST Macerata (sito da confermare); per l'esenzione ticket si rimanda intanto al portale del Ministero della Salute.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const civitanovaMarche: ComuneConfig = {
  slug: "civitanova-marche",
  tipo: "comune",
  nome: "Comune di Civitanova Marche",
  nomeBreve: "Civitanova Marche",
  delEnte: "del Comune di Civitanova Marche",
  soggetto: "Il Comune",
  provincia: "MC",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.civitanova.mc.it",

  logo: null,

  theme: {
    warm: "#E3A94A",
    warmSoft: "#F7E7C6",
    warmDark: "#A86F1F",
    cream: "#F7F3EA",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.civitanova.mc.it" },
    },
    {
      icon: "medkit-outline",
      title: "Esenzione ticket per patologia e invalidità",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.salute.gov.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzione ticket per patologia e invalidità",
    url: "https://www.salute.gov.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
civitanovaMarche.percorsoTerritorio = { ...civitanovaMarche.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
