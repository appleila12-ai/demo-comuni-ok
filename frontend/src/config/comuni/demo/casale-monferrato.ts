import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Casale Monferrato (AL) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// L'indirizzo del sito del Comune è preso dalla scheda del Comune su tuttitalia.it (collegamento al sito istituzionale): il sito non è stato aperto in questo giro, quindi indirizzo e pagina dei servizi sociali sono da verificare. Il link dell'azienda sanitaria è ripreso dalle schede dei Comuni della stessa provincia: da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const casaleMonferrato: ComuneConfig = {
  slug: "casale-monferrato",
  tipo: "comune",
  nome: "Comune di Casale Monferrato",
  nomeBreve: "Casale Monferrato",
  delEnte: "del Comune di Casale Monferrato",
  soggetto: "Il Comune",
  provincia: "AL",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://comune.casale-monferrato.al.it",

  logo: null,

  theme: {
    warm: "#8BCF8D",
    warmSoft: "#DDF2DE",
    warmDark: "#2A6E2C",
    cream: "#F2F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali del Comune",
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://comune.casale-monferrato.al.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASL AL",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslal.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL AL · Esenzioni ticket",
    url: "https://www.aslal.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
casaleMonferrato.percorsoTerritorio = percorso(casaleMonferrato.puntiSupporto, [0]);
