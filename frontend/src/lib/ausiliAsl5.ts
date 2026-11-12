// Ausili, protesi e ortesi: parte locale dell'ASL 5 Spezzino.
// Fonte unica: risposta scritta dell'URP dell'ASL 5 (ATS Liguria, Area Sociosanitaria Locale 5),
// ricevuta a novembre 2026 alla richiesta inviata il 30/10/2026. Qui non c'è nulla che non sia
// scritto in quella risposta, più la pagina «Fornitura di ausili e protesi» del sito dell'ASL 5
// (indirizzo esatto verificato il 12/11/2026, data di aggiornamento della pagina non indicata).
// L'URP non ha risposto sul trasporto per visite e terapie.
// Da ricontrollare con l'ASL almeno una volta l'anno.

import { distrettoAsl5, type DistrettoAsl5 } from "@/src/lib/esenzioneAsl5";

export const FONTE_AUSILI_ASL5 =
  "Risposta scritta dell'Ufficio Relazioni con il Pubblico dell'ASL 5 Spezzino (novembre 2026). I moduli sono nella sezione «Fornitura Ausili e Protesi» del sito dell'ASL 5.";

/** Pagina ufficiale dell'ASL 5 sulla fornitura di ausili e protesi (aperta e letta il 12/11/2026; nessuna data di aggiornamento indicata). */
export const PAGINA_AUSILI_ASL5 = {
  label: "Apri la pagina dell'ASL 5: Fornitura di ausili e protesi",
  url: "https://www.asl5.liguria.it/PerilCittadino/Serviziterritoriali/CurePrimarieeAttivit%C3%A0Distrettuali/Fornituraausilieprotesi.aspx",
  nota: "Sul sito dell'ASL 5 la pagina distingue gli invalidi civili, di guerra o per servizio e i minori con patologie che possono determinare invalidità dagli invalidi per lavoro, per i quali richiama la fornitura INAIL.",
};

/** Indirizzo dedicato a cui inviare la prescrizione, in base al distretto del Comune */
export function mailProtesicaAsl5(nomeComune: string): { mail: string; zona: string } {
  const d: DistrettoAsl5 = distrettoAsl5(nomeComune);
  return d === 19
    ? { mail: "protesicasz@asl5.liguria.it", zona: "Sarzana e Val di Magra" }
    : { mail: "protesica.sp@asl5.liguria.it", zona: "La Spezia, Val di Vara e Riviera" };
}

export const COME_SI_PRESENTA_AUSILI_ASL5 =
  "La prescrizione, scritta sul modulo apposito (allegato 5 al DPCM 12 gennaio 2017), va inviata per mail al servizio protesica dell'ASL 5, all'indirizzo dedicato alla tua zona.";

export const SENZA_MAIL_AUSILI_ASL5 =
  "Se non riesci a inviare la mail, puoi andare di persona in uno di questi sportelli dei Distretti socio sanitari, senza bisogno di appuntamento. Gli orari sono quelli comunicati dall'ASL a novembre 2026 e possono cambiare: prima di andare chiedi conferma all'Ufficio Relazioni con il Pubblico dell'ASL 5:";

export const SPORTELLI_AUSILI_ASL5: { luogo: string; quando: string }[] = [
  { luogo: "La Spezia · Via Leopardi 71", quando: "lunedì, mercoledì e venerdì dalle 8:00 alle 12:30" },
  { luogo: "Sarzana · Ospedale S. Bartolomeo, quarto piano", quando: "martedì, mercoledì e giovedì dalle 8:00 alle 12:30" },
  {
    luogo: "Ceparana · Poliambulatorio ASL",
    quando: "ogni quindici giorni, il mercoledì dalle 8:30 alle 12:00 (secondo il calendario della farmacia)",
  },
  {
    luogo: "Levanto · Ospedale S. Nicolò",
    quando: "ogni quindici giorni, il lunedì dalle 8:30 alle 12:00 (secondo il calendario della farmacia)",
  },
];

export const DOCUMENTI_AUSILI_ASL5 = [
  "Prescrizione medica sul modulo apposito (allegato 5 al DPCM 12 gennaio 2017), del medico specialista di una struttura pubblica. Per alcuni ausili basta la ricetta rossa del medico di famiglia, completa in tutti i campi, con il codice identificativo ISO e quanto serve per quell'ausilio, compresi i campi che vanno firmati per presa visione e impegno dal paziente o dal caregiver",
  "Dati del paziente o del caregiver: indirizzo di consegna, telefono ed email",
  "Copia della tessera sanitaria",
  "Copia del riconoscimento di invalidità per la patologia collegata all'ausilio, oppure la domanda di invalidità in corso per una patologia grave",
  "Se la richiesta non la presenta la persona interessata: delega",
  "Se vuoi ricevere per mail l'autorizzazione o l'esito della pratica: liberatoria",
  "Eventuali altre certificazioni sanitarie",
];

export const TEMPI_AUSILI_ASL5 = [
  "Per legge l'ASL ha al massimo 20 giorni per valutare la richiesta; di solito la valuta in due o tre giorni",
  "La ditta fornitrice di solito consegna entro una settimana dall'autorizzazione",
];

export const RIPARAZIONE_AUSILI_ASL5 =
  "Per riparare un ausilio del «banca protesi» serve la richiesta del medico curante sul ricettario rosso, da presentare nelle stesse modalità.";

// Trasporto per visite, esami e terapie: l'URP dell'ASL 5 ha risposto sugli ausili ma non su questo
// (domande 7, 8 e 9 della richiesta del 30/10/2026). Finché non risponde, in app si dice chiaramente che
// il dato manca, perché, e a chi si può chiedere. Contatti dell'URP: firma della sua risposta scritta.
export const TRASPORTO_ASL5_MANCA = {
  titolo: "Trasporto per visite, esami e terapie: mancano ancora i dati",
  testo:
    "Abbiamo chiesto all'ASL 5, per iscritto, il 30 ottobre 2026, se organizza o autorizza il trasporto (per esempio per dialisi o riabilitazione), per chi, a chi si chiede e con quanto anticipo. L'ASL ha risposto sugli ausili ma non ancora sul trasporto. Per ora non pubblichiamo nulla che non sia confermato per iscritto: appena arriva la risposta la scriviamo qui.",
  invito:
    "Se questa informazione serve anche a te, puoi chiederla direttamente all'Ufficio Relazioni con il Pubblico dell'ASL 5: più richieste arrivano, più è chiaro che serve. Se ricevi una risposta, scrivici a info@tutelapp.it e la aggiungiamo.",
  mail: "urp@asl5.liguria.it",
  telefono: "0187 533915",
  telefonoVerde: "800 240 042",
};
