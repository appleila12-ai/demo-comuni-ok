import type { ComuneConfig } from "../types";

// Comune di Cortemaggiore (PC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. Email = PEC del Comune: inserire l'email dello sportello appena disponibile.
export const cortemaggiore: ComuneConfig = {
  slug: "cortemaggiore",
  tipo: "comune",
  nome: "Comune di Cortemaggiore",
  nomeBreve: "Cortemaggiore",
  delEnte: "del Comune di Cortemaggiore",
  soggetto: "Il Comune",
  provincia: "PC",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "Sportello Sociale",
  indirizzo: "Piazza Patrioti 8, 29016 Cortemaggiore (PC)",
  telefono: "0523 832718",
  email: "comune.cortemaggiore@sintranet.legalmail.it",
  pec: "comune.cortemaggiore@sintranet.legalmail.it",
  orari: "Lun, Mer, Ven 9:30–11:30",
  sitoWeb: "https://www.comune.cortemaggiore.pc.it/it/page/sportello-sociale",

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
      title: "Servizi Sociali – Cortemaggiore",
      subtitle: "Sportello Sociale · Piazza Patrioti 8, 29016 Cortemaggiore (PC) · Tel. 0523 832718",
      action: { type: "tel", value: "0523832718" },
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

  trasporto: "Chiedi ai Servizi Sociali di Cortemaggiore (0523 832718) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AUSL di Piacenza · Esenzioni ticket",
    url: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
