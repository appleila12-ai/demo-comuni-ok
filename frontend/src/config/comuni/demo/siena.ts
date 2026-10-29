import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Siena (SI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Pagina "Sociale, salute, benessere e assistenza" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const siena: ComuneConfig = {
  slug: "siena",
  tipo: "comune",
  nome: "Comune di Siena",
  nomeBreve: "Siena",
  delEnte: "del Comune di Siena",
  soggetto: "Il Comune",
  provincia: "SI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0577 292111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.siena.it/categorie-dei-servizi/salute-benessere-e-assistenza",

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
      action: { type: "web", value: "https://www.comune.siena.it/categorie-dei-servizi/salute-benessere-e-assistenza" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Sud Est",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslsudest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Sud Est · Esenzioni ticket",
    url: "https://www.uslsudest.toscana.it/come-fare-per/esenzione-ticket/esenzioni-per-patologia-cronica-o-invalidante",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
siena.percorsoTerritorio = percorso(siena.puntiSupporto, [0]);
