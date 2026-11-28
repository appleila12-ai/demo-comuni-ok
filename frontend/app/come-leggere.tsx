// "Come leggere TutelApp": le avvertenze scritte una volta sola, in parole semplici.
// Testo in bozza: da far leggere a chi dirige il progetto prima della pubblicazione.

import { Linking, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { HeaderComune } from "@/src/components/HeaderComune";

export default function ComeLeggere() {
  useSezione("come-leggere");
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const punti: { titolo: string; testo: string }[] = [
    {
      titolo: "Ti orienta, non decide per te",
      testo:
        "TutelApp ti aiuta a capire dove andare e cosa preparare. Non sostituisce l'INPS, l'azienda sanitaria, l'Ambito Territoriale Sociale o i servizi del Comune: sono loro a decidere sulla tua pratica.",
    },
    {
      titolo: "Da dove vengono le informazioni",
      testo:
        "Le informazioni vengono da siti ufficiali (INPS, ministeri, Regioni, Comuni, ASL). Ogni scheda indica la fonte e la data dell'ultimo controllo. Se una cosa non è certa, non la scriviamo.",
    },
    {
      titolo: "Orari e fondi possono cambiare",
      testo:
        "Orari, sportelli e fondi cambiano spesso. Prima di andare in un ufficio o di preparare una domanda, chiedi conferma all'ufficio.",
    },
    {
      titolo: "Comuni in versione dimostrativa",
      testo: comune.dimostrativo
        ? `${comune.tipo === "unione" ? "L'" : "Il "}${comune.nome} non ha aderito a TutelApp: questa è una versione dimostrativa, con informazioni prese dai siti ufficiali. Verifica sempre i recapiti sui canali ufficiali del Comune.`
        : "Dove il Comune non ha ancora aderito, la scheda è una versione dimostrativa con informazioni prese dai siti ufficiali: verifica sempre i recapiti sui canali del Comune.",
    },
  ];

  return (
    <SafeAreaView style={s.safe} edges={["top"]} testID="come-leggere-screen">
      <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />
      <View style={s.header}>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.back()}
          style={s.iconBtn}
          hitSlop={12}
          accessibilityLabel="Indietro"
          testID="come-leggere-back-btn"
        >
          <Ionicons name="chevron-back" size={22} color={colors.onSurface} />
        </Pressable>
        <Text style={s.headerTitle}>Come leggere TutelApp</Text>
        <HeaderComune />
      </View>
      <ScrollView
        contentContainerStyle={[s.scroll, { paddingBottom: insets.bottom + spacing.xxl }]}
        showsVerticalScrollIndicator={false}
      >
        {punti.map((p, i) => (
          <View key={p.titolo} style={s.punto} testID={`come-leggere-${i + 1}`}>
            <Text style={s.num}>{i + 1}</Text>
            <View style={s.flex}>
              <Text style={s.titolo} accessibilityRole="header">{p.titolo}</Text>
              <Text style={s.testo}>{p.testo}</Text>
            </View>
          </View>
        ))}
        <Pressable
          onPress={() => Linking.openURL("mailto:info@tutelapp.it").catch(() => {})}
          style={({ pressed }) => [s.errore, pressed && { opacity: 0.85 }]}
          accessibilityRole="link"
          accessibilityLabel="Hai notato un errore? Scrivi a info@tutelapp.it"
          testID="come-leggere-errore"
        >
          <Ionicons name="mail-outline" size={18} color={colors.brandPrimaryDark} />
          <Text style={s.erroreTesto}>Hai notato un errore? Scrivici a info@tutelapp.it</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
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
  scroll: { paddingHorizontal: spacing.lg, paddingTop: spacing.sm, gap: spacing.md },
  punto: {
    flexDirection: "row",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  num: { fontFamily: fonts.serif, fontSize: 22, fontWeight: "800", color: colors.brandPrimaryDark, width: 24 },
  titolo: { fontFamily: fonts.serif, fontSize: 17, fontWeight: "700", color: colors.onSurface, marginBottom: 4 },
  testo: { fontSize: 15, lineHeight: 22, color: colors.onSurfaceSecondary },
  errore: { flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: spacing.md },
  erroreTesto: { flex: 1, fontSize: 14, color: colors.brandPrimaryDark, textDecorationLine: "underline" },
});
