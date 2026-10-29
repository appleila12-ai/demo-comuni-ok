import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Sassari (SS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const sassari: ComuneConfig = {
  slug: "sassari",
  tipo: "comune",
  nome: "Comune di Sassari",
  nomeBreve: "Sassari",
  delEnte: "del Comune di Sassari",
  soggetto: "Il Comune",
  provincia: "SS",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "079 279111",
  email: "",
  pec: "protocollo@pec.comune.sassari.it",
  orari: "",
  sitoWeb: "https://www.comune.sassari.it",

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
      action: { type: "web", value: "https://www.comune.sassari.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 1 Sassari · Esenzioni ticket",
    url: "https://www.asl1sassari.it/le-esenzioni-chi-ne-ha-diritto-e-come-richiederla/",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
sassari.percorsoTerritorio = percorso(sassari.puntiSupporto, [0]);
