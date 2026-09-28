// "I miei salvati": quello che il cittadino ha messo da parte per tornarci dopo.
// Resta solo su questo dispositivo.

import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { useSezione } from "@/src/lib/statistiche";
import { useSalvati } from "@/src/lib/salvati";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

function Azione({ icon, label, onPress }: { icon: React.ComponentProps<typeof Ionicons>["name"]; label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.azione, pressed && { opacity: 0.85 }]} accessibilityRole="button">
      <Ionicons name={icon} size={15} color={colors.brandPrimaryDark} />
      <Text style={styles.azioneText} numberOfLines={1}>{label}</Text>
    </Pressable>
  );
}

export default function Salvati() {
  useSezione("salvati");
  const router = useRouter();
  const { lista, rimuovi } = useSalvati();

  return (
    <Pagina titolo="I miei salvati" testID="salvati-screen" salvabile={false}>
      <Intro>
        Le pagine, i servizi e i contatti che hai messo da parte per tornarci con calma.
      </Intro>

      {lista.length === 0 ? (
        <View style={paginaStili.card} testID="salvati-vuoto">
          <View style={styles.vuotoRiga}>
            <Ionicons name="bookmark-outline" size={22} color={colors.brandPrimaryDark} />
            <Text style={[paginaStili.testo, styles.flex]}>
              Non hai ancora salvato nulla. Quando trovi qualcosa che ti interessa, tocca il
              segnalibro in alto a destra o il tasto "Salva": lo ritrovi qui.
            </Text>
          </View>
          <Bottone label="Torna alla pagina iniziale" icon="home-outline" variante="vuoto" onPress={() => router.replace("/")} />
        </View>
      ) : (
        lista.map((s) => (
          <View key={s.id} style={paginaStili.card} testID={`salvato-${s.id}`}>
            <View style={styles.testa}>
              <Text style={[styles.titolo, styles.flex]}>{s.titolo}</Text>
              <Pressable
                onPress={() => rimuovi(s.id)}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel={`Togli "${s.titolo}" dai salvati`}
              >
                <Ionicons name="trash-outline" size={20} color={colors.onSurfaceSecondary} />
              </Pressable>
            </View>
            {s.sotto ? <Text style={paginaStili.piccolo} numberOfLines={3}>{s.sotto}</Text> : null}
            <View style={styles.azioni}>
              {s.route && !s.tel && !s.url && !s.email ? (
                <Azione icon="arrow-forward" label="Apri" onPress={() => router.push(s.route as any)} />
              ) : null}
              {s.tel ? <Azione icon="call-outline" label={s.tel} onPress={() => apri(`tel:${s.tel!.replace(/[^\d+]/g, "")}`)} /> : null}
              {s.email ? <Azione icon="mail-outline" label="Email" onPress={() => apri(`mailto:${s.email}`)} /> : null}
              {s.url ? <Azione icon="globe-outline" label="Sito" onPress={() => apri(s.url!)} /> : null}
              {s.route && (s.tel || s.url || s.email) ? (
                <Azione icon="arrow-forward" label="Vai alla pagina" onPress={() => router.push(s.route as any)} />
              ) : null}
            </View>
          </View>
        ))
      )}

      <Avviso style={{ marginTop: spacing.md }}>
        I salvati restano solo su questo telefono: nessuno li vede e non vengono inviati.
      </Avviso>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  vuotoRiga: { flexDirection: "row", gap: spacing.sm, alignItems: "flex-start" },
  testa: { flexDirection: "row", alignItems: "flex-start", gap: spacing.sm, marginBottom: 4 },
  titolo: { fontSize: 16, fontWeight: "800", color: colors.onSurface },
  azioni: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: spacing.sm },
  azione: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 7,
    maxWidth: "100%",
  },
  azioneText: { fontSize: 13, fontWeight: "700", color: colors.brandPrimaryDark },
});
