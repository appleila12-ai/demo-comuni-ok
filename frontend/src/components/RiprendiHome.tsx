// "Riprendi da dove eri rimasto": compare nella Home SOLO se sul telefono ci sono davvero
// dati o attività salvati (pratica, Progetto di Vita, verbale, una data in arrivo).
// Se non c'è nulla, non si vede e la Home resta quella di sempre.

import { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useFocusEffect, useRouter } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useNomeUtente } from "@/src/lib/nomeUtente";
import { storage } from "@/src/utils/storage";
import { prossimoPasso, type Suggerimento } from "@/src/lib/prossimoPasso";
import { PROGETTO_KEY } from "@/src/lib/progetto";
import { SCADENZE_KEY, calcolaEventi, giorniDaOggi, inItaliano, type Scadenza } from "@/src/lib/scadenze";

type Stato = { passo: Suggerimento | null; data: string | null };

const ENTRO_GIORNI = 30;

export function RiprendiHome() {
  const router = useRouter();
  const nome = useNomeUtente();
  const [stato, setStato] = useState<Stato>({ passo: null, data: null });

  useFocusEffect(
    useCallback(() => {
      let attivo = true;
      (async () => {
        const [tracker, verbale, progetto, rawScad] = await Promise.all([
          storage.getItem<string>("tutelapp:tracker", ""),
          storage.getItem<string>("tutelapp:verbale", ""),
          storage.getItem<string>(PROGETTO_KEY, ""),
          storage.getItem<string>(SCADENZE_KEY, ""),
        ]);
        // Solo ciò che la persona ha davvero iniziato (non il suggerimento di base)
        const s = prossimoPasso({ tracker, verbale, progetto });
        const passo = s.tipo === "tracker" || s.tipo === "verbale" || s.tipo === "progetto" ? s : null;

        let data: string | null = null;
        try {
          const lista: Scadenza[] = rawScad ? JSON.parse(rawScad) : [];
          const prossima = (Array.isArray(lista) ? calcolaEventi(lista) : []).find((e) => {
            const g = giorniDaOggi(e.data);
            return g >= 0 && g <= ENTRO_GIORNI;
          });
          if (prossima) {
            const g = giorniDaOggi(prossima.data);
            const quando = g === 0 ? "oggi" : g === 1 ? "domani" : inItaliano(prossima.data);
            data = `${prossima.titolo}${prossima.ora ? `, ore ${prossima.ora}` : ""} · ${quando}`;
          }
        } catch {
          /* dati illeggibili: nessuna riga */
        }
        if (attivo) setStato({ passo, data });
      })();
      return () => {
        attivo = false;
      };
    }, []),
  );

  if (!stato.passo && !stato.data) return null;
  const t = comune.theme;

  return (
    <View style={[styles.box, { backgroundColor: t.warmSoft, borderColor: t.warm }]} testID="home-riprendi">
      <Text style={styles.titolo}>
        {nome ? `${nome}, riprendiamo` : "Riprendiamo"} da dove ci eravamo fermati
      </Text>
      {stato.passo ? (
        <Pressable
          onPress={() => router.push(stato.passo!.route as any)}
          style={({ pressed }) => [styles.riga, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityLabel={stato.passo.titolo}
          testID="home-riprendi-passo"
        >
          <Text style={styles.testo}>{stato.passo.titolo}</Text>
          <Ionicons name="arrow-forward" size={18} color={colors.brandPrimaryDark} />
        </Pressable>
      ) : null}
      {stato.data ? (
        <Pressable
          onPress={() => router.push("/scadenze" as any)}
          style={({ pressed }) => [styles.riga, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityLabel={`Prossima data: ${stato.data}`}
          testID="home-riprendi-data"
        >
          <Ionicons name="calendar-outline" size={16} color={colors.brandPrimaryDark} />
          <Text style={[styles.testo, { flex: 1 }]}>Prossima data: {stato.data}</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.brandPrimaryDark} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { borderWidth: 1, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md, gap: 6 },
  titolo: { fontSize: 12, fontWeight: "800", letterSpacing: 0.4, color: colors.onSurfaceSecondary, textTransform: "uppercase" },
  riga: { flexDirection: "row", alignItems: "center", gap: 8, minHeight: 40 },
  testo: { flex: 1, fontSize: 15, fontWeight: "700", color: colors.onSurface, lineHeight: 21 },
});
