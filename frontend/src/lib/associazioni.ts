// Associazioni del territorio che si occupano di disabilità: volontariato e famiglie,
// e (a parte) sport. Si mostrano quelle della provincia del Comune attivo, prima
// quelle del Comune stesso. Dati raccolti a settembre 2026 da siti delle associazioni,
// del Comune della Spezia (Distretto 18), del CIP, di SportAbility Liguria e da
// articoli locali recenti.
// Aggiornamento 18/10/2026: sport per Toscana, Emilia-Romagna, Veneto e Abruzzo
// (recapiti dal sito del CIP); associazioni per Firenze, Sassuolo e Avezzano.
// Aggiornamento 19/10/2026: associazioni e sport per Brescia, Modena e Monza
// (elenco sedi di Anffas e elenchi dei siti dei Comuni).
// Aggiornamento 19/10/2026: sport per la Sicilia; associazioni per Catania e provincia di Reggio Emilia
// (elenco sezioni locali del sito nazionale Anffas, email del programma Special Olympics dalla rete ufficiale).
// Aggiornamento 20/10/2026: Anffas Sardegna (Cagliari) dall'elenco del sito nazionale.
// Aggiornamento 21/10/2026: raggio di 30 km (coordinate dei municipi da opendatasicilia/comuni-italiani, basato su ISTAT e IndicePA).
// Aggiornamento 21/10/2026: Ca.Te.Ri.Na (Sarzana), recapiti forniti il 21/10/2026.
// Aggiornamento 26/10/2026: spiagge inclusive di Genova, 8 spiagge, recapiti e prenotazione dalla pagina del Comune (agg. 23/06/2026).
// Aggiornamento 27/10/2026: elenco libere forme associative di Arezzo.
// Aggiornamento 27/10/2026: Albo comunale delle associazioni della disabilità di Pisa.
// Aggiornamento 25/10/2026: provincia di Genova (Anffas, ANGSA, UICI, Chiossone, AISM, UILDM, ENS, ANGLAT, Asperger,
// e dall'elenco ASL3 'Comitato Misto Consultivo - Associazioni' agg. 18/06/2025: Consulta disabilità, Alzheimer Liguria,
// ALFAPP, Parkinson, tutela del malato, AVO).

import { comune } from "@/src/config/comune";
import COORDINATE from "@/src/content/coordinate-comuni.json";

export type Associazione = {
  nome: string;
  cosa: string;
  dove?: string;
  telefono?: string;
  email?: string;
  sito?: string;
  /** numero WhatsApp (si apre la chat) */
  whatsapp?: string;
  /** logo dell'associazione (percorso dentro public/, es. "/associazioni/nome.png"), solo se l'associazione ha dato l'ok */
  logo?: string;
  /** slug dei Comuni in cui l'associazione è di casa (compare per prima lì) */
  comuni?: string[];
  /** sigle delle province in cui è di casa (compare come "Vicino a te" in tutti i loro Comuni) */
  province?: string[];
  verificare?: boolean;
};

type Elenco = { volontariato: Associazione[]; sport: Associazione[] };

// ---------------------------------------------------------------- per provincia
const PER_PROVINCIA: Record<string, Elenco> = {
  SP: {
    volontariato: [
      {
        nome: "Anffas La Spezia",
        cosa: "Famiglie di persone con disabilità intellettiva e relazionale. Centro socio educativo con laboratori pomeridiani e trasporto.",
        dove: "Viale Amendola 92, La Spezia",
        telefono: "0187 734671",
        sito: "https://www.facebook.com/anffasonluslaspezia/",
      },
      {
        nome: "Pubblica Assistenza Lerici",
        cosa: "Soccorso sanitario e trasporti assistiti; servizi sociali per anziani e persone con disabilità.",
        dove: "Via Matteotti 9, Lerici",
        telefono: "0187 967136",
        email: "info@palerici.it",
        sito: "https://www.palerici.it",
        comuni: ["lerici"],
      },
      {
        nome: "ANGSA La Spezia",
        cosa: "Genitori di persone con autismo: tutela dei diritti, sostegno alle famiglie e attività.",
        dove: "Via Anita Garibaldi 2, La Spezia",
        telefono: "349 3564409",
        email: "info@angsalaspezia.it",
        sito: "https://www.angsalaspezia.it",
      },
      {
        nome: "AGAPO",
        cosa: "Percorsi di autonomia e lavoro per ragazzi con autismo e disabilità intellettiva (campus agricolo, laboratorio di ceramica, bar).",
        dove: "Via Vittorio Veneto 28, La Spezia",
        telefono: "335 1235885",
        email: "agapoonlus@gmail.com",
        sito: "https://www.officineagapo.com/",
      },
      {
        nome: "Fondazione Il Domani dell'Autismo",
        cosa: "Lavoro e vita autonoma (\"Dopo di noi\") per giovani con autismo, con la cooperativa I Ragazzi della Luna.",
        dove: "Via Fontevivo 127/a, La Spezia",
        telefono: "351 557 4704",
        sito: "https://ildomanidellautismo.it",
      },
      {
        nome: "Insieme per i diritti dei nostri figli",
        cosa: "Famiglie della Val di Magra che si aiutano e tutelano i diritti dei figli con disabilità (scuola, neuropsichiatria).",
        dove: "Val di Magra (Sarzana, Castelnuovo Magra)",
        email: "insiemeperinostrifigli2016@gmail.com",
        comuni: ["sarzana", "arcola"],
      },
      {
        nome: "UICI – Ciechi e ipovedenti",
        cosa: "Tutela e servizi per persone cieche e ipovedenti.",
        dove: "Via Francesco Crispi 103, La Spezia",
        telefono: "0187 509044",
        email: "uicsp@uiciechi.it",
        sito: "https://www.uiciechi.it/liguria/sp/spezia.html",
      },
      {
        nome: "AISM – Sclerosi multipla",
        cosa: "Sostegno alle persone con sclerosi multipla e alle famiglie, con colloqui con l'assistente sociale su appuntamento.",
        dove: "Via Anita Garibaldi 12, La Spezia",
        telefono: "338 6660842",
        email: "aismlaspezia@aism.it",
        sito: "https://www.aism.it/struttura/sezione_provinciale_aism_la_spezia",
      },
    ],
    sport: [
      {
        nome: "Polisportiva Spezzina",
        cosa: "Atletica, bocce, calcio, canottaggio, ginnastica, nuoto e sport invernali per persone con disabilità intellettiva (FISDIR e Special Olympics).",
        dove: "Via Forlì 13, La Spezia",
        telefono: "0187 734671",
        email: "anffasspezia@libero.it",
      },
      // Recapiti forniti da Ilaria il 21/10/2026 (non mostrare la fonte agli utenti).
      {
        nome: "Ca.Te.Ri.Na",
        cosa: "Ogni voce conta. Laboratori di canto terapia individuali e di gruppo e coro inclusivo aperto a tutti, con il metodo Canto Naturale®. Referente: Jenny Fumanti.",
        dove: "Sarzana",
        telefono: "334 1582665",
        email: "associazionecaterina.sp@gmail.com",
        comuni: ["sarzana"],
      },
      {
        nome: "UISP Val di Magra – \"Nessuno Escluso\"",
        cosa: "Squadra Special Olympics di adulti con disabilità: nuoto, equitazione, bowling, pallavolo, calcetto.",
        dove: "Val di Magra · sede UISP: Via XXIV Maggio 351, La Spezia",
        telefono: "0187 501056",
        email: "laspezia@uisp.it",
        sito: "https://www.uisp.it/laspezia/pagina/nessuno-escluso/0",
        comuni: ["sarzana", "arcola"],
      },
      {
        nome: "Equitando nella Terra di Nike",
        cosa: "Equitazione sociale: attività con i cavalli anche per persone con disabilità.",
        dove: "Loc. Battifollo, Arcola",
        telefono: "333 2723586",
        sito: "https://www.equitandonellaterradinike.it",
        comuni: ["arcola", "sarzana"],
      },
      {
        nome: "Canottieri Velocior 1883",
        cosa: "Canottaggio con un settore Special Olympics per atleti con disabilità intellettiva.",
        dove: "La Spezia",
        sito: "http://www.velocior1883.it/",
        comuni: ["la-spezia", "portovenere"],
      },
      {
        nome: "Panathlon Club La Spezia",
        cosa: "Club che promuove i valori dello sport. Ha un accordo con il Comune della Spezia per l'inclusione sportiva delle persone con disabilità e affianca Special Olympics e Polisportiva Spezzina. Non è una società dove allenarsi, ma può orientarti.",
        dove: "La Spezia",
        sito: "https://www.panathlon-international.org/index.php/es/panathlon/i-clubs/85-coordinate-mappa/759-la-spezia",
      },
    ],
  },
};

