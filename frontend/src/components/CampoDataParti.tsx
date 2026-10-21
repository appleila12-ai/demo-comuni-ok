// Pezzi in comune dei campi data (telefono e sito web): scorciatoie e data scritta per esteso.
// Sta in un file a parte perché CampoData.tsx e CampoData.web.tsx non possono importarsi tra loro.

import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius } from "@/src/theme";
import { aTestoItaliano, aIso, daIso, daTestoItaliano, inItalianoLungo } from "@/src/lib/scadenze";

export type CampoDataProps = {
  /** Testo come lo vede la persona: gg/mm/aaaa */
  valore: string;
  onChange: (testo: string) => void;
  label: string;
  /** Mostra Oggi / Domani / Fra una settimana (per appuntamenti futuri) */
  scorciatoie?: boolean;
  testID?: string;
};

const giorniDa = (n: number) => {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
};

export const SCORCIATOIE = [
  { etichetta: "Oggi", giorni: 0 },
  { etichetta: "Domani", giorni: 1 },
  { etichetta: "Fra una settimana", giorni: 7 },
];

export function Scorciatoie({ onChange }: { onChange: (testo: string) => void }) {
  return (
    <View style={styles.chips}>
      {SCORCIATOIE.map((s) => (
        <Pressable
          key={s.etichetta}
          onPress={() => onChange(aTestoItaliano(aIso(giorniDa(s.giorni))))}
          style={({ pressed }) => [styles.chip, pressed && { opacity: 0.8 }]}
          accessibilityRole="button"
        >
          <Text style={styles.chipText}>{s.etichetta}</Text>
        </Pressable>
      ))}
    </View>
  );
}

/** "Hai scelto: giovedì 23 ottobre 2026" (vuoto se la data non è ancora completa) */
export function EcoData({ valore }: { valore: string }) {
  const iso = daTestoItaliano(valore);
  const d = iso ? daIso(iso) : null;
  if (!d) return null;
  return (
    <Text style={styles.eco} accessibilityLiveRegion="polite">
      Hai scelto: {inItalianoLungo(d)}
    </Text>
  );
}

export const stileCampo = {
  backgroundColor: colors.background,
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: radius.md,
  fontSize: 16,
  color: colors.onSurface,
} as const;

const styles = StyleSheet.create({
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: radius.pill, backgroundColor: colors.surfaceSecondary },
  chipText: { fontSize: 13, fontWeight: "700", color: colors.onSurface },
  eco: { fontSize: 14, fontWeight: "700", color: colors.brandPrimaryDark },
});
