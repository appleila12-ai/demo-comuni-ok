# Home semplificata (bozza) — 27/11/2026

Classe della modifica: B (codice). Non si pubblica finché la dott.ssa Baudone non scrive «pubblica».

## Cosa cambia
- Un solo avviso in alto («Versione dimostrativa…») con il link «Come leggere TutelApp»; tolto il riquadro «Messaggio istituzionale» e la frase in fondo («Informazioni di orientamento…»).
- Nuova pagina `/come-leggere` con le avvertenze in 4 punti (testo in bozza, da far leggere).
- Le tre liste (Cosa puoi fare / Strumenti pratici / Informazioni utili) diventano 4 blocchi: Il mio percorso, Cosa mi spetta, Aiuti vicino a me, Per capire meglio. Stesse voci, stessi testID.
- Riquadro «bonus in scadenza» in Home: compare solo 7 giorni prima della scadenza (regola già presente in `bonus.ts`), solo con dati già verificati.
- La riga sulla privacy compare una volta sola, sotto la casella di ricerca.
- Gli esempi sotto «Di cosa hai bisogno?» si mostrano solo se portano a un risultato.
- «Ripristina i tuoi dati» e «Area riservata» restano in fondo alla pagina.

## Cosa manca
- Collegata la pagina alla ricerca con UNA riga in `src/lib/ricerca.ts` (file toccato anche da #209, ma in un punto diverso: possibile rebase).
- tsc, lint e prova visiva solo su GitHub Actions / anteprima Netlify.
- Testi dell'avviso e di «Come leggere TutelApp»: da leggere e approvare.
- Nuovi contenuti (bonus, associazioni, FAQ, lavoro, aiuti) sono indicizzati da soli da `ricerca.ts`; l'elenco `STRUMENTI` in `ricerca.ts` va tenuto allineato con i blocchi di `app/index.tsx`.
