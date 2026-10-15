import type { ComuneConfig } from "../types";

// Comune di Bari (BA) — VERSIONE DIMOSTRATIVA (aggiornata il 14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune di Bari non si apre in automatico: recapiti e orari dei Servizi Sociali del Comune NON sono verificati.
// Fonte dei dati inseriti: pagina informativa della Porta Unica di Accesso (PUA) dell'ASL Bari su sanita.puglia.it, senza data di aggiornamento,
// che indica due sedi per l'area di Bari ma non dice a quale Municipio o Distretto corrispondono: DA CONFERMARE.
// Da fare: recapiti dei Servizi Sociali e del Segretariato Sociale per Municipio dal sito del Comune, bonus del Comune, associazioni, sport e tempo libero.
export const bari: ComuneConfig = {
  slug: "bari",
  tipo: "comune",
  nome: "Comune di Bari",
  nomeBreve: "Bari",
  delEnte: "del Comune di Bari",
  soggetto: "Il Comune",
  provincia: "BA",
  regione: "Puglia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.bari.it/argomenti/servizi-sociali-e-welfare",

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
      action: { type: "web", value: "https://www.comune.bari.it/argomenti/servizi-sociali-e-welfare" },
    },
    {
      icon: "business-outline",
      title: "Porta Unica di Accesso (PUA), ASL Bari",
      subtitle: "Ingresso unico per chiedere servizi sanitari e sociosanitari del distretto (assistenza domiciliare, centri diurni e residenziali, trasporto verso centri riabilitativi) a chi ne ha diritto. Sedi indicate per l'area di Bari: via Caduti di Via Fani 25 (lun, mer, gio 9:00–12:00; mar 15:00–17:00) e via Giulio Petroni 47 (mar, mer, ven 9:00–12:00; gio 15:00–17:00). Telefono dal lunedì al venerdì: 080 5842798 (12:00–13:00). Email: pua.bari@asl.bari.it. Orari da confermare",
      action: { type: "tel", value: "0805842798" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Bari",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.sanita.puglia.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Bari · Esenzioni ticket",
    url: "https://www.sanita.puglia.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
