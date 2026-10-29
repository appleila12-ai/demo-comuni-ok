import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorsoAsl5 } from "../percorso";

// Comune di Riccò del Golfo di Spezia (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti: pagina "Ufficio Servizi Sociali e alla Persona" del sito del Comune (aggiornata il 05/11/2025), letta il 22/10/2026. Orari non inseriti: la pagina riporta solo il periodo estivo (1 giugno–30 settembre).
export const riccoDelGolfo: ComuneConfig = {
  slug: "ricco-del-golfo",
  tipo: "comune",
  nome: "Comune di Riccò del Golfo di Spezia",
  nomeBreve: "Riccò del Golfo",
  delEnte: "del Comune di Riccò del Golfo di Spezia",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali e alla Persona",
  indirizzo: "Via Aurelia 150, 19020 Riccò del Golfo di Spezia (SP)",
  telefono: "0187 941725",
  email: "",
  pec: "riccodelgolfo@pec.comune.riccodelgolfo.sp.it",
  orari: "Chiama lo 0187 941725 per orari e appuntamenti",
  sitoWeb: "https://www.comune.riccodelgolfo.sp.it/amministrazione/uffici/ufficio_41.html",

  logo: null,

  theme: {
    warm: "#B7A58C",
    warmSoft: "#F0EAE1",
    warmDark: "#6B5638",
    cream: "#F6F4F0",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Riccò del Golfo",
      subtitle: "Ufficio Servizi Sociali e alla Persona · Municipio, Via Aurelia 150 · Tel. 0187 941725 · protocollo@comune.riccodelgolfo.sp.it",
      action: { type: "tel", value: "0187941725" },
    },
    {
      icon: "globe-outline",
      title: "Pagina dei Servizi Sociali",
      subtitle: "Recapiti diretti e orari sul sito del Comune",
      action: { type: "web", value: "https://www.comune.riccodelgolfo.sp.it/amministrazione/uffici/ufficio_41.html" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Riccò del Golfo (tel. 0187 941725) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
riccoDelGolfo.percorsoTerritorio = percorsoAsl5(riccoDelGolfo.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
riccoDelGolfo.percorsoTerritorio = { ...riccoDelGolfo.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
