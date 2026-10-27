import type { ComuneConfig } from "../types";

// Comune di Savona (SV) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Argomento "Assistenza sociale" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const savona: ComuneConfig = {
  slug: "savona",
  tipo: "comune",
  nome: "Comune di Savona",
  nomeBreve: "Savona",
  delEnte: "del Comune di Savona",
  soggetto: "Il Comune",
  provincia: "SV",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "019 83101",
  email: "",
  pec: "posta@pec.comune.savona.it",
  orari: "",
  sitoWeb: "https://www.comune.savona.it/it/topics/7",

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
      action: { type: "web", value: "https://www.comune.savona.it/it/topics/7" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 2 Liguria",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl2.liguria.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 2 Liguria · Esenzioni ticket",
    url: "https://www.asl2.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
