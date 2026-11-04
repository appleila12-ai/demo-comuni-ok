import type { ComuneConfig } from "../types";
import { INPS_PRIMA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Duino Aurisina (TS) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (4 novembre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte verificata: pagina "Sistema sociale e sanitario" della Regione Friuli-Venezia Giulia, che indica
// l'ambito "Carso Giuliano" (Duino Aurisina, Monrupino, Muggia, San Dorligo della Valle, Sgonico),
// con il Comune di Muggia come ente gestore del Servizio sociale dei Comuni.
// Nessun recapito del Comune (telefono, email, PEC, orari, sito) è stato verificato: non ne è stato inserito nessuno.
// Da verificare con l'ente: sito e recapiti dei Servizi sociali di Duino Aurisina, email generica per "Scrivi al tuo Comune",
// misure e bandi comunali, associazioni locali.
export const duinoAurisina: ComuneConfig = {
  slug: "duino-aurisina",
  tipo: "comune",
  nome: "Comune di Duino Aurisina",
  nomeBreve: "Duino Aurisina",
  delEnte: "del Comune di Duino Aurisina",
  soggetto: "Il Comune",
  provincia: "TS",
  regione: "Friuli-Venezia Giulia",

  ente: "Servizio Sociale dei Comuni · Ambito Carso Giuliano",
  responsabile: "",
  indirizzo: "",
  telefono: "",
  email: "",
  orari: "",
  sitoWeb: "https://www.comune.muggia.ts.it/it/amministrazione-3414/aree-amministrative-49897/ambito-carso-giuliano-servizio-sociale-dei-comuni-64677",

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
      title: "Servizio Sociale dei Comuni · Ambito Carso Giuliano",
      subtitle:
        "Servizi sociali di Duino Aurisina, Monrupino, Muggia, San Dorligo della Valle e Sgonico, gestiti dal Comune di Muggia: recapiti e orari sono sul sito dell'ambito",
      action: {
        type: "web",
        value: "https://www.comune.muggia.ts.it/it/amministrazione-3414/aree-amministrative-49897/ambito-carso-giuliano-servizio-sociale-dei-comuni-64677",
      },
    },
    {
      icon: "medkit-outline",
      title: "ASUGI",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://asugi.sanita.fvg.it" },
    },
  ],

  trasporto:
    "Chiedi al Servizio Sociale dei Comuni dell'ambito quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASUGI · Esenzioni ticket",
    url: "https://asugi.sanita.fvg.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (04/11/2026).
duinoAurisina.percorsoTerritorio = percorso(duinoAurisina.puntiSupporto, [0]);
duinoAurisina.percorsoTerritorio = { ...duinoAurisina.percorsoTerritorio, 1: [INPS_PRIMA_FASE] };