// ---------------------------------------------------------------- per regione (sport)
const SPORT_REGIONE: Record<string, Associazione[]> = {
  Liguria: [
    {
      nome: "CIP – Comitato Paralimpico Liguria",
      cosa: "Coordina lo sport paralimpico in Liguria e ti indica la società più vicina. Per la provincia della Spezia: laspezia@comitatoparalimpico.it.",
      dove: "Via Padre Santo 1, Genova",
      telefono: "010 542558",
      email: "liguria@comitatoparalimpico.it",
      sito: "https://www.comitatoparalimpico.it/organizzazione/territorio/comitati-regionali/liguria.html",
    },
    {
      nome: "Special Olympics – Team Liguria",
      cosa: "Allenamenti e gare per persone con disabilità intellettiva, a ogni livello.",
      email: "liguria@specialolympics.it",
      sito: "https://specialolympics.it/la-rete/",
    },
    {
      nome: "SportAbility Liguria",
      cosa: "Portale con l'elenco delle società sportive liguri che accolgono persone con disabilità.",
      sito: "https://sportabilityliguria.it",
    },
  ],
  Lazio: [
    {
      nome: "CIP – Comitato Paralimpico Lazio",
      cosa: "Coordina lo sport paralimpico nel Lazio, con delegati per Roma, Viterbo, Frosinone, Latina e Rieti, e ti indica la società sportiva più vicina.",
      dove: "Piazzale degli Archivi 41, 00144 Roma",
      telefono: "06 83559010",
      email: "lazio@comitatoparalimpico.it",
      sito: "https://www.comitatoparalimpico.it/organizzazione/territorio/comitati-regionali/lazio.html",
    },
    {
      nome: "Special Olympics – Team Lazio",
      cosa: "Allenamenti e gare per persone con disabilità intellettiva, senza limiti di età. Scrivi alla Direttrice Regionale: ti indica il Team più vicino a casa tua.",
      email: "lazio@specialolympics.it",
      sito: "https://www.specialolympics.it",
    },
  ],
  Lombardia: [
    {
      nome: "CIP – Comitato Paralimpico Lombardia",
      cosa: "Coordina lo sport paralimpico in Lombardia: tutte le discipline riconosciute, per persone con disabilità fisica, sensoriale e intellettivo-relazionale. Ti indica la società sportiva più vicina.",
      dove: "Via Piranesi 46-48, 20137 Milano",
      telefono: "02 70120595",
      email: "lombardia@comitatoparalimpico.it",
      sito: "https://www.comitatoparalimpico.it/organizzazione/territorio/comitati-regionali/lombardia.html",
    },
    {
      nome: "Special Olympics – Team Lombardia",
      cosa: "Allenamenti e gare per persone con disabilità intellettiva, senza limiti di età. Per la provincia di Milano scrivi al Direttore Regionale, che indica il Team più vicino.",
      email: "lombardia@specialolympics.it",
      sito: "https://www.specialolympics.it",
    },
  ],
  // Toscana, Emilia-Romagna, Veneto e Abruzzo: recapiti dei Comitati regionali
  // presi dal sito del Comitato Italiano Paralimpico il 18/10/2026.
  Toscana: [
    {
      nome: "CIP – Comitato Paralimpico Toscana",
      cosa: "Coordina lo sport paralimpico in Toscana: tutte le discipline riconosciute, per persone con disabilità fisica, sensoriale e intellettivo-relazionale. Ti indica la società sportiva più vicina.",
      dove: "Via di Ripoli 207/V, 50126 Firenze",
      telefono: "055 661576",
      email: "toscana@comitatoparalimpico.it",
      sito: "https://www.comitatoparalimpico.it/organizzazione/territorio/comitati-regionali/toscana.html",
    },
    {
      nome: "Special Olympics – Team Toscana",
      cosa: "Allenamenti e gare per persone con disabilità intellettiva, senza limiti di età. Scrivi al referente regionale: ti indica il Team più vicino a casa tua.",
      email: "toscana@specialolympics.it",
      sito: "https://specialolympics.it/la-rete/",
    },
  ],
  Sicilia: [
    {
      nome: "Special Olympics – Team Sicilia",
      cosa: "Allenamenti e gare per persone con disabilità intellettiva, senza limiti di età. Scrivi al referente regionale: ti indica il Team più vicino a casa tua.",
      email: "sicilia@specialolympics.it",
      sito: "https://specialolympics.it/la-rete/",
    },
  ],
  "Emilia-Romagna": [
    {
      nome: "CIP – Comitato Paralimpico Emilia-Romagna",
      cosa: "Coordina lo sport paralimpico in Emilia-Romagna, con delegati in ogni provincia, e ti indica la società sportiva più vicina.",
      dove: "Via Trattati Comunitari Europei 7, 40127 Bologna",
      telefono: "051 9913160",
      email: "emiliaromagna@comitatoparalimpico.it",
      sito: "https://www.comitatoparalimpico.it/organizzazione/territorio/comitati-regionali/emilia-romagna.html",
    },
    {
      nome: "Special Olympics – Team Emilia-Romagna",
      cosa: "Allenamenti e gare per persone con disabilità intellettiva, senza limiti di età. Scrivi al referente regionale: ti indica il Team più vicino a casa tua.",
      email: "emiliaromagna@specialolympics.it",
      sito: "https://specialolympics.it/la-rete/",
    },
  ],
  Veneto: [
    {
      nome: "CIP – Comitato Paralimpico Veneto",
      cosa: "Coordina lo sport paralimpico in Veneto: tutte le discipline riconosciute, per persone con disabilità fisica, sensoriale e intellettivo-relazionale. Ti indica la società sportiva più vicina.",
      dove: "Via Nereo Rocco, presso lo Stadio Euganeo, 35136 Padova",
      telefono: "049 8658485",
      email: "veneto@comitatoparalimpico.it",
      sito: "https://www.comitatoparalimpico.it/organizzazione/territorio/comitati-regionali/veneto.html",
    },
    {
      nome: "Special Olympics – Team Veneto",
      cosa: "Allenamenti e gare per persone con disabilità intellettiva, senza limiti di età. Scrivi al referente regionale: ti indica il Team più vicino a casa tua.",
      email: "veneto@specialolympics.it",
      sito: "https://specialolympics.it/la-rete/",
    },
  ],
  Abruzzo: [
    {
      nome: "CIP – Comitato Paralimpico Abruzzo",
      cosa: "Coordina lo sport paralimpico in Abruzzo e ti indica la società sportiva più vicina a casa tua.",
      dove: "Via Botticelli 28, 65124 Pescara",
      email: "abruzzo@comitatoparalimpico.it",
      sito: "https://www.comitatoparalimpico.it/organizzazione/territorio/comitati-regionali/abruzzo.html",
    },
    {
      nome: "Special Olympics – Team Abruzzo",
      cosa: "Allenamenti e gare per persone con disabilità intellettiva, senza limiti di età. Scrivi al referente regionale: ti indica il Team più vicino a casa tua.",
      email: "abruzzo@specialolympics.it",
      sito: "https://specialolympics.it/la-rete/",
    },
  ],
};

// ---------------------------------------------------------------- validi ovunque
const SPORT_NAZIONALI: Associazione[] = [
  {
    nome: "Comitato Italiano Paralimpico (CIP)",
    cosa: "Sul sito trovi il comitato della tua regione, che ti indica le società sportive vicine.",
    sito: "https://www.comitatoparalimpico.it",
  },
  {
    nome: "Special Olympics Italia",
    cosa: "Sport per persone con disabilità intellettiva, con squadre in tutta Italia.",
    sito: "https://specialolympics.it",
  },
];

// APS Gazebo: nelle province di Lecco, Piacenza e Viterbo (tutti i Comuni)
const GAZEBO: Associazione = {
  nome: "APS Gazebo Sanità e Beni Comuni",
  cosa: "Consulenza civica e legale su diritti, sanità e invalidità civile.",
  dove: "Via Don Lazzaro Troiani 10, 22030 Lasnigo (CO)",
  email: "info@sanitabenicomuni.it",
  sito: "https://www.sanitabenicomuni.it",
  province: ["LC", "PC", "VT"],
};
for (const pr of GAZEBO.province!) {
  PER_PROVINCIA[pr] = PER_PROVINCIA[pr] ?? { volontariato: [], sport: [] };
  PER_PROVINCIA[pr].volontariato.unshift(GAZEBO);
}

// Genitori Tosti: sede a Verona, in tutti i Comuni della provincia
const GENITORI_TOSTI: Associazione = {
  nome: "Genitori Tosti in Tutti i Posti APS",
  cosa: "Associazione di genitori con figli con disabilità: tutela dei diritti, inclusione scolastica, caregiver familiari e accessibilità.",
  dove: "Via Fincato 41/b, 37131 Verona",
  telefono: "339 2118094",
  email: "genitoritosti@yahoo.it",
  sito: "https://www.genitoritosti.it",
  province: ["VR"],
};
for (const pr of GENITORI_TOSTI.province!) {
  PER_PROVINCIA[pr] = PER_PROVINCIA[pr] ?? { volontariato: [], sport: [] };
  PER_PROVINCIA[pr].volontariato.unshift(GENITORI_TOSTI);
}

// Genitori Tosti: gruppi locali raggiungibili solo su WhatsApp
const GENITORI_TOSTI_LOCALI: Associazione[] = [
  {
    nome: "Genitori Tosti – Cologno Monzese",
    cosa: "Gruppo locale di Genitori Tosti in Tutti i Posti: genitori di figli con disabilità che si sostengono e tutelano i diritti.",
    dove: "Cologno Monzese",
    whatsapp: "+39 349 0957263",
    province: ["MI"],
  },
  {
    nome: "Genitori Tosti – Lodi",
    cosa: "Gruppo locale di Genitori Tosti in Tutti i Posti: genitori di figli con disabilità che si sostengono e tutelano i diritti.",
    dove: "Lodi",
    whatsapp: "+39 393 9212811",
    province: ["LO"],
  },
];
for (const g of GENITORI_TOSTI_LOCALI) {
  for (const pr of g.province!) {
    PER_PROVINCIA[pr] = PER_PROVINCIA[pr] ?? { volontariato: [], sport: [] };
    PER_PROVINCIA[pr].volontariato.unshift(g);
  }
}

// Milano (MI): dati dai siti delle associazioni (ottobre 2026)
// Massa-Carrara — Anffas: recapiti dal sito dell'associazione (anffasms.it), letti il 21/10/2026.
PER_PROVINCIA.MS = PER_PROVINCIA.MS ?? { volontariato: [], sport: [] };
PER_PROVINCIA.MS.volontariato.unshift({
  nome: "Anffas Massa Carrara",
  cosa: "Famiglie e persone con disabilità intellettiva e relazionale: servizi per la persona e per le famiglie.",
  dove: "Via Castellaro 1, Anderlino, Carrara",
  telefono: "0585 841444",
  email: "info@anffasms.it",
  sito: "https://www.anffasms.it",
  comuni: ["carrara"],
});

