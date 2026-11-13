import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Nettuno (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Nessun link ancora verificato: l'indirizzo del sito del Comune non è stato aperto in questo giro. Il link dell'azienda sanitaria è da verificare.
// Recapiti Servizi Sociali: Scheda «Servizi Sociali» del Comune di Nettuno (13/11/2026).
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const nettuno: ComuneConfig = {
  slug: "nettuno",
  tipo: "comune",
  nome: "Comune di Nettuno",
  nomeBreve: "Nettuno",
  delEnte: "del Comune di Nettuno",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Viale della Vittoria 2",
  telefono: "06 98889555",
  email: "segretariatosociale.pua@comune.nettuno.roma.it",
  pec: "protocollogenerale@pec.comune.nettuno.roma.it",
  orari: "Sportello PUA: lunedì–venerdì 9–12; martedì e giovedì anche 15–17. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare.",
  sitoWeb: "https://www.comune.nettuno.rm.it",

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
      action: { type: "web", value: "https://www.comune.nettuno.rm.it" },
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

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
nettuno.percorsoTerritorio = { ...nettuno.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
