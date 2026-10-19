import type { ComuneConfig } from "../types";

// Comune di Castelfranco Emilia (MO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (19 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Link ai Servizi Sociali: Pagina "Sportello Sociale" sul sito ufficiale (controllato il 19 ottobre 2026). Link dell'azienda sanitaria controllato sul sito dell'azienda il 19 ottobre 2026.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const castelfrancoEmilia: ComuneConfig = {
  slug: "castelfranco-emilia",
  tipo: "comune",
  nome: "Comune di Castelfranco Emilia",
  nomeBreve: "Castelfranco Emilia",
  delEnte: "del Comune di Castelfranco Emilia",
  soggetto: "Il Comune",
  provincia: "MO",
  regione: "Emilia-Romagna",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.castelfranco-emilia.mo.it",

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
      action: { type: "web", value: "http://www.comune.castelfranco-emilia.mo.it/servizi/Menu/dinamica.aspx?idSezione=616&idArea=17026&idCat=17048&ID=22790&TipoElemento=pagina" },
    },
    {
      icon: "medkit-outline",
      title: "AUSL Modena",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.ausl.mo.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "AUSL Modena · Esenzioni ticket",
    url: "https://www.ausl.mo.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
