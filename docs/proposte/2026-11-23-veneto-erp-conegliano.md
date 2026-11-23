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
