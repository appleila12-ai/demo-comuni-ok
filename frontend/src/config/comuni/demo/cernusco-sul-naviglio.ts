import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Cernusco sul Naviglio (MI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagine del Comune lette il 15 ottobre 2026: centralino e indirizzo generali; Settore Servizi Sociali con Ufficio Area adulti e Ufficio Area anziani, senza recapiti propri. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const cernuscoSulNaviglio: ComuneConfig = {
  slug: "cernusco-sul-naviglio",
  tipo: "comune",
  nome: "Comune di Cernusco sul Naviglio",
  nomeBreve: "Cernusco sul Naviglio",
  delEnte: "del Comune di Cernusco sul Naviglio",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Tizzoni 2, 20063 Cernusco sul Naviglio (MI)",
  telefono: "02 92781",
  email: "",
  pec: "",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina",
  sitoWeb: "https://comune.cernuscosulnaviglio.mi.it/argomento/assistenza-sociale/",

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
      subtitle: "Primo ascolto sociale: recapiti e orari in questa scheda e sul sito del Comune",
      action: { type: "tel", value: "0292781" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Melegnano e della Martesana",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-melegnano-martesana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Melegnano e della Martesana · Esenzioni ticket",
    url: "https://www.asst-melegnano-martesana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
cernuscoSulNaviglio.percorsoTerritorio = { ...cernuscoSulNaviglio.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
