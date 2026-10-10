// Segnalibro: tocca per salvare (o togliere) una pagina, un servizio o un contatto
// tra "I miei salvati".

import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, radius } from "@/src/theme";
import { useSalvati, type Salvato } from "@/src/lib/salvati";

export function BottoneSalva({
  elemento,
  conTesto = false,
  testID,
}: {
  elemento: Salvato;
  /** mostra anche la scritta "Salva" / "Salvato" */
  conTesto?: boolean;
  testID?: string;
}) {
  const { eSalvato, alterna } = useSalvati();
  const on = eSalvato(elemento.id);
  return (
    <Pressable
      onPress={() => alterna(elemento)}
      hitSlop={10}
      style={({ pressed }) => [conTesto ? styles.conTesto : styles.icona, on && conTesto && styles.on, pressed && { opacity: 0.7 }]}
      accessibilityRole="button"
      accessibilityState={{ selected: on }}
      accessibilityLabel={on ? `Togli "${elemento.titolo}" dai salvati` : `Salva "${elemento.titolo}" per dopo`}
      testID={testID}
    >
      <Ionicons name={on ? "bookmark" : "bookmark-outline"} size={conTesto ? 16 : 22} color={colors.brandPrimaryDark} />
      {conTesto ? <Text style={styles.testo}>{on ? "Salvato" : "Salva"}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icona: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  conTesto: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
    alignSelf: "flex-start",
  },
  on: { backgroundColor: colors.brandSecondary },
  testo: { fontSize: 16, fontWeight: "700", color: colors.brandPrimaryDark },
});
