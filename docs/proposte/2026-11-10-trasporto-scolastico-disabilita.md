# Proposta di integrazione — trasporto scolastico e disabilità (10/11/2026)

**Solo proposta, non dati pubblicati.** La PR #214 modifica già `frontend/src/lib/bonus.ts`: non sovrapporre modifiche finché non viene risolta.

## Gallarate (VA) — contributo trasporto scolastico 2026/27
- Fonte: https://www.comune.gallarate.va.it/novita/bando-per-contributi-per-il-trasporto-scolastico-a-favore-di-alunni-studenti-con-disabilita-anno-scolastico-2026-2027-scuole-dellinfanzia-scuole-primarie-e-scuole-secondarie-di-primo-grado/
- Pubblicazione: 16/10/2026; ultimo aggiornamento: 16/10/2026 ore 12:54; consultazione: 10/11/2026.
- Destinatari: famiglie di studenti con disabilità delle scuole dell'infanzia, primarie e secondarie di primo grado, che organizzano il trasporto con propri mezzi o tramite terzi.
- Finestra: 19/10/2026 ore 09:00 – **13/11/2026 ore 12:00**.
- Domanda: piattaforma online dedicata, collegata dall'avviso comunale.
- Importo individuale: **non trovato nella pagina**; requisiti integrali: verificare allegato prima dell'inserimento.
- Stato proposto: `aperto` solo se allegato verificato e finestra ancora valida al momento della pubblicazione. **Non pubblicare come aperto dopo la scadenza.**

## Faenza (RA) — esenzione trasporto scolastico
- Fonte comunale: https://old.comune.faenza.ra.it/Guida-ai-servizi/Servizi-per-l-istruzione/Scuole-secondarie-di-secondo-grado/Trasporto-scolastico-scuolabus
- Fonte istituzionale regionale: https://www.informafamiglie.it/faenza/scuola-e-servizi-educativi-per-linfanzia/trasporto/esenzione-o-riduzione-del-pagamento-della-retta-per-il-trasporto-scolastico (ultimo aggiornamento 17/06/2025).
- Consultazione: 10/11/2026. Data di aggiornamento della pagina comunale: non indicata.
- Esenzione: alunni con disabilità certificata ai sensi della L. 104/1992, su richiesta della famiglia; indicare l'esenzione nell'iscrizione online su https://faenza.ecivis.it .
- Ufficio Istruzione: piazza Rampi 1; 0546 994419; istruzione@comune.faenza.ra.it.
- **Attenzione:** pagina comunale cita tariffe 2024/25 e ISEE 2023; NON trasferire questi importi o soglie nel 2026/27. Verificare la disciplina attuale prima di pubblicare.

## Cosa manca
1. Leggere integralmente il PDF dell'avviso Gallarate (requisiti e importi) e controllare che la scadenza non sia passata al merge.
2. Verificare la validità per il 2026/27 dell'esenzione di Faenza su una pagina comunale aggiornata.
3. Risolvere la sovrapposizione con PR #214 prima di intervenire su `bonus.ts`.
4. Eseguire `node frontend/scripts/controlla-dati.js --confronta origin/main`, `--classifica`, rapporto completo e controllare anteprima Netlify prima di qualsiasi merge.

Nessuna voce rimossa. Nessuna modifica ai file applicativi.

## Verifica integrativa del 10/11/2026
- Gallarate, conferma ufficiale dell'avviso e dell'ultimo aggiornamento 16/10/2026 ore 12:54: https://www.comune.gallarate.va.it/novita/bando-per-contributi-per-il-trasporto-scolastico-a-favore-di-alunni-studenti-con-disabilita-anno-scolastico-2026-2027-scuole-dellinfanzia-scuole-primarie-e-scuole-secondarie-di-primo-grado/
- Ufficio competente Gallarate, Area Disabilità: 0331 754277 / 0331 754240, servsoc@comune.gallarate.va.it. Fonte: https://www.comune.gallarate.va.it/amministrazione/unita_organizzativa/servizi-sociali-area-disabilita/ ; ultimo aggiornamento non indicato.
- Faenza, la pagina comunale https://old.comune.faenza.ra.it/Guida-ai-servizi/Servizi-per-l-istruzione/Agevolazioni-per-studenti-e-famiglie-borse-di-studio-contributi-esenzioni-ecc./Esenzioni-e-riduzioni-tariffa-trasporto-scolastico conferma esenzione con certificazione L.104/92 e richiesta della famiglia, ma contiene riferimenti ISEE 2021: non attestare la validità della procedura per 2026/27 senza verifica aggiornata.
- **Non integrare i dati pubblicati finché queste verifiche non sono complete; non unire questa PR documentale come se fosse pubblicazione delle misure.**

## Gallarate — Misura Servizi FNA 2026 (verifica aggiuntiva 10/11/2026)
- Fonte comunale: https://www.comune.gallarate.va.it/novita/apertura-bandi-misura-servizio-e-misura-sostegno/ (pubblicata 10/09/2026, aggiornata 14/09/2026 ore 08:26).
- Misura Servizi: domande dal 10/09/2026 **fino a esaurimento delle risorse**, presso il Servizio Sociale del Comune di residenza. Disponibilità residua fondi **NON INDICATA**; non garantire l'accoglimento.
- Beneficiari: persone con disabilità con necessità di sostegno intensivo elevato e persone anziane non autosufficienti a basso bisogno assistenziale, assistite al domicilio. ISEE sociosanitario adulti/anziani fino a 25.000 euro, ISEE ordinario minorenni fino a 40.000 euro, in base a https://www.regione.lombardia.it/politiche-sociali-e-abitative/disabilita/politiche-e-misure-per-la-disabilita/sostegno-per-la-disabilit-misura-servizi (consultata 10/11/2026).
- La **Misura Sostegno, nuove domande** è invece scaduta il 09/10/2026: NON confondere le finestre.
- Importo individuale: **NON INDICATO** nelle pagine esaminate.
- Per l'integrazione definitiva: leggere l'allegato 'Avviso Misura Servizi' del Comune e controllare risorse disponibili al momento della pubblicazione.

## Gallarate — dettagli della domanda trasporto scolastico (verifica 10/11/2026)
- Portale ufficiale https://gallarate-online.e-pal.it/portal/web/guest/w/bando-per-contributi-per-il-trasporto-scolastico-a-favore-di-studenti-con-disabilita-anno-scolastico-2026-2027 (aggiornamento 19/10/2026).
- Residenti a Gallarate, figli iscritti a scuola infanzia/primaria/secondaria I grado (anche paritaria), trasporto con mezzi propri o di terzi. Per il minore: verbale L.104/92 art. 3 c.1 o c.3 in corso di validità **oppure** riconoscimento invalidità civile con indennità di accompagnamento o di frequenza.
- Accesso online SPID/CIE o tramite delegato; altre modalità di presentazione non ammesse. Contributo una tantum via IBAN; importo individuale NON INDICATO nella pagina; telefono informazioni 0331 754210.
- Domande fino al 13/11/2026 ore 12:00. Verificare la data al merge.
