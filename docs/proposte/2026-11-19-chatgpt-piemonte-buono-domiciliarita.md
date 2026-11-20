# Piemonte — proposta chirurgica Buono domiciliarità 2026/27 (19/11/2026)

**Responsabile:** ChatGPT. **Stato:** verificato su fonte primaria; modifica ai dati **NON APPLICATA**. **Assegnazione:** Piemonte, quota ChatGPT. **Ambito:** un solo ID `piemonte-buono-domiciliarita-2026`.

## Fonte istituzionale e verifica
- Regione Piemonte, «Scelta Sociale - Buono domiciliarità 2026/2027»: https://bandi.regione.piemonte.it/contributi-finanziamenti/scelta-sociale-buono-domiciliarita-20262027 — consultata **19/11/2026**, data di aggiornamento pagina **NON INDICATA**.
- La pagina indica **Stato: Scaduto**; domande **14/09/2026–02/11/2026 ore 23:59**; **700 euro/mese per 12 mesi**; destinatari persone non autosufficienti con disabilità o ultrasessantacinquenni residenti in Piemonte; valutazione UVG/UMVD, punteggio sociale almeno 7, ISEE ordinario/sociosanitario fino a 40.000 euro; atto di approvazione e avviso allegati alla pagina.
- Il PDF già referenziato nel record: https://bandi.regione.piemonte.it/system/files/All.1_AVVISO_DOM_2026.pdf — controllo del suo contenuto integrale in questa sessione **NON ESEGUITO**. I dettagli aggiuntivi presenti nel record (ore, contratti, incompatibilità) non sono stati rivalidati uno per uno.

## Intervento esatto da applicare da editor con modifica per righe
File: `frontend/src/lib/bonus.ts`, oggetto con `id: "piemonte-buono-domiciliarita-2026"`.
```diff
-    stato: "aperto",
+    stato: "chiuso",
     scade: "2026-11-02",
```
Non toccare altre occorrenze di `stato: "aperto"`. Aggiornare `verificatoIl` a `19/11/2026` **solo dopo** aver applicato il cambio nello stesso oggetto. Non eliminare il record.

## Stato operativo
- `bonus.ts`: **NON MODIFICATO** (il connettore scrive solo il file intero; il workflow vieta riscrittura integrale dei grandi archivi).
- Test Node, classificazione, CI e anteprima: **NON ESEGUITI**; PR solo documentale, classe A.
- Nessuna email inviata, nessun merge/deploy.
- **Prossimo passo:** applicare patch chirurgica in ambiente con editor per righe, eseguire `node frontend/scripts/controlla-dati.js --confronta origin/main`, `--classifica origin/main`, e controllo completo, poi aprire/verificare PR dati dedicata.
