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
