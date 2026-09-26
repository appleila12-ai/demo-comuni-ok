// Casella "Scrivi cosa ti serve": la risposta compare subito, con il bottone
// per la pagina giusta. Quello che si scrive non esce dal telefono.

import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { ESEMPI, cerca } from "@/src/lib/ricerca";

export function CasellaRicerca({ testID = "casella-ricerca" }: { testID?: string }) {
  const router = useRouter();
  const [testo, setTesto] = useState("");
  const risultati = useMemo(() => (testo.trim().length >= 3 ? cerca(testo) : []), [testo]);
  const t = comune.theme;
  const vai = (route: string) => router.push(route as any);

  return (
    <View style={[styles.box, { borderColor: t.warm }]} testID={testID}>
      <Text style={styles.titolo}>Di cosa hai bisogno?</Text>
      <View style={styles.inputRiga}>
        <Ionicons name="search" size={20} color={colors.onSurfaceSecondary} />
        <TextInput
          value={testo}
          onChangeText={setTesto}
          placeholder="Scrivi cosa ti serve…"
          placeholderTextColor="#8C8374"
          style={styles.input}
          returnKeyType="search"
          accessibilityLabel="Scrivi cosa ti serve"
          testID={`${testID}-input`}
        />
        {testo ? (
          <Pressable onPress={() => setTesto("")} hitSlop={10} accessibilityLabel="Cancella">
            <Ionicons name="close-circle" size={20} color={colors.onSurfaceSecondary} />
          </Pressable>
        ) : null}
      </View>

      {/* Esempi da toccare */}
      {testo.trim().length < 3 && (
        <View style={styles.esempi}>
          <Text style={styles.esempiLabel}>Per esempio:</Text>
          <View style={styles.chips}>
            {ESEMPI.map((e) => (
              <Pressable
                key={e}
                onPress={() => setTesto(e)}
                style={({ pressed }) => [styles.chip, pressed && { opacity: 0.8 }]}
                accessibilityRole="button"
              >
                <Text style={styles.chipText}>{e}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      {/* Risposta */}
      {testo.trim().length >= 3 && risultati.length > 0 && (
        <View style={styles.risultati} testID={`${testID}-risultati`}>
          <View style={[styles.risposta, { backgroundColor: t.warmSoft }]}>
            <Text style={styles.rispostaTitolo}>{risultati[0].titolo}</Text>
            <Text style={styles.rispostaTesto}>{risultati[0].testo}</Text>
            <Pressable
              onPress={() => vai(risultati[0].route)}
              style={({ pressed }) => [styles.btn, pressed && { opacity: 0.85 }]}
              accessibilityRole="button"
            >
              <Text style={styles.btnText}>{risultati[0].bottone}</Text>
              <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
            </Pressable>
          </View>
          {risultati.length > 1 && <Text style={styles.anche}>Potrebbe interessarti anche</Text>}
          {risultati.slice(1).map((r) => (
            <Pressable
              key={r.id}
              onPress={() => vai(r.route)}
              style={({ pressed }) => [styles.altra, pressed && { opacity: 0.85 }]}
              accessibilityRole="button"
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.altraTitolo}>{r.titolo}</Text>
                <Text style={styles.altraTesto} numberOfLines={2}>{r.testo}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={colors.onSurfaceTertiary} />
            </Pressable>
          ))}
        </View>
      )}

      {/* Nessuna risposta */}
      {testo.trim().length >= 3 && risultati.length === 0 && (
        <View style={styles.risultati}>
          <Text style={styles.rispostaTesto}>
            Non ho trovato una risposta. Prova con altre parole, oppure chiedi ai{" "}
            {comune.ente} {comune.delEnte}: ti aiutano a capire da dove partire.
          </Text>
          <Pressable
            onPress={() => vai("/territorio")}
            style={({ pressed }) => [styles.btn, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
          >
            <Text style={styles.btnText}>Contatti del Comune</Text>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
          </Pressable>
        </View>
      )}

      <Text style={styles.privacy}>Quello che scrivi resta sul tuo telefono.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  titolo: { fontFamily: fonts.serif, fontSize: 20, fontWeight: "700", color: colors.onSurface, marginBottom: spacing.sm },
  inputRiga: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    minHeight: 50,
  },
  input: { flex: 1, fontSize: 16, color: colors.onSurface, paddingVertical: 10 },
  esempi: { marginTop: spacing.sm },
  esempiLabel: { fontSize: 12, color: colors.onSurfaceSecondary, marginBottom: 6 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  chip: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  chipText: { fontSize: 13, color: colors.onSurface, fontWeight: "600" },
  risultati: { marginTop: spacing.md, gap: spacing.sm },
  risposta: { borderRadius: radius.md, padding: spacing.md },
  rispostaTitolo: { fontSize: 16, fontWeight: "800", color: colors.onSurface, marginBottom: 4 },
  rispostaTesto: { fontSize: 14, lineHeight: 20, color: colors.onSurface },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    backgroundColor: colors.brandPrimaryDark,
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: spacing.sm,
  },
  btnText: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },
  anche: { fontSize: 11, fontWeight: "800", letterSpacing: 0.8, textTransform: "uppercase", color: colors.onSurfaceSecondary, marginTop: 4 },
  altra: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.sm,
    backgroundColor: "#FFFFFF",
  },
  altraTitolo: { fontSize: 14, fontWeight: "800", color: colors.onSurface },
  altraTesto: { fontSize: 12.5, lineHeight: 17, color: colors.onSurfaceSecondary, marginTop: 2 },
  privacy: { fontSize: 11.5, color: colors.onSurfaceSecondary, marginTop: spacing.sm },
});
