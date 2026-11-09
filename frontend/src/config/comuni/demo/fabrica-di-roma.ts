import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Fabrica di Roma (VT) — VERSIONE DIMOSTRATIVA (aggiornata il 9 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina "Ufficio Servizi Sociali" del sito del Comune, letta il 27/10/2026 e il 09/11/2026 (la pagina è aggiornata all'11/04/2024: ricontrollare con l'ente).
// Orari non riportati dalla pagina: non pubblicati.
// Distretto: Fabrica di Roma è nel distretto socio-sanitario VT 5, capofila Consorzio Tineri
// (Regione Lazio, elenco "Comuni per distretto"; e avvisi del Consorzio Tineri, che elencano i Comuni dell'ambito, Fabrica di Roma compresa).
// Recapito del Consorzio (tel. 0761 559006) ripreso dagli avvisi del Consorzio Tineri (vita indipendente 2024; caregiver familiare, DGR 711/2025).
// Non pubblicati perché non verificati: orari, indirizzo del PUA, bonus del Comune, associazioni locali, sport e tempo libero del Comune.
// Associazioni e sport: compaiono quelle della provincia di Viterbo e del Lazio (APS Gazebo, CIP Lazio, Special Olympics Lazio).
// Coordinate del Comune (42,3333 N; 12,2833 E) da Wikipedia, arrotondate: bastano per il raggio di 30 km.
// Da fare con l'ente: orari, PUA del distretto, bonus del Comune, associazioni locali.
export const fabricaDiRoma: ComuneConfig = {
  slug: "fabrica-di-roma",
  tipo: "comune",
  nome: "Comune di Fabrica di Roma",
  nomeBreve: "Fabrica di Roma",
  delEnte: "del Comune di Fabrica di Roma",
  soggetto: "Il Comune",
  provincia: "VT",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Dott.ssa Paola Alessi",
  indirizzo: "Via A. Cencelli 20, 01034 Fabrica di Roma (VT)",
  telefono: "0761 567530",
  email: "serv.socialifabrica@libero.it",
  pec: "servizisociali.fabricadiroma@pec.it",
  orari: "",
  sitoWeb: "https://www.comune.fabricadiroma.vt.it/home/amministrazione/uffici/Ufficio-6.html",

  logo: null,

  theme: {
    warm: "#88AFC7",
    warmSoft: "#E2EDF4",
    warmDark: "#2F5874",
    cream: "#F3F6F8",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Fabrica di Roma",
      subtitle: "Via A. Cencelli 20 · Tel. 0761 567530 · Centralino del Comune 0761 569001 · Gli orari si chiedono per telefono",
      action: { type: "tel", value: "0761567530" },
    },
    {
      icon: "business-outline",
      title: "Consorzio Tineri – Distretto sociale VT 5",
      subtitle: "Il distretto di cui fa parte Fabrica di Roma (con Calcata, Castel Sant'Elia, Civita Castellana, Corchiano, Faleria, Gallese, Nepi, Vallerano, Vasanello e Vignanello) · Tel. 0761 559006 · Gli avvisi del distretto si possono consegnare anche ai Servizi Sociali del tuo Comune",
      action: { type: "tel", value: "0761559006" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Viterbo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asl.vt.it/esenzioni-ticket" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali del Comune (0761 567530) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL Viterbo · Esenzioni ticket",
    url: "https://asl.vt.it/esenzioni-ticket",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: Servizi Sociali del Comune e Consorzio Tineri (distretto VT 5), entrambi con fonte (09/11/2026). Passi 1-3 vuoti: nessun recapito verificato.
fabricaDiRoma.percorsoTerritorio = percorso(fabricaDiRoma.puntiSupporto, [0, 1]);
