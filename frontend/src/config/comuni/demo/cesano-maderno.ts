import type { ComuneConfig } from "../types";

// Comune di Cesano Maderno (MB) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Servizi Sociali del Comune letta il 14 ottobre 2026: indirizzo, telefono, email, PEC e orari. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const cesanoMaderno: ComuneConfig = {
  slug: "cesano-maderno",
  tipo: "comune",
  nome: "Comune di Cesano Maderno",
  nomeBreve: "Cesano Maderno",
  delEnte: "del Comune di Cesano Maderno",
  soggetto: "Il Comune",
  provincia: "MB",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Municipio, via Cozzi snc, 20811 Cesano Maderno (MB)",
  telefono: "0362 513490",
  email: "servizisociali@comune.cesano-maderno.mb.it",
  pec: "servizio.sociale@pec.comune.cesano-maderno.mb.it",
  orari: "Ufficio amministrativo: lun, mer e ven 8:30-12:45; mar e gio 14:45-17:45. Servizio sociale professionale solo su appuntamento: lun, mer e ven 8:30-13:00; mar e gio 16:30-18:15",
  sitoWeb: "https://www.comune.cesano-maderno.mb.it/amministrazione/unita-organizzative/servizi-sociali/",

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
      action: { type: "tel", value: "0362513490" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Brianza",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-brianza.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Brianza · Esenzioni ticket",
    url: "https://www.asst-brianza.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
