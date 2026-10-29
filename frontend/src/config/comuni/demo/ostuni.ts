import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Ostuni (BR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina dei servizi sociali aperti e controllati il 20 ottobre 2026. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare. Categoria "Salute, benessere e assistenza" del sito del Comune.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const ostuni: ComuneConfig = {
  slug: "ostuni",
  tipo: "comune",
  nome: "Comune di Ostuni",
  nomeBreve: "Ostuni",
  delEnte: "del Comune di Ostuni",
  soggetto: "Il Comune",
  provincia: "BR",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.ostuni.br.it",

  logo: null,

  theme: {
    warm: "#E6B566",
    warmSoft: "#FAEED6",
    warmDark: "#7A5516",
    cream: "#F9F5EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.ostuni.br.it/servizi-categoria/salute-benessere-e-assistenza/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Brindisi",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl.brindisi.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Brindisi · Esenzioni ticket",
    url: "https://www.asl.brindisi.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
ostuni.percorsoTerritorio = { ...ostuni.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
