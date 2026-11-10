# Comuni con scheda completa e Comuni con scheda in preparazione

- Data: 10/11/2026
- Autore: Claude
- Ramo / PR: completezza-comuni
- Classe: B (tocca `frontend/app/comuni.tsx`)

## Cosa è cambiato

- Criterio deciso dalla dott.ssa Baudone: scheda **completa** = Servizi Sociali (telefono + email o indirizzo) + bonus regionali + bonus comunali + scheda ticket specifica dell'ASL.
- `docs/strumenti/completezza-comuni.js`: calcola l'elenco (solo Node). `--scrivi` aggiorna `frontend/src/content/completezza-comuni.json` e `docs/completezza-comuni.md`.
- App: nell'elenco dei Comuni (`/comuni`), dentro ogni Regione, i Comuni con scheda completa stanno sotto «Scheda completa», gli altri sotto «Scheda in preparazione».
- Registro interno: `docs/completezza-comuni.md` (410 Comuni incompleti con cosa manca a ciascuno).

Risultato: 420 Comuni con scheda, 10 completi (Sarzana, Lerici, Luni, Arcola, Castelnuovo Magra, Vezzano Ligure, Ancona, Palermo, Torino, Verona), 410 incompleti. Mancano: bonus comunali 376, ticket 304, recapiti Servizi Sociali 237, bonus regionali 4 (Trentino-Alto Adige).

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: vedi PR.
- Anteprima Netlify: da guardare a vista (`/comuni`).

## Cosa manca

1. Trentino-Alto Adige: i 4 Comuni risultano senza bonus regionali; da verificare se la misura è registrata sotto altra dicitura (provincia autonoma) prima di considerarli incompleti.
2. Il ticket conta come completo solo con la scheda specifica dell'ASL (non il semplice link); le Unioni (Vigne e Vini) non sono valutate e restano «in preparazione».
3. Dopo ogni PR sui dati rilanciare `node docs/strumenti/completezza-comuni.js . --scrivi`.
