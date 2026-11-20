# Lotto Lombardia — ASST Pavia, riuso della fonte sanitaria (17/11/2026)

**Responsabile:** ChatGPT · **Stato:** ricerca riutilizzabile, NON schede complete · **Ambito:** Lombardia, Comuni serviti da ASST Pavia · **Nessuna modifica all'app in questo documento**.

## Fonte primaria condivisa

ASST Pavia, “Rilascio/rinnovo esenzioni per patologia cronica o malattia rara, status invalidità, reddito”:
https://asst-pavia.it/servizio/rilascio-rinnovo-esenzioni-per-patologia-cronica-o-malattia-rara-status-invalidita-reddito/

Pagina aggiornata 11/02/2026; lettura documentata 17/11/2026 nel precedente audit Pavia (vedere `docs/proposte/2026-11-17-chatgpt-lombardia-pavia-servizi-ticket.md`). Distinguere esenzioni per patologia, malattia rara, invalidità e reddito. Non promettere l'esenzione senza verifica dei requisiti. La pagina descrive canali online e sportello; non trasferire automaticamente orari e recapiti di Pavia ad altri sportelli.

## Lotto di verifica da sviluppare senza ripetere la ricerca sanitaria generale

| Comune con sportello citato nella fonte ASST | Stato | Da verificare prima dell'integrazione |
|---|---|---|
| Pavia | PARZIALE, modifica in PR #257 | Bonus regionali, comunali e Consorzio Sociale Pavese; destinatario; avviso UI |
| Vigevano | DA VERIFICARE | Servizi Sociali, misure regionali/comunali e Ambito, sportello ASST specifico, destinatario, avviso UI |
| Voghera | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |
| Broni | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |
| Casteggio | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |
| Mortara | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |
| Garlasco | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |
| Mede | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |
| Casorate Primo | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |
| Corteolona | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |
| Varzi | DA VERIFICARE | Stessi cinque requisiti e recapiti sportello pertinenti |

L'elenco indica **località di sportelli ASST**, non prova che ogni Comune abbia una scheda completa, né determina automaticamente la competenza sanitaria per ogni cittadino. Priorità operative tra i Comuni del lotto: Pavia già avviata, poi Vigevano e Voghera, quindi gli altri per popolazione. Per ogni Comune controllare anche la presenza della scheda esistente e le PR aperte prima di modificarla.

## Vincoli e prossimo passo

1. Leggere archivio email/risposte Drive classificato da Claude prima di chiedere informazioni; nessuna email autorizzata in questo lotto.
2. Non toccare `bonus.ts` o `destinatari.ts` se occupati da PR aperte; non interferire con #242/#260.
3. Le tre categorie restano distinte: COMPLETO solo con tutti i cinque requisiti verificati e avviso UI controllato; PARZIALE; CHIUSO – IN ATTESA DI RISCONTRO solo con prova di richiesta ufficiale inviata (issue #262). Nessuna sezione vuota significa assenza di diritti (issue #270).
4. Proseguire con verifiche indipendenti e integrare in una PR draft sicura, senza pubblicare o inviare email. Seguire #267.

**Conteggio di questo documento:** 0 Comuni nuovi completi, 0 chiusi in attesa, 1 Comune già parziale (Pavia), 10 ulteriori Comuni in coda senza dichiarare verifiche comunali svolte. Test Node/CI e anteprima Netlify non verificati.
