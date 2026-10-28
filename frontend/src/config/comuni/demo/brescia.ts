import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Brescia (BS) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Pagina "Salute, benessere e assistenza" del sito del Comune, controllata il 13 ottobre 2026.
// Completata il 19 ottobre 2026: 3 misure del Comune in bonus.ts (Dopo di Noi, vacanze adulti con disabilità, Vita indipendente) e Anffas Brescia in associazioni.ts, da pagine e PDF del sito del Comune.
// Da confermare con l'ente: importi e scadenze delle misure; email, indirizzo e orari dei Servizi Sociali (non verificati); associazioni sportive.
export const brescia: ComuneConfig = {
  slug: "brescia",
  tipo: "comune",
  nome: "Comune di Brescia",
  nomeBreve: "Brescia",
  delEnte: "del Comune di Brescia",
  soggetto: "Il Comune",
  provincia: "BS",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "030 29771",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.brescia.it/it/page/139587?fromService=1",

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
      action: { type: "web", value: "https://www.comune.brescia.it/it/page/139587?fromService=1" },
    },
    {
      icon: "medkit-outline",
      title: "ATS Brescia",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ats-brescia.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ATS Brescia · Esenzioni ticket",
    url: "https://www.ats-brescia.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
brescia.percorsoTerritorio = percorso(brescia.puntiSupporto, [0]);
