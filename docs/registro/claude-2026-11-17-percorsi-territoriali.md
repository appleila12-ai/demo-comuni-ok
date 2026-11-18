# TutelApp – Percorsi Territoriali: modulo riservato per Mediglia e Sarzana

- Data: 17/11/2026
- Autore: Claude
- Ramo / PR: percorsi-territoriali-claude
- Classe (da `--classifica origin/main`): **C** (tocca `netlify.toml` e `frontend/netlify.toml`). Ok esplicito della dott.ssa Baudone del 17/11/2026.

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte | Stato |
|---|---|---|---|---|
| frontend/package.json | aggiunta la dipendenza `@netlify/blobs` (una riga) | modifica | - | da provare in anteprima |
| netlify.toml, frontend/netlify.toml | cartella delle funzioni, intestazioni noindex e no-store per /accesso-comuni | aggiunta | - | da provare in anteprima |
| frontend/netlify/functions/percorsi.mjs | accesso con password per Comune, gettone firmato, salvataggio con storico (Netlify Blobs) | nuovo | - | logica provata con archivio simulato |
| frontend/src/percorsi/ | schema del modulo (22 sezioni, 4 percorsi), configurazioni Mediglia e Sarzana | nuovo | scheda pubblicata del Comune | da provare in anteprima |
| frontend/app/accesso-comuni.tsx | pagina riservata (solo web), non collegata a nessun menu | nuovo | - | non provata nel browser |
| frontend/scripts/verifica-ricerca.js | «accesso-comuni» aggiunta alle schermate tecniche escluse dalla ricerca (una parola, file protetto, ok di classe C) | modifica | - | controllo dati: zero errori |
| docs/percorsi-territoriali/ | attivazione, guida di una pagina, scheda progetto, bozze email (non inviate) | nuovo | - | - |

Nessun dato di Comuni, bonus o destinatari modificato (Lombardia è in quota ChatGPT). Nessuna voce tolta.

## Controlli

- Prova della funzione server con archivio simulato: login, blocco dopo 5 tentativi, password corta rifiutata, gettone alterato, isolamento tra Comuni, stati (il Comune non può validare né pubblicare), conflitto di versione, storico: tutti superati. Non provata la scadenza del gettone.
- Sintassi dei file .ts/.tsx controllata. **Non eseguiti**: build dell'app, test nel browser, accessibilità, telefono, stampa (mancano le librerie e la rete in questa sessione).
- `controlla-dati.js`: zero errori dopo l'aggiunta di «accesso-comuni» alle schermate escluse dalla ricerca (la prima prova su GitHub aveva dato 1 errore per questo).

## Cosa manca

1. Libreria `@netlify/blobs` dichiarata come `latest` in `frontend/package.json` (installata da Netlify a ogni build): da fissare in seguito con `yarn add` per aggiornare `yarn.lock`.
2. Le quattro variabili segrete su Netlify (`docs/percorsi-territoriali/ATTIVAZIONE.md`).
3. Prova dell'anteprima con password di prova su computer e telefono, controllo di accessibilità e stampa.
4. Dove Netlify conserva i dati e accordo sul trattamento dei dati.
5. Pagina pubblica del percorso con link diretto e QR code: serve una seconda libreria e dati verificati dal Comune.
6. Referenti di Sarzana (nome e ruolo istituzionale da fonte ufficiale) e conferma del referente di Mediglia.
7. Soggetto proponente (TutelApp o PED) e condizioni economiche uniche, prima di inviare le email.

- 17/11/2026 13:20: variabili Netlify (PERCORSI_*) impostate da Ilaria nel progetto; anteprima ricostruita per la prova di accesso e salvataggio.

