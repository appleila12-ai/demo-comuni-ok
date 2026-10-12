import type { ComuneConfig } from "../types";

// Comune dell'Aquila (AQ) — VERSIONE DIMOSTRATIVA.
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Contatti presi dalla pagina ufficiale dell'Ufficio del Servizio Sociale Professionale
// (sezione Trasparenza del sito del Comune), ottobre 2026. Da verificare.
// Ufficio specifico (Via Filomusi Guelfi 6/C) e Settore Politiche Sociali e Cultura (Via Rocco
// Carabba 6, tel. 0862 6451, segreteriapolitichesociali@comune.laquila.gov.it, da un avviso
// "Dopo di Noi" del Comune) sono tenuti separati: potrebbero essere sedi diverse.
// ASL 1 Abruzzo Avezzano-Sulmona-L'Aquila confermata da fonti ufficiali.
// Da verificare: quale recapito sia il riferimento per il cittadino, che i recapiti del Settore
// siano ancora attuali, email ordinaria dell'ufficio (sulla pagina compare un indirizzo
// "diritto allo studio"), ambito sociale di riferimento, trasporto sociale.
export const laquila: ComuneConfig = {
  slug: "laquila",
  tipo: "comune",
  nome: "Comune dell'Aquila",
  nomeBreve: "L'Aquila",
  delEnte: "del Comune dell'Aquila",
  soggetto: "Il Comune",
  provincia: "AQ",
  regione: "Abruzzo",

  ente: "Servizio Sociale Professionale",
  responsabile: "Politiche sociali – Comune dell'Aquila",
  indirizzo: "Via Francesco Filomusi Guelfi 6/C, località Villa Gioia, L'Aquila (AQ)",
  telefono: "0862 645529",
  email: "politichesociali.cultura@comune.laquila.postecert.it",
  pec: "politichesociali.cultura@comune.laquila.postecert.it",
  orari: "Lunedì 9:30–13:30 · Mercoledì 15:30–17:30 · Giovedì 9:30–13:30",
  sitoWeb: "https://www.comune.laquila.it",

  logo: null,

  theme: {
    warm: "#91CF8B",
    warmSoft: "#DFF2DD",
    warmDark: "#306E2A",
    cream: "#F3F6F2",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Servizio Sociale Professionale – L'Aquila",
      subtitle: "Via Francesco Filomusi Guelfi 6/C, località Villa Gioia · Tel. 0862 645529 · Lun e gio 9:30–13:30, mer 15:30–17:30",
      action: { type: "tel", value: "0862645529" },
    },
    {
      icon: "business-outline",
      title: "Settore Politiche Sociali e Cultura – L'Aquila",
      subtitle: "Via Rocco Carabba 6, 67100 L'Aquila · Tel. 0862 6451 · segreteriapolitichesociali@comune.laquila.gov.it",
      action: { type: "tel", value: "08626451" },
    },
    {
      icon: "medkit-outline",
      title: "ASL 1 Abruzzo",
      subtitle: "Esenzione ticket per patologia e invalidità, prenotazioni e distretti sanitari",
      action: { type: "web", value: "https://www.asl1abruzzo.it" },
    },
  ],

  trasporto: "Chiedi al Servizio Sociale Professionale dell'Aquila (0862 645529) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie).",

  esenzioneTicket: {
    label: "ASL 1 Abruzzo · Esenzioni ticket",
    url: "https://www.asl1abruzzo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
