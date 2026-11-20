// Logica pura di Oggi: nessuna rete, nessun archivio, nessuna deduzione di diritti.
export type DataOggi = {
  id: string;
  titolo: string;
  data: string;
  ora?: string;
  personale: boolean;
};
export const TITOLO_CALENDARIO = "Promemoria TutelApp";
export const FUSO_OGGI = "Europe/Rome";
export function dataValida(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value) || value < "2020-01-01" || value > "2099-12-31") return false;
  const d = new Date(value + "T12:00:00Z");
  return !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === value;
}
// Lo storage esistente serializza una stringa JSON dentro un'altra stringa JSON.
// Qui gli errori non vengono trasformati in un elenco vuoto.
export function decodificaDateOggi(raw: string | null): unknown[] {
  if (raw === null) return [];
  const testo: unknown = JSON.parse(raw);
  if (typeof testo !== "string") throw Error("Archivio date non leggibile.");
  const lista: unknown = JSON.parse(testo);
  if (!Array.isArray(lista)) throw Error("Archivio date non leggibile.");
  return lista;
}
export function oggiRoma(now = new Date()): string {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: FUSO_OGGI, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now).map(x => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}`;
}
export function giorniTra(a: string, b: string): number {
  if (!dataValida(a) || !dataValida(b)) throw Error("Data non valida.");
  return Math.round((Date.parse(a + "T12:00:00Z") - Date.parse(b + "T12:00:00Z")) / 86400000);
}
export function scegliDate(eventi: DataOggi[], oggi = oggiRoma()) {
  const valide = eventi.filter(e => dataValida(e.data)).sort((a, b) => a.data.localeCompare(b.data) || (a.ora || "").localeCompare(b.ora || "") || a.id.localeCompare(b.id));
  return {
    vicine: valide.filter(e => { const n = giorniTra(e.data, oggi); return n >= 0 && n <= 14; }),
    passate: valide.filter(e => giorniTra(e.data, oggi) < 0),
    successive: valide.filter(e => giorniTra(e.data, oggi) > 14).length,
  };
}
export function istanteRoma(data: string, ora: string): Date {
  if (!dataValida(data) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(ora)) throw Error("Scegli una data e un’ora valide.");
  const [y, m, d] = data.split("-").map(Number), [h, min] = ora.split(":").map(Number);
  const base = Date.UTC(y, m - 1, d, h, min);
  const matches = [60, 120].map(offset => new Date(base - offset * 60000)).filter(value => {
    const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: FUSO_OGGI, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(value).map(x => [x.type, x.value]));
    return `${p.year}-${p.month}-${p.day}` === data && `${p.hour}:${p.minute}` === ora;
  });
  if (matches.length !== 1) throw Error("Quest’ora coincide con il cambio d’ora. Scegli un altro orario.");
  return matches[0];
}
export function dettagliCalendario(data: string, ora: string): string {
  istanteRoma(data, ora);
  const [y, m, d] = data.split("-");
  return `Titolo: ${TITOLO_CALENDARIO}\nData: ${d}/${m}/${y}\nOra: ${ora} — ${FUSO_OGGI}\nApri TutelApp per controllare la data salvata.`;
}
const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
function piega(s: string): string {
  let line = "", size = 0; const out: string[] = [];
  for (const c of s) {
    const n = new TextEncoder().encode(c).length;
    if (size + n > 75) { out.push(line); line = " "; size = 1; }
    line += c; size += n;
  }
  return [...out, line].join("\r\n");
}
export type OpzioniCalendario = { data: string; ora: string; anticipo: number; uid: string };
export function creaPromemoria(x: OpzioniCalendario, now = new Date()): string {
  const instant = istanteRoma(x.data, x.ora);
  if (![0, 15, 1440].includes(x.anticipo) || !/^oggi-[a-f0-9]{64}@tutelapp\.invalid$/.test(x.uid)) throw Error("Impostazioni del calendario non valide.");
  if (instant.getTime() - x.anticipo * 60000 <= now.getTime()) throw Error("L’avviso sarebbe nel passato. Scegli un altro orario o anticipo.");
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//TutelApp//Oggi//IT", "CALSCALE:GREGORIAN",
    "BEGIN:VTIMEZONE", "TZID:Europe/Rome", "BEGIN:DAYLIGHT", "DTSTART:19960331T020000", "TZOFFSETFROM:+0100", "TZOFFSETTO:+0200", "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU", "END:DAYLIGHT", "BEGIN:STANDARD", "DTSTART:19961027T030000", "TZOFFSETFROM:+0200", "TZOFFSETTO:+0100", "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU", "END:STANDARD", "END:VTIMEZONE",
    "BEGIN:VEVENT", `UID:${x.uid}`, `DTSTAMP:${stamp(now)}`, `DTSTART;TZID=Europe/Rome:${x.data.replaceAll("-", "")}T${x.ora.replace(":", "")}00`, "DURATION:PT5M", `SUMMARY:${TITOLO_CALENDARIO}`, "DESCRIPTION:Apri TutelApp per controllare la data salvata.", "TRANSP:TRANSPARENT", "CLASS:PRIVATE",
    "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${TITOLO_CALENDARIO}`, `TRIGGER:${x.anticipo === 0 ? "PT0S" : x.anticipo === 15 ? "-PT15M" : "-P1D"}`, "END:VALARM", "END:VEVENT", "END:VCALENDAR"].map(piega).join("\r\n") + "\r\n";
}
