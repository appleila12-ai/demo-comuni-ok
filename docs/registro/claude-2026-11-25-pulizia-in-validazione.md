# Pulizia delle note «in validazione» e secondo lotto di richieste (25/11/2026)

- Data: 25/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-25-claude-pulizia-in-validazione
- Classe: A (solo `frontend/src/content/in-validazione.json` e documenti)

## Cosa è cambiato

| Voce | Azione | Motivo |
|---|---|---|
| in-validazione: acireale, agrigento, alghero, catania, siracusa, ragusa, trapani, gorizia (servizi sociali) | tolta la nota | recapiti ora in scheda (Gorizia: PR #402; gli altri già presenti) |
| in-validazione: cerveteri, ladispoli, trieste (bonus comunali) | tolta la nota | bonus comunale ora in app |
| in-validazione: imola (esenzione ticket) | tolta la nota | scheda ticket ora presente (PR #394) |
| in-validazione: firenze, catania, parma, rimini, ferrara, siracusa, forli, piacenza, arezzo, barletta (bonus comunali) | stato «da chiedere» → «chiesto», dal 25/11/2026 | mail inviata il 25/11/2026 ai Servizi Sociali |

Secondo lotto di richieste (25/11/2026, stesso testo del primo lotto, dal Comune più grande): Firenze segretariato.sociale@comune.fi.it · Catania segreteria.direzionepolitichesociali@comune.catania.it · Parma sportellosociale@comune.parma.it · Rimini segretariatosociale@comune.rimini.it · Ferrara sportellosocialeui@comune.fe.it · Siracusa politichesociali@comune.siracusa.it · Forlì sportellosociale@comune.forli.fc.it · Piacenza informasociale@comune.piacenza.it · Arezzo sociale@comune.arezzo.it · Barletta segretariatosociale@comune.barletta.bt.it. Nessun indirizzo di protocollo o PEC.
`docs/informazioni-mancanti.md` rigenerato con `completezza-comuni.js . --scrivi`.

## Rimozioni

nessuna (solo note di validazione, non voci dei dati)

## Controlli

- `controlla-dati.js --confronta origin/main`: vedi PR
- Anteprima Netlify: da guardare sulla PR

## Cosa manca

1. Risposte dei 20 Comuni scritti il 24 e 25/11 (Bari, Taranto, Foggia, Bergamo, Vicenza, Novara, Ancona, Lecce, Catanzaro, Brindisi e i 10 di oggi): inserire i dati, passare la voce a risolta, registrare la risposta.
2. Terzo lotto: i Comuni più grandi ancora «da chiedere» con un indirizzo di ufficio in scheda (es. Cosenza, Ragusa, Asti, Cremona, Grosseto); per gli altri indirizzo da cercare.
3. Bandi caregiver Collio–Alto Isonzo e Carso Giuliano: link, scadenza e requisiti a pubblicazione avvenuta (dicembre 2026).
