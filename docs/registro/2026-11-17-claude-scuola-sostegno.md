# Pagina «Scuola e sostegno» (PEI, GLO, ore di sostegno, educatore)

- Data: 17/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-17-claude-scuola-sostegno
- Classe (da `--classifica origin/main`): B (nuova schermata, `ricerca.ts`) più prove in `frontend/scripts/`

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| app | `frontend/app/scuola-sostegno.tsx` (PEI e GLO) | aggiunta | https://www.istruzione.it/inclusione-e-nuovo-pei/allegati/ALLEGATO_%20B_%20Linee%20Guida.pdf | 17/11/2026 | verificato |
| app | stessa pagina (educatore a carico dell'Ente locale) | aggiunta | https://www.mim.gov.it/en/glossario-iscrizioni-online | 17/11/2026 | verificato |
| app | stessa pagina (GLO convocato a fine anno per le risorse di sostegno) | aggiunta | nota USR Campania del 26/05/2025, sito MIM | 17/11/2026 | verificato |
| app | stessa pagina (GLO propone le ore di sostegno, art. 15 c. 10 legge 104/1992) | aggiunta | https://www.marche.istruzione.it/allegati/2022/ALLEGATO%20B.pdf | 17/11/2026 | verificato |
| ricerca | voce `scuola-sostegno` (PEI, sostegno, educatore, DSA, ADHD, dislessia) | aggiunta; parole tolte da `diritti` | - | 17/11/2026 | - |

Scelte: la procedura di certificazione NON è inclusa: le fonti sono in transizione e cambiano per Regione. Nessun tempo, nessuna ora concessa, nessun rimedio (ricorsi): non sono nelle fonti.

## Rimozioni

nessuna (le parole di ricerca sulla scuola passano da «I miei diritti» alla nuova pagina)

## Controlli

- `controlla-dati.js`: nessun errore strutturale. `verifica-ricerca.js` (32 schermate) e `prova-ricerca.js` (409 prove): superati.
- Attese aggiunte in `ricerca-prove.json` per le ricerche su 18 anni e scuola.
- Non compilata qui: da guardare sull'anteprima Netlify.

## Cosa manca

1. Come si ottiene la certificazione di disabilità per la scuola, Regione per Regione: da cercare sulle Regioni.
2. Cosa fare se le ore di sostegno non bastano o mancano: non in fonti ministeriali lette.
3. Trasporto scolastico, istruzione domiciliare e continuità del docente di sostegno: non inclusi.
