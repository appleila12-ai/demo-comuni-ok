# Registro ChatGPT — Veneto, ERP Conegliano (23/11/2026)

- **Modifica:** nuova proposta dati in `docs/proposte/2026-11-23-veneto-erp-conegliano.md`; nessuna modifica diretta al file comunale; la voce ERP è ora stata aggiunta al catalogo bonus nella PR #396.
- **Fonte istituzionale:** Regione Veneto, https://erp.regione.veneto.it/Bandi/Details/ff838be0-e8c5-4608-8be5-32e156e42349 ; controllo documentato 23/11/2026, riapertura successiva fallita per timeout.
- **Perimetro:** solo Veneto, Comune di Conegliano (VEN-07); nessun file Claude o condiviso modificato.
- **Controlli:** i controlli locali sono riportati nella sezione seguente; in questa esecuzione Node non disponibile tramite connettore, CI e anteprima Netlify non verificati; avviso UI #270 non verificato.
- **Stato:** PR in bozza, bonus ERP integrato nel catalogo della PR ma non pubblicato; Conegliano parziale, non completo. Il bando integrale è stato verificato (vedi sotto). Prossimo passo: verificare l'effettiva visualizzazione del bonus e dell'avviso UI #270 in anteprima, controllare destinatario e campi mancanti.
- **Autorizzazioni:** nessun merge/deploy/email autorizzato.

## Integrazione nel catalogo bonus

- Data: 23/11/2026
- Autore: ChatGPT
- Ramo e PR: dati/2026-11-23-chatgpt-veneto-erp-conegliano, #396
- Voce aggiunta: `conegliano-erp-2026`, limitata al Comune di Conegliano. Il catalogo gestisce lo stato dopo la data di scadenza.
- Fonte primaria verificata il 23/11/2026: https://atertv.it/wp-content/uploads/2026/11/ERP-2026-CONEGLIANO.pdf (bando comunale del 18/11/2026).
- Nessuna rimozione. La scheda del Comune resta parziale. Da verificare il destinatario effettivo di «Scrivi al tuo Comune» e l’avviso UI #270.
- Anteprima Netlify da verificare dopo il caricamento sulla PR.
- Controlli locali: classe A, zero errori strutturali, un bonus aggiunto e zero rimozioni.

## Controllo di coordinamento 23/11/2026, ore 21:03 (Europe/Rome)

- Confronto diretto `main...dati/2026-11-23-chatgpt-veneto-erp-conegliano`: **4 commit avanti, 0 indietro**; modificati solo `docs/proposte/2026-11-23-veneto-erp-conegliano.md`, questo registro e `frontend/src/lib/bonus.ts` (+21 righe, 0 rimosse).
- Il catalogo bonus contiene ora una nuova voce ERP Conegliano; **non** è ancora confermata la sua visualizzazione nella scheda del Comune o in anteprima Netlify. Non conteggiare il Comune come completo.
- Nuovo commit su main `b6a1ff8835e6e1790b22332991b9c3ab6681c01c` (ticket Imola, Padova, Ferrara, Cremona) già incluso nella base del ramo: nessun rebase richiesto in questo momento.
- PR aperte ricontrollate per collisioni: #375, #372, #365, #209; nessuno dei loro file si sovrappone a quelli della #396. Non toccare i file delle altre PR.
- Da verificare: destinatario effettivo «Scrivi al tuo Comune», completezza contributi comunali e Ambito VEN-07, avviso visibile #270, Netlify e CI. Susegana resta senza scheda indicizzata; richiesta email già documentata in #382, non duplicarla.
- Conteggio **nuovi completamenti di questa esecuzione**: 0/20; nuovi chiusi in attesa: 0; schede esistenti ancora parziali: Conegliano e Vittorio Veneto. Nessuna email, merge o deploy.
