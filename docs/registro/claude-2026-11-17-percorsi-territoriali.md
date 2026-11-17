# TutelApp – Percorsi Territoriali: modulo riservato per Mediglia e Sarzana

- Data: 17/11/2026
- Autore: Claude
- Ramo / PR: percorsi-territoriali-claude
- Classe (da `--classifica origin/main`): **C** (tocca `netlify.toml` e `frontend/netlify.toml`). Ok esplicito della dott.ssa Baudone del 17/11/2026.

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte | Stato |
|---|---|---|---|---|
| netlify.toml, frontend/netlify.toml | cartella delle funzioni, intestazioni noindex e no-store per /accesso-comuni | aggiunta | - | da provare in anteprima |
| frontend/netlify/functions/percorsi.mjs | accesso con password per Comune, gettone firmato, salvataggio con storico (Netlify Blobs) | nuovo | - | logica provata con archivio simulato |
| frontend/src/percorsi/ | schema del modulo (22 sezioni, 4 percorsi), configurazioni Mediglia e Sarzana | nuovo | scheda pubblicata del Comune | da provare in anteprima |
| frontend/app/accesso-comuni.tsx | pagina riservata (solo web), non collegata a nessun menu | nuovo | - | non provata nel browser |
| frontend/scripts/verifica-ricerca.js | «accesso-comuni» aggiunta alle schermate tecniche escluse dalla ricerca (una parola, file protetto, ok di classe C) | modifica | - | controllo dati: zero errori |
| docs/percorsi-territoriali/ | attivazione, guida di una pagina, scheda progetto, bozze email (non inviate) | nuovo | - | - |

Nessun dato di Comuni, bonus o destinatari modificato (Lombardia è in quota ChatGPT). Nessuna voce tolta.

## Controlli

- Prova della funzione server con archivio simulato: login, blocco dopo 5 tentativi, password corta rifiutata, gettone alterato, isolamento tra Comuni, stati (il Comune non può validare né pubblicare), conflitto di versione, storico: tutti superati. Non provata la scadenza del gettone.
- Sintassi dei file .ts/.tsx controllata. **Non eseguiti**: build dell'app, test nel browser, accessibilità, telefono, stampa (mancano le librerie e la rete in questa sessione).
- `controlla-dati.js`: zero errori dopo l'aggiunta di «accesso-comuni» alle schermate escluse dalla ricerca (la prima prova su GitHub aveva dato 1 errore per questo).

## Cosa manca

1. `yarn add @netlify/blobs` in `frontend` (aggiorna `yarn.lock`), da lanciare a mano.
2. Le quattro variabili segrete su Netlify (`docs/percorsi-territoriali/ATTIVAZIONE.md`).
3. Prova dell'anteprima con password di prova su computer e telefono, controllo di accessibilità e stampa.
4. Dove Netlify conserva i dati e accordo sul trattamento dei dati.
5. Pagina pubblica del percorso con link diretto e QR code: serve una seconda libreria e dati verificati dal Comune.
6. Referenti di Sarzana (nome e ruolo istituzionale da fonte ufficiale) e conferma del referente di Mediglia.
7. Soggetto proponente (TutelApp o PED) e condizioni economiche uniche, prima di inviare le email.