// Genova (GE): recapiti letti il 25/10/2026 sul sito nazionale Anffas (elenco "Dove siamo"),
// sul sito del Consiglio regionale UICI Liguria, sul sito AISM, sul sito UILDM Genova
// (anche nella "Mappatura degli Enti del Terzo Settore" del Comune di Genova), sul sito
// della Fondazione Chiossone e sulla scheda ANGSA Liguria del sito nazionale ANGSA.
// Tutti gli enti risultano iscritti al RUNTS (elenco ufficiale al 25/10/2026).
PER_PROVINCIA.GE = PER_PROVINCIA.GE ?? { volontariato: [], sport: [] };
PER_PROVINCIA.GE.volontariato.unshift(
  {
    nome: "Anffas Genova",
    cosa: "Famiglie e persone con disabilità intellettiva e disturbi del neurosviluppo: servizi per la persona, sostegno e tutela dei diritti delle famiglie.",
    dove: "Via della Libertà 6 int. 5-6, 16129 Genova",
    telefono: "010 5762511",
    email: "associazione@anffas-genova.it",
    sito: "https://www.anffas-genova.org",
    comuni: ["genova"],
  },
  {
    nome: "ANGSA Liguria",
    cosa: "Genitori di persone con autismo: tutela dei diritti, sostegno alle famiglie e informazione.",
    dove: "Genova",
    telefono: "010 6533838",
    email: "liguria@angsa.it",
    comuni: ["genova"],
  },
  {
    nome: "UICI – Unione Italiana dei Ciechi e degli Ipovedenti, sezione di Genova",
    cosa: "Persone cieche e ipovedenti: tutela dei diritti, assistenza nelle pratiche, servizi e attività.",
    dove: "Via Caffaro 6/1, 16124 Genova",
    telefono: "010 2510049",
    email: "uicge@uici.it",
    sito: "https://www.uiciliguria.it/blog/genova-sezione-territoriale/",
    comuni: ["genova"],
  },
  {
    nome: "UICI – sezione di Chiavari",
    cosa: "Persone cieche e ipovedenti del Tigullio: tutela dei diritti, assistenza e attività.",
    dove: "Via Eugenio Sambuceti 22/3, 16043 Chiavari",
    telefono: "0185 307650",
    email: "uicchi@uici.it",
    sito: "https://www.uiciliguria.it/blog/chiavari-sezione-territoriale/",
    comuni: ["chiavari"],
  },
  {
    nome: "Fondazione David Chiossone",
    cosa: "Riabilitazione e servizi per persone con disabilità visiva, con pluridisabilità e per minori con autismo o disabilità dello sviluppo.",
    dove: "Corso Armellini 11, 16122 Genova",
    telefono: "010 83421",
    email: "info@chiossone.it",
    sito: "https://www.chiossone.it",
    comuni: ["genova"],
  },
  {
    nome: "AISM – Associazione Italiana Sclerosi Multipla, sezione di Genova",
    cosa: "Persone con sclerosi multipla e familiari: informazione, sostegno e servizi, anche di trasporto.",
    dove: "Via Alizeri 3B (cancello), 16126 Genova · lun–ven 9:00–13:00 e 14:00–17:00",
    telefono: "010 2512296",
    email: "aismgenova@aism.it",
    sito: "https://www.aism.it/struttura/sezione-provinciale-aism-genova/home-page",
    comuni: ["genova"],
  },
  {
    nome: "AISM – Gruppo operativo Tigullio",
    cosa: "Persone con sclerosi multipla del Tigullio: informazione e sostegno.",
    dove: "Via Colonnello E. Franceschi 42, 16043 Chiavari",
    telefono: "0185 302700",
    email: "aism.tigullio@aism.it",
    sito: "https://www.aism.it/struttura/sezione-provinciale-aism-genova/contattaci",
    comuni: ["chiavari"],
  },
  {
    nome: "UILDM Genova",
    cosa: "Persone con distrofia muscolare e malattie neuromuscolari: assistenza domiciliare, consulenze, trasporto con mezzi attrezzati, sport (hockey in carrozzina, baskin), laboratori e soggiorno estivo.",
    dove: "Viale Brigate Partigiane 14/2 sc. sx, 16129 Genova",
    telefono: "010 5955405",
    email: "info@uildmge.it",
    sito: "https://www.uildmge.it",
    comuni: ["genova"],
  },
  {
    nome: "Consulta per la tutela dei diritti delle persone con disabilità (Comune e Città metropolitana di Genova)",
    cosa: "Riunisce 34 associazioni e porta agli enti pubblici proposte su scuola, lavoro, barriere, trasporti, riabilitazione e sanità. Ha uno sportello di ascolto su prenotazione.",
    dove: "Genova",
    telefono: "010 5577211",
    email: "consulta@comune.genova.it",
    comuni: ["genova"],
  },
  {
    nome: "ENS – Ente Nazionale Sordi, sezione di Genova",
    cosa: "Persone sorde e famiglie: tutela dei diritti, informazioni, servizi e attività.",
    dove: "Via Peschiera 7, 16122 Genova",
    telefono: "010 880061",
    email: "genova@ens.it",
    sito: "https://genova.ens.it",
    comuni: ["genova"],
  },
  {
    nome: "Gruppo Asperger Liguria",
    cosa: "Associazione di promozione sociale per persone autistiche senza disabilità intellettiva e per le loro famiglie.",
    dove: "Genova",
    telefono: "351 7470145",
    email: "asperger.liguria@libero.it",
    sito: "https://aspergerliguria.it",
    comuni: ["genova"],
  },
  {
    nome: "ANGLAT – sezione di Genova e provincia",
    cosa: "Mobilità e trasporti per persone con disabilità: patente speciale (con autoscuole adattate), agevolazioni fiscali per l'auto, CUDE e posti riservati, barriere architettoniche, turismo accessibile.",
    dove: "Via Inferiore Rio Maggiore 4 (cancello), Molassana, Genova",
    telefono: "010 8361546",
    email: "genova@anglat.org",
    sito: "https://genova.anglat.it",
    comuni: ["genova"],
  },
  {
    nome: "Associazione Alzheimer Liguria",
    cosa: "Sostegno gratuito a persone con Alzheimer e familiari: sportello di ascolto, incontri informativi, consulenze.",
    dove: "Via Cesarea 5/1, 16121 Genova · sportello lun–ven 9:00–12:00",
    telefono: "010 594076",
    email: "alzheimer.liguria@libero.it",
    sito: "https://www.alzheimerliguria.it",
    comuni: ["genova"],
  },
  {
    nome: "ALFAPP – Associazione Ligure Famiglie Pazienti Psichiatrici",
    cosa: "Accoglienza e consulenza per persone con disagio psichiatrico e famiglie, gruppi di aiuto, laboratori, progetti per lavoro e autonomia abitativa.",
    dove: "Via Malta, Genova · accoglienza lun–ven 15:00–19:00",
    telefono: "010 540740",
    email: "alfapp.genova@gmail.com",
    sito: "https://www.alfapp.it",
    comuni: ["genova"],
  },
  {
    nome: "Associazione Ligure Parkinson",
    cosa: "Ascolto e informazioni per persone con Parkinson, attività manuali e fisiche per mantenere l'autonomia.",
    dove: "Genova (attività presso l'Istituto Don Orione)",
    telefono: "347 2902857",
    email: "info@alpgenova.it",
    sito: "https://www.alpgenova.com",
    comuni: ["genova"],
  },
  {
    nome: "Tribunale per i diritti del malato – Cittadinanzattiva",
    cosa: "Tutela dei diritti dei malati e segnalazioni sulla sanità, anche con consulenza legale gratuita. Si concorda un appuntamento per telefono.",
    dove: "Ospedale Micone, Largo Nevio Rosso 2, Sestri Ponente",
    telefono: "329 9308677",
    email: "tribunalemalato.ge@libero.it",
    comuni: ["genova"],
  },
  {
    nome: "Centri Liguri per la Tutela dei diritti del Malato «M. Chighine»",
    cosa: "Sportelli di ascolto e segnalazioni sulle prestazioni sanitarie negli ospedali e poliambulatori di Genova.",
    dove: "Villa Scassi (mar e gio 9:30–11:30), Polo Levante via Maggio 6 (lun 9:00–11:30), Ospedale Gallino (mer 9:00–12:30), Poliambulatorio via Assarotti 35 (mer 9:00–11:30)",
    telefono: "010 5557590",
    email: "dirittimalato@tiscalinet.it",
    sito: "https://www.tutela-del-malato.it",
    comuni: ["genova"],
  },
  {
    nome: "AVO Genova – Volontari Ospedalieri",
    cosa: "Volontari che offrono compagnia e ascolto gratuiti negli ospedali, nelle case di riposo e nel centro per disabili di via Maggio.",
    dove: "Genova",
    telefono: "010 5557595",
    email: "segreteria@avogenova.it",
    sito: "https://www.avogenova.org",
    comuni: ["genova"],
  },
  {
    nome: "Anffas Liguria",
    cosa: "Coordinamento regionale delle associazioni Anffas: famiglie di persone con disabilità intellettiva e relazionale.",
    dove: "Salita Banchi 20, 16035 Rapallo",
    telefono: "0185 289478",
    email: "regionale@anffas.liguria.it",
  },
  {
    nome: "Anffas Rapallo – Villa Gimelli",
    cosa: "Famiglie e persone con disabilità intellettiva e disturbi del neurosviluppo del Tigullio occidentale.",
    dove: "Salita Banchi 20, 16035 Rapallo",
    telefono: "0185 289478",
    email: "info@villagimelli.it",
    sito: "https://www.villagimelli.it",
    comuni: ["rapallo"],
  },
  {
    nome: "Anffas Tigullio Est",
    cosa: "Famiglie e persone con disabilità intellettiva e relazionale del Tigullio orientale.",
    dove: "Via San Francesco 27, 16043 Chiavari",
    telefono: "0185 325097",
    email: "anffas.chiavari@libero.it",
    sito: "https://www.anffastigullioest.it",
    comuni: ["chiavari"],
  },
  // 03/11/2026: dati letti sul sito dell'associazione (www.xfragileliguria.it): sede, contatti e progetti;
  // iscritta al RUNTS (Repertorio 31583). La presidente ha risposto a TutelApp il 03/11/2026.
  {
    nome: "Associazione Ligure Sindrome X-Fragile ODV",
    cosa: "Famiglie e persone con Sindrome X Fragile e altre disabilità intellettive: informazione, sostegno alle famiglie e inserimento scolastico, sociale e lavorativo. A Villa Lanza c'è l'Università dell'autonomia, un progetto di vita autonoma. Attiva in Liguria dal 1999.",
    dove: "Villa Lanza, Via Sant'Alberto 36, 16154 Genova Sestri Ponente",
    telefono: "338 2440104",
    email: "infoxfragile.liguria@gmail.com",
    sito: "https://www.xfragileliguria.it",
    logo: "/associazioni/x-fragile-liguria.png",
    comuni: ["genova"],
  },
);
PER_PROVINCIA.GE.sport.unshift({
  nome: "Spiagge inclusive del Comune di Genova (Genova Sea Inclusion)",
  cosa: "Otto spiagge attrezzate per persone con disabilità: Vesima (Janua), Voltri (Spiaggia dei bambini), Easy Beach e Pegli 2 a Pegli, Capo Marina, Boccadasse, Tritone di Sturla e Vernazzola. Si prenota (nome, cognome, spiaggia ed email) al numero unico 376 2401182 dei Bagni Marina Genovese, da lunedì a venerdì 8:00–16:00; a Boccadasse e a Pegli 2 si entra senza prenotare. Le prenotazioni dipendono dai posti disponibili.",
  dove: "Genova",
  telefono: "010 5579768",
  email: "spiaggeinclusive@comune.genova.it",
  sito: "https://www.comune.genova.it/servizi/salute-benessere-e-assistenza/spiagge-inclusive-genova-sea-inclusion",
  comuni: ["genova"],
},
{

  nome: "Gruppo Sportivo Liguria (Anffas Genova)",
  cosa: "Attività sportive per persone con disabilità intellettiva e relazionale.",
  dove: "Via della Libertà 6 int. 6, 16129 Genova",
  telefono: "010 5762505",
  email: "gr.sportivo@anffas-genova.it",
  comuni: ["genova"],
});

