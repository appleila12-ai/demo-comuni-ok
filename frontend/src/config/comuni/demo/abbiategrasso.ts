import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Abbiategrasso (MI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (27 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Servizi sociali verificati il 17/11/2026: https://comune.abbiategrasso.mi.it/it/unita_organizzative/politiche-sociali (aggiornata 06/03/2026).
// Restano da verificare: ticket, bonus, associazioni e completezza del percorso.
export const abbiategrasso: ComuneConfig = {
  slug: "abbiategrasso",
  tipo: "comune",
  nome: "Comune di Abbiategrasso",
  nomeBreve: "Abbiategrasso",
  delEnte: "del Comune di Abbiategrasso",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Fratelli Cairoli 1, 20081 Abbiategrasso (MI)",
  telefono: "02 94692516",
  email: "segretariato@comune.abbiategrasso.mi.it",
  pec: "comune.abbiategrasso@legalpec.it",
  orari: "Accesso solo su appuntamento: chiama il Segretariato Sociale al 02 94692516.",
  sitoWeb: "https://comune.abbiategrasso.mi.it/it/unita_organizzative/politiche-sociali",

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
      subtitle: "Segretariato Sociale · Via Fratelli Cairoli 1 · Accesso su appuntamento · Tel. 02 94692516",
      action: { type: "tel", value: "0294692516" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Ovest Milanese",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-ovestmi.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Ovest Milanese · Esenzioni ticket",
    url: "https://www.asst-ovestmi.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
abbiategrasso.percorsoTerritorio = { ...abbiategrasso.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
