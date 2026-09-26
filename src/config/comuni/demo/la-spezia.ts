import type { ComuneConfig } from "../types";

// Comune di La Spezia (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const laSpezia: ComuneConfig = {
  slug: "la-spezia",
  tipo: "comune",
  nome: "Comune di La Spezia",
  nomeBreve: "La Spezia",
  delEnte: "del Comune di La Spezia",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "C.d.R. Servizi Sociosanitari – Comune della Spezia",
  indirizzo: "Via Fiume 207, 19122 La Spezia (SP)",
  telefono: "0187 745670",
  email: "sportellocittadinanza@comune.sp.it",
  pec: "servizisociosanitari.comune.laspezia@legalmail.it",
  orari: "Lun–Ven 8:30–12:30; Mar anche 15:00–16:30",
  sitoWeb: "https://www.comune.laspezia.it/amministrazione/uffici/servizi-sociosanitari",

  logo: null,

  theme: {
    warm: "#ADCF8B",
    warmSoft: "#E8F2DD",
    warmDark: "#4C6E2A",
    cream: "#F4F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – La Spezia",
      subtitle: "C.d.R. Servizi Sociosanitari – Comune della Spezia · Via Fiume 207, 19122 La Spezia (SP) · Tel. 0187 745670",
      action: { type: "tel", value: "0187745670" },
    },
    {
      icon: "business-outline",
      title: "Segretariato Sociale",
      subtitle: "Servizio comunale di informazione, accoglienza e orientamento sui servizi sociali e sociosanitari",
      action: { type: "web", value: "https://www.comune.laspezia.it/servizi/salute-benessere-e-assistenza/segretariato-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di La Spezia (0187 745670) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL 5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
