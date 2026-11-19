# Veneto — Vittorio Veneto e Conegliano (18/11/2026)

Responsabile: ChatGPT. Ambito: provincia di Treviso, ULSS 2 Marca Trevigiana. Stato: **due schede PARZIALI**, zero nuove schede complete. Nessuna email inviata, nessuna pubblicazione.

## Vittorio Veneto

Aggiornati in `frontend/src/config/comuni/demo/vittorio-veneto.ts` recapiti e orari dell'ufficio Servizi Sociali e Assistenziali: Via Giosuè Carducci 28, telefono 0438 569305, sociale@comune.vittorio-veneto.tv.it, PEC pec.comune.vittorioveneto.tv@pecveneto.it; lunedì, martedì, giovedì e venerdì 9:00–12:45, giovedì 15:00–17:30. Fonte comunale, ultima modifica 10/11/2023, consultata 18/11/2026:
https://www.comune.vittorio-veneto.tv.it/home/amministrazione/uffici/Ufficio-26.html

Sostituito link generico ULSS 2 con due procedure distinte: esenzione patologia e invalidità civile. Fonti:
https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia (aggiornamento 28/03/2024)
https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-civile (consultazione 18/11/2026)

## Conegliano

Sostituito il collegamento ULSS 2 generico con le medesime pagine per esenzione patologia e invalidità civile. **Non** riconfermati in questa sessione recapiti e orari sociali già presenti: richiedono ulteriore controllo della pagina comunale. Il sito ufficiale del Comune conferma un recapito generale di protocollo (non inserito in `destinatari.ts`, archivio condiviso) e sede del Municipio:
https://pagopa.comune.conegliano.tv.it/it (consultazione 18/11/2026).

## Lacune e prossimo passo

Per **entrambi**: bonus regionali pertinenti e attuali; bonus comunali e dell'Ambito ATS 7 Conegliano, verifica scadenze; destinatario «Scrivi al tuo Comune» nell'archivio condiviso (evitare conflitti e controllare le richieste già inviate in Drive); avviso incompleti **visibile** in UI e anteprima Netlify. Non dedurre l'assenza di benefici dalle pagine non trovate. Stato CHIUSO – IN ATTESA DI RISCONTRO **non applicabile**: nessuna prova di richiesta ufficiale inviata in questa sessione.

## Controlli

Modifica dati classe A **stimata**, da confermare con `node frontend/scripts/controlla-dati.js --classifica origin/main`. `--confronta`, `--classifica`, controllo completo non eseguiti: ambiente container senza accesso a github.com (errore DNS). Controllare CI GitHub della PR e anteprima Netlify; non dichiarare verde né anteprima verificata. Nessuna rimozione di bonus o servizi. Obiettivo giornaliero 20: **0 nuovi Comuni completi in questo lotto**.

## Aggiornamento 19/11/2026 — bonus e verifica incrociata

