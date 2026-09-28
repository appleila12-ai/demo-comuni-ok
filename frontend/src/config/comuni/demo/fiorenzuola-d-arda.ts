import type { ComuneConfig } from "../types";

// Comune di Fiorenzuola d'Arda (PC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. Email nominativa della responsabile (l'unica pubblicata): chiedere un indirizzo d'ufficio.
export const fiorenzuolaDArda: ComuneConfig = {
  slug: "fiorenzuola-d-arda",
  tipo: "comune",
  nome: "Comune di Fiorenzuola d'Arda",
  nomeBreve: "Fiorenzuola d'Arda",
  delEnte: "del Comune di Fiorenzuola d'Arda",
  soggetto: "Il Comune",
  provincia: "PC",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "Settore Servizi alla Persona e alla Famiglia",
  indirizzo: "Piazzale San Giovanni 1, 29017 Fiorenzuola d'Arda (PC)",
  telefono: "0523 989400",
  email: "sabina.dordoni@comune.fiorenzuola.pc.it",
  pec: "protocollo@pec.comune.fiorenzuola.pc.it",
  orari: "Lun, Mer, Ven 10:30–13:00; Mar 10:30–12:30; Gio 8:30–12:00",
  sitoWeb: "https://www.comune.fiorenzuola.pc.it/it/unita_organizzative/servizi-sociali",

  logo: null,

  theme: {
    warm: "#C9A27E",
    warmSoft: "#F3E9DF",
    warmDark: "#6E4A2A",
    cream: "#F8F4F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Fiorenzuola d'Arda",
      subtitle: "Settore Servizi alla Persona e alla Famiglia · Piazzale San Giovanni 1, 29017 Fiorenzuola d'Arda (PC) · Tel. 0523 989400",
      action: { type: "tel", value: "0523989400" },
    },
    {
      icon: "business-outline",
      title: "Distretto di Levante",
      subtitle: "Distretto sanitario e sociale · Via Roma 35, Fiorenzuola d'Arda",
      action: { type: "web", value: "https://www.ausl.pc.it/it/strutture-e-territorio/distretti-sanitari/distretto-di-levante" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL di Piacenza",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Fiorenzuola d'Arda (0523 989400) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AUSL di Piacenza · Esenzioni ticket",
    url: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
