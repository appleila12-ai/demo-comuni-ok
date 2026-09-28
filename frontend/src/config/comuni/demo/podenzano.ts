import type { ComuneConfig } from "../types";

// Comune di Podenzano (PC) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const podenzano: ComuneConfig = {
  slug: "podenzano",
  tipo: "comune",
  nome: "Comune di Podenzano",
  nomeBreve: "Podenzano",
  delEnte: "del Comune di Podenzano",
  soggetto: "Il Comune",
  provincia: "PC",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "Servizio Socio Assistenziale – Unione Valnure e Valchero",
  indirizzo: "Via Monte Grappa 100, 29027 Podenzano (PC)",
  telefono: "0523 554645",
  email: "sociale@comune.podenzano.pc.it",
  orari: "Lun–Ven 9:15–12:30; Mar e Gio 15:30–17:00; Sab 9:15–12:00",
  sitoWeb: "https://www.unionevalnurevalchero.it/home/vivere/luoghi/Luogo-10.html",

  logo: null,

  theme: {
    warm: "#D4A373",
    warmSoft: "#F6EADC",
    warmDark: "#7A4E22",
    cream: "#FAF5EF",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Podenzano",
      subtitle: "Servizio Socio Assistenziale – Unione Valnure e Valchero · Via Monte Grappa 100, 29027 Podenzano (PC) · Tel. 0523 554645",
      action: { type: "tel", value: "0523554645" },
    },
    {
      icon: "business-outline",
      title: "Distretto di Levante",
      subtitle: "Distretto sanitario e sociale · Via Roma 35, Fiorenzuola d'Arda",
      action: { type: "web", value: "https://www.ausl.pc.it/it/strutture-e-territorio/distretti-sanitari/distretto-di-levante" },
    },
    {
      icon: "accessibility-outline",
      title: "Servizio anziani e disabili – Podenzano",
      subtitle: "Unione Valnure e Valchero · linea dedicata",
      action: { type: "tel", value: "0523554644" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL di Piacenza",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Podenzano (0523 554645) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AUSL di Piacenza · Esenzioni ticket",
    url: "https://www.ausl.pc.it/it/come-fare-per/esenzioni-e-contributi/esenzioni-dal-pagamento-del-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
