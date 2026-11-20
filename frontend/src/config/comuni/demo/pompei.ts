import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Pompei (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (11 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune e PEC dagli avvisi pubblici del Comune (2025-2026). Telefono non inserito: trovato solo su siti non istituzionali. Link dell'azienda sanitaria: ASL Napoli 3 Sud.
// Da fare: email, indirizzo e orari dei Servizi Sociali; telefono; bonus del Comune, associazioni, sport e tempo libero.
export const pompei: ComuneConfig = {
  slug: "pompei",
  tipo: "comune",
  nome: "Comune di Pompei",
  nomeBreve: "Pompei",
  delEnte: "del Comune di Pompei",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.pompei.na.it",

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
      action: { type: "web", value: "https://www.comune.pompei.na.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 3 Sud",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli3sud.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 3 Sud · Esenzioni ticket",
    url: "https://www.aslnapoli3sud.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (11/11/2026).
pompei.percorsoTerritorio = percorso(pompei.puntiSupporto, [0]);

