import type { ComuneConfig } from "../types";

// Comune di Castel San Giovanni (PC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const castelSanGiovanni: ComuneConfig = {
  slug: "castel-san-giovanni",
  tipo: "comune",
  nome: "Comune di Castel San Giovanni",
  nomeBreve: "Castel San Giovanni",
  delEnte: "del Comune di Castel San Giovanni",
  soggetto: "Il Comune",
  provincia: "PC",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "Sportello Sociale · Ufficio Servizi Sociali",
  indirizzo: "Piazza XX Settembre 2, 29015 Castel San Giovanni (PC)",
  telefono: "0523 889752",
  email: "sportellosociale@comune.castelsangiovanni.pc.it",
  pec: "comune.castelsangiovanni@sintranet.legalmail.it",
  orari: "Lun–Sab 9:30–12:30; Gio anche 14:45–16:45",
  sitoWeb: "https://www.comune.castelsangiovanni.pc.it/it/page/114102",

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
      title: "Servizi Sociali – Castel San Giovanni",
      subtitle: "Sportello Sociale · Ufficio Servizi Sociali · Piazza XX Settembre 2, 29015 Castel San Giovanni (PC) · Tel. 0523 889752",
      action: { type: "tel", value: "0523889752" },
    },
    {
      icon: "business-outline",
      title: "Distretto di Ponente",
      subtitle: "Distretto sanitario e sociale di Val Tidone e Val Trebbia",
      action: { type: "web", value: "https://www.ausl.pc.it/it/strutture-e-territorio/distretti-sanitari/distretto-di-ponente" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL di Piacenza",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Castel San Giovanni (0523 889752) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AUSL di Piacenza · Esenzioni ticket",
    url: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
