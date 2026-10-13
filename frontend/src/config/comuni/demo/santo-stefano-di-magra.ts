import type { ComuneConfig } from "../types";

// Comune di Santo Stefano di Magra (SP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Il sito blocca la lettura automatica: indirizzo da elenco pubblico, da confermare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const santoStefanoDiMagra: ComuneConfig = {
  slug: "santo-stefano-di-magra",
  tipo: "comune",
  nome: "Comune di Santo Stefano di Magra",
  nomeBreve: "Santo Stefano di Magra",
  delEnte: "del Comune di Santo Stefano di Magra",
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
  sitoWeb: "https://www.comune.santostefanodimagra.sp.it/",

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
      action: { type: "web", value: "https://www.comune.santostefanodimagra.sp.it/" },
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
