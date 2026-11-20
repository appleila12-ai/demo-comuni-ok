// Recapiti controllati il 17/11/2026. Fonte: https://static-www.comune.siracusa.it/wp-content/uploads/2026/05/1-AVVISO_signed.pdf ; aggiornamento fonte: 25/05/2026 (firma del documento).
import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Siracusa (SR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Il sito non è stato leggibile in automatico: indirizzo da confermare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; sito dell'azienda sanitaria; bonus del Comune, associazioni, sport e tempo libero.
export const siracusa: ComuneConfig = {
  slug: "siracusa",
  tipo: "comune",
  nome: "Comune di Siracusa",
  nomeBreve: "Siracusa",
  delEnte: "del Comune di Siracusa",
  soggetto: "Il Comune",
  provincia: "SR",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Italia 103, n. 105, Siracusa",
  telefono: "0931 781300",
  email: "politichesociali@comune.siracusa.it",
  pec: "servizisociali@comune.siracusa.legalmail.it",
  orari: "Recapiti del Settore Politiche Sociali pubblicati nel documento comunale del 25/05/2026. Orari non indicati nel documento.",
  sitoWeb: "https://static-www.comune.siracusa.it/wp-content/uploads/2026/05/1-AVVISO_signed.pdf",

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
      subtitle: "Recapiti istituzionali nella scheda; controllati il 17/11/2026",
      action: { type: "web", value: "https://static-www.comune.siracusa.it/wp-content/uploads/2026/05/1-AVVISO_signed.pdf" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.siracusa.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
siracusa.percorsoTerritorio = percorso(siracusa.puntiSupporto, [0]);
