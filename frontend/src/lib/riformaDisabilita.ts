// Riforma della disabilità (D.Lgs. 62/2024): regole per il cittadino, solo da fonti INPS lette il 17/11/2026.
// Ogni voce ha la sua fonte (URL) e la data di verifica. Quello che non è stato verificato NON è qui:
// l'elenco è in docs/registro/claude-2026-11-17-riforma-2027.md.

/** Data di verifica di tutte le voci di questo file. */
export const RIFORMA_VERIFICATA_IL = "17/11/2026";

/** Dal 1° gennaio 2027 la riforma vale su tutto il territorio nazionale (scheda INPS «Certificato medico introduttivo – Invalidità civile»). */
export const RIFORMA_IN_TUTTA_ITALIA_DAL = "2027-01-01";

/** Nota fissa per i punti che non si possono dare per certi. */
export const NOTA_CONTROLLA = "controlla sul sito INPS o chiedi al patronato prima di agire";

/**
 * True dal 1° gennaio 2027: da quel giorno la nuova procedura vale in tutte le province.
 * Prima di quella data resta com'è: vale solo nelle province della sperimentazione (vedi percorso.ts).
 */
export function riformaInTuttaItalia(oggi: Date = new Date()): boolean {
  return oggi.getTime() >= new Date(`${RIFORMA_IN_TUTTA_ITALIA_DAL}T00:00:00`).getTime();
}

export type VoceRiforma = {
  id: string;
  titolo: string;
  testo: string;
  /** Se presente, il punto non è del tutto certo: va mostrata questa nota in fondo. */
  nota?: string;
  fonte: { etichetta: string; url: string };
};

const SCHEDA_INPS =
  "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.certificato-medico-introduttivo---invalidit--civile.html";
const NOTIZIA_MEDICI_INPS =
  "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.riforma-disabilit-indicazioni-operative-per-medici-certificatori.html";
const MESSAGGIO_4465 =
  "https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2024/12/Circolare_14751/Allegati/15738_Messaggio-numero-4465-del-27-12-2024.pdf";
const NOTIZIA_OVER70_INPS =
  "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.05.disabilit-over-70-le-novit-dal-1-giugno.html";

/** Cosa sapere prima di partire: chi, come, tempi, documenti, quando partono le prestazioni. */
export const VOCI_RIFORMA: VoceRiforma[] = [
  {
    id: "chi",
    titolo: "Chi compila il certificato",
    testo:
      "Lo compila e lo invia online all'INPS un medico abilitato: il medico di famiglia, il pediatra di libera scelta, uno specialista ambulatoriale del Servizio sanitario, un medico di ASL, ospedale, IRCCS o centro per le malattie rare, un medico di struttura privata accreditata, un libero professionista o un medico in pensione iscritto all'albo.",
    fonte: { etichetta: "INPS, notizia del 24/02/2026", url: NOTIZIA_MEDICI_INPS },
  },
  {
    id: "dopo",
    titolo: "Dopo il certificato",
    testo:
      "Dove la riforma è già attiva, il certificato avvia da solo la pratica e non serve un'altra domanda. Dove non è ancora attiva, dopo il certificato serve anche la domanda all'INPS entro 90 giorni. Dal 1° gennaio 2027 la nuova procedura vale in tutta Italia.",
    nota: NOTA_CONTROLLA,
    fonte: { etichetta: "INPS, scheda «Certificato medico introduttivo – Invalidità civile»", url: SCHEDA_INPS },
  },
  {
    id: "tempi",
    titolo: "Quanto ci mette",
    testo:
      "Dal giorno in cui il medico trasmette il certificato, l'INPS ha 15 giorni per le malattie oncologiche, 30 giorni per i minorenni e 90 giorni negli altri casi. Se la commissione chiede altri documenti, i tempi si fermano per 60 giorni, che si possono prorogare di altri 60 se lo chiedi tu.",
    nota: NOTA_CONTROLLA,
    fonte: { etichetta: "INPS, messaggio n. 4465 del 27/12/2024", url: MESSAGGIO_4465 },
  },
  {
    id: "documenti",
    titolo: "Altri documenti medici",
    testo:
      "Se dopo l'invio hai altri documenti sanitari, si possono aggiungere al certificato fino a 7 giorni prima della data fissata per la visita. Chiedi al medico che ha inviato il certificato di farlo.",
    nota: NOTA_CONTROLLA,
    fonte: { etichetta: "INPS, messaggio n. 4465 del 27/12/2024", url: MESSAGGIO_4465 },
  },
  {
    id: "decorrenza",
    titolo: "Da quando partono gli importi",
    testo:
      "Se la visita riconosce una prestazione in denaro, gli importi partono dal mese successivo a quello in cui il medico ha trasmesso il certificato.",
    nota: NOTA_CONTROLLA,
    fonte: { etichetta: "INPS, messaggio n. 4465 del 27/12/2024", url: MESSAGGIO_4465 },
  },
];

/** Caso a parte: chi ha 70 anni o più. Regola in vigore dal 1° giugno 2026 nelle province della sperimentazione. */
export const CASO_OVER_70: VoceRiforma = {
  id: "over70",
  titolo: "Se hai 70 anni o più",
  testo:
    "Se hai almeno una malattia cronica e una condizione clinica che riduce piano piano le funzioni del corpo, con il rischio di perdere autonomia nelle attività di ogni giorno, la pratica segue la procedura di prima della riforma: il medico invia il certificato e tu presenti anche la domanda all'INPS entro 90 giorni. Il medico ti dice se rientri in questo caso. Se non rientri, vale la procedura nuova. L'INPS non indica fino a quando valga questa regola.",
  nota: NOTA_CONTROLLA,
  fonte: { etichetta: "INPS, notizia del 27/05/2026 (messaggio n. 1750)", url: NOTIZIA_OVER70_INPS },
};
