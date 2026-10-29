import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Gorizia (GO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Home del sito del Comune: la pagina dei servizi sociali va cercata e confermata (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const gorizia: ComuneConfig = {
  slug: "gorizia",
  tipo: "comune",
  nome: "Comune di Gorizia",
  nomeBreve: "Gorizia",
  delEnte: "del Comune di Gorizia",
  soggetto: "Il Comune",
  provincia: "GO",
  regione: "Friuli-Venezia Giulia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0481 383111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.gorizia.it",

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
      action: { type: "web", value: "https://www.comune.gorizia.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASUGI",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://asugi.sanita.fvg.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASUGI · Esenzioni ticket",
    url: "https://asugi.sanita.fvg.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
gorizia.percorsoTerritorio = percorso(gorizia.puntiSupporto, [0]);
