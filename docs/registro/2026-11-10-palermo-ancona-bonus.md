# Registro 10/11/2026 — bonus Palermo e Ancona

**Ramo:** `dati/2026-11-10-palermo-ancona-bonus` — classe A, dati non pubblicati.

## Schede nuove in revisione
| ID | Fonte istituzionale | Ultimo aggiornamento pagina | Scadenza |
|---|---|---|---|
| `palermo-bonus-caregiver-fna-2022-2026` | https://www.comune.palermo.it/novita/avviso-pubblico-bonus-caregiver-contributo-economico-una-tantum-per-il-sostegno-del-ruolo-di-cura-e-di-assistenza-dei-caregiver-familiari-di-persone-con-disabilit-grave-e-persone-con-disabilit-gravi/ | 03/11/2026 | 11/11/2026 ore 23:59 |
| `ancona-multileva-32-rette-2026` | https://www.comune.ancona.it/it/page/rette-per-strutture-residenziali-contributi-economici-a-sostegno-delle-famiglie-e-degli-ospiti | 05/11/2026 ore 20:03 | 16/11/2026 |

**Verificato:** 10/11/2026. I due ID non risultavano nel catalogo `frontend/src/lib/bonus.ts` su main al momento del controllo. La pagina Regione Marche https://contenuti.regione.marche.it/Entra-in-Regione/Bandi-e-opportunita/Bandi-attivi?idb=28698 indica il 23/11/2026 per una procedura rivolta agli **Ambiti Territoriali Sociali**, non ai cittadini: non confondere le scadenze.

## Modifiche
Aggiunto il modulo separato `frontend/src/lib/bonus-in-revisione/palermo-ancona-2026.ts`. **Non importato** da `bonus.ts` né da altri file: nessuna scheda nuova visibile nell'app. La struttura tipizzata permette una revisione prima dell'integrazione.

## Da verificare prima di pubblicare
- Confermare che non vi siano proroghe o rettifiche nelle pagine ufficiali.
- Palermo: dopo l'11/11, cambiare `stato` in `chiuso` prima di ogni integrazione.
- Ancona: leggere Allegati F e G e verificare tutti i requisiti prima di pubblicare.
- Eseguire `node frontend/scripts/controlla-dati.js` e build del frontend in un ambiente con shell; non eseguiti da questa sessione.
- Integrare chirurgicamente in `bonus.ts` dopo revisione e autorizzazione, senza sovrascrivere il file intero.

**Rimozioni:** nessuna. **Email inviate per queste due schede:** nessuna (le fonti istituzionali risultano esplicite). **Pubblicazione:** non effettuata.
