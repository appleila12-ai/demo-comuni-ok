# Correzione urgente proposta — L'Aquila, caregiver 2026 (10/11/2026)

## Evidenza nel catalogo pubblicato
`frontend/src/lib/bonus.ts`, ID `laquila-caregiver-2026`: `stato: "aperto"` mentre `quando` riporta «Domande entro le ore 23:59 del 2 novembre 2026». Al 10 novembre la data è trascorsa. Fonte corrente ReteAbruzzo non istituzionale. **Non è stata reperita, nella ricerca del 10/11, una proroga ufficiale sul sito comunale**: questo non equivale a prova che non esista.

## Modifica chirurgica richiesta
1. Aprire il bando 2026 nel sito ufficiale `comune.laquila.it` o nella piattaforma `bandisocialescuola.comune.laquila.it`, verificando eventuali proroghe.
2. Se la scadenza del 02/11 è confermata, cambiare **solo** il campo `stato` di `laquila-caregiver-2026` da `"aperto"` a `"chiuso"`.
3. Sostituire l'URL giornalistico con l'URL ufficiale dell'avviso 2026 **solo quando trovato**. Non usare l'avviso comunale del 2024: è una misura/annualità diversa.
4. Correggere la nota «La scadenza è vicina» con testo coerente con l'esito verificato e aggiornare `verificatoIl` solo dopo il controllo della fonte.
5. Eseguire `controlla-dati.js` e controlli PR. Non riscrivere integralmente `bonus.ts` tramite Contents API.

## Ricerca ufficiale
- Ricerca 10/11/2026 su `site:comune.laquila.it caregiver familiare avviso 2026 2 novembre proroga`: nessun avviso 2026 o proroga ufficiale individuato nei risultati; emersi documenti comunali relativi a precedenti annualità, **non sostitutivi**.
- Sito ufficiale del Comune: https://www.comune.laquila.it/
- Portale comunale per le istanze: https://bandisocialescuola.comune.laquila.it/

## Perché non modificato automaticamente
Il file `bonus.ts` contiene oltre 177.000 caratteri e il connettore disponibile sostituisce file interi, in contrasto con la regola del repository sulle modifiche chirurgiche. La proposta è pronta per un agente con shell.

**Rimozioni:** nessuna. **Pubblicazione:** non autorizzata automaticamente.
