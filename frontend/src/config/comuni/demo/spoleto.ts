import type { ComuneConfig } from "../types";

// Comune di Spoleto (PG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const spoleto: ComuneConfig = {
  slug: "spoleto",
  tipo: "comune",
  nome: "Comune di Spoleto",
  nomeBreve: "Spoleto",
  delEnte: "del Comune di Spoleto",
  soggetto: "Il Comune",
  provincia: "PG",
  regione: "Umbria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "comune.spoleto@postacert.umbria.it",
  orari: "",
  sitoWeb: "https://www.comune.spoleto.pg.it",

  logo: null,

  theme: {
    warm: "#8BCFC9",
    warmSoft: "#DDF2F0",
    warmDark: "#2A6E68",
    cream: "#F2F6F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.spoleto.pg.it" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Umbria 2",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslumbria2.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Umbria 2 · Esenzioni ticket",
    url: "https://www.uslumbria2.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
