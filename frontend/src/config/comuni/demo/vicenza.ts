import type { ComuneConfig } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Vicenza (VI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const vicenza: ComuneConfig = {
  slug: "vicenza",
  tipo: "comune",
  nome: "Comune di Vicenza",
  nomeBreve: "Vicenza",
  delEnte: "del Comune di Vicenza",
  soggetto: "Il Comune",
  provincia: "VI",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0444 221111",
  email: "",
  pec: "vicenza@cert.comune.vicenza.it",
  orari: "",
  sitoWeb: "https://www.comune.vicenza.it",

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
      action: { type: "web", value: "https://www.comune.vicenza.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.vicenza.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
vicenza.percorsoTerritorio = percorso(vicenza.puntiSupporto, [0]);

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
vicenza.percorsoTerritorio = { ...vicenza.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
