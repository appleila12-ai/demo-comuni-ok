import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Cagliari (CA) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Pagina "Salute, benessere e assistenza" del sito del Comune, controllata il 13 ottobre 2026.
// Completata il 20 ottobre 2026: 2 avvisi del Comune in bonus.ts (piani personalizzati L. 162/98 con nuove domande fino al 30/11/2026; sussidio per disturbo psichico, chiuso) e Anffas Sardegna in associazioni.ts, da pagine del sito del Comune e dell'elenco Anffas.
// Da confermare con l'ente: requisiti e termini dei bandi (la pagina rimanda all'avviso ufficiale); Ritornare a casa PLUS della Regione (pagine non lette); sport: avviso del Comune per progetti sportivi riservato agli enti del terzo settore, non è una misura per i cittadini.
export const cagliari: ComuneConfig = {
  slug: "cagliari",
  tipo: "comune",
  nome: "Comune di Cagliari",
  nomeBreve: "Cagliari",
  delEnte: "del Comune di Cagliari",
  soggetto: "Il Comune",
  provincia: "CA",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "070 6771",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.cagliari.it/portale/page/it/servizi_salute",

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
      action: { type: "web", value: "https://www.comune.cagliari.it/portale/page/it/servizi_salute" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Cagliari",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl8cagliari.it" },
    },
    {
      icon: "call-outline",
      title: "Ufficio Relazioni con il Pubblico",
      subtitle: "Numero verde del Comune · Tel. 800 016 058",
      action: { type: "tel", value: "800016058" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Cagliari · Esenzioni ticket",
    url: "https://www.asl8cagliari.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
cagliari.percorsoTerritorio = percorso(cagliari.puntiSupporto, [0]);
