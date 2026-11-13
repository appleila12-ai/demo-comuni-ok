# 13/11/2026 – Nota «informazione in validazione» per i recapiti dei Servizi Sociali (Regioni Claude)

- Home del Comune (`frontend/app/index.tsx`): avviso «Informazione in validazione» quando mancano i recapiti completi dei Servizi Sociali (telefono, email, orari) e li stiamo chiedendo al Comune.
- 154 voci `servizi-sociali` in `in-validazione.json` (Regioni Claude), stato «da chiedere», data 13/11/2026, da chiedere ai Servizi Sociali del Comune.
- Nessun dato inventato. Completi: 280 su 424. Restano aperti solo i Comuni senza nota in nessuna voce o con bonus regionali mancanti (Regioni ChatGPT e 16 Comuni senza bonus regionale).
- Rigenerati `docs/completezza-comuni.md`, `docs/informazioni-mancanti.md`, `frontend/src/content/completezza-comuni.json`.
