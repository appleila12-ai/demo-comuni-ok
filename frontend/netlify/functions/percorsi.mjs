// TutelApp – Percorsi Territoriali: accesso riservato e salvataggio dei moduli dei Comuni.
//
// Cosa fa: controlla la password di un Comune (o quella di TutelApp) sul server, rilascia un
// gettone firmato a scadenza e salva/legge il modulo del Comune nell'archivio Netlify Blobs.
// Cosa NON fa: non scrive mai nell'app pubblica e non raccoglie dati di cittadini.
//
// Impostazioni segrete (Netlify > Site configuration > Environment variables, mai nel repository):
//   PERCORSI_SECRET              stringa casuale di almeno 32 caratteri (firma dei gettoni)
//   PERCORSI_PASSWORD_ADMIN      password di TutelApp (apre tutti i moduli), almeno 12 caratteri
//   PERCORSI_PASSWORD_MEDIGLIA   password del Comune di Mediglia, almeno 12 caratteri
//   PERCORSI_PASSWORD_SARZANA    password del Comune di Sarzana, almeno 12 caratteri
//   PERCORSI_PASSWORD_GENOVA     password del Comune di Genova, almeno 12 caratteri
// Per aggiungere un Comune: aggiungerlo a COMUNI qui sotto e in src/percorsi/comuni.ts.

import { getStore } from "@netlify/blobs";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const COMUNI = ["mediglia", "sarzana", "genova"];
const DURATA_SESSIONE_MS = 12 * 60 * 60 * 1000;
const MAX_CARATTERI_RICHIESTA = 400_000;
const MAX_CAMPI = 1000;
const MAX_TENTATIVI = 5;
const FINESTRA_TENTATIVI_MS = 15 * 60 * 1000;
const STATI_COMUNE = ["bozza", "compilato", "da-verificare"];
const STATI_TUTTI = ["bozza", "compilato", "da-verificare", "validato", "pubblicato"];
const STATI_BLOCCATI = ["validato", "pubblicato"];
const ID_CAMPO = /^[a-z0-9][a-z0-9.-]{0,119}$/;

const risposta = (corpo, stato = 200) =>
  new Response(JSON.stringify(corpo), {
    status: stato,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow",
    },
  });

const impronta = (testo) => createHash("sha256").update(String(testo)).digest();
const uguali = (a, b) => timingSafeEqual(impronta(a), impronta(b));
const base64url = (testo) => Buffer.from(testo, "utf8").toString("base64url");

function segreto() {
  const s = process.env.PERCORSI_SECRET;
  return s && s.length >= 32 ? s : null;
}

function passwordConfigurata(nome) {
  const p = process.env[nome];
  return p && p.length >= 12 ? p : null;
}

function firma(parteBase64) {
  return createHmac("sha256", segreto()).update(parteBase64).digest("base64url");
}

function creaGettone(dati) {
  const corpo = base64url(JSON.stringify(dati));
  return `${corpo}.${firma(corpo)}`;
}

function leggiGettone(intestazione) {
  if (!segreto()) return null;
  const m = /^Bearer\s+([\w-]+)\.([\w-]+)$/.exec(intestazione || "");
  if (!m) return null;
  const attesa = firma(m[1]);
  if (m[2].length !== attesa.length || !timingSafeEqual(Buffer.from(m[2]), Buffer.from(attesa))) return null;
  try {
    const dati = JSON.parse(Buffer.from(m[1], "base64url").toString("utf8"));
    if (!dati || typeof dati.exp !== "number" || dati.exp < Date.now()) return null;
    return dati;
  } catch {
    return null;
  }
}

