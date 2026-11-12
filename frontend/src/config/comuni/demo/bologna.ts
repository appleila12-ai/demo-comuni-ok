import type { ComuneConfig, PuntoSupporto } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Bologna (BO) — VERSIONE DIMOSTRATIVA (aggiornata il 14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune di Bologna non si apre in automatico e la tabella degli sportelli sociali nei dati aperti non si è caricata:
// indirizzi, telefoni e orari degli sportelli NON sono verificati. È confermato solo (dalla descrizione del dataset del Comune) che gli Sportelli Sociali
// sono la porta di accesso ai servizi sociali e si trovano nei sei Quartieri della città.
// Da fare: elenco degli Sportelli Sociali per Quartiere (indirizzo, telefono, orari), bonus del Comune, associazioni, sport e tempo libero.
export const bologna: ComuneConfig = {
  slug: "bologna",
  tipo: "comune",
  nome: "Comune di Bologna",
  nomeBreve: "Bologna",
  delEnte: "del Comune di Bologna",
  soggetto: "Il Comune",
  provincia: "BO",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "051 203111",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.bologna.it",

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
      title: "Sportelli Sociali del Comune di Bologna",
      subtitle: "Sono la porta di accesso ai servizi sociali e si trovano nei sei Quartieri della città. Indirizzi e orari sono nell'elenco dei dati aperti del Comune",
      action: { type: "web", value: "https://opendata.comune.bologna.it/explore/dataset/sportelli-sociali/table/" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL Bologna",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.bologna.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL Bologna · Esenzioni ticket",
    url: "https://www.ausl.bologna.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passo 2 senza voci: la pagina della Medicina legale non è leggibile o non è stata verificata (28/10/2026); chiesta conferma all'azienda sanitaria.
bologna.percorsoTerritorio = percorso(bologna.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
// 12/11/2026: due voci locali sotto quella generale, da fonti AUSL Bologna (notizia del 02/03/2026) e INPS (notizia del 27/05/2026, in vigore dal 01/06/2026).
// Non inseriti sede, telefono e orari della commissione: non indicati nelle fonti consultate; la scheda «Medicina legale» dell'AUSL non era leggibile.
const BOLOGNA_INVALIDITA_AUSL: PuntoSupporto = {
  icon: "information-circle-outline",
  title: "Invalidità civile a Bologna: chi fa la visita",
  subtitle:
    "Dal 1° marzo 2026 il certificato del medico avvia il percorso e poi aspetti la convocazione dell'INPS: le visite le fa l'INPS provinciale di Bologna. L'AUSL porta a termine solo le domande presentate fino al 28 febbraio 2026, convocando gli interessati nei propri ambulatori. Sede e orari della commissione non risultano nelle fonti consultate: chiedili all'INPS o a un patronato",
  action: {
    type: "web",
    value:
      "https://www.ausl.bologna.it/news/archivio-2026/invalidita-civile-dal-primo-marzo-per-chiederla-bastera-il-certificato-del-medico-curante-e-le-visite-saranno-svolte-esclusivamente-dall2019inps-provinciale-di-bologna",
  },
};
const BOLOGNA_INVALIDITA_70: PuntoSupporto = {
  icon: "information-circle-outline",
  title: "Se hai almeno 70 anni",
  subtitle:
    "Dal 1° giugno 2026 il medico indica nel sistema se hai patologie croniche e una progressiva perdita di autonomia. Se ci sono entrambe, serve anche la domanda amministrativa all'INPS entro 90 giorni (online o tramite un patronato). Altrimenti il certificato avvia direttamente la procedura",
  action: {
    type: "web",
    value: "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.05.disabilit-over-70-le-novit-dal-1-giugno.html",
  },
};
bologna.percorsoTerritorio = { ...bologna.percorsoTerritorio, 1: [INPS_TERZA_FASE, BOLOGNA_INVALIDITA_AUSL, BOLOGNA_INVALIDITA_70] };
