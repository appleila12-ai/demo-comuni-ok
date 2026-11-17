# Titoli fissi per le pagine generali di tutelapp.it

- Data: 14/11/2026
- Autore: Claude
- Ramo / PR: seo/2026-11-14-titolo-pagine / (vedi PR)
- Classe (da `--classifica origin/main`): B (codice: `frontend/app/_layout.tsx`)

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| codice | titolo della scheda sul web | modifica | n/a | 14/11/2026 | da vedere in anteprima |

Prima: ogni pagina mostrava «TutelApp · <Comune attivo>» (es. «Comune di Brescia»). Ora le 7 pagine generali della sitemap (/, /comuni, /per-i-comuni, /primi-passi, /riforma, /domande-104, /faq) hanno un titolo fisso e descrittivo. Tutte le altre pagine, comprese quelle di un singolo Comune, restano come prima.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: zero errori
- Compilazione (`yarn build`): non eseguita nell'ambiente di lavoro (niente dipendenze installate); va letta sull'anteprima Netlify
- Anteprima Netlify: aprire le 7 pagine e controllare il titolo nella scheda del browser, poi una pagina di Comune (es. /sarzana) che deve mostrare ancora il Comune

## Cosa manca

1. Descrizione (meta description) diversa per pagina: oggi è una sola per tutta l'app (nel file HTML di base). Richiede un altro intervento.
