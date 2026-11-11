import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Genzano di Roma (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (11 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito e telefono (centralino) dai documenti del Comune (avvisi pubblici 2024-2026). Il link dell'azienda sanitaria è quello già usato per i Comuni della stessa ASL.
// Da fare: email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const genzanoDiRoma: ComuneConfig = {
  slug: "genzano-di-roma",
  tipo: "comune",
  nome: "Comune di Genzano di Roma",
  nomeBreve: "Genzano di Roma",
  delEnte: "del Comune di Genzano di Roma",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "06 937111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.genzanodiroma.roma.it",

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
      action: { type: "web", value: "https://www.comune.genzanodiroma.roma.it" },
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

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (11/11/2026).
genzanoDiRoma.percorsoTerritorio = percorso(genzanoDiRoma.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
genzanoDiRoma.percorsoTerritorio = { ...genzanoDiRoma.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
