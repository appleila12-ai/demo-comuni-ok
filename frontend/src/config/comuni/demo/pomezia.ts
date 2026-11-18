import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Pomezia (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Argomento "Assistenza sociale" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Recapiti Servizi Sociali: Pagina «Assistente sociale – Segretariato sociale» del Comune di Pomezia (13/11/2026). PEC generale del Comune.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const pomezia: ComuneConfig = {
  slug: "pomezia",
  tipo: "comune",
  nome: "Comune di Pomezia",
  nomeBreve: "Pomezia",
  delEnte: "del Comune di Pomezia",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Pier Crescenzi 1",
  telefono: "06 91146212",
  email: "segretariato.sociale@comune.pomezia.rm.it",
  pec: "protocollo@pec.comune.pomezia.rm.it",
  orari: "Segretariato sociale, su appuntamento (allo sportello o con l'app TuPassi): lunedì–venerdì 9–12; martedì anche 15–17. Il Comune riporta in un'altra pagina orari diversi. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare.",
  sitoWeb: "https://www.comune.pomezia.rm.it/it/topics/7",

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
      action: { type: "web", value: "https://www.comune.pomezia.rm.it/it/topics/7" },
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
pomezia.percorsoTerritorio = { ...pomezia.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
