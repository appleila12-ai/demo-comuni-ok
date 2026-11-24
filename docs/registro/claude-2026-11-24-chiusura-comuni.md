# Chiusura di tutti i Comuni con scheda (24/11/2026)

Obiettivo: nessun Comune resta "aperto". Dove un dato manca, la scheda mostra la nota «informazione in validazione» (cosa manca, a chi va chiesto, da quando), come da regola del 12/11/2026. Nessun dato è stato inventato.

## Cosa è cambiato

| Voce | Quanti | Dettaglio |
|---|---|---|
| Comuni chiusi con nota in app | 135 | 291 voci in `frontend/src/content/in-validazione.json`, stato «da chiedere», dal 24/11/2026 |
| Bonus regionale aggiunto | 1 | `taa-copertura-previdenziale-assistenza-familiari` (Regione Trentino-Alto Adige, pagina aggiornata il 06/03/2026): chiude Bolzano, Merano, Trento, Rovereto |
| Comuni completi o chiusi | 424 su 424 | prima 289 su 424 |

## Cosa manca (le voci sono «da chiedere», NON ancora chieste)

Per ognuno dei 135 Comuni: bonus comunali e/o recapiti dei Servizi Sociali (da chiedere ai Servizi Sociali del Comune) e/o scheda ticket (da chiedere all'URP dell'azienda sanitaria). Elenco completo in `docs/informazioni-mancanti.md`.
Le mail non sono ancora partite. Verificato nel codice: con stato «da chiedere» l'app dice solo «stiamo verificando»; la frase «lo abbiamo chiesto il …» compare solo quando lo stato passa a «chiesto». Quando si invia la richiesta ad un ente va cambiato lo stato.

## Controlli

`controlla-dati.js --confronta origin/main`: solo aggiunta di 1 bonus. `controlla-dati.js`: nessun errore strutturale. `verifica-ricerca.js`: 33 schermate collegate.
