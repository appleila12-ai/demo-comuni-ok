import type { ComuneConfig } from "../types";

// Comune di Lodi (LO) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026): il sito del Comune non era leggibile, da verificare con l'ente.
export const lodi: ComuneConfig = {
  slug: "lodi",
  tipo: "comune",
  nome: "Comune di Lodi",
  nomeBreve: "Lodi",
  delEnte: "del Comune di Lodi",
  soggetto: "Il Comune",
  provincia: "LO",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Politiche Sociali",
  indirizzo: "Via Volturno 4, 26900 Lodi (LO)",
  telefono: "0371 409329",
  email: "politichesociali@comune.lodi.it",
  orari: "Lun 9:00–12:00; Mer 9:00–13:00; Sab 9:00–12:00",
  sitoWeb: "https://www.comune.lodi.it/areetematiche/sociale",

  logo: null,

  theme: {
    warm: "#9FB58A",
    warmSoft: "#E8EFE1",
    warmDark: "#46602F",
    cream: "#F4F7F1",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Lodi",
      subtitle: "Ufficio Politiche Sociali · Via Volturno 4, 26900 Lodi (LO) · Tel. 0371 409329",
      action: { type: "tel", value: "0371409329" },
    },
    {
      icon: "business-outline",
      title: "Ufficio di Piano – Ambito di Lodi",
      subtitle: "Servizi sociali dei 61 Comuni del Lodigiano · Via Fanfulla 14, Lodi · Tel. 0371 442905",
      action: { type: "web", value: "https://www.ufficiodipiano.lodi.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Lodi",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-lodi.it/en/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Lodi (0371 409329) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Lodi · Esenzioni ticket",
    url: "https://www.asst-lodi.it/en/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};
