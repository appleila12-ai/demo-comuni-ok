import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Riomaggiore (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Il numero 0187 760211 è attivo solo il giovedì; la pagina indica anche il telefono di Levanto (0187 802233).
// Da verificare con l'ente: indirizzo esatto dello sportello, associazioni. Il fondo regionale per l'assistenza a domicilio (FRNA) citato sul sito non è inserito: requisiti e importi non trovati.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const riomaggiore: ComuneConfig = {
  slug: "riomaggiore",
  tipo: "comune",
  nome: "Comune di Riomaggiore",
  nomeBreve: "Riomaggiore",
  delEnte: "del Comune di Riomaggiore",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Sportello di cittadinanza",
  responsabile: "Assistente sociale di ambito",
  indirizzo: "",
  telefono: "0187 760211",
  email: "urp@comune.riomaggiore.sp.it",
  pec: "segreteria@pec-comunediriomaggiore.it",
  orari: "Giovedì 11:00–13:00 (telefono solo il giovedì)",
  sitoWeb: "https://www.comune.riomaggiore.sp.it/uffici/sportello-di-cittadinanza/",

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
      title: "Sportello di cittadinanza – Riomaggiore",
      subtitle:
        "Assistente sociale di ambito · giovedì 11:00–13:00 · Tel. 0187 760211 (solo il giovedì) · urp@comune.riomaggiore.sp.it",
      action: { type: "tel", value: "0187760211" },
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
    "Chiedi allo Sportello di cittadinanza di Riomaggiore (0187 760211, solo il giovedì) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
riomaggiore.percorsoTerritorio = percorsoAsl5(riomaggiore.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
riomaggiore.percorsoTerritorio = { ...riomaggiore.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
