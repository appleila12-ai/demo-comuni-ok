import type { ComuneConfig } from "../types";

// Comune di Fondi (LT) — VERSIONE DIMOSTRATIVA (15 ottobre 2026, aggiornata il 26/10/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune non è leggibile in automatico (robots). Aggiornamento 26/10/2026: indirizzo, telefono e PEC dal portale "Rete del Sociale" del Comune e del Distretto socio sanitario LT4 (pagine del 12/10/2026); avviso caregiver in bonus.ts.
// Il link dell'azienda sanitaria è da verificare.
// Da fare: email ordinaria e orari dei Servizi Sociali, indirizzo del PUA, altri bonus del Comune, associazioni, sport e tempo libero.
export const fondi: ComuneConfig = {
  slug: "fondi",
  tipo: "comune",
  nome: "Comune di Fondi",
  nomeBreve: "Fondi",
  delEnte: "del Comune di Fondi",
  soggetto: "Il Comune",
  provincia: "LT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Municipio, 04022 Fondi (LT)",
  telefono: "0771 5071",
  email: "",
  pec: "comune.fondi@pecaziendale.it",
  orari: "",
  sitoWeb: "https://www.comune.fondi.lt.it",

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
      subtitle: "Piazza Municipio · Centralino 0771 5071. Servizi online e domande con SPID sul portale Rete del Sociale del Comune e del Distretto LT4. Gli orari non sono pubblicati: chiama il centralino",
      action: { type: "tel", value: "07715071" },
    },
    {
      icon: "business-outline",
      title: "Rete del Sociale · Distretto socio sanitario LT4",
      subtitle: "Portale dove si presentano le domande online con SPID. Distretto LT4: Campodimele, Fondi, Lenola, Monte San Biagio, San Felice Circeo, Sperlonga e Terracina. Il PUA distrettuale ha sportelli a Fondi e a Terracina",
      action: { type: "web", value: "https://fondi.retedelsociale.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Latina",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.latina.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Latina · Esenzioni ticket",
    url: "https://www.ausl.latina.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
