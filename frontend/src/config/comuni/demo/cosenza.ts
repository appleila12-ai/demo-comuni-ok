import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Cosenza (CS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Argomento "Assistenza sociale" del sito del Comune, controllato il 14 ottobre 2026. Il sito dell'ASP non si è letto in automatico.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const cosenza: ComuneConfig = {
  slug: "cosenza",
  tipo: "comune",
  nome: "Comune di Cosenza",
  nomeBreve: "Cosenza",
  delEnte: "del Comune di Cosenza",
  soggetto: "Il Comune",
  provincia: "CS",
  regione: "Calabria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0984 8131",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.cosenza.it/it/argomenti/assistenza-sociale",

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
      action: { type: "web", value: "https://www.comune.cosenza.it/it/argomenti/assistenza-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Cosenza",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aspcs.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Cosenza · Esenzioni ticket",
    url: "https://www.aspcs.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
cosenza.percorsoTerritorio = percorso(cosenza.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
cosenza.percorsoTerritorio = { ...cosenza.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
