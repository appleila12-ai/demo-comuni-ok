// Lettere pronte: modelli da completare con pochi dati, da stampare o inviare.
// I testi sono volutamente semplici e cortesi. Prima dei piloti vanno fatti
// rileggere a un patronato o a un esperto (vedi MULTI-COMUNE.md).

import { comune } from "@/src/config/comune";
import { escapeHtml, paginaLettera } from "@/src/lib/documenti";

export type CampoLettera = {
  id: string;
  label: string;
  placeholder?: string;
  aiuto?: string;
  multiline?: boolean;
  obbligatorio?: boolean;
};

export type Valori = Record<string, string>;

export type Lettera = {
  id: string;
  icon: string;
  titolo: string;
  sottotitolo: string;
  quando: string;
  campi: CampoLettera[];
  /** A chi va la lettera (testo del destinatario) */
  destinatario: (v: Valori) => string;
  /** Email a cui inviarla, se nota */
  email?: () => string | undefined;
  oggetto: (v: Valori) => string;
  paragrafi: (v: Valori) => string[];
  allegati: (v: Valori) => string[];
  nota?: string;
};

const NOME: CampoLettera = {
  id: "nome",
  label: "Il tuo nome e cognome",
  placeholder: "Es. Maria Rossi",
  obbligatorio: true,
};
const NASCITA: CampoLettera = {
  id: "nascita",
  label: "Luogo e data di nascita",
  placeholder: "Es. Sarzana, 12/03/1970",
};
const INDIRIZZO: CampoLettera = {
  id: "indirizzo",
  label: "Indirizzo di residenza",
  placeholder: "Es. Via Roma 1",
};
const RECAPITI: CampoLettera = {
  id: "recapiti",
  label: "Telefono o email per essere ricontattato/a",
  placeholder: "Es. 333 1234567",
};
const PERSONA: CampoLettera = {
  id: "persona",
  label: "Per chi è la richiesta",
  placeholder: "Es. per me stesso/a · per mio padre Giuseppe Rossi, nato il 01/02/1945",
  aiuto: "Se scrivi per un familiare, indica nome, grado di parentela e data di nascita.",
  obbligatorio: true,
};

const servizi = () =>
  `${comune.ente} ${comune.delEnte}\n${comune.indirizzo}`;

const mittente = (v: Valori) =>
  [v.nome, v.nascita && `nato/a a ${v.nascita}`, v.indirizzo && `residente in ${v.indirizzo}`]
    .filter(Boolean)
    .join(", ");

