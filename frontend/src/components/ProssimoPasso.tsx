// "Il tuo prossimo passo" nei risultati: dipende da che punto è il
// riconoscimento (verbale di invalidità / Legge 104).
// Chi non ha ancora il verbale deve prima ottenerlo; chi ce l'ha può
// preparare e chiedere il Progetto di Vita.

import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons, { type IoniconsIconName } from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, fonts, radius, spacing, topics } from "@/src/theme";
import type { VerbaleOption } from "@/src/lib/reports";

type Passo = {
  icon: IoniconsIconName;
  title: string;
  body: string;
  cta: string;
  href: string;
  color: { main: string; soft: string };
};

function passoPer(v: VerbaleOption): Passo {
  switch (v) {
    case "Sì, ho già un verbale":
      return {
        icon: "sparkles-outline",
        title: "Puoi chiedere il Progetto di Vita",
        body:
          "Con il verbale puoi chiedere il Progetto di Vita, cioè un piano costruito insieme ai servizi su ciò che conta per te. Preparalo con calma: lo porterai all'incontro con l'équipe (UVM).",
        cta: "Prepara il tuo Progetto di Vita",
        href: "/progetto",
        color: topics.lavoro,
      };
    case "Domanda già presentata":
      return {
        icon: "footsteps-outline",
        title: "Sei in attesa della visita",
        body:
          "La pratica è partita. Segna le tappe man mano che arrivano (convocazione, visita, verbale): così sai sempre a che punto sei e cosa preparare.",
        cta: "Segui la tua pratica",
        href: "/tracker",
        color: topics.salute,
      };
    default:
      return {
        icon: "document-text-outline",
        title: "Prima serve il riconoscimento",
        body:
          "Il primo passo è il certificato medico introduttivo: lo fa il tuo medico e avvia la valutazione dell'INPS. Il Progetto di Vita si potrà chiedere dopo aver ottenuto il verbale.",
        cta: "Primi passi dopo una diagnosi",
        href: "/primi-passi",
        color: topics.documenti,
      };
  }
}

export function ProssimoPasso({ verbale }: { verbale?: VerbaleOption }) {
  const router = useRouter();
  if (!verbale) return null; // valutazioni salvate prima di questa domanda
  const p = passoPer(verbale);
  return (
    <View style={[styles.card, { borderColor: p.color.main }]} testID="prossimo-passo">
      <View style={styles.row}>
        <View style={[styles.icon, { backgroundColor: p.color.soft }]}>
          <Ionicons name={p.icon} size={22} color={p.color.main} />
        </View>
        <View style={styles.flex}>
          <Text style={styles.eyebrow}>IL TUO PROSSIMO PASSO</Text>
          <Text style={styles.title}>{p.title}</Text>
        </View>
      </View>
      <Text style={styles.body}>{p.body}</Text>
      <Pressable
        onPress={() => router.push(p.href as any)}
        style={({ pressed }) => [styles.cta, pressed && { opacity: 0.85 }]}
        accessibilityRole="button"
        testID="prossimo-passo-cta"
      >
        <Text style={styles.ctaText}>{p.cta}</Text>
        <Ionicons name="arrow-forward" size={16} color={colors.onBrandPrimary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  row: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  icon: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  eyebrow: { fontSize: 10, fontWeight: "800", letterSpacing: 1.1, color: colors.onSurfaceTertiary },
  title: { fontFamily: fonts.serif, fontSize: 18, lineHeight: 23, fontWeight: "700", color: colors.onSurface },
  body: { fontSize: 14, lineHeight: 21, color: colors.onSurfaceSecondary, marginTop: spacing.md },
  cta: {
    marginTop: spacing.md,
    minHeight: 48,
    borderRadius: radius.pill,
    backgroundColor: colors.brandPrimary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  ctaText: { fontSize: 15, fontWeight: "700", color: colors.onBrandPrimary },
});
