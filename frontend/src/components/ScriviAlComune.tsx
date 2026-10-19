// Scheda "Scrivi al tuo Comune": apre la mail già compilata per chiedere
// all'amministrazione di mantenere e far crescere TutelApp.
// Il cittadino può modificare il testo prima di inviare, o copiarlo.

import { useMemo, useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import Ionicons from "@react-native-vector-icons/ionicons";

import { Bottone } from "@/src/components/Pagina";
import { comune } from "@/src/config/comune";
import { costruisciRichiesta, linkMailto } from "@/src/lib/richiestaComune";
import { colors, fonts, radius, spacing } from "@/src/theme";

export function ScriviAlComune() {
  const [copiato, setCopiato] = useState(false);
  const richiesta = useMemo(() => costruisciRichiesta(comune), [comune.slug]);

  const apriMail = () => {
    Linking.openURL(linkMailto(richiesta)).catch(() => {
      // Nessun programma di posta configurato: resta la copia del testo
      copia();
    });
  };

  const copia = async () => {
    const intero = `${richiesta.a ? `A: ${richiesta.a}\n` : ""}Cc: ${richiesta.cc}\nOggetto: ${richiesta.oggetto}\n\n${richiesta.testo}`;
    try {
      await Clipboard.setStringAsync(intero);
      setCopiato(true);
      setTimeout(() => setCopiato(false), 4000);
    } catch {
      /* ignora */
    }
  };

  return (
    <View style={styles.card} testID="scrivi-al-comune">
      <View style={styles.titolo}>
        <View style={styles.icona}>
          <Ionicons name="mail-outline" size={22} color={colors.brandPrimaryDark} />
        </View>
        <Text style={styles.titoloText} accessibilityRole="header">
          Ti piace TutelApp? Facciamola crescere insieme
        </Text>
      </View>
      <Text style={styles.testo}>
        Vuoi più argomenti, più agevolazioni e più informazioni sulla disabilità? Scrivi{" "}
        {comune.tipo === "unione" ? "alla tua Unione" : `al Comune di ${comune.nomeBreve}`}: la
        mail è già pronta, la puoi modificare prima di inviarla.
      </Text>
      <View style={styles.bottoni}>
        <Pressable
          onPress={apriMail}
          style={({ pressed }) => [styles.bottoneGrande, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityLabel="Scrivi al tuo Comune: apre la mail già compilata"
          testID="scrivi-al-comune-invia"
        >
          <Ionicons name="mail" size={26} color="#FFFFFF" />
          <Text style={styles.bottoneGrandeTesto}>Scrivi al tuo Comune</Text>
        </Pressable>
        <Bottone
          label={copiato ? "Testo copiato" : "Copia il testo"}
          icon={copiato ? "checkmark-circle-outline" : "copy-outline"}
          variante="vuoto"
          onPress={copia}
          testID="scrivi-al-comune-copia"
        />
      </View>
      {richiesta.daControllare ? (
        <Text style={styles.nota}>
          {richiesta.a
            ? "Controlla che l'indirizzo del destinatario sia quello giusto prima di inviare."
            : "Non abbiamo ancora un indirizzo verificato per questo ente: cerca la mail dei Servizi Sociali sul sito del Comune e inseriscila come destinatario."}
        </Text>
      ) : null}
      <Text style={styles.nota}>
        Mettiamo TutelApp in copia, così il Comune può rispondere a tutti. Se non vuoi, togli
        l'indirizzo dalla mail prima di inviarla.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderColor: colors.brandPrimary,
    borderWidth: 1.5,
    padding: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  titolo: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  icona: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.brandSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  titoloText: {
    flex: 1,
    fontFamily: fonts.serif,
    fontSize: 18,
    fontWeight: "700",
    color: colors.onSurface,
    lineHeight: 24,
  },
  testo: { fontSize: 15, lineHeight: 22, color: colors.onSurface },
  bottoni: { gap: spacing.sm },
  bottoneGrande: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
    minHeight: 64,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.brandPrimary,
  },
  bottoneGrandeTesto: { fontSize: 20, fontWeight: "800", color: "#FFFFFF" },
  nota: { fontSize: 14, lineHeight: 20, color: colors.onSurface },
});
