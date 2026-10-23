// Scadenzario: dalle date che la persona inserisce, l'app calcola le scadenze
// importanti e crea un calendario (.ics) da aggiungere al telefono.
// Regole verificate a settembre 2026 (fonti in MULTI-COMUNE.md).

/** Dove si salvano le scadenze e gli appuntamenti (solo sul dispositivo) */
export const SCADENZE_KEY = "tutelapp:scadenze";

export type TipoScadenza = "verbale" | "revisione" | "cude" | "isee" | "altro";

export type Scadenza = {
  id: string;
  tipo: TipoScadenza;
  /** Data inserita dalla persona, formato AAAA-MM-GG */
  data: string;
  /** Solo per "altro" */
  titolo?: string;
  /** Solo per "altro": orario facoltativo, formato HH:MM */
  ora?: string;
  /** Solo per "altro": nota facoltativa (es. cosa portare) */
  nota?: string;
};

export type Evento = {
  id: string;
  titolo: string;
  data: Date;
  spiegazione: string;
  /** Giorni di anticipo per il promemoria */
  anticipo: number;
  urgente?: boolean;
  /** Orario dell'appuntamento (HH:MM), se la persona l'ha scritto */
  ora?: string;
  /** Nota della persona, se l'ha scritta */
  nota?: string;
  /** true = appuntamento in agenda (inserito dalla persona), false = scadenza calcolata */
  appuntamento?: boolean;
};

export type TipoInfo = {
  tipo: TipoScadenza;
  icon: string;
  titolo: string;
  domanda: string;
  aiuto: string;
  /** Se false la data non si chiede (es. ISEE) */
  chiedeData: boolean;
};

export const TIPI: TipoInfo[] = [
  {
    tipo: "verbale",
    icon: "document-text-outline",
    titolo: "Ho ricevuto il verbale",
    domanda: "Quando ti è arrivato il verbale?",
    aiuto: "Se non sei d'accordo con l'esito, in genere il ricorso in tribunale (ATP) va presentato entro 6 mesi dalla notifica del verbale. Qui trovi solo una data indicativa: verifica con un patronato o un avvocato.",
    chiedeData: true,
  },
  {
    tipo: "revisione",
    icon: "refresh-outline",
    titolo: "Il verbale ha una data di revisione",
    domanda: "Quale data di revisione è scritta sul verbale?",
    aiuto: "Fino alla nuova visita i benefici già riconosciuti continuano.",
    chiedeData: true,
  },
  {
    tipo: "cude",
    icon: "car-outline",
    titolo: "Contrassegno auto (CUDE)",
    domanda: "Quando scade il contrassegno?",
    aiuto: "Per le disabilità permanenti dura 5 anni: il rinnovo si chiede al Comune.",
    chiedeData: true,
  },
  {
    tipo: "isee",
    icon: "wallet-outline",
    titolo: "ISEE",
    domanda: "",
    aiuto: "L'ISEE vale fino al 31 dicembre: a gennaio va rifatto per non perdere bonus e agevolazioni.",
    chiedeData: false,
  },
  {
    tipo: "altro",
    icon: "calendar-outline",
    titolo: "Appuntamento in agenda",
    domanda: "Quando?",
    aiuto: "Una visita, una terapia, un colloquio, la convocazione dell'équipe… Se vuoi, scrivi anche l'ora e una nota (per esempio cosa portare).",
    chiedeData: true,
  },
];

export const tipoInfo = (t: TipoScadenza) => TIPI.find((x) => x.tipo === t)!;

// ---------- Date ----------
export function daIso(s: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return isNaN(d.getTime()) ? null : d;
}

/** Accetta 12/03/2026, 12-3-2026, 12.03.26 → "2026-03-12" */
export function daTestoItaliano(t: string): string | null {
  const m = /^\s*(\d{1,2})[\/\-. ](\d{1,2})[\/\-. ](\d{2}|\d{4})\s*$/.exec(t);
  if (!m) return null;
  const g = Number(m[1]);
  const mm = Number(m[2]);
  let a = Number(m[3]);
  if (a < 100) a += 2000;
  const d = new Date(a, mm - 1, g);
  if (d.getFullYear() !== a || d.getMonth() !== mm - 1 || d.getDate() !== g) return null;
  return `${a}-${String(mm).padStart(2, "0")}-${String(g).padStart(2, "0")}`;
}

