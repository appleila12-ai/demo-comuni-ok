// "Scrivi cosa ti serve": ricerca intelligente DENTRO l'app.
// Quello che la persona scrive non esce dal telefono: nessun server, nessuna IA.
// Ogni risposta è breve, verificata, e porta alla pagina giusta dell'app.
// Capisce parole comuni (sinonimi) e piccoli errori di battitura.

import { CONTENUTI_BASE } from "@/src/lib/remoteContent";
import { comune } from "@/src/config/comune";
import { LETTERE } from "@/src/lib/lettere";
import { bonusDelComune } from "@/src/lib/bonus";
import { lavoroDelComune } from "@/src/lib/lavoro";
import { associazioniDelComune } from "@/src/lib/associazioni";
import { getHelpCards } from "@/src/lib/territorio";
import { AREE } from "@/src/lib/progetto";

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
  "Sono cieco, chi può aiutarmi?",
];

/**
 * Gli strumenti della Home. Se la ricerca non trova nulla vengono mostrati tutti,
 * così nessuna funzione resta irraggiungibile. Tenere allineato con l'elenco in app/index.tsx.
 */
export const STRUMENTI: { titolo: string; route: string }[] = [
  { titolo: "Progetto di Vita", route: "/progetto" },
  { titolo: "La mia pratica", route: "/tracker" },
  { titolo: "Aiuti e contatti", route: "/territorio" },
  { titolo: "I miei diritti", route: "/diritti" },
  { titolo: "Lettere pronte", route: "/lettere" },
  { titolo: "Reclamo liste d'attesa", route: "/reclamo-attese" },
  { titolo: "Le mie scadenze", route: "/scadenze" },
  { titolo: "Il mio cassetto", route: "/cassetto" },
  { titolo: "Salute vicino a te", route: "/salute" },
  { titolo: "Associazioni e sport", route: "/associazioni" },
  { titolo: "I miei salvati", route: "/salvati" },
  { titolo: "Domande frequenti", route: "/faq" },
  { titolo: "Glossario", route: "/faq?sezione=glossario" },
  { titolo: "Lavoro e disabilità", route: "/lavoro" },
  { titolo: "Mi sono fatto male al lavoro", route: "/infortunio-lavoro" },
  { titolo: "Importi aggiornati", route: "/importi" },
];

