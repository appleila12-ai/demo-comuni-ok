# Registro ChatGPT — Veneto ICD / VEN-07 — 19/11/2026

- **Proprietario:** ChatGPT. **Lotto:** Conegliano e Vittorio Veneto, Veneto / Ambito VEN-07.
- **Aggiunto:** proposta documentale `docs/proposte/2026-11-19-chatgpt-veneto-icd-ambito07.md`, con fonte Regione Veneto ICD (aggiornata 14/05/2026) e fonte Comune Vittorio Veneto voucher prima infanzia (aggiornata 21/07/2026), consultate 19/11/2026.
- **Stato:** 0 Comuni completati, 2 schede parziali già esistenti con nuove fonti utili, 0 chiusi in attesa di risposta. Non dichiarare completati.
- **File app modificati:** nessuno. La proposta richiede integrazione chirurgica e controllo dei duplicati in `bonus.ts`; non toccati `destinatari.ts`, file di Claude o protetti.
- **PR aperte verificate:** #361, #216, #209, #204; #357 già unita a main. Letti workflow, indice, assegnazioni, issue #262/#267/#270 e ultimi dieci commit.
- **Controlli:** Node non eseguito; CI/Netlify non verificati, nessuna anteprima visiva.
- **Mancano:** verifica integrale bonus regionali/comunali/Ambito, integrazione destinatario Conegliano, prova visiva avviso incompleti; nessuna email autorizzata.
- **Prossimo passo:** riuso ICD e fonti ULSS 2 per il successivo lotto VEN-07; verifica dei 5 requisiti per ogni Comune, senza bloccare il lotto su un singolo dato.

## Controllo anti-duplicazione del catalogo (19/11/2026, ore 11)

- Letto `frontend/src/lib/bonus.ts` sul ramo della PR: la misura regionale **ICD esiste già** con id `veneto-impegnative-cura-domiciliare`, regione `Veneto`, fonte ufficiale Regione Veneto; presente anche `veneto-icd-caregiver-familiare`. **Non aggiungere una seconda voce ICD né replicarla nelle singole schede come nuovo bonus.** Verificare invece che la visualizzazione regionale sia effettivamente raggiungibile da Conegliano e Vittorio Veneto.
- Letti `frontend/src/config/comuni/demo/conegliano.ts` e `vittorio-veneto.ts`: entrambe hanno `daVerificare: true`, `dimostrativo: true`, recapiti sociali e collegamenti ULSS 2; il flag non sostituisce la prova visiva dell'avviso. Vittorio Veneto contiene già bonus acqua, nido e mini alloggi; non duplicarli. Conegliano contiene protocollo e ATS VEN-07 nei `puntiSupporto`, ma non risulta per questo completato il destinatario dell'azione «Scrivi al tuo Comune».
- Controllate PR aperte e relativi file: #362 (solo proposta e registro Veneto), #361 (proposta MVP), #216 (anagrafica e codice), #209 (diario), #204 (pagina bianca). Nessun file app dei due Comuni occupato da altre PR; `bonus.ts` e `destinatari.ts` non modificati. Letti ultimi dieci commit disponibili di repository; il controllo separato della sola cronologia `main` non è garantito dalla ricerca commit.
- **Stato invariato:** 0 Comuni nuovi completi, 2 parziali, 0 chiusi in attesa. Mancano verifica bonus comunali/Ambito, prova end-to-end destinatari e avviso UI. Prossima azione concreta: verifica funzionamento del bonus ICD già globale e del pulsante «Scrivi al tuo Comune» senza modificare file condivisi; poi passare al lotto indipendente VEN-07.
- **Controlli:** Node non eseguito; anteprima Netlify per #362 segnalata *canceled* nel commento automatico del 19/11/2026, quindi nessuna verifica visiva. Nessun invio, merge o pubblicazione.

## Verifica strutturale aggiuntiva — 19/11/2026, ore 12

- Confrontato `frontend/src/config/comuni/types.ts` su `main`: il commento ufficiale del campo `daVerificare` dice espressamente **«Non viene mostrato ai cittadini: serve solo come promemoria interno»**. `dimostrativo` produce invece l'avviso **«Versione dimostrativa»**, che non equivale all'avviso sui diritti mancanti richiesto dall'issue #270. **Blocco UI concreto:** la presenza dei due flag in Conegliano e Vittorio Veneto NON dimostra che il cittadino veda l'avviso obbligatorio. Occorre verifica del rendering e, se assente, proposta di modifica UI separata classe B, senza pubblicazione.
- `frontend/src/config/comuni/demo/index.ts` su `main` importa Conegliano e Vittorio Veneto: non è necessario modificare l'indice per le schede già esistenti.
- Entrambe le schede hanno `email` dei Servizi Sociali; `destinatari.ts` si presenta nel commento iniziale come archivio di **fallback per Comuni senza email nella scheda**. Per Conegliano non bisogna quindi concludere automaticamente che l'azione «Scrivi al tuo Comune» sia impossibile solo perché manca la voce in `destinatari.ts`: serve verificare la funzione che sceglie il destinatario e il funzionamento end-to-end. Per Vittorio Veneto il destinatario PEC censito resta da confrontare con la precedenza della email ordinaria nella scheda.
- Verificati i file modificati dalle cinque PR aperte (#362, #361, #216, #209, #204): nessuna occupa le due schede Veneto; #209 occupa `frontend/src/lib/ricerca.ts`, non modificare. I dieci commit recenti sono stati consultati tramite ricerca repository, che non certifica il filtro al solo ramo `main`.
- **Stato invariato e prudente:** 0 nuovi completi, 2 parziali, 0 chiusi in attesa. Node non eseguito, anteprima Netlify e avviso visivo non verificati. Nessuna email, merge o pubblicazione.
