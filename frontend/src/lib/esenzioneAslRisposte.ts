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
  /** Altri collegamenti ufficiali indicati dall'ente (oltre a paginaUrl) */
  altriLink?: { label: string; url: string }[];
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
    "Consegnando i documenti ai Punti di Ritiro indicati dall'ASST (modalità riservata agli assistiti ultra65enni: controlla le condizioni nell'allegato «Punti di ritiro» sulla stessa pagina)",
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

// ASP Catania: risposta scritta dell'URP (29/10/2026).
const ASP_CATANIA: SchedaEsenzioneAsl = {
  asl: "ASP Catania",
  intro:
    "Secondo l'URP dell'ASP di Catania, la richiesta di esenzione ticket per patologia si può fare online, con la piattaforma «Asp Con Te – Servizi territoriali», oppure di persona.",
  comeSiPresenta: [
    "Online: dalla piattaforma «Asp Con Te – Servizi territoriali» dell'ASP di Catania",
    "Di persona: all'Ufficio Anagrafe assistiti del tuo Distretto",
  ],
  telefoni: [{ etichetta: "URP ASP Catania · numero verde (lun–ven 9:30–12:00, lun anche 15:00–16:30)", numero: "800 279761" }],
  paginaUrl: "https://www.aspct.it/aspconte/servizi-territoriali/",
  paginaLabel: "Piattaforma Asp Con Te – Servizi territoriali",
  manca:
    "L'ASP non ha indicato i documenti da presentare, i tempi di rilascio, né se serve l'appuntamento: chiedili al tuo Distretto o sulla piattaforma.",
  fonte: "ASP Catania · risposta scritta dell'URP del 29/10/2026",
};
for (const slug of ["catania", "acireale", "adrano", "mascalucia", "misterbianco", "paterno", "caltagirone"]) ESENZIONE_ASL[slug] = ASP_CATANIA;

// ASL Roma 5: risposta scritta dell'URP e Comunicazione (29/10/2026).
const ASL_ROMA5: SchedaEsenzioneAsl = {
  asl: "ASL Roma 5",
  intro:
    "Secondo l'URP della ASL Roma 5, l'esenzione per patologia cronica si ottiene presentando la certificazione medica che attesta la patologia, con i documenti che ti identificano, agli uffici del tuo Distretto.",
  comeSiPresenta: [
    "Presenta agli uffici distrettuali competenti la certificazione medica che attesta la patologia, insieme ai documenti identificativi",
    "Se nella certificazione manca il codice di esenzione, gli uffici lo assegnano dopo aver verificato i documenti",
    "L'esenzione viene poi registrata nei sistemi della ASL presso gli sportelli CUP del territorio",
  ],
  documenti: [
    "Certificazione medica che attesta la patologia",
    "Documenti identificativi dell'assistito",
    "Malattie rare: certificazione di uno specialista di un Centro della rete regionale riconosciuto",
  ],
  mail: "urp@aslroma5.it",
  telefoni: [],
  paginaUrl: "https://www.aslroma5.it",
  paginaLabel: "Sito della ASL Roma 5",
  manca:
    "La ASL non ha indicato indirizzi e orari degli uffici, l'elenco preciso dei documenti, il modulo, i tempi né le regole sull'appuntamento: rivolgiti agli uffici distrettuali, che variano per tipo di esenzione.",
  fonte: "ASL Roma 5 · risposta scritta dell'URP e Comunicazione del 29/10/2026",
};
for (const slug of ["fonte-nuova", "guidonia-montecelio", "monterotondo", "tivoli"]) ESENZIONE_ASL[slug] = ASL_ROMA5;

// ASL TO4: risposta scritta dell'URP (30/10/2026). Nessun dato oltre a quanto scritto.
const ASL_TO4: SchedaEsenzioneAsl = {
  asl: "ASL TO4",
  intro:
    "Secondo l'URP dell'ASL TO4, le esenzioni per patologia e i relativi rinnovi vengono presi in carico per e-mail dal Distretto sanitario di riferimento, allegando la documentazione.",
  comeSiPresenta: [
    "Per e-mail al Distretto sanitario di riferimento, allegando i documenti qui sotto",
    "Oppure di persona, su appuntamento, al tuo Distretto: l'accesso è dal lunedì al venerdì, dalle 10 alle 12",
    "Per l'appuntamento telefona al numero unico aziendale, dal lunedì al venerdì dalle 13 alle 15",
  ],
  documenti: [
    "Documentazione specialistica recente (non più vecchia di un anno), rilasciata da una struttura pubblica, che attesta la patologia, oppure certificazione rilasciata dall'INPS",
    "Documento d'identità",
    "Codice fiscale",
    "Recapito telefonico",
  ],
  importante:
    "Nel Distretto di Ciriè-Lanzo le esenzioni sono gestite dalla Medicina Legale, solo per e-mail (certificatimedleg@aslto4.piemonte.it): lì non si va allo sportello.",
  telefoni: [{ etichetta: "Appuntamenti · numero unico ASL TO4 (lun–ven 13–15)", numero: "011 9176012" }],
  paginaUrl: "https://www.aslto4.piemonte.it/pagamento-ticket-ed-esenzioni-ticket-visite-ed-esami-specialistici",
  paginaLabel: "Pagina dell'ASL TO4 su ticket ed esenzioni (con i contatti dei Distretti)",
  manca:
    "L'ASL non ha indicato il modulo né i tempi di rilascio. Gli indirizzi e-mail dei singoli Distretti li trovi sulla pagina dell'ASL qui sotto.",
  fonte: "ASL TO4 · risposta scritta dell'URP del 30/10/2026",
};
for (const slug of ["settimo-torinese"]) ESENZIONE_ASL[slug] = ASL_TO4;

// ASP Agrigento: risposta scritta del Coordinatore della Casa della Comunità di Agrigento (29/10/2026).
// Mail e orari valgono per Agrigento; la regola generale è quella dichiarata dal Distretto.
ESENZIONE_ASL.agrigento = {
  asl: "ASP Agrigento · Casa della Comunità di Agrigento",
  intro:
    "Secondo il Coordinatore della Casa della Comunità di Agrigento, la richiesta si presenta allo sportello di medicina di base del tuo territorio, di persona o da un delegato (care giver). Se risiedi ad Agrigento puoi anche inviarla per mail.",
  comeSiPresenta: [
    "Allo sportello di medicina di base competente per la tua residenza (puoi andare tu o un delegato/care giver)",
    "Gli operatori ti rilasciano l'attestazione, che poi presenti al tuo medico di famiglia",
    "Se risiedi ad Agrigento: invia per mail la richiesta con la scansione di carta d'identità e tessera sanitaria; l'attestazione ti arriva allo stesso indirizzo",
    "Sportello di Agrigento (Casa della Comunità, via Giovanni XXIII): lunedì, giovedì e venerdì 8:15 – 13:00; martedì 8:15 – 13:00 e 15:00 – 17:00 (il mercoledì non è indicato)",
  ],
  documenti: [
    "Patologia cronica: richiesta redatta dal medico di famiglia",
    "Patologia rara: richiesta redatta da uno specialista del centro di riferimento per quella patologia",
    "Carta d'identità e tessera sanitaria (anche in scansione se invii la mail)",
  ],
  mail: "dsagrigento.agrigento@aspag.it",
  telefoni: [],
  paginaUrl: "https://www.aspag.it",
  paginaLabel: "Sito dell'ASP di Agrigento",
  manca:
    "L'ASP non ha indicato i tempi di rilascio né il modulo. Gli orari indicati sono quelli dello sportello di Agrigento; per altri sportelli rivolgiti al tuo Distretto.",
  fonte: "ASP Agrigento · risposta scritta del Coordinatore della Casa della Comunità di Agrigento, 29/10/2026",
};

