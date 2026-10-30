import type { ComuneConfig } from "../types";
import { percorso, ASL_BARI_DSS01 } from "../percorso";

// Comune di Molfetta (BA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Argomento "Politica sociale" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const molfetta: ComuneConfig = {
  slug: "molfetta",
  tipo: "comune",
  nome: "Comune di Molfetta",
  nomeBreve: "Molfetta",
  delEnte: "del Comune di Molfetta",
  soggetto: "Il Comune",
  provincia: "BA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "080 3359201",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.molfetta.ba.it/Argomenti/Politica-sociale",

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
      action: { type: "web", value: "https://www.comune.molfetta.ba.it/Argomenti/Politica-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Bari",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it/web/asl-bari" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Bari · Esenzioni ticket",
    url: "https://www.sanita.puglia.it/web/asl-bari",
  },

  daVerificare: true,
  dimostrativo: true,
};

molfetta.percorsoTerritorio = percorso(molfetta.puntiSupporto, [], [ASL_BARI_DSS01]);
