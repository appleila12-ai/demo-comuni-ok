// Barra delle 4 sezioni principali — raggiungibili da ogni pagina.
import { Pressable, StyleSheet, Text, View } from "react-native";
import { usePathname, useRouter } from "expo-router";
import Ionicons, { type IoniconsIconName } from "@react-native-vector-icons/ionicons";

import { colors, radius, spacing } from "@/src/theme";

const SEZIONI: { icon: IoniconsIconName; label: string; route: "/hub" | "/progetto" | "/tracker" | "/territorio" }[] = [
  { icon: "compass-outline", label: "Orientarsi insieme", route: "/hub" },
  { icon: "sparkles-outline", label: "Progetto di Vita", route: "/progetto" },
  { icon: "footsteps-outline", label: "La mia pratica", route: "/tracker" },
  { icon: "people-outline", label: "Contatti", route: "/territorio" },
];

export function SezioniBar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <View style={styles.bar} testID="sezioni-bar">
      {SEZIONI.map((s) => {
        const on = pathname === s.route;
        return (
          <Pressable
            key={s.route}
            onPress={() => router.push(s.route)}
            style={({ pressed }) => [styles.item, on && styles.itemOn, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            accessibilityLabel={s.label}
            testID={`sezioni-bar-${s.route.slice(1)}`}
          >
            <Ionicons name={s.icon} size={26} color={on ? colors.brandPrimary : colors.onSurface} />
            <Text style={styles.label}>{s.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  // Due colonne: le etichette restano grandi e leggibili
  bar: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  item: {
    flexGrow: 1,
    flexBasis: "46%",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 56,
  },
  itemOn: { backgroundColor: colors.brandSecondary, borderColor: colors.brandPrimaryDark },
  label: { flex: 1, fontSize: 16, lineHeight: 21, fontWeight: "700", color: colors.onSurface },
});
