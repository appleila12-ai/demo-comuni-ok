# Tolto «Chiedi di inserire il tuo Comune» (26/11/2026)

Richiesta della dott.ssa Baudone: i Comuni sono ormai tutti inseriti, quindi il pulsante non ha più senso e, aprendo una mail a info@tutelapp.it, si confondeva con «Scrivi al tuo Comune».

| Cosa | File | Dettaglio |
|---|---|---|
| Tolto il pulsante «Chiedi di inserire il tuo Comune» e la riga «Se non si apre la posta, scrivi a info@tutelapp.it…» | frontend/app/index.tsx | scheda minima |
| Tolta la funzione non più usata `linkMailtoInserimentoComune` | frontend/src/lib/richiestaComune.ts | — |

Non cambia «Scrivi al tuo Comune» (destinatario: email Servizi Sociali, elenco, email Indice PA, PEC; TutelApp solo in copia). Controllo dati: nessun errore strutturale. Non provato su anteprima grafica (nessun browser disponibile).
