# Cartella Blu: preparazione dell'area di prova nell'app

- Data: 17/11/2026
- Autore: ChatGPT
- Ramo: app/2026-11-17-cartella-blu-isolata
- Classe: B (il controllo classifica il test come codice)
- Stato: preparata nel ramo, non unita e non pubblicata.

## Cosa cambia

- Aggiunta frontend/public/prove/cartella-blu.html: copia della demo 0.1.3 già preparata per Ilaria, senza cambiare i testi o la logica della simulazione.
- Aggiunto tests/cartella-blu/verifica-demo.cjs: gli stessi 36 controlli, con percorso adattato al repository.
- Nessuna modifica alla Home, agli archivi ordinari, ai dati dei Comuni, alle scadenze esistenti o ai file protetti.
- Pagina autonoma, non una route React: l'apertura diretta non carica il layout Expo, le statistiche o i moduli di condivisione dei referti. Il codice della pagina non li importa e la sua CSP vieta connessioni e worker. Questo è un controllo del codice, non una prova del traffico nella distribuzione finale.
- Nessun collegamento nella Home o nel motore di ricerca: la prova si raggiungerà dal solo indirizzo diretto /prove/cartella-blu.html, dopo pubblicazione e verifica del build. Non è un'area riservata e noindex non è controllo degli accessi.
- Archivio IndexedDB dedicato tutelapp-cartella-blu-demo-v1. Nessun import automatico dei dati ordinari. Lo stesso dominio NON costituisce una separazione di sicurezza: altri script autorizzati nella stessa origine potrebbero accedere agli archivi. Per il test restano ammessi solo dati fittizi.
- Le richieste per caricare la pagina possono lasciare IP e metadati nei log dell'hosting. La CSP non impedisce la richiesta iniziale. Calendario e copie scaricate dipendono dalle scelte successive della persona.

## Cosa ho letto nel codice attuale

Base main: eecee5ef670900c2e509d5ea82b7c00412ad1f15.
- frontend/src/lib/reports.ts: saveReport salva localmente; condividiReport può inviare una copia e deviceId dopo richiesta di condivisione. Non è corretto descrivere questa versione come sincronizzazione silenziosa dei referti durante saveReport.
- frontend/src/lib/statistiche.ts: può inviare categorie e Comune a /api/stats/eventi se EXPO_PUBLIC_BACKEND_URL è impostata. Non ho verificato il valore in produzione o i log.
- frontend/src/components/RiprendiHome.tsx e ScadenzeSezione.tsx: scadenze e ripresa sono già presenti, con comportamento diverso da quello concordato qui.
- PR #209 modifica RiprendiHome, ScadenzeSezione, scadenze.ts e ricerca.ts: non sovrapporre un secondo intervento negli stessi file. Questa integrazione NON sostituisce o approva quella PR.

Fonti tecniche: file sopra elencati nel repository e demo 0.1.3 già accettata per revisione; nessun contenuto amministrativo nuovo. Lo scenario inventato è autorizzato dalla richiesta di Ilaria in questa conversazione.

## Rimozioni

Nessuna. Nessun dato territoriale cambiato.

## Controlli eseguiti

- node tests/cartella-blu/verifica-demo.cjs: 36 controlli superati.
- node frontend/scripts/controlla-dati.js --confronta origin/main: zero errori; zero aggiunte o rimozioni negli archivi.
- node frontend/scripts/controlla-dati.js --classifica origin/main: classe B.
- node frontend/scripts/controlla-dati.js: zero errori strutturali. Rimane la coda territoriale preesistente, estranea a questo intervento.

## Cosa manca

1. Build Expo e anteprima Netlify: verificare che /prove/cartella-blu.html serva il file autonomo, non il fallback index.html; nessun layout ordinario o statistica deve essere caricato. Non verificati in questo turno.
2. Ripristino completo tramite interfaccia e conflitto fra due schede: rimangono da completare nel browser. I 36 controlli non sostituiscono queste prove.
3. Telefoni reali, calendario, lettori di schermo e audit del traffico nell'ambiente scelto.
4. La distribuzione in una nuova origine non recupera automaticamente i dati della demo aperta da file locale. Usare esclusivamente copie fittizie, con ripristino esplicito; non invitare a esportare l'archivio ordinario.
5. Informativa del test ancora in bozza, da verificare sul software reale e far rivedere al professionista.
6. Raccordo futuro con la Home e le scadenze reali, dopo aver risolto la sovrapposizione con la PR #209. Non significa che le funzioni siano già disponibili per pratiche reali.
7. Nessuna nuova PR in questo turno: risultano già aperte più di due PR attribuite a ChatGPT (#296, #257, #251). Il workflow pone il limite di due; non chiudo lavori altrui o ancora in revisione. Il ramo è conservato per revisione e per una successiva PR quando il limite sarà rispettato.

La pubblicazione richiede il «pubblica» di Ilaria secondo CHATGPT_WORKFLOW.md e docs/AUTORIZZAZIONI.md. Nessun invio di mail, nessuna modifica all'esercizio DO.GE.
