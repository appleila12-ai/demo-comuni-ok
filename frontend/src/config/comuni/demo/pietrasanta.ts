import type { ComuneConfig } from "../types";

// Comune di Pietrasanta (LU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (26 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificati il 26/10/2026 sulla pagina "Ufficio sociale" del sito del Comune: indirizzo, email, PEC generale e telefoni. Orari non riportati dalla pagina.
// Orari dello sportello non riportati dalla pagina (confermato il 26/10/2026). Contatti Associazionismo dalla pagina del Comune.
// Da fare: orari, bonus del Comune (pagine delle singole misure), elenco del Registro comunale delle associazioni, sport e tempo libero.
export const pietrasanta: ComuneConfig = {
  slug: "pietrasanta",
  tipo: "comune",
  nome: "Comune di Pietrasanta",
  nomeBreve: "Pietrasanta",
  delEnte: "del Comune di Pietrasanta",
  soggetto: "Il Comune",
  provincia: "LU",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via G. Marconi 3, 55045 Pietrasanta (LU)",
  telefono: "0584 795276",
  email: "servizisociali@comune.pietrasanta.lu.it",
  pec: "comune.pietrasanta@postacert.toscana.it",
  orari: "",
  sitoWeb: "https://comune.pietrasanta.lu.it/it/organizational_unit/ufficio-sociale",

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
      subtitle: "Via G. Marconi 3 · Sportello segretariato sociale 0584 795276 · Centralino del Comune 0584 7951",
      action: { type: "web", value: "https://comune.pietrasanta.lu.it/it/organizational_unit/ufficio-sociale" },
    },
    {
      icon: "people-circle-outline",
      title: "Associazionismo – Registro comunale delle associazioni",
      subtitle: "Associazioni di volontariato, Consulta del volontariato e centri civici · associazionismo@comune.pietrasanta.lu.it · Tel. 0584 795246",
      action: { type: "tel", value: "0584795246" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest · Esenzioni ticket",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
