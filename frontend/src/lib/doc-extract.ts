// Estrazione dati strutturati da testo di documenti.
// Opera INTERAMENTE in locale: nessun invio a servizi esterni.
// Cerca pattern tipici dei documenti socio-sanitari / amministrativi italiani
// (codice fiscale, ISEE, percentuali invalidità, date, protocollo, ecc.).
// Ogni campo estratto è un SUGGERIMENTO: l'utente può correggerlo o ignorarlo.

// ---- Tipi ----

export interface CampoEstratto {
  /** Etichetta leggibile (es. "Codice Fiscale") */
  label: string;
  /** Valore trovato */
  valore: string;
  /** Sicurezza 0-1 (euristica grezza: match esatto = 1, parziale = 0.5) */
  confidenza: number;
  /** Chiave stabile per merge con i dati salvati */
  chiave: string;
}

export interface RisultatoEstrazione {
  /** Campi strutturati individuati */
  campi: CampoEstratto[];
  /** Testo completo (per consultazione) */
  testoGrezzo: string;
  /** Statistiche */
  pagine?: number;
  tempoMs: number;
}

// ---- Pattern regex ----

const PATTERNS: {
  chiave: string;
  label: string;
  regex: RegExp;
  gruppo?: number;
  confidenza: number;
}[] = [
  {
    chiave: "codice_fiscale",
    label: "Codice Fiscale",
    regex: /\b([A-Z]{6}\d{2}[A-EHLMPR-T]\d{2}[A-Z]\d{3}[A-Z])\b/i,
    gruppo: 1,
    confidenza: 0.95,
  },
  {
    chiave: "isee",
    label: "ISEE (€)",
    // Cerca "ISEE" seguito da un importo
    regex: /(?:ISEE|I\.?S\.?E\.?E\.?)\s*(?:(?:pari|di|:)\s*)?(?:€|euro)?\s*([\d.,]+)\b/i,
    gruppo: 1,
    confidenza: 0.8,
  },
  {
    chiave: "invalidita_pct",
    label: "Percentuale invalidità",
    // "invalidità 75%", "invalidità civile al 100%", "75 per cento"
    regex: /(?:invalidit[àa]|disabilit[àa])\s*(?:civile\s*)?(?:al\s*|del\s*|pari\s*al?\s*)?(\d{1,3})\s*(?:%|per\s*cento)/i,
    gruppo: 1,
    confidenza: 0.85,
  },
  {
    chiave: "legge_104",
    label: "Legge 104",
    // "L. 104/92", "legge 104", "art. 3 comma 3", etc.
    regex: /(?:L\.?\s*104\s*\/\s*(?:19)?92|legge\s+104)\s*(.*?)(?:\.|;|$)/i,
    gruppo: 0,
    confidenza: 0.9,
  },
  {
    chiave: "protocollo",
    label: "Numero protocollo",
    regex: /(?:prot(?:ocollo)?\.?\s*(?:n\.?\s*)?|n°?\s*prot\.?\s*)([\d/.\-]+)/i,
    gruppo: 1,
    confidenza: 0.7,
  },
  {
    chiave: "data_documento",
    label: "Data documento",
    // GG/MM/AAAA o GG-MM-AAAA o GG.MM.AAAA
    regex: /\b(\d{1,2}[/.\-]\d{1,2}[/.\-]\d{4})\b/,
    gruppo: 1,
    confidenza: 0.6,
  },
  {
    chiave: "scadenza",
    label: "Scadenza / validità fino al",
    regex: /(?:valid[oa]\s+(?:fino\s+)?(?:al?\s+)|scad(?:enz|e)\s*(?::?\s*))(\d{1,2}[/.\-]\d{1,2}[/.\-]\d{4})/i,
    gruppo: 1,
    confidenza: 0.75,
  },
  {
    chiave: "ente_emittente",
    label: "Ente emittente",
    // "INPS", "ASL", "ASST", "Comune di …"
    regex: /\b(INPS|ASL\s*[\w/]*|ASST\s+[\w\s]+|Comune\s+di\s+[\w\s]+|Azienda\s+Sanitaria[\w\s]*)\b/i,
    gruppo: 1,
    confidenza: 0.7,
  },
  {
    chiave: "indennita_accompagnamento",
    label: "Indennità di accompagnamento",
    regex: /indennit[àa]\s+(?:di\s+)?accompagnamento/i,
    gruppo: 0,
    confidenza: 0.9,
  },
  {
    chiave: "verbale_commissione",
    label: "Verbale commissione medica",
    regex: /verbale\s+(?:della?\s+)?commissione\s+medic[ao]/i,
    gruppo: 0,
    confidenza: 0.85,
  },
];

