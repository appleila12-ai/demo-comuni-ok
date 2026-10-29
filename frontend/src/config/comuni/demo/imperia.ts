import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Imperia (IM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Pagina dell'Assessorato alla Comunità Solidale del sito del Comune. Il sito dell'azienda sanitaria non è stato controllato.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const imperia: ComuneConfig = {
  slug: "imperia",
  tipo: "comune",
  nome: "Comune di Imperia",
  nomeBreve: "Imperia",
  delEnte: "del Comune di Imperia",
  soggetto: "Il Comune",
  provincia: "IM",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "0183 7011",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.imperia.it/it/page/146987",

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
      action: { type: "web", value: "https://www.comune.imperia.it/it/page/146987" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 1 Imperiese",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asl1.liguria.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 1 Imperiese · Esenzioni ticket",
    url: "https://www.asl1.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
imperia.percorsoTerritorio = percorso(imperia.puntiSupporto, [0]);
