# Veneto: richieste sui bonus comunali (28/11/2026)

- Data: 28/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-28-claude-veneto-richieste
- Classe: A (solo `frontend/src/content/in-validazione.json` e documenti)

## Cosa è cambiato

| Voce | Azione | Motivo |
|---|---|---|
| in-validazione: rovigo, montebelluna, legnago (bonus comunali) | «da chiedere» → «chiesto», dal 28/11/2026 | mail inviata il 28/11/2026 ai Servizi Sociali, una sola domanda |
| in-validazione: chioggia, bassano-del-grappa, schio, spinea, mirano, jesolo (bonus comunali) | «da chiedere» → «chiesto», dal 28/11/2026 | mail inviata il 28/11/2026 (due ondate da 3) agli indirizzi di ufficio trovati su fonte istituzionale |
| in-validazione: treviso, mira (bonus comunali) | «da chiedere» → «chiesto», dal 06/11/2026 | la domanda sui bonus comunali era già nella mail del 06/11/2026 (nessuna risposta); non rimandata |

Indirizzi usati (già in scheda, nessun protocollo né PEC): Rovigo sportelloservizisociali@comune.rovigo.it · Montebelluna servizisociali@comune.montebelluna.tv.it · Legnago ufficioassistenza@comune.legnago.vr.it. Seconda parte: Chioggia servizi.sociali@chioggia.org · Bassano del Grappa segretariatosociale@comune.bassano.vi.it · Schio sociale@comune.schio.vi.it · Spinea servizi.sociali@comune.spinea.ve.it · Mirano interventi.sociali@comune.mirano.ve.it · Jesolo politiche.sociali@comune.jesolo.ve.it (fonti: pagine dei Servizi Sociali dei singoli Comuni, verificate da ChatGPT il 28/11/2026). Legnago ufficioassistenza@ confermato su pagina Assistenti sociali. Non scritti: Castelfranco Veneto (già contattata, risposta 20/11) e Vittorio Veneto (verifica in corso nella PR #417).

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: vedi PR
- Anteprima Netlify: da guardare sulla PR

## Cosa manca

1. Risposte di Rovigo, Montebelluna, Legnago, Treviso e Mira sui bonus comunali: inserire i dati, passare la voce a risolta, registrare la risposta.
2. San Bonifacio (solo indirizzo nominativo della referente, da decidere) e San Donà di Piave (solo caselle di sportelli interni, da decidere) non ancora scritti. Belluno già contattata il 17/11 e 19/11, non riscritta.
3. Esenzione ticket: richieste agli URP delle ASL venete ancora «da chiedere».
