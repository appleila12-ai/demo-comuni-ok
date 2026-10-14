import type { ComuneConfig } from "../types";

// Comune di Oristano (OR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina dell'Ufficio sociale professionale del Comune letta il 14 ottobre 2026: indirizzo, telefoni (0783 791208 e 331 6327046), email. Gli orari sono riferiti ad agosto 2026. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const oristano: ComuneConfig = {
  slug: "oristano",
  tipo: "comune",
  nome: "Comune di Oristano",
  nomeBreve: "Oristano",
  delEnte: "del Comune di Oristano",
  soggetto: "Il Comune",
  provincia: "OR",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Palazzo degli Scolopi, piazza Eleonora 44, 09170 Oristano",
  telefono: "0783 791208",
  email: "milena.deligia@comune.oristano.it",
  pec: "",
  orari: "Orari da confermare con l'ufficio (la pagina del Comune li riporta per agosto 2026)",
  sitoWeb: "https://comune.oristano.it/it/amministrazione/unita-organizzativa/Ufficio-sociale-professionale/",

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
      action: { type: "tel", value: "0783791208" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Oristano",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asloristano.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Oristano · Esenzioni ticket",
    url: "https://www.asloristano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
