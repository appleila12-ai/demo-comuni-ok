import type { ComuneConfig } from "../types";

// Comune di Como (CO) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Dati presi dal sito ufficiale del Comune/ente (settembre 2026), da verificare.
// Da verificare: telefono, email, orari
export const como: ComuneConfig = {
  slug: "como",
  tipo: "comune",
  nome: "Comune di Como",
  nomeBreve: "Como",
  delEnte: "del Comune di Como",
  soggetto: "Il Comune",
  provincia: "CO",
  regione: "Lombardia",

  ente: "Servizi Sociali",
  responsabile: "Settore Servizi Sociali (Politiche Sociali)",
  indirizzo: "Via Vittorio Emanuele II 93, 22100 Como (CO)",
  telefono: "031 2521",
  email: "protocollo@comune.pec.como.it",
  pec: "protocollo@comune.pec.como.it",
  orari: "Orari: vedi il sito del Comune o telefona",
  sitoWeb: "https://www.comune.como.it/amministrazione/uffici/Servizi-Sociali/",

  logo: null,

  theme: {
    warm: "#CFA78B",
    warmSoft: "#F2E6DD",
    warmDark: "#6E462A",
    cream: "#F6F4F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizi Sociali – Como",
      subtitle: "Settore Servizi Sociali (Politiche Sociali) · Via Vittorio Emanuele II 93, 22100 Como (CO) · Tel. 031 2521",
      action: { type: "tel", value: "0312521" },
    },
    {
      icon: "business-outline",
      title: "Punto Unico di Accesso (PUA)",
      subtitle: "Accesso ai servizi per anziani, persone con disabilità e famiglie",
      action: { type: "web", value: "https://www.comune.como.it/servizi/Punto-unico-a-Como-di-accesso-ai-servizi-per-anziani-persone-con-disabilita-e-nuclei-familiari/" },
    },
    {
      icon: "medkit-outline",
      title: "ASST Lariana",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asst-lariana.it" },
    },
  ],

  trasporto: "Chiedi ai Servizi Sociali di Como (031 2521) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASST Lariana · Esenzioni ticket",
    url: "https://www.asst-lariana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
