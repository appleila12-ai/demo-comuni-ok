# ASL 5 Spezzino · risposta dell'URP su ausili e protesi (e domande senza risposta sul trasporto)

- Data: 12/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-12-claude-liguria-asl5-urp-ausili / (da assegnare)
- Classe (da `--classifica origin/main`): A (solo un file in `docs/registro/`)

Registro della richiesta e della risposta, per la banca dati delle risposte degli uffici (regola del 12/11/2026). La risposta completa è nella casella di TutelApp (privata, non pubblica): qui ci sono solo i fatti, senza nomi di persone.

## Cosa è cambiato

Il contenuto in app è già su `main`; questo file lo documenta e lo collega alla fonte.

| Archivio | Voce | Azione | Fonte | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| `frontend/src/lib/ausiliAsl5.ts`, `frontend/app/ausili.tsx` | scheda ausili ASL 5: mail per zona, sportelli, documenti, tempi, riparazione | aggiunta (PR #220) | risposta scritta dell'URP ASL 5 del 10/11/2026 | 10/11/2026 | verificato (risposta scritta dell'ente) |
| stessi file + `ricerca.ts` | nota «Trasporto per visite, esami e terapie: mancano ancora i dati» | aggiunta (PR #259) | richiesta del 30/10/2026 senza risposta su questo punto | 12/11/2026 | dato mancante dichiarato in app |
| `ausiliAsl5.ts` | avviso «orari indicativi» sugli sportelli; link alla pagina ufficiale | aggiunta (PR #253) | https://www.asl5.liguria.it/PerilCittadino/Serviziterritoriali/CurePrimarieeAttivit%C3%A0Distrettuali/Fornituraausilieprotesi.aspx (nessuna data di aggiornamento indicata) | 12/11/2026 | verificato |

## Rimozioni

nessuna

## Richiesta e risposta (da usare nella banca dati)

- Richiesta: 30/10/2026, mail all'URP dell'ASL 5 (urp@asl5.liguria.it), 9 domande: 6 su ausili e protesi, 3 sul trasporto per visite e terapie.
- Risposta: 10/11/2026, **11 giorni dopo**, inoltrata dall'URP con il testo dell'ufficio competente.

| Domanda | Esito |
|---|---|
| 1. Ufficio, indirizzo, telefono, mail, orari | Risposto in parte: due mail dedicate per zona (La Spezia, Val di Vara e Riviera; Sarzana e Val di Magra) e quattro sportelli con orari. **Telefono del servizio protesica: non indicato.** |
| 2. Serve l'appuntamento? | Negli sportelli no. Per l'invio per mail: non indicato. |
| 3. Documenti e modulo | Elenco documenti dato. Modulo: rimando alla sezione «Fornitura Ausili e Protesi» del sito, **senza indirizzo** (trovato poi il 12/11/2026). |
| 4. Tempi | 20 giorni per legge; di solito 2-3 giorni per la valutazione e circa una settimana per la fornitura («solitamente»). |
| 5. Riparazione o sostituzione | Riparazione: richiesta del medico curante su ricettario rosso. **Sostituzione: non indicata.** |
| 6. Pagina del sito | Solo il nome della sezione, senza indirizzo. |
| 7. Il trasporto per visite, esami e terapie è organizzato o autorizzato dall'ASL? | **Nessuna risposta.** |
| 8. A chi si chiede e con quanto anticipo | **Nessuna risposta.** |
| 9. Pagina del sito sul trasporto | **Nessuna risposta.** |

Cose da tenere presenti sulla risposta (fatti, non giudizi):
- Per Ceparana e Levanto gli sportelli sono «ogni quindici giorni (secondo calendario farmacia)»: il calendario non è stato indicato.
- La risposta scrive «DPCM 12 gennaio 20217»: in app è scritto 2017 (anno del DPCM).
- Non c'è nessuna data di aggiornamento né sulla risposta né sulla pagina del sito.
- Orari scritti in app come indicativi, con l'avviso di chiedere conferma all'URP (regola dell'11/11/2026).

Seconda mail, inviata il 10/11/2026 nella stessa conversazione: ringraziamento; domande 7, 8 e 9 sul trasporto; conferma dell'indirizzo per Lerici, Portovenere, Levanto e la Riviera; indirizzo della pagina del sito. **Nessuna risposta al 12/11/2026.** L'indirizzo della pagina è stato trovato da noi il 12/11/2026.

## Controlli

- `controlla-dati.js --confronta origin/main`: nessuna voce aggiunta o tolta (bonus, Comuni, destinatari, associazioni invariati). `--classifica origin/main`: classe A.
- Controllo su GitHub: il controllo «controlli» fallisce già su `main` per il controllo anagrafica (schede senza Comune nell'anagrafica, di altre sessioni): non dipende da questo file.
- Anteprima Netlify: non applicabile (nessuna pagina toccata).

## Cosa manca

1. Trasporto per visite, esami e terapie · ASL 5 · nessuna risposta alle domande 7, 8 e 9 · a chi chiederlo: URP dell'ASL 5 (stessa conversazione del 30/10/2026). In app c'è la nota «mancano ancora i dati» con l'invito ai cittadini a chiedere all'URP.
2. Indirizzo giusto per Lerici, Portovenere, Levanto e la Riviera · ASL 5 · domanda aperta nella mail del 10/11/2026. Fino alla risposta, in app questi Comuni vedono l'indirizzo di La Spezia, Val di Vara e Riviera.
3. Telefono del servizio protesica e calendario di Ceparana e Levanto · non indicati · si possono chiedere nello stesso scambio.
4. Sollecito: se l'URP non risponde, decide la dott.ssa Baudone quando e come scriverle di nuovo.
5. Aggiornare il tracker contatti (Excel sul suo computer) con queste due mail.

## Mail da inviare (bozze)

Nessuna: le mail sono già partite.
