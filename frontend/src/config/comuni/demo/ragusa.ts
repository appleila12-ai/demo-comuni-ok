// Recapiti controllati il 17/11/2026. Fonte: https://comune.ragusa.it/en/organizational_unit/settore-07-servizi-alla-persona-politiche-dell-istruzione ; aggiornamento fonte: 13/11/2024.
import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Ragusa (RG) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Argomento "Assistenza sociale" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const ragusa: ComuneConfig = {
  slug: "ragusa",
  tipo: "comune",
  nome: "Comune di Ragusa",
  nomeBreve: "Ragusa",
  delEnte: "del Comune di Ragusa",
  soggetto: "Il Comune",
  provincia: "RG",
  regione: "Sicilia",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "Via Ing. Mario Spadola 56, Ragusa",
  telefono: "0932 676851",
  email: "servizi.sociali@comune.ragusa.it",
  pec: "",
  orari: "Altro telefono del Settore Servizi alla persona: 0932 676852. Orari non indicati nella pagina consultata.",
  sitoWeb: "https://comune.ragusa.it/en/organizational_unit/settore-07-servizi-alla-persona-politiche-dell-istruzione",

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
      action: { type: "web", value: "https://comune.ragusa.it/en/organizational_unit/settore-07-servizi-alla-persona-politiche-dell-istruzione" },
    },
    {
      icon: "medkit-outline",
      title: "ASP Ragusa",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.asp.rg.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASP Ragusa · Esenzioni ticket",
    url: "https://www.asp.rg.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: servizi sociali già in scheda con fonte (lotto 18, 02/11/2026). Passi 1-3 vuoti: nessun recapito verificato.
ragusa.percorsoTerritorio = percorso(ragusa.puntiSupporto, [0]);
