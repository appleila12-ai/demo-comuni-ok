import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Corchiano (VT) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (9 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fa parte del distretto sociale VT 5, capofila Consorzio Tineri (Regione Lazio, "Comuni per distretto"): i recapiti del servizio sociale sono quelli del Consorzio (sito del Consorzio Tineri e suoi avvisi, 09/11/2026).
// PEC del protocollo dall'elenco IPA dei domicili digitali (19/10/2026), usata solo per "Scrivi al tuo Comune".
// Non pubblicati perché non verificati: recapiti e orari dei Servizi Sociali del Comune, bonus del Comune, associazioni locali.
// Associazioni e sport: compaiono quelle della provincia di Viterbo e del Lazio.
export const corchiano: ComuneConfig = {
  slug: "corchiano",
  tipo: "comune",
  nome: "Comune di Corchiano",
  nomeBreve: "Corchiano",
  delEnte: "del Comune di Corchiano",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Consorzio Tineri – Distretto sociale VT 5",
  responsabile: "",
  indirizzo: "Piazza dello Spedale 3, 01036 Nepi (VT)",
  telefono: "0761 559006",
  email: "consorziotineri@gmail.com",
  pec: "consorziotineri@legalmail.it",
  orari: "",
  sitoWeb: "https://consorziotineri.it",

  logo: null,

  theme: {
    warm: "#B8A4CF",
    warmSoft: "#EFE9F6",
    warmDark: "#5A4682",
    cream: "#F7F4FA",
  },

  puntiSupporto: [
    {
      icon: "business-outline",
      title: "Consorzio Tineri – Distretto sociale VT 5",
      subtitle: "Il distretto di cui fa parte Corchiano (con Calcata, Castel Sant'Elia, Civita Castellana, Corchiano, Fabrica di Roma, Faleria, Gallese, Nepi, Vallerano, Vasanello e Vignanello) · Piazza dello Spedale 3, Nepi · Tel. 0761 559006",
      action: { type: "tel", value: "0761559006" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del tuo Comune o al Consorzio Tineri (0761 559006) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: Consorzio Tineri con fonte (09/11/2026). Passi 1-3 vuoti: nessun recapito verificato.
corchiano.percorsoTerritorio = percorso(corchiano.puntiSupporto, [0]);
