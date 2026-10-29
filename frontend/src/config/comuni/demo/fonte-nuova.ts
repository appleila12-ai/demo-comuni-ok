import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Fonte Nuova (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito del Comune: indirizzo indicato dalla titolare il 27/10/2026. PEC: domicilio digitale su IndicePA. Coordinate: database ISTAT/Belfiore dell'archivio. PUA: pagina ASL Roma 5 del Distretto di Monterotondo letta il 27/10/2026 (telefono: solo quello del Distretto; il PUA comunale non ha un numero proprio). Link generale dell'azienda sanitaria da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const fonteNuova: ComuneConfig = {
  slug: "fonte-nuova",
  tipo: "comune",
  nome: "Comune di Fonte Nuova",
  nomeBreve: "Fonte Nuova",
  delEnte: "del Comune di Fonte Nuova",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "protocollo@cert.fonte-nuova.it",
  orari: "",
  sitoWeb: "https://comune.fontenuova.rm.it",

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
      action: { type: "web", value: "https://comune.fontenuova.rm.it" },
    },
    {
      icon: "call-outline",
      title: "Punto Unico di Accesso (PUA) · Distretto di Monterotondo",
      subtitle: "Orienta ai servizi sociali e sanitari per Fonte Nuova, Mentana e Monterotondo. Via dell'Aeronautica 53/b, Monterotondo. Per le valutazioni per le RSA: lunedì e mercoledì 9:30–12:30, martedì 14:30–16:30",
      action: { type: "tel", value: "0690093533" },
    },
    {
      icon: "business-outline",
      title: "PUA comunale di Fonte Nuova",
      subtitle: "Via Niccolò Machiavelli 1. Lunedì e giovedì 9:00–12:30 e 15:30–17:30",
      action: { type: "web", value: "https://comune.fontenuova.rm.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 5",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma5.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 5 · Esenzioni ticket",
    url: "https://www.aslroma5.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
fonteNuova.percorsoTerritorio = { ...fonteNuova.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
