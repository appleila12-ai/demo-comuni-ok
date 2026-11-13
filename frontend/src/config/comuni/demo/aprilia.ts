import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Aprilia (LT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina "Salute, benessere e assistenza" del sito del Comune (controllata il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Recapiti Servizi Sociali: Avviso del Comune di Aprilia del 21/08/2026 (trasferimento temporaneo uffici) e scheda Segretariato Sociale; indirizzo non indicato in modo univoco: sede temporanea, da confermare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const aprilia: ComuneConfig = {
  slug: "aprilia",
  tipo: "comune",
  nome: "Comune di Aprilia",
  nomeBreve: "Aprilia",
  delEnte: "del Comune di Aprilia",
  soggetto: "Il Comune",
  provincia: "LT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "06 92018626",
  email: "servizisociali@comune.aprilia.lt.it",
  pec: "servizisociali@pec.comune.aprilia.lt.it",
  orari: "Solo su appuntamento. Segretariato sociale: puac@comune.aprilia.lt.it, tel. 376 2992516. Il Comune ha pubblicato orari diversi in due pagine (con o senza mercoledì mattina) e la sede è temporanea. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare.",
  sitoWeb: "https://www.comune.aprilia.lt.it/servizi/salute-benessere-e-assistenza",

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
      action: { type: "web", value: "https://www.comune.aprilia.lt.it/servizi/salute-benessere-e-assistenza" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Latina",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.latina.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Latina · Esenzioni ticket",
    url: "https://www.ausl.latina.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
aprilia.percorsoTerritorio = percorso(aprilia.puntiSupporto, [0]);
