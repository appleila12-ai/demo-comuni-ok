import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Messina (ME) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Pagina "Salute, benessere e assistenza" del sito del Comune, controllata il 13 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const messina: ComuneConfig = {
  slug: "messina",
  tipo: "comune",
  nome: "Comune di Messina",
  nomeBreve: "Messina",
  delEnte: "del Comune di Messina",
  soggetto: "Il Comune",
  provincia: "ME",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "090 7721",
  email: "",
  pec: "",
  orari: "Il numero indicato è il centralino del Comune. La pagina del Servizio Sociale Professionale pubblica il Protocollo generale: non è una casella dedicata del servizio. Email dedicata e orari dello sportello sociale non verificati. Controllo 17/11/2026; aggiornamento della pagina non indicato.",
  sitoWeb: "https://www.comune.messina.it/Amministrazione/Uffici/Sociale-professionale",

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
      subtitle: "Pagina del Servizio Sociale Professionale. I contatti pubblicati sono generali del Comune; sportello dedicato e orari non verificati (17/11/2026).",
      action: { type: "web", value: "https://www.comune.messina.it/Amministrazione/Uffici/Sociale-professionale" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Messina",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asp.messina.it" },
    },
    {
      icon: "people-outline",
      title: "Protocollo generale del Comune di Messina",
      subtitle: "protocollogenerale@comune.messina.it · centralino 090 7721. Contatto generale, non email dedicata dei Servizi Sociali. Fonte: pagina comunale Sociale professionale, letta il 17/11/2026; aggiornamento non indicato.",
      action: { type: "web", value: "https://www.comune.messina.it/Amministrazione/Uffici/Sociale-professionale" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Messina · Esenzioni ticket",
    url: "https://www.asp.messina.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
messina.percorsoTerritorio = percorso(messina.puntiSupporto, [0, 2]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
messina.percorsoTerritorio = { ...messina.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
