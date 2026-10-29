// Esenzione ticket per patologia: schede costruite SOLO dalle risposte scritte degli URP delle ASL
// (richiesta TutelApp del 28/10/2026, risposte del 29/10/2026). Nessun dato oltre a quanto scritto.
// Indirizzi personali dei referenti: NON inseriti (solo quelli degli uffici).

export type SchedaEsenzioneAsl = {
  asl: string;
  intro: string;
  comeSiPresenta?: string[];
  documenti?: string[];
  pec?: string;
  mail?: string;
  telefoni: { etichetta: string; numero: string }[];
  paginaUrl?: string;
  paginaLabel?: string;
  manca: string;
  fonte: string;
};

export const ESENZIONE_ASL: Record<string, SchedaEsenzioneAsl> = {
  palermo: {
    asl: "ASP Palermo",
    intro:
      "Per avere l'attestato di esenzione aggiornato con il codice della tua patologia devi rivolgerti agli uffici di anagrafe sanitaria / esenzione ticket del tuo ambito di residenza.",
    comeSiPresenta: [
      "Presenta la richiesta all'ufficio anagrafe sanitaria / esenzione ticket dell'ambito in cui risiedi",
      "Oppure inviala per posta elettronica: dipende dal regolamento del tuo Distretto o PTA",
    ],
    telefoni: [{ etichetta: "Numero unico ASP Palermo", numero: "091 8286815" }],
    paginaUrl: "https://www.asppalermo.org/servizio/ticket-esenzione-per-patologia/",
    paginaLabel: "Pagina dell'ASP Palermo sull'esenzione per patologia",
    manca:
      "L'ASP non ha indicato l'elenco dei documenti, se serve l'appuntamento né i tempi di rilascio, e nemmeno gli indirizzi dei singoli uffici: chiedili al numero unico o sulla pagina qui sotto.",
    fonte: "ASP Palermo · risposta scritta dell'URP del 29/10/2026",
  },
  cagliari: {
    asl: "ASL Cagliari",
    intro: "L'URP dell'ASL Cagliari indica questo ufficio per le esenzioni per patologia.",
    mail: "esenzionipatologia.cagliari@aslcagliari.it",
    telefoni: [
      { etichetta: "Ufficio esenzioni", numero: "070 6094039" },
      { etichetta: "Ufficio esenzioni", numero: "070 6094040" },
    ],
    manca:
      "L'ASL non ha indicato come si presenta la richiesta, quali documenti servono, se serve l'appuntamento né i tempi: chiedili direttamente all'ufficio.",
    fonte: "ASL Cagliari · risposta scritta dell'URP del 29/10/2026",
  },
  "vibo-valentia": {
    asl: "ASP Vibo Valentia",
    intro:
      "La richiesta di esenzione per patologia si fa con il modulo dell'ASP, firmato da chi la presenta, e si invia per PEC al Distretto Sanitario Unico di Vibo Valentia, Ufficio Esenzione per Patologia (Via Moderata Durant).",
    documenti: [
      "Modulo di richiesta dell'ASP, firmato dal richiedente",
      "Carta d'identità, fronte e retro, in corso di validità",
      "Tessera sanitaria, fronte e retro, in corso di validità",
      "Certificazione dello specialista con il codice della patologia riscontrata",
    ],
    pec: "aspvibovalentia@pec.it",
    telefoni: [],
    manca:
      "L'ASP non ha indicato dove scaricare il modulo, se serve l'appuntamento né i tempi di rilascio: chiedili all'URP dell'ASP.",
    fonte: "ASP Vibo Valentia · risposta scritta dell'URP del 29/10/2026",
  },
};