**Vittorio Veneto — dato aggiunto alla scheda (non all'archivio generale bonus.ts):** bonus acqua Piave Servizi 2026 per nuclei residenti con ISEE non superiore a 16.000 euro e utenza idrica domestica; domanda entro 30/11/2026 presso Servizi Sociali in via Carducci 28, tel. 0438 569318. Documenti: modulo, ISEE, documento di identità e ultima bolletta. Erogazione in bolletta per utenti diretti, pagamento tracciabile per indiretti. Fonte primaria comunale pubblicata 27/10/2026, ultima modifica 28/10/2026, consultata 19/11/2026: https://www.comune.vittorio-veneto.tv.it/notizie/bonusacqua.html . Aggiunto punto di supporto con requisiti, scadenza, recapito e collegamento, senza toccare bonus.ts (file grande condiviso). Per la visualizzazione nella sezione generale dei bonus servirà proposta/inserimento chirurgico separato.

**Ulteriori misure verificate, NON inserite come attive:**
- Contributi famiglie fragili L.R. 20/2020, annualità 2024 e 2025: procedura **conclusa**, graduatoria 2025 approvata 30/12/2025. Fonte aggiornata 09/01/2026: https://www.comune.vittorio-veneto.tv.it/home/vivere/Servizi-Sociali/Contributi--assegni-e-sussidi-economici/contributifragili.html . ATS VEN-07 con capofila Conegliano; il dato non dimostra esistenza di un bando aperto 2026.
- Bonus SAVNO 2026 per utenze domestiche con ISEE 9.796–15.000 euro: **scaduto il 15/11/2026**, non aggiunto come aperto. Fonte pubblicata/aggiornata 23/09/2026: https://www.comune.vittorio-veneto.tv.it/notizie/savno26.html .
- Trasporto scolastico studenti con disabilità: la home comunale indica scadenza 30/11/2026 (https://www.comune.vittorio-veneto.tv.it/), mentre la pagina di dettaglio aggiornata 22/06/2026 dice «Bando non ancora disponibile» (https://www.comune.vittorio-veneto.tv.it/home/vivere/Scuola/contributi.html). **Conflitto non risolto: non pubblicare requisiti, scadenza o apertura come certi**. Prossimo passo: individuare avviso 2026 e modulo ufficiale, o richiedere chiarimento senza inviare email autonomamente.
- Modulistica comunale per assistenza domiciliare, contributo economico, agevolazioni viaggio e accoglienza: https://www.comune.vittorio-veneto.tv.it/home/amministrazione/documenti/Documento-104.html (consultata 19/11/2026). Non implica automaticamente che i contributi siano aperti.
- Il Comune appartiene all'ATS VEN-07 (28 Comuni, capofila Conegliano), fonte istituzionale https://www.comune.vittorio-veneto.tv.it/home/amministrazione/Attuazione-Misure-PNRR/Missione-5/m5c21.2-1.2.2.html (consultata 19/11/2026). Il progetto PNRR di autonomia non equivale a bando per singoli cittadini.

**Stato invariato:** Vittorio Veneto PARZIALE, Conegliano PARZIALE, 0 Comuni completi e 0 chiusi in attesa di riscontro in questa esecuzione. Da verificare ancora bonus regionali e altri bonus ATS, recapiti Conegliano, destinatari Scrivi al Comune e avviso UI. Non sono state inviate email. Nessuna pubblicazione/merge. Controlli Node e anteprima Netlify non verificati.

## Aggiornamento 19/11/2026, ore 02 — contributo prima infanzia

**Vittorio Veneto: nuova misura 2026 inserita nella scheda** come punto di supporto (non in bonus.ts, condiviso). Contributo comunale per rimborso parziale delle rette di servizi educativi per l'infanzia 3–36 mesi sostenute nel 2026. Beneficiari: richiedente e figlio residenti a Vittorio Veneto, iscrizione a struttura che rispetta requisiti di frequenza (almeno 5 giorni/settimana e 4 ore/giorno), nido comunale escluso. Contributo variabile, calcolato sulla differenza con la retta teorica del nido comunale; compatibile con bonus INPS con decurtazione; non indicato importo fisso. In caso di risorse insufficienti si applicano criteri di priorità, inclusi residenza di almeno cinque anni di un genitore, ISEE minorenni e numero figli. Domanda entro **09/12/2026** via **asilonido@comune.vittorio-veneto.tv.it**, allegando modulo, spese documentate, documento e ISEE; una domanda per ogni figlio. Fonte ufficiale comunale aggiornata **20/10/2026**, consultata **19/11/2026**:
https://www.comune.vittorio-veneto.tv.it/home/info/Asilo-nido/contributo2026.html
Avviso ufficiale protocollo **40244/2026 del 19/10/2026**:
https://www.comune.vittorio-veneto.tv.it/dam/jcr%3Ac6fb6b43-2b83-424d-afb9-206c17e6809c/AVVISO%20PUBBLICO%20CONTR%20NIDI.pdf

**Attenzione:** contributo per famiglie in generale, non misura riservata alla disabilità. Non usare per affermare che la scheda è completa. **Stato:** Vittorio Veneto PARZIALE, Conegliano PARZIALE; **0** nuovi completi, **0** chiusi in attesa di riscontro. Mancano bonus regionali e ATS, destinatari «Scrivi al Comune», controllo avviso UI. Nessuna email, pubblicazione o merge. Test Node e anteprima Netlify non eseguiti in questa esecuzione.

## Aggiornamento 19/11/2026 — ufficio ATS VEN-07 e controlli incrociati

**Conegliano:** aggiunto alla scheda un punto di supporto distinto per l'ufficio dell'Ambito Territoriale Sociale VEN-07, di cui Conegliano è capofila. Recapiti riportati nell'avviso istituzionale DGR 69/2024: ufficionoa@comune.conegliano.tv.it, telefoni 0438 413238 / 413237 / 413215, sede Piazza Beccaria 1. Fonte consultata il 19/11/2026: https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=66a8d225103327008c224481 . La scheda segnala espressamente che i recapiti provengono dall'avviso 2024; la loro attualità non è stata confermata e non sono stati dedotti bandi aperti.

**Fonte di riscontro aggiuntiva:** avviso ufficiale del Comune con riferimento a capofila VEN-07 e contatto Servizi Sociali servizisociali@comune.conegliano.tv.it: https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=67e68a723970fe0090a0aa69 (consultato 19/11/2026). Per la sede e il protocollo generale: https://pagopa.comune.conegliano.tv.it/it (consultato 19/11/2026). Non modificato destinatari.ts, che richiede controllo di assegnazione e archivio Drive.

**Controllo conflitti:** al 19/11/2026 le PR aperte risultano #357, #216, #209 e #204; la modifica riguarda soltanto un file già appartenente alla propria #357 e il relativo registro. Nessun file delle altre PR toccato. Ultimi 10 commit main riletti. Issue #262, #267, #270 e istruzioni di progetto rilette.

**Stato e limiti:** Conegliano PARZIALE, Vittorio Veneto PARZIALE; nuovi Comuni completi **0/20**, chiusi in attesa di riscontro **0**, schede parziali aggiornate in questo passaggio **1**. Mancano bonus regionali e dell'Ambito/Comune, destinatari Scrivi al Comune, verifica aggiornata dei recapiti ATS e dell'avviso accessibile in UI. Nessuna prova di richiesta ufficiale inviata. Node e anteprima Netlify non verificati. Nessuna email, merge o pubblicazione.

## Aggiornamento 19/11/2026, ore 04 — voucher ATS VEN-07 e recapiti Conegliano

**Fonte primaria verificata:** avviso ufficiale del Comune di Conegliano, protocollo 17017 del 30/03/2026, relativo al voucher prima infanzia ATS VEN-07: https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=69ca4fcdf00987008b10c9e6 (consultato 19/11/2026). La misura, riferita al periodo educativo 2025/2026, prevedeva importi da 900 a 1.500 euro per minore, in base all'ISEE ricalcolato, con budget ATS 138.649 euro; **domande dal 01/04/2026 al 15/05/2026, quindi CHIUSE**. Il documento indica ISEE ordinario/corrente massimo 22.000 euro e ulteriore limite 15.000 euro dopo applicazione delle scale; non semplificare impropriamente i due valori. Il documento conferma il Comune capofila VEN-07, l'email ordinaria dei Servizi Sociali servizisociali@comune.conegliano.tv.it e il telefono 0438 413210, oltre a 0438 413447 per informazioni sul bando. Il recapito già presente nella scheda è ora corroborato da documento del 2026. **Non inserito il voucher nella lista degli aiuti aperti**, per non fuorviare le famiglie.

**Intervento effettuato:** corretti i separatori di riga letterali `\\n` nei commenti della scheda Conegliano; annotata la conferma del telefono e la fonte 2026. Nessun dato incerto aggiunto. **Stato:** Conegliano e Vittorio Veneto PARZIALI, nuovi completi 0/20, chiusi in attesa di riscontro 0. Mancano bonus regionali attuali, altre misure comunali/ATS, destinatari Scrivi al Comune e prova dell'avviso accessibile in UI. Nessuna richiesta ufficiale inviata, quindi nessuna chiusura per mancata risposta. Controlli Node e anteprima Netlify non eseguiti; non dichiarare CI verde senza riscontro. Nessuna email, merge o pubblicazione.

## Aggiornamento 19/11/2026 — orientamento regionale condiviso, due Comuni

**Intervento reale nelle schede Conegliano e Vittorio Veneto:** aggiunto un punto di supporto informativo, non un bonus dichiarato aperto, sulla legge regionale Veneto 20/2020 per famiglie fragili. Fonte primaria Regione Veneto: https://www.regione.veneto.it/web/sociale/famiglie-fragili ; ultimo aggiornamento pagina **26/02/2025**, consultata **19/11/2026**. La Regione indica nuclei con minori orfani, nuclei monoparentali/separati in difficoltà economica, famiglie con almeno quattro figli o parti trigemellari; interventi gestiti con gli Ambiti territoriali sociali. La pagina riguarda programma 2024 e rendicontazione 2025: **non certifica un bando aperto nel 2026**. Per questo la scheda invita a chiedere ai Servizi Sociali eventuali avvisi territoriali, senza promettere contributi o requisiti 2026.

**Verifiche tecniche:** GitHub status per commit precedente b041b0e indica `netlify/tutelappcomuni/deploy-preview: success` con URL https://deploy-preview-357--tutelappcomuni.netlify.app ; tentativo di aprire l'anteprima con il browser di ricerca non riuscito: **verifica visiva UI NON eseguita**. Stato CI dei nuovi commit ancora da ricontrollare; controlli Node `--confronta`, `--classifica` e completo **non eseguiti**. La riuscita del deploy non prova che l'avviso di incompletezza sia visibile.

**Stati:** Conegliano PARZIALE; Vittorio Veneto PARZIALE; nuovi completi 0/20; chiusi in attesa di riscontro 0; **2 schede parziali aggiornate in questo passaggio**. Mancano verifica attuale di misure regionali e ATS 2026, verifica completa di bonus comunali, destinatari «Scrivi al Comune», verifica avviso UI. Nessuna email inviata, nessuna pubblicazione/merge. Prossimo passo: verificare bandi ATS VEN-07 aggiornati e destinatari tramite archivio Drive e fonti comunali, senza modificare `bonus.ts` o `destinatari.ts` occupati.

## Checkpoint 19/11/2026 ore 06

Riletti workflow, AGENTS, indice, assegnazioni e issue #262, #267, #270; PR aperte #357, #216, #209, #204 con relativi file e ultimi 10 commit main. Corrette le sequenze letterali `\n` nei commenti di fonti regionali delle schede Conegliano e Vittorio Veneto, commit 9992d55 e 342c1bb; nessun dato sostanziale alterato. Stato CI del commit 342c1bb: zero status e zero workflow run restituiti, dunque CI non verificata. Tre controlli Node e verifica visiva dell'anteprima Netlify non eseguiti. Schede ancora parziali, 0 nuovi Comuni completi su obiettivo 20, 0 chiusi in attesa di riscontro. Mancano bonus regionali/comunali/ATS, destinatari Scrivi al Comune e verifica avviso UI. Nessuna email, merge o pubblicazione.

## Verifica destinatari «Scrivi al tuo Comune» — 19/11/2026, ore 07

Controllato direttamente `frontend/src/config/comuni/destinatari.ts` su `main` (lettura, **nessuna modifica**).

- **Vittorio Veneto:** destinatario **già presente**: `pec.comune.vittorioveneto.tv@pecveneto.it`, tipo `pec`, fonte preesistente IPA 20/10/2026. La PEC coincide con quella indicata sul sito comunale, https://www.comune.vittorio-veneto.tv.it/notizie/bonusacqua.html (pagina 28/10/2026, consultata 19/11/2026). **Non è più un campo assente**; resta da verificare che la funzione UI lo utilizzi e se sia preferibile un recapito ordinario per il cittadino.
- **Conegliano:** slug `conegliano` **assente** dall'archivio destinatari su `main`. Il portale istituzionale comunale indica `protocollo@comune.conegliano.tv.it` (email ordinaria), `pec@comuneconegliano.legalmail.it` (PEC), telefono 0438 4131, Piazza Giovanni Battista Cima 8. Fonte https://pagopa.comune.conegliano.tv.it/it (consultata 19/11/2026; data di ultimo aggiornamento NON INDICATA). L'indirizzo ordinario è candidato per «Scrivi al tuo Comune»; prima dell'integrazione controllare il flusso e l'archivio delle comunicazioni Drive. Non modificato il file condiviso per evitare conflitti e riscritture estese.

**Avanzamento effettivo:** una lacuna precedentemente segnalata (destinatario Vittorio Veneto) risulta già risolta nell'archivio; una lacuna Conegliano ha una fonte istituzionale utilizzabile, ma manca l'integrazione. Entrambe le schede restano **PARZIALI**, nessun nuovo completo o chiuso in attesa di riscontro. Controlli Node e verifica UI da effettuare; nessuna email, merge o pubblicazione.
