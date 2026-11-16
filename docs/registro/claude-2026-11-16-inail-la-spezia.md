# Sede INAIL della Spezia nella scheda «Mi sono fatto male al lavoro»

- Data: 16/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-16-inail-la-spezia
- Classe (da `--classifica origin/main`): B (modifica a `frontend/app/infortunio-lavoro.tsx`, codice dell'app)

## Cosa è cambiato

| Archivio | Voce (id / slug / nome) | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| infortunio-lavoro.tsx | Sede INAIL di La Spezia: indirizzo e PEC | aggiunta, visibile nei Comuni con provincia SP | https://www.inail.it/content/dam/inail-hub-site/documenti/2021/12/Allegato_SEDI_ISI2021_end.pdf | 16/11/2026 | verificato (documento pubblicato su inail.it) |
| infortunio-lavoro.tsx | Sede INAIL di La Spezia: telefono 0187 5421 ed email | aggiunta | https://trasparenza.spezianet.it/web/trasparenza/determinazioni | 16/11/2026 | verificato (atto del Comune con intestazione INAIL); da riconfermare con la sede |
| infortunio-lavoro.tsx | Sede competente = domicilio del lavoratore (non luogo di lavoro), visibile in MyINAIL «Sede INAIL di riferimento» | aggiunta | https://www.inail.it/portale/it/supporto/faq.html?categoria=Infortunio+sul+lavoro&page=1 | 16/11/2026 | verificato (FAQ INAIL) |
| infortunio-lavoro.tsx | Sede INAIL di Carrara (Via Don Minzoni 5, PEC carrara@postacert.inail.it), visibile nei Comuni con provincia MS; nell'elenco ufficiale 2021 è l'unica sede della provincia | aggiunta | https://www.inail.it/content/dam/inail-hub-site/documenti/2021/12/Allegato_SEDI_ISI2021_end.pdf | 16/11/2026 | verificato (elenco 2021: da riconfermare con la sede) |
| infortunio-lavoro.tsx | Elenco ufficiale sedi Liguria (Genova, Chiavari, Imperia, La Spezia, Savona): in provincia SP solo La Spezia | aggiunta come frase | https://www.inail.it/content/dam/inail-hub-site/documenti/2021/12/Allegato_SEDI_ISI2021_end.pdf | 16/11/2026 | verificato (elenco 2021) |
| infortunio-lavoro.tsx | Orari della sede | NON inseriti | — | 16/11/2026 | gli unici orari trovati sono su elenchi non istituzionali |

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js --confronta origin/main`: vedi PR
- Controllo su GitHub: vedi PR
- Anteprima Netlify (pagine aperte e viste): da aprire a vista, `/sarzana/infortunio-lavoro` e un Comune di un'altra provincia (non deve comparire la sede)

## Cosa manca

1. Orari ufficiali della sede (sportello lavoratori, ambulatorio) · INAIL La Spezia · portale inail.it, pagina della sede; altrimenti chiederli alla sede (incontro con il dirigente del 16/11/2026 ore 16).
2. Quali Comuni della provincia dipendono dalla sede della Spezia e se esistono altri sportelli (es. Val di Magra) · chiederlo al dirigente · la regola generale è verificata (domicilio dell'assicurato, non luogo di lavoro), l'elenco dei Comuni no: la scheda dice «chiedi alla sede se è questa».
3. Un elenco online riporta un secondo indirizzo (Corso Nazionale 36, 19126): probabile errore dell'elenco, da confermare con la sede.
4. Telefono e orari ufficiali della sede di Carrara; verificare se Massa e Aulla hanno sportelli propri (nell'elenco 2021 compare solo Carrara, un vecchio elenco SuperAbile riporta anche Massa, Via Menzione 3) · inail.it, pagina delle sedi, Toscana; altrimenti chiedere alla sede.
5. Le pagine INAIL con gli orari (Sedi > Liguria / Toscana) non si sono aperte dal mio accesso: aprirle a mano e inserire gli orari con fonte e data.
6. Logo INAIL: solo dopo l'ok scritto dell'ente.
