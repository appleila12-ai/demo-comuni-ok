import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Framura (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Il telefono è il centralino del Comune: un numero diretto dello sportello non è stato trovato.
// Da verificare con l'ente: telefono diretto dello sportello, associazioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const framura: ComuneConfig = {
  slug: "framura",
  tipo: "comune",
  nome: "Comune di Framura",
  nomeBreve: "Framura",
  delEnte: "del Comune di Framura",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Sportello di cittadinanza · Servizi sociali",
  responsabile: "Assistente sociale di ambito",
  indirizzo: "Località Setta 42, Framura (SP)",
  telefono: "0187 810020",
  email: "protocollo@comune.framura.sp.it",
  pec: "comuneframura@legalmail.it",
  orari: "Mercoledì 8:30–12:30, accesso libero (avviso 2026)",
  sitoWeb: "https://www.comune.framura.sp.it/novita/avvisi/novita_639.html",

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
      title: "Sportello di cittadinanza – Framura",
      subtitle:
        "Assistente sociale di ambito · Località Setta 42 · mercoledì 8:30–12:30, accesso libero · Centralino del Comune: tel. 0187 810020",
      action: { type: "tel", value: "0187810020" },
    },
    {
      icon: "business-outline",
      title: "Ambito Sociale n. 62 – Riviera Spezzina",
      subtitle:
        "Capofila Levanto, con Bonassola, Deiva Marina, Framura, Monterosso al Mare, Vernazza e Riomaggiore · Assistente sociale di ambito: tel. 0187 802233 (Levanto) · riviera.servizisociali@gmail.com",
      action: { type: "tel", value: "0187802233" },
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
    "Chiedi al Comune di Framura (0187 810020) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
framura.percorsoTerritorio = percorsoAsl5(framura.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
framura.percorsoTerritorio = { ...framura.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