export const LETTERE: Lettera[] = [
  {
    id: "colloquio",
    icon: "chatbubbles-outline",
    titolo: "Chiedere un colloquio ai Servizi Sociali",
    sottotitolo: "Il primo passo per quasi tutti gli aiuti del Comune",
    quando: "Quando non sai da dove cominciare o vuoi capire a quali servizi hai diritto.",
    campi: [NOME, INDIRIZZO, PERSONA, { id: "motivo", label: "Di cosa hai bisogno (facoltativo)", placeholder: "Es. aiuto in casa, trasporto per le visite, informazioni sulla 104", multiline: true }, RECAPITI],
    destinatario: servizi,
    email: () => comune.email,
    oggetto: () => "Richiesta di colloquio con l'assistente sociale",
    paragrafi: (v) => [
      `Il/La sottoscritto/a ${mittente(v)}, chiede un colloquio con l'assistente sociale ${v.persona ? `(${v.persona})` : ""} per essere orientato/a sui servizi e sulle possibili forme di sostegno.`,
      v.motivo ? `In particolare, avrei bisogno di informazioni e aiuto per: ${v.motivo}.` : "",
      `Resto a disposizione per concordare giorno e orario${v.recapiti ? ` ai seguenti recapiti: ${v.recapiti}` : ""}.`,
      "Ringrazio per l'attenzione e porgo cordiali saluti.",
    ],
    allegati: () => ["Copia del documento d'identità"],
  },
  {
    id: "sad",
    icon: "home-outline",
    titolo: "Chiedere l'assistenza domiciliare (SAD)",
    sottotitolo: "Aiuto a casa per la cura della persona",
    quando: "Quando una persona ha bisogno di aiuto a casa per lavarsi, vestirsi, mangiare o per le faccende.",
    campi: [NOME, INDIRIZZO, PERSONA, { id: "bisogni", label: "Di quale aiuto c'è bisogno", placeholder: "Es. igiene personale, preparazione dei pasti, compagnia", multiline: true, obbligatorio: true }, RECAPITI],
    destinatario: servizi,
    email: () => comune.email,
    oggetto: () => "Richiesta di attivazione del Servizio di Assistenza Domiciliare (SAD)",
    paragrafi: (v) => [
      `Il/La sottoscritto/a ${mittente(v)}, chiede la valutazione per l'attivazione del Servizio di Assistenza Domiciliare ${v.persona ? `(${v.persona})` : ""}.`,
      `Attualmente c'è bisogno di aiuto per: ${v.bisogni || "…"}.`,
      "Chiedo di essere contattato/a per la visita o il colloquio di valutazione e per conoscere i documenti necessari (ad esempio l'ISEE) e l'eventuale quota di partecipazione.",
      `${v.recapiti ? `Recapiti: ${v.recapiti}. ` : ""}Ringrazio e porgo cordiali saluti.`,
    ],
    allegati: () => ["Copia del documento d'identità", "Copia del verbale di invalidità / Legge 104 (se presente)", "Attestazione ISEE (se disponibile)"],
  },
  {
    id: "progetto-vita",
    icon: "sparkles-outline",
    titolo: "Chiedere il Progetto di Vita",
    sottotitolo: "Il piano personalizzato previsto dalla riforma",
    quando: "Quando c'è già un riconoscimento (verbale) e vuoi un piano costruito insieme ai servizi. Si può chiedere anche online sul portale INPS.",
    campi: [NOME, NASCITA, INDIRIZZO, PERSONA, { id: "desideri", label: "Cosa è importante per te (facoltativo)", placeholder: "Es. vivere a casa mia, lavorare, frequentare un centro diurno", multiline: true }, RECAPITI],
    destinatario: () => `Ambito Territoriale Sociale / ${servizi()}`,
    email: () => comune.email,
    oggetto: () => "Richiesta di elaborazione del Progetto di Vita individuale, personalizzato e partecipato (D.Lgs. 62/2024)",
    paragrafi: (v) => [
      `Il/La sottoscritto/a ${mittente(v)}, chiede l'avvio del percorso per l'elaborazione del Progetto di Vita individuale, personalizzato e partecipato previsto dal D.Lgs. 62/2024 ${v.persona ? `(${v.persona})` : ""}.`,
      v.desideri ? `Tra gli aspetti più importanti per la persona interessata: ${v.desideri}.` : "",
      "Chiedo di essere informato/a sui tempi, sui documenti da presentare e sulla convocazione dell'équipe di valutazione (UVM), e di poter partecipare attivamente, anche con una persona di fiducia.",
      `${v.recapiti ? `Recapiti: ${v.recapiti}. ` : ""}Cordiali saluti.`,
    ],
    allegati: () => ["Copia del documento d'identità", "Copia del verbale / certificazione di disabilità", "Eventuale riepilogo del Progetto di Vita preparato con TutelApp"],
    nota: "La richiesta si può fare anche online sul portale INPS (servizio SISDA). Nelle zone dove la riforma non è ancora partita, gli uffici potrebbero indicarti un modulo diverso.",
  },
  {
    id: "permessi-104",
    icon: "briefcase-outline",
    titolo: "Comunicare i permessi 104 al datore di lavoro",
    sottotitolo: "I 3 giorni al mese per assistere o per te stesso/a",
    quando: "Dopo aver fatto domanda all'INPS (se lavori nel privato) o insieme alla domanda (se lavori nel pubblico).",
    campi: [
      NOME,
      { id: "datore", label: "Datore di lavoro / ufficio del personale", placeholder: "Es. Ufficio Personale – Rossi S.r.l.", obbligatorio: true },
      PERSONA,
      { id: "domanda", label: "Data e numero della domanda INPS (se ce l'hai)", placeholder: "Es. 10/09/2026, prot. n. 123456" },
    ],
    destinatario: (v) => v.datore || "Datore di lavoro",
    oggetto: () => "Comunicazione per la fruizione dei permessi ex art. 33 Legge 104/1992",
    paragrafi: (v) => [
      `Il/La sottoscritto/a ${v.nome || "…"}, dipendente di codesta azienda/amministrazione, comunica di voler fruire dei permessi mensili retribuiti previsti dall'art. 33 della Legge 104/1992 ${v.persona ? `(${v.persona})` : ""}.`,
      v.domanda
        ? `Comunica inoltre di aver presentato la relativa domanda all'INPS (${v.domanda}).`
        : "Si impegna a trasmettere gli estremi della domanda presentata all'INPS, ove prevista.",
      "Chiede di concordare la programmazione mensile dei giorni di permesso, nel rispetto delle esigenze organizzative, e si impegna a comunicare tempestivamente ogni variazione.",
      "Distinti saluti.",
    ],
    allegati: () => ["Copia del verbale con riconoscimento di handicap grave (art. 3 comma 3)", "Copia della ricevuta della domanda INPS (se presentata)"],
    nota: "Chi lavora nel settore privato fa domanda online all'INPS; chi lavora nel pubblico la presenta alla propria amministrazione. I 3 giorni al mese si possono dividere tra più familiari, ma restano 3 in totale.",
  },
  {
    id: "delega",
    icon: "person-add-outline",
    titolo: "Delegare un familiare",
    sottotitolo: "Per fare pratiche e ritirare documenti al posto tuo",
    quando: "Quando qualcuno di fiducia deve andare agli sportelli al posto tuo.",
    campi: [
      NOME,
      NASCITA,
      { id: "delegato", label: "Nome della persona delegata", placeholder: "Es. Luca Rossi, mio figlio", obbligatorio: true },
      { id: "cosa", label: "Per cosa la deleghi", placeholder: "Es. presentare domande e ritirare documenti presso i Servizi Sociali", multiline: true, obbligatorio: true },
    ],
    destinatario: () => "A chi di competenza",
    oggetto: () => "Delega",
    paragrafi: (v) => [
      `Il/La sottoscritto/a ${mittente(v)}, delega ${v.delegato || "…"} a ${v.cosa || "…"}, in suo nome e per suo conto.`,
      "La presente delega vale fino a revoca scritta.",
      "In fede.",
    ],
    allegati: () => ["Copia del documento d'identità di chi delega", "Copia del documento d'identità della persona delegata"],
    nota: "Alcuni uffici (INPS, banche, ASL) usano un proprio modulo di delega: chiedilo prima allo sportello.",
  },
];

