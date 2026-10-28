import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Lecce (LE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Il sito blocca la lettura automatica: indirizzo da confermare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const lecce: ComuneConfig = {
  slug: "lecce",
  tipo: "comune",
  nome: "Comune di Lecce",
  nomeBreve: "Lecce",
  delEnte: "del Comune di Lecce",
  soggetto: "Il Comune",
  provincia: "LE",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0832 682111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.lecce.it",

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
      action: { type: "web", value: "https://www.comune.lecce.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.lecce.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
lecce.percorsoTerritorio = percorso(lecce.puntiSupporto, [0]);
