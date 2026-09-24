// Come attivare il Progetto di Vita — sezione interna a "Il mio Progetto di Vita".
// Le due strade ufficiali (SISDA online / ATS in forma libera) + bottone INPS.

import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";

const SISDA_URL =
  "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.sisda-trasmissione-istanze-per-il-progetto-di-vita.html";

export function AttivaProgettoSection() {
  return (
    <View style={styles.wrap} testID="attiva-progetto-section">
      <Text style={styles.sectionLabel}>COME ATTIVARE IL PROGETTO DI VITA</Text>

      <View style={styles.okCard}>
        <View style={styles.okHead}>
          <Ionicons name="checkmark-circle" size={22} color={colors.success} />
          <Text style={styles.okTitle}>Puoi attivare il Progetto di Vita</Text>
        </View>
        <Text style={styles.okText}>
          Con un verbale in mano hai diritto a chiedere il tuo Progetto di
          Vita: un piano personalizzato, costruito con te, che mette insieme
          sostegni sanitari, sociali, scuola, lavoro e vita indipendente.
        </Text>
      </View>

      <Text style={styles.sezTitle}>Le due strade ufficiali</Text>
      <View style={styles.stradaCard}>
        <View style={styles.stradaIcon}>
          <Ionicons name="laptop-outline" size={20} color={colors.brandPrimary} />
        </View>
        <View style={styles.flex}>
          <Text style={styles.stradaTitle}>1 · Online, sul portale INPS (servizio SISDA)</Text>
          <Text style={styles.stradaText}>
            Entra con SPID (almeno di livello 2), CIE 3.0 o CNS. Segui il
            percorso &quot;Sostegni, Sussidi e Indennità&quot; →
            &quot;Per disabili/invalidi/inabili&quot; e invia la richiesta:
            l&apos;INPS la trasmette all&apos;ATS del tuo territorio.
          </Text>
        </View>
      </View>
      <View style={styles.stradaCard}>
        <View style={styles.stradaIcon}>
          <Ionicons name="business-outline" size={20} color={colors.brandPrimary} />
        </View>
        <View style={styles.flex}>
          <Text style={styles.stradaTitle}>2 · Di persona, in forma libera</Text>
          <Text style={styles.stradaText}>
            Rivolgiti direttamente all&apos;ATS (Ambito Territoriale Sociale)
            del tuo Comune: puoi presentare la richiesta anche senza moduli
            particolari. Per {comune.nomeBreve}: {comune.ente}, {comune.telefono}.
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => Linking.openURL(SISDA_URL).catch(() => {})}
        style={({ pressed }) => [styles.primaryBtn, pressed && { opacity: 0.9 }]}
        accessibilityRole="link"
        accessibilityLabel="Vai al portale INPS, servizio SISDA"
        testID="hub-sisda-btn"
      >
        <Ionicons name="open-outline" size={20} color={colors.onBrandPrimary} />
        <Text style={styles.primaryBtnText}>Vai al portale INPS</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: spacing.xl },
  flex: { flex: 1 },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.1,
    color: colors.onSurfaceTertiary,
    marginBottom: spacing.sm,
  },
  okCard: {
    backgroundColor: colors.successSoft,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  okHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  okTitle: {
    fontFamily: fonts.serif,
    fontSize: 17,
    fontWeight: "700",
    color: colors.onSurface,
    flex: 1,
  },
  okText: { fontSize: 14, lineHeight: 21, color: colors.onSurface, fontWeight: "500" },
  sezTitle: {
    fontFamily: fonts.serif,
    fontSize: 18,
    fontWeight: "700",
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  stradaCard: {
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
  stradaIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.brandSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  stradaTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.onSurface,
    marginBottom: 4,
  },
  stradaText: { fontSize: 13, lineHeight: 19, color: colors.onSurfaceSecondary },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    backgroundColor: colors.brandPrimary,
    minHeight: 60,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.xl,
    marginTop: spacing.lg,
  },
  primaryBtnText: { color: colors.onBrandPrimary, fontSize: 16, fontWeight: "800" },
});
