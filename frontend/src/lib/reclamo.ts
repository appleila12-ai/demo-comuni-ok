// Reclamo per mancato rispetto dei tempi di attesa (visite ed esami).
// Modulo compilabile + destinatari (struttura, distretto, Regione, Difensore civico, NAS, AGENAS).
// Tutto avviene sul dispositivo: nessun dato viene inviato a un server.
//
// I dati dei destinatari arrivano dagli elenchi raccolti per Regione
// (src/content/reclamo/*.json): sono indirizzi pubblici, ma possono cambiare.
// Vanno ricontrollati almeno ogni 3 mesi e il cittadino li verifica sempre prima di inviare.

import strutture from "@/src/content/reclamo/strutture.json";
import suggerimentiJson from "@/src/content/reclamo/suggerimenti.json";
import nasJson from "@/src/content/reclamo/nas.json";
import { LOGO_APS } from "@/src/content/reclamo/logoAps";
import { escapeHtml, paginaLettera } from "@/src/lib/documenti";

/** [gruppo (provincia), nome della struttura, mail URP, UPT della struttura (se noto)] */
export type Struttura = [string, string, string, (string | undefined)?];
type Sug = Record<string, Record<string, [string, string][]>>;
type NasUfficio = [string, string, string, string, string]; // nome, province, email, PEC, telefono

const STRUTTURE = strutture as unknown as Record<string, Struttura[]>;
const SUGGERIMENTI = suggerimentiJson as unknown as Sug;
const NAS = nasJson as unknown as Record<string, NasUfficio[]>;

export const REGIONI: string[] = Object.keys(STRUTTURE).sort((a, b) => a.localeCompare(b, "it"));

