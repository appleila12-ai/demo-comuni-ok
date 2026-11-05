import type { ComuneConfig } from "../types";
import { INPS_PRIMA_FASE, percorso } from "../percorso";

// Comune di Muggia (TS) — VERSIONE DIMOSTRATIVA (scheda del 05/11/2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti: pagine ufficiali del Servizio Sociale dei Comuni (Ambito Carso Giuliano, ente gestore il Comune di Muggia), prospetto sportelli del 02/04/2025 e siti dei Comuni; ricerca indicata da Ilaria il 04/11/2026 (non riletta direttamente).
// Giorni e sedi degli sportelli vengono dal prospetto del 02/04/2025: da riconfermare con l'ambito. I nomi degli assistenti sociali (Carta dei servizi, 2023) e i numeri 'area disabilità' non sono inseriti perché datati.
// Da verificare con l'ente: associazioni locali, importi e condizioni aggiornate dei benefici d'ambito.
// Dove un dato non è stato trovato su una fonte ufficiale il campo è lasciato vuoto: non va completato da altre fonti.
export const muggia: ComuneConfig = {
  slug: "muggia",
  tipo: "comune",
  nome: "Comune di Muggia",
  nomeBreve: "Muggia",
  delEnte: "del Comune di Muggia",
  soggetto: "Il Comune",
  provincia: "TS",
  regione: "Friuli-Venezia Giulia",

  ente: "Servizio Sociale dei Comuni · Ambito Carso Giuliano (ente gestore)",
  responsabile: "Servizio sociale professionale",
  indirizzo: "Piazza della Repubblica 4, 1° piano, Muggia (TS)",
  telefono: "040 3360434",
  email: "ambito.sociale@comunedimuggia.ts.it",
  pec: "comune.muggia@certgov.fvg.it",
  orari: "Segretariato sociale mercoledì 9:00–11:00 · su appuntamento",
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
      title: "Servizio Sociale dei Comuni – sede di Muggia",
      subtitle:
        "Ufficio territoriale Muggia – San Dorligo della Valle · Piazza della Repubblica 4, 1° piano · Tel. 040 3360434 · segretariato mercoledì 9:00–11:00 · ambito.sociale@comunedimuggia.ts.it",
      action: { type: "tel", value: "0403360434" },
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
        "Piazza della Repubblica 4 · giovedì 10:00–12:00 · Tel. 040 3478751 / 327 0396108 (secondo il prospetto del 02/04/2025)",
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
    "Chiedi al Servizio Sociale dei Comuni dell'ambito (040 3360434) quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASUGI · Esenzioni ticket",
    url: "https://asugi.sanita.fvg.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi di "Come ottenere il riconoscimento": solo voci già in scheda con fonte.
muggia.percorsoTerritorio = percorso(muggia.puntiSupporto, [0, 1]);

// Passo 1: provincia nella prima fase (dal 1° gennaio 2025) della sperimentazione INPS.
muggia.percorsoTerritorio = { ...muggia.percorsoTerritorio, 1: [INPS_PRIMA_FASE] };
