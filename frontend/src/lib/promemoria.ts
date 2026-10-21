// Promemoria gentili: decide QUANDO ricordare e CON QUALI PAROLE.
// Funzione pura (nessun import di runtime): si può provare da sola.
//
// REGOLE
//  - le parole degli avvisi sono SEMPRE generiche: sulla schermata di blocco non compaiono
//    diagnosi, verbali, nomi o terapie; il dettaglio si legge solo dentro l'app
//  - al massimo un avviso al giorno
//  - nessun avviso nelle ore di silenzio (di base dalle 21 alle 8)
//  - nessuna "serie di giorni consecutivi", nessun tono di colpa
//  - gli avvisi si programmano solo se la persona li ha attivati
//  - tutti i dati restano sul dispositivo

import type { Evento } from "@/src/lib/scadenze";

export type Impostazioni = {
  attivi: boolean;
  /** Ora (0-23) da cui inizia il silenzio */
  silenzioDa: number;
  /** Ora (0-23) in cui finisce il silenzio */
  silenzioA: number;
};

export const IMPOSTAZIONI_BASE: Impostazioni = { attivi: false, silenzioDa: 21, silenzioA: 8 };

export type Promemoria = {
  id: string;
  titolo: string;
  corpo: string;
  quando: Date;
  /** Pagina da aprire toccando l'avviso */
  route: string;
  /** Più basso = più importante (vince se due avvisi cadono nello stesso giorno) */
  priorita: number;
};

/** Qualcosa lasciato a metà, da cui ripartire */
export type Sospeso = {
  /** Da cosa è nato: pratica, Progetto di Vita, dati del verbale o ricerca */
  tipo: "pratica" | "progetto" | "verbale" | "ricerca";
  route: string;
};

export type DatiPromemoria = {
  eventi: Evento[];
  sospeso?: Sospeso | null;
  /** Ultima volta che la persona ha aperto l'app */
  ultimaAttivita?: Date | null;
  oggi: Date;
  imp: Impostazioni;
};

// ---------- Le parole ----------
// Più varianti per lo stesso avviso: si sceglie con la data, così non sono sempre uguali.
export const FRASI = {
  riprendi: [
    "Riprendiamo da dove ci eravamo fermati? Ci vuole un minuto.",
    "Qualcosa è rimasto a metà. Quando vuoi, lo finiamo insieme.",
    "Nessuna fretta: il tuo punto di partenza è ancora qui.",
  ],
  pratica: [
    "La tua pratica ti aspetta: manca un solo passo, senza fretta.",
    "Vuoi dare un'occhiata a come sta andando la tua pratica?",
  ],
  silenzio: ["Nessuna fretta. Quando serve, TutelApp è qui."],
  scadenza: [
    "C'è una scadenza in arrivo. Meglio pensarci con calma, ora.",
    "Una data importante si avvicina. Qui trovi tutto con calma.",
  ],
  scadenzaTra: (g: number) =>
    g === 1 ? "Domani c'è una scadenza. Guardiamola insieme." : `Tra ${g} giorni c'è una scadenza. Meglio pensarci con calma, ora.`,
  appuntamentoDomani: ["Domani hai un appuntamento in agenda."],
  appuntamentoOra: ["Tra un'ora hai un appuntamento in agenda."],
  titoloBase: "TutelApp",
} as const;

const scegli = (lista: readonly string[], seme: number) => lista[Math.abs(seme) % lista.length];

// ---------- Date ----------
const alle = (d: Date, ore: number, minuti = 0) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate(), ore, minuti, 0, 0);

const giorniPrima = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() - n);
const giorniDopo = (d: Date, n: number) => giorniPrima(d, -n);

const chiaveGiorno = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

const inSilenzio = (d: Date, imp: Impostazioni) => {
  const h = d.getHours() + d.getMinutes() / 60;
  const { silenzioDa: da, silenzioA: a } = imp;
  if (da === a) return false;
  return da > a ? h >= da || h < a : h >= da && h < a;
};

/** Se cade nel silenzio, lo sposta alle prime ore utili del mattino (silenzioA e mezza). */
export function fuoriDalSilenzio(d: Date, imp: Impostazioni): Date {
  if (!inSilenzio(d, imp)) return d;
  const mattina = alle(d, imp.silenzioA, 30);
  // dopo l'inizio del silenzio (sera) → mattino dopo; prima della fine (notte) → stessa mattina
  return d.getHours() >= imp.silenzioDa && imp.silenzioDa > imp.silenzioA ? giorniDopo(mattina, 1) : mattina;
}

const oraEvento = (e: Evento): { h: number; m: number } | null => {
  if (!e.ora) return null;
  const [h, m] = e.ora.split(":").map(Number);
  return Number.isFinite(h) && Number.isFinite(m) ? { h, m } : null;
};

