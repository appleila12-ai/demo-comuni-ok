// Contenuti normativi TutelApp — guida passo-passo, certificato introduttivo,
// possibilità Legge 104 e Invalidità Civile.
// Fonti: L. 104/1992, L. 68/1999, D.Lgs. 151/2001, D.Lgs. 105/2022, D.Lgs. 62/2024.

export interface GuideStep {
  title: string;
  body: string;
}

/** Percorso passo-passo (testi generici, validi in tutta Italia). Usato nel PDF. */
export const NEXT_STEPS: GuideStep[] = [
  {
    title: "Vai dal tuo medico con la diagnosi",
    body: "Il medico compila il certificato medico introduttivo e lo invia all'INPS. Dove la riforma è già attiva la richiesta parte da qui; altrove serve anche la domanda all'INPS, entro 90 giorni dal certificato.",
  },
  {
    title: "Vai alla visita dell'INPS",
    body: "L'INPS ti scrive per dirti giorno e luogo. Dove la riforma è attiva è una sola visita per invalidità e disabilità.",
  },
  {
    title: "Ricevi il verbale",
    body: "Il verbale dice cosa ti è stato riconosciuto. Da lì chiedi aiuti, esenzioni e permessi.",
  },
  {
    title: "Chiedi il Progetto di Vita",
    body: "Se vuoi, i Servizi Sociali del Comune lo costruiscono con te insieme a un gruppo di esperti (l'UVM).",
  },
  {
    title: "Rivedilo quando serve",
    body: "Il Progetto di Vita si può cambiare nel tempo, quando cambia la tua situazione.",
  },
];

export interface PassoRiconoscimento {
  /** Titolo breve, con un verbo */
  titolo: string;
  /** Cosa fare, in una o due frasi corte */
  testo: string;
  /** Pulsante "come lo faccio": etichetta e pagina */
  azione: { label: string; route: string; icon: string };
}

/**
 * I passi per ottenere il riconoscimento, scritti per essere letti da chiunque.
 * Cambiano in base alla provincia: dove la riforma è già attiva basta il
 * certificato del medico; altrove serve anche la domanda all'INPS entro 90 giorni.
 */
export function passiRiconoscimento(riformaAttiva: boolean): PassoRiconoscimento[] {
  const medico: PassoRiconoscimento = {
    titolo: "Vai dal tuo medico",
    testo: riformaAttiva
      ? "Porta la diagnosi e i referti. Il medico compila il certificato e lo invia all'INPS. Con questo la tua richiesta parte."
      : "Porta la diagnosi e i referti. Il medico compila il certificato e lo invia all'INPS. Tieni la ricevuta: ti serve per il passo dopo.",
    azione: { label: "Segna questo passo nella mia pratica", route: "/tracker", icon: "footsteps-outline" },
  };
  const visita: PassoRiconoscimento = {
    titolo: "Vai alla visita",
    testo: riformaAttiva
      ? "L'INPS ti scrive per dirti giorno e luogo della visita. È una sola visita per tutto. Puoi farti accompagnare da una persona di fiducia."
      : "L'INPS ti scrive per dirti giorno e luogo della visita. Porta documento, referti e ricevuta. Puoi farti accompagnare da una persona di fiducia.",
    azione: { label: "Cosa cambia con la riforma", route: "/riforma", icon: "document-text-outline" },
  };
  const verbale: PassoRiconoscimento = {
    titolo: "Ricevi il verbale",
    testo:
      "Il verbale ti dice cosa ti è stato riconosciuto. Conservalo con cura: ti serve per chiedere aiuti, esenzioni e permessi.",
    azione: { label: "Scopri cosa ti spetta", route: "/verbale", icon: "shield-checkmark-outline" },
  };

  if (riformaAttiva) {
    return [
      medico,
      visita,
      verbale,
      {
        titolo: "Chiedi il Progetto di Vita",
        testo:
          "Se vuoi, chiedi ai Servizi Sociali del tuo Comune di costruirlo con te, insieme a un gruppo di esperti (l'UVM). Puoi scrivere una lettera di richiesta.",
        azione: { label: "Prepara la lettera", route: "/lettere?id=progetto-vita", icon: "create-outline" },
      },
      {
        titolo: "Prepara cosa dire",
        testo:
          "Scrivi con calma cosa è importante per te: casa, lavoro, amici, salute. Lo porti all'incontro con gli esperti.",
        azione: { label: "Segui la mia pratica", route: "/tracker", icon: "footsteps-outline" },
      },
    ];
  }

  return [
    medico,
    {
      titolo: "Fai la domanda all'INPS",
      testo:
        "Hai 90 giorni dal certificato. Si fa sul sito dell'INPS con lo SPID, oppure con un patronato: è gratuito e ti aiuta a farla.",
      azione: { label: "Contatti INPS e patronati", route: "/territorio", icon: "call-outline" },
    },
    visita,
    verbale,
    {
      titolo: "Dal 2027: il Progetto di Vita",
      testo:
        "Dal 1° gennaio 2027 la riforma è prevista in tutta Italia e potrai chiedere il Progetto di Vita. Intanto puoi cominciare a pensare a cosa è importante per te.",
      azione: { label: "Prepara il mio Progetto di Vita", route: "/progetto", icon: "sparkles-outline" },
    },
  ];
}

/** Spiegazione del Certificato Medico Introduttivo (Riforma 2027) */
export const CERT_EXPLAINER = {
  title: "Cos'è il Certificato Medico Introduttivo?",
  intro:
    "È il documento che AVVIA tutta la pratica: con la riforma è il certificato stesso a far partire la valutazione, senza una domanda amministrativa separata.",
  points: [
    "Lo compila il tuo medico curante (o un medico certificatore abilitato) e lo invia telematicamente all'INPS.",
    "Contiene le diagnosi e i dati clinici: porta con te referti e documentazione aggiornata.",
    "Ti viene consegnata una ricevuta: conservala, è il riferimento della tua pratica.",
    "Avvia automaticamente l'unica valutazione di base (invalidità + disabilità insieme).",
    "Costa in media tra 30€ e 80€, secondo la tariffa del medico.",
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
