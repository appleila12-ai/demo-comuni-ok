# Lotto Lombardia — 17/11/2026 — ChatGPT

## Risultato
Tre schede aggiornate: Abbiategrasso, Magenta, Vigevano. Restano PARZIALI, nessun nuovo Comune completo o chiuso in attesa. Pavia era già aggiornata nella stessa PR e non viene conteggiata di nuovo. Nessuna email inviata in questo lotto, nessuna pubblicazione. ID eliminati: nessuno.

## Fonti e modifiche
Tutte le fonti sotto sono comunali e sono state lette il 17/11/2026.

| Comune | Fonte esatta | Aggiornamento pagina | Intervento |
|---|---|---|---|
| Abbiategrasso | https://comune.abbiategrasso.mi.it/it/unita_organizzative/politiche-sociali | 06/03/2026 | Sede Via Fratelli Cairoli 1; telefono del Segretariato 02 94692516; segretariato@comune.abbiategrasso.mi.it; accesso solo su appuntamento. Collegamento chiama sul Segretariato. La fonte distingue questo numero dalla linea informazioni 02 94692504. |
| Magenta | https://comune.magenta.mi.it/amministrazione/unita-organizzativa/settore-dei-servizi-al-cittadino/ufficio-servizi-sociali/ | 24/02/2026 | Collegamento specifico all'ufficio e accesso solo su appuntamento. Confermati telefono 02 9735438 ed email sociale@comune.magenta.mi.it. |
| Magenta | https://comune.magenta.mi.it/luogo/front-office-servizi-alla-persona-e-sale/ | 20/01/2026 | Confermati Via IV Giugno (civico non indicato) e orari del front office lun–ven 9–12:30, mar/gio anche 15:30–17:30. Distinti dall'accesso all'ufficio; aggiunto avviso fisso di conferma orari. |
| Vigevano | https://comune.vigevano.pv.it/servizio/segretariato-sociale/ | 02/02/2026 | Sede Palazzo Esposizioni, Piazza Calzolaio d'Italia 1; telefono informazioni 0381 299888; segretariatosociale@comune.vigevano.pv.it. Orari sportello informazioni/appuntamenti lun–ven 10:30–13, lun anche 14:30–17:30, gio anche 15:30–17:30 con avviso fisso. Collegamento chiama sul Segretariato. |

Vigevano: la sezione contatti elenca anche numeri dell'area Adulti in Difficoltà (822/824/833); il numero 888 è espressamente indicato nelle ulteriori informazioni del servizio. Non presentare i diversi numeri come contraddizione risolta per tutte le aree. Alcune sezioni della pagina sono in aggiornamento.

## Verifiche e limiti
Eseguiti con esito positivo i tre controlli prescritti: `node frontend/scripts/controlla-dati.js --confronta origin/main`, `--classifica origin/main`, e senza opzioni. Classe A, nessun errore strutturale, nessuna voce eliminata. Schede snelle ridotte da 196 a 194 nel confronto con la coda iniziale di questo turno.

Non verificati in questo lotto: sportelli ticket specifici, bonus locali/regionali, associazioni, destinatari Scrivi al Comune e avviso visibile dell'intero percorso. Manteniamo `daVerificare: true`. Non attestata la completezza visiva; CI e anteprima da controllare dopo il push.

## Ripresa autonoma
Riprendere da ticket ASST Ovest Milanese per Abbiategrasso/Magenta e ASST Pavia per Vigevano, poi bonus locali e destinatari. Non rifare i recapiti qui documentati senza nuovi indizi. `bonus.ts` e `destinatari.ts` sono occupati da PR aperte: annotare le ricerche prima di modificare. Passare ad altri Comuni assegnati quando un file è occupato. Tenere distinto aggiornamento parziale da chiusura verificata.

Mediglia: resta sospesa la comunicazione a Pierdominici in attesa del modulo online. Richiesta ASST già inviata a URP Vizzolo con CUP Peschiera in copia: non duplicarla.

