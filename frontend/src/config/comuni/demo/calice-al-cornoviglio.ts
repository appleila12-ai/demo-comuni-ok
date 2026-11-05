import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Calice al Cornoviglio (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Nessun ufficio sociale proprio nelle fonti trovate: si indica il centralino del Comune. L'appartenenza all'Ambito n. 61 (capofila Bolano) risulta da una convenzione prorogata al 30/06/2026, senza conferma successiva: l'ambito non è citato.
// Da verificare con l'ente: ufficio sociale, orari, assistente, associazioni. Il contributo trasporto scolastico per studenti con disabilità 2026/27 aveva scadenza 08/10/2026: non inserito.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const caliceAlCornoviglio: ComuneConfig = {
  slug: "calice-al-cornoviglio",
  tipo: "comune",
  nome: "Comune di Calice al Cornoviglio",
  nomeBreve: "Calice al Cornoviglio",
  delEnte: "del Comune di Calice al Cornoviglio",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Comune di Calice al Cornoviglio · Centralino",
  responsabile: "Chiedi dei Servizi sociali al centralino",
  indirizzo: "Castello Malaspina, località Castello di Madrignano 58, Calice al Cornoviglio (SP)",
  telefono: "0187 935644",
  email: "info@comune.calicealcornoviglio.sp.it",
  pec: "comunecalice.sp@legalmail.it",
  orari: "",
  sitoWeb: "https://www.comune.calicealcornoviglio.sp.it/amministrazione/uffici/uffici.html",

  logo: null,

  theme: {
    warm: "#9DB8B0",
    warmSoft: "#E4EEEB",
    warmDark: "#33594F",
    cream: "#F3F6F5",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Comune di Calice al Cornoviglio",
      subtitle:
        "Per i Servizi sociali chiama il centralino del Comune · Tel. 0187 935644 · info@comune.calicealcornoviglio.sp.it",
      action: { type: "tel", value: "0187935644" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle:
        "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx" },
    },
  ],

  trasporto:
    "Chiedi al Comune di Calice al Cornoviglio (0187 935644) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
caliceAlCornoviglio.percorsoTerritorio = percorsoAsl5(caliceAlCornoviglio.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
caliceAlCornoviglio.percorsoTerritorio = { ...caliceAlCornoviglio.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
