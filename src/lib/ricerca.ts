// "Scrivi cosa ti serve": ricerca intelligente DENTRO l'app.
// Quello che la persona scrive non esce dal telefono: nessun server, nessuna IA.
// Ogni risposta è breve, verificata, e porta alla pagina giusta dell'app.
// Capisce parole comuni (sinonimi) e piccoli errori di battitura.

import { CONTENUTI_BASE } from "@/src/lib/remoteContent";

export type Risposta = {
  id: string;
  titolo: string;
  /** Risposta breve, 1-2 frasi */
  testo: string;
  /** Pagina dell'app da aprire */
  route: string;
  bottone: string;
  /** Parole e frasi con cui le persone lo chiedono */
  chiavi: string[];
};

/** Esempi mostrati sotto la casella (si toccano per provarli) */
export const ESEMPI = [
  "Permessi 104 per mia mamma",
  "Farmacia aperta stanotte",
  "Come chiedo l'invalidità",
  "Aiuto in casa per un anziano",
  "Bonus bollette",
  "Prenotare una visita",
];

const RISPOSTE: Risposta[] = [
  // --- Riconoscimento ---
  { id: "invalidita", titolo: "Chiedere l'invalidità civile e la 104", testo: "Si parte dal medico di famiglia, che invia online all'INPS il certificato introduttivo. Poi arriva la convocazione a visita.", route: "/percorso", bottone: "Il percorso passo passo", chiavi: ["invalidita", "invalidità", "domanda invalidita", "riconoscimento", "certificato medico", "certificato introduttivo", "legge 104", "104", "handicap", "percentuale", "visita inps", "commissione"] },
  { id: "diagnosi", titolo: "Ho appena ricevuto una diagnosi", testo: "Le prime cose da sapere: esenzione dal ticket, malattia al lavoro e sportello sociale del Comune.", route: "/primi-passi", bottone: "Primi passi", chiavi: ["diagnosi", "appena scoperto", "malattia", "tumore", "cancro", "primi passi", "cosa fare", "da dove comincio", "sclerosi", "alzheimer", "autismo"] },
  { id: "pratica", titolo: "Seguire la pratica", testo: "Segna le tappe della domanda, dalla visita al verbale, e ricevi un promemoria per le scadenze.", route: "/tracker", bottone: "La mia pratica", chiavi: ["pratica", "a che punto", "stato domanda", "non mi hanno chiamato", "convocazione", "visita", "attesa", "quanto tempo", "sollecito", "tappe"] },
  { id: "verbale", titolo: "Ho ricevuto il verbale", testo: "Controlla cosa ti è stato riconosciuto: da lì dipendono aiuti e permessi. Se non sei d'accordo hai 6 mesi per il ricorso.", route: "/diritti", bottone: "Scopri i tuoi diritti", chiavi: ["verbale", "esito", "arrivato il verbale", "riconosciuto", "cosa mi spetta"] },
  { id: "ricorso", titolo: "Non sono d'accordo con il verbale", testo: "Il ricorso (ATP) va fatto in tribunale entro 6 mesi dalla comunicazione del verbale. Rivolgiti per tempo a un patronato o a un avvocato.", route: "/scadenze", bottone: "Calcola la scadenza", chiavi: ["ricorso", "contestare", "non sono d'accordo", "sbagliato", "percentuale bassa", "atp", "avvocato"] },
  { id: "revisione", titolo: "Revisione del verbale", testo: "Fino alla nuova visita i benefici già riconosciuti continuano. Segna la data per prepararti in tempo.", route: "/scadenze", bottone: "Le mie scadenze", chiavi: ["revisione", "rivedibile", "scade il verbale", "nuova visita"] },
  { id: "riforma", titolo: "Cosa cambia con la riforma", testo: "Con la riforma (D.Lgs. 62/2024) c'è un'unica valutazione INPS e si può chiedere il Progetto di Vita.", route: "/riforma", bottone: "Cosa cambia", chiavi: ["riforma", "62/2024", "valutazione di base", "nuove regole", "2027", "cambia"] },

  // --- Diritti, soldi, lavoro ---
  { id: "diritti", titolo: "A cosa ho diritto", testo: "Rispondi a poche domande: ti mostriamo diritti, aiuti economici, permessi e agevolazioni.", route: "/diritti", bottone: "Scopri i tuoi diritti", chiavi: ["diritti", "a cosa ho diritto", "cosa mi spetta", "aiuti", "agevolazioni", "benefici", "tutele"] },
  { id: "permessi", titolo: "Permessi 104 al lavoro", testo: "Con la 104 grave chi lavora come dipendente ha 3 giorni di permesso retribuito al mese, anche per assistere un familiare. Più familiari se li possono dividere.", route: "/lettere?id=permessi-104", bottone: "Lettera per il datore di lavoro", chiavi: ["permessi", "permesso", "3 giorni", "tre giorni", "104 lavoro", "datore di lavoro", "assistere mamma", "assistere papà", "assistere genitore", "mamma", "papà", "madre", "padre"] },
  { id: "congedo", titolo: "Congedo straordinario", testo: "Fino a 2 anni retribuiti nell'arco della vita lavorativa per assistere un familiare convivente con 104 grave.", route: "/diritti", bottone: "Scopri i tuoi diritti", chiavi: ["congedo", "2 anni", "due anni", "aspettativa", "stare a casa dal lavoro"] },
  { id: "soldi", titolo: "Pensioni, assegni e indennità", testo: "Assegno mensile (74-99%), pensione di inabilità (100%) e indennità di accompagnamento: importi e limiti di reddito aggiornati.", route: "/importi", bottone: "Importi aggiornati", chiavi: ["pensione", "assegno", "soldi", "quanto prendo", "importo", "indennita", "indennità", "accompagnamento", "accompagno", "reddito", "pagamento", "ap70"] },
  { id: "agevolazioni", titolo: "Bonus e agevolazioni", testo: "Esenzioni, agevolazioni fiscali e per l'auto, bonus bollette, Carta europea della disabilità: scopri quali ti riguardano.", route: "/agevolazioni", bottone: "Bonus e agevolazioni", chiavi: ["bonus", "agevolazione", "iva 4", "detrazione", "auto", "macchina", "bollo", "carta europea", "disability card", "esenzione"] },
  { id: "bollette", titolo: "Bonus luce, gas e acqua", testo: "Con ISEE fino a 9.796 € lo sconto in bolletta arriva da solo, basta avere l'ISEE aggiornato.", route: "/agevolazioni", bottone: "Bonus e agevolazioni", chiavi: ["bollette", "bolletta", "luce", "gas", "acqua", "bonus sociale", "tari", "rifiuti"] },
  { id: "isee", titolo: "ISEE", testo: "L'ISEE vale fino al 31 dicembre: si fa gratis online sul sito INPS o al CAF. Serve per bonus e servizi del Comune.", route: "/scadenze", bottone: "Promemoria ISEE", chiavi: ["isee", "dsu", "caf", "reddito familiare"] },
  { id: "ticket", titolo: "Esenzione dal ticket", testo: "Con un riconoscimento di invalidità o per patologia puoi non pagare il ticket: porta il verbale allo sportello dell'azienda sanitaria.", route: "/primi-passi", bottone: "Primi passi", chiavi: ["ticket", "esenzione", "non pagare visite", "codice esenzione"] },
  { id: "contrassegno", titolo: "Contrassegno per il parcheggio", testo: "Per chi ha gravi difficoltà a camminare o è non vedente. Si chiede al Comune con il certificato medico e dura 5 anni.", route: "/agevolazioni", bottone: "Bonus e agevolazioni", chiavi: ["contrassegno", "parcheggio", "cude", "posto auto disabili", "pass disabili"] },
  { id: "lavoro", titolo: "Lavoro e disabilità", testo: "Con invalidità dal 46% puoi iscriverti al collocamento mirato al Centro per l'impiego.", route: "/agevolazioni", bottone: "Bonus e agevolazioni", chiavi: ["lavoro", "cerco lavoro", "collocamento mirato", "categorie protette", "assunzione", "disoccupato"] },

  // --- Progetto di Vita e servizi ---
  { id: "progetto", titolo: "Progetto di Vita", testo: "Il piano costruito con i servizi a partire da ciò che conta per te. Preparalo con calma prima dell'incontro con l'équipe (UVM).", route: "/progetto", bottone: "Il mio Progetto di Vita", chiavi: ["progetto di vita", "progetto", "uvm", "equipe", "desideri", "piano personalizzato", "vita indipendente"] },
  { id: "casa", titolo: "Aiuto in casa", testo: "L'assistenza domiciliare del Comune aiuta nella cura della persona e della casa. Si chiede ai Servizi Sociali.", route: "/territorio", bottone: "Aiuti e contatti", chiavi: ["aiuto in casa", "assistenza domiciliare", "sad", "badante", "anziano", "anziana", "non autosufficiente", "igiene", "lavarsi", "pasti"] },
  { id: "trasporto", titolo: "Trasporto per visite e terapie", testo: "Molti Comuni organizzano con il volontariato il trasporto per visite, esami e terapie.", route: "/territorio", bottone: "Aiuti e contatti", chiavi: ["trasporto", "accompagnare", "ambulanza", "portare alla visita", "pulmino", "passaggio"] },
  { id: "comune", titolo: "Parlare con i Servizi Sociali", testo: "L'assistente sociale del Comune ascolta la situazione e ti orienta. Puoi chiedere un colloquio anche con una lettera pronta.", route: "/territorio", bottone: "Contatti del Comune", chiavi: ["servizi sociali", "assistente sociale", "comune", "colloquio", "sportello", "non so a chi rivolgermi", "aiuto", "contatti", "telefono comune"] },
  { id: "inps", titolo: "Contattare l'INPS", testo: "Contact center 803 164 da telefono fisso (gratuito) o 06 164 164 da cellulare. Sul sito INPS vedi lo stato della domanda.", route: "/territorio", bottone: "Aiuti e contatti", chiavi: ["inps", "numero inps", "contact center", "803164", "sito inps"] },
  { id: "lettere", titolo: "Scrivere una richiesta", testo: "Lettere pronte da completare: colloquio, assistenza domiciliare, Progetto di Vita, permessi 104, delega.", route: "/lettere", bottone: "Lettere pronte", chiavi: ["lettera", "scrivere", "richiesta", "modulo", "domanda scritta", "email al comune"] },
  { id: "delega", titolo: "Delegare un familiare", testo: "Una delega permette a una persona di fiducia di fare pratiche al posto tuo. Alcuni uffici hanno un loro modulo.", route: "/lettere?id=delega", bottone: "Prepara la delega", chiavi: ["delega", "delegare", "al posto mio", "mio figlio al posto mio"] },
  { id: "documenti", titolo: "Conservare i documenti", testo: "Verbali, certificati e referti si possono salvare nella cassaforte della tua pratica, solo sul telefono.", route: "/tracker", bottone: "La mia pratica", chiavi: ["documenti", "referti", "salvare", "cassaforte", "archivio", "certificati"] },

  // --- Salute ---
  { id: "prenota", titolo: "Prenotare una visita o un esame", testo: "Con la ricetta del medico puoi prenotare online sul portale della tua Regione o al telefono con il CUP.", route: "/salute", bottone: "Salute vicino a te", chiavi: ["prenotare", "prenotazione", "cup", "visita specialistica", "esame", "analisi", "ricetta"] },
  { id: "farmacie", titolo: "Farmacie di turno", testo: "Le farmacie aperte di notte e nei festivi sono pubblicate dalla fonte ufficiale della tua provincia.", route: "/salute", bottone: "Farmacie di turno", chiavi: ["farmacia", "farmacie", "di turno", "aperta", "stanotte", "notte", "domenica", "festivo", "medicine"] },
  { id: "guardia", titolo: "Guardia medica", testo: "Di notte e nei festivi, per problemi non urgenti, c'è la guardia medica (116117 dove è attivo).", route: "/salute", bottone: "Salute vicino a te", chiavi: ["guardia medica", "116117", "medico di notte", "medico festivo", "continuita assistenziale"] },
  { id: "emergenza", titolo: "Emergenza", testo: "In caso di pericolo chiama subito il 112.", route: "/salute", bottone: "Salute vicino a te", chiavi: ["emergenza", "112", "118", "ambulanza urgente", "sta male", "pronto soccorso"] },
];