export function trovaLettera(id: string | undefined): Lettera | undefined {
  return LETTERE.find((l) => l.id === id);
}

export function mancanti(l: Lettera, v: Valori): CampoLettera[] {
  return l.campi.filter((c) => c.obbligatorio && !(v[c.id] || "").trim());
}

/** Testo semplice (per email o copia). */
export function testoLettera(l: Lettera, v: Valori): string {
  const oggi = new Date().toLocaleDateString("it-IT");
  return [
    l.destinatario(v),
    "",
    `Oggetto: ${l.oggetto(v)}`,
    "",
    ...l.paragrafi(v).filter(Boolean).flatMap((p) => [p, ""]),
    `${comune.nomeBreve}, ${oggi}`,
    "",
    `Firma ${v.nome || ""}`,
    "",
    "Allegati:",
    ...l.allegati(v).map((a) => `- ${a}`),
  ].join("\n");
}

export function htmlLettera(l: Lettera, v: Valori): string {
  const oggi = new Date().toLocaleDateString("it-IT");
  const br = (t: string) => escapeHtml(t).replace(/\n/g, "<br>");
  const corpo = `
<div class="mitt">${br([v.nome, v.indirizzo, v.recapiti].filter(Boolean).join("\n"))}</div>
<div class="dest">${br(l.destinatario(v))}</div>
<div class="ogg">Oggetto: ${escapeHtml(l.oggetto(v))}</div>
${l.paragrafi(v).filter(Boolean).map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
<p>${escapeHtml(comune.nomeBreve)}, ${oggi}</p>
<div class="firma">Firma<br><br>______________________________<br>${escapeHtml(v.nome || "")}</div>
<div class="all"><strong>Allegati:</strong><br>${l.allegati(v).map((a) => `– ${escapeHtml(a)}`).join("<br>")}</div>
<div class="nota">Lettera preparata con TutelApp · modello di esempio da verificare con l'ufficio destinatario.</div>`;
  return paginaLettera(corpo, l.oggetto(v));
}
