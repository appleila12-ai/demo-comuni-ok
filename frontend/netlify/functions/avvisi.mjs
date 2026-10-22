// Iscrizione agli avvisi del sito (POST) e cancellazione (DELETE).
// Spento di base: serve AVVISI_WEB=si. Vedi netlify/lib/push.mjs e AVVISI-WEB.md.
import { getStore } from "@netlify/blobs";
import { creaGestoreRichieste } from "../lib/push.mjs";

export default async (req) => {
  const blobs = getStore("avvisi");
  const store = {
    get: (k) => blobs.get(k, { type: "json" }),
    setJSON: (k, v) => blobs.setJSON(k, v),
    delete: (k) => blobs.delete(k),
    list: async () => (await blobs.list()).blobs.map((b) => b.key),
  };
  return creaGestoreRichieste({ store, env: process.env })(req);
};
