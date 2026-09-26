import type { ComuneConfig } from "../types";

// Comune di Faenza (RA) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, telefono, email, pec, orari
export const faenza: ComuneConfig = {
  slug: "faenza",
  tipo: "comune",
  nome: "Comune di Faenza",
  nomeBreve: "Faenza",
  delEnte: "del Comune di Faenza",
  soggetto: "Il Comune",
  provincia: "RA",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "Unione della Romagna Faentina – Area Servizi alla Comunità (Servizi Sociali Associati)",
  indirizzo: "Faenza (RA)",
  telefono: "0546 691111",
  email: "comune.faenza@cert.provincia.ra.it",
  pec: "comune.faenza@cert.provincia.ra.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.romagnafaentina.it/servizi/salute-benessere-e-assistenza/assistenza-domiciliare",

  logo: null,

  theme: {
    warm: "#8BCF96",
    warmSoft: "#DDF2E1",
    warmDark: "#2A6E35",
    cream: "#F2F6F3",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Faenza",
      subtitle: "Unione della Romagna Faentina – Area Servizi alla Comunità (Servizi Sociali Associati) · Faenza (RA) · Tel. 0546 691111",
      action: { type: "tel", value: "0546691111" },
    },
    {
      icon: "business-outline",
      title: "Centro per le Famiglie dell'Unione della Romagna Faentina",
      subtitle: "Informazioni e sostegno a famiglie e genitori del distretto di Faenza",
      action: { type: "web", value: "https://www.informafamiglie.it/centri-per-le-famiglie/centri-famiglie-ravenna/centro-per-le-famiglie-dellunione-dei-comuni-della-romagna-faentina-ra" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL della Romagna",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.auslromagna.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Faenza (0546 691111) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AUSL della Romagna · Esenzioni ticket",
    url: "https://www.auslromagna.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
