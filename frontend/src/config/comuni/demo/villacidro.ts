import type { ComuneConfig } from "../types";

// Comune di Villacidro (SU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e argomento "Assistenza sociale" aperti e controllati il 19 ottobre 2026. Azienda sanitaria non indicata: da cercare. Villacidro è capoluogo, insieme a Sanluri, della provincia del Medio Campidano. Sigla provincia come nelle altre schede sarde già presenti: la riforma delle province del 2025 è da recepire per tutti i Comuni sardi.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const villacidro: ComuneConfig = {
  slug: "villacidro",
  tipo: "comune",
  nome: "Comune di Villacidro",
  nomeBreve: "Villacidro",
  delEnte: "del Comune di Villacidro",
  soggetto: "Il Comune",
  provincia: "SU",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.villacidro.su.it",

  logo: null,

  theme: {
    warm: "#8BB9CF",
    warmSoft: "#DDEBF2",
    warmDark: "#2A586E",
    cream: "#F2F5F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.villacidro.su.it/index.php/tzente/argomenti/2" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.villacidro.su.it/index.php/tzente/argomenti/2",
  },

  daVerificare: true,
  dimostrativo: true,
};
