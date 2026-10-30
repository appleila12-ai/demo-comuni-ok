import type { ComuneConfig } from "../types";
import { percorso, ASL_BARI_DSS11 } from "../percorso";

// Comune di Mola di Bari (BA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune: indirizzo indicato dalla titolare il 27/10/2026. PEC: domicilio digitale su IndicePA. Coordinate: database ISTAT/Belfiore dell'archivio. Link dell'azienda sanitaria da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const molaDiBari: ComuneConfig = {
  slug: "mola-di-bari",
  tipo: "comune",
  nome: "Comune di Mola di Bari",
  nomeBreve: "Mola di Bari",
  delEnte: "del Comune di Mola di Bari",
  soggetto: "Il Comune",
  provincia: "BA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "comune.moladibari@pec.rupar.puglia.it",
  orari: "",
  sitoWeb: "https://comune.moladibari.ba.it",

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
      action: { type: "web", value: "https://comune.moladibari.ba.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Bari",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Bari · Esenzioni ticket",
    url: "https://www.sanita.puglia.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

molaDiBari.percorsoTerritorio = percorso(molaDiBari.puntiSupporto, [], [ASL_BARI_DSS11]);
