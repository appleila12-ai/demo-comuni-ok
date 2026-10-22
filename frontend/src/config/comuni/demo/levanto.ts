import type { ComuneConfig } from "../types";

// Comune di Levanto (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti: pagine "Ufficio Servizi Sociali" e "Politiche sociali – cultura – sport – istruzione – trasporti – turismo" del sito del Comune, lette il 22/10/2026.
// Levanto è capofila dell'Ambito Territoriale Sociale n. 62 della Riviera Spezzina (con Deiva Marina, Framura, Bonassola, Monterosso, Vernazza, Riomaggiore).
export const levanto: ComuneConfig = {
  slug: "levanto",
  tipo: "comune",
  nome: "Comune di Levanto",
  nomeBreve: "Levanto",
  delEnte: "del Comune di Levanto",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali",
  indirizzo: "Piazza Cavour 1, 19015 Levanto (SP)",
  telefono: "0187 802233",
  email: "politichesociali@comune.levanto.sp.it",
  pec: "comune.levanto.sp@legalmail.it",
  orari: "Su appuntamento",
  sitoWeb: "https://comune.levanto.sp.it/amministrazione/unita_organizzativa/ufficio-servizi-sociali/",

  logo: null,

  theme: {
    warm: "#9DB8B0",
    warmSoft: "#E4EEEB",
    warmDark: "#33594F",
    cream: "#F3F6F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Levanto",
      subtitle: "Assistente sociale · Piazza Cavour 1 · Tel. 0187 802233 · Su appuntamento · politichesociali@comune.levanto.sp.it",
      action: { type: "tel", value: "0187802233" },
    },
    {
      icon: "business-outline",
      title: "Ambito Sociale n. 62 – Riviera Spezzina",
      subtitle: "Levanto è capofila con Deiva Marina, Framura, Bonassola, Monterosso, Vernazza e Riomaggiore · Assistente sociale di Ambito: tel. 0187 802233",
      action: { type: "tel", value: "0187802233" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Levanto (0187 802233) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};
