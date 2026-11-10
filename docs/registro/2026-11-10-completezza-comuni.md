# Comuni con scheda completa e Comuni con scheda in preparazione

- Data: 10/11/2026
- Autore: Claude
- Ramo / PR: completezza-comuni
- Classe: B (tocca `frontend/app/comuni.tsx`)

## Cosa è cambiato

- Criterio: scheda con tutte le sezioni = Servizi Sociali (telefono + email o indirizzo) + almeno un bonus regionale e uno comunale **attivi/aperti** (i chiusi non contano) + scheda ticket specifica dell'ASL. È presenza dei dati, non verifica.
- `docs/strumenti/completezza-comuni.js`: calcola l'elenco (solo Node). `--scrivi` aggiorna `frontend/src/content/completezza-comuni.json` e `docs/completezza-comuni.md`.
- App: nell'elenco dei Comuni (`/comuni`), dentro ogni Regione, i Comuni con scheda completa stanno sotto «Scheda con tutte le sezioni» (presenza dei dati, non verifica), gli altri sotto «Scheda con sezioni in arrivo».
- Registro interno: `docs/completezza-comuni.md` (410 Comuni incompleti con cosa manca a ciascuno).

Risultato con bonus chiusi esclusi: 3 Comuni con tutte le sezioni (Palermo, Torino, Verona), 417 con sezioni in arrivo. Con i bonus chiusi inclusi erano 10.

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: vedi PR.
- Anteprima Netlify: da guardare a vista (`/comuni`).

## Cosa manca

1. Trentino-Alto Adige: i 4 Comuni risultano senza bonus regionali; da verificare se la misura è registrata sotto altra dicitura (provincia autonoma) prima di considerarli incompleti.
2. Il ticket conta come completo solo con la scheda specifica dell'ASL (non il semplice link); le Unioni (Vigne e Vini) non sono valutate e restano «con sezioni in arrivo».
3. Dopo ogni PR sui dati rilanciare `node docs/strumenti/completezza-comuni.js . --scrivi`.

## Verifica incrociata dei 10 Comuni (ricognizione del 10/11/2026, fonte secondaria senza URL)

Ricognizione fatta fuori da questo repository sui siti istituzionali; il testo non riporta gli URL completi, solo il nome della pagina e la data. **Nessuna voce è stata modificata nell'app.** Per inserire un dato servono URL e data.

| Comune | Recapiti nella scheda | Esito |
|---|---|---|
| Sarzana | tel. 0187 614456 | **DISCORDANTE**: la ricognizione indica 0187 614454; email servizi.sociali@comune.sarzana.sp.it (scheda senza email) |
| Lerici, Luni | tel. 0187 960277 / 0187 690111 | telefono confermato; le email trovate sono personali: NON inserirle |
| Arcola, Castelnuovo Magra, Vezzano Ligure, Ancona, Verona | tel. + email | confermati |
| Palermo | 091 7401111 (centralino) | non verificato come recapito dei Servizi Sociali; nessuna email |
| Torino | 011 4421111 (centralino) | la ricognizione trova 011 01130100 (équipe disabilità Circoscrizioni 1 e 8) e un'email di distretto: recapito unico non verificato |

Bonus e stato (ricognizione): Palermo bonus caregiver **aperto fino all'11/11/2026** (non presente in scheda); Ancona Multileva 3.2 aperto fino al 16/11/2026 (non in scheda); Torino caregiver chiuso dal 31/08/2026; Sarzana riduzione TARI 75% aperta fino al 20/11/2026 (misura economica, non per disabilità); Castelnuovo Magra, Vezzano Ligure e contributi Ancona in scheda chiusi; Lerici, Luni, Arcola, Verona: stato o scadenza non trovati.
Ticket: pagina ASL 5 confermata per i 6 Comuni spezzini; Palermo (ASP) e Torino (ASL Città di Torino) confermati; Ancona e Verona solo pagina regionale, scheda specifica AST/ULSS 9 non trovata.

## Cosa manca (aggiornato)

1. Sarzana: confermare 614454 o 614456 con il Comune, con URL e data della pagina.
2. Palermo: recapito specifico dei Servizi Sociali (mail all'ente); bonus caregiver con URL, requisiti e scadenza dell'11/11 prima di inserirlo.
3. Torino: recapito unico o per distretto, con URL.
4. Ancona: Multileva con URL e scadenza 16/11.
5. Lerici, Luni, Arcola, Verona: stato e scadenza dei bandi (URP/Servizi Sociali).
6. Per ogni dato sopra: URL completo e data della pagina (la ricognizione non li riporta).
