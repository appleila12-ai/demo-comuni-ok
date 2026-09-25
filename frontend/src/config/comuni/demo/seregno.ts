import type { ComuneConfig } from "../types";

// Comune di Seregno (MB) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: orari
export const seregno: ComuneConfig = {
  slug: "seregno",
  tipo: "comune",
  nome: "Comune di Seregno",
  nomeBreve: "Seregno",
  delEnte: "del Comune di Seregno",
  soggetto: "Il Comune",
  provincia: "MB",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Servizi di Welfare e Coesione Sociale",
  indirizzo: "Via Ivo Oliveti 17, 20831 Seregno (MB)",
  telefono: "0362 263401",
  email: "info.servizisociali@seregno.info",
  pec: "seregno.protocollo@actaliscertymail.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://comune.seregno.mb.it/it/unita_organizzative/servizi-di-welfare-e-coesione-sociale",

  logo: null,

  theme: {
    warm: "#8BCF8D",
    warmSoft: "#DDF2DE",
    warmDark: "#2A6E2C",
    cream: "#F2F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Seregno",
      subtitle: "Servizi di Welfare e Coesione Sociale · Via Ivo Oliveti 17, 20831 Seregno (MB) · Tel. 0362 263401",
      action: { type: "tel", value: "0362263401" },
    },
    {
      icon: "business-outline",
      title: "Ambito territoriale di Seregno",
      subtitle: "Ambito sociale e Piano di Zona dei Comuni del seregnese",
      action: { type: "web", value: "https://www.servizisocialinrete.it/ViewPage.php?ID=20" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Brianza",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-brianza.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Seregno (0362 263401) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Brianza · Esenzioni ticket",
    url: "https://www.asst-brianza.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
