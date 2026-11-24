# Audit tecnico bonus — fotografia del 23/11/2026

Fonte di estrazione: `frontend/src/lib/bonus.ts` su `main`, lettura diretta il 23/11/2026. Questo è un **inventario statico del codice**, NON una certificazione della correttezza delle pagine esterne. Si applica la regola condivisa #267 e la divisione territoriale di `docs/coordinamento/ASSEGNAZIONI.md`.

## Risultato riproducibile della scansione

- Record con `id`: **116** (non 113; i record possono cambiare tra revisioni).
- ID unici: **116**; URL che iniziano con HTTPS: **116** (questo NON significa URL raggiungibili o istituzionali).
- Senza campo `scade`: **92**; senza `verificatoIl`: **0**.
- Nelle Regioni assegnate a ChatGPT: **33**.
- Stato `aperto` con `scade` precedente al 23/11/2026: **5**.

## Anomalie di stato con data nel codice già trascorsa

| ID | Regione | Scadenza nel codice | Stato nel codice | Azione |
|---|---|---|---|---|
| `civitavecchia-voucher-natalizi-2026` | Lazio | 2026-11-18 | aperto | DA CHIARIRE eventuale proroga con ente; assegnazione Claude |
| `cisterna-di-latina-rimborso-nido-privati-2026-2027` | Lazio | 2026-11-20 | aperto | DA CHIARIRE eventuale proroga con ente; assegnazione Claude |
| `piemonte-buono-domiciliarita-2026` | Piemonte | 2026-11-02 | aperto | Fonte ufficiale verificata 23/11: chiuso; patch codice da applicare |
| `pisa-adattamento-veicoli-2026` | Toscana | 2026-10-31 | aperto | DA CHIARIRE eventuale proroga con ente; assegnazione Claude |
| `trapani-tessere-atm-2027` | Sicilia | 2026-11-20 | aperto | DA CHIARIRE eventuale proroga con ente; assegnazione Claude |

### Piemonte: verifica istituzionale del 23/11/2026

- ID: `piemonte-buono-domiciliarita-2026`.
- URL istituzionale verificato: https://bandi.regione.piemonte.it/contributi-finanziamenti/scelta-sociale-buono-domiciliarita-20262027
- Stato ufficiale **Scaduto**; domande 14/09/2026 00:00–02/11/2026 23:59; importo **700 euro/mese per 12 mesi**; ISEE ordinario o sociosanitario non superiore a **40.000 euro**; residenti piemontesi non autosufficienti con valutazione multidimensionale e punteggio sociale almeno 7.
- Il codice conserva `stato: "aperto"`, `scade: "2026-11-02"`, `verificatoIl: "30/10/2026"`. **Patch richiesta**, soltanto nel record: `stato: "chiuso"` e `verificatoIl: "23/11/2026"` (non toccare gli altri record). **NON APPLICATA**: il connettore GitHub disponibile sostituisce l'intero file e il workflow vieta di riscriverlo.
- La pagina storica https://bandi.regione.piemonte.it/contributi-finanziamenti/scelta-sociale-buono-la-domiciliarita riguarda la finestra 2023–2024, NON il bando 2026; non usarla per requisiti 2026.
- Atti amministrativi: la pagina corrente contiene allegati ufficiali, ma numero e data degli atti non sono stati estratti in questa esecuzione: **DA CHIARIRE**.

## Inventario di tutti i record

Legenda: `DA VERIFICARE` = verifica esterna di URL, requisiti, importi, scadenza, stato e atti ancora da svolgere; `NON INDICATO` = campo assente nel codice. La presenza di URL HTTPS non garantisce che il dominio sia istituzionale. La fonte Piemonte sopra è l'unica verificata esternamente in questo lotto.

