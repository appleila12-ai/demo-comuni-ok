import type { ComuneConfig } from "../types";

// Comune di Jesolo (VE) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, telefono, email, orari, pec
export const jesolo: ComuneConfig = {
  slug: "jesolo",
  tipo: "comune",
  nome: "Comune di Jesolo",
  nomeBreve: "Jesolo",
  delEnte: "del Comune di Jesolo",
  soggetto: "Il Comune",
  provincia: "VE",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "Settore Servizi Istituzionali e alla Persona – Servizi Sociali",
  indirizzo: "Via Sant'Antonio 11, 30016 Jesolo (VE)",
  telefono: "0421 359182",
  email: "comune.jesolo@legalmail.it",
  pec: "comune.jesolo@legalmail.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.jesolo.ve.it/amministrazione/unita_organizzativa/servizi-sociali/",

  logo: null,

  theme: {
    warm: "#8BCFA4",
    warmSoft: "#DDF2E5",
    warmDark: "#2A6E43",
    cream: "#F2F6F4",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Jesolo",
      subtitle: "Settore Servizi Istituzionali e alla Persona – Servizi Sociali · Via Sant'Antonio 11, 30016 Jesolo (VE) · Tel. 0421 359182",
      action: { type: "tel", value: "0421359182" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 4 Veneto Orientale",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss4.veneto.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Jesolo (0421 359182) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 4 Veneto Orientale · Esenzioni ticket",
    url: "https://www.aulss4.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
