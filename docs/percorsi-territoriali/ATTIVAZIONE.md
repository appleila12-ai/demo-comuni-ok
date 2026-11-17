# Percorsi Territoriali: come si attiva (per la dott.ssa Baudone)

Stato: PR in bozza, **non attiva**. Nulla è in produzione finché non scrivi «pubblica».

## 1. Libreria di salvataggio (una volta, dal tuo computer o da GitHub Codespaces)

Sul ramo `percorsi-territoriali-claude`, dentro la cartella `frontend`:

    yarn add @netlify/blobs

Il comando aggiorna `package.json` e `yarn.lock`. Poi si fa il commit e il push dei due file. Senza questo passo
l'anteprima di Netlify non riesce a costruire la funzione (manca la libreria).

## 2. Impostazioni segrete in Netlify (mai nel repository, mai in email)

Netlify > Site configuration > Environment variables. Quattro variabili:

| Nome | Che cosa è |
|---|---|
| `PERCORSI_SECRET` | stringa casuale di almeno 32 caratteri (firma dei gettoni di accesso) |
| `PERCORSI_PASSWORD_ADMIN` | password di TutelApp, apre tutti i moduli (almeno 12 caratteri) |
| `PERCORSI_PASSWORD_MEDIGLIA` | password del Comune di Mediglia (almeno 12 caratteri) |
| `PERCORSI_PASSWORD_SARZANA` | password del Comune di Sarzana (almeno 12 caratteri) |

Una password diversa per ogni Comune. Le password si comunicano ai referenti **a parte** (per esempio per telefono),
mai nella stessa email del link. Password più corte di 12 caratteri non vengono accettate.
Per cambiare una password: cambiare il valore in Netlify e rifare il deploy.

## 3. Prima di scrivere ai Comuni

- Provare l'anteprima con password di prova (login, salvataggio, ripresa, due Comuni separati, stampa, telefono).
- Controllare in Netlify dove sono conservati i dati (regione) e se è disponibile l'accordo sul trattamento dei dati.
  I dati sono nomi e recapiti di uffici e referenti, non dati dei cittadini.
- Solo dopo la pubblicazione il link esiste davvero: `/accesso-comuni?comune=mediglia` e `/accesso-comuni?comune=sarzana`.
  Le email in `bozze-email.md` hanno il punto in cui inserire il link vero.

## Limiti da conoscere

- Password condivisa per Comune: non ci sono account personali. Chi salva scrive il proprio nome, ma non lo si può dimostrare.
- Non si può ancora autorizzare singoli collaboratori: il Comune dà la password a chi vuole.
- Il modulo salva sul server di Netlify; non cambia l'app pubblica. Per portare i dati in app serve una PR approvata.
- Il QR code e la pagina pubblica del percorso (link diretto, stampa per il cittadino) non sono in questa PR: serve una
  seconda libreria e dati verificati dal Comune. Si fanno nel passo successivo.
