import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Corigliano-Rossano (CS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Home del sito del Comune (controllata il 14 ottobre 2026): la pagina dei servizi sociali va cercata e confermata. Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const coriglianoRossano: ComuneConfig = {
  slug: "corigliano-rossano",
  tipo: "comune",
  nome: "Comune di Corigliano-Rossano",
  nomeBreve: "Corigliano-Rossano",
  delEnte: "del Comune di Corigliano-Rossano",
  soggetto: "Il Comune",
  provincia: "CS",
  regione: "Calabria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0983 83851",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.corigliano-rossano.cs.it",

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
      action: { type: "web", value: "https://www.comune.corigliano-rossano.cs.it" },
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

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
coriglianoRossano.percorsoTerritorio = percorso(coriglianoRossano.puntiSupporto, [0]);
