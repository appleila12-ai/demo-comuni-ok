import type { ComuneConfig } from "../types";

// Comune di Lissone (MB) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: telefono, email, orari
export const lissone: ComuneConfig = {
  slug: "lissone",
  tipo: "comune",
  nome: "Comune di Lissone",
  nomeBreve: "Lissone",
  delEnte: "del Comune di Lissone",
  soggetto: "Il Comune",
  provincia: "MB",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Servizi alla Persona – Servizi Sociali",
  indirizzo: "Via Gramsci 21, 20851 Lissone (MB)",
  telefono: "039 7397261",
  email: "pec@comunedilissone.it",
  pec: "pec@comunedilissone.it",
  orari: "Lun 10:00–12:30; Mer 15:30–18:00",
  sitoWeb: "https://www.comune.lissone.mb.it/amministrazione/unita_organizzativa/servizi-sociali/",

  logo: null,

  theme: {
    warm: "#CF8B9C",
    warmSoft: "#F2DDE2",
    warmDark: "#6E2A3B",
    cream: "#F6F2F3",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Lissone",
      subtitle: "Servizi alla Persona – Servizi Sociali · Via Gramsci 21, 20851 Lissone (MB) · Tel. 039 7397261",
      action: { type: "tel", value: "0397397261" },
    },
    {
      icon: "business-outline",
      title: "Ambito di Carate Brianza",
      subtitle: "Ambito territoriale e Piano di Zona di cui fa parte Lissone",
      action: { type: "web", value: "https://www.ambitocaratebrianza.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Brianza",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-brianza.it/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Lissone (039 7397261) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Brianza · Esenzioni ticket",
    url: "https://www.asst-brianza.it/",
  },

  daVerificare: true,
  dimostrativo: true,
};
