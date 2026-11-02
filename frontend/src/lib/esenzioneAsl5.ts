// Esenzione ticket per patologia cronica o invalidità: scheda dell'ASL 5 Spezzino.
// Fonte unica: scheda "Esenzione per patologia - invalidità" del Dipartimento Cure
// Primarie, Distretti 17-18-19, ASL 5 (documento ufficiale "Schede attività anagrafe sanitaria").
// Qui non c'è nulla che non sia scritto in quella scheda o nella risposta scritta dell'URP
// (30/10/2026): l'URP ha verificato con i Distretti che i dati della pagina sull'anagrafe
// sanitaria sono corretti e ha indicato quali Comuni fanno capo a ciascun distretto.
// Sedi, orari, telefoni e mail degli sportelli (SPORTELLI_ASL5) vengono dalla pagina ufficiale dell'ASL 5 sull'anagrafe sanitaria, letta il 02/11/2026.
// Da ricontrollare con l'ASL almeno una volta l'anno.

export type CasoEsenzione = "io" | "minore" | "tutela";

export const CASI_ESENZIONE: { id: CasoEsenzione; label: string }[] = [
  { id: "io", label: "La chiedo per me" },
  { id: "minore", label: "La chiedo per un figlio minore" },
  { id: "tutela", label: "Sono tutore o amministratore di sostegno" },
];

/** Cosa portare per tutti, qualunque sia il caso */
export const DOCUMENTI_COMUNI = [
  "Documentazione medica (referti, esiti, istologici, verbale di invalidità), oppure il modulo con il codice di esenzione rilasciato da uno specialista ambulatoriale pubblico",
  "Il modulo \"Richiesta di riconoscimento esenzione ticket per patologia cronica o invalidità\", compilato",
  "Documento di riconoscimento di chi presenta la richiesta",
  "Codice fiscale o tessera sanitaria delle persone interessate",
];

/** In più, a seconda del caso */
export const DOCUMENTI_PER_CASO: Record<CasoEsenzione, string[]> = {
  io: [],
  minore: [
    "Documenti di riconoscimento di entrambi i genitori",
    "Delega del genitore non convivente",
  ],
  tutela: [
    "Documento di riconoscimento del tutore o amministratore di sostegno",
    "Documento di riconoscimento della persona tutelata o amministrata",
  ],
};

/** Se a presentare la richiesta va un'altra persona */
export const DELEGA = [
  "Delega firmata (il modulo dell'ASL ha una pagina apposta)",
  "Documento di riconoscimento di chi delega e di chi è delegato",
  "L'ASL precisa che la delega occorre anche per i componenti dello stesso nucleo familiare del richiedente, con il loro documento di riconoscimento",
];

/** Documenti che l'ASL accetta come prova */
export const PROVE_PATOLOGIA = [
  "Certificato recente con la diagnosi e il codice della patologia cronica, rilasciato da un medico specialista di una struttura pubblica",
  "Cartella clinica rilasciata da una struttura ospedaliera pubblica",
  "Verbale di invalidità",
  "Cartella clinica di una struttura ospedaliera privata accreditata, dopo la valutazione del medico del Distretto sanitario dell'ASL di residenza",
  "Certificati delle Commissioni mediche degli Ospedali militari",
  "Certificazioni di Istituzioni sanitarie pubbliche di Paesi dell'Unione europea",
];

export const PROVA_INVALIDITA = "Copia del verbale rilasciato dalla commissione medica competente";

export const NOTA_DOMICILIO_SANITARIO =
  "Nel modulo c'è una riga da compilare solo se hai il domicilio sanitario presso l'ASL 5: indichi i codici di esenzione per patologia già inseriti presso l'ASL di residenza, con la data da cui valgono e la scadenza.";

export const COME_SI_PRESENTA = [
  "Da remoto: per mail all'indirizzo del distretto a cui appartieni",
  "Di persona: ad accesso libero, nei giorni e negli orari del tuo distretto",
];

export const NOTA_MAIL =
  "Se mandi la richiesta per mail ordinaria (non PEC), nel modulo va compilata anche l'autorizzazione all'invio di documenti per posta elettronica non certificata, con l'indirizzo mail, la data e la firma.";

export const NOTA_MANCA =
  "Gli indirizzi mail e gli orari di apertura degli sportelli del tuo distretto sono sulla pagina dell'ASL 5 sull'anagrafe sanitaria. L'ufficio relazioni con il pubblico (URP) dell'ASL ha confermato che i dati pubblicati lì sono corretti. Se hai dubbi, puoi chiamare il centralino.";

/** Pagina indicata dall'URP di ASL 5 (30/10/2026) per sedi, mail e orari degli sportelli */
export const URL_ANAGRAFE_ASL5 =
  "https://www.asl5.liguria.it/PerilCittadino/Serviziterritoriali/CurePrimarieeAttivit%C3%A0Distrettuali/Attivit%C3%A0dianagrafesanitaria.aspx";

/**
 * Comuni per distretto, come comunicato dall'URP di ASL 5 il 30/10/2026.
 * Distretto 17: elenco sotto; Distretto 18: Portovenere, La Spezia, Lerici;
 * Distretto 19: "i restanti" Comuni della provincia.
 */
