# Istruzioni per gli assistenti (ChatGPT, Codex, Claude e altri)

Leggi per intero **`CHATGPT_WORKFLOW.md`** prima di fare qualsiasi modifica: contiene regole, flusso di lavoro e limiti.
La mappa dei dati è in **`docs/INDICE-ARCHIVI.md`**.

Le sei regole che valgono sempre:

1. L'app è in `frontend/`. Le cartelle `app/`, `src/`, `tutelapp-demo-parte1/` nella radice sono copie obsolete: non toccarle.
2. Solo fonti istituzionali (INPS, ministeri, Regioni, Comuni, ASL), sempre con URL e data. Un dato dubbio non entra nell'app, nemmeno come «da confermare».
3. Lavora in un ramo e apri una PR. Non unire e non pubblicare finché la dott.ssa Baudone non scrive «pubblica» (salvo quanto autorizza `docs/AUTORIZZAZIONI.md`).
4. Il repository è pubblico: mai token, password, chiavi o dati personali.
5. Modifiche chirurgiche: mai riscrivere un file intero. Ogni voce tolta si dichiara in `docs/registro/`.
6. Prima di chiudere esegui `node frontend/scripts/controlla-dati.js` (solo Node): deve dare zero errori.
