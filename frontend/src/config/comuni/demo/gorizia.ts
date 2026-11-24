import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Gorizia (GO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Verificato solo il sito del Comune (link ufficiale). Home del sito del Comune: la pagina dei servizi sociali va cercata e confermata (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// 24/11/2026: recapiti del Servizio Sociale dei Comuni (telefono, email, sede) dalla firma della risposta ufficiale del 23/11/2026. Da fare: orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const gorizia: ComuneConfig = {
  slug: "gorizia",
  tipo: "comune",
  nome: "Comune di Gorizia",
  nomeBreve: "Gorizia",
  delEnte: "del Comune di Gorizia",
  soggetto: "Il Comune",
  provincia: "GO",
  regione: "Friuli-Venezia Giulia",

  ente: "Servizio Sociale dei Comuni · Ambito Collio–Alto Isonzo (ente gestore: Comune di Gorizia)",
  responsabile: "",
  indirizzo: "Via Baiamonti 22, Gorizia (sede operativa; sede legale Piazza Municipio 1)",
  telefono: "0481 383377",
  email: "info.sociale@comune.gorizia.it",
  pec: "",
  orari: "",
  sitoWeb: "https://www.comune.gorizia.it",

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
      action: { type: "web", value: "https://www.comune.gorizia.it" },
    },
    {
      icon: "medkit-outline",
      title: "ASUGI",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://asugi.sanita.fvg.it" },
    },
    {
      icon: "calendar-outline",
      title: "Contributo caregiver familiari 2026",
      subtitle:
        "Risposta del Servizio Sociale dei Comuni (Ambito Collio–Alto Isonzo) del 23/11/2026: il bando del Fondo caregiver sarà pubblicato entro la fine di dicembre 2026 sui siti dei 15 Comuni dell'Ambito; dopo la pubblicazione si scarica il bando e si seguono le istruzioni per presentare la domanda. Scadenza, requisiti e modulo non sono ancora noti. Informazioni: info.sociale@comune.gorizia.it · Tel. 0481 383377",
      action: { type: "tel", value: "0481383377" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASUGI · Esenzioni ticket",
    url: "https://asugi.sanita.fvg.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
gorizia.percorsoTerritorio = percorso(gorizia.puntiSupporto, [0]);