// USL Umbria 1: risposta scritta dell'URP aziendale (29/10/2026).
const USL_UMBRIA1: SchedaEsenzioneAsl = {
  asl: "USL Umbria 1",
  intro:
    "Secondo l'URP della USL Umbria 1, per chiedere l'esenzione dal ticket per patologia cronica o malattia rara ci si rivolge agli Sportelli Anagrafe Assistibili del Distretto di appartenenza.",
  comeSiPresenta: ["Vai allo Sportello Anagrafe Assistibili del Distretto in cui rientri"],
  telefoni: [],
  paginaUrl: "https://www.uslumbria1.it/servizio/anagrafe-assistibili/",
  paginaLabel: "Pagina della USL Umbria 1 sull'Anagrafe Assistibili",
  manca:
    "L'URP non ha indicato i documenti, gli orari e le sedi degli sportelli, il modulo, l'appuntamento né i tempi di rilascio: consulta la pagina della USL o chiedi allo sportello.",
  fonte: "USL Umbria 1 · risposta scritta dell'URP aziendale del 29/10/2026",
};
for (const slug of ["perugia", "citta-di-castello", "gubbio"]) ESENZIONE_ASL[slug] = USL_UMBRIA1;

// ASP Reggio Calabria: risposta scritta dell'URP (29/10/2026). Mail e PEC dei singoli Distretti non indicate.
ESENZIONE_ASL["reggio-calabria"] = {
  asl: "ASP Reggio Calabria",
  intro:
    "Secondo l'URP dell'ASP, la richiesta di esenzione per patologia cronica o malattia rara si presenta agli sportelli Scelta/Revoca ed Esenzioni del Poliambulatorio o del Distretto Sanitario competente per la tua residenza o il tuo domicilio sanitario. In alternativa si può inviare in digitale, per PEC o mail ordinaria, al tuo Distretto o Poliambulatorio.",
  comeSiPresenta: [
    "Di persona, agli sportelli Scelta/Revoca ed Esenzioni del tuo Poliambulatorio o Distretto: non serve prenotare, ma contano gli orari di apertura di ogni sportello (per diverse sedi, martedì, giovedì e venerdì mattina)",
    "Da casa: per PEC o mail ordinaria ai contatti del tuo Distretto o Poliambulatorio, così eviti code e appuntamenti",
    "Allo sportello l'attestato di esenzione viene rilasciato subito, dopo la verifica dei requisiti",
  ],
  documenti: [
    "Copia del documento d'identità in corso di validità",
    "Copia della tessera sanitaria (TS-CNS)",
    "Certificazione medica di uno specialista di una struttura pubblica (o documentazione medico-legale) che attesti la patologia e indichi il codice",
    "Modulo di richiesta firmato, con la dichiarazione sostitutiva (DPR 445/2000) di conformità all'originale dei documenti allegati",
  ],
  telefoni: [],
  paginaUrl: "https://www.asprc.it",
  paginaLabel: "Sito dell'ASP Reggio Calabria (sezione Modulistica)",
  manca:
    "L'ASP non ha indicato le mail e le PEC dei singoli Distretti, gli orari di ogni sportello né i tempi di rilascio per l'invio digitale: chiedili al tuo Distretto o nella sezione Modulistica del sito.",
  fonte: "ASP Reggio Calabria · risposta scritta dell'URP del 29/10/2026",
};

// ASL TO4: risposta scritta dell'URP (30/10/2026).
ESENZIONE_ASL["settimo-torinese"] = {
  asl: "ASL TO4",
  intro:
    "All'ASL TO4 la richiesta di esenzione per patologia (e il rinnovo, se spetta) si presenta per e-mail al Distretto sanitario di riferimento. Per il Distretto di Ciriè-Lanzo la gestione è della Medicina Legale.",
  titoloPassi: "Come si presenta",
  comeSiPresenta: [
    "Per e-mail al tuo Distretto sanitario di riferimento (contatti delle sedi sulla pagina dell'ASL qui sotto)",
    "Distretto di Ciriè-Lanzo: solo per e-mail alla Medicina Legale, certificatimedleg@aslto4.piemonte.it",
    "In alternativa, di persona al tuo Distretto, dalle 10 alle 12 dal lunedì al venerdì, solo su appuntamento (non per Ciriè-Lanzo)",
    "Appuntamento e informazioni: numero unico aziendale 011 9176012, dal lunedì al venerdì dalle 13 alle 15",
  ],
  documenti: [
    "Documentazione specialistica recente (non più vecchia di un anno) di una struttura pubblica che attesti la patologia, oppure certificazione INPS",
    "Documento d'identità",
    "Codice fiscale",
    "Recapito telefonico",
  ],
  mail: "certificatimedleg@aslto4.piemonte.it",
  telefoni: [{ etichetta: "Numero unico aziendale (lun-ven 13-15)", numero: "011 9176012" }],
  paginaUrl: "https://www.aslto4.piemonte.it/pagamento-ticket-ed-esenzioni-ticket-visite-ed-esami-specialistici",
  paginaLabel: "Pagina dell'ASL TO4 su ticket ed esenzioni",
  manca:
    "L'indirizzo e-mail è quello della Medicina Legale per il solo Distretto di Ciriè-Lanzo. Gli indirizzi degli altri Distretti, i tempi di rilascio e il modulo non sono stati indicati: li trovi sulla pagina dell'ASL.",
  fonte: "ASL TO4 · risposta scritta dell'URP del 30/10/2026",
};

// ASL Bari: risposta scritta dell'URP (29/10/2026).
const ASL_BARI: SchedaEsenzioneAsl = {
  asl: "ASL Bari",
  intro:
    "Secondo l'URP dell'ASL Bari, la richiesta di esenzione per patologia o malattia rara si presenta all'ufficio anagrafe competente per la tua residenza.",
  documenti: [
    "Certificazione specialistica di una struttura pubblica, oppure cartella clinica",
    "Copia della tessera sanitaria",
    "Copia del documento d'identità",
  ],
  telefoni: [],
  paginaUrl: "https://www.sanita.puglia.it/web/asl-bari/distretti-socio-sanitari",
  paginaLabel: "Distretti socio-sanitari dell'ASL Bari (sezione Uffici amministrativi)",
  manca:
    "Le sedi degli sportelli anagrafe si trovano nella sezione \"Uffici amministrativi\" del tuo Distretto. L'ASL non ha indicato se serve l'appuntamento, né i tempi di rilascio o se si può inviare per mail.",
  fonte: "ASL Bari · risposta scritta dell'URP del 29/10/2026",
};
for (const slug of ["bari", "altamura", "bitonto", "corato", "gravina-in-puglia", "modugno", "mola-di-bari", "molfetta", "monopoli"]) ESENZIONE_ASL[slug] = ASL_BARI;

