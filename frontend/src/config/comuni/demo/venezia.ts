import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Venezia (VE) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Sono verificati solo il sito del Comune e il sito dell'azienda sanitaria. Pagina "Sociale" del sito del Comune, controllata il 13 ottobre 2026.
// 16 ottobre 2026: indirizzo e email del Servizio Disabili e Call Center Unico letti sulla pagina "Servizio Disabili" del Comune (aggiornata l'08/10/2026). Telefono diretto, PEC e orari del servizio non indicati.
// Da fare: telefono diretto e orari del Servizio Disabili; bonus del Comune, associazioni, sport e tempo libero.
export const venezia: ComuneConfig = {
  slug: "venezia",
  tipo: "comune",
  nome: "Comune di Venezia",
  nomeBreve: "Venezia",
  delEnte: "del Comune di Venezia",
  soggetto: "Il Comune",
  provincia: "VE",
  regione: "Veneto",

  ente: "Servizio Disabili",
  responsabile: "",
  indirizzo: "Via Verdi 36, 30170 Mestre (VE)",
  telefono: "041 041",
  email: "serviziodisabili@comune.venezia.it",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.venezia.it/it/content/servizio-disabili",

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
      title: "Call Center Unico del Comune",
      subtitle: "041 041, dalle 08:00 alle 18:00: ti indirizzano al Servizio Disabili",
      action: { type: "tel", value: "041041" },
    },
    {
      icon: "mail-outline",
      title: "Servizio Disabili",
      subtitle: "Via Verdi 36, Mestre · serviziodisabili@comune.venezia.it",
      action: { type: "web", value: "https://www.comune.venezia.it/it/content/servizio-disabili" },
    },
    {
      icon: "medkit-outline",
      title: "ULSS 3 Serenissima",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aulss3.veneto.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ULSS 3 Serenissima · Esenzioni ticket",
    url: "https://www.aulss3.veneto.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passo 2 senza voci: la pagina della Medicina legale non è leggibile o non è stata verificata (28/10/2026); chiesta conferma all'azienda sanitaria.
venezia.percorsoTerritorio = percorso(venezia.puntiSupporto, [0, 1]);
