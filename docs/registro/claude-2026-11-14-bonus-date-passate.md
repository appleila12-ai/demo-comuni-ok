# Bonus «aperti/attivi» con data passata: 6 sistemati, 9 falsi allarmi lasciati

- Data: 14/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-14-claude-bonus-scaduti
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| bonus | luni-fondo-affitti-2026 | stato «chiuso»: il termine scritto nella scheda (12/11/2026 ore 12:00) è passato | già in scheda (sito del Comune di Luni) | invariata (21/10/2026) | pagina non riletta oggi: il sito non si è lasciato aprire |
| bonus | sassari-trasporto-scolastico-autonomo-2026 | scadenza scritta in cifre (23/11/2026), nessun cambio di contenuto | già in scheda | invariata | testo riformattato |
| bonus | sassari-piani-162-98-nuove-domande-2026 | scadenza in cifre (16/11/2026) | già in scheda | invariata | testo riformattato |
| bonus | trapani-tessere-atm-2027 | scadenza in cifre (20/11/2026) | già in scheda | invariata | testo riformattato |
| bonus | ragusa-tessere-ast-2027-2028 | scadenza in cifre (16/11/2026) | già in scheda | invariata | testo riformattato |
| bonus | calabria-assegno-cura-gravissima-2026 | scadenza dell'Ambito di Rosarno in cifre (23/11/2026) | già in scheda | invariata | testo riformattato |

Il controllo legge solo le date scritte in cifre (gg/mm/aaaa): una scadenza scritta «23 novembre 2026» gli sfugge e prende per «scadenza» la data di aggiornamento della pagina. Per questo 5 voci con scadenza futura apparivano scadute.

## Falsi allarmi lasciati invariati (9)

La data indicata è di pubblicazione o di delibera, non una scadenza; la scheda non ha scadenza (regola: senza scadenza indicata, non è scaduta). Non toccate: liguria-ausili-sportivi-2026, sicilia-disabilita-gravissima, palermo-disabilita-gravissima-distretto42, sardegna-ritornare-a-casa-plus-2026-2027, sardegna-piani-162-98-2026, campania-registro-caregiver, basilicata-assistenza-specialistica-alunni-2026-2027, liguria-patenti-speciali-2026, umbria-cura-e-autonomia-2026.
Restano nell'elenco del controllo finché lo script non distingue le date di pubblicazione; modificarlo spetta alla dott.ssa Baudone (file protetto).

## Rimozioni

nessuna

## Controlli

- `--confronta origin/main`: zero errori, 0 aggiunte, 0 tolte.
- `--classifica origin/main`: classe A.
- Elenco «data passata»: da 15 a 9 voci.

## Cosa manca

1. Rilettura della pagina di Luni (chiusura/proroga del bando) · Comune di Luni · sito del Comune · Servizio 6 Servizi socio-educativi, tel. 0187 690111.
2. Per i 9 falsi allarmi: decidere se tenere le date di pubblicazione nel campo «quando» o far riconoscere allo script le date di pubblicazione.
