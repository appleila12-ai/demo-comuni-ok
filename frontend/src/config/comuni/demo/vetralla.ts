import type { ComuneConfig } from "../types";

// Comune di Vetralla (VT) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const vetralla: ComuneConfig = {
  slug: "vetralla",
  tipo: "comune",
  nome: "Comune di Vetralla",
  nomeBreve: "Vetralla",
  delEnte: "del Comune di Vetralla",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Servizi Sociali · Distretto Sociosanitario VT4",
  indirizzo: "Piazza San Severo 10/11, 01019 Vetralla (VT)",
  telefono: "0761 466960",
  email: "sociali@comune.vetralla.vt.it",
  pec: "comune.vetralla@legalmail.it",
  orari: "Lun–Ven 9:00–12:00; Mar e Gio anche 15:30–17:30",
  sitoWeb: "https://www.comune.vetralla.vt.it/amministrazione/unita-organizzative/servizi-sociali-distretto-sociosanitario-vt4/",

  logo: null,

  theme: {
    warm: "#88AFC7",
    warmSoft: "#E2EDF4",
    warmDark: "#2F5874",
    cream: "#F3F6F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Vetralla",
      subtitle: "Servizi Sociali · Distretto Sociosanitario VT4 · Piazza San Severo 10/11, 01019 Vetralla (VT) · Tel. 0761 466960",
      action: { type: "tel", value: "0761466960" },
    },
    {
      icon: "business-outline",
      title: "Distretto Sociosanitario VT4",
      subtitle: "Servizi sociali associati · capofila Comune di Vetralla",
      action: { type: "web", value: "https://www.distrettosociosanitariovt4.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Vetralla (0761 466960) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
