import type { ComuneConfig } from "../types";

// Comune di Castelnuovo Magra (SP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti: solo quelli letti sul sito del Comune il 21/10/2026; il resto è stato tolto perché non verificato.
// Recapiti e orari: pagina "Servizi alla Persona" del sito del Comune (aggiornata il 17/02/2025) e avviso dell'11/09/2026, letti il 21/10/2026.
// Da fare: associazioni, sport e tempo libero.
export const castelnuovoMagra: ComuneConfig = {
  slug: "castelnuovo-magra",
  tipo: "comune",
  nome: "Comune di Castelnuovo Magra",
  nomeBreve: "Castelnuovo Magra",
  delEnte: "del Comune di Castelnuovo Magra",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Canale 189, 19033 Castelnuovo Magra (SP) (sede del Comune)",
  telefono: "0187 693826",
  email: "servizisociali@comune.castelnuovomagra.sp.it",
  pec: "protocollo@pec.castelnuovomagra.com",
  orari: "In presenza solo su appuntamento lunedì e giovedì 9:00–12:00; ricevimento telefonico martedì e venerdì 8:30–10:30",
  sitoWeb: "https://www.comune.castelnuovomagra.sp.it/it-it/argomenti/assistenza-sociale",

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
      subtitle: "Servizi Sociali · Tel. 0187 693826 · in presenza lunedì e giovedì 9:00–12:00 solo su appuntamento; telefono martedì e venerdì 8:30–10:30",
      action: { type: "web", value: "https://www.comune.castelnuovomagra.sp.it/it-it/argomenti/assistenza-sociale" },
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
