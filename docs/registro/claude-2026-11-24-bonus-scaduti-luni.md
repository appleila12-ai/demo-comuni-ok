# Bonus scaduti: tolto Luni (fondo affitti 2026)

- Data: 24/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-24-claude-bonus-scaduti
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| bonus | luni-fondo-affitti-2026 | rimozione | https://www.comune.luni.sp.it/it-it/novita/avvisi/2026/bandi/bando-per-l-erogazione-di-contributi-a-sostegno-delle-abitazioni-in-locazione-404204-1-3604a8a0dd4e4cc60fd583a7f34e0d11 | 24/11/2026 | termine 12/11/2026 già scritto nella scheda (verificata il 21/10/2026); regola 9/11/2026: dopo 10 giorni dalla chiusura la scheda si toglie |

## Rimozioni

RIMOSSO: luni-fondo-affitti-2026

## Non modificate: pagine non leggibili in questa esecuzione

Le pagine dei Comuni non si sono potute aprire (accesso non concesso), quindi non ho potuto escludere proroghe. Nessuna modifica, per non inserire dati non verificati:

- bollate-trasporto-scolastico-disabilita-2026-2027 (termine 22/11/2026)
- parabiago-misura-sostegno-servizi-2026-2027 (termine 20/11/2026)
- reggio-calabria-assegno-cura-gravissima-fna-2022 (termine 20/11/2026)
- trapani-tessere-atm-2027 (termine 20/11/2026, già con campo `scade`)

## Controlli

- `controlla-dati.js --confronta origin/main`: vedi PR
- Controllo su GitHub: vedi PR
- Anteprima Netlify: da guardare nella PR

## Cosa manca

1. Eventuale proroga e stato «scaduto» · Bollate, Parabiago, Reggio Calabria, Trapani · pagine indicate come fonte nella scheda · URP o Servizi Sociali del Comune.
2. Chiavi `scade` ripetute due volte nello stesso record in `bonus.ts` (righe ~2347, ~2385, già presenti su main): da sistemare in una PR a parte.
