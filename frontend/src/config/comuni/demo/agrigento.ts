// Recapiti controllati il 17/11/2026. Fonte: https://comune.agrigento.it/amministrazione/unita_organizzativa/ii-settore-servizi-alla-persona/ ; aggiornamento fonte: 11/06/2026.
import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Agrigento (AG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Pagina del Distretto socio sanitario D1 sul sito del Comune, controllata il 14 ottobre 2026.
// Recapiti Servizi Sociali (15/11/2026): pagine «Servizi Sociali e Distrettuali» (aggiornata il 06/02/2026) e «II Settore Servizi alla Persona» (11/06/2026) del sito del Comune; email generica del Settore; email personale e orari non presenti, non inseriti.
// Da fare: orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const agrigento: ComuneConfig = {
  slug: "agrigento",
  tipo: "comune",
  nome: "Comune di Agrigento",
  nomeBreve: "Agrigento",
  delEnte: "del Comune di Agrigento",
  soggetto: "Il Comune",
  provincia: "AG",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Piazza Pirandello 35",
  telefono: "0922 590111",
  email: "posta.settore2@comune.agrigento.it",
  pec: "",
  orari: "Email del II Settore Servizi alla Persona. Il telefono principale è il centralino comunale; recapito telefonico diretto dei Servizi Sociali non verificato.",
  sitoWeb: "https://comune.agrigento.it/amministrazione/unita_organizzativa/ii-settore-servizi-alla-persona/",

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
      subtitle: "Recapiti istituzionali nella scheda; controllati il 17/11/2026",
      action: { type: "web", value: "https://comune.agrigento.it/amministrazione/unita_organizzativa/ii-settore-servizi-alla-persona/" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Agrigento",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aspag.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Agrigento · Esenzioni ticket",
    url: "https://www.aspag.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
agrigento.percorsoTerritorio = percorso(agrigento.puntiSupporto, [0]);
