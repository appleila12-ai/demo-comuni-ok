# Assegnazioni di lavoro tra assistenti (11/11/2026)

Obiettivo: portare i 7.867 Comuni dell'anagrafica a scheda «completa» (servizi sociali, bonus regionali e comunali, ticket, destinatario «Scrivi al tuo Comune»), partendo dai più popolosi. Regole: `CHATGPT_WORKFLOW.md`.

## Divisione per Regione (nessuno tocca le Regioni dell'altro)

| Assistente | Regioni | Comuni |
|---|---|---|
| Claude | Liguria, Toscana, Emilia-Romagna, Lazio, Campania, Calabria, Sicilia, Sardegna, Abruzzo, Marche, Umbria, Molise, Basilicata | 3.826 |
| ChatGPT | Lombardia, Piemonte, Veneto, Trentino-Alto Adige, Friuli-Venezia Giulia, Puglia, Valle d'Aosta | 4.041 |

Dentro la propria quota si va per popolazione decrescente (capoluoghi, poi Comuni sopra i 15.000 abitanti, poi gli altri). Priorità assoluta resta ai territori «banco di prova» (La Spezia, Massa-Carrara, Val di Magra, Genova), che sono di Claude.

## Regole per non pestarsi i piedi

1. Una PR alla volta per assistente, per Regione, con prefisso `dati/AAAA-MM-GG-<assistente>-<regione>-<tema>`.
2. Prima di aprire una PR: leggere le PR aperte e gli ultimi 10 commit su `main`; rifare il ramo da `main` aggiornato.
3. Le due liste più toccate (`destinatari.ts`, `bonus.ts`) si modificano solo nelle righe della propria Regione; mai riscrivere file interi.
4. Dopo ogni unione su `main` l'altro assistente aggiorna il proprio ramo (rebase) prima del push successivo.
5. Ogni intervento ha il suo file in `docs/registro/` con il prefisso dell'assistente.
6. Le PR si uniscono solo dopo il «pubblica» della dott.ssa Baudone.
