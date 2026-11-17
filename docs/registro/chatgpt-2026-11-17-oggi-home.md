# Oggi nella Home dell'app: prima integrazione reale

- Data: 17/11/2026
- Autore: ChatGPT
- Ramo: app/2026-11-17-oggi-home
- Base: 5d6e12ce06206b03eb4839175c749aa4e92ef960
- Classe: B; solo preparazione, nessuna pubblicazione.
- Richiesta di Ilaria: integrare Oggi, prossimo passo e calendario nelle pratiche reali, non limitarsi a pubblicare la simulazione.

## Cambiamenti visibili dopo un eventuale rilascio

- La Home mostra Oggi prima del box di ricerca. Sostituisce l'uso di RiprendiHome, senza modificarne il file.
- Un unico collegamento al percorso già iniziato: pratica, verbale o Progetto di Vita. È un punto di ripresa, non una nuova istruzione amministrativa e non un catalogo di passi verificati.
- Le date già salvate nell'archivio delle scadenze compaiono entro 14 giorni, ordinate; oltre tre date si possono espandere. Anche le date passate vengono segnalate, senza presumere che siano incompiute.
- Distinzione tra data personale e data indicativa calcolata dall'app. Nessuna data viene promossa a scadenza ufficiale verificata.
- Per aggiungere, modificare o cancellare una data si apre la sezione Le mie scadenze già esistente: nessun secondo archivio delle date, nessuna migrazione o sovrascrittura da Oggi.
- Il calendario in Oggi chiede l'ora e l'anticipo (0, 15 minuti, 1 giorno), usa Europe/Rome e contiene solo «Promemoria TutelApp» con testo generico. Rifiuta un avviso nel passato e le ore ambigue o inesistenti al cambio d'ora.
- UID SHA-256 calcolato sul dispositivo dalla voce e dalle impostazioni. Stessa voce con stesse impostazioni => stesso UID; modificando ora, data o anticipo l'esportazione è un evento diverso. NON è implementato un aggiornamento con SEQUENCE dell'evento già importato. Il testo invita a eliminare il vecchio evento prima di importare impostazioni diverse. Deduplicazione non garantita dal calendario esterno.
- La data viene riletta prima dell'esportazione. Nessuna scrittura delle scadenze, nessuna notifica programmata dall'app, nessuna falsa conferma di avviso impostato.
- Piano B con titolo, data e ora selezionabili o copiabili. Nessun link a Google Calendar o trasmissione esplicita a un provider.
- «Nascondi Oggi» salva soltanto una preferenza locale. È dichiarato che non blocca l'accesso e non nasconde le altre sezioni della Home. Se il salvataggio fallisce, Oggi resta nascosto nella sessione e mostra l'avviso sul possibile comportamento alla riapertura.

## Dati e privacy

La nuova logica legge tutelapp:scadenze (con il namespace del Comune), tracker, verbale e Progetto di Vita già presenti. I dati originali restano gestiti dall'app e dalla sua copia/ripristino esistenti. Oggi non aggiunge note, referti o una copia delle date. La preferenza tutelapp:oggi-discreto non contiene contenuti personali e non viene aggiunta alla copia di sicurezza.

I nuovi moduli non chiamano API di rete, non creano deviceId e non richiedono account. Questo NON significa che l'intera app sia priva di traffico: Home usa ancora useSezione e altre funzioni ordinarie possono chiamare il backend. L'esportazione è locale; il calendario può sincronizzare il file dopo la scelta della persona. Audit globale di rete, log e informativa non eseguito e non sostituito dai controlli statici.

## Coordinamento con Claude

La PR #209 (diario-incontri) tocca RiprendiHome, ScadenzeSezione, scadenze.ts, ricerca.ts e gli archivi di copia. Nessuno di questi file è modificato qui. La PR #346 tocca la ricerca, ugualmente non modificata.

Prima di unire in futuro #209 e questo ramo: coordinare il punto di ripresa, perché Oggi sostituisce il richiamo di RiprendiHome. Il diario non viene incluso né approvato automaticamente da questa integrazione. La scheda sportello, la storia automatica e il contenuto quotidiano restano fuori.

## Rimozioni

Nessun dato rimosso. Sostituito unicamente il richiamo al precedente riquadro di ripresa nella Home; il suo componente e le altre funzioni restano nel repository.

## Controlli eseguiti e limiti

- node tests/oggi/verifica-oggi.mjs: 29 controlli superati. Logica delle date, finestra inclusiva, date passate, fuso, DST, file generico, allarmi, CRLF/folding, UID, piano B, lettura stretta dell'archivio e controlli statici dei collegamenti.
- Sono prove della logica e del codice, NON prove del rendering React, delle transazioni dell'app esistente o di calendari reali.
- corepack yarn install --frozen-lockfile --non-interactive: fallito con «Your lockfile needs to be updated». Nessun package.json, yarn.lock, script o configurazione protetta modificati. L'errore precede la compilazione delle modifiche.
- Build Expo e anteprima: non eseguiti per assenza delle dipendenze installabili con il lockfile attuale. Servono una risoluzione autorizzata del problema del lockfile e poi build e controllo a vista.
- Telefono, lettore di schermo, contrasto, tastiera, ingrandimento e ripristino completo restano da provare. Nessuna dichiarazione di conformità.
- Sintassi: TypeScript 6.0.3 (strumento esterno al progetto), transpileModule sui quattro file app toccati: zero errori sintattici. Non è un controllo completo dei tipi.
- node frontend/scripts/controlla-dati.js --confronta origin/main: zero errori, nessuna voce aggiunta o rimossa negli archivi.
- node frontend/scripts/controlla-dati.js --classifica origin/main: classe B.
- node frontend/scripts/controlla-dati.js: zero errori strutturali; rimane la coda territoriale preesistente, estranea a questa funzione.

## Cosa non è incluso

Non viene pubblicata la pagina di simulazione preparata nell'altro ramo; non viene rimossa. Nessun bando precompilato o controllo automatico delle sue modifiche. Nessun nuovo catalogo istituzionale. Il vecchio calendario raggiungibile dalla sezione Le mie scadenze resta invariato: prima del rilascio generale occorre uniformarlo al comportamento generico di Oggi, in coordinamento con #209. Il nuovo percorso non rende sicuro o corretto quello vecchio.

## Revisione e pubblicazione

Nessuna nuova PR: sono già aperte più di due PR attribuite a ChatGPT (#296, #257, #251); il workflow limita a due. Il codice è conservato in questo ramo, senza chiudere lavori ancora in revisione. Nessuna unione su main e nessun deploy. Le regole del progetto richiedono il «pubblica» di Ilaria per il codice, dopo aver completato i controlli mancanti. In questo turno Ilaria ha confermato lo sviluppo delle funzioni reali, non ha chiesto la pubblicazione del ramo incompleto.
