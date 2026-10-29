import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Moncalieri (TO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina "Salute, benessere e assistenza" del sito del Comune (controllata il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const moncalieri: ComuneConfig = {
  slug: "moncalieri",
  tipo: "comune",
  nome: "Comune di Moncalieri",
  nomeBreve: "Moncalieri",
  delEnte: "del Comune di Moncalieri",
  soggetto: "Il Comune",
  provincia: "TO",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "011 6401411",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.moncalieri.to.it/servizi/salute-benessere-assistenza",

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
      action: { type: "web", value: "https://www.comune.moncalieri.to.it/servizi/salute-benessere-assistenza" },
    },
    {
      icon: "medkit-outline",
      title: "ASL TO5",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslto5.piemonte.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL TO5 · Esenzioni ticket",
    url: "https://www.aslto5.piemonte.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
moncalieri.percorsoTerritorio = { ...moncalieri.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
