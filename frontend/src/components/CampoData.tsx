// Campo data semplice: scorciatoie (Oggi, Domani…), barre messe da sole mentre si scrive
// e, sotto, la data scritta per esteso ("giovedì 23 ottobre 2026") per vedere come è stata capita.
// Sul sito web (CampoData.web.tsx) c'è anche il selettore del calendario.

import { TextInput, View } from "react-native";

import { spacing } from "@/src/theme";
import { formattaMentreScrivi } from "@/src/lib/scadenze";
import { EcoData, Scorciatoie, stileCampo, type CampoDataProps } from "@/src/components/CampoDataParti";

export function CampoData({ valore, onChange, label, scorciatoie, testID }: CampoDataProps) {
  return (
    <View style={{ gap: 6 }}>
      {scorciatoie && <Scorciatoie onChange={onChange} />}
      <TextInput
        value={valore}
        onChangeText={(t) => onChange(formattaMentreScrivi(t))}
        placeholder="gg/mm/aaaa"
        placeholderTextColor="#9A9284"
        keyboardType="numbers-and-punctuation"
        style={[stileCampo, { paddingHorizontal: spacing.md, paddingVertical: 12 }]}
        accessibilityLabel={label}
        testID={testID}
      />
      <EcoData valore={valore} />
    </View>
  );
}
