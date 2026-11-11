# Bari: Servizi Sociali, cinque Municipi e supporto caregiver

- Data: 11/11/2026. Autore: ChatGPT.
- Ramo: dati/2026-11-11-chatgpt-puglia-bari-servizi.
- Classe A: solo dati. Una scheda aggiornata, non dichiarata completa.

## Cosa è cambiato

- Compilati numero unico sociale, indirizzo dello sportello centrale, email ordinaria e PEC. Precisato che i residenti si rivolgono al proprio Municipio previo appuntamento telefonico.
- Aggiunti cinque punti di Segretariato Sociale con telefono, email e sede. Orari solo per I, II e III, concordanti tra pagina servizio e PDF. I recapiti sono quelli dei singoli uffici, non personali.
- Aggiunto sportello URCA per disabilità, non autosufficienza e caregiver. Il recapito Gmail e il cellulare sono pubblicati dal Comune per il servizio: non sono contatti ricavati dal gestore o privati.
- «Scrivi al tuo Comune»: sostituita la precedente PEC generica con email ordinaria della Ripartizione Servizi alla Persona, pubblicata nella pagina servizio. Cambiata soltanto la riga Bari in destinatari.ts.
- Percorso assistente sociale ampliato con i nuovi punti. Nessuna adesione del Comune attribuita.

## Fonti (tutte aperte e lette il 11/11/2026)

| Contenuto | URL esatto | Ultimo aggiornamento scritto |
|---|---|---|
| Numero unico, accesso, email e PEC centrale, orari | https://www.comune.bari.it/-/richiesta-colloquio-con-servizio-sociale-professionale | 28/09/2026 15:09 |
| Municipio I, sede e recapiti | https://www.comune.bari.it/-/municipio-i-servizio-socio-educativo-segretariato-sociale | 20/11/2025 10:11 |
| Municipio II, sede e recapiti | https://www.comune.bari.it/-/municipio-ii-servizio-socio-educativo-segretariato-sociale | 16/02/2026 09:02 |
| Municipio III, sede e recapiti | https://www.comune.bari.it/-/municipio-iii-servizio-socio-educativo-segretariato-sociale | 20/11/2025 10:11 |
| Municipio IV, sede e recapiti | https://www.comune.bari.it/-/municipio-iv-servizio-socio-educativo-segretariato-sociale | 20/11/2025 10:11 |
| Municipio V, sede e recapiti | https://www.comune.bari.it/-/municipio-v-servizio-socio-educativo-segretariato-sociale | 20/11/2025 10:11 |
| Prospetto sedi e orari | https://www.comune.bari.it/-/29-10-2025-sedi-e-orari-segretariato-sociale | 08/02/2026 12:02, allegato dichiarato ottobre 2025 |
| PDF, pagina 1 | https://www.comune.bari.it/documents/40500/7527965/Sedi%2Be%2Borari%2BSegretariato%2BSociale%2B-%2Bagg.%2Bottobre%2B2025.pdf/60c7d023-33f2-a210-ba1a-72fb8eb3dedd?t=1770034458986 | Nome del documento: ottobre 2025 |
| URCA | https://www.comune.bari.it/-/novita/comunicati-stampa/supporto-alle-persone-con-disabilita-e-anziane-non-autosufficienti-programmati-appuntamenti-mensili-sportello-urca-nei-centri-servizi-per-le-famiglie-fino-a-giugno-2027 | 08/10/2026 18:10 |

## Conflitti e dati non inseriti

- Municipio IV: PDF ottobre 2025 indica pomeriggi martedì e giovedì; pagina servizio settembre 2026 indica solo giovedì. Municipio V: PDF solo martedì; pagina servizio anche giovedì. Orari omessi, nessuna scelta per deduzione.
- Sportello centrale: anche gli orari discordano tra pagina e PDF; non inseriti.
- PDF 2025 tuttora collegato da pagina aggiornata nel 2026: discrepanza degli anni segnalata, non trattato come nuovo documento 2026.
- Numero unico: orario di risposta NON INDICATO. Non estesi gli orari degli sportelli alla linea telefonica.
- URCA: non inserite singole date né sedi itineranti senza lettura del calendario. Per chiederle sono riportati i contatti istituzionalmente pubblicati.

## Rimozioni

Nessuna voce cancellata. Sostituito il testo generico che rinviava al sito senza recapiti. La PEC di protocollo precedente viene sostituita per «Scrivi» con la casella ordinaria dei servizi competenti; resta disponibile la PEC sociale nella scheda.

## Controlli e coordinamento

Letti workflow, AGENTS e indice degli archivi; assegnazioni confermate su main. Letti ultimi 10 commit e PR aperte. Le PR #239, #240, #216, #209 e #204 non occupano bari.ts o destinatari.ts al momento della verifica. bonus.ts e file completezza occupati da #239: non modificati. Ramo nuovo da main 460f2da.
Tre controlli richiesti eseguiti: confronto origin/main e classificazione senza errori (classe A); controllo completo bloccato da verifica-anagrafica.js. Mancano gli abbinamenti anagrafici di agropoli, ariano-irpino, genzano-di-roma e pompei, introdotti dalle PR #249 e #250 già unite su main. Riprodotto lo stesso errore su worktree pulita del solo main 460f2da: non dipende da Bari. Le quattro schede sono in Regioni di Claude e comuni-istat.json è occupato dalla PR #216: nessuna correzione fuori assegnazione. PR Bari in bozza, NON pronta per pubblicare; CI e anteprima da verificare dopo la correzione a monte.

## Copertura di questa tranche e cosa manca

Controllati e modificati: servizi sociali, Municipi, orientamento caregiver/disabilità e destinatario. Non ricontrollati integralmente: ticket ASL già presente, PUA già presente, bonus regionali, bonus comunali e associazioni. Nessun nuovo bando dichiarato aperto. Verifica bonus rinviata perché bonus.ts è occupato da #239.
Per completare: soglie e requisiti dei singoli contributi dalle pagine Comune e Regione; sedi ticket dai distretti ASL; chiarimento orari dai Servizi Sociali. Nessun dato dubbio inserito.

## Bozza email (non inviata)

A: rip.serviziallapersona@comune.bari.it
Oggetto: Orari Segretariato Sociale di Bari per TutelApp

Buongiorno, stiamo aggiornando i recapiti per i cittadini di Bari in TutelApp. Potete confermarci gli orari attuali dei Segretariati dei Municipi IV e V e dello sportello centrale? Il prospetto di ottobre 2025 e la pagina servizio aggiornata a settembre 2026 riportano pomeriggi diversi. Quali sono inoltre gli orari di risposta del numero unico 080 5777777?
TutelApp è già in sperimentazione in diversi Comuni, tra cui Sarzana. Le altre schede sono dimostrative e non attestano adesioni; stiamo inserendo i Comuni interessati e le associazioni. Trovi gli indirizzi nella firma.
Grazie di cuore per la risposta completa, sono informazioni molto utili per i cittadini. Le inseriremo in TutelApp indicando la vostra risposta come fonte. Se qualcosa cambia o notate un'imprecisione, ci scriva e correggiamo subito.
Dott.ssa Ilaria Baudone, Fondatrice di TutelApp
https://www.tutelapp.it
