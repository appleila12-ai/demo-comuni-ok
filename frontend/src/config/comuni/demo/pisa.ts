import type { ComuneConfig } from "../types";

// Comune di Pisa (PI) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Home del sito del Comune, controllata il 14 ottobre 2026: la pagina dei servizi sociali va cercata e confermata.
// 26/10/2026: email dell'Ufficio Sociale (affari.sociali@comune.pisa.it, dati forniti da Ilaria dalla pagina del Comune).
// Indirizzo (Palazzo Gambacorti) dalle pagine del Comune, dati forniti da Ilaria il 26/10/2026. Orari di ricevimento non confermati: non pubblicati (quelli URP non valgono per l'Ufficio Sociale).
// 26/10/2026: numero unico 050 7062 (Contact Center del Comune, comunicato del Comune del 10/07/2025): non è il numero diretto dei Servizi Sociali.
// Da fare: orari, associazioni (Albo comunale della disabilità, file "Elenco Associazioni 2026"), sport e tempo libero.
export const pisa: ComuneConfig = {
  slug: "pisa",
  tipo: "comune",
  nome: "Comune di Pisa",
  nomeBreve: "Pisa",
  delEnte: "del Comune di Pisa",
  soggetto: "Il Comune",
  provincia: "PI",
  regione: "Toscana",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Palazzo Gambacorti, via degli Uffizi 1, 56100 Pisa (PI)",
  telefono: "050 7062",
  email: "affari.sociali@comune.pisa.it",
  pec: "",
  orari: "Contact Center del Comune (numero unico, non è il numero diretto dei Servizi Sociali): lunedì–venerdì 9:00–13:15 e 14:15–17:00",
  sitoWeb: "https://www.comune.pisa.it",

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
      subtitle: "Primo ascolto sociale: recapiti e orari sono sul sito del Comune",
      action: { type: "web", value: "https://www.comune.pisa.it" },
    },
    {
      icon: "medkit-outline",
      title: "Azienda USL Toscana Nord Ovest",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.uslnordovest.toscana.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "Azienda USL Toscana Nord Ovest · Esenzioni ticket",
    url: "https://www.uslnordovest.toscana.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
