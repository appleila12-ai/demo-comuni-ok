# Contatti manuali di 60 Comuni senza dati nell'Indice PA (25/11/2026)

- Fonte: righe compilate da Ilaria (ricerca manuale sui siti dei Comuni, 25/11/2026); non ricontrollate da me sui siti (dal mio ambiente non sono raggiungibili). Elenco completo in `docs/riferimenti/integrazioni-manuali-2026-11-25.csv`.
- Caricati in `riferimenti-comuni.json`: sito e PEC. NON caricate le email: molte seguono lo stesso schema («protocollo@comune.…») e alcune non sono generiche (sindaco@, ragioneria@, demografici@, indirizzo libero.it), quindi potrebbero sbagliare la destinazione di «Scrivi al tuo Comune». Da verificare sul sito del singolo Comune.
- Scartati per errori: Perdasdefogu (PEC scritta male «protocollo@://…»), Ussassai (sito indicato è un portale esterno, non del Comune; caricata solo la PEC). Olbia: PEC uguale all'email, caricata solo come PEC.
- Attenzione: `docs/riferimenti/costruisci-riferimenti-ipa.py` rigenera il file e cancellerebbe queste integrazioni: rifarle dal CSV dopo ogni rigenerazione.