/** Se il Comune dell'app è in una di queste Regioni la propone subito. */
export function regionePredefinita(regioneComune?: string): string | undefined {
  if (!regioneComune) return undefined;
  const n = regioneComune.toLowerCase().replace(/[’']/g, "'");
  return REGIONI.find((r) => r.toLowerCase().replace(/[’']/g, "'") === n);
}

export function struttureDi(regione: string): Struttura[] {
  return STRUTTURE[regione] ?? [];
}

/** I destinatari: 0 e 1 vanno "A", gli altri in copia per conoscenza. */
export const DESTINATARI = [
  { id: 0, nome: "URP della struttura", gruppo: "A" },
  { id: 1, nome: "UPT / URP del distretto", gruppo: "A" },
  { id: 2, nome: "Assessorato alla Sanità della Regione", gruppo: "Cc" },
  { id: 3, nome: "Difensore civico regionale", gruppo: "Cc" },
  { id: 4, nome: "NAS territoriale", gruppo: "Cc" },
  { id: 5, nome: "AGENAS", gruppo: "Cc" },
] as const;

export type Suggerimento = { etichetta: string; valore: string; consigliato?: boolean };

const AGENAS: Suggerimento[] = [{ etichetta: "AGENAS", valore: "dir@agenas.it" }];

function nz(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/\s+e\s+/g, " ")
    .replace(/[^a-zà-ú ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Uffici NAS della Regione; quelli che coprono la provincia della struttura vengono per primi. */
export function nasPer(regione: string, gruppo?: string): Suggerimento[] {
  const uffici = NAS[regione] ?? [];
  const g = gruppo ? nz(gruppo) : "";
  const coperti: NasUfficio[] = [];
  const altri: NasUfficio[] = [];
  uffici.forEach((u) => {
    const ok =
      !!g &&
      u[1].split(",").some((p) => {
        const pn = nz(p);
        return !!pn && (g.includes(pn) || pn.includes(g));
      });
    (ok ? coperti : altri).push(u);
  });
  const out: Suggerimento[] = [];
  [...coperti.map((u) => [u, true] as const), ...altri.map((u) => [u, false] as const)].forEach(
    ([u, ok]) => {
      const nome = `${u[0]} (${u[1]})`;
      if (u[3]) out.push({ etichetta: `${nome} · PEC`, valore: u[3], consigliato: ok });
      if (u[2]) out.push({ etichetta: `${nome} · email`, valore: u[2], consigliato: ok });
    },
  );
  return out;
}

/** Indirizzo NAS proposto in automatico: la PEC dell'ufficio che copre la provincia. */
export function nasAutomatico(regione: string, gruppo?: string): string {
  return nasPer(regione, gruppo).find((s) => s.consigliato)?.valore ?? "";
}

/** Indirizzi suggeriti dagli elenchi per il destinatario `id` (1 distretto, 2 Assessorato, 3 Difensore, 4 NAS, 5 AGENAS). */
export function suggerimentiPer(
  id: number,
  regione: string,
  struttura?: Struttura,
): Suggerimento[] {
  if (id === 4) return nasPer(regione, struttura?.[0]);
  if (id === 5) return AGENAS;
  const out: Suggerimento[] = [];
  if (id === 1 && struttura?.[3]) {
    out.push({ etichetta: "UPT della struttura scelta", valore: struttura[3], consigliato: true });
  }
  (SUGGERIMENTI[regione]?.[String(id)] ?? []).forEach(([e, v]) => out.push({ etichetta: e, valore: v }));
  return out;
}

// ---------------------------------------------------------------------------
// Modulo
// ---------------------------------------------------------------------------

export type Valori = Record<string, string>;

export const PRIORITA = [
  { id: "U", label: "U · Urgente" },
  { id: "B", label: "B · Breve" },
  { id: "D", label: "D · Differibile" },
  { id: "P", label: "P · Programmata" },
];

export const OBBLIGATORI: [string, string][] = [
  ["nome", "nome"],
  ["cognome", "cognome"],
  ["luogoN", "luogo di nascita"],
  ["nascita", "data di nascita"],
  ["comune", "città di residenza"],
  ["via", "via"],
  ["cf", "codice fiscale"],
  ["dPresc", "data della prescrizione"],
  ["medico", "medico"],
  ["prest", "accertamento"],
  ["prio", "classe di priorità"],
  ["dPren", "data della prenotazione"],
];

export function mancanti(v: Valori): string[] {
  return OBBLIGATORI.filter(([k]) => !(v[k] || "").trim()).map(([, l]) => l);
}

export function oggi(): string {
  const d = new Date();
  const z = (n: number) => (n < 10 ? "0" : "") + n;
  return `${z(d.getDate())}/${z(d.getMonth() + 1)}/${d.getFullYear()}`;
}

export type Allegati = { identita: boolean; impegnativa: boolean; solleciti: boolean };

const o = (t: string | undefined) => (t || "").trim();

/** Testo del modulo, un paragrafo per riga (anteprima e copia). */
export function paragrafiModulo(v: Valori, a: Allegati): string[] {
  const x = (k: string) => o(v[k]) || "……";
  return [
    `Io sottoscritto/a ${x("nome")} ${x("cognome")}, nato/a a ${x("luogoN")} prov (${x("provN")}) il ${x("nascita")}, residente in (città) ${x("comune")} prov (${x("prov")}) c.a.p. ${x("cap")}, via ${x("via")} n. ${x("civ")}, codice fiscale ${x("cf")}, cell. ${o(v.cell)} tel. ${o(v.tel)}, e-mail ${o(v.email)}`,
    "Premesso che",
    `- in data ${x("dPresc")} il medico dr. ${x("medico")} mi ha prescritto il seguente accertamento diagnostico ${x("prest")} con il seguente quesito diagnostico ${x("quesito")} con classe di priorità (U,B,D,P) ${x("prio")}`,
    `- in data ${x("dPren")}, al momento della prenotazione del già menzionato accertamento, mi è stato assegnato un appuntamento che supera il limite delle tempistiche indicate dal medico, quando il sopraccitato accertamento non può essere differito in tempo d’esecuzione oltre detto limite temporale.`,
    "- Il Piano Nazionale di Governo delle Liste d’Attesa 2026-2028, e relative delibere regionali, prevede l’avvio di percorsi di tutela che permettono al cittadino di ottenere la prestazione tramite SSN, nei tempi indicati dal medico, riservando al cittadino la sola quota di compartecipazione alla spesa (ticket) se dovuta.",
    "- Facendo riferimento al sistema dell’over booking, previsto dal PNGLA 2026-2028, esso si configura come un’ulteriore compressione del diritto alla cura sancito dall’art 32. della Costituzione.",
    "Chiedo",
    "che la prestazione da me richiesta sia assegnata nel rispetto dei tempi previsti dalla prescrizione del mio medico curante, attraverso l’avvio di un PERCORSO DI TUTELA che mi permetta di accedere a prestazioni in regime libero-professionale (Intramoenia) presso la struttura pubblica da me scelta ovvero in cui sono già in cura, o in alternativa presso un erogatore privato accreditato nelle vicinanze del mio luogo di residenza, a vostre spese, riservando a me la sola compartecipazione al costo della prestazione ( ticket), non in overbooking.",
    "in difetto, mi rivolgerò alle Autorità competenti al fine di tutelare i miei diritti ed interessi",
    `Allego\n${a.identita ? "☒" : "☐"} documento di Identità,\n${a.impegnativa ? "☒" : "☐"} documentazione relativa agli accertamenti richiesti (IMPEGNATIVA)\n${a.solleciti ? "☒" : "☐"} dettagli degli eventuali solleciti già effettuati.`,
  ];
}

export function lineaFirma(v: Valori): { luogoData: string; infede: string } {
  return {
    luogoData: `Luogo e data: ${o(v.comune) || "……"}, ${oggi()}`,
    infede: `${o(v.nome)} ${o(v.cognome)}`.trim() || "……",
  };
}

export function testoModulo(v: Valori, a: Allegati): string {
  const p = paragrafiModulo(v, a);
  const f = lineaFirma(v);
  return [
    "RECLAMO\nMANCATO RISPETTO DEI TEMPI DI ATTESA PER VISITE ED ESAMI",
    ...p,
    `${f.luogoData}\n\nIn fede\n${f.infede}`,
  ].join("\n\n");
}

/** PDF: in cima solo il logo di APS Gazebo Sanità e Beni Comuni. */
export function htmlModulo(v: Valori, a: Allegati): string {
  const p = paragrafiModulo(v, a);
  const f = lineaFirma(v);
  const par = (t: string) => `<p>${escapeHtml(t).replace(/\n/g, "<br>")}</p>`;
  const corpo = `<style>
  .logo{text-align:center;margin-bottom:6px}.logo img{width:78px;height:78px}
  h1{font-size:14pt;text-align:center;margin:6px 0 16px}
  h2{font-size:13pt;text-align:center;margin:16px 0 8px}
  p{text-align:justify}.sig{display:flex;justify-content:space-between;margin-top:34px}
  .sig div:last-child{text-align:center}
</style>
<div class="logo"><img src="${LOGO_APS}" alt="Logo APS Gazebo Sanità e Beni Comuni"></div>
<h1>RECLAMO<br>MANCATO RISPETTO DEI TEMPI DI ATTESA PER VISITE ED ESAMI</h1>
${par(p[0])}<h2>Premesso che</h2>${par(p[2])}${par(p[3])}${par(p[4])}${par(p[5])}
<h2>Chiedo</h2>${par(p[7])}${par(p[8])}${par(p[9])}
<div class="sig"><div>${escapeHtml(f.luogoData)}</div><div>In fede<br>${escapeHtml(f.infede)}</div></div>`;
  return paginaLettera(corpo, "Reclamo tempi di attesa");
}

// ---------------------------------------------------------------------------
// Email
// ---------------------------------------------------------------------------

export const OGGETTO_MAIL = "Reclamo per mancato rispetto dei tempi di attesa – richiesta percorso di tutela";

export function indirizzi(testo: string | undefined): string[] {
  return (testo || "")
    .split(/[,;\s]+/)
    .map((s) => s.trim())
    .filter((s) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s));
}

export function corpoMail(v: Valori): string {
  const nome = `${o(v.nome)} ${o(v.cognome)}`.trim();
  const extra = [
    o(v.struttura) ? `Struttura presso cui è stato prenotato: ${o(v.struttura)}.` : "",
    o(v.dApp) ? `Data dell’appuntamento assegnato: ${o(v.dApp)}.` : "",
    o(v.note) ? o(v.note) : "",
  ].filter(Boolean);
  return [
    "Buongiorno,",
    "in allegato trovate il reclamo per il mancato rispetto dei tempi di attesa indicati dal medico nella prescrizione, con la richiesta di avvio di un percorso di tutela.",
    ...extra,
    "Allego il modulo compilato e i documenti indicati. Resto in attesa di un vostro riscontro.",
    "Cordiali saluti",
    nome,
  ].join("\n\n");
}

export function mailto(a: Record<number, string>, v: Valori): string {
  const lista = (ids: number[]) =>
    ids
      .flatMap((i) => indirizzi(a[i]))
      .filter((x, i, arr) => arr.indexOf(x) === i)
      .map((x) => encodeURIComponent(x).replace(/%40/g, "@"))
      .join(",");
  const to = lista([0, 1]);
  const cc = lista([2, 3, 4, 5]);
  return (
    `mailto:${to}?` +
    (cc ? `cc=${cc}&` : "") +
    `subject=${encodeURIComponent(OGGETTO_MAIL)}&body=${encodeURIComponent(corpoMail(v))}`
  );
}

// ---------------------------------------------------------------------------
// APS Gazebo Sanità e Beni Comuni (solo dati dell'associazione, nessun nome di persona)
// ---------------------------------------------------------------------------

export const APS = {
  nome: "APS Gazebo Sanità e Beni Comuni",
  attivita: "Consulenza civica, legale, diritti, sanità e invalidità civile",
  indirizzo: "Via Don Lazzaro Troiani, 10 · 22030 Lasnigo (CO)",
  cf: "C.F. 93021150136",
  telefono: "+39 338 3701056",
  email: "info@sanitabenicomuni.it",
  sito: "www.sanitabenicomuni.it",
  facebook: "Aps Gazebo Sanità e Beni Comuni",
  instagram: "@gazebo_sanitabenicomuni",
  disclaimer:
    "Questo modulo è fornito dall’associazione APS Gazebo Sanità e Beni Comuni. Per ulteriori informazioni o supporto puoi contattare l’associazione ai riferimenti indicati.",
};
