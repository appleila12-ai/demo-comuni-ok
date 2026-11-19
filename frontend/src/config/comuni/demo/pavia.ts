import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Pavia (PV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verifica puntuale 17/11/2026: https://www.comune.pavia.it/amministrazione/servizio-coordinamento-interventi-sociali (pagina aggiornata 12/03/2026).
// Ticket: https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/ (aggiornata 11/02/2026; consultata 17/11/2026).
// Restano da verificare: orari del servizio comunale, bonus regionali e comunali/ATS, completezza UI.
export const pavia: ComuneConfig = {
  slug: "pavia",
  tipo: "comune",
  nome: "Comune di Pavia",
  nomeBreve: "Pavia",
  delEnte: "del Comune di Pavia",
  soggetto: "Il Comune",
  provincia: "PV",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Servizio Coordinamento ed Interventi Sociali",
  indirizzo: "Corso Garibaldi 69, 27100 Pavia (PV)",
  telefono: "0382 399546",
  email: "servizisociali@comune.pv.it",
  pec: "protocollo@pec.comune.pavia.it",
  orari: "",
  sitoWeb: "https://www.comune.pavia.it/amministrazione/servizio-coordinamento-interventi-sociali",

  logo: null,

  theme: {
    warm: "#CF8BCF",
    warmSoft: "#F2DDF2",
    warmDark: "#6E2A6E",
    cream: "#F6F2F6",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Pavia",
      subtitle: "Servizio Coordinamento ed Interventi Sociali · Corso Garibaldi 69 · Tel. 0382 399546",
      action: { type: "tel", value: "0382399546" },
    },
    {
      icon: "business-outline",
      title: "Consorzio per i Servizi Sociali del Distretto di Pavia",
      subtitle: "Ufficio di Piano e servizi sociali del distretto di Pavia",
      action: { type: "web", value: "https://www.consorziosocialepavese.it/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Pavia",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Pavia (0382 399546) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Pavia · Esenzioni ticket",
    url: "https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (28/10/2026).
pavia.percorsoTerritorio = percorso(pavia.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
pavia.percorsoTerritorio = { ...pavia.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
