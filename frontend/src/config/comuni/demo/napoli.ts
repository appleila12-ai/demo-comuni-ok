import type { ComuneConfig } from "../types";

// Comune di Napoli (NA) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune e del CIP Campania non si aprono in automatico. I recapiti dei Centri Servizi Sociali Territoriali (CSST)
// sono stati incollati da Ilaria il 13 ottobre 2026 da un elenco che cita "fonti comunali" senza indicare la fonte di ogni riga: DA VERIFICARE.
// Mancano le Municipalità 4, 5, 6, 7 e 9. La Municipalità 10 non ha l'indirizzo. Email ordinarie e PEC da confermare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero.
export const napoli: ComuneConfig = {
  slug: "napoli",
  tipo: "comune",
  nome: "Comune di Napoli",
  nomeBreve: "Napoli",
  delEnte: "del Comune di Napoli",
  soggetto: "Il Comune",
  provincia: "NA",
  regione: "Campania",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.napoli.it",

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
      title: "Centri Servizi Sociali Territoriali",
      subtitle: "Primo ascolto sociale: ce n'è uno per ogni Municipalità. Qui sotto trovi quelli di cui abbiamo i recapiti (da confermare); per le altre Municipalità guarda gli indirizzi sul sito del Comune",
      action: { type: "web", value: "https://www.comune.napoli.it/articolo_tematico/welfare-e-pari-opportunita/segretariato-sociale-e-servizio-sociale/indirizzi-centri-servizi-sociali-territoriali/" },
    },
    {
      icon: "people-outline",
      title: "Municipalità 1 (Chiaia, Posillipo, San Ferdinando)",
      subtitle: "Centro Servizi Sociali: piazza Santa Maria degli Angeli a Pizzofalcone 1",
      action: { type: "tel", value: "0817951761" },
    },
    {
      icon: "people-outline",
      title: "Municipalità 2 (Avvocata, Montecalvario, Mercato, Pendino, Porto, San Giuseppe)",
      subtitle: "Centro Servizi Sociali: piazza Dante 43, tel. 081 795 0260/61/62. Per Mercato e Pendino anche corso Garibaldi 394, tel. 081 795 0825",
      action: { type: "tel", value: "0817950260" },
    },
    {
      icon: "people-outline",
      title: "Municipalità 3 (Stella, San Carlo all'Arena)",
      subtitle: "Centro Servizi Sociali: via Santi Giovanni e Paolo 125, tel. 081 795 2560/61/62. Email: css.giovanniepaolo@comune.napoli.it",
      action: { type: "tel", value: "0817952560" },
    },
    {
      icon: "people-outline",
      title: "Municipalità 8 (Scampia)",
      subtitle: "Centro Servizi Sociali: largo della Cittadinanza Attiva 15, tel. 081 795 2160/61. Email: css.scampia@comune.napoli.it",
      action: { type: "tel", value: "0817952160" },
    },
    {
      icon: "people-outline",
      title: "Municipalità 10 (Bagnoli, Fuorigrotta)",
      subtitle: "Centro Servizi Sociali, sede da confermare, tel. 081 795 0763/62/60/68. Email: css.bagnoli.fuorigrotta@comune.napoli.it",
      action: { type: "tel", value: "0817950763" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Napoli 1 Centro",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslnapoli1centro.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Napoli 1 Centro · Esenzioni ticket",
    url: "https://www.aslnapoli1centro.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
