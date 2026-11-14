import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Vercelli (VC) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Pagina "Salute, benessere e assistenza" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Sportello sociale verificato il 14/11/2026; da fare: bonus comunali, associazioni, sport e tempo libero, procedura ticket ASL VC.
export const vercelli: ComuneConfig = {
  slug: "vercelli",
  tipo: "comune",
  nome: "Comune di Vercelli",
  nomeBreve: "Vercelli",
  delEnte: "del Comune di Vercelli",
  soggetto: "Il Comune",
  provincia: "VC",
  regione: "Piemonte",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Alessandro Manzoni 8, 13100 Vercelli",
  telefono: "0161 596512",
  email: "segreteria.polsoc@comune.vercelli.it",
  pec: "",
  orari: "Sportello Politiche Sociali: lunedì, mercoledì e giovedì 09:00-12:00; martedì e venerdì chiuso.",
  sitoWeb: "https://www.comune.vercelli.it/servizi/salute-benessere-assistenza",

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
      subtitle: "Via Alessandro Manzoni 8 · 0161 596512 · segreteria.polsoc@comune.vercelli.it",
      action: { type: "web", value: "https://www.comune.vercelli.it/amministrazione/sportello-settore-politiche-sociali" },
    },
    {
      icon: "medkit-outline",
      title: "ASL VC",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslvc.piemonte.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL VC · Esenzioni ticket",
    url: "https://www.aslvc.piemonte.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: servizi sociali già in scheda con fonte (lotto 18, 02/11/2026). Passi 1-3 vuoti: nessun recapito verificato.
vercelli.percorsoTerritorio = percorso(vercelli.puntiSupporto, [0]);
