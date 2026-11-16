# Roma Municipi X e XI (PUA) e bando disabilità Cerveteri-Ladispoli

- Data: 16/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-16-claude-roma-x-xi-cerveteri-gravissima
- Classe (da `--classifica origin/main`): A
- Origine: tabella di ChatGPT incollata da Ilaria il 16/11/2026, ricontrollata dalla sessione sui siti ufficiali.

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| roma.ts | Municipio X · PUA | nuova voce: tre sedi con giorni, orari e telefoni | https://www.comune.roma.it/web/it/informazione-di-servizio.page?contentId=IDS1565312 (avviso del 16/04/2026); orari di Toscanelli anche su https://www.comune.roma.it/web/it/municipio-x-uffici-e-contatti.page?contentId=UFF27506 | 16/11/2026 | verificato sulle pagine del Comune letti da ricerca |
| roma.ts | Municipio XI · Segretariato/PUA | nuova voce: Via della Magliana 296, pua.mun11@comune.roma.it, telefoni dell'area servizi sociali, accesso su appuntamento | https://www.comune.roma.it/web/it/municipio-xi-uffici-e-contatti.page?contentId=UFF1137046 e pagina «Ricevimento degli utenti» IDS549187 | 16/11/2026 | parzialmente verificato (vedi sotto) |
| bonus.ts | cerveteri-ladispoli-disabilita-sostegno-intensivo | nuova scheda, stato attivo, importi non inseriti | https://www.comune.cerveteri.rm.it/novita/avviso-pubblico-la-realizzazione-di-interventi-favore-di-persone-con-disabilita-che | 16/11/2026 | verificato sulla pagina del Comune (aggiornata 28/02/2025) |

Non inseriti, perché non verificati dalla sessione:
- Municipio X: la pagina del 29/09/2026 indicata da ChatGPT (IDS1647440) non è leggibile dalla sessione; e-mail segretariatosociale.mun10 e telefono 06 69613669 non trovati su altre pagine. In scheda ci sono i dati dell'avviso del 16/04/2026, coerenti con la scheda dell'ufficio.
- Municipio XI: orari telefonici di martedì e giovedì (testo troncato nella ricerca); la data del 03/11/2026 non letta.
- Cerveteri-Ladispoli: importi dell'assegno (500–1.200 € al mese) e del contributo (400–1.000 €) e la formula «in qualsiasi momento (bando aperto)» dal PDF del bando: il PDF non è stato letto dalla sessione.
- Marino: orari dei Servizi Sociali (due fasce diverse sulla stessa pagina dell'08/07/2026, senza indicare quale prevale).
- Anzio monogenitoriali 2026 e Fonte Nuova: nessuna misura 2026 verificabile.
Già presenti da #320: Marino-Ciampino caregiver (scadenza 10/12/2026), Cisterna nido (20/11/2026), Campodimele documenti.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`, `verifica-anagrafica.js`: vedi PR. TypeScript non verificabile in sandbox.

## Cosa manca

1. Importi e requisiti dell'assegno/contributo di cura · Cerveteri-Ladispoli · testo del bando (PDF) o URP di Cerveteri 06 896301.
2. Quale orario prevale · Marino · Servizi Sociali (Palazzo Colonna).
3. Orari fissi di ricevimento · Municipio XI · Segretariato/PUA.
4. Municipi I–IX, XII–XV: pagine con data 2026 · Roma Capitale.
