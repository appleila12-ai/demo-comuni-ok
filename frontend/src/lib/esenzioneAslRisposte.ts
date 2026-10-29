// Esenzione ticket per patologia: schede costruite SOLO dalle risposte scritte degli URP delle ASL
// (richiesta TutelApp del 28/10/2026, risposte del 29/10/2026). Nessun dato oltre a quanto scritto.
// Indirizzi personali dei referenti: NON inseriti (solo quelli degli uffici).

export type SchedaEsenzioneAsl = {
  asl: string;
  intro: string;
  comeSiPresenta?: string[];
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
};