// ASL Città di Torino: risposta scritta dell'URP (29/10/2026) e pagina ufficiale dell'ASL «Richiedere l'esenzione ticket» (aggiornata il 16/06/2026, letta il 02/11/2026).
ESENZIONE_ASL.torino = {
  asl: "ASL Città di Torino",
  intro:
    "L'ASL Città di Torino indica che l'esenzione ticket per patologia (malattie croniche, malattie rare, malattie invalidanti, patologie oncologiche, attesa di trapianto) si chiede presso gli sportelli amministrativi del Distretto di competenza territoriale.",
  titoloPassi: "Come si chiede",
  comeSiPresenta: ["Agli sportelli amministrativi del Distretto di competenza per la tua residenza"],
  documenti: [
    "Documentazione medica che attesti la patologia",
    "Copia del codice fiscale / tessera sanitaria",
    "Copia del documento di identità",
  ],
  mail: "urp@aslcittaditorino.it",
  telefoni: [],
  paginaUrl: "https://www.aslcittaditorino.it/come-fare-per/richiedere-lesenzione-ticket/",
  paginaLabel: "Richiedere l'esenzione ticket · ASL Città di Torino",
  manca:
    "La pagina non indica sedi e orari degli sportelli, se serve l'appuntamento, se si può inviare per mail né i tempi di rilascio: chiedili al tuo Distretto o all'URP (urp@aslcittaditorino.it).",
  fonte: "ASL Città di Torino · pagina ufficiale sull'esenzione ticket (aggiornata il 16/06/2026) e risposta scritta dell'URP del 29/10/2026",
};

// ATS Brescia: l'esenzione non è gestita dall'ATS ma dalle tre ASST (risposta scritta del 30/10/2026).
ESENZIONE_ASL.brescia = {
  asl: "ASST Spedali Civili di Brescia",
  intro:
    "L'ATS di Brescia ha precisato che le esenzioni non sono gestite dall'ATS ma dalle tre ASST del territorio: ASST Spedali Civili, ASST Garda e ASST Franciacorta. Per il Comune di Brescia fa riferimento l'ASST Spedali Civili. Orari e sedi sono sulle pagine delle ASST.",
  telefoni: [],
  paginaUrl: "https://www.asst-spedalicivili.it/esenzione-dal-pagamento-ticket",
  paginaLabel: "Esenzione dal pagamento del ticket · ASST Spedali Civili",
  manca:
    "L'ATS non ha indicato i documenti, il modulo, l'appuntamento né i tempi: trovi contatti, orari e sedi sulla pagina dell'ASST. Per altri Comuni del Bresciano: ASST Garda (asst-garda.it/territori/assistenza-sanitaria-2) e ASST Franciacorta (asst-franciacorta.it, sezione Ticket ed esenzioni).",
  fonte: "ATS Brescia · risposta scritta dell'Ufficio Pubblica Tutela del 30/10/2026",
};

// ASST Lodi: risposta scritta del Direttore del Distretto Alto Lodigiano (30/10/2026).
ESENZIONE_ASL.lodi = {
  asl: "ASST di Lodi",
  intro:
    "L'ASST di Lodi indica che tutte le informazioni su come presentare la domanda di esenzione ticket sono sulla pagina dedicata del suo sito.",
  telefoni: [],
  paginaUrl: "https://www.asst-lodi.it/esenzioni-ticket",
  paginaLabel: "Esenzioni ticket · ASST di Lodi",
  manca:
    "L'ASST non ha scritto i passaggi nella risposta, ma rimanda alla sua pagina: documenti, sportelli e tempi sono lì.",
  fonte: "ASST di Lodi · risposta scritta del Distretto Alto Lodigiano del 30/10/2026",
};

// Azienda ULSS 2 Marca Trevigiana: risposta scritta dell'URP (29/10/2026).
const ULSS2_TREVISO: SchedaEsenzioneAsl = {
  asl: "Azienda ULSS 2 Marca Trevigiana",
  intro:
    "L'URP dell'ULSS 2 indica la sezione \"Cittadino e famiglia\" del sito dell'Azienda, dove per ogni tipo di esenzione sono riportate le informazioni. Consiglia inoltre le FAQ sul Fascicolo Sanitario Elettronico (FSE), per sapere se si può chiedere l'esenzione per patologia e per verificare quella per reddito.",
  telefoni: [
    { etichetta: "URP Treviso", numero: "0422 322922" },
    { etichetta: "URP Asolo", numero: "0423 731994" },
    { etichetta: "URP Pieve di Soligo", numero: "0438 663608" },
  ],
  paginaUrl: "https://www.aulss2.veneto.it/cittadino-e-famiglia",
  paginaLabel: "Cittadino e famiglia · ULSS 2 Marca Trevigiana",
  manca:
    "L'URP non ha scritto i passaggi nella risposta ma rimanda alle pagine dell'Azienda e alle FAQ regionali sul FSE (salute.regione.veneto.it/lista-faq).",
  fonte: "Azienda ULSS 2 Marca Trevigiana · risposta scritta dell'URP del 29/10/2026",
};
for (const slug of ["treviso", "conegliano", "castelfranco-veneto", "montebelluna", "vittorio-veneto"]) ESENZIONE_ASL[slug] = ULSS2_TREVISO;

// ASL TO4: risposta scritta dell'URP (30/10/2026).
ESENZIONE_ASL["settimo-torinese"] = {
  asl: "ASL TO4",
  intro:
    "Secondo l'URP dell'ASL TO4, le esenzioni per patologia e i relativi rinnovi si chiedono per e-mail al Distretto sanitario di riferimento, oppure di persona su appuntamento.",
  comeSiPresenta: [
    "Per e-mail al tuo Distretto sanitario, allegando i documenti qui sotto (i contatti dei Distretti sono sulla pagina dell'ASL)",
    "Di persona, solo su appuntamento: dal lunedì al venerdì, 10:00 – 12:00",
    "L'appuntamento si prende al numero unico aziendale, dal lunedì al venerdì, 13:00 – 15:00",
    "Al Distretto di Ciriè-Lanzo le richieste vanno solo per e-mail alla Medicina Legale: certificatimedleg@aslto4.piemonte.it",
  ],
  documenti: [
    "Documentazione specialistica recente (non più vecchia di un anno) rilasciata da una struttura pubblica che attesta la patologia, oppure certificazione dell'INPS",
    "Documento d'identità",
    "Codice fiscale",
    "Recapito telefonico",
  ],
  telefoni: [{ etichetta: "Numero unico aziendale · appuntamenti e informazioni (lun–ven 13:00–15:00)", numero: "011 9176012" }],
  paginaUrl: "https://www.aslto4.piemonte.it/pagamento-ticket-ed-esenzioni-ticket-visite-ed-esami-specialistici",
  paginaLabel: "Pagina dell'ASL TO4 su ticket ed esenzioni",
  manca: "L'ASL non ha indicato i tempi di rilascio né il modulo. Gli indirizzi e-mail dei Distretti sono sulla pagina ufficiale.",
  fonte: "ASL TO4 · risposta scritta dell'URP del 30/10/2026",
};

