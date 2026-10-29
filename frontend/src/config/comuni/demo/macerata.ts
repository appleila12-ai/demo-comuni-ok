import type { ComuneConfig } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Macerata (MC) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Nessun link ancora verificato: l'indirizzo del sito del Comune non è stato aperto in questo giro. Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const macerata: ComuneConfig = {
  slug: "macerata",
  tipo: "comune",
  nome: "Comune di Macerata",
  nomeBreve: "Macerata",
  delEnte: "del Comune di Macerata",
  soggetto: "Il Comune",
  provincia: "MC",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0733 2561",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.macerata.it",

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
      action: { type: "web", value: "https://www.comune.macerata.it" },
    },
    {
      icon: "medkit-outline",
      title: "AST Macerata",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ast-macerata.marche.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AST Macerata · Esenzioni ticket",
    url: "https://www.ast-macerata.marche.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
macerata.percorsoTerritorio = percorso(macerata.puntiSupporto, [0]);

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
macerata.percorsoTerritorio = { ...macerata.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
