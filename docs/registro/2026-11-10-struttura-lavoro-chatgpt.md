# Struttura per il lavoro autonomo di ChatGPT sui dati

- Data: 10/11/2026
- Autore: Claude
- Ramo: struttura-lavoro-chatgpt
- Classe: C (tocca file protetti: workflow, `netlify.toml`, `frontend/scripts/`, istruzioni)

## Cosa è stato aggiunto

| Archivio | Elemento | Azione | Fonte | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| istruzioni | `CHATGPT_WORKFLOW.md`, `AGENTS.md` | aggiunta | — | 10/11/2026 | — |
| indice | `docs/INDICE-ARCHIVI.md` | aggiunta | analisi del repository al commit `9e55ace` | 10/11/2026 | letto dal codice |
| autorizzazioni | `docs/AUTORIZZAZIONI.md` (interruttore **spento**) | aggiunta | — | 10/11/2026 | — |
| registro | `docs/registro/` | aggiunta | — | 10/11/2026 | — |
| controlli | `frontend/scripts/archivi-lib.js`, `controlla-dati.js`, `segna-scheda.js` | aggiunta | — | 10/11/2026 | provati su dati reali e con errori introdotti di proposito |
| controllo su GitHub | `.github/workflows/controlli-dati.yml` | aggiunta | — | 10/11/2026 | — |
| build Netlify | `netlify.toml` e `frontend/netlify.toml`: prima del build si esegue `controlla-dati.js --bloccante` | modifica | — | 10/11/2026 | — |

Nessun dato dell'app (bonus, Comuni, associazioni) è stato cambiato.

## Rimozioni

nessuna

## Stato di partenza dei dati (fotografia del 10/11/2026)

Zero errori strutturali. Coda di lavoro: 7 bonus «attivi» con data passata, 4 bonus in stato `da-verificare`, 5 fonti non riconosciute come enti pubblici, 13 bonus chiusi da oltre 10 giorni, 13 Regioni con meno di 3 misure regionali, 33 Comuni senza indirizzo per «Scrivi al tuo Comune», 6 Comuni senza coordinate, 237 schede Comune snelle. Dettaglio: `node frontend/scripts/controlla-dati.js`.

## Cosa manca

1. Decidere se attivare la pubblicazione automatica delle PR di classe A (`docs/AUTORIZZAZIONI.md`, oggi `no`).
2. Eseguire il test di ambiente di ChatGPT (`CHATGPT_WORKFLOW.md`, sezione 11) per sapere quali limiti ha.
3. Le copie obsolete in radice (`app/`, `src/`, `tutelapp-demo-parte1/`): da rimuovere con una PR separata, dopo l'ok.
