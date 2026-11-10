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
