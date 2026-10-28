import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Caserta (CE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Categoria "Salute, benessere e assistenza" del sito del Comune, controllata il 14 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const caserta: ComuneConfig = {
  slug: "caserta",
  tipo: "comune",
  nome: "Comune di Caserta",
  nomeBreve: "Caserta",
  delEnte: "del Comune di Caserta",
  soggetto: "Il Comune",
  provincia: "CE",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0823 273001",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.caserta.it/area_letturaServizio/pagsistema.html?type=28",

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
      action: { type: "web", value: "https://www.comune.caserta.it/area_letturaServizio/pagsistema.html?type=28" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Caserta",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslcaserta.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Caserta · Esenzioni ticket",
    url: "https://www.aslcaserta.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
caserta.percorsoTerritorio = percorso(caserta.puntiSupporto, [0]);
