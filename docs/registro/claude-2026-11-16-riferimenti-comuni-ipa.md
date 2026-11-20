# Riferimenti dei Comuni d'Italia dall'Indice PA (sito e indirizzi dell'ente)

- Data: 16/11/2026
- Autore: Claude
- Ramo / PR: dati/2026-11-16-claude-riferimenti-comuni-ipa
- Classe (da `--classifica origin/main`): A (solo dati e documenti; il file non è ancora letto dall'app)

## Cosa è cambiato

| Archivio | Voce | Azione | Fonte (URL) | Data controllo | Stato verifica |
|---|---|---|---|---|---|
| src/content | riferimenti-comuni.json (nuovo) | aggiunto: per 7.756 Comuni su 7.867 della nostra anagrafica, sito istituzionale, PEC e, dove c'è, email generica dell'ente | https://indicepa.gov.it/ipa-dati/dataset/enti (file enti.xlsx, ultima modifica 15/11/2026) | 16/11/2026 | dato ufficiale dell'Indice delle Pubbliche Amministrazioni, non ricontrollato Comune per Comune |
| docs | riferimenti/costruisci-riferimenti-ipa.py (nuovo) | lo script che ha costruito il file, per rifarlo quando l'Indice PA si aggiorna | — | 16/11/2026 | — |

Fonte: Indice dei domicili digitali delle pubbliche amministrazioni (IPA), AgID, licenza Creative Commons Attribuzione 4.0 (CC BY 4.0). **L'attribuzione è obbligatoria**: va citata in app (pagina informazioni o crediti) quando i dati compaiono nelle schede.

Formato: chiave = slug del Comune; valore = [sito (senza «https://»), PEC, email generica]. Stringa vuota = dato assente.

## Come sono stati scelti i dati

- Solo righe dell'Indice PA con categoria «Comuni» (L6) e denominazione «Comune di …» (più «Roma Capitale»): sono esclusi unioni, consorzi e altri enti con la stessa sede.
- Abbinamento per codice ISTAT: 7.453 Comuni. Per altri 303 il codice è cambiato (fusioni, nuove province) e l'abbinamento è per nome, solo se il nome è unico in tutta l'Indice PA e il sito non indica un'altra provincia. 76 abbinamenti per nome sono stati scartati per prudenza (soprattutto Sardegna e fusioni recenti).
- PEC: la prima indicata come PEC dall'ente. Email ordinaria: solo se l'indirizzo è generico (protocollo, URP, info, segreteria, servizi sociali…), mai di singole persone. Presente per 3.080 Comuni.
- Il sito è scritto nell'Indice PA senza protocollo: l'app dovrà aggiungere «https://».

## Rimozioni

nessuna

## Controlli

- `controlla-dati.js`: vedi PR.

## Non coperti (111 Comuni)

Fusioni recenti, Comuni sardi con provincia cambiata e Comuni con denominazione diversa nell'Indice PA: Calliano (AT), Casorzo (AT), Moransengo (AT), Tonengo (AT), Cerrina Monferrato (AL), Alluvioni Piovera (AL), Bardello (VA), Bregano (VA), Malgesso (VA), Ronago (CO), Uggiate-Trevano (CO), Albaredo Arnaboldi (PV), Campospinoso (PV), Lirio (PV), Montagna (BZ), Ruffrè-Mendola (TN), Altavalle (TN), San Giovanni di Fassa (TN), Borgo d'Anaunia (TN), Castegnero (VI), Gambugliano (VI), Nanto (VI), Sovizzo (VI), Alano di Piave (BL), Quero Vas (BL), Carceri (PD), Vighizzolo d'Este (PD), Casciana Terme Lari (PI), Morro Reatino (RI), Valmontone (RM), Popoli (PE), Villa Santa Maria (CH), Presicce-Acquarica (LE), Misiliscemi (TP), Alà dei Sardi (SS), Olbia (SS), Aglientu (SS), Badesi (SS), Gairo (NU), Girasole (NU), Jerzu (NU), Lanusei (NU), Perdasdefogu (NU), Ussassai (NU), Villagrande Strisaili (NU), San Nicola dell'Alto (KR), Brovello-Carpugnino (VB), Armungia (SU), Ballao (SU), Barrali (SU), Burcei (SU), Calasetta (SU), Collinas (SU), Decimoputzu (SU), Dolianova (SU), Domus de Maria (SU), Domusnovas (SU), Donori (SU), Escalaplano (SU), Escolca (SU), Esterzili (SU), Fluminimaggiore (SU), Furtei (SU), Gergei (SU), Gesturi (SU), Goni (SU), Gonnesa (SU), Guamaggiore (SU), Iglesias (SU), Isili (SU), Lunamatrona (SU), Mandas (SU), Masainas (SU), Musei (SU), Nuragus (SU), Nurallao (SU), Nuraminis (SU), Nurri (SU), Pabillonis (SU), Pimentel (SU), Piscinas (SU), Portoscuso (SU), Sadali (SU), Samassi (SU), Samatzai (SU), San Basilio (SU), San Giovanni Suergiu (SU), San Nicolò Gerrei (SU), San Sperate (SU), San Vito (SU), Santadi (SU), Sant'Andrea Frius (SU), Sardara (SU), Selegas (SU), Serramanna (SU), Serrenti (SU), Seui (SU), Seulo (SU), Siliqua (SU), Silius (SU), Siurgus Donigala (SU), Ussana (SU), Ussaramanna (SU), Villacidro (SU), Villamassargia (SU), Villanova Tulo (SU), Villanovafranca (SU), Villaperuccio (SU), Villasalto (SU), Villasimius (SU), Villaspeciosa (SU).

## Cosa manca

1. Mostrare questi riferimenti nelle schede minime e usare la PEC come destinatario di «Scrivi al tuo Comune» · modifica al codice dell'app (classe B) · serve il «pubblica».
2. Citare la fonte (Indice PA, CC BY 4.0) nelle informazioni dell'app · stessa modifica.
3. Riferimenti dei 111 Comuni non coperti · siti dei Comuni o prossimo aggiornamento dell'Indice PA.
4. Riferimenti non sono servizi: telefono, ufficio Servizi Sociali, orari e misure restano da cercare Comune per Comune.
