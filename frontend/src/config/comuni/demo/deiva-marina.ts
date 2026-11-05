import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Deiva Marina (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Da verificare con l'ente: associazioni; requisiti e importi del contributo per il trasporto di studenti con disabilità (delibera 144 del 29/12/2025), non inserito.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const deivaMarina: ComuneConfig = {
  slug: "deiva-marina",
  tipo: "comune",
  nome: "Comune di Deiva Marina",
  nomeBreve: "Deiva Marina",
  delEnte: "del Comune di Deiva Marina",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Sportello di cittadinanza · Assistente sociale",
  responsabile: "Assistente sociale di ambito",
  indirizzo: "Corso Italia 85, Deiva Marina (SP)",
  telefono: "0187 826129",
  email: "riviera.servizisociali@gmail.com",
  pec: "comunedeivamarina@halleycert.it",
  orari: "Lunedì 9:00–12:00 su prenotazione",
  sitoWeb: "https://www.comune.deivamarina.sp.it/amministrazione/uffici/ufficio_11.html",

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
      title: "Sportello di cittadinanza – Deiva Marina",
      subtitle:
        "Assistente sociale · Corso Italia 85 · Tel. 0187 826129 · lunedì 9:00–12:00 su prenotazione · riviera.servizisociali@gmail.com",
      action: { type: "tel", value: "0187826129" },
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
    "Chiedi allo Sportello di cittadinanza di Deiva Marina (0187 826129) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
deivaMarina.percorsoTerritorio = percorsoAsl5(deivaMarina.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
deivaMarina.percorsoTerritorio = { ...deivaMarina.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
