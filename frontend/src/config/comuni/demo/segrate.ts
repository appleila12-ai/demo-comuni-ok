import type { ComuneConfig } from "../types";

// Comune di Segrate (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: telefono, altro
export const segrate: ComuneConfig = {
  slug: "segrate",
  tipo: "comune",
  nome: "Comune di Segrate",
  nomeBreve: "Segrate",
  delEnte: "del Comune di Segrate",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Servizio Politiche Sociali – Distretto Sociale Est Milano",
  indirizzo: "Piazza 9 Novembre 1989, 20054 Segrate (MI)",
  telefono: "02 269021",
  email: "serviziallapersona@comune.segrate.mi.it",
  pec: "comunesegrate@pec.it",
  orari: "Su appuntamento; telefonico Lun–Ven 8:30–12:30",
  sitoWeb: "https://www.comune.segrate.mi.it/amministrazione/uffici/servizi-sociali/",

  logo: null,

  theme: {
    warm: "#C68BCF",
    warmSoft: "#EFDDF2",
    warmDark: "#652A6E",
    cream: "#F6F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Segrate",
      subtitle: "Servizio Politiche Sociali – Distretto Sociale Est Milano · Piazza 9 Novembre 1989, 20054 Segrate (MI) · Tel. 02 269021",
      action: { type: "tel", value: "02269021" },
    },
    {
      icon: "business-outline",
      title: "Abitare Sociale Distretto Est",
      subtitle: "Servizio abitativo del Distretto Sociale Est Milano",
      action: { type: "web", value: "https://www.abitaredistrettoest.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Melegnano e della Martesana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-melegnano-martesana.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Segrate (02 269021) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Melegnano e della Martesana · Esenzioni ticket",
    url: "https://www.asst-melegnano-martesana.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
