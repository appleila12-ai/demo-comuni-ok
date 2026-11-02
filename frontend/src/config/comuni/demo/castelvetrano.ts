import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Castelvetrano (TP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const castelvetrano: ComuneConfig = {
  slug: "castelvetrano",
  tipo: "comune",
  nome: "Comune di Castelvetrano",
  nomeBreve: "Castelvetrano",
  delEnte: "del Comune di Castelvetrano",
  soggetto: "Il Comune",
  provincia: "TP",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.castelvetrano.tp.it",

  logo: null,

  theme: {
    warm: "#A18BCF",
    warmSoft: "#E4DDF2",
    warmDark: "#402A6E",
    cream: "#F4F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.castelvetrano.tp.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Trapani",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asptrapani.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Trapani · Esenzioni ticket",
    url: "https://www.asptrapani.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: servizi sociali già in scheda con fonte (lotto 18, 02/11/2026). Passi 1-3 vuoti: nessun recapito verificato.
castelvetrano.percorsoTerritorio = percorso(castelvetrano.puntiSupporto, [0]);
