# Esenzione ticket L'Aquila e Ocre: risposta dell'URP ASL 1 Abruzzo

- Data: 16/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-16-claude-asl1-abruzzo-laquila-ocre
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte | Data | Stato verifica |
|---|---|---|---|---|---|
| esenzioneAslRisposte.ts | laquila | scheda aggiornata con la risposta scritta dell'URP: sportello «Scelta e Revoca del Medico» Via Capocroce 1, lun–ven 8:15–13:00 senza appuntamento; documenti (certificato malattia cronico invalidante con codice; verbale INPS per invalidità); richiesta anche via email con documento d'identità e tessera sanitaria; ristampa tesserino sul portale regionale | risposta scritta URP ASL 1 Abruzzo, mail del 16/11/2026 (thread esenzione ticket L'Aquila e Ocre, richiesta del 10/11/2026) | 16/11/2026 | risposta ufficiale dell'ente |
| esenzioneAslRisposte.ts | ocre | scheda collegata a quella de L'Aquila: la richiesta del 10/11 nominava entrambi i Comuni e l'URP ha risposto per entrambi | stessa mail | 16/11/2026 | risposta ufficiale dell'ente |
| in-validazione.json | ocre / esenzione-ticket | voce tolta (dato ricevuto) | | 16/11/2026 | |

Orario: l'URP scrive 8:15–13:00; la pagina della Trasparenza (28/10/2026) scriveva 8:15–13:15. In scheda c'è l'orario dell'URP con l'avviso fisso «orari indicativi». Non inserito l'indirizzo dell'URP generale come ufficio esenzioni.

## Rimozioni

Voce «esenzione-ticket» di Ocre in `in-validazione.json`.

## Controlli

- `controlla-dati.js`, `verifica-anagrafica.js`: vedi PR. TypeScript non verificabile in sandbox.

## Cosa manca

1. Modulo o modalità online per la richiesta di esenzione (oltre all'email) · L'Aquila e Ocre · URP ASL 1 Abruzzo, tel. 0863 499943.
2. Tempi di rilascio · L'Aquila e Ocre · stesso ufficio.
3. Conferma che lo sportello di Via Capocroce vale anche per i residenti di Ocre · stesso ufficio.
