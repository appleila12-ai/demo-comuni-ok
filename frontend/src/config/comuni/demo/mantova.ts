import type { ComuneConfig } from "../types";

// Comune di Mantova (MN) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: —
export const mantova: ComuneConfig = {
  slug: "mantova",
  tipo: "comune",
  nome: "Comune di Mantova",
  nomeBreve: "Mantova",
  delEnte: "del Comune di Mantova",
  soggetto: "Il Comune",
  provincia: "MN",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore Welfare e Servizi Sociali",
  indirizzo: "Via Conciliazione 128, 46100 Mantova (MN)",
  telefono: "0376 376848",
  email: "segretariato.sociale@comune.mantova.it",
  pec: "servizi.sociali@pec.comune.mantova.it",
  orari: "Lun–Ven 8:30–11:30; Lun e Gio 14:30–16:30",
  sitoWeb: "https://www.comune.mantova.it/index.php/it/unita_organizzative/settore-welfare-e-servizi-sociali",

  logo: null,

  theme: {
    warm: "#938BCF",
    warmSoft: "#E0DDF2",
    warmDark: "#322A6E",
    cream: "#F3F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Mantova",
      subtitle: "Settore Welfare e Servizi Sociali · Via Conciliazione 128, 46100 Mantova (MN) · Tel. 0376 376848",
      action: { type: "tel", value: "0376376848" },
    },
    {
      icon: "business-outline",
      title: "Segretariato Sociale",
      subtitle: "Informazione, orientamento e accompagnamento ai servizi",
      action: { type: "tel", value: "0376376848" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Mantova",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-mantova.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Mantova (0376 376848) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Mantova · Esenzioni ticket",
    url: "https://www.asst-mantova.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
