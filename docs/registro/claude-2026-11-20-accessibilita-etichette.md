# 20/11/2026 · Accessibilità: ruoli, etichette e protocollo di prova

**Cosa cambia:** in 27 file dell'app, 55 pulsanti con testo ricevono il ruolo «pulsante» (`accessibilityRole`); l'icona di chiusura degli avvisi del tracker riceve il nome «Chiudi avvisi e promemoria»; 5 campi di testo senza etichetta (nome e desiderio libero in «Il mio progetto»; data e nota del tracker) ricevono l'etichetta.

**Controllo fatto:** analisi del codice di tutte le schermate (226 pulsanti, 3 campi data/testo). Prima: 59 senza ruolo, 1 senza nome (solo icona), 5 campi senza etichetta. Dopo: 3 senza ruolo (contenitori), 0 senza nome, 0 campi senza etichetta. Controlli dati e ricerca eseguiti; controllo sintassi dei file toccati eseguito.

**Cosa non è verificato:** nessuna prova con VoiceOver o TalkBack; la verifica di tipi completa (`tsc`) non è stata eseguita perché in questo ambiente non sono installati i pacchetti.

**Documento nuovo:** `docs/proposte/2026-11-20-protocollo-prova-accessibilita.md` (protocollo per la prova con una persona di UICI/INVAT: caso, percorsi, cosa si annota, ringraziamento).

**Cosa manca:** la prova con la persona; il nome di chi la fa; la decisione sul riconoscimento; i risultati vanno registrati qui dopo l'incontro.
