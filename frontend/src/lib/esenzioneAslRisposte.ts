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

// ASL Gallura, Distretto di Olbia: risposta scritta dell'Ufficio Scelte e Revoche (29/10/2026).
ESENZIONE_ASL.olbia = {
  asl: "ASL Gallura · Distretto di Olbia",
  intro:
    "L'Ufficio Scelte e Revoche del Distretto di Olbia indica come presentare la richiesta di esenzione ticket per patologia cronica e per malattia rara.",
  titoloPassi: "Come si presenta la richiesta",
  comeSiPresenta: [
    "Allo sportello dell'Ufficio Scelte e Revoche: non serve l'appuntamento",
    "Oppure per e-mail, all'indirizzo dell'ufficio competente",
  ],
  documenti: [
    "Certificato specialistico ospedaliero",
    "Documento d'identità in corso di validità",
    "Tessera sanitaria",
    "Patologia cronica: il certificato è rilasciato da uno specialista ambulatoriale di una struttura ospedaliera pubblica e riporta i dati dell'interessato, il riferimento al D.M. 329/1999, il codice della patologia, il timbro e la firma dello specialista",
    "Malattia rara: il certificato è rilasciato dalla struttura ospedaliera competente e riporta i dati dell'interessato, il codice della malattia rara, il timbro e la firma della struttura o del medico",
  ],
  importante:
    "Per la malattia rara, l'attestato di esenzione viene rilasciato dopo l'autorizzazione del dirigente medico.",
  telefoni: [],
  paginaUrl: "https://www.aslgallura.it",
  paginaLabel: "Sito dell'ASL Gallura (orari e recapiti degli uffici)",
  manca:
    "L'ufficio non ha indicato l'indirizzo e-mail né i tempi di rilascio, e la risposta non riguarda l'esenzione per invalidità civile: orari e recapiti sono sul sito dell'ASL Gallura, nella sezione Uffici Scelte e Revoche.",
  fonte: "ASL Gallura · Ufficio Scelte e Revoche, Distretto di Olbia · risposta scritta del 29/10/2026",
};

// AST Ancona: l'URP ha risposto (29/10/2026) indicando due pagine ufficiali, lette lo stesso giorno.
// La procedura online descritta vale per il Distretto di Ancona (servizio avviato in via sperimentale dal 1/12/2025).
ESENZIONE_ASL.ancona = {
  asl: "AST Ancona · Distretto di Ancona",
  intro:
    "Per l'esenzione per patologia cronica o rara la richiesta si invia in modo telematico, con qualsiasi dispositivo. Chi ha bisogno della registrazione in presenza può andare in uno dei presìdi del Distretto negli orari indicati. Il servizio è gratuito.",
  comeSiPresenta: [
    "Online: entra nella piattaforma dell'AST Ancona, registrati (con SPID, CIE o email, con successivo cambio password), compila la domanda e carica i documenti",
    "In presenza: vai in uno dei presìdi del Distretto nei giorni e negli orari indicati qui sotto",
    "Il medico valuta la documentazione e, se l'esito è positivo, ti invia o consegna la copia della tessera sanitaria cartacea con il codice della patologia",
    "Poliambulatorio 2000 Ancona (Viale C. Colombo 106, palazzina 23, primo piano): mercoledì e giovedì 8:30 – 11:30",
    "Casa di Comunità «Giulia Bonarelli» (Largo Cappelli 1, Ancona): lunedì e venerdì 9:00 – 12:00",
    "Poliambulatorio di Falconara (Via F.lli Rosselli 11): martedì 9:30 – 12:30",
    "Poliambulatorio di Osimo (P.zza del Comune 4): venerdì 9:30 – 12:30",
    "Sede di Castelfidardo (Via XXV Aprile 61): mercoledì 12:30 – 13:30",
  ],
  documenti: [
    "Certificazione medica rilasciata da uno specialista del SSN (non in libera professione)",
    "Oppure richiesta del medico di famiglia / pediatra, solo per le patologie previste dall'Accordo Integrativo Regionale vigente",
  ],
  importante:
    "Questo servizio è solo per l'esenzione per patologia cronica o rara: non vale per altre esenzioni (reddito, invalidità civile, cause di servizio).",
  telefoni: [{ etichetta: "AST Ancona · numero verde", numero: "800 530724" }],
  paginaUrl: "https://teknecloud.it/SIOC-ASTANCONA/",
  paginaLabel: "Piattaforma per inviare la richiesta online",
  manca:
    "L'AST non indica i tempi di rilascio né l'elenco dettagliato dei documenti da allegare oltre alla certificazione. Gli orari possono cambiare: controlla la pagina ufficiale del Distretto.",
  fonte:
    "AST Ancona · pagine «Esenzione ticket per patologia – Distretto Ancona» e «Richiesta esenzioni per patologia: nuova modalità telematica», indicate dall'URP il 29/10/2026",
};