/** Accetta 9, 9:30, 09.30, 9,30 → "09:30" (null se non valida) */
export function daTestoOra(t: string): string | null {
  const m = /^\s*(\d{1,2})(?:[:.,hH ](\d{2}))?\s*$/.exec(t);
  if (!m) return null;
  const h = Number(m[1]);
  const min = m[2] === undefined ? 0 : Number(m[2]);
  if (h > 23 || min > 59) return null;
  return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}

/** "2026-03-12" → "12/03/2026" (il formato che la persona vede e scrive) */
export function aTestoItaliano(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : "";
}

/** Un oggetto Data → "2026-03-12" */
export const aIso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/** "giovedì 23 ottobre 2026": serve a far vedere come è stata capita la data */
export const inItalianoLungo = (d: Date) =>
  d.toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

/** Mentre si scrive solo numeri (es. 12032026) mette da sola le barre: 12/03/2026 */
export function formattaMentreScrivi(t: string): string {
  if (!/^\d+$/.test(t)) return t;
  const a = t.slice(0, 2);
  const b = t.slice(2, 4);
  const c = t.slice(4, 8);
  return [a, b, c].filter((x, i) => x !== "" || i === 0).join("/");
}

export const inItaliano = (d: Date) =>
  d.toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });

const piuMesi = (d: Date, n: number) => {
  const r = new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
  // 31 agosto + 6 mesi → fine febbraio (non 3 marzo)
  if (r.getDate() !== d.getDate()) r.setDate(0);
  return r;
};

export function giorniDaOggi(d: Date, oggi = new Date()): number {
  const a = new Date(oggi.getFullYear(), oggi.getMonth(), oggi.getDate());
  return Math.round((d.getTime() - a.getTime()) / 86400000);
}

/** Dalle scadenze inserite, gli eventi da mostrare e mettere in calendario. */
export function calcolaEventi(lista: Scadenza[], oggi = new Date()): Evento[] {
  const eventi: Evento[] = [];
  for (const s of lista) {
    const d = daIso(s.data);
    switch (s.tipo) {
      case "verbale":
        if (d)
          eventi.push({
            id: `${s.id}-atp`,
            titolo: "Termine indicativo per il ricorso contro il verbale",
            data: piuMesi(d, 6),
            spiegazione:
              "Data orientativa, calcolata aggiungendo 6 mesi alla data che hai inserito. Il termine vero, in genere di 6 mesi dalla notifica del verbale, può essere diverso nel tuo caso e questa non è una scadenza legalmente certa: controlla il verbale e rivolgiti per tempo a un patronato o a un avvocato.",
            anticipo: 45,
            urgente: true,
          });
        break;
      case "revisione":
        if (d)
          eventi.push({
            id: `${s.id}-rev`,
            titolo: "Revisione del verbale",
            data: d,
            spiegazione:
              "Intorno a questa data l'INPS ti convocherà per la visita di revisione. Fino alla nuova visita i benefici già riconosciuti continuano. Prepara la documentazione medica aggiornata.",
            anticipo: 60,
          });
        break;
      case "cude":
        if (d)
          eventi.push({
            id: `${s.id}-cude`,
            titolo: "Scade il contrassegno auto (CUDE)",
            data: d,
            spiegazione:
              "Chiedi il rinnovo al Comune prima della scadenza, con il certificato del medico curante o dell'ASL.",
            anticipo: 60,
          });
        break;
      case "isee": {
        const fineAnno = new Date(oggi.getFullYear(), 11, 31);
        eventi.push({
          id: `${s.id}-isee`,
          titolo: "Scade l'ISEE di quest'anno",
          data: fineAnno,
          spiegazione:
            "La DSU vale fino al 31 dicembre. A gennaio rifai l'ISEE (online sul sito INPS o al CAF) per non perdere bonus e agevolazioni.",
          anticipo: 20,
        });
        eventi.push({
          id: `${s.id}-isee-nuovo`,
          titolo: "Rifai l'ISEE per il nuovo anno",
          data: new Date(oggi.getFullYear() + 1, 0, 15),
          spiegazione: "Presenta la nuova DSU: online sul sito INPS o con l'aiuto di un CAF.",
          anticipo: 7,
        });
        break;
      }
      case "altro":
        if (d)
          eventi.push({
            id: `${s.id}-altro`,
            titolo: s.titolo?.trim() || "Appuntamento",
            data: d,
            spiegazione: s.nota?.trim() || "Appuntamento inserito da te.",
            anticipo: 2,
            ora: s.ora && daTestoOra(s.ora) ? s.ora : undefined,
            nota: s.nota?.trim() || undefined,
            appuntamento: true,
          });
        break;
    }
  }
  return eventi.sort((a, b) => a.data.getTime() - b.data.getTime());
}

