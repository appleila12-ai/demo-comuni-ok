import type { ComuneConfig, PuntoSupporto } from "../types";

// Voci usate sia in "Punti di supporto" sia nei passi del percorso (stesse fonti della scheda).
const POLO_DISABILITA: PuntoSupporto = {
  icon: "accessibility-outline",
  title: "Polo cittadino per le disabilità (Comune di Genova)",
  subtitle: "Colloquio gratuito di informazione e orientamento su servizi, prestazioni e agevolazioni, per persone con disabilità e caregiver. Matitone, Via di Francia 1, 6° piano · Tel. 010 5577444 · polodisabilita@comune.genova.it",
  action: { type: "tel", value: "0105577444" },
};

const DISTRETTO_8: PuntoSupporto = {
  icon: "medkit-outline",
  title: "Distretto 8 Ponente (Municipio VII: Pegli, Prà, Voltri)",
  subtitle: "Via Camozzini 15, Voltri · URP tel. 010 849 9674 / 9677 (lun–ven 8:30–12:30) · urp.piazzaodicini@asl3.liguria.it. Sportello unico: servizi sanitari, invalidità civile e Legge 104",
  action: { type: "tel", value: "0108499674" },
};

const PUA_ASL3: PuntoSupporto = {
  icon: "medkit-outline",
  title: "ASL3 · Punto Unico di Accesso (PUA) e sportelli dei Distretti",
  subtitle: "Il PUA accoglie le richieste sociosanitarie (cure domiciliari, valutazioni, Dopo di Noi). Cerca il Distretto del tuo Municipio qui sotto. Centralino ASL3: 010 84911",
  action: { type: "tel", value: "01084911" },
};

// Versioni per il percorso: stessi dati della scheda, senza rimandi a "qui sotto".
const ASCOLTO_PERCORSO: PuntoSupporto = {
  icon: "people-outline",
  title: "Ascolto e orientamento sociale (Segretariato Sociale)",
  subtitle:
    "Un assistente sociale ascolta persone e famiglie, gratuito. Si chiama il servizio del proprio Municipio: telefono martedì 9:00–12:30 e giovedì 14:00–16:30, colloqui su prenotazione · Numero unico del Comune 010 1010",
  action: { type: "web", value: "https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/servizio-di-ascolto-e-orientamento-sociale-segretariato" },
};

const PUA_PERCORSO: PuntoSupporto = {
  icon: "medkit-outline",
  title: "ASL3 · Punto Unico di Accesso (PUA)",
  subtitle:
    "Il PUA accoglie le richieste sociosanitarie (cure domiciliari, valutazioni, Dopo di Noi) · Centralino ASL3: 010 84911 · Lo sportello del tuo Distretto lo trovi in \"Aiuti e contatti\"",
  action: { type: "tel", value: "01084911" },
};

const ASL3_CENTRALINO: PuntoSupporto = {
  icon: "call-outline",
  title: "ASL3 Genovese · Centralino",
  subtitle: "Tel. 010 84911",
  action: { type: "tel", value: "01084911" },
};

