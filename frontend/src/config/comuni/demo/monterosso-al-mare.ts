import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Monterosso al Mare (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Il numero 0187 802233 è scritto nella pagina del Comune per l'ufficio, ma è lo stesso numero di Levanto (capofila dell'ambito): la pagina non dice se è una linea propria. Il giorno di ricevimento (venerdì) viene dalla versione del 30/07/2026 della pagina.
// Da verificare con l'ente: telefono dell'ufficio di Monterosso, associazioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const monterossoAlMare: ComuneConfig = {
  slug: "monterosso-al-mare",
  tipo: "comune",
  nome: "Comune di Monterosso al Mare",
  nomeBreve: "Monterosso al Mare",
  delEnte: "del Comune di Monterosso al Mare",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Ufficio Assistente sociale",
  responsabile: "Ufficio Assistente sociale",
  indirizzo: "Piazza Garibaldi 35, Monterosso al Mare (SP)",
  telefono: "0187 802233",
  email: "protocollo@comune.monterosso.sp.it",
  pec: "protocollo@pec.comune.monterosso.sp.it",
  orari: "Venerdì 9:00–12:00 su prenotazione",
  sitoWeb: "https://www.comune.monterosso.sp.it/amministrazione/uffici/ufficio_20.html",

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
      title: "Ufficio Assistente sociale – Monterosso al Mare",
      subtitle:
        "Piazza Garibaldi 35 · Tel. 0187 802233 · venerdì 9:00–12:00 su prenotazione",
      action: { type: "tel", value: "0187802233" },
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
    "Chiedi all'Ufficio Assistente sociale di Monterosso al Mare (0187 802233) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
monterossoAlMare.percorsoTerritorio = percorsoAsl5(monterossoAlMare.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
monterossoAlMare.percorsoTerritorio = { ...monterossoAlMare.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
