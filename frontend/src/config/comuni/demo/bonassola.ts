import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Bonassola (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Per la PEC le fonti sono discordanti (halleycert.it nel riepilogo e nell'elenco della Prefettura, halley.it nella scheda dei servizi sociali): si usa halleycert.it.
// Da verificare con l'ente: associazioni, PEC corretta.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const bonassola: ComuneConfig = {
  slug: "bonassola",
  tipo: "comune",
  nome: "Comune di Bonassola",
  nomeBreve: "Bonassola",
  delEnte: "del Comune di Bonassola",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Ufficio Servizi sociali",
  responsabile: "Ufficio Servizi sociali",
  indirizzo: "Via Iside Beverino 1, Bonassola (SP)",
  telefono: "0187 813829",
  email: "affarigenerali@comune.bonassola.sp.it",
  pec: "comune.bonassola.sp@halleycert.it",
  orari: "Assistente di ambito: lunedì 14:30–16:00 su prenotazione",
  sitoWeb: "https://www.comune.bonassola.sp.it/amministrazione/uffici/ufficio_13.html",

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
      title: "Servizi sociali – Bonassola",
      subtitle:
        "Assistente sociale di ambito · Via Iside Beverino 1 · Tel. 0187 813829 · lunedì 14:30–16:00 su prenotazione",
      action: { type: "tel", value: "0187813829" },
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
    "Chiedi ai Servizi sociali di Bonassola (0187 813829) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
bonassola.percorsoTerritorio = percorsoAsl5(bonassola.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
bonassola.percorsoTerritorio = { ...bonassola.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
