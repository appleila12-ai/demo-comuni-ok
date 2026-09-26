import type { ComuneConfig } from "../types";

// Comune di Cuneo (CN) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: pec, email, orari
export const cuneo: ComuneConfig = {
  slug: "cuneo",
  tipo: "comune",
  nome: "Comune di Cuneo",
  nomeBreve: "Cuneo",
  delEnte: "del Comune di Cuneo",
  soggetto: "Il Comune",
  provincia: "CN",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "Consorzio Socio Assistenziale del Cuneese (CSAC)",
  indirizzo: "Via Rocca de' Baldi 7, 12100 Cuneo (CN)",
  telefono: "0171 334001",
  email: "affari.generali@csac-cn.it",
  pec: "protocollo.comune.cuneo@legalmail.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.csac-cn.it/",

  logo: null,

  theme: {
    warm: "#8BA7CF",
    warmSoft: "#DDE6F2",
    warmDark: "#2A466E",
    cream: "#F2F4F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Cuneo",
      subtitle: "Consorzio Socio Assistenziale del Cuneese (CSAC) · Via Rocca de' Baldi 7, 12100 Cuneo (CN) · Tel. 0171 334001",
      action: { type: "tel", value: "0171334001" },
    },
    {
      icon: "business-outline",
      title: "Consorzio Socio Assistenziale del Cuneese",
      subtitle: "Ente gestore dei servizi socio-assistenziali di Cuneo e comuni limitrofi",
      action: { type: "web", value: "https://www.csac-cn.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL CN1",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aslcn1.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Cuneo (0171 334001) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL CN1 · Esenzioni ticket",
    url: "https://www.aslcn1.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
