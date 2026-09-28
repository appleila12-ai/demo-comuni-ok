import type { ComuneConfig } from "../types";

// Comune di Tarquinia (VT) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. 
export const tarquinia: ComuneConfig = {
  slug: "tarquinia",
  tipo: "comune",
  nome: "Comune di Tarquinia",
  nomeBreve: "Tarquinia",
  delEnte: "del Comune di Tarquinia",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Servizi Sociali Comunali e Distrettuali · Segretariato Sociale",
  indirizzo: "Via Giuseppe Garibaldi 23, 01016 Tarquinia (VT)",
  telefono: "0766 849312",
  email: "servizisociali@comune.tarquinia.vt.it",
  orari: "Lun–Ven 9:00–13:00, su appuntamento telefonico",
  sitoWeb: "https://www.comune.tarquinia.vt.it/Amministrazione/Uffici/Ufficio-Servizi-Sociali-Comunali-e-Distrettuali-Segretariato-Sociale-Centro-Diurno-Socio-Riabilitativo-C.D.S.R",

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
      title: "Servizi Sociali – Tarquinia",
      subtitle: "Servizi Sociali Comunali e Distrettuali · Segretariato Sociale · Via Giuseppe Garibaldi 23, 01016 Tarquinia (VT) · Tel. 0766 849312",
      action: { type: "tel", value: "0766849312" },
    },
    {
      icon: "business-outline",
      title: "Distretto Sociale VT2",
      subtitle: "Servizi sociali associati · capofila Comune di Tarquinia",
      action: { type: "web", value: "https://distrettovt2.comune.tarquinia.vt.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Tarquinia (0766 849312) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
