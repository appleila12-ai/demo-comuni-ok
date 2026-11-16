// Apre il programma di posta per un indirizzo `mailto:`.
// Sul web usa la stessa scheda del browser (window.location) invece di una scheda nuova:
// sui telefoni e in molti browser la scheda nuova con `mailto:` resta vuota e non succede nulla.

import { Linking, Platform } from "react-native";

export function apriMail(url: string): Promise<void> {
  if (Platform.OS === "web" && typeof window !== "undefined") {
    try {
      window.location.href = url;
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
  return Linking.openURL(url);
}
