// Blocco a fisarmonica della Home: un titolo, si apre e mostra le voci.
// Le voci arrivano dagli elenchi di app/index.tsx (stessi testID di prima).

import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import type { IoniconsIconName } from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, fonts, radius, spacing } from "@/src/theme";

export type VoceBlocco = {
  id: string;
  icon: IoniconsIconName;
  title: string;
  sub: string;
  href: string;
  color: { main: string; soft: string };
  testID: string;
};

export function BloccoHome({
  titolo,
  icon,
  voci,
  aperto = false,
  testID,
}: {
  titolo: string;
  icon: IoniconsIconName;
  voci: VoceBlocco[];
  aperto?: boolean;
  testID: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(aperto);
  return (
    <View style={s.box} testID={testID}>
      <Pressable
        onPress={() => setOpen((o) => !o)}
        style={({ pressed }) => [s.testa, pressed && { opacity: 0.85 }]}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityLabel={`${titolo}, ${voci.length} voci`}
        testID={`${testID}-titolo`}
      >
        <Ionicons name={icon} size={20} color={colors.brandPrimaryDark} />
        <Text style={s.titolo}>{titolo}</Text>
        <Ionicons name={open ? "chevron-up" : "chevron-down"} size={18} color={colors.onSurfaceTertiary} />
      </Pressable>
      {open && (
        <View style={s.voci}>
          {voci.map((l) => (
            <Pressable
              key={l.id}
              onPress={() => router.push(l.href as any)}
              style={({ pressed }) => [s.voce, pressed && { opacity: 0.85 }]}
              accessibilityRole="button"
              accessibilityLabel={l.title}
              testID={l.testID}
            >
              <View style={[s.vocIcon, { backgroundColor: l.color.soft }]}>
                <Ionicons name={l.icon} size={20} color={l.color.main} />
              </View>
              <View style={s.flex}>
                <Text style={s.vocTitolo}>{l.title}</Text>
                <Text style={s.vocSub}>{l.sub}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={colors.onSurfaceTertiary} />
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  box: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
    overflow: "hidden",
  },
  flex: { flex: 1 },
  testa: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md,
    minHeight: 56,
  },
  titolo: { flex: 1, fontFamily: fonts.serif, fontSize: 17, fontWeight: "700", color: colors.onSurface },
  voci: { gap: spacing.sm, paddingHorizontal: spacing.md, paddingBottom: spacing.md },
  voce: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    padding: spacing.md,
    minHeight: 60,
  },
  vocIcon: { width: 40, height: 40, borderRadius: radius.md, alignItems: "center", justifyContent: "center" },
  vocTitolo: { fontFamily: fonts.serif, fontSize: 15, fontWeight: "700", color: colors.onSurface },
  vocSub: { fontSize: 12, lineHeight: 17, color: colors.onSurfaceTertiary, marginTop: 1 },
});