// ---------- normalizzazione e confronto ----------
export function norm(t: string): string {
  return String(t || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9/ ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOP = new Set(["il", "lo", "la", "i", "gli", "le", "un", "una", "uno", "di", "a", "da", "in", "con", "su", "per", "tra", "fra", "e", "o", "che", "mi", "ti", "si", "ci", "del", "della", "dei", "delle", "al", "alla", "ai", "alle", "come", "cosa", "posso", "devo", "serve", "servono", "mio", "mia", "miei", "mie", "sono", "ho", "ha", "hanno", "non", "vorrei", "voglio", "chiedo", "chiedere", "fare", "quando", "dove", "chi", "qual", "quale", "quali"]);

function parole(t: string): string[] {
  return norm(t).split(" ").filter((w) => w.length > 1 && !STOP.has(w));
}

/** Distanza di modifica (per gli errori di battitura) */
function distanza(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 2) return 3;
  const m: number[] = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = m[0];
    m[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = m[j];
      m[j] = Math.min(m[j] + 1, m[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return m[b.length];
}

function simili(a: string, b: string): boolean {
  if (a === b) return true;
  if (a.length >= 4 && b.length >= 4 && (a.startsWith(b) || b.startsWith(a))) return true;
  if (a.length >= 5 && b.length >= 5) return distanza(a, b) <= (a.length >= 8 ? 2 : 1);
  return false;
}

type Voce = Risposta & { _chiavi: string[][]; _titolo: string[]; fonte: "app" | "faq" | "glossario" };

function indice(): Voce[] {
  const voci: Voce[] = RISPOSTE.map((r) => ({
    ...r,
    fonte: "app" as const,
    _chiavi: r.chiavi.map(parole),
    _titolo: parole(r.titolo),
  }));
  (CONTENUTI_BASE.faq || []).forEach((f: { d: string; r: string }, i: number) =>
    voci.push({
      id: `faq-${i}`,
      titolo: f.d,
      testo: f.r,
      route: "/faq",
      bottone: "Domande frequenti",
      chiavi: [],
      fonte: "faq",
      _chiavi: [],
      _titolo: parole(f.d),
    }),
  );
  (CONTENUTI_BASE.glossario || []).forEach((g: { t: string; d: string }, i: number) =>
    voci.push({
      id: `gloss-${i}`,
      titolo: g.t,
      testo: g.d,
      route: "/faq?sezione=glossario",
      bottone: "Glossario",
      chiavi: [g.t],
      fonte: "glossario",
      _chiavi: [parole(g.t)],
      _titolo: parole(g.t),
    }),
  );
  return voci;
}

let INDICE: Voce[] | null = null;

/** Le risposte più adatte a quello che la persona ha scritto (al massimo 4). */
export function cerca(testo: string): Risposta[] {
  const q = parole(testo);
  if (q.length === 0) return [];
  if (!INDICE) INDICE = indice();
  const qn = norm(testo);

  const punteggi = INDICE.map((v) => {
    let p = 0;
    // frase chiave contenuta intera nel testo
    v.chiavi.forEach((k, i) => {
      const kn = norm(k);
      if (kn.length > 2 && qn.includes(kn)) p += 6 + v._chiavi[i].length;
    });
    // parola per parola (con errori di battitura)
    for (const w of q) {
      if (v._chiavi.some((ch) => ch.some((c) => simili(w, c)))) p += 3;
      if (v._titolo.some((c) => simili(w, c))) p += 2;
      if (v.fonte !== "app" && parole(v.testo).some((c) => simili(w, c))) p += 1;
    }
    if (v.fonte !== "app") p *= 0.8;
    return { v, p };
  })
    .filter((x) => x.p >= 3)
    .sort((a, b) => b.p - a.p);

  const visti = new Set<string>();
  const out: Risposta[] = [];
  for (const { v } of punteggi) {
    if (visti.has(v.titolo)) continue;
    visti.add(v.titolo);
    out.push(v);
    if (out.length >= 4) break;
  }
  return out;
}
