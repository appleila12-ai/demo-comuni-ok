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
    perChi:
      "Bonus badanti: maggiorenni residenti in Liguria, non ricoverati in strutture residenziali, con ISEE sociosanitario fino a 35.000 euro, con invalidità civile al 100% o Legge 104 (art. 3 comma 1 o 3), oppure persone sopra i 95 anni. Non si può avere Vita Indipendente, Gravissima disabilità o Dopo di Noi. Prestazioni integrate per la gravissima disabilità: nessun limite di età, ISEE fino a 50.000 euro (65.000 per i minori), PAI dell'unità di valutazione e presenza nella lista d'attesa della gravissima disabilità. Bonus baby sitter: figli fino a 15 anni (18 se con disabilità), ISEE fino a 35.000 euro.",
    cosa:
      "Bonus badanti: 600 euro al mese, oppure 250 euro al mese se si riceve già il Fondo Grave Disabilità. Prestazioni integrate per la gravissima disabilità: fino a 1.200 euro al mese, per chi non riceve il bonus badanti. Bonus baby sitter: 350 euro al mese. Gli importi possono essere ridotti dall'INPS se si ricevono benefici simili.",
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
  {
    id: "sicilia-bonus-caregiver-2026",
    regione: "Sicilia",
    titolo: "Bonus per il caregiver familiare (2026)",
    perChi:
      "Chi assiste in famiglia una persona con disabilità grave o gravissima.",
    cosa:
      "Contributo economico per il ruolo di cura. La Regione ha assegnato ai Distretti socio-sanitari 2.035.212,87 euro (65% per chi assiste persone con disabilità grave, 35% per la gravissima). L'importo per la singola persona non è scritto nella fonte.",
    stato: "da-verificare",
    quando: "Notizia del 16/07/2026. La fonte non indica scadenze.",
    comeSiChiede:
      "Il contributo è pagato dai Distretti socio-sanitari \"secondo le procedure previste\", che la fonte non descrive: chiedi al Distretto del tuo Comune se e come presentare domanda.",
    fonte: {
      label: "Regione Siciliana · fondi caregiver familiari",
      url: "https://www.regione.sicilia.it/la-regione-informa/politiche-sociali-2-milioni-caregiver-familiari-albano-rafforziamo-sostegno",
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
    id: "palermo-amat-agevolazioni",
    regione: "Sicilia",
    comuni: ["palermo"],
    titolo: "Abbonamento AMAT agevolato per persone con disabilità",
    perChi:
      "Persone con disabilità con ISEE fino a 10.440 euro. Le due notizie che abbiamo letto indicano soglie di invalidità diverse (65% e 67%).",
    cosa:
      "Abbonamento gratuito per chi rientra nei requisiti. Sopra la soglia ISEE si può comprare l'abbonamento annuale a 90 euro, valido su tutte le linee.",
    stato: "da-verificare",
    quando:
      "Misura sperimentale iniziata il 1 aprile 2026 e prorogata fino al 31 dicembre 2026 (notizie del 1 e 2 ottobre 2026). Non è chiaro cosa succede da gennaio.",
    comeSiChiede:
      "Le notizie non dicono dove e come fare domanda: chiedi ad AMAT o ai Servizi Sociali del Comune (centralino 091 7401111).",
    fonte: {
      label: "Balarm · abbonamenti bus gratuiti per disabili (2 ottobre 2026)",
      url: "https://www.balarm.it/news/abbonamenti-del-bus-gratuiti-per-disabili-ma-c-e-una-scadenza-e-polemica-a-palermo-170195",
    },
    verificatoIl: "08/10/2026",
    nota: "Fonte: stampa locale. Non abbiamo trovato la pagina ufficiale di AMAT o del Comune: da confermare.",
  },
  {
    id: "palermo-asacom",
    regione: "Sicilia",
    comuni: ["palermo"],
    titolo: "ASACOM: assistenza all'autonomia e alla comunicazione a scuola",
    perChi:
      "Minori con disabilità che frequentano le scuole statali del primo ciclo del Comune di Palermo. I requisiti non sono scritti nella pagina che abbiamo letto.",
    cosa:
      "Servizio comunale di assistenza all'autonomia e alla comunicazione, con graduatorie per i profili A, B e C.",
    stato: "attivo",
    quando:
      "Finestra straordinaria per nuovi inserimenti in coda alle graduatorie, aperta in modo permanente (avviso del 15/09/2026). Convocazioni anno scolastico 2026/27: profili A e B il 12/10/2026, profilo C il 13/10/2026.",
    comeSiChiede:
      "La pagina non spiega come presentare la domanda: leggi l'avviso sul sito del Comune o chiama il centralino 091 7401111 (U.O. Assistenza Specialistica).",
    fonte: {
      label: "Comune di Palermo · avviso ASACOM (7 ottobre 2026)",
      url: "https://www.comune.palermo.it/novita/avviso-di-apertura-permanente-della-finestra-straordinaria-per-nuovi-inserimenti-in-coda-alle-graduatorie-triennali-vigenti-profilo-a-b-c-servizio-di-assistenza-allautonomia-e-alla-comunicazione-as-4/",
    },
    verificatoIl: "08/10/2026",
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
