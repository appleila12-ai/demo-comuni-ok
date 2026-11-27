# Veneto: verifica delle schede di Conegliano, Susegana e Vittorio Veneto

- Data: 27/11/2026
- Autore: ChatGPT
- Ramo: `dati/2026-11-27-chatgpt-veneto-lotto-chiusura`
- Classe prevista: A, solo registro documentale. Classificazione automatica da verificare.

## Esiti

| Comune | Verifica il 27/11/2026 | Stato e prossimo passo |
|---|---|---|
| Conegliano | La [scheda pubblica](https://tutelapp.it/?comune=conegliano) mostra il banner dimostrativo e il contatto dei Servizi Sociali. Il pulsante «Scrivi al tuo Comune» è raggiungibile. Il [risolutore](https://github.com/appleila12-ai/demo-comuni-ok/blob/main/frontend/src/lib/richiestaComune.ts) usa prima l’email della [configurazione della scheda](https://github.com/appleila12-ai/demo-comuni-ok/blob/main/frontend/src/config/comuni/demo/conegliano.ts). Risultato da codice: `servizisociali@comune.conegliano.tv.it`. L’[avviso comunale, prot. 17017 del 30/03/2026](https://www.comune.conegliano.tv.it/myportal/C_C957/api/content/download?id=69ca4fcdf00987008b10c9e6), conferma l’indirizzo. | **Parziale.** Il banner della homepage parla di adesione e possibile aggiornamento dei recapiti. In homepage e in «Aiuti e contatti» l’avviso specifico previsto dalla [issue #270](https://github.com/appleila12-ai/demo-comuni-ok/issues/270) non è stato osservato. Restano il riscontro sui campi residui dei contributi e l’avviso per la scheda parziale. L’apertura del programma di posta non è stata eseguita. |
| Susegana | La [scheda pubblica](https://tutelapp.it/?comune=susegana) è minima e indica che i recapiti dei Servizi Sociali non sono ancora in TutelApp. Il [dato IPA presente su main](https://github.com/appleila12-ai/demo-comuni-ok/blob/main/frontend/src/content/riferimenti-comuni.json) offre una PEC e nessuna email ordinaria. Il [bando comunale del 30/03/2026](https://www.comune.susegana.tv.it/myportal/C_L014/api/content/download?id=69ca7cdb786d1d008a7d0343) pubblica `servizisociali@comune.susegana.tv.it` e indica l’Ambito VEN_07. La [PR #382](https://github.com/appleila12-ai/demo-comuni-ok/pull/382) aveva aggiornato il registro. | **Solo anagrafica nell’app pubblica.** Proposta puntuale per la bozza dati: inserire in `frontend/src/config/comuni/destinatari.ts` la voce `susegana` con email `servizisociali@comune.susegana.tv.it`, tipo `ordinaria`, fonte nell’avviso comunale del 30/03/2026 (verifica 27/11/2026). Questo dà al pulsante un destinatario ordinario. Per una scheda comunale restano da verificare sede, orari, ticket e misure pertinenti. Richiesta del 20/11 trovata in Posta inviata. Nessun seguito individuato nella ricerca per oggetto del 27/11. |
| Vittorio Veneto | La [scheda pubblica](https://tutelapp.it/?comune=vittorio-veneto) mostra un banner dimostrativo e il recapito dei Servizi Sociali. L’[ufficio comunale, ultima modifica 10/11/2023](https://www.comune.vittorio-veneto.tv.it/home/amministrazione/uffici/Ufficio-26.html), conferma `sociale@comune.vittorio-veneto.tv.it`, telefono, sede e orari esposti. La [configurazione su main](https://github.com/appleila12-ai/demo-comuni-ok/blob/main/frontend/src/config/comuni/demo/vittorio-veneto.ts) usa quell’email. Il risolutore le dà precedenza sulla PEC in elenco. | **Parziale.** La voce «bonus-comunali» è ancora «da chiedere» in `in-validazione.json`. Incrociare gli avvisi già registrati con quelli vigenti, verificare il percorso ticket e la resa specifica dell’avviso #270. |

## Controlli

- Verificato il sito pubblico delle tre schede il 27/11/2026 e letto il pulsante in «Lettere pronte» per Conegliano.
- Zero chiusure complete e zero chiusure in attesa registrate in questo giro. Nessuna rimozione e nessun invio.
- Il clone HTTPS dell’ambiente ha richiesto credenziali. Controlli Node locali non eseguiti. Verificare Actions e anteprima della PR.
