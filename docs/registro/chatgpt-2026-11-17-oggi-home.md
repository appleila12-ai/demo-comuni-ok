# Oggi nella Home dell'app: prima integrazione reale

- Data: 17/11/2026
- Autore: ChatGPT
- Ramo: app/2026-11-17-oggi-home
- Base: 5d6e12ce06206b03eb4839175c749aa4e92ef960
- Classe: B; solo preparazione, nessuna pubblicazione.
- Richiesta di Ilaria: integrare Oggi, prossimo passo e calendario nelle pratiche reali, non limitarsi a pubblicare la simulazione.

## Cambiamenti visibili dopo un eventuale rilascio

- La Home mostra prima il box «Di cosa hai bisogno?» e poi Oggi. Sostituisce l'uso di RiprendiHome, senza modificarne il file.
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

## Aggiornamento del 19/11/2026 (sostituisce lo stato operativo sopra)

- Ilaria ha autorizzato esplicitamente l'aggiornamento del solo frontend/yarn.lock mantenendo invariato frontend/package.json. L'autorizzazione non viene richiesta di nuovo.
- Riallineato il ramo con main 99694f1b26df27368622c0ea6b2cbe2daf03751a; mantenute le aggiunte arrivate nel frattempo nella Home.
- Le vecchie PR dati citate sopra risultano chiuse: aperta la bozza #365, https://github.com/appleila12-ai/demo-comuni-ok/pull/365. Il precedente impedimento sul numero di PR non vale più.
- I 29 controlli di Oggi e il controllo strutturale dati passano sulla base aggiornata: 113 bonus, 426 schede, 343 destinatari, 259 associazioni. Il confronto non segnala aggiunte o rimozioni negli archivi.
- L'installazione interrotta non aveva prodotto né node_modules né un lockfile aggiornato. È stata riavviata con il registro npm ufficiale, timeout delle richieste e cache temporanea dedicata; nessuna protezione del repository viene disattivata. Compilazione e congelamento del nuovo lockfile ancora da verificare.
- SHA-256 package.json invariato: 4b5b8e908add6cf1e53f84c20e61aaa62ffae54f8d6ba4a6844b339f2a9138ce.

### Esiti conclusivi del 19/11/2026

| Controllo | Esito e limite |
| --- | --- |
| Installazione delle dipendenze dichiarate | Riuscita, con preinstall del progetto eseguito |
| Aggiornamento autorizzato del lockfile | 469 righe aggiunte, nessuna riga rimossa; package.json invariato |
| Reinstallazione --frozen-lockfile --offline | Riuscita, hash del lockfile invariato prima/dopo: 40cca3f40367ecdff8fda828c7ad7ea69d8e19275141c0970d72c66b2123c904 |
| yarn build (Expo web + anteprime Comuni) | Riuscito, esportazione dist completata |
| Build Netlify del commit 1ba5a71e0a28e0af7d5f77905da7855a8ffe92c2 | Riuscito; https://deploy-preview-365--tutelappcomuni.netlify.app |
| Browser desktop, stessa anteprima | Scelto Sarzana, senza inserire nome o altri dati personali; aggiunta la sola voce fittizia PROVA Cartella Blu per il 20/11/2026 ore 12 |
| Ritrovare la data | Riuscito: voce visibile in Oggi, etichettata Data inserita da te |
| Preparare il calendario | Riuscito fino al messaggio File calendario preparato; visibili titolo generico e piano B. NON verificati importazione nel calendario esterno o ricezione dell'avviso |
| Modalità discreta | Nascondi Oggi seguito da ricaricamento: dettagli ancora nascosti; successivo Mostra Oggi funzionante |
| Controllo completo TypeScript | Non superato: 10 errori. Ripetuto il confronto con l'index.tsx di origin/main ed esclusi i tre nuovi moduli dalle radici del programma: gli stessi 10 errori negli stessi file/codici sono presenti nella base. Nessun errore nuovo nei file di questo intervento |
| Controlli dati, confronto e classificazione | Zero errori strutturali e zero voci territoriali aggiunte/rimosse. Classe C per il solo lockfile protetto, già autorizzato da Ilaria |

I dieci errori TypeScript riguardano cassetto.tsx (4), roma.ts (1), associazioni.ts (1), esenzioneAslRisposte.ts (2), pdf-extract.ts (2). Non modificati qui. Il build Metro passa ma questo non equivale a un controllo globale dei tipi superato.

Per evitare che le dipendenze appena installate saturassero l'elenco dei file non tracciati, le sole cartelle generate frontend/node_modules, frontend/dist, frontend/.expo e frontend/.metro-cache sono escluse localmente dal Git del checkout. Nessuna regola del controllo e nessun file tracciato sono stati modificati per aggirare verifiche.

Non è un via libera alla pubblicazione generale: restano l'uniformazione del vecchio calendario di Le mie scadenze con #209, i telefoni reali, l'accessibilità e la verifica complessiva della privacy. La schermata è ora effettivamente visibile nell'anteprima, non soltanto nel codice. L'app pubblica non viene modificata in questo turno.



### Priorità della Home confermata da Ilaria — 19/11/2026

Dopo l'inserimento del nome, il box «Di cosa hai bisogno?» resta il primo elemento principale della Home. Oggi viene dopo il box, come supporto alle date e alla ripresa del percorso. Spostato solo l'ordine dei due componenti in frontend/app/index.tsx; nessuna modifica a salvataggio, calendario o archivi. Verificato nel sorgente che CasellaRicerca preceda OggiHome.
