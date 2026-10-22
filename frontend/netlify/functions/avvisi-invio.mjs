// Ogni 5 minuti: manda il "tocco" a chi ha un avviso arrivato a scadenza.
// Spento di base: serve AVVISI_WEB=si e le chiavi VAPID. Vedi AVVISI-WEB.md.
import { getStore } from "@netlify/blobs";
import { creaInvio } from "../lib/push.mjs";

export default async () => {
  const blobs = getStore("avvisi");
  const store = {
    get: (k) => blobs.get(k, { type: "json" }),
    setJSON: (k, v) => blobs.setJSON(k, v),
    delete: (k) => blobs.delete(k),
    list: async () => (await blobs.list()).blobs.map((b) => b.key),
  };
  const esito = await creaInvio({ store, env: process.env })();
  return new Response(JSON.stringify(esito), { headers: { "Content-Type": "application/json" } });
};

export const config = { schedule: "*/5 * * * *" };
