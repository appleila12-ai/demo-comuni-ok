import type { ComuneConfig } from "../types";

// Comune di Bologna (BO) — VERSIONE DIMOSTRATIVA (aggiornata il 14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune di Bologna non si apre in automatico e la tabella degli sportelli sociali nei dati aperti non si è caricata:
// indirizzi, telefoni e orari degli sportelli NON sono verificati. È confermato solo (dalla descrizione del dataset del Comune) che gli Sportelli Sociali
// sono la porta di accesso ai servizi sociali e si trovano nei sei Quartieri della città.
// 16 ottobre 2026: numero unico e email unica degli Sportelli sociali, letti nella notizia del Comune del 06/03/2019 (testo incollato dalla dott.ssa Baudone). La notizia è del 2019 e non risulta aggiornata: da riconfermare con il Comune prima di un uso reale.
// Da fare: elenco degli Sportelli Sociali per Quartiere (indirizzo, telefono, orari), bonus del Comune, associazioni, sport e tempo libero.
export const bologna: ComuneConfig = {
  slug: "bologna",
  tipo: "comune",
  nome: "Comune di Bologna",
  nomeBreve: "Bologna",
  delEnte: "del Comune di Bologna",
  soggetto: "Il Comune",
  provincia: "BO",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Maggiore 6, 40124 Bologna (sede del Comune)",
  telefono: "051 219 7878",
  email: "sportellosocialebologna@comune.bologna.it",
  pec: "",
  orari: "Numero unico Sportelli sociali: lunedì-venerdì 9-13; lunedì e venerdì anche 13.30-16; martedì e giovedì anche 13.30-17.30 (dato del 2019)",
  sitoWeb: "https://www.comune.bologna.it",

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
      title: "Numero unico Sportelli sociali",
      subtitle: "051 219 7878 · per disabili, anziani, famiglie con minori, adulti in difficoltà (dato del 2019, da riconfermare)",
      action: { type: "tel", value: "0512197878" },
    },
    {
      icon: "list-outline",
      title: "Sportelli Sociali per Quartiere",
      subtitle: "Indirizzi e orari nell'elenco dei dati aperti del Comune",
      action: { type: "web", value: "https://opendata.comune.bologna.it/explore/dataset/sportelli-sociali/table/" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL Bologna",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.bologna.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL Bologna · Esenzioni ticket",
    url: "https://www.ausl.bologna.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
