// TutelApp — identità visiva calda e accogliente (avorio · ambra · terracotta)
import { Platform } from "react-native";

export const colors = {
  // Sfondo generale della pagina (avorio caldo) e superfici card più chiare
  background: "#EDE6D8",
  onBackground: "#332F26",

  surface: "#F7F2E9", // card / superfici (leggermente più chiare dello sfondo)
  onSurface: "#332F26", // testo: un solo colore in tutta l'app
  surfaceSecondary: "#F1EADD", // input / chip / sfondi tenui
  onSurfaceSecondary: "#332F26",
  surfaceTertiary: "#E5DCCB",
  onSurfaceTertiary: "#332F26",
  surfaceInverse: "#332F26",
  onSurfaceInverse: "#F7F2E9",

  // Brand — terracotta (logo, icone identitarie, elementi interattivi)
  brand: "#C1602F",
  brandPrimary: "#C1602F",
  brandPrimaryDark: "#8A3F1A",
  onBrandPrimary: "#332F26",
  brandSecondary: "#F3E4D6", // sfondo tinto caldo per chip/card
  onBrandSecondary: "#332F26",
  brandTertiary: "#EAD7C4",
  onBrandTertiary: "#332F26",
  // Toni del logo
  terracottaLight: "#F1DDCB",
  terracottaDeep: "#C1602F",

  // Accento — ambra (bottoni, badge, progress bar)
  accent: "#E3A94A",
  accentSoft: "#F5E6C8",
  onAccent: "#332F26",
  accentDark: "#332F26",

  // Stati — toni attenuati
  success: "#7C9E72",
  successSoft: "#E6ECDD",
  warning: "#E3A94A",
  warningSoft: "#F5E6C8",
  error: "#BF7A6E",
  errorSoft: "#F1E0DA",
  info: "#C1602F",

  // Neutri caldi
  border: "#E2D9C8",
  borderStrong: "#C2B79F",
  divider: "#E8E0D1",
  muted: "#332F26",
};

// Colori per argomento — tonalità soffuse e armoniche; "dark" è il colore testo unico
export const topics = {
  percorso: { main: "#CD8B67", soft: "#F6EBE2", dark: "#332F26" }, // terracotta — guida
  legge104: { main: "#CD8B67", soft: "#F6EBE2", dark: "#332F26" }, // terracotta — Legge 104
  invalidita: { main: "#AD8C74", soft: "#F0E6DC", dark: "#332F26" }, // bruno — Invalidità Civile
  esenzioni: { main: "#8AA982", soft: "#EAF0E3", dark: "#332F26" }, // verde — esenzioni/fisco
  lavoro: { main: "#D2AE6C", soft: "#F6EBD3", dark: "#332F26" }, // ambra — lavoro/permessi
  documenti: { main: "#C9A36A", soft: "#F6EBD3", dark: "#332F26" }, // miele — documenti
  salute: { main: "#7FAAA0", soft: "#E4EFEB", dark: "#332F26" }, // teal caldo — sede/salute
  patronato: { main: "#C297AC", soft: "#F4E6EC", dark: "#332F26" }, // rosa caldo — servizi
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  xxl: 40,
  xxxl: 56,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  pill: 999,
};

// Tipografia: titoli serif editoriali, corpo/label/bottoni sans di sistema
export const fonts = {
  serif: Platform.select({
    ios: "Georgia",
    android: "serif",
    default: "Georgia",
  }) as string,
};

export const shadow = {
  card: {
    shadowColor: "#7A5A2E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2,
  },
  soft: {
    shadowColor: "#7A5A2E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
};

export const brand = {
  name: "TutelApp",
  tagline: "La tua guida semplice alla Riforma della disabilità 2027",
};