## Voghera — integrazione 17/11/2026
Scheda `frontend/src/config/comuni/demo/voghera.ts` aggiornata **PARZIALMENTE**: sede via F.lli Rosselli 20, email sociali@comune.voghera.pv.it, PEC protocollo@cert.comune.voghera.pv.it (pagina Ufficio Servizi Sociali, ultimo aggiornamento 03/11/2026); telefono 0383 336404 e orario lun–ven 8:30–12:00 **dell'Area adulti e famiglie in difficoltà** (pagina aggiornata 28/04/2026). Fonti consultate 17/11/2026:
- https://comune.voghera.pv.it/it/unita_organizzative/ufficio-servizi-sociali
- https://comune.voghera.pv.it/it/unita_organizzative/area-adulti-e-famiglie-in-difficolta

**Misure ufficiali verificate ma NON ancora integrate in bonus.ts (file condiviso/occupato):**
- Voghera, buono spesa primo semestre 2027: domanda 02–30/11/2026, ISEE <= 5.000 euro, oppure < 7.500 euro per nuclei composti solo da persone oltre 75 anni; pagina aggiornata 03/11/2026: https://www.comune.voghera.pv.it/it/news/contributo-buono-spesa-primo-semestre-2027 (avviso specifico, 03/11/2026; i requisiti ISEE sono riportati anche nella pagina Ufficio Servizi Sociali: https://comune.voghera.pv.it/it/unita_organizzative/ufficio-servizi-sociali)
- Ambito Voghera e Comunità Montana Oltrepò Pavese, contributo locazione 2026: 09–27/11/2026, fino a due mensilità e max 700 euro, ISEE <= 7.500 euro e ulteriori requisiti nella fonte; riguarda 26 Comuni elencati nella pagina, incluso Varzi. Aggiornamento 09/11/2026: https://www.comune.voghera.pv.it/it/news/2074929
- Ambito Lomellina, misura sostegno disabilità e anziani: termine domande 15/10/2026 **scaduto**, non presentare come aperto. Fonte 15/09/2026: https://comune.vigevano.pv.it/novita/misura-sostegno-per-persone-con-disabilita-e-persone-anziane-ex-b2-presentazione-nuove-domande/ ; graduatorie pubblicate 16/11/2026: https://comune.vigevano.pv.it/novita/fondo-non-autosufficienze-2025-pubblicazione-graduatorie-misura-sostegno-e-servizi/

**Mancano:** verifica ticket ASST pertinente, bonus regionali complessivi, destinatario Scrivi al Comune (email generica protocollo@comune.voghera.pv.it verificata nel piè pagina ufficiale), verifica archivio Drive, avviso UI #270 e associazioni. Non segnare completo né chiuso in attesa. Nessuna email inviata. Nessuna voce rimossa. Controlli Node/CI/Netlify non eseguiti per questa integrazione; esiti precedenti del lotto non si estendono a questo commit.

## Ticket ASST Pavia — integrazione 17/11/2026
**Schede aggiornate realmente:** Voghera e Vigevano, entrambe ancora **PARZIALI**. Fonte istituzionale letta il 17/11/2026: https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/ . La pagina ASST descrive rilascio/rinnovo esenzioni per patologia cronica, malattia rara, invalidità e reddito e riporta gli sportelli:
- Voghera: viale Repubblica 88, lun–ven 8:10–13:00.
- Vigevano: viale Montegrappa 5, lun–ven 8:10–13:00.
- Numero unico provinciale 0382 1958050, lun–ven 13:30–15:00.
Il link di ticket generico è stato sostituito con la procedura ASST specifica, e i recapiti sono visibili nella scheda. Nessun altro Comune del lotto è dichiarato verificato per analogia. Mancano ancora verifica bonus regionali e Ambiti, destinatari e avviso visibile UI #270; non dichiarare completamento. Nessuna email, merge o pubblicazione. Node/CI/anteprima Netlify non verificati dopo questi commit.

