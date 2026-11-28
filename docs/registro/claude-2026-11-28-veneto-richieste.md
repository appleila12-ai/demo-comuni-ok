# Veneto: richieste sui bonus comunali (28/11/2026)

- Data: 28/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-28-claude-veneto-richieste
- Classe: A (solo `frontend/src/content/in-validazione.json` e documenti)

## Cosa è cambiato

| Voce | Azione | Motivo |
|---|---|---|
| in-validazione: rovigo, montebelluna, legnago (bonus comunali) | «da chiedere» → «chiesto», dal 28/11/2026 | mail inviata il 28/11/2026 ai Servizi Sociali, una sola domanda |
| in-validazione: treviso, mira (bonus comunali) | «da chiedere» → «chiesto», dal 06/11/2026 | la domanda sui bonus comunali era già nella mail del 06/11/2026 (nessuna risposta); non rimandata |

Indirizzi usati (già in scheda, nessun protocollo né PEC): Rovigo sportelloservizisociali@comune.rovigo.it · Montebelluna servizisociali@comune.montebelluna.tv.it · Legnago ufficioassistenza@comune.legnago.vr.it. Non scritti: Castelfranco Veneto (già contattata, risposta 20/11) e Vittorio Veneto (verifica in corso nella PR #417).

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: vedi PR
- Anteprima Netlify: da guardare sulla PR

## Cosa manca

1. Risposte di Rovigo, Montebelluna, Legnago, Treviso e Mira sui bonus comunali: inserire i dati, passare la voce a risolta, registrare la risposta.
2. Veneto ancora «da chiedere» senza indirizzo di ufficio in scheda: Bassano del Grappa, Chioggia, Jesolo, Mirano, San Bonifacio, San Donà di Piave, Schio, Spinea (e Belluno, per cui l'Ambito VEN01 è ambitoven01@comune.belluno.it). Gli indirizzi sono in ricerca nel canale con ChatGPT (riga 78).
3. Esenzione ticket: richieste agli URP delle ASL venete ancora «da chiedere».
