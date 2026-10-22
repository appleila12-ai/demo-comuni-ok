// Avvisi per chi usa il sito (web push), parte server.
//
// COSA SA IL SERVER, E COSA NO
//  - sa: l'indirizzo tecnico anonimo che il browser dà per ricevere gli avvisi (endpoint) e un elenco di
//    orari (id + quando). Basta questo per mandare un "tocco" al telefono a quell'ora.
//  - NON sa: nome, cognome, testo dell'avviso, Comune, pratica. Il "tocco" è vuoto: è il telefono
//    che, ricevuto il tocco, legge dal proprio archivio cosa mostrare.
//
// Tutto è SPENTO di base: serve AVVISI_WEB=si tra le variabili di Netlify.
// Nessun pacchetto esterno: solo Node (crypto, fetch). Lo "store" (archivio) arriva da fuori,
// così si può provare con un archivio finto (vedi prove/avvisi.prova.mjs).

import { createHash, createPrivateKey, sign } from "node:crypto";

export const MAX_AVVISI = 40;
export const GIORNI_MAX = 70;
export const RITARDO_MAX_MS = 24 * 60 * 60 * 1000; // un avviso non partito entro un giorno si scarta

// Servizi di avviso dei browser: si accettano solo questi (niente indirizzi a caso)
const HOST_PUSH = [
  /^fcm\.googleapis\.com$/,
  /^updates\.push\.services\.mozilla\.com$/,
  /^[a-z0-9-]+\.push\.services\.mozilla\.com$/,
  /^([a-z0-9-]+\.)?push\.apple\.com$/,
  /^[a-z0-9.-]+\.notify\.windows\.com$/,
];

export function endpointValido(endpoint) {
  try {
    const u = new URL(endpoint);
    if (u.protocol !== "https:" || u.username || u.password || u.port) return false;
    if (endpoint.length > 1000) return false;
    return HOST_PUSH.some((re) => re.test(u.hostname));
  } catch {
    return false;
  }
}

// Si accettano richieste solo dal sito di TutelApp (e dalle sue anteprime)
export function origineValida(origin) {
  try {
    const h = new URL(origin).hostname;
    return (
      h === "tutelapp.it" ||
      h.endsWith(".tutelapp.it") ||
      h === "tutelappcomuni.netlify.app" ||
      h.endsWith("--tutelappcomuni.netlify.app") ||
      h === "tutelappweb.netlify.app"
    );
  } catch {
    return false;
  }
}

/** Tiene solo id e orario, controlla forma e limiti. Restituisce null se qualcosa non va. */
export function puliscAvvisi(lista, adesso = Date.now()) {
  if (!Array.isArray(lista) || lista.length > MAX_AVVISI) return null;
  const limite = adesso + GIORNI_MAX * 86400000;
  const out = [];
  for (const a of lista) {
    if (!a || typeof a.id !== "string" || a.id.length === 0 || a.id.length > 80) return null;
    const t = typeof a.quando === "number" ? a.quando : Date.parse(a.quando);
    if (!Number.isFinite(t) || t > limite) return null;
    out.push({ id: a.id, quando: Math.round(t) });
  }
  return out;
}

export const chiave = (endpoint) => createHash("sha256").update(endpoint).digest("hex");

const b64u = (buf) => Buffer.from(buf).toString("base64url");

/** Intestazione "Authorization" VAPID (firma ES256 con la chiave privata del sito). */
export function intestazioneVapid(endpoint, { pubblica, privata, soggetto }, adesso = Date.now()) {
  const aud = new URL(endpoint).origin;
  const intest = b64u(JSON.stringify({ typ: "JWT", alg: "ES256" }));
  const corpo = b64u(JSON.stringify({ aud, exp: Math.floor(adesso / 1000) + 12 * 3600, sub: soggetto }));
  const pub = Buffer.from(pubblica, "base64url");
  if (pub.length !== 65 || pub[0] !== 4) throw new Error("chiave pubblica non valida");
  const chiavePrivata = createPrivateKey({
    key: { kty: "EC", crv: "P-256", d: privata, x: b64u(pub.subarray(1, 33)), y: b64u(pub.subarray(33, 65)) },
    format: "jwk",
  });
  const firma = sign("sha256", Buffer.from(`${intest}.${corpo}`), { key: chiavePrivata, dsaEncoding: "ieee-p1363" });
  return `vapid t=${intest}.${corpo}.${b64u(firma)}, k=${pubblica}`;
}

