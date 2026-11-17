# Riforma della disabilità dal 1° gennaio 2027: regole nell'app

- Data: 17/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-17-claude-riforma-2027
- Classe: B (testi e logica della data, nessun archivio dati Comuni toccato)

## Cosa è cambiato

| Sezione | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| Percorso, passo 1 | Chi rilascia il certificato, dopo il certificato, tempi (15/30/90 giorni, sospensione), documenti (integrazioni fino a 7 giorni prima della visita), decorrenza (mese dopo l'invio) | aggiunta (`frontend/src/lib/riformaDisabilita.ts`, `frontend/app/percorso.tsx`) | scheda INPS certificato medico introduttivo; notizia INPS 24/02/2026 medici certificatori; messaggio INPS 4465/2024 (PDF su inps.it) | 17/11/2026 | verificato su inps.it |
| Percorso, passo 1 | Caso over 70 (patologia cronica che peggiora: procedura precedente) | aggiunta | notizia INPS 27/05/2026 (messaggi 1377 e 1750) | 17/11/2026 | verificato; data di fine NON indicata da INPS, nota «controlla sul sito INPS o chiedi al patronato prima di agire» |
| Logica data | `riformaInTuttaItalia()`: vero dal 01/01/2027; prima nulla cambia (province della sperimentazione in `percorso.ts`) | aggiunta | scheda INPS | 17/11/2026 | verificato |
| Testi | `NEXT_STEPS[0]`, `CERT_EXPLAINER`, FAQ, glossario, `riforma.intro`, `riforma.cosaCambia[0]` | modifica: vale prima e dopo il 2027 («dove la riforma è attiva… dove no serve la domanda entro 90 giorni») | come sopra | 17/11/2026 | verificato |
| Ricerca «Di cosa hai bisogno?» | `riforma-2027-certificato`, `over-70` | aggiunta in `ricerca.ts` | — | 17/11/2026 | `verifica-ricerca.js` ok |

## Rimozioni

Tolti perché senza fonte istituzionale:
- «Costa in media tra 30€ e 80€, secondo la tariffa del medico» (CERT_EXPLAINER)
- «Ti viene consegnata una ricevuta…» (CERT_EXPLAINER)
- «restano validi a tempo indeterminato e non perdi nessuna agevolazione» (FAQ «Con la riforma perdo il mio verbale attuale?» e `riforma.salvaguardia`): sostituito con la nota «controlla sul sito INPS o chiedi al patronato prima di agire».

## Controlli

- `controlla-dati.js`: nessun errore strutturale
- `verifica-ricerca.js`: ok
- TypeScript non verificabile nel sandbox (niente node_modules): da controllare con l'anteprima Netlify
- Anteprima Netlify: da guardare (Percorso passo 1, Riforma, ricerca «over 70», «certificato»)

## Cosa manca

1. Salvaguardia dei verbali già riconosciuti al 31/12/2026 · testo D.Lgs. 62/2024 art. 35 e messaggi INPS · normattiva.it / inps.it
2. Testi primari D.Lgs. 62/2024 (art. 6, 7, 8, 9, 35), DL 19/2026 art. 7 · normattiva.it (non leggibili dal sandbox)
3. Messaggi INPS 635, 637, 639, 1377: testo completo (allegati non leggibili) · inps.it, circolari e messaggi
4. Data di fine della procedura precedente per gli over 70 · messaggi INPS 1377/1750, patronato
5. Elenco ufficiale «cosa portare alla visita» · scheda INPS o messaggio dedicato
6. Messaggio INPS 2550 (SISDA, esclusioni over 70) · inps.it
7. Base di conoscenza dell'assistente (`conoscenza.mjs`): non è nel repository, sta sul server
8. Da chiarire: «certificato valido 90 giorni» contro «non limitato nel tempo»
9. `livelliSostegno` e altri testi senza fonte: da verificare (fuori da questo lavoro)
