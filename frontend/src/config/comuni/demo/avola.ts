import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Avola (SR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare. L'indirizzo è indicato con http: da controllare se esiste la versione sicura.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const avola: ComuneConfig = {
  slug: "avola",
  tipo: "comune",
  nome: "Comune di Avola",
  nomeBreve: "Avola",
  delEnte: "del Comune di Avola",
  soggetto: "Il Comune",
  provincia: "SR",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "http://www.comune.avola.sr.it",

  logo: null,

  theme: {
    warm: "#8CC7B8",
    warmSoft: "#DFF2ED",
    warmDark: "#2D6657",
    cream: "#F2F7F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "http://www.comune.avola.sr.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Siracusa",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asp.sr.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Siracusa · Esenzioni ticket",
    url: "https://www.asp.sr.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

avola.percorsoTerritorio = percorso(avola.puntiSupporto, [2]);
