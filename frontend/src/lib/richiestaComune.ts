// Mail precompilata che il cittadino può inviare alla propria amministrazione
// per chiedere di mantenere e far crescere TutelApp nel suo Comune.
// Il Comune è quello già scelto nell'app: il testo si adatta da solo.
// Nessun dato del cittadino passa da TutelApp: si apre il suo programma di posta.

import type { ComuneConfig } from "@/src/config/comune";
import { DESTINATARI } from "@/src/config/comuni/destinatari";

export const CONTATTO_TUTELAPP = "info@tutelapp.it";
export const SITO_TUTELAPP = "www.tutelapp.it";
export const PAGINA_COMUNI = "https://www.tutelapp.it/per-i-comuni";
export const CANALE_YOUTUBE = "https://www.youtube.com/@TutelApp";

export type RichiestaComune = {
  /** Destinatario: email ordinaria del Comune, altrimenti PEC, altrimenti vuoto */
  a: string;
  /** In copia a TutelApp, così il Comune può rispondere a tutti */
  cc: string;
  oggetto: string;
  testo: string;
  /** Indirizzo non ancora verificato o mancante: il cittadino deve controllarlo */
  daControllare: boolean;
  /** L'indirizzo è una PEC: molte PEC rifiutano la posta normale */
  isPec: boolean;
};

export function costruisciRichiesta(c: ComuneConfig): RichiestaComune {
  const unione = c.tipo === "unione";
  const ilNostroEnte = unione ? "la nostra Unione" : "il nostro Comune";
  // Prima la mail dei Servizi Sociali in scheda, poi l'elenco dei destinatari, infine la PEC
  const elenco = DESTINATARI[c.slug];
  const a = (c.email || elenco?.email || c.pec || "").trim();

  const oggetto = unione
    ? "Chiediamo di mantenere e far crescere TutelApp nel nostro territorio"
    : `Chiediamo di mantenere e far crescere TutelApp a ${c.nomeBreve}`;

  const testo = [
    unione
      ? "Gentile Presidente, Gentile Assessore ai Servizi Sociali,"
      : "Gentile Sindaco, Gentile Assessore ai Servizi Sociali,",
    "",
    `sono un/una cittadino/a ${c.delEnte} e utilizzo TutelApp (${SITO_TUTELAPP}), l'app che aiuta le persone con disabilità e le loro famiglie a orientarsi tra diritti, agevolazioni e pratiche.`,
    "",
    "Per me è un aiuto concreto, e vorrei che continuasse a essere disponibile nel nostro territorio e che si arricchisse di nuovi argomenti, agevolazioni e informazioni sulla disabilità.",
    "",
    `Vi chiedo di valutare l'attivazione ufficiale di TutelApp per ${ilNostroEnte}, così da farla crescere insieme ai cittadini e non perdere l'accesso a questo servizio.`,
    "",
    unione
      ? "Chiedo cortesemente all'ufficio protocollo di inoltrare questa richiesta al Presidente e all'Assessore ai Servizi Sociali."
      : "Chiedo cortesemente all'ufficio protocollo di inoltrare questa richiesta al Sindaco e all'Assessore ai Servizi Sociali.",
    "",
    `Potete conoscere il progetto dai video sul canale YouTube: ${CANALE_YOUTUBE}`,
    "",
    `Per informazioni o per attivare il servizio, TutelApp si può contattare a ${CONTATTO_TUTELAPP} oppure dal modulo su ${PAGINA_COMUNI}`,
    "",
    "Grazie per l'attenzione e a disposizione per qualsiasi chiarimento.",
    "",
    "Cordiali saluti,",
    "[Nome e Cognome]",
  ].join("\n");

  return {
    a,
    cc: CONTATTO_TUTELAPP,
    oggetto,
    testo,
    daControllare: !a || !!c.daVerificare || (!c.email && !!elenco),
    isPec: !!a && ((!c.email && elenco?.tipo === "pec") || (!c.email && !elenco && !!c.pec)),
  };
}

/** Link `mailto:` con oggetto e testo già compilati (a capo compatibili con tutti i programmi di posta) */
export function linkMailto(r: RichiestaComune): string {
  const corpo = encodeURIComponent(r.testo.replace(/\n/g, "\r\n"));
  const parametri = [
    `cc=${encodeURIComponent(r.cc)}`,
    `subject=${encodeURIComponent(r.oggetto)}`,
    `body=${corpo}`,
  ].join("&");
  return `mailto:${encodeURIComponent(r.a).replace(/%40/g, "@")}?${parametri}`;
}
