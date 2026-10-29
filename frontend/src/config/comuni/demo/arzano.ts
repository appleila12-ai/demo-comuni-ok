import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Arzano (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const arzano: ComuneConfig = {
  slug: "arzano",
  tipo: "comune",
  nome: "Comune di Arzano",
  nomeBreve: "Arzano",
  delEnte: "del Comune di Arzano",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.arzano.na.it",

  logo: null,

  theme: {
    warm: "#B6CF8B",
    warmSoft: "#EAF2DD",
    warmDark: "#556E2A",
    cream: "#F5F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.arzano.na.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 2 Nord",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli2nord.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 2 Nord · Esenzioni ticket",
    url: "https://www.aslnapoli2nord.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

arzano.percorsoTerritorio = percorso(arzano.puntiSupporto, [2]);
