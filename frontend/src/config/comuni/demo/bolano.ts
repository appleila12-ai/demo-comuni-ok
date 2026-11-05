import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorsoAsl5 } from "../percorso";

// Comune di Bolano (SP) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Comune e dell'ambito sociale, indicate da Ilaria dopo una ricerca del 04/11/2026 (non riletta direttamente): ASL 5, siti dei Comuni, Prefettura della Spezia.
// Bolano è capofila dell'Ambito Sociale n. 61: la convenzione trovata indica una proroga al 30/06/2026 e non una conferma successiva, quindi l'ambito non è citato nella scheda.
// Da verificare con l'ente: orari dell'ufficio, associazioni, requisiti e importi dei contributi.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const bolano: ComuneConfig = {
  slug: "bolano",
  tipo: "comune",
  nome: "Comune di Bolano",
  nomeBreve: "Bolano",
  delEnte: "del Comune di Bolano",
  soggetto: "Il Comune",
  provincia: "SP",
  regione: "Liguria",

  ente: "Ufficio Servizi sociali",
  responsabile: "Ufficio Servizi sociali",
  indirizzo: "Delegazione di Ceparana, Via Verdi 6, Bolano (SP)",
  telefono: "0187 941726",
  email: "servizisociali@comune.bolano.sp.it",
  pec: "comune.bolano@legalmail.it",
  orari: "",
  sitoWeb: "https://www.comune.bolano.sp.it/index.php/it/unita_organizzative/ufficio-servizi-sociali",

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
      title: "Ufficio Servizi sociali – Bolano",
      subtitle:
        "Assistente sociale · Delegazione di Ceparana, Via Verdi 6 · Tel. 0187 941726 · servizisociali@comune.bolano.sp.it",
      action: { type: "tel", value: "0187941726" },
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
    "Chiedi all'Ufficio Servizi sociali di Bolano (0187 941726) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL5 Spezzino · Esenzioni ticket",
    url: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte (ASL 5 verificata il 28/10/2026).
bolano.percorsoTerritorio = percorsoAsl5(bolano.puntiSupporto, [0]);

// Passo 1: provincia nella terza fase (dal 1° marzo 2026) della sperimentazione INPS.
bolano.percorsoTerritorio = { ...bolano.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
