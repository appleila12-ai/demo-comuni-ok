# 2026-11-12 · Sassari, Collecchio, Bologna, ASL 5 (dati completi dalla chat)

Assistente: Claude. Dati raccolti da Ilaria con la chat (verifiche dell'11/11/2026 e integrazioni del 12/11/2026, indicate come tali).
Parte di Collecchio e Sassari era già in main (#258): qui si completa senza duplicare.

## Sassari (ASL Sassari) · `esenzioneAslRisposte.ts`
- Tutti gli 11 sportelli Scelta e Revoca con sede, giorni e telefono. Fonte: https://www.asl1sassari.it/gli-orari-degli-sportelli-di-scelta-e-revoca-dedicati-alle-esenzioni/ (ultima modifica 01/06/2023; orari verificati 11/11/2026, telefoni 12/11/2026). Orari indicativi con l'avviso fisso.
- Via Tempio: giovedì 8:30–12:30, tel. 079 2062469, informazioni lunedì–venerdì 12:30–13:30 (avviso del 06/06/2025).
- Documenti: indicazioni generali ASL (pagina del 13/05/2023, letta l'11/11/2026), per tutti gli sportelli. Per l'invalidità la pagina NON INDICA un elenco di allegati: scritto in app.
- URP (via Enrico Costa 57; 079 2084477 e 079 2084490; pagina modificata il 29/06/2026, letta il 12/11/2026): separato dagli sportelli, non rilascia esenzioni.
- Discordanze conservate, non risolte: Porto Torres («Regione Andreolu», martedì e giovedì pomeriggio nella pagina 2023; «Località Andriolu», solo martedì pomeriggio nella Carta dei servizi) e Sorso (martedì e giovedì nella pagina; solo giovedì pomeriggio nella Carta). Data di aggiornamento della Carta: NON INDICATA.
- E-mail degli sportelli: NASCOSTE nella pagina, non ricostruite.

## Collecchio · `bonus.ts` (`collecchio-voucher-sportivi-2026-2027`)
- Corretta la data di aggiornamento della notizia: 03/11/2026 (era 09/11/2026).
- Scadenza scritta solo come 02/12/2026 ore 13:00: la notizia dice «martedì» ma il 2 dicembre 2026 è un mercoledì. Incongruenza segnalata in app, non corretta.
- Aggiunto il recapito dell'Ufficio Sport (0521 301226, sport@comune.collecchio.pr.it).
- Limiti: bando integrale e modulo NON CONSULTATI (pagina dei bandi non raggiungibile l'11/11/2026), URL PDF NON REPERITO; importi dalla notizia, requisiti dettagliati NON CONSULTATI. Nota fissa sui fondi limitati.

## Bologna · `demo/bologna.ts`
- Passo 1: due voci locali sotto quella INPS generale. (1) AUSL, notizia del 02/03/2026: dal 01/03/2026 il certificato avvia il percorso, visite dell'INPS provinciale; l'AUSL chiude le domande fino al 28/02/2026. (2) INPS, notizia del 27/05/2026 (in vigore dal 01/06/2026): regola per chi ha almeno 70 anni, dipende da ciò che indica il medico.
- Limiti: scheda AUSL «Medicina legale» (https://www.ausl.bologna.it/guida-ai-servizi/luoghi/14786) non leggibile, quindi sede, telefono e orari della commissione NON CONSULTATI e non inseriti. Nessuna scheda INAIL: non sostituita all'INPS. La notizia AUSL è stata letta dall'indice del motore di ricerca (apertura diretta incompleta).

## ASL 5 · `ausiliAsl5.ts`, `app/ausili.tsx`
- Aggiunto il pulsante alla pagina «Fornitura di ausili e protesi» (URL esatto, aperta il 12/11/2026, data di aggiornamento NON INDICATA) e la nota sulla distinzione tra invalidi civili e invalidi per lavoro (INAIL).

## Cosa manca
- Sassari: conferma dell'ufficio sugli orari (soprattutto Porto Torres e Sorso); e-mail e tempi di rilascio; elenco allegati per l'invalidità.
- Collecchio: bando integrale e modulo (richiedere il PDF all'Ufficio Protocollo/Sport).
- Bologna: sede e orari della commissione INPS; scheda AUSL Medicina legale; esenzione ticket (il link resta alla home dell'AUSL).
- ASL 5: risposta dell'URP su Lerici, Portovenere, Levanto e sul trasporto sanitario.
