import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Carrodano (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Da verificare con l'ente: orari dell'ufficio, nome dell'assistente, associazioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const carrodano: ComuneConfig = {
  slug: "carrodano",
  tipo: "comune",
  nome: "Comune di Carrodano",
  nomeBreve: "Carrodano",
  delEnte: "del Comune di Carrodano",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Ufficio Servizi sociali",
  responsabile: "Ufficio Servizi sociali",
  indirizzo: "Piazza XXV Gennaio 1945 n. 12, Carrodano (SP)",
  telefono: "0187 893324",
  email: "urp@comune.carrodano.sp.it",
  pec: "comunedicarrodano@pec.it",
  orari: "",
  sitoWeb: "https://www.comune.carrodano.sp.it/c011010/zf/index.php/uffici",

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
      title: "Servizi sociali – Carrodano",
      subtitle:
        "Piazza XXV Gennaio 1945 n. 12 · Tel. 0187 893324 (interni 5–7)",
      action: { type: "tel", value: "0187893324" },
    },
    {
      icon: "business-outline",
      title: "Ambito Sociale n. 60",
      subtitle:
        "Beverino, Borghetto di Vara (capofila), Brugnato, Carrodano, Pignone, Sesta Godano e Zignago",
      action: { type: "web", value: "https://www.comune.borghettodivara.sp.it/it/unita_organizzative/ambito-territoriale-sociale-n-60" },
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
    "Chiedi ai Servizi sociali di Carrodano (0187 893324) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
carrodano.percorsoTerritorio = percorsoAsl5(carrodano.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
carrodano.percorsoTerritorio = { ...carrodano.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
