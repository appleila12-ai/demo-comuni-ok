import type { ComuneConfig } from "../types";

// Comune di Legnago (VR) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const legnago: ComuneConfig = {
  slug: "legnago",
  tipo: "comune",
  nome: "Comune di Legnago",
  nomeBreve: "Legnago",
  delEnte: "del Comune di Legnago",
  soggetto: "Il Comune",
  provincia: "VR",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "I Settore – Affari Generali e Legali, Servizi Sociali, Culturali e Informativi",
  indirizzo: "Via XX Settembre 29, 37045 Legnago (VR)",
  telefono: "0442 634898",
  email: "ufficioassistenza@comune.legnago.vr.it",
  pec: "legnago.vr@cert.ip-veneto.net",
  orari: "Appuntamenti al telefono: Lun 14:30–15:30, Mer e Ven 9:00–10:00",
  sitoWeb: "https://www.comune.legnago.vr.it/amministrazione/unita_organizzativa/assistenti-sociali/",

  logo: null,

  theme: {
    warm: "#B88BCF",
    warmSoft: "#EBDDF2",
    warmDark: "#572A6E",
    cream: "#F5F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Legnago",
      subtitle: "I Settore – Affari Generali e Legali, Servizi Sociali, Culturali e Informativi · Via XX Settembre 29, 37045 Legnago (VR) · Tel. 0442 634898",
      action: { type: "tel", value: "0442634898" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 9 Scaligera",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss9.veneto.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Legnago (0442 634898) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 9 Scaligera · Esenzioni ticket",
    url: "https://www.aulss9.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
