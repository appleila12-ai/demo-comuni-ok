# 13/11/2026 – Nota «informazione in validazione» per i bonus comunali (Regioni Claude)

Esteso `frontend/src/content/in-validazione.json` ai Comuni con scheda delle Regioni assegnate a Claude (Liguria, Toscana, Emilia-Romagna, Lazio, Campania, Calabria, Sicilia, Sardegna, Abruzzo, Marche, Umbria, Molise, Basilicata) per cui manca il bonus comunale: 227 voci nuove, tutte con stato «da chiedere», data 13/11/2026, da chiedere ai Servizi Sociali del Comune.

- Solo i bonus comunali: è l'unico dato per cui l'app mostra già la nota (pagina Bonus).
- Recapiti dei Servizi Sociali ed esenzione ticket NON sono toccati: serve prima la nota nelle relative schermate.
- Nessun dato inventato: lo stato «da chiedere» dice solo che manca e che verrà chiesto; quando l'ente risponde si aggiorna lo stato e poi si inserisce il dato.
- Completi dopo la modifica: 65 (erano 51). Regioni ChatGPT non toccate.
- Rigenerati `docs/completezza-comuni.md`, `docs/informazioni-mancanti.md`, `frontend/src/content/completezza-comuni.json` con `docs/strumenti/completezza-comuni.js . --scrivi`.

## Seguito: esenzione ticket (stesso giorno)
- Aggiunta la nota «informazione in validazione» nella pagina Esenzione ticket (`frontend/app/esenzione-ticket.tsx`), nel ramo dei Comuni senza scheda specifica dell'azienda sanitaria.
- 195 voci `esenzione-ticket` in `in-validazione.json` per i Comuni delle Regioni Claude senza scheda ticket, stato «da chiedere», URP dell'azienda sanitaria, data 13/11/2026.
- Completi: 131 (65 con la sola nota sui bonus comunali). Restano aperti i recapiti dei Servizi Sociali (nota non ancora in app).
