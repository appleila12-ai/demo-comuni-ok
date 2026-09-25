import type { ComuneConfig } from "../types";

// Comune di Mira (VE) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const mira: ComuneConfig = {
  slug: "mira",
  tipo: "comune",
  nome: "Comune di Mira",
  nomeBreve: "Mira",
  delEnte: "del Comune di Mira",
  soggetto: "Il Comune",
  provincia: "VE",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "Settore Servizi al Cittadino – Servizio Politiche Sociali",
  indirizzo: "Piazza IX Martiri 3, 30034 Mira (VE)",
  telefono: "041 5628170",
  email: "servizisociali@comune.mira.ve.it",
  pec: "comune.mira.ve@pecveneto.it",
  orari: "Mar 9:00–12:00; Gio 9:00–12:00 e 15:00–17:00 (su appuntamento)",
  sitoWeb: "https://www.comune.mira.ve.it/amministrazione/unita_organizzativa/servizio-politiche-sociali/",

  logo: null,

  theme: {
    warm: "#CF908B",
    warmSoft: "#F2DFDD",
    warmDark: "#6E2F2A",
    cream: "#F6F3F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Mira",
      subtitle: "Settore Servizi al Cittadino – Servizio Politiche Sociali · Piazza IX Martiri 3, 30034 Mira (VE) · Tel. 041 5628170",
      action: { type: "tel", value: "0415628170" },
    },
    {
      icon: "business-outline",
      title: "InLinea – Segretariato sociale ATS VEN_13",
      subtitle: "Sportello telefonico di informazione e orientamento sociale per i 17 comuni di Riviera del Brenta e Miranese (Lun–Ven 8:30–13:30, Mar e Gio anche 14:30–17:30)",
      action: { type: "tel", value: "0414266744" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 3 Serenissima",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss3.veneto.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Mira (041 5628170) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 3 Serenissima · Esenzioni ticket",
    url: "https://www.aulss3.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
