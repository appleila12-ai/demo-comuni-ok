import type { ComuneConfig } from "../types";
import { INPS_PRIMA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Frosinone (FR) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Aggiornamento 26/10/2026: Sportello Famiglia e Segretariato sociale (pagina del Comune agg. 18/06/2025, letta il 26/10/2026).
// Il link dell'azienda sanitaria è da verificare.
// 27/10/2026: orari dalla pagina Servizi Sociali (sezione del responsabile, non orario di apertura al pubblico), confermati da Ilaria come da pubblicare con questa dicitura. La pagina dello Sportello non ha orari.
// 11/11/2026: risposta dello Sportello Famiglia (10/11/2026): ricevimento e telefono per appuntamenti confermati, sostituiscono gli orari del responsabile e il centralino. L'orario telefonico non è indicato.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const frosinone: ComuneConfig = {
  slug: "frosinone",
  tipo: "comune",
  nome: "Comune di Frosinone",
  nomeBreve: "Frosinone",
  delEnte: "del Comune di Frosinone",
  soggetto: "Il Comune",
  provincia: "FR",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Sportello Famiglia e Segretariato sociale",
  indirizzo: "Via Armando Fabi 129–131, 03100 Frosinone",
  telefono: "0775 2656272",
  email: "sportellofamiglia@comune.frosinone.it",
  pec: "pec@pec.comune.frosinone.it",
  orari: "Ricevimento allo Sportello Famiglia: lunedì–venerdì 9:00–12:00; lunedì e mercoledì anche 15:00–18:00. Per gli appuntamenti telefona allo 0775 2656272 (risposta dello Sportello del 10/11/2026)",
  sitoWeb: "https://www.comune.frosinone.it",

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
      title: "Sportello Famiglia e Segretariato sociale",
      subtitle: "Ascolto, orientamento e accompagnamento ai servizi del territorio; accoglie le domande per contributi economici. Via Armando Fabi 129–131 · Appuntamenti 0775 2656272 · sportellofamiglia@comune.frosinone.it · ricevimento lunedì–venerdì 9:00–12:00, lunedì e mercoledì anche 15:00–18:00",
      action: { type: "web", value: "https://comune.frosinone.it/servizio/sportello-famiglia-e-segretariato-sociale/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Frosinone",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslfrosinone.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Frosinone · Esenzioni ticket",
    url: "https://www.aslfrosinone.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
frosinone.percorsoTerritorio = percorso(frosinone.puntiSupporto, [0]);
frosinone.percorsoTerritorio = { ...frosinone.percorsoTerritorio, 1: [INPS_PRIMA_FASE] };
