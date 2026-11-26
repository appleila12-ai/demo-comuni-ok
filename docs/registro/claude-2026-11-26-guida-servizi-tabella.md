# Guida ai servizi del Comune in forma di tabella

- Data: 26/11/2026
- Autore: Claude
- Ramo / PR: app/2026-11-26-guida-servizi-tabella / (vedi PR in bozza)
- Classe (da `--classifica origin/main`): B (codice dell'app)

## Cosa è cambiato

Richiesta della dott.ssa Baudone: il pulsante «Scarica la guida ai servizi del Comune» sul web apriva solo la stampa della pagina (una «fotocopia»). Voleva un riassunto: nome, servizio, e a fianco telefono, email o altro recapito.

| File | Cambiamento |
|---|---|
| `frontend/src/lib/guidaTabella.ts` (nuovo) | Trasforma ogni servizio della scheda del Comune in una riga: Nome · Servizio · Recapiti. Ogni frase del testo va in una sola colonna, senza riscriverla; nessun dato nuovo. Dove ci sono più frasi di descrizione, resta la prima e si aggiunge «(altri dettagli nell'app)». |
| `frontend/src/lib/territorio.ts` | `buildGuideHtml` produce la tabella (A4, intestazione che si ripete, righe non spezzate) con un'unica nota finale. Tolte le schede generiche, i 5 passi e il vecchio avviso. Tolta `escapeHtml`, non più usata. |
| `frontend/app/territorio.tsx` | Sul web la guida si stampa in un frame nascosto: prima `Print.printAsync` stampava la pagina aperta. Passa i «Numeri utili» (INPS, Agenzia delle Entrate, Ministero della Salute) alla guida. App mobile invariata (PDF con `printToFileAsync`). |

Nessun dato (bonus, Comuni, associazioni) modificato.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js --confronta origin/main`: zero differenze nei dati.
- `controlla-dati.js`: nessun errore strutturale.
- `controlla-dati.js --classifica origin/main`: classe B.
- Prova del modulo `guidaTabella.ts` con Node sui dati reali di Genova (30 voci): ogni numero e ogni email del testo compaiono nella colonna Recapiti. Controllo fatto a mano sull'elenco.
- Non eseguiti qui (ambiente senza installazione dei pacchetti): `tsc`/`expo lint` e prova visiva della pagina. Li fanno GitHub Actions e l'anteprima Netlify: aprire Aiuti e contatti → «Scarica la guida» e verificare a vista.

## Cosa manca

1. Righe dei Municipi di Genova: la colonna Servizio è vuota («—»), perché nei dati c'è solo l'indirizzo e il recapito. Si può aggiungere una descrizione breve nei dati, con fonte, se la dott.ssa Baudone la vuole.
2. Municipio V (Genova): l'email nei dati è `municipio5servsociali@…`, gli altri otto Municipi hanno `…servizisociali@…`. Da verificare sul sito del Comune di Genova (può essere un refuso o un indirizzo diverso).
3. Prova della stampa su telefono (iPhone/Android): non verificabile da questo ambiente.
4. Altri Comuni con schede «snelle»: la tabella è corta finché mancano i servizi verificati (nessun dato inventato).
