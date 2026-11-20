# TutelApp Data — proposta di pagina commerciale e demo (20/11/2026)

**Stato: proposta, non pubblicata.** Non modifica l'app e non introduce prezzi contrattuali.

## Obiettivo
Valorizzare gli archivi territoriali verificati di TutelApp offrendo consultazione gratuita ai cittadini e servizi professionali a pagamento per enti, associazioni e software house. La privacy dell'app personale rimane separata: nessun dato del cittadino nel catalogo pubblico.

## Pagina pubblica proposta
- Percorso indicativo: `/data` sul sito istituzionale, previa verifica del routing effettivo.
- Titolo: **Le informazioni del territorio, finalmente collegate.**
- Sottotitolo: *Servizi, enti, agevolazioni e punti di supporto in dati strutturati, con fonti istituzionali e date di verifica.*
- Azioni: **Prova la ricerca**; **Richiedi una demo professionale**.
- Sezioni: ricerca dimostrativa; per chi è utile; servizi professionali; trasparenza su copertura e aggiornamento; contatti.

## Demo — specifiche
1. Ricerca per Comune, codice ISTAT, provincia; successivamente per bisogno e tipologia di servizio.
2. Risultati da **dati effettivamente presenti** negli archivi vivi di `frontend/`; niente numeri di copertura inventati.
3. Scheda: Comune, codice ISTAT, Ambito/ASL se verificati, servizi disponibili, fonte completa, data verifica, stato informazione.
4. Stato distinto per **dato verificato**, **informazione non disponibile** e **richiesta all'ente senza risposta**. I dati dubbi non entrano nell'app: nel prodotto commerciale vanno trattati come metadati interni di copertura, non come informazioni per il cittadino.
5. Esportazione dimostrativa limitata a dati riutilizzabili; API non dichiarata operativa prima di sviluppo e collaudo.
6. Accessibilità: tastiera, etichette leggibili, alto contrasto, mobile-first.

## Fonti dati da analizzare (senza duplicarle)
- `frontend/src/content/comuni-istat.json`: anagrafica nazionale, non modificare manualmente.
- `frontend/src/config/comuni/demo/`: schede territoriali.
- `frontend/src/lib/bonus.ts`: misure e fonti.
- `frontend/src/lib/associazioni.ts`: associazioni; dati e logica mescolati, richiede estrazione controllata.
- `frontend/src/config/comuni/destinatari.ts`: contatti istituzionali.
- `frontend/src/lib/esenzioneAsl*.ts`: informazioni ticket.

Proporre un **livello di lettura/normalizzazione** separato dall'app, senza riscrivere gli archivi e senza esporre dati personali. Identificativi stabili: codici ISTAT per i Comuni, ID univoci per servizi e fonti. Conservare date, provenienza, condizioni di licenza, storico e differenze.

## Offerte — prezzi solo esplorativi
| Segmento | Servizio | Ipotesi, non pubblicare come listino definitivo |
|---|---|---|
| Pubblico | Ricerca e schede consultabili | Gratuito |
| Associazioni | Esportazioni, monitoraggio, report | 39 €/mese oppure 390 €/anno |
| Software house | API, storico, integrazioni | 149 €/mese oppure 1.490 €/anno |
| Enti e Ambiti | Dashboard, supporto, aggiornamenti | Da 900 €/anno, su preventivo |

Non vendere dati pubblici come esclusivi: il valore a pagamento è nel servizio aggiuntivo. Verificare licenze delle singole fonti, obblighi di attribuzione, condizioni d'uso, privacy, termini API e sostenibilità dei costi prima del lancio.

## Piano operativo
1. Audit di struttura e licenze; mappa delle entità e dei campi già disponibili.
2. Prototipo di ricerca collegato a un campione reale e verificato, senza dichiarare copertura nazionale completa.
3. Test accessibilità e validazione con utenti/associazioni.
4. Esportazioni CSV/JSON e documentazione tecnica; successivamente API e dashboard.
5. Pagina commerciale e primi colloqui con Comuni, Ambiti, associazioni, software house.

## Vincoli di lavoro
Rispettare `CHATGPT_WORKFLOW.md`, `AGENTS.md`, `docs/INDICE-ARCHIVI.md` e `docs/coordinamento/ASSEGNAZIONI.md`. Nessuna modifica ai file protetti o ai dati in produzione in questa proposta. La realizzazione della pagina è modifica di codice classe B e richiede autorizzazione esplicita alla pubblicazione. Coordinarsi con le PR già aperte e con Claude.