// ---------- Calendario .ics ----------
const icsData = (d: Date) =>
  `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;

const icsTesto = (t: string) =>
  t.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

export function creaIcs(eventi: Evento[], nomeComune: string): string {
  const adesso = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const righe = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//TutelApp//Scadenze//IT",
    "CALSCALE:GREGORIAN",
    `X-WR-CALNAME:${icsTesto(`TutelApp · ${nomeComune}`)}`,
  ];
  for (const e of eventi) {
    const fine = new Date(e.data.getFullYear(), e.data.getMonth(), e.data.getDate() + 1);
    const conOra = e.appuntamento === true && !!e.ora;
    const [h, m] = conOra ? e.ora!.split(":").map(Number) : [0, 0];
    // Con l'orario: ora "fluttuante" (quella locale del telefono), durata di un'ora
    const inizioOra = conOra ? `${icsData(e.data)}T${String(h).padStart(2, "0")}${String(m).padStart(2, "0")}00` : "";
    const fineOra = conOra
      ? (() => {
          const f = new Date(e.data.getFullYear(), e.data.getMonth(), e.data.getDate(), h + 1, m);
          return `${icsData(f)}T${String(f.getHours()).padStart(2, "0")}${String(f.getMinutes()).padStart(2, "0")}00`;
        })()
      : "";
    righe.push(
      "BEGIN:VEVENT",
      `UID:${e.id}@tutelapp`,
      `DTSTAMP:${adesso}`,
      conOra ? `DTSTART:${inizioOra}` : `DTSTART;VALUE=DATE:${icsData(e.data)}`,
      conOra ? `DTEND:${fineOra}` : `DTEND;VALUE=DATE:${icsData(fine)}`,
      `SUMMARY:${icsTesto(e.titolo)}`,
      `DESCRIPTION:${icsTesto(e.spiegazione)}`,
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      `DESCRIPTION:${icsTesto(e.titolo)}`,
      `TRIGGER:-P${e.anticipo}D`,
      "END:VALARM",
    );
    if (conOra) {
      // Secondo avviso un'ora prima
      righe.push("BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${icsTesto(e.titolo)}`, "TRIGGER:-PT1H", "END:VALARM");
    }
    righe.push("END:VEVENT");
  }
  righe.push("END:VCALENDAR");
  return righe.join("\r\n");
}

/**
 * Promemoria mensile "Salva di nuovo la copia": un evento che si ripete ogni mese.
 * NON contiene dati né codici: è solo un ricordo, così nessun segreto finisce nel calendario.
 */
export function creaIcsPromemoriaCopia(inizio = new Date()): string {
  const adesso = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const primo = new Date(inizio.getFullYear(), inizio.getMonth() + 1, Math.min(inizio.getDate(), 28));
  const fine = new Date(primo.getFullYear(), primo.getMonth(), primo.getDate() + 1);
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//TutelApp//Copia//IT",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:promemoria-copia@tutelapp",
    `DTSTAMP:${adesso}`,
    `DTSTART;VALUE=DATE:${icsData(primo)}`,
    `DTEND;VALUE=DATE:${icsData(fine)}`,
    "RRULE:FREQ=MONTHLY",
    `SUMMARY:${icsTesto("Salva di nuovo la copia di TutelApp")}`,
    `DESCRIPTION:${icsTesto("Apri TutelApp, vai su «Una copia dei tuoi dati» e tocca «Salva una copia». Ci vuole un minuto.")}`,
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:${icsTesto("Salva di nuovo la copia di TutelApp")}`,
    "TRIGGER:PT9H",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
