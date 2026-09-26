import type { ComuneConfig } from "../types";

// Comune di Osimo (AN) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, pec
export const osimo: ComuneConfig = {
  slug: "osimo",
  tipo: "comune",
  nome: "Comune di Osimo",
  nomeBreve: "Osimo",
  delEnte: "del Comune di Osimo",
  soggetto: "Il Comune",
  provincia: "AN",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "Settore Sociale – Comune di Osimo",
  indirizzo: "Piazza del Comune 1 (Loggiato del Palazzo Comunale), 60027 Osimo (AN)",
  telefono: "071 7249395",
  email: "assistente.sociale@comune.osimo.an.it",
  pec: "comune.osimo@emarche.it",
  orari: "Lun 15:00–18:00; Mar e Gio 8:30–12:30",
  sitoWeb: "https://www.comune.osimo.an.it/servizi-sociali/",

  logo: null,

  theme: {
    warm: "#8BCFC0",
    warmSoft: "#DDF2ED",
    warmDark: "#2A6E60",
    cream: "#F2F6F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Osimo",
      subtitle: "Settore Sociale – Comune di Osimo · Piazza del Comune 1 (Loggiato del Palazzo Comunale), 60027 Osimo (AN) · Tel. 071 7249395",
      action: { type: "tel", value: "0717249395" },
    },
    {
      icon: "business-outline",
      title: "Ambito Territoriale Sociale XIII",
      subtitle: "Ambito sociale di Osimo per la programmazione dei servizi sociali",
      action: { type: "web", value: "https://www.comune.osimo.an.it/servizi-sociali/" },
    },
    {
      icon: "medkit-outline",
      title: "AST Ancona",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ast-ancona.marche.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Osimo (071 7249395) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AST Ancona · Esenzioni ticket",
    url: "https://www.ast-ancona.marche.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
