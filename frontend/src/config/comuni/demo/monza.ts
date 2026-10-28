import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Monza (MB) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// È verificato solo l'indirizzo web indicato in sitoWeb.
// Completata il 19 ottobre 2026: Misura B2 2025-2026 (chiusa) in bonus.ts, un'associazione sportiva in associazioni.ts, Segretariato Sociale con numero letto sul sito del Comune.
// Da confermare con l'ente: orari e indirizzo dei Servizi Sociali, nuova edizione della Misura B2, altre società sportive (elenco molto lungo, non letto tutto); manca il sito dell'azienda sanitaria.
export const monza: ComuneConfig = {
  slug: "monza",
  tipo: "comune",
  nome: "Comune di Monza",
  nomeBreve: "Monza",
  delEnte: "del Comune di Monza",
  soggetto: "Il Comune",
  provincia: "MB",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "039 23721",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.monza.it",

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
      action: { type: "web", value: "https://www.comune.monza.it" },
    },
    {
      icon: "call-outline",
      title: "Segretariato Sociale",
      subtitle: "Primo ascolto sociale · Tel. 334 6311270",
      action: { type: "tel", value: "3346311270" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Esenzioni ticket · chiedi alla tua azienda sanitaria",
    url: "https://www.comune.monza.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
monza.percorsoTerritorio = percorso(monza.puntiSupporto, [0, 1]);
