import type { ComuneConfig } from "../types";

// Comune di Arenzano (GE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina "Ufficio Servizi Sociali" del Comune, recapiti copiati da Ilaria il 27/10/2026. Altri telefoni pubblicati: 010 9138231, 010 9138307, 010 9138235. Calendario di apertura non indicato.
// Il Comune fa parte dell'ASL3 Genovese; sito del Comune dedotto dal dominio delle email ufficiali.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const arenzano: ComuneConfig = {
  slug: "arenzano",
  tipo: "comune",
  nome: "Comune di Arenzano",
  nomeBreve: "Arenzano",
  delEnte: "del Comune di Arenzano",
  soggetto: "Il Comune",
  provincia: "GE",
  regione: "Liguria",

  ente: "Ufficio Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "010 9138269",
  email: "servizisociali@comune.arenzano.ge.it",
  pec: "",
  orari: "Ricevimento previo appuntamento telefonico o via email",
  sitoWeb: "https://www.comune.arenzano.ge.it",

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
      title: "Ufficio Servizi Sociali – Arenzano",
      subtitle: "Telefoni 010 9138269, 010 9138231 · Ricevimento previo appuntamento telefonico o via email",
      action: { type: "tel", value: "0109138269" },
    },
    {
      icon: "medkit-outline",
      title: "ASL3 Genovese",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl3.liguria.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL3 Genovese · Esenzioni ticket",
    url: "https://www.asl3.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
