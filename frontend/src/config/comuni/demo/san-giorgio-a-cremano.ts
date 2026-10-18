import type { ComuneConfig } from "../types";

// Comune di San Giorgio a Cremano (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dominio del Comune verificato il 18/10/2026: la pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const sanGiorgioACremano: ComuneConfig = {
  slug: "san-giorgio-a-cremano",
  tipo: "comune",
  nome: "Comune di San Giorgio a Cremano",
  nomeBreve: "San Giorgio a Cremano",
  delEnte: "del Comune di San Giorgio a Cremano",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.sangiorgioacremano.na.it",

  logo: null,

  theme: {
    warm: "#C9A24B",
    warmSoft: "#EFE6C8",
    warmDark: "#7E6220",
    cream: "#F6F3E9",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.sangiorgioacremano.na.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 3 Sud",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli3sud.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 3 Sud",
    url: "https://www.aslnapoli3sud.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
