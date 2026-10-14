import type { ComuneConfig } from "../types";

// Comune di Carbonia (SU) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina Servizi Sociali del Comune letta il 14 ottobre 2026: sede, telefono e orari del Segretariato sociale. Il link dell'azienda sanitaria è da verificare.
// Da fare: bonus del Comune, associazioni, sport e tempo libero; controllare l'azienda sanitaria.
export const carbonia: ComuneConfig = {
  slug: "carbonia",
  tipo: "comune",
  nome: "Comune di Carbonia",
  nomeBreve: "Carbonia",
  delEnte: "del Comune di Carbonia",
  soggetto: "Il Comune",
  provincia: "SU",
  regione: "Sardegna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via XVIII Dicembre (ex Tribunale), Carbonia",
  telefono: "335 7433557",
  email: "",
  pec: "",
  orari: "Segretariato sociale: dal lunedì al venerdì dalle 9:00 alle 12:00. Per fissare un appuntamento con le assistenti sociali: portineria 0781 694420",
  sitoWeb: "https://www.comune.carbonia.su.it/amministrazione/unita_organizzativa/servizi-sociali/",

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
      subtitle: "Primo ascolto sociale: recapiti e orari in questa scheda e sul sito del Comune",
      action: { type: "tel", value: "3357433557" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Sulcis",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslsulcis.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Sulcis · Esenzioni ticket",
    url: "https://www.aslsulcis.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
