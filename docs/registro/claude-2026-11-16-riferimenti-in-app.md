# Riferimenti dell'Indice PA mostrati nell'app

- Data: 16/11/2026
- Autore: Claude
- Ramo / PR: app/2026-11-16-claude-riferimenti-in-app
- Classe (da `--classifica origin/main`): B (codice, serve «pubblica»)

## Cosa è cambiato

- `anagrafica.ts`: nuova `riferimentiComune(slug)`, che legge solo al primo uso `riferimenti-comuni.json` (non entra nell'avvio dell'app). Le schede minime ricevono sito (con https://) e PEC.
- `richiestaComune.ts`: se il Comune ha solo l'elenco e non ha altro indirizzo, «Scrivi al tuo Comune» usa la PEC o, in mancanza, l'email generica dell'Indice PA. La richiesta resta «da controllare».
- `index.tsx`: il riquadro «versione dimostrativa» cita la fonte: Indice PA (AgID), licenza CC BY 4.0.

## Rimozioni

Nessuna.

## Cosa manca

1. Telefono, indirizzo e orari dei Servizi Sociali · tutti i Comuni minimi · sito del Comune · Servizi Sociali.
2. 111 Comuni senza riferimenti nell'Indice PA · elenco in `claude-2026-11-16-riferimenti-comuni-ipa.md`.
