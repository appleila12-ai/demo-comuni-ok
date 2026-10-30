import type { ComuneConfig } from "../types";
import { percorso, ASL_BARI_DSS03 } from "../percorso";

// Comune di Bitonto (BA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina "Salute, benessere e assistenza" del sito del Comune (controllata il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const bitonto: ComuneConfig = {
  slug: "bitonto",
  tipo: "comune",
  nome: "Comune di Bitonto",
  nomeBreve: "Bitonto",
  delEnte: "del Comune di Bitonto",
  soggetto: "Il Comune",
  provincia: "BA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "080 3716111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.bitonto.ba.it/it/page/salute-benessere-e-assistenza-63?fromService=1",

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
      action: { type: "web", value: "https://www.comune.bitonto.ba.it/it/page/salute-benessere-e-assistenza-63?fromService=1" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Bari",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it/web/asl-bari" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Bari · Esenzioni ticket",
    url: "https://www.sanita.puglia.it/web/asl-bari",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
bitonto.percorsoTerritorio = percorso(bitonto.puntiSupporto, [0], [ASL_BARI_DSS03]);
