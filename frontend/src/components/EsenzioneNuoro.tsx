// Esenzione ticket per patologia cronica a Nuoro (ASL Nuoro).
// Contenuti da src/lib/esenzioneNuoro.ts (solo risposta scritta dell'URP dell'ASL).

import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, spacing } from "@/src/theme";
import {
  NUORO_APPUNTAMENTO,
  NUORO_COME_SI_PRESENTA,
  NUORO_COSA_PORTARE,
  NUORO_FONTE,
  NUORO_MAIL,
  NUORO_NOTA_MANCA,
  NUORO_SPORTELLO,
  NUORO_TELEFONI,
  NUORO_UFFICIO,
  NUORO_URL,
} from "@/src/lib/esenzioneNuoro";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

export function EsenzioneNuoro() {
  return (
    <Pagina
      titolo="Esenzione ticket"
      testID="esenzione-ticket-screen"
      sottotitoloSalvato="Cosa portare e dove andare (ASL Nuoro)"
    >
      <Intro>
        L&apos;esenzione per patologia cronica si chiede all&apos;{NUORO_UFFICIO}, alla {NUORO_SPORTELLO}.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Cosa portare
      </Text>
      <View style={paginaStili.card} testID="esenzione-nuoro-documenti">
        {NUORO_COSA_PORTARE.map((v) => (
          <View key={v} style={st.riga}>
            <Ionicons name="checkbox-outline" size={20} color={colors.brandPrimaryDark} style={st.icona} />
            <Text style={[paginaStili.testo, st.flex]}>{v}</Text>
          </View>
        ))}
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Come si presenta
      </Text>
      <View style={paginaStili.card}>
        {NUORO_COME_SI_PRESENTA.map((v) => (
          <Text key={v} style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
            • {v}
          </Text>
        ))}
        <Text style={paginaStili.testo}>{NUORO_APPUNTAMENTO}</Text>
      </View>
      <Avviso>{NUORO_NOTA_MANCA}</Avviso>

      <Bottone
        label={`Scrivi all'ufficio · ${NUORO_MAIL}`}
        icon="mail-outline"
        onPress={() => apri(`mailto:${NUORO_MAIL}`)}
        testID="esenzione-nuoro-mail"
      />
      {NUORO_TELEFONI.map((t) => (
        <Bottone
          key={t}
          label={`Chiama ${t}`}
          icon="call-outline"
          variante="vuoto"
          onPress={() => apri(`tel:${t.replace(/\s/g, "")}`)}
        />
      ))}
      <Bottone
        label="Pagina dell'ufficio sul sito ASL Nuoro"
        icon="open-outline"
        variante="vuoto"
        onPress={() => apri(NUORO_URL)}
        testID="esenzione-nuoro-pagina"
      />
      <Text style={[paginaStili.testo, st.fonte]}>Fonte: {NUORO_FONTE}</Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  flex: { flex: 1 },
  riga: { flexDirection: "row", alignItems: "flex-start", gap: spacing.sm, marginBottom: spacing.sm },
  icona: { marginTop: 1 },
  fonte: { marginTop: spacing.lg, color: colors.onSurfaceSecondary },
});
