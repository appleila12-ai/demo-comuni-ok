# Pagina «Compiere 18 anni» (INPS)

- Data: 17/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-17-claude-maggiore-eta
- Classe (da `--classifica origin/main`): B (nuova schermata e `ricerca.ts`)

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| app | `frontend/app/maggiore-eta.tsx` (pagina «Compiere 18 anni») | aggiunta | https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2025/02/Circolare_14832/Allegati/15908_Circolare-numero-42-del-17-02-2025.pdf (paragrafi 1.5 e 1.6) | 17/11/2026 | verificato |
| app | stessa pagina, indennità di frequenza solo sotto i 18 anni | aggiunta | https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.indennit-mensile-di-frequenza.html | 17/11/2026 | verificato |
| ricerca | voce «Compiere 18 anni» (`maggiore-eta`) | aggiunta; parole «18 anni» e «maggiore età» tolte da amministratore e progetto | - | 17/11/2026 | - |

Contenuto: indennità di frequenza (domanda nei sei mesi prima dei 18 anni, prestazioni provvisorie, revoca e recupero se i controlli escludono il diritto, visita sugli atti, decorrenza dal mese dopo i 18 anni); chi non ha bisogno di nuova visita (accompagnamento, indennità di comunicazione, patologie stabilizzate o ingravescenti, talidomide, Down) e modulo AP70; verbale aggiornato con nuova domanda; chi presenta la domanda dopo i 18 anni (interessato, delegato, tutore, amministratore di sostegno).

Scelte: nessun importo, nessun tempo di pagamento, nessun costo (non sono nella fonte); nessuna affermazione sulla potestà dei genitori (non verificata).

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js` e `verifica-ricerca.js` (31 schermate collegate): vedi PR.
- Prova su 10 ricerche («Mio figlio ha compiuto 18 anni», «maggiorenne», «modulo AP70»…): la nuova pagina esce per prima.
- Non ho potuto compilare l'app qui (mancano le dipendenze): la verifica visiva si fa sull'anteprima Netlify.

## Cosa manca

1. Verifica a vista dell'anteprima Netlify della pagina.
2. Cosa cambia con la riforma dal 1/1/2027 per chi compie 18 anni: non verificato, non incluso.
3. Il lato dei servizi del Comune (passaggio dai servizi per minori a quelli per adulti): da cercare su fonti dei Comuni.
