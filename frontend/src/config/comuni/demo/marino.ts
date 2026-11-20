import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Marino (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Nessun link ancora verificato: l'indirizzo del sito del Comune non è stato aperto in questo giro. Il link dell'azienda sanitaria è da verificare.
// Recapiti Servizi Sociali: pagina «Servizi Sociali e Distretto sociosanitario RM 6.3» del Comune di Marino (aggiornata l'08/07/2026), riportata il 14/11/2026. Orari NON inseriti: la pagina ne riporta di diversi tra segretariato e ufficio. Email ordinaria non indicata, solo la PEC del protocollo.
// Da fare: orari; bonus del Comune, associazioni, sport e tempo libero.
export const marino: ComuneConfig = {
  slug: "marino",
  tipo: "comune",
  nome: "Comune di Marino",
  nomeBreve: "Marino",
  delEnte: "del Comune di Marino",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Repubblica 1, 00047 Marino",
  telefono: "06 93662304 (anche interni 333 e 410)",
  email: "",
  pec: "protocollo@pec.comune.marino.rm.it",
  orari: "",
  sitoWeb: "https://www.comune.marino.rm.it",

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
      action: { type: "web", value: "https://www.comune.marino.rm.it" },
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
marino.percorsoTerritorio = { ...marino.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
