import type { ComuneConfig, PuntoSupporto } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Rimini (RN) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Completata in parte il 20 ottobre 2026: 1 misura del Comune in bonus.ts (mobilità casa-lavoro 2026, chiusa), da pagine del sito del Comune.
// Da confermare con l'ente: importi, scadenze e requisiti dei bandi; telefono, email, indirizzo e orari dei Servizi Sociali; associazioni e sport.
export const rimini: ComuneConfig = {
  slug: "rimini",
  tipo: "comune",
  nome: "Comune di Rimini",
  nomeBreve: "Rimini",
  delEnte: "del Comune di Rimini",
  soggetto: "Il Comune",
  provincia: "RN",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0541 704111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.rimini.it",

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
      action: { type: "web", value: "https://www.comune.rimini.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.rimini.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
// Passo 2: sede della Segreteria Invalidi Civili di Rimini, dalla pagina dell'AUSL Romagna (aggiornata il 19/05/2025, letta il 30/10/2026).
// La pagina non indica telefono né orari, e descrive la domanda all'INPS con la procedura precedente: non riportata qui.
const RIMINI_MEDICINA_LEGALE: PuntoSupporto = {
  icon: "medkit-outline",
  title: "AUSL Romagna · Segreteria Invalidi Civili di Rimini",
  subtitle:
    "Medicina Legale, Via Coriano 38, Rimini. Alla visita porta un documento di identità. Telefono e orari non sono indicati sulla pagina dell'AUSL: chiedili alla Medicina Legale",
  action: { type: "web", value: "https://www.auslromagna.it/servizi/visita-accertamento-invalidita" },
};
rimini.percorsoTerritorio = percorso(rimini.puntiSupporto, [0], [RIMINI_MEDICINA_LEGALE]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
rimini.percorsoTerritorio = { ...rimini.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
