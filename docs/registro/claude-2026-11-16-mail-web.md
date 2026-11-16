# Posta che non si apre sulle schede dei Comuni (Abano Terme)

- Data: 16/11/2026
- Autore: Claude
- Ramo / PR: app/2026-11-16-claude-mail-web
- Classe (da `--classifica origin/main`): B (codice dell'app)

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| src/lib | apriMail.ts (nuovo) | sul web la posta si apre nella stessa scheda (`window.location`), non in una scheda nuova | — | 16/11/2026 | da provare sull'anteprima |
| src/components | ScriviAlComune.tsx | «Scrivi al tuo Comune» usa il nuovo `apriMail` | — | 16/11/2026 | da provare sull'anteprima |
| app | index.tsx | «Chiedi di inserire il tuo Comune» usa `apriMail` e sotto c'è l'indirizzo info@tutelapp.it da copiare, se la posta non si apre | — | 16/11/2026 | da provare sull'anteprima |

Segnalazione della dott.ssa Baudone: nella scheda di Abano Terme «Scrivi al tuo Comune» / «Chiedi di inserire il tuo Comune» non funziona. I dati di Abano Terme sono corretti (sito, PEC ed email generica dell'Indice PA presenti). Causa probabile, **non riprodotta** (nessun browser disponibile nella sessione): il link `mailto:` veniva aperto in una scheda nuova, che su molti telefoni e browser non apre nulla; l'errore era ignorato in silenzio.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: da eseguire (vedi PR).

## Cosa manca

1. Provare sull'anteprima, sullo stesso dispositivo e browser della segnalazione (telefono o computer, quale browser, quale programma di posta) · dott.ssa Baudone.
2. Se non funziona ancora: servono dispositivo e browser, e che cosa succede toccando il bottone (niente / scheda vuota / messaggio di errore).
