# Registro ChatGPT — Veneto VEN-07, stato reale Susegana — 19/11/2026

**Proprietario:** ChatGPT. **Territorio:** Conegliano, Vittorio Veneto, Susegana (TV). **Verifica:** 19/11/2026.

## Riscontro concreto sul codice main
- `frontend/src/config/comuni/demo/conegliano.ts` e `vittorio-veneto.ts` esistono, sono dimostrative e hanno `daVerificare: true`; contengono recapiti sociali, email ordinaria e link esenzione ticket ULSS 2. La presenza di email NON prova da sola il funzionamento end-to-end del pulsante «Scrivi al tuo Comune».
- **`frontend/src/config/comuni/demo/susegana.ts` non esiste su main (404 GitHub Contents API il 19/11/2026).** Le ricerche precedenti su Susegana sono verifiche di fonti, **non una scheda parziale esistente nell'app**. Prima di crearla servono tutte le verifiche e l'aggiornamento degli indici tramite script autorizzati.
- `frontend/src/config/comuni/destinatari.ts` dichiara di essere archivio alternativo solo per Comuni senza email nella scheda; non aggiungere duplicati per Conegliano o Vittorio Veneto senza prova del comportamento reale.
- `docs/AUTORIZZAZIONI.md`: `PUBBLICAZIONE_AUTOMATICA_DATI: no`. Nessuna pubblicazione consentita in questa esecuzione.
- PR #363 risulta **già unita** su main (commit `5024bf1a570ff09450d1f70944ec26d6903e4cde`): non riaprire né duplicare il registro precedente.

## Fonte ufficiale consultata oggi
- Comune di Susegana, portale istituzionale dei servizi: https://www.comune.susegana.tv.it/home/servizi (consultato il 19/11/2026; data aggiornamento non indicata). La pagina descrive il portale generale, **non** certifica bonus specifici o la completezza dei cinque requisiti.
- Comune di Susegana, pagina istituzionale https://www.comune.susegana.tv.it/pagamenti-pagopa/ (consultata il 19/11/2026; portale indica aggiornamento 12/10/2026). Riporta un avviso «Buono libri» 2026/27 con finestra 14/09–09/10/2026, **già chiusa**. Non introdurre come bando aperto; prima di inserirlo verificare la pagina dell'avviso e la pertinenza alla disabilità.

## Stato distinto, senza conteggi impropri
| Comune | Scheda presente su main | Stato | Mancanze |
|---|---|---|---|
| Conegliano | sì | parziale | bonus comunali e d'Ambito, verifica completa regionale, destinatario end-to-end, avviso UI |
| Vittorio Veneto | sì | parziale | conflitto trasporto scolastico 2026, ulteriori bonus/Ambito, destinatario end-to-end, avviso UI |
| Susegana | **no** | ricerca documentale parziale, **non scheda completata** | creazione scheda e tutti i cinque requisiti, fonte e data per ogni campo |

**Bilancio reale del lotto:** 0 Comuni completi, 0 chiusi in attesa di riscontro, 2 schede presenti parziali, 1 Comune soltanto ricercato. Nessuna prova di richiesta ufficiale inviata per questi tre Comuni.

**Controlli:** Node non eseguibile attraverso il connettore GitHub; CI e anteprima Netlify da verificare sulla PR. Nessuna verifica visiva dell'avviso #270. Nessuna email, nessuna modifica alle schede dell'app, nessun merge o deploy.

**Prossimo passo:** controllare l'archivio Drive prima di ogni eventuale richiesta; verificare con le fonti ufficiali le cinque sezioni di Susegana e l'ATS VEN-07, poi preparare integrazione chirurgica e controlli Node. Non bloccare gli altri Comuni se una fonte è indisponibile.

## Controllo puntuale delle due schede esistenti — 19/11/2026, lettura diretta su main
- **Conegliano** (`frontend/src/config/comuni/demo/conegliano.ts`): Servizi Sociali presenti con telefono 0438 413210 ed email ordinaria `servizisociali@comune.conegliano.tv.it`; fonte indicata nel file: avviso comunale 30/03/2026, https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=69ca4fcdf00987008b10c9e6. Esenzione ticket: link ULSS 2 per patologia https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia e rinvio all'invalidità civile. Bonus: la scheda mostra solo orientamento alle famiglie fragili, senza elenco completo dei bonus regionali e comunali/d'Ambito. Email in configurazione presente, ma pulsante non testato in UI. **Parziale, non completo.**
- **Vittorio Veneto** (`frontend/src/config/comuni/demo/vittorio-veneto.ts`): Servizi Sociali presenti con telefono 0438 569305, email `sociale@comune.vittorio-veneto.tv.it`, fonte https://www.comune.vittorio-veneto.tv.it/home/amministrazione/uffici/Ufficio-26.html (aggiornamento dichiarato nel file 10/11/2023). Esenzione ticket ULSS 2 presente. Tre interventi comunali elencati: bonus acqua (scadenza 30/11/2026), rette prima infanzia (09/12/2026), mini alloggi anziani (10/12/2026); i requisiti restano da confrontare con gli avvisi integrali. Non risultano completi tutti i bonus d'Ambito e regionali. Email presente, pulsante non testato. **Parziale, non completo.**
- **Susegana:** manca ancora il file di scheda; non conteggiare come scheda parziale esistente né come completamento.
- **Avviso #270:** `daVerificare: true` è presente nelle due configurazioni, ma non dimostra che l'avviso richiesto sia visibile; nessuna prova visiva acquisita. Non modificare la UI senza autorizzazione.

## Esito tecnico della PR #367 — 19/11/2026
- Commit esaminato: `4f1ab9984c3e6f4f14c02ef702827288166fff4c`.
- GitHub riporta `netlify/tutelappcomuni/deploy-preview: success`, dettaglio https://app.netlify.com/projects/tutelappcomuni/deploys/6aff38b882731f0505dd72ff . È **solo esito del controllo**, non una verifica visiva delle schermate; questa PR modifica esclusivamente il registro.
- I tre comandi Node richiesti non eseguiti nell'ambiente del connettore. Non inferire che i test dati siano superati dal solo stato Netlify.
- PR aperte controllate: #368 (Claude: risposte URP), #367 (questa), #365, #216, #209, #204; nessun file modificato da questa PR coincide con quelli delle altre. Ultimi 10 commit consultati prima di questo aggiornamento.
- **Bilancio invariato:** 0 Comuni completi / obiettivo 20; 0 chiusi in attesa; 2 schede esistenti parziali e 1 Comune solo ricercato. Nessuna richiesta ufficiale inviata in questa esecuzione.
