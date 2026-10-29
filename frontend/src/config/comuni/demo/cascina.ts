import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Cascina (PI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (18 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sito ufficiale e pagina "Assistenza sociale" verificati il 18/10/2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const cascina: ComuneConfig = {
  slug: "cascina",
  tipo: "comune",
  nome: "Comune di Cascina",
  nomeBreve: "Cascina",
  delEnte: "del Comune di Cascina",
  soggetto: "Il Comune",
  provincia: "PI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.cascina.pi.it",

  logo: null,

  theme: {
    warm: "#C9A24B",
    warmSoft: "#EFE6C8",
    warmDark: "#7E6220",
    cream: "#F6F3E9",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.cascina.pi.it/it/topics/7" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
cascina.percorsoTerritorio = percorso(cascina.puntiSupporto, [0]);
