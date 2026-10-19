import type { ComuneConfig } from "../types";

// Comune di Casalecchio di Reno (BO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const casalecchioDiReno: ComuneConfig = {
  slug: "casalecchio-di-reno",
  tipo: "comune",
  nome: "Comune di Casalecchio di Reno",
  nomeBreve: "Casalecchio di Reno",
  delEnte: "del Comune di Casalecchio di Reno",
  soggetto: "Il Comune",
  provincia: "BO",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.casalecchiodireno.bo.it",

  logo: null,

  theme: {
    warm: "#E0A96D",
    warmSoft: "#F8EAD9",
    warmDark: "#7A4E1E",
    cream: "#F8F4EE",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.casalecchiodireno.bo.it" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL Bologna",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.bologna.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL Bologna · Esenzioni ticket",
    url: "https://www.ausl.bologna.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
