# Anagrafica nazionale dei Comuni

Dal 9/11/2026 TutelApp conosce **tutti i Comuni italiani** (elenco ISTAT), oltre alle schede complete o snelle già presenti.

## Come funziona
- `src/content/comuni-istat.json`: un elemento per Comune, `[codice ISTAT, nome, sigla provincia, regione, latitudine, longitudine, slug, 1 se ha già una scheda]`.
- `src/config/comuni/anagrafica.ts`: lettura dell'elenco (solo quando serve), ricerca per nome e **scheda minima** per i Comuni senza scheda propria.
- `trovaComune()` (in `src/config/comuni/index.ts`) prima cerca tra le schede, poi nell'anagrafica. Un Comune dell'anagrafica si apre con il suo indirizzo (`/<slug>` o `?comune=<slug>`).
- La pagina `/comuni` mostra le schede; scrivendo almeno due lettere cerca anche tra tutti i Comuni.

## Regole
- Un Comune presente solo nell'anagrafica è sempre **dimostrativo** (`dimostrativo` e `soloElenco`): nome, provincia e regione, **nessun recapito, orario o servizio**. Niente viene attribuito a un Comune senza verifica.
- L'etichetta di **aderente** non si deduce dall'elenco: si assegna a mano, Comune per Comune (non ancora introdotta).
- L'identificativo stabile è il **codice ISTAT**; lo slug serve solo per gli indirizzi. Gli slug delle schede esistenti non cambiano. Per gli omonimi (es. Samone TO e TN) si aggiunge la sigla.
- I Comuni che fanno parte di un'Unione con scheda propria (Vigne e Vini, Giudicarie) si trovano cercando l'Unione, non come voci separate.
- Sito, PEC ed email generica dei Comuni vengono dall'**Indice PA** (AgID, CC BY 4.0, file `src/content/riferimenti-comuni.json`, rifatto con `docs/riferimenti/costruisci-riferimenti-ipa.py`): dato ufficiale, non ricontrollato Comune per Comune. Il file di partenza dell'anagrafica (opendatasicilia) non si usa per i siti. In «Scrivi al tuo Comune» l'email generica ha la precedenza sulla PEC (molte PEC rifiutano la posta normale).

## Fonte e limiti
- File `main.csv` del repository opendatasicilia/comuni-italiani (codici ISTAT, centroide del municipio), copia del 25/10/2025. **Va confrontato con l'elenco ISTAT più recente** (fusioni e cambi di sigla successivi non ci sono).
- 11 coordinate del file originale avevano perso il punto decimale (Premia, Olgiate Olona, Gombito, Gazzo, Montegridolfo, Lucignano, Carovilli, Telese Terme, Dasà, Vazzano, Arzana) e Santi Cosma e Damiano (LT) aveva le coordinate di Roma: sono state corrette e controllate sui Comuni confinanti o sulla provincia. Lo script segnala anche punti uguali in province diverse.
- Le coordinate sono quelle del municipio, non della sede di un'associazione.

## Come si aggiorna
1. `node scripts/costruisci-anagrafica.js /percorso/di/main.csv` rigenera il file JSON e stampa il rapporto (coordinate corrette, valori da guardare).
2. `node scripts/verifica-anagrafica.js` (o `yarn verifica:anagrafica`) controlla unicità di codici e slug, coordinate, regioni e collegamento con le schede.
