import type { ComuneConfig } from "../types";

// Comune di Sanluri (SU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dai documenti ufficiali pubblicati su quel sito (area sociale, servizio civico): la home e la pagina dei servizi sociali non sono state aperte, da verificare. Azienda sanitaria non indicata: da cercare. Sanluri è capoluogo, insieme a Villacidro, della provincia del Medio Campidano. Sigla provincia come nelle altre schede sarde già presenti: la riforma delle province del 2025 è da recepire per tutti i Comuni sardi.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const sanluri: ComuneConfig = {
  slug: "sanluri",
  tipo: "comune",
  nome: "Comune di Sanluri",
  nomeBreve: "Sanluri",
  delEnte: "del Comune di Sanluri",
  soggetto: "Il Comune",
  provincia: "SU",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "protocollo@pec.comune.sanluri.su.it",
  orari: "",
  sitoWeb: "https://comune.sanluri.su.it",

  logo: null,

  theme: {
    warm: "#B7A58C",
    warmSoft: "#F0EAE1",
    warmDark: "#6B5638",
    cream: "#F6F4F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.sanluri.su.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://comune.sanluri.su.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
