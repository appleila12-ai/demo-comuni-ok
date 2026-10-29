import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Potenza (PZ) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Home del sito del Comune, controllata il 14 ottobre 2026: la pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const potenza: ComuneConfig = {
  slug: "potenza",
  tipo: "comune",
  nome: "Comune di Potenza",
  nomeBreve: "Potenza",
  delEnte: "del Comune di Potenza",
  soggetto: "Il Comune",
  provincia: "PZ",
  regione: "Basilicata",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0971 415111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.potenza.it",

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
      action: { type: "web", value: "https://www.comune.potenza.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Basilicata",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aspbasilicata.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Basilicata · Esenzioni ticket",
    url: "https://www.aspbasilicata.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
potenza.percorsoTerritorio = percorso(potenza.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
potenza.percorsoTerritorio = { ...potenza.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
