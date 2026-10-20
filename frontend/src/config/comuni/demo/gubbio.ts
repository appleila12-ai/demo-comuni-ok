import type { ComuneConfig } from "../types";

// Comune di Gubbio (PG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const gubbio: ComuneConfig = {
  slug: "gubbio",
  tipo: "comune",
  nome: "Comune di Gubbio",
  nomeBreve: "Gubbio",
  delEnte: "del Comune di Gubbio",
  soggetto: "Il Comune",
  provincia: "PG",
  regione: "Umbria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.gubbio.pg.it",

  logo: null,

  theme: {
    warm: "#CF908B",
    warmSoft: "#F2DFDD",
    warmDark: "#6E2F2A",
    cream: "#F6F3F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.gubbio.pg.it" },
    },
    {
      icon: "medkit-outline",
      title: "USL Umbria 1",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslumbria1.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "USL Umbria 1 · Esenzioni ticket",
    url: "https://www.uslumbria1.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
