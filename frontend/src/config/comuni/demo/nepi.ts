import type { ComuneConfig } from "../types";

// Comune di Nepi (VT) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const nepi: ComuneConfig = {
  slug: "nepi",
  tipo: "comune",
  nome: "Comune di Nepi",
  nomeBreve: "Nepi",
  delEnte: "del Comune di Nepi",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali",
  indirizzo: "Piazza del Comune 20, 01036 Nepi (VT)",
  telefono: "0761 5581325",
  email: "servizisociali@comune.nepi.vt.it",
  orari: "Lun, Mer, Ven 10:30–13:00; Mar e Gio 15:30–17:00",
  sitoWeb: "https://comune.nepi.vt.it/unita-organizzative/2558822/ufficio-servizi-sociali",

  logo: null,

  theme: {
    warm: "#C59CB0",
    warmSoft: "#F4E7ED",
    warmDark: "#6C3C55",
    cream: "#F9F4F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Nepi",
      subtitle: "Ufficio Servizi Sociali · Piazza del Comune 20, 01036 Nepi (VT) · Tel. 0761 5581325",
      action: { type: "tel", value: "07615581325" },
    },
    {
      icon: "business-outline",
      title: "Ambito Sociale VT5 – Consorzio T.I.NE.R.I.",
      subtitle: "Ufficio di Piano del distretto VT5, con sede a Nepi",
      action: { type: "web", value: "https://consorziotineri.it/it/page/ufficio-di-piano" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Nepi (0761 5581325) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
