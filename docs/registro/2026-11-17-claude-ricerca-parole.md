# Casella «Di cosa hai bisogno?»: anffas, autismo, tumore

- Data: 17/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-17-claude-ricerca-parole
- Classe (da `--classifica origin/main`): B

## Cosa è cambiato

Nessun dato di bonus o enti: solo parole di ricerca e ordine delle risposte in `frontend/src/lib/ricerca.ts`.

- Autismo (autismo, autistico, asperger…): prima «I miei diritti» e «Associazioni», «Ho appena ricevuto una diagnosi» solo se la persona scrive «diagnosi».
- Sigle di associazioni: anffas (anche «anfas», «anfass»), ledha, angsa, aipd, fish, agsa.
- Tumore (tumore, cancro, oncologico, leucemia, linfoma, chemioterapia…): invalidità, diagnosi, permessi, esenzione ticket, trasporto per le terapie.
- Nessuna pagina o testo nuovo: solo collegamenti verso pagine già verificate.

## Rimozioni

nessuna

## Controlli

- `verifica-ricerca.js`: 30 schermate collegate.
- Prova su ricerche reali fuori dal repository.

## Cosa manca

1. Pagina per chi ha una malattia oncologica (accertamento, tempi, tutele): da scrivere solo con fonti INPS e ministero.
2. Pagina scuola e sostegno per l'autismo.
3. Le associazioni dei singoli Comuni si trovano solo dal nome.

## Aggiunta: elenco di 200 parole fornito da Ilaria (17/11/2026)

- Prova su tutte le 200 parole: 28 non trovavano nulla, ora 0; altre ~25 portavano alla pagina sbagliata (es. «Caregiver familiare» all'ISEE, «Disabilità» a Lavoro) e sono state corrette.
- Solo collegamenti a pagine esistenti: nessun testo nuovo.
- Limite: per scuola (PEI, insegnante di sostegno, DSA), salute mentale, riabilitazione e accessibilità non c'è una pagina dedicata: la ricerca porta alla pagina più vicina (diritti, servizi del Comune, salute).
