# Roma Capitale (Municipi XI, XII, XIV) e verifica avvisi Regione Lazio

- Data: 12/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-12-claude-lazio-roma-municipi / (numero PR in testa alla PR)
- Classe (da `--classifica origin/main`): A

Come sono stati letti i dati: le pagine indicate da ChatGPT non si potevano aprire direttamente (fuori dall'elenco di siti consentiti alla sessione). Ho cercato le stesse pagine con il motore di ricerca limitato a comune.roma.it e regione.lazio.it e ho letto gli estratti delle pagine ufficiali. Gli allegati (PDF) degli avvisi non sono stati letti.

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| demo/roma.ts | Municipio XI · Segretariato Sociale e PUA | aggiunta (indirizzo, telefoni, email; orari NON inseriti perché discordanti) | https://www.comune.roma.it/web/it/informazione-di-servizio.page?contentId=IDS549187 | 12/11/2026 | verificato (indirizzo, email); orari discordanti |
| demo/roma.ts | Municipio XII · Segretariato Sociale e PUA (Via Panfilo Castaldi 28/B) | aggiunta, con avviso «orari indicativi» | https://www.comune.roma.it/web/it/municipio-xii-uffici-e-contatti.page?contentId=UFF29748 | 12/11/2026 | verificato su una sola pagina |
| demo/roma.ts | Municipio XIV · Segretariato Sociale e PUA (Padiglione 1) | aggiunta | https://www.comune.roma.it/web/it/informazione-di-servizio.page?contentId=IDS1598149 e https://www.comune.roma.it/web/it/municipio-xiv-uffici-e-contatti.page?contentId=UFF30684 | 12/11/2026 | verificato su due pagine |

## Rimozioni

nessuna

## Discordanze e dati NON inseriti

- **Municipio XIV**: la scheda PUA del Municipio (UFF30684) nella versione aggiornata indica Padiglione 1; la comunicazione del 09/06/2026 conferma il trasferimento dal Padiglione 13 al Padiglione 1 dal 15/06/2026 («sede definitiva»). Il Padiglione 13 compare solo in versioni vecchie della stessa pagina e nelle newsletter 2025. Risolto: inserito il Padiglione 1. Il numero 06 69619644 è del responsabile del servizio (Maria Di Saverio) in una copia vecchia della pagina: non inserito.
- **Municipio X**: NON INSERITO. La pagina IDS1647440 (comunicazione del 29/09/2026) NON RAGGIUNGIBILE. La scheda ufficiale UFF27506 riporta le stesse tre sedi e giorni indicati da ChatGPT (Passeroni lunedì; Toscanelli martedì e giovedì 9–12 e 15–17; Casal Bernocchi venerdì 9–12) e l'email segretariatosociale.mun10@comune.roma.it, ma la stessa pagina contiene anche l'avviso «Chiusura della sede della Direzione Socio Educativa ... via Giancarlo Passeroni, 24», non chiarito. Altre pagine ufficiali (IDS1127955, IDS1428871, IDS1565312, newsletter 11/2025) danno orari e giorni diversi per le stesse sedi e per Casal Bernocchi (anche «sospesa per lavori»). Telefono 345 7478064 e sportello caregiver (Passeroni, venerdì 9–12) compaiono solo in versioni precedenti. Serve la pagina del 29/09/2026 o una conferma dell'ufficio.
- **Municipio XI**: orari discordanti tra pagine ufficiali (UFF1137046; newsletter 11/2025; IDS549187 non li riporta): non inseriti. Sede, telefoni e email concordano.
- **Municipio XII**: Via Longhena 98 compare come «altra sede operativa» senza orari nella pagina più recente (UFF29748); gli orari delle versioni vecchie sono diversi tra loro. Via Ramazzini: numero civico 15 (IDS546855) o 31 (versioni 2023), non presente nella pagina più recente: non inserita. Anche «28/B» (UFF29748) e «28/C» (IDS546855) differiscono: scelta la pagina più recente. Pagina UFF1036442 indicata da ChatGPT non raggiungibile direttamente.
- **Municipio I**: UFF30480 (aggiornata 37 giorni fa) conferma le voci già presenti in `roma.ts` (Eroi, Nuovo Regina Margherita, Petroselli, Esquilino «in via di apertura», orari e email). Nessuna modifica. La notizia del 09/10/2026 NON RAGGIUNGIBILE: lo stato dell'Esquilino va ricontrollato lì.

## Regione Lazio: avvisi (NON inseriti in `bonus.ts`)

Sono avvisi di avviamento al lavoro ex L. 68/1999, non bonus economici: non coerenti con la struttura di `bonus.ts`. Dati letti dalla pagina ufficiale «Avvisi e graduatorie SILD» e dalle notizie di Regione Lazio:

| Avviso | Dato confermato | Dato NON VERIFICATO |
|---|---|---|
| Comune di Canino, det. G14755 del 26/10/2026, VI avviso, art. 1 L. 68/99 (persone con disabilità), 1 Operatore Esperto tempo pieno e indeterminato | domande dalle 9:00 del 04/11/2026 alle 15:00 del 18/11/2026, procedura online | requisiti, documenti (allegati non letti) |
| Frosinone, categorie protette art. 18 c. 2 L. 68/99, datori pubblici, det. G14610 del 23/10/2026 | domande dalle 9:00 del 09/11/2026 alle 14:00 del 20/11/2026 | requisiti, documenti (allegati non letti) |
| ASL Viterbo, det. G15712 del 10/11/2026, VII avviso, art. 1 L. 68/99, 4 assistenti amministrativi tempo pieno e indeterminato (pubblicato 11/11/2026) | pubblicazione e numero posti | date di apertura (18/11/2026 ore 9:00) e chiusura (02/12/2026 ore 15:00): NON VERIFICATO, non compaiono negli estratti letti |

Nota: Canino e ASL Viterbo sono per persone con disabilità (art. 1); Frosinone è per le categorie protette dell'art. 18, non per tutte le persone con disabilità.

## Controlli

- `controlla-dati.js --confronta origin/main`: vedi PR
- Controllo su GitHub: vedi PR
- Anteprima Netlify (pagine aperte e viste): da fare sulla PR

## Cosa manca

1. Municipio X: sedi, orari, telefono, caregiver · pagina IDS1647440 (29/09/2026) e UFF27506 · chiedere a segretariatosociale.mun10@comune.roma.it il chiarimento sulla chiusura di Via Passeroni 24.
2. Municipio XI: orari di sportello · pagina IDS549187 / UFF1137046 · chiedere a pua.mun11@comune.roma.it.
3. Municipio XII: orari e stato di Via Longhena 98 e Via Ramazzini · UFF1036442 · chiedere a pua.mun12@comune.roma.it.
4. Municipio I: comunicazione del 09/10/2026 e stato sede Esquilino · pagina notizia indicata da ChatGPT.
5. Avvisi Lazio: allegati (requisiti, documenti, modalità) dei tre avvisi e date ASL Viterbo · regione.lazio.it/documenti/91209, 91441 e pagina Frosinone.
6. Esenzioni ticket per le ASL di Roma (Roma 1, 2, 3, 5, 6), Vita indipendente, Dopo di Noi, disabilità gravissima, caregiver regionali: NON ESEGUITO in questo intervento.
