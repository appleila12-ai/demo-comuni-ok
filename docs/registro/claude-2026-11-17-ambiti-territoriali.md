# Ambiti Territoriali Sociali (17/11/2026)

- Fonte: Ministero del Lavoro e delle Politiche Sociali, Registro Ambiti (estratto del 06/03/2025), https://lavoro.gov.it/node/134. File inviato da Ilaria Baudone.
- File: `frontend/src/content/ambiti-territoriali.json` (slug → [Ambito, capofila]); 7.862 Comuni, 609 Ambiti.
- Abbinamento al nostro elenco ISTAT: per nome e regione (7.821) + 41 corrispondenze certe (stesso Comune scritto in modo diverso: San Remo/Sanremo, Boiano/Bojano, Capaccio/Capaccio Paestum, nomi bilingui del Trentino-Alto Adige, ecc.).
- In app: nella scheda minima (solo elenco) una riga «Ambito sociale … Capofila …» con la fonte.
- NON caricati (38 righe del Registro, nessuna corrispondenza certa o Comune assente dal nostro elenco ISTAT): 13 Comuni astigiani/alessandrini (Maranzana, Bruno, Calamandrana, Castelletto Molina, Castelnuovo Belbo, Cortiglione, Fontanile, Incisa Scapaccino, Mombaruzzo, Nizza Monferrato, Quaranti, Vaglio Serra) e Montecicciardo; 24 Comuni della Comunità delle Giudicarie (Trentino, nomi pre-fusione).
- File SIOSS (servizi attivati per Ambito): analizzato, non ancora in app (619 Ambiti, 28 tipi di servizio, presenza sì/no; i nomi degli Ambiti non coincidono per 16 casi). Da decidere come mostrarlo.
