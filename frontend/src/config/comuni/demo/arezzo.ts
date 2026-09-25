import type { ComuneConfig } from "../types";

// Comune di Arezzo (AR) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const arezzo: ComuneConfig = {
  slug: "arezzo",
  tipo: "comune",
  nome: "Comune di Arezzo",
  nomeBreve: "Arezzo",
  delEnte: "del Comune di Arezzo",
  soggetto: "Il Comune",
  provincia: "AR",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali – Segretariato Sociale",
  indirizzo: "Piazza San Domenico 4, 52100 Arezzo (AR)",
  telefono: "0575 377281",
  email: "sociale@comune.arezzo.it",
  pec: "comune.arezzo@postacert.toscana.it",
  orari: "Lun–Ven 8:30–13:30, Mar e Gio anche 15:00–17:30",
  sitoWeb: "https://www.comune.arezzo.it/unita-organizzativa/ufficio-servizi-sociali",

  logo: null,

  theme: {
    warm: "#8BCF9B",
    warmSoft: "#DDF2E2",
    warmDark: "#2A6E3A",
    cream: "#F2F6F3",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Arezzo",
      subtitle: "Ufficio Servizi Sociali – Segretariato Sociale · Piazza San Domenico 4, 52100 Arezzo (AR) · Tel. 0575 377281",
      action: { type: "tel", value: "0575377281" },
    },
    {
      icon: "business-outline",
      title: "Centro per le Famiglie",
      subtitle: "Servizio comunale di supporto e consulenza a genitori e famiglie.",
      action: { type: "tel", value: "0575377146" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Sud Est",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.uslsudest.toscana.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Arezzo (0575 377281) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "Azienda USL Toscana Sud Est · Esenzioni ticket",
    url: "https://www.uslsudest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