// ASST Ovest Milanese: l'URP (Prof. Marcello Crivellini) ha indicato la pagina «Attività Scelta e Revoca»
// e il documento allegato «Informazioni esenzioni ticket» (letti il 29/10/2026).
const OVEST_MILANESE: SchedaEsenzioneAsl = {
  asl: "ASST Ovest Milanese",
  intro:
    "Per l'esenzione per patologia cronica o malattia rara serve la certificazione specialistica con il codice della patologia (DM 329/99 e DPCM 12/01/2017). La richiesta si può fare in tre modi.",
  comeSiPresenta: [
    "Dal portale dell'ASST Ovest Milanese, nella sezione «Attività Scelta e Revoca»",
    "Consegnando i documenti ai Punti di Ritiro elencati sul sito (modalità riservata prioritariamente agli over 65)",
    "Prenotando lo sportello con il sistema ZEROCODA",
  ],
  documenti: [
    "Certificazione specialistica che riporti il codice della patologia",
    "Per il rinnovo di esenzioni con validità limitata il certificato può essere rilasciato anche dal medico di famiglia, tranne per l'esenzione 048, che richiede sempre uno specialista",
  ],
  importante: "Se risiedi in un'altra Regione, l'esenzione va registrata presso l'ASL di residenza.",
  telefoni: [{ etichetta: "ASST Ovest Milanese · Legnano", numero: "0331 449111" }],
  paginaUrl: "https://www.asst-ovestmi.it/attivita-scelta-e-revoca",
  paginaLabel: "Pagina «Attività Scelta e Revoca» dell'ASST",
  manca:
    "Il documento non indica i tempi di rilascio. Per sedi e orari dei Punti di ritiro e degli uffici Scelta e Revoca usa il documento «Uffici Scelta e Revoca» sulla stessa pagina.",
  fonte:
    "ASST Ovest Milanese · risposta scritta dell'URP del 29/10/2026 e documento «Informazioni esenzioni ticket»",
};
for (const slug of ["legnano", "magenta", "parabiago", "abbiategrasso"]) ESENZIONE_ASL[slug] = OVEST_MILANESE;

// ASUGI (Trieste, Gorizia, Monfalcone): risposta scritta dell'URP di Trieste (29/10/2026), con rinvio alle pagine aziendali.
const ESENZIONE_ASUGI: SchedaEsenzioneAsl = {
  asl: "ASUGI · Azienda sanitaria universitaria Giuliano Isontina",
  intro:
    "Patologie croniche, patologie rare, malattie tumorali e trapianto d'organo danno diritto all'esenzione dal ticket per le prestazioni sanitarie inerenti la patologia. Il diritto è attestato dagli uffici amministrativi del Distretto sanitario competente e riportato sul tesserino sanitario.",
  titoloPassi: "Dove si presenta",
  comeSiPresenta: [
    "Agli sportelli amministrativi del Distretto: l'elenco delle sedi è nella pagina dei servizi amministrativi presso le sedi territoriali (pulsante qui sotto)",
    "La certificazione deve essere rilasciata da presidi delle aziende sanitarie, aziende ospedaliere, istituti e enti previsti dalla norma, o da istituzioni sanitarie pubbliche di Paesi dell'Unione europea",
  ],
  documenti: [
    "Dichiarazione del medico specialista di una struttura pubblica che certifichi la patologia",
    "Tessera sanitaria",
    "Codice fiscale",
  ],
  telefoni: [{ etichetta: "URP ASUGI Trieste (lun–ven 9:00–12:00)", numero: "040 399 4880" }],
  paginaUrl: "https://asugi.sanita.fvg.it/it/schede/s_dir_amm/go_esenzioni.html",
  paginaLabel: "Pagina ASUGI sulle esenzioni per patologia",
  manca:
    "L'URP non ha indicato se serve l'appuntamento né i tempi di rilascio. Altre modalità di registrazione sono nella pagina ASUGI sull'esenzione per malattie (indicata dall'URP).",
  fonte: "ASUGI · risposta scritta dell'URP di Trieste del 29/10/2026",
};
ESENZIONE_ASL.trieste = ESENZIONE_ASUGI;
ESENZIONE_ASL.gorizia = ESENZIONE_ASUGI;
ESENZIONE_ASL.monfalcone = ESENZIONE_ASUGI;

// ASP Siracusa: risposta scritta dell'URP (29/10/2026), solo l'indirizzo e-mail del Distretto di Siracusa.
ESENZIONE_ASL.siracusa = {
  asl: "ASP Siracusa · Distretto di Siracusa",
  intro: "L'URP dell'ASP di Siracusa indica questo indirizzo e-mail per le esenzioni ticket per patologia del Distretto di Siracusa.",
  mail: "ticketpatologia.distrettosiracusa@asp.sr.it",
  telefoni: [],
  manca:
    "L'ASP non ha indicato i documenti, se serve l'appuntamento né i tempi di rilascio: chiedili all'indirizzo qui sopra.",
  fonte: "ASP Siracusa · risposta scritta dell'URP del 29/10/2026",
};