// ASP Reggio Calabria: risposta scritta dell'URP (29/10/2026). Il logo dell'ASP non va usato senza autorizzazione.
ESENZIONE_ASL["reggio-calabria"] = {
  asl: "ASP Reggio Calabria",
  intro:
    "Secondo l'URP dell'ASP di Reggio Calabria, la richiesta di esenzione per patologia cronica o malattia rara si presenta agli sportelli Scelta/Revoca ed Esenzioni del Poliambulatorio o del Distretto sanitario di competenza, oppure si invia in digitale.",
  comeSiPresenta: [
    "Di persona: agli sportelli Scelta/Revoca ed Esenzioni del tuo Distretto o Poliambulatorio, in base alla residenza o al domicilio sanitario. Non serve prenotare",
    "Da casa: con PEC o e-mail ordinaria ai contatti del tuo Distretto o Poliambulatorio di riferimento",
    "Gli orari dei singoli sportelli sono sulla pagina dei Distretti sanitari dell'ASP (per esempio, in diverse sedi martedì, giovedì e venerdì mattina)",
    "Allo sportello l'attestato di esenzione viene rilasciato subito, dopo la verifica dei requisiti",
  ],
  documenti: [
    "Copia del documento d'identità in corso di validità",
    "Copia della tessera sanitaria",
    "Certificazione medica di uno specialista di una struttura pubblica (o idonea documentazione medico-legale) che attesta la patologia e indica il codice",
    "Se invii per PEC o e-mail: modulo di richiesta firmato, con dichiarazione sostitutiva (DPR 445/2000) di conformità all'originale dei documenti allegati",
  ],
  telefoni: [],
  paginaUrl: "https://www.asprc.it",
  paginaLabel: "Sito dell'ASP di Reggio Calabria (sezione Modulistica)",
  manca:
    "L'ASP non ha indicato i tempi di rilascio quando si invia per e-mail o PEC, né gli indirizzi dei singoli Distretti: li trovi sulla pagina dei Distretti sanitari.",
  fonte: "ASP Reggio Calabria · risposta scritta dell'URP del 29/10/2026",
};

// ASL 5 Liguria (Distretti 17, 18, 19): modulo ufficiale "Esenzione per patologia - invalidità" e avviso all'utenza del 30/09/2026.
function asl5(sportello: string, mail: string, telefono: string, orari: string): SchedaEsenzioneAsl {
  return {
    asl: "ASL 5 Liguria · Distretti 17, 18 e 19",
    intro:
      "Per far registrare sul libretto sanitario una patologia cronica o un'invalidità, ci si rivolge al presidio dell'anagrafe sanitaria competente per la propria residenza anagrafica (o domicilio sanitario).",
    titoloPassi: "Come si presenta la richiesta",
    comeSiPresenta: [
      "Per e-mail all'indirizzo del distretto di appartenenza, oppure con accesso libero nei giorni e negli orari del distretto (il modulo non richiede l'appuntamento)",
      `Sportello: ${sportello}. Orari (avviso ASL 5 del 30/09/2026): ${orari}`,
      "Si compila il modulo «Richiesta di riconoscimento esenzione ticket per patologia cronica o invalidità»",
    ],
    documenti: [
      "Per patologia cronica, copia di uno di questi: certificato recente con diagnosi e codice della patologia rilasciato da un medico specialista di una struttura pubblica; cartella clinica di una struttura ospedaliera pubblica; verbale di invalidità; cartella clinica di una struttura ospedaliera privata accreditata (previa valutazione del medico del Distretto); certificati delle Commissioni mediche degli Ospedali militari; certificazioni di istituzioni sanitarie pubbliche di Paesi dell'Unione europea",
      "Per invalidità, copia del verbale rilasciato dalla pertinente commissione medica",
      "Documento di riconoscimento del richiedente",
      "Codice fiscale / tessera sanitaria delle persone interessate",
      "Se serve delega: documento del delegato e del delegante. Con tutore o amministratore di sostegno: documento del tutore/amministratore e della persona tutelata. Per un minore: documenti di entrambi i genitori e delega del genitore non convivente",
    ],
    mail,
    telefoni: [{ etichetta: `Anagrafe sanitaria ${sportello}`, numero: telefono }],
    paginaUrl:
      "https://www.asl5.liguria.it/PerilCittadino/Serviziterritoriali/CurePrimarieeAttivit%C3%A0Distrettuali/Attivit%C3%A0dianagrafesanitaria-Moduli.aspx",
    paginaLabel: "Modulistica ASL 5 · Esenzione per patologia - invalidità",
    manca:
      "Le pagine ASL 5 non indicano i tempi di rilascio né una soglia di invalidità: il modulo parla di «invalidità» in generale.",
    fonte: "ASL 5 Liguria · modulo «Esenzione per patologia - invalidità» e avviso all'utenza del 30/09/2026",
  };
}
ESENZIONE_ASL.sarzana = asl5(
  "Sarzana, via Paci 1",
  "anagrafe.sz@asl5.liguria.it",
  "0187 604318 · 0187 604332 · 0187 604704",
  "dal lunedì al venerdì 8:00–12:00, martedì e giovedì 14:30–16:00",
);
ESENZIONE_ASL["la-spezia"] = asl5(
  "La Spezia, via XXIV Maggio 141",
  "anagrafe.sp@asl5.liguria.it",
  "0187 533580",
  "dal lunedì al venerdì 8:00–12:00, martedì e giovedì 14:00–16:00",
);

// AUSL della Romagna: pagina ufficiale «Esenzione dal ticket per patologia e malattia cronica» (aggiornata il 16/04/2024, letta il 30/10/2026).
// L'URP di Rimini ha rimandato a questa pagina per iscritto (30/10/2026). Imola ha un'altra azienda sanitaria.
const AUSL_ROMAGNA: SchedaEsenzioneAsl = {
  asl: "AUSL della Romagna",
  intro:
    "Il diritto all'esenzione è certificato da un promemoria di attestato di esenzione, rilasciato dallo sportello territoriale dell'AUSL di residenza. Lì devi presentare la certificazione della patologia.",
  titoloPassi: "Come si ottiene",
  comeSiPresenta: [
    "Allo sportello territoriale dell'AUSL (sportelli unici CUP) della tua residenza, con la certificazione della patologia",
    "La certificazione deve essere emessa dallo specialista di una struttura pubblica, durante una visita del Servizio sanitario nazionale (non in libera professione), sulla modulistica prevista",
    "L'esenzione viene registrata nell'Anagrafe Regionale degli Assistiti e inviata in automatico al tuo medico di famiglia o pediatra",
  ],
  importante:
    "Per usare l'esenzione, il medico di famiglia, il pediatra o lo specialista deve scrivere il codice della patologia nell'apposito campo dell'impegnativa, per visite, esami o farmaci. L'esenzione può valere solo per le prestazioni specifiche collegate alla malattia (allegati 8 e 8bis del DPCM 2017) oppure essere generica, a valutazione di chi prescrive. La tessera può avere scadenza illimitata o limitata, secondo la patologia (DM 23 novembre 2012 e circolare regionale n. 11 del 12 luglio 2013). Se risiedi in un'altra regione ma sei assistito in Romagna, presenta la certificazione alla tua AUSL di residenza e porta poi agli sportelli romagnoli l'attestato che ti rilasciano.",
  telefoni: [],
  paginaUrl: "https://www.auslromagna.it/servizi/ticket/esenzioni/per-patologia-e-malattia-cronica",
  paginaLabel: "Pagina dell'AUSL Romagna sull'esenzione per patologia",
  manca:
    "L'AUSL non indica l'elenco preciso dei documenti da portare oltre alla certificazione, se serve l'appuntamento, i tempi di rilascio né se si può inviare per mail. Gli orari e le sedi degli sportelli unici CUP sono sul sito dell'AUSL.",
  fonte: "AUSL della Romagna · pagina ufficiale sull'esenzione per patologia e risposta scritta dell'URP di Rimini del 30/10/2026",
};
for (const slug of ["rimini", "riccione", "ravenna", "faenza", "forli", "cesena"]) ESENZIONE_ASL[slug] = AUSL_ROMAGNA;