// ---- Estrazione campi dal testo ----

export function estraiCampi(testo: string): CampoEstratto[] {
  const risultati: CampoEstratto[] = [];
  const visti = new Set<string>();

  for (const p of PATTERNS) {
    const match = testo.match(p.regex);
    if (match) {
      const valore = (p.gruppo !== undefined ? match[p.gruppo] : match[0]).trim();
      if (valore && !visti.has(p.chiave)) {
        visti.add(p.chiave);
        risultati.push({
          label: p.label,
          valore,
          confidenza: p.confidenza,
          chiave: p.chiave,
        });
      }
    }
  }

  // Cerca date aggiuntive non già catturate
  const dateGiaTrovate = risultati
    .filter((r) => r.chiave === "data_documento" || r.chiave === "scadenza")
    .map((r) => r.valore);
  const tutteLeDate = testo.match(/\b\d{1,2}[/.\-]\d{1,2}[/.\-]\d{4}\b/g) || [];
  const dateExtra = tutteLeDate.filter((d) => !dateGiaTrovate.includes(d));
  if (dateExtra.length > 0 && dateExtra.length <= 5) {
    // Se non c'è una data_documento, usa la prima trovata
    if (!visti.has("data_documento")) {
      risultati.push({
        label: "Data documento",
        valore: dateExtra[0],
        confidenza: 0.5,
        chiave: "data_documento",
      });
    }
  }

  return risultati;
}

// ---- Lettura testo da file ----

/**
 * Legge il testo da un file dato il suo URI e tipo.
 * Su web: PDF via pdfjs-dist, testo puro via fetch.
 * Su native: solo testo puro via FileSystem.
 */
export async function leggiTestoFile(
  uri: string,
  nomeFile: string,
): Promise<{ testo: string; pagine?: number } | { errore: string }> {
  const ext = nomeFile.split(".").pop()?.toLowerCase() || "";
  const isPdf = ext === "pdf" || nomeFile.toLowerCase().includes(".pdf");
  const isTesto = ["txt", "csv", "json", "xml", "html", "htm", "md"].includes(ext);

  if (isPdf) {
    // Import dinamico di pdf-extract (solo web)
    try {
      const { estraiTestoPdf } = await import("@/src/lib/pdf-extract");
      const res = await estraiTestoPdf(uri);
      if (res.ok) return { testo: res.testo, pagine: res.pagine };
      return { errore: res.errore };
    } catch (e) {
      return { errore: `Impossibile caricare il modulo PDF: ${String(e)}` };
    }
  }

  if (isTesto) {
    try {
      const { Platform } = await import("react-native");
      if (Platform.OS === "web") {
        const resp = await fetch(uri);
        const testo = await resp.text();
        return { testo };
      } else {
        const FileSystem = await import("expo-file-system/legacy");
        const testo = await FileSystem.readAsStringAsync(uri);
        return { testo };
      }
    } catch (e) {
      return { errore: `Impossibile leggere il file: ${String(e)}` };
    }
  }

  return {
    errore: `Formato "${ext}" non supportato per l'estrazione. Formati supportati: PDF, TXT, CSV, XML, HTML.`,
  };
}

// ---- Funzione combinata ----

/**
 * Legge il file, estrae il testo, individua i campi strutturati.
 * Tutto locale, nessun dato inviato fuori.
 */
export async function estraiDatiDocumento(
  uri: string,
  nomeFile: string,
): Promise<RisultatoEstrazione | { errore: string }> {
  const t0 = typeof performance !== "undefined" ? performance.now() : Date.now();

  const risultato = await leggiTestoFile(uri, nomeFile);
  if ("errore" in risultato) return risultato;

  const campi = estraiCampi(risultato.testo);
  const tempoMs = Math.round(
    (typeof performance !== "undefined" ? performance.now() : Date.now()) - t0,
  );

  return {
    campi,
    testoGrezzo: risultato.testo,
    pagine: risultato.pagine,
    tempoMs,
  };
}
