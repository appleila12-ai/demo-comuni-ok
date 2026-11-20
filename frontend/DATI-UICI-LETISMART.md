# UICI e radiofari LETIsmart — dati, regole, aggiornamento

Consultazione: **9 novembre 2026**. Schede in app: `/uici` e `/radiofari`. Dati in `src/content/uici-sedi.json` e `src/content/letismart.json`; logica in `src/lib/uici.ts`.

## Fonti (solo ufficiali)
- UICI: indice «Sedi regionali e provinciali» (una pagina per regione) e, dove consultato, il sito della singola sezione. Sede nazionale: pagina «Contattaci».
- LETIsmart: pagina «Aderisci al progetto» (mappa) e le pagine delle singole installazioni.

## Regole fisse
- Nessun recapito dedotto o inventato. Cella vuota = dato non scritto dalla fonte.
- Dove l'indice regionale UICI e il sito della sezione **non concordano**, il dato è **lasciato fuori** finché la sezione non conferma (elenco sotto). Si tengono solo i numeri/indirizzi presenti in entrambe le fonti.
- La provincia di ogni sezione UICI si ricava dal nome della sezione (es. «CHIETI» → CH). Chiavari (GE) e Civitavecchia (RM) sono segnate `parziale`: seguono solo una parte della provincia. Nelle province di Genova e Roma l'app mostra entrambe le sezioni e dice che non può indicare quale sia la competente.
- Province senza sezione provinciale UICI nell'indice (Verbano-Cusio-Ossola, Fermo, Sud Sardegna): l'app mostra il Consiglio regionale e lo dice.
- Molise: UICI usa «Sezione regionale» e «Rappresentanza» (Isernia); l'app le mostra con la denominazione scritta dalla fonte.
- LETIsmart: lo stato è la categoria della mappa (classe HTML della legenda). La mappa non è un elenco dei singoli radiofari: le «installazioni documentate» sono quelle raccontate sulle pagine ufficiali. Se per un Comune non c'è nulla: «Non abbiamo ancora informazioni verificate sulla presenza di radiofari in questo Comune.» (mai «non esistono»).
- Voci della mappa NON mostrate perché dubbie: «Abruzzo» (è una regione), «Forsinone», «Caltanisetta» (grafia da confermare), «Desenzano» (tavola rotonda: non agganciata a un Comune). Corrispondenze usate per agganciare la mappa ai Comuni: Mestre→Venezia, Ala Trento→Ala, Sabbionetta→Sabbioneta (le pagine LETIsmart scrivono «sabbioneta»), Monterusciello→Pozzuoli.

## Dati lasciati fuori per conflitto tra le fonti (da far confermare alle sezioni)
Per telefono ed email dove un valore è in comune tra le due fonti, si pubblica solo quello (il valore presente su una sola fonte resta fuori). Per gli indirizzi e dove nessun valore coincide, il campo è lasciato fuori del tutto (Gorizia, Viterbo, Parma, Foggia e Sicilia: indirizzo; Crotone, Benevento, Rieti, Oristano, Catania, Trapani, Belluno, Verona, Agrigento, Prato, Bolzano, Isernia: email; Ragusa: PEC).

| Sede | Campo | Indice regionale UICI | Sito della sezione |
|---|---|---|---|
| L'Aquila | telefono | 0862/319904 | 0862 319904 \| 348 015 9680 |
| Matera | telefono | 0835/333542 | 0835 33 35 42 \| +39 3760251202 |
| Gorizia | telefono | 0481/535494 | 0481 535494 \| 353 4348597 |
| Gorizia | indirizzo | Via Bellini, 3 CAP 34170 | Via Bellini, 3/B 34170 Gorizia |
| Frosinone | telefono | 0775/270781 | 0775.270781 \| 0775.270536 \| 0775.270956 |
| Viterbo | telefono | 0761/223204 | 0761 223204 \| 393 5826621 |
| Viterbo | indirizzo | Via Molini 11/13 CAP 01100 | Via Fernando Molini 11b – 01100 VITERBO |
| Liguria (consiglio) | telefono | 010/0993174 | +39 010 099 3174 \| +39 340 226 8664 |
| Palermo | telefono | 091/6164310, 091/6162405 | 0916162405 |
| Parma | indirizzo | Via N. Bixio, 47 CAP 43125 | Via N. Bixio n. 47/A - 43125 Parma |
| Foggia | indirizzo | Via Gorizia, 48 CAP 71100 | Via Gorizia, 48 – 71121 – FOGGIA |
| Sicilia (consiglio) | indirizzo | Via C. Abate, 5 CAP 95124 Catania | Via Carmelo Abate, 5 95125 Catania |
| Crotone, Benevento, Rieti, Oristano, Catania, Trapani, Belluno, Verona | email | …@uici.it | …@uiciechi.it |
| Modena, Varese, Sassari, Toscana e Veneto (consigli) | email | un indirizzo | due indirizzi |
| Agrigento, Prato, Bolzano | email | …@uici.it | indirizzo diverso del sito della sezione |
| Isernia | email | uicmoli@uici.it | uicis@uici.it |
| Ragusa | PEC | uiciechi.ragusa@pec.it | uniciechi.ragusa@pec.it |

Refuso visibile nell'indice UICI (lasciato come scritto): Potenza «C.so Garibali, 2» (la sede regionale scrive «Garibaldi»). Da far correggere alla sezione.

## Cosa manca
- Pagine proprie di 18 sezioni non consultate: Pescara, Cosenza, Reggio Calabria, Bologna, Civitavecchia, Alessandria, Vercelli, Taranto, Rimini, Ancona, Ascoli Piceno, Bari, Barletta BAT, Massa Carrara, Messina, Pavia, Mantova, Brescia (per queste c'è solo l'indice regionale).
- PEC, orari e servizi: presenti solo dove li scrive la fonte.
- Elenco dei singoli radiofari con indirizzi: non pubblicato; da chiedere a LETIsmart (info@letismart.it, 040 231778) o alla sezione UICI.
- Identità delle voci «Forsinone», «Caltanisetta», «Abruzzo»; allineamento mappa/installazioni per Roma (tavola rotonda ma impianto a Porta di Roma) e Policoro (interesse, ma articolo del 2023 su impianto a Policoro e Matera): da chiedere a LETIsmart.
- Qualifica di Molise e Isernia: da chiedere alla sezione regionale Molise.

## Come si aggiorna
- Una sede: modifica la riga in `uici-sedi.json` (campi `tel`, `email`, `pec`, `ind`, `orari`, `servizi`, `sito`, `fonti`) e aggiorna `consultazione` in cima al file.
- Una città LETIsmart: `letismart.json`, `stato` = `attiva` | `tavola` | `interesse` | `non_verificato`; ogni installazione ha `data` (pubblicazione) e `fonte` (URL).
- Dati vecchi: la data di consultazione è mostrata nelle schede. Da ricontrollare almeno ogni 3 mesi e dopo ogni risposta delle sezioni.
- Dopo ogni modifica: `npm run verifica:ricerca`.
