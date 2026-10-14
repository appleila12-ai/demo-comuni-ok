import type { ComuneConfig } from "../types";

// Comune di Fermo (FM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina del Settore V (Front office Servizi Sociali) del Comune letta il 14 ottobre 2026: telefoni ed email. Sede del Comune: via Mazzini 4; Ambito XIX: piazzale Azzolino 3 (non si sa quale ospiti il front office). Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const fermo: ComuneConfig = {
  slug: "fermo",
  tipo: "comune",
  nome: "Comune di Fermo",
  nomeBreve: "Fermo",
  delEnte: "del Comune di Fermo",
  soggetto: "Il Comune",
  provincia: "FM",
  regione: "Marche",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0734 284236",
  email: "frontoffice.servizisociali@comune.fermo.it",
  pec: "",
  orari: "Secondo numero del front office: 0734 284279. Orari non pubblicati sulla pagina",
  sitoWeb: "https://www.comune.fermo.it/Amministrazione/Aree-amministrative/Settore-V-Politiche-per-il-benessere-della-persona-e-Ambito-Territoriale-XIX/%28related_offices%29/4",

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
      subtitle: "Primo ascolto sociale: recapiti e orari in questa scheda e sul sito del Comune",
      action: { type: "tel", value: "0734284236" },
    },
    {
      icon: "medkit-outline",
      title: "AST Fermo",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ast-fermo.marche.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AST Fermo · Esenzioni ticket",
    url: "https://www.ast-fermo.marche.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
