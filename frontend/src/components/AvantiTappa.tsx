// "Prossima tappa": un solo pulsante in fondo a ogni pagina del percorso, nell'ordine
// delle sei tappe dell'hub (app/hub.tsx, TAPPE). È sempre facoltativo: non cambia dati,
// non legge nulla dal dispositivo e non deduce niente sulla persona.
//
// Se cambia l'ordine o il nome delle tappe nell'hub, vanno aggiornati anche qui.

import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, radius, spacing } from "@/src/theme";

export type TappaId = "diagnosi" | "riconoscimento" | "pratica" | "diritti" | "progetto" | "territorio";

const ORDINE: { id: TappaId; titolo: string; route: string }[] = [
  { id: "diagnosi", titolo: "Primi passi dopo una diagnosi", route: "/primi-passi" },
  { id: "riconoscimento", titolo: "Il riconoscimento", route: "/percorso" },
  { id: "pratica", titolo: "La mia pratica", route: "/tracker" },
  { id: "diritti", titolo: "Cosa ti spetta", route: "/verbale" },
  { id: "progetto", titolo: "Il Progetto di Vita", route: "/progetto" },
  { id: "territorio", titolo: "Aiuti vicino a te", route: "/territorio" },
];

export function AvantiTappa({ corrente }: { corrente: TappaId }) {
  const router = useRouter();
  const i = ORDINE.findIndex((t) => t.id === corrente);
  if (i < 0) return null;
  const prossima = ORDINE[i + 1];

  return (
    <View style={styles.box} testID="avanti-tappa">
      <Text style={styles.etichetta}>{prossima ? "SE VUOI, LA TAPPA SUCCESSIVA" : "HAI VISTO TUTTE LE TAPPE"}</Text>
      {prossima ? (
        <Pressable
          onPress={() => router.push(prossima.route as any)}
          style={({ pressed }) => [styles.vai, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityLabel={`Vai alla tappa successiva: ${prossima.titolo}`}
          testID="avanti-tappa-vai"
        >
          <Text style={styles.vaiText}>{prossima.titolo}</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.onBrandPrimary} />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => router.push("/hub")}
          style={({ pressed }) => [styles.vai, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityLabel="Torna a Orientarsi insieme"
          testID="avanti-tappa-hub"
        >
          <Text style={styles.vaiText}>Torna a «Orientarsi insieme»</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.onBrandPrimary} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: spacing.xl,
    padding: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 0.5,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  etichetta: { fontSize: 11, fontWeight: "800", letterSpacing: 0.6, color: colors.onSurfaceTertiary },
  vai: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
    minHeight: 48,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.brandPrimary,
  },
  vaiText: { flex: 1, fontSize: 15, fontWeight: "700", color: colors.onBrandPrimary },
});
