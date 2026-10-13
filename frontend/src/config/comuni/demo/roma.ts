import type { ComuneConfig } from "../types";

// Comune di Roma (RM) — VERSIONE DIMOSTRATIVA (completata il 13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune non è leggibile in automatico (robots). Fonti: pagina PUA di ASL Roma 1 (Distretti 1, 2, 3, 13, 14, 15),
// sito dell'Agenzia per la Vita Indipendente di Roma Capitale, sito di Anffas Roma.
// Roma ha 15 Municipi e più ASL: qui c'è solo il PUA di ASL Roma 1. Gli altri Distretti (ASL Roma 2-6) vanno aggiunti.
// Da fare: recapiti dei Servizi Sociali di ogni Municipio (pua.mun02@comune.roma.it e pua.mun15@comune.roma.it sono citati nella pagina ASL), PUA delle altre ASL.
export const roma: ComuneConfig = {
  slug: "roma",
  tipo: "comune",
  nome: "Comune di Roma",
  nomeBreve: "Roma",
  delEnte: "del Comune di Roma",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "Sedi e orari cambiano per Municipio e Distretto: guarda la pagina del PUA",
  sitoWeb: "https://www.comune.roma.it",

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
      title: "Punto Unico di Accesso (PUA), ASL Roma 1",
      subtitle: "Accoglienza e orientamento ai servizi sociali e sanitari, creato da Distretto e Municipio. Ci si va di persona, con una persona di fiducia, o per telefono e email. Sul sito trovi le sedi dei Distretti 1, 2, 3, 13, 14 e 15 con telefoni e orari",
      action: { type: "web", value: "https://www.aslroma1.it/punto-unico-accesso" },
    },
    {
      icon: "home-outline",
      title: "Agenzia per la Vita Indipendente di Roma Capitale",
      subtitle: "Informazioni e consulenze su assistenza, casa, fisco, invalidità, lavoro, mobilità e scuola, con sedi Roma 1, 2 e 3. Roma 1: via Prospero Santacroce 5, tel. 06 98261600 (int. 202) per prenotare un colloquio",
      action: { type: "tel", value: "0698261600" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 1",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma1.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 1 · Esenzioni ticket",
    url: "https://www.aslroma1.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
