// TutelApp – Percorsi Territoriali: configurazione dei Comuni che hanno un modulo riservato.
// Una configurazione per Comune, stessa architettura. Per aggiungere un Comune: una voce qui
// e il suo slug nell'elenco COMUNI di netlify/functions/percorsi.mjs, poi la sua password
// nelle impostazioni segrete di Netlify (mai nel repository).

import { mediglia } from "@/src/config/comuni/mediglia";
import { sarzana } from "@/src/config/comuni/sarzana";
import type { ComuneConfig } from "@/src/config/comuni/types";

import { idCampoSezione, type DatiModulo, type GruppoDati } from "./schema";

export type ComunePercorsi = {
  slug: string;
  titolo: string;
  nome: string;
  /** scheda già pubblicata in app: da qui si precompila il modulo, senza salvare nulla */
  scheda: ComuneConfig;
  /** referente iniziale indicato nel progetto, da confermare con il Comune */
  referenteIniziale: string;
  /** note per chi compila */
  nota?: string;
};

export const COMUNI_PERCORSI: Record<string, ComunePercorsi> = {
  mediglia: {
    slug: "mediglia",
    titolo: "TutelApp – Percorsi Territoriali | Comune di Mediglia",
    nome: "Comune di Mediglia",
    scheda: mediglia,
    referenteIniziale: "Dott.ssa Irene C. Pierdominici (da confermare)",
    nota: "Mediglia fa parte del Distretto Sociale Paullese, con Pantigliate, Paullo, Peschiera Borromeo (capofila) e Tribiano.",
  },
  sarzana: {
    slug: "sarzana",
    titolo: "TutelApp – Percorsi Territoriali | Comune di Sarzana",
    nome: "Comune di Sarzana",
    scheda: sarzana,
    referenteIniziale: "Da confermare con il Comune",
  },
};

const FONTE_PRECOMPILATO = "Scheda del Comune già pubblicata in TutelApp (fonte: sito del Comune)";

/**
 * Valori di partenza presi dalla scheda già pubblicata. Non si salvano da soli:
 * il Comune li controlla e salva il modulo. Tutto parte dallo stato «da verificare».
 */
export function precompila(slug: string): DatiModulo {
  const p = COMUNI_PERCORSI[slug];
  const s = p?.scheda;
  const campi: Record<string, string> = {};
  const gruppi: Record<string, GruppoDati> = {};
  if (p && s) {
    const metti = (sezione: string, campo: string, valore?: string) => {
      if (valore && valore.trim()) campi[idCampoSezione(sezione, campo)] = valore.trim();
    };
    metti("comune", "nome", s.nome);
    metti("comune", "indirizzo", s.indirizzo);
    metti("comune", "telefono", s.telefono);
    metti("comune", "email", s.email);
    metti("comune", "pec", s.pec);
    metti("comune", "sito", s.sitoWeb);
    metti("referenti", "operativo", p.referenteIniziale);
    if (s.responsabile) metti("referenti", "responsabile", s.responsabile);
    gruppi["comune"] = { stato: "da-verificare", fonte: FONTE_PRECOMPILATO, data: "", nota: "" };
    if (campi[idCampoSezione("referenti", "operativo")] || campi[idCampoSezione("referenti", "responsabile")]) {
      gruppi["referenti"] = { stato: "da-verificare", fonte: FONTE_PRECOMPILATO, data: "", nota: "" };
    }
  }
  return { versione: 0, campi, gruppi };
}

// Ricostruzione anteprima 17/11/2026: variabili PERCORSI_* impostate su Netlify.
