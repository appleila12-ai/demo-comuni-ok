# Registro ChatGPT — Veneto VEN-07, stato reale Susegana — 19/11/2026

**Proprietario:** ChatGPT. **Territorio:** Conegliano, Vittorio Veneto, Susegana (TV). **Verifica:** 19/11/2026.

## Riscontro concreto sul codice main
- `frontend/src/config/comuni/demo/conegliano.ts` e `vittorio-veneto.ts` esistono, sono dimostrative e hanno `daVerificare: true`; contengono recapiti sociali, email ordinaria e link esenzione ticket ULSS 2. La presenza di email NON prova da sola il funzionamento end-to-end del pulsante «Scrivi al tuo Comune».
- **`frontend/src/config/comuni/demo/susegana.ts` non esiste su main (404 GitHub Contents API il 19/11/2026).** Le ricerche precedenti su Susegana sono verifiche di fonti, **non una scheda parziale esistente nell'app**. Prima di crearla servono tutte le verifiche e l'aggiornamento degli indici tramite script autorizzati.
- `frontend/src/config/comuni/destinatari.ts` dichiara di essere archivio alternativo solo per Comuni senza email nella scheda; non aggiungere duplicati per Conegliano o Vittorio Veneto senza prova del comportamento reale.
- `docs/AUTORIZZAZIONI.md`: `PUBBLICAZIONE_AUTOMATICA_DATI: no`. Nessuna pubblicazione consentita in questa esecuzione.
- PR #363 risulta **già unita** su main (commit `5024bf1a570ff09450d1f70944ec26d6903e4cde`): non riaprire né duplicare il registro precedente.

## Fonte ufficiale consultata oggi
- Comune di Susegana, portale istituzionale dei servizi: https://www.comune.susegana.tv.it/home/servizi (consultato il 19/11/2026; data aggiornamento non indicata). La pagina descrive il portale generale, **non** certifica bonus specifici o la completezza dei cinque requisiti.
- Comune di Susegana, pagina istituzionale https://www.comune.susegana.tv.it/pagamenti-pagopa/ (consultata il 19/11/2026; portale indica aggiornamento 12/10/2026). Riporta un avviso «Buono libri» 2026/27 con finestra 14/09–09/10/2026, **già chiusa**. Non introdurre come bando aperto; prima di inserirlo verificare la pagina dell'avviso e la pertinenza alla disabilità.

## Stato distinto, senza conteggi impropri
| Comune | Scheda presente su main | Stato | Mancanze |
|---|---|---|---|
| Conegliano | sì | parziale | bonus comunali e d'Ambito, verifica completa regionale, destinatario end-to-end, avviso UI |
| Vittorio Veneto | sì | parziale | conflitto trasporto scolastico 2026, ulteriori bonus/Ambito, destinatario end-to-end, avviso UI |
| Susegana | **no** | ricerca documentale parziale, **non scheda completata** | creazione scheda e tutti i cinque requisiti, fonte e data per ogni campo |

**Bilancio reale del lotto:** 0 Comuni completi, 0 chiusi in attesa di riscontro, 2 schede presenti parziali, 1 Comune soltanto ricercato. Nessuna prova di richiesta ufficiale inviata per questi tre Comuni.

**Controlli:** Node non eseguibile attraverso il connettore GitHub; CI e anteprima Netlify da verificare sulla PR. Nessuna verifica visiva dell'avviso #270. Nessuna email, nessuna modifica alle schede dell'app, nessun merge o deploy.

**Prossimo passo:** controllare l'archivio Drive prima di ogni eventuale richiesta; verificare con le fonti ufficiali le cinque sezioni di Susegana e l'ATS VEN-07, poi preparare integrazione chirurgica e controlli Node. Non bloccare gli altri Comuni se una fonte è indisponibile.

