// Sul sito web il browser può cancellare i dati dei siti che non si aprono per un po'
// (Safari su iPhone: circa 7 giorni, a meno che il sito sia sulla schermata Home).
// Qui: si chiede al browser di conservarli e si capisce se l'invito alla Home serve.

export type Sistema = "ios" | "android" | "altro";

const RIMANDO_KEY = "tutelapp:invito-home-rimandato";

/** Chiede al browser di non cancellare i dati di questo sito. true = il browser ha accettato. */
export async function chiediPersistenza(): Promise<boolean> {
  try {
    const s = (navigator as any).storage;
    if (!s || typeof s.persist !== "function") return false;
    if (typeof s.persisted === "function" && (await s.persisted())) return true;
    return !!(await s.persist());
  } catch {
    return false;
  }
}

/** true = TutelApp è già aperta dall'icona sulla schermata Home (non nel browser). */
export function staInstallata(): boolean {
  try {
    if ((navigator as any).standalone === true) return true;
    return !!window.matchMedia?.("(display-mode: standalone)").matches;
  } catch {
    return false;
  }
}

export function sistema(): Sistema {
  try {
    const ua = navigator.userAgent || "";
    // iPad recenti si presentano come Mac: si riconoscono dallo schermo tattile
    if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && (navigator as any).maxTouchPoints > 1)) return "ios";
    if (/Android/i.test(ua)) return "android";
  } catch {
    /* ignora */
  }
  return "altro";
}

/** true = la persona ha scelto "Più tardi" da poco: non si ripropone l'invito. */
export function invitoRimandato(adesso = Date.now()): boolean {
  try {
    const fino = Number(window.localStorage.getItem(RIMANDO_KEY));
    return Number.isFinite(fino) && fino > adesso;
  } catch {
    return false;
  }
}

export function rimandaInvito(giorni = 30): void {
  try {
    window.localStorage.setItem(RIMANDO_KEY, String(Date.now() + giorni * 86400000));
  } catch {
    /* ignora */
  }
}
