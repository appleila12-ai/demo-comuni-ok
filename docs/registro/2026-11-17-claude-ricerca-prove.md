# Prova automatica della casella «Di cosa hai bisogno?»

- Data: 17/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-17-claude-ricerca-prove
- Classe (da `--classifica origin/main`): C (tocca `frontend/scripts/`, con l'ok esplicito della dott.ssa Baudone del 17/11/2026)

## Cosa è cambiato

- Nuovo `frontend/scripts/prova-ricerca.js`: prova ogni ricerca di `frontend/scripts/ricerca-prove.json` e controlla che esca almeno una risposta e, se indicata, che la pagina attesa sia tra le prime 3. Uso: `node frontend/scripts/prova-ricerca.js` (solo Node 22).
- Nuovo `frontend/scripts/ricerca-prove.json`: 409 ricerche (le due liste da 200 della dott.ssa Baudone più anffas, autismo, tumore, inail). La pagina attesa è quella che la ricerca dà oggi, controllata a mano il 17/11/2026: se si migliora l'ordine, si aggiorna il file.
- Nessun file esistente cambiato; non è collegato alla pubblicazione (non blocca Netlify né le PR).

## Limiti

- Prova solo le risposte fisse dell'app: bonus, associazioni e FAQ dei singoli Comuni non sono inclusi.
- Per usarlo in automatico a ogni PR serve aggiungerlo al flusso di GitHub (`.github/`, file protetto): da decidere con la dott.ssa Baudone.

## Rimozioni

nessuna

## Controlli

- Prova superata su 409 ricerche; provato anche con due ricerche sbagliate di proposito: il controllo le segnala ed esce con errore.
