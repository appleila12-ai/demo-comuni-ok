import type { ComuneConfig } from "../types";

// Comune di Legnano (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, telefono, email, pec, orari
export const legnano: ComuneConfig = {
  slug: "legnano",
  tipo: "comune",
  nome: "Comune di Legnano",
  nomeBreve: "Legnano",
  delEnte: "del Comune di Legnano",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore 3 – Servizi alla Persona (Azienda Sociale del Legnanese So.Le per i servizi d'Ambito)",
  indirizzo: "Palazzo Malinverni, Piazza San Magno 9, 20025 Legnano (MI)",
  telefono: "0331 471511",
  email: "comune.legnano@cert.legalmail.it",
  pec: "comune.legnano@cert.legalmail.it",
  orari: "Lun–Ven 10:00–13:00 (su appuntamento)",
  sitoWeb: "https://comune.legnano.mi.it/argomenti/argomento-dettaglio/1702683",

  logo: null,

  theme: {
    warm: "#8B8BCF",
    warmSoft: "#DDDDF2",
    warmDark: "#2A2A6E",
    cream: "#F2F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Legnano",
      subtitle: "Settore 3 – Servizi alla Persona (Azienda Sociale del Legnanese So.Le per i servizi d'Ambito) · Palazzo Malinverni, Piazza San Magno 9, 20025 Legnano (MI) · Tel. 0331 471511",
      action: { type: "tel", value: "0331471511" },
    },
    {
      icon: "business-outline",
      title: "Azienda Sociale del Legnanese (So.Le)",
      subtitle: "Azienda speciale consortile che gestisce i servizi sociali associati e l'Ufficio di Piano dell'Ambito legnanese.",
      action: { type: "web", value: "https://www.ascsole.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Ovest Milanese",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-ovestmi.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Legnano (0331 471511) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Ovest Milanese · Esenzioni ticket",
    url: "https://www.asst-ovestmi.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
