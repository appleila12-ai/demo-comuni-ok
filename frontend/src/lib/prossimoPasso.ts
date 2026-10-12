// "Prossimo passo utile" dell'hub: un solo suggerimento, calcolato SOLO con dati
// che la persona ha già salvato su questo dispositivo, per il Comune attivo.
//
// REGOLE
//  - nessun dato nuovo, nessuna domanda: la funzione riceve i testi già letti dall'archivio
//    (chi chiama li legge con `storage.getItem`, che aggiunge da solo il suffisso @slug)
//  - non deduce diritti, requisiti o avanzamenti: riporta solo ciò che la persona ha segnato
//  - se i dati sono contraddittori restituisce un suggerimento "neutro" (nessuna destinazione)
//  - un dato illeggibile o assente conta come "nessuna informazione", mai come errore
//  - è una funzione pura (nessun import): si può provare da sola
//
// Le tappe del tracker sono quelle di `app/tracker.tsx` (STAGES): se cambiano lì, vanno
// aggiornate anche qui sotto in TAPPE_TRACKER (stesso ordine e stessi id).

export type SuggerimentoTipo = "tracker" | "tracker-concluso" | "verbale" | "progetto" | "primi-passi" | "neutro";

export type Suggerimento = {
  tipo: SuggerimentoTipo;
  titolo: string;
  /** Spiega perché lo vediamo, usando solo ciò che la persona ha segnato */
  motivo: string;
  /** Pagina da aprire; assente nel suggerimento neutro */
  route?: string;
  bottone?: string;
  /** true = nessun dato sul dispositivo: è il punto di partenza di base, non una scelta */
  predefinito?: boolean;
};

export type DatiSalvati = {
  /** Contenuto grezzo di `tutelapp:tracker` */
  tracker?: string | null;
  /** Contenuto grezzo di `tutelapp:verbale` */
  verbale?: string | null;
  /** Contenuto grezzo di `tutelapp:progetto` */
  progetto?: string | null;
};

const TAPPE_TRACKER = [
  { id: "richiesta", titolo: "Richiesta inviata" },
  { id: "presa_carico", titolo: "Presa in carico dei Servizi Sociali" },
  { id: "uvm", titolo: "Convocazione UVM" },
  { id: "progetto", titolo: "Progetto di Vita attivo" },
] as const;

function leggi(raw?: string | null): Record<string, any> | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(raw);
    return v && typeof v === "object" && !Array.isArray(v) ? v : null;
  } catch {
    return null;
  }
}

const NEUTRO: Suggerimento = {
  tipo: "neutro",
  titolo: "Scegli tu da dove continuare",
  motivo:
    "I dati salvati su questo dispositivo non indicano con chiarezza un passo solo. Puoi usare le tappe qui sotto, nell'ordine che preferisci.",
};

const PRIME_COSE: Suggerimento = {
  tipo: "primi-passi",
  titolo: "Primi passi dopo una diagnosi",
  motivo:
    "Esenzione dal ticket, malattia al lavoro, sportello sociale. Non è un passaggio obbligato: puoi anche scegliere un'altra tappa.",
  route: "/primi-passi",
  bottone: "Apri i primi passi",
  predefinito: true,
};

export function prossimoPasso(dati: DatiSalvati): Suggerimento {
  // ---- Il promemoria della pratica (tracker) ----
  const tr = leggi(dati.tracker);
  if (tr) {
    const stato = TAPPE_TRACKER.map((t) => {
      const e = tr[t.id];
      const ok = e && typeof e === "object";
      return {
        fatta: ok && e.done === true,
        // data o nota scritte ma tappa non segnata come fatta
        iniziata: ok && (!!String(e.date ?? "").trim() || !!String(e.note ?? "").trim()),
      };
    });
    const nFatte = stato.filter((s) => s.fatta).length;

    // Una tappa segnata come fatta dopo una non fatta: la sequenza non è coerente
    const primaNonFatta = stato.findIndex((s) => !s.fatta);
    const fatteDopo = primaNonFatta === -1 ? false : stato.slice(primaNonFatta + 1).some((s) => s.fatta);
    if (fatteDopo) return NEUTRO;

    if (nFatte === TAPPE_TRACKER.length) {
      return {
        tipo: "tracker-concluso",
        titolo: "Hai segnato tutte le tappe della pratica",
        motivo: "Quando qualcosa cambia, puoi rivedere il tuo Progetto di Vita o aggiornare il promemoria.",
        route: "/progetto",
        bottone: "Rivedi il Progetto di Vita",
      };
    }
    if (nFatte > 0) {
      const ultima = TAPPE_TRACKER[nFatte - 1].titolo;
      const prossima = TAPPE_TRACKER[nFatte].titolo;
      return {
        tipo: "tracker",
        titolo: `Continua il promemoria: ${prossima}`,
        motivo: `Hai segnato «${ultima}». La tappa successiva nel tuo promemoria è «${prossima}».`,
        route: "/tracker",
        bottone: "Apri la mia pratica",
      };
    }
    if (stato.some((s) => s.iniziata)) {
      return {
        tipo: "tracker",
        titolo: "Riprendi il promemoria della tua pratica",
        motivo: "Hai già scritto qualche data o nota nel promemoria.",
        route: "/tracker",
        bottone: "Apri la mia pratica",
      };
    }
  }

  // ---- I dati copiati dal verbale ----
  const ve = leggi(dati.verbale);
  if (ve && Object.values(ve).some((x) => x !== undefined && x !== null && x !== "")) {
    return {
      tipo: "verbale",
      titolo: "Riguarda cosa potrebbe spettarti",
      motivo: "Hai già inserito alcuni dati del verbale. Le indicazioni sono da confermare con l'ente.",
      route: "/verbale",
      bottone: "Apri «Il tuo verbale»",
    };
  }

  // ---- Il Progetto di Vita ----
  const pr = leggi(dati.progetto);
  const aree = pr && pr.aree && typeof pr.aree === "object" ? (Object.values(pr.aree) as any[]) : [];
  const haDesideri = aree.some(
    (a) => a && ((Array.isArray(a.scelte) && a.scelte.length > 0) || String(a.libero ?? "").trim() !== ""),
  );
  if (haDesideri) {
    return {
      tipo: "progetto",
      titolo: "Riprendi il tuo Progetto di Vita",
      motivo: "Hai già scritto alcuni desideri. Puoi completarli o aggiornarli quando vuoi.",
      route: "/progetto",
      bottone: "Apri il Progetto di Vita",
    };
  }

  // ---- Nessun dato utile ----
  return PRIME_COSE;
}
