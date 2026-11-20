# Risposte degli uffici del 19-20/11/2026: Roma Municipi XII e XIII, Siena, Castelfranco Veneto

- Data: 20/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-20-claude-risposte-roma-xii-xiii-siena
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| demo/roma.ts | Municipio XII · Segretariato e PUA | modifica: orari, accesso senza appuntamento; tolta la nota «mancano le altre sedi» | risposta Municipio XII (Dott.ssa Federica Manna, ticket CQ/2026/142140) del 20/11/2026 | 20/11/2026 | verificato (risposta scritta) |
| demo/roma.ts | Municipio XII · PUA Via Ramazzini, Via Longhena, Via della Consolata | aggiunte 3 sedi con orari | stessa risposta | 20/11/2026 | verificato |
| demo/roma.ts | Municipio XII · Sportello Caregiver | aggiunti telefoni 06 69616613 / 06 69616220 | stessa risposta | 20/11/2026 | verificato |
| demo/roma.ts | Municipio XIII · Segretariato Sociale | modifica: sede, appuntamento, orari, cellulare | risposta Municipio XIII (Ass. Soc. Mariarosa Rinella) del 20/11/2026 | 20/11/2026 | verificato |
| demo/roma.ts | Municipio XIII · PUA Boccea e Montespaccato | aggiunte 2 sedi | stessa risposta | 20/11/2026 | verificato |
| demo/siena.ts | PUA Siena | aggiunta voce (tel., email, orari) | risposta automatica dell'ufficio del 20/11/2026 | 20/11/2026 | verificato; orari indicativi |
| demo/castelfranco-veneto.ts | ICD · Ufficio Servizi Sociali | aggiunta voce (ICD senza scadenze, tel., rimando al distretto per ICD caregiver) | risposta dell'ufficio del 19-20/11/2026 | 20/11/2026 | verificato |

Già inseriti da altre sessioni, nessuna modifica: L'Aquila (registro 19/11), AUSL Parma Sud-Est (18/11), Imola e Padova (19/11).

## Rimozioni

nessuna (a Roma XII e XIII le voci vecchie sono sostituite da voci più complete)

## Controlli

- `controlla-dati.js --confronta origin/main`: vedi PR
- Anteprima Netlify: vedi PR

## Cosa manca

1. Roma Municipio XII: lunedì dalle 8:30 alle 17:00 a Via della Consolata e orari dello Sportello Caregiver: la risposta dice «possibili variazioni sul sito di Roma Capitale». Chiedere conferma a pua.mun12@comune.roma.it.
2. Roma Municipio XIII: nessun altro sportello indicato; PEC/telefono diretto del PUA integrato non forniti.
3. Siena: l'orario del PUA viene da una risposta automatica; chiedere conferma a pua.siena@uslsudest.toscana.it. Mail del Segretariato Sociale SdS non più monitorata.
4. Castelfranco Veneto: ICD caregiver, informazioni non date dal Comune: chiedere al distretto di Asolo (ULSS 2) o alla Regione.
5. ULSS 6 Padova e AUSL Imola hanno risposto solo con link: in attesa di dettagli (tracker contatti).
