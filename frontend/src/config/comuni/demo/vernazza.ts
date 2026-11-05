import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Vernazza (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Da verificare con l'ente: email sociale dedicata, orari locali, associazioni.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const vernazza: ComuneConfig = {
  slug: "vernazza",
  tipo: "comune",
  nome: "Comune di Vernazza",
  nomeBreve: "Vernazza",
  delEnte: "del Comune di Vernazza",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Ufficio Servizi sociali",
  responsabile: "Ufficio Servizi sociali",
  indirizzo: "Via San Francesco 56, Vernazza (SP)",
  telefono: "0187 821247",
  email: "protocollo@comune.vernazza.sp.it",
  pec: "protocollo.comune.vernazza@pec.it",
  orari: "",
  sitoWeb: "https://www.comune.vernazza.sp.it/",

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
      title: "Servizi sociali – Vernazza",
      subtitle:
        "Via San Francesco 56 · Tel. 0187 821247 (interno 6)",
      action: { type: "tel", value: "0187821247" },
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
    "Chiedi ai Servizi sociali di Vernazza (0187 821247) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
vernazza.percorsoTerritorio = percorsoAsl5(vernazza.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
vernazza.percorsoTerritorio = { ...vernazza.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