// Società sportive affiliate al Comitato Italiano Paralimpico (CIP) in Liguria: elenco SportAbility Liguria (Associazione Stelle nello Sport, con il supporto di Regione Liguria), pagina "Società Cip" letta il 27/10/2026.
// Tolti i recapiti ambigui o incompleti (numeri in formato non chiaro, indirizzi email delle delegazioni federali).
PER_PROVINCIA.GE = PER_PROVINCIA.GE ?? { volontariato: [], sport: [] };
PER_PROVINCIA.GE.sport.push(
  {
    nome: "Atletica Trionfo Ligure A.S.D.",
    cosa: "Atletica leggera (FISPES). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Vittorino Era 1C, 16147 Genova",
    telefono: "010 3046739",
    email: "segreteria@trionfoligure.it",
    comuni: ["genova"],
  },
  {
    nome: "Polisportiva Quinto",
    cosa: "Atletica leggera (FISPES, FISDIR). Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Piazza De Simoni 1, 16166 Genova",
    email: "polisportivaquinto@hotmail.it",
    comuni: ["genova"],
  },
  {
    nome: "Genova Badminton Club",
    cosa: "Badminton (FIBa). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Casaregis 8/19, 16129 Genova",
    telefono: "342 9261748",
    email: "genovabc@badmintonitalia.net",
    comuni: ["genova"],
  },
  {
    nome: "BIC Basket in Carrozzina Genova",
    cosa: "Basket in carrozzina (FIPIC). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Don Luigi Sturzo 80, Sant'Olcese",
    telefono: "347 8821324",
    email: "info@bicgenova.it",
  },
  {
    nome: "A.S.D. Levante C Pegliese",
    cosa: "Calcio per amputati (FISPES). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Ronchi, 16155 Genova",
    telefono: "338 9983738",
    email: "info@levantec.it",
    comuni: ["genova"],
  },
  {
    nome: "Polisportiva Murcarolo",
    cosa: "Canottaggio (FIC). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via A. Gianelli 113r, 16166 Genova",
    telefono: "010 3202127",
    email: "info@sportivamurcarolo.org",
    comuni: ["genova"],
  },
  {
    nome: "Gruppo Sportivo Speranza",
    cosa: "Canottaggio (FIC). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Prà 54 (lato mare), 16157 Genova",
    telefono: "347 2646739",
    email: "grupposportivosperanza@gmail.com",
    comuni: ["genova"],
  },
  {
    nome: "Società Canottieri Genovesi Elpis",
    cosa: "Canottaggio (FIC). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via al Molo Giano, Porticciolo Duca degli Abruzzi, 16126 Genova",
    telefono: "010 2518720",
    email: "segreteria@canottierielpis.it",
    comuni: ["genova"],
  },
  {
    nome: "World Dance Liguria",
    cosa: "Danza sportiva (FIDS). Società affiliata al CIP Liguria. Disabilità fisica, intellettiva e per non vedenti.",
    dove: "Via Brondolini 32, Sant'Olcese",
    telefono: "345 2501531",
    email: "worlddanceliguria@hotmail.it",
  },
  {
    nome: "Società Ginnastica Rapallo",
    cosa: "Danza sportiva (FIDS), anche per chi non è in carrozzina. Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Via della Libertà, 16035 Rapallo",
    telefono: "347 5865977",
    email: "presidente@ritmicarapallo.it",
    comuni: ["rapallo"],
  },
  {
    nome: "A.S.D. Top Bike School",
    cosa: "Handbike e ciclismo (FCI). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Carloforte 1r, 16156 Genova",
    telefono: "347 4241812",
    email: "topbikeschool@gmail.com",
    comuni: ["genova"],
  },
  {
    nome: "Tht2002 Associazione Sportiva Dilettantistica",
    cosa: "Handbike e ciclismo (FCI). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Loc. Caperana Case Sparse 36/5, 16043 Chiavari",
    telefono: "349 3558864",
    email: "podesta.vittorio@gmail.com",
    comuni: ["chiavari"],
  },
  {
    nome: "Ciclistica Rapallese 2019",
    cosa: "Handbike e ciclismo (FCI). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Vico Principe del Ghiaccio 4, 16035 Rapallo",
    telefono: "366 5665949",
    email: "ciclisticarapallese2019@gmail.com",
    comuni: ["rapallo"],
  },
  {
    nome: "Nuotatori Genovesi A.S.D.",
    cosa: "Nuoto (FINP, FISDIR). Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Piazza Henry Dunant 4/22, 16145 Genova",
    telefono: "010 8608775",
    email: "segreteria@nuotatorigenovesi.it",
    comuni: ["genova"],
  },
  {
    nome: "Rapallo Nuoto & Pallanuoto SSD",
    cosa: "Nuoto (FINP). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via San Pietro 35, 16035 Rapallo",
    telefono: "0185 263003",
    email: "rapallo@rapallonuoto.it",
    comuni: ["rapallo"],
  },
  {
    nome: "Waterpolo Columbus Ability Team A.S.D.",
    cosa: "Pallanuoto (FINP, FISDIR). Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Genova",
    telefono: "339 2023283",
    email: "info@wpcolumbusability.it",
    comuni: ["genova"],
  },
  {
    nome: "Zena Tri Team A.S.D.",
    cosa: "Paratriathlon (FITRI). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Serra 6/5, 16122 Genova",
    telefono: "010 8540346",
    email: "asdzenatriteam@gmail.com",
    comuni: ["genova"],
  },
  {
    nome: "Chiavari Scherma A.S.D.",
    cosa: "Scherma (FIS). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Davide Gagliardo 7, 16043 Chiavari",
    telefono: "0185 362811",
    email: "info@chiavarischerma.it",
    comuni: ["chiavari"],
  },
  {
    nome: "Pgs Auxilium",
    cosa: "Sitting volley (FIPAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Corso Sardegna 86 (sede legale), Genova",
    telefono: "010 8317297",
    email: "palauxilium@libero.it",
    comuni: ["genova"],
  },
  {
    nome: "Amico Cavallo A.S.D.",
    cosa: "Sport equestri (FISE). Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Via San Colombano 45, 16133 Genova",
    telefono: "010 804272",
    email: "odettelunardi@libero.it",
    comuni: ["genova"],
  },
  {
    nome: "Entella A.S.D.",
    cosa: "Sport equestri (FISE). Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Via V. Veneto 212, 16042 Carasco",
    telefono: "0185 382283",
    email: "entellamarras@gmail.com",
  },
  {
    nome: "Baby del Tennis A.S.D.",
    cosa: "Tennis (FIT, FISDIR). Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Via Gobetti 58r, 16145 Genova",
    telefono: "010 316330",
    email: "babydeltennis@gmail.com",
    comuni: ["genova"],
  },
  {
    nome: "ABG Arcieri",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Corso Montegrappa 130r, 16137 Genova",
    telefono: "010 876065",
    email: "a.b.g.arcieri@gmail.com",
    comuni: ["genova"],
  },
  {
    nome: "Associazione Genovesi Arcieri S.S.D.",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Paolo Giacometti 12/10, 16143 Genova",
    telefono: "338 2216139",
    email: "segreteria@aga-genova.it",
    comuni: ["genova"],
  },
  {
    nome: "Arcieri della Superba",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via R. Ricca 18/4, 16139 Genova",
    telefono: "335 6008234",
    email: "info@arcieridellasuperba.genova.it",
    comuni: ["genova"],
  },
  {
    nome: "Associazione Arcieri del Tigullio",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Div. Coduri 75/5, San Salvatore di Cogorno",
    email: "segreteria@arcieritigullio.it",
  },
  {
    nome: "Centro Velico Interforze",
    cosa: "Vela (FIV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Arenile di Prà, 16157 Genova",
    telefono: "010 6962231",
    email: "info@cvinterforze.it",
    comuni: ["genova"],
  },
  {
    nome: "Lega Navale Italiana – Genova Sestri Ponente",
    cosa: "Vela (FIV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Pionieri e Aviatori d'Italia 89, 16154 Genova",
    telefono: "010 6001860",
    email: "genovasestri@leganavale.it",
    comuni: ["genova"],
  },
  {
    nome: "Aquile Azzurre A.S.D.",
    cosa: "Wheelchair hockey (FIWH). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Viale Virginia Centurione Bracelli 3/10, 16142 Genova",
    telefono: "340 4100669",
    email: "aquileazzurre@hotmail.it",
    comuni: ["genova"],
  },
  {
    nome: "Blue Devils A.S.D.",
    cosa: "Wheelchair hockey (FIWH). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "c/o CNS, Via Borzoli 21, Genova",
    telefono: "333 9785420",
    email: "audenzioit@yahoo.it",
    comuni: ["genova"],
  },
  {
    nome: "Diver-Time Sport A.S.D.",
    cosa: "Calcio e nuoto (FISDIR). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Via Gualco 3, 16165 Genova",
    telefono: "393 3280428",
    email: "lagallavincenzo@gmail.com",
    comuni: ["genova"],
  },
  {
    nome: "Crocera Stadium SSD",
    cosa: "Nuoto (FISDIR). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Via Eridania 3, 16151 Genova",
    telefono: "010 8686677",
    email: "info@crocerastadium.it",
    comuni: ["genova"],
  },
  {
    nome: "Formidabile A.S.D.",
    cosa: "Nuoto (FISDIR). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Via Canevari 51, 16137 Genova",
    telefono: "010 4556817",
    email: "info@formidabilege.it",
    comuni: ["genova"],
  },
  {
    nome: "Fratellanza Nuoto A.S.D.",
    cosa: "Nuoto (FISDIR). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale; anche fisica non in carrozzina.",
    dove: "Via Coni Zugna 2, 16144 Genova",
    telefono: "010 782968",
    email: "fpxnuoto@hotmail.com",
    comuni: ["genova"],
  },
  {
    nome: "Chiavari Nuoto A.S.D.",
    cosa: "Nuoto e nuoto sincronizzato (FISDIR). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Largo Pessagno 1, 16043 Chiavari",
    telefono: "0185 311898",
    email: "amministrazione@chiavarinuoto.it",
    comuni: ["chiavari"],
  },
  {
    nome: "Tipsy Dance 2015",
    cosa: "Danza sportiva (FIDS). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Via Lungo Torrente Scrivia 8, Savignone",
    telefono: "349 6647960",
    email: "tipsydance2015@gmail.com",
  },
  {
    nome: "Genova Hockey 1980",
    cosa: "Hockey (FIH). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Via degli Oleandri 18D, 16144 Genova",
    telefono: "010 230558",
    email: "info@genovahockey1980.it",
    comuni: ["genova"],
  },
  {
    nome: "Centro Sportivo Marassi Judo",
    cosa: "Judo (FISPIC). Società affiliata al CIP Liguria. Disabilità sensoriale (non vedenti).",
    dove: "Passo Virginia Centurione Bracelli 5, 16142 Genova",
    telefono: "010 871210",
    email: "judomarassi@yahoo.it",
    comuni: ["genova"],
  },
  {
    nome: "Gruppo Sportivo Liguria Non Vedenti",
    cosa: "Showdown (FISPIC). Società affiliata al CIP Liguria. Disabilità sensoriale (non vedenti).",
    dove: "Via Caffaro 6, 16124 Genova",
    email: "andreabazzano87@libero.it",
    comuni: ["genova"],
  },
  {
    nome: "C.S.S. Genova (Sport Silenziosi)",
    cosa: "Sport per sordi (FSSI). Società affiliata al CIP Liguria. Disabilità sensoriale (sordi).",
    dove: "Via Peschiera 7, 16122 Genova",
    telefono: "349 4079170",
    email: "cssgenova@fssi.it",
    comuni: ["genova"],
  },
  {
    nome: "A.S.D. Spartak Zena",
    cosa: "Bowling e calcio a 5 (FSSI). Società affiliata al CIP Liguria. Disabilità sensoriale (sordi).",
    dove: "Via F. Vezzani 28, 16159 Genova",
    telefono: "345 2354240",
    email: "spartak.zena@yahoo.it",
    comuni: ["genova"],
  },
);
PER_PROVINCIA.SV = PER_PROVINCIA.SV ?? { volontariato: [], sport: [] };
PER_PROVINCIA.SV.sport.push(
  {
    nome: "Semplicemente Danza",
    cosa: "Danza sportiva (FIDS). Società affiliata al CIP Liguria. Disabilità fisica e per non vedenti.",
    dove: "Via Fiume 2b/11, 17100 Savona",
    telefono: "019 812941",
    email: "semplicementedanza@yahoo.com",
    comuni: ["savona"],
  },
  {
    nome: "Palextra Fitness Club A.S.D.",
    cosa: "Pesistica paralimpica (FIPE). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via San Michele 15, 17100 Savona",
    telefono: "019 810850",
    email: "info@asdpalextra.it",
    comuni: ["savona"],
  },
  {
    nome: "Physio Training Assessment",
    cosa: "Pesistica paralimpica (FIPE). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Angelo Bevilacqua 11r, 17100 Savona",
    telefono: "391 1742785",
    email: "physiotrainingassessment@gmail.com",
    comuni: ["savona"],
  },
  {
    nome: "G & G Srl Sportiva Dilettantistica",
    cosa: "Pesistica paralimpica (FIPE). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Einaudi 24, 17031 Albenga",
    telefono: "340 9772231",
    email: "strength_coach@tin.it",
    comuni: ["albenga"],
  },
  {
    nome: "Zodiac Palestre",
    cosa: "Pesistica paralimpica (FIPE). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Brigate Partigiane 18/20, 17014 Cairo Montenotte",
    telefono: "019 506021",
    email: "zodiacpalestre@libero.it",
  },
  {
    nome: "UCLA1991 A.S.D.",
    cosa: "Handbike e ciclismo (FCI). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Preve 15, 17053 Laigueglia",
    telefono: "339 4817810",
    email: "saccualessandro@gmail.com",
  },
  {
    nome: "Alassio Bike",
    cosa: "Handbike e ciclismo (FCI). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via L. Da Vinci 137, 17021 Alassio",
    telefono: "335 6275861",
    email: "info@hotelbristolalassio.it",
  },
  {
    nome: "A.S.D. Giro d'Italia d'Epoca",
    cosa: "Handbike e ciclismo (FCI). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Robatto 3/1, 17100 Savona",
    email: "info@giroditaliadepoca.it",
    comuni: ["savona"],
  },
  {
    nome: "Circolo Scherma Savona",
    cosa: "Scherma (FIS). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Mentana 9, 17100 Savona",
    telefono: "340 4679313",
    email: "info@circoloschermasavona.it",
    comuni: ["savona"],
  },
  {
    nome: "San Pio X Pallavolo",
    cosa: "Sitting volley (FIPAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Bergamo 10, 17025 Loano",
    telefono: "347 2788562",
    email: "segreteria@loanovolley.it",
  },
  {
    nome: "Polisportiva Spotornese",
    cosa: "Sitting volley (FIPAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Spotorno",
    telefono: "340 8471573",
    email: "polisportivaspotornese@gmail.com",
  },
  {
    nome: "Albisola Pallavolo",
    cosa: "Sitting volley (FIPAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via la Massa 1, 17011 Albisola Superiore",
    telefono: "019 488722",
    email: "segreteria@albisolapallavolo.it",
  },
  {
    nome: "Volley Ball Club Savona",
    cosa: "Sitting volley (FIPAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Lungomare Matteotti 1, 17100 Savona",
    telefono: "339 7106153",
    email: "volleyballclubsavona@gmail.com",
    comuni: ["savona"],
  },
  {
    nome: "Quiliano Riding Club",
    cosa: "Sport equestri (FISE). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Faia 20/A, 17047 Quiliano",
    telefono: "393 4595544",
    email: "quilianoridingclub@gmail.com",
  },
  {
    nome: "Le Rocce",
    cosa: "Sport equestri (FISE). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Località Periaschi, 17046 Sassello",
    telefono: "019 724819",
    email: "ippicalerocce@libero.it",
  },
  {
    nome: "Tennis Club Garlenda",
    cosa: "Tennis (FIT, FISDIR). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Via Roma 111, 17033 Garlenda",
    telefono: "0182 585028",
    email: "tc.garlenda@gmail.com",
  },
  {
    nome: "Tennistavolo Savona A.S.D.",
    cosa: "Tennistavolo (FITET). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via San Dalmazio 2/10, 17100 Savona",
    telefono: "347 4502228",
    email: "info@ttsavona.com",
    comuni: ["savona"],
  },
  {
    nome: "Tiro a Segno Nazionale – Sezione di Savona",
    cosa: "Tiro a segno (UITS). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Campo di Tiro 9, 17100 Savona",
    telefono: "019 809434",
    email: "presidente@savonatsn.net",
    comuni: ["savona"],
  },
  {
    nome: "TAV Albenga A.S.D.",
    cosa: "Tiro al volo (FITAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Regione Colletto, 17031 Albenga",
    telefono: "342 1439290",
    email: "tavalbenga@gmail.com",
    comuni: ["albenga"],
  },
  {
    nome: "TAV Cairo Skeet A.S.D.",
    cosa: "Tiro al volo (FITAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Regione Camponuovo, 17014 Cairo Montenotte",
    telefono: "338 2465383",
    email: "suglianogiorgio@gmail.com",
  },
  {
    nome: "Compagnia Arcieri 5 Stelle A.S.D.",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Corso Mazzini 22/10, 17100 Savona",
    telefono: "019 804220",
    email: "segreteria@arcieri5stelle.it",
    comuni: ["savona"],
  },
  {
    nome: "A.S.D. N. Granatiere – Sezione Arcieri",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Filippo Corridoni 15/2, 17100 Savona",
    telefono: "320 3131240",
    email: "asdgranatiere@gmail.com",
    comuni: ["savona"],
  },
  {
    nome: "Arcieri del Finale",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Fiume 44, 17024 Finale Ligure",
    telefono: "328 7372650",
    email: "segreteria@arcieridelfinale.com",
  },
  {
    nome: "A.S.D. Arcieri Borghetto S.S.",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via G. Polla 42, 17055 Toirano",
    telefono: "338 1434079",
  },
  {
    nome: "Arcieri La Fenice d'Oro",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via 8 Marzo 3/5, 17041 Altare",
    telefono: "338 6553523",
    email: "info@arcierilafenicedoro.it",
  },
  {
    nome: "Pippo Vagabondo A.S.D.",
    cosa: "Hockey (FIH). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Cairo Montenotte",
    telefono: "340 3340104",
    email: "pippovagabondoasd@libero.it",
  },
  {
    nome: "Liguria Hockey Club",
    cosa: "Hockey (FIH). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Lungomare Matteotti 1, 17100 Savona",
    telefono: "019 821899",
    comuni: ["savona"],
  },
  {
    nome: "A.S.D. Sporting Club Millesimo",
    cosa: "Nuoto (FISDIR). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Piazza della Libertà, 17017 Millesimo",
    telefono: "019 564421",
    email: "scmillesimo@libero.it",
  },
  {
    nome: "Latin Studio",
    cosa: "Danza sportiva (FIDS). Società affiliata al CIP Liguria. Disabilità sensoriale (sordi).",
    dove: "Via Rodi 2/2, 17100 Savona",
    telefono: "340 0762473",
    email: "alexinfusino89@gmail.com",
    comuni: ["savona"],
  },
);
PER_PROVINCIA.IM = PER_PROVINCIA.IM ?? { volontariato: [], sport: [] };
PER_PROVINCIA.IM.sport.push(
  {
    nome: "Olmo Sanremo Racing Team",
    cosa: "Handbike e ciclismo (FCI). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Corso Orazio Raimondo 99, 18038 Sanremo",
    telefono: "0184 570161",
    email: "olmo.sanremo@olmopaolo.com",
    comuni: ["sanremo"],
  },
  {
    nome: "Polisportiva Dilettantistica Integrabili",
    cosa: "Handbike, nuoto (FINP, FISDIR, FCI). Società affiliata al CIP Liguria. Disabilità fisica e intellettiva.",
    dove: "Via Val d'Olivi 347, 18038 Sanremo",
    telefono: "327 2243096",
    email: "info@integrabili.org",
    comuni: ["sanremo"],
  },
  {
    nome: "Volley Primavera",
    cosa: "Sitting volley (FIPAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Buonarroti 46/A, 18100 Imperia",
    telefono: "393 9471263",
    email: "pierovolleyprimavera@gmail.com",
    comuni: ["imperia"],
  },
  {
    nome: "Centro Volley – Scuola di Pallavolo Mazzucchelli",
    cosa: "Sitting volley (FIPAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Quinto Mansuino 12 (c/o Mercato dei fiori), 18038 Sanremo",
    telefono: "331 3011323",
    email: "sdpmazzucchelli@hotmail.com",
    comuni: ["sanremo"],
  },
  {
    nome: "Mag Sports Education",
    cosa: "Pesistica paralimpica (FIPE). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via XXV Aprile 174, 18100 Imperia",
    telefono: "342 1256964",
    email: "info@magsports.it",
    comuni: ["imperia"],
  },
  {
    nome: "Bordighera Nuoto A.S.D.",
    cosa: "Nuoto (FISDIR). Società affiliata al CIP Liguria. Disabilità intellettiva e relazionale.",
    dove: "Via Diaz, 18012 Bordighera",
    telefono: "0184 264528",
    email: "bordighera.nuoto@alice.it",
  },
  {
    nome: "Arcieri Imperiesi S. Camillo A.S.D.",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via G. Strato, 18100 Imperia",
    telefono: "0183 680146",
    email: "arcieriimperiesi@gmail.com",
    comuni: ["imperia"],
  },
  {
    nome: "Compagnia Arcieri San Bartolomeo",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via degli Orti, 18016 San Bartolomeo al Mare",
    telefono: "0183 403673",
  },
  {
    nome: "Archery Club Ventimiglia A.S.D.",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Roma 58, 18039 Ventimiglia",
    telefono: "347 7306514",
    email: "mail@archeryclubventimiglia.it",
  },
  {
    nome: "Liguria Calcio Non Vedenti",
    cosa: "Calcio per non vedenti (FISPIC). Società affiliata al CIP Liguria. Disabilità sensoriale (non vedenti).",
    dove: "c/o Studio Di Malta, Corso Garibaldi 41, 18038 Sanremo",
    telefono: "0184 570827",
    email: "info@liguriacalcio.it",
    comuni: ["sanremo"],
  },
  {
    nome: "Lega Navale Italiana – Sezione di Sanremo",
    cosa: "Vela (FIV). Società affiliata al CIP Liguria. Disabilità sensoriale (non vedenti).",
    dove: "Corso Salvo D'Acquisto 12, 18038 Sanremo",
    telefono: "0184 576567",
    email: "infolnisanremo@gmail.com",
    comuni: ["sanremo"],
  },
);
PER_PROVINCIA.SP = PER_PROVINCIA.SP ?? { volontariato: [], sport: [] };
PER_PROVINCIA.SP.sport.push(
  {
    nome: "Lunezia Volley",
    cosa: "Sitting volley (FIPAV). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Viale della Pace 11, 19038 Sarzana",
    telefono: "0187 626654",
    email: "luneziavolley2015@gmail.com",
  },
  {
    nome: "Circolo Ippico 3 Emme",
    cosa: "Sport equestri (FISE). Società affiliata al CIP Liguria. Disabilità fisica, intellettiva e per non vedenti.",
    dove: "Via del Pioppo 3, 19020 Vezzano Ligure",
    telefono: "340 2879644",
    email: "micolsiri@gmail.com",
  },
  {
    nome: "Arcieri del Golfo",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Buonviaggio 47, 19125 La Spezia",
    telefono: "347 0447492",
    email: "arcieridelgolfo@libero.it",
    comuni: ["la-spezia"],
  },
  {
    nome: "Arcieri Sarzana A.S.D.",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Alfieri 56, 19038 Sarzana",
    telefono: "0187 674487",
    email: "info@arcierisarzana.it",
  },
  {
    nome: "Arcieri dei 3 Borghi",
    cosa: "Tiro con l'arco (FITARCO). Società affiliata al CIP Liguria. Disabilità fisica.",
    dove: "Via Matteo Vinzoni 16, 19015 Levanto",
    telefono: "0187 808110",
    email: "arcieridei3borghi@libero.it",
  },
);

