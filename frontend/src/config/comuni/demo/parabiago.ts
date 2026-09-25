import type { ComuneConfig } from "../types";

// Comune di Parabiago (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const parabiago: ComuneConfig = {
  slug: "parabiago",
  tipo: "comune",
  nome: "Comune di Parabiago",
  nomeBreve: "Parabiago",
  delEnte: "del Comune di Parabiago",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali (Ambito: Azienda Sociale del Legnanese So.Le)",
  indirizzo: "Piazza della Vittoria 7, 20015 Parabiago (MI)",
  telefono: "0331 406029",
  email: "servizisociali@comune.parabiago.mi.it",
  pec: "comune@cert.comune.parabiago.mi.it",
  orari: "Lun–Ven 9:00–12:15, Lun 16:45–18:15",
  sitoWeb: "https://www.comune.parabiago.mi.it/area_letturaStruttura/7745/pagsistema.html/",

  logo: null,

  theme: {
    warm: "#AF8BCF",
    warmSoft: "#E8DDF2",
    warmDark: "#4E2A6E",
    cream: "#F4F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Parabiago",
      subtitle: "Ufficio Servizi Sociali (Ambito: Azienda Sociale del Legnanese So.Le) · Piazza della Vittoria 7, 20015 Parabiago (MI) · Tel. 0331 406029",
      action: { type: "tel", value: "0331406029" },
    },
    {
      icon: "business-outline",
      title: "Sportello Area Anziani",
      subtitle: "Sportello dedicato ai cittadini con più di 65 anni (il servizio in Municipio segue gli under 65).",
      action: { type: "tel", value: "0331557962" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Ovest Milanese",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-ovestmi.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Parabiago (0331 406029) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Ovest Milanese · Esenzioni ticket",
    url: "https://www.asst-ovestmi.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
