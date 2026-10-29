import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Aversa (CE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina "Salute, benessere e assistenza" del sito del Comune (controllata il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const aversa: ComuneConfig = {
  slug: "aversa",
  tipo: "comune",
  nome: "Comune di Aversa",
  nomeBreve: "Aversa",
  delEnte: "del Comune di Aversa",
  soggetto: "Il Comune",
  provincia: "CE",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "081 5049111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.aversa.ce.it/servizi-categoria/salute-benessere-e-assistenza/",

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
      action: { type: "web", value: "https://comune.aversa.ce.it/servizi-categoria/salute-benessere-e-assistenza/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Caserta",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslcaserta.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Caserta · Esenzioni ticket",
    url: "https://www.aslcaserta.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
aversa.percorsoTerritorio = percorso(aversa.puntiSupporto, [0]);