PER_PROVINCIA.MI = PER_PROVINCIA.MI ?? { volontariato: [], sport: [] };
PER_PROVINCIA.MI.volontariato.unshift(
  {
    nome: "LEDHA – Lega per i diritti delle persone con disabilità APS",
    cosa: "Tutela dei diritti delle persone con disabilità. Ha il Centro Antidiscriminazione Franco Bomprezzi e i Centri per la vita indipendente.",
    dove: "Via Livigno 2, 20158 Milano",
    telefono: "02 6570425",
    email: "info@ledha.it",
    sito: "https://www.ledha.it",
    comuni: ["milano"],
  },
);

// Torino (TO): dati dal sito dell'associazione (ottobre 2026)
PER_PROVINCIA.TO = PER_PROVINCIA.TO ?? { volontariato: [], sport: [] };
PER_PROVINCIA.TO.volontariato.unshift({
  nome: "Anffas Torino",
  cosa: "Attiva dal 1959 con le famiglie di persone con disabilità fisica e intellettiva: servizi alla persona, progetti, Comunicazione Aumentativa Alternativa, formazione. Lo sportello SAI accoglie e informa.",
  dove: "Via Bossi 24, 10144 Torino (lun-gio 9:00-13:00 e 14:00-17:00, ven 9:00-13:00)",
  telefono: "011 3810723",
  email: "sai@anffas.torino.it",
  sito: "https://www.anffastorino.it",
  comuni: ["torino"],
});

// Roma (RM): dati dai siti delle associazioni e di Roma Capitale (ottobre 2026)
PER_PROVINCIA.RM = PER_PROVINCIA.RM ?? { volontariato: [], sport: [] };
PER_PROVINCIA.RM.volontariato.unshift(
  {
    nome: "Agenzia per la Vita Indipendente di Roma Capitale",
    cosa: "Informazioni e consulenze su assistenza, casa, fisco, invalidità, lavoro, mobilità, salute e scuola, con sedi Roma 1, 2 e 3. Roma 1 (via Prospero Santacroce 5): tel. 06 98261600, int. 202, per prenotare un colloquio.",
    dove: "Roma 1: via Prospero Santacroce 5; Roma 2: via degli Anemoni 19 e via Cerbara 38; Roma 3: via Mentana 2b, via Magliani 22/28, via Pedretti 16",
    telefono: "06 98261600",
    sito: "https://www.vitaindipendenteroma.it/contatti/",
    comuni: ["roma"],
  },
);


// Ferentino (FR)
PER_PROVINCIA.FR = PER_PROVINCIA.FR ?? { volontariato: [], sport: [] };
PER_PROVINCIA.FR.volontariato.unshift({
  nome: "Andromeda APS",
  cosa: "Associazione di promozione sociale impegnata nel sociale, nella cultura e nella formazione.",
  dove: "Via Aldo Moro 157, 03013 Ferentino (FR)",
  email: "andromedaaps24@gmail.com",
  comuni: ["ferentino"],
});

