import type { ComuneConfig } from "../types";

// Comune di Lanusei (NU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Azienda sanitaria non indicata: da cercare. Lanusei è capoluogo, insieme a Tortolì, della provincia dell'Ogliastra. Sigla provincia come nelle altre schede sarde già presenti: la riforma delle province del 2025 è da recepire per tutti i Comuni sardi.
// 26/10/2026: PEC e centralino dalla pagina "Centralino Protocollo" del sito del Comune (comune.lanusei.og.it), letta il 26/10/2026. Non sono i recapiti dei Servizi Sociali.
// Da fare: email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const lanusei: ComuneConfig = {
  slug: "lanusei",
  tipo: "comune",
  nome: "Comune di Lanusei",
  nomeBreve: "Lanusei",
  delEnte: "del Comune di Lanusei",
  soggetto: "Il Comune",
  provincia: "NU",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0782 473159",
  email: "",
  pec: "protocollo@pec.comunedilanusei.it",
  orari: "",
  sitoWeb: "https://comune.lanusei.og.it",

  logo: null,

  theme: {
    warm: "#CF8BB3",
    warmSoft: "#F2DDE9",
    warmDark: "#6E2A52",
    cream: "#F6F2F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.lanusei.og.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://comune.lanusei.og.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
