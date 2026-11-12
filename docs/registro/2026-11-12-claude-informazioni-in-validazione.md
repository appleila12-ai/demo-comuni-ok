# Informazioni in validazione: chiusura Comuni con nota in app

- Data: 12/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-12-claude-informazioni-in-validazione / (vedi PR)
- Classe (da `--classifica origin/main`): B (tocca `frontend/app/bonus.tsx`)

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| in-validazione.json (nuovo) | 24 Comuni liguri della provincia della Spezia (Ameglia … Zignago) | aggiunta voce «bonus-comunali» | nessun bonus comunale trovato; richiesta ai Servizi Sociali da inviare | 12/11/2026 | in validazione |
| app/bonus.tsx | pagina Bonus | nota «Informazione in validazione» quando il Comune non ha misure proprie ed è nell'elenco | — | 12/11/2026 | — |
| completezza-comuni.js | criterio | un dato «in validazione» non impedisce di chiudere il Comune; genera `docs/informazioni-mancanti.md` | — | 12/11/2026 | — |
| completezza-comuni.json / .md | rigenerati | prima erano disallineati (27 Comuni completi, non 28) | — | 12/11/2026 | — |

## Rimozioni

nessuna

## Controlli

- vedi PR

## Cosa manca

1. Inviare ai 24 Comuni la richiesta «esistono contributi comunali per persone con disabilità?» e registrare le risposte (stato nel file `docs/informazioni-mancanti.md`).
2. Estendere il meccanismo ad altre Regioni dopo le risposte/verifiche.

## Mail da inviare (bozze)

Nessuna ancora creata.
