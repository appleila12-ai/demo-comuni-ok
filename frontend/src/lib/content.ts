// Contenuti normativi TutelApp — guida passo-passo, certificato introduttivo,
// possibilità Legge 104 e Invalidità Civile.
// Fonti: L. 104/1992, L. 68/1999, D.Lgs. 151/2001, D.Lgs. 105/2022, D.Lgs. 62/2024.

export interface GuideStep {
  title: string;
  body: string;
}

/** Percorso passo-passo dove la Riforma della disabilità (D.Lgs. 62/2024) è attiva */
export const NEXT_STEPS: GuideStep[] = [
  {
    title: "Vai dal tuo medico con la diagnosi",
    body: "Chiedi al medico curante (o a un medico certificatore) il Certificato Medico Introduttivo e fattelo inviare all'INPS. Nella tua provincia questo certificato avvia da solo la valutazione: non serve una domanda separata.",
  },
  {
    title: "Un'unica valutazione di base",
    body: "Una sola commissione riconosce insieme l'invalidità civile e la condizione di disabilità (handicap). Una sola visita e un solo verbale: niente più procedure doppie.",
  },
  {
    title: "Ricevi il verbale unico",
    body: "Il verbale indica la condizione di disabilità e il suo livello (lieve, medio, grave, gravissimo). Da qui attivi esenzioni, agevolazioni fiscali e permessi.",
  },
  {
    title: "Chiedi la valutazione multidimensionale",
    body: "Se vuoi, i Servizi Sociali del Comune insieme all'UVM (Unità di Valutazione Multidimensionale) costruiscono con te il tuo Progetto di Vita personalizzato.",
  },
  {
    title: "Il tuo Progetto di Vita è attivo",
    body: "Ricevi sostegni e servizi su misura per i tuoi obiettivi. Il Progetto si può rivedere e aggiornare nel tempo, quando qualcosa cambia.",
  },
];

/** Percorso passo-passo dove la riforma NON è ancora attiva (regole valide fino al 31/12/2026) */
export const PASSI_REGOLE_ATTUALI: GuideStep[] = [
  {
    title: "Vai dal tuo medico con la diagnosi",
    body: "Chiedi al medico curante (o a un medico certificatore) il Certificato Medico Introduttivo. Il medico lo invia all'INPS e ti dà una ricevuta con un codice: conservala. Il certificato vale 90 giorni.",
  },
  {
    title: "Fai la domanda all'INPS entro 90 giorni",
    body: "Con il codice del certificato presenti la domanda all'INPS: online con SPID oppure tramite un patronato, che lo fa gratis. Nella domanda indichi cosa chiedi: invalidità civile, Legge 104 o entrambe.",
  },
  {
    title: "Vai alla visita",
    body: "Ricevi la convocazione con data e luogo. Porta un documento e tutti i referti. Puoi farti accompagnare da un medico di fiducia. Se la persona non può uscire di casa, il medico può chiedere la visita a domicilio.",
  },
  {
    title: "Ricevi il verbale",
    body: "Il verbale indica la percentuale di invalidità e, se l'hai chiesta, la Legge 104 (comma 1 oppure comma 3, cioè grave). Da qui attivi esenzioni, agevolazioni e permessi. Se non sei d'accordo, hai 6 mesi per fare ricorso.",
  },
  {
    title: "Chiedi un progetto personalizzato",
    body: "Con il verbale puoi chiedere ai Servizi Sociali del Comune un progetto personalizzato di sostegni. Dal 2027, con la riforma, si chiamerà Progetto di Vita.",
  },
];

/** I passi giusti per il territorio del Comune attivo */
export function passiPercorso(riformaAttiva: boolean): GuideStep[] {
  return riformaAttiva ? NEXT_STEPS : PASSI_REGOLE_ATTUALI;
}

/** Spiegazione del Certificato Medico Introduttivo (Riforma 2027) */
export const CERT_EXPLAINER = {
  title: "Cos'è il Certificato Medico Introduttivo?",
  intro:
    "È il documento che avvia la pratica per il riconoscimento dell'invalidità e della disabilità.",
  points: [
    "Lo compila il tuo medico curante (o un medico certificatore abilitato) e lo invia online all'INPS.",
    "Contiene le diagnosi e i dati clinici: porta con te referti e documentazione aggiornata.",
    "Ti viene consegnata una ricevuta con un codice: conservala, è il riferimento della tua pratica.",
    "Dove la riforma è attiva, il certificato basta ad avviare la valutazione. Altrove, entro 90 giorni serve anche la domanda all'INPS (online o tramite patronato).",
    "Può essere a pagamento: chiedi al tuo medico quanto costa.",
  ],
  reform:
    "Con la Riforma della disabilità (D.Lgs. 62/2024), pienamente attiva dal 2027 in tutta Italia, la valutazione è unica e il certificato del medico la avvia da solo: una sola visita, un solo verbale.",
};

export interface BenefitItem {
  text: string;
  workOnly?: boolean;
}

/** Cosa diventa possibile se viene riconosciuta la Legge 104 (art. 3 c. 3) */
export const LAW104_BENEFITS: BenefitItem[] = [
  { text: "3 giorni al mese di permessi retribuiti, frazionabili anche in ore (art. 33)", workOnly: true },
  { text: "Congedo straordinario retribuito fino a 2 anni per assistere un familiare convivente", workOnly: true },
  { text: "Scelta della sede di lavoro più vicina e diritto di rifiutare il trasferimento", workOnly: true },
  { text: "Priorità nell'accesso allo smart working (D.Lgs. 105/2022)", workOnly: true },
  { text: "IVA al 4% e detrazione IRPEF 19% su auto, ausili e strumenti informatici" },
  { text: "Esenzione bollo auto e imposta di trascrizione per un veicolo" },
  { text: "Detrazioni per l'abbattimento delle barriere architettoniche" },
];

export interface InvalidityBracket {
  range: string;
  benefit: string;
  workOnly?: boolean;
}

/** Cosa spetta in base alla percentuale di Invalidità Civile */
export const INVALIDITY_BRACKETS: InvalidityBracket[] = [
  { range: "dal 34%", benefit: "Ausili e protesi gratuiti legati alla patologia riconosciuta" },
  { range: "dal 46%", benefit: "Iscrizione al collocamento mirato per l'inserimento lavorativo (L. 68/1999)" },
  { range: "dal 51%", benefit: "Congedo per cure fino a 30 giorni l'anno (lavoratori dipendenti)", workOnly: true },
  { range: "dal 67%", benefit: "Esenzione ticket sanitario e agevolazioni sui trasporti (varia per regione)" },
  { range: "dal 74%", benefit: "Assegno mensile di assistenza (età lavorativa, entro limiti di reddito)" },
  { range: "100%", benefit: "Pensione di inabilità; indennità di accompagnamento se serve assistenza continua" },
];

/** Nota per Coniuge/Partner — D.Lgs. 105/2022 */
export const PARTNER_NOTE =
  "Anche il convivente di fatto ha gli stessi diritti del coniuge per permessi e congedo straordinario (D.Lgs. 105/2022), a condizione che la convivenza sia registrata all'anagrafe (L. 76/2016). Vale anche per le unioni civili.";