## Controllo puntuale delle due schede esistenti — 19/11/2026, lettura diretta su main
- **Conegliano** (`frontend/src/config/comuni/demo/conegliano.ts`): Servizi Sociali presenti con telefono 0438 413210 ed email ordinaria `servizisociali@comune.conegliano.tv.it`; fonte indicata nel file: avviso comunale 30/03/2026, https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=69ca4fcdf00987008b10c9e6. Esenzione ticket: link ULSS 2 per patologia https://www.aulss2.veneto.it/Richiedere-lesenzione-per-patologia e rinvio all'invalidità civile. Bonus: la scheda mostra solo orientamento alle famiglie fragili, senza elenco completo dei bonus regionali e comunali/d'Ambito. Email in configurazione presente, ma pulsante non testato in UI. **Parziale, non completo.**
- **Vittorio Veneto** (`frontend/src/config/comuni/demo/vittorio-veneto.ts`): Servizi Sociali presenti con telefono 0438 569305, email `sociale@comune.vittorio-veneto.tv.it`, fonte https://www.comune.vittorio-veneto.tv.it/home/amministrazione/uffici/Ufficio-26.html (aggiornamento dichiarato nel file 10/11/2023). Esenzione ticket ULSS 2 presente. Tre interventi comunali elencati: bonus acqua (scadenza 30/11/2026), rette prima infanzia (09/12/2026), mini alloggi anziani (10/12/2026); i requisiti restano da confrontare con gli avvisi integrali. Non risultano completi tutti i bonus d'Ambito e regionali. Email presente, pulsante non testato. **Parziale, non completo.**
- **Susegana:** manca ancora il file di scheda; non conteggiare come scheda parziale esistente né come completamento.
- **Avviso #270:** `daVerificare: true` è presente nelle due configurazioni, ma non dimostra che l'avviso richiesto sia visibile; nessuna prova visiva acquisita. Non modificare la UI senza autorizzazione.

## Esito tecnico della PR #367 — 19/11/2026
- Commit esaminato: `4f1ab9984c3e6f4f14c02ef702827288166fff4c`.
- GitHub riporta `netlify/tutelappcomuni/deploy-preview: success`, dettaglio https://app.netlify.com/projects/tutelappcomuni/deploys/6aff38b882731f0505dd72ff . È **solo esito del controllo**, non una verifica visiva delle schermate; questa PR modifica esclusivamente il registro.
- I tre comandi Node richiesti non eseguiti nell'ambiente del connettore. Non inferire che i test dati siano superati dal solo stato Netlify.
- PR aperte controllate: #368 (Claude: risposte URP), #367 (questa), #365, #216, #209, #204; nessun file modificato da questa PR coincide con quelli delle altre. Ultimi 10 commit consultati prima di questo aggiornamento.
- **Bilancio invariato:** 0 Comuni completi / obiettivo 20; 0 chiusi in attesa; 2 schede esistenti parziali e 1 Comune solo ricercato. Nessuna richiesta ufficiale inviata in questa esecuzione.

## Verifica trasversale Regione Veneto — voucher infanzia, 19/11/2026
- Fonte istituzionale Regione Veneto, pagina informativa `https://www.regione.veneto.it/web/rete-degli-urp-del-veneto/famiglia?_58_struts_action=%2Flogin%2Flogin` (consultata 19/11/2026; data aggiornamento pagina NON INDICATA): avviso DGR 1054/2025, domande **1 aprile–15 maggio 2026 (scadute)**, importi 900–1.500 euro, ISEE ordinario massimo 22.000 euro, gestione ATS. Applicabile come fonte di orientamento a tutti i Comuni veneti dell'Ambito, non come bonus attualmente aperto.
- Fonte istituzionale Comune di Susegana, determinazione n. 217 del 30/03/2026 e avviso ufficiale `https://www.comune.susegana.tv.it/myportal/C_L014/api/content/download?id=69ca7cdb786d1d008a7d0343` (consultato 19/11/2026): conferma VEN-07 capofila Conegliano, budget ATS 138.649 euro, voucher 900–1.500 euro. L'intestazione menziona annualità 2025 e un punto del testo dice 'Voucher 2024': **non dedurre annualità da quella riga**; per la finestra domande 2026 usare la pagina regionale sopra.
- ATTENZIONE: la pagina regionale `https://www.regione.veneto.it/web/sociale/fattore-famiglia` riporta ancora importi **900–1.300 euro** e frequenza **2023–2024**, quindi è materiale di un ciclo precedente. **Non usarla per sostituire le cifre 2026.**
- Azione per il lotto: riutilizzare la stessa fonte regionale per Conegliano, Vittorio Veneto e Susegana; NON creare tre bonus duplicati; non presentare il voucher come aperto. Nessun nuovo Comune completo con questa verifica.


