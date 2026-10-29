import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Caltanissetta (CL) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Pagina "Salute, benessere e assistenza" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const caltanissetta: ComuneConfig = {
  slug: "caltanissetta",
  tipo: "comune",
  nome: "Comune di Caltanissetta",
  nomeBreve: "Caltanissetta",
  delEnte: "del Comune di Caltanissetta",
  soggetto: "Il Comune",
  provincia: "CL",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0934 74111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.caltanissetta.it/it/page/salute-benessere-e-assistenza?fromService=1",

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
      action: { type: "web", value: "https://www.comune.caltanissetta.it/it/page/salute-benessere-e-assistenza?fromService=1" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Caltanissetta",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aspcaltanissetta.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Caltanissetta · Esenzioni ticket",
    url: "https://www.aspcaltanissetta.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
caltanissetta.percorsoTerritorio = percorso(caltanissetta.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
caltanissetta.percorsoTerritorio = { ...caltanissetta.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
