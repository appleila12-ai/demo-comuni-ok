import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorsoAsl5 } from "../percorso";

// Comune di Porto Venere (SP) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati dalla pagina 'Punti di accesso' del Distretto 18 sul sito del Comune della Spezia (settembre 2026), da verificare.
export const portovenere: ComuneConfig = {
  slug: "portovenere",
  tipo: "comune",
  nome: "Comune di Porto Venere",
  nomeBreve: "Porto Venere",
  delEnte: "del Comune di Porto Venere",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Ufficio Servizi Sociali e Scuola",
  indirizzo: "Via Garibaldi 9, 19025 Porto Venere (SP)",
  telefono: "0187 794844",
  email: "",
  pec: "protocollo@pec.comune.portovenere.sp.it",
  orari: "Telefono lunedì–venerdì 8:30–10:30 (accesso libero, dal 29/09/2025). Servizi Sociali e alla Persona: lunedì e mercoledì 9:00–12:00 su prenotazione (dal 01/10/2025)",
  sitoWeb: "https://www.comune.portovenere.sp.it/amministrazione/uffici/ufficio_16.html",

  logo: null,

  theme: {
    warm: "#8FB0CF",
    warmSoft: "#E3ECF5",
    warmDark: "#2E5578",
    cream: "#F3F5F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Porto Venere",
      subtitle: "Ufficio Servizi Sociali e Scuola · Via Garibaldi 9, 19025 Porto Venere (SP) · Tel. 0187 794844 · telefono lun–ven 8:30–10:30; sportello lun e mer 9:00–12:00 su prenotazione",
      action: { type: "tel", value: "0187794844" },
    },
    {
      icon: "business-outline",
      title: "Distretto Sociosanitario 18 – Spezzino",
      subtitle: "Porto Venere fa parte dell'ambito sociale con La Spezia: punti di accesso e servizi del distretto",
      action: { type: "web", value: "https://www.comune.laspezia.it/argomenti/assistenza-sociale/distretto-sociosanitario-18/punti-di-accesso" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Porto Venere (0187 794844) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
portovenere.percorsoTerritorio = percorsoAsl5(portovenere.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
portovenere.percorsoTerritorio = { ...portovenere.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
