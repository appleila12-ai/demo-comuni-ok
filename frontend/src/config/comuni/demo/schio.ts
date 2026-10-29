import type { ComuneConfig } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";

// Comune di Schio (VI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Link ai Servizi Sociali: Pagina "Servizio Sociale" sul sito ufficiale (controllato il 19 ottobre 2026). Link dell'azienda sanitaria controllato sul sito dell'azienda il 19 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const schio: ComuneConfig = {
  slug: "schio",
  tipo: "comune",
  nome: "Comune di Schio",
  nomeBreve: "Schio",
  delEnte: "del Comune di Schio",
  soggetto: "Il Comune",
  provincia: "VI",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.schio.vi.it",

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
      action: { type: "web", value: "https://www.comune.schio.vi.it/Amministrazione/Uffici/Servizio-Sociale" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 7 Pedemontana",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss7.veneto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ULSS 7 Pedemontana · Esenzioni ticket",
    url: "https://www.aulss7.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
schio.percorsoTerritorio = { ...schio.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
