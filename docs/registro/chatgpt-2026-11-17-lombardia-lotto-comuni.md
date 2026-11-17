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

## Voghera — integrazione 17/11/2026
Scheda `frontend/src/config/comuni/demo/voghera.ts` aggiornata **PARZIALMENTE**: sede via F.lli Rosselli 20, email sociali@comune.voghera.pv.it, PEC protocollo@cert.comune.voghera.pv.it (pagina Ufficio Servizi Sociali, ultimo aggiornamento 03/11/2026); telefono 0383 336404 e orario lun–ven 8:30–12:00 **dell'Area adulti e famiglie in difficoltà** (pagina aggiornata 28/04/2026). Fonti consultate 17/11/2026:
- https://comune.voghera.pv.it/it/unita_organizzative/ufficio-servizi-sociali
- https://comune.voghera.pv.it/it/unita_organizzative/area-adulti-e-famiglie-in-difficolta

**Misure ufficiali verificate ma NON ancora integrate in bonus.ts (file condiviso/occupato):**
- Voghera, buono spesa primo semestre 2027: domanda 02–30/11/2026, ISEE <= 5.000 euro, oppure < 7.500 euro per nuclei composti solo da persone oltre 75 anni; pagina aggiornata 03/11/2026: https://comune.voghera.pv.it/it/unita_organizzative/ufficio-servizi-sociali
- Ambito Voghera e Comunità Montana Oltrepò Pavese, contributo locazione 2026: 09–27/11/2026, fino a due mensilità e max 700 euro, ISEE <= 7.500 euro e ulteriori requisiti nella fonte; riguarda 26 Comuni elencati nella pagina, incluso Varzi. Aggiornamento 09/11/2026: https://www.comune.voghera.pv.it/it/news/2074929
- Ambito Lomellina, misura sostegno disabilità e anziani: termine domande 15/10/2026 **scaduto**, non presentare come aperto. Fonte 15/09/2026: https://comune.vigevano.pv.it/novita/misura-sostegno-per-persone-con-disabilita-e-persone-anziane-ex-b2-presentazione-nuove-domande/ ; graduatorie pubblicate 16/11/2026: https://comune.vigevano.pv.it/novita/fondo-non-autosufficienze-2025-pubblicazione-graduatorie-misura-sostegno-e-servizi/

**Mancano:** verifica ticket ASST pertinente, bonus regionali complessivi, destinatario Scrivi al Comune (email generica protocollo@comune.voghera.pv.it verificata nel piè pagina ufficiale), verifica archivio Drive, avviso UI #270 e associazioni. Non segnare completo né chiuso in attesa. Nessuna email inviata. Nessuna voce rimossa. Controlli Node/CI/Netlify non eseguiti per questa integrazione; esiti precedenti del lotto non si estendono a questo commit.
