// TutelApp – Percorsi Territoriali: configurazione dei Comuni che hanno un modulo riservato.
// Una configurazione per Comune, stessa architettura. Per aggiungere un Comune: una voce qui
// e il suo slug nell'elenco COMUNI di netlify/functions/percorsi.mjs, poi la sua password
// nelle impostazioni segrete di Netlify (mai nel repository).

import { mediglia } from "@/src/config/comuni/mediglia";
import { sarzana } from "@/src/config/comuni/sarzana";
import type { ComuneConfig } from "@/src/config/comuni/types";

import { associazioniLegateAlComune, type Associazione } from "@/src/lib/associazioni";
import { idCampoSezione, type DatiModulo, type GruppoDati } from "./schema";

export type ComunePercorsi = {
  slug: string;
  titolo: string;
  nome: string;
  /** scheda già pubblicata in app: da qui si precompila il modulo, senza salvare nulla */
  scheda: ComuneConfig;
  /** referente iniziale indicato nel progetto, da confermare con il Comune */
  referenteIniziale: string;
  /** ambito sociale e capofila, solo se già scritti nel progetto o nella scheda */
  ambito?: string;
  capofila?: string;
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
    ambito: "Distretto Sociale Paullese",
    capofila: "Peschiera Borromeo",
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
    metti("comune", "ambito", p.ambito);
    metti("comune", "capofila", p.capofila);
    gruppi["comune"] = { stato: "da-verificare", fonte: FONTE_PRECOMPILATO, data: "", nota: "" };

    // Servizi sociali: i recapiti generali della scheda già in app
    metti("servizi-sociali", "ufficio", s.ente);
    metti("servizi-sociali", "indirizzo", s.indirizzo);
    metti("servizi-sociali", "telefono", s.telefono);
    metti("servizi-sociali", "email", s.email);
    metti("servizi-sociali", "orari", s.orari);
    // Trasporto sociale: il testo già mostrato in app
    metti("trasporto", "note", s.trasporto);
    // Esenzione ticket: l'azienda sanitaria indicata in app
    if (s.esenzioneTicket) {
      metti("esenzioni", "ufficio", s.esenzioneTicket.label);
      metti("esenzioni", "note", s.esenzioneTicket.url ? `Pagina indicata in app: ${s.esenzioneTicket.url}` : "");
    }
    // Altri punti di supporto: l'elenco già mostrato in app, una riga per voce
    const punti = (s.puntiSupporto ?? [])
      .map((x) => `${x.title}${x.subtitle ? " – " + x.subtitle : ""}`)
      .join("\n");
    metti("supporto", "note", punti);
    // Modulistica: il link ai moduli del Comune già in app (voce «Modulistica» dei punti di supporto)
    const moduli = (s.puntiSupporto ?? []).find((x) => /modulistica/i.test(x.title) && x.action?.type === "web");
    if (moduli) {
      metti("modulistica", "modulistica", moduli.action.value);
      metti("modulistica", "cosa", moduli.subtitle);
    }
    // Associazioni e sport: solo quelle legate al Comune nell'elenco già in app (non l'elenco di provincia)
    const riga = (a: Associazione) =>
      [a.nome, a.cosa && `– ${a.cosa}`, [a.dove, a.telefono, a.email, a.sito].filter(Boolean).join(" · ") && `(${[a.dove, a.telefono, a.email, a.sito].filter(Boolean).join(" · ")})`]
        .filter(Boolean)
        .join(" ");
    const assoc = associazioniLegateAlComune(slug);
    metti("associazioni", "note", assoc.volontariato.map(riga).join("\n"));
    metti("sport", "note", assoc.sport.map(riga).join("\n"));
    for (const sezione of ["servizi-sociali", "trasporto", "esenzioni", "supporto", "modulistica", "associazioni", "sport"]) {
      const ha = Object.keys(campi).some((k) => k.startsWith(sezione + "."));
      if (ha) gruppi[sezione] = { stato: "da-verificare", fonte: FONTE_PRECOMPILATO, data: "", nota: "" };
    }
    if (campi[idCampoSezione("referenti", "operativo")] || campi[idCampoSezione("referenti", "responsabile")]) {
      gruppi["referenti"] = { stato: "da-verificare", fonte: FONTE_PRECOMPILATO, data: "", nota: "" };
    }
  }
  return { versione: 0, campi, gruppi };
}

