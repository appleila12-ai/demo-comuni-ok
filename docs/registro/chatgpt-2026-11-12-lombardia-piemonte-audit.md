# ChatGPT — audit Lombardia e Piemonte (12/11/2026)

## Stato e vincoli
- Fonte di lavoro: `frontend/src/lib/bonus.ts`, letto su main il 12/11/2026 (SHA blob `c99a7567f1fb2c8066096a8e7b2a1bde0c0b819c`). Nel file corrente rilevate **100 occorrenze di `id:` e 100 URL `url:`**: il precedente obiettivo di 113 record si riferiva a una versione precedente. Non affermare che 113 siano ancora presenti.
- **Non modificato bonus.ts**: la PR aperta #256 lo modifica già. Non sovrapporre modifiche finché la PR non viene risolta.
- Solo Lombardia e Piemonte, regioni assegnate a ChatGPT. L'Aquila e Ocre sono in Abruzzo, assegnato a Claude: nessuna modifica a quei record.

## Anomalia verificata: Lombardia
- ID: `lombardia-misura-b1-sostegno`.
- Fonte primaria Regione Lombardia: https://www.regione.lombardia.it/politiche-sociali-e-abitative/disabilita/politiche-e-misure-per-la-disabilita/sostegno-per-la-disabilit--gravissima-misura-sostegno (consultata 12/11/2026).
- Conferma istituzionale: https://www.lombardiafacile.regione.lombardia.it/wps/portal/site/Lombardia-Facile/DettaglioRedazionale/News/misuraB1-aggiornamento2024 (consultata 12/11/2026).
- **Nuove domande**: dal 22/06/2026 al **31/10/2026**; non sono più aperte. **Persone già in carico**: proseguono fino al 31/12/2026 al permanere dei requisiti, senza nuova istanza. Non confondere lo stato della prestazione con l'apertura alle nuove domande.
- Sul file attuale `stato: "da-verificare"`: lo stato non è ammesso dal workflow. **Proposta di correzione chirurgica dopo #256**: sostituire soltanto lo stato con quello coerente con la rappresentazione editoriale delle prestazioni in continuità; mantenere chiarissimo nel campo `quando` che nuove domande sono chiuse. Prima della modifica verificare le regole UI che distinguono `attivo` e `chiuso`. Nessuna modifica applicata.

## Anomalia verificata: Piemonte
- ID: `piemonte-buono-domiciliarita-2026`.
- Fonte primaria: https://bandi.regione.piemonte.it/contributi-finanziamenti/scelta-sociale-buono-domiciliarita-20262027 (consultata 12/11/2026).
- La pagina istituzionale riporta **domande dal 14/09/2026 al 02/11/2026 ore 23:59**, contributo di **700 euro/mese per 12 mesi**. La pagina mostra ancora l'etichetta generica `Stato: Aperto`, ma la **scadenza testuale è già passata**. Nessuna proroga verificata nella pagina.
- Il record attuale riporta `stato: "aperto"`. **Proposta chirurgica dopo #256**: cambiare solo `stato` in `chiuso`, mantenendo scadenza e fonte. Se compare un provvedimento ufficiale di proroga, ricontrollare prima di applicare.

## Cosa manca e cosa non è stato fatto
- Non eseguiti i tre controlli Node: GitHub connector non offre shell per questo repository; controllare GitHub Actions quando sarà possibile applicare una modifica ai dati.
- Non modificati i record applicativi, non inviati messaggi, non eseguiti merge o deploy.
- La classificazione preliminare delle fonti individua il dominio non istituzionale `www.reteabruzzo.com` per L'Aquila; compete a Claude e richiede la fonte ufficiale. La verifica di ogni URL e di tutti i requisiti/importi dei record restanti **non è ancora stata eseguita**.
