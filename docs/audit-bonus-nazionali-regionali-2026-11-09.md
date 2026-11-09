# Audit misure e bonus TutelApp — avvio 09/11/2026

## Metodo
1. Inventario del catalogo attualmente presente in app (DA ESEGUIRE: ricerca GitHub per parole chiave non ha restituito risultati; non inferire assenze).
2. Catalogo nazionale: prestazioni INPS, fisco, lavoro, scuola, mobilità, assistenza, non autosufficienza.
3. Cataloghi regionali: Liguria e Lazio per primi, poi le altre Regioni.
4. Misure comunali: solo quelle aggiuntive e territoriali, senza duplicare il livello nazionale.
5. Ogni scheda: ID univoco, nome ufficiale, livello territoriale, ente, destinatari, requisiti, importo, modalità di domanda, validità/scadenza, compatibilità, URL ufficiale, data verifica, stato.

## Prima verifica INPS (09/11/2026)
- **Pensione di inabilità agli invalidi civili**: 100%, 18–67 anni, importo base 340,71 €/mese per 13 mensilità nel 2026, reddito personale annuo inferiore a 20.029,55 €. Fonte INPS https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.pensione-di-inabilit-agli-invalidi-civili.html — verifica della presenza in app: NON ESEGUITA.
- **Indennità di accompagnamento**: requisiti sanitari di invalidità totale e non autosufficienza; nessun limite di reddito; 12 mensilità. **IMPORTO 2026 CONFERMATO: 551,53 €/mese**. Oltre alla scheda INPS aggiornata il 20/07/2026, il messaggio INPS n. 628 del 23/02/2026 riporta espressamente 551,53 € dal 1° gennaio 2026. La pagina Regione FVG riporta un valore discordante (552,57 €): conservare traccia del conflitto, ma usare la fonte primaria INPS. Fonti: https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.indennit-di-accompagnamento-agli-invalidi-civili.html ; https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2026/02/Circolare_15173/Allegati/16580_Messaggio-numero-628-del-23-02-2026.pdf ; https://disabilita.regione.fvg.it/it/news/focus/Aggiornamenti-Importi-Pensioni-e-Assegni-2026.html .
- **Assegno mensile di assistenza invalidi parziali 74–99%**: da verificare scheda INPS dedicata, incluse condizioni di attività lavorativa; NON PUBBLICARE dati ricavati per analogia dalla pensione totale.
- **Indennità di frequenza minori**: da verificare scheda INPS dedicata.
- **Prestazioni ciechi civili e sordi**: da verificare singolarmente.
- **Home Care Premium e Long Term Care**: da verificare bandi e platea (non universali).
- **Prestazione universale anziani**: da verificare requisiti, importi e finestra di sperimentazione.
- **Assegno unico e maggiorazioni disabilità, permessi 104, congedo straordinario**: da verificare su INPS.
- **Agevolazioni fiscali disabilità, auto, ausili, barriere**: da verificare su Agenzia Entrate.
- **Carta europea disabilità e contrassegno**: distinguere beneficio nazionale e attuazione locale.
- **INAIL**: prestazioni per disabilità da lavoro distinte dall'invalidità civile INPS.

## Stato
Questo documento è un registro di audit, **non** è il catalogo pubblicato e **non** attesta completezza dell'app. Non pubblicare come bonus attivi voci senza verifica di requisiti e scadenze.

## Verifica incrociata aggiuntiva 09/11/2026
- **Messaggio INPS n. 628 del 23/02/2026**: fonte primaria conferma 551,53 €/mese per accompagnamento invalidi civili; nessun requisito reddituale. Confermato anche dalla scheda INPS aggiornata il 20/07/2026.
- **Attenzione importi pensione/assegno**: la scheda INPS pensione di inabilità indica 340,71 €/mese e limite 20.029,55 €/anno. Le tabelle del messaggio 628 contengono anche importi di altri trattamenti e maggiorazioni; non mescolarli con la pensione base.
- **Congedo straordinario familiare**: circolare INPS 47 del 21/04/2026 contiene i massimali 2026. Da estrarre e verificare separatamente prima di pubblicare: https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2026/04/Circolare_15242/Allegati/16731_Circolare-numero-47-del-21-04-2026.pdf
- **Procedure invalidità**: nel 2026 la domanda cambia tra province in sperimentazione della riforma e altre province; la scheda deve indirizzare alla procedura corretta senza generalizzare. Dal 2027 prevista estensione nazionale, da verificare all'entrata in vigore.
- **Audit del codice**: ricerca con connettore GitHub per 'bonus', 'indennità di accompagnamento', 'Home Care Premium', 'misureNazionali' non ha restituito risultati. Questo NON prova che le misure manchino: identificare percorso del catalogo attraverso struttura repository prima di effettuare integrazioni.
