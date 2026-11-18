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
