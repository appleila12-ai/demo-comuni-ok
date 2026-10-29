import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Crema (CR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Azienda sanitaria non indicata: da cercare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const crema: ComuneConfig = {
  slug: "crema",
  tipo: "comune",
  nome: "Comune di Crema",
  nomeBreve: "Crema",
  delEnte: "del Comune di Crema",
  soggetto: "Il Comune",
  provincia: "CR",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "protocollo@comunecrema.telecompost.it",
  orari: "",
  sitoWeb: "https://www.comune.crema.cr.it",

  logo: null,

  theme: {
    warm: "#AF8BCF",
    warmSoft: "#E8DDF2",
    warmDark: "#4E2A6E",
    cream: "#F4F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.crema.cr.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.crema.cr.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
crema.percorsoTerritorio = percorso(crema.puntiSupporto, [0]);
