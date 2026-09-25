// Il percorso per il riconoscimento — per chi non ha ancora un verbale.
// Step numerati dalla diagnosi al Progetto di Vita e avvio del
// percorso guidato.

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
import { QuestionarioValutazione } from "@/src/components/QuestionarioValutazione";
import { SezioniBar } from "@/src/components/SezioniBar";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { HeaderComune } from "@/src/components/HeaderComune";

export default function PercorsoScreen() {
  useSezione("percorso");
  const router = useRouter();
  const insets = useSafeAreaInsets();
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
            Prima serve il riconoscimento: il Progetto di Vita diventa
            disponibile solo dopo aver ricevuto il verbale. Ecco il percorso
            per ottenerlo, dal certificato medico introduttivo in avanti.
          </Text>
        </View>

        <Text style={styles.regioneNota} testID="percorso-regione">
          Regole per {comune.nome} · Regione {comune.regione}
        </Text>

        {/* Step numerati dalla diagnosi al Progetto di Vita */}
        <GuideStepsCard />

        {/* Tutte le domande su una sola schermata */}
        <View style={styles.questionario}>
          <QuestionarioValutazione />
        </View>

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
