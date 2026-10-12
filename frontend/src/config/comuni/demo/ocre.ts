import type { ComuneConfig } from "../types";

// Comune di Ocre (AQ) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti confermati dalla pagina "Uffici" del sito ufficiale del Comune (ottobre 2026):
// indirizzo, telefono, email ordinaria, PEC (quella dei servizi demografici).
// Gli orari (lun-ven 9:00-12:30, mar anche 15:00-16:00) sono quelli dell'Ufficio Protocollo e
// Anagrafe, NON dei servizi sociali. Il sito elenca un'Area Amministrativa e Servizi alla
// Persona, ma non un ufficio sociale con recapiti propri: si usa il contatto generale.
// ASL: Ocre risulta in ASL 1 Abruzzo (area di Rocca di Mezzo per la continuità assistenziale).
// Da verificare: referente dei servizi sociali, ambito sociale di riferimento, trasporto sociale.
export const ocre: ComuneConfig = {
  slug: "ocre",
  tipo: "comune",
  nome: "Comune di Ocre",
  nomeBreve: "Ocre",
  delEnte: "del Comune di Ocre",
  soggetto: "Il Comune",
  provincia: "AQ",
  regione: "Abruzzo",

  ente: "Servizi Sociali",
  responsabile: "Comune di Ocre",
  indirizzo: "Via Edmondo De Amicis 2, 67040 Ocre (AQ)",
  telefono: "0862 751413",
  email: "info@comunediocre.it",
  pec: "demografici.ocre.aq@legalmail.it",
  orari: "Ufficio Protocollo e Anagrafe: lun-ven 9:00-12:30, mar anche 15:00-16:00. Per i servizi sociali telefona.",
  sitoWeb: "https://comune.ocre.aq.it",

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
      title: "Comune di Ocre – Servizi Sociali",
      subtitle: "Via Edmondo De Amicis 2, 67040 Ocre (AQ) · Tel. 0862 751413 · Chiedi quale ufficio segue i servizi sociali",
      action: { type: "tel", value: "0862751413" },
    },
    {
      icon: "business-outline",
      title: "Sito del Comune di Ocre",
      subtitle: "Uffici, modulistica e comunicazioni del Comune",
      action: { type: "web", value: "https://comune.ocre.aq.it/uffici" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 1 Abruzzo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl1abruzzo.it" },
    },
    {
      icon: "call-outline",
      title: "Distretto sanitario di Rocca di Mezzo – ASL 1",
      subtitle: "Distretto a cui fa riferimento Ocre · Tel. 0862 917338",
      action: { type: "tel", value: "0862917338" },
    },
  ],

  trasporto: "Chiedi al Comune di Ocre (0862 751413) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL 1 Abruzzo · Esenzioni ticket",
    url: "https://www.asl1abruzzo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
