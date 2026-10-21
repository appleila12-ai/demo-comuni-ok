// Avvisi sul telefono (solo nell'app installata).
// Sul sito web (tutelapp.it) NON funzionano: lì i promemoria passano dal calendario (.ics).
// Gli avvisi sono programmati sul telefono stesso: nessun server, nessun dato in uscita.

import { Platform } from "react-native";

import type { Promemoria } from "@/src/lib/promemoria";

export type StatoPermesso = "concesso" | "negato" | "da-chiedere" | "non-disponibile";

const CANALE = "promemoria";

export const notificheDisponibili = () => Platform.OS !== "web";

function modulo(): any | null {
  if (Platform.OS === "web") return null;
  try {
    // caricato solo sul telefono: sul web il modulo non viene mai toccato
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require("expo-notifications");
  } catch {
    return null;
  }
}

let pronto = false;
async function prepara(N: any) {
  if (pronto) return;
  pronto = true;
  try {
    // Con l'app aperta l'avviso si vede lo stesso, ma senza suono
    N.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    if (Platform.OS === "android") {
      await N.setNotificationChannelAsync(CANALE, {
        name: "Promemoria gentili",
        importance: N.AndroidImportance?.DEFAULT ?? 3,
        sound: null,
      });
    }
  } catch {
    /* ignora */
  }
}

export async function statoPermesso(): Promise<StatoPermesso> {
  const N = modulo();
  if (!N) return "non-disponibile";
  try {
    const p = await N.getPermissionsAsync();
    if (p.granted) return "concesso";
    return p.canAskAgain === false ? "negato" : "da-chiedere";
  } catch {
    return "non-disponibile";
  }
}

/** Chiede il permesso al telefono (compare la finestra di sistema). */
export async function chiediPermesso(): Promise<boolean> {
  const N = modulo();
  if (!N) return false;
  try {
    await prepara(N);
    const attuale = await N.getPermissionsAsync();
    if (attuale.granted) return true;
    const nuovo = await N.requestPermissionsAsync();
    return !!nuovo.granted;
  } catch {
    return false;
  }
}

/** Sostituisce tutti gli avvisi programmati con questi. Elenco vuoto = nessun avviso. */
export async function riprogramma(lista: Promemoria[]): Promise<number> {
  const N = modulo();
  if (!N) return 0;
  try {
    await prepara(N);
    await N.cancelAllScheduledNotificationsAsync();
    if (lista.length === 0) return 0;
    if ((await statoPermesso()) !== "concesso") return 0;
    let n = 0;
    for (const p of lista) {
      try {
        await N.scheduleNotificationAsync({
          content: { title: p.titolo, body: p.corpo, data: { route: p.route } },
          trigger: {
            type: N.SchedulableTriggerInputTypes?.DATE ?? "date",
            date: p.quando,
            channelId: CANALE,
          },
        });
        n++;
      } catch {
        /* un avviso che non parte non ferma gli altri */
      }
    }
    return n;
  } catch {
    return 0;
  }
}

export async function annullaTutti(): Promise<void> {
  const N = modulo();
  if (!N) return;
  try {
    await N.cancelAllScheduledNotificationsAsync();
  } catch {
    /* ignora */
  }
}

/**
 * Quando la persona tocca un avviso, apre la pagina indicata.
 * Restituisce la funzione per smettere di ascoltare.
 */
export function ascoltaTocchi(vai: (route: string) => void): () => void {
  const N = modulo();
  if (!N) return () => {};
  const apri = (risposta: any) => {
    const route = risposta?.notification?.request?.content?.data?.route;
    // solo pagine interne dell'app, mai indirizzi esterni
    if (typeof route === "string" && route.startsWith("/")) vai(route);
  };
  try {
    // avvio "a freddo" da un avviso: si apre una volta sola, poi si dimentica
    N.getLastNotificationResponseAsync?.()
      .then((r: any) => {
        if (!r) return;
        apri(r);
        N.clearLastNotificationResponse?.();
      })
      .catch(() => {});
    const sub = N.addNotificationResponseReceivedListener(apri);
    return () => sub?.remove?.();
  } catch {
    return () => {};
  }
}
