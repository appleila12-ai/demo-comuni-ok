// Scadenzario: dalle date che la persona inserisce, l'app calcola le scadenze
// importanti e crea un calendario (.ics) da aggiungere al telefono.
// Regole verificate a settembre 2026 (fonti in MULTI-COMUNE.md).

export type TipoScadenza = "verbale" | "revisione" | "cude" | "isee" | "altro";

export type Scadenza = {
  id: string;
  tipo: TipoScadenza;
  /** Data inserita dalla persona, formato AAAA-MM-GG */
  data: string;
  /** Solo per "altro" */
  titolo?: string;
};

export type Evento = {
  id: string;
  titolo: string;
  data: Date;
  spiegazione: string;
  /** Giorni di anticipo per il promemoria */
  anticipo: number;
  urgente?: boolean;
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
    aiuto: "Se non sei d'accordo con l'esito, hai 6 mesi da questa data per il ricorso in tribunale (ATP).",
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
    titolo: "Altro appuntamento",
    domanda: "Quando?",
    aiuto: "Una visita, un colloquio, la convocazione dell'équipe…",
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
            titolo: "Ultimo giorno per il ricorso contro il verbale",
            data: piuMesi(d, 6),
            spiegazione:
              "Se non sei d'accordo con l'esito, il ricorso (ATP) va depositato in tribunale entro 6 mesi dalla comunicazione del verbale. Rivolgiti per tempo a un patronato o a un avvocato.",
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
            spiegazione: "Appuntamento inserito da te.",
            anticipo: 2,
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
    righe.push(
      "BEGIN:VEVENT",
      `UID:${e.id}@tutelapp`,
      `DTSTAMP:${adesso}`,
      `DTSTART;VALUE=DATE:${icsData(e.data)}`,
      `DTEND;VALUE=DATE:${icsData(fine)}`,
      `SUMMARY:${icsTesto(e.titolo)}`,
      `DESCRIPTION:${icsTesto(e.spiegazione)}`,
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      `DESCRIPTION:${icsTesto(e.titolo)}`,
      `TRIGGER:-P${e.anticipo}D`,
      "END:VALARM",
      "END:VEVENT",
    );
  }
  righe.push("END:VCALENDAR");
  return righe.join("\r\n");
}
