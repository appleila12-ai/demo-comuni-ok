# Milano: accesso alle esenzioni ticket delle tre ASST

- Data: 11/11/2026
- Autore: ChatGPT
- Ramo: dati/2026-11-11-chatgpt-lombardia-milano-servizi
- PR: https://github.com/appleila12-ai/demo-comuni-ok/pull/243
- Classe: A (solo dati)

## Coordinamento e priorità

Letti integralmente CHATGPT_WORKFLOW.md, AGENTS.md, docs/INDICE-ARCHIVI.md, docs/AUTORIZZAZIONI.md e ASSEGNAZIONI.md dal ramo di Claude dati/2026-11-11-destinatari-comuni. Letti gli ultimi dieci commit di main (testa 394999e) e i file modificati delle PR aperte #204, #209, #216, #222, #236, #239, #240, #241 e #242.

Partenza dal Comune più popoloso della quota Lombardia: Milano. Non toccati bonus.ts (#239/#241), destinatari.ts (#242), completezza-comuni.json e docs/completezza-comuni.md (#239). Nessuna modifica alle Regioni assegnate a Claude. Nessuna unione o pubblicazione autorizzata.

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte | Data controllo | Esito |
|---|---|---|---|---|---|
| esenzioneAslRisposte.ts | milano | aggiunta della scheda specifica: portale delle tre ASST, documenti, telefoni e appuntamenti | fonti 1–5 sotto | 11/11/2026 | verificato sulle pagine aperte |
| demo/milano.ts | punto sanitario ed esenzioneTicket | sostituito collegamento alla homepage ATS con sportello interaziendale delle tre ASST | fonte 1 | 11/11/2026 | verificato |
| demo/milano.ts | ente/responsabile | etichetta semplice Servizi Sociali del Comune; tolto nome della Direzione non verificato | modifica editoriale, non nomina di un nuovo ufficio | 11/11/2026 | nessun nuovo responsabile attribuito |

## Fonti aperte

1. Portale delle tre ASST: https://sr.asst-fbf-sacco.it/ ; pagina informativa aperta https://sr.asst-fbf-sacco.it/ords/f?p=105:2:::::: . Copre i nove Municipi; esenzioni per residenti in Lombardia; email personale, cellulare/OTP e documenti PDF. Data aggiornamento scritta: NON INDICATO.
2. Fatebenefratelli Sacco: https://www.asst-fbf-sacco.it/servizi-territoriali/ticket-ed-esenzioni-8 . Certificazione specialistica per patologia, verbale invalidità distinto dalla legge 104, email informazioni e telefoni 02 6363 4729 / 4446 lun–ven 14:00–15:30. Data aggiornamento scritta: NON INDICATO.
3. Santi Paolo e Carlo, Monreale: https://www.asst-santipaolocarlo.it/strutture/casa-comunita-monreale . Aggiornamento scritto 08/10/2026. Via Monreale 13; portale condiviso; telefono 02 8184 7900 lun–ven 13:30–15:30; sceltarevoca.bandenere@asst-santipaolocarlo.it per informazioni.
4. Volantino delle tre ASST, novembre 2025, ancora collegato dalla pagina Monreale aggiornata nell'ottobre 2026: https://www.asst-santipaolocarlo.it/system/files/struttura/files/14466/36715/VOLANTINO%20SCELTA%20REVOCA%20con%20QRCode%20NOVEMBRE%202025.pdf . Conferma portale condiviso e prenotazioni Niguarda 02 6444 5743 lun–ven 13:30–15:15 e https://sportellovirtuale.ospedaleniguarda.it/#/queue/home . Il PDF è del 2025: non indicato come nuovo documento 2026.
5. Regione Lombardia: https://www.regione.lombardia.it/sanita/ticket-ed-esenzioni/ticket-esenzioni-prestazioni-ssr . Documenti per patologie croniche, rare e invalidità; non inserite soglie economiche né codici di esenzione non necessari alla modifica.
6. ATS Milano: https://www.ats-milano.it/ats/carta-servizi/guida-servizi/assistenza-sociosanitaria/contributi-esenzioni/esenzioni-ticket-patologia-reddito-invalidita . Aggiornamento 03/11/2026 10:00. Conferma competenza ASST per esenzioni e limitazione delle richieste fuori Regione.

## Rimozioni

Nessuna voce di archivio rimossa. Tolti soltanto homepage ATS come destinazione del punto ticket ed etichetta del responsabile non verificato; gli altri Comuni e le altre schede ticket non cambiano.

## Controlli

- Tre controlli richiesti eseguiti: zero errori; classificazione A. Importazione diretta del modulo TypeScript riuscita; scheda Milano caricata con tre recapiti, portale e documenti.
- Prima del push main è avanzato a 91d46b4 (documentazione audit e trasporto): ramo aggiornato con rebase, senza conflitti. Controlli ripetuti sulla nuova base prima del push.
- Completezza, sola lettura: 420 Comuni, 26 completi, 394 incompleti; ticket mancanti da 294 a 293. Il generatore NON è stato eseguito con --scrivi perché i suoi file sono impegnati dalla PR #239.
- Comuni portati a scheda completa in questo intervento: **0**. Milano ha una nuova scheda ticket ma richiede ancora verifica dei servizi sociali e di un bonus comunale attualmente accessibile.
- Controllo GitHub: Controlli dati TutelApp, esecuzione 42985474292, completata con esito success sul commit 3109e361d09225cc2e8b4bed31eb083146c72a4d.
- Netlify: deploy 6af423e716d7fa48a1ff898d, stato ready; anteprima aperta e verificata nel browser: https://deploy-preview-243--tutelappcomuni.netlify.app/esenzione-ticket?comune=milano . Intestazione Milano, testo, documenti e tre pulsanti telefonici presenti e leggibili. Nessuna prova su telefono o con lettore di schermo.

## Cosa manca: dato, ricerca, ufficio competente

1. **Milano, Servizi Sociali:** recapiti ordinari, sede/accesso e orari correnti dei Municipi. Pagina https://www.comune.milano.it/servizi/welfare/servizio-sociale-territoriale e FAQ https://servizicrm.comune.milano.it/centro-supporto/KA-02946/Servizi-Sociali-territoriali-come-accedere : entrambe NON RAGGIUNGIBILI (403), anche provando accesso diretto alla pagina di servizio. Non importati estratti del motore di ricerca. Chiedere all'URP/Servizio sociale territoriale; recapito email del destinatario ancora da verificare, nessun invio.
2. **Dataset comunale accessibile:** https://dati.comune.milano.it/dataset/ds1303-servizio-sociale-professionale-territoriale-le-sedi ; JSON https://dati.comune.milano.it/dataset/a5b525f0-3a2d-4154-96d0-3ffe288cbae3/resource/2c1dfc3d-a4e8-4a9d-bb9c-fb3424e50e9e/download/ds1303_servizio-sociale-territoriale-sedi_final.json . Metadati aggiornati 08/05/2026 ma dati riferiti al 10/11/2025. Contiene 020202, sedi e appuntamenti; campi geografici e indirizzo non sempre coerenti. Nessun nuovo indirizzo importato in attesa di fonte corrente.
3. **Milano, bonus comunale:** la misura 2026/27 già presente ha finestra chiusa 31/07/2026. Non rietichettata come aperta; bonus.ts resta alla PR #241. Verificare nuova procedura individuale Dopo di noi e relativo avviso, senza dedurre l'apertura da una FAQ; ufficio sociale comunale.
4. **Milano, misure regionali:** aggiornamento B1 e altre misure è nella PR #241; non replicare il lavoro. Confrontare fonti e stato prima di chiamare completa la scheda.
5. **Scrivi al Comune:** destinatario già presente in destinatari.ts; non considerato nuovamente verificato da questa PR. File riservato alla #242.
6. **Niguarda, email:** il volantino riporta sceltarevoca@ospedaleniguarda.it mentre https://www.serviziterritoriali-asstmilano.it/sedi/scelta-e-revoca-municipio-9/ riporta sceltaerevoca@ospedaleniguarda.it. Nessuna delle due aggiunta all'app. Chiedere a Niguarda quale indirizzo sia corrente; telefono e portale coincidono. Non promettere tempi di rilascio.

## Bozza email al Comune — non inviata

Destinatario: URP / Servizio sociale territoriale del Comune di Milano; indirizzo di recapito da verificare prima dell'invio.

Oggetto: Servizi sociali di Milano: accesso e recapiti aggiornati per TutelApp

Buongiorno,

sto aggiornando le informazioni di TutelApp per aiutare persone con disabilità e famiglie a raggiungere l'ufficio giusto. TutelApp è già in sperimentazione in diversi Comuni, tra cui Sarzana; la scheda di Milano è una versione dimostrativa e non indica un'adesione del Comune. Stiamo inserendo i Comuni interessati e le associazioni.

Vi chiedo gentilmente di indicarci, per ciascun Municipio, il canale attuale per il primo appuntamento con il Servizio sociale territoriale, il telefono, un'email ordinaria dell'ufficio, la sede e gli orari. È ancora utilizzabile il contact center 020202 per questa richiesta? Quale canale deve usare una persona che non riesce a prenotare online?

Ci servirebbe inoltre sapere se sono aperte domande individuali per il Dopo di noi o per altre misure comunali dedicate alla disabilità, con avviso, requisiti e scadenza applicabili ai cittadini.

Grazie di cuore per la risposta completa, sono informazioni molto utili per i cittadini. Le inseriremo in TutelApp indicando la vostra risposta come fonte. Se qualcosa cambia o notate un'imprecisione, ci scriva e correggiamo subito. Trovi gli indirizzi nella firma.

Dott.ssa Ilaria Baudone
Fondatrice di TutelApp

## Bozza email a Niguarda — non inviata

Destinatario: urp@ospedaleniguarda.it — URP ASST Niguarda. Fonte aperta https://www.ospedaleniguarda.it/servizi-al-paziente/numeri-utili , aggiornata il 28/10/2026, letta l'11/11/2026. Non inviare ai due indirizzi discordanti.

Oggetto: Conferma email Scelta e Revoca per informazioni sulle esenzioni ticket

Buongiorno,

per aggiornare TutelApp vi chiedo di confermare l'indirizzo email ordinario dell'ufficio Scelta e Revoca per le informazioni sulle esenzioni ticket. Il volantino interaziendale di novembre 2025 e la pagina del Municipio 9 riportano indirizzi con grafia diversa. Ci confermate inoltre il numero 02 6444 5743, la fascia lunedì–venerdì 13:30–15:15 e la possibilità di usare il portale interaziendale per le esenzioni dei residenti del Municipio 9?

Una richiesta che TutelApp gestisce oggi è una richiesta in meno per voi domani. Grazie di cuore per la risposta completa, sono informazioni molto utili per i cittadini. Le inseriremo in TutelApp indicando la vostra risposta come fonte. Se qualcosa cambia o notate un'imprecisione, ci scriva e correggiamo subito. Trovi gli indirizzi nella firma.

Dott.ssa Ilaria Baudone
Fondatrice di TutelApp
