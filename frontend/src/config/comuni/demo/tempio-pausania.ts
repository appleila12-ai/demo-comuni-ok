import type { ComuneConfig } from "../types";

// Comune di Tempio Pausania (SS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare. Tempio Pausania è capoluogo, insieme a Olbia, della provincia Gallura Nord-Est Sardegna. Sigla provincia come nelle altre schede sarde già presenti: la riforma delle province del 2025 è da recepire per tutti i Comuni sardi.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const tempioPausania: ComuneConfig = {
  slug: "tempio-pausania",
  tipo: "comune",
  nome: "Comune di Tempio Pausania",
  nomeBreve: "Tempio Pausania",
  delEnte: "del Comune di Tempio Pausania",
  soggetto: "Il Comune",
  provincia: "SS",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.tempiopausania.ss.it",

  logo: null,

  theme: {
    warm: "#8BA2CF",
    warmSoft: "#DDE4F2",
    warmDark: "#2A416E",
    cream: "#F2F4F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.tempiopausania.ss.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Gallura",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslgallura.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Gallura · Esenzioni ticket",
    url: "https://www.aslgallura.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
