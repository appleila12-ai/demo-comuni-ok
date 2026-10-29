import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Grosseto (GR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Il sito del Comune non si è letto in automatico: la pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const grosseto: ComuneConfig = {
  slug: "grosseto",
  tipo: "comune",
  nome: "Comune di Grosseto",
  nomeBreve: "Grosseto",
  delEnte: "del Comune di Grosseto",
  soggetto: "Il Comune",
  provincia: "GR",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0564 488111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.grosseto.it",

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
      action: { type: "web", value: "https://www.comune.grosseto.it" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Sud Est",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslsudest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Sud Est · Esenzioni ticket",
    url: "https://www.uslsudest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
grosseto.percorsoTerritorio = percorso(grosseto.puntiSupporto, [0]);
