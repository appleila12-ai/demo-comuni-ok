import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Vasto (CH) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Nessun link ancora verificato: l'indirizzo del sito del Comune non è stato aperto in questo giro. Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const vasto: ComuneConfig = {
  slug: "vasto",
  tipo: "comune",
  nome: "Comune di Vasto",
  nomeBreve: "Vasto",
  delEnte: "del Comune di Vasto",
  soggetto: "Il Comune",
  provincia: "CH",
  regione: "Abruzzo",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0873 3091",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.vasto.ch.it",

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
      action: { type: "web", value: "https://www.comune.vasto.ch.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Lanciano Vasto Chieti",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl2abruzzo.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Lanciano Vasto Chieti · Esenzioni ticket",
    url: "https://www.asl2abruzzo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
vasto.percorsoTerritorio = { ...vasto.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
