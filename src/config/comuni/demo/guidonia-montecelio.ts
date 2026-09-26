import type { ComuneConfig } from "../types";

// Comune di Guidonia Montecelio (RM) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: orari
export const guidoniaMontecelio: ComuneConfig = {
  slug: "guidonia-montecelio",
  tipo: "comune",
  nome: "Comune di Guidonia Montecelio",
  nomeBreve: "Guidonia Montecelio",
  delEnte: "del Comune di Guidonia Montecelio",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Politiche Sociali – Servizi alla Persona (Segretariato Sociale)",
  indirizzo: "Via Montelucci 4, 00012 Guidonia Montecelio (RM)",
  telefono: "0774 301488",
  email: "segretariatosociale@comune.guidoniamontecelio.rm.it",
  pec: "protocollo@pec.guidonia.org",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.guidoniamontecelio.rm.it/unita-organizzativa/segretariato-sociale",

  logo: null,

  theme: {
    warm: "#8BB9CF",
    warmSoft: "#DDEBF2",
    warmDark: "#2A586E",
    cream: "#F2F5F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Guidonia Montecelio",
      subtitle: "Politiche Sociali – Servizi alla Persona (Segretariato Sociale) · Via Montelucci 4, 00012 Guidonia Montecelio (RM) · Tel. 0774 301488",
      action: { type: "tel", value: "0774301488" },
    },
    {
      icon: "business-outline",
      title: "Distretto Socio-sanitario RM 5.2",
      subtitle: "Distretto sociosanitario con capofila Guidonia Montecelio",
      action: { type: "web", value: "https://distrettosociosanitariorm5punto2.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 5",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aslroma5.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Guidonia Montecelio (0774 301488) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Roma 5 · Esenzioni ticket",
    url: "https://www.aslroma5.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
