import type { ComuneConfig } from "../types";

// Comune di Trento (TN) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const trento: ComuneConfig = {
  slug: "trento",
  tipo: "comune",
  nome: "Comune di Trento",
  nomeBreve: "Trento",
  delEnte: "del Comune di Trento",
  soggetto: "Il Comune",
  provincia: "TN",
  regione: "Trentino-Alto Adige",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0461 884111",
  email: "",
  pec: "protocollo@pec.comune.trento.it",
  orari: "",
  sitoWeb: "https://www.comune.trento.it",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.trento.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.trento.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
