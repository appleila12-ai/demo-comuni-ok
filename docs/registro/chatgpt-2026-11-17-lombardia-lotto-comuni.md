# Lotto Lombardia — 17/11/2026 — ChatGPT

## Risultato
Tre schede aggiornate: Abbiategrasso, Magenta, Vigevano. Restano PARZIALI, nessun nuovo Comune completo o chiuso in attesa. Pavia era già aggiornata nella stessa PR e non viene conteggiata di nuovo. Nessuna email inviata in questo lotto, nessuna pubblicazione. ID eliminati: nessuno.

## Fonti e modifiche
Tutte le fonti sotto sono comunali e sono state lette il 17/11/2026.

| Comune | Fonte esatta | Aggiornamento pagina | Intervento |
|---|---|---|---|
| Abbiategrasso | https://comune.abbiategrasso.mi.it/it/unita_organizzative/politiche-sociali | 06/03/2026 | Sede Via Fratelli Cairoli 1; telefono del Segretariato 02 94692516; segretariato@comune.abbiategrasso.mi.it; accesso solo su appuntamento. Collegamento chiama sul Segretariato. La fonte distingue questo numero dalla linea informazioni 02 94692504. |
| Magenta | https://comune.magenta.mi.it/amministrazione/unita-organizzativa/settore-dei-servizi-al-cittadino/ufficio-servizi-sociali/ | 24/02/2026 | Collegamento specifico all'ufficio e accesso solo su appuntamento. Confermati telefono 02 9735438 ed email sociale@comune.magenta.mi.it. |
| Magenta | https://comune.magenta.mi.it/luogo/front-office-servizi-alla-persona-e-sale/ | 20/01/2026 | Confermati Via IV Giugno (civico non indicato) e orari del front office lun–ven 9–12:30, mar/gio anche 15:30–17:30. Distinti dall'accesso all'ufficio; aggiunto avviso fisso di conferma orari. |
| Vigevano | https://comune.vigevano.pv.it/servizio/segretariato-sociale/ | 02/02/2026 | Sede Palazzo Esposizioni, Piazza Calzolaio d'Italia 1; telefono informazioni 0381 299888; segretariatosociale@comune.vigevano.pv.it. Orari sportello informazioni/appuntamenti lun–ven 10:30–13, lun anche 14:30–17:30, gio anche 15:30–17:30 con avviso fisso. Collegamento chiama sul Segretariato. |

Vigevano: la sezione contatti elenca anche numeri dell'area Adulti in Difficoltà (822/824/833); il numero 888 è espressamente indicato nelle ulteriori informazioni del servizio. Non presentare i diversi numeri come contraddizione risolta per tutte le aree. Alcune sezioni della pagina sono in aggiornamento.

## Verifiche e limiti
Eseguiti con esito positivo i tre controlli prescritti: `node frontend/scripts/controlla-dati.js --confronta origin/main`, `--classifica origin/main`, e senza opzioni. Classe A, nessun errore strutturale, nessuna voce eliminata. Schede snelle ridotte da 196 a 194 nel confronto con la coda iniziale di questo turno.

Non verificati in questo lotto: sportelli ticket specifici, bonus locali/regionali, associazioni, destinatari Scrivi al Comune e avviso visibile dell'intero percorso. Manteniamo `daVerificare: true`. Non attestata la completezza visiva; CI e anteprima da controllare dopo il push.

## Ripresa autonoma
Riprendere da ticket ASST Ovest Milanese per Abbiategrasso/Magenta e ASST Pavia per Vigevano, poi bonus locali e destinatari. Non rifare i recapiti qui documentati senza nuovi indizi. `bonus.ts` e `destinatari.ts` sono occupati da PR aperte: annotare le ricerche prima di modificare. Passare ad altri Comuni assegnati quando un file è occupato. Tenere distinto aggiornamento parziale da chiusura verificata.

Mediglia: resta sospesa la comunicazione a Pierdominici in attesa del modulo online. Richiesta ASST già inviata a URP Vizzolo con CUP Peschiera in copia: non duplicarla.
