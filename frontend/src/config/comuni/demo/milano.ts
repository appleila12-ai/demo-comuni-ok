import type { ComuneConfig } from "../types";

// Comune di Milano (MI) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune non è leggibile in automatico (errore 403): i recapiti dei Servizi Sociali
// vanno confermati. Fonti: firma della Segreteria dell'Assessorato Welfare e Salute (8 ottobre 2026),
// pagina ufficiale del Servizio Sociale Professionale Territoriale (SSPT), ATS Milano.
// Da verificare: telefono dei Servizi Sociali (qui il contact center del Comune), email, orari, sedi per Municipio.
export const milano: ComuneConfig = {
  slug: "milano",
  tipo: "comune",
  nome: "Comune di Milano",
  nomeBreve: "Milano",
  delEnte: "del Comune di Milano",
  soggetto: "Il Comune",
  provincia: "MI",
  regione: "Lombardia",

  ente: "Servizi Sociali – Direzione Welfare e Salute",
  responsabile: "Direzione Welfare e Salute",
  indirizzo: "Via Sile 8, 20139 Milano (MI)",
  telefono: "02 02 02",
  email: "",
  pec: "",
  orari: "Le sedi e gli orari cambiano per Municipio: guarda il sito del Comune",
  sitoWeb: "https://www.comune.milano.it/aree-tematiche/servizi-sociali/servizi-sociali-di-base/servizio-sociale-professionale-territoriale-sspt",

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
      title: "Servizio Sociale Professionale Territoriale (SSPT)",
      subtitle: "Primo ascolto sociale: trovi la sede del tuo Municipio sul sito del Comune. Per informazioni generali: contact center del Comune, tel. 02 02 02",
      action: {
        type: "web",
        value: "https://www.comune.milano.it/aree-tematiche/servizi-sociali/servizi-sociali-di-base/servizio-sociale-professionale-territoriale-sspt",
      },
    },
    {
      icon: "medkit-outline",
      title: "ATS Città Metropolitana di Milano",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ats-milano.it" },
    },
  ],

  trasporto:
    "Chiedi al Servizio Sociale del tuo Municipio quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ATS Milano · Esenzioni ticket",
    url: "https://www.ats-milano.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
