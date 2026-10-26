import type { ComuneConfig } from "../types";

// Comune di Scandicci (FI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e pagina "Salute, benessere e assistenza" verificati il 18/10/2026.
// 26/10/2026: recapiti e orari della U.O. Politiche abitative e sociali – Promozione sociale (dati forniti da Ilaria dalla scheda del Comune). Ricevimento solo su appuntamento.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const scandicci: ComuneConfig = {
  slug: "scandicci",
  tipo: "comune",
  nome: "Comune di Scandicci",
  nomeBreve: "Scandicci",
  delEnte: "del Comune di Scandicci",
  soggetto: "Il Comune",
  provincia: "FI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Municipio, Piazzale della Resistenza 1, 50018 Scandicci (FI)",
  telefono: "055 7591257",
  email: "promozione_sociale@comune.scandicci.fi.it",
  pec: "",
  orari: "Solo su appuntamento. Per telefonare: lun, mer, ven 9:00–13:00; mar e gio 9:00–13:00 e 15:00–17:00",
  sitoWeb: "https://www.comune.scandicci.fi.it",

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
      action: { type: "web", value: "https://www.comune.scandicci.fi.it/servizi/salute-benessere-e-assistenza" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Centro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslcentro.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Centro",
    url: "https://www.uslcentro.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
