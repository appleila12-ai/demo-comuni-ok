// Test isolato: estrazione testo da PDF con pdfjs-dist.
// Solo web — su native il modulo non viene caricato.
// Nessun dato inviato all'esterno: il worker è codice JS scaricato da CDN,
// il PDF resta interamente sul dispositivo.

import { Platform } from "react-native";

// ---- Tipi ----

export type PdfTestResult =
  | { ok: true; pagine: number; testo: string; tempoMs: number }
  | { ok: false; errore: string };

// ---- Estrazione ----

/**
 * Estrae il testo da un PDF dato il suo URI (blob URL, data URI o file URI).
 * Funziona SOLO su web. Su native restituisce errore esplicito.
 */
export async function estraiTestoPdf(uri: string): Promise<PdfTestResult> {
  if (Platform.OS !== "web") {
    return { ok: false, errore: "L'estrazione PDF è disponibile solo nella versione web." };
  }

  const t0 = performance.now();

  try {
    // Import dinamico: pdfjs-dist viene caricato solo quando serve (code-splitting)
    const pdfjsLib = await import("pdfjs-dist");

    // Worker dal CDN (solo codice JS, nessun dato utente inviato)
    // Senza worker il parsing gira sul thread principale — funziona ma più lento.
    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
    } catch {
      // Se il worker non si carica, pdf.js prosegue senza (main thread)
      console.warn("[pdf-extract] Worker non disponibile, parsing su main thread");
    }

    // Carica il PDF dall'URI locale
    let data: ArrayBuffer;
    try {
      const resp = await fetch(uri);
      data = await resp.arrayBuffer();
    } catch (e) {
      return { ok: false, errore: `Impossibile leggere il file: ${String(e)}` };
    }

    const pdf = await pdfjsLib.getDocument({ data }).promise;
    const parti: string[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const pagina = await pdf.getPage(i);
      const contenuto = await pagina.getTextContent();
      const righe = contenuto.items
        .filter((item): item is { str: string } => "str" in item)
        .map((item) => item.str);
      parti.push(righe.join(" "));
    }

    const testo = parti.join("\n\n").trim();
    const tempoMs = Math.round(performance.now() - t0);

    return { ok: true, pagine: pdf.numPages, testo, tempoMs };
  } catch (e) {
    return { ok: false, errore: `Errore pdf.js: ${String(e)}` };
  }
}
