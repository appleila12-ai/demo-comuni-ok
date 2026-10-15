import type { ComuneConfig } from "../types";

// Comune di Saronno (VA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Salute, benessere e assistenza del Comune letta il 15 ottobre 2026: recapiti generali del Comune. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const saronno: ComuneConfig = {
  slug: "saronno",
  tipo: "comune",
  nome: "Comune di Saronno",
  nomeBreve: "Saronno",
  delEnte: "del Comune di Saronno",
  soggetto: "Il Comune",
  provincia: "VA",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza della Repubblica 7, 21047 Saronno (VA)",
  telefono: "02 967101",
  email: "protocollo@comune.saronno.va.it",
  pec: "comunesaronno@secmail.it",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina",
  sitoWeb: "https://comune.saronno.va.it/servizi/categoria-servizi/2557731",

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
      action: { type: "tel", value: "02967101" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Valle Olona",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-valleolona.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Valle Olona · Esenzioni ticket",
    url: "https://www.asst-valleolona.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
