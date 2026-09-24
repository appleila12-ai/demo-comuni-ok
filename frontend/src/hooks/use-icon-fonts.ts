// Icon font loader for Expo apps. The Ionicons .ttf is loaded from a CDN only
// under Expo Go (StoreClient) — that's where the bundled font comes back as
// 0 bytes from Metro's asset resolver on Android. Native dev/prod builds and
// web pass an empty map, so useFonts resolves to [true, null] immediately via
// @react-native-vector-icons autolinking / web stubs.
// ICON_VECTOR_VERSION must match @react-native-vector-icons/ionicons in package.json.
// Usage: const [loaded, error] = useIconFonts();

import Constants, { ExecutionEnvironment } from "expo-constants";
import { useFonts } from "expo-font";

const ICON_VECTOR_VERSION = "13.1.3";

// The font family the Ionicons component queries (see create-icon-set fontReference).
const cdnUrl = `https://cdn.jsdelivr.net/npm/@react-native-vector-icons/ionicons@${ICON_VECTOR_VERSION}/fonts/Ionicons.ttf`;

const iconFontMap = (): Record<string, string> => ({ Ionicons: cdnUrl });

export const useIconFonts = (): readonly [boolean, Error | null] =>
  useFonts(
    Constants.executionEnvironment === ExecutionEnvironment.StoreClient
      ? iconFontMap()
      : {},
  );
