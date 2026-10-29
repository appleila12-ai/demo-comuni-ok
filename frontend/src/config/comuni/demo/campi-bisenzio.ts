import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Campi Bisenzio (FI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Salute, benessere e assistenza" verificati il 18/10/2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const campiBisenzio: ComuneConfig = {
  slug: "campi-bisenzio",
  tipo: "comune",
  nome: "Comune di Campi Bisenzio",
  nomeBreve: "Campi Bisenzio",
  delEnte: "del Comune di Campi Bisenzio",
  soggetto: "Il Comune",
  provincia: "FI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.campi-bisenzio.fi.it",

  logo: null,

  theme: {
    warm: "#E3A94A",
    warmSoft: "#F7E7C6",
    warmDark: "#A86F1F",
    cream: "#F7F3EA",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.campi-bisenzio.fi.it/servizi/salute-benessere-e-assistenza" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Centro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslcentro.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Centro",
    url: "https://www.uslcentro.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
campiBisenzio.percorsoTerritorio = percorso(campiBisenzio.puntiSupporto, [0]);
