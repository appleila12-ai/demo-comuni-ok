import type { ComuneConfig } from "../types";

// Comune di Spinea (VE) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: telefono, email, orari, pec
export const spinea: ComuneConfig = {
  slug: "spinea",
  tipo: "comune",
  nome: "Comune di Spinea",
  nomeBreve: "Spinea",
  delEnte: "del Comune di Spinea",
  soggetto: "Il Comune",
  provincia: "VE",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "Settore Sociale, Cultura, Pubblica Istruzione e Sport",
  indirizzo: "Via Carlo Pisacane 12, 30038 Spinea (VE)",
  telefono: "041 5071111",
  email: "protocollo@comune.spinea.ve.it",
  pec: "protocollo.comune.spinea.ve@pecveneto.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.spinea.ve.it/it/unita_organizzative/16687",

  logo: null,

  theme: {
    warm: "#8B99CF",
    warmSoft: "#DDE2F2",
    warmDark: "#2A386E",
    cream: "#F2F3F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Spinea",
      subtitle: "Settore Sociale, Cultura, Pubblica Istruzione e Sport · Via Carlo Pisacane 12, 30038 Spinea (VE) · Tel. 041 5071111",
      action: { type: "tel", value: "0415071111" },
    },
    {
      icon: "business-outline",
      title: "InLinea – Segretariato sociale ATS VEN_13",
      subtitle: "Sportello telefonico di informazione e orientamento sociale per i comuni di Riviera del Brenta e Miranese",
      action: { type: "tel", value: "0414266744" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 3 Serenissima",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss3.veneto.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Spinea (041 5071111) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 3 Serenissima · Esenzioni ticket",
    url: "https://www.aulss3.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
