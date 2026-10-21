import type { ComuneConfig } from "../types";

// Comune di Vezzano Ligure (SP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti: solo quelli letti sul sito del Comune il 21/10/2026; il resto è stato tolto perché non verificato.
// Il sito blocca la lettura automatica: indirizzo da elenco pubblico, da confermare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const vezzanoLigure: ComuneConfig = {
  slug: "vezzano-ligure",
  tipo: "comune",
  nome: "Comune di Vezzano Ligure",
  nomeBreve: "Vezzano Ligure",
  delEnte: "del Comune di Vezzano Ligure",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.vezzanoligure.sp.it/",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.vezzanoligure.sp.it/" },
    },
    {
      icon: "call-outline",
      title: "Distretto Sociosanitario 19 \"Val di Magra\"",
      subtitle: "Distretto di Sarzana, Ameglia, Arcola, Castelnuovo Magra, Luni, Santo Stefano di Magra e Vezzano Ligure · Tel. 0187 614507 / 0187 604933",
      action: { type: "tel", value: "0187614507" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni.aspx" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};
