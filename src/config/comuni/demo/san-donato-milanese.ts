import type { ComuneConfig } from "../types";

// Comune di San Donato Milanese (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: email
export const sanDonatoMilanese: ComuneConfig = {
  slug: "san-donato-milanese",
  tipo: "comune",
  nome: "Comune di San Donato Milanese",
  nomeBreve: "San Donato Milanese",
  delEnte: "del Comune di San Donato Milanese",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Servizi Sociali – Distretto Sociale Sud Est Milano (Azienda Sociale Sud Est Milano)",
  indirizzo: "Via C. Battisti 2, 20097 San Donato Milanese (MI)",
  telefono: "02 52772250",
  email: "protocollo@cert.comune.sandonatomilanese.mi.it",
  pec: "protocollo@cert.comune.sandonatomilanese.mi.it",
  orari: "Lun e Gio 9:00–12:00; Mar 9:00–12:00 solo telefonico",
  sitoWeb: "https://www.comune.sandonatomilanese.mi.it/amministrazione/uffici/segretariato-sociale",

  logo: null,

  theme: {
    warm: "#8BCFB2",
    warmSoft: "#DDF2E9",
    warmDark: "#2A6E51",
    cream: "#F2F6F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – San Donato Milanese",
      subtitle: "Servizi Sociali – Distretto Sociale Sud Est Milano (Azienda Sociale Sud Est Milano) · Via C. Battisti 2, 20097 San Donato Milanese (MI) · Tel. 02 52772250",
      action: { type: "tel", value: "0252772250" },
    },
    {
      icon: "business-outline",
      title: "Azienda Sociale Sud Est Milano",
      subtitle: "Azienda sociale e Ufficio di Piano del Distretto Sud Est Milano",
      action: { type: "web", value: "https://www.incrocicomuni.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Melegnano e della Martesana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-melegnano-martesana.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di San Donato Milanese (02 52772250) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Melegnano e della Martesana · Esenzioni ticket",
    url: "https://www.asst-melegnano-martesana.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
