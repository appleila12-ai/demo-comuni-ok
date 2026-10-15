import type { ComuneConfig } from "../types";

// Comune di Paderno Dugnano (MI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagine del Comune lette il 15 ottobre 2026: recapiti generali del Comune (email URP, centralino); due uffici Servizi Sociali senza recapiti propri. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const padernoDugnano: ComuneConfig = {
  slug: "paderno-dugnano",
  tipo: "comune",
  nome: "Comune di Paderno Dugnano",
  nomeBreve: "Paderno Dugnano",
  delEnte: "del Comune di Paderno Dugnano",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Grandi 15, 20037 Paderno Dugnano (MI)",
  telefono: "02 910041",
  email: "urp@comune.paderno-dugnano.mi.it",
  pec: "comune.paderno-dugnano@pec.regione.lombardia.it",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina. Numero verde del Comune: 800 140558",
  sitoWeb: "https://www.comune.paderno-dugnano.mi.it/servizi/salute-benessere-e-assistenza/",

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
      subtitle: "Primo ascolto sociale: recapiti e orari in questa scheda e sul sito del Comune",
      action: { type: "tel", value: "02910041" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Nord Milano",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-nordmilano.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Nord Milano · Esenzioni ticket",
    url: "https://www.asst-nordmilano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
