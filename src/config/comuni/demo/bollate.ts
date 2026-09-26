import type { ComuneConfig } from "../types";

// Comune di Bollate (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const bollate: ComuneConfig = {
  slug: "bollate",
  tipo: "comune",
  nome: "Comune di Bollate",
  nomeBreve: "Bollate",
  delEnte: "del Comune di Bollate",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Servizi sociali e di prima infanzia – Servizio Sociale",
  indirizzo: "Piazza Aldo Moro 1, 20021 Bollate (MI)",
  telefono: "02 35005568",
  email: "servizi.sociali@comune.bollate.mi.it",
  pec: "comune.bollate@legalmail.it",
  orari: "Sportello: Mer 8:30–12:00 e 14:00–16:00; Ven 8:30–12:00",
  sitoWeb: "https://www.comune.bollate.mi.it/it/unita_organizzative/servizio-sociale",

  logo: null,

  theme: {
    warm: "#C4CF8B",
    warmSoft: "#EFF2DD",
    warmDark: "#636E2A",
    cream: "#F6F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Bollate",
      subtitle: "Servizi sociali e di prima infanzia – Servizio Sociale · Piazza Aldo Moro 1, 20021 Bollate (MI) · Tel. 02 35005568",
      action: { type: "tel", value: "0235005568" },
    },
    {
      icon: "business-outline",
      title: "Comuni Insieme per lo Sviluppo Sociale",
      subtitle: "Azienda speciale consortile dell'Ambito di Garbagnate Milanese per i servizi sociali",
      action: { type: "web", value: "https://www.comuni-insieme.mi.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Rhodense",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-rhodense.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Bollate (02 35005568) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Rhodense · Esenzioni ticket",
    url: "https://www.asst-rhodense.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
