import type { ComuneConfig } from "../types";
import { INPS_PRIMA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Agropoli (SA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (11 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Telefono, email dell'Ufficio Servizi Sociali e sito dall'avviso «Nonni civici 2025» pubblicato dal Comune. Il link dell'azienda sanitaria è quello già usato per i Comuni della stessa ASL.
// Da fare: indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const agropoli: ComuneConfig = {
  slug: "agropoli",
  tipo: "comune",
  nome: "Comune di Agropoli",
  nomeBreve: "Agropoli",
  delEnte: "del Comune di Agropoli",
  soggetto: "Il Comune",
  provincia: "SA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0974 827427",
  email: "servizisociali@comune.agropoli.sa.it",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.agropoli.sa.it",

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
      action: { type: "web", value: "https://www.comune.agropoli.sa.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Salerno",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslsalerno.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Salerno · Esenzioni ticket",
    url: "https://www.aslsalerno.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 non compilati (11/11/2026).
agropoli.percorsoTerritorio = percorso(agropoli.puntiSupporto, [0]);

// Passo 1: provincia nella prima fase della sperimentazione INPS.
agropoli.percorsoTerritorio = { ...agropoli.percorsoTerritorio, 1: [INPS_PRIMA_FASE] };
