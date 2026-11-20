# Coda bonus «attivi» con data passata: esito e Palermo caregiver

- Data: 12/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-12-claude-palermo-caregiver
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| bonus | palermo-bonus-caregiver-fna-2022 | da «aperto» a «scaduto», `scade` 2026-11-11 | https://www.comune.palermo.it/novita/attivit-sociali-al-via-le-domande-per-il-bonus-caregiver/ e pagina dell'avviso | 12/11/2026 | verificato: portale chiuso alle 23:59 dell'11/11/2026; nessuna proroga nelle pagine lette |

## Rimozioni

nessuna

## Esito sulle altre 14 voci della coda (punto 1), lette in `bonus.ts`: nessuna modifica

La coda segnala la data più recente scritta nel testo, che spesso è la data della notizia e non una scadenza.
- Scadenza futura già inserita in `scade`: sassari-trasporto-scolastico-autonomo-2026 (23/11), sassari-piani-162-98-nuove-domande-2026 (16/11, con nota fondi limitati), trapani-tessere-atm-2027 (20/11), ragusa-tessere-ast-2027-2028 (16/11).
- Data = data della notizia o della delibera, nessuna scadenza nella fonte: sicilia-disabilita-gravissima, sardegna-ritornare-a-casa-plus-2026-2027, sardegna-piani-162-98-2026, campania-registro-caregiver, basilicata-assistenza-specialistica-alunni-2026-2027, umbria-cura-e-autonomia-2026, palermo-disabilita-gravissima-distretto42 (regolamento).
- calabria-assegno-cura-gravissima-2026: la data 05/11/2026 è la pagina del Comune di San Ferdinando; l'avviso dell'Ambito di Rosarno scade il 23/11/2026 (scritto nel testo, non in `scade` perché vale per un solo Ambito).
- liguria-ausili-sportivi-2026 e liguria-patenti-speciali-2026: hanno già la nota fissa «fondi limitati, chiedi conferma all'ufficio».
Fonti di queste 14 voci NON riaperte oggi: restano le date di controllo già scritte (verificatoIl).

## Controlli

- `controlla-dati.js --confronta origin/main`: vedi PR
- Controllo su GitHub: vedi PR
- Anteprima Netlify: da fare sulla PR

## Cosa manca

1. Le 14 voci sopra: ricontrollo sulle fonti entro 90 giorni dalla data scritta; Sardegna/Calabria/Sicilia: scadenze dei singoli Ambiti o Comuni.
2. Palermo caregiver: chiedere ai Servizi sociali del Comune se è prevista una riapertura.
3. Proposta: il controllo della coda dovrebbe leggere `scade` e distinguere la data della notizia da una scadenza (frontend/scripts è file protetto: serve l'ok di Ilaria, classe C).
