import type { ComuneConfig } from "../types";

// Comune di Ferentino (FR) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati dal sito ufficiale del Comune e del Distretto Sociale B Frosinone (ottobre 2026), da verificare con l'ente.
export const ferentino: ComuneConfig = {
  slug: "ferentino",
  tipo: "comune",
  nome: "Comune di Ferentino",
  nomeBreve: "Ferentino",
  delEnte: "del Comune di Ferentino",
  soggetto: "Il Comune",
  provincia: "FR",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali ed Educativi",
  indirizzo: "Piazza Giacomo Matteotti, 03013 Ferentino (FR)",
  telefono: "0775 248247",
  email: "servizisociali@comune.ferentino.fr.it",
  pec: "servizisociali.ferentino@pec-cap.it",
  orari: "Lun e Mer 9:00–13:00; Gio 15:00–18:00",
  sitoWeb: "https://www.comune.ferentino.fr.it/it/organizational_unit/7727",

  logo: null,

  theme: {
    warm: "#B9A27C",
    warmSoft: "#F1EBE0",
    warmDark: "#5E4A27",
    cream: "#F7F4EF",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Ferentino",
      subtitle: "Ufficio Servizi Sociali ed Educativi · Piazza Giacomo Matteotti, 03013 Ferentino (FR) · Tel. 0775 248247",
      action: { type: "tel", value: "0775248247" },
    },
    {
      icon: "business-outline",
      title: "Distretto Sociale B – Frosinone",
      subtitle: "Servizi sociali associati dei 23 Comuni del distretto, capofila Frosinone: disabilità gravissima, Progetto di Vita, autismo",
      action: { type: "web", value: "https://www.distrettosocialefrosinone.it" },
    },
    {
      icon: "medkit-outline",
      title: "Casa della Salute di Ferentino – ASL Frosinone",
      subtitle: "Servizi sanitari del territorio, esenzioni ticket, prenotazioni",
      action: { type: "web", value: "https://www.asl.fr.it/strutture/case-della-salute/casa-della-salute-ferentino/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Ferentino (0775 248247) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Frosinone · Servizi ed esenzioni",
    url: "https://www.asl.fr.it/servizi/",
  },

  daVerificare: true,
  dimostrativo: true,
};
