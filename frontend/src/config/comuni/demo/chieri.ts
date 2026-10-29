import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Chieri (TO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni vicini: da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const chieri: ComuneConfig = {
  slug: "chieri",
  tipo: "comune",
  nome: "Comune di Chieri",
  nomeBreve: "Chieri",
  delEnte: "del Comune di Chieri",
  soggetto: "Il Comune",
  provincia: "TO",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "protocollo.chieri@pcert.it",
  orari: "",
  sitoWeb: "https://www.comune.chieri.to.it",

  logo: null,

  theme: {
    warm: "#9CC5A1",
    warmSoft: "#E3F1E5",
    warmDark: "#3C6B43",
    cream: "#F4F7F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.chieri.to.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL TO5",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslto5.piemonte.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL TO5 · Esenzioni ticket",
    url: "https://www.aslto5.piemonte.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
chieri.percorsoTerritorio = percorso(chieri.puntiSupporto, [0]);
