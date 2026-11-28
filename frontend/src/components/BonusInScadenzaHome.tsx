// Riquadro in Home: compare solo quando un bonus del Comune sta per scadere
// (stesso criterio dell'elenco bonus: 7 giorni prima, vedi GIORNI_IN_SCADENZA).
// Usa solo i dati già verificati in src/lib/bonus.ts: se non c'è nulla in scadenza non mostra niente.

import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { bonusDelComune, dataScadenzaLeggibile } from "@/src/lib/bonus";

export function BonusInScadenzaHome({ testID = "home-bonus-in-scadenza" }: { testID?: string }) {
  const router = useRouter();
  const inScadenza = bonusDelComune().locali.filter((b) => b.stato === "in-scadenza" && !!b.scade);
  if (inScadenza.length === 0) return null;

  return (
    <View style={s.box} testID={testID}>
      <View style={s.testa}>
        <Ionicons name="alarm-outline" size={18} color="#8A4B08" />
        <Text style={s.eyebrow} accessibilityRole="header">
          {inScadenza.length === 1 ? "UN BONUS STA PER SCADERE" : "ALCUNI BONUS STANNO PER SCADERE"}
        </Text>
      </View>
      {inScadenza.map((b) => (
        <View key={b.id} style={s.voce}>
          <Text style={s.titolo}>{b.titolo}</Text>
          <Text style={s.testo}>Domande entro {dataScadenzaLeggibile(b.scade!)}.</Text>
          <Text style={s.fonte}>
            Fonte: {b.fonte.label} · controllato il {b.verificatoIl}
          </Text>
        </View>
      ))}
      <Pressable
        onPress={() => router.push("/bonus" as any)}
        style={({ pressed }) => [s.bottone, pressed && { opacity: 0.85 }]}
        accessibilityRole="button"
        accessibilityLabel="Vedi i bonus del tuo Comune"
        testID={`${testID}-vai`}
      >
        <Text style={s.bottoneTesto}>Vedi i bonus</Text>
        <Ionicons name="chevron-forward" size={16} color={colors.onSurface} />
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  box: {
    backgroundColor: "#FFF4E0",
    borderWidth: 1.5,
    borderColor: "#E8A33D",
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  testa: { flexDirection: "row", alignItems: "center", gap: 6 },
  eyebrow: { fontSize: 11, fontWeight: "800", letterSpacing: 1, color: "#8A4B08" },
  voce: { gap: 2 },
  titolo: { fontSize: 15, fontWeight: "700", color: colors.onSurface },
  testo: { fontSize: 14, lineHeight: 20, color: colors.onSurface },
  fonte: { fontSize: 11, lineHeight: 16, color: colors.onSurfaceTertiary },
  bottone: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    backgroundColor: "#F2B85B",
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    minHeight: 44,
  },
  bottoneTesto: { fontSize: 14, fontWeight: "700", color: colors.onSurface },
});
