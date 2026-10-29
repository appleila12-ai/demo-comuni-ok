import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Treviglio (BG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Assistenza sociale del Comune letta il 15 ottobre 2026: centralino, indirizzo e PEC generali; la pagina cita la Misura B2 FNA 2026/2027. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const treviglio: ComuneConfig = {
  slug: "treviglio",
  tipo: "comune",
  nome: "Comune di Treviglio",
  nomeBreve: "Treviglio",
  delEnte: "del Comune di Treviglio",
  soggetto: "Il Comune",
  provincia: "BG",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Manara 1, 24047 Treviglio (BG)",
  telefono: "0363 3171",
  email: "",
  pec: "comune.treviglio@legalmail.it",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina",
  sitoWeb: "https://www.comune.treviglio.bg.it/it/topics/7",

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
      action: { type: "tel", value: "03633171" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Bergamo Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-bgovest.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Bergamo Ovest · Esenzioni ticket",
    url: "https://www.asst-bgovest.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
treviglio.percorsoTerritorio = { ...treviglio.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
