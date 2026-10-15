import type { ComuneConfig } from "../types";

// Comune di Cerveteri (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Servizi Sociali del Comune letta il 15 ottobre 2026: sede, telefoni, email e orari (la PEC è quella generale del Comune). Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const cerveteri: ComuneConfig = {
  slug: "cerveteri",
  tipo: "comune",
  nome: "Comune di Cerveteri",
  nomeBreve: "Cerveteri",
  delEnte: "del Comune di Cerveteri",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Antonio Ricci 4 (Parco della Legnara), 00052 Cerveteri",
  telefono: "06 89630220",
  email: "servizi-sociali@comune.cerveteri.rm.it",
  pec: "comunecerveteri@pec.it",
  orari: "Martedì 9:00-12:00 e 15:00-17:00. Telefoni per area: Minori 334 6159951, Adulti e anziani 334 6161259, Disabilità 366 6118626",
  sitoWeb: "https://www.comune.cerveteri.rm.it/unita-organizzativa/servizi-sociali",

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
      action: { type: "tel", value: "0689630220" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 4",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma4.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 4 · Esenzioni ticket",
    url: "https://www.aslroma4.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
