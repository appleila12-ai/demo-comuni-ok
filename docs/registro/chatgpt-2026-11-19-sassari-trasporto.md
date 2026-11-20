# Sassari: domanda online per il rimborso trasporto scolastico

- Data: 19/11/2026
- Autore: ChatGPT
- Ramo: dati/2026-11-19-chatgpt-sassari-trasporto
- Classe: A, solo dati e registro

## Cosa è cambiato

Modifica puntuale di `sassari-trasporto-scolastico-autonomo-2026` in `frontend/src/lib/bonus.ts`. Sostituito il rinvio generico con portale, SPID del genitore/tutore/affidatario, percorso del modulo, certificazione obbligatoria, IBAN del richiedente e recapiti informativi del PDF. Esplicitati fondi limitati, nuova domanda in caso di errori e prevalenza dell'avviso sull'ISEE: assenza o difformità collocano in coda e non escludono automaticamente.

Scadenza già presente confermata: 23/11/2026 ore 23:59. Email generale del bando distinta dal canale di domanda online e dai Servizi Sociali; non aggiunte email nominative. Importo chilometrico e requisiti preesistenti confermati dal PDF.

## Fonti lette

- Pagina documento, pubblicata e aggiornata il 03/11/2026 ore 13:12: https://www.comune.sassari.it/it/amministrazione/documenti-dati/documento-pubblico/Voucher-per-il-servizio-di-trasporto-scolastico-in-favore-di-studenti-disabili-frequentanti-il-primo-ciclo-di-studi-residenti-nel-Comune-di-Sassari-anno-2026/
- Avviso completo, datato 03/11/2026, cinque pagine: https://www.comune.sassari.it/.galleries/doc-documenti/avviso_voucher_trasporto_alunni_disabilita_2026.pdf ; domanda e allegato a pagina 2, graduatoria e IBAN a pagina 3, recapiti a pagina 5.
- Notizia del 09/11/2026, aggiornata 10/11/2026 ore 09:52, conferma canale esclusivamente online: https://www.comune.sassari.it/it/novita/notizia/Concessione-di-contributi-economici-a-titolo-di-rimborso-spese-sostenute-per-il-trasporto-scolastico-degli-alunni-con-disabilita/

Controllo fonti del 19/11/2026. Nessuna richiesta inviata agli uffici, nessun accesso al portale con identità personale.

## Rimozioni

Nessuna. Una voce aggiornata, zero aggiunte.

## Controlli

Confronto, classificazione e controllo completo rispetto a `fd070af17ade7ccb15527c557a229c9252eb401d`; esiti nella PR. Anteprima e CI da verificare prima dell'unione.

## Cosa manca

Disponibilità residua dei fondi e orari per informazioni non indicati nell'avviso. Non dedotti. Nessuna modifica alle altre schede regionali o comunali.
