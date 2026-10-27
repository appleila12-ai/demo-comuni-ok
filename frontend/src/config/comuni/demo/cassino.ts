import type { ComuneConfig } from "../types";

// Comune di Cassino (FR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale); lo stesso indirizzo compare nei documenti ufficiali trovati con la ricerca: il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Azienda sanitaria non indicata: da cercare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const cassino: ComuneConfig = {
  slug: "cassino",
  tipo: "comune",
  nome: "Comune di Cassino",
  nomeBreve: "Cassino",
  delEnte: "del Comune di Cassino",
  soggetto: "Il Comune",
  provincia: "FR",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "servizio.protocollo@comunecassino.telecompost.it",
  orari: "",
  sitoWeb: "https://www.comune.cassino.fr.it",

  logo: null,

  theme: {
    warm: "#8B8BCF",
    warmSoft: "#DDDDF2",
    warmDark: "#2A2A6E",
    cream: "#F2F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.cassino.fr.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.cassino.fr.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
