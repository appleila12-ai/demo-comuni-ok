// Il percorso per il riconoscimento — per chi non ha ancora un verbale.
// Step numerati dalla diagnosi al Progetto di Vita e avvio del
// percorso guidato.

import { useMemo, useState } from "react";
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
import { LivelliSection } from "@/src/components/LivelliSection";
import { passiRiconoscimento } from "@/src/lib/content";
import { statoRiforma } from "@/src/lib/riformaTerritorio";
import { SezioniBar } from "@/src/components/SezioniBar";
import { useSezione } from "@/src/lib/statistiche";
import { HeaderComune } from "@/src/components/HeaderComune";

export default function PercorsoScreen() {
  useSezione("percorso");
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const stato = statoRiforma();
  const passi = useMemo(() => passiRiconoscimento(stato.attiva), [stato.attiva]);
  const [passoScelto, setPasso] = useState(0);
  const totale = passi.length;
  const passo = Math.min(passoScelto, totale - 1);
  const ultimo = passo === totale - 1;
  const step = passi[passo];
  const azione = step.azione;
  return (
    <SafeAreaView style={styles.safe} edges={["top"]} testID="percorso-screen">
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.header}>
        <Pressable
          onPress={() => (router.canGoBack() ? router.back() : router.replace("/hub" as any))}
          style={styles.iconBtn}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Indietro"
          testID="percorso-back-btn"
        >
          <Ionicons name="chevron-back" size={26} color={colors.onSurface} />
        </Pressable>
        <Text style={styles.headerTitle} accessibilityRole="header">
          Come ottenere il riconoscimento
        </Text>
        <HeaderComune />
      </View>

      <ScrollView
        style={styles.flex}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + spacing.xxl }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoCard} testID="percorso-intro">
          <Text style={styles.infoText}>
            Per avere aiuti e permessi serve prima il riconoscimento, cioè il verbale. Ecco cosa fare, un passo
            alla volta.
          </Text>
          <Text style={styles.infoRiforma} testID="percorso-riforma-stato">
            {stato.frase}
          </Text>
        </View>

        {/* Il percorso, un passo alla volta: Avanti / Indietro */}
        <View style={styles.richiesta} testID="percorso-richiesta">
          <Text style={styles.richiestaLabel} accessibilityLiveRegion="polite" testID="percorso-contatore">
            PASSO {passo + 1} DI {totale}
          </Text>
          <View style={styles.barre} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            {passi.map((s, i) => (
              <View key={s.titolo} style={[styles.barra, i <= passo && styles.barraOn]} />
            ))}
          </View>
          <Text style={styles.richiestaTitolo} accessibilityRole="header" testID="percorso-passo-titolo">
            {step.titolo}
          </Text>
          <Text style={styles.richiestaTesto}>{step.testo}</Text>

          {/* Come fare questo passo */}
          <Pressable
            onPress={() => router.push(azione.route as any)}
            style={({ pressed }) => [styles.azioneBtn, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            testID="percorso-azione"
          >
            <Ionicons name={azione.icon as any} size={24} color={colors.brandPrimaryDark} />
            <Text style={styles.azioneText}>{azione.label}</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.brandPrimaryDark} />
          </Pressable>

          <View style={styles.navRiga}>
            {passo > 0 ? (
              <Pressable
                onPress={() => setPasso(passo - 1)}
                style={({ pressed }) => [styles.navIndietro, pressed && { opacity: 0.85 }]}
                accessibilityRole="button"
                accessibilityLabel="Passo precedente"
                testID="percorso-indietro"
              >
                <Ionicons name="arrow-back" size={24} color={colors.brandPrimaryDark} />
                <Text style={styles.navIndietroText}>Indietro</Text>
              </Pressable>
            ) : null}
            <Pressable
              onPress={() => (ultimo ? router.push("/progetto" as any) : setPasso(passo + 1))}
              style={({ pressed }) => [styles.navAvanti, pressed && { opacity: 0.85 }]}
              accessibilityRole="button"
              accessibilityLabel={ultimo ? "Vai al Progetto di Vita" : "Passo successivo"}
              testID="percorso-avanti"
            >
              <Text style={styles.navAvantiText}>{ultimo ? "Vai al Progetto di Vita" : "Avanti"}</Text>
              <Ionicons name="arrow-forward" size={24} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>

        {/* Chi ha già il verbale salta i passi */}
        <Pressable
          onPress={() => router.push("/verbale" as any)}
          style={({ pressed }) => [styles.dirittiBtn, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          testID="percorso-diritti"
        >
          <Ionicons name="shield-checkmark-outline" size={26} color="#FFFFFF" />
          <View style={styles.flex}>
            <Text style={styles.dirittiTitolo}>Hai già il verbale?</Text>
            <Text style={styles.dirittiSub}>Copia i dati e scopri cosa ti spetta e il prossimo passo</Text>
          </View>
          <Ionicons name="arrow-forward" size={24} color="#FFFFFF" />
        </Pressable>

        {/* I 4 livelli di sostegno: si aprono con il loro tasto */}
        <View style={{ marginTop: spacing.lg }}>
          <LivelliSection />
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

  infoCard: {
    gap: spacing.sm,
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
  infoRiforma: { fontSize: 18, lineHeight: 26, color: colors.onSurface, fontWeight: "800" },
  infoText: {
    flex: 1,
    fontSize: 17,
    lineHeight: 26,
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
    fontSize: 15,
    fontWeight: "800",
    color: colors.onSurface,
    letterSpacing: 0.3,
  },
  regionCardValue: {
    fontSize: 20,
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
  regionCardCtaText: { fontSize: 15, fontWeight: "800", color: colors.onSurface },
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
  dirittiTitolo: { color: "#FFFFFF", fontSize: 18, fontWeight: "800" },
  dirittiSub: { color: "#FFFFFF", fontSize: 15, lineHeight: 20, marginTop: 2 },
  richiesta: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  richiestaLabel: { fontSize: 15, fontWeight: "800", color: colors.brandPrimaryDark, letterSpacing: 0.3 },
  richiestaTitolo: { fontFamily: fonts.serif, fontSize: 20, lineHeight: 27, fontWeight: "700", color: colors.onSurface, marginTop: 4 },
  richiestaTesto: { fontSize: 17, lineHeight: 25, color: colors.onSurface, marginTop: spacing.sm },
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
  azioneText: { flex: 1, fontSize: 17, fontWeight: "800", color: colors.brandPrimaryDark },
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
  navIndietroText: { fontSize: 17, fontWeight: "800", color: colors.brandPrimaryDark },
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
  navAvantiText: { fontSize: 18, fontWeight: "800", color: "#FFFFFF" },
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
  toccaTuttoText: { flex: 1, fontSize: 17, fontWeight: "800", color: colors.brandPrimaryDark },
  regioneNota: { fontSize: 15, color: colors.onSurfaceSecondary, marginBottom: spacing.md, fontWeight: "600" },

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
    fontSize: 17,
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
  sheetItemText: { fontSize: 17, color: colors.onSurfaceSecondary, fontWeight: "600" },
  sheetItemTextSelected: { color: colors.onSurface, fontWeight: "800" },
});
