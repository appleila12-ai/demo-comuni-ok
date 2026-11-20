# 20/11/2026 · Accessibilità: titoli di sezione per il lettore di schermo

**Come l'ho verificato:** ho aperto l'app pubblicata (prima schermata e Home del Comune di Sarzana) in un browser e letto l'albero di accessibilità, cioè quello che VoiceOver e TalkBack ricevono dal sito. Non è una prova con il lettore di schermo.

**Cosa ho trovato:**
- Prima schermata (scelta del Comune): nessun titolo. L'elenco ha centinaia di pulsanti raggruppati per regione, ma i nomi delle regioni non sono titoli, quindi chi usa il lettore non può saltare da una regione all'altra e deve scorrere pulsante per pulsante. La casella di ricerca è la prima, ben nominata, e c'è «Usa la mia posizione».
- Home del Comune: pulsanti e campi con nome corretto; i titoli «Cosa puoi fare», «Strumenti pratici», «Informazioni utili», «Hai bisogno di supporto?» e «Di cosa hai bisogno?» non erano titoli.

**Cosa cambia:** `accessibilityRole="header"` su «Benvenuto in TutelApp», sui nomi delle regioni, sul titolo «Di cosa hai bisogno?» e sui quattro titoli di sezione della Home. Nessun cambio visivo.

**Cosa manca:** nessuna prova con un lettore di schermo vero; l'elenco della prima schermata resta lungo (valutare un elenco chiuso per regione o una ricerca obbligatoria prima); verificare le altre schermate nello stesso modo.
