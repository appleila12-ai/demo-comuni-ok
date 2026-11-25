# Risposte caregiver Gorizia e Carso Giuliano in scheda (24/11/2026)

- Data: 24/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-24-claude-caregiver-gorizia-carso
- Classe (da `--classifica origin/main`): A (solo schede dei Comuni)

## Cosa è cambiato

| Archivio | Voce (slug) | Azione | Fonte | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| comuni | gorizia | recapiti del Servizio Sociale (tel. 0481 383377, info.sociale@comune.gorizia.it, sede operativa Via Baiamonti 22) e punto «Contributo caregiver familiari 2026» | risposta scritta del Servizio Sociale dei Comuni, Ambito Collio–Alto Isonzo, 23/11/2026 (recapiti dalla firma) | 24/11/2026 | risposta ufficiale dell'ente |
| comuni | muggia, san-dorligo-della-valle, sgonico, monrupino, duino-aurisina | punto «Contributo caregiver familiari 2026» (stesso testo) | risposta scritta dell'ufficio amministrativo dell'Ambito Carso Giuliano, 23/11/2026 | 24/11/2026 | risposta ufficiale dell'ente |

Cosa dicono le schede: Collio–Alto Isonzo, bando del Fondo caregiver entro fine dicembre 2026 sui siti dei 15 Comuni; Carso Giuliano, bando indicativamente a dicembre 2026 sul sito del Comune di Muggia e dei Comuni associati, domande per 60 giorni dalla pubblicazione, requisiti non ancora definiti (attese le linee guida della Regione). Nessuna voce «aperto», nessuna scadenza, nessun requisito o importo.
I cinque Comuni del Carso Giuliano sono quelli elencati dalla scheda di Muggia e da `ambiti-territoriali.json` (ente gestore Muggia). Degli altri 14 Comuni di Collio–Alto Isonzo nessuno ha ancora una scheda in app.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js --confronta origin/main`: zero errori, nessuna aggiunta né rimozione di voci
- `controlla-dati.js`: nessun errore strutturale; `verifica-ricerca.js`: 33 schermate collegate
- Controllo su GitHub e anteprima Netlify: da guardare sulla PR

## Cosa manca

1. Collio–Alto Isonzo e Carso Giuliano: link del bando, scadenza, requisiti e modulo, a pubblicazione avvenuta (dicembre 2026) · sito di Gorizia, di Muggia e dei Comuni dell'Ambito · Lonardi (Gorizia, 0481 383173) ha già ricevuto la richiesta del link.
2. Gorizia: orari del Servizio Sociale e bonus comunali · Servizio Sociale dei Comuni (0481 383377).
3. `frontend/src/content/in-validazione.json`: togliere la voce «servizi-sociali» di Gorizia e rigenerare `docs/informazioni-mancanti.md` (`completezza-comuni.js`). Non fatto qui perché la PR #401 tocca gli stessi due file: da fare dopo la sua unione.
4. ULSS 2 (Asolo): il link ricevuto riguarda altri contributi (Doman, Vojta, Fay, ABA); richiesta caregiver/ICD riformulata il 23/11, in attesa. Nulla inserito per Castelfranco, Treviso e Conegliano.
5. Imperia: scritto il 23/11 alla dott.ssa Lanteri (nuova referente dei servizi sociali), nessuna risposta. Nulla da inserire.
