import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Nichelino (TO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale verificato il 18/10/2026. I servizi socio-assistenziali fanno capo al Consorzio CISA12: recapiti da confermare con l'ente.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const nichelino: ComuneConfig = {
  slug: "nichelino",
  tipo: "comune",
  nome: "Comune di Nichelino",
  nomeBreve: "Nichelino",
  delEnte: "del Comune di Nichelino",
  soggetto: "Il Comune",
  provincia: "TO",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.nichelino.to.it",

  logo: null,

  theme: {
    warm: "#E3A94A",
    warmSoft: "#F7E7C6",
    warmDark: "#A86F1F",
    cream: "#F7F3EA",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale. A Nichelino i servizi socio-assistenziali fanno capo al Consorzio CISA12: recapiti sul sito del Comune.",
      action: { type: "web", value: "https://comune.nichelino.to.it/servizi-categoria/salute-benessere-e-assistenza/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL TO5",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslto5.piemonte.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL TO5",
    url: "https://www.aslto5.piemonte.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
nichelino.percorsoTerritorio = { ...nichelino.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
