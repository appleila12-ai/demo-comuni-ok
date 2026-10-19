// "Scrivi al tuo Comune": mail già compilata per chiedere all'amministrazione
// di mantenere e far crescere TutelApp. Il cittadino può modificare il testo
// prima di inviare, o copiarlo.
//  - ScriviAlComune: scheda fissa in apertura nella Home
//  - RichiestaComuneFinestra: la stessa richiesta come finestra, che si apre
//    ogni volta che si torna nella Home (non alla prima apertura)

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Linking, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "expo-router";
import * as Clipboard from "expo-clipboard";
import Ionicons from "@react-native-vector-icons/ionicons";

import { Bottone } from "@/src/components/Pagina";
import { comune } from "@/src/config/comune";
import { costruisciRichiesta, linkMailto } from "@/src/lib/richiestaComune";
import { colors, fonts, radius, spacing } from "@/src/theme";
import { storage } from "@/src/utils/storage";

/** Chi ha già scritto al Comune può non vedere più la finestra (salvato sul dispositivo, per Comune) */
const CHIAVE_GIA_SCRITTO = "tutelapp:richiesta-comune-fatta";

function useRichiestaComune() {
  const [copiato, setCopiato] = useState(false);
  const richiesta = useMemo(() => costruisciRichiesta(comune), [comune.slug]);

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

  const apriMail = () => {
    Linking.openURL(linkMailto(richiesta)).catch(() => {
      // Nessun programma di posta configurato: resta la copia del testo
      copia();
    });
  };

  return { richiesta, copiato, copia, apriMail };
}

type Corpo = ReturnType<typeof useRichiestaComune>;

function destinatario() {
  return comune.tipo === "unione" ? "alla tua Unione" : `al Comune di ${comune.nomeBreve}`;
}

function Note({ richiesta }: { richiesta: Corpo["richiesta"] }) {
  return (
    <>
      {richiesta.daControllare ? (
        <Text style={styles.nota}>
          {richiesta.a
            ? "Controlla che l'indirizzo del destinatario sia quello giusto prima di inviare."
            : "Non abbiamo ancora un indirizzo verificato per questo ente: cerca la mail dei Servizi Sociali sul sito del Comune e inseriscila come destinatario."}
        </Text>
      ) : null}
      <Text style={styles.nota}>
        Nel testo chiediamo al Comune di inoltrare la richiesta a Sindaco e Assessore ai Servizi Sociali.
      </Text>
      <Text style={styles.nota}>
        Mettiamo TutelApp in copia, così il Comune può rispondere a tutti. Se non vuoi, togli
        l'indirizzo dalla mail prima di inviarla.
      </Text>
    </>
  );
}

function BottoneMail({ onPress, testID }: { onPress: () => void; testID: string }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.bottoneGrande, pressed && { opacity: 0.85 }]}
      accessibilityRole="button"
      accessibilityLabel="Scrivi al tuo Comune: apre la mail già compilata"
      testID={testID}
    >
      <Ionicons name="mail" size={26} color="#FFFFFF" />
      <Text style={styles.bottoneGrandeTesto}>Scrivi al tuo Comune</Text>
    </Pressable>
  );
}

function BottoneCopia({ copiato, onPress, testID }: { copiato: boolean; onPress: () => void; testID: string }) {
  return (
    <Bottone
      label={copiato ? "Testo copiato" : "Copia il testo"}
      icon={copiato ? "checkmark-circle-outline" : "copy-outline"}
      variante="vuoto"
      onPress={onPress}
      testID={testID}
    />
  );
}

/** Scheda fissa in apertura nella Home */
export function ScriviAlComune() {
  const { richiesta, copiato, copia, apriMail } = useRichiestaComune();

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
        {destinatario()}: la mail è già pronta, la puoi modificare prima di inviarla.
      </Text>
      <View style={styles.bottoni}>
        <BottoneMail onPress={apriMail} testID="scrivi-al-comune-invia" />
        <BottoneCopia copiato={copiato} onPress={copia} testID="scrivi-al-comune-copia" />
      </View>
      <Note richiesta={richiesta} />
    </View>
  );
}