// L'Aquila (AQ): dati dai siti delle associazioni e del CSV Abruzzo (ottobre 2026)
PER_PROVINCIA.AQ = PER_PROVINCIA.AQ ?? { volontariato: [], sport: [] };
PER_PROVINCIA.AQ.volontariato.unshift(
  {
    nome: "Autismo Abruzzo Onlus",
    cosa: "Sostiene le persone con autismo e le loro famiglie, senza costi per le famiglie. I volontari ascoltano chi incontra ostacoli burocratici e culturali.",
    dove: "Via Gaetano Belisari 2, L'Aquila (sede operativa)",
    telefono: "347 677 5119",
    sito: "https://autismoabruzzo.it",
    comuni: ["laquila", "ocre"],
  },
  {
    nome: "AISM – Sezione provinciale dell'Aquila",
    cosa: "Associazione Italiana Sclerosi Multipla: informazioni e sostegno alle persone con sclerosi multipla e ai loro familiari.",
    dove: "Via Fontamara 12, Cavalletto d'Ocre, 67040 Ocre (AQ)",
    telefono: "0862 313632",
    email: "aismaquila@aism.it",
    sito: "https://www.aism.it/struttura/sezione-provinciale-aism-laquila/contattaci",
    comuni: ["laquila", "ocre"],
  },
  {
    nome: "180 Amici L'Aquila ONLUS",
    cosa: "Tutela i diritti delle persone con disagio mentale e delle loro famiglie, promuove la salute mentale e organizza iniziative sociali e culturali.",
    dove: "c/o Casa del Volontariato e dell'Associazionismo, via Saragat snc, località Campo di Pile, L'Aquila",
    telefono: "327 4181827",
    email: "l.aquila180amici@gmail.com",
    sito: "https://180amiciaq.wordpress.com",
    comuni: ["laquila", "ocre"],
  },
  {
    nome: "CSV Abruzzo – sede dell'Aquila",
    cosa: "Centro di Servizio per il Volontariato: conosce le associazioni del territorio e può indicarti quella giusta per il tuo bisogno.",
    dove: "Via del Gatto 6, L'Aquila (lun-ven 9:00-14:00 e 15:00-18:30)",
    telefono: "0862 318637",
    email: "segreterialaquila@csvabruzzo.it",
    sito: "https://www.csvabruzzo.it/laquila/dove-siamo/",
    comuni: ["laquila", "ocre"],
  },
);

// Firenze (FI): dati dal sito dell'associazione (18/10/2026).
// Vale per tutti i Comuni della provincia, Sesto Fiorentino compreso.
PER_PROVINCIA.FI = PER_PROVINCIA.FI ?? { volontariato: [], sport: [] };
PER_PROVINCIA.FI.volontariato.unshift({
  nome: "Anffas Firenze",
  cosa: "Attiva dal 1959 con le persone con disabilità intellettiva e disturbi del neurosviluppo e le loro famiglie: centro di riabilitazione semiresidenziale, case della comunità familiare, percorsi per l'autonomia.",
  dove: "Via Bolognese 232, 50139 Firenze",
  telefono: "055 400151",
  email: "info@anffasfirenze.it",
  sito: "https://www.anffasfirenze.it",
  province: ["FI"],
});



// Brescia (BS): recapiti dall'elenco "Dove siamo" del sito nazionale di Anffas (19/10/2026).
PER_PROVINCIA.BS = PER_PROVINCIA.BS ?? { volontariato: [], sport: [] };
PER_PROVINCIA.BS.volontariato.unshift({
  nome: "Anffas Brescia",
  cosa: "Associazione di famiglie di persone con disabilità intellettiva e relazionale.",
  dove: "Via Michelangelo 405, 25124 Brescia",
  telefono: "030 2319071",
  email: "info@anffasbrescia.it",
  sito: "https://www.anffasbrescia.it",
  comuni: ["brescia"],
});




// Pisa (PI): dall'Albo comunale delle associazioni nell'ambito della disabilità, file "Elenco Associazioni 2026"
// (pagina del Comune aggiornata il 24/08/2026), letto il 27/10/2026. Solo le voci con attività legate alla
// disabilità, solo i dati scritti nel documento. Tolte le email personali; numeri ripresi senza modifiche.
// Revisione dell'albo prevista nel 2026: ricontrollare appena il Comune pubblica l'atto.
PER_PROVINCIA.PI = PER_PROVINCIA.PI ?? { volontariato: [], sport: [] };
PER_PROVINCIA.PI.volontariato.unshift(
  {
    nome: "Anffas Pisa",
    cosa: "Associazione di famiglie di persone con disabilità intellettiva e/o relazionale: interventi e servizi sociali, prestazioni socio-sanitarie, formazione professionale, attività culturali e agricoltura sociale.",
    dove: "Sede legale: via dei Cappuccini 4, 56121 Pisa",
    telefono: "050 7215158",
    email: "anffaspisa@tiscali.it",
    sito: "https://www.anffaspisa.it",
    comuni: ["pisa"],
  },
  {
    nome: "ANMIC Pisa",
    cosa: "Associazione Nazionale a tutela delle Persone con Disabilità.",
    dove: "Via dei Sepolcri, Pisa",
    telefono: "050 9711533",
    email: "anmicpisa@gmail.com",
    comuni: ["pisa"],
  },
  {
    nome: "AIPD Pisa (Associazione Italiana Persone Down)",
    cosa: "Attività per le persone con sindrome di Down e inserimento nel contesto sociale.",
    dove: "Via Ippolito Rosselini 42/44, 56124 Pisa",
    telefono: "050 48689",
    email: "aipdpisa@aipd.it",
    comuni: ["pisa"],
  },
  {
    nome: "Autismo Pisa",
    cosa: "Associazione di genitori di bambini, ragazzi e adulti con disturbo dello spettro autistico.",
    dove: "Via B. Fredi 10, 56122 Pisa",
    email: "autismopisa@gmail.com",
    comuni: ["pisa"],
  },
  {
    nome: "Dinsi Une Man",
    cosa: "Laboratorio polifunzionale che coinvolge persone con disabilità di ogni età, anche anziani e bambini.",
    dove: "Viale delle Cascine 150/E, 56122 Pisa",
    telefono: "050 532724",
    comuni: ["pisa"],
  },
  {
    nome: "Eppursimuove",
    cosa: "Sostiene le persone con disabilità e le loro famiglie con servizi e progetti per rispondere ai loro bisogni.",
    dove: "Via Sterpulino 11, Pisa",
    telefono: "328 7156863",
    email: "eppursimuoveasd@gmail.com",
    comuni: ["pisa"],
  },
  {
    nome: "Respirando",
    cosa: "Sostiene e dà voce alle famiglie dei bambini che dipendono da presidi medici.",
    dove: "Via Enzo Zerboglio 5, 56125 Pisa",
    telefono: "050 9662485",
    email: "info@associazionerespirando.org",
    comuni: ["pisa"],
  },
  {
    nome: "Unique APS",
    cosa: "Sensibilizza sul tema della disabilità e delle diversità.",
    dove: "Lungarno Galileo Galilei, Pisa",
    email: "associazioneunique@gmail.com",
    comuni: ["pisa"],
  },
  {
    nome: "Cambio di Passo APS",
    cosa: "Lavora perché le persone con pluridisabilità abbiano pari opportunità e vedano riconosciuti i loro diritti.",
    dove: "Piazzale Martin Luther King 12, 56123 Pisa",
    telefono: "371 7604159",
    email: "cambiodipasso.aps@gmail.com",
    comuni: ["pisa"],
  },
);
PER_PROVINCIA.PI.sport.unshift(
  {
    nome: "Sport Pisa I.E.S. (Insegnare Educare allo Sport)",
    cosa: "Pallacanestro senior e giovanile, minibasket e baskin (il baskin è inserito tra le attività paralimpiche).",
    dove: "Viale Giovanni Pisano 27/A, 56123 Pisa",
    telefono: "329 2345359",
    email: "iesbasket@fastwebnet.it",
    comuni: ["pisa"],
  },
  {
    nome: "ASD Bambini e Cavalli",
    cosa: "Attività con i cavalli per bambini, ragazzi e adulti con disagio cognitivo.",
    dove: "Via Palazzi 40/B, 56121 Coltano, Pisa",
    telefono: "050 989215",
    email: "info@ilnuovofontanile.it",
    comuni: ["pisa"],
  },
);

// Arezzo (AR): dall'Elenco comunale delle libere forme associative, aggiornato al 19/01/2026 (21 voci), letto il 27/10/2026.
// Sono associazioni soprattutto culturali: qui solo quelle con ambito sport, sociale o ricreazione. Dati come scritti nel documento
// (il documento non ha telefoni). Non è un censimento delle associazioni di assistenza e disabilità.
PER_PROVINCIA.AR = PER_PROVINCIA.AR ?? { volontariato: [], sport: [] };
PER_PROVINCIA.AR.sport.unshift(
  {
    nome: "Panathlon Club Arezzo",
    cosa: "Ambiti di attività indicati dal Comune: cultura, sociale, sport. Il documento del Comune non dice se le attività sono accessibili alle persone con disabilità: chiedilo all'associazione.",
    dove: "Via G. Ungaretti 7, Arezzo",
    email: "arezzo@panathlon.net",
    comuni: ["arezzo"],
  },
  {
    nome: "Associazione culturale Ponte Futuro",
    cosa: "Ambiti di attività indicati dal Comune: ambiente, cultura, ricreazione, sport. Il documento del Comune non dice se le attività sono accessibili alle persone con disabilità: chiedilo all'associazione.",
    dove: "Via P. Calamandrei 183, Arezzo",
    email: "assopontefuturo@outlook.it",
    comuni: ["arezzo"],
  },
  {
    nome: "L'Arte di Apoxiomeno",
    cosa: "Ambiti di attività indicati dal Comune: ambiente, cultura, sociale, sport. Il documento del Comune non dice se le attività sono accessibili alle persone con disabilità: chiedilo all'associazione.",
    dove: "Via Castiglia 4, Monte San Savino (AR)",
    email: "segreteria@premioapoxiomeno.it",
    comuni: ["arezzo"],
  },
  {
    nome: "Il Mondo in Casa",
    cosa: "Ambiti di attività indicati dal Comune: cultura, ricreazione, sociale, turismo. Il documento del Comune non dice se le attività sono accessibili alle persone con disabilità: chiedilo all'associazione.",
    dove: "Via Cesalpino 21, Arezzo",
    email: "museocomunicazione@comune.arezzo.it",
    comuni: ["arezzo"],
  },
);

