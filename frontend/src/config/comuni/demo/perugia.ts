import type { ComuneConfig } from "../types";
import { INPS_PRIMA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Perugia (PG) — VERSIONE DIMOSTRATIVA, SCHEDA COMPLETATA (20 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Il sito del Comune non è stato leggibile in automatico: la pagina dei servizi sociali va cercata e confermata.
// Completata in parte il 20 ottobre 2026: 2 misure del Comune in bonus.ts (autismo 2025, chiusa; Vita Indipendente 2026, graduatorie), da pagine del sito del Comune.
// Recapiti dei Servizi Sociali (uffici della cittadinanza, segreteria, caregiver, ADI) inseriti il 12/11/2026 dalle pagine del Comune.
// Da confermare con l'ente: importi, scadenze e requisiti dei bandi; telefono, email, indirizzo e orari dei Servizi Sociali; associazioni e sport.
export const perugia: ComuneConfig = {
  slug: "perugia",
  tipo: "comune",
  nome: "Comune di Perugia",
  nomeBreve: "Perugia",
  delEnte: "del Comune di Perugia",
  soggetto: "Il Comune",
  provincia: "PG",
  regione: "Umbria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "075 5771",
  email: "",
  pec: "comune.perugia@postacert.umbria.it",
  orari: "",
  sitoWeb: "https://www.comune.perugia.it",

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
      title: "Servizi Sociali · Uffici della cittadinanza",
      subtitle: "Primo ascolto, senza appuntamento negli orari indicati. Madonna Alta, Via A. Diaz 150: lun 9–11, mer 15–17; tel. 075 5772990; cittadinanzaberioli@comune.perugia.it. Ponte Felcino, Via Maniconi: lun 15–17, mer 9–11; tel. 075 5772995; cittadinanzafiume@comune.perugia.it. Le Fonti, Via Campo di Marte: mar 9–11, mer 15–17; tel. 075 5773544; cittadinanzalefonti@comune.perugia.it. Castel del Piano, Via dell'Armonia: mer 15–17, ven 9–11; tel. 075 5773540; cittadinanzapievaiola@comune.perugia.it. Ponte San Giovanni, Piazza Chiabolotti 6: lun 15–17, mer 11–13; tel. 075 5772997. Orari indicativi, possono cambiare: conferma all'ufficio prima di andare. Fonte Comune di Perugia, letta il 12/11/2026.",
      action: { type: "web", value: "https://www.comune.perugia.it/servizio/servizi-sociali-uffici-della-cittadinanza/" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Segreteria",
      subtitle: "Tel. 075 5773865 / 075 5773818. Centralino unico del Comune: 075 075075. Fonte Comune di Perugia, letta il 12/11/2026.",
      action: { type: "web", value: "https://www.comune.perugia.it/punto_contatto/segreteria-u-o-servizi-sociali/" },
    },
    {
      icon: "people-outline",
      title: "Servizi Sociali · Caregiver familiari",
      subtitle: "Informazioni per il contributo ai caregiver: tel. 075 5773871 (informazioni telefoniche lun 15–17 e mer 9–12); caregiver@comune.perugia.it. Orari indicativi, possono cambiare: conferma all'ufficio. Fonte Comune di Perugia, letta il 12/11/2026.",
      action: { type: "web", value: "https://www.comune.perugia.it/punto_contatto/servizi-sociali-caregiver/" },
    },
    {
      icon: "home-outline",
      title: "Servizi Sociali · Sportello ADI",
      subtitle: "Via A. Diaz 150, Madonna Alta. Giovedì 8–14; tel. 075 5772977; sportelloadi@comune.perugia.it. Orari indicativi, possono cambiare: conferma all'ufficio. Fonte Comune di Perugia, letta il 12/11/2026.",
      action: { type: "web", value: "https://www.comune.perugia.it/punto_contatto/servizi-sociali-sportello-adi/" },
    },
    {
      icon: "medkit-outline",
      title: "USL Umbria 1",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslumbria1.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "USL Umbria 1 · Esenzioni ticket",
    url: "https://www.uslumbria1.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
perugia.percorsoTerritorio = percorso(perugia.puntiSupporto, [0, 1, 2, 3]);
perugia.percorsoTerritorio = { ...perugia.percorsoTerritorio, 1: [INPS_PRIMA_FASE] };
