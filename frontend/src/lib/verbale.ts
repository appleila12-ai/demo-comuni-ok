// "Il tuo verbale": dai dati scritti sul verbale a ciò che POTREBBE spettare.
//
// REGOLE
//  - mai "hai diritto": solo "potresti rientrare" / "da verificare" / "non risulta"
//  - ogni scheda dice dove chiederla e, se c'è, ha la fonte ufficiale
//  - niente importi o limiti di reddito che non abbiamo letto in una fonte
//  - le regole vanno fatte rileggere a un patronato o ai servizi sociali prima di pubblicare
//
// I dati inseriti restano sul dispositivo: questa funzione non invia nulla.

import { bonusDelComune, type Bonus } from "@/src/lib/bonus";

export type Verbale = {
  legge104?: "nessuna" | "art3c1" | "art3c3";
  invalidita?: "nessuna" | "fino45" | "da46a99" | "100";
  accompagnamento?: "si" | "no";
  eta?: "minore" | "adulto" | "over67";
  struttura?: "no" | "si";
  isee?: "f35" | "f50" | "f65" | "oltre" | "nonso";
  esonero?: "si" | "no" | "nonso";
};

export type Esito = "probabile" | "verificare" | "non-risulta";

export const ESITO: Record<Esito, { etichetta: string }> = {
  probabile: { etichetta: "Potresti rientrare" },
  verificare: { etichetta: "Da verificare" },
  "non-risulta": { etichetta: "Non risulta dal verbale" },
};

export type Area = "Lavoro" | "Altro" | "Salute" | "Fisco e auto" | "Servizi e bonus";

export type Diritto = {
  id: string;
  area: Area;
  titolo: string;
  esito: Esito;
  cosa: string;
  comeSiChiede: string;
  fonte?: { label: string; url: string };
  /** se è una scheda di bonus, il suo id (si apre la pagina Bonus) */
  bonusId?: string;
  /** id di una lettera pronta da compilare (pagina Lettere pronte) */
  letteraId?: string;
};

export const AREE: Area[] = ["Altro", "Lavoro", "Salute", "Fisco e auto", "Servizi e bonus"];

const INPS_104 = {
  label: "INPS · permessi per la Legge 104",
  url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.50098.indennit-per-permessi-fruiti-dai-lavoratori-per-assistere-familiari-disabili-in-situazione-di-gravit-o-fruiti-dai-lavoratori-disabili.html",
};
const INPS_CONGEDO = {
  label: "INPS · congedo straordinario per assistere un familiare",
  url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.50097.indennit-per-congedi-straordinari-assistenza-familiari-disabili-.html",
};
const INPS_INABILITA = {
  label: "INPS · pensione di inabilità agli invalidi civili",
  url: "https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.pensione-di-inabilit-agli-invalidi-civili.html",
};
const INPS_ACCOMP = {
  label: "INPS · indennità di accompagnamento",
  url: "https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.indennit-di-accompagnamento-agli-invalidi-civili.html",
};
const ENTRATE_IVA = {
  label: "Agenzia delle Entrate · IVA ridotta per ausili e sussidi",
  url: "https://www.agenziaentrate.gov.it/portale/iva-ridotta-per-l-acquisto-di-ausili-tecnici-e-informatici",
};
const ENTRATE_AREA = {
  label: "Agenzia delle Entrate · agevolazioni per le persone con disabilità",
  url: "https://www.agenziaentrate.gov.it/portale/aree-tematiche/agevolazioni-disabili",
};
const SALUTE_ESENZIONI = {
  label: "Ministero della Salute · esenzioni per invalidità",
  url: "http://www.nsis.salute.gov.it/portale/temi/p2_6.jsp?area=esenzioni&id=1014&lingua=italiano&menu=vuoto",
};

/** Ha già risposto alle tre domande da cui dipende quasi tutto? */
export function completo(v: Verbale): boolean {
  return !!v.legge104 && !!v.invalidita && !!v.eta;
}

