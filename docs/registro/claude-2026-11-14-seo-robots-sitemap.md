# robots.txt e sitemap per tutelapp.it

- Data: 14/11/2026
- Autore: Claude
- Ramo / PR: seo/2026-11-14-robots-sitemap / (vedi PR)
- Classe (da `--classifica origin/main`): A (solo `frontend/public/` e `docs/`)

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| public | robots.txt | aggiunta | n/a (file tecnico) | 14/11/2026 | verificato |
| public | sitemap.xml | aggiunta (7 pagine) | n/a (file tecnico) | 14/11/2026 | verificato |

Motivo: su tutelapp.it gli indirizzi /robots.txt e /sitemap.xml rispondevano con la pagina dell'app (200) invece di un file vero, quindi Google li trattava come mancanti. Netlify serve i file reali prima della regola /* → /index.html, per cui `netlify.toml` non cambia.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js --confronta origin/main`: da eseguire (vedi PR)
- Controllo su GitHub: da leggere sulla PR
- Anteprima Netlify: aprire /robots.txt e /sitemap.xml dell'anteprima e verificare che mostrino il testo dei file

## Cosa manca

1. Dopo la pubblicazione: inviare https://tutelapp.it/sitemap.xml nella proprietà tutelapp.it di Search Console (la dott.ssa Baudone l'ha già verificata).
2. Titolo della pagina: oggi cambia in base al Comune (es. «TutelApp · Comune di …»); per l'indicizzazione servirebbe un titolo fisso per le pagine generali. È una modifica al codice (classe B): non inclusa in questa PR.
