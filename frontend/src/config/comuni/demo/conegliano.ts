import type { ComuneConfig } from "../types";

// Comune di Conegliano (TV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, telefono, email, orari
export const conegliano: ComuneConfig = {
  slug: "conegliano",
  tipo: "comune",
  nome: "Comune di Conegliano",
  nomeBreve: "Conegliano",
  delEnte: "del Comune di Conegliano",
  soggetto: "Il Comune",
  provincia: "TV",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "5° Settore Servizi alla Persona – Servizio Politiche Sociali",
  indirizzo: "Piazzale Beccaria, 31015 Conegliano (TV)",
  telefono: "0438 413210",
  email: "servizisociali@comune.conegliano.tv.it",
  pec: "pec@comuneconegliano.legalmail.it",
  orari: "Lun e Gio 9:00–13:00 e 16:00–17:30; Mar, Mer, Ven 9:00–13:00",
  sitoWeb: "https://www.comune.conegliano.tv.it/amministrazione/uffici/assistenzasociale",

  logo: null,

  theme: {
    warm: "#8BBECF",
    warmSoft: "#DDEDF2",
    warmDark: "#2A5D6E",
    cream: "#F2F5F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Conegliano",
      subtitle: "5° Settore Servizi alla Persona – Servizio Politiche Sociali · Piazzale Beccaria, 31015 Conegliano (TV) · Tel. 0438 413210",
      action: { type: "tel", value: "0438413210" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 Marca Trevigiana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss2.veneto.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Conegliano (0438 413210) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 2 Marca Trevigiana · Esenzioni ticket",
    url: "https://www.aulss2.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
