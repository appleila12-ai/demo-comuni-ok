import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Chioggia (VE) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Assistenza sociale" verificati il 18/10/2026. Bonus, associazioni e sport nei file condivisi.
// Da confermare con l'ente: telefono, email, indirizzo e orari dei Servizi Sociali.
export const chioggia: ComuneConfig = {
  slug: "chioggia",
  tipo: "comune",
  nome: "Comune di Chioggia",
  nomeBreve: "Chioggia",
  delEnte: "del Comune di Chioggia",
  soggetto: "Il Comune",
  provincia: "VE",
  regione: "Veneto",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.chioggia.ve.it",

  logo: null,

  theme: {
    warm: "#D98A8A",
    warmSoft: "#F6E0E0",
    warmDark: "#8F3B3B",
    cream: "#F8F2F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.chioggia.ve.it/argomento/assistenza-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda ULSS 3 Serenissima",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss3.veneto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda ULSS 3 Serenissima",
    url: "https://www.aulss3.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
chioggia.percorsoTerritorio = percorso(chioggia.puntiSupporto, [0]);
