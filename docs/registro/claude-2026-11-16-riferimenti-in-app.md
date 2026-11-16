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

## Correzione prima della pubblicazione (16/11/2026)

- «Scrivi al tuo Comune»: per le schede minime l'email generica dell'Indice PA ha ora la precedenza sulla PEC (prima la PEC passava davanti all'email); la PEC resta come ultima scelta. Motivo: molte PEC rifiutano la posta da caselle normali. L'avviso «è una PEC» compare solo quando il destinatario è davvero una PEC.
- `frontend/ANAGRAFICA-COMUNI.md`: aggiornata la riga sul sito dei Comuni (ora dall'Indice PA).
- Limite noto: nelle schede minime il link al sito è quello del Comune (non dei Servizi Sociali) ma alcune schermate lo chiamano «Sito dei servizi sociali»: da riallineare in una PR a parte.
