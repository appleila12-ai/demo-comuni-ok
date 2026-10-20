import type { ComuneConfig } from "../types";

// Comune di Manduria (TA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare. Il sito non si è aperto al controllo del 20 ottobre 2026 (errore di caricamento).
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const manduria: ComuneConfig = {
  slug: "manduria",
  tipo: "comune",
  nome: "Comune di Manduria",
  nomeBreve: "Manduria",
  delEnte: "del Comune di Manduria",
  soggetto: "Il Comune",
  provincia: "TA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.manduria.ta.it",

  logo: null,

  theme: {
    warm: "#D4956F",
    warmSoft: "#F6E4D8",
    warmDark: "#77401F",
    cream: "#F9F4F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.manduria.ta.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Taranto",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl.taranto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Taranto · Esenzioni ticket",
    url: "https://www.asl.taranto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