// ---------- Il calcolo ----------
const ORIZZONTE_GIORNI = 60;
const MASSIMO_AVVISI = 30; // iPhone ne accetta fino a 64: restiamo ben sotto

export function pianifica({ eventi, sospeso, ultimaAttivita, oggi, imp }: DatiPromemoria): Promemoria[] {
  if (!imp.attivi) return [];
  const limite = giorniDopo(oggi, ORIZZONTE_GIORNI).getTime();
  const grezzi: Promemoria[] = [];
  const aggiungi = (p: Promemoria) => {
    if (p.quando.getTime() > oggi.getTime() && p.quando.getTime() <= limite) grezzi.push(p);
  };

  // 1) Scadenze e appuntamenti
  for (const e of eventi) {
    const giornoEvento = new Date(e.data.getFullYear(), e.data.getMonth(), e.data.getDate());
    if (giornoEvento.getTime() < new Date(oggi.getFullYear(), oggi.getMonth(), oggi.getDate()).getTime()) continue;
    const ora = oraEvento(e);

    if (e.appuntamento) {
      // La sera prima (18:00)
      aggiungi({
        id: `${e.id}-vigilia`,
        titolo: FRASI.titoloBase,
        corpo: scegli(FRASI.appuntamentoDomani, giornoEvento.getDate()),
        quando: fuoriDalSilenzio(alle(giorniPrima(giornoEvento, 1), 18), imp),
        route: "/scadenze",
        priorita: 1,
      });
      // Un'ora prima, solo se ha un orario e non cade nel silenzio
      if (ora) {
        const inizio = alle(giornoEvento, ora.h, ora.m);
        const unOraPrima = new Date(inizio.getTime() - 60 * 60 * 1000);
        if (!inSilenzio(unOraPrima, imp)) {
          aggiungi({
            id: `${e.id}-ora`,
            titolo: FRASI.titoloBase,
            corpo: scegli(FRASI.appuntamentoOra, 0),
            quando: unOraPrima,
            route: "/scadenze",
            priorita: 0,
          });
        }
      }
      continue;
    }

    // Scadenza calcolata: all'inizio dell'anticipo, a 7 giorni e alla vigilia (9:30)
    const offset = Array.from(new Set([e.anticipo, 7, 1])).filter((n) => n >= 1);
    for (const n of offset) {
      aggiungi({
        id: `${e.id}-${n}g`,
        titolo: FRASI.titoloBase,
        corpo: n === e.anticipo && n > 7 ? scegli(FRASI.scadenza, giornoEvento.getDate()) : FRASI.scadenzaTra(n),
        quando: fuoriDalSilenzio(alle(giorniPrima(giornoEvento, n), 9, 30), imp),
        route: "/scadenze",
        priorita: 2,
      });
    }
  }

  // 2) Qualcosa lasciato a metà: un solo avviso, due giorni dopo l'ultima visita (18:30)
  const base = ultimaAttivita ?? oggi;
  if (sospeso) {
    const frasi = sospeso.tipo === "pratica" ? FRASI.pratica : FRASI.riprendi;
    const quando = alle(giorniDopo(base, 2), 18, 30);
    // se sono già passati, si rimanda a domani sera: mai a raffica
    const domaniSera = alle(giorniDopo(oggi, 1), 18, 30);
    aggiungi({
      id: "riprendi",
      titolo: FRASI.titoloBase,
      corpo: scegli(frasi, base.getDate()),
      quando: fuoriDalSilenzio(quando.getTime() > oggi.getTime() ? quando : domaniSera, imp),
      route: sospeso.route,
      priorita: 3,
    });
  }

  // 3) Dopo una settimana senza aprire l'app: un solo messaggio gentile
  aggiungi({
    id: "silenzio",
    titolo: FRASI.titoloBase,
    corpo: scegli(FRASI.silenzio, 0),
    quando: fuoriDalSilenzio(alle(giorniDopo(base, 7), 18, 30), imp),
    route: "/hub",
    priorita: 4,
  });

  // Al massimo uno al giorno: vince il più importante, a parità il più vicino
  grezzi.sort((a, b) => a.priorita - b.priorita || a.quando.getTime() - b.quando.getTime());
  const giorniUsati = new Set<string>();
  const scelti: Promemoria[] = [];
  for (const p of grezzi) {
    let quando = p.quando;
    // gli avvisi "morbidi" (riprendi, silenzio) slittano al primo giorno libero, entro una settimana
    const puoSlittare = p.priorita >= 3;
    for (let i = 0; i < 7 && giorniUsati.has(chiaveGiorno(quando)) && puoSlittare; i++) {
      quando = giorniDopo(quando, 1);
    }
    const k = chiaveGiorno(quando);
    if (giorniUsati.has(k)) continue;
    giorniUsati.add(k);
    scelti.push({ ...p, quando });
  }
  return scelti.sort((a, b) => a.quando.getTime() - b.quando.getTime()).slice(0, MASSIMO_AVVISI);
}