// Gorizia: risposta scritta dell'Ufficio Anagrafe Sanitaria di Gorizia (30/10/2026), che completa la scheda ASUGI.
ESENZIONE_ASL.gorizia = {
  ...ESENZIONE_ASUGI,
  intro:
    "L'Ufficio Anagrafe Sanitaria di Gorizia (ASUGI) indica come chiedere la registrazione dell'esenzione per malattie croniche e invalidanti o per malattie rare.",
  titoloPassi: "Come si presenta",
  comeSiPresenta: [
    "Allo sportello: puoi andare tu, una persona delegata oppure l'amministratore di sostegno o il tutore",
    "Per e-mail, oppure per PEC",
    "In ogni caso con la documentazione indicata sulla pagina ASUGI",
  ],
  telefoni: [{ etichetta: "Ufficio Anagrafe Sanitaria Gorizia", numero: "0481 592860" }],
  paginaUrl: "https://asugi.sanita.fvg.it/it/servizi/dist_amm_esenz_malattie_croniche.html",
  paginaLabel: "Pagina ASUGI: esenzione ticket per malattie croniche e invalidanti",
  manca:
    "L'ufficio non ha scritto l'indirizzo e-mail e la PEC, né se serve l'appuntamento o i tempi di rilascio: li trovi sulla pagina ASUGI o chiamando l'ufficio.",
  fonte: "ASUGI · risposta scritta dell'Ufficio Anagrafe Sanitaria di Gorizia del 30/10/2026",
};

// ASL Bari, Distretto unico di Bari: Guida ai Servizi del Distretto e pagine "Tipologia procedimenti amministrativi" e informativa
// dell'Anagrafe (sist.sanita.puglia.it), lette il 02/11/2026. I documenti non riportano una data di redazione.
ESENZIONE_ASL.bari = {
  asl: "ASL Bari · Distretto unico di Bari",
  intro:
    "L'attestato di esenzione per patologia è rilasciato dagli operatori dell'Anagrafe assistibili del Distretto, dopo la verifica del diritto da parte del medico dei servizi. Per l'esenzione per invalidità civile, di lavoro, di servizio o di guerra serve il verbale di invalidità.",
  titoloPassi: "Dove si presenta",
  comeSiPresenta: [
    "Per e-mail all'Anagrafe sanitaria del Distretto, indicando sempre un numero di telefono e un indirizzo e-mail per eventuali contatti",
    "Oppure consegnando l'istanza di persona, con fotocopie, in una delle sedi dell'Anagrafe: via Caduti di Via Fani 25 (Murat), via Aquilino 1 (Japigia), vico Traversa 11 (Santo Spirito), presso l'Ospedale Di Venere (Carbonara), via Cacudi 31 (San Paolo), via Giulio Petroni 47 (Carrassi)",
    "Orari di consegna: dal lunedì al venerdì 8:00–12:00. Più un pomeriggio 15:00–17:00: martedì a Murat, Santo Spirito e Carbonara; giovedì a Japigia e Carrassi; mercoledì a San Paolo",
    "Il rilascio è «in tempo reale salvo casi particolari»",
  ],
  documenti: [
    "Per patologia e malattia rara: certificazione specialistica di struttura pubblica oppure cartella clinica; copia della tessera sanitaria; copia del documento di identità",
    "Per invalidità civile, lavoro, servizio, guerra: verbale di invalidità; copia della tessera sanitaria; copia del documento di identità",
  ],
  mail: "anagrafesanitaria.dssbari@asl.bari.it",
  telefoni: [{ etichetta: "Anagrafe sanitaria · informazioni telefoniche", numero: "080 5842719" }],
  paginaUrl: "https://sist.sanita.puglia.it/de/web/asl-bari/distretti-socio-sanitari_det/-/journal_content/56/25619/dss-unico-bari",
  paginaLabel: "Pagina ASL Bari · Distretto unico di Bari",
  manca:
    "I documenti dell'ASL che descrivono la procedura non riportano una data di aggiornamento. Non sono indicati i tempi specifici per l'esenzione per invalidità né se serve l'appuntamento.",
  fonte: "ASL Bari · Guida ai Servizi del Distretto, procedimenti amministrativi e informativa dell'Anagrafe (sist.sanita.puglia.it)",
};

// ASL Salerno: pagina "Esenzione ticket" (aslsalerno.it), letta il 02/11/2026; la pagina non riporta una data di aggiornamento.
function aslSalerno(distretto: string, mail: string): SchedaEsenzioneAsl {
  return {
    asl: `ASL Salerno · Distretto di ${distretto}`,
    intro:
      "L'esenzione per malattie croniche si chiede al Servizio di medicina di base del Distretto di appartenenza, presentando una certificazione che attesti una o più malattie dell'elenco, rilasciata da una struttura ospedaliera o ambulatoriale pubblica. Con questa si ottiene un attestato di esenzione con il codice della malattia e le prestazioni esenti.",
    titoloPassi: "Come si presenta la richiesta",
    comeSiPresenta: [
      "Di persona agli Sportelli Esenzione del Distretto di appartenenza",
      `Oppure per e-mail ordinaria all'indirizzo del proprio distretto di residenza (${mail}), allegando in PDF carta di identità e tessera sanitaria (fronte e retro): la risposta con il certificato provvisorio di esenzione arriva sulla stessa casella. La pagina indica questa via per chi chiede l'autocertificazione per la prima volta per reddito o per patologia/condizione`,
    ],
    documenti: [
      "Certificazione di una o più malattie dell'elenco, rilasciata da una struttura ospedaliera o ambulatoriale pubblica. Sono validi anche: cartella clinica di una struttura ospedaliera pubblica; verbale di invalidità; cartella clinica di una struttura ospedaliera privata accreditata (previa valutazione del medico del Distretto sanitario); certificati delle Commissioni mediche degli Ospedali militari; certificazioni di istituzioni sanitarie pubbliche di Paesi dell'Unione europea",
      "Carta di identità e tessera sanitaria (fronte e retro) in PDF se si scrive per e-mail",
    ],
    mail,
    telefoni: [],
    paginaUrl: "https://www.aslsalerno.it/pagina2502_esenzione-ticket.html",
    paginaLabel: "Pagina ASL Salerno · Esenzione ticket",
    manca:
      "La pagina non indica indirizzo, telefono e orari degli Sportelli Esenzione, né l'appuntamento. Per l'esenzione per invalidità non descrive documenti né ufficio. La pagina non riporta la data di aggiornamento.",
    fonte: "ASL Salerno · pagina «Esenzione ticket» (aslsalerno.it)",
  };
}
ESENZIONE_ASL["nocera-inferiore"] = aslSalerno("Nocera Inferiore", "ds60.ticket@aslsalerno.it");
ESENZIONE_ASL.angri = aslSalerno("Angri/Scafati", "ds61.ticket@aslsalerno.it");
ESENZIONE_ASL.scafati = aslSalerno("Angri/Scafati", "ds61.ticket@aslsalerno.it");
ESENZIONE_ASL.sarno = aslSalerno("Sarno/Pagani", "ds62.ticket@aslsalerno.it");
ESENZIONE_ASL.pagani = aslSalerno("Sarno/Pagani", "ds62.ticket@aslsalerno.it");
ESENZIONE_ASL["cava-de-tirreni"] = aslSalerno("Cava de' Tirreni/Costa d'Amalfi", "ds63.ticket@aslsalerno.it");
ESENZIONE_ASL.eboli = aslSalerno("Eboli/Buccino", "ds64.ticket@aslsalerno.it");
ESENZIONE_ASL.battipaglia = aslSalerno("Battipaglia", "ds65.ticket@aslsalerno.it");
ESENZIONE_ASL.salerno = aslSalerno("Salerno", "ds66.ticket@aslsalerno.it");

