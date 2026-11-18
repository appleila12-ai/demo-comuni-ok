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
