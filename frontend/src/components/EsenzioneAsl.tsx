// Scheda "Esenzione ticket" per le ASL che hanno risposto per iscritto (dati in src/lib/esenzioneAslRisposte.ts).

import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

import { colors, spacing } from "@/src/theme";
import type { SchedaEsenzioneAsl } from "@/src/lib/esenzioneAslRisposte";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

export function EsenzioneAsl({ scheda }: { scheda: SchedaEsenzioneAsl }) {
  return (
    <Pagina
      titolo="Esenzione ticket"
      testID="esenzione-ticket-screen"
      sottotitoloSalvato={`Dove chiedere l'esenzione (${scheda.asl})`}
    >
      <Intro>{scheda.intro}</Intro>

      {scheda.comeSiPresenta ? (
        <>
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Come si presenta
          </Text>
          <View style={paginaStili.card}>
            {scheda.comeSiPresenta.map((v) => (
              <Text key={v} style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
                • {v}
              </Text>
            ))}
          </View>
        </>
      ) : null}

      {scheda.documenti ? (
        <>
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Cosa serve
          </Text>
          <View style={paginaStili.card}>
            {scheda.documenti.map((v) => (
              <Text key={v} style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
                • {v}
              </Text>
            ))}
          </View>
        </>
      ) : null}

      <Avviso>{scheda.manca}</Avviso>

      {scheda.pec ? (
        <Bottone
          label={`Invia per PEC · ${scheda.pec}`}
          icon="mail-outline"
          onPress={() => apri(`mailto:${scheda.pec}`)}
          testID="esenzione-asl-pec"
        />
      ) : null}

      {scheda.mail ? (
        <Bottone
          label={`Scrivi all'ufficio · ${scheda.mail}`}
          icon="mail-outline"
          onPress={() => apri(`mailto:${scheda.mail}`)}
          testID="esenzione-asl-mail"
        />
      ) : null}
      {scheda.telefoni.map((t) => (
        <Bottone
          key={t.numero}
          label={`${t.etichetta} · ${t.numero}`}
          icon="call-outline"
          variante="vuoto"
          onPress={() => apri(`tel:${t.numero.replace(/\s/g, "")}`)}
        />
      ))}
      {scheda.paginaUrl ? (
        <Bottone
          label={scheda.paginaLabel ?? "Pagina ufficiale dell'ASL"}
          icon="open-outline"
          variante="vuoto"
          onPress={() => apri(scheda.paginaUrl as string)}
          testID="esenzione-asl-pagina"
        />
      ) : null}
      <Text style={[paginaStili.testo, st.fonte]}>Fonte: {scheda.fonte}</Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  fonte: { marginTop: spacing.lg, color: colors.onSurfaceSecondary },
});
