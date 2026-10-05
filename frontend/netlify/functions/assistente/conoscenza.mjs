// BASE DI CONOSCENZA DELL'ASSISTENTE TUTELAPP
// ----------------------------------------------------------------------------
// L'assistente risponde SOLO con quello che c'è qui (più i dati del Comune che
// l'app gli passa). Se un'informazione non c'è, deve dire che non lo sa e
// indirizzare all'ufficio giusto.
//
// Come si aggiorna: modificare il testo qui sotto, indicare la fonte e
// aggiornare la data di verifica. Da ricontrollare almeno ogni 3 mesi e
// sempre a gennaio (importi e scadenze cambiano ogni anno).
//
// Ultima verifica complessiva: 5 ottobre 2026.

export const VERIFICATA_IL = "5 ottobre 2026";

export const CONOSCENZA = `
# 1. RIFORMA DELLA DISABILITÀ (D.Lgs. 62/2024)
- Cambia il modo in cui si ottiene il riconoscimento: un'unica valutazione di base fatta dall'INPS, che riconosce insieme invalidità e condizione di disabilità, e il Progetto di Vita.
- In tutta Italia vale dal 1° gennaio 2027. Fino al 31 dicembre 2026 vale solo nelle province in sperimentazione (fasi: 1/1/2025, 30/9/2025, 1/3/2026). Lo stato della provincia dell'utente è indicato nei DATI DEL COMUNE: usare quello, non dedurlo. Fonte: INPS, messaggio n. 637 del 23/02/2026.
- Dove la riforma è attiva: basta il certificato medico introduttivo inviato dal medico all'INPS, senza domanda separata.
- Dove non è ancora attiva: certificato medico introduttivo (vale 90 giorni) + domanda all'INPS entro 90 giorni, online con SPID o tramite patronato (gratuito). La visita la fa la commissione medica.
- Chi ha già un verbale (invalidità o Legge 104) non deve rifare nulla: le prestazioni già riconosciute non si perdono per effetto della riforma. Fino al 31/12/2026 revisioni e revoche seguono le regole attuali anche nelle province in sperimentazione. Cosa succede alle revisioni dal 2027: non è ancora chiaro, indirizzare al patronato.
- La data del 2027 è già slittata una volta: dire sempre "salvo nuovi rinvii".

# 2. PROGETTO DI VITA
- È un piano costruito con la persona con disabilità su casa, lavoro, scuola, servizi e sostegni. Lo chiede la persona (o chi la rappresenta); lo costruisce un'équipe (UVM: servizi sociali, sanità e, se serve, scuola e lavoro).
- Dove la riforma non è attiva oggi si chiede ai Servizi Sociali un progetto personalizzato (progetto individuale); dal 2027 diventa Progetto di Vita.
- Nell'app: sezione "Il mio Progetto di Vita", che aiuta a prepararsi all'incontro e a stampare un PDF da portare.

# 3. INVALIDITÀ CIVILE E LEGGE 104: DIFFERENZA
- Invalidità civile = una percentuale. Sopra certe soglie dà soldi e agevolazioni.
- Legge 104 = riconosce la situazione di handicap: "comma 1" oppure "comma 3" (grave). Dà soprattutto permessi e agevolazioni per lavoro e fisco.
- Si possono chiedere insieme. Molti dubbi nascono dal confonderle: spiegarlo quando serve.

# 4. COSA DÀ LA PERCENTUALE DI INVALIDITÀ (regole verificate a settembre 2026)
- dal 34%: ausili e protesi legati alla patologia.
- dal 46%: iscrizione al collocamento mirato (Legge 68/1999), al centro per l'impiego.
- dal 67%: esenzione ticket e agevolazioni sui trasporti (variano per regione); Carta europea della disabilità.
- dal 74% al 99%: assegno mensile di assistenza (età 18-67, entro un limite di reddito personale).
- 100%: pensione di inabilità (età 18-67, entro un limite di reddito).
- Indennità di accompagnamento: 100% + impossibilità di camminare senza aiuto permanente oppure bisogno di assistenza continua. Nessun limite di reddito né di età.
- IMPORTI E LIMITI DI REDDITO: cambiano ogni anno e le fonti non ufficiali riportano cifre diverse. NON dare cifre: rimandare alla pagina "Importi aggiornati" dell'app e alla circolare INPS dell'anno.

# 5. PERMESSI E CONGEDI (Legge 104/1992 art. 33; D.Lgs. 151/2001 art. 42; D.Lgs. 105/2022)
- 3 giorni di permesso retribuito al mese: per il lavoratore dipendente con 104 grave (comma 3) o per il familiare lavoratore dipendente che assiste una persona con 104 grave. Con il solo comma 1 non spettano.
- Si possono frazionare in ore, entro un tetto mensile.
- Dal 13 agosto 2022 non esiste più il "referente unico": più familiari possono alternarsi per la stessa persona, ma in totale restano 3 giorni al mese per la persona assistita.
- Part-time orizzontale: 3 giorni interi. Part-time verticale o misto: i giorni si riducono in proporzione (INPS, messaggio 3114/2018). Il calcolo lo fa l'ufficio del personale.
- Congedo straordinario: retribuito, fino a 2 anni nell'arco della vita lavorativa, per assistere un familiare con 104 grave; spetta secondo un ordine di priorità tra familiari (prima coniuge/unito civilmente/convivente di fatto). Si può usare nello stesso mese dei permessi ma in giorni diversi. Dettagli sull'ordine di priorità: patronato.
- Il convivente di fatto ha gli stessi diritti del coniuge se la convivenza è registrata all'anagrafe (L. 76/2016).
- Chi usa i permessi ha priorità nell'accesso al lavoro agile.
- Diritto a scegliere, ove possibile, la sede più vicina e a non essere trasferito senza consenso (con 104 grave).

# 6. DOMANDA, VISITA, VERBALE, RICORSO
- Il certificato medico introduttivo può essere a pagamento: dipende dal medico.
- Alla visita: documento d'identità e tutti i referti; ci si può far assistere da un medico di fiducia. Se la persona non può spostarsi, il medico può chiedere la visita a domicilio (almeno 5 giorni prima).
- Se non si è d'accordo con il verbale: ricorso in tribunale con accertamento tecnico preventivo (ATP) entro 6 mesi dalla ricezione. Termine perentorio: dopo resta solo una nuova domanda. Rivolgersi subito a patronato o avvocato. Nell'app: sezione scadenze per il promemoria.

# 7. ALTRE AGEVOLAZIONI FREQUENTI
- Contrassegno parcheggio (CUDE): per gravi difficoltà a camminare o non vedenti; si chiede al Comune.
- Auto: IVA al 4% e detrazione per alcune disabilità indicate nel verbale; verificare con CAF o Agenzia delle Entrate.
- IVA 4% e detrazione su ausili, protesi, sussidi informatici collegati alla disabilità.
- Bonus sociale luce, gas, acqua: con ISEE basso (soglie nell'app, sezione "I tuoi diritti"); bonus per disagio fisico per chi usa apparecchi elettromedicali salvavita, senza ISEE.
- Scuola: il sostegno parte dal riconoscimento ai fini dell'inclusione scolastica e dal profilo di funzionamento; il PEI lo prepara la scuola con famiglia e servizi.

# 8. BONUS E CONTRIBUTI REGIONALI
Regola fondamentale: quasi tutte le misure regionali sono BANDI con una finestra di apertura. Non dire mai che un bando è disponibile se lo stato non è "aperto" con date valide oggi. Per le misure della propria regione la porta d'ingresso sono i Servizi Sociali del Comune o del distretto sociosanitario.

## Liguria
- "Dopo di noi" (Legge 112/2016): per persone con disabilità grave prive del sostegno familiare; percorsi di vita autonoma e soluzioni abitative. Finestra 2026: domande dal 1° maggio al 30 giugno 2026. STATO: CHIUSO (verificato il 5/10/2026). Per sapere se e quando riapre: Servizi Sociali del Comune / distretto sociosanitario.
- Contributo per le patenti speciali di guida: fino a 1.000 € a persona per conseguire o adeguare la patente speciale. Ultima edizione trovata: 2024 (Consulta regionale per la tutela dei diritti della persona disabile). STATO: NON VERIFICATO per il 2026: dire che va chiesto alla Consulta regionale o ai Servizi Sociali.
- Altre misure regionali (es. contributi per disabilità gravissime, assegni di cura): non ancora inserite in questa base. Dire che non si hanno informazioni aggiornate e indirizzare ai Servizi Sociali.

## Altre regioni
- Non ancora inserite. Dire che non si hanno informazioni aggiornate sui bonus di quella regione e indirizzare ai Servizi Sociali del Comune e al sito della Regione.

# 9. SEZIONI DELL'APP TUTELAPP (per indirizzare l'utente)
- "Come ottenere il riconoscimento": i passi dalla diagnosi al verbale, già adattati alla provincia.
- "I tuoi diritti": poche domande e l'elenco degli aiuti possibili.
- "Importi aggiornati": cifre e limiti di reddito dell'anno.
- "La mia pratica" e "Le mie scadenze": tappe, appuntamenti, promemoria (es. 6 mesi per il ricorso).
- "Lettere pronte": richieste al Comune e al datore di lavoro.
- "Il mio Progetto di Vita": preparazione all'incontro con i servizi.
- "Aiuti e contatti": servizi del Comune e del territorio.
- I dati che l'utente inserisce restano sul suo telefono.
`;
