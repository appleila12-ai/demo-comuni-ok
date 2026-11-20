// Recapiti controllati il 17/11/2026. Fonte: https://comune.trapani.it/unita_organizzativa/servizi-sociali/ ; aggiornamento fonte: 22/10/2026.
import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Trapani (TP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Il sito del Comune non è leggibile in automatico (robots): la pagina dei servizi sociali va cercata e confermata.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const trapani: ComuneConfig = {
  slug: "trapani",
  tipo: "comune",
  nome: "Comune di Trapani",
  nomeBreve: "Trapani",
  delEnte: "del Comune di Trapani",
  soggetto: "Il Comune",
  provincia: "TP",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Centro Nino Via, via Archimede 1, Trapani",
  telefono: "334 1128975",
  email: "servizisociali@comune.trapani.it",
  pec: "servizi.sociali@pec.comune.trapani.it",
  orari: "Il numero principale è quello della responsabile dell’ufficio. Personale amministrativo: 348 3552438, 348 3552448, 333 6139937. Front office: lunedì e giovedì 15:00-17:00; mercoledì e venerdì 09:15-12:00. Telefona prima di andare.",
  sitoWeb: "https://comune.trapani.it/unita_organizzativa/servizi-sociali/",

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
      action: { type: "web", value: "https://comune.trapani.it/unita_organizzativa/servizi-sociali/" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Trapani",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asptrapani.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Trapani · Esenzioni ticket",
    url: "https://www.asptrapani.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
trapani.percorsoTerritorio = percorso(trapani.puntiSupporto, [0]);
