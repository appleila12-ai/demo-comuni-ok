import type { ComuneConfig } from "../types";

// Comune di Pioltello (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: email
export const pioltello: ComuneConfig = {
  slug: "pioltello",
  tipo: "comune",
  nome: "Comune di Pioltello",
  nomeBreve: "Pioltello",
  delEnte: "del Comune di Pioltello",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore 2 – Servizi alla Persona e alla Comunità",
  indirizzo: "Via Carlo Cattaneo 1, 20096 Pioltello (MI)",
  telefono: "02 92366109",
  email: "protocollo@cert.comune.pioltello.mi.it",
  pec: "protocollo@cert.comune.pioltello.mi.it",
  orari: "Lun 10:00–12:45 e 14:30–17:30, Mar–Gio 8:30–12:45",
  sitoWeb: "https://www.comune.pioltello.mi.it/it/unita_organizzative/servizi-sociali",

  logo: null,

  theme: {
    warm: "#8BC7CF",
    warmSoft: "#DDEFF2",
    warmDark: "#2A666E",
    cream: "#F2F6F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Pioltello",
      subtitle: "Settore 2 – Servizi alla Persona e alla Comunità · Via Carlo Cattaneo 1, 20096 Pioltello (MI) · Tel. 02 92366109",
      action: { type: "tel", value: "0292366109" },
    },
    {
      icon: "business-outline",
      title: "Casa di Comunità di Pioltello",
      subtitle: "Punto di accesso sociosanitario territoriale (PUA) per servizi sanitari e sociali integrati.",
      action: { type: "web", value: "https://www.comune.pioltello.mi.it/it/vivere/casa-di-comunita-di-pioltello" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Melegnano e della Martesana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-melegnano-martesana.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Pioltello (02 92366109) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Melegnano e della Martesana · Esenzioni ticket",
    url: "https://www.asst-melegnano-martesana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
