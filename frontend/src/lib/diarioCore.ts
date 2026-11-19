// "Il mio diario": le note che la persona scrive DOPO un incontro (con chi ha parlato,
// cosa ha capito, cosa deve fare adesso, quali documenti preparare).
// Funzioni pure, senza import: si possono provare da sole (npm run prova:diario).
//
// REGOLE
//  - i dati restano SOLO sul dispositivo e non sono cifrati: l'app lo dice chiaramente
//  - testi brevi e con limite di lunghezza; l'app invita a non scrivere nomi, codici fiscali o dettagli clinici
//  - un tipo di dato, un solo archivio: i passi con una data diventano scadenze nell'agenda
//    (stesso archivio delle altre date), non una seconda agenda
//  - il diario è unico per telefono (non separato per Comune)

/** Dove si salva il diario (solo sul dispositivo, uguale per tutti i Comuni) */
export const DIARIO_KEY = "tutelapp:diario";

export const MAX_CAPITO = 500;
export const MAX_PASSI = 5;
export const MAX_DOCUMENTI = 8;
export const MAX_TESTO_ELENCO = 120;
export const MAX_TESTO_BREVE = 80;
/** Oltre questo numero di giorni dopo l'incontro l'app smette di chiedere "Com'è andato?" */
export const FINESTRA_RACCONTO_GIORNI = 30;
/** Prefisso delle scadenze create da un passo del diario */
export const PREFISSO_PASSO = "passo-";

export type Passo = {
  id: string;
  testo: string;
  /** Data facoltativa, formato AAAA-MM-GG */
  data?: string;
  fatto: boolean;
};

export type Documento = {
  id: string;
  testo: string;
  pronto: boolean;
};

export type VoceDiario = {
  id: string;
  /** Quando è stata scritta (data e ora) */
  creata: string;
  /** Giorno dell'incontro, formato AAAA-MM-GG */
  data: string;
  titolo: string;
  /** Appuntamento dell'agenda da cui nasce, se c'è */
  appuntamentoId?: string;
  conChi?: string;
  ente?: string;
  capito?: string;
  passi: Passo[];
  documenti: Documento[];
};

export type Diario = { versione: 1; voci: VoceDiario[] };

export const DIARIO_VUOTO: Diario = { versione: 1, voci: [] };

/** Quanto serve di una scadenza dell'agenda per capire se è un incontro già passato */
export type ScadenzaIncontro = {
  id: string;
  tipo: string;
  data: string;
  titolo?: string;
  incontro?: boolean;
};

// ---------- Utilità ----------
export function pulisci(t: unknown, max: number): string {
  if (typeof t !== "string") return "";
  return t.replace(/\s+/g, " ").trim().slice(0, max);
}

/** Come pulisci, ma conserva gli a capo (per "Cosa ho capito") */
export function pulisciLungo(t: unknown, max: number): string {
  if (typeof t !== "string") return "";
  return t
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, max);
}

export function isoValida(s: unknown): s is string {
  if (typeof s !== "string") return false;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return false;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return d.getFullYear() === Number(m[1]) && d.getMonth() === Number(m[2]) - 1 && d.getDate() === Number(m[3]);
}

/**
 * Identificativo di lunghezza fissa: serve perché l'agenda cerca le sue voci con
 * "inizia con" e un id non deve mai essere l'inizio di un altro.
 */
export function nuovoId(prefisso: string, adesso: number = Date.now(), casuale: number = Math.random()): string {
  const t = adesso.toString(36).padStart(9, "0").slice(-9);
  const r = Math.floor(casuale * 36 ** 4)
    .toString(36)
    .padStart(4, "0")
    .slice(-4);
  return `${prefisso}${t}${r}`;
}