// AUSL Ferrara: risposta scritta dell'URP del 02/11/2026, che riporta il testo della pagina ufficiale.
ESENZIONE_ASL.ferrara = {
  asl: "AUSL Ferrara",
  intro:
    "Hanno diritto all'esenzione per patologia i cittadini con malattie croniche tra quelle previste dal DPCM 12 gennaio 2017 (Nuovi LEA): cittadini italiani, comunitari e stranieri iscritti al Servizio sanitario nazionale, e cittadini comunitari con tessera sanitaria (TEAM).",
  titoloPassi: "Come si chiede",
  comeSiPresenta: [
    "Agli Sportelli Unici CUP: la persona interessata, o chi ha una delega, presenta la certificazione della patologia, rilasciata su apposito modulo da uno specialista di una struttura pubblica",
    "Il diritto all'esenzione risulta sul documento di iscrizione al Servizio sanitario regionale che rilasciano gli Sportelli Unici CUP. L'AUSL registra l'esenzione e la comunica al tuo medico di famiglia o pediatra",
    "Malattia rara: ti rivolgi allo Sportello Unico CUP dell'AUSL di residenza con il certificato di diagnosi rilasciato da uno dei Centri accreditati della Rete nazionale malattie rare",
    "Invalidità: lo Sportello Unico CUP dell'AUSL di residenza rilascia la certificazione di esenzione a chi (o il suo delegato) presenta il documento che attesta lo stato di invalidità. Stato e grado di invalidità li accerta la Commissione medica dell'AUSL di residenza",
    "Hanno diritto all'esenzione per invalidità, tra gli altri, i cittadini con invalidità civile, di guerra o del lavoro, con cecità o sordomutismo, iscritti al Servizio sanitario nazionale. Per i cittadini comunitari con tessera TEAM, la certificazione di invalidità rilasciata all'estero la valuta un medico funzionario del Distretto",
  ],
  importante:
    "Per usare l'esenzione, il medico di famiglia, il pediatra o lo specialista deve scrivere il codice della patologia (o dell'invalidità riconosciuta) nell'apposito campo dell'impegnativa. L'esenzione può essere totale o parziale (solo le prestazioni legate alla patologia) e la tessera può avere scadenza limitata o illimitata.",
  telefoni: [],
  paginaUrl: "https://www.ausl.fe.it/come-fare-per/esenzioni-ticket",
  paginaLabel: "Esenzioni ticket · AUSL Ferrara",
  manca:
    "L'AUSL non ha indicato indirizzi e orari degli Sportelli Unici CUP, l'elenco dei documenti, se serve l'appuntamento, se si può inviare per mail né i tempi di rilascio: chiedili allo Sportello Unico CUP.",
  fonte: "AUSL Ferrara · risposta scritta dell'URP del 02/11/2026 e pagina ufficiale sulle esenzioni ticket (ultimo aggiornamento 11/06/2025)",
};

// ASP Catanzaro: risposta scritta dell'URP del 02/11/2026 (distretti citati: Catanzaro e Lamezia Terme).
ESENZIONE_ASL.catanzaro = {
  asl: "ASP Catanzaro",
  intro:
    "La richiesta di esenzione per patologia si presenta agli sportelli del Servizio Cure Primarie – Assistenza Integrativa ed Esenzione Ticket dell'ASP di Catanzaro, oppure nei distretti sanitari territoriali, come quelli di Lamezia Terme e di Catanzaro.",
  titoloPassi: "Dove si presenta",
  comeSiPresenta: [
    "Agli sportelli del Servizio Cure Primarie – Assistenza Integrativa ed Esenzione Ticket, all'ASP o nel distretto sanitario territoriale (per esempio Lamezia Terme o Catanzaro)",
  ],
  documenti: [
    "Certificato medico che attesti la patologia cronica o rara, rilasciato da uno specialista di una struttura pubblica",
    "Tessera sanitaria (TS-CNS) in corso di validità",
    "Documento di identità valido",
    "Se la richiesta è collegata a un'invalidità riconosciuta: il verbale di invalidità civile rilasciato dalla commissione medica di prima istanza",
  ],
  telefoni: [{ etichetta: "URP ASP Catanzaro, Via Acri 24 (lun–ven 9–12)", numero: "0961 7033543" }],
  mail: "urp@asp.cz.it",
  manca:
    "L'ASP non ha indicato indirizzi e orari degli sportelli del Servizio, se serve l'appuntamento, se si può inviare per mail o PEC né i tempi di rilascio: chiedili all'URP dell'ASP o al tuo distretto.",
  fonte: "ASP Catanzaro · risposta scritta dell'URP del 02/11/2026",
};
// Lamezia Terme: in più i dati della pagina ufficiale del Servizio (aggiornata il 15/10/2026, letta il 02/11/2026).
ESENZIONE_ASL["lamezia-terme"] = {
  ...ESENZIONE_ASL.catanzaro,
  intro:
    "A Lamezia Terme la richiesta di esenzione per patologia si presenta agli sportelli del Servizio Assistenza Integrativa ed Esenzione Ticket del Distretto, in Piazza Borelli 12, piano terra.",
  comeSiPresenta: [
    "Di persona agli sportelli del Servizio Assistenza Integrativa ed Esenzione Ticket, Distretto Socio Sanitario di Lamezia Terme, Piazza Borelli 12, piano terra",
  ],
  telefoni: [
    { etichetta: "Segreteria del Servizio (11:30–12:30)", numero: "0968 208403" },
    { etichetta: "URP, sportello Ospedale di Lamezia (lun–ven 9–12)", numero: "0968 208919" },
  ],
  paginaUrl:
    "https://www.asp.cz.it/distretti-sanitari/distretto-socio-sanitario-di-lamezia-terme/cure-primarie-servizio-assistenza-integrativa-ed-esenzione-ticket/",
  paginaLabel: "Servizio Assistenza Integrativa ed Esenzione Ticket · ASP Catanzaro",
  manca:
    "La pagina dell'ASP non indica i giorni e gli orari di apertura al pubblico, se serve l'appuntamento, se si può inviare per mail o PEC né i tempi di rilascio: chiedili alla segreteria al telefono.",
  fonte:
    "ASP Catanzaro · risposta scritta dell'URP del 02/11/2026 e pagina ufficiale del Servizio (aggiornata il 15/10/2026)",
};

