# Casella «Di cosa hai bisogno?»: errori di battitura e parole mancanti

- Data: 17/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-17-claude-ricerca-box
- Classe (da `--classifica origin/main`): B

## Cosa è cambiato

Nessun dato di bonus o enti: solo `frontend/src/lib/ricerca.ts` (parole con cui le persone cercano).

- Tolleranza agli errori: una parola di 4 lettere con una lettera dimenticata o in più ora è riconosciuta («inal» trova INAIL). Lo scambio di lettera resta escluso per non confondere «casa» e «cosa».
- Parole aggiunte alle voci esistenti: patologie (demenza, parkinson, SLA, epilessia, autistico…), udito (sordo, apparecchio acustico), RSA e centro diurno, ADI e assegno di cura, contrassegno (CUDE, mobilità ridotta), CPI, tariffe agevolate, trasporto per dialisi e terapie, infortuni sul lavoro in frasi di uso comune.
- Nessun percorso nuovo: nessuna scheda è stata creata.

## Rimozioni

nessuna

## Controlli

- `verifica-ricerca.js`: 30 schermate collegate.
- Prove su 40 ricerche reali: vedi PR.

## Cosa manca

1. Pagine che non esistono ancora e che le persone cercano: scuola e insegnante di sostegno, caregiver (contributi e tutele), salute mentale e psicologo, centri diurni del Comune. La ricerca non può trovarle finché la pagina non c'è.
2. Le schede dei Comuni (bonus, associazioni) entrano nella ricerca solo per il titolo: manca una prova per Comune.