// ---------- Lettura (scarta tutto ciò che è rovinato) ----------
function leggiPassi(v: unknown): Passo[] {
  if (!Array.isArray(v)) return [];
  const passi: Passo[] = [];
  for (const p of v) {
    if (!p || typeof p !== "object") continue;
    const testo = pulisci((p as any).testo, MAX_TESTO_ELENCO);
    const id = typeof (p as any).id === "string" ? (p as any).id : "";
    if (!testo || !id) continue;
    const data = isoValida((p as any).data) ? (p as any).data : undefined;
    passi.push({ id, testo, ...(data ? { data } : {}), fatto: (p as any).fatto === true });
    if (passi.length >= MAX_PASSI) break;
  }
  return passi;
}

function leggiDocumenti(v: unknown): Documento[] {
  if (!Array.isArray(v)) return [];
  const docs: Documento[] = [];
  for (const d of v) {
    if (!d || typeof d !== "object") continue;
    const testo = pulisci((d as any).testo, MAX_TESTO_ELENCO);
    const id = typeof (d as any).id === "string" ? (d as any).id : "";
    if (!testo || !id) continue;
    docs.push({ id, testo, pronto: (d as any).pronto === true });
    if (docs.length >= MAX_DOCUMENTI) break;
  }
  return docs;
}

export function leggiDiario(raw: string | null | undefined): Diario {
  if (!raw) return { ...DIARIO_VUOTO, voci: [] };
  try {
    const v = JSON.parse(raw);
    if (!v || typeof v !== "object" || !Array.isArray(v.voci)) return { ...DIARIO_VUOTO, voci: [] };
    const voci: VoceDiario[] = [];
    for (const x of v.voci) {
      if (!x || typeof x !== "object") continue;
      if (typeof x.id !== "string" || !x.id || !isoValida(x.data)) continue;
      const capito = pulisciLungo(x.capito, MAX_CAPITO);
      const conChi = pulisci(x.conChi, MAX_TESTO_BREVE);
      const ente = pulisci(x.ente, MAX_TESTO_BREVE);
      const voce: VoceDiario = {
        id: x.id,
        creata: typeof x.creata === "string" ? x.creata : "",
        data: x.data,
        titolo: pulisci(x.titolo, MAX_TESTO_BREVE) || "Incontro",
        ...(typeof x.appuntamentoId === "string" && x.appuntamentoId ? { appuntamentoId: x.appuntamentoId } : {}),
        ...(conChi ? { conChi } : {}),
        ...(ente ? { ente } : {}),
        ...(capito ? { capito } : {}),
        passi: leggiPassi(x.passi),
        documenti: leggiDocumenti(x.documenti),
      };
      voci.push(voce);
    }
    return { versione: 1, voci };
  } catch {
    return { ...DIARIO_VUOTO, voci: [] };
  }
}

/** Una voce ha senso solo se contiene almeno qualcosa di scritto */
export function voceVuota(v: Pick<VoceDiario, "conChi" | "ente" | "capito" | "passi" | "documenti">): boolean {
  return !v.conChi && !v.ente && !v.capito && v.passi.length === 0 && v.documenti.length === 0;
}

// ---------- Modifiche (restituiscono un diario nuovo, non cambiano quello ricevuto) ----------
/** Aggiunge la voce, oppure sostituisce quella con lo stesso id. Le più recenti stanno in alto. */
export function conVoce(d: Diario, voce: VoceDiario): Diario {
  const altre = d.voci.filter((x) => x.id !== voce.id);
  const voci = [...altre, voce].sort((a, b) => (a.data === b.data ? b.creata.localeCompare(a.creata) : b.data.localeCompare(a.data)));
  return { versione: 1, voci };
}

export function senzaVoce(d: Diario, voceId: string): Diario {
  return { versione: 1, voci: d.voci.filter((x) => x.id !== voceId) };
}

export function conPassoFatto(d: Diario, voceId: string, passoId: string, fatto: boolean): Diario {
  return {
    versione: 1,
    voci: d.voci.map((v) =>
      v.id !== voceId ? v : { ...v, passi: v.passi.map((p) => (p.id === passoId ? { ...p, fatto } : p)) },
    ),
  };
}

export function conDocumentoPronto(d: Diario, voceId: string, docId: string, pronto: boolean): Diario {
  return {
    versione: 1,
    voci: d.voci.map((v) =>
      v.id !== voceId ? v : { ...v, documenti: v.documenti.map((x) => (x.id === docId ? { ...x, pronto } : x)) },
    ),
  };
}

