# Indice degli archivi di TutelApp

Mappa di **dove stanno i dati** e **come si modificano senza rompere nulla**. Per le regole di lavoro leggi prima `CHATGPT_WORKFLOW.md`.

> **Numeri sempre aggiornati:** `node frontend/scripts/controlla-dati.js` (solo Node, nessuna installazione).
> Fotografia del 10/11/2026: 113 bonus · 422 schede (420 Comuni + 2 Unioni, di cui 417 in `demo/`) · 7.867 Comuni in anagrafica ISTAT · 315 destinatari · 258 associazioni.

## 0. Quale cartella è quella viva

| Cartella | Stato |
|---|---|
| `frontend/` | **È l'app.** Netlify compila solo questa (`netlify.toml`: `base = "frontend"`). Tutti i percorsi sotto partono da qui. |
| `docs/` | Documenti di lavoro, registro degli interventi, audit. |
| `app/`, `src/`, `tutelapp-demo-parte1/` (nella radice) | **COPIE OBSOLETE. Non leggere, non modificare.** Caricate a mano il 24–26/09/2026, mai più toccate, diverse da `frontend/`. Un file con lo stesso nome lì dentro (es. `src/config/comuni/demo/legnano.ts`) *non* è quello che va online. Il controllo segnala un errore se una modifica le tocca. |

## 1. Archivi dei dati

Tutti i percorsi sono da `frontend/`.

