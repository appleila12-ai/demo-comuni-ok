import type { ComuneConfig } from "../types";

// Comune di Piacenza (PC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const piacenza: ComuneConfig = {
  slug: "piacenza",
  tipo: "comune",
  nome: "Comune di Piacenza",
  nomeBreve: "Piacenza",
  delEnte: "del Comune di Piacenza",
  soggetto: "Il Comune",
  provincia: "PC",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "Servizio Sociale · Sportello InformaSociale",
  indirizzo: "Via Giuseppe Taverna 39, 29121 Piacenza (PC)",
  telefono: "0523 492731",
  email: "informasociale@comune.piacenza.it",
  pec: "protocollo.generale@cert.comune.piacenza.it",
  orari: "Lun e Gio 9:00–12:30 e 15:30–17:30; Mar e Ven 9:00–12:30",
  sitoWeb: "https://www.comune.piacenza.it/it/unita_organizzative/sportelli-informasociale",

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
      title: "Servizi Sociali – Piacenza",
      subtitle: "Servizio Sociale · Sportello InformaSociale · Via Giuseppe Taverna 39, 29121 Piacenza (PC) · Tel. 0523 492731",
      action: { type: "tel", value: "0523492731" },
    },
    {
      icon: "business-outline",
      title: "Distretto Città di Piacenza – Ufficio di Piano",
      subtitle: "Programmazione dei servizi sociali e socio-sanitari · capofila Comune di Piacenza",
      action: { type: "web", value: "https://www.comune.piacenza.it/it/unita_organizzative/ufficio-di-piano-politiche-sociali" },
    },
    {
      icon: "accessibility-outline",
      title: "InformaHandicap – Comune di Piacenza",
      subtitle: "Sportello informativo sulla disabilità · Via XXIV Maggio 28 · informahandicap@comune.piacenza.it",
      action: { type: "tel", value: "0523492022" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL di Piacenza",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Piacenza (0523 492731) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AUSL di Piacenza · Esenzioni ticket",
    url: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