## Verifica trasversale ASST Pavia — 17/11/2026, ore 18 circa
Fonte istituzionale letta nuovamente: https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/ (data aggiornamento pagina: **non indicata nella consultazione odierna**; controllo 17/11/2026). Confermati sportelli ticket e orari: Voghera Viale Repubblica 88 lun–ven 8:10–13; Vigevano Viale Montegrappa 5 lun–ven 8:10–13; Broni Via Emilia 351 lun/mar/gio/ven 8:10–13; Casteggio Piazza Martiri della Libertà 8/c mer 8:30–14:30; Mortara Strada Pavese 1013 mar/mer/gio 8:45–12:45; Mede Viale dei Mille 27 lun–ven 8:10–13; Garlasco Via Borgo San Siro 2 mar/gio 8:10–13; Varzi Strada Circonvallazione 3 lun–ven 8:00–15:30; Casorate Primo Largo Volontari del Sangue 1 mar/gio 8:30–13; Corteolona e Genzone Via dei Longobardi 3 lun–ven 8:10–13; Pavia Viale Indipendenza 3 lun–ven 8:10–13. Informazioni provinciali 0382 1958050 lun–ven 13:30–15. Accesso a sportelli **previa prenotazione** secondo la pagina, anche tramite portale; non suggerire accesso libero solo sulla base degli orari.

Questo è riuso di fonte sanitaria per 11 località, **non** 11 Comuni completi o verifiche complete. Voghera/Vigevano avevano già il collegamento in scheda; nessuna duplicazione della modifica. Fonte complementare: https://asst-pavia.it/come-fare-per/scelta-e-revoca-2/ (categorie di esenzione). Da completare per ogni Comune: servizi sociali, bonus comunali/Ambito, bonus regionali, destinatario e avviso UI. Non modificati bonus.ts/destinatari.ts occupati. Nessuna email, merge o pubblicazione. Test Node/CI/Netlify non eseguiti in questa verifica.

## Integrazione sanitaria Abbiategrasso e Magenta — 17/11/2026
**Responsabile ChatGPT. Stato: PARZIALE per entrambe.** Sostituiti i due collegamenti generici alla homepage ASST con la procedura ufficiale per richiedere e rinnovare le esenzioni ticket tramite sportello virtuale; aggiornati sia `puntiSupporto` sia `esenzioneTicket` in `frontend/src/config/comuni/demo/abbiategrasso.ts` e `magenta.ts`. Fonte istituzionale consultata il 17/11/2026: https://www.asst-ovestmi.it/attivita-scelta-e-revoca (data aggiornamento pagina non indicata nella verifica). La pagina dichiara espressamente rilascio/rinnovo esenzioni nello Sportello Virtuale per cittadini residenti/domiciliati nei Comuni ASST Ovest Milanese; autocertificazione reddito limitata ai codici espressamente elencati. Non attribuire indiscriminatamente la stessa autocertificazione alle esenzioni per invalidità.

Altre fonti sanitarie verificate il 17/11/2026, da usare solo per informazioni puntuali (non confondere PUA e sportello esenzioni): https://www.asst-ovestmi.it/strutture/distretto-abbiatense ; https://www.asst-ovestmi.it/strutture/distretto-magentino .

**Mancano:** bonus regionali e comunali/Ambito, destinatario Scrivi al Comune, verifica avviso UI #270 e anteprima; nessuna email inviata. Nessun Comune completo o chiuso in attesa, nessuna voce rimossa. I tre test Node e la CI non sono stati eseguiti/attestati per questi commit, anteprima Netlify non verificata. Riprendere dal confronto bonus/ATS e destinatari, senza toccare `bonus.ts` e `destinatari.ts` se occupati. PR #257.

## Cremona — integrazione 17/11/2026 (ore 20 circa)
**PARZIALE — modifica reale in `frontend/src/config/comuni/demo/cremona.ts`.** La fonte istituzionale POIS/Porta Unitaria di Accesso, ultimo aggiornamento **30/09/2025**, consultata **17/11/2026**, documenta sede **Corso Vittorio Emanuele II 42, Cremona**, telefono **334 1043608**, email **pois@comune.cremona.it**, accesso libero allo sportello **lun–ven 8:30–13:00** e informazioni telefoniche **lun–ven 8:30–12:30**. L'ufficio svolge orientamento, accompagnamento e accesso ai servizi sociali tramite colloquio con assistente sociale. Fonte esatta: https://www.comune.cremona.it/amministrazione/pois-porta-informativa-dei-servizi-sociali-porta-unitaria-accesso . Sostituito il numero generico del Comune e il link generico nell'area POIS con recapito specifico; **nessun dato eliminato da archivi bonus/destinatari**. PEC lasciata vuota perché non documentata dalla pagina POIS.

