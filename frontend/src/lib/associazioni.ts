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




const VOLONTARIATO_NAZIONALI: Associazione[] = [
  {
    nome: "Centri di Servizio per il Volontariato (CSVnet)",
    cosa: "Ogni provincia ha un CSV che conosce le associazioni del territorio: sul sito trovi quello della tua zona.",
    sito: "https://csvnet.it",
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
