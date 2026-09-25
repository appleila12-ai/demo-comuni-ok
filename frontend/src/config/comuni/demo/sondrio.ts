import type { ComuneConfig } from "../types";

// Comune di Sondrio (SO) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const sondrio: ComuneConfig = {
  slug: "sondrio",
  tipo: "comune",
  nome: "Comune di Sondrio",
  nomeBreve: "Sondrio",
  delEnte: "del Comune di Sondrio",
  soggetto: "Il Comune",
  provincia: "SO",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Servizio Interventi Sociali",
  indirizzo: "Via Perego 1 (Palazzo Martinengo, 2° piano), 23100 Sondrio (SO)",
  telefono: "0342 526283",
  email: "serviziosociale@comune.sondrio.it",
  pec: "protocollo@cert.comune.sondrio.it",
  orari: "Lun–Ven 9:00–12:00; Mar e Ven anche 14:30–16:00",
  sitoWeb: "https://www.comune.sondrio.it/ufficio/ufficio-interventi-sociali/",

  logo: null,

  theme: {
    warm: "#96CF8B",
    warmSoft: "#E1F2DD",
    warmDark: "#356E2A",
    cream: "#F3F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Sondrio",
      subtitle: "Servizio Interventi Sociali · Via Perego 1 (Palazzo Martinengo, 2° piano), 23100 Sondrio (SO) · Tel. 0342 526283",
      action: { type: "tel", value: "0342526283" },
    },
    {
      icon: "business-outline",
      title: "Ufficio di Piano – Ambito di Sondrio",
      subtitle: "Piano di Zona e programmazione sociale dell'Ambito",
      action: { type: "web", value: "https://comune.sondrio.it/servizio/ufficio-di-piano/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Valtellina e Alto Lario",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-val.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Sondrio (0342 526283) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Valtellina e Alto Lario · Esenzioni ticket",
    url: "https://www.asst-val.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
