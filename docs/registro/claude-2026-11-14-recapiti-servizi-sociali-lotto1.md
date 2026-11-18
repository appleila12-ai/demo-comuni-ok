# Recapiti Servizi Sociali: 11 Comuni (Campania, Sicilia, Toscana)

- Data: 14/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-14-claude-recapiti-sociali-lotto1
- Classe (da `--classifica origin/main`): A

## Cosa è cambiato

Recapiti letti il 14/11/2026 nelle pagine dei Servizi Sociali dei siti dei Comuni (la fonte di ciascuno è nel commento in cima alla scheda). Tolta la nota «informazione in validazione» sui recapiti (voce `servizi-sociali`) da tutti e 11.

| Comune | Inserito | Fonte (pagina, data della pagina) |
|---|---|---|
| Arzano | indirizzo, telefono, orari, responsabile | pagina «Politiche Sociali» del Comune (senza data) |
| Alcamo | telefono, email, PEC | «Area 2 – Servizio Sociale Territoriale» (21/09/2026) |
| Bagheria | email, PEC | «Direzione II Politiche Sociali» (09/11/2026) |
| Barcellona Pozzo di Gotto | indirizzo, telefono, email, PEC | «Servizio Sociale Amministrativo» (10/06/2026) |
| Benevento | telefono, email, PEC | «Servizi Sociali Comunali» (30/06/2026) |
| Caivano | indirizzo, telefono, email | «Servizio Politiche Sociali» (28/07/2025) |
| Caltanissetta | indirizzo, PEC | «Politiche Sociali e Socio-Sanitarie» (31/03/2026) |
| Canicattì | indirizzo, telefono, PEC | «Servizi Sociali» (17/06/2025) |
| Carini | indirizzo, telefono, orari | «Ripartizione III» (01/07/2024: pagina vecchia, da ricontrollare) |
| Adrano | indirizzo, telefono | «Servizio Affari Sociali» (26/11/2024: pagina vecchia, da ricontrollare) |
| Campi Bisenzio | telefono, email (della USL), orari telefonici | avviso «Segretariato Sociale» (21/10/2026) |

Scelte: nessuna email personale di dipendenti; orari sempre con l'avviso «indicativi»; indirizzo non inserito dove il sito ne dà due diversi.

## Letto ma non inserito

Augusta (indirizzi discordanti, la «email» del settore è una PEC), Avezzano (indirizzi discordanti), Aversa (solo email generale), Cagliari e Alghero (nessun ufficio sociale con recapiti), Caltagirone (nessun recapito), Ariano Irpino (solo dati generali), Acireale, Agrigento, Acerra, Adrano (email), Afragola (nulla di verificabile).

## Link che la sessione non ha potuto aprire (da aprire a mano)

- Ardea: https://www.comune.ardea.rm.it (blocco robots)
- Avola: http://www.comune.avola.sr.it (blocco robots)
- Portovenere: https://www.comune.portovenere.sp.it/amministrazione/uffici/ufficio_16.html (blocco robots)
- San Felice Circeo: https://www.comune.sanfelicecirceo.lt.it/ (blocco robots)
- Sarno: https://comunesarno.it (blocco robots)
- Angri: https://www.comune.angri.sa.it (pagina vuota, richiede JavaScript)
- Avellino: https://www.comune.avellino.it (pagina vuota, richiede JavaScript)
- Campobasso: https://www.comune.campobasso.it (pagina vuota, richiede JavaScript)
- Capannori, Ufficio Assistenza alla Persona: https://www.comune.capannori.lu.it/argomento/assistenza-sociale/ (la pagina dell'ufficio ha un indirizzo troppo lungo per la lettura)
- Caltagirone, Distretto socio-sanitario 13: https://www.comune.caltagirone.ct.it/it/sezione/page/distretto-socio-sanitario-13 (non aperta)
- Acerra: https://www.comune.acerra.na.it e Afragola: https://www.comune.afragola.na.it (la scheda segnala siti non leggibili in automatico; da aprire a mano)
- Luni, bando affitti: https://www.comune.luni.sp.it/it-it/novita/avvisi/2026/bandi/bando-per-l-erogazione-di-contributi-a-sostegno-delle-abitazioni-in-locazione-404204-1-3604a8a0dd4e4cc60fd583a7f34e0d11 (non aperta: serve per sapere se c'è stata una proroga)

## Rimozioni

nessuna (tolte solo le note `servizi-sociali` in `in-validazione.json` dei Comuni completati)

## Controlli

- `--confronta origin/main`: zero errori, nessuna aggiunta o rimozione di voci.
- `--classifica origin/main`: classe A.
- Rigenerati `docs/completezza-comuni.md`, `docs/informazioni-mancanti.md`, `frontend/src/content/completezza-comuni.json`.

## Cosa manca

1. Orari, responsabile e email dedicate dove assenti · Comuni sopra · sito del Comune, poi URP/Servizi Sociali.
2. Ricontrollo di Carini e Adrano (pagine del 2024).