Fonte comunale ulteriore **31/08/2026**, https://www.comune.cremona.it/novita/comunicati/nubifragio-28-agosto-nuovo-numero-demergenza-per-servizi-sociali : conferma POIS e contatti ma contiene numero di emergenza legato al nubifragio, **non inserito come recapito ordinario**. La pagina menziona il mercoledì prolungato fino alle 16:00 dal 1/9/2026, mentre la pagina POIS riporta lun–ven 8:30–13:00; conservata in scheda solo la fascia comune confermata, approfondire eventuale apertura pomeridiana.

**Da fare:** ticket ASST Cremona specifico (non sostituire con fonte del 2021), bonus regionali, bonus comunali e Azienda Sociale Cremonese/Ambito, destinatario 'Scrivi al tuo Comune' e controllo UI avviso #270. Nessuna richiesta ufficiale inviata, quindi NON chiuso in attesa. Nessuna email inviata, merge o pubblicazione. Test Node/CI e anteprima Netlify **non verificati dopo questo commit**. Conto nuovi completi in questa esecuzione: **0/20**, nuovi chiusi in attesa **0**, schede parziali aggiornate **1**.

## Cremona — verifica aggiuntiva 17/11/2026, ore serali
**Stato PARZIALE, NON completo.** Aggiornato il collegamento della scheda all'ASST Cremona: pagina specifica `https://www.asst-cremona.it/strutture/gestione-cronicita-cremona-ex-cure-primarie`, aggiornata **12/08/2025**, consultata **17/11/2026**. Indica esenzioni per reddito/età, patologia cronica o rara e invalidità; accesso senza prenotazione agli sportelli Scelta/Revoca, con documentazione differenziata. Non sono stati trasferiti orari non verificati. Non modifica la fonte POIS già verificata.

**Bonus comunale individuato e verificato, da integrare solo quando `frontend/src/lib/bonus.ts` è libero:** https://www.comune.cremona.it/servizi/presentare-domanda-per-bonus-economico (pagina aggiornata **04/12/2024**, consultata **17/11/2026**). Servizio attivo tutto l'anno per nuclei residenti con ISEE fino a **6.076,59 euro**; sostegno alle spese per utenze, farmaci, mensa e altre necessità, previa valutazione dell'assistente sociale. Domanda online con SPID/CIE, ISEE e DSU in corso di validità; nessun importo fisso garantito. La pagina dichiara risposta entro 30 giorni. Non confondere con contributi regionali.

**Fonte sanitaria riutilizzabile, non ancora assegnata a schede:** ASST Cremona, Casalmaggiore https://www.asst-cremona.it/strutture/gestione-cronicita-casalmaggiore (agg. 12/08/2025, consultata 17/11/2026); esenzioni per reddito, patologia, malattia rara e invalidità, accesso senza prenotazione. Il file `demo/casalmaggiore.ts` non esiste nel ramo verificato: non inventare un Comune completato; per creare scheda nuova occorrono index e anagrafica, senza interferire con file condivisi.

**Mancano a Cremona:** audit bonus regionali, contributi Ambito e altre misure comunali, destinatario «Scrivi al tuo Comune» in archivio, verifica visiva avviso #270 e associazioni. Non usare stato «chiuso in attesa»: nessuna prova di richiesta inviata per queste lacune. Nessuna email, nessun merge, nessuna pubblicazione. Node non eseguito in questo ambiente, CI e Netlify non verificati per il nuovo commit. **Conteggio aggiuntivo di questo turno: 0 Comuni completi, 0 chiusi in attesa, 1 scheda parziale modificata (Cremona).**
