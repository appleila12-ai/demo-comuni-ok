# Registro degli interventi

Un file per ogni intervento sui dati o sull'app: `AAAA-MM-GG-tema.md` (es. `2026-11-12-bonus-calabria.md`).
Si parte da `_modello.md`.

**Perché un file per intervento e non un unico elenco:** più sessioni lavorano insieme su questo repository. Un solo file da aggiornare in coda produrrebbe conflitti a ogni PR; i file separati no.

## Cosa deve contenere

- cosa è stato **aggiunto, cambiato, tolto**, voce per voce;
- per ogni voce la **fonte** (URL) e la **data del controllo**;
- l'esito dei controlli e la classe della modifica (A, B, C);
- **cosa manca**, punto per punto: quale dato, per quale Comune o Regione, dove cercarlo, a chi chiederlo;
- se serve, le bozze delle mail da inviare agli enti.

## Rimozioni

Una voce tolta da un archivio si dichiara con una riga che inizia con `RIMOSSO:` seguita dagli identificativi separati da punto e virgola:

```
RIMOSSO: id-del-bonus; altro-id; slug-del-comune
```

Senza questa riga, `node frontend/scripts/controlla-dati.js --confronta origin/main` segnala la voce come sparita per errore.
Per i bonus l'identificativo è l'`id`; per i Comuni lo `slug`; per le associazioni il nome.

## Regole

- Il registro non contiene dati personali di cittadini né di singole persone (il repository è pubblico).
- I file passati non si riscrivono: se si corregge un errore, si aggiunge una nota datata in fondo.
- Le proposte di modifica non applicate (quando chi lavora non può modificare i file grandi) stanno in `docs/proposte/`.
