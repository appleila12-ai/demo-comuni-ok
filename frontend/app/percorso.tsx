// Il percorso per il riconoscimento — per chi non ha ancora un verbale.
// Step numerati dalla diagnosi al Progetto di Vita e avvio del
// percorso guidato.

import { useState } from "react";
import {
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
import { GuideStepsCard } from "@/src/components/NextStepsSection";
import { LivelliSection } from "@/src/components/LivelliSection";
import { NEXT_STEPS } from "@/src/lib/content";
import { SezioniBar } from "@/src/components/SezioniBar";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { HeaderComune } from "@/src/components/HeaderComune";

export default function PercorsoScreen() {
  useSezione("percorso");
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [tutto, setTutto] = useState(false);
  return (
    <SafeAreaView style={styles.safe} edges={["top"]} testID="percorso-screen">
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.iconBtn}
          hitSlop={12}
          accessibilityLabel="Indietro"
          testID="percorso-back-btn"
        >
          <Ionicons name="chevron-back" size={22} color={colors.onSurface} />
        </Pressable>
        <Text style={styles.headerTitle}>Il percorso per il riconoscimento</Text>
        <HeaderComune />
      </View>

      <ScrollView
        style={styles.flex}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + spacing.xxl }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Ionicons name="information-circle-outline" size={22} color={colors.brandPrimary} />
          </View>
          <Text style={styles.infoText}>
            Non hai ancora il verbale? Il primo passo è la richiesta di riconoscimento: ecco cosa fare per
            avviarla.
          </Text>
        </View>

        <Text style={styles.regioneNota} testID="percorso-regione">
          Regole per {comune.nome} · Regione {comune.regione}
        </Text>

        {/* Subito la richiesta di riconoscimento */}
        <View style={styles.richiesta} testID="percorso-richiesta">
          <Text style={styles.richiestaLabel}>PRIMO PASSO</Text>
          <Text style={styles.richiestaTitolo}>{NEXT_STEPS[0].title}</Text>
          <Text style={styles.richiestaTesto}>{NEXT_STEPS[0].body}</Text>
          <Pressable
            onPress={() => router.push("/tracker" as any)}
            style={({ pressed }) => [styles.dirittiBtn, { marginTop: spacing.md }, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            testID="percorso-pratica"
          >
            <Ionicons name="footsteps-outline" size={22} color="#FFFFFF" />
            <View style={styles.flex}>
              <Text style={styles.dirittiTitolo}>Segui la mia pratica</Text>
              <Text style={styles.dirittiSub}>Segna le tappe e le scadenze</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Tutta la parte informativa, fino ai livelli di sostegno, dietro un solo tasto */}
        <Pressable
          onPress={() => setTutto((v) => !v)}
          style={({ pressed }) => [styles.toccaTutto, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityState={{ expanded: tutto }}
          testID="percorso-tutto"
        >
          <Ionicons name="book-outline" size={20} color={colors.brandPrimaryDark} />
          <Text style={styles.toccaTuttoText}>
            {tutto ? "Nascondi le informazioni" : "Voglio saperne di più, fino ai livelli di sostegno"}
          </Text>
          <Ionicons name={tutto ? "chevron-up" : "chevron-down"} size={18} color={colors.brandPrimaryDark} />
        </Pressable>
        {tutto ? (
          <View testID="percorso-informazioni">
            <GuideStepsCard />
            <LivelliSection />
          </View>
        ) : null}

        {/* Chi ha già il verbale */}
        <Pressable
          onPress={() => router.push("/verbale" as any)}
          style={({ pressed }) => [styles.dirittiBtn, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          testID="percorso-diritti"
        >
          <Ionicons name="shield-checkmark-outline" size={22} color="#FFFFFF" />
          <View style={styles.flex}>
            <Text style={styles.dirittiTitolo}>Hai già il verbale?</Text>
            <Text style={styles.dirittiSub}>Copia i dati e scopri cosa ti spetta e il prossimo passo</Text>
          </View>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </Pressable>

        <SezioniBar />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  flex: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: fonts.serif,
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: colors.onSurface,
  },
  scroll: { paddingHorizontal: spacing.lg, paddingTop: spacing.sm },

  infoCard: {
    flexDirection: "row",
    gap: spacing.md,
    alignItems: "flex-start",
    backgroundColor: colors.brandSecondary,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: colors.onSurface,
    fontWeight: "600",
  },
  regionCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.brandSecondary,
    borderWidth: 1.5,
    borderColor: colors.brandTertiary,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  regionCardIcon: {
    width: 42,
    height: 42,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  regionCardLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: colors.onSurface,
    letterSpacing: 1.1,
  },
  regionCardValue: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.onBrandSecondary,
    marginTop: 1,
    letterSpacing: -0.3,
  },
  regionCardCta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: 7,
    borderRadius: radius.pill,
  },
  regionCardCtaText: { fontSize: 12, fontWeight: "800", color: colors.onSurface },
  questionario: { marginTop: spacing.xl },
  dirittiBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.brandPrimaryDark,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginTop: spacing.lg,
  },
  dirittiTitolo: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
  dirittiSub: { color: "#FFFFFF", fontSize: 12.5, lineHeight: 17, marginTop: 2 },
  richiesta: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  richiestaLabel: { fontSize: 12, fontWeight: "800", color: colors.brandPrimaryDark, letterSpacing: 1 },
  richiestaTitolo: { fontFamily: fonts.serif, fontSize: 18, lineHeight: 24, fontWeight: "700", color: colors.onSurface, marginTop: 4 },
  richiestaTesto: { fontSize: 15, lineHeight: 22, color: colors.onSurface, marginTop: spacing.sm },
  toccaTutto: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    minHeight: 48,
    paddingHorizontal: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: colors.brandPrimaryDark,
    marginBottom: spacing.md,
  },
  toccaTuttoText: { flex: 1, fontSize: 15, fontWeight: "800", color: colors.brandPrimaryDark },
  regioneNota: { fontSize: 12.5, color: colors.onSurfaceSecondary, marginBottom: spacing.md, fontWeight: "600" },

  // Modal regione
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(51,47,38,0.42)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceTertiary,
    alignSelf: "center",
    marginBottom: spacing.md,
  },
  sheetTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },
  sheetScroll: { maxHeight: 420 },
  sheetItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  sheetItemText: { fontSize: 15, color: colors.onSurfaceSecondary, fontWeight: "600" },
  sheetItemTextSelected: { color: colors.onSurface, fontWeight: "800" },
});