## Verifica aggiuntiva 19/11/2026 — trasporto sociale e contributi sportivi Vittorio Veneto
**Fonte 1 (Comune, pubblicata e aggiornata 22/09/2026, consultata 19/11/2026):** https://www.comune.vittorio-veneto.tv.it/notizie/trasportosociale.html
- Avviso per individuare **un ente del Terzo Settore gestore** del servizio di trasporto sociale, periodo previsto 01/11/2026–31/12/2029. Destinatari previsti del servizio: anziani, persone con disabilità, persone fragili e minori. Scadenza della **candidatura degli enti gestori**: 13/10/2026, già trascorsa. Recapiti dell'ufficio Servizi Sociali: 0438 569311 / 0438 569318; sociale@comune.vittorio-veneto.tv.it.
- **Distinzione essenziale:** l'avviso non è una domanda di contributo economico per cittadini e non prova che il servizio sia già operativo né quali siano requisiti, modalità di prenotazione, costi o accesso. Non creare un bonus aperto. **Prossimo passo:** cercare la pagina del servizio al cittadino, la convenzione stipulata o comunicazione istituzionale di avvio prima di integrare `puntiSupporto`.

**Fonte 2 (Comune, pubblicata 13/11/2026, consultata 19/11/2026):** https://www.comune.vittorio-veneto.tv.it/notizie/contr.html
- Avviso per contributi alle **associazioni e società sportive** organizzatrici di eventi nel 2026: stanziamento complessivo 20.000 €, massimo 3.000 € per evento, copertura fino all'80% del disavanzo, domande entro 29/11/2026. Tra i criteri di valutazione anche l'accessibilità alle persone con disabilità.
- **Non è un bonus personale per cittadini con disabilità.** Non inserirlo tra i bonus comunali alle famiglie; possibile candidato per una futura sezione rivolta alle associazioni, previa verifica dell'avviso integrale.

**Fonte 3 (Comune, aggiornata 22/06/2026, consultata 19/11/2026):** https://www.comune.vittorio-veneto.tv.it/home/vivere/Scuola/contributi.html
- La pagina del trasporto scolastico per studenti con disabilità riporta ancora «Bando non ancora disponibile»; la homepage https://www.comune.vittorio-veneto.tv.it/ (consultata 19/11/2026, data aggiornamento non indicata) mostra invece scadenza 30/11/2026. **Conflitto non risolto**: non inserire requisiti o bando aperto senza l'avviso integrale del 2026.

**Impatto sui cinque requisiti:** nessuno dei tre riscontri completa una scheda. Stato invariato: Conegliano e Vittorio Veneto parziali; Susegana solo ricercata; **0/20 completi, 0 chiusi in attesa**. Nessuna richiesta ufficiale inviata. Non è stata verificata visivamente l'UI dell'avviso #270. Nessuna modifica ai dati applicativi.