| Cosa | File | Struttura | Come si aggiunge o si cambia una voce |
|---|---|---|---|
| **Bonus, contributi e misure** (regionali e dei singoli Comuni) | `src/lib/bonus.ts` | Elenco `BONUS` di oggetti. Campi: `id`, `regione`, `comuni?`, `titolo`, `perChi`, `cosa`, `stato`, `quando?`, `comeSiChiede`, `fonte {label,url}`, `verificatoIl`, `nota?` | Aggiungi un oggetto nella sezione della sua Regione (le sezioni sono commentate). Senza `comuni` vale per tutta la Regione; con `comuni: ["slug"]` solo per quei Comuni. `id` unico in minuscolo con trattini. `fonte.url` in `https://`. `verificatoIl` = data del controllo, `gg/mm/aaaa`. Regole in testa al file. |
| **Misure nazionali** (assegno, 104, agevolazioni fiscali…) | `src/lib/agevolazioni.ts` | **Non è un elenco**: è il questionario (`DOMANDE`) e la logica `calcola()`. | Si cambia il codice della funzione. È **classe B** (serve il «pubblica»). Il registro dei controlli da fare sulle misure nazionali è `docs/audit-bonus-nazionali-regionali-2026-11-09.md`. |
| **Schede dei Comuni** | `src/config/comuni/demo/<slug>.ts` (417) e `sarzana.ts`, `erba.ts`, `vigne-e-vini.ts`, `ventimiglia.ts`, `mediglia.ts` (aderenti/pilota) | Un file per Comune, tipo `ComuneConfig` (`src/config/comuni/types.ts`). Modello: `_modello.ts` | Il nome del file **deve coincidere** con `slug`. Un Comune nuovo va anche **importato e aggiunto all'elenco `COMUNI_DEMO`** in `demo/index.ts` (due punti: `import` in alto e voce nell'array), altrimenti non compare. Nei `demo/` serve `dimostrativo: true`. Poi esegui `node frontend/scripts/segna-scheda.js --scrivi` (vedi sotto). |
| **Anagrafica nazionale ISTAT** | `src/content/comuni-istat.json` | **UNA sola riga da 560 KB.** Voci `[codice ISTAT, nome, sigla provincia, regione, lat, lon, slug, ha-scheda 0/1]` | **Non modificarla a mano né riscriverla.** L'unico campo che cambia è «ha-scheda»: lo allinea `node frontend/scripts/segna-scheda.js --scrivi`. Regole: `frontend/ANAGRAFICA-COMUNI.md`. |
| **Coordinate dei Comuni** (per il raggio di 30 km) | `src/content/coordinate-comuni.json` | Una riga: `{ "slug": [lat, lon] }` | Per i Comuni con scheda che mancano: `node frontend/scripts/segna-scheda.js --coordinate --scrivi` (prende le coordinate dall'anagrafica). |
| **Destinatari «Scrivi al tuo Comune»** | `src/config/comuni/destinatari.ts` | `DESTINATARI`: `slug → { email, tipo: "ordinaria"\|"pec", fonte }` | Un indirizzo **generico dell'ente** preso dal sito istituzionale (servizi sociali, protocollo, URP…), mai di singole persone. `fonte` = pagina e data in cui è stato letto. Regola: ogni Comune ne ha uno (nella scheda o qui). |
| **Associazioni** (volontariato e sport) | `src/lib/associazioni.ts` | **Dati e codice mescolati** (vedi sotto). Oggetti con `nome`, `cosa`, `dove?`, `telefono?`, `email?`, `sito?`, `whatsapp?`, `logo?`, `comuni?`, `province?` | Si aggiunge un oggetto dentro una chiamata `PER_PROVINCIA.XX.volontariato.unshift(...)` / `.sport.push(...)` della provincia giusta. Dove compare: nei Comuni di `comuni:`, in quelli delle province di `province:` e in quelli entro 30 km (`RAGGIO_KM`). Logo in `public/associazioni/` solo con l'ok dell'associazione. |
| **Esenzione ticket per ASL** | `src/lib/esenzioneAsl3.ts`, `esenzioneAsl5.ts`, `esenzioneNuoro.ts`, `esenzioneAslRisposte.ts` | Testi per ASL, con la fonte | Solo dalla pagina ufficiale dell'azienda sanitaria o dalla sua risposta scritta. |
| **UICI e radiofari LETIsmart** | `src/lib/uici.ts` + `src/content/uici-sedi.json`, `letismart.json` | Dati in JSON, logica nel `.ts` | Regole in testa a `uici.ts` e in `frontend/DATI-UICI-LETISMART.md`. |
| **Reclamo liste d'attesa** | `src/lib/reclamo.ts` + `src/content/reclamo/*.json` | Strutture, NAS, suggerimenti per Regione | Indirizzi pubblici da ricontrollare ogni 3 mesi. |
| **Riferimenti per Regione e aiuti** | `src/lib/territorio.ts` | `REGIONAL_PORTALS`, `HELP_CARDS` | Portali regionali e schede di aiuto. |
| **Ricerca «Di cosa hai bisogno?»** | `src/lib/ricerca.ts` | Ogni funzione dell'app deve esservi trovabile | È codice (**classe B**); `node frontend/scripts/verifica-ricerca.js` segnala le schermate mancanti. |

## 2. Le trappole (leggile prima di modificare)

1. **File grandi.** `bonus.ts` pesa 174 KB, `associazioni.ts` 98 KB, `esenzioneAslRisposte.ts` 77 KB. **Mai riscrivere un file intero**: si perdono voci senza accorgersene. Modifica solo le righe della voce. Il controllo `--confronta origin/main` segnala ogni voce sparita.
2. **`associazioni.ts` non è un archivio puro.** Gli elenchi si compongono eseguendo il file (`unshift`, `push`, cicli `for`). Un'associazione può comparire in più province con lo stesso oggetto. Non spostare né raggruppare blocchi.
3. **`demo/index.ts` è un registro.** Un file Comune non registrato lì (import + elenco) non compare nell'app. Il controllo lo segnala.
4. **Lo `slug` è l'identificativo nei link** (`/lerici`) e deve coincidere col nome del file. L'identificativo stabile resta il codice ISTAT. Non rinominare gli slug esistenti.
5. **`quando` nei bonus è testo libero**: il controllo cerca le date `gg/mm/aaaa` per segnalare le misure forse scadute; è un avviso, non una prova.
6. **Importi e requisiti: solo se scritti nella fonte.** Mai ricavati per analogia da altre misure.
7. **`comuni-istat.json` e `coordinate-comuni.json` sono su una riga:** si toccano solo con `segna-scheda.js`.

## 3. Controlli e strumenti

Tutti si eseguono dalla radice del repository, con Node 22, senza installare nulla.

| Comando | A cosa serve |
|---|---|
| `node frontend/scripts/controlla-dati.js` | Rapporto completo: errori, archivi letti, copertura per Regione, **coda di lavoro** in ordine di priorità. Riusa anche `verifica-anagrafica.js` e `verifica-ricerca.js`. |
| `node frontend/scripts/controlla-dati.js --confronta origin/main` | Confronta con `main`: elenca le voci aggiunte e tolte; una voce tolta non dichiarata nel registro è un **errore**. |
| `node frontend/scripts/controlla-dati.js --classifica origin/main` | Dice la **classe** della modifica: A (solo dati), B (tocca il codice), C (file protetti o copie obsolete). |
| `node frontend/scripts/controlla-dati.js --bloccante` | Solo errori strutturali, in breve. È quello che gira nel build di Netlify. |
| `node frontend/scripts/segna-scheda.js [--scrivi]` | Allinea il segno «ha scheda» dell'anagrafica alle schede presenti (prova se manca `--scrivi`). |
| `node frontend/scripts/segna-scheda.js --coordinate [--scrivi]` | Completa le coordinate dei Comuni con scheda. |
| `node frontend/scripts/verifica-anagrafica.js` | (esistente) coerenza anagrafica ↔ schede. |
| `node frontend/scripts/verifica-ricerca.js` | (esistente) ogni schermata si trova dalla ricerca. |

Gli errori indicano il file e la riga (`src/lib/bonus.ts:520`), così si sa dove intervenire.

## 4. Registro e altri documenti

- `docs/registro/` — **un file per ogni intervento** (cosa, fonti, controlli, cosa manca). Un file per intervento evita conflitti tra sessioni diverse. Come si compila: `docs/registro/README.md`.
- `docs/AUTORIZZAZIONI.md` — cosa può essere pubblicato senza attendere il «pubblica».
- `docs/audit-bonus-nazionali-regionali-2026-11-09.md` — registro degli audit sui bonus.
- `docs/*-ricollocazione-contenuti-2026-11-09.json` — voci tolte dalle schede di Roma, Sanremo, Monterotondo e conservate con le fonti.
