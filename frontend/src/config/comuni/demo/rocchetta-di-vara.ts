import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Rocchetta di Vara (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Nessun ufficio sociale proprio nelle fonti trovate: si indica il centralino del Comune. L'Ambito n. 61 (capofila Bolano) risulta da una convenzione prorogata al 30/06/2026 senza conferma successiva: non è citato.
// Da verificare con l'ente: ufficio sociale, orari, assistente, associazioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const rocchettaDiVara: ComuneConfig = {
  slug: "rocchetta-di-vara",
  tipo: "comune",
  nome: "Comune di Rocchetta di Vara",
  nomeBreve: "Rocchetta di Vara",
  delEnte: "del Comune di Rocchetta di Vara",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Comune di Rocchetta di Vara · Centralino",
  responsabile: "Chiedi dei Servizi sociali al centralino",
  indirizzo: "",
  telefono: "0187 868752",
  email: "protocollo@comune.rocchettadivara.sp.it",
  pec: "protocollo@pec.comune.rocchettadivara.sp.it",
  orari: "",
  sitoWeb: "https://www.comune.rocchettadivara.sp.it/",

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
      title: "Comune di Rocchetta di Vara",
      subtitle:
        "Per i Servizi sociali chiama il centralino del Comune · Tel. 0187 868752",
      action: { type: "tel", value: "0187868752" },
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
    "Chiedi al Comune di Rocchetta di Vara (0187 868752) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
rocchettaDiVara.percorsoTerritorio = percorsoAsl5(rocchettaDiVara.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
rocchettaDiVara.percorsoTerritorio = { ...rocchettaDiVara.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
