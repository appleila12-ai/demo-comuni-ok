import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Ardea (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Nessun link ancora verificato: l'indirizzo del sito del Comune non è stato aperto in questo giro. Il link dell'azienda sanitaria è da verificare.
// Recapiti Servizi Sociali: pagine dell'ufficio (aggiornata l'11/03/2026) e della sede di via Crispi (aggiornata il 24/02/2026) del Comune di Ardea, riportate il 14/11/2026.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const ardea: ComuneConfig = {
  slug: "ardea",
  tipo: "comune",
  nome: "Comune di Ardea",
  nomeBreve: "Ardea",
  delEnte: "del Comune di Ardea",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Francesco Crispi 12, Ardea (sede distaccata)",
  telefono: "06 913800 (interno 160 o 703 per i Servizi Sociali; interno 106 per il Segretariato Sociale)",
  email: "uff.sociali@comune.ardea.rm.it",
  pec: "",
  orari: "Segretariato Sociale: lunedì, martedì, mercoledì e venerdì 9:00–12:00; giovedì 9:00–12:00 e 15:00–17:00. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare.",
  sitoWeb: "https://www.comune.ardea.rm.it",

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
      action: { type: "web", value: "https://www.comune.ardea.rm.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 6",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma6.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 6 · Esenzioni ticket",
    url: "https://www.aslroma6.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
ardea.percorsoTerritorio = percorso(ardea.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
ardea.percorsoTerritorio = { ...ardea.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
