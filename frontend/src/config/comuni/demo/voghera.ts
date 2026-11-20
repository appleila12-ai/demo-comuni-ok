import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";

// Comune di Voghera (PV) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Link ai Servizi Sociali: Argomento "Assistenza sociale" sul sito ufficiale (controllato il 19 ottobre 2026). Link dell'azienda sanitaria controllato sul sito dell'azienda il 19 ottobre 2026.
// 17/11/2026: recapiti e sede da Comune (Ufficio Servizi Sociali, agg. 03/11/2026); orari e telefono da Area adulti e famiglie in difficoltà (agg. 28/04/2026).
// Fonti: https://comune.voghera.pv.it/it/unita_organizzative/ufficio-servizi-sociali
// https://comune.voghera.pv.it/it/unita_organizzative/area-adulti-e-famiglie-in-difficolta
// Da completare: bonus regionali/comunali e ATS, ticket ASST specifico, destinatario Scrivi al Comune, associazioni e avviso visibile.
export const voghera: ComuneConfig = {
  slug: "voghera",
  tipo: "comune",
  nome: "Comune di Voghera",
  nomeBreve: "Voghera",
  delEnte: "del Comune di Voghera",
  soggetto: "Il Comune",
  provincia: "PV",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Fratelli Rosselli 20, Voghera",
  telefono: "0383 336404",
  email: "sociali@comune.voghera.pv.it",
  pec: "protocollo@cert.comune.voghera.pv.it",
  orari: "Lun–Ven 8:30–12:00 (Area adulti e famiglie in difficoltà)",
  sitoWeb: "https://comune.voghera.pv.it/it/unita_organizzative/ufficio-servizi-sociali",

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
      subtitle: "Via F.lli Rosselli 20 · 0383 336404 · Lun–Ven 8:30–12:00",
      action: { type: "tel", value: "0383336404" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Pavia · Esenzioni ticket",
      subtitle: "Viale Repubblica 88 · Lun–Ven 8:10–13:00 · Info 0382 1958050 (13:30–15:00)",
      action: { type: "web", value: "https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASST Pavia · Esenzioni per patologia, malattia rara, invalidità e reddito",
    url: "https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
voghera.percorsoTerritorio = { ...voghera.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
