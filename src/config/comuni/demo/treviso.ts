import type { ComuneConfig } from "../types";

// Comune di Treviso (TV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo, telefono, email, orari, responsabile
export const treviso: ComuneConfig = {
  slug: "treviso",
  tipo: "comune",
  nome: "Comune di Treviso",
  nomeBreve: "Treviso",
  delEnte: "del Comune di Treviso",
  soggetto: "Il Comune",
  provincia: "TV",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "Servizi Sociali – Comune di Treviso",
  indirizzo: "Viale Vittorio Veneto 27, 31100 Treviso (TV)",
  telefono: "0422 658362",
  email: "sociale@comune.treviso.it",
  pec: "postacertificata@cert.comune.treviso.it",
  orari: "Lun–Ven 9:00–10:00 (contatto telefonico)",
  sitoWeb: "https://www.comune.treviso.it/home/dettaglio/amministrazione-info/servizi-sociali",

  logo: null,

  theme: {
    warm: "#CF8BAA",
    warmSoft: "#F2DDE7",
    warmDark: "#6E2A49",
    cream: "#F6F2F4",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Treviso",
      subtitle: "Servizi Sociali – Comune di Treviso · Viale Vittorio Veneto 27, 31100 Treviso (TV) · Tel. 0422 658362",
      action: { type: "tel", value: "0422658362" },
    },
    {
      icon: "business-outline",
      title: "Sportello Famiglia Treviso",
      subtitle: "Portale informativo con servizi sociali, sostegni e contatti per le famiglie del territorio trevigiano",
      action: { type: "web", value: "https://www.sportellofamiglia.tv.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 2 Marca Trevigiana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.aulss2.veneto.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Treviso (0422 658362) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ULSS 2 Marca Trevigiana · Esenzioni ticket",
    url: "https://www.aulss2.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