/**
 * Finestra con la stessa richiesta: si apre ogni volta che si TORNA nella Home
 * da un'altra pagina. Non compare alla prima apertura dell'app.
 */
export function RichiestaComuneFinestra() {
  const { richiesta, copiato, copia, apriMail } = useRichiestaComune();
  const [aperta, setAperta] = useState(false);
  const [giaScritto, setGiaScritto] = useState(false);
  const primoFocus = useRef(true);

  useEffect(() => {
    let attivo = true;
    storage.getItem<boolean>(CHIAVE_GIA_SCRITTO, false).then((v) => {
      if (attivo) setGiaScritto(!!v);
    });
    return () => {
      attivo = false;
    };
  }, [comune.slug]);

  useFocusEffect(
    useCallback(() => {
      // La prima volta la Home si apre da sola: la finestra parte solo dal ritorno
      if (primoFocus.current) {
        primoFocus.current = false;
        return;
      }
      setAperta(true);
    }, []),
  );

  const nonMostrarePiu = async () => {
    setGiaScritto(true);
    setAperta(false);
    await storage.setItem(CHIAVE_GIA_SCRITTO, true);
  };

  if (giaScritto) return null;

  return (
    <Modal
      visible={aperta}
      transparent
      animationType="fade"
      onRequestClose={() => setAperta(false)}
      accessibilityViewIsModal
    >
      <View style={styles.sfondo}>
        <View style={styles.finestra} testID="scrivi-al-comune-finestra">
          <Pressable
            onPress={() => setAperta(false)}
            style={styles.chiudi}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Chiudi"
            testID="scrivi-al-comune-chiudi"
          >
            <Ionicons name="close" size={28} color={colors.onSurface} />
          </Pressable>
          <Text style={styles.titoloFinestra} accessibilityRole="header">
            Ti piace TutelApp? Facciamola crescere insieme
          </Text>
          <Text style={styles.testo}>
            Scrivi {destinatario()} per chiedere più argomenti, più agevolazioni e più
            informazioni sulla disabilità. La mail è già pronta: la puoi modificare prima di
            inviarla.
          </Text>
          <BottoneMail
            onPress={() => {
              apriMail();
              setAperta(false);
            }}
            testID="scrivi-al-comune-finestra-invia"
          />
          <BottoneCopia copiato={copiato} onPress={copia} testID="scrivi-al-comune-finestra-copia" />
          <Note richiesta={richiesta} />
          <Pressable
            onPress={() => setAperta(false)}
            style={styles.secondario}
            accessibilityRole="button"
            testID="scrivi-al-comune-piu-tardi"
          >
            <Text style={styles.secondarioTesto}>Più tardi</Text>
          </Pressable>
          <Pressable
            onPress={nonMostrarePiu}
            style={styles.secondario}
            accessibilityRole="button"
            testID="scrivi-al-comune-gia-scritto"
          >
            <Text style={styles.secondarioTesto}>Ho già scritto, non mostrarlo più</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
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
  // Finestra
  sfondo: {
    flex: 1,
    backgroundColor: "rgba(51,47,38,0.55)",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  finestra: {
    width: "100%",
    maxWidth: 480,
    maxHeight: "92%",
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
  },
  chiudi: {
    alignSelf: "flex-end",
    minWidth: 44,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  titoloFinestra: {
    fontFamily: fonts.serif,
    fontSize: 22,
    fontWeight: "700",
    color: colors.onSurface,
    lineHeight: 28,
  },
  secondario: { minHeight: 44, alignItems: "center", justifyContent: "center" },
  secondarioTesto: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.brandPrimaryDark,
    textDecorationLine: "underline",
  },
});
