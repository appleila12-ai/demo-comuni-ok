import type { ComuneConfig } from "../types";

// Comune di Porto Venere (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati dalla pagina 'Punti di accesso' del Distretto 18 sul sito del Comune della Spezia (settembre 2026), da verificare.
export const portovenere: ComuneConfig = {
  slug: "portovenere",
  tipo: "comune",
  nome: "Comune di Porto Venere",
  nomeBreve: "Porto Venere",
  delEnte: "del Comune di Porto Venere",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali e Scuola – Sportello di Cittadinanza",
  indirizzo: "Via Garibaldi 9, 19025 Porto Venere (SP)",
  telefono: "0187 794844",
  email: "giuliana.coglio@comune.portovenere.sp.it",
  orari: "Mar e Gio 9:00–12:00; Sab su appuntamento",
  sitoWeb: "https://www.comune.portovenere.sp.it/amministrazione/uffici/ufficio_16.html",

  logo: null,

  theme: {
    warm: "#8FB0CF",
    warmSoft: "#E3ECF5",
    warmDark: "#2E5578",
    cream: "#F3F5F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Porto Venere",
      subtitle: "Sportello di Cittadinanza · Via Garibaldi 9, 19025 Porto Venere (SP) · Tel. 0187 794844",
      action: { type: "tel", value: "0187794844" },
    },
    {
      icon: "business-outline",
      title: "Distretto Sociosanitario 18 – Spezzino",
      subtitle: "Porto Venere fa parte dell'ambito sociale con La Spezia: punti di accesso e servizi del distretto",
      action: { type: "web", value: "https://www.comune.laspezia.it/argomenti/assistenza-sociale/distretto-sociosanitario-18/punti-di-accesso" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Porto Venere (0187 794844) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};
