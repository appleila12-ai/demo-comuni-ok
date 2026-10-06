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

import { comune } from "@/src/config/comune";

export type StatoBonus = "aperto" | "attivo" | "chiuso" | "da-verificare";

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
  "da-verificare": { etichetta: "Da confermare con l'ente", spiegazione: "Informazioni incomplete o non recenti" },
};

export const BONUS: Bonus[] = [
  // ------------------------------------------------------------------ LIGURIA
  {
    id: "liguria-bonus-badanti-2026",
    regione: "Liguria",
    titolo: "Bonus assistenti familiari (badanti) e prestazioni integrate per la gravissima disabilità, edizione 2026",
    perChi: "Cittadini privati. I requisiti (per esempio ISEE ed età) sono nella delibera della Giunta regionale n. 345 del 06/08/2026.",
    cosa: "Contributo regionale. Gli importi sono nella delibera n. 345/2026: leggili prima di fare domanda.",
    stato: "aperto",
    quando: "Domande dal 1 settembre 2026 fino alle ore 17.30 del 15 ottobre 2026, dal lunedì al venerdì dalle 8.30 alle 17.30. Finanziamento fino a esaurimento dei fondi.",
    comeSiChiede:
      "Solo online, con SPID o CIE, sul sistema Bandi online di Filse. Assistenza per la compilazione: infobandi@filse.it",
    fonte: {
      label: "Regione Liguria · Bandi e avvisi",
      url: "https://www.regione.liguria.it/homepage-bandi-e-avvisi/publiccompetition/4711:bonus-badanti-grave-disabilita-baby-sitter-2026.html",
    },
    verificatoIl: "06/10/2026",
    nota: "La scadenza è vicina. Nella stessa misura c'è anche il bonus baby sitter 2026.",
  },
  {
    id: "liguria-dopo-di-noi-2026",
    regione: "Liguria",
    titolo: "Dopo di Noi (fondi FSE+)",
    perChi:
      "Adulti da 18 a 65 anni con disabilità riconosciuta (Legge 104/1992 o nuova certificazione D.Lgs. 62/2024), non dovuta all'invecchiamento, che hanno perso il sostegno familiare o rischiano di perderlo.",
    cosa: "Interventi per il Dopo di Noi secondo il proprio progetto assistenziale (PAI). Priorità a chi è già stato valutato dall'UVM per il Dopo di Noi.",
    stato: "chiuso",
    quando: "Domande raccolte dal 1 maggio al 30 giugno 2026.",
    comeSiChiede: "Modulo all'Ambito Territoriale Sociale di riferimento, con documento d'identità.",
    fonte: {
      label: "Regione Liguria · informativa per i cittadini",
      url: "https://finale-ligure-api.municipiumapp.it/s3/2788/allegati/informativa-per-cittadini-dopo-di-noi-fse.pdf",
    },
    verificatoIl: "06/10/2026",
    nota: "Chiedi all'Ambito se il bando sarà riaperto.",
  },
  {
    id: "liguria-patenti-speciali",
    regione: "Liguria",
    titolo: "Contributo per le patenti speciali di guida",
    perChi: "Persone con disabilità residenti in Liguria.",
    cosa: "Contributo alle spese per conseguire o riclassificare la patente speciale. La Consulta regionale per l'Handicap segue l'istruttoria e il pagamento.",
    stato: "da-verificare",
    quando: "L'ultimo bando che abbiamo trovato è quello del 2024. Non sappiamo se ce n'è uno per il 2026.",
    comeSiChiede: "Vedi la pagina della Regione.",
    fonte: {
      label: "Regione Liguria · patenti speciali",
      url: "https://www.regione.liguria.it/homepage-welfare/cosa-cerchi/handicap-e-disabilita/contributi-patenti-guida-speciali-2024/publiccompetition/contributi-patenti-guida-speciali-2024.html",
    },
    verificatoIl: "06/10/2026",
  },
  {
    id: "liguria-barriere-architettoniche",
    regione: "Liguria",
    titolo: "Contributi per eliminare le barriere architettoniche in casa",
    perChi: "Persone con disabilità che vivono in un alloggio privato.",
    cosa: "Contributo per lavori che eliminano le barriere architettoniche. Non si cumula con altri contributi diretti per lo stesso intervento.",
    stato: "da-verificare",
    quando:
      "Secondo il vademecum del 2024 il Comune segnala le domande alla Regione entro il 30 giugno e la Regione fa la graduatoria entro il 15 settembre. Controlla le regole in vigore.",
    comeSiChiede: "La domanda si presenta al Comune di residenza.",
    fonte: {
      label: "Vademecum regionale (2024)",
      url: "https://www.comune.genova.it/sites/default/files/2024-02/guida_-_vademecum_domanda_di_contributo.pdf",
    },
    verificatoIl: "06/10/2026",
  },

  // ------------------------------------------- DISTRETTO SOCIOSANITARIO 18
  {
    id: "distretto18-gravissima-disabilita",
    regione: "Liguria",
    comuni: ["la-spezia", "lerici", "portovenere"],
    titolo: "Fondo regionale per la gravissima disabilità",
    perChi: "Persone con gravissima disabilità del Distretto sociosanitario 18 (La Spezia, Lerici, Porto Venere).",
    cosa: "Requisiti e importi non sono scritti nella scheda che abbiamo letto: chiedili all'ufficio.",
    stato: "da-verificare",
    comeSiChiede:
      "Servizi Sociosanitari, Via Fiume 207, La Spezia: il modulo di domanda si scarica dal sito del Comune della Spezia.",
    fonte: {
      label: "Comune della Spezia · Fondo gravissima disabilità",
      url: "https://www.comune.laspezia.it/amministrazione/documenti-e-dati/modulistica/servizi-socio-sanitari/fondo-regionale-per-la-gravissima-disabilita-domanda",
    },
    verificatoIl: "06/10/2026",
    nota: "La scheda sul sito è ferma al 03/07/2023.",
  },
];

/** Misure che valgono per il Comune attivo, prima quelle del suo territorio. */
export function bonusDelComune(): { locali: Bonus[]; regionali: Bonus[]; regione: string } {
  const regione = comune.regione;
  const deLaRegione = BONUS.filter((b) => b.regione === regione);
  const locali = deLaRegione.filter((b) => b.comuni?.includes(comune.slug));
  const regionali = deLaRegione.filter((b) => !b.comuni);
  const ordine: Record<StatoBonus, number> = { aperto: 0, attivo: 1, "da-verificare": 2, chiuso: 3 };
  const ordina = (l: Bonus[]) => [...l].sort((a, b) => ordine[a.stato] - ordine[b.stato]);
  return { locali: ordina(locali), regionali: ordina(regionali), regione };
}
