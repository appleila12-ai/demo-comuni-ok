// Lavoro e disabilità: misure nazionali, della Regione e del Comune attivo.
//
// REGOLE PER AGGIUNGERE UNA MISURA (le stesse di `bonus.ts`)
//  - solo misure con una fonte ufficiale (ministeri, INPS, INAIL, Regione, Comune, ASL)
//  - ogni scheda ha SEMPRE la fonte e la data in cui è stata controllata
//  - se non siamo sicuri di requisiti, importi o date: stato "da-verificare"
//  - non scrivere cose che non si leggono nella fonte
//  - ricontrollare almeno ogni 3 mesi e sempre a gennaio
//
// Regione "Italia" = vale in tutta Italia (si vede in ogni Comune).
//
// Prima raccolta: 20/10/2026, collocamento mirato (Italia), Friuli-Venezia Giulia, Lombardia,
// Sardegna, Liguria e borse lavoro del Comune di Sarzana.

import { comune } from "@/src/config/comune";
import type { Bonus } from "@/src/lib/bonus";

export const REGIONE_ITALIA = "Italia";

export const LAVORO: Bonus[] = [
  // --- Tutta Italia -------------------------------------------------------
  {
    id: "lavoro-collocamento-mirato",
    regione: REGIONE_ITALIA,
    titolo: "Collocamento mirato: iscrizione per cercare lavoro (Legge 68/1999)",
    perChi:
      "Persone disoccupate, con almeno 16 anni e non ancora in età di pensione, che hanno: invalidità civile superiore al 45%; invalidità del lavoro (INAIL) superiore al 33%; cecità; sordità dalla nascita o prima di imparare a parlare; oppure una minorazione dalla prima all'ottava categoria come invalidi di guerra, civili di guerra o per servizio.",
    cosa:
      "L'iscrizione alle liste del collocamento mirato permette di accedere alle opportunità di lavoro presso i datori di lavoro pubblici e privati obbligati ad assumere persone con disabilità. Il centro per l'impiego stipula con te un patto di servizio personalizzato. La graduatoria tiene conto di anzianità di iscrizione, condizione economica, carico familiare e difficoltà di spostamento.",
    stato: "attivo",
    comeSiChiede:
      "Ci si iscrive al centro per l'impiego del territorio di residenza (ufficio di collocamento mirato). Servono: la dichiarazione di immediata disponibilità al lavoro (DID, fatta online), la certificazione dello stato invalidante e, se la valutazione è positiva, la relazione sulle residue capacità lavorative rilasciata dalla commissione dell'ASL o dell'INPS. Gli invalidi al 100% possono iscriversi se la valutazione della capacità lavorativa è positiva. L'iscrizione è unica.",
    fonte: {
      label: "INAIL SuperAbile · Iscrizione alle liste speciali delle persone con disabilità",
      url: "https://mysuperabile.inail.it/cs/superabile/lavoro/collocamento/strumenti-per-inserimento-lavorativo/20210405e-iscrizione-liste-speciali-persone-con-disabilita.html",
    },
    verificatoIl: "20/10/2026",
    nota: "Il Ministero del Lavoro spiega la Legge 68/1999 sulla pagina “Norme sul collocamento al lavoro delle persone disabili”. Requisiti e documenti possono cambiare: prima di andare conferma con il centro per l'impiego.",
  },

  // --- Friuli-Venezia Giulia ---------------------------------------------
  {
    id: "lavoro-fvg-collocamento-mirato",
    regione: "Friuli-Venezia Giulia",
    titolo: "Collocamento mirato in Friuli-Venezia Giulia: uffici e documenti",
    perChi:
      "Lavoratori disoccupati con riconoscimento di disabilità: riduzione della capacità lavorativa superiore al 45% (invalidità civile), invalidità superiore al 33% da infortunio o malattia professionale (INAIL), minorazioni dalla prima all'ottava categoria (guerra, servizio), non vedenti e sordi.",
    cosa:
      "Servizio regionale che permette di accedere alle opportunità di lavoro presso i datori di lavoro pubblici e privati obbligati ad assumere persone con disabilità. Uffici: Gorizia, Corso Italia 55, tel. 0481 386628. Pordenone, Via Canaletto 5, tel. 0434 529363. Trieste, Scala dei Cappuccini 1, tel. 040 3772890. Udine, Viale G. Duodo 3, tel. 0432 207729. PEC: lavoro@certregione.fvg.it.",
    stato: "attivo",
    comeSiChiede:
      "Documenti indicati dalla Regione: verbale di accertamento della disabilità con la percentuale di invalidità (o certificazione INAIL), verbale di accertamento della capacità globale ai fini del collocamento mirato (diagnosi funzionale), documento d'identità e codice fiscale; per gli stranieri, il permesso di soggiorno.",
    fonte: {
      label: "Regione FVG · Collocamento mirato (L. 68/1999)",
      url: "https://www.regione.fvg.it/rafvg/cms/RAFVG/formazione-lavoro/servizi-lavoratori/FOGLIA16/",
    },
    verificatoIl: "20/10/2026",
  },

  // --- Lombardia -----------------------------------------------------------
  {
    id: "lavoro-lombardia-frod",
    regione: "Lombardia",
    titolo: "Inserimento socio-lavorativo: Fondo regionale per l'occupazione dei disabili 2025/2026",
    perChi: "Persone con disabilità. La pagina della Regione non indica requisiti precisi.",
    cosa:
      "La Regione ha pubblicato le linee di indirizzo per gli interventi finanziati dal Fondo regionale per l'occupazione dei disabili (legge regionale 13/2003) per il biennio 2025/2026. Dalla pagina non si capisce quali interventi concreti ci siano nel tuo territorio.",
    stato: "da-verificare",
    quando: "Biennio 2025/2026. Nessuna scadenza indicata sulla pagina.",
    comeSiChiede:
      "Chiedi al centro per l'impiego (collocamento mirato) o ai Servizi Sociali del tuo Comune quali interventi sono attivi vicino a te.",
    fonte: {
      label: "Regione Lombardia · Inserimento lavorativo persone con disabilità",
      url: "https://www.regione.lombardia.it/istruzione-formazione-e-lavoro/lavoro-e-occupazione/inserimento-lavorativo-persone-con-disabilita",
    },
    verificatoIl: "20/10/2026",
    nota: "La stessa pagina elenca anche “Dote impresa”, contributi per l'assunzione: riguarda i datori di lavoro, non chi cerca lavoro.",
  },

  // --- Sardegna ------------------------------------------------------------
  {
    id: "lavoro-sardegna-includis",
    regione: "Sardegna",
    titolo: "INCLUDIS: tirocini e accompagnamento al lavoro",
    perChi:
      "Persone non occupate che hanno almeno una di queste condizioni: disturbo mentale o dello spettro autistico, in carico ai Dipartimenti di Salute Mentale o ai servizi di neuropsichiatria infantile (UONPIA); disabilità mentale, intellettiva o psichica, in carico ai servizi sociali o sociosanitari; disabilità riconosciuta ai sensi dell'art. 3 della Legge 104/1992.",
    cosa:
      "Percorsi di tirocinio presso soggetti ospitanti individuati insieme al centro per l'impiego, con figure di sostegno che accompagnano la persona, monitoraggio del percorso e aiuto per l'inserimento al lavoro dopo il tirocinio. L'indennità per chi fa il tirocinio non è scritta nella fonte che abbiamo letto.",
    stato: "da-verificare",
    quando:
      "L'avviso che abbiamo trovato è INCLUDIS 2024, approvato il 1° agosto 2024. Gli ambiti sociali dovevano candidarsi entro il 14 ottobre 2024 e le attività devono concludersi entro il 31 luglio 2027. Non sappiamo se nel tuo territorio ci siano ancora posti.",
    comeSiChiede:
      "Si passa dall'ambito sociale (PLUS) e dal centro per l'impiego: chiedi ai Servizi Sociali del tuo Comune se nel tuo ambito c'è un progetto INCLUDIS attivo.",
    fonte: {
      label: "Comune di Sassari · Avviso INCLUDIS 2024 (ambito PLUS Sassari)",
      url: "https://comune.sassari.it/.galleries/doc-documenti/includis_2024_avviso.pdf",
    },
    verificatoIl: "20/10/2026",
    nota: "La fonte è l'avviso di un ambito sociale che ha attuato il programma regionale. Il testo della Regione Sardegna non è stato letto: conferma con l'ente.",
  },

  // --- Liguria -------------------------------------------------------------
  {
    id: "lavoro-liguria-collocamento-mirato",
    regione: "Liguria",
    titolo: "Collocamento mirato in Liguria (Regione Liguria)",
    perChi: "Persone con disabilità e categorie protette (Legge 68/1999).",
    cosa:
      "Il servizio è gestito dalla Regione Liguria. Sul suo sito ci sono le pagine con sedi e orari degli uffici, compreso quello della Spezia, e le chiamate per persone con disabilità e categorie protette. Il contenuto delle pagine non ha potuto essere letto da qui, quindi non riportiamo recapiti.",
    stato: "da-verificare",
    comeSiChiede: "Apri la pagina della Regione per trovare l'ufficio e gli orari, oppure chiedi ai Servizi Sociali del Comune.",
    fonte: {
      label: "Regione Liguria · Collocamento mirato per i cittadini e i datori di lavoro",
      url: "https://www.regione.liguria.it/homepage-lavoro/cpi/operatori-liguri-cpi/collocamento-mirato.html",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina trovata con la ricerca ma non letta da noi: i dati vanno controllati.",
  },

  // --- Comuni ----------------------------------------------------------------
  {
    id: "lavoro-sarzana-borse-lavoro",
    regione: "Liguria",
    comuni: ["sarzana"],
    titolo: "Sarzana: borse lavoro del Comune (percorsi di attivazione sociale)",
    perChi:
      "Non lo sappiamo con certezza. Il Comune ha pubblicato un bando per percorsi di attivazione sociale; non sappiamo se sia riservato alle persone con disabilità o aperto a più persone in difficoltà.",
    cosa: "Il comunicato del Comune parla di 20 percorsi di attivazione sociale (borse lavoro). Requisiti, durata e compenso non sono stati letti.",
    stato: "da-verificare",
    quando:
      "Nel comunicato che abbiamo trovato le domande si chiudevano il 15 giugno. Non sappiamo di quale anno né se ci sarà un nuovo bando.",
    comeSiChiede:
      "Chiedi ai Servizi Sociali del Comune di Sarzana se c'è un bando aperto per lavorare in Comune per persone con disabilità, quali sono i requisiti e come si presenta la domanda.",
    fonte: {
      label: "Comune di Sarzana · Borse lavoro: bando comunale per 20 percorsi di attivazione sociale",
      url: "https://www.comune.sarzana.sp.it/comunicati-stampa/2526-borse-lavoro-attivato-il-bando-comunale-per-20-percorsi-di-attivazione-sociale-le-domande-entro-il-15-giugno.html",
    },
    verificatoIl: "20/10/2026",
    nota: "Del comunicato conosciamo solo il titolo: la pagina non si apriva da qui.",
  },
];

/** Pagine ufficiali da cui partire quando la tua Regione non ha ancora schede. */
export const LAVORO_DOVE_CERCARE = {
  link: [
    {
      label: "Ministero del Lavoro · Norme sul collocamento al lavoro delle persone disabili",
      url: "https://www.lavoro.gov.it/temi-e-priorita/disabilita-e-non-autosufficienza/focus-on/norme-sul-collocamento-al-lavoro-delle-persone-disabili/Pagine/default.aspx",
    },
    {
      label: "Ministero del Lavoro · Linee guida sul collocamento mirato",
      url: "https://www.lavoro.gov.it/temi-e-priorita-disabilita-e-non-autosufficienza/focus/linee-guida-collocamento-mirato",
    },
  ],
  cerca: "collocamento mirato, inserimento lavorativo disabili, tirocinio di inclusione, categorie protette",
};

export function lavoroDelComune(): {
  nazionali: Bonus[];
  locali: Bonus[];
  regionali: Bonus[];
  regione: string;
} {
  const regione = comune.regione;
  const ordine = { aperto: 0, attivo: 1, "da-verificare": 2, chiuso: 3 } as const;
  const ordina = (l: Bonus[]) => [...l].sort((a, b) => ordine[a.stato] - ordine[b.stato]);
  const nazionali = LAVORO.filter((b) => b.regione === REGIONE_ITALIA);
  const dellaRegione = LAVORO.filter((b) => b.regione === regione);
  const locali = dellaRegione.filter((b) => b.comuni?.includes(comune.slug));
  const regionali = dellaRegione.filter((b) => !b.comuni);
  return { nazionali: ordina(nazionali), locali: ordina(locali), regionali: ordina(regionali), regione };
}
