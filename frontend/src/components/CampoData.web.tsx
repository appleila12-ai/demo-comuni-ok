// Versione per il sito web: oltre alle scorciatoie, il selettore del calendario del browser.

import { View } from "react-native";

import { colors, radius, spacing } from "@/src/theme";
import { aIso, aTestoItaliano, daIso, daTestoItaliano } from "@/src/lib/scadenze";
import { EcoData, Scorciatoie, type CampoDataProps } from "@/src/components/CampoDataParti";

export function CampoData({ valore, onChange, label, scorciatoie, testID }: CampoDataProps) {
  const iso = daTestoItaliano(valore);
  const valida = iso ? daIso(iso) : null;
  return (
    <View style={{ gap: 6 }}>
      {scorciatoie && <Scorciatoie onChange={onChange} />}
      <input
        type="date"
        value={valida ? aIso(valida) : ""}
        onChange={(e: any) => onChange(e.target.value ? aTestoItaliano(e.target.value) : "")}
        aria-label={label}
        data-testid={testID}
        style={stileInput}
      />
      <EcoData valore={valore} />
    </View>
  );
}

const stileInput: any = {
  backgroundColor: colors.background,
  border: `1px solid ${colors.border}`,
  borderRadius: radius.md,
  padding: `12px ${spacing.md}px`,
  fontSize: 16,
  color: colors.onSurface,
  fontFamily: "inherit",
  boxSizing: "border-box",
  width: "100%",
};
