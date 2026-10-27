import type { ComuneConfig } from "../types";

// Comune di Tortolì (NU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Azienda sanitaria non indicata: da cercare. Tortolì è capoluogo, insieme a Lanusei, della provincia dell'Ogliastra. Sigla provincia come nelle altre schede sarde già presenti: la riforma delle province del 2025 è da recepire per tutti i Comuni sardi.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const tortoli: ComuneConfig = {
  slug: "tortoli",
  tipo: "comune",
  nome: "Comune di Tortolì",
  nomeBreve: "Tortolì",
  delEnte: "del Comune di Tortolì",
  soggetto: "Il Comune",
  provincia: "NU",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "protocollo@pec.comuneditortoli.it",
  orari: "",
  sitoWeb: "https://www.comune.tortoli.nu.it",

  logo: null,

  theme: {
    warm: "#CF8BCF",
    warmSoft: "#F2DDF2",
    warmDark: "#6E2A6E",
    cream: "#F6F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.tortoli.nu.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.tortoli.nu.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