const DISTRETTO_17 = [
  "Levanto", "Beverino", "Bolano", "Bonassola", "Borghetto Vara", "Brugnato",
  "Calice al Cornoviglio", "Carrodano", "Deiva Marina", "Follo", "Framura",
  "Monterosso", "Monterosso al Mare", "Pignone", "Riccò del Golfo", "Riomaggiore",
  "Rocchetta Vara", "Sesta Godano", "Vernazza", "Zignago",
];
const DISTRETTO_18 = ["Portovenere", "La Spezia", "Lerici"];

const chiave = (nome: string) =>
  nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, "");

export type DistrettoAsl5 = 17 | 18 | 19;

/** Distretto ASL 5 di un Comune della provincia della Spezia (dal nome del Comune) */
export function distrettoAsl5(nomeComune: string): DistrettoAsl5 {
  const k = chiave(nomeComune);
  if (DISTRETTO_17.some((c) => chiave(c) === k)) return 17;
  if (DISTRETTO_18.some((c) => chiave(c) === k)) return 18;
  return 19;
}

/**
 * Sportelli di anagrafe sanitaria dell'ASL 5, copiati dalla pagina ufficiale
 * "Attività di anagrafe sanitaria" (letta il 02/11/2026; la pagina non riporta la data di
 * aggiornamento). L'URP di ASL 5 ha confermato il 30/10/2026 che i dati di quella pagina sono
 * corretti. Dove la pagina non scrive un dato, qui il campo manca: non va completato da altre fonti.
 */
export type SportelloAsl5 = {
  distretto: DistrettoAsl5;
  localita: string;
  indirizzo?: string;
  orari: string[];
  telefoni: string[];
  mail: string;
  /** Solo se la pagina lo scrive */
  appuntamento?: string;
};

export const SPORTELLI_ASL5: SportelloAsl5[] = [
  {
    distretto: 17,
    localita: "Ceparana",
    indirizzo: "Casa della Comunità, Via Garibaldi 12, Ceparana",
    orari: ["Dal lunedì al venerdì dalle 8:00 alle 12:00", "Martedì e giovedì dalle 14:30 alle 16:00"],
    telefoni: ["0187 604950", "0187 604956"],
    mail: "anagrafe.cep@asl5.liguria.it",
    appuntamento: "Accesso anche su appuntamento, contattando i numeri 0187/604950-956",
  },
  {
    distretto: 17,
    localita: "Levanto",
    indirizzo: "Piazza Cavour, presso il Comune (piano terra)",
    orari: ["Lunedì, martedì, giovedì e venerdì dalle 8:00 alle 13:00"],
    telefoni: ["0187 533844"],
    mail: "anagrafe.lev@asl5.liguria.it",
  },
  {
    distretto: 17,
    localita: "Brugnato",
    orari: ["Lunedì e mercoledì dalle 8:00 alle 12:00"],
    telefoni: ["0187 534800"],
    mail: "anagrafe.cep@asl5.liguria.it",
  },
  {
    distretto: 18,
    localita: "La Spezia",
    indirizzo: "Via XXIV Maggio 139",
    orari: [
      "Aperto al pubblico: lunedì, mercoledì e venerdì dalle 8:00 alle 12:00; martedì e giovedì dalle 8:00 alle 12:00 e dalle 14:00 alle 16:00",
      "Per telefono: lunedì, mercoledì e venerdì dalle 8:00 alle 10:00; martedì e giovedì dalle 8:00 alle 10:00 e dalle 14:00 alle 16:00",
    ],
    telefoni: ["0187 533580"],
    mail: "anagrafe.sp@asl5.liguria.it",
  },
  {
    distretto: 18,
    localita: "Lerici",
    orari: ["Dal lunedì al sabato dalle 7:30 alle 12:00"],
    telefoni: ["0187 534901", "0187 534902"],
    mail: "anagrafe.sp@asl5.liguria.it",
  },
  {
    distretto: 19,
    localita: "Sarzana",
    indirizzo: "Via Paci 1",
    orari: ["Dal lunedì al venerdì dalle 8:00 alle 12:00", "Martedì e giovedì dalle 14:30 alle 16:00"],
    telefoni: ["0187 604332", "0187 604704"],
    mail: "anagrafe.sz@asl5.liguria.it",
  },
];

export const NOTA_SPORTELLI =
  "L'ASL scrive che ci si rivolge al presidio di competenza, individuato in base alla residenza anagrafica (o al domicilio sanitario). Sedi, orari, telefoni e mail sono quelli della pagina dell'ASL 5 sull'anagrafe sanitaria (letta il 02/11/2026; la pagina non indica la data di aggiornamento). L'ufficio relazioni con il pubblico dell'ASL ha confermato il 30/10/2026 che i dati pubblicati lì sono corretti. Se dall'ASL cambia qualcosa, controlla la pagina ufficiale.";

export const FONTE_ESENZIONE =
  "Scheda ASL 5 · Dipartimento Cure Primarie · Distretti 17-18-19; risposta scritta dell'URP ASL 5 del 30/10/2026";
