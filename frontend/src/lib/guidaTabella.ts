// Guida ai servizi del Comune in forma di tabella: Nome · Servizio · Recapiti.
// Nessuna dipendenza (solo testo): si può provare con Node da solo.
//
// I recapiti dei servizi sono scritti nei dati come testo libero separato da " · ".
// Qui ogni frase finisce in UNA delle due colonne (servizio oppure recapiti), parola per parola:
// non si riscrive e non si aggiunge nulla ai dati verificati.

export type VoceServizio = {
  title: string;
  subtitle: string;
  action: { type: "tel" | "web"; value: string };
};

export type RigaGuida = { nome: string; servizio: string; recapiti: string[]; sito?: string };

export type NumeroUtile = { title: string; subtitle: string; type: "tel" | "web"; value: string };

const RE_EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const RE_TEL =
  /\b(tel\.?|telefono|cell\.?|numero verde|n\. verde)\b|\b0\d(?:[ .]?\d){6,9}\b|\b3\d{2}[ .]?\d{3}[ .]?\d{3,4}\b|\b800[ .]?\d{3}[ .]?\d{3}\b/i;
const RE_ORARI =
  /\b(lun|mar|mer|gio|ven|sab|dom)[a-zì]*\b.*\d{1,2}[:.]\d{2}|\d{1,2}[:.]\d{2}\s*[–-]\s*\d{1,2}[:.]\d{2}|\bsenza prenotazione\b/i;
const RE_INDIRIZZO =
  /^(?:[^,]{0,40},\s*)?(via|viale|piazza|piazzale|piazzetta|largo|corso|salita|passo|vico|strada|lungomare|località|loc\.)\s/i;
const RE_DA_SALTARE = /^(fonte|pagina)\b|\bqui sotto\b/i;
const ABBREVIAZIONI = /^(art|dott|dr|sig|tel|s|n|c|prof|ing|avv|sr|pz|cfr|ecc|es)$/i;

/** Divide in frasi senza spezzare le abbreviazioni ("art. 3", "tel. 010…"). */
export function frasi(testo: string): string[] {
  const out: string[] = [];
  let inizio = 0;
  const re = /[.!?]\s+(?=[A-ZÀ-Ý])/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(testo))) {
    const prima = testo.slice(inizio, m.index);
    const ultima = (prima.match(/(\S+)$/) || ["", ""])[1].replace(/\.$/, "");
    if (ultima.length <= 1 || ABBREVIAZIONI.test(ultima)) continue;
    out.push(testo.slice(inizio, m.index + 1).trim());
    inizio = m.index + m[0].length;
  }
  const resto = testo.slice(inizio).trim();
  if (resto) out.push(resto);
  return out;
}

function eRecapito(frase: string): boolean {
  // Rete di sicurezza: una sequenza lunga di cifre è quasi sempre un numero di telefono.
  if (/\d(?:[ .]?\d){6,}/.test(frase)) return true;
  return RE_EMAIL.test(frase) || RE_TEL.test(frase) || RE_ORARI.test(frase) || (RE_INDIRIZZO.test(frase) && /\d/.test(frase));
}

/** Una voce dei dati → una riga della tabella. Ogni frase va in una sola colonna. */
export function rigaDaVoce(v: VoceServizio): RigaGuida {
  const descrizione: string[] = [];
  const recapiti: string[] = [];
  for (const segmento of v.subtitle.split(" · ")) {
    for (const f of frasi(segmento)) {
      const frase = f.replace(/\.$/, "").trim();
      if (!frase || RE_DA_SALTARE.test(frase)) continue;
      (eRecapito(frase) ? recapiti : descrizione).push(frase);
    }
  }
  // Il numero o il sito del pulsante, se non sono già scritti nel testo.
  let sito: string | undefined;
  if (v.action.type === "tel") {
    const cifre = v.subtitle.replace(/\D/g, "");
    if (v.action.value && !cifre.includes(v.action.value.replace(/\D/g, ""))) {
      recapiti.unshift(`Tel. ${v.action.value}`);
    }
  } else if (v.action.value.startsWith("https://")) {
    sito = v.action.value;
  }
  // Il servizio è la prima frase; il resto (requisiti, tempi) resta nell'app.
  let servizio = descrizione[0] || "";
  if (descrizione.length > 1) servizio += " (altri dettagli nell'app)";
  return { nome: v.title, servizio, recapiti, sito };
}

export function rigaDaNumero(n: NumeroUtile): RigaGuida {
  return n.type === "tel"
    ? { nome: n.title.split(" — ")[0], servizio: n.subtitle, recapiti: [n.title.includes(" — ") ? `Tel. ${n.title.split(" — ")[1]}` : `Tel. ${n.value}`] }
    : { nome: n.title, servizio: n.subtitle, recapiti: [], sito: n.value };
}

export type GruppoGuida = { titolo: string; righe: RigaGuida[] };

/** Raggruppa per bisogno: primo contatto, sanità, altri servizi. Ordine dei dati conservato. */
export function raggruppa(righe: RigaGuida[]): GruppoGuida[] {
  const comune: RigaGuida[] = [];
  const sanita: RigaGuida[] = [];
  const altri: RigaGuida[] = [];
  for (const r of righe) {
    if (/\b(ASL|ASST|AUSL|ATS|Distretto|PUA|Casa della Comunit|Azienda sanitaria|sanitari)/i.test(r.nome)) sanita.push(r);
    else if (/\b(Municipio|Servizi Sociali|Segretariato|Ascolto|Sportello|URP|Polo|Ambito|Comune)\b/i.test(r.nome)) comune.push(r);
    else altri.push(r);
  }
  return [
    { titolo: "Primo contatto: Comune e servizi sociali", righe: comune },
    { titolo: "Sanità: ASL e Distretti", righe: sanita },
    { titolo: "Altri servizi", righe: altri },
  ].filter((g) => g.righe.length > 0);
}

export function esc(t: string): string {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function ospite(url: string): string {
  const m = url.match(/^https:\/\/([^/]+)/);
  return m ? m[1] : url;
}

function cellaRecapiti(r: RigaGuida): string {
  const righe = r.recapiti.map((x) => `<div>${esc(x)}</div>`);
  if (r.sito) righe.push(`<div><a href="${esc(r.sito)}">${esc(ospite(r.sito))}</a></div>`);
  return righe.join("") || "—";
}

export function tabellaHtml(gruppi: GruppoGuida[]): string {
  return gruppi
    .map(
      (g) => `
  <h2>${esc(g.titolo)}</h2>
  <table>
    <thead><tr><th>Nome</th><th>Servizio</th><th>Telefono, email, indirizzo e orari</th></tr></thead>
    <tbody>${g.righe
      .map(
        (r) =>
          `<tr><td class="nome">${esc(r.nome)}</td><td>${esc(r.servizio) || "—"}</td><td class="rec">${cellaRecapiti(r)}</td></tr>`,
      )
      .join("")}</tbody>
  </table>`,
    )
    .join("");
}
