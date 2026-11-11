// Bonus e contributi per persone con disabilità: misure della Regione e del
// territorio del Comune attivo.
//
// REGOLE PER AGGIUNGERE UNA MISURA
//  - solo misure con una fonte ufficiale (sito della Regione, del Comune, dell'ASL)
//  - ogni scheda ha SEMPRE la fonte e la data in cui è stata controllata
//  - se non siamo sicuri di requisiti, importi o date: stato "da-verificare"
//  - non scrivere importi o requisiti che non si leggono nella fonte
//  - ricontrollare almeno ogni 3 mesi e sempre a gennaio
//
// Prima raccolta: 06/10/2026, solo Liguria e provincia della Spezia.
// Seconda raccolta: 08/10/2026, Sicilia e Comune di Palermo.
// Terza raccolta: 08/10/2026, Lombardia e Comune di Milano.
// Quarta raccolta: 09/10/2026, Lazio e Comune di Fiumicino.
// Quinta raccolta: 12/10/2026, Abruzzo, Comune dell'Aquila e Comune di Ocre (ambito sociale n. 5).
// Sesta raccolta: 13/10/2026, Roma Capitale, Campania (da confermare), Piemonte e Comune di Torino.
// Raccolta 26/10/2026: Comune di Pisa (adattamento veicoli, barriere architettoniche).
// Settima raccolta: 14/10/2026, schede regionali in app: Piemonte (Buono domiciliarità 2026-2027, misure disabilità) ed Emilia-Romagna.
// Ottava raccolta: 15/10/2026, Toscana.
// Nona raccolta: 15/10/2026, Puglia (Patto di cura), Veneto (ICD).
// Decima raccolta: 18/10/2026, Unione dei Comuni del Distretto Ceramico (Sassuolo).
// Undicesima-bis raccolta: 19/10/2026, Comuni di Brescia, Modena e Monza.
// Undicesima raccolta: 19/10/2026, Comuni di Catania, Messina, Verona e Reggio Emilia.
// Dodicesima raccolta: 20/10/2026, Friuli-Venezia Giulia (misure regionali per Trieste), Comune di Cagliari e Comune di Prato.
// Tredicesima raccolta: 20/10/2026, misure regionali di Umbria, Sardegna, Marche e Calabria.
// Quattordicesima raccolta: 20/10/2026, misure dei Comuni di Firenze, Bari, Venezia e Padova.
// Quindicesima raccolta: 20/10/2026 (sera), misure dei Comuni di Perugia, Ancona, Rimini e Salerno; controllo delle voci già presenti.
// Raccolta 02/11/2026: Sardegna, Abruzzo, Campania, Molise e Basilicata (dossier verificato il 30/10/2026).
// Raccolta 30/10/2026: Lombardia (Misura Sostegno, barriere architettoniche, Dopo di Noi), Piemonte (Buono domiciliarità, barriere architettoniche), Toscana (esenzione bollo, mobilità LR 81/2017, vita indipendente).

import { comune } from "@/src/config/comune";

export type StatoBonus = "aperto" | "attivo" | "chiuso" | "scaduto" | "da-verificare";

export type Bonus = {
  id: string;
  /** Regione a cui appartiene la misura (come in `comune.regione`) */
  regione: string;
  /**
   * Se presente, la misura vale solo per questi Comuni (slug della scheda Comune,
   * es. "lerici"). Se manca, vale per tutta la Regione.
   */
  comuni?: string[];
  titolo: string;
  perChi: string;
  /** Cosa si ottiene. Solo ciò che è scritto nella fonte. */
  cosa: string;
  stato: StatoBonus;
  /**
   * Ultimo giorno utile per i CITTADINI (AAAA-MM-GG), solo se la fonte scrive una scadenza.
   * Dal giorno dopo la scheda passa a "scaduto" (visibile con avviso per 10 giorni), poi sparisce da sola.
   * Se la fonte non indica una scadenza NON si scrive: la scheda non diventa mai scaduta da sola.
   */
  scade?: string;
  /** Date e scadenze, come scritte nella fonte */
  quando?: string;
  comeSiChiede: string;
  fonte: { label: string; url: string };
  /** Data dell'ultimo controllo sulla fonte (gg/mm/aaaa) */
  verificatoIl: string;
  /** Avvertenza in più per il cittadino (facoltativa) */
  nota?: string;
};

export const STATO_BONUS: Record<StatoBonus, { etichetta: string; spiegazione: string }> = {
  aperto: { etichetta: "Aperto", spiegazione: "Si può presentare domanda adesso" },
  attivo: { etichetta: "Attivo", spiegazione: "Misura in corso: controlla le date con l'ente" },
  chiuso: { etichetta: "Chiuso", spiegazione: "La finestra per le domande è finita" },
  scaduto: { etichetta: "Scaduto", spiegazione: "Non si può più chiedere: lo vedi ancora per pochi giorni" },
  "da-verificare": { etichetta: "Da confermare con l'ente", spiegazione: "Informazioni incomplete o non recenti" },
};

/** Giorni in cui una misura scaduta resta visibile, con l'avviso «scaduto». Dall'undicesimo giorno non compare più. */
export const GIORNI_SCADUTO_VISIBILE = 10;

const MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

/** "2026-11-02" → "2 novembre 2026" */
export function dataScadenzaLeggibile(scade: string): string {
  const [y, m, d] = scade.split("-").map(Number);
  return `${d} ${MESI[m - 1]} ${y}`;
}

function giorniDallaScadenza(scade: string, oggi: Date): number {
  const [y, m, d] = scade.split("-").map(Number);
  const fine = Date.UTC(y, m - 1, d);
  const adesso = Date.UTC(oggi.getFullYear(), oggi.getMonth(), oggi.getDate());
  return Math.round((adesso - fine) / 86400000);
}

/**
 * Applica la regola dei dieci giorni:
 *  - fino al giorno della scadenza: la scheda resta com'è
 *  - dal giorno dopo, per 10 giorni: stato "scaduto" (si vede, con l'avviso)
 *  - dall'undicesimo giorno: null (non compare più negli elenchi)
 * Senza `scade` la scheda non cambia mai.
 */
export function conScadenza(b: Bonus, oggi: Date = new Date()): Bonus | null {
  if (!b.scade) return b;
  const g = giorniDallaScadenza(b.scade, oggi);
  if (g <= 0) return b;
  if (g > GIORNI_SCADUTO_VISIBILE) return null;
  return { ...b, stato: "scaduto" };
}

