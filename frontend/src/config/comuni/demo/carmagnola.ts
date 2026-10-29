import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Carmagnola (TO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune: indirizzo indicato dalla titolare il 27/10/2026. PEC: domicilio digitale su IndicePA. Coordinate: database ISTAT/Belfiore dell'archivio. Link dell'azienda sanitaria da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const carmagnola: ComuneConfig = {
  slug: "carmagnola",
  tipo: "comune",
  nome: "Comune di Carmagnola",
  nomeBreve: "Carmagnola",
  delEnte: "del Comune di Carmagnola",
  soggetto: "Il Comune",
  provincia: "TO",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "protocollo.carmagnola@cert.legalmail.it",
  orari: "",
  sitoWeb: "https://comune.carmagnola.to.it",

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
      action: { type: "web", value: "https://comune.carmagnola.to.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL TO5",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslto5.piemonte.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL TO5 · Esenzioni ticket",
    url: "https://www.aslto5.piemonte.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
carmagnola.percorsoTerritorio = percorso(carmagnola.puntiSupporto, [0]);
