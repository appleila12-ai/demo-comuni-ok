# Risposte ASL 4 (Distretto 16) e AST Ancona

- Data: 12/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-12-claude-risposte-asl4-ancona / (vedi PR)
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| esenzioneAslRisposte | carro, maissana, varese-ligure | aggiunta scheda ASL 4, Distretto 16 (Anagrafe Sanitaria Sestri Levante: di persona senza appuntamento o per e-mail, pratiche entro 5 giorni, sportello a Varese Ligure il martedì 9–13) | risposta scritta Ufficio Anagrafe Sanitaria ASL 4, 12/11/2026 (in copia URP) | 12/11/2026 | verificato dall'ente |
| esenzioneAslRisposte | ancona | modifica: tolto un secondo blocco «ancona» più povero che sovrascriveva quello completo; aggiunti passi della richiesta online (residenza nel Distretto di Ancona o Jesi, allegato, integrazioni in piattaforma) | risposta scritta U.O.C. Comunicazione Formazione e URP AST Ancona, 12/11/2026 | 12/11/2026 | verificato dall'ente |

I tre Comuni (Carro, Maissana, Varese Ligure) non hanno ancora una scheda in app: la scheda ticket è pronta per quando saranno inseriti.

## Rimozioni

Nessuna scheda rimossa. Eliminato il blocco duplicato `ESENZIONE_ASL.ancona` (il più povero, dello stesso slug).

## Controlli

- `--confronta origin/main`: nessun errore, nessuna voce aggiunta o tolta negli archivi contati
- `--classifica origin/main`: classe A
- controllo semplice: 1 errore già presente su main («agropoli» senza Comune in anagrafica), non causato da questa modifica

## Cosa manca

1. ASL 4: elenco documenti ed eventuale modulo ufficiale (chiesto nella mail di ringraziamento).
2. AST Ancona: tempi di rilascio e telefono dedicato alla richiesta online (chiesti nella mail di ringraziamento).
3. Verona: il Comune ha girato la richiesta ai Servizi Sociali, nessuna risposta ancora; ULSS 9 e contributi aperti.
4. Comuni liguri in «informazione in validazione»: richieste da inviare (bozze create).

## Mail da inviare (bozze)

Bozze di ringraziamento create in Gmail (non inviate): ASL 4 (Anagrafe Distretto 15, in copia URP e referenti) e AST Ancona.
