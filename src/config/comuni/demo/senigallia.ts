import type { ComuneConfig } from "../types";

// Comune di Senigallia (AN) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: email, orari
export const senigallia: ComuneConfig = {
  slug: "senigallia",
  tipo: "comune",
  nome: "Comune di Senigallia",
  nomeBreve: "Senigallia",
  delEnte: "del Comune di Senigallia",
  soggetto: "Il Comune",
  provincia: "AN",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "Unione dei Comuni Le Terre della Marca Senone – Servizi Sociali (ATS n. 8)",
  indirizzo: "Piazza Roma 8, 60019 Senigallia (AN)",
  telefono: "071 795951",
  email: "info@leterredellamarcasenone.it",
  pec: "comune.senigallia@emarche.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.senigallia.an.it/amministrazione/unita_organizzativa/ufficio-politiche-sociali-e-integrazione-socio-sanitaria/",

  logo: null,

  theme: {
    warm: "#CF8BCA",
    warmSoft: "#F2DDF0",
    warmDark: "#6E2A69",
    cream: "#F6F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Senigallia",
      subtitle: "Unione dei Comuni Le Terre della Marca Senone – Servizi Sociali (ATS n. 8) · Piazza Roma 8, 60019 Senigallia (AN) · Tel. 071 795951",
      action: { type: "tel", value: "071795951" },
    },
    {
      icon: "business-outline",
      title: "Ambito Territoriale Sociale n. 8",
      subtitle: "Servizi sociali gestiti dall'Unione Le Terre della Marca Senone per 7 comuni",
      action: { type: "web", value: "https://www.leterredellamarcasenone.it/uffici-amministrativi/servizi-sociali/" },
    },
    {
      icon: "medkit-outline",
      title: "AST Ancona",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ast-ancona.marche.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Senigallia (071 795951) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AST Ancona · Esenzioni ticket",
    url: "https://www.ast-ancona.marche.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
