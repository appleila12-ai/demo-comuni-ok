// Associazioni del territorio che si occupano di disabilità: volontariato e famiglie,
// e (a parte) sport. Si mostrano quelle della provincia del Comune attivo, prima
// quelle del Comune stesso. Dati raccolti a settembre 2026 da siti delle associazioni,
// del Comune della Spezia (Distretto 18), del CIP, di SportAbility Liguria e da
// articoli locali recenti. "verificare: true" = recapito da confermare.

import { comune } from "@/src/config/comune";

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
        nome: "ENS – Ente Nazionale Sordi",
        cosa: "Tutela e inclusione a scuola, al lavoro e nella vita sociale delle persone sorde.",
        dove: "Via dei Pioppi 6, La Spezia",
        telefono: "0187 711399",
        email: "laspezia@ens.it",
        sito: "https://laspezia.ens.it",
        verificare: true,
      },
      {
        nome: "AISM – Sclerosi multipla",
        cosa: "Sostegno alle persone con sclerosi multipla e alle famiglie, con colloqui con l'assistente sociale su appuntamento.",
        dove: "Via Anita Garibaldi 12, La Spezia",
        telefono: "338 6660842",
        email: "aismlaspezia@aism.it",
        sito: "https://www.aism.it/struttura/sezione_provinciale_aism_la_spezia",
      },
      {
        nome: "ANMIC – Invalidi civili",
        cosa: "Tutela e assistenza per le persone con invalidità civile: diritti, pratiche, informazioni.",
        dove: "La Spezia",
        sito: "https://www.anmicliguria.it/sedi_sp.asp",
        verificare: true,
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
      {
        nome: "Arcieri Sarzana",
        cosa: "Tiro con l'arco, società nell'elenco CIP: chiedi le attività per arcieri con disabilità.",
        dove: "Via Alfieri 56, Sarzana",
        telefono: "339 8927985",
        email: "segreteria@arcierisarzana.it",
        comuni: ["sarzana", "arcola"],
        verificare: true,
      },
      {
        nome: "Arcieri del Golfo",
        cosa: "Tiro con l'arco, società nell'elenco CIP.",
        dove: "Via Buonviaggio 47, La Spezia",
        telefono: "347 0447492",
        email: "arcieridelgolfo@libero.it",
        comuni: ["la-spezia"],
        verificare: true,
      },
      {
        nome: "Circolo Ippico 3 Emme",
        cosa: "Equitazione, società nell'elenco CIP per gli sport equestri paralimpici.",
        dove: "Via del Pioppo 3, Vezzano Ligure",
        telefono: "340 2879644",
        comuni: ["ricco-del-golfo", "arcola"],
        verificare: true,
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

const VOLONTARIATO_NAZIONALI: Associazione[] = [
  {
    nome: "Centri di Servizio per il Volontariato (CSVnet)",
    cosa: "Ogni provincia ha un CSV che conosce le associazioni del territorio: sul sito trovi quello della tua zona.",
    sito: "https://csvnet.it",
  },
];

function eVicina(a: Associazione): boolean {
  return !!(a.comuni?.includes(comune.slug) || a.province?.includes(comune.provincia));
}

function ordina(lista: Associazione[]): Associazione[] {
  return [...lista.filter(eVicina), ...lista.filter((a) => !eVicina(a))];
}

export function associazioniDelComune() {
  const prov = PER_PROVINCIA[comune.provincia];
  const volontariato = ordina(prov?.volontariato ?? []);
  const sport = ordina(prov?.sport ?? []);
  const sportRegione = SPORT_REGIONE[comune.regione] ?? [];
  return {
    volontariato,
    sport,
    sportRegione,
    haElenco: volontariato.length + sport.length > 0,
    volontariatoLocali: (prov?.volontariato ?? []).filter((a) => !a.province).length,
    volontariatoNazionali: VOLONTARIATO_NAZIONALI,
    sportNazionali: sportRegione.length ? [] : SPORT_NAZIONALI,
    vicina: eVicina,
  };
}
