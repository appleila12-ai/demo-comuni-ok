import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di San Donà di Piave (VE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Nuovo dominio istituzionale verificato il 18/10/2026 (il vecchio sandonadipiave.net reindirizza qui). La pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const sanDonaDiPiave: ComuneConfig = {
  slug: "san-dona-di-piave",
  tipo: "comune",
  nome: "Comune di San Donà di Piave",
  nomeBreve: "San Donà di Piave",
  delEnte: "del Comune di San Donà di Piave",
  soggetto: "Il Comune",
  provincia: "VE",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.sandonadipiave.ve.it",

  logo: null,

  theme: {
    warm: "#E59866",
    warmSoft: "#F7E3D2",
    warmDark: "#955327",
    cream: "#F8F3ED",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.sandonadipiave.ve.it" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda ULSS 4 Veneto Orientale",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss4.veneto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda ULSS 4 Veneto Orientale",
    url: "https://www.aulss4.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
sanDonaDiPiave.percorsoTerritorio = { ...sanDonaDiPiave.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