export const BONUS: Bonus[] = [
  // ------------------------------------------------------------------ LIGURIA

  {
    id: "la-spezia-grave-disabilita",
    regione: "Liguria",
    comuni: ["la-spezia"],
    titolo: "Grave disabilità: contributo per i servizi di assistenza",
    perChi:
      "Persone non autosufficienti: anziani da 65 anni e persone con disabilità fino a 64 anni. Per le persone con disabilità servono invalidità civile 100% con accompagnamento e legge 104 art. 3 comma 3, domicilio a La Spezia, ISEE sociosanitario inferiore a 14.000 euro e i requisiti di cittadinanza e soggiorno indicati dal Comune.",
    cosa:
      "350 euro al mese per servizi assistenziali approvati dall'équipe. Il contributo dipende da graduatoria e fondi disponibili.",
    stato: "attivo",
    quando:
      "Servizio presentato come attivo dal Comune, senza scadenza per le domande. Una finestra specifica per il 2026 non è indicata. Il procedimento si conclude entro 60 giorni.",
    comeSiChiede:
      "Domanda online o con il modulo del Comune, con ISEE, verbali e documenti richiesti: i dettagli sono nella pagina del Comune.",
    fonte: {
      label: "Comune della Spezia · Contributi non autosufficienza (grave disabilità)",
      url: "https://www.comune.laspezia.it/servizi/salute-benessere-e-assistenza/contributi-non-autosufficienza",
    },
    verificatoIl: "10/11/2026",
    nota: "Data di aggiornamento della pagina non indicata. Chiedi ai Servizi Sociali se i fondi sono disponibili.",
  },
  {
    id: "liguria-ausili-sportivi-2026",
    regione: "Liguria",
    titolo: "Contributo per acquistare ausili sportivi (atleti con disabilità)",
    perChi:
      "Atleti con disabilità in Liguria, secondo i requisiti dell'avviso regionale (la gestione è della Consulta regionale per la tutela dei diritti della persona con disabilità).",
    cosa:
      "Contributo fino a 4.000 euro a persona (IVA esclusa) per l'acquisto di ausili sportivi.",
    stato: "attivo",
    quando:
      "Avviso pubblicato il 14/07/2026, «fino ad esaurimento fondi». Dotazione iniziale: 30.000 euro. La Regione non indica quanti fondi restano.",
    comeSiChiede:
      "Con la domanda prevista dall'avviso della Regione Liguria: modalità e moduli sono nella pagina ufficiale.",
    fonte: {
      label: "Regione Liguria · Contributi per l'acquisto di ausili sportivi 2026",
      url: "https://www.regione.liguria.it/homepage-attivita-istituzionale/trasparenza/amministrazione-trasparente/beni-immobili-e-gestione-patrimonio/patrimonio-immobiliare/publiccompetition/4683%3Acontributi-acquisto-ausili-sportivi-2026.html",
    },
    verificatoIl: "10/11/2026",
    nota: "I fondi sono limitati e potrebbero essere già esauriti alla data di oggi: la Regione non ha pubblicato la chiusura né i fondi residui. Prima di preparare la domanda chiedi conferma alla Consulta regionale (consulta@regione.liguria.it, 010 5484892, via Fieschi 15, Genova).",
  },
  {
    id: "la-spezia-gravissima-disabilita",
    regione: "Liguria",
    comuni: ["la-spezia"],
    titolo: "Gravissima disabilità: contributo per l'assistenza a casa",
    perChi:
      "Residenti in Liguria che vivono al proprio domicilio, con invalidità civile 100% e accompagnamento e valutazione di gravissima disabilità secondo la DGR 1289/2016. ISEE sociosanitario fino a 50.000 euro, elevato a 65.000 euro per i minorenni.",
    cosa:
      "Fino a 1.200 euro al mese per l'assistenza domiciliare prevista dal piano assistenziale individuale, con rendicontazione.",
    stato: "attivo",
    quando:
      "Servizio presentato come attivo dal Comune, senza scadenza per le domande. Una finestra specifica per il 2026 non è indicata. Il procedimento si conclude entro 60 giorni.",
    comeSiChiede:
      "Domanda online o con il modulo del Comune, con ISEE, verbali e documento del rappresentante, se serve: i dettagli sono nella pagina del Comune.",
    fonte: {
      label: "Comune della Spezia · Gravissima disabilità (pagina del 22/10/2024)",
      url: "https://www.comune.laspezia.it/servizi/salute-benessere-e-assistenza/gravissima-disabilita",
    },
    verificatoIl: "10/11/2026",
    nota: "Pagina del Comune non aggiornata dal 22/10/2024: chiedi ai Servizi Sociali se importi e requisiti sono ancora questi.",
  },

  // ------------------------------------------------------------ COMUNE DI SARZANA
  {
    id: "sarzana-vita-indipendente-dgr-446",
    regione: "Liguria",
    comuni: ["sarzana"],
    titolo: "Progetti di vita indipendente (DGR 446/2015)",
    perChi:
      "Adulti con disabilità tra 18 e 65 anni, residenti in Liguria, con certificazione di gravità (art. 3, comma 3, Legge 104/1992) e ISEE per prestazioni sociosanitarie pari o inferiore a 25.000 euro.",
    cosa:
      "Un percorso per l'autonomia abitativa, lavorativa e l'integrazione sociale, con una misura economica fino a 1.200 euro al mese. Le spese vanno rendicontate ogni trimestre. Si accede dopo la valutazione sanitaria e quella dell'équipe multidisciplinare. I costi dipendono dall'ISEE.",
    stato: "attivo",
    comeSiChiede:
      "Si compila il modulo \"Accesso ai progetti di vita indipendente (DGR n. 446/2015)\", da presentare al Distretto Sociosanitario 19 \"Val di Magra\": tel. 0187 614507 o 0187 604933. Per informazioni anche i Servizi sociali e welfare del Comune: 0187 614454.",
    fonte: {
      label: "Comune di Sarzana · Progetti di vita indipendente (DGR n. 446/2015)",
      url: "https://www.comune.sarzana.sp.it/servizi/salute-benessere-e-assistenza/progetti-di-vita-indipendente-dgr-n-446-2015.html",
    },
    verificatoIl: "21/10/2026",
    nota: "La pagina non riporta la data di aggiornamento né i tempi di risposta. Conferma con il Distretto che la misura sia aperta.",
  },
  {
    id: "sarzana-contributi-economici",
    regione: "Liguria",
    comuni: ["sarzana"],
    titolo: "Contributi economici continuativi e straordinari",
    perChi:
      "Continuativi: anziani, invalidi civili con totale inabilità lavorativa e famiglie con minori, se l'ISEE non supera le soglie del regolamento del distretto sociosanitario. Straordinari: residenti a Sarzana in difficoltà occasionali e imprevedibili.",
    cosa:
      "Un contributo economico del Comune. Quello straordinario può essere dato al massimo due volte l'anno e, se ben motivato, anche con ISEE sopra la soglia. La pagina non scrive gli importi né le soglie ISEE.",
    stato: "attivo",
    comeSiChiede:
      "Si presenta la Domanda Unica di accesso (modulo sul sito del Comune) con l'ISEE e, se la hai, la certificazione di invalidità civile. L'assistente sociale valuta la richiesta con un colloquio. Telefono dei Servizi sociali e welfare: 0187 614454.",
    fonte: {
      label: "Comune di Sarzana · Contributi a sostegno del reddito",
      url: "https://www.comune.sarzana.sp.it/servizi/salute-benessere-e-assistenza/contributi-a-sostegno-del-reddito.html",
    },
    verificatoIl: "21/10/2026",
    nota: "La pagina elenca anche i motivi di esclusione, per esempio il possesso di più immobili. La pagina non riporta la data di aggiornamento.",
  },

  {
    id: "lerici-servizi-sociali",
    regione: "Liguria",
    comuni: ["lerici"],
    titolo: "Servizi sociali del Comune (contributi, assistenza a casa, pasti, telesoccorso)",
    perChi: "Persone e nuclei familiari residenti a Lerici.",
    cosa:
      "Si può chiedere: contributo economico, assistenza domiciliare, pasti caldi a domicilio, telesoccorso, pronto intervento domiciliare e interventi educativi per minori. La pagina non scrive importi né soglie ISEE.",
    stato: "attivo",
    comeSiChiede:
      "Si compila il modulo \"Istanza Unica Servizi Sociali\" (sul sito del Comune) e lo si consegna all'Ufficio Politiche Sociali, previo appuntamento. Servono: ISEE, verbale di invalidità civile, iscrizione al Centro per l'impiego (se disoccupati), permesso o carta di soggiorno (se cittadini extracomunitari), bollette o preventivo (per il contributo economico) e documento di identità. Il Comune comunica l'esito entro 30 giorni dall'invio. La presentazione è gratuita. Telefono: 0187 960277 / 0187 960287.",
    fonte: {
      label: "Comune di Lerici · Servizi sociali",
      url: "https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_63.html",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata dal Comune l'08/06/2026.",
  },
  {
    id: "lerici-bonus-elettrico-disagio-fisico",
    regione: "Liguria",
    comuni: ["lerici"],
    titolo: "Bonus sociale elettrico per disagio fisico",
    perChi:
      "Nuclei familiari in cui un componente deve usare apparecchiature elettromedicali necessarie per il mantenimento in vita. La richiesta può essere fatta da un componente del nucleo.",
    cosa:
      "Uno sconto sulle bollette dell'energia elettrica. Non dipende dall'ISEE: l'importo dipende dal consumo annuo dei macchinari salvavita. Si può cumulare con il bonus per disagio economico, se hai i requisiti di entrambi.",
    stato: "attivo",
    comeSiChiede:
      "La richiesta la presenta il titolare della fornitura elettrica (anche se è una persona diversa dal malato) al Comune di residenza o a un CAF abilitato. Il modulo si ritira presso l'Ufficio Politiche Sociali, previo appuntamento (0187 960277 / 0187 960287). Il Comune comunica l'esito entro 30 giorni. La presentazione è gratuita. L'elenco delle apparecchiature che danno diritto al bonus è stabilito da un decreto del Ministero della Salute.",
    fonte: {
      label: "Comune di Lerici · Bonus sociale elettrico per disagio fisico",
      url: "https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_64.html",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata dal Comune l'08/06/2026. Altre informazioni sul sito ARERA, pagina Bonus Sociale.",
  },
  {
    id: "lerici-bonus-acqua-luce-gas",
    regione: "Liguria",
    comuni: ["lerici"],
    titolo: "Bonus sociali acqua, energia elettrica e gas (disagio economico)",
    perChi:
      "Famiglie in disagio economico con un contratto di fornitura di luce o gas intestato a un componente del nucleo, anche tramite impianto condominiale. Le soglie ISEE sono quelle nazionali: controllale sul sito ARERA.",
    cosa:
      "Uno sconto sulle bollette dell'acqua, dell'energia elettrica e del gas. Il bonus dura 12 mesi dall'ammissione; poi serve presentare di nuovo la domanda.",
    stato: "attivo",
    comeSiChiede:
      "Per i bonus per disagio economico la pagina del Comune dice che dal 1° gennaio 2021 sono erogati in automatico dal sistema SGATE; presentare ogni anno l'ISEE garantisce la continuità. Se serve fare domanda, il modulo si ritira presso l'Ufficio Politiche Sociali, previo appuntamento (0187 960277 / 0187 960287). Il Comune comunica la graduatoria provvisoria entro 30 giorni dalla scadenza delle domande. La presentazione è gratuita.",
    fonte: {
      label: "Comune di Lerici · Bonus acqua, energia elettrica e gas",
      url: "https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_7.html",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata dal Comune l'08/06/2026. Non riportiamo le soglie ISEE scritte sulla pagina perché sono quelle nazionali e cambiano: verificale su ARERA.",
  },
  {
    id: "lerici-assegno-maternita",
    regione: "Liguria",
    comuni: ["lerici"],
    titolo: "Assegno di maternità",
    perChi:
      "La madre, o il padre se la madre ha abbandonato il bambino, se il bambino è affidato solo al padre o se la madre è morta. Il bambino deve avere meno di 6 mesi. Chi chiede deve essere residente a Lerici, avere cittadinanza italiana, UE o extracomunitaria con permesso di soggiorno valido, non ricevere altri contributi per maternità o paternità (o riceverne di importo inferiore) e rientrare in una fascia ISEE.",
    cosa:
      "L'assegno di maternità dello Stato per lavori atipici e discontinui, che è una prestazione previdenziale a carico dello Stato, concessa ed erogata dall'INPS. La pagina non scrive l'importo né la soglia ISEE.",
    stato: "attivo",
    comeSiChiede:
      "Si compila il modulo \"Assegno Maternità\" (sul sito del Comune) e lo si consegna all'Ufficio Politiche Sociali, previo appuntamento (0187 960277 / 0187 960287). Servono: ISEE e DSU relativi all'anno della nascita, documento di identità, per gli extracomunitari titolo di soggiorno valido, permesso di soggiorno del neonato, IBAN stampato ed eventuale documento di separazione o divorzio. Il Comune comunica l'esito entro 30 giorni. La presentazione è gratuita.",
    fonte: {
      label: "Comune di Lerici · Assegno di maternità",
      url: "https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_20.html",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata dal Comune l'08/06/2026.",
  },
  {
    id: "lerici-assegnazione-provvisoria-alloggi",
    regione: "Liguria",
    comuni: ["lerici"],
    titolo: "Assegnazione provvisoria di alloggi",
    perChi:
      "Nuclei familiari residenti a Lerici in condizione di disagio abitativo, con ISEE inferiore a 15.000 euro.",
    cosa: "Se la domanda è accolta, un nuovo alloggio provvisorio.",
    stato: "attivo",
    comeSiChiede:
      "Si compila il modulo \"Comunicazione disagio abitativo\" (sul sito del Comune) e lo si consegna all'Ufficio Politiche Sociali, previo appuntamento (0187 960277 / 0187 960287). Servono: documento di identità ed eventuale permesso di soggiorno in corso di validità, ISEE in corso di validità, eventuale certificazione L. 104/92, eventuale documentazione sulla procedura di sfratto ed eventuale documentazione ASL sulle condizioni dell'alloggio. Il Comune comunica l'esito entro 30 giorni. La presentazione è gratuita.",
    fonte: {
      label: "Comune di Lerici · Assegnazione provvisoria di alloggi",
      url: "https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_65.html",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata dal Comune l'08/06/2026.",
  },

  {
    id: "luni-fondo-affitti-2026",
    regione: "Liguria",
    comuni: ["luni"],
    titolo: "Contributi per l'affitto (Fondo sociale affitti 2026)",
    perChi: "Residenti a Luni che pagano un affitto, secondo il bando del Comune (Legge 431/1998, art. 11).",
    cosa: "Un contributo per le spese di affitto. Importi e requisiti sono nel bando e nel modulo di domanda sul sito del Comune.",
    stato: "aperto",
    scade: "2026-11-12",
    quando: "Domande dal 12/10/2026 alle ore 12:00 del 12/11/2026.",
    comeSiChiede:
      "Si presenta il modulo di domanda allegato al bando, pubblicato sul sito del Comune insieme alla scheda di monitoraggio. Per informazioni: Servizio 6 – Servizi socio-educativi, tel. 0187 690111.",
    fonte: {
      label: "Comune di Luni · Bando contributi a sostegno delle abitazioni in locazione",
      url: "https://www.comune.luni.sp.it/it-it/novita/avvisi/2026/bandi/bando-per-l-erogazione-di-contributi-a-sostegno-delle-abitazioni-in-locazione-404204-1-3604a8a0dd4e4cc60fd583a7f34e0d11",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata dal Comune il 12/10/2026.",
  },


  {
    id: "arcola-contributo-economico",
    regione: "Liguria",
    comuni: ["arcola"],
    titolo: "Contributo economico socio-assistenziale",
    perChi:
      "Persone di qualsiasi età, sole o in famiglia, esposte a rischi sociali ed economici accertati dai Servizi Sociali, con i requisiti del Regolamento comunale per gli interventi economici assistenziali.",
    cosa:
      "Un progetto individualizzato e un contributo economico per prevenire o contenere il disagio quando il reddito non basta ai bisogni primari. La pagina non scrive importi né soglie.",
    stato: "attivo",
    comeSiChiede:
      "Online dalla pagina del servizio sul sito del Comune, oppure agli uffici comunali. Appuntamento al 0187 1745834 (l'ufficio lo conferma per telefono). Servono: ISEE, certificato di disoccupazione e di iscrizione al centro per l'impiego, documentazione dello stato di bisogno, IBAN. Il contributo è erogato entro 30 giorni dalla richiesta. Gratuito.",
    fonte: {
      label: "Comune di Arcola · Presentare domanda per un contributo",
      url: "https://comune.arcola.sp.it/servizi/salute_benessere_e_assistenza/servizio_96.html",
    },
    verificatoIl: "22/10/2026",
    nota: "Pagina aggiornata dal Comune il 14/03/2025.",
  },
  {
    id: "arcola-assegno-maternita",
    regione: "Liguria",
    comuni: ["arcola"],
    titolo: "Assegno di maternità",
    perChi:
      "Madri che non ricevono un trattamento economico per la maternità o ne ricevono uno di importo inferiore (in tal caso spetta la differenza), in un nucleo con ISEE sotto i valori fissati ogni anno dalla legge. Italiane, comunitarie ed extracomunitarie (D.Lgs. 151/2001, art. 74).",
    cosa: "Un assegno di maternità con importo mensile. La pagina non scrive l'importo.",
    stato: "attivo",
    comeSiChiede:
      "Online con identità digitale dalla pagina del servizio, oppure agli uffici comunali. Servono l'ISEE in corso di validità (indicato come facoltativo) ed eventualmente il permesso di soggiorno. Il procedimento si conclude entro 30 giorni. Gratuito. Ufficio Servizi Sociali: 0187 1745812.",
    fonte: {
      label: "Comune di Arcola · Assegno di maternità",
      url: "https://comune.arcola.sp.it/servizi/salute_benessere_e_assistenza/servizio_20.html",
    },
    verificatoIl: "22/10/2026",
    nota: "Pagina aggiornata dal Comune il 14/03/2025.",
  },

  {
    id: "massa-assegno-maternita",
    regione: "Toscana",
    comuni: ["massa"],
    titolo: "Assegno di maternità",
    perChi:
      "Madri residenti a Massa (italiane, comunitarie o extracomunitarie con i requisiti di soggiorno) che hanno partorito, adottato o ricevuto in affido preadottivo un bambino con meno di 6 mesi e che non hanno tutela economica della maternità o ne hanno una ridotta. Il bambino deve essere nella scheda anagrafica della madre e convivere con lei.",
    cosa:
      "Un contributo economico a sostegno della maternità. Per i bambini nati nel 2026 la pagina del Comune indica ISEE fino a 20.668,26 euro e un assegno di 2.065,50 euro.",
    stato: "attivo",
    comeSiChiede:
      "Online con SPID, CIE o tessera sanitaria, oppure con il modulo del Comune all'Ufficio protocollo (lunedì–venerdì 9.00–12.00, martedì e giovedì anche 15.00–17.00), per posta in Via Porta Fabbrica 1 o via PEC (comune.massa@postacert.toscana.it). Serve l'ISEE o la DSU e un conto corrente o postale intestato o cointestato alla madre. Domanda entro 6 mesi dalla nascita. Il Comune risponde entro 60 giorni. Gratuito. Centralino: 0585 4901.",
    fonte: {
      label: "Comune di Massa · Assegno di maternità",
      url: "https://www.comune.massa.ms.it/servizi/assegno-di-maternita",
    },
    verificatoIl: "22/10/2026",
    nota: "Pagina aggiornata dal Comune il 03/09/2026.",
  },
  {
    id: "pietrasanta-bonus-riscaldamento-2026",
    regione: "Toscana",
    comuni: ["pietrasanta"],
    titolo: "Bonus spese da riscaldamento 2026 (ultrasessantenni a basso reddito)",
    perChi:
      "Persone con almeno 60 anni al momento della domanda, residenti a Pietrasanta. ISEE non superiore a 13.240 euro per chi vive solo, a 11.230 euro per chi vive in un nucleo con più persone. Giacenza mobiliare ISEE non superiore a 20.000 euro (al netto della franchigia). Non si possiedono terreni agricoli condotti in forma imprenditoriale o edificabili, altri fabbricati con rendita catastale superiore a 298 euro e quota almeno del 20% (esclusi i C2 e C6), né una casa di residenza di categoria A1, A8 o A9. Non si ha a disposizione un'auto immatricolata dopo il 1° gennaio 2022 oltre 1600 cc, una moto immatricolata dopo il 1° gennaio 2022 da 600 cc in su, un natante con motore oltre 25 cavalli, né un caravan o autocaravan.",
    cosa:
      "Un bonus per le spese di riscaldamento. Il bando non scrive l'importo: dice che il bonus è pagato nei limiti delle risorse del Bilancio 2026/2028.",
    stato: "aperto",
    scade: "2026-11-26",
    quando: "Domande dal 26 ottobre al 26 novembre 2026.",
    comeSiChiede:
      "Solo online sul Portale del cittadino del Comune (Servizi on line, voce Servizi sociali), con SPID, CIE o CNS. A fine domanda si annota il numero di protocollo. Le domande incomplete sono escluse. Sportello di facilitazione digitale all'ufficio Servizi sociali (secondo piano, palazzina della Polizia locale), lunedì, mercoledì e venerdì 9:00–12:00, su appuntamento al 0584 795275.",
    fonte: {
      label: "Comune di Pietrasanta · Bonus spese da riscaldamento 2026",
      url: "https://www.comune.pietrasanta.lu.it/it/news/bonus-spese-da-riscaldamento-2026",
    },
    verificatoIl: "27/10/2026",
    nota: "Letto il testo del bando (criteri di accesso 2026, Deliberazione di Giunta n. 146 del 10/04/2026). Non è una misura pensata per la disabilità: riguarda gli ultrasessantenni a basso reddito.",
  },


  // ------------------------------------------- DISTRETTO SOCIOSANITARIO 18

  // ------------------------------------------------------------------ SICILIA
  {
    id: "sicilia-disabilita-gravissima",
    regione: "Sicilia",
    titolo: "Contributo economico per la disabilità gravissima (Fondo per la disabilità e la non autosufficienza)",
    perChi:
      "Persone con disabilità gravissima già riconosciute e censite dalle ASP. Secondo la Regione, a marzo 2026 erano oltre 15 mila.",
    cosa:
      "Contributo economico mensile. L'importo non è scritto nelle fonti che abbiamo letto: chiedilo al Distretto. Per il pagamento di marzo 2026 e degli arretrati la Regione ha impegnato 19.499.098 euro, ripartiti tra le ASP in base al numero di persone censite.",
    stato: "attivo",
    quando: "Pagamenti mensili: la Regione impegna i fondi ogni mese (notizia del 21/04/2026).",
    comeSiChiede:
      "La domanda si presenta al Punto Unico di Accesso (PUA) del territorio di residenza o al Distretto socio-sanitario del Comune. Chi è già stato riconosciuto disabile gravissimo non deve ripresentarla.",
    fonte: {
      label: "Regione Siciliana · impegno fondi disabilità gravissima",
      url: "https://www.regione.sicilia.it/la-regione-informa/disabilita-gravissime-impegnati-19-milioni-contributi-economici-marzo",
    },
    verificatoIl: "08/10/2026",
  },

  // ----------------------------------------------------------------- PALERMO
  {
    id: "palermo-disabilita-gravissima-distretto42",
    regione: "Sicilia",
    comuni: ["palermo"],
    titolo: "Disabilità gravissima: come fare domanda a Palermo (ASP, Distretto 42)",
    perChi:
      "Persone riconosciute con disabilità gravissima dalle Commissioni UVM, che hanno la certificazione della Legge 104/92 art. 3 comma 3 e il riconoscimento dell'indennità di accompagnamento. La domanda può farla la persona stessa, un familiare con delega o il rappresentante legale (amministratore di sostegno, tutore, procura notarile).",
    cosa:
      "Accesso al contributo regionale per la disabilità gravissima. L'importo non è scritto nel regolamento dell'ASP.",
    stato: "attivo",
    quando:
      "Regolamento dell'ASP del 19/04/2023. Chi ha avuto una domanda respinta può ripresentarla solo con un certificato di aggravamento di una struttura pubblica, dopo almeno un semestre.",
    comeSiChiede:
      "Al PUA o al Distretto socio-sanitario. Distretto 42 di Palermo: via Lancia di Brolo 10/bis, Padiglione Gatto, 2° piano, tel. 091 7035490, disabiligravissimi.d42@asppalermo.org. Ricevimento: martedì 9–12 e 15–17, mercoledì 9–12.",
    fonte: {
      label: "ASP Palermo · regolamento disabilità gravissima",
      url: "https://www.asppalermo.org/wp-content/uploads/2024/03/REGOLAMENTO-DISABILITA-GRAVISSIMA.pdf",
    },
    verificatoIl: "08/10/2026",
    nota: "Documenti richiesti: documenti d'identità e codici fiscali di beneficiario e richiedente, copia con diagnosi della certificazione 104 art. 3 comma 3 e del provvedimento dell'indennità di accompagnamento, recapito telefonico o email.",
  },
  {
    id: "palermo-bonus-caregiver-fna-2022",
    regione: "Sicilia",
    comuni: ["palermo"],
    titolo: "Bonus caregiver: contributo una tantum per chi assiste una persona con disabilità grave",
    perChi:
      "Caregiver familiari di persone con disabilità grave (art. 3, comma 3, legge 104/1992) o gravissima (D.M. 26 settembre 2016). Il Comune precisa che il riconoscimento deve riferirsi al 2022: sono esclusi i riconoscimenti successivi. Ci sono regole anche per chi assiste più persone e per persone assistite decedute dopo il periodo di riferimento: leggi l'avviso.",
    cosa:
      "Contributo economico una tantum a sostegno del ruolo di cura (annualità FNA 2022). L'importo non è fissato nell'avviso: dipende dalle risorse e dalle domande presentate.",
    stato: "aperto",
    quando: "Domande entro l'11/11/2026, ore 23:59.",
    comeSiChiede:
      "La domanda va al Comune di residenza della persona assistita, online con SPID o CIE sul portale sociale del Comune di Palermo (trovi il link nell'avviso).",
    fonte: {
      label: "Comune di Palermo · Avviso pubblico Bonus caregiver (pagina del 03/11/2026)",
      url: "https://www.comune.palermo.it/novita/avviso-pubblico-bonus-caregiver-contributo-economico-una-tantum-per-il-sostegno-del-ruolo-di-cura-e-di-assistenza-dei-caregiver-familiari-di-persone-con-disabilit-grave-e-persone-con-disabilit-gravi/",
    },
    verificatoIl: "10/11/2026",
    nota: "Scade l'11/11/2026. Controlla i requisiti sull'avviso ufficiale prima di presentare la domanda.",
  },

  // ---------------------------------------------------------------- LOMBARDIA
  {
    id: "lombardia-misura-b1-sostegno",
    regione: "Lombardia",
    titolo: "Misura B1: sostegno per la disabilità gravissima e le persone molto non autosufficienti",
    perChi:
      "Persone con disabilità con necessità di sostegno intensivo molto elevato e anziani non autosufficienti con alto bisogno assistenziale, residenti in Lombardia e assistiti a casa. Servono l'indennità di accompagnamento (o la non autosufficienza riconosciuta) e un ISEE sociosanitario fino a 50.000 euro (ISEE ordinario fino a 65.000 euro per i minori). La condizione va attestata da un medico specialista.",
    cosa:
      "Misura Sostegno: contributo mensile da 565 a 1.300 euro, secondo la situazione (per esempio 565 euro con il solo caregiver familiare, 900 euro con un assistente regolarmente assunto da 10 ore a settimana, 1.200 euro a tempo pieno). Assegno di autonomia: fino a 800 euro al mese per chi ha un assistente personale e non ha un caregiver familiare. Misura Servizi: interventi sociali e voucher sociosanitari, senza importi scritti nella fonte.",
    stato: "da-verificare",
    quando:
      "Le nuove domande alle ASST erano aperte dal 22 giugno al 31 ottobre 2026 (chiuse). Chi è già in carico non deve ripresentare la domanda e prosegue fino al 31 dicembre 2026.",
    comeSiChiede:
      "Si presenta l'istanza di valutazione alla propria ASST, con le sue modalità. Per informazioni: ATS e ASST di competenza o lo Spazio Disabilità di Regione Lombardia (sportello informativo gratuito).",
    fonte: {
      label: "Regione Lombardia · Misura Sostegno (ex B1)",
      url: "https://www.regione.lombardia.it/politiche-sociali-e-abitative/disabilita/politiche-e-misure-per-la-disabilita/sostegno-per-la-disabilit--gravissima-misura-sostegno",
    },
    verificatoIl: "30/10/2026",
    nota: "Chi rientra tra gli ex \"gravi\" (ex Misura B2) ha un ISEE sociosanitario fino a 25.000 euro (ISEE ordinario fino a 40.000 euro per i minorenni) e presenta la domanda all'Ambito territoriale sociale, con date proprie. Gli importi vengono dalla pagina di Lombardia Facile dedicata alla DGR 6320 del 15/06/2026; la pagina della Regione non scrive gli importi.",
  },
  {
    id: "lombardia-dopo-di-noi",
    regione: "Lombardia",
    titolo: "Dopo di Noi: percorso per chi non ha più il sostegno della famiglia",
    perChi:
      "Persone con disabilità grave (art. 3, comma 3, Legge 104/1992), non dovuta all'invecchiamento, che non hanno più il sostegno della famiglia o rischiano di perderlo.",
    cosa:
      "Un Progetto individuale della durata di due anni, costruito dopo una valutazione multidimensionale. La pagina non scrive importi.",
    stato: "attivo",
    comeSiChiede:
      "Ci si rivolge all'Ambito territoriale o al Comune di residenza, che avvia la valutazione multidimensionale e il Progetto individuale.",
    fonte: {
      label: "Lombardia Facile · Dopo di Noi",
      url: "https://www.lombardiafacile.regione.lombardia.it/wps/portal/site/Lombardia-Facile/agevolazioni-contributi-servizi/dopo-di-noi",
    },
    verificatoIl: "30/10/2026",
    nota: "Non abbiamo trovato un avviso con scadenza per il 2026: chiedi all'Ambito se ci sono fondi e posti disponibili.",
  },

  // ------------------------------------------------------------ COMUNE DI GENOVA
  // Fonti: pagine dei servizi del Comune di Genova, lette il 25/10/2026.
  {
    id: "genova-gravissima-disabilita-asl3",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Gravissima disabilità: contributo per restare a casa (anche SLA)",
    perChi:
      "Adulti, anziani e minori che a casa hanno bisogno di assistenza continua nelle 24 ore. Servono: invalidità civile al 100% con indennità di accompagnamento, un quadro clinico tra quelli della DGR 1289/2016, ISEE sociosanitario fino a 50.000 euro (per i minori ISEE per prestazioni ai minorenni fino a 65.000 euro).",
    cosa:
      "Un contributo mensile per l'assistenza a casa. L'importo lo decide l'Unità di Valutazione Multidimensionale (UVM) nel Piano di Assistenza Individualizzato (PAI); una parte riconosce il lavoro di cura del familiare, il resto si rendiconta. È compatibile con il centro diurno. Non si può avere insieme al contributo \"Grave disabilità\", all'indennità di frequenza o al ricovero definitivo in struttura.",
    stato: "da-verificare",
    comeSiChiede:
      "Si compila il modulo \"Gravissima disabilità\" e si allegano: verbale dell'indennità di accompagnamento, ISEE e documento d'identità di chi firma. La domanda si consegna al PUA o allo Sportello unico del tuo Distretto ASL3 (trovi telefoni e orari nella scheda del Comune, alla voce Distretti). Poi c'è la valutazione dell'UVM.",
    fonte: {
      label: "ASL3 · Fondo gravissima disabilità e SLA",
      url: "https://www.asl3.liguria.it/territorio/servizi/disabili/4981-fondo-gravissima-disabilita-sla.html",
    },
    verificatoIl: "25/10/2026",
    nota: "La pagina ASL3 è aggiornata al 23/10/2024 e il 26/10/2026 non è stato possibile rileggerla: chiedi conferma al PUA o allo Sportello unico del tuo Distretto. Che la misura sia attiva nel 2026, con gli stessi requisiti, lo conferma la scheda \"Gravissime disabilità (GD) – Servizio attivo\" del Comune di Rapallo (Distretto 14), controllata il 25/10/2026.",
  },
  {
    id: "genova-vita-indipendente-asl3",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Progetti di vita indipendente",
    perChi:
      "Persone con disabilità motoria (Legge 104, art. 3 comma 3) o intellettiva (Legge 104, art. 3 comma 1), dai 18 ai 65 anni, capaci di esprimere la propria volontà, anche tramite amministratore di sostegno. ISEE sociosanitario fino a 25.000 euro.",
    cosa:
      "Un contributo fino a 1.200 euro al mese, secondo il Piano individuale (PIA) scritto insieme alla persona, da rendicontare ogni tre mesi. Serve per l'autonomia: andare a vivere da soli, il lavoro, un assistente personale, attività che favoriscono l'autonomia in famiglia; per ausili, domotica e barriere architettoniche è un rimborso fino a 350 euro al mese. Non si può avere insieme alla gravissima disabilità, al contributo caregiver per chi assiste la persona o al ricovero in struttura.",
    stato: "da-verificare",
    comeSiChiede:
      "Si compila la domanda indicando come si vuole usare il contributo, con la certificazione della Legge 104, l'ISEE sociosanitario e il documento d'identità. La domanda si consegna al PUA o allo Sportello unico del tuo Distretto ASL3. Prima c'è una valutazione sanitaria sull'autodeterminazione, poi l'équipe (assistente sociale e medico ASL) scrive il progetto con te.",
    fonte: {
      label: "ASL3 · Progetti di vita indipendente",
      url: "https://www.asl3.liguria.it/territorio/servizi/disabili/1102-progetti-di-vita-indipendente.html",
    },
    verificatoIl: "25/10/2026",
    nota: "La pagina ASL3 è aggiornata al 23/10/2024 e il 26/10/2026 non è stato possibile rileggerla: chiedi conferma al PUA o allo Sportello unico del tuo Distretto. Importo, ISEE e stato \"attivo\" sono confermati nel 2026 dalle schede dei Comuni di Sarzana e di Rapallo, controllate a ottobre 2026.",
  },
  {
    id: "genova-doge-domiciliarita-disabili",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Assistenza a domicilio DO.GE (Sistema Domiciliarità del Comune di Genova)",
    perChi: "Persone con disabilità con più di 18 anni, residenti a Genova, con ISEE in corso di validità inferiore a 12.000 euro.",
    cosa:
      "Assistenza a casa da uno dei sei fornitori accreditati dal Comune, a tariffe concordate e controllate dal Comune: aiuto per alzarsi e andare a letto, igiene personale, preparazione dei pasti, pulizia della casa; assistente familiare (badante), anche per sostituzioni; interventi educativi per l'autonomia; aiuto per i contratti di lavoro. L'attivazione dipende dal progetto concordato con l'assistente sociale.",
    stato: "attivo",
    comeSiChiede:
      "Vai senza prenotazione all'Ufficio dei Servizi Sociali del tuo Municipio (lunedì, mercoledì e venerdì 9:00–11:00; Municipio VIII fino alle 12:00; Municipio VII: Pegli venerdì, Prà mercoledì, Voltri lunedì). Per le persone con disabilità anche U.O. Area Disabilità, Matitone, Via di Francia 1, 6° piano, tel. 010 5577444. Le tariffe dei fornitori sono sul sito genovacare.it.",
    fonte: {
      label: "Comune di Genova · Sistema Domiciliarità del Comune di Genova (DO.GE)",
      url: "https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/sistema-domiciliarita-del-comune-di-genova-doge",
    },
    verificatoIl: "25/10/2026",
  },
  {
    id: "genova-trasporto-scolastico-disabili",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Trasporto scolastico gratuito per alunni con disabilità",
    perChi: "Famiglie residenti a Genova con figli con disabilità iscritti alla scuola dell'infanzia o al primo ciclo (primaria e secondaria di primo grado) nel territorio comunale.",
    cosa: "Il trasporto da casa a scuola con vettura. È gratuito. Per una scuola fuori Genova il Comune copre solo il tragitto dentro i confini comunali.",
    stato: "attivo",
    quando: "La pagina del Comune indica l'apertura delle domande il 30 maggio 2025, senza dire per quale anno scolastico: chiedi al Comune quando si apre il prossimo anno. Si può presentare domanda anche durante l'anno scolastico: viene valutata nelle commissioni successive.",
    comeSiChiede:
      "Domanda online sul sito del Comune con SPID, CIE o CNS. Allegati: la richiesta del medico (modulo 1 \"Relazione sanitaria\") e la copia del certificato di disabilità (Legge 104/1992) valido; se è scaduto, anche la ricevuta INPS della domanda di revisione. Informazioni: numero verde 800 809 009 (lunedì–venerdì 8:30–13:00), trasportoscolastico@comune.genova.it.",
    fonte: {
      label: "Comune di Genova · Trasporto scolastico per alunni con disabilità",
      url: "https://www.comune.genova.it/servizi/educazione-e-formazione/trasporto-scolastico-alunni-con-disabilita",
    },
    verificatoIl: "25/10/2026",
  },
  {
    id: "genova-mobility-bus",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Mobility Bus: trasporto per il tempo libero",
    perChi:
      "Persone con disabilità fisica motoria residenti a Genova che non possono usare i mezzi pubblici ordinari. Servono: certificato medico (medico di famiglia, specialista ASL3 o medico della struttura residenziale convenzionata) e verbale definitivo INPS di disabilità ai sensi dell'art. 3 della Legge 104/1992.",
    cosa:
      "Un servizio di trasporto pubblico collettivo per le attività del tempo libero, su prenotazione. La pratica e la telefonata al numero verde sono gratuite; il viaggio costa quanto il biglietto ordinario AMT. La pagina avverte che la prenotazione può non essere soddisfatta per orari simultanei o mancanza di vetture.",
    stato: "attivo",
    quando:
      "Si prenota almeno 24 ore prima del viaggio, al numero verde AMT dal lunedì al sabato, dalle 6:00 alle 19:30 (domenica e festivi esclusi); per il giorno dopo si prenota entro le 12:00. AMT conferma entro le 18:00 del giorno prima. La domanda è istruita entro 30 giorni dalla ricezione.",
    comeSiChiede:
      "Domanda online sul sito del Comune con SPID, CIE o CNS, oppure modulo e allegati (documento d'identità, certificato medico, verbale INPS) via email a gestionedisabilita@comune.genova.it o via PEC a dpsdisabilita.comge@postecert.it. Prenotazioni dei viaggi: numero verde AMT 800 085 302. Informazioni: U.O. Area Disabilità, tel. 010 5577444, polodisabilita@comune.genova.it.",
    fonte: {
      label: "Comune di Genova · Trasporto per il tempo libero dedicato alle persone con disabilità (Mobility Bus)",
      url: "https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/trasporto-il-tempo-libero-dedicato-alle-persone-con",
    },
    verificatoIl: "27/10/2026",
    nota: "Pagina del Comune aggiornata il 19/08/2026 e riletta il 27/10/2026. Il viaggio può non essere confermato per orari sovrapposti o mancanza di vetture.",
  },
  {
    id: "genova-trasporto-lavorativo-riabilitativo",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Trasporto per andare al lavoro o in riabilitazione",
    perChi:
      "Persone residenti a Genova con disabilità fisica, psichica o sensoriale (Legge 104/1992, art. 3 comma 3), fino a 65 anni, che non possono usare i mezzi pubblici di linea e hanno bisogno di un accompagnamento personalizzato.",
    cosa:
      "Trasporto assistito con vettura da casa al lavoro o alla struttura riabilitativa. È prevista una contribuzione mensile legata al costo dell'abbonamento annuale agevolato AMT; la pagina non indica l'importo né un limite ISEE.",
    stato: "attivo",
    comeSiChiede:
      "Domanda online sul sito del Comune con SPID, CIE o CNS. Per il lavoro: certificazione sanitaria della disabilità e dell'impossibilità di usare i mezzi pubblici, più la dichiarazione del datore di lavoro con l'orario. Per la riabilitazione: segnalazione e valutazione sanitaria dell'ASL3. Informazioni: U.O. Area Disabilità, tel. 010 5577444, polodisabilita@comune.genova.it.",
    fonte: {
      label: "Comune di Genova · Servizio di trasporto lavorativo o riabilitativo",
      url: "https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/servizio-di-trasporto-lavorativo-o-riabilitativo",
    },
    verificatoIl: "26/10/2026",
    nota: "Pagina del Comune aggiornata il 19/08/2026.",
  },
  {
    id: "genova-cude-contrassegno",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Contrassegno parcheggio per persone con disabilità (CUDE)",
    perChi: "Residenti a Genova con capacità di deambulazione impedita o sensibilmente ridotta, accertata dalla Commissione medico legale dell'ASL o dal verbale INPS.",
    cosa: "Il contrassegno europeo CUDE: permette la sosta negli spazi riservati e il transito nelle zone a traffico limitato in tutta Europa. È personale, non legato a un'auto: si espone in originale quando la persona con disabilità è a bordo.",
    stato: "attivo",
    comeSiChiede:
      "Richiesta online sul sito del Comune con SPID, CIE o CNS. Servono: certificato della Commissione medico legale ASL o verbale INPS con la dicitura sulla deambulazione, due foto tessera, documento d'identità; per il contrassegno temporaneo due marche da bollo da 16 euro; per il rinnovo del permanente il certificato del medico curante (modello C4, non più vecchio di 180 giorni). Dopo l'approvazione (su App IO o Fascicolo del cittadino) si ritira allo sportello di Genova Parcheggi, dove si paga e serve la presenza della persona. Genova Parcheggi: tel. 010 539871 (lunedì–venerdì 8:15–16:30), servizioclienti@gepark.com.",
    fonte: {
      label: "Comune di Genova · Richiedere permesso per parcheggio persone con disabilità",
      url: "https://www.comune.genova.it/servizi/mobilita-e-trasporti/richiedere-permesso-parcheggio-invalidi",
    },
    verificatoIl: "25/10/2026",
  },
  {
    id: "genova-parcheggio-personalizzato",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Parcheggio riservato personalizzato vicino a casa o al lavoro",
    perChi:
      "Titolari di CUDE permanente con gravissimo disagio nel camminare o che non camminano, che usano spesso l'auto e non hanno un box o posto auto accessibile vicino a casa (o al lavoro, se guidano).",
    cosa: "Uno stallo riservato con il cartello che riporta il numero del proprio CUDE. Decide una Commissione tecnica (Mobilità, Polizia Locale, Disability Manager, Medicina legale ASL3, Consulta per la disabilità, Politiche sociali).",
    stato: "attivo",
    comeSiChiede:
      "Richiesta online sul sito del Comune. Informazioni: parcheggidisabili@comune.genova.it, tel. 010 5573341 (mercoledì 10:00–12:00), oppure lo sportello del tuo Municipio.",
    fonte: {
      label: "Comune di Genova · Gestione sosta - Parcheggi disabili personalizzati",
      url: "https://www.comune.genova.it/servizi/mobilita-e-trasporti/gestione-sosta-parcheggi-disabili-personalizzati",
    },
    verificatoIl: "25/10/2026",
  },
  {
    id: "genova-esenzione-passo-carrabile",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Esenzione dal canone del passo carrabile per persone con disabilità",
    perChi:
      "Persone con disabilità, o loro conviventi, con grave limitazione della capacità di camminare, pluriamputazioni, capacità di deambulazione sensibilmente ridotta o capacità motorie ridotte o impedite, scritte nei verbali delle commissioni mediche.",
    cosa: "Non si paga il canone OSAP del passo carrabile. Il servizio è gratuito.",
    stato: "attivo",
    comeSiChiede:
      "Modulo online sul sito del Comune (SPID, CIE o CNS), oppure il modulo PDF via PEC a comunegenova@postemailcertificata.it con copia a cosap@comune.genova.it. Ufficio Canone Occupazione Suolo: Via Antonio Cantore 3, 10° piano, stanza 24, lunedì–venerdì 8:30–12:30 e mercoledì anche 14:00–16:00, tel. 010 5575455.",
    fonte: {
      label: "Comune di Genova · Occupazione spazi e aree pubbliche: esenzione per persona con disabilità",
      url: "https://www.comune.genova.it/servizi/tributi-finanze-e-contravvenzioni/occupazione-spazi-e-aree-pubbliche-esenzione-persona-con",
    },
    verificatoIl: "25/10/2026",
  },
  {
    id: "genova-cohousing-disabili",
    regione: "Liguria",
    comuni: ["genova"],
    titolo: "Convivenza e comunità alloggio (cohousing) per persone con disabilità",
    perChi: "Persone con disabilità che vogliono sperimentare o costruire un percorso di autonomia.",
    cosa:
      "Ospitalità in appartamenti condivisi gestiti da associazioni che collaborano con il Comune, temporanea o definitiva, con un progetto sociosanitario personale (PAI) condiviso con la persona e la famiglia. Può prevedere supporto educativo e assistenziale; può essere chiesto un contributo alle spese dell'alloggio.",
    stato: "attivo",
    comeSiChiede:
      "Chiedi all'Ufficio dei Servizi Sociali del tuo Municipio o al Polo cittadino per le disabilità: tel. 010 5577444, polodisabilita@comune.genova.it.",
    fonte: {
      label: "Comune di Genova · Soluzioni per la convivenza e comunità alloggio (Cohousing)",
      url: "https://www.comune.genova.it/tutti-gli-argomenti/persona-con-disabilita/soluzioni-la-convivenza-e-comunita-alloggio-cohousing",
    },
    verificatoIl: "25/10/2026",
  },

  // ------------------------------------------------------------ COMUNE DI MILANO

  // -------------------------------------------------------------------- LAZIO
  {
    id: "lazio-disabilita-gravissima",
    regione: "Lazio",
    titolo: "Disabilità gravissima: assistenza domiciliare, assegno di cura o contributo di cura",
    perChi:
      "Persone non autosufficienti che vogliono restare a casa con un sostegno intenso e continuo, in una delle condizioni previste dal decreto ministeriale del 26 settembre 2016. Servono l'indennità di accompagnamento oppure la non autosufficienza riconosciuta ai sensi dell'allegato 3 del DPCM 159/2013.",
    cosa:
      "Un servizio di assistenza domiciliare, oppure una misura economica: l'assegno di cura serve a pagare un operatore con regolare contratto scelto da te, il contributo di cura compensa l'assistenza data dal caregiver. La pagina della Regione non scrive gli importi.",
    stato: "attivo",
    comeSiChiede:
      "La pagina non spiega come presentare la domanda. La Regione assegna ogni anno le risorse ai Distretti sociosanitari: chiedi al Segretariato Sociale del tuo Comune o al PUA. Informazioni: Numero Unico Regionale 06 99 500 (lun-ven 8:00-17:30).",
    fonte: {
      label: "Regione Lazio · Disabilità gravissima",
      url: "https://regione.lazio.it/cittadini/sociale-famiglie/disabilita/disabilita-gravissima",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina della Regione aggiornata il 04/03/2026. La pagina non indica soglie ISEE né scadenze: chiedile al Distretto.",
  },

  // ------------------------------------------------------------ COMUNE DI LATINA
  // Fonti: pagine dei servizi del Comune di Latina, lette il 26/10/2026.
  {
    id: "latina-adi-disabili",
    regione: "Lazio",
    comuni: ["latina"],
    titolo: "Assistenza domiciliare integrata per persone con disabilità (0–65 anni)",
    perChi:
      "Persone residenti a Latina, da 0 a 65 anni, con disabilità fisica, psichica o sensoriale documentata dal verbale di invalidità INPS, che hanno bisogno di più assistenza sociosanitaria e di cure per la persona.",
    cosa:
      "Cura e igiene della persona e della casa, socializzazione, disbrigo pratiche, compagnia, accompagnamento all'esterno (dal medico di base, in ASL e dai servizi specialistici) e assistenza durante i ricoveri se la persona è sola. La Commissione multidisciplinare stabilisce le ore settimanali e i servizi. È gratuito.",
    stato: "attivo",
    quando: "Non ci sono scadenze: la domanda si può presentare in qualsiasi momento dell'anno.",
    comeSiChiede:
      "Si va al Punto Unico di Accesso (PUA) e si compila la domanda. Allegati: ISEE socio-sanitario in corso di validità (timbrato e firmato da CAF o patronato), documento d'identità, tessera sanitaria, certificato di invalidità civile (se manca, certificato del medico curante con le patologie). Informazioni: servizi.sociali@comune.latina.it, centralino 0773 6521.",
    fonte: {
      label: "Comune di Latina · Assistenza domiciliare integrata per persone disabili 0-65 anni",
      url: "https://www.comune.latina.it/home/servizi/servizio/Servizio-84.html",
    },
    verificatoIl: "26/10/2026",
    nota: "Pagina del Comune aggiornata il 12/04/2024: conferma con il PUA che il servizio sia attivo.",
  },
  {
    id: "latina-centro-diurno-disabili",
    regione: "Lazio",
    comuni: ["latina"],
    titolo: "Centro diurno per persone con disabilità adulte",
    perChi:
      "Adulti con disabilità residenti a Latina, da 18 a 65 anni, senza patologie psichiatriche prevalenti né disturbi del comportamento incompatibili con la vita in comunità.",
    cosa:
      "Un posto in uno dei 3 Centri Diurni per disabili adulti del Comune, con attività individuali e di gruppo secondo il Piano personalizzato individuale, per mantenere e rafforzare l'autonomia. Il trasporto da casa al centro e ritorno è offerto compatibilmente con le risorse. Dopo 30 giorni di prova la persona viene inserita in modo definitivo o dimessa. Si paga una compartecipazione che dipende dall'ISEE socio-sanitario; la pagina non scrive gli importi.",
    stato: "attivo",
    quando: "Non ci sono avvisi annuali: la domanda si può presentare in qualsiasi periodo.",
    comeSiChiede:
      "Si va al Punto Unico di Accesso (PUA), al piano terra della sede ASL. Allegati: domanda compilata, certificato di invalidità, certificazione Legge 104/1992, documento d'identità, eventuale decreto di nomina del tutore o dell'amministratore di sostegno, diagnosi funzionale, ISEE, consenso al trattamento dei dati e dichiarazione di accettare la quota di compartecipazione. Informazioni: servizi.sociali@comune.latina.it.",
    fonte: {
      label: "Comune di Latina · Centro diurno socio-educativo per persone disabili adulte",
      url: "https://www.comune.latina.it/home/servizi/servizio/Servizio-85.html",
    },
    verificatoIl: "26/10/2026",
    nota: "Pagina del Comune aggiornata il 12/04/2024.",
  },

  // ------------------------------------------------------- DISTRETTO LT4 (FONDI)
  // Fonte: portale Rete del Sociale del Comune di Fondi e del Distretto LT4, letto il 26/10/2026.
  {
    id: "fondi-caregiver-status-lt4",
    regione: "Lazio",
    comuni: ["fondi", "terracina"],
    titolo: "Riconoscimento del caregiver familiare e \"Card Giver\" (Distretto LT4)",
    perChi:
      "Chi assiste in modo volontario e gratuito una persona non autosufficiente, riconosciuta invalida con bisogno di assistenza globale e continua o titolare di indennità di accompagnamento. Vale per i residenti dei Comuni del Distretto LT4: Campodimele, Fondi, Lenola, Monte San Biagio, San Felice Circeo, Sperlonga e Terracina. Chi assiste può essere il coniuge, il convivente, un familiare o affine entro il secondo grado (in alcuni casi il terzo) oppure chi convive con la persona assistita.",
    cosa:
      "Il riconoscimento formale dello status di caregiver familiare, deciso dall'UVMD del Distretto, e un tesserino \"Card Giver\" che dà accesso a percorsi preferenziali per alcuni servizi. Il riconoscimento serve per chiedere interventi di sostegno (informativi, formativi, di sollievo, psicologici) nei limiti delle risorse. L'avviso non scrive importi.",
    stato: "attivo",
    quando: "Avviso aperto, senza scadenza: si può presentare domanda in qualsiasi momento. L'iter si conclude entro 90 giorni dalla domanda.",
    comeSiChiede:
      "Solo online, sul portale Rete del Sociale (fondi.retedelsociale.it) con SPID. Allegati obbligatori: documento d'identità della persona assistita, codice fiscale o tessera sanitaria, ISEE ordinario in corso di validità del nucleo, verbale di invalidità civile, verbale ai sensi dell'art. 3 comma 3 della Legge 104/1992. La domanda vale solo se, dopo \"Spedisci\", passa da \"Bozza\" a \"Presentata\" con numero di protocollo; dopo l'invio non si può correggere. Per aiuto: PUA distrettuale di Fondi o di Terracina, oppure l'Ufficio Servizi Sociali del Comune di residenza.",
    fonte: {
      label: "Distretto LT4 · Avviso pubblico per il riconoscimento del caregiver familiare",
      url: "https://fondi.retedelsociale.it/upload/File/AllegatiNews/21.pdf",
    },
    verificatoIl: "26/10/2026",
    nota: "L'avviso è datato 30/05/2025 e la pagina del portale che lo richiama è del 12/10/2026. L'avviso non indica telefoni né orari: chiedili al PUA o al Comune.",
  },

  // ------------------------------------------------------------------ TOSCANA
  {
    id: "pisa-trasporto-scolastico-autonomo-2026",
    regione: "Toscana",
    comuni: ["pisa"],
    titolo: "Contributo per il trasporto scolastico organizzato dalla famiglia (alunni con disabilità, 3-14 anni)",
    perChi:
      "Famiglie di minori residenti a Pisa con certificazione legge 104/1992 art. 3, comma 1 o 3, che nel 2026 hanno frequentato la scuola dell'infanzia, primaria o secondaria di primo grado. Sono esclusi chi ha usato il trasporto scolastico comunale o il trasporto sociale della Società della Salute Zona Pisana negli anni scolastici interessati.",
    cosa:
      "Contributo fino a 2.000 euro all'anno per ogni beneficiario; l'importo effettivo si stabilisce dopo l'esame delle domande (risorse complessive: 97.317,60 euro).",
    stato: "aperto",
    quando: "Domande entro il 27/11/2026, ore 23:59.",
    comeSiChiede:
      "Domanda online sul portale del Comune, una per ogni figlio con disabilità. Serve il certificato di invalidità e, se serve, la delega.",
    fonte: {
      label: "Comune di Pisa · Contributi per il trasporto scolastico degli alunni con disabilità (pagina del 30/10/2026)",
      url: "https://www.comune.pisa.it/Servizi/Contributi-per-nuclei-familiari-che-organizzano-in-autonomia-il-trasporto-scolastico-degli-alunni-con-disabilita-dai-3-ai-14-anni",
    },
    verificatoIl: "10/11/2026",
    nota: "Scade il 27/11/2026. Avviso approvato con determina n. 1806 del 30/10/2026.",
  },
  {
    id: "toscana-centro-ascolto-caregiver",
    regione: "Toscana",
    titolo: "Centro regionale di ascolto per il caregiver familiare",
    perChi:
      "Chi si prende cura di un proprio caro non autosufficiente o con disabilità e sente che il peso dell'assistenza è diventato troppo grande.",
    cosa:
      "Ascolto e sostegno psicologico da parte di psicologi e psicoterapeuti formati sui bisogni dei caregiver, per elaborare gli effetti del lavoro di cura. Informazioni e orientamento sui servizi del servizio sanitario regionale e delle associazioni del territorio. Non è un contributo in denaro. La pagina non scrive se il servizio è gratuito.",
    stato: "attivo",
    quando: "Telefono dal lunedì al venerdì, 9:00–18:00.",
    comeSiChiede: "Telefono 055 438 5270 oppure email ascolto.caregiver@regione.toscana.it.",
    fonte: {
      label: "Regione Toscana · Centro di ascolto per il caregiver familiare",
      url: "https://www.regione.toscana.it/it/-/centro-di-ascolto-per-il-caregiver-familiare",
    },
    verificatoIl: "27/10/2026",
    nota: "Pagina della Regione aggiornata il 24/03/2026.",
  },
  {
    id: "toscana-vita-indipendente-fse",
    regione: "Toscana",
    titolo: "Progetti di vita indipendente e inclusione per adulti con disabilità grave (FSE+ 2021-2027)",
    perChi:
      "Persone adulte con disabilità e certificazione di gravità (Legge 104/1992), residenti nella Zona distretto del progetto, in grado di esprimere la propria volontà, anche con supporto, e di gestire le proprie scelte. I requisiti vanno posseduti alla data della domanda.",
    cosa:
      "Finanziamento di progetti individuali di vita indipendente. La pagina non scrive quanto spetta a ogni persona: indica 46 milioni di euro per il triennio 2024-2026 per i progetti ammessi e, per il 2026-2027, quasi 6,25 milioni assegnati dalla Giunta il 27/04/2026 per ridurre le liste d'attesa e avviare nuovi progetti dal 1° luglio 2026.",
    stato: "da-verificare",
    quando:
      "Il bando per gli enti era aperto dall'1 al 16 agosto 2024. Nuovi progetti dal 1° luglio 2026 con i fondi assegnati ad aprile 2026. La pagina non indica una nuova finestra per le domande.",
    comeSiChiede:
      "Le domande alla Regione sono presentate dalle Società della Salute o, dove non ci sono, dal soggetto indicato dalla Conferenza zonale dei sindaci: un progetto per Zona distretto. La pagina non spiega come accede il cittadino: chiedi al servizio sociale del tuo Comune o alla Società della Salute della tua zona.",
    fonte: {
      label: "Regione Toscana · Disabilità e grave limitazione dell'autonomia: finanziamenti per vita indipendente e inclusione",
      url: "https://www.regione.toscana.it/it/-/disabilit%C3%A0-e-grave-limitazione-dell-autonomia-finanziamenti-per-sostenere-vita-indipendente-e-inclusione",
    },
    verificatoIl: "30/10/2026",
    nota: "Pagina della Regione aggiornata il 22/06/2026. Il 16/06/2026 la Regione ha impegnato altri 4,8 milioni di euro per ridurre le liste d'attesa (decreto n. 13481). Importo per persona, requisiti ISEE e tempi vanno chiesti alla Società della Salute. Domande e informazioni sul bando: vitaindipendentefse@regione.toscana.it.",
  },
  {
    id: "toscana-esenzione-bollo-disabilita",
    regione: "Toscana",
    titolo: "Esenzione dal bollo auto per persone con disabilità",
    perChi:
      "Persone con ridotte o impedite capacità motorie permanenti (solo per veicoli adattati); con handicap grave (art. 3, comma 3, Legge 104/1992) o invalidità grave, solo se dai verbali risulta anche la grave limitazione della capacità di deambulazione; ciechi e ipovedenti gravi; sordi; persone con handicap psichico o mentale che ha dato diritto all'indennità di accompagnamento. Per i maggiorenni il verbale deve essere permanente, senza revisione, rilasciato dalle Commissioni mediche pubbliche: non valgono i certificati del medico di base o di specialisti.",
    cosa:
      "Esenzione dalla tassa automobilistica per un solo veicolo, intestato alla persona con disabilità o a chi la ha fiscalmente a carico. Limiti: 2.000 cc a benzina o ibrido, 2.800 cc a gasolio, 150 kW se elettrico. Se la persona con disabilità non è l'intestataria del veicolo, deve essere fiscalmente a carico: reddito complessivo annuo non superiore a 2.840,51 euro (4.000 euro per i figli fino a 24 anni). L'ISEE non è ammesso.",
    stato: "attivo",
    quando:
      "Nessuna scadenza fissa. La domanda va presentata entro 180 giorni dalla scadenza del termine di pagamento del bollo del periodo in corso. L'esenzione vale dal periodo in corso e non è retroattiva.",
    comeSiChiede:
      "Sul portale regionale www.regione.toscana.it/bolloauto con SPID, CIE o CNS, oppure per PEC a regionetoscana@postacert.toscana.it o con raccomandata a Regione Toscana, Settore Politiche Fiscali e Riscossione, Via di Novoli 26, 50127 Firenze. Servono il modulo (E1 se il proprietario è la persona con disabilità, E2 se è a carico di altri), documento d'identità, libretto di circolazione, verbali delle Commissioni mediche, patente speciale se il veicolo è adattato e, se serve, la dichiarazione dei redditi. File in PDF fino a 3 MB. La Regione risponde entro 120 giorni e, finché non risponde, il bollo è sospeso.",
    fonte: {
      label: "Regione Toscana · Esenzioni per disabilità e minorenni trapiantati",
      url: "https://www.regione.toscana.it/-/esenzioni_per_disabilit%C3%A0_e_minorenni_trapiantati",
    },
    verificatoIl: "30/10/2026",
    nota: "Pagina della Regione aggiornata il 09/02/2026. Se cambiano i requisiti, scade il verbale o vendi il veicolo, devi avvisare la Regione entro 60 giorni, altrimenti ci sono sanzioni.",
  },

  // ------------------------------------------------------------------- PUGLIA

  // ------------------------------------------------------------------ VENETO
  {
    id: "veneto-impegnative-cura-domiciliare",
    regione: "Veneto",
    titolo: "Impegnative di cura domiciliare (ICD)",
    perChi:
      "Persone con disabilità o non autosufficienza assistite a casa, residenti in Veneto. ICDa: dipendenza vitale e/o ventilazione assistita, con bisogno di assistenza continua nelle 24 ore. ICDp: da 3 a 64 anni con grave disabilità psichica e intellettiva. ICDf: da 18 a 64 anni con grave disabilità fisico-motoria e capacità di autodeterminazione. ICDsla: persone con Sclerosi Laterale Amiotrofica.",
    cosa:
      "Un contributo mensile per sostenere l'assistenza a casa. ICDa: 800,00 euro fissi (ISEE sotto 60.000 euro per i maggiorenni, sotto 65.000 per i minorenni). ICDp: da 400,00 a 706,00 euro in base al progetto personalizzato, senza soglia ISEE. ICDf: da 400,00 a 1.000,00 euro in base al progetto personalizzato, senza soglia ISEE, con rendicontazione. ICDsla: da 400,00 a 2.000,00 euro in base alla condizione economica (ISEE sotto 60.000 euro), con rendicontazione.",
    stato: "attivo",
    quando:
      "La domanda si può presentare in qualsiasi momento. L'erogazione segue una graduatoria gestita dall'ULSS: si può risultare idonei senza ottenere subito il contributo. Con i requisiti, l'intervento viene rinnovato ogni anno.",
    comeSiChiede:
      "La domanda la presenta la persona o il suo legale rappresentante, un familiare, oppure una persona (preferibilmente convivente) che garantisce l'assistenza. Si consegna agli sportelli dei Servizi Sociali del Comune/ATS o del Distretto Socio Sanitario di residenza. Segue una valutazione socio-sanitaria dell'Unità di valutazione multidimensionale distrettuale (UVMD), che assegna un punteggio.",
    fonte: {
      label: "Regione del Veneto · Domiciliarità (ICD) - Impegnative di Cura Domiciliari",
      url: "https://salute.regione.veneto.it/assistenza-sociosanitaria-/persone-con-disabilit%C3%A0/domiciliarit%C3%A0-(icd)---impegnative-di-cura-domiciliari",
    },
    verificatoIl: "15/10/2026",
    nota: "La pagina regionale non indica la data di aggiornamento degli importi: confermali con il tuo Distretto o con l'ULSS prima di fare conto sul contributo. Esistono altre tipologie (ad esempio ICDb e ICDm) non descritte nella pagina letta.",
  },

  // ----------------------------------------------------------------- PIEMONTE

  {
    id: "piemonte-buono-domiciliarita-2026",
    regione: "Piemonte",
    titolo: "Buono domiciliarità 2026-2027: 700 euro al mese per l'assistenza familiare",
    perChi:
      "Persone con disabilità non autosufficienti (o over 65 non autosufficienti) residenti in Piemonte, già valutate dall'UMVD o dall'UVG con punteggio sanitario non inferiore a 5 e punteggio sociale non inferiore a 7. ISEE ordinario o sociosanitario in corso di validità non superiore a 40.000 euro; non è ammesso l'ISEE corrente o con anomalie. Serve un assistente familiare con contratto già in corso alla data della domanda (non può essere il coniuge né un parente o affine fino al secondo grado).",
    cosa:
      "Contributo di 700 euro al mese per 12 mesi, che può arrivare a 24 in base alle domande ammissibili, da spendere per un servizio di assistenza familiare: contratto di lavoro domestico (almeno livello CS), contratto con cooperativa o agenzia, o incarico a un assistente libero professionista. Servono 16 ore di assistenza a settimana. Il contratto di lavoro subordinato deve durare almeno 30 giorni. Erogazione trimestrale, dopo la rendicontazione. Il contributo parte dal primo giorno del mese successivo alla comunicazione di assegnazione.",
    stato: "aperto",
    scade: "2026-11-02",
    quando:
      "Domande dalle 0:00 del 14 settembre 2026 alle 23:59 del 2 novembre 2026. Assegnato fino a esaurimento delle risorse: prima il punteggio sociale più alto, poi l'ISEE più basso, poi l'ordine di presentazione.",
    comeSiChiede:
      "Online su piemontetu.it o sceltasociale.it con SPID, CIE o CNS. La domanda la presenta un delegato (genitore, tutore, coniuge, parente di primo grado, amministratore di sostegno) che non può essere l'assistente. Allegati obbligatori: verbale di valutazione UVG/UMVD (o lettera con il punteggio) e contratto o incarico: senza, la domanda non è ammessa.",
    fonte: {
      label: "Regione Piemonte · Avviso Scelta sociale, Buono domiciliarità 2026",
      url: "https://bandi.regione.piemonte.it/system/files/All.1_AVVISO_DOM_2026.pdf",
    },
    verificatoIl: "30/10/2026",
    nota: "Il termine era lunedì 2 novembre 2026 alle 23:59. Non è compatibile con alcune misure, tra cui gli assegni di cura, i contributi del Fondo caregiver, Home Care Premium e l'accoglienza definitiva in strutture residenziali: leggi l'avviso. Le risorse totali sono 20.193.600 euro, non per persona. Per informazioni: sceltasociale@regione.piemonte.it o numero verde 800 333 444 (lunedì–venerdì, 8–18). Attenzione: la vecchia pagina \"Scelta sociale - Buono per la domiciliarità\" mostra ancora i dati del 2023, che non valgono più.",
  },
  {
    id: "piemonte-barriere-architettoniche",
    regione: "Piemonte",
    titolo: "Contributi per eliminare le barriere architettoniche in casa (Legge 13/1989)",
    perChi:
      "Persone con invalidità al 100% che devono eliminare barriere architettoniche nella casa in cui vivono, per lavori non ancora iniziati.",
    cosa:
      "Contributo per i lavori di eliminazione delle barriere. L'erogazione avviene solo dopo che lo Stato ha trasferito i fondi alla Regione, a lavori finiti e con le fatture quietanzate. La domanda non finanziata resta valida negli anni successivi. La pagina non scrive l'importo massimo né i fondi del 2026.",
    stato: "attivo",
    quando:
      "La domanda si presenta in qualsiasi giorno dell'anno. Il Comune mette in ordine le domande arrivate entro il 1° marzo e comunica alla Regione il fabbisogno entro il 31 marzo.",
    comeSiChiede:
      "Al Comune dove si trova l'immobile (a Torino, ad ATC Piemonte Centrale), prima di iniziare i lavori. Servono: certificato di invalidità al 100%, certificato medico, preventivo di spesa dettagliato, documento d'identità e dichiarazione di residenza. Informazioni: ediliziasociale@regione.piemonte.it, telefono 011 432 3888.",
    fonte: {
      label: "Regione Piemonte · Eliminazione delle barriere architettoniche negli edifici privati",
      url: "https://www.regione.piemonte.it/web/temi/diritti-politiche-sociali/casa/eliminazione-delle-barriere-architettoniche-negli-edifici-privati",
    },
    verificatoIl: "30/10/2026",
    nota: "Chiedi al Comune se ci sono fondi per il 2026: la pagina della Regione non lo scrive.",
  },
  {
    id: "piemonte-misure-disabilita",
    regione: "Piemonte",
    titolo: "Misure per le persone con disabilità: assistenza domiciliare, vita indipendente, lungo assistenza",
    perChi:
      "Persone con disabilità del Piemonte. Per la vita indipendente serve una disabilità grave (art. 3 comma 3 della Legge 104/92); i centri diurni sono per chi ha più di 14 anni; il Dopo di noi (L. 112/2016) è per chi ha una disabilità grave e non ha sostegno familiare.",
    cosa:
      "Finanziate dalla Regione tramite gli Enti gestori: assistenza domiciliare e sostegno socio-educativo, centro diurno o struttura residenziale, affidamento, progetti di vita indipendente. La \"Domiciliarità in lungo assistenza\" prevede un contributo economico per assistenti regolarmente assunti, familiari o volontari, oppure servizi come telesoccorso e pasti a domicilio. La pagina non scrive gli importi.",
    stato: "attivo",
    comeSiChiede:
      "Rivolgiti all'Ente gestore del tuo territorio o allo Sportello unico del Distretto sanitario della tua ASL. L'Unità multidisciplinare di valutazione della disabilità (UMVD) valuta i bisogni e prepara con te un progetto personalizzato. Call center regionale: 800 333 444 da fisso, 011 08 24 222 da cellulare, lun-ven 8:00-18:00.",
    fonte: {
      label: "Regione Piemonte · Assistenza alle persone con disabilità",
      url: "https://www.regione.piemonte.it/web/temi/diritti-politiche-sociali/disabilita/salute-interventi-socio-sanitari/assistenza-alle-persone-disabilita",
    },
    verificatoIl: "14/10/2026",
    nota: "Pagina aggiornata l'8 ottobre 2026. Gli importi dipendono dal progetto: chiedili all'Ente gestore.",
  },

  // ---------------------------------------------------------- COMUNE DI TORINO
  {
    id: "torino-assistenza-domiciliare",
    regione: "Piemonte",
    comuni: ["torino"],
    titolo: "Torino: assistenza a casa per persone con disabilità (assegni di cura e rimborsi)",
    perChi:
      "Persone con disabilità, minori e adulte, che vogliono restare nella propria casa. Serve la valutazione dell'Unità Multidisciplinare di Valutazione delle Disabilità (U.M.V.D.), l'ISEE e un appuntamento con i servizi sociosanitari per il Progetto di Assistenza Individuale.",
    cosa:
      "Cura della persona e della casa, aiuto per le commissioni, pasti a domicilio, OSS con Buoni Servizio, telesoccorso e teleassistenza. Ci sono anche erogazioni economiche, come assegni di cura o rimborsi spese per chi svolge lavoro di cura. La pagina non scrive gli importi e può essere prevista una quota in base all'ISEE.",
    stato: "attivo",
    comeSiChiede:
      "Rivolgiti al servizio sociale della tua Circoscrizione, per appuntamento dal lunedì al venerdì dalle 9:00 alle 13:00 (vedi Punti di supporto).",
    fonte: {
      label: "Città di Torino · Interventi di assistenza domiciliare",
      url: "https://www.comune.torino.it/servizi/interventi-assistenza-alle-persone-anziane-disabilita-che-vivono-al-domicilio",
    },
    verificatoIl: "13/10/2026",
    nota: "I progetti si possono rinnovare ogni anno. Importi e soglie ISEE vanno chiesti al servizio sociale.",
  },

  // -------------------------------------------------------------- EMILIA-ROMAGNA
  {
    id: "emilia-romagna-assegno-di-cura",
    regione: "Emilia-Romagna",
    titolo: "Assegno di cura per adulti con disabilità grave o gravissima",
    perChi:
      "Adulti con disabilità grave o gravissime disabilità acquisite che vivono a casa. Può essere dato alla persona, all'amministratore di sostegno o al caregiver. È alternativo all'inserimento in una struttura residenziale. L'accesso dipende dalla valutazione dell'UVM. ISEE: soglia di 34.000 euro; nessuna soglia per chi è in totale non autosufficienza e dipendenza vitale con assistenza continua nelle 24 ore; 65.000 euro per i minori con gravissima disabilità acquisita.",
    cosa:
      "Quattro livelli giornalieri: 10,33, 15,49, 23 e 45 euro. I primi due dipendono da disabilità, carico assistenziale e altri servizi; 23 e 45 euro sono per le situazioni di gravissima disabilità. Con un contratto regolare con un assistente familiare di almeno 20 ore settimanali ci sono 160 euro in più al mese.",
    stato: "attivo",
    quando:
      "Di norma l'assegno è semestrale e può arrivare a 12 mesi nelle situazioni stabili. Per rinnovarlo serve una nuova valutazione UVM.",
    comeSiChiede:
      "Rivolgiti ai servizi sociali o sanitari per adulti con disabilità del tuo Comune o dell'Azienda Usl. L'assistente sociale o il referente sanitario fa una prima valutazione; poi l'UVM valuta il bisogno e prepara con te e il caregiver il piano assistenziale personalizzato (PAI).",
    fonte: {
      label: "Regione Emilia-Romagna · Assegno di cura (persone con disabilità)",
      url: "https://sociale.regione.emilia-romagna.it/persone-con-disabilita/assistenza/assegno-di-cura",
    },
    verificatoIl: "14/10/2026",
    nota: "Pagina aggiornata il 17/04/2025. Esistono anche contributi per i caregiver: chiedi al servizio sociale del tuo Comune.",
  },

  // --------------------------------------------- DISTRETTO CERAMICO (SASSUOLO)

  // ----------------------------------------------------------------- CAMPANIA

  // ------------------------------------------------------------ COMUNE DI ROMA
  {
    id: "roma-assegno-contributo-cura",
    regione: "Lazio",
    comuni: ["roma"],
    titolo: "Roma Capitale: assegno di cura e contributo di cura (disabilità gravissima)",
    perChi:
      "Persone con disabilità gravissima (fisica, psichica o sensoriale), minorenni, adulte e anziane, che vogliono restare in famiglia. Servono l'indennità di accompagnamento oppure la non autosufficienza ai sensi dell'allegato 3 del DPCM 159/2013, e almeno una delle condizioni dell'art. 3 del decreto ministeriale 26 settembre 2016. Non basta il verbale con accompagnamento: la disabilità gravissima deve essere riconosciuta dalle UVM.",
    cosa:
      "Assegno di cura: da 500 a 800 euro al mese per pagare personale qualificato (con regolare contratto, oppure tramite Organismi accreditati). Contributo di cura: da 400 a 700 euro al mese per chi è assistito da un caregiver familiare. L'importo dipende dall'ISEE socio-sanitario e dagli altri servizi attivi.",
    stato: "attivo",
    quando:
      "Dal 1° luglio 2022 la domanda si può presentare in qualunque momento dell'anno. L'erogazione mensile dipende dalle risorse della Regione Lazio e del bilancio.",
    comeSiChiede:
      "La scheda rimanda al sito di Roma Capitale (scheda INF117423) per contatti e moduli. Puoi anche chiedere informazioni al PUA o all'Agenzia per la Vita Indipendente.",
    fonte: {
      label: "Agenzia per la Vita Indipendente di Roma Capitale · Assegno di cura e contributo di cura",
      url: "https://www.vitaindipendenteroma.it/schede/assegno-di-cura-e-contributo-di-cura-caregiver/",
    },
    verificatoIl: "13/10/2026",
    nota: "La scheda non riporta la data di aggiornamento. L'assegno è sospeso con ricoveri di sollievo a carico del Fondo Sanitario Regionale, residenzialità continuativa o cambio di regione. Conferma importi e moduli con il Comune.",
  },

  // ----------------------------------------------------------- COMUNE DI FIUMICINO

  // ------------------------------------------------------------------ ABRUZZO

  // ----------------------------------------------------------- L'AQUILA (AQ)
  {
    id: "laquila-caregiver-2026",
    regione: "Abruzzo",
    comuni: ["laquila"],
    titolo: "Fondo per il sostegno del caregiver familiare (2026)",
    perChi:
      "Caregiver familiari residenti all'Aquila che assistono un parente convivente (anagraficamente) in condizione di disabilità gravissima. ISEE ordinario familiare del caregiver non superiore a 36.000 euro.",
    cosa:
      "Contributo di sollievo per l'assistenza continuativa e, quando serve, per interventi di sostituzione nella cura o ricoveri temporanei di sollievo. L'importo non è indicato nelle fonti che abbiamo letto: dipende dall'intensità del bisogno, dalla rete di aiuto disponibile e dall'ISEE.",
    stato: "aperto",
    scade: "2026-11-02",
    quando: "Domande entro le ore 23:59 del 2 novembre 2026.",
    comeSiChiede:
      "Solo online sulla piattaforma bandisocialescuola.comune.laquila.it. Per chi ha difficoltà c'è il Punto Digitale del Servizio Politiche Sociali (via Filomusi Guelfi 6/c, Villa Gioia), lo Sportello Unificato e il Servizio Sociale – Ufficio Disabilità, non autosufficienza e integrazione socio-sanitaria.",
    fonte: {
      label: "ReteAbruzzo · Comune dell'Aquila, avviso caregiver familiari (10/10/2026)",
      url: "https://www.reteabruzzo.com/2026/10/10/comune-dellaquila-avviso-per-sostegno-ai-caregiver-familiari-domande-fino-al-2-novembre/",
    },
    verificatoIl: "12/10/2026",
    nota: "La scadenza era il 2 novembre 2026. L'elenco dei documenti non è nella fonte: leggi l'avviso sul sito del Comune.",
  },

  // ------------------------------------------------------------- OCRE (AQ)

  // ------------------------------------------------------------- BRESCIA
  {
    id: "brescia-vacanze-adulti-disabilita",
    regione: "Lombardia",
    comuni: ["brescia"],
    titolo: "Contributo una tantum per le vacanze di persone adulte con disabilità",
    perChi:
      "Persone adulte con disabilità che hanno i requisiti dell'avviso pubblico. La pagina del servizio non elenca i requisiti: si leggono nell'avviso.",
    cosa: "Rimborso parziale, una sola volta, delle spese sostenute per le vacanze. La pagina non scrive gli importi.",
    stato: "attivo",
    quando: "La pagina scrive che le domande si inseriscono dal 15 novembre al 15 gennaio dell'anno successivo (senza indicare l'anno).",
    comeSiChiede:
      "Online, compilando il modulo sul canale digitale del servizio. I documenti da allegare sono nell'avviso pubblico.",
    fonte: {
      label: "Comune di Brescia · Contributi una tantum per le vacanze di persone adulte con disabilità",
      url: "https://comune.brescia.it/it/servizi/sociali-erogazione-di-contributi-una-tantum-a-parziale-rimborso-delle-spese-sostenute-per-le-vacanze-di-persone-adulte-con-disabilita",
    },
    verificatoIl: "19/10/2026",
    nota: "Pagina del Comune aggiornata il 14/04/2026. Leggi l'avviso per requisiti, importi e documenti prima di spendere.",
  },
  {
    id: "brescia-vita-indipendente",
    regione: "Lombardia",
    comuni: ["brescia"],
    titolo: "Contributi per progetti di vita indipendente (Ambito 1: Brescia e Collebeato)",
    perChi:
      "Persone con disabilità tra 18 e 64 anni residenti nell'Ambito Territoriale Sociale 1 di Brescia (Comuni di Brescia e Collebeato), con ISEE socio-sanitario inferiore a 30.000 euro e verbale di invalidità.",
    cosa:
      "Contributi economici per sostenere progetti di vita indipendente personalizzati. La pagina non scrive gli importi: i costi sono quelli previsti dal progetto.",
    stato: "attivo",
    quando: "La pagina dice solo che i finanziamenti sono annuali e non indica una scadenza.",
    comeSiChiede: "Presentando un'istanza al Servizio Sociale Territoriale di riferimento.",
    fonte: {
      label: "Comune di Brescia · Contributi per progetti di vita indipendente",
      url: "https://comune.brescia.it/it/servizi/contributi-per-progetti-di-vita-indipendente",
    },
    verificatoIl: "19/10/2026",
    nota: "Pagina del Comune aggiornata il 12/08/2026. Chiedi al Servizio Sociale se ci sono fondi disponibili per l'anno in corso.",
  },

  // ------------------------------------------------------------- MODENA
  {
    id: "modena-disability-card",
    regione: "Emilia-Romagna",
    comuni: ["modena"],
    titolo: "Disability Card: ingressi gratuiti o a tariffa ridotta a Modena",
    perChi:
      "Titolari della Carta europea della disabilità (Disability Card dell'INPS), per le categorie dell'allegato 3 del DPCM 159/2013.",
    cosa:
      "Ingresso gratuito per il titolare e l'accompagnatore all'Acetaia Comunale, alla Torre Ghirlandina e Duomo, alle Sale Storiche del Palazzo Comunale, al Museo Civico, Gipsoteca e Lapidario Romano e al parco della Terramare di Montale. Museo Enzo Ferrari: ingresso gratuito per il titolare e tariffa ridotta per l'accompagnatore. Teatri Storchi e delle Passioni (ERT): tariffa ridotta per il titolare e ingresso gratuito per l'accompagnatore. Teatro Comunale Pavarotti-Freni: tariffa ridotta per titolare e accompagnatore. Per i teatri si prenota in anticipo, nei limiti dei posti.",
    stato: "attivo",
    comeSiChiede:
      "La card si chiede all'INPS online, oppure tramite ANMIC, UICI, ENS o ANFFAS, e arriva per posta con Poste Italiane. Poi si mostra negli enti convenzionati.",
    fonte: {
      label: "Comune di Modena · Carta europea della disabilità - Disability Card",
      url: "https://www.comune.modena.it/argomenti/agevolazioni-economiche/contributi-e-agevolazioni-di-altri-enti/carta-europea-della-disabilita-disability-card",
    },
    verificatoIl: "19/10/2026",
    nota: "Pagina del Comune aggiornata il 24/02/2025: controlla le convenzioni prima di andare. La card non dà in automatico il contrassegno europeo per la sosta (CUDE), che richiede una pratica a parte.",
  },

  // ------------------------------------------------------------- MONZA
  {
    id: "bollate-trasporto-scolastico-disabilita-2026-2027",
    regione: "Lombardia",
    comuni: ["bollate"],
    titolo: "Trasporto scolastico per alunni con disabilità grave 2026/2027 a Bollate",
    perChi:
      "Minori residenti con disabilità grave (art. 3, comma 3, legge 104/1992) che frequentano scuola dell'infanzia, primaria o secondaria di primo grado e non usano il trasporto comunale.",
    cosa:
      "Contributo per il trasporto scolastico. L'importo non è indicato nell'avviso consultato.",
    stato: "aperto",
    quando:
      "Domande entro il 22/11/2026, ore 12:00.",
    comeSiChiede:
      "Le modalità sono nell'avviso del Comune di Bollate, nella pagina indicata come fonte.",
    fonte: {
      label: "Comune di Bollate · Trasporto scolastico 2026/2027 (aggiornata il 19/10/2026)",
      url: "https://www.comune.bollate.mi.it/it/news/2056751",
    },
    verificatoIl: "10/11/2026",
    nota: "Requisiti riassunti: valgono tutte le condizioni dell'avviso integrale.",
  },
  {
    id: "legnano-contributo-trasporto-scolastico-2025-2026",
    regione: "Lombardia",
    comuni: ["legnano"],
    titolo: "Contributo per il trasporto scolastico di alunni con disabilità a Legnano",
    perChi:
      "Residenti nel periodo interessato che frequentano la scuola primaria o secondaria di primo grado, con certificazione della legge 104 oppure invalidità con accompagnamento o frequenza.",
    cosa:
      "Contributo da 350 a 4.383,66 euro, con possibile superamento della soglia alle condizioni del bando.",
    stato: "aperto",
    quando:
      "Domande entro il 15/11/2026.",
    comeSiChiede:
      "Le modalità sono nell'avviso del Comune di Legnano, nella pagina indicata come fonte.",
    fonte: {
      label: "Comune di Legnano · Contributo trasporto scolastico (aggiornata il 30/09/2026)",
      url: "https://comune.legnano.mi.it/notizie/3654974/richiesta-contributo-trasporto-scolastico",
    },
    verificatoIl: "10/11/2026",
    nota: "Il bando è per l'anno scolastico 2025/26 e scade tra pochi giorni: non aspettare l'ultimo giorno. Requisiti riassunti: valgono tutte le condizioni dell'avviso.",
  },
  {
    id: "magenta-misura-sostegno-servizi-2026-2027",
    regione: "Lombardia",
    comuni: ["magenta"],
    titolo: "Misura Sostegno e Misura Servizi 2026/2027 (ex Misura B2) nell'Ambito Magentino",
    perChi:
      "Residenti nell'Ambito che restano a domicilio e hanno la certificazione prevista. ISEE sociosanitario fino a 25.000 euro per adulti e anziani, ISEE ordinario fino a 40.000 euro per i minori.",
    cosa:
      "Caregiver familiare: 100 euro al mese. Assistente personale assunto: 400, 700 o 800 euro al mese secondo il contratto.",
    stato: "aperto",
    quando:
      "Domande entro il 04/12/2026, ore 12:00.",
    comeSiChiede:
      "Le modalità sono nell'avviso dell'Ambito di Magenta, nella pagina indicata come fonte.",
    fonte: {
      label: "Ambito Magentino · Misura Sostegno e Misura Servizi, avviso 2026/2027 (aggiornata il 10/11/2026)",
      url: "https://pdzmagentino.comune.magenta.mi.it/novita/notizia/misura-sostegno-e-misura-servizi-ex-misura-b2-avviso-pubblico-2026-2027/",
    },
    verificatoIl: "10/11/2026",
    nota: "Requisiti riassunti: valgono tutte le condizioni dell'avviso integrale.",
  },
  {
    id: "lodi-misura-sostegno-servizi-2026-2027",
    regione: "Lombardia",
    comuni: ["lodi"],
    titolo: "Misura Sostegno e Misura Servizi 2026/2027 nell'Ambito di Lodi",
    perChi:
      "Residenti nell'Ambito; le persone con disabilità devono avere al massimo 70 anni e le condizioni certificate indicate dall'avviso. ISEE sociosanitario fino a 25.000 euro, ISEE ordinario fino a 40.000 euro per i minori.",
    cosa:
      "Contributo della Misura Sostegno e Misura Servizi (ex Misura B2). Gli importi non sono stati verificati: leggi l'avviso integrale.",
    stato: "aperto",
    quando:
      "Domande entro il 31/10/2027, ore 12:00.",
    comeSiChiede:
      "Le modalità sono nell'avviso integrale, tra gli allegati della pagina indicata come fonte.",
    fonte: {
      label: "Ufficio di Piano di Lodi · Misura Sostegno e Misura Servizi (aggiornamento non indicato)",
      url: "https://www.ufficiodipiano.lodi.it/attivita-dettaglio.php?id=162",
    },
    verificatoIl: "10/11/2026",
    nota: "I fondi sono limitati e potrebbero essere già esauriti alla data di oggi: chiedi conferma all'ufficio prima di preparare la domanda.",
  },
  {
    id: "parabiago-misura-sostegno-servizi-2026-2027",
    regione: "Lombardia",
    comuni: ["parabiago"],
    titolo: "Misura Sostegno e Misura Servizi 2026/2027 a Parabiago",
    perChi:
      "Persone con disabilità con necessità di sostegno intensivo elevato e anziani non autosufficienti.",
    cosa:
      "Misura Sostegno e Misura Servizi. Importi e soglie ISEE non sono indicati nella pagina del Comune: leggi l'avviso.",
    stato: "aperto",
    quando:
      "Domande entro il 20/11/2026, ore 12:00.",
    comeSiChiede:
      "Prima si fa il protocollo online sulla piattaforma SO.LE., poi si prende appuntamento con l'assistente sociale.",
    fonte: {
      label: "Comune di Parabiago · Misura Sostegno e Misura Servizi (pubblicata il 12/10/2026)",
      url: "https://www.comune.parabiago.mi.it/area_letturaNotizia/638594/pagsistema.html",
    },
    verificatoIl: "10/11/2026",
    nota: "Scade tra pochi giorni: non aspettare l'ultimo giorno.",
  },
  {
    id: "parabiago-rimborso-trasporto-studenti-superiori-2026",
    regione: "Lombardia",
    comuni: ["parabiago"],
    titolo: "Rimborso del trasporto per studenti con disabilità delle superiori a Parabiago",
    perChi:
      "Studenti con disabilità delle scuole superiori e dei percorsi IeFP che non sono autonomi nel tragitto, con certificazione e diagnosi funzionale o profilo di funzionamento.",
    cosa:
      "Rimborso delle spese di trasporto. L'importo non è indicato nella pagina del Comune.",
    stato: "aperto",
    quando:
      "Domande entro il 28/05/2027, ore 17:00.",
    comeSiChiede:
      "Le modalità sono nella pagina del Comune indicata come fonte.",
    fonte: {
      label: "Comune di Parabiago · Rimborso trasporto studenti con disabilità (pubblicata il 17/09/2026)",
      url: "https://www.comune.parabiago.mi.it/area_letturaNotizia/638023/pagsistema.html",
    },
    verificatoIl: "10/11/2026",
    nota: "I fondi sono limitati e potrebbero essere già esauriti alla data di oggi: chiedi conferma all'ufficio prima di preparare la domanda.",
  },
  {
    id: "treviglio-misura-b2-fna-2026-2027",
    regione: "Lombardia",
    comuni: ["treviglio"],
    titolo: "Misura B2 (Fondo Nazionale Non Autosufficienze) 2026/2027 del Comune di Treviglio",
    perChi:
      "Persone con disabilità con necessità di sostegno intensivo elevato e anziani non autosufficienti con basso bisogno assistenziale.",
    cosa:
      "Misura B2 del Fondo Nazionale Non Autosufficienze. L'importo non è indicato nella pagina del Comune: leggi l'avviso integrale.",
    stato: "aperto",
    quando:
      "Nuove domande e rivalutazioni dal 15/09/2026 al 30/10/2027. Il bando può chiudere prima se le risorse finiscono. La prosecuzione per i beneficiari 2025 è scaduta il 15/10/2026.",
    comeSiChiede:
      "Le modalità e i requisiti economici sono nell'avviso del Comune di Treviglio, nella pagina indicata come fonte.",
    fonte: {
      label: "Comune di Treviglio · Misura B2 FNA 2026/2027 (notizia del 08/10/2026)",
      url: "https://comune.treviglio.bg.it/it/news/misura-b2-fna-2026-2027-aperto-il-bando-per-persone-con-disabilita-e-anziani-non-autosufficienti?type=1",
    },
    verificatoIl: "10/11/2026",
    nota: "I fondi sono limitati e potrebbero essere già esauriti alla data di oggi: chiedi conferma ai Servizi Sociali prima di preparare la domanda. Requisiti economici e importo non verificati.",
  },
  // ------------------------------------------------------------------ CATANIA

  // ------------------------------------------------------------------ MESSINA

  // ------------------------------------------------------------------ VERONA
  {
    id: "verona-barriere-architettoniche",
    regione: "Veneto",
    comuni: ["verona"],
    titolo: "Contributi per eliminare le barriere architettoniche (L. 13/1989 e L.R. 16/2007)",
    perChi:
      "Persone con ridotta o impedita capacità motoria o sensoriale, condomìni in cui vivono, enti privati e imprese. Non ci sono requisiti di reddito. La domanda può farla l'interessato o chi lo rappresenta.",
    cosa:
      "Contributi per interventi come ascensori, rampe, piattaforme elevatrici, adeguamento dei bagni, allargamento delle porte. La L. 13/1989 vale per edifici residenziali costruiti prima dell'11/08/1989; la L.R. 16/2007 per edifici e spazi aperti al pubblico, edifici privati e mezzi di locomozione privati. I due contributi sono cumulabili fino alla spesa. Importi non scritti nella pagina.",
    stato: "attivo",
    quando:
      "Il Comune raccoglie le domande una volta all'anno e non ci sono termini per l'invio. I tempi li decide la Regione.",
    comeSiChiede:
      "All'Ufficio CEBA (Direzione Servizi Sociali), Vicolo San Domenico 13/B, su appuntamento (tel. 045 8078361, lun–ven 9–13), prima di iniziare i lavori, con carta da bollo, certificato medico e documenti tecnici. Il servizio online non era disponibile.",
    fonte: {
      label: "Comune di Verona · Contributi per l'eliminazione delle barriere architettoniche",
      url: "https://www.comune.verona.it/Servizi/Contributi-per-l-eliminazione-delle-barriere-architettoniche",
    },
    verificatoIl: "19/10/2026",
    nota: "Pagina aggiornata il 02/07/2025: conferma orari e modalità con l'ufficio.",
  },

  // ------------------------------------------------------------- REGGIO EMILIA
  {
    id: "reggio-emilia-assegno-cura-disabili-adulti",
    regione: "Emilia-Romagna",
    comuni: ["reggio-emilia"],
    titolo: "Assegno di cura per disabili adulti",
    perChi:
      "Persone con disabilità che hanno bisogno di un sostegno elevato o molto elevato. L'ISEE del nucleo familiare (o dei conviventi) non deve superare i 34.000 euro all'anno. Il contributo può andare alla persona, alla famiglia o ad altri che la assistono a casa e convivono con lei o garantiscono una presenza in casa.",
    cosa:
      "Contributo per l'assistenza a casa: livello A 15,49 euro al giorno, livello B 10,33 euro al giorno, più un contributo aggiuntivo di 160 euro al mese dopo la verifica dei requisiti. Per le disabilità gravissime (stato vegetativo o di minima coscienza, dipendenza totale con assistenza per 24 ore) c'è un terzo livello senza limite di ISEE.",
    stato: "attivo",
    comeSiChiede:
      "Contatta il Polo Sociale di appartenenza: il servizio viene attivato dall'Unità di Valutazione Handicap (UVH), che indica i documenti. Sportello sociale: tel. 0522 585472 (lun-ven 8:30-12:30), appuntamentisportellosociale@comune.re.it.",
    fonte: {
      label: "Comune di Reggio Emilia · Assegno di cura per disabili adulti",
      url: "https://www.comune.reggioemilia.it/servizi/salute-benessere-e-assistenza/assegno-di-cura-per-disabili-adulti",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata l'08/01/2025. Non indica scadenze: i tempi dipendono dalle necessità di sostegno della persona.",
  },
  {
    id: "reggio-emilia-mobilita-privata-art9",
    regione: "Emilia-Romagna",
    comuni: ["reggio-emilia"],
    titolo: "Contributi per la mobilità privata (art. 9 L.R. 29/97)",
    perChi:
      "Persone con disabilità residenti nel Comune di Reggio Emilia, con un ISEE in corso di validità al momento della domanda.",
    cosa:
      "Contributi per l'acquisto o l'adattamento di autoveicoli privati, concessi da Comuni, AUSL e Regione. L'importo non è scritto nella pagina: si chiede al CAAD.",
    stato: "attivo",
    quando: "Le domande si raccolgono fino al 1° marzo di ogni anno.",
    comeSiChiede:
      "Domanda al Comune di residenza, o a un ente da esso delegato, con il modulo allegato alla pagina e l'ISEE. CAAD: caad@comune.re.it, tel. 0522 585540, via Jozef Wybicki 7/A.",
    fonte: {
      label: "Comune di Reggio Emilia · Contributi per la mobilità privata (art. 9 LR 29/97)",
      url: "https://www.comune.reggioemilia.it/servizi/salute-benessere-e-assistenza/contributi-e-agevolazioni-per-la-mobilita-privata-art-9-lr-29-97",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata il 31/12/2024.",
  },

  // ------------------------------------------------------- FRIULI-VENEZIA GIULIA
  {
    id: "fvg-fap-autonomia-possibile",
    regione: "Friuli-Venezia Giulia",
    titolo: "Fondo per l'Autonomia Possibile (FAP): assegni per vivere a casa",
    perChi:
      "Persone non autosufficienti che vivono a casa: anziani o persone con disabilità, adulti o minori. Vi rientrano anche progetti di salute mentale e dipendenze e minori con patologie oncologiche certificate.",
    cosa:
      "Contributi disposti dagli Ambiti sociali, nei limiti del budget. Secondo la pagina della Regione: Assegno per l'autonomia (ISEE fino a 30.000 €, da 1.620 a 6.204 €); Contributo per l'aiuto familiare (ISEE fino a 30.000 €, da 2.892 a 12.000 €, con contratto regolare di almeno 20 ore settimanali); Sostegno alla vita indipendente (18-64 anni con grave disabilità, ISEE fino a 60.000 €, da 3.000 a 24.000 €); Progetti per minori (ISEE fino a 40.000 €, da 3.852 a 12.000 €); Assegno per gravissima disabilità, compresa SLA e grave demenza (ISEE fino a 60.000 €, 65.000 € per i minori, da 6.575 a 24.000 €). Il contributo \"disabili gravissimi\" è stato assorbito dal FAP dal 1° gennaio 2024.",
    stato: "attivo",
    comeSiChiede:
      "Non c'è una domanda formale: ti rivolgi al Servizio sociale del tuo Comune, al distretto sanitario o al punto unico di accesso. I servizi valutano il bisogno e preparano un progetto personalizzato, di cui il contributo può far parte.",
    fonte: {
      label: "Regione FVG · Non autosufficienti (Fondo per l'Autonomia Possibile)",
      url: "https://www.regione.fvg.it/rafvg/cms/RAFVG/salute-sociale/interventi-socio-sanitari/FOGLIA30/",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina della Regione aggiornata il 16/06/2026. Gli importi dipendono dalla valutazione e dal budget dell'Ambito: conferma con il Servizio sociale.",
  },
  {
    id: "fvg-barriere-architettoniche",
    regione: "Friuli-Venezia Giulia",
    titolo: "Contributo regionale per abbattere le barriere architettoniche in casa",
    perChi:
      "Persone con disabilità permanente (fisica, mentale, intellettiva o sensoriale) che trovano ostacoli nell'edificio privato in cui hanno o vogliono avere la residenza. ISEE non superiore a 60.000 €. Anche chi aspetta il riconoscimento, con la ricevuta della domanda di accertamento.",
    cosa:
      "Contributo per eliminare barriere in abitazioni private e parti comuni (edifici esistenti all'11 agosto 1989; per i più recenti solo adattabilità). Spesa ammessa fino a 50.000 €; contributo massimo 10.000 € l'anno per persona. Copre tutta la spesa fino a 5.000 €, poi il 30% tra 5.000 e 10.000 €, il 20% tra 10.000 e 20.000 €, il 5% tra 20.000 e 50.000 €. Cumulabile con la Legge 13/1989 entro la spesa sostenuta.",
    stato: "attivo",
    quando: "La domanda si può presentare tutto l'anno, a lavori finiti, con spese degli ultimi 12 mesi.",
    comeSiChiede:
      "Al Comune dove si trova l'immobile, con il modello B e la marca da bollo, allegando relazione (allegato C), certificazione di invalidità e fatture quietanzate. Se sei in affitto o in condominio servono le autorizzazioni.",
    fonte: {
      label: "Regione FVG · Barriere architettoniche, contributo regionale",
      url: "https://www.regione.fvg.it/rafvg/cms/RAFVG/salute-sociale/interventi-socio-sanitari/FOGLIA13/",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina della Regione aggiornata il 24/03/2026. Chiedi al Comune i tempi di istruttoria e il modulo aggiornato.",
  },

  // ------------------------------------------------------------------ SARDEGNA
  {
    id: "cagliari-legge-162-98-piani-2026",
    regione: "Sardegna",
    comuni: ["cagliari"],
    titolo: "Piani personalizzati di sostegno (Legge 162/98), anno 2026",
    perChi:
      "Persone con disabilità grave riconosciuta ai sensi dell'art. 3, comma 3, della Legge 104/1992 (nuove domande). Chi ha già un piano deve aggiornare l'ISEE socio-sanitario ristretto 2026 o chiedere modifiche delle condizioni sanitarie e sociali.",
    cosa:
      "Piano personalizzato di sostegno con un finanziamento. Il Comune non scrive gli importi nell'avviso. Durata minima del piano: un mese. Chi non aggiorna l'ISEE ha il contributo ridotto dell'80%.",
    stato: "aperto",
    scade: "2026-11-30",
    quando:
      "Nuove domande dalle 12:00 del 10 febbraio alle 12:00 del 30 novembre 2026; rinnovo con modifica fino al 31 marzo 2026; aggiornamento ISEE entro il 31 marzo 2026. Le domande presentate entro il 10 aprile 2026 possono partire dal 1° maggio, nei limiti delle risorse.",
    comeSiChiede:
      "Solo online sulla piattaforma Icare, con SPID o CIE, dalla persona o da un delegato (amministratore di sostegno o caregiver). Per le nuove richieste servono il verbale della 104 art. 3 comma 3 (anche provvisorio) e la scheda salute compilata dal medico di famiglia. Informazioni: uffici territoriali del Servizio sociale; numero verde URP 800 016 058.",
    fonte: {
      label: "Comune di Cagliari · Avviso piani personalizzati di sostegno (L. 162/98) anno 2026",
      url: "https://www.comune.cagliari.it/portale/page/it/avviso_piani_personalizzati_di_sostegno__legge_n_16298__anno_2026?contentId=DOC250616",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina del Comune aggiornata il 06/03/2026. Il bando ufficiale è l'unica fonte vincolante: controlla requisiti e termini lì.",
  },

  // ------------------------------------------------------------------- PRATO

  // -------------------------------------------------------------------- PISA (26/10/2026)
  {
    id: "pisa-adattamento-veicoli-2026",
    regione: "Toscana",
    comuni: ["pisa"],
    titolo: "Contributo per adattare il veicolo privato (2026)",
    perChi:
      "Residenti nel Comune di Pisa: persone con disabilità motoria al 100% con patente di guida; familiari di persone con compromissione motoria totale (100% con assegno di accompagnamento) che non possono guidare, ad esempio per tetraplegia o tetraparesi; chi esercita tutela, potestà o amministrazione di sostegno. Nella domanda va dichiarato l'ISEE della persona con disabilità o del familiare che la ha a carico (allegare l'estratto ISEE è facoltativo).",
    cosa:
      "Contributo pari al 20% della spesa sostenuta per adattare il veicolo (ad esempio pedane sollevatrici, scivoli, sedili girevoli, ancoraggi per carrozzine; per la guida solo i comandi prescritti dalla Commissione patenti speciali). Fino a esaurimento delle risorse annuali, con graduatoria per reddito; erogazione entro 60 giorni dalla graduatoria definitiva. Si può chiedere a un solo ente e non si può ripresentare domanda prima di 4 anni dalla concessione.",
    stato: "aperto",
    scade: "2026-10-31",
    quando: "Domande entro il 31 ottobre 2026.",
    comeSiChiede:
      "Solo con il modulo del Comune (le domande su altro modulo, incomplete o errate non vengono considerate), con certificato di invalidità e gravità se la presenta un familiare, documento d'identità, copia della patente speciale se presente e fattura o documentazione di spesa. Si consegna all'URP (lunedì–venerdì 8:30–12:30; martedì e giovedì 15:00–17:00) o si invia via PEC a comune.pisa@postacert.toscana.it. Informazioni: Ufficio Sociale, affari.sociali@comune.pisa.it, tel. 050 910265.",
    fonte: {
      label: "Comune di Pisa · Contributi per adattamento veicoli privati",
      url: "https://www.comune.pisa.it/Servizi/Contributi-per-adattamento-veicoli-privati",
    },
    verificatoIl: "26/10/2026",
    nota: "Pagina aggiornata il 19/08/2026; il bando e il modulo sono nei file della pagina. La scadenza era il 31 ottobre 2026: chiama l'Ufficio Sociale per sapere se ci sono novità.",
  },
  {
    id: "pisa-abbattimento-barriere-2026",
    regione: "Toscana",
    comuni: ["pisa"],
    titolo: "Contributo per abbattere le barriere architettoniche in casa (2026)",
    perChi:
      "Residenti nel Comune di Pisa con disabilità permanente (sensoriale, cognitiva o fisica) che abitano nell'edificio interessato o ci prenderanno la residenza entro tre mesi dalla comunicazione di ammissione; possono chiedere anche tutori e amministratori di sostegno.",
    cosa:
      "Per le opere edilizie, contributo fino al 50% della spesa e al massimo 7.500 €; per le attrezzature, fino al 50% e al massimo 10.000 €. I due contributi si sommano fino a 17.500 €.",
    stato: "aperto",
    quando: "Domande entro il 31 dicembre di ogni anno; per il 2026 entro il 31 dicembre 2026.",
    comeSiChiede:
      "Con il modulo \"Schema di domanda 2026\" del Comune, con documento d'identità, certificato che attesta la disabilità, preventivo e progetto (per le opere) o preventivo e documentazione tecnica (per le attrezzature) e, se non sei proprietario, il benestare del proprietario. Si consegna all'URP (lunedì–venerdì 8:30–12:30; martedì e giovedì 15:00–17:00) o si invia via PEC a comune.pisa@postacert.toscana.it. La pagina dice che il servizio online al momento non è disponibile.",
    fonte: {
      label: "Comune di Pisa · Contributo abbattimento barriere architettoniche",
      url: "https://www.comune.pisa.it/Servizi/Contributo-abbattimento-barriere-architettoniche",
    },
    verificatoIl: "26/10/2026",
    nota: "Pagina aggiornata il 21/08/2026. Per dubbi su requisiti e tempi scrivi all'Ufficio Sociale (affari.sociali@comune.pisa.it).",
  },

  // ------------------------------------------------------------------- UMBRIA

  // ----------------------------------------------------------------- SARDEGNA

  // ------------------------------------------------------------------- MARCHE

  // ----------------------------------------------------------------- CALABRIA

  // ------------------------------------------------------------ COMUNI (20/10/2026)
  {
    id: "venezia-contributo-residenzialita",
    regione: "Veneto",
    comuni: ["venezia"],
    titolo: "Contributo economico per la residenzialità",
    perChi:
      "Persone con disabilità certificata di 18-64 anni che hanno bisogno di una struttura residenziale accreditata, con autorizzazione dell'UVMD o del servizio competente; persone con problemi di salute mentale in carico al Dipartimento di Salute Mentale dell'ULSS 3 Serenissima. Ultima residenza nel Comune di Venezia; ISEE entro i limiti del regolamento comunale (soglie non scritte nella pagina).",
    cosa:
      "Contributo che integra le risorse personali per pagare la retta alberghiera in strutture socio-sanitarie residenziali. Importi non scritti nella pagina.",
    stato: "attivo",
    comeSiChiede:
      "Con la modulistica degli Sportelli Agenzia Coesione Sociale, indirizzata al Servizio Disabili: consegna a mano al Protocollo del Comune, raccomandata o PEC a coesionesociale.settoreservizisociali@pec.comune.venezia.it.",
    fonte: {
      label: "Comune di Venezia · Contributo residenzialità",
      url: "https://www.comune.venezia.it/it/content/contributo-economico-residenzialit-disabili",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina aggiornata il 24/10/2025. Scadenze e soglie ISEE vanno chieste al Servizio Disabili.",
  },
  {
    id: "venezia-eu-disability-card-actv",
    regione: "Veneto",
    comuni: ["venezia"],
    titolo: "Tariffa agevolata ACTV con la EU Disability Card",
    perChi:
      "Persone con disabilità riconosciuta dall'INPS che hanno diritto alla EU Disability Card (ad esempio invalidi civili dal 67%, titolari di accompagnamento, persone con 104 art. 3 comma 3, ciechi e sordi civili).",
    cosa:
      "La tariffa agevolata \"disabili\" sulla rete di navigazione ACTV, prima riservata a chi è in carrozzina, vale ora per tutte le disabilità aventi diritto alla Card, in via sperimentale. Corsa a 1,50 € per 75 minuti; accompagnatore gratuito se previsto.",
    stato: "attivo",
    comeSiChiede:
      "L'articolo non spiega la procedura di acquisto: chiedi al Comune o ad ACTV. In futuro la Card potrà essere integrata nei canali di vendita dei titoli.",
    fonte: {
      label: "Comune di Venezia · EU Disability Card, estesa la tariffa agevolata Actv a tutte le disabilità",
      url: "https://live.comune.venezia.it/it/2026/07/eu-disability-card-estesa-la-tariffa-agevolata-actv-tutte-le-disabilita",
    },
    verificatoIl: "20/10/2026",
    nota: "Notizia del 09/07/2026. Misura sperimentale: conferma con il Comune.",
  },
  {
    id: "padova-sostegno-caregiver-familiare",
    regione: "Veneto",
    comuni: ["padova"],
    titolo: "Sostegno economico al caregiver familiare di persone con disabilità",
    perChi:
      "Caregiver familiari che assistono coniuge, partner di unione civile o convivente di fatto, un familiare o un affine fino al secondo grado non autosufficiente. Serve l'ISEE sociosanitario della persona assistita.",
    cosa:
      "Interventi di sollievo e sostegno al caregiver (contributo \"CG\"), cumulabili con l'impegnativa di cura domiciliare dopo valutazione dell'UVMD. Importi non scritti nella pagina. Assegnazione per graduatoria di gravità, entro le risorse.",
    stato: "attivo",
    comeSiChiede:
      "Il caregiver presenta domanda con l'ISEE sociosanitario al Distretto sociosanitario o al Comune di residenza. Punti Unici di Padova: Bacchiglione 049 5494975, Terme Colli 049 5496169, Piovese 049 5497212.",
    fonte: {
      label: "Comune di Padova · Sostegno economico al caregiver familiare di persone con disabilità",
      url: "https://padovaper.comune.padova.it/servizi/supporto-economico-e-agevolazioni/sostegno-economico-al-caregiver-familiare-di-persone-con-disabilita",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina aggiornata il 28/07/2026; misura della Regione Veneto gestita dal Distretto. La pagina non indica scadenze: confermale con il Distretto.",
  },

  // ------------------------------------------------ COMUNI (20/10/2026, sera)
  {
    id: "ancona-multileva-3-2-rette-residenziali",
    regione: "Marche",
    comuni: ["ancona"],
    titolo: "Multileva 3.2: contributo per le rette delle strutture residenziali",
    perChi:
      "Persone ospiti di strutture residenziali autorizzate (aree anziani, disabilità, salute mentale) e loro familiari che pagano la retta. Per i familiari paganti: requisiti di territorio e ISEE ordinario e ISEE sociosanitario residenze non superiori a 25.000 euro. Per gli ospiti che pagano da soli valgono requisiti specifici di residenza e ISEE: leggi l'avviso.",
    cosa:
      "Contributo di 250 euro al mese, fino a 12 mensilità e 3.000 euro all'anno, per le rette delle strutture residenziali.",
    stato: "aperto",
    quando: "Domande entro il 16/11/2026.",
    comeSiChiede:
      "Con l'apposito modulo, per PEC, raccomandata o al protocollo del Comune di Ancona.",
    fonte: {
      label: "Comune di Ancona · Rette per strutture residenziali: contributi economici (pagina del 05/11/2026)",
      url: "https://www.comune.ancona.it/it/page/rette-per-strutture-residenziali-contributi-economici-a-sostegno-delle-famiglie-e-degli-ospiti",
    },
    verificatoIl: "10/11/2026",
    nota: "Scade il 16/11/2026.",
  },
  {
    id: "salerno-assegni-di-cura",
    regione: "Campania",
    comuni: ["salerno"],
    titolo: "Assegni di cura (Fondo per la Non Autosufficienza)",
    perChi:
      "Persone con bisogno socio-sanitario complesso che hanno un Piano di Assistenza Individuale definito dall'Unità di Valutazione Integrata, e le famiglie che le assistono. Servono ISEE e ObsiM; la pagina non scrive soglie.",
    cosa:
      "Contributo mensile onnicomprensivo per l'assistenza svolta da familiari o da assistenti familiari con contratto: 1.200 € per la disabilità gravissima, 600 € per la grave, per 12 mesi.",
    stato: "attivo",
    comeSiChiede:
      "Si attiva su segnalazione del medico di famiglia, dopo la valutazione dell'UVI. Area integrazione socio-sanitaria: martedì e giovedì 9-12 e 16:30-17:30; URP 089 662134.",
    fonte: {
      label: "Comune di Salerno · Assegni di Cura",
      url: "https://www.comune.salerno.it/servizi/assegni-di-cura",
    },
    verificatoIl: "21/10/2026",
    nota: "La pagina non riporta una data di aggiornamento né scadenze (rimanda ai «Termini e condizioni del servizio» sul sito del Comune).",
  },

  // --- Sedicesima raccolta (20/10/2026, sera): Trentino-Alto Adige, Puglia, Valle d'Aosta ---
  {
    id: "trento-assegno-di-cura",
    regione: "Trentino-Alto Adige",
    comuni: ["trento", "rovereto", "giudicarie"],
    titolo: "Assegno di cura (Provincia autonoma di Trento)",
    perChi:
      "Persone non autosufficienti che hanno tutte queste condizioni: almeno due anni di residenza continuativa in provincia di Trento (per i minori vale anche la residenza di un genitore); ricevono già l'assegno di accompagnamento (L.P. 7/1998) o una prestazione simile, oppure lo chiedono nello stesso momento; hanno una condizione economica ICEF pari o inferiore a 0,32; la non autosufficienza è accertata dall'Unità di valutazione multidisciplinare (UVM) del distretto sanitario. La domanda la può fare la persona, un genitore (per i minori), il tutore o curatore, oppure l'amministratore di sostegno.",
    cosa:
      "Contributo mensile che dipende dal livello di bisogno. Livello 1: 100 euro. Livello 2: da 150 a 300 euro. Livello 3: da 300 a 600 euro. Livello 4: da 500 a 1.100 euro (l'importo più basso si applica in base all'ICEF). Serve a pagare l'assistenza a casa, in ambulatorio o in strutture semiresidenziali, tramite assistenti, organizzazioni autorizzate, alcuni familiari o come quota per i servizi domiciliari pubblici. L'assegno si sospende dal 31° giorno di ricovero in ospedale o in struttura.",
    stato: "attivo",
    quando:
      "Ogni anno, tra il 1° ottobre e il 28 febbraio, va presentata la verifica della situazione economica: se manca, l'assegno viene revocato dal 1° gennaio successivo.",
    comeSiChiede:
      "Tramite un patronato o uno sportello provinciale, con il modulo di domanda dell'assegno di cura. Il servizio è gratuito e i tempi indicati sono di 60 giorni. Sulla pagina della Provincia il servizio online risulta al momento non disponibile.",
    fonte: {
      label: "Provincia autonoma di Trento · Domanda per l'assegno di cura",
      url: "https://www.provincia.tn.it/en/Services/Application-for-the-care-allowance",
    },
    verificatoIl: "20/10/2026",
  },
  {
    id: "bolzano-assegno-di-cura",
    regione: "Trentino-Alto Adige",
    comuni: ["bolzano", "merano"],
    titolo: "Assegno di cura (Provincia autonoma di Bolzano)",
    perChi:
      "Persone non autosufficienti. Non dipende dal reddito né dall'età: conta il bisogno di cura e assistenza, accertato con una valutazione che colloca la persona in uno dei quattro livelli di non autosufficienza. Serve la residenza ininterrotta in provincia di Bolzano da almeno 5 anni (oppure 15 anni di residenza storica, di cui almeno l'ultimo anno senza interruzioni); per i minorenni valgono i requisiti dei genitori. Non si può avere insieme all'indennità di accompagnamento. Non serve il riconoscimento di invalidità civile, ma alla domanda va allegato un certificato medico.",
    cosa:
      "Un sostegno economico mensile, che può essere dato anche come buoni di servizio per l'assistenza a domicilio. Il pagamento parte dal mese successivo alla domanda. Per le malattie in stadio avanzato e per la demenza il livello viene assegnato d'ufficio sulla base dei documenti medici. Importi mensili 2026 per livello: 599 euro (livello 1, oltre 60 e fino a 120 ore di assistenza al mese), 900 euro (livello 2, oltre 120 e fino a 180 ore), 1.350 euro (livello 3, oltre 180 e fino a 240 ore), 1.800 euro (livello 4, oltre 240 ore). Il primo pagamento arriva entro due mesi dal riconoscimento del fabbisogno ed è retroattivo al mese dopo la domanda.",
    stato: "attivo",
    quando:
      "L'assegno è di norma a tempo indeterminato. Se la situazione peggiora si può fare una nuova domanda quando sono passati almeno sei mesi dall'ultima valutazione. Contro l'esito della valutazione si può fare ricorso entro 45 giorni.",
    comeSiChiede:
      "Si presenta la domanda di inquadramento della non autosufficienza con il certificato medico: il pagamento parte poi in automatico, senza domanda all'Agenzia ASSE (Agenzia per lo sviluppo sociale ed economico, tel. 0471 41 83 00). Per informazioni ci sono gli sportelli unici per l'assistenza e la cura nei Distretti sociali e il numero verde Pronto Assistenza 848 800 277, dal lunedì al mercoledì dalle 9 alle 12. Il punto preciso dove consegnare la domanda va confermato con la Provincia.",
    fonte: {
      label: "Provincia autonoma di Bolzano · Tutte le informazioni utili sull'assegno di cura (24/06/2026)",
      url: "https://news.provincia.bz.it/it/news/tutte-le-informazioni-utili-sull-assegno-di-cura",
    },
    verificatoIl: "11/11/2026",
    nota: "Importi 2026 letti sulla pagina «Pagamento dell'assegno di cura» della Provincia. Novità di settembre 2026: per il primo livello, chi ha almeno 70 anni e un riconoscimento definitivo della legge 104 (art. 3, comma 3), non soggetto a revisione, ha una procedura semplificata: per le domande prima del 1° ottobre 2026 serve una richiesta scritta, per quelle successive, con i requisiti, il livello è assegnato d'ufficio.",
  },
  {
    id: "vda-fondo-inclusione-autismo-2026",
    regione: "Valle d'Aosta",
    titolo: "Interventi per persone con autismo e disturbi del neurosviluppo (Fondo per l'inclusione 2025)",
    perChi:
      "Persone con disturbi del neurosviluppo e dello spettro autistico, e le loro famiglie e caregiver.",
    cosa:
      "La Regione ha programmato 159.609 euro dal Fondo unico per l'inclusione delle persone con disabilità. Gli interventi previsti sono cinque: socializzazione e tempo libero, alfabetizzazione digitale, inclusione lavorativa (orientamento, tirocini, tutoraggio), abitare in autonomia e sostegno alle famiglie (parent training e colloqui). Sono previsti, per esempio, 9 percorsi di socializzazione e 5 tirocini di inclusione.",
    stato: "attivo",
    quando: "Dal 1° settembre 2026 al 31 agosto 2027.",
    comeSiChiede:
      "Il documento non descrive una domanda diretta dei cittadini: gli interventi rientrano nei progetti di vita redatti dall'Unità di valutazione multidimensionale (UVM), su richiesta della persona. Per i dettagli chiedi al Dipartimento politiche sociali della Regione.",
    fonte: {
      label: "Regione Valle d'Aosta · Deliberazione della Giunta n. 293 del 20/03/2026",
      url: "https://www.regione.vda.it/allegato.aspx?pk=126463",
    },
    verificatoIl: "10/11/2026",
    nota: "La delibera n. 293 del 20/03/2026 programma risorse del Fondo relative all'annualità 2025. L'avviso di coprogettazione (scaduto il 16/06/2026) era rivolto a enti del Terzo settore, non è un bonus per le famiglie.",
  },
  {
    id: "calabria-assegno-cura-gravissima-2026",
    regione: "Calabria",
    titolo: "Assegno di cura per la disabilità gravissima (avvisi degli Ambiti sociali)",
    perChi:
      "Persone con disabilità gravissima, con invalidità civile al 100% e indennità di accompagnamento (per esempio SLA, gravi forme di demenza, dipendenza vitale con assistenza continua nelle 24 ore). ISEE sociosanitario fino a 50.000 euro, 65.000 per i minorenni: l'ISEE non esclude, serve solo a graduare l'importo.",
    cosa:
      "Contributo mensile per dodici mensilità: fino a 1.000 euro al mese per la dipendenza vitale con assistenza continua nelle 24 ore (per esempio ventilazione assistita, nutrizione artificiale, stato vegetativo), 600 euro al mese per le altre condizioni di disabilità gravissima. Per l'assistenza acquistata (assistenti con contratto, servizi accreditati, strutture semiresidenziali) c'è il rimborso della spesa documentata; per il familiare che assiste a casa basta un'autocertificazione. Le risorse sono 14,78 milioni di euro dal Fondo nazionale per le non autosufficienze.",
    stato: "attivo",
    quando:
      "Notizia dell'8 ottobre 2026. La Regione non indica una scadenza: i termini sono nei singoli avvisi degli Ambiti territoriali sociali, che erano in fase di completamento. Per esempio l'Ambito di Rosarno (ATS n. 2: Gioia Tauro, Melicuccà, Palmi, Rizziconi, Rosarno, San Ferdinando, Seminara) ha un avviso aperto fino al 23 novembre 2026 (pagina del Comune di San Ferdinando del 05/11/2026).",
    comeSiChiede:
      "La domanda si presenta all'Ambito territoriale sociale di residenza, di norma via PEC, secondo l'avviso dell'Ambito. La valutazione e la graduatoria sono fatte dall'Unità di valutazione multidimensionale con l'Azienda sanitaria provinciale. Moduli e avvisi si chiedono all'Ufficio di Piano del tuo Ambito.",
    fonte: {
      label: "Regione Calabria · Disabilità gravissima: al via avvisi pubblici per assegni di cura in tutti gli Ambiti sociali (08/10/2026)",
      url: "https://www.regione.calabria.it/disabilita-gravissima-al-via-avvisi-pubblici-per-assegni-di-cura-in-tutti-gli-ambiti-sociali-straface-sostegno-concreto-e-rendicontazione-semplificata-per-famiglie-e-caregiver-i-beneficia/",
    },
    verificatoIl: "20/10/2026",
  },

  {
    id: "pescara-trasporto-scolastico-autonomo-2026-2027",
    regione: "Abruzzo",
    comuni: ["pescara"],
    titolo: "Contributo per il trasporto scolastico autonomo di alunni con disabilità a Pescara",
    perChi:
      "Residenti a Pescara con legge 104 art. 3 comma 3 che frequentano infanzia, primaria o secondaria di primo grado e non usano il trasporto scolastico comunale. Distanza casa-scuola oltre 500 metri (oltre 100 metri nei casi di grave limitazione della deambulazione); frequenza scolastica almeno del 50%.",
    cosa:
      "Contributo una tantum fino a 1.000 euro per l'anno scolastico 2026/2027: l'importo effettivo si decide dopo aver raccolto le domande.",
    stato: "aperto",
    quando:
      "Domande entro il 31/05/2027, ore 13:00.",
    comeSiChiede:
      "Domanda online con SPID, dalla pagina del Comune di Pescara indicata come fonte.",
    fonte: {
      label: "Comune di Pescara · Contributo una tantum per il trasporto scolastico in autonomia (pagina del 21/10/2026; avviso del 19/10/2026)",
      url: "https://www.comune.pescara.it/novita/avviso-pubblico-per-lerogazione-di-contributo-economico-una-tantum-per-il-trasporto-scolastico-in-autonomia-di-alunni-con-disabilita/",
    },
    verificatoIl: "10/11/2026",
    nota: "I fondi sono limitati e potrebbero essere già esauriti alla data di oggi: chiedi conferma all'ufficio prima di preparare la domanda. Valgono tutte le condizioni dell'avviso, anche per i fratelli nella stessa scuola.",
  },
  {
    id: "catanzaro-assegno-cura-gravissima-fna-2022",
    regione: "Calabria",
    comuni: ["catanzaro"],
    titolo: "Assegno di cura per la disabilità gravissima a Catanzaro (FNA 2022)",
    perChi:
      "Residenti nell'ATS di Catanzaro con disabilità gravissima (DM 26/09/2016), invalidità civile al 100% con accompagnamento e legge 104 art. 3 comma 3. ISEE sociosanitario fino a 50.000 euro, 65.000 euro per i minorenni; altre condizioni e incompatibilità sono nell'avviso.",
    cosa:
      "1.000 euro al mese per la dipendenza vitale con assistenza continua nelle 24 ore, 600 euro al mese per le altre condizioni di disabilità gravissima, secondo la valutazione.",
    stato: "aperto",
    quando:
      "Domande entro il 19/11/2026.",
    comeSiChiede:
      "Con la modulistica dell'avviso del Comune di Catanzaro, scaricabile dalla pagina indicata come fonte.",
    fonte: {
      label: "Comune di Catanzaro · Avviso per il supporto alle persone in condizione di disabilità gravissima (pubblicato il 21/10/2026)",
      url: "https://www.comune.catanzaro.it/novita/pubblicato-lavviso-per-il-supporto-alle-persone-in-condizione-di-disabilita-gravissima-e-al-nucleo-familiare-di-appartenenza-domande-entro-il-19-novembre/",
    },
    verificatoIl: "10/11/2026",
    nota: "Scade tra pochi giorni: non aspettare l'ultimo giorno. Valgono tutte le condizioni dell'avviso integrale.",
  },
  {
    id: "reggio-calabria-assegno-cura-gravissima-fna-2022",
    regione: "Calabria",
    comuni: ["reggio-calabria"],
    titolo: "Assegno di cura e autonomia per la disabilità gravissima a Reggio Calabria (FNA 2022)",
    perChi:
      "Persone con disabilità gravissima secondo il DM 26/09/2016, con valutazione multidimensionale. ISEE sociosanitario fino a 50.000 euro, 65.000 euro per i minorenni. L'elenco completo dei requisiti è nell'allegato dell'avviso.",
    cosa:
      "Assegno per 12 mensilità riferite a gennaio-dicembre 2026, entro le risorse disponibili. L'importo individuale non è indicato nella pagina del Comune.",
    stato: "aperto",
    quando:
      "Domande entro il 20/11/2026.",
    comeSiChiede:
      "Con la modulistica dell'avviso, trasmessa tramite PEC al Comune.",
    fonte: {
      label: "Comune di Reggio Calabria · Avviso assegno di cura e autonomia per la disabilità gravissima (21/10/2026)",
      url: "https://comune.reggio-calabria.it/Notizie/Details/8681",
    },
    verificatoIl: "10/11/2026",
    nota: "Scade tra pochi giorni: non aspettare l'ultimo giorno. I fondi sono limitati e potrebbero essere già esauriti alla data di oggi: chiedi conferma all'ufficio prima di preparare la domanda. Requisiti completi e importo non verificati: leggi l'allegato dell'avviso.",
  },
  // --- Raccolta 30/10/2026: Molise (misura regionale valida per tutta la Regione) ---
  {
    id: "molise-caregiver-2026-2027",
    regione: "Molise",
    titolo: "Caregiver familiare: contributo di 5.000 euro (annualità 2026 e 2027)",
    perChi:
      "Caregiver familiare disoccupato o inoccupato che assiste in modo continuativo una persona con disabilità o non autosufficiente, riconosciuta bisognosa di assistenza globale e continua ai sensi della legge 104/1992 o titolare di indennità di accompagnamento. L'ISEE socio-sanitario deve essere pari o inferiore a 50.000 euro, elevato a 65.000 euro per le famiglie con un minore convivente con disabilità. Lo status di caregiver viene riconosciuto dall'Ambito Territoriale Sociale (ATS), che rilascia la «Card del Caregiver» (L.R. 13/2025).",
    cosa: "Contributo di 5.000 euro per il caregiver familiare. La Regione ha stanziato 800.000 euro in totale.",
    stato: "da-verificare",
    quando:
      "Sulla pagina della Regione l'invio delle domande è indicato dal 1 ottobre 2026, con scadenza 30 maggio 2027. L'avviso rivolto ai caregiver lo pubblica ogni ATS: per il 2026 entro ottobre, per il 2027 entro maggio.",
    comeSiChiede:
      "Si risponde all'avviso pubblicato dal proprio Ambito Territoriale Sociale, che raccoglie anche le adesioni. Per sapere se l'avviso del tuo Ambito è già uscito, rivolgiti all'ATS.",
    fonte: {
      label: "Regione Molise · Misure per il riconoscimento e il sostegno del Caregiver familiare, annualità 2026 e 2027",
      url: "https://prfesrfse2127.regione.molise.it/bandi-avvisi/misure-per-il-riconoscimento-e-il-sostegno-del-caregiver-familiare-annualita-2026-e-2027/",
    },
    verificatoIl: "30/10/2026",
    nota: "La pagina regionale non dice se l'avviso del singolo Ambito sia già aperto: controlla sul sito del tuo ATS.",
  },

  // --- Raccolta 02/11/2026: Sardegna, Abruzzo, Campania, Molise, Basilicata (dossier verificato il 30/10/2026, solo fonti istituzionali) ---

  // ---------------------------------------------------------------- SARDEGNA
  {
    id: "sardegna-ritornare-a-casa-plus-2026-2027",
    regione: "Sardegna",
    titolo: "Ritornare a casa PLUS (linee 2026-2027)",
    perChi:
      "Persone non autosufficienti valutate dall'Unità di Valutazione Territoriale (UVT). Serve l'indennità di accompagnamento. In alternativa vanno bene la certificazione dell'allegato 3 del DPCM 159/2013, l'accertamento del D.Lgs. 29/2024 per gli over 70 o quello del D.Lgs. 62/2024. Si può presentare la domanda con riserva di integrare il verbale. Servono anche: il verbale di riconoscimento della disabilità (art. 3 della legge 104/1992), la certificazione medica specialistica della condizione sanitaria, l'attestazione ISEE e, per i livelli base A, base B, primo, secondo e terzo, la dichiarazione di non essere beneficiari di un piano personalizzato L. 162/1998 (per i livelli base A e B è ammesso chi ha più di 65 anni con punteggio della scheda salute superiore a 40). Le dimissioni protette sono compatibili con i piani 162/98.",
    cosa:
      "Un progetto personalizzato a domicilio, con un contributo. Importi massimi del progetto: dimissioni protette 1.700 euro (30 giorni, una volta nell'anno); base A 4.000 euro; base B 7.400 euro; primo livello 16.000 euro; secondo livello 16.000 euro più 9.000 di potenziamento; terzo livello 16.000 euro più 27.000 di potenziamento. Importi su 12 mesi. Per chi assiste c'è una quota per il caregiver, compresa nel progetto: al massimo il 50% nei livelli base A e B, al massimo un terzo del solo contributo ordinario nel primo, secondo e terzo livello; non per le dimissioni protette.",
    stato: "attivo",
    quando: "Linee d'indirizzo 2026-2027 (delibera della Giunta n. 1/28 del 14/01/2026, pubblicata il 15/01/2026). Nessuna scadenza nelle linee regionali. Le scadenze dipendono dall'Ambito: l'avviso del PLUS Quartu-Parteolla per le nuove istanze 2026/2027 arriva al 29 settembre 2027, mentre a Cagliari le nuove istanze 2026 erano indicate fino al 31 ottobre 2026.",
    comeSiChiede:
      "Si presenta la richiesta al Comune di residenza o al Punto Unico di Accesso (PUA), che la trasmette all'Ambito PLUS.",
    fonte: {
      label: "Regione Sardegna · Delibera n. 1/28 del 14/01/2026, Ritornare a casa PLUS, linee d'indirizzo 2026-2027",
      url: "https://delibere.regione.sardegna.it/delibera/116719",
    },
    verificatoIl: "05/11/2026",
    nota: "L'ISEE sociosanitario riduce il contributo: nessuna riduzione fino a 15.000 euro (base A, base B e primo livello), 25.000 (secondo) e 40.000 (terzo). Oltre queste soglie la riduzione sale per fasce, fino all'80% sopra 80.000, 90.000 e 100.000 euro. Per le dimissioni protette la riduzione parte sopra 50.000 euro (10%, poi 20% e 30%). Gli importi sono massimi di progetto, non un accredito automatico. Il testo completo delle linee è l'allegato alla delibera.",
  },
  {
    id: "sardegna-piani-162-98-2026",
    regione: "Sardegna",
    titolo: "Piani personalizzati di sostegno (legge 162/1998), gestione 2026",
    perChi: "Persone con disabilità grave, secondo le linee attuative regionali. Residenti in Sardegna, tramite il proprio Comune.",
    cosa:
      "Piani personalizzati di sostegno. La Regione ha assegnato ai Comuni altri 10 milioni di euro per il 2026. È un finanziamento ai Comuni, non un importo per la singola persona: l'importo individuale non è indicato.",
    stato: "attivo",
    quando: "Finanziamento 2026 confermato dalla Regione il 23/10/2026. Le scadenze per presentare la domanda non sono indicate.",
    comeSiChiede: "Rivolgiti ai Servizi sociali del Comune di residenza per sapere se e quando è aperta la raccolta delle domande.",
    fonte: {
      label: "Regione Sardegna · Piani personalizzati legge 162/98, assegnate ulteriori risorse ai Comuni",
      url: "https://www.regione.sardegna.it/notizie/piani-personalizzati-di-sostegno-legge-n-162-98-assegnate-ulteriori-risorse-ai-comuni",
    },
    verificatoIl: "30/10/2026",
    nota: "Requisiti sanitari, ISEE e compatibilità con Ritornare a casa PLUS dipendono dalle linee attuative e dal livello del progetto: chiedili al Comune.",
  },

  // ----------------------------------------------------------------- ABRUZZO
  {
    id: "abruzzo-barriere-casa-legge-13-1989",
    regione: "Abruzzo",
    titolo: "Contributi per eliminare le barriere architettoniche nella casa privata (legge 13/1989)",
    perChi: "Persone con disabilità che rientrano nella legge 13/1989. I requisiti individuali e lo stato dei lavori si verificano nel procedimento del Comune.",
    cosa: "Contributo calcolato secondo la normativa. Gli importi non sono indicati nella fonte.",
    stato: "attivo",
    quando: "Servizio permanente. Nessuna scadenza indicata.",
    comeSiChiede: "La domanda si presenta al Comune; la Regione raccoglie il fabbisogno dei Comuni e poi eroga i fondi.",
    fonte: {
      label: "Regione Abruzzo · Carta dei servizi: superamento delle barriere architettoniche negli edifici privati",
      url: "https://trasparenza.regione.abruzzo.it/servizi-erogati/carta-servizi/superamento-ed-eliminazione-delle-barriere-architettoniche-negli",
    },
    verificatoIl: "30/10/2026",
    nota: "I pagamenti recenti riguardano le domande degli anni scorsi: chiedi al Comune quando e come presentare una nuova richiesta.",
  },

  // ---------------------------------------------------------------- CAMPANIA
  {
    id: "campania-registro-caregiver",
    regione: "Campania",
    titolo: "Registro regionale dei caregiver familiari",
    perChi:
      "Familiari che assistono una persona con disabilità o infermità. Servono la parentela ammessa e il verbale della UVI o una certificazione specialistica pubblica, più i dati richiesti dal portale.",
    cosa: "L'iscrizione al registro riconosce il ruolo di caregiver. Da sola non dà nessun contributo in denaro: può essere il primo passo per misure separate.",
    stato: "attivo",
    quando: "Portale attivo dal 21/12/2023. Nessuna scadenza indicata.",
    comeSiChiede: "Sul portale regionale con SPID, CIE o CNS. Si può fare anche tramite un delegato.",
    fonte: {
      label: "Regione Campania · Registro caregiver familiare",
      url: "https://servizi-digitali.regione.campania.it/Caregiver",
    },
    verificatoIl: "30/10/2026",
    nota: "Non è un bonus: l'iscrizione non garantisce contributi.",
  },
  {
    id: "campania-dopo-di-noi",
    regione: "Campania",
    titolo: "Programma Dopo di Noi",
    perChi: "Persone con disabilità grave non dovuta all'invecchiamento, senza un adeguato sostegno familiare. Contano la valutazione dei bisogni e le priorità del programma.",
    cosa: "Servizi e percorsi per l'autonomia e la vita fuori dalla famiglia di origine. Il valore del sostegno per la singola persona non è indicato.",
    stato: "attivo",
    quando:
      "Programma in corso (atto regionale del 07/05/2026 e aggiornamenti di luglio 2026). La data del 31/12/2026 riguarda gli enti che si iscrivono all'elenco, non le famiglie.",
    comeSiChiede: "Rivolgiti al Servizio sociale dell'Ambito o del Consorzio del tuo Comune: i servizi possono anche cercare le persone da coinvolgere.",
    fonte: {
      label: "Regione Campania · Programma Dopo di Noi",
      url: "https://www.regione.campania.it/aree-tematiche/politiche-sociali/programma-dopo-noi",
    },
    verificatoIl: "30/10/2026",
    nota: "Le procedure variano da Ambito ad Ambito.",
  },
  {
    id: "campania-esenzione-bollo",
    regione: "Campania",
    titolo: "Esenzione dalla tassa automobilistica (bollo) per veicoli di persone con disabilità",
    perChi:
      "La persona con disabilità o chi l'ha fiscalmente a carico, intestatario del veicolo. Categorie ammesse: ridotte o impedite capacità motorie permanenti; grave limitazione della deambulazione o pluriamputazioni; disabilità mentale o psichica con handicap grave e accompagnamento; cecità o sordità.",
    cosa:
      "Esenzione dal bollo per un solo veicolo. Limiti: fino a 2.000 cc se benzina o ibrido, fino a 2.800 cc se gasolio o ibrido, fino a 150 kW se elettrico. Per le ridotte capacità motorie il veicolo deve avere gli adattamenti necessari; nelle altre categorie no.",
    stato: "attivo",
    quando: "Misura permanente. Nessuna scadenza indicata.",
    comeSiChiede:
      "La richiesta è indirizzata alla Regione Campania, Direzione Generale Risorse Finanziarie, UOS Gestione amministrativa e contabile delle tasse e dei tributi regionali (Centro Direzionale Isola C5, 80143 Napoli). Si consegna alle Unità territoriali ACI, agli Automobile Club, alle Delegazioni ACI o alle agenzie convenzionate (l'elenco dei punti di servizio abilitati è sulla pagina). Serve la carta di circolazione e, se il veicolo è intestato a un familiare, la documentazione o l'autocertificazione del carico fiscale. La targa va indicata nella domanda. Sulla stessa pagina trovi i modelli: istanza di esenzione, autocertificazione del disabile e autocertificazione del disabile a carico. Il procedimento si conclude entro 120 giorni. L'esito (accolta o respinta) viene comunicato tramite SEND, di norma alla PEC, con eventuale avviso su App IO; se non hai recapiti digitali arriva con raccomandata A/R.",
    fonte: {
      label: "Regione Campania · Tassa automobilistica (con tabella ACI delle esenzioni)",
      url: "https://entrate.regione.campania.it/tassa-automobilistica-info",
    },
    verificatoIl: "05/11/2026",
    nota: "I documenti cambiano con la categoria: verbale di handicap grave, certificazioni pubbliche di cecità o sordità, patente speciale per le capacità motorie ridotte. Controlla l'elenco sulla pagina. I limiti per le auto ibride ed elettriche sono nel Tariffario 2026 della Regione Campania (sezione «Esenzioni dal pagamento», voce «Veicoli per disabili (L. 104)»); la pagina «Tassa automobilistica» indica solo benzina e gasolio. Per GPL e metano i limiti non sono indicati. La pagina non indica da quando decorre l'esenzione né come si rinnova, e non riporta la data di aggiornamento: per questi punti scrivi alla Regione (tributiregionali@regione.campania.it, PEC tributiregionali@pec.regione.campania.it, tel. 081 796 61 11 o 081 796 91 11).",
  },

  // ------------------------------------------------------------------ MOLISE

  // -------------------------------------------------------------- BASILICATA
  {
    id: "basilicata-assistenza-specialistica-alunni-2026-2027",
    regione: "Basilicata",
    titolo: "Assistenza specialistica agli alunni con disabilità (a.s. 2026-2027)",
    perChi: "Alunni con disabilità certificata di infanzia, primaria e secondaria di primo grado, comprese le scuole paritarie indicate.",
    cosa: "Servizio di assistenza specialistica a scuola, finanziato con 600 mila euro complessivi. Non è un contributo alla famiglia.",
    stato: "attivo",
    quando: "Anno scolastico 2026-2027 (notizia del 29/08/2026).",
    comeSiChiede: "Il servizio passa dai nove Ambiti e dai Comuni capofila. Per attivarlo, rivolgiti alla scuola e al Servizio sociale del Comune.",
    fonte: {
      label: "Regione Basilicata · Disabilità e scuola, 600mila euro per l'assistenza specialistica",
      url: "https://www.regione.basilicata.it/disabilita-e-scuola-600mila-euro-per-assistenza-specialistica/",
    },
    verificatoIl: "30/10/2026",
    nota: "Per le scuole secondarie di secondo grado c'è un altro finanziamento, il Piano disabilità 2025-2026.",
  },

  // ------------------------------------------------------------ COMUNE DI LESIGNANO DE' BAGNI
  {
    id: "lesignano-voucher-sportivi-2026-2027",
    regione: "Emilia-Romagna",
    comuni: ["lesignano-de-bagni"],
    titolo: "Voucher sportivi regionali 2026/2027 per minori con disabilità (Lesignano de' Bagni)",
    perChi:
      "Famiglie residenti a Lesignano de' Bagni con un minore tra 6 e 17 anni con disabilità certificata dal verbale INPS, oppure in sovrappeso o obesità con complicanze e con indicazione di attività motoria o sportiva del medico. ISEE ordinario non superiore a 30.000 euro. La domanda la presenta chi esercita la potestà genitoriale o la tutela legale.",
    cosa: "Un contributo fino a 250 euro per ogni minore, per le spese di corsi o attività motorie e sportive della stagione 2026/2027 presso società sportive dilettantistiche iscritte al RASD o enti del Terzo Settore iscritti al RUNTS. Può coprire fino al 100% della spesa: se la spesa è inferiore, il voucher si riduce.",
    stato: "aperto",
    quando: "Domande entro il 20/12/2026. Le ricevute mancanti vanno consegnate entro il 31/01/2027, altrimenti si perde il contributo.",
    comeSiChiede:
      "Si presenta il modulo allegato all'avviso all'ufficio protocollo del Comune, oppure per PEC a protocollo@postacert.comune.lesignano-debagni.pr.it. Servono: ISEE 2026, verbale INPS (o attestazione del medico per sovrappeso/obesità), iscrizione del minore al corso e la ricevuta di pagamento se già disponibile.",
    fonte: {
      label: "Comune di Lesignano de' Bagni · Voucher regionali per attività sportiva (avviso del 06/11/2026)",
      url: "https://pagamentipa.comune.lesignano-debagni.pr.it/it/news/voucher-regionali-per-attivita-sportiva-minori-disabili-o-obesi-certificati",
    },
    verificatoIl: "09/11/2026",
  },
  {
    id: "lesignano-contrassegno-disabili",
    regione: "Emilia-Romagna",
    comuni: ["lesignano-de-bagni"],
    titolo: "Contrassegno disabili (C.U.D.E.) del Comune di Lesignano de' Bagni",
    perChi:
      "Residenti a Lesignano de' Bagni con difficoltà motorie o di deambulazione, e ciechi con residuo visivo non superiore a 1/20.",
    cosa: "Il contrassegno per la sosta e la circolazione agevolata. Nessun contributo in denaro. Il permanente è esente da bollo; il temporaneo richiede una marca da bollo da 16 euro.",
    stato: "attivo",
    comeSiChiede:
      "Si presenta la richiesta in Comune con il modulo \"Richiesta permesso C.U.D.E.\", la certificazione medico-legale, il documento d'identità e 2 fototessere recenti. Per il rinnovo servono il modulo di rinnovo, il contrassegno scaduto, il certificato del medico curante e 2 fototessere.",
    fonte: {
      label: "Comune di Lesignano de' Bagni · Contrassegno disabili (pagina aggiornata il 21/09/2026)",
      url: "https://pagamentipa.comune.lesignano-debagni.pr.it/it/page/tesserini-invalidi",
    },
    verificatoIl: "09/11/2026",
    nota: "Per il temporaneo serve la certificazione dell'Ufficio Medico legale dell'AUSL.",
  },

  {
    id: "inps-home-care-premium-2025-2028",
    regione: "Italia",
    titolo: "Home Care Premium (INPS) 2025-2028",
    perChi:
      "Dipendenti e pensionati pubblici iscritti alla Gestione unitaria delle prestazioni creditizie e sociali INPS, e i loro familiari (coniugi, uniti civilmente e parenti di primo grado, anche non conviventi) con disabilità prevista dalla tabella del bando, maggiorenni o minorenni. Fratelli, sorelle e affini di primo grado solo se il titolare è il loro tutore o curatore. L'accesso dipende dall'iscrizione alla Gestione.",
    cosa:
      "Assistenza domiciliare per persone non autosufficienti, con un progetto valido dal 1° luglio 2025 al 30 giugno 2028. Le prestazioni integrative dipendono dal territorio degli enti convenzionati.",
    stato: "attivo",
    scade: "2028-01-31",
    quando: "Il bando scade il 31 gennaio 2028. Il progetto vale dal 1° luglio 2025 al 30 giugno 2028.",
    comeSiChiede:
      "Il titolare compila la domanda online sul sito INPS (Prestazioni Welfare, Gestione domanda, Home Care Premium) con SPID, CIE o CNS. Se beneficiario e titolare sono persone diverse, il beneficiario conferma e invia con le proprie credenziali. Ci si può far aiutare da un patronato o dal Contact Center INPS.",
    fonte: {
      label: "INPS · Bando Home Care Premium 2025-2028 (PDF)",
      url: "https://www.inps.it/content/dam/inps-site/it/scorporati/welfare-bandi/2025/03/Bando_121/Allegati/790_Bando-HCP-2025-2028-Assistenza-domiciliare.pdf",
    },
    verificatoIl: "09/11/2026",
  },
  // --- Raccolta 11/11/2026: nuove schede da fonti istituzionali (testi letti nei documenti ufficiali da Ilaria e controllati con le pagine degli enti) ---
  {
    id: "liguria-patenti-speciali-2026",
    regione: "Liguria",
    titolo: "Contributo per le patenti speciali di guida (2026)",
    perChi:
      "Persone con disabilità residenti in Liguria, riconosciute idonee alla guida con gli adattamenti prescritti dalla commissione medica. Sono esclusi i beneficiari di contributi pubblici per lo stesso scopo nei due anni precedenti. ISEE, percentuale di invalidità ed età non sono indicati nella fonte.",
    cosa:
      "Fino a 1.000 euro a rimborso delle spese ammesse per conseguire o riclassificare una patente speciale (A e B) nel 2026, nei limiti delle risorse.",
    stato: "aperto",
    quando:
      "Bando aperto dal 17/04/2026. La patente deve essere conseguita o riclassificata nel 2026; la domanda va fatta entro quattro mesi dal conseguimento o dalla riclassificazione.",
    comeSiChiede:
      "Con il modello del bando, per PEC a consulta.handicap.regione.liguria@pcert.postecert.it oppure con raccomandata alla Consulta regionale, via Fieschi 15, 16121 Genova.",
    fonte: {
      label: "Regione Liguria · Contributi patenti speciali 2026",
      url: "https://www.regione.liguria.it/homepage-attivita-istituzionale/trasparenza/amministrazione-trasparente/beni-immobili-e-gestione-patrimonio/patrimonio-immobiliare/publiccompetition/4580:contributi-patenti-speciali-2026.html",
    },
    verificatoIl: "10/11/2026",
    nota: "I fondi sono limitati e potrebbero essere già esauriti alla data di oggi, chiedi conferma all'ufficio prima di preparare la domanda. Il bando completo è nel PDF collegato alla pagina.",
  },
  {
    id: "umbria-cura-e-autonomia-2026",
    regione: "Umbria",
    titolo: "Cura e autonomia per tutti",
    perChi:
      "Persone con disabilità con bisogni di cura, assistenza a casa e autonomia, dopo una valutazione multidimensionale. Per la sola quota del Fondo non autosufficienze serve l'ISEE sociosanitario fino a 50.000 euro per gli adulti e 65.000 euro per i minorenni. Percentuale di invalidità, residenza ed età non sono indicate nella comunicazione.",
    cosa:
      "Assistenza indiretta: fino a 600 euro al mese per bisogni elevati o molto elevati, fino a 300 euro al mese per bisogni lievi o medi. La durata non è indicata.",
    stato: "attivo",
    quando: "Le domande si possono presentare in qualsiasi momento dell'anno; la valutazione è normalmente trimestrale. Comunicazione della Regione del 28/10/2026.",
    comeSiChiede:
      "Presso gli sportelli territoriali. Moduli e rappresentanza non sono indicati nella comunicazione: chiedi al servizio sociale del tuo Comune o alla Zona sociale.",
    fonte: {
      label: "Regione Umbria · Disabilità, la Giunta regionale approva la misura «Cura e autonomia per tutti» (28/10/2026)",
      url: "https://www.regione.umbria.it/notizie/-/asset_publisher/54m7RxsCDsHr/content/disabilita-la-giunta-regionale-approva-la-misura-cura-e-autonomia-per-tutti?read_more=true",
    },
    verificatoIl: "10/11/2026",
    nota: "Il 6 novembre la Regione ha comunicato altri finanziamenti per non autosufficienza e vita indipendente assegnati alle USL e alle Zone sociali: sono fondi per gli enti, non un nuovo bando per le persone.",
  },
  {
    id: "puglia-buoni-servizio-2026-2027",
    regione: "Puglia",
    titolo: "Buoni Servizio per anziani e persone con disabilità 2026/2027 (seconda finestra)",
    perChi:
      "Anziani non autosufficienti e adulti con disabilità. Servono un PAI valido (prestazioni sociosanitarie) oppure la Scheda di valutazione sociale (prestazioni socioassistenziali) e un ISEE ordinario fino a 40.000 euro. Per le prestazioni non residenziali serve anche l'ISEE ristretto: fino a 10.000 euro per gli adulti con disabilità e fino a 20.000 euro per gli anziani non autosufficienti.",
    cosa:
      "Copertura della quota sociale di servizi a ciclo diurno e a casa, con compartecipazione. La seconda finestra riguarda prestazioni dal 1° gennaio al 30 giugno 2027, fino a sei mesi.",
    stato: "aperto",
    scade: "2026-11-30",
    quando:
      "Seconda finestra: dalle 12:00 del 30 ottobre alle 12:00 del 30 novembre 2026 (art. 8, comma 1, pagine 12-13 dell'avviso).",
    comeSiChiede:
      "Online sulla piattaforma regionale PugliaSociale con identità digitale. La domanda la presenta la persona, un familiare di riferimento o un delegato; poi il gestore del servizio abbina la persona al servizio.",
    fonte: {
      label: "Regione Puglia · Avviso Buoni Servizio 2026/2027 (testo pubblicato dal Comune di Taranto)",
      url: "https://comune.taranto.it/it/news/buoni-servizio-2026-2027-per-anziani-e-persone-con-disabilita-aperto-il-nuovo-avviso-regionale?type=3",
    },
    verificatoIl: "10/11/2026",
    nota: "La seconda finestra non è garantita in ogni Ambito (art. 8, comma 3: servono fondi residui di almeno 15.000 euro o finanziamenti aggiuntivi). I fondi sono limitati e potrebbero essere già esauriti alla data di oggi, chiedi conferma all'ufficio prima di preparare la domanda.",
  },
  {
    id: "messina-tessere-ast-2027-2028",
    regione: "Sicilia",
    comuni: ["messina"],
    titolo: "Tessere AST per persone con disabilità (biennio 2027/2028)",
    perChi:
      "Residenti a Messina con disabilità. Servono la certificazione della legge 104, i documenti dell'accompagnatore se spetta, un documento, una foto e l'autocertificazione di residenza. ISEE, età e percentuale di invalidità non sono indicati nella pagina.",
    cosa: "La tessera di libera circolazione extraurbana AST per il 2027/2028. Si versa 3,38 euro.",
    stato: "aperto",
    scade: "2026-11-23",
    quando: "Dal 27 ottobre 2026 alle 16:30 del 23 novembre 2026.",
    comeSiChiede:
      "Si consegnano il modulo e gli allegati al Front-office Politiche sociali, Palazzo Satellite, piazza della Repubblica 40. La pagina non dice se può presentarla un rappresentante.",
    fonte: {
      label: "Comune di Messina · Avviso tessere AST 2027/2028 (27/10/2026)",
      url: "https://comune.messina.it/it/news/6488620",
    },
    verificatoIl: "10/11/2026",
  },
  {
    id: "vda-vita-indipendente-art22",
    regione: "Valle d'Aosta",
    titolo: "Contributi per il servizio di assistenza alla vita indipendente (art. 22)",
    perChi:
      "Persone da 18 a 65 anni che hanno bisogno di sostegno intensivo, residenti in Valle d'Aosta, con certificazione di invalidità e della legge 104 (art. 3, comma 3). Serve un assistente assunto o iscritto nell'elenco regionale. ISEE sociosanitario (ristretto se spetta) o del nucleo anagrafico fino a 40.000 euro.",
    cosa:
      "Il 70% del costo con ISEE fino a 20.000 euro; il 50% con ISEE da 20.000,01 a 40.000 euro. Massimo 12.000 euro all'anno.",
    stato: "attivo",
    quando: "La domanda si può presentare in qualsiasi momento dell'anno.",
    comeSiChiede:
      "Online sulla piattaforma ASSECO della Regione. La pagina invita a contattare prima l'Ufficio assistenza economica.",
    fonte: {
      label: "Regione Valle d'Aosta · Art. 22: contributi servizio assistenza vita indipendente",
      url: "https://www.regione.vda.it/servsociali/contributi_finanziari_e_assistenza_economica/elenco_completo/lr_23_2010/disabili_art_22_contributi_servizio_assistenza_vita_indipendente_ex162_1998_i.aspx",
    },
    verificatoIl: "10/11/2026",
    nota: "Il documento collegato dalla pagina (allegato 119841) oggi non si apre (errore 404): per i dettagli chiedi all'Ufficio.",
  },
  // --- Raccolta 11/11/2026 (2): verifiche istituzionali dell'11 novembre ---
  {
    id: "puglia-dopo-di-noi-linea-b-2026",
    regione: "Puglia",
    titolo: "Dopo di Noi, Linea B: progetti personalizzati (dal 16 novembre 2026)",
    perChi:
      "Persone con disabilità grave (legge 104, art. 3, comma 3) prive del sostegno familiare, da 18 a 64 anni (oltre i 64 solo per chi è già beneficiario), residenti in Puglia da almeno un anno, nelle condizioni familiari previste dall'art. 2 dell'avviso. È incompatibile con Pro.V.I. (linee A e C), Patto di cura e Sostegno familiare. Serve l'ISEE ordinario; la soglia non è indicata nella fonte.",
    cosa: "Un budget fino a 15.000 euro per un progetto personalizzato, per un massimo di 12 mesi.",
    stato: "attivo",
    scade: "2026-12-16",
    quando:
      "Le domande si aprono alle 12:00 del 16 novembre 2026 e si chiudono alle 12:00 del 16 dicembre 2026 (art. 7 dell'avviso). Finora non è aperto.",
    comeSiChiede:
      "Online sulla piattaforma regionale PugliaSociale con SPID, CIE o CNS. La domanda la presenta la persona, un familiare di riferimento o un delegato.",
    fonte: {
      label: "Regione Puglia · Avviso Dopo di Noi (testo pubblicato dal Comune di Altamura, 06/11/2026)",
      url: "https://www.comune.altamura.ba.it/it/news/avviso-pubblico-dei-progetti-personalizzati-dopo-di-noi-linea-b",
    },
    verificatoIl: "11/11/2026",
    nota: "Fondi dell'annualità 2024, determina n. 1722 del 03/11/2026. Chi ha rinunciato alla graduatoria Linea A o ha un progetto Dopo di Noi attivo ha condizioni particolari: leggi l'art. 2. I fondi sono limitati e potrebbero essere già esauriti alla data di oggi, chiedi conferma all'ufficio prima di preparare la domanda.",
  },
  {
    id: "veneto-icd-caregiver-familiare",
    regione: "Veneto",
    titolo: "Impegnative di cura domiciliare: interventi a favore del caregiver familiare",
    perChi:
      "Caregiver familiari di persone assistite a casa, dopo la valutazione dell'équipe (UVMD). Per le tipologie CGA e CGB Plus serve l'ISEE sociosanitario sotto 50.000 euro per gli adulti e sotto 65.000 euro per i minorenni; per CGB e CGM, in alcuni casi, l'ISEE fino a 16.700 euro (il tipo di ISEE non è indicato). Età e residenza minima non sono indicate.",
    cosa:
      "Un contributo mensile: 800 euro (CGA); da 400 a 600 euro (CGB e CGM); 400 euro (CGB Plus e CGMgs). La durata non è indicata.",
    stato: "attivo",
    quando: "Si può chiedere in qualsiasi momento. Pagina aggiornata il 14 maggio 2026.",
    comeSiChiede:
      "Agli sportelli sociali del Comune o dell'ATS, oppure al Distretto, dalla persona, da un suo rappresentante legale o da un familiare. Poi ci sono la valutazione e la graduatoria.",
    fonte: {
      label: "Regione Veneto · Domiciliarità (ICD): interventi a favore del caregiver familiare",
      url: "https://salute.regione.veneto.it/organizzazione-sssr/il-servizio-socio-sanitario-regionale/assistenza-distrettuale/assistenza-sociosanitaria/anziani-non-autosufficienti/domiciliarit%C3%A0-%28icd%29---interventi-a-favore-del-caregiver-familiare",
    },
    verificatoIl: "11/11/2026",
    nota: "Essere idonei non garantisce il pagamento: dipende dallo scorrimento della graduatoria. La pagina richiama atti del 2021-2024 e non riguarda il nuovo fondo nazionale per i caregiver.",
  },
  {
    id: "prato-vita-indipendente-chi-fa-da-se",
    regione: "Toscana",
    comuni: ["prato"],
    titolo: "Progetti di vita indipendente «Chi fa da sé» (Zona pratese)",
    perChi:
      "Persone con disabilità e grave limitazione dell'autonomia, residenti nella Zona pratese, con la legge 104 (art. 3, comma 3), maggiori di 18 anni e capaci di autodeterminazione, anche con un sostegno. Soglia e tipo di ISEE non sono indicati nella fonte.",
    cosa:
      "Da 800 a 2.000 euro al mese (si possono chiedere importi più bassi) a rimborso delle spese rendicontate. Il progetto dura almeno 6 mesi e deve finire entro il 31 dicembre 2027.",
    stato: "aperto",
    scade: "2027-05-31",
    quando:
      "Avviso riaperto dal 1° aprile 2025 al 31 maggio 2027, nei limiti delle risorse e salvo un termine diverso comunicato dall'ente (art. 7 dell'avviso).",
    comeSiChiede:
      "Per PEC alla Società della Salute Area Pratese (sdsareapratese@legalmail.it), con gli allegati A e B e, se c'è una delega all'invio, l'allegato C. Può inviarla la persona o un suo delegato.",
    fonte: {
      label: "Società della Salute Area Pratese · Avviso progetti di Vita Indipendente «Chi fa da sé»",
      url: "https://www.sds.prato.it/it/bacheca/bandi-avvisi/attivi/progetti-vita-indipendente/pagina1182.html",
    },
    verificatoIl: "11/11/2026",
    nota: "Pagina della Società della Salute aggiornata il 04/08/2025. I fondi sono limitati e potrebbero essere già esauriti alla data di oggi, chiedi conferma all'ufficio prima di preparare la domanda.",
  },
  {
    id: "piemonte-esenzione-bollo-disabilita",
    regione: "Piemonte",
    titolo: "Esenzione dal bollo auto per persone con disabilità",
    perChi:
      "Persone con disabilità nelle categorie elencate dalla Regione e, nei casi previsti, i familiari a carico. I requisiti sanitari cambiano da categoria a categoria: non basta una generica invalidità. Si esenta un solo veicolo, fino a 2.000 cc a benzina o 2.800 cc diesel. L'ISEE non è indicato.",
    cosa: "L'esenzione dal bollo. Si rinnova da sola finché restano le condizioni.",
    stato: "attivo",
    quando:
      "Non è un bando annuale: la domanda va fatta entro 90 giorni dalla scadenza ordinaria del pagamento annuale.",
    comeSiChiede:
      "Sul portale Tassa Auto Piemonte; la pagina indica anche gli intermediari abilitati e gli URP. La domanda la presenta chi ha diritto.",
    fonte: {
      label: "Regione Piemonte · Esenzioni dalla tassa automobilistica per persone con disabilità",
      url: "https://www.regione.piemonte.it/web/temi/tributi/tassa-automobilistica-bollo-auto/esenzioni-dalla-tassa-automobilistica-per-persone-disabilita",
    },
    verificatoIl: "11/11/2026",
    nota: "Controlla la tua categoria sanitaria sulla pagina prima di applicare i limiti al tuo caso.",
  },
  // --- Raccolta 11/11/2026 (3): bandi comunali con scadenza dopo il 10 novembre ---
  {
    id: "sassari-trasporto-scolastico-autonomo-2026",
    regione: "Sardegna",
    comuni: ["sassari"],
    titolo: "Rimborso del trasporto scolastico organizzato dalla famiglia (2026)",
    perChi:
      "Famiglie di alunni di 3-14 anni residenti a Sassari, con disabilità grave (legge 104, art. 3, comma 3), che frequentano l'infanzia, la primaria o la secondaria di primo grado e non usano il trasporto scolastico comunale. L'ISEE decide la priorità: senza ISEE o con ISEE irregolare la domanda va in coda.",
    cosa: "Un rimborso calcolato a 0,55 euro per chilometro, secondo il percorso e i limiti dell'avviso. Non è un importo fisso per famiglia.",
    stato: "aperto",
    scade: "2026-11-23",
    quando: "Domande entro le 23:59 del 23 novembre 2026. Pagina del Comune aggiornata il 03/11/2026.",
    comeSiChiede: "Con il modulo dell'avviso del Comune di Sassari: leggi la pagina e il PDF dell'avviso per i documenti e il modo di consegna.",
    fonte: {
      label: "Comune di Sassari · Voucher per il servizio di trasporto scolastico per studenti con disabilità, anno 2026",
      url: "https://www.comune.sassari.it/it/amministrazione/documenti-dati/documento-pubblico/Voucher-per-il-servizio-di-trasporto-scolastico-in-favore-di-studenti-disabili-frequentanti-il-primo-ciclo-di-studi-residenti-nel-Comune-di-Sassari-anno-2026/",
    },
    verificatoIl: "11/11/2026",
  },
  {
    id: "sassari-piani-162-98-nuove-domande-2026",
    regione: "Sardegna",
    comuni: ["sassari"],
    titolo: "Piani personalizzati L. 162/98: nuove domande 2026 (misura regionale gestita dal Comune)",
    perChi:
      "Persone con disabilità grave (legge 104, art. 3, comma 3, anche con certificazione provvisoria) residenti a Sassari. Servono la scheda salute, i documenti richiesti e l'ISEE adatto: senza ISEE il finanziamento è ridotto dell'80%. Ci sono incompatibilità, con eccezioni per «Ritornare a casa».",
    cosa: "Un piano personalizzato di sostegno. L'importo non è indicato nell'avviso di riapertura: dipende dal piano e dalle risorse.",
    stato: "aperto",
    scade: "2026-11-16",
    quando: "Nuove domande entro il 16 novembre 2026. Le domande sono accolte in ordine cronologico, fino a esaurimento delle risorse. Pagina aggiornata il 29/06/2026.",
    comeSiChiede: "Secondo l'avviso di riapertura del Comune di Sassari (pagina e PDF).",
    fonte: {
      label: "Comune di Sassari · Bando 2026 L. 162/98, avviso per le nuove domande",
      url: "https://www.comune.sassari.it/it/amministrazione/documenti-dati/documento-pubblico/Bando-annualita-2026-L.162-98-piani-personalizzati-in-favore-di-persone-con-disabilita-grave-avviso-presentazione-nuove-domande/",
    },
    verificatoIl: "11/11/2026",
    nota: "I fondi sono limitati e potrebbero essere già esauriti alla data di oggi, chiedi conferma all'ufficio prima di preparare la domanda.",
  },
  {
    id: "trapani-tessere-atm-2027",
    regione: "Sicilia",
    comuni: ["trapani"],
    titolo: "Tessere ATM 2027 per persone con disabilità",
    perChi:
      "Residenti a Trapani con certificazione della legge 104 oppure invalidità civile di almeno il 66%. Il PDF indica un limite di ISE (non ISEE): 10.200 euro per una persona sola, 20.400 euro per due o più componenti. La pagina chiede anche l'attestazione ISEE da allegare.",
    cosa: "Il Comune contribuisce con 20 euro al mese; la quota a carico dell'utente è di 5 euro al mese, più le eventuali spese di prima emissione.",
    stato: "aperto",
    scade: "2026-11-20",
    quando: "Domande entro il 20 novembre 2026. Pagina aggiornata il 01/10/2026.",
    comeSiChiede: "Secondo l'avviso del Comune di Trapani (pagina e PDF): leggi i documenti da allegare.",
    fonte: {
      label: "Comune di Trapani · Tessere ATM 2027, aperte le domande",
      url: "https://comune.trapani.it/novita/tessere-atm-2027-aperte-le-domande-per-gli-aventi-diritto/",
    },
    verificatoIl: "11/11/2026",
  },
  {
    id: "ragusa-tessere-ast-2027-2028",
    regione: "Sicilia",
    comuni: ["ragusa"],
    titolo: "Tessera AST di libera circolazione extraurbana (marzo 2027 - febbraio 2028)",
    perChi:
      "Persone con disabilità con invalidità di almeno il 67% o equiparate (art. 21 L.R. 68/81 e art. 2 L.R. 9/92). Altre condizioni e costi sono nell'allegato dell'avviso, che non abbiamo potuto leggere: chiedi al Comune.",
    cosa: "La tessera di libera circolazione sui mezzi AST extraurbani. Nessun contributo in denaro indicato.",
    stato: "aperto",
    scade: "2026-11-16",
    quando: "Domande entro le 12:00 del 16 novembre 2026. Pagina del Comune aggiornata il 14/10/2026.",
    comeSiChiede: "Secondo l'avviso del Comune di Ragusa (PDF allegato alla pagina).",
    fonte: {
      label: "Comune di Ragusa · Rilascio tessera di libera circolazione extraurbana AST, marzo 2027 - febbraio 2028",
      url: "https://comune.ragusa.it/en/news/rilascio-tessera-di-libera-circolazione-extraurbana-sui-mezzi-a-s-t-marzo-2027-febbraio-2028-per-soggetti-disabili-art21-l-r-68-81-e-art-2-l-r-9-92-con-invalidita-non-inferiore-al-67-o-equiparati",
    },
    verificatoIl: "11/11/2026",
    nota: "Pagina letta nella versione inglese del sito del Comune. Il PDF dell'avviso non si legge: controlla requisiti e documenti con l'ufficio prima di preparare la domanda.",
  },
];

/** Valore di `regione` per le misure nazionali: valgono in tutti i Comuni. */
export const REGIONE_NAZIONALE = "Italia";

/** Misure che valgono per il Comune attivo, prima quelle del suo territorio. */
export function bonusDelComune(): { locali: Bonus[]; regionali: Bonus[]; nazionali: Bonus[]; regione: string } {
  const regione = comune.regione;
  const vive = (l: Bonus[]) => l.map((b) => conScadenza(b)).filter((b): b is Bonus => b !== null);
  const deLaRegione = vive(BONUS.filter((b) => b.regione === regione));
  const nazionali = vive(BONUS.filter((b) => b.regione === REGIONE_NAZIONALE));
  const locali = deLaRegione.filter((b) => b.comuni?.includes(comune.slug));
  const regionali = deLaRegione.filter((b) => !b.comuni);
  const ordine: Record<StatoBonus, number> = { aperto: 0, attivo: 1, "da-verificare": 2, scaduto: 3, chiuso: 4 };
  const ordina = (l: Bonus[]) => [...l].sort((a, b) => ordine[a.stato] - ordine[b.stato]);
  return { locali: ordina(locali), regionali: ordina(regionali), nazionali: ordina(nazionali), regione };
}
