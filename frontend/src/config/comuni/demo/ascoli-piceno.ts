import type { ComuneConfig } from "../types";

// Comune di Ascoli Piceno (AP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: email, pec, orari, indirizzo
export const ascoliPiceno: ComuneConfig = {
  slug: "ascoli-piceno",
  tipo: "comune",
  nome: "Comune di Ascoli Piceno",
  nomeBreve: "Ascoli Piceno",
  delEnte: "del Comune di Ascoli Piceno",
  soggetto: "Il Comune",
  provincia: "AP",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "Settore 3 – Politiche per il Benessere della Persona / Servizio Politiche Sociali",
  indirizzo: "Via Berardo Tucci 3 (Casa Albergo Ferrucci), 63100 Ascoli Piceno (AP)",
  telefono: "0736 298603",
  email: "",
  pec: "",
  orari: "Lun–Ven 9:00–11:00; Mar 16:00–17:00",
  sitoWeb: "https://www.comune.ap.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/5720",

  logo: null,

  theme: {
    warm: "#CFAC8B",
    warmSoft: "#F2E7DD",
    warmDark: "#6E4B2A",
    cream: "#F6F4F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Ascoli Piceno",
      subtitle: "Settore 3 – Politiche per il Benessere della Persona / Servizio Politiche Sociali · Via Berardo Tucci 3 (Casa Albergo Ferrucci), 63100 Ascoli Piceno (AP) · Tel. 0736 298603",
      action: { type: "tel", value: "0736298603" },
    },
    {
      icon: "business-outline",
      title: "Ambito Territoriale Sociale 22",
      subtitle: "Ambito sociale con capofila Ascoli Piceno per i servizi sociali del territorio",
      action: { type: "tel", value: "0736298500" },
    },
    {
      icon: "medkit-outline",
      title: "AST Ascoli Piceno",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.ast-ascoli.marche.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Ascoli Piceno (0736 298603) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "AST Ascoli Piceno · Esenzioni ticket",
    url: "https://www.ast-ascoli.marche.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
