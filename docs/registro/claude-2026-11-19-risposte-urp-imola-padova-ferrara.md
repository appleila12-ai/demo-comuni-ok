# Risposte URP su esenzione ticket e visite: Imola, Padova, Ferrara

- Data: 19/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-19-claude-risposte-urp-esenzioni
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| esenzioneAslRisposte | imola | aggiunta scheda (solo ciò che scrive l'URP: esenzioni registrate presso l'Anagrafe sanitaria dell'AUSL, due pagine indicate, tel. URP) | https://www.ausl.imola.bo.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/5055 e .../IDPagina/30 | 19/11/2026 | verificato (risposta scritta URP 18/11/2026) |
| esenzioneAslRisposte | padova | fonte aggiornata con risposta URP del 19/11/2026 + link Medicina legale | https://www.aulss6.veneto.it/sportello-amministrativo-distrettuale ; https://www.aulss6.veneto.it/servizio-di-medicina-legale | 19/11/2026 | verificato (risposta scritta URP) |
| esenzioneAslRisposte | ferrara | fonte aggiornata con risposta URP del 16/11/2026 (stessa pagina già in scheda) | https://www.ausl.fe.it/come-fare-per/esenzioni-ticket | 19/11/2026 | verificato |

ASST Cremona: risposta del 18/11/2026 già inserita (registro claude-2026-11-18-cremona-esenzione.md), nessuna modifica.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js --confronta origin/main`: zero errori, 0 aggiunte/0 tolte
- Classe: A
- Controllo su GitHub / anteprima Netlify: da verificare sulla PR

## Cosa manca

1. Imola · documenti, sportelli e orari, appuntamento, tempi · le due pagine indicate dall'URP non sono state lette da TutelApp (lettura web non disponibile in questa sessione) · AUSL di Imola, URP (0542 604121)
2. Padova · documenti, orari sportelli fisici, casi di invalidità civile · pagina «Servizio di medicina legale» non letta · URP ULSS 6 Euganea
3. Ferrara · appuntamento, tempi e delega · Sportello Unico CUP
