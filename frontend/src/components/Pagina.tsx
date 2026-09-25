// Struttura comune delle pagine "strumento": intestazione (indietro, titolo,
// stemma del Comune) + contenuto scorrevole. Più piccoli elementi riusabili.

import React from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { HeaderComune } from "@/src/components/HeaderComune";

export function Pagina({
  titolo,
  testID,
  children,
  piede,
}: {
  titolo: string;
  testID: string;
  children: React.ReactNode;
  /** Bottone fisso in basso (facoltativo) */
  piede?: React.ReactNode;
}) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={s.safe} edges={["top"]} testID={testID}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={s.header}>
        <Pressable
          onPress={() => (router.canGoBack() ? router.back() : router.replace("/"))}
          style={s.back}
          hitSlop={12}
          accessibilityLabel="Indietro"
          testID={`${testID}-back`}
        >
          <Ionicons name="chevron-back" size={22} color={colors.onSurface} />
        </Pressable>
        <Text style={s.headerTitle} numberOfLines={1}>
          {titolo}
        </Text>
        <HeaderComune />
      </View>
      <ScrollView
        style={s.flex}
        contentContainerStyle={[
          s.scroll,
          { paddingBottom: insets.bottom + (piede ? 110 : spacing.xxl) },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={s.colonna}>{children}</View>
      </ScrollView>
      {piede ? (
        <View style={[s.piede, { paddingBottom: insets.bottom + spacing.md }]}>
          <View style={s.colonna}>{piede}</View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

export function Intro({ children }: { children: React.ReactNode }) {
  return <Text style={s.intro}>{children}</Text>;
}

export function Avviso({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return (
    <View style={[s.avviso, style]}>
      <Ionicons name="information-circle-outline" size={18} color={colors.onSurface} />
      <Text style={s.avvisoText}>{children}</Text>
    </View>
  );
}

export function Bottone({
  label,
  icon,
  onPress,
  variante = "pieno",
  disabled,
  testID,
}: {
  label: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
  variante?: "pieno" | "vuoto";
  disabled?: boolean;
  testID?: string;
}) {
  const pieno = variante === "pieno";
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        s.btn,
        pieno ? s.btnPieno : s.btnVuoto,
        disabled && { opacity: 0.5 },
        pressed && { opacity: 0.85 },
      ]}
      accessibilityRole="button"
      testID={testID}
    >
      {icon ? (
        <Ionicons name={icon} size={18} color={pieno ? "#FFFFFF" : colors.brandPrimaryDark} />
      ) : null}
      <Text style={[s.btnText, { color: pieno ? "#FFFFFF" : colors.brandPrimaryDark }]}>
        {label}
      </Text>
    </Pressable>
  );
}

export function Campo({
  label,
  value,
  onChange,
  placeholder,
  multiline,
  aiuto,
  testID,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  multiline?: boolean;
  aiuto?: string;
  testID?: string;
}) {
  return (
    <View style={s.campo}>
      <Text style={s.campoLabel}>{label}</Text>
      {aiuto ? <Text style={s.campoAiuto}>{aiuto}</Text> : null}
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#9A9284"
        multiline={multiline}
        style={[s.input, multiline && { minHeight: 84, textAlignVertical: "top" }]}
        accessibilityLabel={label}
        testID={testID}
      />
    </View>
  );
}

export function Scelte<T extends string>({
  domanda,
  aiuto,
  opzioni,
  valore,
  onScegli,
  testID,
}: {
  domanda: string;
  aiuto?: string;
  opzioni: { id: T; label: string }[];
  valore: T | undefined;
  onScegli: (v: T) => void;
  testID?: string;
}) {
  return (
    <View style={s.domanda} testID={testID}>
      <Text style={s.domandaText}>{domanda}</Text>
      {aiuto ? <Text style={s.campoAiuto}>{aiuto}</Text> : null}
      <View style={s.opzioni}>
        {opzioni.map((o) => {
          const on = valore === o.id;
          return (
            <Pressable
              key={o.id}
              onPress={() => onScegli(o.id)}
              style={[s.opzione, on && s.opzioneOn]}
              accessibilityRole="radio"
              accessibilityState={{ selected: on }}
            >
              <Ionicons
                name={on ? "radio-button-on" : "radio-button-off"}
                size={18}
                color={on ? colors.brandPrimaryDark : "#8C8374"}
              />
              <Text style={[s.opzioneText, on && { fontWeight: "800" }]}>{o.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export const paginaStili = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  titoloSezione: {
    fontFamily: fonts.serif,
    fontSize: 18,
    fontWeight: "700",
    color: colors.onSurface,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  testo: { fontSize: 14, lineHeight: 21, color: colors.onSurface },
  piccolo: { fontSize: 12, lineHeight: 18, color: colors.onSurfaceSecondary },
});

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
  back: {
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
  colonna: { width: "100%", maxWidth: 640, alignSelf: "center" },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  avviso: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "flex-start",
    backgroundColor: colors.accentSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  avvisoText: { flex: 1, fontSize: 12.5, lineHeight: 18, color: colors.onSurface },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    minHeight: 50,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },
  btnPieno: { backgroundColor: colors.brandPrimaryDark },
  btnVuoto: { borderWidth: 1.5, borderColor: colors.brandPrimaryDark, backgroundColor: colors.surface },
  btnText: { fontSize: 15, fontWeight: "800" },
  campo: { marginBottom: spacing.md },
  campoLabel: { fontSize: 14, fontWeight: "800", color: colors.onSurface, marginBottom: 4 },
  campoAiuto: { fontSize: 12, lineHeight: 17, color: colors.onSurfaceSecondary, marginBottom: 6 },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.onSurface,
  },
  domanda: { marginBottom: spacing.lg },
  domandaText: {
    fontFamily: fonts.serif,
    fontSize: 18,
    fontWeight: "700",
    color: colors.onSurface,
    marginBottom: 6,
    lineHeight: 24,
  },
  opzioni: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  opzione: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexGrow: 1,
    flexBasis: "45%",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
  },
  opzioneOn: { borderColor: colors.brandPrimaryDark, borderWidth: 1.5, backgroundColor: colors.brandSecondary },
  opzioneText: { flex: 1, fontSize: 14, color: colors.onSurface },
  piede: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
