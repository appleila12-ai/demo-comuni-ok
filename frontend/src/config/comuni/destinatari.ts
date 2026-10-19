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
// Le PEC sono confrontate con l'elenco ufficiale IPA "domicili digitali" (19/10/2026): 160 su 165 coincidono.
// Gli indirizzi di tipo "pec" sono PEC di protocollo: possono rifiutare mail da caselle non certificate.

export type Destinatario = {
  email: string;
  tipo: "ordinaria" | "pec";
  fonte: string;
};

export const DESTINATARI: Record<string, Destinatario> = {
  // Ascoli Piceno (AP)
  "ascoli-piceno": { email: "rtd@comune.ap.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Benevento (BN)
  "benevento": { email: "transizione.digitale@comune.benevento.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Capannori (LU)
  "capannori": { email: "rtd@comune.capannori.lu.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
  // Castelnuovo Magra (SP)
  "castelnuovo-magra": { email: "segretariocomunale@comune.castelnuovomagra.sp.it", tipo: "ordinaria", fonte: "elenco Excel dei Comuni" },
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
  "acerra": { email: "protocollo@pec.comune.acerra.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Acireale (CT)
  "acireale": { email: "protocollo.comune.acireale@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Afragola (NA)
  "afragola": { email: "protocollo@pec.comune.afragola.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Agrigento (AG)
  "agrigento": { email: "servizio.protocollo@pec.comune.agrigento.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Alcamo (TP)
  "alcamo": { email: "comunedialcamo.protocollo@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Alessandria (AL)
  "alessandria": { email: "protocollo@pec.comune.alessandria.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Alghero (SS)
  "alghero": { email: "protocollo@pec.comune.alghero.ss.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Altamura (BA)
  "altamura": { email: "protocollo.generale@pec.comune.altamura.ba.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Ameglia (SP)
  "ameglia": { email: "protocollo@pec.comune.ameglia.sp.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Andria (BT)
  "andria": { email: "protocollo@cert.comune.andria.bt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Angri (SA)
  "angri": { email: "comune.angri@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Anzio (RM)
  "anzio": { email: "protocollo.comuneanzio@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Aosta (AO)
  "aosta": { email: "protocollo@pec.comune.aosta.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Aprilia (LT)
  "aprilia": { email: "protocollogenerale@pec.comune.aprilia.lt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Ardea (RM)
  "ardea": { email: "uff.protocollo@pec.comune.ardea.rm.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Augusta (SR)
  "augusta": { email: "protocollocomunediaugusta@pointpec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Avellino (AV)
  "avellino": { email: "ufficioprotocollo@cert.comune.avellino.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Aversa (CE)
  "aversa": { email: "protocollo@pec.comune.aversa.ce.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Avezzano (AQ)
  "avezzano": { email: "comune.avezzano.aq@postecert.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Bagheria (PA)
  "bagheria": { email: "protocollo@pec.comune.bagheria.pa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Barcellona Pozzo di Gotto (ME)
  "barcellona-pozzo-di-gotto": { email: "comunebarcellonapdg@postecert.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Bari (BA)
  "bari": { email: "archiviogenerale.comunebari@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Barletta (BT)
  "barletta": { email: "protocollo@cert.comune.barletta.bt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Belluno (BL)
  "belluno": { email: "belluno.bl@cert.ip-veneto.net", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Biella (BI)
  "biella": { email: "protocollo@cert.comune.biella.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Bisceglie (BT)
  "bisceglie": { email: "protocollogenerale@cert.comune.bisceglie.bt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Bitonto (BA)
  "bitonto": { email: "protocollo.comunebitonto@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Bologna (BO)
  "bologna": { email: "ProtocolloGenerale@pec.comune.bologna.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Bolzano (BZ)
  "bolzano": { email: "bz@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Brescia (BS)
  "brescia": { email: "protocollogenerale@pec.comune.brescia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Busto Arsizio (VA)
  "busto-arsizio": { email: "protocollo@comune.bustoarsizio.va.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Cagliari (CA)
  "cagliari": { email: "protocollogenerale@comune.cagliari.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Caltagirone (CT)
  "caltagirone": { email: "protocollo.caltagirone@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Caltanissetta (CL)
  "caltanissetta": { email: "protocollo@pec.comune.caltanissetta.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Campi Bisenzio (FI)
  "campi-bisenzio": { email: "comune.campi-bisenzio@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Campobasso (CB)
  "campobasso": { email: "comune.campobasso.protocollo@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Cantù (CO)
  "cantu": { email: "comune.cantu@pec.regione.lombardia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Carbonia (SU)
  "carbonia": { email: "comcarbonia@pec.comcarbonia.org", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Casalnuovo di Napoli (NA)
  "casalnuovo-di-napoli": { email: "protocollogen.casalnuovo.na@pec.actalis.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Cascina (PI)
  "cascina": { email: "protocollo@pec.comune.cascina.pi.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Caserta (CE)
  "caserta": { email: "postacertificata@pec.comune.caserta.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Casoria (NA)
  "casoria": { email: "protocollo@pec.comune.casoria.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Castellammare di Stabia (NA)
  "castellammare-di-stabia": { email: "protocollo.stabia@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Catania (CT)
  "catania": { email: "comune.catania@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Catanzaro (CZ)
  "catanzaro": { email: "ufficio.protocollo@certificata.comune.catanzaro.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Cava de' Tirreni (SA)
  "cava-de-tirreni": { email: "amministrazione@pec.comune.cavadetirreni.sa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Cerignola (FG)
  "cerignola": { email: "protocollo.comune.cerignola@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Cernusco sul Naviglio (MI)
  "cernusco-sul-naviglio": { email: "comune.cernuscosulnaviglio@pec.regione.lombardia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Chieti (CH)
  "chieti": { email: "protocollo@pec.comune.chieti.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Chioggia (VE)
  "chioggia": { email: "chioggia@pec.chioggia.org", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Civita Castellana (VT)
  "civita-castellana": { email: "comune.civitacastellana@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Civitanova Marche (MC)
  "civitanova-marche": { email: "comune.civitanovamarche@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Collegno (TO)
  "collegno": { email: "posta@cert.comune.collegno.to.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Corato (BA)
  "corato": { email: "protocollo@pec.comune.corato.ba.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Corigliano-Rossano (CS)
  "corigliano-rossano": { email: "protocollo.coriglianorossano@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Cosenza (CS)
  "cosenza": { email: "protocollo@pec.comune.cosenza.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Cremona (CR)
  "cremona": { email: "protocollo@comunedicremona.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Crotone (KR)
  "crotone": { email: "protocollocomune@pec.comune.crotone.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Eboli (SA)
  "eboli": { email: "protocollo.eboli@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Enna (EN)
  "enna": { email: "protocollo@pec.comune.enna.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Ercolano (NA)
  "ercolano": { email: "protocollo.ercolano@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Ferrara (FE)
  "ferrara": { email: "comune.ferrara@cert.comune.fe.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Foggia (FG)
  "foggia": { email: "protocollo.generale@cert.comune.foggia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Foligno (PG)
  "foligno": { email: "comune.foligno@postacert.umbria.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Fondi (LT)
  "fondi": { email: "comune.fondi@pecaziendale.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Forlì (FC)
  "forli": { email: "comune.forli@pec.comune.forli.fc.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Formia (LT)
  "formia": { email: "protocollo@pec.cittadiformia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Francavilla Fontana (BR)
  "francavilla-fontana": { email: "comune.francavillafontana@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Frattamaggiore (NA)
  "frattamaggiore": { email: "protocollo.frattamaggiore@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Frosinone (FR)
  "frosinone": { email: "pec@pec.comune.frosinone.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Gallarate (VA)
  "gallarate": { email: "protocollo@pec.comune.gallarate.va.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Gela (CL)
  "gela": { email: "comune.gela@pec.comune.gela.cl.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Genova (GE)
  "genova": { email: "comunegenova@postemailcertificata.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Giugliano in Campania (NA)
  "giugliano-in-campania": { email: "protocollo@pec.comune.giugliano.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Gorizia (GO)
  "gorizia": { email: "comune.gorizia@certgov.fvg.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Gravina in Puglia (BA)
  "gravina-in-puglia": { email: "protocollo.gravinainpuglia@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Grosseto (GR)
  "grosseto": { email: "comune.grosseto@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Imperia (IM)
  "imperia": { email: "protocollo@pec.comune.imperia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Ladispoli (RM)
  "ladispoli": { email: "comunediladispoli@certificazioneposta.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Lamezia Terme (CZ)
  "lamezia-terme": { email: "protocollo@pec.comunelameziaterme.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Lanciano (CH)
  "lanciano": { email: "comune.lanciano.chieti@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Latina (LT)
  "latina": { email: "protocollo@pec.comune.latina.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Lecce (LE)
  "lecce": { email: "protocollo@pec.comune.lecce.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Licata (AG)
  "licata": { email: "protocollo@cert.comune.licata.ag.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Livorno (LI)
  "livorno": { email: "comune.livorno@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Lucca (LU)
  "lucca": { email: "comune.lucca@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Lucera (FG)
  "lucera": { email: "comune.lucera@anutelpec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Luni (SP)
  "luni": { email: "segreteria@pec.comune.luni.sp.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Macerata (MC)
  "macerata": { email: "comune.macerata@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Marano di Napoli (NA)
  "marano-di-napoli": { email: "protocollo@pec.comune.marano.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Marino (RM)
  "marino": { email: "protocollo@pec.comune.marino.rm.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Massa (MS)
  "massa": { email: "comune.massa@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Matera (MT)
  "matera": { email: "comune.matera@cert.ruparbasilicata.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Mazara del Vallo (TP)
  "mazara-del-vallo": { email: "protocollo@pec.comune.mazaradelvallo.tp.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Merano (BZ)
  "merano": { email: "meran.merano@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Messina (ME)
  "messina": { email: "protocollo@pec.comune.messina.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Milano (MI)
  "milano": { email: "protocollo@postacert.comune.milano.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Milazzo (ME)
  "milazzo": { email: "protocollogenerale@pec.comune.milazzo.me.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Misterbianco (CT)
  "misterbianco": { email: "protocollo.misterbianco@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Molfetta (BA)
  "molfetta": { email: "protocollo@cert.comune.molfetta.ba.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Moncalieri (TO)
  "moncalieri": { email: "protocollo@cert.comune.moncalieri.to.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Monterotondo (RM)
  "monterotondo": { email: "comune.monterotondo.rm@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Montesilvano (PE)
  "montesilvano": { email: "protocollo@comunemontesilvano.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Monza (MB)
  "monza": { email: "monza@pec.comune.monza.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Napoli (NA)
  "napoli": { email: "protocollo@pec.comune.napoli.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Nardò (LE)
  "nardo": { email: "protocollo@pecnardo.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Nettuno (RM)
  "nettuno": { email: "protocollogenerale@pec.comune.nettuno.roma.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Nichelino (TO)
  "nichelino": { email: "protocollo@cert.comune.nichelino.to.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Nocera Inferiore (SA)
  "nocera-inferiore": { email: "protocollo@pec.comune.nocera-inferiore.sa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Novara (NO)
  "novara": { email: "archivio@pec.comune.novara.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Padova (PD)
  "padova": { email: "protocollo.generale@pec.comune.padova.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Pagani (SA)
  "pagani": { email: "protocollo@comunedipagani.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Partinico (PA)
  "partinico": { email: "protocollo@pec.comune.partinico.pa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Paternò (CT)
  "paterno": { email: "sindaco@cert.comune.paterno.ct.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Perugia (PG)
  "perugia": { email: "comune.perugia@postacert.umbria.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Pescara (PE)
  "pescara": { email: "protocollo@pec.comune.pescara.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Pisa (PI)
  "pisa": { email: "comune.pisa@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Pistoia (PT)
  "pistoia": { email: "comune.pistoia@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Pomezia (RM)
  "pomezia": { email: "protocollo@pec.comune.pomezia.rm.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Pordenone (PN)
  "pordenone": { email: "comune.pordenone@certgov.fvg.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Portici (NA)
  "portici": { email: "protocollo@pec.comuneportici.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Potenza (PZ)
  "potenza": { email: "protocollo@pec.comune.potenza.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Pozzuoli (NA)
  "pozzuoli": { email: "info@pec2.comune.pozzuoli.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Prato (PO)
  "prato": { email: "comune.prato@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Quartu Sant'Elena (CA)
  "quartu-sant-elena": { email: "protocollo@pec.comune.quartusantelena.ca.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Ragusa (RG)
  "ragusa": { email: "protocollo@pec.comune.ragusa.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Ravenna (RA)
  "ravenna": { email: "comune.ravenna@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Rende (CS)
  "rende": { email: "protocollo.rende@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Rho (MI)
  "rho": { email: "pec.protocollo.comunerho@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Rieti (RI)
  "rieti": { email: "protocollo@pec.comune.rieti.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Rimini (RN)
  "rimini": { email: "protocollo.generale@pec.comune.rimini.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Rivoli (TO)
  "rivoli": { email: "comune.rivoli.to@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Roma (RM)
  "roma": { email: "protocollo.gabinettosindaco@pec.comune.roma.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Salerno (SA)
  "salerno": { email: "protocollo@pec.comune.salerno.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // San Benedetto del Tronto (AP)
  "san-benedetto-del-tronto": { email: "protocollo@cert-sbt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // San Donà di Piave (VE)
  "san-dona-di-piave": { email: "protocollo.comune.sandonadipiave.ve@pecveneto.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // San Giorgio a Cremano (NA)
  "san-giorgio-a-cremano": { email: "protocollo.generale@cremano.telecompost.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // San Severo (FG)
  "san-severo": { email: "protocollo@pec.comune.san-severo.fg.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Sanremo (IM)
  "sanremo": { email: "comune.sanremo@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Santo Stefano di Magra (SP)
  "santo-stefano-di-magra": { email: "protocollo@pec.comune.santostefanodimagra.sp.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Sassari (SS)
  "sassari": { email: "urp@comune.sassari.it", tipo: "ordinaria", fonte: "sito del Comune" },
  // Sassuolo (MO)
  "sassuolo": { email: "comune.sassuolo@cert.comune.sassuolo.mo.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Scafati (SA)
  "scafati": { email: "protocollo.scafati@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Scandicci (FI)
  "scandicci": { email: "comune.scandicci@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Sciacca (AG)
  "sciacca": { email: "protocollo@comunedisciacca.telecompost.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Sesto Fiorentino (FI)
  "sesto-fiorentino": { email: "protocollo@pec.sesto-fiorentino.net", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Sesto San Giovanni (MI)
  "sesto-san-giovanni": { email: "comune.sestosg@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Settimo Torinese (TO)
  "settimo-torinese": { email: "settimo@cert.comune.settimo-torinese.to.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Siena (SI)
  "siena": { email: "comune.siena@postacert.toscana.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Siracusa (SR)
  "siracusa": { email: "protocollo@comune.siracusa.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Taranto (TA)
  "taranto": { email: "protocollo.comunetaranto@pec.rupar.puglia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Termoli (CB)
  "termoli": { email: "protocollo@pec.comune.termoli.cb.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Terni (TR)
  "terni": { email: "comune.terni@postacert.umbria.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Terracina (LT)
  "terracina": { email: "posta@pec.comune.terracina.lt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Torre Annunziata (NA)
  "torre-annunziata": { email: "protocollo@pec.comune.torreannunziata.na.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Torre del Greco (NA)
  "torre-del-greco": { email: "protocollo.torredelgreco@asmepec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Trani (BT)
  "trani": { email: "protocollo@cert.comune.trani.bt.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Trapani (TP)
  "trapani": { email: "protocollo@pec.comune.trapani.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Udine (UD)
  "udine": { email: "protocollo@pec.comune.udine.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Varese (VA)
  "varese": { email: "protocollo@comune.varese.legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Vasto (CH)
  "vasto": { email: "comune.vasto@legalmail.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Venezia (VE)
  "venezia": { email: "protocolloinformatico@pec.comune.venezia.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Vercelli (VC)
  "vercelli": { email: "protocollo@cert.comune.vercelli.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Vibo Valentia (VV)
  "vibo-valentia": { email: "protocollocomunevibo@pec.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Vittoria (RG)
  "vittoria": { email: "protocollogenerale@pec.comune.vittoria.rg.it", tipo: "pec", fonte: "elenco PEC degli enti (protocollo generale), confermato da IPA" },
  // Reggio Calabria (RC)
  "reggio-calabria": { email: "urp@reggiocal.it", tipo: "ordinaria", fonte: "indicato da Ilaria (URP)" },
  // Reggio Emilia (RE)
  "reggio-emilia": { email: "comune.informa@comune.re.it", tipo: "ordinaria", fonte: "indicato da Ilaria (URP)" },
};