/** Manda il "tocco" vuoto. Restituisce "ok", "sparito" (iscrizione non più valida) o "errore". */
export async function mandaTocco(endpoint, vapid, fetchFn = fetch, adesso = Date.now()) {
  try {
    const r = await fetchFn(endpoint, {
      method: "POST",
      headers: {
        Authorization: intestazioneVapid(endpoint, vapid, adesso),
        TTL: "3600",
        Urgency: "normal",
        "Content-Length": "0",
      },
    });
    if (r.status >= 200 && r.status < 300) return "ok";
    if (r.status === 404 || r.status === 410) return "sparito";
    return "errore";
  } catch {
    return "errore";
  }
}

const risposta = (stato, corpo) =>
  new Response(JSON.stringify(corpo), { status: stato, headers: { "Content-Type": "application/json" } });

/**
 * Gestore delle richieste del sito (iscrizione e cancellazione).
 * store: { get(chiave), setJSON(chiave, valore), delete(chiave), list() }
 */
export function creaGestoreRichieste({ store, env, adesso = () => Date.now() }) {
  return async function gestisci(req) {
    if (env.AVVISI_WEB !== "si") return risposta(503, { errore: "spento" });
    if (!origineValida(req.headers.get("origin") || "")) return risposta(403, { errore: "origine" });
    if (req.method !== "POST" && req.method !== "DELETE") return risposta(405, { errore: "metodo" });

    let dati;
    try {
      const testo = await req.text();
      if (testo.length > 20000) return risposta(413, { errore: "troppo grande" });
      dati = JSON.parse(testo);
    } catch {
      return risposta(400, { errore: "formato" });
    }
    const endpoint = dati?.endpoint;
    if (typeof endpoint !== "string" || !endpointValido(endpoint)) return risposta(400, { errore: "endpoint" });
    const k = chiave(endpoint);

    if (req.method === "DELETE") {
      await store.delete(k);
      return risposta(200, { ok: true });
    }

    const avvisi = puliscAvvisi(dati.avvisi, adesso());
    if (!avvisi) return risposta(400, { errore: "avvisi" });
    if (avvisi.length === 0) {
      await store.delete(k);
      return risposta(200, { ok: true, avvisi: 0 });
    }
    await store.setJSON(k, { endpoint, avvisi, aggiornato: adesso() });
    return risposta(200, { ok: true, avvisi: avvisi.length });
  };
}

/** Lavoro programmato (ogni 5 minuti): manda il tocco a chi ha un avviso arrivato a scadenza. */
export function creaInvio({ store, env, fetchFn = fetch, adesso = () => Date.now() }) {
  return async function invia() {
    if (env.AVVISI_WEB !== "si") return { spento: true };
    if (!env.VAPID_PUBLIC_KEY || !env.VAPID_PRIVATE_KEY) return { errore: "chiavi mancanti" };
    const vapid = {
      pubblica: env.VAPID_PUBLIC_KEY,
      privata: env.VAPID_PRIVATE_KEY,
      soggetto: env.VAPID_SUBJECT || "mailto:info@tutelapp.it",
    };
    const ora = adesso();
    const esito = { toccati: 0, tolti: 0, scartati: 0 };
    for (const k of await store.list()) {
      const rec = await store.get(k);
      if (!rec || !Array.isArray(rec.avvisi) || !endpointValido(rec.endpoint)) {
        await store.delete(k);
        continue;
      }
      const scaduti = rec.avvisi.filter((a) => a.quando <= ora);
      if (scaduti.length === 0) continue;
      const restano = rec.avvisi.filter((a) => a.quando > ora);
      const daMandare = scaduti.some((a) => ora - a.quando <= RITARDO_MAX_MS);
      esito.scartati += scaduti.filter((a) => ora - a.quando > RITARDO_MAX_MS).length;
      if (daMandare) {
        const r = await mandaTocco(rec.endpoint, vapid, fetchFn, ora);
        if (r === "sparito") {
          await store.delete(k);
          esito.tolti += 1;
          continue;
        }
        if (r === "errore") continue; // si riprova al prossimo giro (entro il limite di un giorno)
        esito.toccati += 1;
      }
      if (restano.length === 0) await store.delete(k);
      else await store.setJSON(k, { ...rec, avvisi: restano });
    }
    return esito;
  };
}
