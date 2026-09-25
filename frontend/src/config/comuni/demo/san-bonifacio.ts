import type { ComuneConfig } from "../types";

// Comune di San Bonifacio (VR) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const sanBonifacio: ComuneConfig = {
  slug: "san-bonifacio",
  tipo: "comune",
  nome: "Comune di San Bonifacio",
  nomeBreve: "San Bonifacio",
  delEnte: "del Comune di San Bonifacio",
  soggetto: "Il Comune",
  provincia: "VR",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "Area Segreteria e Affari Generali e Servizi alla Persona",
  indirizzo: "Piazza Costituzione 4, 37047 San Bonifacio (VR)",
  telefono: "045 6132654",
  email: "domiciliari@comune.sanbonifacio.vr.it",
  pec: "sanbonifacio.vr@cert.ip-veneto.net",
  orari: "Mer e Ven 8:30–12:30 (su appuntamento)",
  sitoWeb: "https://www.comune.sanbonifacio.vr.it/amministrazione/unita-organizzative/servizi-sociali/",

  logo: null,

  theme: {
    warm: "#CFCC8B",
    warmSoft: "#F2F1DD",
    warmDark: "#6E6B2A",
    cream: "#F6F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – San Bonifacio",
      subtitle: "Area Segreteria e Affari Generali e Servizi alla Persona · Piazza Costituzione 4, 37047 San Bonifacio (VR) · Tel. 045 6132654",
      action: { type: "tel", value: "0456132654" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 9 Scaligera",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss9.veneto.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di San Bonifacio (045 6132654) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 9 Scaligera · Esenzioni ticket",
    url: "https://www.aulss9.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
