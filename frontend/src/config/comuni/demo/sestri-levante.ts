import type { ComuneConfig } from "../types";

// Comune di Sestri Levante (GE) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: orari, altro
export const sestriLevante: ComuneConfig = {
  slug: "sestri-levante",
  tipo: "comune",
  nome: "Comune di Sestri Levante",
  nomeBreve: "Sestri Levante",
  delEnte: "del Comune di Sestri Levante",
  soggetto: "Il Comune",
  provincia: "GE",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Area Servizi alla Persona",
  indirizzo: "Piazza della Repubblica 44, 16039 Sestri Levante (GE)",
  telefono: "0185 478300",
  email: "serviziallapersona@comune.sestri-levante.ge.it",
  pec: "protocollo@pec.comune.sestri-levante.ge.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.sestri-levante.ge.it/amministrazione/unita_organizzativa/servizi-alla-persona/",

  logo: null,

  theme: {
    warm: "#8BCFC9",
    warmSoft: "#DDF2F0",
    warmDark: "#2A6E68",
    cream: "#F2F6F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Sestri Levante",
      subtitle: "Area Servizi alla Persona · Piazza della Repubblica 44, 16039 Sestri Levante (GE) · Tel. 0185 478300",
      action: { type: "tel", value: "0185478300" },
    },
    {
      icon: "business-outline",
      title: "Distretto Sociosanitario 16 Tigullio",
      subtitle: "Distretto sociosanitario dei Comuni del Tigullio: servizi per minori, famiglie, disabili, adulti e anziani",
      action: { type: "web", value: "https://www.asl4.liguria.it/territorio/distretti/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 4 Liguria (Chiavarese)",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl4.liguria.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Sestri Levante (0185 478300) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL 4 Liguria (Chiavarese) · Esenzioni ticket",
    url: "https://www.asl4.liguria.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
