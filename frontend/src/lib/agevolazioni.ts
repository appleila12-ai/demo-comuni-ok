// "A cosa potresti avere diritto": poche domande → elenco di agevolazioni
// possibili, con il motivo e i passi da fare. Non è una valutazione ufficiale.
// Regole verificate a settembre 2026 (fonti in MULTI-COMUNE.md).

export type Risposte = {
  per?: "me" | "familiare";
  minore?: "si" | "no";
  invalidita?: "no" | "meno46" | "46-66" | "67-73" | "74-99" | "100" | "nonso";
  l104?: "no" | "si" | "grave" | "nonso";
  accompagnamento?: "si" | "no";
  movimento?: "si" | "no" | "nonso";
  spesaAssistenza?: "si" | "no";
  lavoro?: "dipendente" | "cerca" | "altro";
  isee?: "basso" | "alto" | "nonso";
  salvavita?: "si" | "no";
};

export type Domanda = {
  id: keyof Risposte;
  testo: string;
  aiuto?: string;
  opzioni: { id: string; label: string }[];
};

export const DOMANDE: Domanda[] = [
  {
    id: "per",
    testo: "Per chi stai cercando?",
    opzioni: [
      { id: "me", label: "Per me" },
      { id: "familiare", label: "Per un familiare che assisto" },
    ],
  },
  {
    id: "minore",
    testo: "La persona con disabilità ha meno di 18 anni?",
    opzioni: [
      { id: "si", label: "Sì, è minorenne" },
      { id: "no", label: "No, è maggiorenne" },
    ],
  },
  {
    id: "invalidita",
    testo: "C'è una percentuale di invalidità civile sul verbale?",
    aiuto: "La trovi sul verbale dell'INPS. Se la pratica è in corso, scegli \"Non ancora\".",
    opzioni: [
      { id: "no", label: "Non ancora" },
      { id: "meno46", label: "Meno del 46%" },
      { id: "46-66", label: "Dal 46% al 66%" },
      { id: "67-73", label: "Dal 67% al 73%" },
      { id: "74-99", label: "Dal 74% al 99%" },
      { id: "100", label: "100%" },
      { id: "nonso", label: "Non lo so" },
    ],
  },
  {
    id: "l104",
    testo: "C'è un riconoscimento di Legge 104?",
    aiuto: "\"Grave\" è quando sul verbale c'è scritto art. 3 comma 3.",
    opzioni: [
      { id: "no", label: "No" },
      { id: "si", label: "Sì (comma 1)" },
      { id: "grave", label: "Sì, grave (comma 3)" },
      { id: "nonso", label: "Non lo so" },
    ],
  },
  {
    id: "accompagnamento",
    testo: "C'è l'indennità di accompagnamento?",
    opzioni: [
      { id: "si", label: "Sì" },
      { id: "no", label: "No" },
    ],
  },
  {
    id: "movimento",
    testo: "Ci sono gravi difficoltà a camminare, oppure è una persona non vedente?",
    opzioni: [
      { id: "si", label: "Sì" },
      { id: "no", label: "No" },
      { id: "nonso", label: "Non so" },
    ],
  },
  {
    id: "spesaAssistenza",
    testo: "Si paga una persona che assiste (per esempio una badante o un'assistente personale)?",
    aiuto: "Conta anche chi paga per assistere un familiare.",
    opzioni: [
      { id: "si", label: "Sì" },
      { id: "no", label: "No" },
    ],
  },
  {
    id: "lavoro",
    testo: "Chi assiste (o la persona stessa) lavora?",
    opzioni: [
      { id: "dipendente", label: "Sì, come dipendente" },
      { id: "cerca", label: "Cerca lavoro" },
      { id: "altro", label: "Altro / non lavora" },
    ],
  },
  {
    id: "isee",
    testo: "L'ISEE della famiglia è sotto i 9.796 €?",
    aiuto: "Soglia 2026 per i bonus luce, gas, acqua e rifiuti (20.000 € con almeno 4 figli a carico).",
    opzioni: [
      { id: "basso", label: "Sì, è sotto" },
      { id: "alto", label: "No, è più alto" },
      { id: "nonso", label: "Non lo so / non ce l'ho" },
    ],
  },
  {
    id: "salvavita",
    testo: "In casa si usano apparecchi elettromedicali salvavita?",
    aiuto: "Per esempio ventilatore polmonare, concentratore di ossigeno, pompa per nutrizione.",
    opzioni: [
      { id: "si", label: "Sì" },
      { id: "no", label: "No" },
    ],
  },
];

