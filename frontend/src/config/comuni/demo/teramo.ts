import type { ComuneConfig } from "../types";

// Comune di Teramo (TE) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: email, orari
export const teramo: ComuneConfig = {
  slug: "teramo",
  tipo: "comune",
  nome: "Comune di Teramo",
  nomeBreve: "Teramo",
  delEnte: "del Comune di Teramo",
  soggetto: "Il Comune",
  provincia: "TE",
  regione: "Abruzzo",

  ente: "Servizi Sociali",
  responsabile: "Area Welfare e Servizi al Cittadino – ECAD Ambito Distrettuale Sociale n. 20 Teramo",
  indirizzo: "Via Giosuè Carducci 33, 64100 Teramo (TE)",
  telefono: "0861 324855",
  email: "affarigenerali@comune.pecpa.it",
  pec: "affarigenerali@comune.pecpa.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.teramo.it/it/unita_organizzative/area-4-servizi-per-il-sostegno-la-solidarieta-e-la-coesione-della-comunita",

  logo: null,

  theme: {
    warm: "#91CF8B",
    warmSoft: "#DFF2DD",
    warmDark: "#306E2A",
    cream: "#F3F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Teramo",
      subtitle: "Area Welfare e Servizi al Cittadino – ECAD Ambito Distrettuale Sociale n. 20 Teramo · Via Giosuè Carducci 33, 64100 Teramo (TE) · Tel. 0861 324855",
      action: { type: "tel", value: "0861324855" },
    },
    {
      icon: "business-outline",
      title: "Ambito Distrettuale Sociale n. 20 Teramo",
      subtitle: "ECAD per la programmazione dei servizi sociali (Piano Sociale Distrettuale)",
      action: { type: "web", value: "https://www.comune.teramo.it/it/topics/assistenza-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Teramo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aslteramo.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Teramo (0861 324855) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Teramo · Esenzioni ticket",
    url: "https://www.aslteramo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
