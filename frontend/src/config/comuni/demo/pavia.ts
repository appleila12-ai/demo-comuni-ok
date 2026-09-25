import type { ComuneConfig } from "../types";

// Comune di Pavia (PV) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: telefono, orari
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
  responsabile: "Settore Servizi Sociali – Servizio Coordinamento Attività Amministrativa",
  indirizzo: "Via Scopoli 1, 27100 Pavia (PV)",
  telefono: "0382 3991",
  email: "servizisociali@comune.pv.it",
  pec: "protocollo@pec.comune.pavia.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.pavia.it/schede-informative/servizi-promozione-sociale",

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
      subtitle: "Settore Servizi Sociali – Servizio Coordinamento Attività Amministrativa · Via Scopoli 1, 27100 Pavia (PV) · Tel. 0382 3991",
      action: { type: "tel", value: "03823991" },
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
      action: { type: "web", value: "https://www.asst-pavia.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Pavia (0382 3991) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Pavia · Esenzioni ticket",
    url: "https://www.asst-pavia.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