/** Valuta il bonus per la Liguria. Per gli altri non diamo un parere: "da verificare". */
function esitoBadanti(v: Verbale): { esito: Esito; nota: string } {
  const problemi: string[] = [];
  const dubbi: string[] = [];
  if (v.eta === "minore") problemi.push("il bonus badanti è per persone maggiorenni");
  if (v.struttura === "si") problemi.push("non si può essere in una struttura residenziale");
  if (v.isee === "oltre") problemi.push("l'ISEE sociosanitario deve essere fino a 35.000 euro");
  else if (v.isee === "f50" || v.isee === "f65") problemi.push("per il bonus badanti l'ISEE deve essere fino a 35.000 euro");
  else if (!v.isee || v.isee === "nonso") dubbi.push("serve l'ISEE sociosanitario (fino a 35.000 euro)");
  const sanitari = v.invalidita === "100" || v.legge104 === "art3c1" || v.legge104 === "art3c3";
  if (!sanitari) problemi.push("serve invalidità al 100% oppure Legge 104 art. 3 comma 1 o 3");
  if (problemi.length > 0) {
    return { esito: "verificare", nota: `Dai tuoi dati: ${problemi.join("; ")}. Controlla con l'ente.` };
  }
  if (dubbi.length > 0) {
    return { esito: "verificare", nota: `I requisiti sanitari risultano dal verbale. Manca: ${dubbi.join("; ")}.` };
  }
  return {
    esito: "probabile",
    nota: "Dal verbale e dall'ISEE sembra che tu rientri nei requisiti. Ricorda le incompatibilità: Vita Indipendente, Gravissima disabilità, Dopo di Noi.",
  };
}

function daBonus(v: Verbale, b: Bonus): Diritto {
  let esito: Esito = "verificare";
  let nota = "";
  if (b.id === "liguria-bonus-badanti-2026") {
    const r = esitoBadanti(v);
    esito = r.esito;
    nota = r.nota;
  }
  const chiuso = b.stato === "chiuso";
  return {
    id: `bonus-${b.id}`,
    area: "Servizi e bonus",
    titolo: b.titolo,
    esito: chiuso ? "verificare" : esito,
    cosa: [nota, b.quando ?? "", chiuso ? "La finestra per le domande risulta chiusa." : ""].filter(Boolean).join(" "),
    comeSiChiede: b.comeSiChiede,
    fonte: b.fonte,
    bonusId: b.id,
  };
}