const RISPOSTE: Risposta[] = [
  // --- Riconoscimento ---
  { id: "invalidita", titolo: "Chiedere l'invalidità civile e la 104", testo: "Si parte dal medico di famiglia, che invia online all'INPS il certificato introduttivo. Poi arriva la convocazione a visita.", route: "/percorso", bottone: "Il percorso passo passo", chiavi: ["invalidita", "invalidità", "domanda invalidita", "riconoscimento", "richiedere la 104", "richiesta 104", "ottenere la 104", "come si ottiene la 104", "domanda 104", "richiedere", "ottenere", "certificato medico", "certificato introduttivo", "legge 104", "104", "handicap", "percentuale", "visita inps", "commissione"] },
  { id: "diagnosi", titolo: "Ho appena ricevuto una diagnosi", testo: "Le prime cose da sapere: esenzione dal ticket, malattia al lavoro e sportello sociale del Comune.", route: "/primi-passi", bottone: "Primi passi", chiavi: ["diagnosi", "appena scoperto", "malattia", "tumore", "cancro", "primi passi", "cosa fare", "da dove comincio", "sclerosi", "alzheimer", "autismo"] },
  { id: "pratica", titolo: "Seguire la pratica", testo: "Segna le tappe della domanda, dalla visita al verbale, e ricevi un promemoria per le scadenze.", route: "/tracker", bottone: "La mia pratica", chiavi: ["pratica", "a che punto", "stato domanda", "non mi hanno chiamato", "convocazione", "visita", "attesa", "quanto tempo", "sollecito", "tappe"] },
  { id: "verbale", titolo: "Ho ricevuto il verbale", testo: "Controlla cosa ti è stato riconosciuto: da lì dipendono aiuti e permessi. Se non sei d'accordo hai 6 mesi per il ricorso.", route: "/verbale", bottone: "Copia i dati del verbale", chiavi: ["verbale", "esito", "arrivato il verbale", "riconosciuto", "cosa mi spetta"] },
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
  { id: "esenzione-ticket", titolo: "Esenzione ticket: cosa portare", testo: "Per patologia cronica o invalidità: i documenti da portare, per te, per un figlio minore o se sei tutore, e come presentare la richiesta alla tua azienda sanitaria.", route: "/esenzione-ticket", bottone: "Cosa portare per l'esenzione", chiavi: ["esenzione ticket", "esenzione patologia", "esenzione per patologia", "esenzione invalidita", "libretto sanitario", "codice esenzione", "esenzione asl", "asl", "asl 5", "asl5", "asl 3", "patologia cronica", "ticket", "esenzione", "non pagare visite", "non pagare il ticket", "tessera sanitaria"] },
  { id: "contrassegno", titolo: "Contrassegno per il parcheggio", testo: "Per chi ha gravi difficoltà a camminare o è non vedente. Si chiede al Comune con il certificato medico e dura 5 anni.", route: "/agevolazioni", bottone: "Bonus e agevolazioni", chiavi: ["contrassegno", "parcheggio", "cude", "posto auto disabili", "pass disabili"] },
  { id: "lavoro", titolo: "Lavoro e disabilità", testo: "Con invalidità dal 46% puoi iscriverti al collocamento mirato al Centro per l'impiego.", route: "/agevolazioni", bottone: "Bonus e agevolazioni", chiavi: ["lavoro", "lavorare", "posso lavorare", "mantenere il lavoro", "cerco lavoro", "collocamento mirato", "categorie protette", "assunzione", "disoccupato"] },

  // --- Progetto di Vita e servizi ---
  { id: "progetto", titolo: "Progetto di Vita", testo: "Il piano costruito con i servizi a partire da ciò che conta per te. Preparalo con calma prima dell'incontro con l'équipe (UVM).", route: "/progetto", bottone: "Il mio Progetto di Vita", chiavi: ["progetto di vita", "progetto", "uvm", "equipe", "desideri", "piano personalizzato", "vita indipendente"] },
  { id: "casa", titolo: "Aiuto in casa", testo: "L'assistenza domiciliare del Comune aiuta nella cura della persona e della casa. Si chiede ai Servizi Sociali.", route: "/territorio", bottone: "Aiuti e contatti", chiavi: ["aiuto in casa", "assistenza domiciliare", "sad", "badante", "anziano", "anziana", "non autosufficiente", "igiene", "lavarsi", "pasti"] },
  { id: "ausili", titolo: "Ausili e protesi", testo: "Carrozzina, deambulatore, protesi e ortesi: chi ha diritto a riceverli dal Servizio sanitario e come funziona.", route: "/ausili", bottone: "Ausili e protesi", chiavi: ["ausili", "ausilio", "carrozzina", "deambulatore", "protesi", "ortesi", "nomenclatore", "assistenza protesica", "plantari", "apparecchio acustico", "letto ortopedico"] },
  { id: "amministratore", titolo: "Amministratore di sostegno", testo: "Chi può chiederlo al giudice tutelare, come si fa e cosa stabilisce il giudice.", route: "/amministratore-sostegno", bottone: "Amministratore di sostegno", chiavi: ["amministratore di sostegno", "amministrazione di sostegno", "giudice tutelare", "non riesce a firmare", "tutela", "incapacita", "gestire i soldi", "delega pratiche"] },
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
  { id: "associazioni", titolo: "Associazioni del territorio", testo: "Associazioni di volontariato e di famiglie che si occupano di disabilità nella tua zona: sostegno, informazioni, incontri.", route: "/associazioni", bottone: "Associazioni e sport", chiavi: ["associazione", "associazioni", "volontariato", "volontari", "famiglie", "genitori", "gruppo", "anffas", "autismo", "sostegno"] },
  { id: "sport", titolo: "Sport per persone con disabilità", testo: "Società sportive e sport paralimpico vicino a te: nuoto, equitazione, atletica, calcio integrato e altro.", route: "/associazioni?tipo=sport", bottone: "Sport nella tua zona", chiavi: ["sport", "sportiva", "paralimpico", "piscina", "nuoto", "calcio", "palestra", "special olympics", "equitazione", "cavallo", "attivita fisica"] },
  { id: "salvati", titolo: "I miei salvati", testo: "Qui ritrovi pagine, servizi e contatti che hai salvato con il segnalibro.", route: "/salvati", bottone: "Apri i salvati", chiavi: ["salvati", "salvato", "preferiti", "segnalibro", "messo da parte", "ritrovare"] },
  { id: "reclamo-attese", titolo: "Reclamo per le liste d'attesa", testo: "Se la visita o l'esame ti vengono dati dopo i tempi previsti, puoi preparare il modulo di reclamo già compilato, pronto da inviare. Il modulo è dell'associazione APS Gazebo Sanità e Beni Comuni.", route: "/reclamo-attese", bottone: "Prepara il reclamo", chiavi: ["reclamo", "reclami", "reclamare", "liste d'attesa", "lista d'attesa", "liste attesa", "tempi di attesa", "attesa troppo lunga", "visita rimandata", "visita troppo lontana", "non mi danno la visita", "segnalazione asl", "urp", "reclamo asl", "reclamo sanità", "lamentela", "gazebo"] },
  { id: "domande-104", titolo: "Domande sulla legge 104", testo: "Scrivi la tua domanda sulla 104 e l'assistente risponde usando le norme e i contenuti verificati dell'app.", route: "/domande-104", bottone: "Fai una domanda sulla 104", chiavi: ["domanda sulla 104", "domande 104", "fai una domanda", "chiedere informazioni 104", "dubbi 104", "104 domanda", "chiedi all'assistente", "assistente 104"] },
  { id: "agenda", titolo: "Appuntamenti e scadenze", testo: "Segna visite, appuntamenti e scadenze con data e ora, e scegli se ricevere un promemoria gentile. Nella stessa pagina trovi anche i contatti utili.", route: "/scadenze", bottone: "Le mie scadenze", chiavi: ["agenda", "appuntamento", "appuntamenti", "calendario", "promemoria", "ricordami", "segnare una visita", "scadenza", "scadenze", "avvisi", "notifiche"] },
  { id: "contatti-utili", titolo: "I miei contatti utili", testo: "La tua rubrica personale: medico, assistente sociale, patronato e altri numeri che ti servono. Restano solo sul tuo telefono.", route: "/scadenze", bottone: "Apri i contatti utili", chiavi: ["rubrica", "contatti utili", "numeri utili", "numero del medico", "salvare un numero", "miei contatti", "numeri di telefono"] },
  { id: "cassetto", titolo: "Il mio cassetto", testo: "Qui tieni i tuoi documenti e puoi fare la copia di sicurezza o ripristinarla. Tutto resta sul tuo telefono.", route: "/cassetto", bottone: "Apri il mio cassetto", chiavi: ["cassetto", "il mio cassetto", "copia di sicurezza", "backup", "ripristinare", "ripristino", "salvare i dati", "ho perso i dati", "cambio telefono"] },
  { id: "bonus-regione", titolo: "Bonus e contributi della Regione e del Comune", testo: "Le misure della tua Regione e del tuo Comune, ciascuna con fonte ufficiale e data dell'ultimo controllo.", route: "/bonus", bottone: "Bonus e contributi", chiavi: ["bonus regionali", "bonus regione", "contributo regionale", "contributi", "contributo", "bonus comunale", "bonus del comune", "dopo di noi", "patente speciale", "patenti speciali", "fondo regionale", "misure regionali"] },
  { id: "lavoro-pagina", titolo: "Lavoro e disabilità: le misure del tuo territorio", testo: "Collocamento mirato e misure della Regione e del Comune per chi cerca o ha un lavoro, con fonte e data di controllo.", route: "/lavoro", bottone: "Lavoro e disabilità", chiavi: ["lavoro e disabilità", "inserimento lavorativo", "tirocinio", "tirocini", "borsa lavoro", "incentivi assunzione", "centro per l'impiego", "centro impiego"] },
  { id: "infortunio-lavoro", titolo: "Mi sono fatto male al lavoro: INAIL", testo: "Indennità e rendita INAIL con gli importi aggiornati, protesi e ausili, come tornare al lavoro, rapporto tra rendita INAIL e invalidità civile, Assegno di inclusione e Legge 104, più i numeri dell'INAIL, con fonte e data.", route: "/infortunio-lavoro", bottone: "Mi sono fatto male al lavoro", chiavi: ["inail", "infortunio", "infortunio sul lavoro", "mi sono fatto male al lavoro", "malattia professionale", "incidente sul lavoro", "rendita inail", "invalidità inail", "invalidita inail", "contact center inail", "superabile", "protesi inail", "ausili inail", "protesi", "ortesi", "reinserimento lavorativo", "tornare al lavoro", "indennità infortunio", "indennità giornaliera inail", "importo rendita inail", "quanto paga l'inail", "danno biologico", "indennizzo inail", "percentuale menomazione", "malattia professionale indennizzo", "rendita e invalidità civile", "rendita e 104", "inail e accompagnamento", "inail e assegno di inclusione", "infortunato"] },
  { id: "comuni", titolo: "Cambiare Comune", testo: "Cerca il tuo Comune per nome, provincia o regione: l'app mostra contatti, aiuti e bonus del posto in cui vivi.", route: "/comuni", bottone: "Scegli il Comune", chiavi: ["cambiare comune", "cambia comune", "scegliere il comune", "altro comune", "non trovo il mio comune", "il mio comune", "provincia", "regione", "residenza"] },
  { id: "valutazione", titolo: "Valutazione: le domande in una schermata", testo: "Tutte le domande della valutazione su una sola schermata, per capire a quali aiuti e diritti puoi avere accesso.", route: "/valutazione", bottone: "Apri la valutazione", chiavi: ["valutazione", "questionario", "test diritti", "controllare se ho diritto"] },
  { id: "hub", titolo: "Orientarsi insieme: tutto il percorso", testo: "Il percorso dalla diagnosi al Progetto di Vita, con tutte le sezioni dell'app in un posto solo.", route: "/hub", bottone: "Entra in TutelApp", chiavi: ["orientarsi", "orientarsi insieme", "tutto il percorso", "dal primo giorno", "non so da dove partire", "menu", "tutte le funzioni", "cosa c'è nell'app", "entra in tutelapp"] },
  { id: "glossario", titolo: "Glossario: cosa vuol dire", testo: "Le parole difficili spiegate in modo semplice: ATP, UVM, collocamento mirato, ISEE e altre.", route: "/faq?sezione=glossario", bottone: "Apri il glossario", chiavi: ["glossario", "significato", "cosa vuol dire", "cosa significa", "parole difficili", "sigla", "sigle", "non capisco"] },
  { id: "faq-pagina", titolo: "Domande frequenti", testo: "Le risposte alle domande che le famiglie fanno più spesso su 104, invalidità, permessi e aiuti.", route: "/faq", bottone: "Domande frequenti", chiavi: ["domande frequenti", "faq", "domande più comuni", "dubbi comuni", "domande delle famiglie"] },
  { id: "per-comuni", titolo: "Sei un Comune o un ente?", testo: "Se rappresenti un Comune o un ente, da qui puoi metterti in contatto con TutelApp.", route: "/per-i-comuni", bottone: "Contattaci", chiavi: ["sono un comune", "sono un ente", "per i comuni", "per comuni", "aderire", "adesione", "sono un sindaco", "sono un assessore"] },
  { id: "uici", titolo: "UICI: sede per ciechi e ipovedenti", testo: "La sezione dell'Unione Italiana dei Ciechi e degli Ipovedenti della tua zona: indirizzo, telefono, email, orari e servizi, con la fonte.", route: "/uici", bottone: "La sede UICI della mia zona", chiavi: ["uici", "unione ciechi", "unione italiana dei ciechi", "sono cieco", "sono non vedente", "non vedo", "non vedente", "non vedenti", "cieco", "ciechi", "ipovedente", "ipovedenti", "ipovisione", "vedo poco", "problemi di vista", "dove si trova l'uici", "uici piu vicina", "sede uici", "chi puo aiutarmi cieco", "libro parlato", "cane guida", "braille", "servizi per ipovedenti"] },
  { id: "radiofari", titolo: "Radiofari e percorsi accessibili", testo: "Se nel tuo Comune ci sono i radiofari LETIsmart per chi non vede o vede poco, con lo stato del progetto e la fonte ufficiale.", route: "/radiofari", bottone: "Radiofari nel mio Comune", chiavi: ["radiofari", "radiofaro", "letismart", "leti smart", "leti", "ci sono radiofari", "radiofari nella mia citta", "muovermi in autonomia", "muoversi in autonomia", "autonomia ciechi", "percorsi accessibili", "orientamento ciechi", "mobilita ciechi", "semafori sonori", "tag per ciechi", "navigazione ciechi"] },
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

type Fonte = "app" | "faq" | "glossario" | "lettera" | "bonus" | "lavoro" | "associazione" | "aiuto" | "progetto";
type Voce = Risposta & { _chiavi: string[][]; _titolo: string[]; fonte: Fonte };

function voce(
  fonte: Fonte,
  id: string,
  titolo: string,
  testo: string,
  route: string,
  bottone: string,
  chiavi: string[],
): Voce {
  return { id, titolo, testo, route, bottone, chiavi, fonte, _chiavi: chiavi.map(parole), _titolo: parole(titolo) };
}

const breve = (t: string, n = 170) => (t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t);

/**
 * Tutto ciò che nell'app si può cercare, preso DIRETTAMENTE dai contenuti:
 * lettere pronte, bonus e lavoro del Comune, associazioni, aiuti, aree del Progetto di Vita,
 * domande frequenti e glossario. Quando si aggiunge un contenuto, la ricerca lo trova da sola.
 */
function indice(): Voce[] {
  const voci: Voce[] = RISPOSTE.map((r) => ({
    ...r,
    fonte: "app" as const,
    _chiavi: r.chiavi.map(parole),
    _titolo: parole(r.titolo),
  }));
  // Se una fonte ha un problema, le altre continuano a funzionare.
  const prova = (nome: string, f: () => void) => {
    try {
      f();
    } catch (e) {
      console.warn(`[ricerca] fonte "${nome}" non letta`, e);
    }
  };

  prova("faq", () =>
    (CONTENUTI_BASE.faq || []).forEach((f: { d: string; r: string }, i: number) =>
      voci.push(voce("faq", `faq-${i}`, f.d, f.r, "/faq", "Domande frequenti", [])),
    ),
  );
  prova("glossario", () =>
    (CONTENUTI_BASE.glossario || []).forEach((g: { t: string; d: string }, i: number) =>
      voci.push(voce("glossario", `gloss-${i}`, g.t, g.d, "/faq?sezione=glossario", "Glossario", [g.t])),
    ),
  );
  prova("lettere", () =>
    LETTERE.forEach((l) =>
      voci.push(
        voce("lettera", `lettera-${l.id}`, l.titolo, `${l.sottotitolo}. ${l.quando}`, `/lettere?id=${l.id}`, "Prepara la lettera", [
          l.titolo,
          l.sottotitolo,
          l.id.replace(/-/g, " "),
        ]),
      ),
    ),
  );
  prova("bonus", () => {
    const b = bonusDelComune();
    [...b.locali, ...b.regionali].forEach((x) =>
      voci.push(voce("bonus", `bonus-${x.id}`, x.titolo, breve(x.cosa), "/bonus", "Bonus e contributi", [x.titolo])),
    );
  });
  prova("lavoro", () => {
    const l = lavoroDelComune();
    [...l.nazionali, ...l.locali, ...l.regionali].forEach((x) =>
      voci.push(voce("lavoro", `lavoro-${x.id}`, x.titolo, breve(x.cosa), "/lavoro", "Lavoro e disabilità", [x.titolo])),
    );
  });
  prova("associazioni", () => {
    const a = associazioniDelComune();
    const vol: any[] = [...(a.volontariato || []), ...(a.volontariatoNazionali || [])];
    const spo: any[] = [...(a.sport || []), ...(a.sportRegione || []), ...(a.sportNazionali || [])];
    vol.forEach((x, i) =>
      voci.push(voce("associazione", `ass-${i}-${x.nome}`, x.nome, breve(x.cosa || ""), "/associazioni", "Associazioni e sport", [x.nome])),
    );
    spo.forEach((x, i) =>
      voci.push(voce("associazione", `spo-${i}-${x.nome}`, x.nome, breve(x.cosa || ""), "/associazioni?tipo=sport", "Sport nella tua zona", [x.nome])),
    );
  });
  prova("aiuti", () =>
    getHelpCards(comune.regione).forEach((c) =>
      voci.push(voce("aiuto", `aiuto-${c.id}`, c.title, breve(c.body), "/territorio", "Aiuti e contatti", [c.title, c.label])),
    ),
  );
  prova("progetto", () =>
    AREE.forEach((a) =>
      voci.push(
        voce("progetto", `area-${a.id}`, `Progetto di Vita: ${a.title}`, a.hint, "/progetto", "Il mio Progetto di Vita", [a.title, ...a.suggestions]),
      ),
    ),
  );
  return voci;
}

let INDICE: Voce[] | null = null;
let INDICE_PER: string | null = null;

/** Le risposte più adatte a quello che la persona ha scritto (al massimo 5). */
export function cerca(testo: string): Risposta[] {
  const q = parole(testo);
  if (q.length === 0) return [];
  if (!INDICE || INDICE_PER !== comune.slug) {
    INDICE = indice();
    INDICE_PER = comune.slug;
  }
  const qn = norm(testo);

  const punteggi = INDICE.map((v) => {
    let p = 0;
    // frase chiave contenuta intera nel testo
    v.chiavi.forEach((k, i) => {
      const kn = norm(k);
      if (kn.length > 2 && ` ${qn} `.includes(` ${kn} `)) p += 6 + v._chiavi[i].length;
    });
    // parola per parola (con errori di battitura)
    let dalTesto = 0;
    const paroleTesto = v.fonte !== "app" ? parole(v.testo) : [];
    for (const w of q) {
      if (v._chiavi.some((ch) => ch.some((c) => simili(w, c)))) p += 3;
      if (v._titolo.some((c) => simili(w, c))) p += 2;
      // il testo conta poco e ha un tetto, così le voci "di contorno" non superano quelle giuste
      if (dalTesto < 2 && paroleTesto.some((c) => simili(w, c))) dalTesto += 1;
    }
    p += dalTesto;
    if (v.fonte !== "app") p *= 0.85;
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
    if (out.length >= 5) break;
  }
  return out;
}