## Aggiornamento 17/11/2026 (ore 16): precompilazione estesa
- Richiesta di Ilaria: i Comuni a cui scriviamo sono già in app, quindi non devono reinserire i dati che TutelApp ha già.
- Il modulo ora riporta dalla scheda già pubblicata: Dati del Comune (anche ambito e capofila per Mediglia), recapiti e orari dei Servizi sociali, testo sul trasporto, ASL/ATS per le esenzioni, elenco dei punti di supporto. Tutto in stato «da verificare»; non si salva da solo.
- Il modulo parte con i valori solo se per quel Comune non esiste ancora un salvataggio.
- Prova: funzione `precompila` eseguita con i dati reali (Mediglia 19 campi, Sarzana 14). Schermata non provata dal vivo.
- Cosa manca: percorso del cittadino (passaggi), norme, documenti, moduli: dati che solo il Comune conosce. Le altre sezioni (anziani, famiglie, bonus, bandi...) non hanno un dato corrispondente nella scheda e restano vuote.

## Aggiornamento 17/11/2026 (ore 16:30): associazioni e avviso «scriveteci»
- Il modulo riporta anche le associazioni e le realtà sportive legate in modo esplicito al Comune nell'elenco già in app (solo il campo `comuni`, non l'elenco di provincia): Mediglia 1 (GAUDIO), Sarzana varie. Nuova funzione `associazioniLegateAlComune` in `lib/associazioni.ts` (solo lettura).
- Non collegati, perché non ci sono dati per Comune: INAIL (importi nazionali, competenza per Mediglia non verificata), bonus comunali, ASST. Restano vuoti.
- Decisione di Ilaria: nessun avviso automatico quando il Comune salva; il Comune scrive a info@tutelapp.it quando è pronto. L'indirizzo è in evidenza nel modulo (schermata di accesso e modulo), nella guida e nelle mail.
- Prova: `precompila` eseguita con i dati reali (Mediglia 20 campi, Sarzana 16); controllo dati senza errori. Schermata non provata dal vivo.

## Aggiornamento 17/11/2026 (ore 16:45): «Da dove iniziare» e Modulistica
- Richiesta di Ilaria: il modulo è troppo lungo per un referente; spiegare che si può compilare poco alla volta; la Modulistica la inseriamo noi.
- Aggiunto riquadro «Da dove iniziare» (tre cose: Dati del Comune e Referenti, Servizi sociali, un solo percorso «Dopo una diagnosi»); il resto è facoltativo.
- La sezione Modulistica si precompila col link «Modulistica» già in app, dove esiste (Mediglia sì, Sarzana nessuna voce: resta vuota).
- Prova: `precompila` con dati reali. Schermata non provata dal vivo.

## 18/11/2026 – Modulo Percorsi Territoriali anche per Genova
- Aggiunto il Comune di Genova (`genova`) a `src/percorsi/comuni.ts` e all'elenco di `netlify/functions/percorsi.mjs`.
- Il modulo si precompila dalla scheda del Comune di Genova già in app (15 campi: dati del Comune, servizi sociali, trasporto, esenzione ticket, punti di supporto, associazioni e sport). Referente: «Da confermare con il Comune»; ambito e capofila non indicati (nessuna fonte nella scheda).
- Serve la password del Comune nelle impostazioni segrete di Netlify: `PERCORSI_PASSWORD_GENOVA` (non è nel repository). Dopo averla inserita va rifatto il deploy.

## 18/11/2026 – Percorso «Dopo una diagnosi» in bozza e un solo percorso visibile
- Motivo: i percorsi vuoti (4 percorsi, 23 passaggi, 11 campi ciascuno) erano troppo lavoro per un referente comunale.
- `precompila()` ora scrive una bozza del percorso «Dopo una diagnosi» (passaggi 1-5): «situazione» = titolo del passo già in app (`NEXT_STEPS`); «ufficio», «accesso» e «link» = voci del territorio già presenti nella scheda del Comune (`percorsoTerritorio`), con la loro fonte. Nessun dato nuovo: solo ciò che è già pubblicato in app. I passi senza voci del territorio hanno solo il titolo e una nota «manca l'ufficio del Comune». Tutti i passaggi partono «da verificare». Il sesto passaggio resta vuoto.
- Nel modulo, la scheda «Percorsi del cittadino» mostra un solo percorso; gli altri compaiono con «Mostra gli altri percorsi (facoltativi)» o da soli se hanno già testo.
- Vale per Mediglia, Sarzana e Genova. Chi ha già salvato il modulo non vede cambiare i propri dati (la bozza si usa solo al primo salvataggio).