// Arezzo (AR): società sportive dell'elenco "Voucher Sport 2026" del Comune di Arezzo (elenco degli esercenti abilitati),
// testo incollato da Ilaria il 27/10/2026. Solo quelle per cui il Comune scrive che "sono previste attività dedicate
// anche a bambini/ragazzi diversamente abili". L'elenco non riporta i telefoni nel testo (c'è un link "Contatti"): chiama prima di andare.
PER_PROVINCIA.AR.sport.unshift(
  {
    nome: "A.C.D. Tuscar",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Carlo Pisacane 1, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "A.S.D. Massimo Covani \"pro VV.F Arezzo\" Italo Gasbarri",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Bernardino da Siena 1, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "A.S.D. AKA Team Karate",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Piero Gobetti 23, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "A.S.D. ArezzoRoller2",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Firenze 25, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "A.S.D. Centro Taekwondo Arezzo",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via dell'Olmo 63, località Viciomaggio, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "A.S.D. Il Chiodo Fisso",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via San Firenze 29/A, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "All Stars Arezzo Sport APS ASD",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Località Agazzi 46, 52100 Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Arezzo Karate 1979 ASD",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Vittorio Veneto 33/12, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "ASD Flash Dance",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Ristoro d'Arezzo 168, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "ASD Fly Dance",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Largo Divisione Garibaldi 1, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "ASD Fortis Arezzo",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via dei Pianeti 10, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "ASD Ginnastica F. Petrarca 1877",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Vecchia 15, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "ASD Karate Club Funakoshi Arezzo",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Piazza San Giusto, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "ASD Tennistavolo Arezzo",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Palestra San Giusto (Trento e Trieste), Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "ASD Volley Arezzo",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Guelfa 3, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Chimera Nuoto S.S.D. a R.L.",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Viale Gramsci 7, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Circolo Schermistico Aretino A.S.D.",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Piazza San Giusto 1, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Circolo Tennis Giotto ASD",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Divisione Garibaldi 20, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Club Arezzo A.S.D.",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Corso Italia 249, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Contraerea ASD",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Ubaldo Pasqui 58, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "CSI Arezzo APSSD",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via del Balilla 11, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Four Kicks Tkd Italy A.S.D.",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Edison 37, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Olmoponte Arezzo Santa Firmina A.S.D.",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Andrea del Verrocchio 10, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Scuola Basket Arezzo SRL SSD",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Camillo Golgi 36/C, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "SSD ACF Calcio F. Arezzo Srl",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via La Chianicella 7, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "Time for Dancing ASD",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via delle Biole 34, Arezzo",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
  {
    nome: "USD Capolona Quarata",
    cosa: "Società sportiva abilitata al Voucher Sport 2026 del Comune di Arezzo. Il Comune scrive che sono previste attività dedicate anche a bambini e ragazzi con disabilità: chiedi alla società quali.",
    dove: "Via Giotto snc, Capolona (AR)",
    sito: "https://www.comune.arezzo.it/node/25063",
    comuni: ["arezzo"],
  },
);

// Arezzo (AR): Caritas diocesana (pagina "Carità e Salute – disabilità") e Istituto di Agazzi (pagina "Chi siamo" del sito dell'Istituto),
// lette il 27/10/2026. Solo ciò che le pagine scrivono; le pagine non hanno data di aggiornamento.
PER_PROVINCIA.AR.volontariato.unshift(
  {
    nome: "Caritas diocesana di Arezzo – Carità e Salute (disabilità)",
    cosa: "La Caritas elenca 14 servizi per persone con disabilità: accompagnamento e trasporto, assistenza residenziale, centro diurno, centro \"Dopo di noi\" per chi non ha sostegno familiare, centro socio-riabilitativo, comunità alloggio protetto, formazione e sensibilizzazione, integrazione lavorativa e scolastica, punto di ascolto, residenze sanitarie (RSA e RSD per disabili), servizio domiciliare scolastico, socializzazione. La pagina non descrive i singoli servizi né gli orari: telefona alla Caritas.",
    dove: "Via Fonte Veneziana 19, 52100 Arezzo",
    telefono: "0575 354769",
    email: "caritas@caritas.arezzo.it",
    sito: "https://www.caritasarezzo.it/carita-e-salute-disabilita/",
    comuni: ["arezzo"],
  },
  {
    nome: "Istituto di Agazzi (Madre della Divina Provvidenza)",
    cosa: "Centro di riabilitazione di Arezzo. Servizio Start: rete di servizi residenziali e diurni per persone con disabilità intellettiva tra i 18 e i 65 anni (tra cui il Centro Diurno Catasca). Futurabile: percorsi ambulatoriali per minori da 0 a 18 anni e famiglie. A-Rìa: riabilitazione intensiva in degenza dopo eventi neurologici o ortopedici acuti. Auryn: disturbi dell'alimentazione.",
    dove: "Strada Comunale di Agazzi 47, 52100 Arezzo",
    telefono: "0575 91511",
    email: "info@istitutoagazzi.it",
    sito: "https://www.istitutoagazzi.it/chi-siamo/",
    comuni: ["arezzo"],
  },
);

// 05/11/2026: schede con stato VERIFICATO nella ricerca del 04/11/2026 (siti ufficiali degli enti e pagine dei Comuni).
PER_PROVINCIA.AR.volontariato.push(
  {
    nome: "ANMIC Arezzo – Associazione Nazionale Mutilati e Invalidi Civili",
    cosa: "Sede provinciale di ANMIC: tutela le persone invalide civili e le aiuta con i diritti e le pratiche. Gli orari non sono pubblicati: telefona prima.",
    dove: "Corso Italia 236, 52100 Arezzo",
    telefono: "0575 295873",
    email: "anmic_arezzo@virgilio.it",
    sito: "https://anmic.org/index.php/area-riservata-sedi-provinciali",
    comuni: ["arezzo"],
  },
  {
    nome: "ToscanABILE",
    cosa: "Progetti di inclusione per le persone con disabilità attraverso arte, cultura e turismo. Il contatto telefonico pubblicato sul sito è un numero WhatsApp.",
    dove: "Via G. Marconi 18, 52100 Arezzo",
    email: "toscanabile@toscanabile.com",
    whatsapp: "+39 375 8306509",
    sito: "https://toscanabile.com/",
    comuni: ["arezzo"],
  },
  {
    nome: "Casa di Elena (Il Casolino)",
    cosa: "Casa famiglia a San Leo, gestita da Il Casolino e indicata dal Comune di Arezzo tra i servizi attivi, aperta tutti i giorni nelle 24 ore. Per l'accesso il Comune rimanda al Segretariato sociale: 0575 377281, 0575 377289, 0575 377299, segretariatosociale@comune.arezzo.it.",
    dove: "Via del Casolino 3, San Leo (Arezzo)",
    sito: "https://comune.arezzo.it/node/22898",
    comuni: ["arezzo"],
  },
);

PER_PROVINCIA.FI.sport.push(
  {
    nome: "G.S. Unità Spinale Firenze ONLUS (Palarcobaleno)",
    cosa: "Gestisce la palestra comunale Palarcobaleno, con attività motoria per persone con disabilità.",
    dove: "Via Lunga 126/128, Firenze",
    telefono: "345 7692805",
    email: "infogsunispifionlus@gmail.com",
    sito: "https://sport.comune.fi.it/luoghi-dello-sport/palestra-handicap-palarcobaleno",
    comuni: ["firenze"],
  },
  {
    nome: "Il Ritrovo APS-ASD",
    cosa: "Associazione di promozione sociale sportiva, nell'elenco degli erogatori della Società della Salute Firenze per la disabilità (provvedimento del 09/10/2026).",
    dove: "Via San Michele a Rovezzano 10/A, 50136 Firenze (impianto in Viale Malta 8)",
    telefono: "339 1936542",
    email: "associazioneilritrovo@gmail.com",
    comuni: ["firenze"],
  },
);

PER_PROVINCIA.GE.volontariato.push({
  nome: "Auto Mutuo Aiuto Disabili (Recco)",
  cosa: "Gruppo di auto mutuo aiuto per persone con disabilità, nell'elenco delle associazioni del Comune di Recco. Altri recapiti non sono pubblicati.",
  telefono: "0185 76147",
  sito: "https://halleyweb.com/c010047/zf/index.php/associazioni/",
  comuni: ["recco"],
});

// 05/11/2026: schede con stato VERIFICATO nella seconda ricerca (siti ufficiali, schede della Consulta di Firenze, elenchi dei Comuni).
PER_PROVINCIA.FI = PER_PROVINCIA.FI ?? { volontariato: [], sport: [] };
PER_PROVINCIA.FI.volontariato.push(
  {
    nome: "Davide e Golia (sede di Firenze)",
    cosa: "Servizi e inclusione per persone con disabilità. Ha una sede operativa anche a Scandicci.",
    dove: "Via del Pesciolino 11d, 50145 Firenze",
    telefono: "347 7985190 / 338 8866638",
    email: "segreteria@davideegoliaonlus.it",
    sito: "https://www.davideegoliaonlus.it",
    comuni: ["firenze"],
  },
  {
    nome: "Davide e Golia (sede operativa di Scandicci)",
    cosa: "Attività e servizi per persone con disabilità. La sede principale è a Firenze.",
    dove: "Via del Padule 34, Scandicci",
    telefono: "347 7985190 / 338 8866638",
    email: "segreteria@davideegoliaonlus.it",
    sito: "https://davideegoliaonlus.it",
    comuni: ["scandicci"],
  },
  {
    nome: "A.F.F.S.M. – Associazione Familiari per la Salute Mentale",
    cosa: "Famiglie e salute mentale.",
    dove: "Via Enrico Navigatore 17, 50127 Firenze",
    telefono: "338 9180287",
    email: "affsm_q5@yahoo.it",
    sito: "http://www.coordinamentotoscanosalutementale.it/",
    comuni: ["firenze"],
  },
  {
    nome: "AIABA – Autismo",
    cosa: "Assistenza e percorsi per persone autistiche.",
    dove: "Via Desiderio da Settignano 20, 50135 Firenze",
    telefono: "055 697059",
    email: "amministrazione@aiaba.it",
    sito: "http://www.aiaba.it",
    comuni: ["firenze"],
  },
  {
    nome: "AIAS Firenze",
    cosa: "Tutela e inclusione delle persone con disabilità.",
    dove: "Via R. Leoncavallo 20, 50127 Firenze",
    telefono: "055 3215145",
    email: "aiasfi02@libero.it",
    sito: "http://www.aiasfirenze.it/",
    comuni: ["firenze"],
  },
  {
    nome: "AISLA Firenze",
    cosa: "Assistenza e sostegno alle persone con SLA e alle famiglie.",
    dove: "Piazza Elia Dalla Costa 33, 50136 Firenze",
    telefono: "348 1880933 / 334 7160938",
    email: "segreteria@aislafirenze.it",
    sito: "http://www.aislafirenze.it",
    comuni: ["firenze"],
  },
  {
    nome: "ANMIL Firenze",
    cosa: "Tutela delle persone con invalidità da lavoro.",
    dove: "Via Benedetto Marcello 1, 50144 Firenze",
    telefono: "055 19982720",
    email: "firenze@anmil.it",
    sito: "https://www.anmil.it/",
    comuni: ["firenze"],
  },
  {
    nome: "ATE – Associazione Toscana Emofilici",
    cosa: "Sostegno alle persone con emofilia e altre malattie emorragiche.",
    dove: "Via del Campofiore 102, 50136 Firenze",
    telefono: "375 6641339",
    email: "info@ateodv.org",
    sito: "http://www.ateodv.org",
    comuni: ["firenze"],
  },
  {
    nome: "Autismo Firenze",
    cosa: "Autonomia e inclusione delle persone autistiche.",
    dove: "Via Giambologna 14, 50132 Firenze",
    telefono: "055 4089345 / 349 8712477",
    email: "info@autismofirenze.org",
    sito: "http://www.autismofirenze.org",
    comuni: ["firenze"],
  },
  {
    nome: "ENS Firenze – Ente Nazionale Sordi",
    cosa: "Tutela e servizi per le persone sorde.",
    dove: "Via Manzoni 13, 50121 Firenze",
    telefono: "055 2260045",
    sito: "https://firenze.ens.it/",
    comuni: ["firenze"],
  },
  {
    nome: "FIADDA Toscana",
    cosa: "Famiglie e persone con disabilità uditiva.",
    dove: "Via delle Porte Nuove 33, 50144 Firenze",
    telefono: "328 8211260 / 347 2928529",
    email: "info@fiaddatoscana.org",
    sito: "http://www.fiaddatoscana.org",
    comuni: ["firenze"],
  },
  {
    nome: "LINAR",
    cosa: "Laboratori e inclusione delle persone con disabilità.",
    dove: "Via Villamagna 150, 50126 Firenze",
    telefono: "055 6530230",
    email: "linarfi@libero.it",
    comuni: ["firenze"],
  },
  {
    nome: "PAMAPI – centro per adulti autistici",
    cosa: "Cooperativa con centro e servizi per adulti con autismo.",
    dove: "Via Bolognese 238, 50139 Firenze",
    telefono: "055 400594 / 347 6762816",
    email: "segreteria@pamapi-autismo.it",
    sito: "http://www.pamapi-autismo.it/",
    comuni: ["firenze"],
  },
  {
    nome: "Trisomia 21 (AT21)",
    cosa: "Disabilità intellettive e genetiche: autonomia e riabilitazione.",
    dove: "Viale Alessandro Volta 16/18, 50131 Firenze",
    telefono: "055 5000458",
    email: "at21@at21.it",
    sito: "http://www.at21.it",
    comuni: ["firenze"],
  },
  {
    nome: "UICI Firenze – Unione Italiana dei Ciechi e degli Ipovedenti",
    cosa: "Diritti e servizi per ciechi e ipovedenti.",
    dove: "Via Leonardo Fibonacci 5, 50131 Firenze",
    telefono: "055 580319",
    email: "uicfi@uici.it",
    sito: "http://www.uicifirenze.it",
    comuni: ["firenze"],
  },
  {
    nome: "UISS",
    cosa: "Servizi sociali, anche nell'ambito della disabilità.",
    dove: "Via Vittorio Corcos 15, 50142 Firenze",
    telefono: "347 8856327 / 055 455273",
    comuni: ["firenze"],
  },
  {
    nome: "UNMS Toscana – Unione Nazionale Mutilati per Servizio",
    cosa: "Tutela dei mutilati e degli invalidi per servizio.",
    dove: "Via Piero Gianfigliazzi 7, 50124 Firenze",
    telefono: "055 573490",
    email: "toscana@unms.it",
    sito: "https://www.unms.it/",
    comuni: ["firenze"],
  },
);

PER_PROVINCIA.PR = PER_PROVINCIA.PR ?? { volontariato: [], sport: [] };
PER_PROVINCIA.PR.volontariato.push(
  {
    nome: "Anffas Parma APS",
    cosa: "Disabilità intellettive e del neurosviluppo, sostegno alle famiglie.",
    dove: "Via Rudolf Jacobs 14, 43123 Parma",
    telefono: "0521 261393",
    email: "segreteria@anffasparma.it",
    sito: "https://www.anffasparma.it",
    comuni: ["parma"],
  },
  {
    nome: "LIFC Emilia – Fibrosi cistica",
    cosa: "Sostegno alle persone con fibrosi cistica e alle famiglie.",
    dove: "Via Leonardo da Vinci 32, 43123 Parma",
    telefono: "0521 775896 / 392 6704837",
    email: "fibrosicisticaemilia@libero.it",
    sito: "http://www.fibrosicisticaemilia.it",
    comuni: ["parma"],
  },
  {
    nome: "Prader-Willi Emilia-Romagna",
    cosa: "Sostegno alle persone con sindrome di Prader-Willi e alle famiglie.",
    dove: "Via Borgo Lalatta 3, 43121 Parma",
    telefono: "329 5948248",
    email: "info@praderwilliemiliaromagna.it",
    sito: "http://www.praderwilliemiliaromagna.it",
    comuni: ["parma"],
  },
);

PER_PROVINCIA.PR = PER_PROVINCIA.PR ?? { volontariato: [], sport: [] };
PER_PROVINCIA.PR.sport.push(
  {
    nome: "ASD Sanseverina",
    cosa: "Sport inclusivo, tra cui nuoto, bocce e calcio.",
    dove: "Strada Mirandola 50, 43123 Parma",
    telefono: "339 3020190",
    email: "info@sanseverina.org",
    sito: "https://sanseverina.org",
    comuni: ["parma"],
  },
  {
    nome: "CSI Parma",
    cosa: "Formazione di operatori per lo sport inclusivo.",
    dove: "Piazzale Matteotti 9, Parma",
    telefono: "0521 281226",
    email: "segreteria@csiparma.it",
    sito: "https://csiparma.it",
    comuni: ["parma"],
  },
);

PER_PROVINCIA.VT = PER_PROVINCIA.VT ?? { volontariato: [], sport: [] };
PER_PROVINCIA.VT.volontariato.push(
  {
    nome: "Associazione di Solidarietà Falisca",
    cosa: "Trasporto e sostegno a persone con disabilità. Indicata nell'albo comunale delle associazioni (pagina del 15/02/2026).",
    dove: "Via Giuseppe Contadini snc, Montefiascone",
    telefono: "0761 825955 / 320 8772487",
    email: "solidarieta.falisca@alice.it",
    comuni: ["montefiascone"],
  },
);

PER_PROVINCIA.GE = PER_PROVINCIA.GE ?? { volontariato: [], sport: [] };
PER_PROVINCIA.GE.sport.push(
  {
    nome: "Lega Navale Italiana – Sezione di Camogli",
    cosa: "Attività nautiche: partecipa alle iniziative inclusive NavigAbile 2026 del Comune di Camogli (31/08/2026).",
    dove: "Via Scalo 1, 16032 Camogli",
    telefono: "0185 771472 / 392 5473264",
    email: "camogli@leganavale.it",
    comuni: ["camogli"],
  },
);

PER_PROVINCIA.GE = PER_PROVINCIA.GE ?? { volontariato: [], sport: [] };
PER_PROVINCIA.GE.volontariato.push(
  {
    nome: "Nuova Ecopsi APS",
    cosa: "Assistenza alle persone con disabilità; partecipa anche alle attività inclusive del 2026.",
    dove: "Via XXV Aprile 13/1, Recco",
    telefono: "339 7283224",
    comuni: ["recco"],
  },
);

const VOLONTARIATO_NAZIONALI: Associazione[] = [
  {
    nome: "Centri di Servizio per il Volontariato (CSVnet)",
    cosa: "Ogni provincia ha un CSV che conosce le associazioni del territorio: sul sito trovi quello della tua zona.",
    sito: "https://csvnet.it",
  },
  {
    nome: "FISH – Federazione per i diritti delle persone con disabilità e famiglie",
    cosa: "Federazione di associazioni che rappresenta le persone con disabilità e le famiglie, con federazioni regionali.",
    dove: "Via Guidubaldo del Monte 61, 00197 Roma",
    telefono: "06 78851262",
    email: "presidenza@fishets.it",
    sito: "https://fishets.it/contatti/",
  },
  {
    nome: "ENS – Ente Nazionale Sordi",
    cosa: "Rappresenta le persone sorde e promuove i loro diritti e l'inclusione, con sedi sul territorio.",
    dove: "Via Gregorio VII 120, 00165 Roma",
    telefono: "06 398051",
    email: "protocollo@ens.it",
    sito: "https://www.ens.it/le-nostre-sedi/",
  },
  {
    nome: "UICI – Unione Italiana dei Ciechi e degli Ipovedenti",
    cosa: "Sostiene le persone cieche e ipovedenti, anche con altre disabilità: autonomia, accessibilità, mobilità. Numero verde 800 682682, dal lunedì al venerdì dalle 9 alle 13. Ha sezioni regionali e provinciali.",
    dove: "Via Borgognona 38-42, 00187 Roma",
    telefono: "06 699881",
    email: "segreteria@uici.it",
    sito: "https://www.uiciechi.it/organizzazione/regioni/indiceregioni.asp",
  },
  {
    nome: "Anffas – Associazione nazionale famiglie e persone con disabilità intellettive e del neurosviluppo",
    cosa: "Promuove i diritti e la partecipazione delle persone con disabilità intellettive e relazionali e sostiene le famiglie. Nella pagina \"Dove siamo\" trovi l'associazione locale.",
    dove: "Via Latina 20, 00179 Roma",
    telefono: "06 3611524",
    email: "nazionale@anffas.net",
    sito: "https://www.anffas.net/it/chi-siamo/dove-siamo/",
  },
  {
    nome: "ANGSA – Associazione Nazionale Genitori perSone con Autismo",
    cosa: "Difende i diritti delle persone con autismo e delle loro famiglie. Il Telefono Blu (numero gratuito 800 03 18 19) risponde dal lunedì al venerdì dalle 9:30 alle 12:30; email telefonoblu@angsa.it.",
    dove: "c/o FAIP, Via Filippo Corridoni 13, 00195 Roma",
    telefono: "800 03 18 19",
    email: "segreteria@angsa.it",
    sito: "https://angsa.it/contatti/",
  },
  {
    nome: "AISM – Associazione Italiana Sclerosi Multipla",
    cosa: "Sostiene le persone con sclerosi multipla e promuove i loro diritti. Il numero verde è 800 803028. Nella pagina \"Dove in Italia\" trovi la sezione più vicina.",
    dove: "Via Operai 40, 16149 Genova",
    telefono: "800 803028",
    email: "aism@aism.it",
    sito: "https://www.aism.it",
  },
  {
    nome: "UILDM – Unione Italiana Lotta alla Distrofia Muscolare",
    cosa: "Sostiene le persone con distrofie muscolari e malattie neuromuscolari attraverso le sezioni locali. Numero verde Stella: 800 58 97 38.",
    dove: "Via Vergerio 19, 35126 Padova",
    telefono: "049 8021001",
    email: "direzionenazionale@uildm.it",
    sito: "https://uildm.org/sezioni/",
  },
  {
    nome: "UNIAMO – Federazione Italiana Malattie Rare",
    cosa: "Rappresenta le persone con malattia rara e le famiglie; il servizio SAIO offre ascolto, informazione e orientamento.",
    dove: "Via Nomentana 133, Roma",
    telefono: "06 4404773",
    email: "segreteria@uniamo.org",
    sito: "https://uniamo.org",
  },
];

// Raggio entro cui un'associazione si considera "vicina" (anche oltre il confine della provincia).
export const RAGGIO_KM = 30;

const COORD = COORDINATE as Record<string, [number, number]>;

/** Distanza in km (linea d'aria) tra i municipi di due Comuni dell'app; null se manca una coordinata. */
export function distanzaKm(slugA: string, slugB: string): number | null {
  const a = COORD[slugA];
  const b = COORD[slugB];
  if (!a || !b) return null;
  const rad = Math.PI / 180;
  const dLat = (b[0] - a[0]) * rad;
  const dLon = (b[1] - a[1]) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

/** L'associazione ha sede in un Comune dell'app entro RAGGIO_KM dal Comune attivo. */
function entroRaggio(a: Associazione): boolean {
  return !!a.comuni?.some((s) => {
    const d = distanzaKm(s, comune.slug);
    return d !== null && d <= RAGGIO_KM;
  });
}

function eVicina(a: Associazione): boolean {
  return !!(a.comuni?.includes(comune.slug) || a.province?.includes(comune.provincia) || entroRaggio(a));
}

/** Elenco della provincia del Comune, più le associazioni di altre province con sede entro il raggio. */
function elenco(tipo: "volontariato" | "sport"): Associazione[] {
  const propria = PER_PROVINCIA[comune.provincia]?.[tipo] ?? [];
  const nomi = new Set(propria.map((a) => a.nome));
  const oltreConfine: Associazione[] = [];
  for (const [pr, el] of Object.entries(PER_PROVINCIA)) {
    if (pr === comune.provincia) continue;
    for (const a of el[tipo]) {
      if (!nomi.has(a.nome) && entroRaggio(a)) {
        nomi.add(a.nome);
        oltreConfine.push(a);
      }
    }
  }
  return [...propria, ...oltreConfine];
}

function ordina(lista: Associazione[]): Associazione[] {
  return [...lista.filter(eVicina), ...lista.filter((a) => !eVicina(a))];
}

export function associazioniDelComune() {
  const elencoVolontariato = elenco("volontariato");
  const volontariato = ordina(elencoVolontariato);
  const sport = ordina(elenco("sport"));
  const sportRegione = SPORT_REGIONE[comune.regione] ?? [];
  return {
    volontariato,
    sport,
    sportRegione,
    haElenco: volontariato.length + sport.length > 0,
    volontariatoLocali: elencoVolontariato.filter((a) => !a.province).length,
    volontariatoNazionali: VOLONTARIATO_NAZIONALI,
    sportNazionali: sportRegione.length ? [] : SPORT_NAZIONALI,
    vicina: eVicina,
  };
}

// 21/10/2026: tolte le associazioni con recapito non confermato (regola: nessuna informazione dubbia in app).
