import type { ComuneConfig } from "../types";

// Comune di Bergamo (BG) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const bergamo: ComuneConfig = {
  slug: "bergamo",
  tipo: "comune",
  nome: "Comune di Bergamo",
  nomeBreve: "Bergamo",
  delEnte: "del Comune di Bergamo",
  soggetto: "Il Comune",
  provincia: "BG",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Direzione Servizi alla Persona – Servizi sociali a favore di minori, anziani, adulti e famiglie",
  indirizzo: "Piazzetta Giulio Marcovigi 2 (Social Domus), 24128 Bergamo (BG)",
  telefono: "035 399888",
  email: "servizisocialidecentrati@comune.bergamo.it",
  pec: "protocollo@cert.comune.bergamo.it",
  orari: "Lun–Ven 9:00–12:30; Mar e Gio anche 14:00–17:00",
  sitoWeb: "https://www.comune.bergamo.it/unita-organizzativa/servizi-sociali-a-favore-di-minori-anziani-adulti-e-famiglie",

  logo: null,

  theme: {
    warm: "#8BCFBB",
    warmSoft: "#DDF2EC",
    warmDark: "#2A6E5A",
    cream: "#F2F6F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Bergamo",
      subtitle: "Direzione Servizi alla Persona – Servizi sociali a favore di minori, anziani, adulti e famiglie · Piazzetta Giulio Marcovigi 2 (Social Domus), 24128 Bergamo (BG) · Tel. 035 399888",
      action: { type: "tel", value: "035399888" },
    },
    {
      icon: "business-outline",
      title: "Ufficio di Piano – Ambito di Bergamo",
      subtitle: "Programmazione servizi sociali e accesso ai servizi dell'Ambito",
      action: { type: "web", value: "https://www.comune.bergamo.it/unita-organizzativa/servizio-programmazione-servizi-sociali-ufficio-di-piano-accesso-ai-servizi" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Papa Giovanni XXIII",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-pg23.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Bergamo (035 399888) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Papa Giovanni XXIII · Esenzioni ticket",
    url: "https://www.asst-pg23.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
