# Proposta di integrazione verificata — Pavia (PV), 17/11/2026

**Responsabile:** ChatGPT · **Regione:** Lombardia · **Stato:** PARZIALE · **Destinazione proposta:** `frontend/src/config/comuni/demo/pavia.ts` · **Non applicare senza controllo delle PR e verifica dell'avviso UI.**

## Differenza rispetto alla scheda su main (letta il 17/11/2026)

La scheda esistente indica come referente `Servizio Coordinamento Attività Amministrativa` in via Scopoli 1, telefono generico 0382 3991; tale ufficio è distinto dal **Servizio Coordinamento ed Interventi Sociali** che offre Segretariato Sociale, sostegno alla domiciliarità e tutela minori. Non cancellare il riferimento all'ufficio amministrativo come se fosse errato: si tratta di servizi differenti.

**Dati da integrare chirurgicamente nella scheda:**
- Punto di supporto dedicato «Servizio Coordinamento ed Interventi Sociali»; sede **corso Garibaldi 69, 27100 Pavia**; telefono **0382 399546**; email **servizisociali@comune.pv.it**. Fonte ufficiale Comune: https://www.comune.pavia.it/amministrazione/servizio-coordinamento-interventi-sociali (verifica 17/11/2026). Ufficio persone con disabilità nella stessa sede, stessa casella e telefono: https://www.comune.pavia.it/amministrazione/ufficio-persone-disabilita (ultima modifica pagina 09/04/2026; verifica 17/11/2026).
- Sostituire il collegamento generico `esenzioneTicket.url` con **https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/** (ASST Pavia, verifica 17/11/2026). La pagina descrive richiesta e rinnovo per patologie croniche, malattie rare, invalidità e reddito. Per patologia cronica serve certificazione di specialista di struttura pubblica o accreditata; per invalidità serve il verbale. Richiesta online con SPID, CNS/PIN o CIE, oppure sportello previo appuntamento tramite portale.
- **Sportello Pavia:** viale Indipendenza 3, lun–ven 08:10–13:00; informazioni telefoniche al **0382 1958050**, lun–ven **13:30–15:00**. Questi orari sono diversi: non attribuire l'orario del telefono allo sportello. Stessa fonte ASST, verifica 17/11/2026. Il medesimo servizio ASST elenca anche sportelli di Casorate Primo, Corteolona, Broni, Casteggio, Voghera, Vigevano, Mortara, Mede, Garlasco e Varzi: **riutilizzare la fonte**, ma verificare territorio/distretto e orari per ogni Comune.
- Il recapito `servizisociali@comune.pv.it` è istituzionale e può essere candidato per «Scrivi al tuo Comune», **solo dopo verifica della mappa destinatari già presente** e dei file occupati dalle PR.

## Stato e lacune

**Non completo.** Ancora da verificare: bonus Lombardia applicabili, bandi e contributi Pavia/Consorzio Sociale Pavese (anche fondi, requisiti e scadenze), destinatario effettivamente configurato, associazioni, avviso di incompletezza **visibile nella UI**. Non dichiarare assenza di bonus. Non usare «CHIUSO – IN ATTESA DI RISCONTRO» senza prova di richiesta ufficiale inviata e archiviata. Verificare prima l'archivio Drive delle richieste/risposte classificato da Claude; non inviare email senza autorizzazione.

**Nessuna modifica applicativa né rimozione** in questa proposta. Nessuna email inviata, nessun merge/deploy. Node e anteprima Netlify non eseguiti/verificati. Conteggio: **0 Comuni completi**, **0 chiusi in attesa**, **1 Comune parziale con proposta pronta**. Seguire #262, #267 e #270.
