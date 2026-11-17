import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Vigevano (PV) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verifica 17/11/2026: https://comune.vigevano.pv.it/servizio/segretariato-sociale/ (aggiornata 02/02/2026).
// Restano da verificare: ticket, bonus, associazioni e completezza del percorso.
export const vigevano: ComuneConfig = {
  slug: "vigevano",
  tipo: "comune",
  nome: "Comune di Vigevano",
  nomeBreve: "Vigevano",
  delEnte: "del Comune di Vigevano",
  soggetto: "Il Comune",
  provincia: "PV",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Palazzo Esposizioni, Piazza Calzolaio d’Italia 1, 27029 Vigevano (PV)",
  telefono: "0381 299888",
  email: "segretariatosociale@comune.vigevano.pv.it",
  pec: "protocollovigevano@pec.it",
  orari: "Sportello informazioni e appuntamenti: lun–ven 10:30–13:00; lun anche 14:30–17:30; gio anche 15:30–17:30. Orari indicativi, possono cambiare: conferma all’ufficio prima di andare.",
  sitoWeb: "https://comune.vigevano.pv.it/servizio/segretariato-sociale/",

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
      subtitle: "Segretariato Sociale · Piazza Calzolaio d’Italia 1 · Informazioni e appuntamenti: 0381 299888",
      action: { type: "tel", value: "0381299888" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Pavia",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asst-pavia.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Pavia · Esenzioni ticket",
    url: "https://www.asst-pavia.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
vigevano.percorsoTerritorio = { ...vigevano.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
