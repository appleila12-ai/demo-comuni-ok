import type { ComuneConfig } from "../types";

// Comune di Riccò del Golfo di Spezia (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Per ora c'è il centralino del Comune (dati 2021 da comuni-italiani.it): inserire telefono ed email diretti dei Servizi Sociali appena disponibili.
export const riccoDelGolfo: ComuneConfig = {
  slug: "ricco-del-golfo",
  tipo: "comune",
  nome: "Comune di Riccò del Golfo di Spezia",
  nomeBreve: "Riccò del Golfo",
  delEnte: "del Comune di Riccò del Golfo di Spezia",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali e alla Persona",
  indirizzo: "Via Aurelia 150, 19020 Riccò del Golfo di Spezia (SP)",
  telefono: "0187 925106",
  email: "riccodelgolfo@pec.comune.riccodelgolfo.sp.it",
  pec: "riccodelgolfo@pec.comune.riccodelgolfo.sp.it",
  orari: "Chiama il centralino per orari e appuntamenti",
  sitoWeb: "https://www.comune.riccodelgolfo.sp.it/amministrazione/uffici/ufficio_41.html",

  logo: null,

  theme: {
    warm: "#B7A58C",
    warmSoft: "#F0EAE1",
    warmDark: "#6B5638",
    cream: "#F6F4F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Riccò del Golfo",
      subtitle: "Ufficio Servizi Sociali e alla Persona · centralino del Comune 0187 925106",
      action: { type: "tel", value: "0187925106" },
    },
    {
      icon: "globe-outline",
      title: "Pagina dei Servizi Sociali",
      subtitle: "Recapiti diretti e orari sul sito del Comune",
      action: { type: "web", value: "https://www.comune.riccodelgolfo.sp.it/amministrazione/uffici/ufficio_41.html" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Riccò del Golfo (centralino 0187 925106) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};
