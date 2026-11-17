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

## Nuovo contributo comunale documentato — trasporto scolastico disabilità 2026/2027

**Fonte primaria ufficiale, letta il 17/11/2026:** https://www.comune.pavia.it/servizi/contributi-per-trasporto-dei-figli-condizione-disabilita-per-lanno-scolastico (ultima modifica pagina **01/10/2026**; notizia del **30/09/2026**: https://www.comune.pavia.it/novita/notizie/contributo-al-trasporto-alunni-disabilita-as-20262027).

- **Stato sulla pagina:** «Attivo». Domanda entro **31/05/2027, ore 23:59**. L'indicazione «attivo» è quella della pagina consultata, non garanzia di disponibilità residua delle risorse.
- **Destinatari:** famiglie con minore residente a Pavia, certificazione di disabilità ai sensi della L. 104/1992, iscritto nel 2026/27 a scuola dell'infanzia, primaria o secondaria di primo grado statale o paritaria, anche fuori Pavia; il minore non deve usufruire del trasporto scolastico erogato direttamente dal Comune. Trasporto effettuato autonomamente dalla famiglia.
- **Massimali annui:** **2.000 €** per scuole nel territorio comunale, **2.300 €** per scuole fuori dal territorio comunale. Per mezzi specificamente attrezzati la pagina richiede ricevute del servizio. **Non presentare i massimali come importi garantiti**.
- **Domanda:** una per ciascun minore, utilizzando il modello B allegato alla pagina, da inviare all'ufficio Protocollo tramite PEC **protocollo@pec.comune.pavia.it**. La pagina elenca certificazione L.104, attestazione frequenza scolastica, documenti d'identità e codici fiscali; per cittadini extracomunitari anche documenti di soggiorno indicati nella pagina.
- **Fondi:** assegnazione in ordine di arrivo al Protocollo **fino a esaurimento delle risorse**. Prima di inserire in app la nota sui fondi, recuperare la **formulazione fissa approvata da Ilaria**: non inventarla né sostituirla con un testo libero.
- **Ambito:** misura espressamente del Comune di Pavia; **non estenderla automaticamente** agli altri Comuni del Consorzio Sociale Pavese.

**Integrazione prevista:** aggiungere la misura comunale nella struttura bonus pertinente, esclusivamente se `frontend/src/lib/bonus.ts` non è occupato da PR aperte e dopo controllo di eventuale record già presente; altrimenti conservare questa proposta. Non aggiornare `pavia.ts` fingendo che la misura sia già visibile nell'app. Rimangono da verificare le altre misure comunali e ATS, bonus regionali e avviso UI. **Pavia resta PARZIALE, non completo.**
