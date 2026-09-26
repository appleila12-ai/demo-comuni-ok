// Stemma del Comune nell'angolo in alto a destra delle pagine interne.
// Ricorda sempre "di chi è" l'app; toccandolo si torna alla pagina del Comune.

import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { comune } from "@/src/config/comune";
import { ComuneLogo } from "@/src/components/ComuneLogo";
import { colors, radius, spacing } from "@/src/theme";

/** Da mettere al posto dello spazio vuoto a destra nell'intestazione (40×40). */
export function HeaderComune() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push("/")}
      hitSlop={8}
      style={({ pressed }) => [styles.btn, pressed && { opacity: 0.7 }]}
      accessibilityRole="button"
      accessibilityLabel={`Torna alla pagina ${comune.delEnte}`}
      testID="header-comune"
    >
      <ComuneLogo size={34} />
    </Pressable>
  );
}

/** Etichetta "Comune di …" (per le pagine principali). Il Comune non si cambia dall'interno dell'app: arriva dal link del Comune. */
export function EtichettaComune({ testID = "etichetta-comune" }: { testID?: string }) {
  const router = useRouter();
  const t = comune.theme;
  return (
    <View style={styles.row} testID={testID}>
      <Pressable
        onPress={() => router.push("/")}
        style={({ pressed }) => [
          styles.chip,
          { backgroundColor: t.warmSoft, borderColor: t.warm },
          pressed && { opacity: 0.8 },
        ]}
        accessibilityRole="button"
        accessibilityLabel={`Pagina ${comune.delEnte}`}
      >
        <ComuneLogo size={22} />
        <Text style={[styles.chipText, { color: t.warmDark }]} numberOfLines={1}>
          {comune.nome}
          {comune.dimostrativo ? " · demo" : ""}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    flexWrap: "wrap",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 10,
    borderRadius: radius.pill,
    borderWidth: 1,
    maxWidth: "100%",
  },
  chipText: { fontSize: 13, fontWeight: "700", flexShrink: 1 },
  cambia: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.onSurfaceTertiary,
    textDecorationLine: "underline",
  },
});