export type Agevolazione = {
  id: string;
  area: "Salute" | "Soldi" | "Lavoro" | "Casa e bollette" | "Auto e spostamenti" | "Servizi del Comune";
  titolo: string;
  perche: string;
  come: string;
  /** Pagina dell'app o sito ufficiale */
  link?: { label: string; href: string };
  /** true = serve verificare altri requisiti */
  forse?: boolean;
};

const inv = (r: Risposte) => r.invalidita;
const almeno = (r: Risposte, min: 46 | 67 | 74 | 100) => {
  const v = inv(r);
  const ordine = { "46-66": 46, "67-73": 67, "74-99": 74, "100": 100 } as Record<string, number>;
  return v ? (ordine[v] ?? 0) >= min : false;
};
const riconosciuto = (r: Risposte) =>
  (r.invalidita && !["no", "nonso"].includes(r.invalidita)) ||
  r.l104 === "si" ||
  r.l104 === "grave" ||
  r.accompagnamento === "si";

export function calcola(r: Risposte): Agevolazione[] {
  const out: Agevolazione[] = [];
  const grave = r.l104 === "grave";

  if (!riconosciuto(r)) {
    out.push({
      id: "riconoscimento",
      area: "Salute",
      titolo: "Chiedere il riconoscimento (invalidità civile e Legge 104)",
      perche: "Quasi tutte le agevolazioni partono dal verbale.",
      come: "Il primo passo è il certificato del medico di famiglia, che lo invia online all'INPS. Poi arriva la convocazione a visita.",
      link: { label: "Vedi i primi passi", href: "/primi-passi" },
    });
  }

  if (riconosciuto(r)) {
    out.push({
      id: "ticket",
      area: "Salute",
      titolo: "Esenzione dal ticket sanitario",
      perche: "Con un riconoscimento di invalidità si può non pagare il ticket su visite ed esami collegati.",
      come: "Porta il verbale allo sportello esenzioni della tua azienda sanitaria o chiedi al medico di famiglia.",
      forse: r.invalidita === "meno46",
    });
  }

  if (almeno(r, 67) || r.accompagnamento === "si" || grave) {
    out.push({
      id: "carta-ue",
      area: "Servizi del Comune",
      titolo: "Carta europea della disabilità",
      perche: "Spetta dal 67% di invalidità, con l'accompagnamento o con la 104 grave.",
      come: "Si chiede online sul sito INPS (con SPID o CIE), caricando una foto. È gratuita e dà accesso ad agevolazioni per musei, trasporti ed eventi. C'è anche in versione digitale nell'app IO.",
      link: { label: "Come funziona la Carta", href: "https://www.disabilita.governo.it/it/carta-europea-disabilita-ced/come-funziona-la-carta/" },
    });
  } else if (riconosciuto(r)) {
    out.push({
      id: "carta-ue",
      area: "Servizi del Comune",
      titolo: "Carta europea della disabilità",
      perche: "Spetta anche ai minori con invalidità civile, ai ciechi e ai sordi civili e ad altre categorie: controlla se rientri.",
      come: "Se rientri, si chiede online sul sito INPS (con SPID, CIE o CNS), caricando una foto. È gratuita e c'è anche in versione digitale nell'app IO.",
      link: { label: "Chi può chiederla", href: "https://www.disabilita.governo.it/it/carta-europea-disabilita-ced/come-funziona-la-carta/" },
      forse: true,
    });
  }

  if (r.invalidita === "74-99") {
    out.push({
      id: "assegno",
      area: "Soldi",
      titolo: "Assegno mensile di assistenza",
      perche: "Con un'invalidità dal 74% al 99%, tra 18 e 67 anni.",
      come: "Serve un reddito personale sotto il limite annuo e non svolgere attività lavorativa. Dopo il verbale l'INPS chiede i dati con il modulo AP70.",
      link: { label: "Importi e limiti di reddito", href: "/importi" },
      forse: true,
    });
  }
  if (r.invalidita === "100") {
    out.push({
      id: "pensione",
      area: "Soldi",
      titolo: "Pensione di inabilità",
      perche: "Con un'invalidità al 100%, tra 18 e 67 anni.",
      come: "Spetta sotto un limite di reddito personale. Dopo il verbale si compila il modulo AP70 sul sito INPS.",
      link: { label: "Importi e limiti di reddito", href: "/importi" },
      forse: true,
    });
  }
  if (r.accompagnamento === "si") {
    out.push({
      id: "accompagnamento",
      area: "Soldi",
      titolo: "Indennità di accompagnamento: controlla che arrivi",
      perche: "È già riconosciuta: spetta senza limiti di reddito.",
      come: "Se dopo 3-4 mesi dal verbale non arriva il pagamento, verifica sul sito INPS di aver inviato il modulo AP70 o chiedi a un patronato.",
      link: { label: "Importi aggiornati", href: "/importi" },
    });
  }

  if (grave && r.lavoro === "dipendente") {
    out.push({
      id: "permessi",
      area: "Lavoro",
      titolo: "Permessi Legge 104: 3 giorni al mese retribuiti",
      perche: "Con la 104 grave, per chi lavora come dipendente (anche per assistere un familiare).",
      come: "Nel privato si fa domanda online all'INPS e la si comunica al datore di lavoro; nel pubblico si chiede alla propria amministrazione. Più familiari possono dividerseli, ma restano 3 giorni in tutto.",
      link: { label: "Prepara la lettera al datore di lavoro", href: "/lettere?id=permessi-104" },
    });
  }
  if (grave && r.lavoro === "dipendente" && r.per === "familiare") {
    out.push({
      id: "congedo",
      area: "Lavoro",
      titolo: "Congedo straordinario retribuito (fino a 2 anni)",
      perche: "Per assistere un familiare convivente con la 104 grave.",
      come: "Si chiede all'INPS (nel privato) o alla propria amministrazione. Vale al massimo 2 anni in tutta la vita lavorativa.",
      forse: true,
    });
  }
  if (almeno(r, 46) && r.lavoro === "cerca") {
    out.push({
      id: "collocamento",
      area: "Lavoro",
      titolo: "Collocamento mirato",
      perche: "Con un'invalidità dal 46% si entra in liste di assunzione dedicate.",
      come: "Iscriviti al Centro per l'Impiego con il verbale e la relazione conclusiva.",
    });
  }

  if (r.movimento === "si") {
    out.push({
      id: "cude",
      area: "Auto e spostamenti",
      titolo: "Contrassegno per il parcheggio (CUDE)",
      perche: "Per chi ha gravi difficoltà a camminare o è non vedente.",
      come: "Si chiede al Comune con la certificazione medica. Vale 5 anni ed è personale: si usa su qualsiasi auto che trasporta la persona.",
      link: { label: "Metti la scadenza in calendario", href: "/scadenze" },
    });
  }
  if (r.movimento === "si" || (r.accompagnamento === "si" && grave)) {
    out.push({
      id: "auto",
      area: "Auto e spostamenti",
      titolo: "Agevolazioni per l'auto",
      perche: "Per persone non vedenti o sorde, con gravi limitazioni nel camminare, o con disabilità psichica grave e accompagnamento.",
      come: "IVA al 4% e detrazione del 19% (su una spesa massima di 18.075,99 €) una volta ogni 4 anni, esenzione dal bollo e dall'imposta di trascrizione. Porta i documenti al concessionario PRIMA dell'acquisto.",
      forse: true,
    });
  }

  if (riconosciuto(r)) {
    out.push({
      id: "ausili",
      area: "Casa e bollette",
      titolo: "IVA al 4% e detrazione su ausili e sussidi",
      perche: "Per ausili, protesi, montascale, computer e sussidi collegati alla disabilità.",
      come: "Chiedi l'IVA al 4% al momento dell'acquisto e conserva le fatture: il 19% si detrae nella dichiarazione dei redditi. Per i sussidi informatici serve un certificato del medico.",
    });
  }

  if (r.spesaAssistenza === "si") {
    out.push({
      id: "detrazione-assistenza",
      area: "Soldi",
      titolo: "Detrazione fiscale per chi paga l'assistenza (badante)",
      perche: "Si detrae il 19% delle spese per l'assistenza personale, su un massimo di 2.100 € per contribuente, se il reddito complessivo non supera 40.000 €. La persona assistita deve essere certificata come non autosufficiente nelle attività quotidiane.",
      come: "Conserva fatture o ricevute e paga con mezzi tracciabili (bonifico o pagamento postale). Si indica nella dichiarazione dei redditi; puoi detrarre anche per un familiare che non è fiscalmente a tuo carico. Si somma alla deduzione dei contributi versati per la badante, fino a 1.549,37 €.",
      link: { label: "Guida dell'Agenzia delle Entrate", href: "https://www1.agenziaentrate.gov.it/web_app_entrate/agevolazioni_disabilita.html/guide-gallery.html" },
      forse: true,
    });
  }

  if (r.minore === "si" && riconosciuto(r)) {
    out.push({
      id: "assegno-unico",
      area: "Soldi",
      titolo: "Assegno unico: maggiorazione per figli con disabilità",
      perche: "L'Assegno unico e universale prevede maggiorazioni per i figli con disabilità, e per i figli con disabilità non c'è un limite di età.",
      come: "Si chiede e si gestisce sul sito INPS o con un patronato. Comunica la disabilità del figlio e tieni aggiornato l'ISEE: senza ISEE si ricevono gli importi minimi. Importi e condizioni aggiornati sono sulla pagina INPS.",
      link: { label: "Assegno unico sul sito INPS", href: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico-55984.assegno-unico-e-universale-per-i-figli-a-carico.html" },
      forse: true,
    });
  }

  if (riconosciuto(r) && r.isee !== "alto") {
    out.push({
      id: "adi",
      area: "Soldi",
      titolo: "Assegno di inclusione (ADI)",
      perche: "Spetta ai nuclei con almeno una persona con disabilità, con ISEE basso (il Ministero del Lavoro indica un tetto di 10.140 €) e con limiti di reddito e patrimonio.",
      come: "Servono anche cittadinanza europea o permesso UE di lungo periodo e residenza in Italia da almeno 5 anni, gli ultimi 2 continuativi. Si chiede sul sito INPS (con SPID, CIE o CNS) o con un patronato o un CAF, con l'ISEE aggiornato. L'importo dipende dalla composizione del nucleo.",
      link: { label: "Guida del Ministero del Lavoro", href: "https://www.lavoro.gov.it/stampa-e-media/piccola-guida-ai-beneficiari-dellassegno-di-inclusione" },
      forse: true,
    });
  }

  if (riconosciuto(r)) {
    out.push({
      id: "barriere",
      area: "Casa e bollette",
      titolo: "Detrazione fiscale per eliminare le barriere architettoniche",
      perche: "Per lavori in casa che eliminano le barriere architettoniche (per esempio una rampa o un ascensore) esistono detrazioni fiscali. Percentuali e limiti cambiano negli anni.",
      come: "Prima di iniziare i lavori chiedi a un CAF o a un tecnico quali percentuali e limiti valgono nell'anno in cui paghi. Nella guida dell'Agenzia delle Entrate trovi le regole.",
      link: { label: "Guida dell'Agenzia delle Entrate", href: "https://www1.agenziaentrate.gov.it/web_app_entrate/agevolazioni_disabilita.html/guide-gallery.html" },
      forse: true,
    });
  }

  if (r.isee === "basso") {
    out.push({
      id: "bonus-sociale",
      area: "Casa e bollette",
      titolo: "Bonus sociale luce, gas, acqua e rifiuti",
      perche: "Con l'ISEE sotto i 9.796 € (20.000 € con almeno 4 figli).",
      come: "È automatico: basta avere un ISEE valido. Lo sconto compare direttamente in bolletta.",
      link: { label: "Ricordati di rinnovare l'ISEE", href: "/scadenze" },
    });
  } else if (r.isee === "nonso") {
    out.push({
      id: "isee",
      area: "Casa e bollette",
      titolo: "Fare l'ISEE",
      perche: "Serve per i bonus in bolletta, per molti servizi del Comune e per le tariffe ridotte.",
      come: "Si fa gratis online sul sito INPS o con l'aiuto di un CAF. Vale fino al 31 dicembre.",
      forse: true,
    });
  }
  if (r.salvavita === "si") {
    out.push({
      id: "disagio-fisico",
      area: "Casa e bollette",
      titolo: "Bonus luce per disagio fisico",
      perche: "Per chi usa in casa apparecchi elettromedicali salvavita. Non serve l'ISEE.",
      come: "Domanda al Comune o a un CAF, con il certificato dell'ASL che indica l'apparecchio e le ore di uso. Il verbale di invalidità da solo non basta.",
    });
  }

  out.push({
    id: "servizi-comune",
    area: "Servizi del Comune",
    titolo: "Aiuti dei Servizi Sociali",
    perche: "Assistenza a casa, trasporto per visite, contributi e sostegno ai familiari.",
    come: "Chiedi un colloquio con l'assistente sociale: puoi prepararlo con una lettera pronta.",
    link: { label: "Aiuti e contatti", href: "/territorio" },
  });

  return out;
}

export const completate = (r: Risposte) => DOMANDE.filter((d) => r[d.id]).length;
