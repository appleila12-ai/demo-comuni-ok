import { Stack, usePathname, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";

import { useIconFonts } from "@/src/hooks/use-icon-fonts";
import { caricaNomeSalvato, useNomeUtente } from "@/src/lib/nomeUtente";
import { ascoltaTocchi } from "@/src/lib/notifiche";
import { chiediPersistenza } from "@/src/lib/persistenza";
import { aggiornaPromemoria, segnaAttivita } from "@/src/lib/promemoriaApp";
import {
  caricaComuneSalvato,
  getComuneAttivo,
  onComuneChange,
} from "@/src/config/comune";


LogBox.ignoreAllLogs(true)

// Titoli fissi delle pagine generali (uguali per tutti i Comuni): servono ai motori di ricerca.
// Le pagine di un singolo Comune e le altre schermate continuano a mostrare il Comune attivo.
const TITOLI_PAGINE: Record<string, string> = {
  "/": "TutelApp – L'app gratuita per diritti, Legge 104 e Riforma disabilità",
  "/comuni": "Scegli il tuo Comune | TutelApp",
  "/per-i-comuni": "Per i Comuni: contattaci | TutelApp",
  "/primi-passi": "Primi passi dopo una diagnosi | TutelApp",
  "/riforma": "Riforma della disabilità: cosa cambia | TutelApp",
  "/domande-104": "Domande sulla Legge 104 | TutelApp",
  "/faq": "Domande frequenti | TutelApp",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useIconFonts();
  const [comuneReady, setComuneReady] = useState(false);
  const [nomeReady, setNomeReady] = useState(false);
  const [comuneSlug, setComuneSlug] = useState(getComuneAttivo().slug);
  const router = useRouter();
  const pathname = usePathname();
  const nome = useNomeUtente();

  useEffect(() => {
    caricaComuneSalvato().finally(() => {
      setComuneSlug(getComuneAttivo().slug);
      setComuneReady(true);
    });
    return onComuneChange((c) => setComuneSlug(c.slug));
  }, []);

  useEffect(() => {
    caricaNomeSalvato().finally(() => setNomeReady(true));
  }, []);

  // Sul web il titolo della scheda del browser riporta il Comune attivo
  useEffect(() => {
    if (Platform.OS === "web" && typeof document !== "undefined") {
      const percorso = (pathname || "/").replace(/\/+$/, "") || "/";
      document.title =
        TITOLI_PAGINE[percorso] ?? `TutelApp · ${getComuneAttivo().nome}`;
      document.documentElement.lang = "it";
    }
  }, [comuneSlug, pathname]);

  // Avvisi gentili (solo app installata): a ogni apertura, e a ogni cambio di Comune,
  // si ricorda l'ultima visita e si riallineano gli avvisi ai dati salvati sul telefono
  useEffect(() => {
    if (!comuneReady || Platform.OS === "web") return;
    segnaAttivita().then(() => aggiornaPromemoria());
  }, [comuneReady, comuneSlug]);

  // Quando la persona dice o cambia il nome, gli avvisi già programmati si riscrivono con il nome nuovo
  useEffect(() => {
    if (!comuneReady || Platform.OS === "web") return;
    aggiornaPromemoria();
  }, [nome, comuneReady]);

  // Sul sito: si chiede al browser di conservare i dati (non li cancella dopo giorni di inattività)
  useEffect(() => {
    if (Platform.OS === "web" && comuneReady) chiediPersistenza();
  }, [comuneReady]);

  // Toccando un avviso si apre la pagina giusta
  useEffect(() => {
    if (!comuneReady) return;
    return ascoltaTocchi((route) => {
      // piccola attesa: all'avvio da un avviso la navigazione deve essere pronta
      setTimeout(() => {
        try {
          router.push(route as any);
        } catch {
          /* se non è pronta, l'app resta sulla Home */
        }
      }, 400);
    });
  }, [comuneReady, router]);

  useEffect(() => {
    if ((loaded || error) && comuneReady && nomeReady) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, comuneReady, nomeReady]);

  if ((!loaded && !error) || !comuneReady || !nomeReady) return null;

  return (
    // Nessun account né sincronizzazione: i dati restano sul dispositivo.
    // Cambiando Comune, l'app si ridisegna da capo con i dati del nuovo Comune.
    <Stack key={comuneSlug} screenOptions={{ headerShown: false }} />
  );
}
