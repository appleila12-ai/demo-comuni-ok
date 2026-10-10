// Riforma della Disabilità (D.Lgs. 62/2024) — come funziona la nuova
// valutazione unica. I contenuti arrivano dal server (aggiornabili senza update).

import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Linking,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { AppContent, loadAppContent } from "@/src/lib/remoteContent";
import { SezioniBar } from "@/src/components/SezioniBar";
import { useSezione } from "@/src/lib/statistiche";
import { HeaderComune } from "@/src/components/HeaderComune";

const CAMBIO_ICONE = [
  "document-text-outline",
  "business-outline",
  "analytics-outline",
  "sparkles-outline",
] as const;

export default function RiformaScreen() {
  useSezione("riforma");
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [content, setContent] = useState<AppContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setContent(await loadAppContent());
      setLoading(false);
    })();
  }, []);

  const riforma = content?.riforma;

  return (
    <SafeAreaView style={styles.safe} edges={["top"]} testID="riforma-screen">
      <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />
      <View style={styles.header}>
        <Pressable accessibilityRole="button"
          onPress={() => router.back()}
          style={styles.iconBtn}
          hitSlop={12}
          accessibilityLabel="Indietro"
          testID="riforma-back-btn"
        >
          <Ionicons name="chevron-back" size={26} color={colors.onSurface} />
        </Pressable>
        <Text style={styles.headerTitle}>Cosa cambia con la riforma</Text>
        <HeaderComune />
      </View>

      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator color={colors.brandPrimary} />
        </View>
      ) : !riforma ? (
        <View style={styles.centered}>
          <Text style={styles.erroreText}>
            Contenuti non disponibili: controlla la connessione e riprova.
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.flex}
          contentContainerStyle={[
            styles.scroll,
            { paddingBottom: insets.bottom + spacing.xxl },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Intro */}
          <View style={styles.introCard}>
            <View style={styles.introIcon}>
              <Ionicons name="megaphone-outline" size={24} color={colors.brandPrimary} />
            </View>
            <Text style={styles.introText}>{riforma.intro}</Text>
          </View>

          {/* Cosa cambia */}
          <Text style={styles.sezTitle}>Cosa cambia con la riforma</Text>
          {riforma.cosaCambia.map((c, i) => (
            <View key={c.titolo} style={styles.cambioCard}>
              <View style={styles.cambioIcon}>
                <Ionicons
                  name={CAMBIO_ICONE[i % CAMBIO_ICONE.length]}
                  size={20}
                  color={colors.brandPrimary}
                />
              </View>
              <View style={styles.flex}>
                <Text style={styles.cambioTitle}>{c.titolo}</Text>
                <Text style={styles.cambioText}>{c.testo}</Text>
              </View>
            </View>
          ))}

          {/* Salvaguardia */}
          <View style={styles.salvaCard} testID="riforma-salvaguardia">
            <View style={styles.salvaHead}>
              <Ionicons name="shield-checkmark-outline" size={24} color={colors.success} />
              <Text style={styles.salvaTitle}>Hai già un verbale? Sei al sicuro</Text>
            </View>
            <Text style={styles.salvaText}>{riforma.salvaguardia}</Text>
          </View>

          {/* Fonte */}
          <Pressable accessibilityRole="button"
            onPress={() => Linking.openURL(riforma.fonteUrl).catch(() => {})}
            style={styles.fonteRow}
            hitSlop={6}
          >
            <Ionicons name="open-outline" size={20} color={colors.brandPrimary} />
            <Text style={styles.fonteText}>
              Fonte ufficiale: INPS — Riforma della disabilità
            </Text>
          </Pressable>

          {/* Il passo dopo: dalla spiegazione ai passi concreti */}
          <Pressable
            onPress={() => router.push("/percorso" as any)}
            style={({ pressed }) => [styles.avantiBtn, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            testID="riforma-avanti"
          >
            <Text style={styles.avantiTesto}>Come ottenere il riconoscimento, passo passo</Text>
            <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
          </Pressable>

          <SezioniBar />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  flex: { flex: 1 },
  avantiBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
    minHeight: 56,
    backgroundColor: colors.brandPrimaryDark,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginTop: spacing.lg,
  },
  avantiTesto: { flex: 1, color: "#FFFFFF", fontSize: 18, fontWeight: "800" },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl,
  },
  erroreText: {
    fontSize: 17,
    color: colors.onSurfaceSecondary,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  iconBtn: {
    width: 48,
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: fonts.serif,
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: colors.onSurface,
  },
  scroll: { paddingHorizontal: spacing.lg, paddingTop: spacing.sm },

  introCard: {
    flexDirection: "row",
    gap: spacing.md,
    alignItems: "flex-start",
    backgroundColor: colors.brandSecondary,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  introIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  introText: {
    flex: 1,
    fontSize: 17,
    lineHeight: 26,
    color: colors.onSurface,
    fontWeight: "600",
  },


  sezTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  cambioCard: {
    flexDirection: "row",
    gap: spacing.md,
    alignItems: "flex-start",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  cambioIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.brandSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  cambioTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: colors.onSurface,
    marginBottom: 2,
  },
  cambioText: {
    fontSize: 16,
    lineHeight: 23,
    color: colors.onSurfaceSecondary,
  },

  salvaCard: {
    backgroundColor: colors.successSoft,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  salvaHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  salvaTitle: { fontSize: 17, fontWeight: "800", color: colors.onSurface },
  salvaText: {
    fontSize: 16,
    lineHeight: 25,
    color: colors.onSurface,
    fontWeight: "500",
  },

  fonteRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: spacing.md,
  },
  fonteText: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.onSurface,
    textDecorationLine: "underline",
  },
});
