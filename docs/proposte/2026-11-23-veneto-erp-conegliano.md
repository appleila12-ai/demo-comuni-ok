# Proposta dati Veneto — bando ERP Conegliano 2026

**Data verifica:** 23/11/2026. **Stato:** proposta, non integrata nell'app, non pubblicata.

## Fonte istituzionale
Regione del Veneto — Portale ERP, «Comune di Conegliano - BANDO ERP 2026»:
https://erp.regione.veneto.it/Bandi/Details/ff838be0-e8c5-4608-8be5-32e156e42349

Dati registrati nel checkpoint issue #383: apertura domande **19/11/2026**, scadenza **28/12/2026**, gestore **ATER Treviso**, invio domanda **online**; pagina regionale aggiornata **22/11/2026**. La fonte era stata verificata nella sessione precedente del 23/11/2026; al nuovo tentativo del 23/11 il portale ha restituito timeout. Prima dell'integrazione occorre riaprire il bando integrale, leggere condizioni e requisiti aggiornati (in particolare l'avvertenza sulla sentenza della Corte costituzionale). Non inserire soglie ISEE o requisiti dedotti.

## Integrazione richiesta
**File:** `frontend/src/config/comuni/demo/conegliano.ts` (solo la scheda Conegliano). Aggiungere chirurgicamente nell'array `puntiSupporto`, senza rimuovere o riscrivere altre voci, una voce con titolo «Alloggi pubblici · Bando ERP Conegliano 2026», descrizione semplice «Domande dal 19 novembre al 28 dicembre 2026, secondo il bando ufficiale. La domanda si presenta online. Consulta requisiti, allegati e modalità sul portale della Regione Veneto», azione `{ type: "web", value: "https://erp.regione.veneto.it/Bandi/Details/ff838be0-e8c5-4608-8be5-32e156e42349" }`. Data controllo e URL nei commenti della voce. **Non** cambiare `daVerificare: true`: mancano ancora bonus comunali/Ambito completi, destinatario effettivo «Scrivi al tuo Comune» e controllo avviso UI #270.

Non è stata fatta modifica applicativa perché lo strumento GitHub disponibile sostituisce l'intero contenuto del file e `CHATGPT_WORKFLOW.md` vieta questo metodo: in tal caso prescrive una proposta separata.

## Coda VEN-07
- Conegliano: parziale, bando ERP da integrare, confermare destinatario effettivo e avviso UI
- Vittorio Veneto: parziale, verificare contributi Ambito e destinatario effettivo
- Susegana: fonte servizi sociali e richiesta ufficiale già registrate nel checkpoint della PR #382; nessuna nuova email; verificare dati in archivio Drive prima di altre richieste

**Conteggio:** 0 Comuni completati; 0 nuovi chiusi in attesa; 2 schede parziali già esistenti. Nessun invio email, nessuna pubblicazione.

## Verifica del bando integrale — 23/11/2026 (ATER Treviso)

**Sbloccato il precedente timeout:** PDF integrale ufficiale di sette pagine pubblicato da ATER Treviso:
https://atertv.it/wp-content/uploads/2026/11/ERP-2026-CONEGLIANO.pdf
Indice ufficiale ATER: https://atertv.it/bandi-edilizia-residenziale-pubblica-sovvenzionata/

Dati letti direttamente nel bando del Comune, protocollato 18/11/2026; verifica 23/11/2026:
- **Apertura ore 00:00 del 19/11/2026; scadenza ore 12:00 del 28/12/2026** (paragrafo 5, pagina 5). La precedente proposta ometteva l'ora limite.
- **ISEE-ERP massimo 22.990 euro**, non ISEE ordinario (paragrafo 1, pagina 2); tutti gli altri requisiti sono nel PDF.
- **Residenza anagrafica in Veneto alla presentazione**; il bando recepisce la sentenza della Corte costituzionale n. 67/2024 (pagina 1). Non introdurre requisiti di residenza pluriennale.
- Domanda online sul portale https://erp.regione.veneto.it tramite **SPID o CIE**. **Solo residenti a Conegliano**: assistenza dell'Ufficio casa, numeri **0438 413418** e **0438 413212**, lun–ven **9:30–12:30**. **Marca da bollo 16 euro** (pagina 5).
- Punteggi di graduatoria: invalidità superiore a due terzi **3 punti**; handicap grave art. 3 comma 3 legge 104/1992 **5 punti**, **non cumulabili** (pagina 3); barriere architettoniche nell'alloggio occupato da persona con disabilità motoria **2 punti** (pagina 4). Sono punteggi, non requisiti automatici.

### Voce proposta per la scheda Conegliano
**Titolo:** Conegliano · Alloggi pubblici ERP 2026 (domande aperte)

**Testo:** Puoi presentare domanda per l'assegnazione di un alloggio pubblico dal 19 novembre fino alle **ore 12:00 del 28 dicembre 2026**. Tra i requisiti c'è un **ISEE-ERP non superiore a 22.990 euro**: leggi il bando per tutti gli altri requisiti. La domanda si presenta online con SPID o CIE. Se risiedi a Conegliano, puoi chiedere assistenza all'Ufficio casa: 0438 413418 o 0438 413212 (lun–ven, 9:30–12:30). È richiesta una marca da bollo da 16 euro. Nella graduatoria sono previsti punteggi per alcune condizioni di disabilità: verifica il bando integrale.

**Azione web:** https://atertv.it/wp-content/uploads/2026/11/ERP-2026-CONEGLIANO.pdf

**Fonte per lo stato del bando:** https://erp.regione.veneto.it/Bandi/Details/ff838be0-e8c5-4608-8be5-32e156e42349 (pagina aggiornata 22/11/2026).

**Stato:** proposta documentale verificata, **non ancora integrata nell'app**. Conservare daVerificare: true; avviso UI #270 ancora non verificato. Nessun merge o deploy.
