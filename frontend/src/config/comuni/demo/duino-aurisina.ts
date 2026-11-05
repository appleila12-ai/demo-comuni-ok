import type { ComuneConfig } from "../types";
import { INPS_PRIMA_FASE, percorso } from "../percorso";

// Comune di Duino Aurisina (TS) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagina 'Sistema sociale e sanitario' della Regione FVG (ambito Carso Giuliano, ente gestore il Comune di Muggia), pagine del Servizio Sociale dei Comuni e prospetto sportelli del 02/04/2025; ricerca indicata da Ilaria il 04/11/2026 (non riletta direttamente).
// Aggiornamento 05/11/2026: recapiti del Servizio sociale (prima la scheda non ne aveva). Giorni e sedi vengono dal prospetto del 02/04/2025: da riconfermare. I nomi degli assistenti (Carta dei servizi 2023) e i numeri 'area disabilità' non sono inseriti perché datati.
// Da verificare con l'ente: associazioni locali, importi e condizioni aggiornate dei benefici d'ambito, procedura per domotica e digitalizzazione (apertura attuale).
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
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
  responsabile: "Servizio sociale professionale",
  indirizzo: "Borgo San Mauro 124, Sistiana (Duino Aurisina, TS)",
  telefono: "040 2017389",
  email: "serviziosociale@comune.duino-aurisina.ts.it",
  pec: "comune.duinoaurisina@certgov.fvg.it",
  orari: "Segretariato sociale venerdì 9:00–11:00",
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
      title: "Servizio sociale – sede di Sistiana",
      subtitle:
        "Ufficio territoriale Duino Aurisina – Sgonico – Monrupino · Borgo San Mauro 124 · Tel. 040 2017389 · segretariato venerdì 9:00–11:00 · serviziosociale@comune.duino-aurisina.ts.it",
      action: { type: "tel", value: "0402017389" },
    },
    {
      icon: "business-outline",
      title: "Servizio Sociale dei Comuni · Ambito Carso Giuliano",
      subtitle:
        "Duino Aurisina, Monrupino, Muggia (ente gestore), San Dorligo della Valle e Sgonico · Ufficio Muggia – San Dorligo: tel. 040 3360434 · Ufficio Duino Aurisina – Sgonico – Monrupino: tel. 040 2017389",
      action: { type: "web", value: "https://www.comune.muggia.ts.it/it/amministrazione-3414/aree-amministrative-49897/ambito-carso-giuliano-servizio-sociale-dei-comuni-64677" },
    },
    {
      icon: "accessibility-outline",
      title: "Sportello Amministratore di sostegno",
      subtitle:
        "Borgo San Mauro 124, Sistiana · mercoledì 11:00–13:00 · Tel. 040 3478751 / 327 0396108 (secondo il prospetto del 02/04/2025)",
      action: { type: "tel", value: "0403478751" },
    },
    {
      icon: "medkit-outline",
      title: "ASUGI",
      subtitle:
        "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://asugi.sanita.fvg.it" },
    },
  ],

  trasporto:
    "Chiedi al Servizio Sociale dei Comuni dell'ambito (040 2017389) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASUGI · Esenzioni ticket",
    url: "https://asugi.sanita.fvg.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte.
duinoAurisina.percorsoTerritorio = percorso(duinoAurisina.puntiSupporto, [0, 1]);

// Passo 1: provincia nella prima fase (dal 1° gennaio 2025) della sperimentazione INPS.
duinoAurisina.percorsoTerritorio = { ...duinoAurisina.percorsoTerritorio, 1: [INPS_PRIMA_FASE] };
