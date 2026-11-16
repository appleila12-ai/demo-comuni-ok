# Elenco dei Comuni: una sola lista con il semaforo verde, giallo e rosso

- Data: 16/11/2026
- Autore: Claude
- Ramo / PR: app/2026-11-16-claude-semaforo-comuni
- Classe (da `--classifica origin/main`): B (tocca il codice dell'app: `frontend/app/comuni.tsx`)

## Cosa è cambiato

Nell'elenco «Scegli il tuo Comune» le due sezioni «Scheda con tutte le sezioni» e «Scheda con sezioni in arrivo» sono tolte. Dentro ogni Regione c'è una sola lista in ordine alfabetico, e ogni Comune ha un pallino:

- **verde, «Scheda completa»**: il Comune è nell'elenco delle schede complete (`completezza-comuni.json`) e ha almeno un indirizzo o un'email dei Servizi Sociali;
- **giallo, «In lavorazione»**: la scheda c'è ma non è completa;
- **rosso, «Pochi dati»**: solo l'ingresso (nome, provincia e Regione), nessun servizio verificato.

Sotto la casella di ricerca c'è una legenda con i tre colori. Il colore non è l'unica informazione: la parola dello stato è letta dagli screen reader (nel nome del pulsante). Colori presi dal tema dell'app (`success`, `warning`, `error`).

## Numeri attesi (16/11/2026)

- Verde: 172 Comuni. L'elenco delle schede complete ne conta 291, ma 119 non hanno né email né indirizzo dei Servizi Sociali (solo il centralino): per non dare un falso «completo» sono gialli.
- Giallo: 252 Comuni con scheda.
- Rosso: 7.443 Comuni presenti solo nell'anagrafica.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: zero errori; classe B.
- Il sito va controllato a vista sull'anteprima di Netlify (non è stato possibile compilare l'app nella sessione).

## Cosa manca

1. Verificare a vista l'elenco sull'anteprima (telefono e computer, ricerca di un Comune verde, giallo e rosso) · dott.ssa Baudone.
2. Il criterio di `docs/completezza-comuni.md` dice «telefono + email o indirizzo», ma l'elenco generato include 119 Comuni senza email né indirizzo: il generatore (`docs/strumenti/completezza-comuni.js`) va riallineato · Claude, in una PR a parte.
