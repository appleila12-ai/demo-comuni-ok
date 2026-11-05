import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Zignago (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Recapiti di un ufficio sociale locale di Zignago non trovati nelle fonti ufficiali (non vuol dire che non esista): si indica l'Ambito Sociale n. 60. L'unica email comunale ordinaria trovata è quella dell'Anagrafe e Protocollo, su un dominio diverso: non usata, si usa la PEC.
// Da verificare con l'ente: ufficio sociale locale, orari, associazioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const zignago: ComuneConfig = {
  slug: "zignago",
  tipo: "comune",
  nome: "Comune di Zignago",
  nomeBreve: "Zignago",
  delEnte: "del Comune di Zignago",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi sociali · Ambito Sociale n. 60",
  responsabile: "Assistente sociale di ambito",
  indirizzo: "Piazza Umberto I 3, 19020 Borghetto di Vara (SP)",
  telefono: "0187 894121",
  email: "servizisociali@comune.borghettodivara.sp.it",
  pec: "comune.zignago@legalmail.it",
  orari: "Ricevimento su appuntamento · telefono lun–ven 8:00–12:00",
  sitoWeb: "https://www.comune.zignago.sp.it/",

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
      title: "Servizi sociali · Ambito Sociale n. 60 (sede di Borghetto di Vara)",
      subtitle:
        "Assistente sociale di ambito · Piazza Umberto I 3, 19020 Borghetto di Vara (SP) · Tel. 0187 894121 · ricevimento su appuntamento, telefono lun–ven 8:00–12:00 · servizisociali@comune.borghettodivara.sp.it",
      action: { type: "tel", value: "0187894121" },
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
    "Chiedi ai Servizi sociali dell'Ambito n. 60 (0187 894121) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
zignago.percorsoTerritorio = percorsoAsl5(zignago.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
zignago.percorsoTerritorio = { ...zignago.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
