import type { ComuneConfig } from "../types";
import { INPS_SPERIMENTAZIONE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Lecce (LE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti verificati 11/11/2026: https://www.comune.lecce.it/aree-tematiche/uffici-comunali/ufficio-anziani
// Il sito blocca la lettura automatica: indirizzo da confermare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const lecce: ComuneConfig = {
  slug: "lecce",
  tipo: "comune",
  nome: "Comune di Lecce",
  nomeBreve: "Lecce",
  delEnte: "del Comune di Lecce",
  soggetto: "Il Comune",
  provincia: "LE",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via San Massimiliano Kolbe angolo Via Pistoia, Lecce",
  telefono: "0832 682477",
  email: "servizi.sociali@comune.lecce.it",
  pec: "",
  orari: "Martedì 09:00-12:00 (Ufficio anziani; orari degli altri servizi da verificare)",
  sitoWeb: "https://www.comune.lecce.it",

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
      subtitle: "Contatti e orari verificati sul sito istituzionale",
      action: { type: "web", value: "https://www.comune.lecce.it/aree-tematiche/uffici-comunali/ufficio-anziani" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Lecce · Anagrafe assistiti del tuo Distretto",
    url: "https://www.sanita.puglia.it/web/asl-lecce/distretti-socio-sanitari",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
lecce.percorsoTerritorio = percorso(lecce.puntiSupporto, [0]);

// Passo 1: provincia in sperimentazione INPS (messaggio INPS n. 2600 del 05/09/2025).
lecce.percorsoTerritorio = { ...lecce.percorsoTerritorio, 1: [INPS_SPERIMENTAZIONE] };