function indirizzoIp(req) {
  return (
    req.headers.get("x-nf-client-connection-ip") ||
    (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "sconosciuto"
  );
}

const archivio = () => getStore({ name: "percorsi-moduli", consistency: "strong" });
const archivioTentativi = () => getStore({ name: "percorsi-tentativi", consistency: "strong" });

async function tentativiRecenti(chiave) {
  const s = archivioTentativi();
  const v = await s.get(chiave, { type: "json" });
  if (!v || typeof v.da !== "number" || Date.now() - v.da > FINESTRA_TENTATIVI_MS) return { n: 0, da: Date.now() };
  return v;
}

async function login(corpo, req) {
  if (!segreto()) return risposta({ errore: "L'accesso non è ancora attivo: manca la configurazione sul server." }, 503);
  const comune = String(corpo.comune || "");
  if (!COMUNI.includes(comune)) return risposta({ errore: "Comune non valido." }, 400);
  const chiave = `${comune}-${impronta(indirizzoIp(req)).toString("hex").slice(0, 24)}`;
  const t = await tentativiRecenti(chiave);
  if (t.n >= MAX_TENTATIVI) {
    return risposta({ errore: "Troppi tentativi. Riprova tra circa 15 minuti." }, 429);
  }
  const password = String(corpo.password || "");
  const pwAdmin = passwordConfigurata("PERCORSI_PASSWORD_ADMIN");
  const pwComune = passwordConfigurata(`PERCORSI_PASSWORD_${comune.toUpperCase().replace(/-/g, "_")}`);
  let ruolo = null;
  if (pwAdmin && uguali(password, pwAdmin)) ruolo = "admin";
  else if (pwComune && uguali(password, pwComune)) ruolo = "comune";
  if (!ruolo) {
    await archivioTentativi().setJSON(chiave, { n: t.n + 1, da: t.da });
    return risposta({ errore: "Password non corretta." }, 401);
  }
  await archivioTentativi().delete(chiave);
  const exp = Date.now() + DURATA_SESSIONE_MS;
  return risposta({ gettone: creaGettone({ c: comune, r: ruolo, exp }), ruolo, scade: exp });
}

const chiaveCorrente = (comune) => `${comune}/corrente`;
const chiaveStorico = (comune, versione) => `${comune}/storico/${String(versione).padStart(6, "0")}`;

function gruppoDi(idCampo) {
  const i = idCampo.lastIndexOf(".");
  return i > 0 ? idCampo.slice(0, i) : idCampo;
}

function pulisci(testo, max) {
  return typeof testo === "string" ? testo.slice(0, max) : "";
}

async function carica(comune) {
  const corrente = await archivio().get(chiaveCorrente(comune), { type: "json" });
  const elenco = await archivio().list({ prefix: `${comune}/storico/` });
  const versioni = (elenco.blobs || []).map((b) => b.key.split("/").pop()).sort().reverse().slice(0, 30);
  return { corrente: corrente || null, versioni };
}

async function versione(comune, numero) {
  const n = Number(numero);
  if (!Number.isInteger(n) || n < 1) return risposta({ errore: "Versione non valida." }, 400);
  const dati = await archivio().get(chiaveStorico(comune, n), { type: "json" });
  return risposta({ versione: dati || null });
}

async function salva(corpo, sessione) {
  const comune = sessione.c;
  const attuale = (await archivio().get(chiaveCorrente(comune), { type: "json" })) || {
    versione: 0,
    campi: {},
    gruppi: {},
  };
  if (Number(corpo.versioneBase) !== attuale.versione) {
    return risposta(
      { errore: "Qualcuno ha salvato nel frattempo. Ricarica il modulo per vedere l'ultima versione.", corrente: attuale },
      409,
    );
  }
  const campiIn = corpo.campi && typeof corpo.campi === "object" && !Array.isArray(corpo.campi) ? corpo.campi : null;
  const gruppiIn = corpo.gruppi && typeof corpo.gruppi === "object" && !Array.isArray(corpo.gruppi) ? corpo.gruppi : null;
  if (!campiIn || !gruppiIn) return risposta({ errore: "Dati non validi." }, 400);
  if (Object.keys(campiIn).length > MAX_CAMPI || Object.keys(gruppiIn).length > MAX_CAMPI) {
    return risposta({ errore: "Troppi campi." }, 413);
  }
  const campi = {};
  for (const [id, v] of Object.entries(campiIn)) {
    if (!ID_CAMPO.test(id)) return risposta({ errore: "Campo non valido." }, 400);
    const testo = pulisci(v, 5000);
    if (testo.trim()) campi[id] = testo;
  }
  const gruppi = {};
  for (const [id, g] of Object.entries(gruppiIn)) {
    if (!ID_CAMPO.test(id) || !g || typeof g !== "object") return risposta({ errore: "Gruppo non valido." }, 400);
    const richiesto = STATI_TUTTI.includes(g.stato) ? g.stato : "bozza";
    const vecchio = attuale.gruppi[id]?.stato;
    let stato = richiesto;
    if (sessione.r !== "admin") {
      // Il Comune può solo bozza / compilato / da verificare e non può togliere un "validato" o "pubblicato".
      if (!STATI_COMUNE.includes(richiesto)) stato = STATI_BLOCCATI.includes(vecchio) ? vecchio : "bozza";
      if (STATI_BLOCCATI.includes(vecchio)) {
        const cambiato = Object.keys({ ...campi, ...attuale.campi }).some(
          (c) => gruppoDi(c) === id && (campi[c] || "") !== (attuale.campi[c] || ""),
        );
        stato = cambiato ? "da-verificare" : vecchio;
      }
    }
    gruppi[id] = {
      stato,
      fonte: pulisci(g.fonte, 500),
      data: pulisci(g.data, 40),
      nota: pulisci(g.nota, 1500),
    };
  }
  const nuova = {
    versione: attuale.versione + 1,
    aggiornatoIl: new Date().toISOString(),
    aggiornatoDa: pulisci(corpo.operatore, 80).trim() || "non indicato",
    ruolo: sessione.r,
    campi,
    gruppi,
  };
  const testo = JSON.stringify(nuova);
  if (testo.length > MAX_CARATTERI_RICHIESTA) return risposta({ errore: "Modulo troppo grande." }, 413);
  await archivio().setJSON(chiaveStorico(comune, nuova.versione), nuova);
  await archivio().setJSON(chiaveCorrente(comune), nuova);
  return risposta({ ok: true, corrente: nuova });
}

export default async (req) => {
  if (req.method !== "POST") return risposta({ errore: "Metodo non consentito." }, 405);
  const testo = await req.text();
  if (testo.length > MAX_CARATTERI_RICHIESTA) return risposta({ errore: "Richiesta troppo grande." }, 413);
  let corpo;
  try {
    corpo = JSON.parse(testo);
  } catch {
    return risposta({ errore: "Richiesta non valida." }, 400);
  }
  try {
    if (corpo.azione === "login") return await login(corpo, req);
    const sessione = leggiGettone(req.headers.get("authorization"));
    if (!sessione || !COMUNI.includes(sessione.c)) {
      return risposta({ errore: "Sessione scaduta. Accedi di nuovo." }, 401);
    }
    // L'amministratore (TutelApp) può aprire qualsiasi Comune; il Comune solo il suo.
    let comune = sessione.c;
    if (sessione.r === "admin" && COMUNI.includes(corpo.comune)) comune = corpo.comune;
    const s = { ...sessione, c: comune };
    if (corpo.azione === "carica") return risposta(await carica(comune));
    if (corpo.azione === "versione") return await versione(comune, corpo.numero);
    if (corpo.azione === "salva") return await salva(corpo, s);
    return risposta({ errore: "Azione non valida." }, 400);
  } catch (e) {
    console.error("percorsi: errore", e && e.message);
    return risposta({ errore: "Errore sul server. Riprova tra poco." }, 500);
  }
};

export const config = { path: "/api/percorsi" };
