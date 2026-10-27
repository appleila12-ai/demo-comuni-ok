import type { ComuneConfig } from "../types";

// Comune di Ameglia (SP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti: solo quelli letti sul sito del Comune il 21/10/2026; il resto è stato tolto perché non verificato.
// Indirizzo del sito non confermato in automatico.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const ameglia: ComuneConfig = {
  slug: "ameglia",
  tipo: "comune",
  nome: "Comune di Ameglia",
  nomeBreve: "Ameglia",
  delEnte: "del Comune di Ameglia",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Cafaggio 15, 19031 Ameglia (SP)",
  telefono: "0187 609226",
  email: "servizisociali@comune.ameglia.sp.it",
  pec: "protocollo@pec.comune.ameglia.sp.it",
  orari: "Lunedì, mercoledì e sabato 9:00–12:00, su appuntamento",
  sitoWeb: "https://www.comune.ameglia.sp.it",

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
      subtitle: "Ufficio Servizi Sociali · Tel. 0187 609226 · lunedì, mercoledì e sabato 9:00–12:00 su appuntamento",
      action: { type: "web", value: "https://www.comune.ameglia.sp.it" },
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