export function calcola(v: Verbale): Diritto[] {
  const out: Diritto[] = [];
  const grave = v.legge104 === "art3c3";
  const tot = v.invalidita === "100";
  const sopra45 = v.invalidita === "da46a99" || tot;

  // ---------------------------------------------------------------- SOLDI
  if (tot && v.eta === "adulto") {
    out.push({
      id: "pensione-inabilita",
      area: "Altro",
      titolo: "Pensione di inabilità",
      esito: "probabile",
      cosa: "Assegno mensile per chi ha l'invalidità civile al 100%. C'è un limite di reddito personale: controllalo sulla scheda INPS.",
      comeSiChiede: "Domanda all'INPS, online o con un patronato (gratuito).",
      fonte: INPS_INABILITA,
    });
  } else if (tot && v.eta === "minore") {
    out.push({
      id: "minori-prestazioni",
      area: "Altro",
      titolo: "Prestazioni per i minori con invalidità",
      esito: "verificare",
      cosa: "Per i minori le prestazioni sono diverse da quelle degli adulti (per esempio l'indennità di frequenza o di accompagnamento). Chiedi quali spettano.",
      comeSiChiede: "INPS o patronato: gratuito.",
      fonte: INPS_ACCOMP,
    });
  } else if (tot && v.eta === "over67") {
    out.push({
      id: "over67",
      area: "Altro",
      titolo: "Prestazioni dopo i 67 anni",
      esito: "verificare",
      cosa: "Dopo l'età pensionabile le regole economiche cambiano (per esempio assegno sociale). Chiedi cosa vale nel tuo caso.",
      comeSiChiede: "INPS o patronato: gratuito.",
      fonte: INPS_INABILITA,
    });
  }

  if (v.accompagnamento === "si") {
    out.push({
      id: "accompagnamento-si",
      area: "Altro",
      titolo: "Indennità di accompagnamento",
      esito: "probabile",
      cosa: "Il verbale la riconosce. Controlla all'INPS che sia stata attivata: non parte da sola.",
      comeSiChiede: "INPS o patronato: gratuito.",
      fonte: INPS_ACCOMP,
    });
  } else if (v.accompagnamento === "no" && (tot || grave)) {
    out.push({
      id: "accompagnamento-no",
      area: "Altro",
      titolo: "Indennità di accompagnamento",
      esito: "non-risulta",
      cosa: "Non risulta dal verbale e non è automatica con il 100%. Spetta quando non si cammina senza aiuto o serve assistenza continua. Se pensi sia il tuo caso, fatti consigliare da un patronato.",
      comeSiChiede: "Patronato (gratuito) o INPS.",
      fonte: INPS_ACCOMP,
    });
  }

  // --------------------------------------------------------------- LAVORO
  if (grave) {
    out.push({
      id: "permessi-104",
      area: "Lavoro",
      titolo: "Permessi della Legge 104",
      esito: "probabile",
      cosa: "Se lavori, fino a 3 giorni al mese di permesso retribuito. Spettano anche al familiare che ti assiste, a certe condizioni. Per i minori ci sono regole specifiche per i genitori.",
      comeSiChiede: "Domanda all'INPS fatta da chi usa i permessi (la persona con disabilità o il familiare che lavora e assiste), poi comunicazione al datore di lavoro: la lettera è pronta qui sotto. Il patronato aiuta.",
      fonte: INPS_104,
      letteraId: "permessi-104",
    });
    out.push({
      id: "congedo-straordinario",
      area: "Lavoro",
      titolo: "Congedo straordinario per il familiare",
      esito: "verificare",
      cosa: "Un familiare che assiste può avere un congedo retribuito per un periodo limitato della vita lavorativa. Dipende da parentela e convivenza.",
      comeSiChiede: "Domanda all'INPS tramite il familiare che lo usa.",
      fonte: INPS_CONGEDO,
    });
  }
  if (sopra45 && v.eta === "adulto") {
    out.push({
      id: "collocamento-mirato",
      area: "Lavoro",
      titolo: "Collocamento mirato",
      esito: "probabile",
      cosa: "Con invalidità superiore al 45% si può chiedere l'iscrizione alle liste per l'inserimento lavorativo mirato.",
      comeSiChiede: "Centro per l'impiego della tua zona, con il verbale.",
    });
  }

  // --------------------------------------------------------------- SALUTE
  if (tot) {
    out.push({
      id: "esenzione-ticket",
      area: "Salute",
      titolo: "Esenzione dal ticket sanitario",
      esito: "probabile",
      cosa: "Con l'invalidità al 100% di solito si ha l'esenzione dalla partecipazione alla spesa sanitaria. Il codice dipende dal tuo caso (di solito C01 o C02).",
      comeSiChiede: "ASL, con il verbale. Il codice va registrato sulla tessera sanitaria.",
      fonte: SALUTE_ESENZIONI,
    });
  } else if (v.invalidita === "da46a99") {
    out.push({
      id: "esenzione-parziale",
      area: "Salute",
      titolo: "Esenzioni sanitarie",
      esito: "verificare",
      cosa: "A seconda della percentuale ci possono essere esenzioni parziali. Chiedi all'ASL cosa spetta con il tuo verbale.",
      comeSiChiede: "ASL, con il verbale.",
      fonte: SALUTE_ESENZIONI,
    });
  }
  if (sopra45 || grave) {
    out.push({
      id: "ausili",
      area: "Salute",
      titolo: "Protesi, ortesi e ausili dal servizio sanitario",
      esito: "verificare",
      cosa: "Il servizio sanitario può fornire ausili e protesi in base alla prescrizione dello specialista. Gli ausili che servono dipendono dalla tua condizione.",
      comeSiChiede: "Specialista che prescrive, poi ufficio ausili della tua ASL.",
    });
  }

  // ---------------------------------------------------------- FISCO E AUTO
  if (grave || tot) {
    out.push({
      id: "iva-ausili",
      area: "Fisco e auto",
      titolo: "IVA ridotta su ausili e sussidi tecnici",
      esito: "verificare",
      cosa: "Per l'acquisto di ausili e sussidi tecnici o informatici si può avere l'IVA al 4%, con la documentazione richiesta.",
      comeSiChiede: "Al momento dell'acquisto, con verbale e prescrizione. Chiedi al venditore o a un CAF.",
      fonte: ENTRATE_IVA,
    });
    out.push({
      id: "auto",
      area: "Fisco e auto",
      titolo: "Agevolazioni su auto e contrassegno",
      esito: "verificare",
      cosa: "IVA ridotta sull'auto, esenzione del bollo e contrassegno per il parcheggio esistono solo se il verbale indica certe condizioni (per esempio ridotta capacità di movimento). Non sono automatiche.",
      comeSiChiede: "Concessionario o CAF per l'auto, Polizia locale del Comune per il contrassegno.",
      fonte: ENTRATE_AREA,
    });
  }

  // ------------------------------------------------------ SERVIZI E BONUS
  const { locali, regionali } = bonusDelComune();
  [...locali, ...regionali].forEach((b) => out.push(daBonus(v, b)));
  out.push({
    id: "servizi-comune",
    area: "Servizi e bonus",
    titolo: "Servizi sociali del Comune e dell'Ambito",
    esito: "verificare",
    cosa: "Assistenza a casa, trasporto, centri diurni e progetto personalizzato (PAI) dipendono dal Comune e dalla valutazione dell'équipe.",
    comeSiChiede: "Sportello sociale del tuo Comune o Ambito sociale.",
  });

  const ordine: Record<Esito, number> = { probabile: 0, verificare: 1, "non-risulta": 2 };
  return out.sort((a, b) => ordine[a.esito] - ordine[b.esito]);
}
