# Audit bonus regionali — prima coda operativa (10/11/2026)

**Stato:** proposta di verifica, non dati pubblicati. Nessuna misura va aggiunta a `bonus.ts` senza confronto con l'ID esistente e controllo della fonte istituzionale in data corrente.

## Inventario e limiti
- Catalogo censito dal controllo del 10/11: 113 bonus; il numero non dimostra copertura completa.
- Il documento `docs/audit-bonus-nazionali-regionali-2026-11-09.md` distingue le misure nazionali da quelle regionali.
- Il rapporto del controllo indica 13 Regioni con meno di 3 misure regionali, ma occorre estrarre **nomi e ID** dall'output di `node frontend/scripts/controlla-dati.js --coda`; non indovinarli.
- Non modificare le copie obsolete `app/`, `src/`, `tutelapp-demo-parte1/`.

## Coda immediata
1. **Roma Capitale:** verificare nel catalogo se esiste già la misura socializzazione autismo fino a 21 anni; la domanda scade il 12/11/2026. Fonte da rileggere: https://www.comune.roma.it/web/it/bando-concorso.page?contentId=BEC1655000 . Aggiornare il record, non duplicarlo.
2. **Roma Capitale:** distinguere il contributo trattamenti/educazione autismo (finestra conclusa il 05/11/2026). Fonte da rileggere: https://www.comune.roma.it/web/it/bando-concorso.page?contentId=BEC1660379 .
3. **Lazio:** Vita indipendente: misura continuativa con accesso tramite PUA, non bando automaticamente aperto. Fonte: https://www.regione.lazio.it/cittadini/sociale-famiglie/disabilita/vita-indipendente .
4. **Lazio:** caregiver/Card Giver: distinguere riconoscimento da erogazione automatica di contributi. Fonte: https://www.regione.lazio.it/cittadini/sociale-famiglie/caregiver-familiare .
5. **Lazio SILD:** controllare avviamenti Canino (18/11) e Frosinone (20/11) e applicabilità territoriale; evitare di esporli come bonus universali.
6. **Tutte le Regioni:** ricavare l'elenco delle 13 sotto-soglia dallo script, poi cercare nei portali regionali misure di disabilità, non autosufficienza, caregiver, Dopo di noi, vita indipendente, mobilità, lavoro, scuola e autismo. Per ciascuna: ID, territorio, destinatari, requisiti, importo, scadenza, domanda, URL, data verifica, stato.

## Regole di integrazione
- Solo fonti istituzionali; dati dubbi restano nel registro, non nell'app.
- Confrontare ID, titolo, ente, URL e ambito territoriale prima di aggiungere.
- Le misure nazionali non vanno replicate in ogni Regione.
- Interventi limitati: al massimo circa 15 bonus o una Regione per PR.
- Non riscrivere interamente `frontend/src/lib/bonus.ts` (file grande).
- Eseguire `node frontend/scripts/controlla-dati.js --confronta origin/main`, `--classifica origin/main` e rapporto completo.
- Non unire la PR senza autorizzazione: `PUBBLICAZIONE_AUTOMATICA_DATI: no`.

## Cosa manca
- Output aggiornato della coda di lavoro per identificare le 13 Regioni.
- Verifica riga per riga dei 113 bonus e delle scadenze.
- Confronto delle singole misure di Roma/Lazio con gli ID del catalogo.
- Test e anteprima Netlify su eventuali modifiche effettive ai dati.

**Rimozioni:** nessuna.
