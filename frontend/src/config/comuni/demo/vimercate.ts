import type { ComuneConfig } from "../types";

// Comune di Vimercate (MB) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: responsabile
export const vimercate: ComuneConfig = {
  slug: "vimercate",
  tipo: "comune",
  nome: "Comune di Vimercate",
  nomeBreve: "Vimercate",
  delEnte: "del Comune di Vimercate",
  soggetto: "Il Comune",
  provincia: "MB",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Servizi Sociali – Ambito di Vimercate (Offertasociale, Azienda consortile)",
  indirizzo: "Piazza Marconi 7/D, 20871 Vimercate (MB)",
  telefono: "039 6659460",
  email: "servizisociali@comune.vimercate.mb.it",
  pec: "vimercate@pec.comune.vimercate.mb.it",
  orari: "Lun, Mer e Ven 9:00–12:00; Gio 16:00–18:00",
  sitoWeb: "https://www.comune.vimercate.mb.it/it/page/servizi-sociali-9ed10c49-9864-476a-9082-88fb9d45e7be",

  logo: null,

  theme: {
    warm: "#8BB0CF",
    warmSoft: "#DDE9F2",
    warmDark: "#2A4F6E",
    cream: "#F2F4F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Vimercate",
      subtitle: "Servizi Sociali – Ambito di Vimercate (Offertasociale, Azienda consortile) · Piazza Marconi 7/D, 20871 Vimercate (MB) · Tel. 039 6659460",
      action: { type: "tel", value: "0396659460" },
    },
    {
      icon: "business-outline",
      title: "Offertasociale – Piano di Zona Ambito di Vimercate",
      subtitle: "Azienda consortile che gestisce servizi sociali e Piano di Zona dell'Ambito di Vimercate",
      action: { type: "web", value: "http://www.offertasociale.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Brianza",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-brianza.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Vimercate (039 6659460) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Brianza · Esenzioni ticket",
    url: "https://www.asst-brianza.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