**Controlli di questa esecuzione:** consultate sei PR aperte (#368, #367, #365, #216, #209, #204), file interessati e ultimi dieci commit; `docs/AUTORIZZAZIONI.md` mantiene pubblicazione automatica disattivata. Node non eseguito tramite connettore GitHub; verifica CI e Netlify separata. Prossimo lotto: cercare i requisiti di accesso del trasporto sociale, completare bonus regionali/d'Ambito e destinatari, senza duplicare le ricerche già annotate.

## Intervento sulle schede esistenti — 19/11/2026, sera
- Aggiornate **entrambe le schede** `frontend/src/config/comuni/demo/conegliano.ts` e `vittorio-veneto.ts`: aggiunto in Punti di supporto il collegamento diretto alla procedura ULSS 2 per esenzione ticket da invalidità/infortunio sul lavoro. Fonte istituzionale: https://www.aulss2.veneto.it/Richiedere-lesenzione-per-invalidit-e-infortunio-sul-lavoro ; aggiornamento pagina 03/02/2026, consultazione 19/11/2026. La voce non indica importi o scadenze né attribuisce il diritto automaticamente.
- Non modificati `bonus.ts`, `destinatari.ts`, indice anagrafico, script, UI o file delle altre PR. Non introdotti bonus scaduti da oltre dieci giorni. **Queste due schede restano parziali**, non dichiararle complete.
- Mancano bonus comunali/d'Ambito verificati e controllo reale «Scrivi al tuo Comune»; avviso #270 da verificare visivamente. Susegana resta ricerca documentale, non scheda esistente. Nessuna email, nessun merge, nessuna pubblicazione.
- I tre controlli Node non eseguiti tramite connettore GitHub; controllare CI/Netlify del commit finale. Conteggio nuovi Comuni completi **0/20**, chiusi in attesa **0**, schede esistenti parziali **2**, Comune solo ricercato **1**.

## Aggiornamento trasporto sociale Vittorio Veneto — 19/11/2026
- Fonte ufficiale Comune di Vittorio Veneto, avviso pubblicato e aggiornato il 22/09/2026: https://www.comune.vittorio-veneto.tv.it/notizie/trasportosociale.html ; consultazione 19/11/2026. Avviso per selezione di un ente gestore, periodo previsto 01/11/2026–31/12/2029, termine candidatura ente 13/10/2026. Contatti pubblici per informazioni: Servizi Sociali 0438 569311/318, sociale@comune.vittorio-veneto.tv.it. **Non è prova che il servizio sia già operativo né delle condizioni di accesso per cittadini**.
- Modificata chirurgicamente solo la descrizione `trasporto` della scheda `vittorio-veneto.ts` in PR #367, sostituendo riferimenti generici ad associazioni con i recapiti istituzionali e il limite informativo esplicito. Nessuna dichiarazione di servizio attivo.
- La pagina ufficiale https://www.comune.vittorio-veneto.tv.it/home/vivere/Scuola/contributi.html aggiornata 22/06/2026 indica 'bando non ancora disponibile' per il trasporto scolastico disabilità; homepage https://www.comune.vittorio-veneto.tv.it/ (consultata 19/11/2026; data aggiornamento homepage non indicata) mostra scadenza 30/11/2026. **Discordanza irrisolta**, non inserire un nuovo contributo fino alla lettura del bando integrale.
- Stato invariato: 0 completi/20, 2 schede parziali, 1 Comune solo ricercato, 0 chiusi in attesa. Mancano bonus comunali/d'Ambito, regionale, prova pulsante e avviso UI. Test Node non eseguiti; anteprima Netlify non verificata visivamente. Nessuna email, merge o pubblicazione.

## Lotto 20/11/2026 — integrazione di due schede esistenti
- **Conegliano** `frontend/src/config/comuni/demo/conegliano.ts`, commit `652ed4006bfcad5b63c55c46cf52d79aa1023b71`: aggiunto nei punti di supporto il voucher prima infanzia VEN-07 **edizione 2026 chiusa il 15/05/2026**, con collegamento all'avviso comunale ufficiale del 30/03/2026. Non presentato come domanda aperta.
- **Vittorio Veneto** `frontend/src/config/comuni/demo/vittorio-veneto.ts`, commit `d9d141c948f3a42d96f9d1d5f2b1dfc813cebdda`: stessa fonte ATS condivisa e medesima indicazione di bando chiuso, senza nuove ricerche duplicate.
- Fonte primaria: Comune capofila Conegliano, avviso prot. 17017 del **30/03/2026**, https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=69ca4fcdf00987008b10c9e6; consultata il 19/11/2026 e riutilizzata il 20/11/2026; data ultimo aggiornamento pagina NON INDICATA.
- Non aggiunta una nuova voce in `bonus.ts`, file condiviso; non aggiunte cifre/requisiti non necessari alla scheda. Stato **parziale** invariato per entrambe. Susegana ancora senza scheda.
- Prima della modifica controllate le sei PR aperte e i rispettivi file, gli ultimi 10 commit, workflow e assegnazioni, issue #262/#267/#270. Nessun file di Claude modificato.
- Verifica tecnica: GitHub riportava `netlify/tutelappcomuni/deploy-preview: success` sul commit precedente `f4126cc`, NON prova del nuovo codice. Ambiente locale: `git ls-remote` fallito per DNS `Could not resolve host: github.com`; i tre comandi Node non eseguiti. Anteprima visiva e avviso #270 NON verificati.
- **Bilancio 20/11:** 0/20 nuovi Comuni completi; 2 schede parziali aggiornate; 1 Comune solo ricercato; 0 chiusi in attesa. Mancano controllo destinatario end-to-end, bonus comunali ulteriori e completezza regionale/Ambito, avviso visibile.

## Lotto 20/11/2026 — due misure aggiunte a Vittorio Veneto
- **Carta Dedicata a te 2026–2027**: fonte Comune di Vittorio Veneto, ultimo aggiornamento 03/11/2026, consultata 20/11/2026: https://www.comune.vittorio-veneto.tv.it/home/vivere/Servizi-Sociali/Contributi--assegni-e-sussidi-economici/Carta-acquisti-dedicata-a-te.html . 500 euro/anno, ISEE ordinario non oltre 15.000 euro, nuclei di almeno tre persone selezionati automaticamente da INPS; niente domanda; primo utilizzo entro 16/12/2026. Nella scheda solo sintesi, rinvio alla fonte per esclusioni e ritiro. Non riprodurre la lista pubblica dei beneficiari nel repository.
- **Bonus rifiuti SAVNO 2026**: fonte Comune di Vittorio Veneto, pubblicata/aggiornata 23/09/2026, consultata 20/11/2026: https://www.comune.vittorio-veneto.tv.it/notizie/savno26.html . Riduzione tariffaria utenze domestiche residenti, ISEE 9.796–15.000 euro, domanda scaduta 15/11/2026. Inserita voce chiaramente «chiuso», non come opportunità aperta.
- Modificato solo `frontend/src/config/comuni/demo/vittorio-veneto.ts`, commit `0184a73793dbd3e7074fa1cc64516f16df6f604a`. Nessun file delle PR altrui modificato. Restano da verificare altri bonus d'Ambito, il contrasto sul trasporto scolastico, il destinatario end-to-end e l'avviso UI #270.
- **Stato effettivo invariato:** 0 Comuni completi/20, 0 chiusi in attesa, 2 schede esistenti parziali (Conegliano, Vittorio Veneto), 1 solo ricerca (Susegana). Non usare la verifica di due misure come due Comuni completati. CI/Netlify dell'ultimo commit non ancora verificati visivamente; comandi Node non eseguiti via connettore. Nessuna email, merge o pubblicazione.

## Susegana — verifica nuova fonte istituzionale, 20/11/2026
- Documento tecnico comunale del **11/05/2026**, `https://gestioneterritorio.comune.susegana.tv.it/wp-content/uploads/2026/05/A13_Clima-Acustico.pdf` (consultato 20/11/2026): descrive un **progetto di demolizione e ricostruzione** del Centro diurno per persone con disabilità (CEOD) presso via Pasubio/Ponte della Priula, con continuità della funzione sociale prevista dal progetto. **Non è una scheda di accesso al servizio:** non inserire orari, posti, requisiti, modalità di domanda o stato lavori senza conferma dell'ente gestore. La fonte permette di indirizzare la prossima verifica all'ufficio Servizi Sociali e all'ente sanitario competente.
- Pagina ufficio comunale `https://www.comune.susegana.tv.it/home/dettaglio/amministrazione/ufficio-servizi-sociali` (consultata 20/11/2026): il testo recuperato dal motore mostra solo una descrizione generica del portale, **non** recapiti affidabili. Non dedurre telefono/email dalla pagina non leggibile.
- Bilancio invariato: Susegana ancora **senza scheda**; 0 Comuni completati, 2 schede parziali, 0 chiusi in attesa. Per il prossimo intervento recuperare recapiti sociali ufficiali e verifica ATS/ULSS prima di creare il file. Nessuna richiesta ufficiale inviata.

## Susegana — recapito istituzionale verificato il 20/11/2026
- **Nuovo dato utilizzabile per il futuro destinatario «Scrivi al tuo Comune»:** `servizisociali@comune.susegana.tv.it` (email ordinaria dell'Ufficio Servizi Sociali), attestata dall'avviso pubblico del Comune di Susegana **datato 30/03/2026**: https://www.comune.susegana.tv.it/myportal/C_L014/api/content/download?id=69ca7cdb786d1d008a7d0343 . Fonte istituzionale consultata il 20/11/2026; il testo indica espressamente «Ufficio: Servizi Sociali» ed «E-mail». Lo stesso recapito compare in un documento comunale del 30/09/2025: https://www.comune.susegana.tv.it/myportal/C_L014/api/content/download?id=68d50bca4ecf67008b180bff .
- Questo **risolve solo la ricerca dell'email**, non certifica telefono, indirizzo fisico, bonus comunali, bonus regionali, esenzione ticket, né funzionamento del pulsante in app. Non creare la scheda senza allineamento indici e verifiche previste. Non inviare email senza autorizzazione e prima senza controllare l'archivio Drive.
- **Controllo anti-fonte obsoleta:** un notiziario comunale del 2006 (https://www.comune.susegana.tv.it/myportal/C_L014/api/content/download?id=684aca93f024df008b3a9b08) menziona assistenza domiciliare, contributi e recapiti di quell'epoca. **Non usare numeri, importi, requisiti o orari del 2006 come dati attuali.**
- Stato al 20/11/2026: Conegliano e Vittorio Veneto **parziali**, Susegana **solo ricercata, scheda assente**, 0 nuovi Comuni completi su 20, 0 chiusi in attesa di risposta. Avviso UI #270 e test end-to-end non verificati; nessuna pubblicazione.
