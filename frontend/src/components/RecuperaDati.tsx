// "Ripristina i tuoi dati": compare in fondo alla Home SOLO se su questo dispositivo non c'è nessun dato personale.
// Serve a chi ha perso i dati (browser che li cancella, nuovo telefono, nuovo indirizzo del sito)
// e ha un file di copia di sicurezza. Chi inizia da zero vede solo una riga discreta.

import { useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, spacing } from "@/src/theme";
import { applicaCopia, leggiCopia, scegliFileCopia } from "@/src/lib/copia";
import { haDatiPersonali } from "@/src/lib/datiLocali";

export function RecuperaDati() {
  const [vuoto, setVuoto] = useState(false);
  const [occupato, setOccupato] = useState(false);
  const [esito, setEsito] = useState("");

  useEffect(() => {
    let vivo = true;
    haDatiPersonali().then((ha) => vivo && setVuoto(!ha));
    return () => {
      vivo = false;
    };
  }, []);

  if (!vuoto) return null;

  const ripristina = async () => {
    setEsito("");
    setOccupato(true);
    try {
      const testo = await scegliFileCopia();
      if (testo === null) return;
      const c = leggiCopia(testo);
      if (!c) {
        setEsito("Questo file non è una copia di TutelApp. Scegli il file «TutelApp-copia-….json».");
        return;
      }
      const { scritte } = await applicaCopia(c);
      if (scritte === 0) {
        setEsito("La copia non contiene dati per questo Comune.");
        return;
      }
      if (Platform.OS === "web") {
        setEsito("Dati ripristinati. Ricarico la pagina…");
        setTimeout(() => window.location.reload(), 1200);
      } else {
        setEsito("Dati ripristinati. Chiudi e riapri l'app per vedere tutto.");
      }
    } catch {
      setEsito("Non è stato possibile ripristinare. Riprova.");
    } finally {
      setOccupato(false);
    }
  };

  return (
    <View style={styles.box} testID="recupera-dati">
      <Pressable
        onPress={ripristina}
        disabled={occupato}
        style={({ pressed }) => [styles.riga, pressed && { opacity: 0.85 }]}
        accessibilityRole="button"
        accessibilityLabel="Ripristina i tuoi dati da un file di copia di sicurezza"
        testID="recupera-dati-bottone"
      >
        <Ionicons name="download-outline" size={16} color={colors.brandPrimaryDark} />
        <Text style={styles.testo}>Hai già usato TutelApp? Ripristina i tuoi dati da una copia</Text>
      </Pressable>
      {esito ? <Text style={styles.esito}>{esito}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { marginTop: spacing.md, alignItems: "center" },
  riga: { flexDirection: "row", alignItems: "center", gap: 6, minHeight: 44 },
  testo: { fontSize: 14, fontWeight: "700", color: colors.brandPrimaryDark, textDecorationLine: "underline", flexShrink: 1 },
  esito: { fontSize: 13, color: colors.onSurface, textAlign: "center", marginTop: 4 },
});
