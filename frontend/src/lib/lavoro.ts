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
// Prima raccolta: 20/10/2026, collocamento mirato (Italia), Friuli-Venezia Giulia.
// Non inserire misure di cui non si è letta la fonte ufficiale (regola del 20/10/2026).

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

  // --- Puglia --------------------------------------------------------------
  {
    id: "lavoro-puglia-incentivo-assunzioni",
    regione: "Puglia",
    titolo: "Incentivo alle aziende che assumono persone iscritte al collocamento mirato",
    perChi:
      "Il contributo va ai datori di lavoro privati con sedi in Puglia, soggetti o non soggetti all'obbligo di assunzione della Legge 68/1999, che assumono persone iscritte al collocamento mirato. Non lo chiede la persona: ma essere iscritti al collocamento mirato ti rende più \"conveniente\" da assumere.",
    cosa:
      "Alle aziende: fino a 15.000 euro per ogni assunzione a tempo indeterminato, con maggiorazioni in casi specifici. Ci sono contributi anche per alcune assunzioni a tempo determinato, di cui la pagina non indica gli importi. La dotazione è di 4,5 milioni di euro.",
    stato: "aperto",
    quando: "Le domande delle aziende si presentano fino a esaurimento delle risorse e comunque non oltre le ore 12:00 del 31 dicembre 2026.",
    comeSiChiede:
      "Per te: iscriviti al collocamento mirato al centro per l'impiego. Le aziende fanno domanda online sulla piattaforma Sistema Puglia.",
    fonte: {
      label: "ARPAL Puglia · Avviso pubblico Incentivo assunzioni persone con disabilità (BURP n. 61 del 03/08/2026)",
      url: "https://arpal.regione.puglia.it/-/avviso-pubblico-incentivo-assunzioni-persone-con-disabilit%C3%A0",
    },
    verificatoIl: "20/10/2026",
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
