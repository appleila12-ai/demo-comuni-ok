import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Civita Castellana (VT) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati da fonti pubbliche (settembre 2026), da verificare con l'ente. Email non trovata: da inserire.
// 09/11/2026: aggiunto il distretto sociale VT 5, capofila Consorzio Tineri (Regione Lazio, "Comuni per distretto"; Civita Castellana è tra i Comuni dell'elenco).
// Recapiti del Consorzio (sede di Nepi, tel. 0761 559006) dal sito del Consorzio Tineri e dai suoi avvisi.
// Non pubblicati perché non verificati: orari aggiornati, email del servizio, bonus del Comune, associazioni locali (le pagine del Comune non sono consultabili in automatico).
export const civitaCastellana: ComuneConfig = {
  slug: "civita-castellana",
  tipo: "comune",
  nome: "Comune di Civita Castellana",
  nomeBreve: "Civita Castellana",
  delEnte: "del Comune di Civita Castellana",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali",
  indirizzo: "Corso Buozzi 17, 01033 Civita Castellana (VT)",
  telefono: "0761 590311",
  email: "",
  orari: "Mar 9:00–13:00; Gio 9:00–13:00 e 15:00–17:00",
  sitoWeb: "https://comune.civitacastellana.vt.it/amministrazione/unita_organizzativa/ufficio-servizi-sociali/",

  logo: null,

  theme: {
    warm: "#A9A3CF",
    warmSoft: "#ECEAF6",
    warmDark: "#4A4480",
    cream: "#F5F4FA",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Civita Castellana",
      subtitle: "Ufficio Servizi Sociali · Corso Buozzi 17, 01033 Civita Castellana (VT) · Tel. 0761 590311",
      action: { type: "tel", value: "0761590311" },
    },
    {
      icon: "business-outline",
      title: "Consorzio Tineri – Distretto sociale VT 5",
      subtitle: "Il distretto di cui fa parte Civita Castellana (con Calcata, Castel Sant'Elia, Corchiano, Fabrica di Roma, Faleria, Gallese, Nepi, Vallerano, Vasanello e Vignanello) · Piazza dello Spedale 3, Nepi · Tel. 0761 559006",
      action: { type: "tel", value: "0761559006" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Civita Castellana (0761 590311) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: servizi sociali (lotto 18, 02/11/2026) e Consorzio Tineri (09/11/2026), con fonte. Passi 1-3 vuoti: nessun recapito verificato.
civitaCastellana.percorsoTerritorio = percorso(civitaCastellana.puntiSupporto, [0, 1]);
