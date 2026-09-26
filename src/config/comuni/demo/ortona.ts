import type { ComuneConfig } from "../types";

// Comune di Ortona (CH) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: email
export const ortona: ComuneConfig = {
  slug: "ortona",
  tipo: "comune",
  nome: "Comune di Ortona",
  nomeBreve: "Ortona",
  delEnte: "del Comune di Ortona",
  soggetto: "Il Comune",
  provincia: "CH",
  regione: "Abruzzo",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Politiche Sociali – ECAD Ambito Distrettuale Sociale n. 10 Ortonese",
  indirizzo: "Corso Garibaldi, 66026 Ortona (CH)",
  telefono: "085 9057559",
  email: "protocollo@pec.comune.ortona.ch.it",
  pec: "protocollo@pec.comune.ortona.ch.it",
  orari: "Lun e Ven 9:00–12:00; Mar e Gio 9:00–12:00 e 15:00–17:00",
  sitoWeb: "https://www.comune.ortona.ch.it/it/struttura/ufficio-politiche-sociali",

  logo: null,

  theme: {
    warm: "#988BCF",
    warmSoft: "#E1DDF2",
    warmDark: "#372A6E",
    cream: "#F3F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Ortona",
      subtitle: "Ufficio Politiche Sociali – ECAD Ambito Distrettuale Sociale n. 10 Ortonese · Corso Garibaldi, 66026 Ortona (CH) · Tel. 085 9057559",
      action: { type: "tel", value: "0859057559" },
    },
    {
      icon: "business-outline",
      title: "Ambito Distrettuale Sociale n. 10 Ortonese",
      subtitle: "Ambito con capofila Ortona e altri 6 comuni: Arielli, Canosa Sannita, Crecchio, Giuliano Teatino, Poggiofiorito, Tollo",
      action: { type: "web", value: "https://www.comune.ortona.ch.it/it/struttura/ufficio-politiche-sociali" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Lanciano Vasto Chieti",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl2abruzzo.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Ortona (085 9057559) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Lanciano Vasto Chieti · Esenzioni ticket",
    url: "https://www.asl2abruzzo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
