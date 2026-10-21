// Destinatari della mail "Scrivi al tuo Comune" per i Comuni che NON hanno un'email nella scheda.
// Non sono i recapiti dei Servizi Sociali (quelli stanno nelle schede dei Comuni): sono indirizzi
// generici dell'ente a cui scrivere per chiedere di attivare TutelApp.
//
// Dove ci sono più possibilità si preferisce, in ordine: servizi sociali, protocollo, segreteria,
// sindaco, info, URP, affari generali, segretario comunale, responsabile per il digitale (rtd).
// Gli indirizzi di singole persone e di uffici non pertinenti (ragioneria, tributi, anagrafe,
// ufficio tecnico...) non si usano mai.
//
// Fonti: elenco Excel dei Comuni e file "contatti servizi sociali" forniti il 19/10/2026.
// Verificati solo nella forma (indirizzo generico, dominio del Comune): nessuna prova di consegna.
// Gli indirizzi di tipo "pec" sono PEC di protocollo: possono rifiutare mail da caselle non certificate.

export type Destinatario = {
  email: string;
  tipo: "ordinaria" | "pec";
  fonte: string;
};

export const DESTINATARI: Record<string, Destinatario> = {
  // Aulla (MS)
  "aulla": { email: "sociale@comune.aulla.ms.it", tipo: "ordinaria", fonte: "sito del Comune di Aulla, Ufficio Servizi Sociali, Sanità e Sport (21/10/2026)" },
  // Riccò del Golfo di Spezia (SP)
  "ricco-del-golfo": { email: "protocollo@comune.riccodelgolfo.sp.it", tipo: "ordinaria", fonte: "Prefettura della Spezia (elenco del 30/11/2023) e IndicePA, concordi; da riconfermare sul sito del Comune" },
  // Sarzana (SP)
  "sarzana": { email: "urp@comune.sarzana.sp.it", tipo: "ordinaria", fonte: "sito del Comune di Sarzana, Ufficio Relazioni con il Pubblico (21/10/2026)" },
  // Ascoli Piceno (AP)
  "ascoli-piceno": { email: "rtd@comune.ap.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Benevento (BN)
  "benevento": { email: "transizione.digitale@comune.benevento.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Capannori (LU)
  "capannori": { email: "rtd@comune.capannori.lu.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Castelnuovo Magra (SP)
  "castelnuovo-magra": { email: "servizisociali@comune.castelnuovomagra.sp.it", tipo: "ordinaria", fonte: "sito del Comune di Castelnuovo Magra, avviso Servizi Sociali (11/09/2026)" },
  // Favara (AG)
  "favara": { email: "rtd@comune.favara.ag.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Manfredonia (FG)
  "manfredonia": { email: "segretario@comune.manfredonia.fg.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Marcianise (CE)
  "marcianise": { email: "info@comune.marcianise.ce.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Martina Franca (TA)
  "martina-franca": { email: "transizione.digitale@comune.martinafranca.ta.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Modena (MO)
  "modena": { email: "rtd@comune.modena.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Modica (RG)
  "modica": { email: "affarigenerali@comune.modica.rg.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Rovigo (RO)
  "rovigo": { email: "rtd@comune.rovigo.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Savona (SV)
  "savona": { email: "rtd@comune.savona.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Trento (TN)
  "trento": { email: "rtd@comune.trento.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Trieste (TS)
  "trieste": { email: "rtd@comune.trieste.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Verbania (VB)
  "verbania": { email: "rtd@comune.verbania.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Vezzano Ligure (SP)
  "vezzano-ligure": { email: "segretario@comune.vezzanoligure.sp.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Vicenza (VI)
  "vicenza": { email: "segreteriadirezioneservizisociali@comune.vicenza.it", tipo: "ordinaria", fonte: "contatti servizi sociali" },
  // Vigevano (PV)
  "vigevano": { email: "rtd@comune.vigevano.pv.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Acerra (NA)
  "acerra": { email: "protocollo@pec.comune.acerra.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA (19/10/2026)" },
  // Acireale (CT)
  "acireale": { email: "protocollo.comune.acireale@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Afragola (NA)
  "afragola": { email: "protocollo@pec.comune.afragola.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Agrigento (AG)
  "agrigento": { email: "servizio.protocollo@pec.comune.agrigento.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Alcamo (TP)
  "alcamo": { email: "comunedialcamo.protocollo@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Alessandria (AL)
  "alessandria": { email: "protocollo@pec.comune.alessandria.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Alghero (SS)
  "alghero": { email: "protocollo@pec.comune.alghero.ss.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Altamura (BA)
  "altamura": { email: "protocollo.generale@pec.comune.altamura.ba.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Ameglia (SP)
  "ameglia": { email: "protocollo@comune.ameglia.sp.it", tipo: "ordinaria", fonte: "Prefettura della Spezia (elenco del 30/11/2023) e IndicePA, concordi; da riconfermare sul sito del Comune" },
  // Andria (BT)
  "andria": { email: "protocollo@cert.comune.andria.bt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Angri (SA)
  "angri": { email: "comune.angri@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Anzio (RM)
  "anzio": { email: "protocollo.comuneanzio@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Aosta (AO)
  "aosta": { email: "protocollo@comune.aosta.it", tipo: "ordinaria", fonte: "sito del Comune di Aosta, Ufficio protocollo (20/10/2026)" },
  // Aprilia (LT)
  "aprilia": { email: "protocollogenerale@pec.comune.aprilia.lt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Ardea (RM)
  "ardea": { email: "uff.protocollo@pec.comune.ardea.rm.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Augusta (SR)
  "augusta": { email: "protocollocomunediaugusta@pointpec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Avellino (AV)
  "avellino": { email: "ufficioprotocollo@cert.comune.avellino.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Aversa (CE)
  "aversa": { email: "protocollo@pec.comune.aversa.ce.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Avezzano (AQ)
  "avezzano": { email: "comune.avezzano.aq@postecert.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Bagheria (PA)
  "bagheria": { email: "protocollo@pec.comune.bagheria.pa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Barcellona Pozzo di Gotto (ME)
  "barcellona-pozzo-di-gotto": { email: "comunebarcellonapdg@postecert.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Bari (BA)
  "bari": { email: "archiviogenerale.comunebari@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Barletta (BT)
  "barletta": { email: "protocollo@cert.comune.barletta.bt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Belluno (BL)
  "belluno": { email: "belluno.bl@cert.ip-veneto.net", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Biella (BI)
  "biella": { email: "protocollo@cert.comune.biella.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Bisceglie (BT)
  "bisceglie": { email: "protocollogenerale@cert.comune.bisceglie.bt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Bitonto (BA)
  "bitonto": { email: "protocollo.comunebitonto@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Bologna (BO)
  "bologna": { email: "ProtocolloGenerale@pec.comune.bologna.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Bolzano (BZ)
  "bolzano": { email: "bz@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Brescia (BS)
  "brescia": { email: "protocollogenerale@pec.comune.brescia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Busto Arsizio (VA)
  "busto-arsizio": { email: "protocollo@comune.bustoarsizio.va.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Cagliari (CA)
  "cagliari": { email: "protocollogenerale@comune.cagliari.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Caltagirone (CT)
  "caltagirone": { email: "protocollo.caltagirone@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Caltanissetta (CL)
  "caltanissetta": { email: "protocollo@pec.comune.caltanissetta.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Campi Bisenzio (FI)
  "campi-bisenzio": { email: "comune.campi-bisenzio@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Campobasso (CB)
  "campobasso": { email: "comune.campobasso.protocollo@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Cantù (CO)
  "cantu": { email: "comune.cantu@pec.regione.lombardia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Carbonia (SU)
  "carbonia": { email: "comcarbonia@pec.comcarbonia.org", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Casalnuovo di Napoli (NA)
  "casalnuovo-di-napoli": { email: "protocollogen.casalnuovo.na@pec.actalis.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Cascina (PI)
  "cascina": { email: "protocollo@pec.comune.cascina.pi.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Caserta (CE)
  "caserta": { email: "postacertificata@pec.comune.caserta.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Casoria (NA)
  "casoria": { email: "protocollo@pec.comune.casoria.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Castellammare di Stabia (NA)
  "castellammare-di-stabia": { email: "protocollo.stabia@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Catania (CT)
  "catania": { email: "comune.catania@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Catanzaro (CZ)
  "catanzaro": { email: "ufficio.protocollo@certificata.comune.catanzaro.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Cava de' Tirreni (SA)
  "cava-de-tirreni": { email: "amministrazione@pec.comune.cavadetirreni.sa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Cerignola (FG)
  "cerignola": { email: "protocollo.comune.cerignola@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Cernusco sul Naviglio (MI)
  "cernusco-sul-naviglio": { email: "comune.cernuscosulnaviglio@pec.regione.lombardia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Chieti (CH)
  "chieti": { email: "protocollo@pec.comune.chieti.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Chioggia (VE)
  "chioggia": { email: "chioggia@pec.chioggia.org", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Civita Castellana (VT)
  "civita-castellana": { email: "comune.civitacastellana@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Civitanova Marche (MC)
  "civitanova-marche": { email: "comune.civitanovamarche@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Collegno (TO)
  "collegno": { email: "posta@cert.comune.collegno.to.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Corato (BA)
  "corato": { email: "protocollo@pec.comune.corato.ba.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Corigliano-Rossano (CS)
  "corigliano-rossano": { email: "protocollo.coriglianorossano@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Cosenza (CS)
  "cosenza": { email: "protocollo@pec.comune.cosenza.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA (19/10/2026)" },
  // Cremona (CR)
  "cremona": { email: "protocollo@comunedicremona.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Crotone (KR)
  "crotone": { email: "protocollocomune@pec.comune.crotone.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Eboli (SA)
  "eboli": { email: "protocollo.eboli@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Enna (EN)
  "enna": { email: "protocollo@pec.comune.enna.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Ercolano (NA)
  "ercolano": { email: "protocollo.ercolano@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Ferrara (FE)
  "ferrara": { email: "comune.ferrara@cert.comune.fe.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Foggia (FG)
  "foggia": { email: "protocollo.generale@cert.comune.foggia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Foligno (PG)
  "foligno": { email: "comune.foligno@postacert.umbria.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Fondi (LT)
  "fondi": { email: "comune.fondi@pecaziendale.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Forlì (FC)
  "forli": { email: "comune.forli@pec.comune.forli.fc.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Formia (LT)
  "formia": { email: "protocollo@pec.cittadiformia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Francavilla Fontana (BR)
  "francavilla-fontana": { email: "comune.francavillafontana@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Frattamaggiore (NA)
  "frattamaggiore": { email: "protocollo.frattamaggiore@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Frosinone (FR)
  "frosinone": { email: "pec@pec.comune.frosinone.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Gallarate (VA)
  "gallarate": { email: "protocollo@pec.comune.gallarate.va.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Gela (CL)
  "gela": { email: "comune.gela@pec.comune.gela.cl.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Genova (GE)
  "genova": { email: "comunegenova@postemailcertificata.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Giugliano in Campania (NA)
  "giugliano-in-campania": { email: "protocollo@pec.comune.giugliano.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Gorizia (GO)
  "gorizia": { email: "comune.gorizia@certgov.fvg.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Gravina in Puglia (BA)
  "gravina-in-puglia": { email: "protocollo.gravinainpuglia@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Grosseto (GR)
  "grosseto": { email: "comune.grosseto@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Imperia (IM)
  "imperia": { email: "protocollo@pec.comune.imperia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Ladispoli (RM)
  "ladispoli": { email: "comunediladispoli@certificazioneposta.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Lamezia Terme (CZ)
  "lamezia-terme": { email: "protocollo@pec.comunelameziaterme.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Lanciano (CH)
  "lanciano": { email: "comune.lanciano.chieti@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Latina (LT)
  "latina": { email: "protocollo@pec.comune.latina.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Lecce (LE)
  "lecce": { email: "protocollo@pec.comune.lecce.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Licata (AG)
  "licata": { email: "protocollo@cert.comune.licata.ag.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Livorno (LI)
  "livorno": { email: "comune.livorno@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Lucca (LU)
  "lucca": { email: "comune.lucca@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Lucera (FG)
  "lucera": { email: "comune.lucera@anutelpec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Luni (SP)
  "luni": { email: "urp@comune.luni.sp.it", tipo: "ordinaria", fonte: "sito del Comune di Luni, Ufficio Relazioni con il Pubblico (21/10/2026)" },
  // Macerata (MC)
  "macerata": { email: "comune.macerata@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Marano di Napoli (NA)
  "marano-di-napoli": { email: "protocollo@pec.comune.marano.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Marino (RM)
  "marino": { email: "protocollo@pec.comune.marino.rm.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Massa (MS)
  "massa": { email: "comune.massa@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Matera (MT)
  "matera": { email: "comune.matera@cert.ruparbasilicata.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Mazara del Vallo (TP)
  "mazara-del-vallo": { email: "protocollo@pec.comune.mazaradelvallo.tp.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Merano (BZ)
  "merano": { email: "meran.merano@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Messina (ME)
  "messina": { email: "protocollo@pec.comune.messina.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Milano (MI)
  "milano": { email: "protocollo@postacert.comune.milano.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Milazzo (ME)
  "milazzo": { email: "protocollogenerale@pec.comune.milazzo.me.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Misterbianco (CT)
  "misterbianco": { email: "protocollo.misterbianco@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Molfetta (BA)
  "molfetta": { email: "protocollo@cert.comune.molfetta.ba.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Moncalieri (TO)
  "moncalieri": { email: "protocollo@cert.comune.moncalieri.to.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Monterotondo (RM)
  "monterotondo": { email: "comune.monterotondo.rm@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Montesilvano (PE)
  "montesilvano": { email: "protocollo@comunemontesilvano.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Monza (MB)
  "monza": { email: "monza@pec.comune.monza.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Napoli (NA)
  "napoli": { email: "protocollo@pec.comune.napoli.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Nardò (LE)
  "nardo": { email: "protocollo@pecnardo.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Nettuno (RM)
  "nettuno": { email: "protocollogenerale@pec.comune.nettuno.roma.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Nichelino (TO)
  "nichelino": { email: "protocollo@cert.comune.nichelino.to.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Nocera Inferiore (SA)
  "nocera-inferiore": { email: "protocollo@pec.comune.nocera-inferiore.sa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Novara (NO)
  "novara": { email: "archivio@pec.comune.novara.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Padova (PD)
  "padova": { email: "protocollo.generale@pec.comune.padova.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Pagani (SA)
  "pagani": { email: "protocollo@comunedipagani.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Partinico (PA)
  "partinico": { email: "protocollo@pec.comune.partinico.pa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Paternò (CT)
  "paterno": { email: "sindaco@cert.comune.paterno.ct.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Perugia (PG)
  "perugia": { email: "comune.perugia@postacert.umbria.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Pescara (PE)
  "pescara": { email: "protocollo@pec.comune.pescara.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Pisa (PI)
  "pisa": { email: "comune.pisa@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Pistoia (PT)
  "pistoia": { email: "comune.pistoia@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Pomezia (RM)
  "pomezia": { email: "protocollo@pec.comune.pomezia.rm.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Pordenone (PN)
  "pordenone": { email: "comune.pordenone@certgov.fvg.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Portici (NA)
  "portici": { email: "protocollo@pec.comuneportici.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Potenza (PZ)
  "potenza": { email: "protocollo@pec.comune.potenza.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Pozzuoli (NA)
  "pozzuoli": { email: "info@pec2.comune.pozzuoli.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Prato (PO)
  "prato": { email: "comune.prato@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Quartu Sant'Elena (CA)
  "quartu-sant-elena": { email: "protocollo@pec.comune.quartusantelena.ca.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Ragusa (RG)
  "ragusa": { email: "protocollo@pec.comune.ragusa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Ravenna (RA)
  "ravenna": { email: "comune.ravenna@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Rende (CS)
  "rende": { email: "protocollo.rende@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Rho (MI)
  "rho": { email: "pec.protocollo.comunerho@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Rieti (RI)
  "rieti": { email: "protocollo@pec.comune.rieti.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Rimini (RN)
  "rimini": { email: "protocollo.generale@pec.comune.rimini.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Rivoli (TO)
  "rivoli": { email: "comune.rivoli.to@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Roma (RM)
  "roma": { email: "protocollo.gabinettosindaco@pec.comune.roma.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Salerno (SA)
  "salerno": { email: "protocollo@pec.comune.salerno.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // San Benedetto del Tronto (AP)
  "san-benedetto-del-tronto": { email: "protocollo@cert-sbt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // San Donà di Piave (VE)
  "san-dona-di-piave": { email: "protocollo.comune.sandonadipiave.ve@pecveneto.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // San Giorgio a Cremano (NA)
  "san-giorgio-a-cremano": { email: "protocollo.generale@cremano.telecompost.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // San Severo (FG)
  "san-severo": { email: "protocollo@pec.comune.san-severo.fg.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Sanremo (IM)
  "sanremo": { email: "comune.sanremo@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Santo Stefano di Magra (SP)
  "santo-stefano-di-magra": { email: "protocollo@pec.comune.santostefanodimagra.sp.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Sassari (SS)
  "sassari": { email: "urp@comune.sassari.it", tipo: "ordinaria", fonte: "sito del Comune" },
  // Sassuolo (MO)
  "sassuolo": { email: "comune.sassuolo@cert.comune.sassuolo.mo.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Scafati (SA)
  "scafati": { email: "protocollo.scafati@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Scandicci (FI)
  "scandicci": { email: "comune.scandicci@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Sciacca (AG)
  "sciacca": { email: "protocollo@comunedisciacca.telecompost.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Sesto Fiorentino (FI)
  "sesto-fiorentino": { email: "protocollo@pec.sesto-fiorentino.net", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Sesto San Giovanni (MI)
  "sesto-san-giovanni": { email: "comune.sestosg@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Settimo Torinese (TO)
  "settimo-torinese": { email: "settimo@cert.comune.settimo-torinese.to.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Siena (SI)
  "siena": { email: "comune.siena@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Siracusa (SR)
  "siracusa": { email: "protocollo@comune.siracusa.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Taranto (TA)
  "taranto": { email: "protocollo.comunetaranto@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Termoli (CB)
  "termoli": { email: "protocollo@pec.comune.termoli.cb.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Terni (TR)
  "terni": { email: "comune.terni@postacert.umbria.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Terracina (LT)
  "terracina": { email: "posta@pec.comune.terracina.lt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Torre Annunziata (NA)
  "torre-annunziata": { email: "protocollo@pec.comune.torreannunziata.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Torre del Greco (NA)
  "torre-del-greco": { email: "protocollo.torredelgreco@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Trani (BT)
  "trani": { email: "protocollo@cert.comune.trani.bt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Trapani (TP)
  "trapani": { email: "protocollo@pec.comune.trapani.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Udine (UD)
  "udine": { email: "protocollo@pec.comune.udine.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Varese (VA)
  "varese": { email: "protocollo@comune.varese.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Vasto (CH)
  "vasto": { email: "comune.vasto@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Venezia (VE)
  "venezia": { email: "protocolloinformatico@pec.comune.venezia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Vercelli (VC)
  "vercelli": { email: "protocollo@cert.comune.vercelli.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Vibo Valentia (VV)
  "vibo-valentia": { email: "protocollocomunevibo@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale)" },
  // Vittoria (RG)
  "vittoria": { email: "protocollogenerale@pec.comune.vittoria.rg.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA (19/10/2026)" },
  // Reggio Calabria (RC)
  "reggio-calabria": { email: "urp@reggiocal.it", tipo: "ordinaria", fonte: "indicato da Ilaria (URP)" },
  // Reggio Emilia (RE)
  "reggio-emilia": { email: "comune.informa@comune.re.it", tipo: "ordinaria", fonte: "indicato da Ilaria (URP)" },

  // ---- Aggiunti il 20/10/2026 dall'elenco dei domicili digitali degli enti (IPA, Indice dei domicili digitali delle PA)
  // Venaria Reale (TO)
  "venaria-reale": { email: "protocollovenariareale@pec.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Monfalcone (GO)
  "monfalcone": { email: "comune.monfalcone@certgov.fvg.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Piombino (LI)
  "piombino": { email: "comunepiombino@postacert.toscana.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Casale Monferrato (AL)
  "casale-monferrato": { email: "protocollo@pec.comune.casale-monferrato.al.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Mascalucia (CT)
  "mascalucia": { email: "ced@pec.comunemascalucia.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Mirano (VE)
  "mirano": { email: "protocollo.comune.mirano.ve@pecveneto.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Montebelluna (TV)
  "montebelluna": { email: "protocollo.comune.montebelluna.tv@pecveneto.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Santa Maria Capua Vetere (CE)
  "santa-maria-capua-vetere": { email: "protocollo@santamariacv.postecert.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Gubbio (PG)
  "gubbio": { email: "comune.gubbio@postacert.umbria.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Massafra (TA)
  "massafra": { email: "protocollo@pec.comunedimassafra.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Vittorio Veneto (TV)
  "vittorio-veneto": { email: "pec.comune.vittorioveneto.tv@pecveneto.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Avola (SR)
  "avola": { email: "servizisociali@pec.comune.avola.sr.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Ostuni (BR)
  "ostuni": { email: "protocollo@cert.comune.ostuni.br.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Rosignano Marittimo (LI)
  "rosignano-marittimo": { email: "comune.rosignanomarittimo@postacert.toscana.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Grottaglie (TA)
  "grottaglie": { email: "comunegrottaglie@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Bra (CN)
  "bra": { email: "comunebra@postecert.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Arzano (NA)
  "arzano": { email: "protocollo@pec.comune.arzano.na.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Sant'Antimo (NA)
  "sant-antimo": { email: "protocollo@pec.comune.santantimo.na.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Manduria (TA)
  "manduria": { email: "protocollo.manduria@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Castelvetrano (TP)
  "castelvetrano": { email: "protocollo@pec.comune.castelvetrano.tp.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // San Lazzaro di Savena (BO)
  "san-lazzaro-di-savena": { email: "comune.sanlazzaro@cert.provincia.bo.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Corsico (MI)
  "corsico": { email: "ufficioprotocollo@cert.comune.corsico.mi.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Fasano (BR)
  "fasano": { email: "comunefasano@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Nola (NA)
  "nola": { email: "comunenola@pec.comune.nola.na.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Riccione (RN)
  "riccione": { email: "comune.riccione@legalmail.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Adrano (CT)
  "adrano": { email: "protocollo@pec.comune.adrano.ct.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Pomigliano d'Arco (NA)
  "pomigliano-d-arco": { email: "comune.pomiglianodarco@legalmail.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Mugnano di Napoli (NA)
  "mugnano-di-napoli": { email: "protocollomugnano@pec.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Schio (VI)
  "schio": { email: "schio.vi@cert.ip-veneto.net", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Voghera (PV)
  "voghera": { email: "protocollo@cert.comune.voghera.pv.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Monreale (PA)
  "monreale": { email: "comune.monreale@pec.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Somma Vesuviana (NA)
  "somma-vesuviana": { email: "protocollo.generale@pec.sommavesuviana.info", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Cento (FE)
  "cento": { email: "comune.cento@cert.comune.cento.fe.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Melito di Napoli (NA)
  "melito-di-napoli": { email: "protocollogenerale@pec.comune.melito.na.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Castelfranco Emilia (MO)
  "castelfranco-emilia": { email: "comunecastelfrancoemilia@cert.comune.castelfranco-emilia.mo.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Canicattì (AG)
  "canicatti": { email: "protocollo@pec.comune.canicatti.ag.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Caivano (NA)
  "caivano": { email: "protocollo.caivano@asmepec.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Carini (PA)
  "carini": { email: "protocollo@pec.comune.carini.pa.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Limbiate (MB)
  "limbiate": { email: "comune.limbiate@pec.regione.lombardia.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
  // Formigine (MO)
  "formigine": { email: "comune.formigine@cert.comune.formigine.mo.it", tipo: "pec", fonte: "elenco IPA dei domicili digitali (20/10/2026)" },
};
