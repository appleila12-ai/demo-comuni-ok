// TutelApp – Percorsi Territoriali: struttura del modulo dei Comuni.
// Un'unica struttura, uguale per tutti i Comuni. Le sezioni corrispondono alle parti dell'app
// (campo `paginaApp`: pagina dell'app a cui il dato serve, se esiste).
//
// Regole degli identificatori (le usa anche il server in netlify/functions/percorsi.mjs):
//  - campo di una sezione:    "<sezione>.<campo>"            (gruppo = "<sezione>")
//  - campo di un passaggio:   "percorso.<id>.<n>.<campo>"    (gruppo = "percorso.<id>.<n>")
//  - nei nomi di sezione, percorso e campo non ci sono punti.
// Il modulo non raccoglie dati personali o sanitari dei cittadini: solo dati degli enti.

export type TipoCampo = "testo" | "lungo" | "link" | "email" | "telefono";

export type CampoModulo = {
  id: string; // nome breve del campo (senza punti)
  etichetta: string;
  tipo: TipoCampo;
  aiuto?: string;
};

export type SezioneModulo = {
  id: string;
  titolo: string;
  descrizione: string;
  /** pagina dell'app (route) a cui servono questi dati, se esiste */
  paginaApp?: string;
  campi: CampoModulo[];
};

export type Passaggio = { n: number; campi: CampoModulo[] };
export type PercorsoModulo = { id: string; titolo: string; descrizione: string; passaggi: Passaggio[] };

export type StatoGruppo = "bozza" | "compilato" | "da-verificare" | "validato" | "pubblicato";

export const STATI: { id: StatoGruppo; etichetta: string; chiPuoImpostarlo: "comune" | "tutelapp" }[] = [
  { id: "bozza", etichetta: "Bozza (sto ancora scrivendo)", chiPuoImpostarlo: "comune" },
  { id: "compilato", etichetta: "Compilato dal Comune", chiPuoImpostarlo: "comune" },
  { id: "da-verificare", etichetta: "Da verificare", chiPuoImpostarlo: "comune" },
  { id: "validato", etichetta: "Validato da TutelApp", chiPuoImpostarlo: "tutelapp" },
  { id: "pubblicato", etichetta: "Pubblicato in app", chiPuoImpostarlo: "tutelapp" },
];

export type GruppoDati = { stato: StatoGruppo; fonte: string; data: string; nota: string };

export type DatiModulo = {
  versione: number;
  aggiornatoIl?: string;
  aggiornatoDa?: string;
  ruolo?: "comune" | "admin";
  campi: Record<string, string>;
  gruppi: Record<string, GruppoDati>;
};

const c = (id: string, etichetta: string, tipo: TipoCampo = "testo", aiuto?: string): CampoModulo => ({
  id,
  etichetta,
  tipo,
  aiuto,
});

/** Campi comuni a tutti i servizi: gli stessi per ogni sezione, così il Comune li riconosce. */
const campiServizio = (): CampoModulo[] => [
  c("cosa", "Che cosa è, in parole semplici", "lungo", "Come lo spieghereste a una persona allo sportello."),
  c("ufficio", "Ufficio o persona a cui rivolgersi"),
  c("indirizzo", "Indirizzo"),
  c("telefono", "Telefono", "telefono"),
  c("email", "Email o PEC", "email"),
  c("orari", "Orari e giorni", "lungo", "Se cambiano spesso scrivetelo: in app comparirà l'avviso «orari indicativi»."),
  c("accesso", "Come si accede (appuntamento, domanda, modulo)", "lungo"),
  c("documenti", "Documenti da portare", "lungo"),
  c("modulistica", "Link al modulo ufficiale", "link"),
  c("norma", "Norma o delibera di riferimento (con link)", "lungo"),
  c("costi", "Costi o compartecipazione (ISEE, tariffe)", "lungo"),
  c("note", "Altre note per il cittadino", "lungo"),
];