| ID | Regione | Stato | Scade | Verificato nel codice | URL fonte (non validato esternamente) |
|---|---|---|---|---|---|
| `la-spezia-grave-disabilita` | Liguria | attivo | NON INDICATO | 10/11/2026 | https://www.comune.laspezia.it/servizi/salute-benessere-e-assistenza/contributi-non-autosufficienza |
| `liguria-ausili-sportivi-2026` | Liguria | attivo | NON INDICATO | 10/11/2026 | https://www.regione.liguria.it/homepage-attivita-istituzionale/trasparenza/amministrazione-trasparente/beni-immobili-e-gestione-patrimonio/patrimonio-immobiliare/publiccompetition/4683%3Acontributi-acquisto-ausili-sportivi-2026.html |
| `la-spezia-gravissima-disabilita` | Liguria | attivo | NON INDICATO | 10/11/2026 | https://www.comune.laspezia.it/servizi/salute-benessere-e-assistenza/gravissima-disabilita |
| `sarzana-vita-indipendente-dgr-446` | Liguria | attivo | NON INDICATO | 21/10/2026 | https://www.comune.sarzana.sp.it/servizi/salute-benessere-e-assistenza/progetti-di-vita-indipendente-dgr-n-446-2015.html |
| `sarzana-contributi-economici` | Liguria | attivo | NON INDICATO | 21/10/2026 | https://www.comune.sarzana.sp.it/servizi/salute-benessere-e-assistenza/contributi-a-sostegno-del-reddito.html |
| `lerici-servizi-sociali` | Liguria | attivo | NON INDICATO | 21/10/2026 | https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_63.html |
| `lerici-bonus-elettrico-disagio-fisico` | Liguria | attivo | NON INDICATO | 21/10/2026 | https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_64.html |
| `lerici-bonus-acqua-luce-gas` | Liguria | attivo | NON INDICATO | 21/10/2026 | https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_7.html |
| `lerici-assegno-maternita` | Liguria | attivo | NON INDICATO | 21/10/2026 | https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_20.html |
| `lerici-assegnazione-provvisoria-alloggi` | Liguria | attivo | NON INDICATO | 21/10/2026 | https://www.comune.lerici.sp.it/servizi/salute_benessere_e_assistenza/servizio_65.html |
| `luni-fondo-affitti-2026` | Liguria | chiuso | 2026-11-12 | 21/10/2026 | https://www.comune.luni.sp.it/it-it/novita/avvisi/2026/bandi/bando-per-l-erogazione-di-contributi-a-sostegno-delle-abitazioni-in-locazione-404204-1-3604a8a0dd4e4cc60fd583a7f34e0d11 |
| `arcola-contributo-economico` | Liguria | attivo | NON INDICATO | 22/10/2026 | https://comune.arcola.sp.it/servizi/salute_benessere_e_assistenza/servizio_96.html |
| `arcola-assegno-maternita` | Liguria | attivo | NON INDICATO | 22/10/2026 | https://comune.arcola.sp.it/servizi/salute_benessere_e_assistenza/servizio_20.html |
| `massa-assegno-maternita` | Toscana | attivo | NON INDICATO | 22/10/2026 | https://www.comune.massa.ms.it/servizi/assegno-di-maternita |
| `pietrasanta-bonus-riscaldamento-2026` | Toscana | aperto | 2026-11-26 | 27/10/2026 | https://www.comune.pietrasanta.lu.it/it/news/bonus-spese-da-riscaldamento-2026 |
| `sicilia-disabilita-gravissima` | Sicilia | attivo | NON INDICATO | 08/10/2026 | https://www.regione.sicilia.it/la-regione-informa/disabilita-gravissime-impegnati-19-milioni-contributi-economici-marzo |
| `palermo-disabilita-gravissima-distretto42` | Sicilia | attivo | NON INDICATO | 08/10/2026 | https://www.asppalermo.org/wp-content/uploads/2024/03/REGOLAMENTO-DISABILITA-GRAVISSIMA.pdf |
| `palermo-bonus-caregiver-fna-2022` | Sicilia | scaduto | 2026-11-11 | 12/11/2026 | https://www.comune.palermo.it/novita/avviso-pubblico-bonus-caregiver-contributo-economico-una-tantum-per-il-sostegno-del-ruolo-di-cura-e-di-assistenza-dei-caregiver-familiari-di-persone-con-disabilit-grave-e-persone-con-disabilit-gravi/ |
| `lombardia-misura-b1-sostegno` | Lombardia | attivo | NON INDICATO | 16/11/2026 | https://www.regione.lombardia.it/politiche-sociali-e-abitative/disabilita/politiche-e-misure-per-la-disabilita/sostegno-per-la-disabilit--gravissima-misura-sostegno |
| `lombardia-dopo-di-noi` | Lombardia | attivo | NON INDICATO | 30/10/2026 | https://www.lombardiafacile.regione.lombardia.it/wps/portal/site/Lombardia-Facile/agevolazioni-contributi-servizi/dopo-di-noi |
| `genova-doge-domiciliarita-disabili` | Liguria | attivo | NON INDICATO | 25/10/2026 | https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/sistema-domiciliarita-del-comune-di-genova-doge |
| `genova-trasporto-scolastico-disabili` | Liguria | attivo | NON INDICATO | 25/10/2026 | https://www.comune.genova.it/servizi/educazione-e-formazione/trasporto-scolastico-alunni-con-disabilita |
| `genova-mobility-bus` | Liguria | attivo | NON INDICATO | 27/10/2026 | https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/trasporto-il-tempo-libero-dedicato-alle-persone-con |
| `genova-trasporto-lavorativo-riabilitativo` | Liguria | attivo | NON INDICATO | 26/10/2026 | https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/servizio-di-trasporto-lavorativo-o-riabilitativo |
| `genova-cude-contrassegno` | Liguria | attivo | NON INDICATO | 25/10/2026 | https://www.comune.genova.it/servizi/mobilita-e-trasporti/richiedere-permesso-parcheggio-invalidi |
| `genova-parcheggio-personalizzato` | Liguria | attivo | NON INDICATO | 25/10/2026 | https://www.comune.genova.it/servizi/mobilita-e-trasporti/gestione-sosta-parcheggi-disabili-personalizzati |
| `genova-esenzione-passo-carrabile` | Liguria | attivo | NON INDICATO | 25/10/2026 | https://www.comune.genova.it/servizi/tributi-finanze-e-contravvenzioni/occupazione-spazi-e-aree-pubbliche-esenzione-persona-con |
| `genova-cohousing-disabili` | Liguria | attivo | NON INDICATO | 25/10/2026 | https://www.comune.genova.it/tutti-gli-argomenti/persona-con-disabilita/soluzioni-la-convivenza-e-comunita-alloggio-cohousing |
| `lazio-disabilita-gravissima` | Lazio | attivo | NON INDICATO | 21/10/2026 | https://regione.lazio.it/cittadini/sociale-famiglie/disabilita/disabilita-gravissima |
| `lazio-dopo-di-noi` | Lazio | attivo | NON INDICATO | 13/11/2026 | https://www.regione.lazio.it/sites/default/files/documentazione/2026/POS-DGR-453-11-06-2026.pdf |
| `civitavecchia-voucher-natalizi-2026` | Lazio | aperto | 2026-11-18 | 14/11/2026 | https://www.comune.civitavecchia.rm.it/it/news/2071495 |
| `albano-laziale-rimborso-nido-privati-2026` | Lazio | aperto | 2026-12-31 | 14/11/2026 | https://comune.albanolaziale.rm.it/servizio/voucher-contributi-economici-per-il-rimborsi-del-pagamento-delle-rette-degli-asili-nido-privati-in-favore-dei-minori-residenti-nel-comune-di-albano-laziale/ |
| `albano-laziale-disabilita-gravissima-2026` | Lazio | attivo | NON INDICATO | 14/11/2026 | https://comune.albanolaziale.rm.it/novita/ |
| `cisterna-di-latina-rimborso-nido-privati-2026-2027` | Lazio | aperto | 2026-11-20 | 16/11/2026 | https://www.comune.cisterna.latina.it/s3/2139/allegati/servizi-sociali/asili-nido-rimborso-rette-avviso.pdf |
| `aprilia-assistenza-economica-straordinaria` | Lazio | attivo | NON INDICATO | 14/11/2026 | https://www.comune.aprilia.lt.it/servizi/assistenza-economica-sociale-straordinaria |
| `marino-ciampino-autismo-minori-2026` | Lazio | aperto | 2026-11-30 | 16/11/2026 | https://www.comune.marino.rm.it/novita/avvisi/novita_3106.html |
| `marino-ciampino-caregiver-2026` | Lazio | aperto | 2026-12-10 | 16/11/2026 | https://www.comune.marino.rm.it/halley//ht/eg176/2026_DD_1446_AVVISO_PUBBLICO_CAREGIVER_2026_rett.pdf |
| `marino-sostegno-socioeconomico` | Lazio | attivo | NON INDICATO | 14/11/2026 | https://www.comune.marino.rm.it/servizi/salute_benessere_e_assistenza/servizio_95.html |
| `latina-adi-disabili` | Lazio | attivo | NON INDICATO | 26/10/2026 | https://www.comune.latina.it/home/servizi/servizio/Servizio-84.html |
| `latina-centro-diurno-disabili` | Lazio | attivo | NON INDICATO | 26/10/2026 | https://www.comune.latina.it/home/servizi/servizio/Servizio-85.html |
| `fondi-caregiver-status-lt4` | Lazio | attivo | NON INDICATO | 16/11/2026 | https://comune.terracina.lt.it/notizie/3418166/riconoscimento-formale-valorizzazione-sociale |
| `pisa-trasporto-scolastico-autonomo-2026` | Toscana | aperto | NON INDICATO | 10/11/2026 | https://www.comune.pisa.it/Servizi/Contributi-per-nuclei-familiari-che-organizzano-in-autonomia-il-trasporto-scolastico-degli-alunni-con-disabilita-dai-3-ai-14-anni |
| `toscana-centro-ascolto-caregiver` | Toscana | attivo | NON INDICATO | 27/10/2026 | https://www.regione.toscana.it/it/-/centro-di-ascolto-per-il-caregiver-familiare |
| `toscana-vita-indipendente-fse` | Toscana | attivo | NON INDICATO | 16/11/2026 | https://www.regione.toscana.it/it/-/disabilit%C3%A0-e-grave-limitazione-dell-autonomia-finanziamenti-per-sostenere-vita-indipendente-e-inclusione |
| `toscana-esenzione-bollo-disabilita` | Toscana | attivo | NON INDICATO | 30/10/2026 | https://www.regione.toscana.it/-/esenzioni_per_disabilit%C3%A0_e_minorenni_trapiantati |
| `puglia-sostegno-familiare-2027-2028` | Puglia | aperto | 2026-12-17 | 17/11/2026 | https://www.comune.trani.bt.it/s3/7382/allegati/determina-regionale-avviso.pdf |
| `puglia-patto-di-cura-2027-2029` | Puglia | aperto | 2026-12-17 | 17/11/2026 | https://www.comune.trani.bt.it/s3/7382/allegati/determina-patto-di-cura-2027-2028-2029.pdf |
| `veneto-impegnative-cura-domiciliare` | Veneto | attivo | NON INDICATO | 15/10/2026 | https://salute.regione.veneto.it/assistenza-sociosanitaria-/persone-con-disabilit%C3%A0/domiciliarit%C3%A0-(icd)---impegnative-di-cura-domiciliari |
| `piemonte-buono-domiciliarita-2026` | Piemonte | aperto | 2026-11-02 | 30/10/2026 | https://bandi.regione.piemonte.it/system/files/All.1_AVVISO_DOM_2026.pdf |
| `piemonte-barriere-architettoniche` | Piemonte | attivo | NON INDICATO | 30/10/2026 | https://www.regione.piemonte.it/web/temi/diritti-politiche-sociali/casa/eliminazione-delle-barriere-architettoniche-negli-edifici-privati |
| `piemonte-misure-disabilita` | Piemonte | attivo | NON INDICATO | 14/10/2026 | https://www.regione.piemonte.it/web/temi/diritti-politiche-sociali/disabilita/salute-interventi-socio-sanitari/assistenza-alle-persone-disabilita |
| `torino-assistenza-domiciliare` | Piemonte | attivo | NON INDICATO | 13/10/2026 | https://www.comune.torino.it/servizi/interventi-assistenza-alle-persone-anziane-disabilita-che-vivono-al-domicilio |
| `emilia-romagna-assegno-di-cura` | Emilia-Romagna | attivo | NON INDICATO | 14/10/2026 | https://sociale.regione.emilia-romagna.it/persone-con-disabilita/assistenza/assegno-di-cura |
| `roma-assegno-contributo-cura` | Lazio | attivo | NON INDICATO | 13/10/2026 | https://www.vitaindipendenteroma.it/schede/assegno-di-cura-e-contributo-di-cura-caregiver/ |
| `brescia-vacanze-adulti-disabilita` | Lombardia | attivo | NON INDICATO | 19/10/2026 | https://comune.brescia.it/it/servizi/sociali-erogazione-di-contributi-una-tantum-a-parziale-rimborso-delle-spese-sostenute-per-le-vacanze-di-persone-adulte-con-disabilita |
| `brescia-vita-indipendente` | Lombardia | attivo | NON INDICATO | 19/10/2026 | https://comune.brescia.it/it/servizi/contributi-per-progetti-di-vita-indipendente |
| `modena-disability-card` | Emilia-Romagna | attivo | NON INDICATO | 19/10/2026 | https://www.comune.modena.it/argomenti/agevolazioni-economiche/contributi-e-agevolazioni-di-altri-enti/carta-europea-della-disabilita-disability-card |
| `bollate-trasporto-scolastico-disabilita-2026-2027` | Lombardia | aperto | NON INDICATO | 10/11/2026 | https://www.comune.bollate.mi.it/it/news/2056751 |
| `legnano-contributo-trasporto-scolastico-2025-2026` | Lombardia | chiuso | NON INDICATO | 20/11/2026 | https://comune.legnano.mi.it/notizie/3654974/richiesta-contributo-trasporto-scolastico |
| `magenta-misura-sostegno-servizi-2026-2027` | Lombardia | aperto | NON INDICATO | 10/11/2026 | https://pdzmagentino.comune.magenta.mi.it/novita/notizia/misura-sostegno-e-misura-servizi-ex-misura-b2-avviso-pubblico-2026-2027/ |
| `lodi-misura-sostegno-servizi-2026-2027` | Lombardia | aperto | NON INDICATO | 10/11/2026 | https://www.ufficiodipiano.lodi.it/attivita-dettaglio.php?id=162 |
| `parabiago-misura-sostegno-servizi-2026-2027` | Lombardia | aperto | NON INDICATO | 10/11/2026 | https://www.comune.parabiago.mi.it/area_letturaNotizia/638594/pagsistema.html |
| `parabiago-rimborso-trasporto-studenti-superiori-2026` | Lombardia | aperto | NON INDICATO | 10/11/2026 | https://www.comune.parabiago.mi.it/area_letturaNotizia/638023/pagsistema.html |
| `treviglio-misura-b2-fna-2026-2027` | Lombardia | aperto | NON INDICATO | 10/11/2026 | https://comune.treviglio.bg.it/it/news/misura-b2-fna-2026-2027-aperto-il-bando-per-persone-con-disabilita-e-anziani-non-autosufficienti?type=1 |
| `verona-barriere-architettoniche` | Veneto | attivo | NON INDICATO | 19/10/2026 | https://www.comune.verona.it/Servizi/Contributi-per-l-eliminazione-delle-barriere-architettoniche |
| `reggio-emilia-assegno-cura-disabili-adulti` | Emilia-Romagna | attivo | NON INDICATO | 21/10/2026 | https://www.comune.reggioemilia.it/servizi/salute-benessere-e-assistenza/assegno-di-cura-per-disabili-adulti |
| `reggio-emilia-mobilita-privata-art9` | Emilia-Romagna | attivo | NON INDICATO | 21/10/2026 | https://www.comune.reggioemilia.it/servizi/salute-benessere-e-assistenza/contributi-e-agevolazioni-per-la-mobilita-privata-art-9-lr-29-97 |
| `fvg-fap-autonomia-possibile` | Friuli-Venezia Giulia | attivo | NON INDICATO | 20/10/2026 | https://www.regione.fvg.it/rafvg/cms/RAFVG/salute-sociale/interventi-socio-sanitari/FOGLIA30/ |
| `fvg-contributo-caregiver-familiari` | Friuli-Venezia Giulia | attivo | NON INDICATO | 22/11/2026 | https://www.regione.fvg.it/rafvg/cms/RAFVG/salute-sociale/interventi-socio-sanitari/FOGLIA23/ |
| `fvg-barriere-architettoniche` | Friuli-Venezia Giulia | attivo | NON INDICATO | 20/10/2026 | https://www.regione.fvg.it/rafvg/cms/RAFVG/salute-sociale/interventi-socio-sanitari/FOGLIA13/ |
| `cagliari-legge-162-98-piani-2026` | Sardegna | aperto | 2026-11-30 | 20/10/2026 | https://www.comune.cagliari.it/portale/page/it/avviso_piani_personalizzati_di_sostegno__legge_n_16298__anno_2026?contentId=DOC250616 |
| `pisa-adattamento-veicoli-2026` | Toscana | aperto | 2026-10-31 | 26/10/2026 | https://www.comune.pisa.it/Servizi/Contributi-per-adattamento-veicoli-privati |
| `pisa-abbattimento-barriere-2026` | Toscana | aperto | NON INDICATO | 26/10/2026 | https://www.comune.pisa.it/Servizi/Contributo-abbattimento-barriere-architettoniche |
| `marche-vita-indipendente-regionale` | Marche | attivo | NON INDICATO | 16/11/2026 | https://www.regione.marche.it/DesktopModules/CartaServizi/DownloadCartaServizi.ashx?IdErogazione=137&AnnoCarta=2026 |
| `venezia-contributo-residenzialita` | Veneto | attivo | NON INDICATO | 20/10/2026 | https://www.comune.venezia.it/it/content/contributo-economico-residenzialit-disabili |
| `venezia-eu-disability-card-actv` | Veneto | attivo | NON INDICATO | 20/10/2026 | https://live.comune.venezia.it/it/2026/07/eu-disability-card-estesa-la-tariffa-agevolata-actv-tutte-le-disabilita |
| `padova-sostegno-caregiver-familiare` | Veneto | attivo | NON INDICATO | 20/10/2026 | https://padovaper.comune.padova.it/servizi/supporto-economico-e-agevolazioni/sostegno-economico-al-caregiver-familiare-di-persone-con-disabilita |
| `ancona-multileva-3-2-rette-residenziali` | Marche | scaduto | 2026-11-16 | 20/11/2026 | https://www.comune.ancona.it/it/page/rette-per-strutture-residenziali-contributi-economici-a-sostegno-delle-famiglie-e-degli-ospiti |
| `salerno-assegni-di-cura` | Campania | attivo | NON INDICATO | 21/10/2026 | https://www.comune.salerno.it/servizi/assegni-di-cura |
| `trento-assegno-di-cura` | Trentino-Alto Adige | attivo | NON INDICATO | 20/10/2026 | https://www.provincia.tn.it/en/Services/Application-for-the-care-allowance |
| `bolzano-assegno-di-cura` | Trentino-Alto Adige | attivo | NON INDICATO | 11/11/2026 | https://news.provincia.bz.it/it/news/tutte-le-informazioni-utili-sull-assegno-di-cura |
| `vda-fondo-inclusione-autismo-2026` | Valle d'Aosta | attivo | NON INDICATO | 10/11/2026 | https://www.regione.vda.it/allegato.aspx?pk=126463 |
| `calabria-assegno-cura-gravissima-2026` | Calabria | attivo | NON INDICATO | 20/10/2026 | https://www.regione.calabria.it/disabilita-gravissima-al-via-avvisi-pubblici-per-assegni-di-cura-in-tutti-gli-ambiti-sociali-straface-sostegno-concreto-e-rendicontazione-semplificata-per-famiglie-e-caregiver-i-beneficia/ |
| `pescara-trasporto-scolastico-autonomo-2026-2027` | Abruzzo | aperto | NON INDICATO | 10/11/2026 | https://www.comune.pescara.it/novita/avviso-pubblico-per-lerogazione-di-contributo-economico-una-tantum-per-il-trasporto-scolastico-in-autonomia-di-alunni-con-disabilita/ |
| `catanzaro-assegno-cura-gravissima-fna-2022` | Calabria | chiuso | NON INDICATO | 20/11/2026 | https://www.comune.catanzaro.it/novita/pubblicato-lavviso-per-il-supporto-alle-persone-in-condizione-di-disabilita-gravissima-e-al-nucleo-familiare-di-appartenenza-domande-entro-il-19-novembre/ |
| `reggio-calabria-assegno-cura-gravissima-fna-2022` | Calabria | aperto | NON INDICATO | 10/11/2026 | https://comune.reggio-calabria.it/Notizie/Details/8681 |
| `molise-caregiver-2026-2027` | Molise | aperto | NON INDICATO | 12/11/2026 | https://prfesrfse2127.regione.molise.it/bandi-avvisi/misure-per-il-riconoscimento-e-il-sostegno-del-caregiver-familiare-annualita-2026-e-2027/ |
| `sardegna-ritornare-a-casa-plus-2026-2027` | Sardegna | attivo | NON INDICATO | 05/11/2026 | https://delibere.regione.sardegna.it/delibera/116719 |
| `sardegna-piani-162-98-2026` | Sardegna | attivo | NON INDICATO | 30/10/2026 | https://www.regione.sardegna.it/notizie/piani-personalizzati-di-sostegno-legge-n-162-98-assegnate-ulteriori-risorse-ai-comuni |
| `abruzzo-barriere-casa-legge-13-1989` | Abruzzo | attivo | NON INDICATO | 30/10/2026 | https://trasparenza.regione.abruzzo.it/servizi-erogati/carta-servizi/superamento-ed-eliminazione-delle-barriere-architettoniche-negli |
| `abruzzo-vita-indipendente-2026` | Abruzzo | chiuso | NON INDICATO | 20/11/2026 | https://www.regione.abruzzo.it/notizie/sociale-la-vita-indipendente-stanziati-circa-12-milioni-di-euro |
| `campania-registro-caregiver` | Campania | attivo | NON INDICATO | 30/10/2026 | https://servizi-digitali.regione.campania.it/Caregiver |
| `campania-dopo-di-noi` | Campania | attivo | NON INDICATO | 30/10/2026 | https://www.regione.campania.it/aree-tematiche/politiche-sociali/programma-dopo-noi |
| `campania-esenzione-bollo` | Campania | attivo | NON INDICATO | 05/11/2026 | https://entrate.regione.campania.it/tassa-automobilistica-info |
| `basilicata-assistenza-specialistica-alunni-2026-2027` | Basilicata | attivo | NON INDICATO | 30/10/2026 | https://www.regione.basilicata.it/disabilita-e-scuola-600mila-euro-per-assistenza-specialistica/ |
| `basilicata-disabilita-gravissima` | Basilicata | attivo | NON INDICATO | 20/11/2026 | https://gravissimi.regione.basilicata.it/cose.html |
| `lesignano-voucher-sportivi-2026-2027` | Emilia-Romagna | aperto | NON INDICATO | 09/11/2026 | https://pagamentipa.comune.lesignano-debagni.pr.it/it/news/voucher-regionali-per-attivita-sportiva-minori-disabili-o-obesi-certificati |
| `lesignano-contrassegno-disabili` | Emilia-Romagna | attivo | NON INDICATO | 09/11/2026 | https://pagamentipa.comune.lesignano-debagni.pr.it/it/page/tesserini-invalidi |
| `inps-home-care-premium-2025-2028` | Italia | attivo | 2028-01-31 | 09/11/2026 | https://www.inps.it/content/dam/inps-site/it/scorporati/welfare-bandi/2025/03/Bando_121/Allegati/790_Bando-HCP-2025-2028-Assistenza-domiciliare.pdf |
| `liguria-patenti-speciali-2026` | Liguria | aperto | NON INDICATO | 10/11/2026 | https://www.regione.liguria.it/homepage-attivita-istituzionale/trasparenza/amministrazione-trasparente/beni-immobili-e-gestione-patrimonio/patrimonio-immobiliare/publiccompetition/4580:contributi-patenti-speciali-2026.html |
| `umbria-cura-e-autonomia-2026` | Umbria | attivo | NON INDICATO | 10/11/2026 | https://www.regione.umbria.it/notizie/-/asset_publisher/54m7RxsCDsHr/content/disabilita-la-giunta-regionale-approva-la-misura-cura-e-autonomia-per-tutti?read_more=true |
| `perugia-vita-indipendente-2026` | Umbria | scaduto | 2026-04-13 | 12/11/2026 | https://www.comune.perugia.it/servizio/servizi-sociali-vita-indipendente/ |
| `puglia-buoni-servizio-2026-2027` | Puglia | aperto | 2026-11-30 | 10/11/2026 | https://comune.taranto.it/it/news/buoni-servizio-2026-2027-per-anziani-e-persone-con-disabilita-aperto-il-nuovo-avviso-regionale?type=3 |
| `messina-tessere-ast-2027-2028` | Sicilia | aperto | 2026-11-23 | 19/11/2026 | https://www.comune.messina.it/Novita/Comunicati/Tessere-AST-per-persone-con-disabilita-al-via-le-domande-per-il-biennio-2027-2028 |
| `vda-vita-indipendente-art22` | Valle d'Aosta | attivo | NON INDICATO | 10/11/2026 | https://www.regione.vda.it/servsociali/contributi_finanziari_e_assistenza_economica/elenco_completo/lr_23_2010/disabili_art_22_contributi_servizio_assistenza_vita_indipendente_ex162_1998_i.aspx |
| `puglia-dopo-di-noi-linea-b-2026` | Puglia | aperto | 2026-12-16 | 19/11/2026 | https://www.comune.altamura.ba.it/it/news/avviso-pubblico-dei-progetti-personalizzati-dopo-di-noi-linea-b |
| `veneto-icd-caregiver-familiare` | Veneto | attivo | NON INDICATO | 11/11/2026 | https://salute.regione.veneto.it/organizzazione-sssr/il-servizio-socio-sanitario-regionale/assistenza-distrettuale/assistenza-sociosanitaria/anziani-non-autosufficienti/domiciliarit%C3%A0-%28icd%29---interventi-a-favore-del-caregiver-familiare |
| `prato-vita-indipendente-chi-fa-da-se` | Toscana | aperto | 2027-05-31 | 11/11/2026 | https://www.sds.prato.it/it/bacheca/bandi-avvisi/attivi/progetti-vita-indipendente/pagina1182.html |
| `piemonte-esenzione-bollo-disabilita` | Piemonte | attivo | NON INDICATO | 11/11/2026 | https://www.regione.piemonte.it/web/temi/tributi/tassa-automobilistica-bollo-auto/esenzioni-dalla-tassa-automobilistica-per-persone-disabilita |
| `sassari-trasporto-scolastico-autonomo-2026` | Sardegna | aperto | 2026-11-23 | 19/11/2026 | https://www.comune.sassari.it/it/amministrazione/documenti-dati/documento-pubblico/Voucher-per-il-servizio-di-trasporto-scolastico-in-favore-di-studenti-disabili-frequentanti-il-primo-ciclo-di-studi-residenti-nel-Comune-di-Sassari-anno-2026/ |
| `sassari-piani-162-98-nuove-domande-2026` | Sardegna | scaduto | 2026-11-16 | 20/11/2026 | https://www.comune.sassari.it/it/amministrazione/documenti-dati/documento-pubblico/Bando-annualita-2026-L.162-98-piani-personalizzati-in-favore-di-persone-con-disabilita-grave-avviso-presentazione-nuove-domande/ |
| `trapani-tessere-atm-2027` | Sicilia | aperto | 2026-11-20 | 19/11/2026 | https://comune.trapani.it/novita/tessere-atm-2027-aperte-le-domande-per-gli-aventi-diritto/ |
| `ragusa-tessere-ast-2027-2028` | Sicilia | scaduto | 2026-11-16 | 20/11/2026 | https://comune.ragusa.it/en/news/rilascio-tessera-di-libera-circolazione-extraurbana-sui-mezzi-a-s-t-marzo-2027-febbraio-2028-per-soggetti-disabili-art21-l-r-68-81-e-art-2-l-r-9-92-con-invalidita-non-inferiore-al-67-o-equiparati |
| `collecchio-voucher-sportivi-2026-2027` | Emilia-Romagna | aperto | NON INDICATO | 11/11/2026 | https://www.comune.collecchio.pr.it/novita/notizie/voucher-sportivi-2026/ |
| `luni-frna-contributo-non-autosufficienza` | Liguria | attivo | NON INDICATO | 16/11/2026 | https://www.comune.luni.sp.it/en-us/servizi/salute-benessere-e-assistenza/fondo-per-le-non-autosufficienze-fna-714-54994-1-c8c7deb0ce76eba59d295e7b6404697d |
| `cerveteri-ladispoli-disabilita-sostegno-intensivo` | Lazio | attivo | NON INDICATO | 16/11/2026 | https://www.comune.cerveteri.rm.it/novita/avviso-pubblico-la-realizzazione-di-interventi-favore-di-persone-con-disabilita-che |

## Cosa manca

1. Verifica individuale dei **115** URL non controllati esternamente in questo lotto e dei relativi atti, requisiti e importi; classificare le fonti istituzionali una per una, non per sola presenza di HTTPS.
2. Patch chirurgica in `bonus.ts` per Piemonte e test `node frontend/scripts/controlla-dati.js --confronta origin/main`, `--classifica origin/main`, controllo completo; non eseguiti perché nessuna modifica applicata e checkout non disponibile.
3. Verifica proroghe per gli altri 4 ID, di competenza Claude; non duplicare mail. L'Aquila e Ocre non compaiono come ID letterali nel catalogo corrente, da rintracciare nel rispettivo archivio/branch.
4. Nessun merge o pubblicazione senza autorizzazione.
