import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Ladispoli (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Nessun link ancora verificato: l'indirizzo del sito del Comune non è stato aperto in questo giro. Il link dell'azienda sanitaria è da verificare.
// Recapiti del Segretariato sociale: scheda ufficiale del Comune (aggiornata il 05/08/2026), riportati il 14/11/2026; il Comune ha segnalato cambi occasionali di orario. Telefono fisso diretto: non trovato.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const ladispoli: ComuneConfig = {
  slug: "ladispoli",
  tipo: "comune",
  nome: "Comune di Ladispoli",
  nomeBreve: "Ladispoli",
  delEnte: "del Comune di Ladispoli",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Giovanni Falcone 1, 00055 Ladispoli (RM)",
  telefono: "338 494 3695 (Segretariato sociale, cellulare)",
  email: "servizi.sociali@comunediladispoli.it",
  pec: "",
  orari:
    "Segretariato sociale: martedì 9:00–12:00; giovedì 9:00–12:00 e 15:00–16:30. Al mattino 12 numeri, al pomeriggio 5. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare.",
  sitoWeb: "https://www.comune.ladispoli.rm.it",

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
      action: { type: "web", value: "https://www.comune.ladispoli.rm.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 4",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma4.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 4 · Esenzioni ticket",
    url: "https://www.aslroma4.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
ladispoli.percorsoTerritorio = { ...ladispoli.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
