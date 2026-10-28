// Esenzione ticket per patologia cronica o malattia rara a Genova (ASL 3 Genovese).
// Contenuti da src/lib/esenzioneAsl3.ts (solo pagine ufficiali dell'ASL).

import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, spacing } from "@/src/theme";
import {
  ASL3_COME_SI_PRESENTA,
  ASL3_DATA_SEDI,
  ASL3_MALATTIA_RARA,
  ASL3_NOTA_MANCA,
  ASL3_NOTA_MAIL,
  ASL3_NOTA_VALUTAZIONE,
  ASL3_PATOLOGIA_CRONICA,
  ASL3_SEDI,
  FONTE_ESENZIONE_ASL3,
  URL_ESENZIONE_ASL3,
  URL_SEDI_ASL3,
} from "@/src/lib/esenzioneAsl3";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});
const chiama = (n: string) => apri(`tel:${n.replace(/[^\d+]/g, "")}`);

function Elenco({ voci }: { voci: string[] }) {
  return (
    <View>
      {voci.map((v) => (
        <View key={v} style={st.riga}>
          <Ionicons name="checkbox-outline" size={20} color={colors.brandPrimaryDark} style={st.icona} />
          <Text style={[paginaStili.testo, st.flex]}>{v}</Text>
        </View>
      ))}
    </View>
  );
}

export function EsenzioneGenova() {
  return (
    <Pagina
      titolo="Esenzione ticket"
      testID="esenzione-ticket-screen"
      sottotitoloSalvato="Cosa portare e dove andare (ASL 3 Genovese)"
    >
      <Intro>
        L&apos;esenzione per patologia cronica o malattia rara si chiede agli Sportelli Anagrafe
        dell&apos;ASL 3. Qui trovi cosa portare e le sedi con gli orari.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Patologia cronica: cosa portare
      </Text>
      <View style={paginaStili.card} testID="esenzione-genova-cronica">
        <Elenco voci={ASL3_PATOLOGIA_CRONICA} />
        <Text style={[paginaStili.testo, { marginTop: spacing.sm }]}>{ASL3_NOTA_VALUTAZIONE}</Text>
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Malattia rara
      </Text>
      <View style={paginaStili.card}>
        <Elenco voci={ASL3_MALATTIA_RARA} />
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Come si presenta
      </Text>
      <View style={paginaStili.card}>
        {ASL3_COME_SI_PRESENTA.map((v) => (
          <Text key={v} style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
            • {v}
          </Text>
        ))}
        <Text style={paginaStili.testo}>{ASL3_NOTA_MAIL}</Text>
      </View>
      <Avviso>{ASL3_NOTA_MANCA}</Avviso>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Sportelli Anagrafe: sedi e orari
      </Text>
      <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
        Orari e numeri come pubblicati dall&apos;ASL 3 il {ASL3_DATA_SEDI}: possono cambiare, in caso di
        dubbio chiama prima.
      </Text>
      {ASL3_SEDI.map((d) => (
        <View key={d.distretto} testID="esenzione-genova-distretto">
          <Text style={st.distretto} accessibilityRole="header">
            {d.distretto}
          </Text>
          {d.sedi.map((s) => (
            <View key={`${d.distretto}-${s.nome}-${s.indirizzo}`} style={paginaStili.card}>
              <Text style={st.sede}>{s.nome}</Text>
              <Text style={paginaStili.testo}>{s.indirizzo}</Text>
              <Text style={paginaStili.testo}>{s.orari}</Text>
              {s.nota ? <Text style={[paginaStili.testo, { marginTop: 4 }]}>{s.nota}</Text> : null}
              {s.tel ? (
                <Bottone
                  label={`Chiama ${s.tel.split(" (")[0].split(" / ")[0]}`}
                  icon="call-outline"
                  variante="vuoto"
                  onPress={() => chiama(s.tel!.split(" (")[0].split(" / ")[0])}
                />
              ) : null}
            </View>
          ))}
        </View>
      ))}

      <Bottone
        label="Pagina ASL 3 sull'esenzione"
        icon="open-outline"
        onPress={() => apri(URL_ESENZIONE_ASL3)}
        testID="esenzione-genova-asl3"
      />
      <Bottone
        label="Sedi e orari sul sito ASL 3"
        icon="open-outline"
        variante="vuoto"
        onPress={() => apri(URL_SEDI_ASL3)}
        testID="esenzione-genova-sedi"
      />
      <Text style={[paginaStili.testo, st.fonte]}>Fonte: {FONTE_ESENZIONE_ASL3}</Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  flex: { flex: 1 },
  riga: { flexDirection: "row", alignItems: "flex-start", gap: spacing.sm, marginBottom: spacing.sm },
  icona: { marginTop: 1 },
  distretto: { fontSize: 16, fontWeight: "800", color: colors.onSurface, marginTop: spacing.md, marginBottom: spacing.sm },
  sede: { fontSize: 15, fontWeight: "800", color: colors.onSurface, marginBottom: 4 },
  fonte: { marginTop: spacing.lg, color: colors.onSurfaceSecondary },
});
