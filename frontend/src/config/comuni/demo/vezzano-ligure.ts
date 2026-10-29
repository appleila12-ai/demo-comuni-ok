import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorsoAsl5 } from "../percorso";

// Comune di Vezzano Ligure (SP) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Recapiti: solo quelli letti sul sito del Comune il 21/10/2026; il resto è stato tolto perché non verificato.
// Recapiti e orari: pagina "Ufficio Servizi Sociali" del sito del Comune (aggiornata il 05/11/2025; orari dal 15/01/2025), letta il 22/10/2026.
// Da fare: associazioni, sport e tempo libero.
export const vezzanoLigure: ComuneConfig = {
  slug: "vezzano-ligure",
  tipo: "comune",
  nome: "Comune di Vezzano Ligure",
  nomeBreve: "Vezzano Ligure",
  delEnte: "del Comune di Vezzano Ligure",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Goito 2, Vezzano Ligure (SP)",
  telefono: "0187 982520",
  email: "servizisociali@comune.vezzanoligure.sp.it",
  pec: "protocollo.comunevezzanoligure@pec.it",
  orari: "Lunedì, mercoledì e giovedì 8:30–12:30, su prenotazione",
  sitoWeb: "https://www.comune.vezzanoligure.sp.it/",

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
      title: "Servizi Sociali del Comune",
      subtitle: "Ufficio Servizi Sociali · Via Goito 2 · Tel. 0187 982520 · lunedì, mercoledì e giovedì 8:30–12:30 su prenotazione",
      action: { type: "web", value: "https://www.comune.vezzanoligure.sp.it/" },
    },
    {
      icon: "call-outline",
      title: "Distretto Sociosanitario 19 \"Val di Magra\"",
      subtitle: "Distretto di Sarzana, Ameglia, Arcola, Castelnuovo Magra, Luni, Santo Stefano di Magra e Vezzano Ligure · Tel. 0187 614507 / 0187 604933",
      action: { type: "tel", value: "0187614507" },
    },
    {
      icon: "medkit-outline",
      title: "ASL5 Spezzino",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni.aspx" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
vezzanoLigure.percorsoTerritorio = percorsoAsl5(vezzanoLigure.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
vezzanoLigure.percorsoTerritorio = { ...vezzanoLigure.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