// ASST Lecco: l'Ufficio di Pubblica Tutela ha indicato solo la pagina ufficiale con l'elenco delle esenzioni (02/11/2026).
ESENZIONE_ASL.lecco = {
  asl: "ASST Lecco",
  intro:
    "L'URP dell'ASST Lecco indica che le richieste relative alle esenzioni non passano da lui: vanno presentate direttamente agli sportelli Scelta e Revoca presenti su tutto il territorio provinciale, oppure online dallo sportello SIOC (Servizio Istanze Online Cittadino), a cui ci si registra senza bisogno dello SPID.",
  titoloPassi: "Dove si presenta",
  comeSiPresenta: [
    "Di persona agli sportelli Scelta e Revoca dell'ASST Lecco: servizi, sedi e orari sono sulla pagina ufficiale",
    "Online dallo sportello SIOC (serve registrarsi, non serve lo SPID)",
  ],
  documenti: [
    "Patologia cronica: certificazione rilasciata da un medico specialista di una struttura pubblica o privata accreditata, e tessera sanitaria. L'esenzione vale per le prestazioni correlate alla patologia",
    "Malattia rara: certificazione redatta su apposita modulistica dal Presidio ospedaliero abilitato a diagnosticare la malattia rara",
    "Invalidità civile riconosciuta dall'INPS: il verbale che attesta l'invalidità, da portare agli sportelli Scelta e Revoca",
  ],
  telefoni: [{ etichetta: "URP ASST Lecco", numero: "0341 489105" }],
  paginaUrl: "https://www.asst-lecco.it/scelta-e-revoca/",
  paginaLabel: "Sportelli Scelta e Revoca · ASST Lecco",
  altriLink: [
    { label: "Sportello online SIOC · ASST Lecco", url: "https://sioc.asst-lecco.it/SIOC/" },
    { label: "Esenzioni · ASST Lecco", url: "https://www.asst-lecco.it/esenzioni/" },
  ],
  manca:
    "L'ASST non ha indicato se serve l'appuntamento né i tempi di rilascio: chiedili allo sportello Scelta e Revoca. L'elenco dei documenti viene dalla scheda informativa di Regione Lombardia, aggiornata al 22/08/2019: conferma allo sportello che sia ancora valido.",
  fonte:
    "ASST Lecco · risposta dell'Ufficio di Pubblica Tutela del 02/11/2026 e risposta dell'URP del 02/11/2026 · Regione Lombardia, scheda informativa «Ticket ed Esenzioni» (aggiornata al 22/08/2019)",
};

// ASL Napoli 2 Nord, Distretto 39 (Villaricca, Qualiano, Calvizzano): pagine «Esenzioni per patologia» e «Centro Unico
// Prenotazioni (CUP)» (pubblicate il 12/03/2025, aggiornate al 20/03/2025) e scheda del Distretto (aggiornata al 16/04/2026)
// sul portale trasparenza.aslnapoli2nord.it, lette il 02/11/2026.
ESENZIONE_ASL.villaricca = {
  asl: "ASL Napoli 2 Nord · Distretto 39",
  intro:
    "Il Distretto 39 assiste i residenti dei Comuni di Villaricca, Qualiano e Calvizzano. Secondo la pagina dell'ASL, l'esenzione va richiesta all'ASL territorialmente competente. Il Centro Unico Prenotazioni (CUP) del Distretto gestisce le esenzioni per patologia con documentazione sanitaria e/o verbale di invalidità civile.",
  titoloPassi: "Dove si presenta",
  comeSiPresenta: [
    "Nella sede del Distretto 39 a Villaricca, in Corso Italia (adiacenze Carabinieri), dove si trovano gli sportelli del CUP",
    "Se non puoi andare di persona, serve una delega scritta e firmata, con il documento d'identità in corso di validità del delegato e del delegante",
  ],
  documenti: [
    "Documento di identità, tessera sanitaria e codice fiscale",
    "Certificato medico recente (massimo 3 mesi) che attesta la malattia, rilasciato da uno specialista di una struttura pubblica o accreditata",
    "Oppure copia della cartella clinica (la valuta un medico dell'ASL) rilasciata da un ospedale pubblico o da una struttura accreditata",
    "Copia del verbale di invalidità, se c'è",
  ],
  mail: "distretto39@aslnapoli2nord.it",
  pec: "distretto39@pec.aslnapoli2nord.it",
  telefoni: [{ etichetta: "Distretto 39 · attivo dal lunedì al venerdì, 9:00–13:00", numero: "081 18840135" }],
  paginaUrl: "https://trasparenza.aslnapoli2nord.it/index.php?id_cat=0&id_doc=19292&id_oggetto=13",
  paginaLabel: "Pagina ASL Napoli 2 Nord · Esenzioni per patologia",
  manca:
    "Le pagine non indicano gli orari degli sportelli del CUP, se serve la prenotazione né i tempi di rilascio. E-mail e PEC sono quelle generali del Distretto: le pagine non dicono che si possa presentare la richiesta per via telematica. Le pagine sono state aggiornate il 20/03/2025.",
  fonte: "ASL Napoli 2 Nord · portale trasparenza, pagine del Distretto 39 (lette il 02/11/2026)",
};

// ASL Biella: l'URP ha indicato per iscritto la pagina ufficiale (risposta del 02/11/2026).
ESENZIONE_ASL.biella = {
  asl: "ASL Biella",
  intro:
    "Per sapere come ottenere e rinnovare l'esenzione ticket, l'ASL Biella rimanda alla sua pagina ufficiale: la trovi con il pulsante qui sotto.",
  telefoni: [],
  paginaUrl: "https://aslbi.piemonte.it/come-fare-per/come-ottenere-e-rinnovare-lesenzione-ticket",
  paginaLabel: "Come ottenere e rinnovare l'esenzione ticket · ASL Biella",
  manca:
    "La risposta ricevuta dall'ASL non indica sedi, orari, appuntamento, documenti né tempi: consulta la pagina ufficiale o chiedi all'ASL.",
  fonte: "ASL Biella · risposta scritta dell'URP del 02/11/2026",
};