/** Toglie la data di un passo (quando la persona toglie dall'agenda la scadenza che ne è nata) */
export function senzaDataPasso(d: Diario, passoId: string): Diario {
  return {
    versione: 1,
    voci: d.voci.map((v) => ({
      ...v,
      passi: v.passi.map((p) => {
        if (p.id !== passoId) return p;
        const { data: _tolta, ...resto } = p;
        return resto;
      }),
    })),
  };
}

// ---------- Passi da fare ----------
export type PassoAperto = { passo: Passo; voce: VoceDiario };

/** I passi non ancora fatti: prima quelli con una data (la più vicina per prima), poi gli altri */
export function passiAperti(d: Diario): PassoAperto[] {
  const lista: PassoAperto[] = [];
  for (const voce of d.voci) for (const passo of voce.passi) if (!passo.fatto) lista.push({ passo, voce });
  return lista.sort((a, b) => {
    if (a.passo.data && b.passo.data) return a.passo.data.localeCompare(b.passo.data);
    if (a.passo.data) return -1;
    if (b.passo.data) return 1;
    return b.voce.data.localeCompare(a.voce.data);
  });
}

/** Il passo da mostrare come "prossimo": il primo dell'elenco dei passi aperti */
export function prossimoPassoAperto(d: Diario): PassoAperto | null {
  return passiAperti(d)[0] ?? null;
}

// ---------- Incontri da raccontare ----------
const ggDa = (iso: string): Date => {
  const [a, m, g] = iso.split("-").map(Number);
  return new Date(a, m - 1, g);
};

const giorniTra = (da: Date, a: Date): number =>
  Math.round(
    (new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime() -
      new Date(da.getFullYear(), da.getMonth(), da.getDate()).getTime()) /
      86400000,
  );

/**
 * L'incontro più recente già passato di cui non c'è ancora una voce nel diario.
 * "Passato" = da ieri in poi: il giorno stesso non si chiede nulla.
 * Dopo 30 giorni non si chiede più.
 */
export function incontroDaRaccontare<S extends ScadenzaIncontro>(
  scadenze: S[],
  d: Diario,
  oggi: Date,
  finestraGiorni: number = FINESTRA_RACCONTO_GIORNI,
): S | null {
  const giaScritti = new Set(d.voci.map((v) => v.appuntamentoId).filter(Boolean));
  let migliore: S | null = null;
  for (const s of scadenze) {
    if (s.tipo !== "altro" || s.incontro !== true || !isoValida(s.data)) continue;
    if (giaScritti.has(s.id)) continue;
    const passati = giorniTra(ggDa(s.data), oggi);
    if (passati < 1 || passati > finestraGiorni) continue;
    if (!migliore || s.data > migliore.data) migliore = s;
  }
  return migliore;
}

// ---------- Agenda: i passi con una data diventano scadenze ----------
/**
 * Riallinea l'agenda al diario: toglie le scadenze nate dai passi e ricrea quelle dei passi
 * con data non ancora fatti. Non tocca le altre scadenze. Si può ripetere senza effetti.
 */
export function sincronizzaScadenze<S extends { id: string; tipo: string; data: string }>(lista: S[], d: Diario): S[] {
  const altre = lista.filter((s) => !s.id.startsWith(PREFISSO_PASSO));
  const dalDiario: S[] = [];
  for (const voce of d.voci) {
    for (const p of voce.passi) {
      if (p.fatto || !p.data) continue;
      dalDiario.push({ id: `${PREFISSO_PASSO}${p.id}`, tipo: "altro", data: p.data, titolo: p.testo } as unknown as S);
    }
  }
  return [...altre, ...dalDiario];
}

/** L'id del passo a cui appartiene una scadenza creata dal diario (altrimenti null) */
export function passoDaScadenza(scadenzaId: string): string | null {
  return scadenzaId.startsWith(PREFISSO_PASSO) ? scadenzaId.slice(PREFISSO_PASSO.length) : null;
}
