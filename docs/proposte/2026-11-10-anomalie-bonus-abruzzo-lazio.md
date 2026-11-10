# Verifica mirata del catalogo bonus — 10/11/2026

## Riscontro direttamente sul file attivo
File: `frontend/src/lib/bonus.ts` su `main`, 2.336 righe. Nessuna modifica effettuata al catalogo.

| ID esistente | Problema accertato | Intervento proposto |
|---|---|---|
| `laquila-caregiver-2026` | `stato: "aperto"` ma `quando` dice scadenza **02/11/2026 ore 23:59**; `fonte.url` è un articolo ReteAbruzzo, non sito istituzionale; nota dice ancora «La scadenza è vicina» | Verificare avviso del Comune dell'Aquila e proroghe; se non prorogato, cambiare in `chiuso`; sostituire fonte con URL ufficiale e correggere nota. **Priorità alta: scheda potenzialmente ingannevole.** |
| `ocre-vita-indipendente-2026` | Fonte L'Aquila Blog, non istituzionale; `stato: "chiuso"` e scadenza 31/01/2026 | Reperire avviso ufficiale Ambito/Unione Montana/Regione Abruzzo, mantenere chiuso fino a verifica di eventuale nuova finestra. |

## Lazio: fonti ufficiali confermate
- Riconoscimento caregiver, PUA, valutazione e Card Giver: https://www.regione.lazio.it/cittadini/sociale-famiglie/caregiver-familiare — consultata 10/11/2026.
- Portale Salute Lazio, sostegno caregiver: https://salutelazio.it/it/servizi/sostegno-ai-caregiver — consultata 10/11/2026. Riporta budget personale €1.000/anno con ISEE < €24.000, sollievo programmato fino a €500/anno o €600/anno in condizioni particolari, e supporto in emergenza. **Non trasformare automaticamente questi importi in un bonus universale**: verificare la delibera attuativa, lo sportello competente e l'effettiva accessibilità locale.
- Vita indipendente 18–64 anni, domanda PUA e valutazione UVM: https://regione.lazio.it/cittadini/sociale-famiglie/disabilita/vita-indipendente — consultata 10/11/2026.
- Municipio VI, avviso sollievo caregiver del 28/10/2026: https://www.comune.roma.it/web/it/bando-concorso.page?contentId=BEC1663991 — consultata 10/11/2026. **Scadenza non riportata come data assoluta nella pagina**: «fino al 15° giorno successivo alla pubblicazione»; verificare decorrenza e eventuali rettifiche prima di esporre una data.

## Azioni tecniche
1. Eseguire `node frontend/scripts/controlla-dati.js --coda` e salvare gli ID di tutte le voci con date passate.
2. Verificare ogni fonte non istituzionale, sostituendola solo dopo reperimento della pagina ufficiale.
3. Non modificare il file grande tramite sostituzione integrale; usare edit chirurgico con shell.
4. Eseguire controlli GitHub e Netlify, PR separata di soli dati e registro delle rimozioni.
5. Conservare `PUBBLICAZIONE_AUTOMATICA_DATI: no`.

## Stato
**Verifica effettuata, correzioni ai bonus NON ancora applicate.** Nessuna rimozione.
