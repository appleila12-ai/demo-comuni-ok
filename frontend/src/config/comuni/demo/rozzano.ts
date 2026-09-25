import type { ComuneConfig } from "../types";

// Comune di Rozzano (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: orari, asl
export const rozzano: ComuneConfig = {
  slug: "rozzano",
  tipo: "comune",
  nome: "Comune di Rozzano",
  nomeBreve: "Rozzano",
  delEnte: "del Comune di Rozzano",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Direzione Politiche Sociali – Ufficio Servizio Sociale (Ambito Distrettuale Visconteo Sud Milano)",
  indirizzo: "Piazza Giovanni Foglia 1, 20089 Rozzano (MI)",
  telefono: "02 8226369",
  email: "servizio.sociale@comune.rozzano.mi.it",
  pec: "protocollo@pec.comune.rozzano.mi.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.rozzano.mi.it/it/unita_organizzative/direzione-politiche-sociali",

  logo: null,

  theme: {
    warm: "#CF9E8B",
    warmSoft: "#F2E3DD",
    warmDark: "#6E3D2A",
    cream: "#F6F3F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Rozzano",
      subtitle: "Direzione Politiche Sociali – Ufficio Servizio Sociale (Ambito Distrettuale Visconteo Sud Milano) · Piazza Giovanni Foglia 1, 20089 Rozzano (MI) · Tel. 02 8226369",
      action: { type: "tel", value: "028226369" },
    },
    {
      icon: "business-outline",
      title: "Ufficio di Piano – Ambito Visconteo Sud Milano",
      subtitle: "Ufficio di Piano dell'Ambito distrettuale con sede a Rozzano, gestisce il Piano di Zona e i bandi sociali sovracomunali.",
      action: { type: "web", value: "https://www.comune.rozzano.mi.it/it/unita_organizzative/ufficio-di-piano" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Melegnano e della Martesana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-melegnano-martesana.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Rozzano (02 8226369) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Melegnano e della Martesana · Esenzioni ticket",
    url: "https://www.asst-melegnano-martesana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
