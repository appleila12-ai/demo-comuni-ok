# ChatGPT — Piemonte, Novara e Vercelli — 14/11/2026

## Dati verificati e proposti
- **Novara**: Sportello sociale, corso Felice Cavallotti 23, 28100 Novara; telefono 0321 3703501; email sportellosociale@comune.novara.it; pubblico lun/mer 14:30–16:30, mar/gio/ven 09:00–11:00; accesso al servizio sociale tramite prenotazione. Fonte: https://www.comune.novara.it/amministrazione/sportello-sociale (consultata 14/11/2026).
- **Vercelli**: Sportello Settore Politiche Sociali, via Alessandro Manzoni 8, 13100 Vercelli; telefono 0161 596512; email segreteria.polsoc@comune.vercelli.it; pubblico lun/mer/gio 09:00–12:00, mar/ven chiuso. Fonte: https://www.comune.vercelli.it/amministrazione/sportello-settore-politiche-sociali (pagina ultima modifica 25/05/2026, consultata 14/11/2026).

## Stato
Schede **parziali**, non dichiarare complete. Nessuna adesione del Comune implicita. Nessun bonus inserito senza requisiti e disponibilità verificati.

## Mancanze e prossime fonti
- Novara: procedura di esenzione ticket ASL Novara, bonus comunali con condizioni e finestre, associazioni; verificare ASL NO e Comune di Novara. La pagina https://www.comune.novara.it/servizi/sostegno-economico-alla-domiciliarita-persone-disabilita descrive un contributo regionale, ma non certifica la disponibilità di fondi oggi.
- Vercelli: procedura ticket ASL VC, bonus comunali con condizioni e finestre, associazioni; verificare ASL VC e Comune di Vercelli.
- Destinatari «Scrivi al tuo Comune»: verificare se già presenti in archivio prima di aggiungere; non toccare destinatari.ts mentre PR #251 è aperta.

## Bozza richiesta URP (NON inviata)
Oggetto: TutelApp — verifica informazioni sui servizi e contributi per persone con disabilità

Buongiorno, sono la fondatrice di TutelApp, applicazione gratuita che accompagna persone con disabilità, anziani e famiglie nella ricerca dei servizi e dei diritti sul territorio. Abbiamo verificato i recapiti del vostro Sportello sociale e desideriamo confermare quali contributi e servizi per la disabilità siano attualmente accessibili, con requisiti, modalità e scadenze, e se esiste un elenco istituzionale aggiornato delle associazioni locali. Stiamo inoltre collaborando con UICI sui temi dell'accessibilità. Vi ringraziamo per ogni indicazione utile: ci permetterà di offrire informazioni corrette ai cittadini. Cordiali saluti, Dott.ssa Ilaria Baudone, Fondatrice di TutelApp.

## Controlli
Modifica limitata a due schede demo e questo registro; nessun test Node locale eseguito; attendere CI GitHub e anteprima Netlify. Non pubblicare senza verifiche.


## Aggiornamento 16/11/2026 — Novara, collegamento esenzioni ticket

- **Intervento applicato nella stessa PR #296:** il campo `esenzioneTicket.url` di `frontend/src/config/comuni/demo/novara.ts` punta ora alla pagina ufficiale ASL Novara dedicata al rilascio/rinnovo delle esenzioni, anziché alla homepage del Comune. Etichetta aggiornata per distinguere patologia, invalidità e malattie rare.
- **Fonte istituzionale verificata il 16/11/2026:** https://www.asl.novara.it/it/come-fare-per/richiedere-rilasciorinnovo-esenzione-dal-pagamento-ticket — pagina ASL Novara, con allegati separati «Esenzione per patologia», «Esenzione per invalidità» ed «Esenzione per malattie rare»; data di aggiornamento della pagina **NON INDICATA**.
- **Avvertenza:** il testo della pagina cita un rinnovo automatico delle esenzioni per reddito fino al 31/03/2024; non riportare tale scadenza come valida nel 2026. Gli allegati e le modalità attuali vanno ancora verificati singolarmente.
- **Stato Novara:** PARZIALE, non completo. Mancano verifica completa delle procedure ticket, bonus comunali e dell'Ambito, bonus regionali, destinatario «Scrivi al tuo Comune» e avviso di incompletezza visibile in UI. Nessuna email inviata; nessun merge/deploy autorizzato.
- **Test:** controlli Node locali non eseguiti in questa sessione; CI e anteprima Netlify da ricontrollare dopo il commit.
