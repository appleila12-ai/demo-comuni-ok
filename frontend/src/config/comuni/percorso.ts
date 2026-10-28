// Riferimenti del territorio per i passi di "Come ottenere il riconoscimento".
// Qui stanno le voci condivise tra più Comuni (stessa azienda sanitaria) e le
// funzioni che le collegano ai passi. Solo recapiti verificati su fonti
// istituzionali: dove un dato non è verificato, il passo resta senza voci.

import type { ComuneConfig, PuntoSupporto } from "./types";

// ---------- ASL 5 Spezzino (provincia della Spezia) ----------
// Fonte: pagina "Invalidità civile" di ASL 5 (asl5.liguria.it), letta il 28/10/2026.
export const ASL5_INVALIDITA: PuntoSupporto = {
  icon: "medkit-outline",
  title: "ASL 5 Spezzino · Invalidità civile e handicap",
  subtitle:
    "La visita la fa una commissione dell'ASL, con un medico INPS. La domanda all'INPS si fa online con SPID o con un patronato.",
  action: {
    type: "web",
    value:
      "https://www.asl5.liguria.it/PerilCittadino/Serviziterritoriali/DipartimentodiPrevenzione/INVALIDITACIVILE.aspx",
  },
};

export const ASL5_CENTRALINO: PuntoSupporto = {
  icon: "call-outline",
  title: "ASL 5 Spezzino · Centralino",
  subtitle: "Sede: via Fazio 30, La Spezia · Tel. 0187 5331",
  action: { type: "tel", value: "01875331" },
};

export const ASL5_ESENZIONE: PuntoSupporto = {
  icon: "document-text-outline",
  title: "ASL 5 Spezzino · Esenzione ticket",
  subtitle: "Dove si chiede l'esenzione ticket per patologia",
  action: {
    type: "web",
    value: "https://www.asl5.liguria.it/PerilCittadino/Prenotazioniticketesenzioni/Esenzioneticket.aspx",
  },
};

// ---------- Azienda USL Toscana Nord Ovest (Massa-Carrara) ----------
// Fonte: pagine "Medicina legale" delle sedi di Massa e di Aulla (uslnordovest.toscana.it), lette il 28/10/2026.
export const USL_MEDLEG_MASSA: PuntoSupporto = {
  icon: "medkit-outline",
  title: "USL Toscana Nord Ovest · Medicina legale di Massa",
  subtitle:
    "Viale Risorgimento 18, Massa (3° piano) · Segreteria Ufficio Invalidi Civili tel. 0585 493054-59 · sportello lunedì e mercoledì 9:00–11:00. Tra le prestazioni: accertamenti di invalidità civile e handicap",
  action: { type: "tel", value: "0585493054" },
};

export const USL_MEDLEG_AULLA: PuntoSupporto = {
  icon: "medkit-outline",
  title: "USL Toscana Nord Ovest · Medicina legale di Aulla",
  subtitle:
    "Sede distaccata, Quartiere Gobetti · Ufficio invalidi tel. 0187 423468 · telefonate lunedì e mercoledì 9:00–12:00, ricevimento martedì e giovedì 9:00–12:00. Tra le prestazioni: accertamenti di invalidità civile e handicap",
  action: { type: "tel", value: "0187423468" },
};

type Passi = NonNullable<ComuneConfig["percorsoTerritorio"]>;

/**
 * Collega a ogni passo le voci giuste.
 * @param punti    i "Punti di supporto" della scheda del Comune
 * @param servizi  posizioni (in `punti`) dei servizi sociali/distretto da mostrare nei passi 4 e 5
 * @param passo2   voci per la valutazione di base (visita e commissione)
 * @param passo3   voci per il verbale (es. esenzione ticket)
 * @param servizi5 posizioni delle voci per il passo 5, se diverse da quelle del passo 4
 */
export function percorso(
  punti: PuntoSupporto[],
  servizi: number[],
  passo2: PuntoSupporto[] = [],
  passo3: PuntoSupporto[] = [],
  servizi5?: number[],
): Passi {
  const scegli = (idx: number[]) => idx.map((i) => punti[i]).filter(Boolean);
  const sociali = scegli(servizi);
  const sociali5 = servizi5 ? scegli(servizi5) : sociali;
  const out: Passi = {};
  if (passo2.length) out[2] = passo2;
  if (passo3.length) out[3] = passo3;
  if (sociali.length) out[4] = sociali;
  if (sociali5.length) out[5] = sociali5;
  return out;
}

/** Comuni della provincia della Spezia (ASL 5): stesse voci sanitarie per tutti. */
export function percorsoAsl5(punti: PuntoSupporto[], servizi: number[]): Passi {
  return percorso(punti, servizi, [ASL5_INVALIDITA, ASL5_CENTRALINO], [ASL5_ESENZIONE]);
}
