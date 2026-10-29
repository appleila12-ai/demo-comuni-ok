import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Alcamo (TP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Argomento "Assistenza sociale" del sito del Comune (controllato il 15 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const alcamo: ComuneConfig = {
  slug: "alcamo",
  tipo: "comune",
  nome: "Comune di Alcamo",
  nomeBreve: "Alcamo",
  delEnte: "del Comune di Alcamo",
  soggetto: "Il Comune",
  provincia: "TP",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0924 590111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.alcamo.tp.it/it/topics/7",

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
      action: { type: "web", value: "https://www.comune.alcamo.tp.it/it/topics/7" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Trapani",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asptrapani.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Trapani · Esenzioni ticket",
    url: "https://www.asptrapani.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
alcamo.percorsoTerritorio = percorso(alcamo.puntiSupporto, [0]);
