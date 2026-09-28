import type { ComuneConfig } from "../types";

// Comune di Caprarola (VT) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. Telefono = centralino del Comune; email = PEC: inserire i recapiti diretti dei Servizi Sociali appena disponibili.
export const caprarola: ComuneConfig = {
  slug: "caprarola",
  tipo: "comune",
  nome: "Comune di Caprarola",
  nomeBreve: "Caprarola",
  delEnte: "del Comune di Caprarola",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali e Scolastici",
  indirizzo: "Via Filippo Nicolai 2, 01032 Caprarola (VT)",
  telefono: "0761 64901",
  email: "comune.caprarola@anutelpec.it",
  pec: "comune.caprarola@anutelpec.it",
  orari: "Chiama il centralino per orari e appuntamenti",
  sitoWeb: "https://www.comune.caprarola.vt.it/amministrazione/unita_organizzativa/ufficio-servizi-sociali/",

  logo: null,

  theme: {
    warm: "#8FB5A6",
    warmSoft: "#E3EFEA",
    warmDark: "#355E50",
    cream: "#F3F7F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Caprarola",
      subtitle: "Ufficio Servizi Sociali e Scolastici · Via Filippo Nicolai 2, 01032 Caprarola (VT) · Tel. 0761 64901",
      action: { type: "tel", value: "076164901" },
    },
    {
      icon: "globe-outline",
      title: "Pagina dei Servizi Sociali",
      subtitle: "Recapiti diretti e orari sul sito del Comune",
      action: { type: "web", value: "https://www.comune.caprarola.vt.it/amministrazione/unita_organizzativa/ufficio-servizi-sociali/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Caprarola (0761 64901) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