// ASST Papa Giovanni XXIII (Bergamo): l'URP ha indicato per iscritto le pagine ufficiali (risposta del 02/11/2026).
ESENZIONE_ASL.bergamo = {
  asl: "ASST Papa Giovanni XXIII",
  intro:
    "L'URP dell'ASST Papa Giovanni XXIII indica che i cittadini che fanno capo all'ASST devono rivolgersi al proprio Distretto di residenza (Borgo Palazzo – Bergamo e Valli). Le pagine ufficiali sulle esenzioni ticket sono qui sotto.",
  comeSiPresenta: [
    "Di norma negli Uffici di scelta/revoca del Distretto di residenza: ti rilasciano l'attestato di esenzione se presenti la documentazione richiesta",
    "Per sapere se hai diritto all'esenzione, la pagina dell'ASST rimanda al sito di Regione Lombardia",
  ],
  importante:
    "Se risiedi in un'altra regione, l'ASST non può rilasciare l'attestato di esenzione (con l'avvio dell'Anagrafe Nazionale degli Assistiti): va chiesto all'ASL del tuo Comune di residenza.",
  telefoni: [{ etichetta: "URP ASST Papa Giovanni XXIII", numero: "035 2675010" }],
  paginaUrl: "https://www.asst-pg23.it/come-fare/pagamento-ticket/esenzioni",
  paginaLabel: "Esenzioni ticket · ASST Papa Giovanni XXIII",
  altriLink: [
    {
      label: "Case di Comunità: scelta e revoca, esenzioni · ASST Papa Giovanni XXIII",
      url: "https://www.asst-pg23.it/servizi-territoriali/case-comunita/scelta-revoca-del-medico-esenzioni-smarrimento-tessera-pinpuk-deleghe-FSE-assistenza-allestero",
    },
  ],
  manca:
    "La risposta ricevuta dall'ASST non indica documenti, sedi e orari degli sportelli, appuntamento né tempi di rilascio: consulta le pagine ufficiali o chiedi all'URP.",
  fonte: "ASST Papa Giovanni XXIII · risposta scritta dell'URP del 02/11/2026 e pagina ufficiale «Esenzioni» (aggiornata all'08/10/2026)",
};

// ASST Rhodense (Rho, Bollate, Garbagnate Milanese): risposta scritta dell'Area Accoglienza – CUP aziendali del
// 03/11/2026 e pagina ufficiale «Scelta e Revoca del medico» (sezione Esenzioni), letta il 03/11/2026.
const ESENZIONE_RHODENSE: SchedaEsenzioneAsl = {
  asl: "ASST Rhodense",
  intro:
    "L'esenzione per patologia o invalidità si può chiedere online dal portale SIOC (Sportello Istanze Online Cittadino, dopo la registrazione) oppure di persona nelle sedi di rilascio dell'ASST Rhodense.",
  titoloPassi: "Come si chiede",
  comeSiPresenta: [
    "Online dal portale SIOC: ti registri e fai la richiesta in autonomia",
    "Di persona, solo se non puoi usare il portale: nelle sedi di rilascio dell'ASST. Per l'appuntamento chiami il numero verde regionale 800 638638 (da fisso) o 02 999 599 (da cellulare), oppure usi prenotasalute.regione.lombardia.it o l'app Salutile",
    "L'ASST chiede di prenotare l'appuntamento solo se non riesci a usare i servizi online nemmeno con l'aiuto di un familiare o di chi ti assiste",
  ],
  documenti: [
    "Tessera sanitaria con microchip e documento di identità in corso di validità (obbligatori all'appuntamento). Senza tessera con microchip, ti presenti agli sportelli il giorno e all'ora dell'appuntamento",
    "Patologia cronica: certificazione di un medico specialista (struttura pubblica o privata accreditata). Il medico di famiglia può certificare solo alcune patologie, tra cui il diabete mellito e l'ipertensione",
    "Malattia rara: certificazione su apposita modulistica rilasciata dal Presidio ospedaliero abilitato alla diagnosi",
    "Invalidità civile: copia del verbale della Commissione di accertamento dell'invalidità",
    "Se la pratica è per conto di un'altra persona, anche dello stesso nucleo familiare: delega scritta e firmata e copia del documento di identità del delegato",
  ],
  importante:
    "Se risiedi in un'altra regione, l'ASST non può rilasciare l'attestato di esenzione (con l'avvio dell'Anagrafe Nazionale degli Assistiti): va chiesto all'ASL del tuo Comune di residenza.",
  telefoni: [
    { etichetta: "CUP / Scelta e Revoca · Casa di Comunità di Bollate", numero: "02 994305880" },
    { etichetta: "Appuntamento allo sportello (da fisso)", numero: "800 638638" },
    { etichetta: "Appuntamento allo sportello (da cellulare)", numero: "02 999 599" },
  ],
  paginaUrl: "https://www.asst-rhodense.it/v2/ambiti-territoriali/scelta-revoca.html",
  paginaLabel: "Scelta e Revoca · ASST Rhodense",
  altriLink: [{ label: "Portale SIOC · ASST Rhodense", url: "https://sioc.asst-rhodense.it/SIOC" }],
  manca:
    "L'ASST non indica gli orari di apertura degli sportelli né i tempi di rilascio: chiedili all'ASST.",
  fonte:
    "ASST Rhodense · risposta scritta dell'Area Accoglienza – CUP aziendali del 03/11/2026 e pagina ufficiale «Scelta e Revoca del medico» (letta il 03/11/2026)",
};
ESENZIONE_ASL.rho = {
  ...ESENZIONE_RHODENSE,
  comeSiPresenta: [
    ...(ESENZIONE_RHODENSE.comeSiPresenta ?? []),
    "Sedi per chi abita a Rho: sportello Scelta e Revoca di Rho (Via Legnano 22) e Casa di Comunità di Passirana di Rho (Via Settembrini 1)",
  ],
};
ESENZIONE_ASL.bollate = {
  ...ESENZIONE_RHODENSE,
  comeSiPresenta: [
    ...(ESENZIONE_RHODENSE.comeSiPresenta ?? []),
    "Sede per chi abita a Bollate: Casa di Comunità di Bollate (Via Piave 20)",
  ],
};
ESENZIONE_ASL["garbagnate-milanese"] = {
  ...ESENZIONE_RHODENSE,
  comeSiPresenta: [
    ...(ESENZIONE_RHODENSE.comeSiPresenta ?? []),
    "Sede per chi abita a Garbagnate Milanese: Casa di Comunità di Garbagnate Milanese (Via per Cesate 62)",
  ],
};

// ASST Bergamo Ovest (Treviglio): l'URP ha indicato per iscritto la pagina dei Distretti (risposta del 02/11/2026).
ESENZIONE_ASL.treviglio = {
  asl: "ASST Bergamo Ovest",
  intro:
    "L'URP dell'ASST Bergamo Ovest indica la pagina ufficiale con i Distretti e le informazioni utili per le richieste: la trovi con il pulsante qui sotto.",
  telefoni: [{ etichetta: "URP ASST Bergamo Ovest", numero: "0363 424325" }],
  paginaUrl: "https://www.asst-bgovest.it/491.asp",
  paginaLabel: "Distretti · ASST Bergamo Ovest",
  manca:
    "La risposta ricevuta dall'ASST non indica documenti, sedi e orari, appuntamento né tempi di rilascio: consulta la pagina ufficiale o chiedi all'URP.",
  fonte: "ASST Bergamo Ovest · risposta scritta dell'URP del 02/11/2026",
};
