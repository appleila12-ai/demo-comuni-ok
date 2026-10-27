import type { ComuneConfig } from "../types";

// Comune di Fabrica di Roma (VT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina "Ufficio Servizi Sociali" del sito del Comune, letta il 27/10/2026 (la pagina è aggiornata all'11/04/2024: ricontrollare con l'ente).
// Orari non riportati dalla pagina: non pubblicati. Il distretto socio-sanitario non è confermato: non indicato.
// Da fare: orari, bonus del Comune, associazioni, sport e tempo libero.
export const fabricaDiRoma: ComuneConfig = {
  slug: "fabrica-di-roma",
  tipo: "comune",
  nome: "Comune di Fabrica di Roma",
  nomeBreve: "Fabrica di Roma",
  delEnte: "del Comune di Fabrica di Roma",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Dott.ssa Paola Alessi",
  indirizzo: "Via A. Cencelli 20, 01034 Fabrica di Roma (VT)",
  telefono: "0761 567530",
  email: "serv.socialifabrica@libero.it",
  pec: "servizisociali.fabricadiroma@pec.it",
  orari: "",
  sitoWeb: "https://www.comune.fabricadiroma.vt.it/home/amministrazione/uffici/Ufficio-6.html",

  logo: null,

  theme: {
    warm: "#88AFC7",
    warmSoft: "#E2EDF4",
    warmDark: "#2F5874",
    cream: "#F3F6F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Fabrica di Roma",
      subtitle: "Via A. Cencelli 20 · Tel. 0761 567530 · Centralino del Comune 0761 569001 · Gli orari si chiedono per telefono",
      action: { type: "tel", value: "0761567530" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali del Comune (0761 567530) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
