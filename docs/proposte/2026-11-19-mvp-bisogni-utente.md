# MVP «parto dal bisogno»: proposta su un caso fittizio

**Stato:** PROPOSTA. Nessun codice toccato, niente da pubblicare. Serve la tua approvazione prima di costruire (MASTER SPEC 2027: prima la specifica, poi il codice).
**Data:** 19/11/2026. **Fonti del codice letto:** `frontend/src/lib/ricerca.ts`, `frontend/app/index.tsx`, `app/percorso.tsx`, `app/primi-passi.tsx`; bozza `#204` (pagina bianca, non pubblicata).

## 1. Com'è oggi (letto nel codice)
- «Di cosa hai bisogno?» è una **ricerca per parole chiave** (`cerca()`): scrivi una frase e ricevi **una lista di schede** (es. voce `casa` per «non è autosufficiente», voce `soldi` per accompagnamento, `permessi`, `congedo`, `diritti`).
- Ogni scheda è corretta in sé, ma **la persona deve mettere insieme da sola** cosa fare prima e cosa dopo. Non c'è un filo che dica «ora fai questo; poi quest'altro».
- Non ci sono domande guidate: le poche domande che esistono sono dentro singole schede (es. «A cosa ho diritto», `/diritti`).
- La pagina bianca (#204) è una prova con la cecità, non ancora il filo per un bisogno generico.
- **Operativo oggi:** ricerca, schede con fonte, contatti del Comune, percorso invalidità/104, permessi e congedi, importi, esenzione ticket (dove presente), lettere. **Da sviluppare:** il filo guidato, l'aggiornamento del percorso nel tempo, il colore per sezione oltre a verde/marrone/rosso.

## 2. Il caso fittizio
**Marta, 52 anni**, figlia di **Rosa, 84 anni**, che da poche settimane non riesce più a vivere da sola (cammina con difficoltà, dimentica la terapia). Marta lavora come dipendente, abita a 40 minuti. Non conosce i termini («accompagnamento», «104», «UVM»). Ha paura di sbagliare e di perdere tempo.
(Persona inventata, a scopo di progetto: non va mai mostrata come testimonianza.)

## 3. Il filo in 5 passi (cosa vede Marta)
Schermata iniziale: **un solo invito** («Di cosa hai bisogno adesso?») e, sempre visibile, il bottone «Tutte le funzioni». In cima, se serve, 112/118.

1. **Bisogno in prima persona:** «Mia madre non è più autosufficiente».
2. **Tre domande a risposta chiusa** (una alla volta, si può saltare):
   - Chi ha bisogno? (mia madre/mio padre · mio figlio · io · altro)
   - Ha già l'invalidità o la 104? (sì · no · non so)
   - Chi la assiste adesso? (nessuno · io/famiglia · una badante)
3. **Una scheda azione** (colore della sezione) con: **un solo prossimo passo in evidenza**, a chi rivolgersi (contatti del Comune già nell'app), cosa serve, cosa succede dopo, **fonte e data**, e «se non funziona» (URP, patronato, associazione).
4. **Le altre sezioni compaiono sotto**, in ordine di urgenza, e si possono togliere o riaprire.
5. **Aggiornamento del percorso:** quando Marta segna «fatto» (es. «ho il certificato»), il passo successivo sale in cima. Tutto resta sul telefono.

## 4. Logica decisionale (regole semplici, ognuna con fonte)
Ogni esito ammesso solo se la scheda collegata ha già fonte istituzionale e data nell'app. **Niente diritti dedotti.**

| Risposta | Prossimo passo in cima | Sezioni che compaiono | Fonte già in app |
|---|---|---|---|
| Non ha invalidità/104 | Chiedere il certificato medico per l'invalidità (dal 2027 nuova procedura) | Percorso invalidità, importi, ticket | schede `invalidita`, `riforma-2027-certificato` (INPS) |
| Ha l'invalidità, nessuna 104 | Valutare la domanda 104 | Permessi 104, congedo | schede `permessi`, `congedo` |
| Ha l'invalidità/104, vive sola | Contattare i Servizi Sociali del Comune per l'assistenza a casa | Aiuto in casa, contatti Comune | scheda `casa`, contatti del Comune |
| Marta lavora e assiste | Permessi 104 e congedo | Lettera per il datore di lavoro | schede `permessi`, `congedo`, lettere |
| Non so | Una sola domanda in più («Ha una certificazione o una visita INPS già fatta?») | — | — |

Se una scheda **non** ha fonte o dato verificato, la sezione **non compare**; al suo posto: «Questo dato manca. Lo abbiamo chiesto il [data] a [ente]. Puoi chiederlo anche tu a [ufficio]» (regola già decisa).

## 5. Schermate (testo, da disegnare con Ilaria)
1. **Ingresso bianco** con un invito e il bottone «Tutte le funzioni».
2. **Domanda 1/3 … 3/3**: una per schermata, bottoni grandi, «salta».
3. **La mia pagina**: sezioni colorate con icona + nome + colore (verde percorso, marrone verbale/moduli, rosso associazioni; altri colori da decidere con Ilaria, non assegnati qui).
4. **Scheda azione** nel formato fisso (passo, a chi, cosa serve, dopo, fonte, se non funziona).
5. **Il mio percorso**: elenco dei passi con «fatto», il prossimo in alto.

## 6. Test di accessibilità e di uso
- Con **VoiceOver/TalkBack** (scheda già pronta: `docs/proposte/2026-11-19-prova-accessibilita-uici.md`, 9 percorsi), più questo filo come decimo percorso.
- Ogni sezione ha **icona + nome scritto** (non solo colore); contrasto da controllare su ogni colore.
- Uso con **una mano**, testo ingrandito al 200%, tastiera con dettatura.
- **Co-progettazione:** 5–6 conversazioni da 20 minuti con familiari e caregiver e con associazioni (UICI, Anffas) prima del codice. Non tocchiamo il codice senza questo passaggio.

## 7. Punti di integrazione (file/PR)
- `src/lib/ricerca.ts`: la frase libera può restare, ma il filo parte da una **mappa bisogno → domande → schede** (nuovo file di dati, es. `src/content/bisogni.json`, con id delle schede esistenti e fonte).
- `app/bianca.tsx` e `paginaBiancaCore.ts` (PR #204): base per la «pagina che si compone»; da riusare, non riscrivere.
- `src/lib/scadenze.ts` e il diario (PR #209): per «fatto» e prossimo passo, se verranno pubblicati.
- Nessuna modifica ai dati delle schede; nessun nuovo dato sanitario sul server (resta tutto sul telefono).

## 8. Rischi
1. **Dedurre troppo:** la logica deve solo scegliere quale scheda mostrare per prima, mai stabilire un diritto. Ogni esito rimanda alla scheda con fonte.
2. **Promettere cose non pronte:** il filo guidato non esiste ancora; non va annunciato ai Comuni come funzione attiva.
3. **Schermata bianca che disorienta:** va validata con persone vere prima di sostituire l'ingresso attuale; si propone come **modalità a parte**, non come sostituzione.
4. **Dati mancanti nei Comuni:** dove la scheda non è pronta il filo dà il numero del Servizio Sociale e la nota «dato mancante», non un buco.

## 9. Cosa serve da Ilaria
1. Approvare il caso (genitore non autosufficiente) o scegliere un altro.
2. Dire **chi** coinvolgere nei 5–6 colloqui (nomi di famiglie/associazioni) e quando.
3. Decidere i **colori** delle sezioni nuove (percorso, verbale e associazioni sono già assegnati).
4. Dire se il filo parte come **modalità separata** dall'ingresso attuale.

Narrativa per ANCI e Dipartimento: a cura di ChatGPT, senza prezzi né esclusiva; da rileggere.
