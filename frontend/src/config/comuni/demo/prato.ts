import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Prato (PO) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Il sito del Comune non è leggibile in automatico (robots): la pagina dei servizi sociali va cercata e confermata.
// Completata il 20 ottobre 2026: contributo per attività estive 2026 (chiuso) in bonus.ts, da pagina del Comune. Le altre pagine del sito del Comune non sono leggibili in automatico (robots).
// Da confermare con l'ente: altre misure del Comune (trasporto sociale, barriere architettoniche, Toscana Solidale), associazioni locali, recapiti dei Servizi Sociali (non verificati); numero verde del PUA dalla pagina dell'avviso.
export const prato: ComuneConfig = {
  slug: "prato",
  tipo: "comune",
  nome: "Comune di Prato",
  nomeBreve: "Prato",
  delEnte: "del Comune di Prato",
  soggetto: "Il Comune",
  provincia: "PO",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0574 18361",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.prato.it",

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
      action: { type: "web", value: "https://www.comune.prato.it" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Centro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslcentro.toscana.it" },
    },
    {
      icon: "call-outline",
      title: "Punto Unico di Accesso (PUA)",
      subtitle: "Numero verde · Tel. 800 922 912",
      action: { type: "tel", value: "800922912" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Centro · Esenzioni ticket",
    url: "https://www.uslcentro.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
prato.percorsoTerritorio = percorso(prato.puntiSupporto, [0, 2]);
