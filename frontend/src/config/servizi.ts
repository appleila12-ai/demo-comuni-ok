// Funzioni che richiedono il server (backend).
// Se l'app è pubblicata senza backend (es. demo su Netlify senza la variabile
// EXPO_PUBLIC_BACKEND_URL), queste funzioni vengono nascoste invece di
// mostrare bottoni che non funzionano. Tutto il resto funziona lo stesso:
// contenuti, pratica, Progetto di Vita, PDF, Comuni, cruscotto con dati di esempio.

export const BACKEND_URL = (process.env.EXPO_PUBLIC_BACKEND_URL || "").replace(/\/+$/, "");

/** true se c'è un backend: assistente sulla 104, link di condivisione, statistiche reali, Sentinella. */
export const HA_BACKEND = BACKEND_URL.length > 0;

/**
 * Assistente per le domande dei cittadini.
 * - con il backend completo usa {BACKEND_URL}/api/assistant;
 * - senza backend usa la funzione Netlify inclusa nell'app, se accesa con
 *   EXPO_PUBLIC_ASSISTENTE=si (la chiave AI resta solo sul server Netlify).
 */
export const HA_ASSISTENTE = HA_BACKEND || process.env.EXPO_PUBLIC_ASSISTENTE === "si";
export const ASSISTENTE_URL = HA_BACKEND
  ? `${BACKEND_URL}/api/assistant`
  : "/.netlify/functions/assistente";
