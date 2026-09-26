import type { ComuneConfig } from "../types";

// Comune di Desio (MB) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const desio: ComuneConfig = {
  slug: "desio",
  tipo: "comune",
  nome: "Comune di Desio",
  nomeBreve: "Desio",
  delEnte: "del Comune di Desio",
  soggetto: "Il Comune",
  provincia: "MB",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore Interventi e Servizi Sociali",
  indirizzo: "Piazza Giovanni Paolo II, 20832 Desio (MB)",
  telefono: "0362 392330",
  email: "servizisociali@comune.desio.mb.it",
  pec: "protocollo.comune.desio@legalmail.it",
  orari: "Lun e Ven 10:00–12:00; Mar e Gio 8:30–12:30, 15:30–17:30",
  sitoWeb: "https://www.comune.desio.mb.it/it/unita_organizzative/ufficio-servizi-sociali",

  logo: null,

  theme: {
    warm: "#A18BCF",
    warmSoft: "#E4DDF2",
    warmDark: "#402A6E",
    cream: "#F4F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Desio",
      subtitle: "Settore Interventi e Servizi Sociali · Piazza Giovanni Paolo II, 20832 Desio (MB) · Tel. 0362 392330",
      action: { type: "tel", value: "0362392330" },
    },
    {
      icon: "business-outline",
      title: "Ufficio di Piano – Ambito di Desio",
      subtitle: "Programmazione del Piano di Zona e misure d'Ambito (es. B2 non autosufficienza)",
      action: { type: "tel", value: "0362392213" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Brianza",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-brianza.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Desio (0362 392330) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Brianza · Esenzioni ticket",
    url: "https://www.asst-brianza.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
