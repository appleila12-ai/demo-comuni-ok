import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Follo (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Follo appartiene all'Ambito Sociale n. 61 (capofila Bolano): la delibera del Consiglio di Calice n. 10 del 29/06/2026 dispone la proroga della convenzione fino alla definizione dei nuovi assetti territoriali (testo integrale non letto): l'ambito non è citato nella scheda.
// Da verificare con l'ente: associazioni; importi e requisiti dei contributi (il contributo trasporto scolastico aveva scadenza 04/07/2026: non inserito).
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const follo: ComuneConfig = {
  slug: "follo",
  tipo: "comune",
  nome: "Comune di Follo",
  nomeBreve: "Follo",
  delEnte: "del Comune di Follo",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Ufficio Assistenti sociali",
  responsabile: "Ufficio Assistenti sociali",
  indirizzo: "Piazza Matteotti 9, Piano di Follo (SP)",
  telefono: "0187 599919",
  email: "servizisociali@comune.follo.sp.it",
  pec: "comunefollo@legalmail.it",
  orari: "Mercoledì 9:00–12:00 accesso libero · lun–sab 8:30–12:30 su prenotazione",
  sitoWeb: "https://www.comune.follo.sp.it/amministrazione/uffici/ufficio_32.html",

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
      title: "Ufficio Assistenti sociali – Follo",
      subtitle:
        "Piazza Matteotti 9, Piano di Follo · Tel. 0187 599919 · mercoledì 9:00–12:00 accesso libero; lun–sab 8:30–12:30 su prenotazione · servizisociali@comune.follo.sp.it",
      action: { type: "tel", value: "0187599919" },
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
    "Chiedi all'Ufficio Assistenti sociali di Follo (0187 599919) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
follo.percorsoTerritorio = percorsoAsl5(follo.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
follo.percorsoTerritorio = { ...follo.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
