#!/usr/bin/env node
// Classifica i Comuni con scheda: «completa» (servizi sociali + bonus regionali + bonus comunali + ticket) o «incompleta».
// Solo Node, legge i file del repository, non modifica nulla. Uso: node completezza-comuni.js <radice-repo> [--json]
const fs = require("fs"), path = require("path");
const repo = path.resolve(process.argv[2] || ".");
const L = require(path.join(repo, "frontend/scripts/archivi-lib.js"));
const src = L.sorgenteDisco(path.join(repo, "frontend"));
const sch = L.caricaSchede(src), bonus = L.caricaBonus(src), dest = L.caricaDestinatari(src);

// slug con scheda ticket specifica (ESENZIONE_ASL + casi speciali di app/esenzione-ticket.tsx)
const t = src.leggi("src/lib/esenzioneAslRisposte.ts");
const ticket = new Set(["genova", "nuoro"]);
const blocco = t.slice(t.indexOf("export const ESENZIONE_ASL"));
const iniz = blocco.slice(0, blocco.indexOf("\n};"));
for (const m of iniz.matchAll(/^  (?:"([\w-]+)"|([\w]+)):\s*(?:\{|[\w]+\()/gm)) ticket.add(m[1] || m[2]);
for (const m of t.matchAll(/ESENZIONE_ASL\.([\w]+)\s*=/g)) ticket.add(m[1]);
for (const m of t.matchAll(/ESENZIONE_ASL\["([\w-]+)"\]\s*=/g)) ticket.add(m[1]);
for (const m of t.matchAll(/for \(const slug of \[([^\]]*)\]\)\s*ESENZIONE_ASL\[slug\]/g)) for (const s of m[1].matchAll(/"([\w-]+)"/g)) ticket.add(s[1]);
const ASL4 = ["carro", "maissana", "varese-ligure"];
const bonusComunali = {}, bonusRegionali = {};
for (const v of bonus.voci) {
  if (!["attivo", "aperto"].includes(v.stato)) continue; // contano solo le misure attive o aperte, non quelle chiuse
  if (v.comuni && v.comuni.length) for (const c of v.comuni) bonusComunali[c] = (bonusComunali[c] || 0) + 1;
  else bonusRegionali[v.regione] = (bonusRegionali[v.regione] || 0) + 1;
}
const righe = [];
for (const s of sch.schede.filter((s) => s.tipo === "comune")) {
  const mancano = [];
  const servizi = (s.email || s.indirizzo) && s.telefono;
  if (!servizi) mancano.push("servizi sociali (recapiti)");
  if (!bonusRegionali[s.regione]) mancano.push("bonus regionali");
  if (!bonusComunali[s.slug]) mancano.push("bonus comunali");
  const asl5 = s.provincia === "SP" && !ASL4.includes(s.slug);
  if (!(ticket.has(s.slug) || asl5)) mancano.push("esenzione ticket");
  righe.push({ slug: s.slug, nome: s.nome, provincia: s.provincia, regione: s.regione, completa: mancano.length === 0, mancano });
}
if (process.argv.includes("--scrivi")) {
  // elenco dei soli slug completi, letto dall'app (elenco Comuni); il resto è nel registro in docs/
  const completi = righe.filter((r) => r.completa).map((r) => r.slug).sort();
  fs.writeFileSync(path.join(repo, "frontend/src/content/completezza-comuni.json"), JSON.stringify(completi) + "\n");
  const per = {}; for (const r of righe) for (const m of r.mancano) per[m] = (per[m] || 0) + 1;
  let md = "# Completezza delle schede dei Comuni\n\nCriterio: scheda **completa** = recapiti dei Servizi Sociali (telefono + email o indirizzo) + almeno un bonus regionale attivo/aperto + almeno un bonus comunale attivo/aperto + scheda ticket specifica per l'ASL.\nGenerato da `docs/strumenti/completezza-comuni.js --scrivi`.\n\n";
  md += `Comuni con scheda: ${righe.length} · completi: ${completi.length} · incompleti: ${righe.length - completi.length}\n\n`;
  md += "Cosa manca (n. Comuni): " + Object.entries(per).map(([k, v]) => `${k} ${v}`).join(" · ") + "\n\n## Completi\n\n" + righe.filter((r) => r.completa).map((r) => `- ${r.nome} (${r.provincia})`).join("\n") + "\n\n## Incompleti (cosa manca)\n\n| Comune | Prov. | Regione | Manca |\n|---|---|---|---|\n";
  md += righe.filter((r) => !r.completa).sort((a, b) => a.regione.localeCompare(b.regione) || a.nome.localeCompare(b.nome)).map((r) => `| ${r.nome} | ${r.provincia} | ${r.regione} | ${r.mancano.join(", ")} |`).join("\n") + "\n";
  fs.writeFileSync(path.join(repo, "docs/completezza-comuni.md"), md);
}
if (process.argv.includes("--json")) console.log(JSON.stringify(righe, null, 1));
else {
  const c = righe.filter((r) => r.completa);
  console.log(`Comuni con scheda: ${righe.length} · completi: ${c.length} · incompleti: ${righe.length - c.length}`);
  const per = {}; for (const r of righe) for (const m of r.mancano) per[m] = (per[m] || 0) + 1;
  console.log("Cosa manca (n. Comuni):", per);
  console.log("Completi:", c.map((r) => r.slug).join(", "));
}
