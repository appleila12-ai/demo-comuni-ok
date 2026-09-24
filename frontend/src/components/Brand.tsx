// TutelApp brand components — logo ufficiale (scudo intrecciato, sfondo trasparente),
// proporzionato alla scritta "TutelApp"; due toni:
// terracotta #C1602F + avorio chiaro, servito dal backend come le
// illustrazioni (fix asset non caricati su Expo Go/web).

import React from "react";
import { Image, Platform, StyleSheet, Text, View, ViewStyle } from "react-native";

import { colors, fonts } from "@/src/theme";
import { HA_BACKEND } from "@/src/config/servizi";

// Sul web il logo è incluso nell'app (funziona anche senza backend, es. demo
// su Netlify); su telefono arriva dal backend (problema asset su Expo Go).
const MARK =
  Platform.OS === "web" || !HA_BACKEND
    ? require("@/assets/images/brand/mark.png")
    : { uri: `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/assets/brand/mark.png?v=trasparente` };

interface LogoProps {
  size?: number;
  style?: ViewStyle;
  variant?: "solid" | "soft";
}

/** Logo mark ufficiale (PNG trasparente, si appoggia sullo sfondo avorio). */
export function Logo({ size = 64, style }: LogoProps) {
  return (
    // Misure esplicite + overflow hidden: sul web un'immagine "require" senza
    // larghezza/altezza proprie veniva disegnata a grandezza reale (256px),
    // enorme e dietro al testo.
    <View style={[{ width: size, height: size, overflow: "hidden" }, style]}>
      <Image
        source={MARK}
        style={{ width: size, height: size }}
        resizeMode="contain"
        accessibilityLabel="Logo TutelApp"
      />
    </View>
  );
}

/** Scudo del brand: lo stesso mark ufficiale, usato in grande. */
export function BrandShield({ size = 96, style }: { size?: number; style?: ViewStyle }) {
  return <Logo size={size} style={style} />;
}

interface WordmarkProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  showLogo?: boolean;
  logoVariant?: "solid" | "soft";
  style?: ViewStyle;
}

/** Logo + "TutelApp" testuale. Usato nell'header. */
export function Wordmark({
  size = "md",
  color = colors.onSurface,
  showLogo = true,
  logoVariant = "solid",
  style,
}: WordmarkProps) {
  const cfg =
    size === "lg"
      ? { logo: 42, font: 26, gap: 10, letter: -0.6 }
      : size === "sm"
      ? { logo: 18, font: 15, gap: 5, letter: -0.2 }
      : { logo: 24, font: 19, gap: 6, letter: -0.4 };

  return (
    <View style={[styles.row, { gap: cfg.gap }, style]}>
      {showLogo && <Logo size={cfg.logo} variant={logoVariant} />}
      <Text
        style={{
          fontSize: cfg.font,
          fontFamily: fonts.serif,
          fontWeight: "600",
          color,
          letterSpacing: cfg.letter,
        }}
      >
        Tutel<Text style={{ color: colors.brandPrimary }}>App</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
