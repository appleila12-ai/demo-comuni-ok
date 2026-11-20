# Veneto / Ambito VEN-07 — proposta dati verificati (19/11/2026)

**Proprietario:** ChatGPT · **Stato:** PROPOSTA DA INTEGRARE, NON PUBBLICATA · **Territorio:** Conegliano, Vittorio Veneto (TV), Ambito VEN-07.

## Fonte regionale comune: Impegnativa di Cura Domiciliare (ICD)

- **Fonte primaria:** Regione Veneto, «Domiciliarità (ICD) - Impegnative di Cura Domiciliari», https://salute.regione.veneto.it/organizzazione-sssr/il-servizio-socio-sanitario-regionale/assistenza-distrettuale/assistenza-sociosanitaria/persone-con-disabilit%C3%A0/domiciliarit%C3%A0-(icd)---impegnative-di-cura-domiciliari
- **Ultimo aggiornamento fonte:** 14/05/2026. **Consultata:** 19/11/2026.
- **Contenuto verificato:** contributo regionale per sostenere assistenza a domicilio di persone con disabilità; tipologie ICDa (dipendenza vitale/ventilazione), ICDp (grave disabilità psichica e intellettiva, 3–64 anni), ICDf (grave disabilità fisico-motoria, 18–64 anni), ICDsla (SLA). Domanda **in qualsiasi momento** ai Servizi Sociali comunali/ATS o Distretto sociosanitario di residenza. Valutazione multidimensionale e graduatoria ULSS; **idoneità non garantisce erogazione**. La pagina regionale distingue requisiti, importi e rendicontazione per tipologia; non generalizzarli.
- **Proposta testo semplice per entrambe le schede**, in `puntiSupporto` prima della voce ULSS: «Impegnativa di Cura Domiciliare (ICD) · Veneto. Per persone con disabilità che hanno bisogno di assistenza a casa. Puoi presentare domanda in qualsiasi momento ai Servizi Sociali del Comune, dell'Ambito o al Distretto sociosanitario. Dopo la valutazione, l'eventuale contributo dipende anche dalla graduatoria e dalle risorse disponibili.» Azione: link fonte primaria sopra.
- **File candidati:** `frontend/src/config/comuni/demo/conegliano.ts` e `frontend/src/config/comuni/demo/vittorio-veneto.ts`. Modifiche chirurgiche con shell, non riscrittura completa via Contents API. Valutare se ICD sia già presente nel catalogo regionale `bonus.ts` prima di aggiungere voce condivisa: non duplicare.

## Fonte comunale/Ambito: voucher prima infanzia 2026 — Vittorio Veneto

- **Fonte primaria:** Comune di Vittorio Veneto, «Contributi per la frequenza dei servizi alla prima infanzia – art. 3 L.R. 20/2020», https://www.comune.vittorio-veneto.tv.it/home/vivere/Servizi-Sociali/Contributi--assegni-e-sussidi-economici/contributiprimainfanzia.html
- **Ultimo aggiornamento:** 21/07/2026. **Consultata:** 19/11/2026.
- Ambito **VEN-07 Conegliano**; avviso DGR 1054/2025, determinazione 287 del 29/03/2026; domande **scadute il 15/05/2026**, graduatoria finale approvata con determinazione 621 del 20/07/2026. Non mostrare come bando aperto; utile solo come storico/contesto per il controllo dei contributi d'Ambito.
- **Altra fonte primaria per assegnazione ATS:** https://www.comune.vittorio-veneto.tv.it/home/amministrazione/Attuazione-Misure-PNRR/Missione-5/m5c21.2-1.2.2.html (consultata 19/11/2026, aggiornamento non indicato); Vittorio Veneto appartiene a VEN-07, 28 Comuni, capofila Conegliano. Il progetto di due appartamenti per persone con disabilità **non è un bando per cittadini aperto**: non presentarlo come domanda disponibile.

## Stato e prossime azioni

| Comune | Servizi Sociali | Bonus regionali | Bonus comunali/Ambito | Ticket | «Scrivi al tuo Comune» | Stato |
| --- | --- | --- | --- | --- | --- | --- |
| Conegliano | recapito 0438 413210 verificato in precedente lotto, altri dettagli da confrontare | ICD nuova fonte verificata; catalogo completo da confrontare | voucher infanzia chiuso, ulteriori misure da verificare | ULSS 2 presente | protocollo verificato, integrazione destinatario mancante | PARZIALE |
| Vittorio Veneto | presente, fonte precedente | ICD nuova fonte verificata; catalogo completo da confrontare | voucher infanzia 2026 chiuso, bonus acqua/nido/mini alloggi già in scheda; ulteriori misure da verificare | ULSS 2 presente | PEC già censita su main (controllo precedente), verificare integrazione end-to-end | PARZIALE |

**Regola issue #270:** l'avviso accessibile per informazioni incomplete deve essere verificato **a vista** nell'anteprima Netlify prima di dichiarare completa una scheda. Nessuna prova visiva effettuata in questa ricerca.

**Prossimo lotto indipendente:** Comuni dell'ATS VEN-07 già presenti nelle schede; riutilizzare la fonte ICD e ULSS 2 solo dopo controllo dell'effettiva pertinenza, poi verificare singolarmente i bonus comunali e i destinatari. Se mancano dati: «informazioni mancanti/richiesta da inviare» senza invio autonomo. **Nessuna richiesta inviata in questo lotto**; 0 «CHIUSO – IN ATTESA DI RISCONTRO».

**Controlli:** dati documentali, nessuna modifica ai file dell'app. Node non eseguito; CI e anteprima Netlify non applicabili a proposta solo documentale. Nessun merge, deploy o email.
