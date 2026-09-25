import type { ComuneConfig } from "../types";

// Comune di Magenta (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: indirizzo
export const magenta: ComuneConfig = {
  slug: "magenta",
  tipo: "comune",
  nome: "Comune di Magenta",
  nomeBreve: "Magenta",
  delEnte: "del Comune di Magenta",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore dei Servizi al Cittadino – Servizi alla Persona",
  indirizzo: "Via IV Giugno, 20013 Magenta (MI)",
  telefono: "02 9735438",
  email: "sociale@comune.magenta.mi.it",
  pec: "protocollo@pec.comune.magenta.mi.it",
  orari: "Lun–Ven 9:00–12:30, Mar e Gio 15:30–17:30",
  sitoWeb: "https://comune.magenta.mi.it/amministrazione/unita-organizzativa/settore-dei-servizi-al-cittadino/servizio-sociale-professionale/",

  logo: null,

  theme: {
    warm: "#CFC38B",
    warmSoft: "#F2EEDD",
    warmDark: "#6E622A",
    cream: "#F6F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Magenta",
      subtitle: "Settore dei Servizi al Cittadino – Servizi alla Persona · Via IV Giugno, 20013 Magenta (MI) · Tel. 02 9735438",
      action: { type: "tel", value: "029735438" },
    },
    {
      icon: "business-outline",
      title: "Ufficio di Piano – Ambito del Magentino",
      subtitle: "Ufficio di Piano con sede a Magenta, coordina il Piano di Zona e i servizi sociali sovracomunali.",
      action: { type: "web", value: "https://comune.magenta.mi.it/amministrazione/unita-organizzativa/settore-dei-servizi-al-cittadino/ufficio-di-piano/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Ovest Milanese",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-ovestmi.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Magenta (02 9735438) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Ovest Milanese · Esenzioni ticket",
    url: "https://www.asst-ovestmi.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
