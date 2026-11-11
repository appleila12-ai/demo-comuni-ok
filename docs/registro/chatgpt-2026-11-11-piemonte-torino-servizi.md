# Torino: orientamento, ticket e percorso territoriale

- Data: 11/11/2026
- Autore: ChatGPT
- Ramo: dati/2026-11-11-chatgpt-piemonte-torino-servizi
- Classe: A, solo dati. Una scheda aggiornata, nessun nuovo Comune dichiarato completo.

## Cosa è cambiato

| Archivio | Voce | Modifica | Fonte | Data controllo |
|---|---|---|---|---|
| demo/torino.ts | Informadisabilità | Contatto principale di orientamento, sede, email, telefono, orari e appuntamento in presenza; aggiunto punto di supporto e contatto LIS | https://www.comune.torino.it/amministrazione/informadisabilita (ultima modifica 19/11/2025) | 11/11/2026 |
| demo/torino.ts | Distretti sociali | Email sud est e nord est; percorso assistente sociale esteso ai quattro distretti | https://www.comune.torino.it/servizi/valutazione-della-disabilita (25/03/2026) | 11/11/2026 |
| demo/torino.ts | Via Pio VII | Email verificata; tolto orario discordante e riferimento a via Vado non ricontrollato | https://www.comune.torino.it/vivere-comune/luoghi/servizi-sociali-via-pio-vii (10/11/2026) | 11/11/2026 |
| demo/torino.ts | Progetti di Vita | Il passo 5 puntava per errore a via Val della Torre: ora punta alla scheda Progetti di Vita | https://www.comune.torino.it/servizi/progetti-vita-per-persone-disabilita (16/09/2026) | 11/11/2026 |
| esenzioneAslRisposte.ts | torino | Sedi per Circoscrizione, orari, eccezione Botticelli, verbale per invalidità e collegamenti specifici; URP indicato per informazioni | https://www.aslcittaditorino.it/sportelli-per-pratiche-amministrative/ (04/09/2026) | 11/11/2026 |
| esenzioneAslRisposte.ts | torino | Collegamenti ufficiali per le due categorie | https://www.aslcittaditorino.it/prestazioni/esenzione-ticket-per-patologia-malattia/ e https://www.aslcittaditorino.it/prestazioni/esenzione-per-invalidita/ | 11/11/2026 |

Le pagine 2025 sono segnalate come tali; la data del controllo non sostituisce quella dell'ente. Nessun importo, soglia o scadenza aggiunti.

## Rimozioni

Nessuna voce eliminata dagli archivi. Rimossi solo l'orario discordante di via Pio VII e il riferimento accessorio a via Vado non ricontrollato. Il recapito del Dipartimento rimane nel suo punto di supporto; il principale diventa lo sportello di orientamento dedicato alla disabilità.

## Controlli

- Eseguiti i tre comandi richiesti: confronto con origin/main, classificazione e controllo completo: zero errori; classe A.
- Nessun file protetto modificato. bonus.ts e i file completezza sono occupati dalla PR #239 e non vengono toccati.
- Ramo aggiornato dopo l'unione #247 di Claude. CI e anteprima da verificare sulla PR prima della pubblicazione.

## Verifiche ulteriori e limiti

- Via Pio VII: pagina della sede aggiornata 10/11/2026 dice telefono 9–13; pagina valutazione della disabilità del 25/03/2026 dice 9–16. Orario omesso dalla scheda in attesa della risposta del Comune.
- ASL: appuntamento, possibilità di invio email e tempi di rilascio NON INDICATI nelle pagine lette. Chiedere all'URP. La riga aggiuntiva Cigna 74 sotto Circoscrizione 5 non ha Circoscrizione esplicita nella tabella: non attribuita per deduzione; Cigna 74 resta tra le sedi esplicitamente elencate per la 7.
- Assistenza domiciliare: verificata la pagina comunale https://www.comune.torino.it/servizi/assistenza-domiciliare-favore-persone-anziane-eo-disabilita-accesso-liste-attesa (04/11/2026). Servizio con valutazione e liste d'attesa, non un bando con domanda aperta. La vecchia URL della voce bonus reindirizza a questa pagina. Aggiornamento della fonte in bonus.ts rinviato finché il file è occupato da #239. Importi e soglie di compartecipazione NON INDICATI.
- Un accesso intermedio alla vecchia pagina domiciliarità ha restituito timeout; la destinazione canonica sopra è stata poi aperta correttamente.
- In questa PR controllati: servizi sociali, orientamento, Progetti di Vita, ticket, pagina comunale domiciliarità. Non ricontrollati integralmente: bonus regionali Piemonte e destinatario PEC già presente; altre categorie di contributi e associazioni. Non si attribuisce una completezza sostanziale a tutte le categorie.

## Bozze di mail (non inviate)

A: informadisabilita@comune.torino.it
Oggetto: Torino, orari Équipe Disabili di via Pio VII per TutelApp

Buongiorno, per aggiornare TutelApp chiediamo l'orario attuale del telefono 011 011 30100 dell'Équipe Disabili di via Pio VII: due pagine comunali riportano rispettivamente 9–13 e 9–16. Potete indicarci anche le modalità di appuntamento?
TutelApp è già in sperimentazione in diversi Comuni, tra cui Sarzana. Le schede dimostrative non attestano l'adesione degli enti; stiamo inserendo i Comuni interessati e le associazioni. Trovi gli indirizzi nella firma.
Grazie di cuore per la risposta completa, sono informazioni molto utili per i cittadini. Le inseriremo in TutelApp indicando la vostra risposta come fonte. Se qualcosa cambia o notate un'imprecisione, ci scriva e correggiamo subito.
Dott.ssa Ilaria Baudone, Fondatrice di TutelApp
https://www.tutelapp.it

A: urp@aslcittaditorino.it
Oggetto: Esenzioni ticket Torino: appuntamenti e modalità di domanda

Buongiorno, per completare le informazioni di TutelApp sugli sportelli amministrativi chiediamo se per le esenzioni per patologia e invalidità serve un appuntamento, come si prenota, se è ammesso l'invio della domanda per email e quali sono i tempi di rilascio. Potete chiarire anche se la sede Cigna 74 serve la Circoscrizione 5 oltre alla 7?
Una richiesta che TutelApp gestisce oggi è una richiesta in meno per voi domani. TutelApp è già in sperimentazione in diversi Comuni, tra cui Sarzana; le altre schede sono dimostrative e non attestano adesioni. Trovi gli indirizzi nella firma.
Grazie di cuore per la risposta completa, sono informazioni molto utili per i cittadini. Le inseriremo in TutelApp indicando la vostra risposta come fonte. Se qualcosa cambia o notate un'imprecisione, ci scriva e correggiamo subito.
Dott.ssa Ilaria Baudone, Fondatrice di TutelApp
https://www.tutelapp.it
