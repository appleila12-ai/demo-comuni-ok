# Coordinate di 10 Comuni (raggio di 30 km delle associazioni)

- Data: 14/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-14-claude-coordinate
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

Aggiunte le coordinate di Agropoli, Arenzano, Ariano Irpino, Camogli, Genzano di Roma, Levanto, Montefiascone, Pietrasanta, Pompei e Recco in `frontend/src/content/coordinate-comuni.json`, con `segna-scheda.js --coordinate --scrivi`: sono prese dall'anagrafica ISTAT già nell'app (`comuni-istat.json`), nessuna fonte esterna.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: zero errori; elenco «Comuni senza coordinate»: da 10 a 0.
- `--classifica origin/main`: classe A.

## Cosa manca

Niente per questo tema.