// Comune di Genova (GE) — VERSIONE DIMOSTRATIVA (completata il 14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonte: pagina del Comune "Servizio di ascolto e orientamento sociale (Segretariato Sociale Professionale)", aggiornata il 20/03/2026 e controllata il 14/10/2026.
// Sono riportati sedi, telefoni, email e orari scritti nella pagina.
// Aggiornamento 25/10/2026: numero unico 010 1010 (sito del Comune), Area Disabilità ricontrollata,
// inserimenti lavorativi (UCIL), PUA e sportelli dei Distretti ASL3 8-13 (pagine ASL3 dei distretti),
// servizi del Comune per la disabilità in bonus.ts, associazioni della provincia in associazioni.ts.
// Aggiornamento 26/10/2026: testo del trasporto sociale con Mobility Bus e trasporto lavorativo/riabilitativo (pagine del Comune del 19/08/2026).
export const genova: ComuneConfig = {
  slug: "genova",
  tipo: "comune",
  nome: "Comune di Genova",
  nomeBreve: "Genova",
  delEnte: "del Comune di Genova",
  soggetto: "Il Comune",
  provincia: "GE",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "010 1010",
  email: "",
  pec: "",
  orari: "Numero unico del Comune 010 1010, numero verde URP 800 085 324. Ascolto per telefono: martedì 9:00–12:30 e giovedì 14:00–16:30 (si prenota al telefono). Sportelli senza prenotazione: orari diversi per ogni sede",
  sitoWeb: "https://www.comune.genova.it/tutti-gli-argomenti/questioni-sociali",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    {
      icon: "people-outline",
      title: "Ascolto e orientamento sociale (Segretariato Sociale)",
      subtitle: "Un assistente sociale ascolta persone e famiglie in difficoltà, anche temporanea, ed è gratuito. Si chiama il servizio del proprio Municipio: telefono martedì 9:00–12:30 e giovedì 14:00–16:30, colloqui su prenotazione. Qui sotto trovi i recapiti dei 9 Municipi",
      action: { type: "web", value: "https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/servizio-di-ascolto-e-orientamento-sociale-segretariato" },
    },
    POLO_DISABILITA,
    {
      icon: "people-outline",
      title: "Municipio I Centro Est",
      subtitle: "Via San Giorgio 1, int. 7 · Tel. 010 5574534 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio1servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105574534" },
    },
    {
      icon: "people-outline",
      title: "Municipio II Centro Ovest",
      subtitle: "Via San Pier d'Arena 34, 4° piano · Tel. 010 5578729 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio2servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105578729" },
    },
    {
      icon: "people-outline",
      title: "Municipio III Bassa Valbisagno",
      subtitle: "Piazza Manzoni 1, piano terra · Tel. 010 5579789 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio3servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105579789" },
    },
    {
      icon: "people-outline",
      title: "Municipio IV Media Valbisagno",
      subtitle: "Via Antonio Sertoli 11B · Tel. 010 5574400 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio4servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105574400" },
    },
    {
      icon: "people-outline",
      title: "Municipio V Valpolcevera",
      subtitle: "Passo Torbella 12 · Tel. 010 5575340 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio5servsociali@comune.genova.it",
      action: { type: "tel", value: "0105575340" },
    },
    {
      icon: "people-outline",
      title: "Municipio VI Medio Ponente",
      subtitle: "Via Filippo Emanuele Bottino 9 (ex Manifattura Tabacchi) · Tel. 010 5578231 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio6servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105578231" },
    },
    {
      icon: "people-outline",
      title: "Municipio VII Ponente (Pegli, Prà, Voltri)",
      subtitle: "Pegli: via Teodoro Secondo di Monferrato 3r, tel. 010 6982866 (ven 9:00–11:00). Prà: via Sapello 4r, tel. 010 6970729 (mer 9:00–11:00). Voltri: piazza Gaggero 2, 1° piano, tel. 010 5578865 (lun 9:00–11:00). Email: municipio7servizisociali@comune.genova.it",
      action: { type: "tel", value: "0106982866" },
    },
    {
      icon: "people-outline",
      title: "Municipio VIII Medio Levante",
      subtitle: "Salita Superiore della Noce 39B · Tel. 010 8994400 · senza prenotazione lun, mer, ven 9:00–12:00 · municipio8servizisociali@comune.genova.it",
      action: { type: "tel", value: "0108994400" },
    },
    {
      icon: "people-outline",
      title: "Municipio IX Levante",
      subtitle: "Via Giovanni Maggio 6 · Tel. 010 5574360 · senza prenotazione lun, mer, ven 9:00–11:00 · municipio9servizisociali@comune.genova.it",
      action: { type: "tel", value: "0105574360" },
    },
    {
      icon: "briefcase-outline",
      title: "Inserimenti lavorativi (UCIL)",
      subtitle: "Percorsi di avvicinamento al lavoro per persone fragili, su segnalazione dei servizi sociali. Via Fiasella 3, 1° piano · Tel. 010 5578464 (lun–gio 8:00–18:00, ven 8:00–13:00) · ucil@comune.genova.it",
      action: { type: "tel", value: "0105578464" },
    },
    PUA_ASL3,
    DISTRETTO_8,
    {
      icon: "medkit-outline",
      title: "Distretto 9 Medio Ponente (Municipi II e VI)",
      subtitle: "Casa della Comunità Fiumara (Sampierdarena) · PUA tel. 010 849 7066 / 7045 (lun–ven 8:00–14:00). Casa della Comunità di Sestri Ponente: reception tel. 010 849 7991",
      action: { type: "tel", value: "0108497066" },
    },
    {
      icon: "medkit-outline",
      title: "Distretto 10 Valpolcevera (Municipio V)",
      subtitle: "Segreteria: Via Bonghi 6, Bolzaneto · Tel. 010 849 9439 / 9486 / 9463 (lun–ven 8:30–12:30) · segreteria.distrettoss10@asl3.liguria.it. Casa della Comunità Valpolcevera: Via Pastorino 32",
      action: { type: "tel", value: "0108499439" },
    },
    {
      icon: "medkit-outline",
      title: "Distretto 11 Centro (Municipi I e VIII)",
      subtitle: "Poliambulatorio Via Assarotti 35 · Sportello Unico Distrettuale tel. 010 849 6099 · Cure domiciliari tel. 010 849 4531 / 4547",
      action: { type: "tel", value: "0108496099" },
    },
    {
      icon: "medkit-outline",
      title: "Distretto 12 Valbisagno (Municipi III e IV)",
      subtitle: "Casa della Comunità Via Archimede 30A (San Fruttuoso) e Casa della Comunità Struppa · PUA tel. 010 849 4087 / 4918 · Cure domiciliari tel. 010 849 4831 / 4825",
      action: { type: "tel", value: "0108494087" },
    },
    {
      icon: "medkit-outline",
      title: "Distretto 13 Levante (Municipio IX)",
      subtitle: "Casa della Comunità di Quarto, Largo Cattanei 4 · PUA tel. 010 849 6431 · Cure domiciliari tel. 010 849 6738 (lun–ven 8:30–12:30) · sportellounicodistrettuale.distretto13@asl3.liguria.it",
      action: { type: "tel", value: "0108496431" },
    },
  ],

  // Passi di "Come ottenere il riconoscimento" (1 = medico, 2 = valutazione di base,
  // 3 = verbale, 4 = valutazione multidimensionale, 5 = Progetto di Vita).
  // Solo voci già presenti nella scheda, con fonte. Passo 1 e 3 senza voci: nessun recapito verificato.
  percorsoTerritorio: {
    2: [POLO_DISABILITA, ASL3_CENTRALINO, DISTRETTO_8],
    4: [ASCOLTO_PERCORSO, POLO_DISABILITA, PUA_PERCORSO],
    5: [POLO_DISABILITA, ASCOLTO_PERCORSO],
  },

  trasporto:
    "Il Comune di Genova ha il Mobility Bus per il tempo libero (prenotazioni AMT: numero verde 800 085 302) e il trasporto per andare al lavoro o in riabilitazione: i requisiti e come chiederli sono nella sezione Bonus. Per informazioni: U.O. Area Disabilità, tel. 010 5577444, polodisabilita@comune.genova.it. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL3 Genovese · Esenzioni ticket",
    url: "https://www.asl3.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};
