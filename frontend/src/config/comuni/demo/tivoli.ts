import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Tivoli (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina del Settore 4 - Welfare del Comune letta il 15 ottobre 2026: indirizzo, centralino e PEC generali, un telefono del referente Piano di Zona. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const tivoli: ComuneConfig = {
  slug: "tivoli",
  tipo: "comune",
  nome: "Comune di Tivoli",
  nomeBreve: "Tivoli",
  delEnte: "del Comune di Tivoli",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Settore 4 - Welfare, Piazza del Governo 1, 00019 Tivoli (RM)",
  telefono: "0774 4531",
  email: "",
  pec: "info@pec.comune.tivoli.rm.it",
  orari: "Chiedi dei Servizi Sociali al centralino del Comune: orari dell'ufficio non pubblicati sulla pagina. Referente Piano di Zona: 0774 453293",
  sitoWeb: "https://www.comune.tivoli.rm.it/unita_organizzativa/settore-4-welfare/",

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
      action: { type: "tel", value: "07744531" },
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
tivoli.percorsoTerritorio = { ...tivoli.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
