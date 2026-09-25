import type { ComuneConfig } from "../types";

// Comune di Asti (AT) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: telefono, orari
export const asti: ComuneConfig = {
  slug: "asti",
  tipo: "comune",
  nome: "Comune di Asti",
  nomeBreve: "Asti",
  delEnte: "del Comune di Asti",
  soggetto: "Il Comune",
  provincia: "AT",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "Settore Politiche Sociali, Istruzione e Servizi Educativi",
  indirizzo: "Piazza Catena 3, 14100 Asti (AT)",
  telefono: "0141 399111",
  email: "politichesociali@comune.asti.it",
  pec: "protocollo.comuneasti@pec.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.asti.it/amministrazione/settore-politiche-sociali-istruzione-servizi-educativi",

  logo: null,

  theme: {
    warm: "#BBCF8B",
    warmSoft: "#ECF2DD",
    warmDark: "#5B6E2A",
    cream: "#F5F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Asti",
      subtitle: "Settore Politiche Sociali, Istruzione e Servizi Educativi · Piazza Catena 3, 14100 Asti (AT) · Tel. 0141 399111",
      action: { type: "tel", value: "0141399111" },
    },
    {
      icon: "business-outline",
      title: "Servizi sociali online Città di Asti",
      subtitle: "Portale dei servizi sociali per i cittadini",
      action: { type: "web", value: "https://net.comune.asti.it/cmsasti/servizionline.aspx?S=1100" },
    },
    {
      icon: "medkit-outline",
      title: "ASL AT",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl.at.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Asti (0141 399111) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL AT · Esenzioni ticket",
    url: "https://www.asl.at.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
