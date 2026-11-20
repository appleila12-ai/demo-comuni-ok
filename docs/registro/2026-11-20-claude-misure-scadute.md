# Misure con termine passato: Ancona, Sassari, Ragusa

- Data: 20/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-20-claude-misure-scadute
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| bonus | ancona-multileva-3-2-rette-residenziali | stato «scaduto», aggiunto `scade` 2026-11-16, testo aggiornato | https://www.comune.ancona.it/it/page/rette-per-strutture-residenziali-contributi-economici-a-sostegno-delle-famiglie-e-degli-ospiti | 20/11/2026 | verificato (pagina: «termine perentorio del 16 novembre 2026», aggiornata il 10/11/2026, nessuna proroga) |
| bonus | sassari-piani-162-98-nuove-domande-2026 | come sopra | https://www.comune.sassari.it/it/amministrazione/documenti-dati/documento-pubblico/Bando-annualita-2026-L.162-98-piani-personalizzati-in-favore-di-persone-con-disabilita-grave-avviso-presentazione-nuove-domande/ | 20/11/2026 | verificato sulla pagina (aggiornata il 29/06/2026, nessuna proroga); il PDF dell'avviso non è stato letto |
| bonus | ragusa-tessere-ast-2027-2028 | come sopra | https://comune.ragusa.it/en/news/rilascio-tessera-di-libera-circolazione-extraurbana-sui-mezzi-a-s-t-marzo-2027-febbraio-2028-per-soggetti-disabili-art21-l-r-68-81-e-art-2-l-r-9-92-con-invalidita-non-inferiore-al-67-o-equiparati | 20/11/2026 | verificato sulla pagina (aggiornata il 14/10/2026, nessuna proroga); PDF e versione italiana non letti |

Dal giorno dopo la scadenza la scheda mostra «scaduto» per 10 giorni e poi sparisce da sola (campo `scade`). La voce si cancella dal file dopo il 26/11/2026, dichiarandola con `RIMOSSO:`.

## Rimozioni

nessuna

## Non modificate: falso allarme del controllo

Il controllo segnala come «scadute» voci che hanno solo una data di pubblicazione o di avvio, senza scadenza per i cittadini. Non le ho toccate:

- sicilia-disabilita-gravissima: 21/04/2026 è la data della notizia sui pagamenti, pagamenti mensili.
- sardegna-ritornare-a-casa-plus-2026-2027: 15/01/2026 è la pubblicazione delle linee; nessuna scadenza regionale.
- campania-registro-caregiver: 21/12/2023 è l'avvio del portale; nessuna scadenza.
- basilicata-assistenza-specialistica-alunni-2026-2027: 29/08/2026 è la data della notizia; vale per l'anno scolastico.
- umbria-cura-e-autonomia-2026: 28/10/2026 è la data della comunicazione; domande tutto l'anno.
- sardegna-piani-162-98-2026: 23/10/2026 è la conferma dei fondi ai Comuni; nessuna scadenza.
- liguria-ausili-sportivi-2026, liguria-patenti-speciali-2026: «fino ad esaurimento fondi», già con nota di prudenza (controllo del 10/11/2026).
- palermo-disabilita-gravissima-distretto42: 19/04/2023 è la data del regolamento ASP.

## Controlli

- `controlla-dati.js --confronta origin/main`: vedi PR
- Controllo su GitHub: vedi PR
- Anteprima Netlify: da guardare nella PR

## Cosa manca

1. Eventuale proroga o nuova apertura · Ancona (Multileva 3.2), Sassari (162/98), Ragusa (tessera AST) · avvisi PDF e albo del Comune · Ufficio di Promozione Sociale di Ancona (071 2225136), Settore Diritti sociali o URP di Sassari, Settore Servizi alla persona di Ragusa.
2. Sul falso allarme: serve una regola del controllo (cartella `frontend/scripts/`, file protetto, serve l'ok della dott.ssa Baudone) che non consideri scadenza le date di pubblicazione.