export const SEZIONI: SezioneModulo[] = [
  {
    id: "comune",
    titolo: "Dati del Comune",
    descrizione: "Nome, sede e contatti generali.",
    campi: [
      c("nome", "Nome del Comune"),
      c("indirizzo", "Indirizzo della sede"),
      c("telefono", "Telefono del centralino", "telefono"),
      c("email", "Email dei Servizi Sociali", "email"),
      c("pec", "PEC del Comune", "email"),
      c("sito", "Sito del Comune", "link"),
      c("ambito", "Ambito o Distretto sociale di appartenenza"),
      c("capofila", "Comune capofila dell'ambito"),
    ],
  },
  {
    id: "referenti",
    titolo: "Referenti",
    descrizione: "Chi risponde per il Comune e chi segue la sperimentazione.",
    campi: [
      c("responsabile", "Responsabile del servizio"),
      c("assessore", "Assessore di riferimento"),
      c("operativo", "Referente operativo della sperimentazione"),
      c("collaboratori", "Altre persone che possono compilare il modulo", "lungo", "Solo nome e ruolo."),
      c("firmatario", "Chi firma l'accordo per il Comune"),
      c("delibera", "Estremi della delibera di adesione (numero, data, protocollo)", "lungo"),
    ],
  },
  { id: "uffici", titolo: "Uffici e sportelli", descrizione: "Tutti gli uffici che il cittadino può incontrare.", campi: campiServizio() },
  { id: "servizi-sociali", titolo: "Servizi sociali (segretariato sociale)", descrizione: "Primo colloquio, assistente sociale, appuntamenti.", paginaApp: "/territorio", campi: campiServizio() },
  { id: "disabilita", titolo: "Disabilità", descrizione: "Servizi comunali per le persone con disabilità.", paginaApp: "/diritti", campi: campiServizio() },
  { id: "anziani", titolo: "Anziani", descrizione: "Servizi comunali per le persone anziane.", campi: campiServizio() },
  { id: "famiglie", titolo: "Famiglie e minori", descrizione: "Sostegni per famiglie, bambini e ragazzi.", campi: campiServizio() },
  { id: "caregiver", titolo: "Chi assiste un familiare (caregiver)", descrizione: "Sostegni e sportelli per chi assiste.", campi: campiServizio() },
  { id: "domiciliare", titolo: "Assistenza a domicilio e pasti", descrizione: "Assistenza domiciliare, pasti a domicilio.", campi: campiServizio() },
  { id: "trasporto", titolo: "Trasporto sociale", descrizione: "Trasporto per visite, terapie, scuola e centri.", campi: campiServizio() },
  { id: "sanitario", titolo: "Servizi sanitari del territorio (ASL, ASST, ATS)", descrizione: "Distretto, sportelli e Casa di Comunità che servono il Comune.", paginaApp: "/salute", campi: campiServizio() },
  { id: "inps", titolo: "INPS", descrizione: "Sede, sportello e supporto alle domande INPS.", paginaApp: "/riforma", campi: campiServizio() },
  { id: "inail", titolo: "INAIL", descrizione: "Sede INAIL che serve il Comune.", paginaApp: "/infortunio-lavoro", campi: campiServizio() },
  { id: "esenzioni", titolo: "Esenzioni ticket e tessera sanitaria", descrizione: "Dove si chiedono e come.", paginaApp: "/esenzione-ticket", campi: campiServizio() },
  { id: "progetto-vita", titolo: "Progetto di vita", descrizione: "Chi lo segue e come si chiede.", paginaApp: "/progetto", campi: campiServizio() },
  { id: "associazioni", titolo: "Associazioni locali", descrizione: "Associazioni di persone con disabilità e famiglie.", paginaApp: "/associazioni", campi: campiServizio() },
  { id: "sport", titolo: "Sport e inclusione", descrizione: "Sport adattato, attività ricreative, laboratori.", paginaApp: "/associazioni", campi: campiServizio() },
  { id: "supporto", titolo: "Altri punti di supporto", descrizione: "Sportelli, patronati, consulte, volontariato.", campi: campiServizio() },
  { id: "bonus", titolo: "Bonus e contributi del Comune", descrizione: "Importi, requisiti, scadenze.", paginaApp: "/bonus", campi: campiServizio() },
  { id: "bandi", titolo: "Bandi e avvisi aperti", descrizione: "Avvisi con date di apertura e chiusura.", paginaApp: "/scadenze", campi: campiServizio() },
  { id: "agevolazioni", titolo: "Agevolazioni e tariffe ridotte", descrizione: "Riduzioni su servizi comunali, tributi, trasporti.", paginaApp: "/agevolazioni", campi: campiServizio() },
  { id: "modulistica", titolo: "Modulistica", descrizione: "Elenco dei moduli utili con il link ufficiale.", campi: campiServizio() },
  { id: "reclami", titolo: "Reclami e liste d'attesa", descrizione: "A chi scrivere per un reclamo o per i tempi di attesa.", paginaApp: "/reclamo-attese", campi: campiServizio() },
];

const campiPassaggio = (): CampoModulo[] => [
  c("situazione", "Situazione di partenza", "lungo", "Che cosa sta vivendo la persona in questo momento."),
  c("interlocutore", "Con chi parla"),
  c("ufficio", "Ufficio competente"),
  c("indirizzo", "Indirizzo"),
  c("accesso", "Come si accede (appuntamento, telefono, online)", "lungo"),
  c("documenti", "Documenti da portare", "lungo"),
  c("moduli", "Moduli da compilare (link ufficiale)", "lungo"),
  c("norme", "Norme e fonti istituzionali", "lungo"),
  c("link", "Link ufficiale utile", "link"),
  c("prossimo", "Passaggio successivo", "lungo"),
  c("operatore", "Come lo chiama l'operatore (nome riconoscibile allo sportello)"),
];

const passaggi = (n: number): Passaggio[] =>
  Array.from({ length: n }, (_, i) => ({ n: i + 1, campi: campiPassaggio() }));

export const PERCORSI: PercorsoModulo[] = [
  {
    id: "dopo-diagnosi",
    titolo: "Dopo una diagnosi: primi passi",
    descrizione: "Che cosa succede, passo dopo passo, quando una persona o una famiglia si rivolge al Comune dopo una diagnosi.",
    passaggi: passaggi(6),
  },
  {
    id: "valutazione-inps",
    titolo: "Certificato e domanda all'INPS (riforma della disabilità)",
    descrizione: "Dal certificato medico alla valutazione di base, con il supporto del Comune.",
    passaggi: passaggi(6),
  },
  {
    id: "sostegni-servizi",
    titolo: "Sostegni economici e servizi (fondi regionali, assistenza a domicilio)",
    descrizione: "Come si arriva a un sostegno o a un servizio e chi decide.",
    passaggi: passaggi(6),
  },
  {
    id: "sanita-esenzioni",
    titolo: "Sanità: esenzioni, ausili, liste d'attesa",
    descrizione: "Che cosa fa il Comune e che cosa fa la sanità.",
    passaggi: passaggi(5),
  },
];

/** Identificativo del campo salvato sul server. */
export const idCampoSezione = (sezione: string, campo: string) => `${sezione}.${campo}`;
export const idGruppoPassaggio = (percorso: string, n: number) => `percorso.${percorso}.${n}`;
export const idCampoPassaggio = (percorso: string, n: number, campo: string) => `percorso.${percorso}.${n}.${campo}`;

export const gruppoVuoto = (): GruppoDati => ({ stato: "bozza", fonte: "", data: "", nota: "" });
