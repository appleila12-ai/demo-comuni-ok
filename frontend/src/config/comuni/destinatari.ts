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
// Per aggiungere i Comuni mancanti serve l'elenco ufficiale degli enti (PEC e email istituzionali).

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
};
