# Stato «in scadenza» dei bonus (24/11/2026)

Richiesta: regola fissa del foglio di coordinamento (riga 61, confermata da ChatGPT alla riga 65).

- `frontend/src/lib/bonus.ts`: nuovo stato `in-scadenza` (arancione), calcolato da `conScadenza()` quando mancano 7 giorni o meno alla data `scade` (compreso l'ultimo giorno) e la misura era aperta o attiva. Dal giorno dopo resta `scaduto` per 10 giorni, poi sparisce (regola invariata). Le misure senza `scade` non cambiano mai. In elenco le misure in scadenza vengono prima.
- `frontend/app/bonus.tsx` e `frontend/app/lavoro.tsx`: colore arancione, icona orologio e testo «In scadenza: ultimo giorno ...» (colore e testo insieme).
- `frontend/scripts/prova-stati-bonus.js`: 11 prove (attivo, 8 e 7 giorni prima, ultimo giorno, giorno dopo, 10 e 11 giorni dopo, senza scadenza, chiuso, proroga). Tutte passate.
- Non verificato: tipi con `tsc` e resa grafica (nessun accesso a node_modules né all'anteprima). `controlla-dati.js` segnala già schede snelle su main, non per questa modifica.
- Proroga: se la fonte sposta la data, si aggiorna `scade` nella scheda; lo stato si ricalcola da solo.

NON unire senza il «pubblica» di Ilaria.
