// "Come ti chiami?": si apre al primo accesso (prima di tutto il resto) e quando la persona
// sceglie "Cambia nome". Il nome resta solo su questo dispositivo.

import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Wordmark } from "@/src/components/Brand";
import { colors, fonts, radius, spacing } from "@/src/theme";
import { NOME_LUNGHEZZA_MAX, impostaNome, pulisciNome } from "@/src/lib/nomeUtente";

export function RichiestaNome({
  iniziale = "",
  onFatto,
  onAnnulla,
}: {
  /** nome già presente (quando lo si cambia) */
  iniziale?: string;
  onFatto?: (nome: string) => void;
  /** se c'è, compare "Annulla" (si usa solo quando il nome esiste già) */
  onAnnulla?: () => void;
}) {
  const [testo, setTesto] = useState(iniziale);
  const valido = pulisciNome(testo).length > 0;
  const cambio = !!onAnnulla;

  const conferma = () => {
    if (!impostaNome(testo)) return;
    onFatto?.(pulisciNome(testo));
  };

  return (
    <SafeAreaView style={s.safe} edges={["top", "bottom"]} testID="richiesta-nome">
      <KeyboardAvoidingView
        style={s.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={s.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={s.colonna}>
            <Wordmark size="md" showLogo={true} logoVariant="soft" />

            <Text style={s.titolo} accessibilityRole="header">
              {cambio ? "Come vuoi che ti chiami?" : "Come ti chiami?"}
            </Text>
            <Text style={s.testo}>
              Così TutelApp può chiamarti per nome. Il nome resta solo su questo dispositivo:
              non viene inviato a nessuno.
            </Text>

            <Text style={s.label}>Il tuo nome</Text>
            <TextInput
              value={testo}
              onChangeText={setTesto}
              placeholder="Per esempio: Maria"
              placeholderTextColor="#9A9284"
              style={s.input}
              autoFocus
              autoCapitalize="words"
              autoCorrect={false}
              maxLength={NOME_LUNGHEZZA_MAX}
              returnKeyType="done"
              onSubmitEditing={conferma}
              textContentType="givenName"
              autoComplete="name-given"
              accessibilityLabel="Il tuo nome"
              testID="richiesta-nome-input"
            />

            <Pressable
              onPress={conferma}
              disabled={!valido}
              style={({ pressed }) => [s.bottone, !valido && { opacity: 0.45 }, pressed && { opacity: 0.85 }]}
              accessibilityRole="button"
              accessibilityState={{ disabled: !valido }}
              accessibilityLabel={cambio ? "Salva il nome" : "Continua"}
              testID="richiesta-nome-continua"
            >
              <Text style={s.bottoneTesto}>{cambio ? "Salva" : "Continua"}</Text>
            </Pressable>

            {cambio ? (
              <Pressable
                onPress={onAnnulla}
                style={s.annulla}
                accessibilityRole="button"
                accessibilityLabel="Annulla"
                testID="richiesta-nome-annulla"
              >
                <Text style={s.annullaTesto}>Annulla</Text>
              </Pressable>
            ) : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  flex: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: "center", padding: spacing.xl },
  colonna: { width: "100%", maxWidth: 520, alignSelf: "center" },
  titolo: {
    fontFamily: fonts.serif,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "700",
    color: colors.onSurface,
    letterSpacing: -0.5,
    marginTop: spacing.xl,
  },
  testo: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurfaceSecondary,
    marginTop: spacing.md,
    marginBottom: spacing.xl,
  },
  label: { fontSize: 16, fontWeight: "800", color: colors.onSurface, marginBottom: 6 },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.brandPrimaryDark,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    fontSize: 20,
    color: colors.onSurface,
  },
  bottone: {
    minHeight: 56,
    borderRadius: radius.pill,
    backgroundColor: colors.brandPrimaryDark,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.lg,
  },
  bottoneTesto: { fontSize: 18, fontWeight: "800", color: "#FFFFFF" },
  annulla: { minHeight: 48, alignItems: "center", justifyContent: "center", marginTop: spacing.sm },
  annullaTesto: { fontSize: 16, fontWeight: "700", color: colors.brandPrimaryDark, textDecorationLine: "underline" },
});
