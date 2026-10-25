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
    id: "liguria-bonus-badanti-gravissima-2026",
    regione: "Liguria",
    titolo: "Bonus badanti, prestazioni per la gravissima disabilità e bonus baby sitter (edizione 2026)",
    perChi:
      "Privati cittadini residenti in Liguria. Requisiti, importi e soglie ISEE sono nella deliberazione della Giunta regionale n. 345 del 6 agosto 2026.",
    cosa:
      "Tre misure della Regione. Bonus assistenti familiari (badanti): 600 euro al mese per chi non riceve il fondo grave disabilità, 250 euro al mese per chi lo riceve già, con ISEE sociosanitario ordinario fino a 35.000 euro. Prestazioni integrate per la gravissima disabilità: fino a 1.200 euro al mese per chi non riceve il bonus badanti, con ISEE fino a 50.000 euro (65.000 per i minorenni). Bonus baby sitter: 350 euro al mese, per figli fino a 15 anni (18 con disabilità), ISEE fino a 35.000 euro.",
    stato: "chiuso",
    quando: "Domande dal 1 settembre 2026 alle ore 17.30 del 15 ottobre 2026. Finanziamento fino a esaurimento dei fondi.",
    comeSiChiede:
      "Solo online, con SPID o CIE, sul sistema Bandi on line di Filse. Assistenza informatica: infobandi@filse.it (lunedì–venerdì, 8.30–17.30).",
    fonte: {
      label: "Regione Liguria · Bonus badanti, gravissima disabilità e baby sitter 2026",
      url: "https://www.regione.liguria.it/homepage-bandi-e-avvisi/publiccompetition/4711:bonus-badanti-grave-disabilita-baby-sitter-2026.html",
    },
    verificatoIl: "25/10/2026",
    nota: "Importi dal comunicato della Giunta regionale \"Welfare, 7 milioni di euro per bonus badanti e baby sitter\". Pagina pubblicata dalla Regione il 10/08/2026. Il termine per le domande è scaduto: chiedi al Comune o al Distretto se ci saranno nuove aperture.",
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
    id: "castelnuovo-magra-teleassistenza-2026",
    regione: "Liguria",
    comuni: ["castelnuovo-magra"],
    titolo: "Servizio di teleassistenza (manifestazione di interesse 2026)",
    perChi: "Cittadini fragili, anziani e adulti in condizione di disabilità psicosociale residenti a Castelnuovo Magra.",
    cosa: "Accesso al servizio di teleassistenza del Comune. Il servizio è gratuito.",
    stato: "chiuso",
    quando: "Domande dall'11 settembre all'11 ottobre 2026.",
    comeSiChiede:
      "Si presentava il modulo allegato all'avviso via PEC (protocollo@pec.castelnuovomagra.com) oppure all'ufficio Servizi Sociali il lunedì e il giovedì dalle 9.00 alle 12.00. Informazioni: tel. 0187 693826, servizisociali@comune.castelnuovomagra.sp.it.",
    fonte: {
      label: "Comune di Castelnuovo Magra · Avviso per il servizio di teleassistenza",
      url: "https://www.comune.castelnuovomagra.sp.it/it-it/novita/avvisi/2026/sociale/avviso-manifestazione-di-interesse-per-l-accesso-al-servizio-di-teleassistenza-401297-1-42309aaecc84a1c52d4139832734d9de",
    },
    verificatoIl: "21/10/2026",
    nota: "Avviso pubblicato dal Comune l'11/09/2026. Il termine è scaduto: chiedi ai Servizi Sociali se sarà riaperto.",
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
    id: "vezzano-ligure-contributi-affitto-2026",
    regione: "Liguria",
    comuni: ["vezzano-ligure"],
    titolo: "Contributi per l'affitto pagato nel 2025 (bando comunale 2026)",
    perChi: "Chi ha pagato un affitto nel 2025 e rispetta i requisiti del bando del Comune di Vezzano Ligure.",
    cosa: "Un contributo a parziale rimborso del canone di locazione sostenuto nel 2025. Requisiti e importi sono nel bando sul sito del Comune.",
    stato: "chiuso",
    quando: "Domande dal 7 settembre al 10 ottobre 2026.",
    comeSiChiede:
      "Si presentava il modulo di domanda del bando, firmato e con i documenti richiesti, via PEC (protocollo.comunevezzanoligure@pec.it), via email (servizisociali@comune.vezzanoligure.sp.it), per raccomandata o a mano all'ufficio protocollo (Via Goito 2) o all'ufficio servizi sociali (Via Ruini, loc. Prati) entro il 10/10/2026. Informazioni: 0187 982520.",
    fonte: {
      label: "Comune di Vezzano Ligure · Bando comunale contributi affitto 2026",
      url: "https://www.comune.vezzanoligure.sp.it/novita/avvisi/novita_834.html",
    },
    verificatoIl: "22/10/2026",
    nota: "Il termine è scaduto: chiedi ai Servizi Sociali quando uscirà il prossimo bando.",
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

  // ---------------------------------------------------------------- LOMBARDIA
  {
    id: "lombardia-misura-b1-sostegno",
    regione: "Lombardia",
    titolo: "Misura B1: sostegno per la disabilità gravissima e le persone molto non autosufficienti",
    perChi:
      "Persone con disabilità con necessità di sostegno intensivo molto elevato e anziani non autosufficienti con alto bisogno assistenziale, residenti in Lombardia e assistiti a casa. Servono l'indennità di accompagnamento (o la non autosufficienza riconosciuta) e un ISEE sociosanitario fino a 50.000 euro (ISEE ordinario fino a 65.000 euro per i minori). La condizione va attestata da un medico specialista.",
    cosa:
      "Misura Sostegno: contributo mensile da 565 a 1.300 euro, secondo la situazione (per esempio 565 euro con il solo caregiver familiare, 900 euro con un assistente regolarmente assunto da 10 ore a settimana, 1.200 euro a tempo pieno). Assegno di autonomia: fino a 800 euro al mese per chi ha un assistente personale e non ha un caregiver familiare. Misura Servizi: interventi sociali e voucher sociosanitari, senza importi scritti nella fonte.",
    stato: "aperto",
    quando:
      "Nuove domande dal 22 giugno al 31 ottobre 2026. Chi è già in carico non deve ripresentare la domanda e prosegue fino al 31 dicembre 2026.",
    comeSiChiede:
      "Si presenta l'istanza di valutazione alla propria ASST, con le sue modalità. Per informazioni: ATS e ASST di competenza o lo Spazio Disabilità di Regione Lombardia (sportello informativo gratuito).",
    fonte: {
      label: "Regione Lombardia · Misura Sostegno (ex B1)",
      url: "https://www.regione.lombardia.it/politiche-sociali-e-abitative/disabilita/politiche-e-misure-per-la-disabilita/sostegno-per-la-disabilit--gravissima-misura-sostegno",
    },
    verificatoIl: "08/10/2026",
    nota: "Gli importi vengono dalla pagina di Lombardia Facile dedicata alla DGR 6320 del 15/06/2026; la pagina della Regione non scrive gli importi.",
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
    stato: "attivo",
    comeSiChiede:
      "Si compila il modulo \"Gravissima disabilità\" e si allegano: verbale dell'indennità di accompagnamento, ISEE e documento d'identità di chi firma. La domanda si consegna al PUA o allo Sportello unico del tuo Distretto ASL3 (trovi telefoni e orari nella scheda del Comune, alla voce Distretti). Poi c'è la valutazione dell'UVM.",
    fonte: {
      label: "ASL3 · Fondo gravissima disabilità e SLA",
      url: "https://www.asl3.liguria.it/territorio/servizi/disabili/4981-fondo-gravissima-disabilita-sla.html",
    },
    verificatoIl: "25/10/2026",
    nota: "La pagina ASL3 è aggiornata al 23/10/2024. Che la misura sia attiva nel 2026, con gli stessi requisiti, lo conferma la scheda \"Gravissime disabilità (GD) – Servizio attivo\" del Comune di Rapallo (Distretto 14), controllata il 25/10/2026.",
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
    stato: "attivo",
    comeSiChiede:
      "Si compila la domanda indicando come si vuole usare il contributo, con la certificazione della Legge 104, l'ISEE sociosanitario e il documento d'identità. La domanda si consegna al PUA o allo Sportello unico del tuo Distretto ASL3. Prima c'è una valutazione sanitaria sull'autodeterminazione, poi l'équipe (assistente sociale e medico ASL) scrive il progetto con te.",
    fonte: {
      label: "ASL3 · Progetti di vita indipendente",
      url: "https://www.asl3.liguria.it/territorio/servizi/disabili/1102-progetti-di-vita-indipendente.html",
    },
    verificatoIl: "25/10/2026",
    nota: "La pagina ASL3 è aggiornata al 23/10/2024. Importo, ISEE e stato \"attivo\" sono confermati nel 2026 dalle schede dei Comuni di Sarzana e di Rapallo, controllate a ottobre 2026.",
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
    quando: "Secondo la pagina del Comune, per l'anno scolastico in corso le domande si sono aperte a maggio 2025. Si può presentare domanda anche durante l'anno scolastico: viene valutata nelle commissioni successive.",
    comeSiChiede:
      "Domanda online sul sito del Comune con SPID, CIE o CNS. Allegati: la richiesta del medico (modulo 1 \"Relazione sanitaria\") e la copia del certificato di disabilità (Legge 104/1992) valido; se è scaduto, anche la ricevuta INPS della domanda di revisione. Informazioni: numero verde 800 809 009 (lunedì–venerdì 8:30–13:00), trasportoscolastico@comune.genova.it.",
    fonte: {
      label: "Comune di Genova · Trasporto scolastico per alunni con disabilità",
      url: "https://www.comune.genova.it/servizi/educazione-e-formazione/trasporto-scolastico-alunni-con-disabilita",
    },
    verificatoIl: "25/10/2026",
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
  {
    id: "milano-misura-sostegno-servizi",
    regione: "Lombardia",
    comuni: ["milano"],
    titolo: "Misura Sostegno e Misura Servizi 2026/2027 (ex Misura B2) del Comune di Milano",
    perChi:
      "Persone con disabilità con necessità di sostegno intensivo elevato (fino a 70 anni) e anziani non autosufficienti a basso bisogno assistenziale, residenti a Milano e assistiti a casa. Servono indennità di accompagnamento o handicap grave (art. 3 comma 3, L. 104/92) e un ISEE 2026: sociosanitario fino a 25.000 euro per i maggiorenni, ordinario fino a 40.000 euro per i minorenni.",
    cosa:
      "Con un caregiver familiare: 100 euro al mese e interventi di assistenza diretta fino a 3.600 euro l'anno, se previsti dal Progetto Individuale. Con un assistente personale regolarmente assunto: rimborso fino a 800 euro al mese. Assegno di autonomia: fino a 800 euro al mese per i progetti di vita indipendente senza caregiver.",
    stato: "chiuso",
    quando:
      "Domande dal 1 al 31 luglio 2026. Erogazione dal 1 luglio 2026 al 31 dicembre 2027, ogni due mesi dopo la rendicontazione. Il contributo dipende dal parere dell'UVM e dal Progetto Individuale.",
    comeSiChiede:
      "La finestra del 2026 è chiusa. Per sapere se e quando riapre, chiama il Contact Center del Comune: 02 884 53399 o 02 884 66443 (lun-ven 8:30-16:00). Lo scorso avviso si compilava solo online con SPID o CIE, con aiuto presso gli Spazi WeMi.",
    fonte: {
      label: "Comune di Milano · Avviso pubblico Misura Sostegno e Misura Servizi 2026/2027",
      url: "https://servizi.comune.milano.it/documents/20121/362217649/AVVISO+PUBBLICO+MISURA+SOSTEGNO+MISURA+SERVIZI_2026-2027_1.pdf/bd410ee3-b1ed-e464-12f4-eac9dcee14cc?t=1783001184027",
    },
    verificatoIl: "08/10/2026",
    nota: "Il testo dell'avviso ha date diverse per il supporto agli Spazi WeMi: controlla con il Comune.",
  },

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

  // ------------------------------------------------------------------ TOSCANA
  {
    id: "toscana-vita-indipendente-fse",
    regione: "Toscana",
    titolo: "Progetti di vita indipendente e inclusione per adulti con disabilità grave (FSE+ 2021-2027)",
    perChi:
      "Persone adulte con disabilità e certificazione di gravità (Legge 104/1992), residenti nella Zona distretto del progetto, in grado di esprimere la propria volontà, anche con supporto, e di gestire le proprie scelte. I requisiti vanno posseduti alla data della domanda.",
    cosa:
      "Finanziamento di progetti individuali di vita indipendente. La pagina non scrive quanto spetta a ogni persona: indica 46 milioni di euro per il triennio 2024-2026 per i progetti ammessi e, per il 2026-2027, quasi 6,25 milioni assegnati dalla Giunta il 27/04/2026 per ridurre le liste d'attesa e avviare nuovi progetti dal 1° luglio 2026.",
    stato: "chiuso",
    quando:
      "Il bando per gli enti era aperto dall'1 al 16 agosto 2024. Nuovi progetti dal 1° luglio 2026 con i fondi assegnati ad aprile 2026. La pagina non indica una nuova finestra per le domande.",
    comeSiChiede:
      "Le domande alla Regione sono presentate dalle Società della Salute o, dove non ci sono, dal soggetto indicato dalla Conferenza zonale dei sindaci: un progetto per Zona distretto. La pagina non spiega come accede il cittadino: chiedi al servizio sociale del tuo Comune o alla Società della Salute della tua zona.",
    fonte: {
      label: "Regione Toscana · Disabilità e grave limitazione dell'autonomia: finanziamenti per vita indipendente e inclusione",
      url: "https://www.regione.toscana.it/it/-/disabilit%C3%A0-e-grave-limitazione-dell-autonomia-finanziamenti-per-sostenere-vita-indipendente-e-inclusione",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina della Regione aggiornata il 22/06/2026. Importo per persona, requisiti ISEE e tempi vanno chiesti alla Società della Salute.",
  },

  // ------------------------------------------------------------------- PUGLIA
  {
    id: "puglia-patto-di-cura-2025-2026",
    regione: "Puglia",
    titolo: "Patto di cura 2025-2026 per la disabilità gravissima",
    perChi:
      "Persone con disabilità gravissima non autosufficienti, residenti in Puglia, con almeno una delle condizioni cliniche gravi previste dal Decreto FNA 2016. ISEE valido non superiore a 60.000 euro per gli adulti e a 80.000 euro per i minorenni.",
    cosa:
      "Un contributo mensile per 16 mesi, da settembre 2025 a dicembre 2026: 1.200 euro al mese se si assume direttamente l'assistente familiare, 1.250 euro al mese se si assume tramite agenzie di lavoro autorizzate e iscritte all'albo nazionale. Vale solo con un'assunzione regolare di personale di assistenza. Non è cumulabile con Sostegno Familiare né con il precedente Patto di Cura 2023-24.",
    stato: "chiuso",
    quando:
      "Domande dalle ore 12:00 del 4 agosto 2025 alle ore 12:00 del 19 settembre 2025. Il contributo copre i mesi fino a dicembre 2026.",
    comeSiChiede:
      "La domanda si presentava solo online sulla piattaforma regionale Puglia Sociale (accesso con SPID): https://pugliasociale-spid.regione.puglia.it. Documenti e criteri di selezione sono nell'Avviso completo, non nel comunicato.",
    fonte: {
      label: "Regione Puglia · Al via il Patto di cura 2025-2026 (comunicato del 28/07/2025)",
      url: "https://press.regione.puglia.it/-/al-via-il-patto-di-cura-2025-2026.-stanziati-20-milioni-di-euro-per-le-persone-con-disabilit%C3%80-gravissima",
    },
    verificatoIl: "15/10/2026",
    nota: "La finestra per le domande è finita. Se hai già presentato domanda, chiedi al tuo Ambito sociale a che punto è. Per nuovi avvisi controlla la piattaforma Puglia Sociale.",
  },

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
      "Persone con disabilità non autosufficienti (o over 65 non autosufficienti) residenti in Piemonte, già valutate dall'UMVD o dall'UVG con punteggio sociale non inferiore a 7. ISEE ordinario o sociosanitario in corso di validità non superiore a 40.000 euro; non è ammesso l'ISEE corrente o con anomalie.",
    cosa:
      "Contributo di 700 euro al mese per 12 mesi, che può arrivare a 24 in base alle domande ammissibili, da spendere per un servizio di assistenza familiare: contratto di lavoro domestico (almeno livello CS), contratto con cooperativa o agenzia, o incarico a un assistente libero professionista. Servono almeno 30 giorni di servizio e 16 ore a settimana documentate. Erogazione trimestrale.",
    stato: "aperto",
    quando:
      "Domande dalle 0:00 del 14 settembre 2026 alle 23:59 del 2 novembre 2026. Assegnato fino a esaurimento delle risorse: prima il punteggio sociale più alto, poi l'ISEE più basso, poi l'ordine di presentazione.",
    comeSiChiede:
      "Online su piemontetu.it o sceltasociale.it con SPID, CIE o CNS. La domanda la presenta un delegato (genitore, tutore, coniuge, parente di primo grado, amministratore di sostegno) che non può essere l'assistente. Allegati obbligatori: verbale di valutazione UVG/UMVD (o lettera con il punteggio) e contratto o incarico: senza, la domanda non è ammessa.",
    fonte: {
      label: "Regione Piemonte · Scelta sociale, Buono domiciliarità 2026-2027",
      url: "https://www.regione.piemonte.it/web/temi/diritti-politiche-sociali/politiche-sociali/scelta-sociale-buono-per-domiciliarita-2026-2027",
    },
    verificatoIl: "14/10/2026",
    nota: "Non è compatibile con alcune misure, tra cui gli assegni di cura e l'accoglienza definitiva in strutture residenziali: leggi l'avviso. La pagina non dice quanti Buoni ci sono. Scade fra pochi giorni.",
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
  {
    id: "distretto-ceramico-mobilita-casa-lavoro",
    regione: "Emilia-Romagna",
    comuni: ["sassuolo"],
    titolo: "Contributi per la mobilità casa-lavoro delle persone con disabilità",
    perChi:
      "Persone con disabilità inserite al lavoro che hanno difficoltà negli spostamenti casa-lavoro; il coniuge, i parenti e gli affini fino al terzo grado che le accompagnano, anche non conviventi; le associazioni di volontariato e i colleghi di lavoro che le aiutano negli spostamenti.",
    cosa:
      "Contributo forfettario per gli spostamenti casa-lavoro. L'importo non è scritto nella pagina dell'avviso.",
    stato: "chiuso",
    quando:
      "L'ultimo avviso (anno 2025) era aperto fino alle ore 13:00 del 30/06/2026. Non sappiamo se sarà riproposto.",
    comeSiChiede:
      "Per le modalità chiedi all'Ufficio di Piano dell'Unione dei Comuni del Distretto Ceramico: la pagina non le riporta.",
    fonte: {
      label: "Unione dei Comuni del Distretto Ceramico · Avviso contributi mobilità casa-lavoro",
      url: "https://www.distrettoceramico.mo.it/novita/avvisi/contributi-a-sostegno-della-mobilita-casa-lavoro-per-persone-che-lavoro-con-disabilita-anno-2024",
    },
    verificatoIl: "21/10/2026",
    nota: "Pubblicato il 04/06/2026. È una misura annuale: chiedi se uscirà un nuovo avviso.",
  },

  // ----------------------------------------------------------------- CAMPANIA
  {
    id: "campania-assegni-di-cura",
    regione: "Campania",
    comuni: ["pozzuoli"],
    titolo: "Assegni di cura per disabilità gravissima o grave (Ambito N12: Pozzuoli, Bacoli, Monte di Procida)",
    perChi:
      "Residenti nei tre Comuni dell'Ambito con disabilità gravissima (decreto ministeriale del 26 settembre 2016) o grave (allegato 3 del DPCM 159/2013), con indennità di accompagnamento e certificazione della Legge 104/1992 (art. 3, comma 3). Esclusi chi vive in strutture residenziali e chi ha un ISEE sociosanitario sopra 50.000 euro (65.000 per i minori).",
    cosa:
      "Contributo mensile per l'assistenza a casa: fino a 1.200 euro per la disabilità gravissima e fino a 600 euro per la grave. Serve a pagare assistenti familiari, educatori o operatori professionali. Almeno il 70% delle spese va documentato con ricevute, fatture, contratti o bonifici.",
    stato: "chiuso",
    quando: "Avviso pubblicato il 17/07/2025, con scadenza il 03/10/2025.",
    comeSiChiede:
      "La domanda si presentava agli uffici dei Servizi Sociali del Comune di residenza, con i documenti dell'avviso, sia per le nuove richieste sia per la proroga. Per un nuovo avviso chiedi ai Servizi Sociali del tuo Comune.",
    fonte: {
      label: "Ambito Sociale N12 (capofila Pozzuoli) · avviso del 17/07/2025",
      url: "https://cr.campania.it/garante-disabili/images/Articoli_2025/17_Luglio_Nuovi_assegni_di_cura_per_disabili_gravi.pdf",
    },
    verificatoIl: "21/10/2026",
    nota: "Vale solo per l'Ambito N12. Non abbiamo una pagina della Regione con gli importi per gli altri Ambiti.",
  },

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
  {
    id: "fiumicino-caregiver-2026",
    regione: "Lazio",
    comuni: ["fiumicino"],
    titolo: "Sostegno ai caregiver familiari riconosciuti (2026)",
    perChi:
      "Caregiver familiari residenti a Fiumicino, già riconosciuti e con la Card del Caregiver, iscritti nel registro comunale dello Sportello Caregiver. Per i contributi in denaro l'ISEE ordinario del caregiver non deve superare 24.000 euro. Le risorse vanno prima ai caregiver di persone con disabilità gravissima.",
    cosa:
      "Budget personale una tantum fino a 1.000 euro, senza rendicontazione. Supporto psicologico: 50 euro a seduta, fino a 500 euro l'anno. Sollievo indiretto: rimborso di 500 euro l'anno (600 euro per disabilità complessa ad alta intensità). Poi sollievo a domicilio con personale del Comune, gruppi di mutuo aiuto e giornate informative, senza importi.",
    stato: "chiuso",
    quando:
      "Domande entro l'8 giugno 2026. Spese ammesse dal 1 gennaio al 31 dicembre 2026. Controlla con il Comune se e quando riapre.",
    comeSiChiede:
      "Modulo \"Modello A\" al PUA (Via Coni Zugna 173, o Casa della Salute di Palidoro), al Segretariato Sociale (Piazza Dalla Chiesa 10) o sul sito del Comune. Si consegna all'Ufficio Protocollo (mar e gio 15:00-17:00) o per PEC a protocollo.generale@pec.comune.fiumicino.rm.it.",
    fonte: {
      label: "Comune di Fiumicino · Avviso caregiver familiari 2026",
      url: "https://fiumicino-api.municipiumapp.it/s3/2808/allegati/caregiver.pdf",
    },
    verificatoIl: "09/10/2026",
  },
  {
    id: "fiumicino-autismo-0-21-2026",
    regione: "Lazio",
    comuni: ["fiumicino"],
    titolo: "Autismo 0-21 anni: contributo per la socializzazione (2026)",
    perChi:
      "Persone con diagnosi di disturbo dello spettro autistico, minori o fino a 21 anni, residenti a Fiumicino. Hanno la precedenza le famiglie con più di un figlio nello spettro e ISEE fino a 8.000 euro.",
    cosa:
      "Contributo da 500 a 700 euro al mese per 4 mesi, per percorsi di assistenza alla socializzazione. L'importo dipende dai servizi già attivi e dalla situazione economica della famiglia. Spese ammesse dal 1 giugno al 30 settembre 2026.",
    stato: "chiuso",
    quando:
      "Domande entro il 3 agosto 2026. Rendicontazione delle spese entro il 31 ottobre 2026.",
    comeSiChiede:
      "Modulo \"Modello A\" con documento, diagnosi e ISEE: si ritira al PUA, al Segretariato Sociale o sul sito del Comune e si consegna all'Ufficio Protocollo (mar e gio 15:00-17:00) o per PEC. Segue la valutazione con ASL Roma 3 e UVMD.",
    fonte: {
      label: "Comune di Fiumicino · Avviso autismo 0-21 anni 2026",
      url: "https://fiumicino-api.municipiumapp.it/s3/2808/allegati/avviso-pubblico-autismo-0-21_signed.pdf",
    },
    verificatoIl: "09/10/2026",
  },
  {
    id: "fiumicino-autismo-famiglie-0-12",
    regione: "Lazio",
    comuni: ["fiumicino"],
    titolo: "Autismo fino a 12 anni: rimborso degli interventi alle famiglie",
    perChi:
      "Famiglie residenti a Fiumicino con minori fino a 12 anni con diagnosi di disturbo dello spettro autistico. Precedenza ai nuclei con più di un figlio nello spettro e ISEE fino a 8.000 euro.",
    cosa:
      "Contributo alle spese per interventi come ABA, EIBI, ESDM e TEACCH, svolti da professionisti dell'Elenco regionale e concordati con l'Azienda Sanitaria. Cresce al calare dell'ISEE, fino a 5.000 euro l'anno per bambino. Spese del 2026.",
    stato: "chiuso",
    quando:
      "Domande entro il 30 settembre 2026. Rendicontazione entro il 31 gennaio 2027, graduatoria definitiva entro il 31 marzo 2027.",
    comeSiChiede:
      "Modulo \"Modello A\" con documento, diagnosi e ISEE: si ritira al PUA, al Segretariato Sociale o sul sito del Comune e si consegna all'Ufficio Protocollo (mar e gio 15:00-17:00) o per PEC.",
    fonte: {
      label: "Comune di Fiumicino · Avviso famiglie autismo 0-12 anni 2026",
      url: "https://fiumicino-api.municipiumapp.it/s3/2808/allegati/avviso-pubblico-sostegno-famiglie-0-12-2026_signed.pdf",
    },
    verificatoIl: "09/10/2026",
    nota: "L'avviso scrive sia \"annualità 2025\" sia spese del 2026: conferma con il Comune.",
  },
  {
    id: "fiumicino-vita-indipendente",
    regione: "Lazio",
    comuni: ["fiumicino"],
    titolo: "Vita indipendente: progetto personalizzato con budget",
    perChi:
      "Persone con disabilità grave (art. 3 comma 3, L. 104/92) tra 18 e 64 anni, residenti a Fiumicino, in grado di decidere per sé direttamente o tramite un rappresentante. Serve l'ISEE ordinario. La domanda può essere fatta anche da un familiare.",
    cosa:
      "Un progetto personalizzato di circa 12 mesi per l'inclusione sociale e lavorativa, con un budget deciso dall'équipe di valutazione (UVMD). L'avviso non scrive gli importi. Si finanzia in ordine di graduatoria, nei limiti delle risorse.",
    stato: "chiuso",
    quando:
      "L'ultimo avviso che abbiamo letto scadeva il 25 gennaio 2025 (fondi regionali 2024). Non sappiamo se ce n'è uno più recente.",
    comeSiChiede:
      "Chiedi al Segretariato Sociale se è aperto un nuovo avviso. Il modulo e la consegna funzionano come per gli altri avvisi del Comune (PUA, Segretariato, Ufficio Protocollo il mar e gio 15:00-17:00, o PEC).",
    fonte: {
      label: "Comune di Fiumicino · Avviso Vita Indipendente",
      url: "https://fiumicino-api.municipiumapp.it/s3/2808/allegati/avviso_pubblico_vita_indipendente_signed-1.pdf",
    },
    verificatoIl: "09/10/2026",
    nota: "Avviso del 2024-2025: serve verificare se è stato sostituito da uno nuovo.",
  },
  {
    id: "fiumicino-centro-diurno-adulti",
    regione: "Lazio",
    comuni: ["fiumicino"],
    titolo: "Centro diurno per adulti con disabilità grave",
    perChi:
      "Adulti con disabilità grave tra 18 e 64 anni, residenti a Fiumicino, con certificazione L. 104/92 (art. 3 commi 1 e 3) e ISEE in corso di validità. La domanda può essere fatta dalla persona, da un familiare o da chi la rappresenta.",
    cosa:
      "Raccolta delle domande per una graduatoria di accesso a un centro diurno semiresidenziale: attività creative, educative e aggregative, lavoro su autonomia e socializzazione, sollievo per la famiglia. L'avviso non scrive costi o importi.",
    stato: "chiuso",
    quando:
      "Domande entro il 9 febbraio 2026. I progetti si concludono il 31 dicembre 2027. Chi è idoneo ma non trova posto resta in lista d'attesa.",
    comeSiChiede:
      "Valutazione dell'équipe UVMD e graduatoria di Distretto. Per chiedere se si riapre: Segretariato Sociale, tel. 06 65210245.",
    fonte: {
      label: "Comune di Fiumicino · Avviso centro diurno adulti con disabilità",
      url: "https://fiumicino-api.municipiumapp.it/s3/2808/allegati/avviso_pubblico_centro_diurno_fiumicino_signed.pdf",
    },
    verificatoIl: "09/10/2026",
  },

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
    quando: "Domande entro le ore 23:59 del 2 novembre 2026.",
    comeSiChiede:
      "Solo online sulla piattaforma bandisocialescuola.comune.laquila.it. Per chi ha difficoltà c'è il Punto Digitale del Servizio Politiche Sociali (via Filomusi Guelfi 6/c, Villa Gioia), lo Sportello Unificato e il Servizio Sociale – Ufficio Disabilità, non autosufficienza e integrazione socio-sanitaria.",
    fonte: {
      label: "ReteAbruzzo · Comune dell'Aquila, avviso caregiver familiari (10/10/2026)",
      url: "https://www.reteabruzzo.com/2026/10/10/comune-dellaquila-avviso-per-sostegno-ai-caregiver-familiari-domande-fino-al-2-novembre/",
    },
    verificatoIl: "12/10/2026",
    nota: "La scadenza è vicina. L'elenco dei documenti non è nella fonte: leggi l'avviso sul sito del Comune.",
  },

  // ------------------------------------------------------------- OCRE (AQ)
  {
    id: "ocre-vita-indipendente-2026",
    regione: "Abruzzo",
    comuni: ["ocre"],
    titolo: "Vita indipendente 2026: avviso dell'Ambito distrettuale n. 5 \"Montagne Aquilane\"",
    perChi:
      "Persone con disabilità che hanno bisogno di sostegno elevato o molto elevato, nei Comuni dell'Ambito n. 5 (secondo la fonte che abbiamo letto, Ocre è incluso). Il progetto lo presenta la persona direttamente, con il modulo regionale e tutti i documenti richiesti.",
    cosa:
      "Progetti per rafforzare o mantenere l'autonomia, sostenere le attività quotidiane e permettere di restare a casa propria, evitando l'istituzionalizzazione. L'articolo non scrive gli importi.",
    stato: "chiuso",
    quando: "Domande entro il 31 gennaio 2026 (annualità 2026). Non sappiamo se è stato aperto un nuovo avviso.",
    comeSiChiede:
      "In busta chiusa con la dicitura \"Progetto Vita Indipendente. Annualità 2026\" all'Ufficio Protocollo dell'Ambito, via Cavour 43/a, Barisciano (AQ), oppure per PEC a unionecomunimontagnaaquilana@pec.it.",
    fonte: {
      label: "L'Aquila Blog · Vita indipendente 2026, avviso Montagna Aquilana (10/01/2026)",
      url: "https://www.laquilablog.it/vita-indipendente-2026-montagna-aquilana/",
    },
    verificatoIl: "12/10/2026",
    nota: "Fonte giornalistica: chiedi al Comune di Ocre o all'Unione Montana se è previsto un nuovo avviso.",
  },

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
    id: "monza-misura-b2-2025-2026",
    regione: "Lombardia",
    comuni: ["monza"],
    titolo: "Misura B2 per la disabilità grave e la non autosufficienza (Ambito di Monza)",
    perChi:
      "Persone in condizione di disabilità grave o di non autosufficienza (Misura B2 della Regione Lombardia, delibera XII/3719 del 30/12/2024).",
    cosa:
      "Interventi di sostegno alla persona e alla famiglia per restare al proprio domicilio, dopo una valutazione multidimensionale e con un progetto individuale. La pagina non scrive gli importi.",
    stato: "chiuso",
    quando:
      "Domande dal 1 aprile 2025, fino a esaurimento delle risorse e comunque non oltre il 31 marzo 2026.",
    comeSiChiede:
      "Si compila il modello scaricabile dal sito dell'Ambito Territoriale di Monza con i documenti richiesti, e lo si invia a misurab2@comune.monza.it oppure lo si consegna agli Uffici Territoriali su appuntamento. Per l'appuntamento, chi accede ai servizi sociali per la prima volta chiama il Segretariato Sociale: 334 6311270.",
    fonte: {
      label: "Comune di Monza · Misure in favore di persone con disabilità grave",
      url: "https://www.comune.monza.it/it/servizi/misure-in-favore-di-persone-con-disabilita-grave",
    },
    verificatoIl: "19/10/2026",
    nota: "Pagina del Comune aggiornata il 09/04/2025. La finestra è scaduta il 31/03/2026: chiedi al Segretariato Sociale se è prevista una nuova edizione. Vedi anche la scheda regionale della Misura B2.",
  },
  // ------------------------------------------------------------------ CATANIA

  // ------------------------------------------------------------------ MESSINA
  {
    id: "messina-d26-bonus-caregiver-2026",
    regione: "Sicilia",
    comuni: ["messina"],
    titolo: "Bonus caregiver del Distretto socio-sanitario D26 (Messina capofila)",
    perChi:
      "Caregiver familiari che assistono una persona con disabilità grave o gravissima: coniuge, parte di unione civile, convivente di fatto, familiare o affine entro il secondo grado (terzo grado nei casi previsti dalla Legge 104/1992). La persona assistita deve risiedere in un Comune del Distretto D26.",
    cosa:
      "Contributo una tantum. Fondi complessivi di 108.447,99 euro (70.491,19 per la disabilità grave, 37.956,80 per la gravissima). L'importo per ciascuno si decide dopo l'istruttoria, in base alle domande ammesse e alle risorse.",
    stato: "chiuso",
    quando:
      "Avviso pubblicato il 3 settembre 2026. Piattaforma attiva dal 7 settembre, scadenza alle 23:59 del 15 ottobre 2026.",
    comeSiChiede:
      "Solo online, con le proprie credenziali, dallo Sportello Telematico del Comune di Messina. Domande presentate in altro modo non sono considerate.",
    fonte: {
      label: "Comune di Messina · Distretto D26, avviso Bonus caregiver",
      url: "https://www.comune.messina.it/it/news/distretto-socio-sanitario-d26-pubblicato-lavviso-per-il-bonus-caregiver-a-sostegno-delle-famiglie",
    },
    verificatoIl: "19/10/2026",
    nota: "Scadenza passata: chiedi al Servizio Politiche Sociali se è prevista una riapertura.",
  },
  {
    id: "messina-tessere-ast-disabilita-2026-27",
    regione: "Sicilia",
    comuni: ["messina"],
    titolo: "Tessere AST per il trasporto extraurbano gratuito (anno 2026-2027)",
    perChi:
      "Persone con disabilità. La pagina non indica requisiti né documenti.",
    cosa: "Tessere A.S.T. (Azienda Siciliana Trasporti) per il trasporto extraurbano gratuito, relative all'anno 2026-2027.",
    stato: "attivo",
    quando: "Tessere disponibili per il ritiro dal 25 marzo 2026 (avviso del 24 marzo 2026).",
    comeSiChiede:
      "Si ritirano al front-office del Servizio Politiche Sociali, Piazza della Repubblica 40 (Palazzo Satellite). Orari: lunedì–venerdì 9–12, martedì e giovedì anche 15–16:30.",
    fonte: {
      label: "Comune di Messina · avviso ritiro tessere A.S.T. 2026-2027",
      url: "https://comune.messina.it/it/news/avviso-per-il-ritiro-delle-tessere-a-s-t-per-soggetti-con-disabilita-anno-2026-2027",
    },
    verificatoIl: "19/10/2026",
  },

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
    id: "reggio-emilia-mobilita-casa-lavoro-2026",
    regione: "Emilia-Romagna",
    comuni: ["reggio-emilia"],
    titolo: "Contributo per la mobilità casa-lavoro di lavoratori con disabilità (anno 2025)",
    perChi:
      "Persone con disabilità (L. 68/99) residenti nel Distretto di Reggio Emilia, che nel 2025 hanno lavorato (lo smartworking non vale) e hanno bisogno di un trasporto personalizzato per andare al lavoro.",
    cosa:
      "Contributo forfetario sulle spese di trasporto casa-lavoro. Non valgono trasporto pubblico di linea, assicurazione, manutenzione e adattamenti del proprio mezzo. Una sola domanda a persona. Importo non scritto nella pagina.",
    stato: "chiuso",
    quando:
      "Domande online dal 24 marzo 2026 fino al 30 aprile 2026, ore 13:00. Erogazione in unica soluzione prevista entro settembre 2026.",
    comeSiChiede:
      "Online con SPID (il Comune offre LepidaID gratuita), caricando certificato di disabilità, attestazione del datore di lavoro e ricevute delle spese.",
    fonte: {
      label: "Comune di Reggio Emilia · avviso mobilità casa-lavoro lavoratori con disabilità",
      url: "https://www.comune.reggioemilia.it/amministrazione/documenti-e-dati/avvisi-e-bandi/altri-bandi/avviso-pubblico-mobilita-casa-lavoro-per-lavoratori-disabili",
    },
    verificatoIl: "19/10/2026",
    nota: "Bando scaduto: chiedi al Comune se verrà riproposto.",
  },
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
  {
    id: "cagliari-sussidio-disturbo-psichico-2026",
    regione: "Sardegna",
    comuni: ["cagliari"],
    titolo: "Sussidio economico per persone con disturbo psichico (L.R. 20/1997), anno 2026",
    perChi: "Persone con disturbo psichico in condizione di bisogno economico. La domanda può essere fatta dalla persona o da chi la rappresenta. Requisiti e ISEE sono nell'avviso, non nella pagina.",
    cosa: "Sussidio economico ai sensi della Legge Regionale 20/1997. Importi non scritti nella pagina.",
    stato: "chiuso",
    quando: "Domande dal 26 febbraio 2026 al 30 giugno 2026.",
    comeSiChiede:
      "Solo sulla piattaforma online del Comune, con SPID o CIE. Aiuto per attivare SPID presso il Servizio Politiche Sociali e della Casa (via Sauro 19), su prenotazione scrivendo a spid.sociale@comune.cagliari.it.",
    fonte: {
      label: "Comune di Cagliari · Avviso sussidio per il sostegno alle persone con disturbo psichico, anno 2026",
      url: "https://www.comune.cagliari.it/portale/page/it/avviso_per_la_concessione_di_un_sussidio_economico_per_il_sostegno_alle_persone_con_disturbo_psichico__lr_201997__anno_2026?contentId=DOC251985",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina aggiornata il 29/06/2026. Chiedi al Comune se l'avviso 2027 verrà riaperto e quando.",
  },

  // ------------------------------------------------------------------- PRATO
  {
    id: "prato-attivita-estive-disabilita-grave-2026",
    regione: "Toscana",
    comuni: ["prato"],
    titolo: "Contributo per attività estive di minori e giovani con disabilità grave (2026)",
    perChi: "Minori e giovani fino a 21 anni non compiuti con disabilità grave. Il bando non elenca requisiti specifici; le graduatorie sono divise per ISEE (soglia 29.999 €) e per età.",
    cosa:
      "Contributo economico per partecipare a iniziative estive di socializzazione scelte dalle famiglie. Importi non scritti nell'avviso. Contributi fino a esaurimento delle risorse, con priorità alla graduatoria 1.",
    stato: "chiuso",
    quando:
      "Domande dal 15 giugno al 15 luglio 2026. Graduatorie pubblicate il 28/09/2026; rendicontazione delle spese entro il 30 settembre.",
    comeSiChiede:
      "Domanda consegnata a mano al Protocollo generale, via PEC o con raccomandata A/R. Informazioni: numero verde PUA 800 922 912.",
    fonte: {
      label: "Comune di Prato · Contributi a minori e giovani con grave disabilità per iniziative estive 2026",
      url: "https://www2.comune.prato.it/avvisi/2026/archivio17_21_910.html",
    },
    verificatoIl: "20/10/2026",
    nota: "Avviso del 15/06/2026, aggiornato il 28/09/2026. Chiedi al Comune quando uscirà quello del 2027.",
  },

  // ------------------------------------------------------------------- UMBRIA
  {
    id: "umbria-per-tutti-grave-disabilita",
    regione: "Umbria",
    titolo: "Umbria per tutti: contributo per l'assistenza alle persone con grave disabilità",
    perChi:
      "Persone residenti in Umbria, minorenni, adulte e anziane, con grave disabilità riconosciuta (Legge 104/1992, art. 3, comma 3). ISEE sociosanitario ristretto fino a 50.000 € per adulti e anziani; ISEE per minorenni fino a 65.000 €.",
    cosa:
      "Sostegno di 300 € al mese, fino a 1.200 € per il 2025, da usare per assistenti personali, servizi di assistenza domiciliare, canone di locazione per progetti di vita autonoma o ausili tecnologici.",
    stato: "chiuso",
    quando: "Il termine per presentare domanda è stato prorogato al 31 marzo 2026.",
    comeSiChiede:
      "Solo per PEC, agli indirizzi indicati negli avvisi pubblici delle USL Umbria 1 e Umbria 2, dove trovi anche moduli e criteri.",
    fonte: {
      label: "Regione Umbria · Umbria per tutti: prorogato al 31 marzo 2026 il termine per il contributo",
      url: "https://insalute.regione.umbria.it/novita/umbria-per-tutti-prorogato-al-31-marzo-2026-il-termine-per-presentare-domanda-di-contributo-per-lassistenza-alle-persone-con-grave-disabilita/",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina del 30/12/2025 (delibera regionale 1024/2025). Chiedi alla tua USL se il contributo sarà riproposto per il 2026.",
  },

  // ----------------------------------------------------------------- SARDEGNA

  // ------------------------------------------------------------------- MARCHE

  // ----------------------------------------------------------------- CALABRIA

  // ------------------------------------------------------------ COMUNI (20/10/2026)
  {
    id: "firenze-soggiorni-vacanza-disabilita-2026",
    regione: "Toscana",
    comuni: ["firenze"],
    titolo: "Contributi per soggiorni vacanza di persone con disabilità (2026)",
    perChi: "Persone con disabilità. Requisiti e ISEE non sono scritti nella pagina: sono nell'avviso pubblico.",
    cosa:
      "Contributo, totale o parziale, a rimborso delle spese di un soggiorno vacanza di massimo 15 giorni (14 notti) fatto tra giugno e settembre 2026, pagato in un'unica soluzione. Importi non scritti nella pagina.",
    stato: "chiuso",
    quando: "Servizio online aperto per 15 giorni dal 5 ottobre 2026.",
    comeSiChiede: "Online, con il servizio dedicato, allegando i giustificativi delle spese sostenute.",
    fonte: {
      label: "Comune di Firenze · Contributi soggiorni vacanza persone con disabilità 2026",
      url: "https://sociale.comune.fi.it/dalle-redazioni/contributi-soggiorni-vacanza-persone-con-disabilita-2026-pubblicazione-avviso",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina del 13/08/2026. Chiedi al Comune quando uscirà l'avviso 2027.",
  },
  {
    id: "bari-contributo-mobilita-disabili",
    regione: "Puglia",
    comuni: ["bari"],
    titolo: "Contributo per la mobilità di persone con disabilità",
    perChi:
      "Residenti a Bari con disabilità psichica, fisica o non vedenti, con invalidità totale al 100% e difficoltà motorie, oppure invalidità totale con indennità di accompagnamento, oppure cecità o ipovedenza grave (Legge 138/2001). Anche anziani con ridotta capacità motoria in particolare necessità.",
    cosa:
      "Contributo su carta prepagata personale per spostamenti verso lavoro, scuola, università, terapie e attività ricreative previste da un progetto personalizzato; per altre esigenze fino a 120 € al mese. Il trasporto scolastico dell'obbligo è escluso. Una quota, calcolata sull'ISEE, viene detratta dall'importo.",
    stato: "chiuso",
    quando:
      "Si chiede con avviso pubblico, pubblicato circa ogni tre anni. L'ultimo è scaduto alle 12:00 del 26 maggio 2025; la graduatoria vale tre anni.",
    comeSiChiede:
      "Con l'avviso pubblico, online (SPID o CIE) o allo sportello di segretariato sociale in Largo Ignazio Chiurlia 27, con documento, verbale di invalidità e ISEE/DSU.",
    fonte: {
      label: "Comune di Bari · Contributo per la mobilità per diversamente abili",
      url: "https://www.comune.bari.it/-/presentare-domanda-contributo-mobilita-diversamente-abili",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina aggiornata il 01/02/2026. Chiedi al Comune la data del prossimo avviso e se sei già in graduatoria.",
  },
  {
    id: "bari-casa-dopo-di-noi",
    regione: "Puglia",
    comuni: ["bari"],
    titolo: "Casa Dopo di Noi (Legge 112/2016): contributi per residenzialità e autonomia",
    perChi:
      "Residenti a Bari, 18-64 anni, con disabilità grave certificata (Legge 104/1992, art. 3, comma 3). Altri requisiti sono nell'art. 2 dell'avviso. Priorità, tra l'altro, a ISEE sociosanitario sotto i 3.000 €, età dai 50 anni, assenza dei genitori o genitori non più in grado di assistere.",
    cosa:
      "Supporto alla residenzialità: copertura della retta in gruppi appartamento o cohousing (pagata all'ente del Terzo Settore, entro la tariffa della DGR 3032/2010, per un anno). Accompagnamento all'autonomia: fino a 4.800 € l'anno, più 600 € per consulenza e sostegno alle relazioni familiari.",
    stato: "chiuso",
    quando: "Avviso pubblicato il 20 febbraio 2025, domande entro il 20 marzo 2025. Pagina aggiornata il 09/12/2025: non indica riaperture.",
    comeSiChiede:
      "Per PEC a serviziallapersona.comunebari@pec.rupar.puglia.it con i moduli dell'avviso, indicando nell'oggetto \"Manifestazione di interesse per l'erogazione di contributi Casa Dopo di Noi - CUP J99G23000440002\".",
    fonte: {
      label: "Comune di Bari · Avviso Casa Dopo di Noi",
      url: "https://www.comune.bari.it/-/in-pubblicazione-l-avviso-di-manifestazione-di-interesse-per-l-erogazione-di-contributi-casa-dopo-di-noi",
    },
    verificatoIl: "21/10/2026",
    nota: "L'avviso è scaduto: chiedi ai Servizi alla Persona del Comune se sarà riproposto.",
  },
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
    id: "perugia-autismo-socializzazione-2025",
    regione: "Umbria",
    comuni: ["perugia"],
    titolo: "Contributi per percorsi di socializzazione di persone con autismo (2025)",
    perChi:
      "Minori fino a 18 anni e giovani fino a 21 con autismo e disabilità accertata (Legge 104/1992 art. 3 comma 3), e adulti 18-65 anni con autismo ad alto funzionamento (livelli 1 e 2), residenti a Perugia, Corciano o Torgiano (Zona Sociale 2). ISEE ordinario del nucleo fino a 35.000 €.",
    cosa:
      "Fino a 800 € per percorsi di assistenza alla socializzazione (minori e giovani fino a 21 anni) e fino a 500 € per percorsi di socializzazione in ambiente esterno.",
    stato: "chiuso",
    quando:
      "Domande dal 09/06/2025 al 08/07/2025 (ore 12:00). Graduatoria approvata con determinazione n. 2629 del 07/10/2025.",
    comeSiChiede:
      "Solo online, con SPID o CIE. Informazioni: sostegno.disabilita@comune.perugia.it, tel. 075 5773838 (lun e mer 15-17). Aiuto alla compilazione con DIGIPASS su appuntamento, cell. 335 1200989.",
    fonte: {
      label: "Comune di Perugia · Contributi per percorsi di assistenza alla socializzazione (autismo)",
      url: "https://servizipg.comune.perugia.it/SocializzazioneAutismo2025/prehome",
    },
    verificatoIl: "20/10/2026",
    nota: "Edizione 2025, chiusa. Chiedi al Comune se ci sarà un nuovo avviso.",
  },
  {
    id: "perugia-vita-indipendente-2026",
    regione: "Umbria",
    comuni: ["perugia"],
    titolo: "Progetti personali di Vita Indipendente (FSE+ 2021-2027), graduatorie 2026",
    perChi:
      "Persone con disabilità. La pagina non descrive i requisiti di ammissione.",
    cosa:
      "Progetti personali di vita indipendente finanziati dal Programma Regionale FSE+ 2021-2027. La pagina non scrive gli importi.",
    stato: "chiuso",
    quando:
      "Graduatorie approvate il 22/07/2026 (determinazione n. 2309) e rettificate il 05/08/2026 (n. 2463). Scadenze di un nuovo avviso non indicate.",
    comeSiChiede:
      "La pagina non spiega come fare domanda. Per verificare la tua posizione ci sono gli elenchi degli ammessi e non ammessi. Assistenza: U.O. Servizi sociali, tel. 075 075075.",
    fonte: {
      label: "Comune di Perugia · Graduatorie progetti personali per la Vita Indipendente, anno 2026",
      url: "https://www.comune.perugia.it/novita/graduatorie-progetti-personali-per-la-vita-indipendente-per-persone-con-disabilita-anno-2026/",
    },
    verificatoIl: "21/10/2026",
    nota: "Pagina aggiornata il 05/08/2026. Requisiti, importi e prossime scadenze vanno chiesti ai Servizi sociali.",
  },
  {
    id: "ancona-contributo-autismo-2026",
    regione: "Marche",
    comuni: ["ancona"],
    titolo: "Contributi per interventi educativi e riabilitativi nell'autismo (2026)",
    perChi:
      "Famiglie di minori in età prescolare con diagnosi degli ultimi tre anni; di persone over 16 con ultima diagnosi valida ottenuta a scuola; di bambini sotto i 30 mesi con diagnosi di rischio. La pagina non indica ISEE.",
    cosa:
      "Contributo fino al 100% della spesa per interventi educativi e riabilitativi specializzati sostenuta dal 01/11/2024 al 31/10/2025, con tetto di 5.000 € per persona. Non si rimborsano spese già coperte da altri contributi.",
    stato: "chiuso",
    quando: "Domande entro il 10 giugno 2026.",
    comeSiChiede:
      "Con il modulo della Regione Marche, allegando diagnosi, progetto educativo e documento: per PEC a comune.ancona@emarche.it, a mano presso l'U.O. Servizi per la Disabilità (viale della Vittoria 37) su appuntamento al 071 2222189, o per raccomandata A/R.",
    fonte: {
      label: "Comune di Ancona · Avviso pubblico per contributi autismo",
      url: "https://www.comune.ancona.it/it/news/avviso-pubblico-per-contributi-autismo",
    },
    verificatoIl: "20/10/2026",
    nota: "Notizia del 16/04/2026. Chiedi al Comune se sarà riaperto l'avviso.",
  },
  {
    id: "ancona-disabilita-gravissima-2025",
    regione: "Marche",
    comuni: ["ancona"],
    titolo: "Contributo regionale per la disabilità gravissima (annualità 2024)",
    perChi:
      "Persone con disabilità gravissima residenti ad Ancona, con indennità di accompagnamento e certificazione della Commissione Sanitaria Provinciale. Esclusi gli ospiti di strutture residenziali. Non cumulabile con Assegno di cura e Vita Indipendente. Domanda della persona, di un familiare, del tutore o dell'amministratore di sostegno.",
    cosa:
      "Contributo del Fondo regionale per le non autosufficienze. La pagina non scrive l'importo.",
    stato: "chiuso",
    quando: "Domanda al Comune entro il 16 luglio 2025 (avviso del 05/05/2025, aggiornato il 10/06/2025).",
    comeSiChiede:
      "Con il modulo Allegato E e gli allegati richiesti: PEC a comune.ancona@emarche.it, raccomandata A/R a Largo XXIV Maggio 1, oppure a mano al Protocollo dei Servizi Sociali (viale della Vittoria 37). Informazioni: Ufficio Promozione Sociale, tel. 071 222 5136 / 5157.",
    fonte: {
      label: "Comune di Ancona · Contributo a favore delle persone con disabilità gravissima",
      url: "https://comune.ancona.it/it/news/contributo-a-favore-delle-persone-con-disabilita-gravissima",
    },
    verificatoIl: "20/10/2026",
    nota: "Avviso del 2025, scaduto. Chiedi al Comune se è previsto un nuovo avviso.",
  },
  {
    id: "rimini-mobilita-casa-lavoro-2026",
    regione: "Emilia-Romagna",
    comuni: ["rimini"],
    titolo: "Contributi per la mobilità casa-lavoro (2026)",
    perChi:
      "Persone maggiorenni con disabilità fisica certificata di grado medio, grave o non autosufficienza (DPCM 159/2013), residenti nel Distretto Nord di Rimini, con almeno 60 giornate di lavoro nell'anno e senza ausili per il trasporto assegnati dall'AUSL negli ultimi tre anni. Per le nuove domande serve l'attestazione del servizio sociale. Nessuna soglia ISEE.",
    cosa: "Rimborso, in genere chilometrico, per raggiungere il posto di lavoro. Importi non scritti nella pagina.",
    stato: "chiuso",
    quando: "Bando aperto dal 07/04/2026 al 08/05/2026.",
    comeSiChiede:
      "Online, oppure su appuntamento presso il Comune di residenza (a Rimini: Ufficio Bandi, via Ducale 7, tel. 0541 704689). Prima si passa dal servizio sociale territoriale (Servizio Disabili).",
    fonte: {
      label: "Comune di Rimini · Richiedere contributi a sostegno della mobilità casa-lavoro",
      url: "https://www.comune.rimini.it/servizi/salute-benessere-e-assistenza/richiedere-contributi-sostegno-della-mobilita-casa-lavoro",
    },
    verificatoIl: "20/10/2026",
    nota: "Pagina aggiornata il 16/03/2026. Chiedi al Comune quando uscirà il bando 2027.",
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
      "Persone non autosufficienti. Non dipende dal reddito né dall'età: conta il bisogno di cura e assistenza, accertato con una valutazione che colloca la persona in uno dei quattro livelli di non autosufficienza. Non serve il riconoscimento di invalidità civile, ma alla domanda va allegato un certificato medico.",
    cosa:
      "Un sostegno economico mensile, che può essere dato anche come buoni di servizio per l'assistenza a domicilio. Il pagamento parte dal mese successivo alla domanda. Per le malattie in stadio avanzato e per la demenza il livello viene assegnato d'ufficio sulla base dei documenti medici. Gli importi dei quattro livelli non sono indicati nella notizia che abbiamo letto: li trovi sul portale della Provincia.",
    stato: "attivo",
    quando:
      "L'assegno è di norma a tempo indeterminato. Se la situazione peggiora si può fare una nuova domanda quando sono passati almeno sei mesi dall'ultima valutazione. Contro l'esito della valutazione si può fare ricorso entro 45 giorni.",
    comeSiChiede:
      "Si presenta la domanda con il certificato medico. Per informazioni ci sono gli sportelli unici per l'assistenza e la cura nei Distretti sociali e il numero verde Pronto Assistenza 848 800 277, dal lunedì al mercoledì dalle 9 alle 12. Il punto preciso dove consegnare la domanda va confermato con la Provincia.",
    fonte: {
      label: "Provincia autonoma di Bolzano · Tutte le informazioni utili sull'assegno di cura (24/06/2026)",
      url: "https://news.provincia.bz.it/it/news/tutte-le-informazioni-utili-sull-assegno-di-cura",
    },
    verificatoIl: "20/10/2026",
  },
  {
    id: "puglia-provi-2026",
    regione: "Puglia",
    titolo: "Comunità Pro.V.I.: progetti di vita indipendente (finestra 2026)",
    perChi:
      "Persone con disabilità grave (art. 3, comma 3, Legge 104/1992) tra 16 e 66 anni, residenti in Puglia da almeno un anno, che vivono al proprio domicilio e sanno esprimere la propria volontà, anche con un supporto. ISEE socio-sanitario ristretto (o ordinario, se più favorevole) fino a 50.000 euro, 65.000 per i minorenni. Non si può ricevere insieme al Patto di cura o al Sostegno familiare, né avere già un progetto di vita indipendente in corso (salvo quelli in scadenza entro il 31 ottobre 2026).",
    cosa:
      "Contributo fino a 15.000 euro per progetto, per un massimo di 12 mesi. Due linee: la linea A per persone con disabilità non legata all'invecchiamento e la linea C per il sostegno alla genitorialità di giovani donne con disabilità che hanno figli minori.",
    stato: "chiuso",
    quando:
      "Le domande della prima finestra erano aperte dal 24 marzo al 24 giugno 2026. La Regione ha approvato la graduatoria il 26 agosto 2026, che resta valida fino all'apertura della prossima finestra, di cui non abbiamo la data.",
    comeSiChiede:
      "Domanda online sulla piattaforma regionale con SPID. Contatto: provi@regione.puglia.it.",
    fonte: {
      label: "Regione Puglia · Comunità Pro.V.I. – Autonomia, socialità, sport",
      url: "https://www.regione.puglia.it/web/welfare-diritti-e-cittadinanza/-/comunit%C3%A0-pro.v.i.-autonomia-socialit%C3%A0-sport-nuovo-avviso-pubblico.-domande-a-partire-dal-24-marzo-2026",
    },
    verificatoIl: "20/10/2026",
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
    verificatoIl: "20/10/2026",
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
      "Notizia dell'8 ottobre 2026. La Regione non indica una scadenza: i termini sono nei singoli avvisi degli Ambiti territoriali sociali, che erano in fase di completamento.",
    comeSiChiede:
      "La domanda si presenta all'Ambito territoriale sociale di residenza, di norma via PEC, secondo l'avviso dell'Ambito. La valutazione e la graduatoria sono fatte dall'Unità di valutazione multidimensionale con l'Azienda sanitaria provinciale. Moduli e avvisi si chiedono all'Ufficio di Piano del tuo Ambito.",
    fonte: {
      label: "Regione Calabria · Disabilità gravissima: al via avvisi pubblici per assegni di cura in tutti gli Ambiti sociali (08/10/2026)",
      url: "https://www.regione.calabria.it/disabilita-gravissima-al-via-avvisi-pubblici-per-assegni-di-cura-in-tutti-gli-ambiti-sociali-straface-sostegno-concreto-e-rendicontazione-semplificata-per-famiglie-e-caregiver-i-beneficia/",
    },
    verificatoIl: "20/10/2026",
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
