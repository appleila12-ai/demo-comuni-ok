import type { ComuneConfig } from "../types";

// Comune di Arcola (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da elenchi pubblici (settembre 2026): il sito del Comune non era leggibile, da verificare con l'ente.
export const arcola: ComuneConfig = {
  slug: "arcola",
  tipo: "comune",
  nome: "Comune di Arcola",
  nomeBreve: "Arcola",
  delEnte: "del Comune di Arcola",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali e Ambito",
  indirizzo: "",
  telefono: "",
  email: "",
  orari: "",
  sitoWeb: "https://comune.arcola.sp.it/amministrazione/uffici/ufficio_39.html",

  logo: null,

  theme: {
    warm: "#9DB8A0",
    warmSoft: "#E6EFE7",
    warmDark: "#3F6446",
    cream: "#F3F6F3",
  },

  puntiSupporto: [
    {
      icon: "call-outline",
      title: "Distretto Sociosanitario 19 \"Val di Magra\"",
      subtitle: "Distretto di Sarzana, Ameglia, Arcola, Castelnuovo Magra, Luni, Santo Stefano di Magra e Vezzano Ligure · Tel. 0187 614507 / 0187 604933",
      action: { type: "tel", value: "0187614507" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};
