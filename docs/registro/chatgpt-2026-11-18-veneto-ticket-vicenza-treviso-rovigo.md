# Checkpoint ChatGPT — Veneto, 18/11/2026, ore 12

**Proprietario:** ChatGPT. **PR di lavoro già aperta:** https://github.com/appleila12-ai/demo-comuni-ok/pull/257 . **Stato:** 3 schede PARZIALI migliorate, zero complete, zero chiuse in attesa di risposta. Nessuna email inviata, nessun merge/deploy.

## Intervento applicativo verificabile
- Vicenza: `frontend/src/config/comuni/demo/vicenza.ts`, commit `a7058fc`.
- Treviso: `frontend/src/config/comuni/demo/treviso.ts`, commit `9b0d920`.
- Rovigo: `frontend/src/config/comuni/demo/rovigo.ts`, commit `3af2455`.

Per tutti e tre è stato sostituito **soltanto** l'URL generico nel campo `esenzioneTicket.url` con la pagina regionale specifica; non è stato cambiato il nome dell'ULSS locale, né inventato uno sportello. **Fonte istituzionale riutilizzata** dall'issue #335 (lettura documentata 17/11/2026): Regione Veneto, pagina aggiornata 20/05/2026, https://salute.regione.veneto.it/organizzazione-sssr/attivit%C3%A0--del-servizio-socio-sanitario-veneto/assistenza-distrettuale/visite-ed-esami-ambulatoriali/ticket-ed-esenzioni . La Regione precisa che l'attestato di esenzione, quando spettante, è rilasciato dalla ULSS di assistenza. La pagina regionale è pertinente a tutti e tre i Comuni; non sostituisce la verifica di sportello, orari e modalità locali.

## Stato e prossimi passi
- **Vicenza:** recapiti specifici Servizi Sociali e orari ancora incompleti, bonus regionali/comunali e Ambito, sportello ULSS 8, destinatario «Scrivi al tuo Comune», avviso UI #270.
- **Treviso:** confermare i recapiti già presenti nella scheda su pagina comunale corrente; bonus regionali/comunali e Ambito, sportello ULSS 2, destinatario, avviso UI.
- **Rovigo:** recapiti specifici Servizi Sociali e orari mancanti, bonus regionali/comunali e Ambito, sportello ULSS 5, destinatario, avviso UI.
- Controllare archivio Drive prima di eventuali richieste, evitare duplicati. Non assegnare lo stato «CHIUSO – IN ATTESA DI RISCONTRO» senza prova di invio (issue #262). La scheda vuota non implica assenza di diritto (issue #270).
- Riprendere con verifica completa di una delle tre città, poi Comuni >15.000 abitanti nella medesima ULSS. Non ripetere la ricerca regionale già documentata.

## Controlli e limiti
Prima delle modifiche consultati workflow, AGENTS, indice, assegnazioni, issue #262/#267/#270, 10 commit main e file modificati da PR #257, #251, #296, #242, #260. **Node non eseguito**, perché il lavoro è avvenuto tramite GitHub senza checkout locale; **CI e anteprima Netlify non verificate**. Classe presumibile A (solo schede dati e registro), ma **non attestata** senza `--classifica`. Nessuna voce rimossa. L'obiettivo di 20 Comuni completi oggi non è raggiunto da questa esecuzione: **0 nuovi completi / 20**.

## Integrazione Vicenza — 18/11/2026 ore 13, ChatGPT
**Stato PARZIALE**, nessun Comune completo né chiuso in attesa. Commit `eb707846` e `bf08b8f1`, PR #257. Scheda `frontend/src/config/comuni/demo/vicenza.ts`: sede Segreteria Servizi Sociali Palazzo Negrisolo, Contrà Giovanni Busato 19; tel. 0444 222520; segreteriadirezioneservizisociali@comune.vicenza.it; orari lun/mer/ven 10–12:30, mar/gio 10–12:30 e 16:30–18 (orario valido dal 01/03/2024). Fonte comunale consultata 18/11: https://www.comune.vicenza.it/Vivere-il-Comune/Luoghi/Sede-Servizi-Sociali . Inseriti due centri territoriali:
- Centro Nord: Via Antonio Turra 70, tel. 0444 222940, ex circoscrizioni 1, 4, 5. https://www.comune.vicenza.it/Vivere-il-Comune/Luoghi/Centro-servizi-sociali-territoriali-Centro-Nord
- Sud Est: Via Adolfo Giuriato 72, tel. 0444 222930, ex circoscrizioni 2, 3. https://www.comune.vicenza.it/Vivere-il-Comune/Luoghi/Centro-servizi-sociali-territoriali-Sud-Est/%28has_related_services%29/4
Pagine territoriali consultate 18/11/2026, pubblicazione storica indicata dal sito; data ultimo aggiornamento NON TROVATA. **Non estendere questi due centri a tutti i quartieri.**

**Mancano:** ulteriori centri territoriali e verifica dei loro bacini, bonus regionali e comunali/Ambito VEN_06, sportello ticket ULSS 8, destinatario «Scrivi al tuo Comune» e verifica reale avviso UI #270; Drive da controllare prima di qualsiasi richiesta. Nessuna email inviata; nessuna voce rimossa; nessun merge o deploy. Node non eseguito per assenza di checkout locale; CI e Netlify non verificate per questi commit. Prossimo passo: completare centri e bonus Vicenza oppure procedere a Treviso/Rovigo se file condivisi occupati. Conteggio nuovi completi oggi da questa esecuzione: 0/20; schede parziali migliorate: 1.

## Integrazione Rovigo — 18/11/2026 ore 14, ChatGPT
**PARZIALE, non completo e non chiuso in attesa.** Aggiornata scheda `frontend/src/config/comuni/demo/rovigo.ts`: sede Sportello Servizi Sociali Viale G. Marconi 2, 45100 Rovigo; telefono 0425 206556; email sportelloservizisociali@comune.rovigo.it. Fonte istituzionale Comune, documento del 2024, consultato 18/11/2026: https://www.comune.rovigo.it/myportal/C_H620/api/content/download?id=67483dc495d135008d862b00 ; conferma in avviso comunale successivo: https://www.comune.rovigo.it/myportal/C_H620/api/content/download?id=67af1b6cb98554008bd8fafd . Il numero 0425 2061 precedentemente in scheda era il centralino, non lo sportello. **Orari NON TROVATI** nei documenti: lasciati vuoti. Mancano bonus comunali e Ambito, bonus regionali applicabili, procedura/sportello ticket ULSS 5, destinatario Scrivi al tuo Comune (file occupato da PR #242/#251), verifica dell'avviso realmente visibile #270 e archivio risposte Drive prima di eventuali richieste. Nessuna email inviata, nessuna voce rimossa, nessun merge o pubblicazione. Node/CI/anteprima Netlify non verificati per il commit. Conteggio di questa esecuzione: 0 completi / 20, 0 chiusi in attesa, 1 parziale migliorata.
