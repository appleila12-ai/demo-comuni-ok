// Esenzione ticket per patologia: schede costruite SOLO dalle risposte scritte degli URP delle ASL
// (richiesta TutelApp del 28/10/2026, risposte del 29/10/2026). Nessun dato oltre a quanto scritto.
// Indirizzi personali dei referenti: NON inseriti (solo quelli degli uffici).

export type SchedaEsenzioneAsl = {
  asl: string;
  intro: string;
  titoloPassi?: string;
  comeSiPresenta?: string[];
  documenti?: string[];
  importante?: string;
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

ESENZIONE_ASL.lecce = {
  asl: "ASL Lecce",
  intro: "L'URP dell'ASL Lecce indica che l'ufficio competente a prendere in carico la richiesta è l'Anagrafe Assistiti del Distretto Socio Sanitario in cui risiedi.",
  titoloPassi: "Come trovare l'ufficio",
  comeSiPresenta: [
    "Apri la pagina dei Distretti socio sanitari dell'ASL Lecce (pulsante qui sotto) e scegli il tuo Distretto di residenza",
    "Nella pagina del Distretto clicca sulla sezione \"Uffici Amministrativi\"",
    "Scorri fino a \"Anagrafe Assistiti\": lì trovi i riferimenti dell'ufficio",
  ],
  telefoni: [],
  paginaUrl: "https://www.sanita.puglia.it/web/asl-lecce/distretti-socio-sanitari",
  paginaLabel: "Distretti socio sanitari dell'ASL Lecce",
  manca:
    "L'ASL non ha indicato come si presenta la richiesta, i documenti, l'appuntamento né i tempi: chiedili all'Anagrafe Assistiti del tuo Distretto.",
  fonte: "ASL Lecce · risposta scritta dell'URP del 29/10/2026",
};

// ASReM Molise: risposta scritta dell'URP (29/10/2026) sul RINNOVO dell'esenzione per patologia.
ESENZIONE_ASL.campobasso = {
  asl: "ASReM Molise",
  intro:
    "Secondo l'URP dell'ASReM, il rinnovo dell'esenzione per patologia non si può fare online: si fa solo agli sportelli ASReM, con la documentazione sanitaria.",
  titoloPassi: "Dove e quando",
  comeSiPresenta: [
    "Sportello ASReM, Via Ugo Petrella, Campobasso (presso gli sportelli di Medicina di Base)",
    "Dal lunedì al venerdì: 8:30 – 12:30",
    "Il lunedì e il mercoledì anche: 15:00 – 16:30",
  ],
  documenti: [
    "Documento d'identità",
    "Tessera sanitaria",
    "Documentazione sanitaria completa (obbligatoria per l'esenzione per patologia)",
    "Se va un'altra persona: delega con il documento del delegato",
  ],
  importante: "Con molta affluenza la distribuzione dei numeri può essere sospesa prima dell'orario di chiusura.",
  pec: "asrem@pec.it",
  telefoni: [{ etichetta: "ASReM · centralino", numero: "0874 4091" }],
  paginaUrl: "https://www.asrem.molise.it",
  paginaLabel: "Sito dell'ASReM Molise",
  manca:
    "La risposta riguarda il rinnovo: non dice come si fa la prima richiesta di esenzione, né se serve l'appuntamento o i tempi di rilascio. Chiedilo allo sportello.",
  fonte: "ASReM Molise · risposta scritta dell'URP del 29/10/2026",
};

// Azienda USL Toscana Sud Est: l'URP ha risposto "è spiegato tutto qui" indicando la pagina sulle esenzioni
// per patologia cronica o invalidante; i contenuti sono quelli di quella pagina (letta il 29/10/2026).
// Le mail degli uffici anagrafe cambiano per zona sociosanitaria: qui solo quella del Comune.
const SUDEST_PAGINA = "https://www.uslsudest.toscana.it/come-fare-per/esenzione-ticket/esenzioni-per-patologia-cronica-o-invalidante";
const sudest = (zona: string, mail: string): SchedaEsenzioneAsl => ({
  asl: "Azienda USL Toscana Sud Est",
  intro: `Il diritto all'esenzione è riconosciuto dall'Azienda sanitaria di residenza o di domicilio sanitario, sulla base della certificazione della malattia rilasciata dalle strutture del Servizio sanitario nazionale. Per te (${zona}) l'ufficio è l'anagrafe dell'ASL.`,
  comeSiPresenta: [
    "Di persona: agli Uffici anagrafe dei presidi ASL negli orari di apertura, con un documento d'identità in corso di validità e la tessera sanitaria",
    "Per mail: inviando il documento d'identità e il certificato medico che attesti la patologia all'indirizzo della tua zona",
  ],
  documenti: [
    "Documento d'identità in corso di validità",
    "Tessera sanitaria (se vai di persona)",
    "Certificato medico che attesti la patologia (rilasciato dal Servizio sanitario nazionale)",
  ],
  importante:
    "Il codice di esenzione deve essere inserito dal medico nella prescrizione: se manca, paghi il ticket anche se hai l'attestato, e la prescrizione non si può correggere dopo. Porta sempre con te l'attestato e controlla il codice.",
  mail,
  telefoni: [],
  paginaUrl: SUDEST_PAGINA,
  paginaLabel: "Pagina dell'ASL Toscana Sud Est sulle esenzioni per patologia",
  manca:
    "La pagina non indica se serve l'appuntamento, i tempi di rilascio né gli orari degli uffici: chiedili all'anagrafe della tua zona.",
  fonte: "Azienda USL Toscana Sud Est · pagina indicata dall'URP di Siena il 29/10/2026",
});

ESENZIONE_ASL.siena = sudest("zona Senese", "anagrafe.senese@uslsudest.toscana.it");
ESENZIONE_ASL.arezzo = sudest("zona Aretina", "anagrafe.aretina@uslsudest.toscana.it");
ESENZIONE_ASL.grosseto = sudest("zona Grossetana", "anagrafe.grossetana@uslsudest.toscana.it");
