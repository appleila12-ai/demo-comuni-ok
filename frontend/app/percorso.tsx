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

// Per ogni passo di NEXT_STEPS (stesso ordine): dove andare per farlo davvero.
const AZIONI: { label: string; route: string; icon: any }[] = [
  { label: "Segna i passi nella mia pratica", route: "/tracker", icon: "footsteps-outline" },
  { label: "Cosa cambia con la riforma", route: "/riforma", icon: "document-text-outline" },
  { label: "Ho il verbale: cosa mi spetta", route: "/verbale", icon: "shield-checkmark-outline" },
  { label: "Prepara la lettera per i Servizi Sociali", route: "/lettere?id=progetto-vita", icon: "create-outline" },
  { label: "Prepara il mio Progetto di Vita", route: "/progetto", icon: "sparkles-outline" },
];

export default function PercorsoScreen() {
  useSezione("percorso");
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [tutto, setTutto] = useState(false);
  const [passo, setPasso] = useState(0);
  const totale = NEXT_STEPS.length;
  const ultimo = passo === totale - 1;
  const step = NEXT_STEPS[passo];
  const azione = AZIONI[passo];
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

        {/* Il percorso, un passo alla volta: Avanti / Indietro */}
        <View style={styles.richiesta} testID="percorso-richiesta">
          <Text style={styles.richiestaLabel} accessibilityLiveRegion="polite" testID="percorso-contatore">
            PASSO {passo + 1} DI {totale}
          </Text>
          <View style={styles.barre} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            {NEXT_STEPS.map((s, i) => (
              <View key={s.title} style={[styles.barra, i <= passo && styles.barraOn]} />
            ))}
          </View>
          <Text style={styles.richiestaTitolo} accessibilityRole="header" testID="percorso-passo-titolo">
            {step.title}
          </Text>
          <Text style={styles.richiestaTesto}>{step.body}</Text>

          {/* Come fare questo passo */}
          <Pressable
            onPress={() => router.push(azione.route as any)}
            style={({ pressed }) => [styles.azioneBtn, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            testID="percorso-azione"
          >
            <Ionicons name={azione.icon} size={20} color={colors.brandPrimaryDark} />
            <Text style={styles.azioneText}>{azione.label}</Text>
            <Ionicons name="chevron-forward" size={16} color={colors.brandPrimaryDark} />
          </Pressable>

          <View style={styles.navRiga}>
            {passo > 0 ? (
              <Pressable
                onPress={() => setPasso((p) => Math.max(0, p - 1))}
                style={({ pressed }) => [styles.navIndietro, pressed && { opacity: 0.85 }]}
                accessibilityRole="button"
                accessibilityLabel="Passo precedente"
                testID="percorso-indietro"
              >
                <Ionicons name="arrow-back" size={18} color={colors.brandPrimaryDark} />
                <Text style={styles.navIndietroText}>Indietro</Text>
              </Pressable>
            ) : null}
            <Pressable
              onPress={() => (ultimo ? router.push("/progetto" as any) : setPasso((p) => Math.min(totale - 1, p + 1)))}
              style={({ pressed }) => [styles.navAvanti, pressed && { opacity: 0.85 }]}
              accessibilityRole="button"
              accessibilityLabel={ultimo ? "Vai al Progetto di Vita" : "Passo successivo"}
              testID="percorso-avanti"
            >
              <Text style={styles.navAvantiText}>{ultimo ? "Vai al Progetto di Vita" : "Avanti"}</Text>
              <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>

        {/* Panoramica di tutti i passi e livelli di sostegno, dietro un solo tasto */}
        <Pressable
          onPress={() => setTutto((v) => !v)}
          style={({ pressed }) => [styles.toccaTutto, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityState={{ expanded: tutto }}
          testID="percorso-tutto"
        >
          <Ionicons name="book-outline" size={20} color={colors.brandPrimaryDark} />
          <Text style={styles.toccaTuttoText}>
            {tutto ? "Nascondi i dettagli" : "Vedi tutti i passi e i livelli di sostegno"}
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
  barre: { flexDirection: "row", gap: 6, marginTop: spacing.sm },
  barra: { flex: 1, height: 6, borderRadius: 3, backgroundColor: colors.surfaceTertiary },
  barraOn: { backgroundColor: colors.brandPrimaryDark },
  azioneBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    minHeight: 48,
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: colors.brandPrimaryDark,
  },
  azioneText: { flex: 1, fontSize: 15, fontWeight: "800", color: colors.brandPrimaryDark },
  navRiga: { flexDirection: "row", gap: spacing.sm, marginTop: spacing.md },
  navIndietro: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceSecondary,
  },
  navIndietroText: { fontSize: 15, fontWeight: "800", color: colors.brandPrimaryDark },
  navAvanti: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minHeight: 52,
    borderRadius: radius.lg,
    backgroundColor: colors.brandPrimaryDark,
  },
  navAvantiText: { fontSize: 16, fontWeight: "800", color: "#FFFFFF" },
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
