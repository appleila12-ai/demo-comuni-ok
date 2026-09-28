import type { ComuneConfig } from "../types";

// Comune di Rottofreno (PC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const rottofreno: ComuneConfig = {
  slug: "rottofreno",
  tipo: "comune",
  nome: "Comune di Rottofreno",
  nomeBreve: "Rottofreno",
  delEnte: "del Comune di Rottofreno",
  soggetto: "Il Comune",
  provincia: "PC",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "Sportello Sociale",
  indirizzo: "Piazza Marconi 2, 29010 Rottofreno (PC)",
  telefono: "0523 780315",
  email: "assistentesociale@comune.rottofreno.pc.it",
  pec: "postacertificata@cert.comune.rottofreno.pc.it",
  orari: "Su appuntamento: Lun–Ven 9:00–12:30; Gio anche 15:00–17:00",
  sitoWeb: "https://www.comune.rottofreno.pc.it/it/page/uffici",

  logo: null,

  theme: {
    warm: "#A9A3CF",
    warmSoft: "#ECEAF6",
    warmDark: "#4A4480",
    cream: "#F5F4FA",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Rottofreno",
      subtitle: "Sportello Sociale · Piazza Marconi 2, 29010 Rottofreno (PC) · Tel. 0523 780315",
      action: { type: "tel", value: "0523780315" },
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

  trasporto: "Chiedi ai Servizi Sociali di Rottofreno (0523 780315) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AUSL di Piacenza · Esenzioni ticket",
    url: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
