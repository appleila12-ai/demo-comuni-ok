# Audit fonti catalogo bonus — 10 novembre 2026

## Ambito e metodo
Letto il file attivo `frontend/src/lib/bonus.ts` su `main` via GitHub. Trovati **113 record** con `id`. Per ciascun record sono stati cercati URL che contengono uno dei seguenti indicatori: `reteabruzzo`, `laquilablog`, `news-town`, `abruzzospeciale`, `notiziedabruzzo`, `ilcentro.it`, `quotidiano`, `fanpage`, `today.it`, `blog`, `facebook.com`.

**Risultato:** 2 corrispondenze:
1. `laquila-caregiver-2026`: https://www.reteabruzzo.com/2026/10/10/comune-dellaquila-avviso-per-sostegno-ai-caregiver-familiari-domande-fino-al-2-novembre/
2. `ocre-vita-indipendente-2026`: https://www.laquilablog.it/vita-indipendente-2026-montagna-aquilana/

**ATTENZIONE:** il controllo è una ricerca di indicatori nel nome del dominio, non una verifica esaustiva di tutte le fonti. Non dimostra che gli altri 111 record siano istituzionali o corretti. Mancano la classificazione manuale dei domini, il controllo puntuale di tutte le scadenze, la lettura degli atti, la verifica di eventuali proroghe e il confronto delle informazioni. Non scrivere «tutte le fonti verificate».

## Ocre: fonte primaria individuata
PDF istituzionale dell'Unione dei Comuni Montagna Aquilana:
https://www.unionecomunimontagnaaquilana.it/wp-content/uploads/2026/01/AVVISO-2026-Vita-indipendente.pdf
Il PDF conferma che l'avviso riguarda il 2026 e contiene i requisiti (art. 2), l'intervento e le modalità. La scheda resta chiusa. È stato preparato uno script puntuale in `docs/proposte/2026-11-10-applica-correzione-ocre.js` ma **NON eseguito**.

## L'Aquila: verifica pendente
La scheda è erroneamente ancora etichettata `aperto` con scadenza 02/11/2026, e cita ReteAbruzzo. Mail inviata al Comune il 10/11/2026, Gmail ID `1a1c629a8b2659cf`; in attesa di conferma ufficiale o proroga. Non aggiornare `verificatoIl` senza fonte primaria.

## Prossime verifiche
- Inventario di **tutti** i 113 URL e classificazione per proprietario del dominio.
- Segnalazione separata di URL mancanti, scaduti, irraggiungibili, non istituzionali, pagine generiche anziché avvisi.
- Verifica puntuale di ogni `stato` e `quando` al 10/11/2026.
- Mail di chiarimento per ogni conflitto o dato non documentato; registro di invio e risposta.
- Correzioni chirurgiche e test Node; nessuna pubblicazione automatica.

**Stato:** audit parziale documentato, nessun dato dell'app modificato. **Rimozioni:** nessuna.
