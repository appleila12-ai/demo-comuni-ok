# Emilia-Romagna: esenzione ticket, competenze Regione / AUSL

- Data: 11/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-11-claude-emilia-romagna-ticket / (vedi PR)
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

| Archivio | Voce (id / slug / nome) | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| esenzioneAslRisposte | reggio-emilia | modifica (aggiunto avviso «importante»: l'attestato lo rilascia l'AUSL, non la Regione; le modalità sono dell'AUSL) | risposta scritta del Settore Assistenza territoriale della Regione Emilia-Romagna, 11/11/2026; pagina https://salute.regione.emilia-romagna.it/cure-primarie/ticket-esenzioni/esenzioni/esenzioni-pagamento-ticket (ultima modifica 20/01/2026) | 11/11/2026 | verificato (solo la ripartizione delle competenze) |

## Verifica nel repository

- Nessuna scheda o configurazione dei Comuni dell'Emilia-Romagna indica la Regione come ufficio a cui inviare domande individuali: i link «esenzioneTicket» dei Comuni rimandano alle AUSL (o ai Comuni, per Ferrara, Forlì, Rimini). Nessuna correzione necessaria oltre all'avviso sopra.
- Il link generale alla Regione resta solo come portale informativo.
- La circolare regionale 2/2019 (PDF) NON è stata letta: l'estrazione del testo restituisce solo il protocollo e il browser non è riuscito ad aprirla. Non le è attribuito nessun requisito o procedura. Pagina del 2026 e circolare del 2019 non vanno confuse.
- Modalità email, PEC, appuntamento, documenti e tempi restano quelle confermate dalla sola AUSL di Reggio Emilia (scheda già esistente): non estese alle altre AUSL.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js --confronta origin/main`: vedi PR
- Controllo su GitHub:
- Anteprima Netlify (pagine aperte e viste):

## Cosa manca

1. Per ogni AUSL (Piacenza, Parma, Reggio Emilia, Modena, Bologna, Imola, Ferrara, Romagna): ufficio/sportello e sedi per la domanda · pagina ufficiale dell'AUSL · URP.
2. Per ogni AUSL: accettazione di email/PEC (e indirizzo), oppure appuntamento obbligatorio e come si prenota.
3. Per ogni AUSL: documenti richiesti ed eventuale modulo ufficiale.
4. Per ogni AUSL: tempi indicativi di rilascio.
5. Circolare 2/2019: lettura visiva del PDF (pagina della Regione, sezione circolari 2019) prima di citarne requisiti.
6. Indirizzi URP centrali non presenti nel database reclami per Parma (solo sede di Fidenza) e Bologna (solo sedi di ospedale/distretto): da cercare.

## Mail da inviare (bozze)

Bozze create in Gmail e NON inviate, agli URP di: AUSL Piacenza, AUSL Modena, AUSL Ferrara, AUSL Imola, AUSL Romagna (copre Ravenna, Forlì, Cesena, Rimini). Testo: presentazione di TutelApp, competenza AUSL confermata dalla Regione, cinque domande (ufficio/sedi; email-PEC o appuntamento; documenti e modulo; tempi; pagina ufficiale), formula «una richiesta in meno domani», firma Gmail. Non fatte: Reggio Emilia (scheda già fatta), Parma e Bologna (manca indirizzo centrale).
