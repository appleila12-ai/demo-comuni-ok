// Salute vicino a te: prenotare visite ed esami, farmacie di turno,
// guardia medica ed emergenze. Regione e provincia sono quelle del Comune.

import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { saluteDelComune } from "@/src/lib/salute";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});
const chiama = (n: string) => apri(`tel:${n.replace(/[^\d+]/g, "")}`);

function Blocco({
  icon,
  titolo,
  children,
  testID,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  titolo: string;
  children: React.ReactNode;
  testID?: string;
}) {
  return (
    <View style={paginaStili.card} testID={testID}>
      <View style={styles.head}>
        <View style={styles.icona}>
          <Ionicons name={icon} size={20} color={colors.brandPrimaryDark} />
        </View>
        <Text style={styles.titolo}>{titolo}</Text>
      </View>
      {children}
    </View>
  );
}

export default function Salute() {
  useSezione("salute");
  const { regione, farmacie, asl } = saluteDelComune();
  const nomeAsl = asl?.label?.split(" · ")[0] ?? "la tua azienda sanitaria";

  return (
    <Pagina titolo="Salute vicino a te" testID="salute-screen">
      <Intro>
        Prenotare una visita, trovare la farmacia aperta, sapere chi chiamare di notte.
        Informazioni per {comune.nome} · Regione {comune.regione}.
      </Intro>

      {/* Prenotare visite ed esami */}
      <Blocco icon="calendar-outline" titolo="Prenotare visite ed esami" testID="salute-cup">
        {regione ? (
          <>
            <Text style={paginaStili.testo}>
              Con la ricetta del medico puoi prenotare online su{" "}
              <Text style={styles.bold}>{regione.cup}</Text>.
            </Text>
            <Text style={[paginaStili.piccolo, { marginTop: 6 }]}>{regione.nota}</Text>
            <Bottone
              label="Prenota online"
              icon="open-outline"
              onPress={() => apri(regione.url)}
              testID="salute-prenota"
            />
            {regione.tel ? (
              <Bottone
                label={`Chiama il CUP ${regione.tel}`}
                icon="call-outline"
                variante="vuoto"
                onPress={() => chiama(regione.tel!)}
                testID="salute-cup-tel"
              />
            ) : null}
          </>
        ) : (
          <Text style={paginaStili.testo}>
            Per prenotare chiama il CUP di {nomeAsl} o chiedi al medico di famiglia.
          </Text>
        )}
      </Blocco>

      {/* Farmacie di turno */}
      <Blocco icon="medkit-outline" titolo="Farmacie di turno" testID="salute-farmacie">
        {farmacie ? (
          <>
            <Text style={paginaStili.testo}>
              Le farmacie aperte oggi, anche di notte e nei festivi, sono pubblicate da{" "}
              <Text style={styles.bold}>{farmacie.titolo}</Text>.
            </Text>
            <Bottone
              label="Vedi le farmacie di turno"
              icon="open-outline"
              onPress={() => apri(farmacie.url)}
              testID="salute-farmacie-link"
            />
          </>
        ) : (
          <Text style={paginaStili.testo}>
            Per questa zona non c&apos;è un elenco online ufficiale: i turni sono esposti
            sulla porta di ogni farmacia. Puoi chiedere anche al 116117 o alla guardia medica.
          </Text>
        )}
      </Blocco>

      {/* Guardia medica */}
      <Blocco icon="moon-outline" titolo="Guardia medica (notte e festivi)" testID="salute-guardia">
        {regione?.g116117 === "si" ? (
          <>
            <Text style={paginaStili.testo}>
              Per problemi non urgenti, quando il medico di famiglia non c&apos;è, chiama il
              numero gratuito <Text style={styles.bold}>116117</Text>.
            </Text>
            <Bottone label="Chiama 116117" icon="call-outline" onPress={() => chiama("116117")} />
          </>
        ) : (
          <>
            <Text style={paginaStili.testo}>
              {regione?.g116117 === "parziale" && regione.g116117nota
                ? `${regione.g116117nota} Nelle altre zone trovi il numero della guardia medica sul sito di ${nomeAsl}.`
                : `Il numero della guardia medica è sul sito di ${nomeAsl}.`}
            </Text>
            {regione?.g116117 === "parziale" ? (
              <Bottone label="Chiama 116117 (dove attivo)" icon="call-outline" onPress={() => chiama("116117")} />
            ) : null}
            {asl?.url ? (
              <Bottone
                label={`Sito di ${nomeAsl}`}
                icon="open-outline"
                variante="vuoto"
                onPress={() => apri(asl.url)}
              />
            ) : null}
          </>
        )}
      </Blocco>

      {/* Emergenze */}
      <Pressable
        onPress={() => chiama("112")}
        style={({ pressed }) => [styles.emergenza, pressed && { opacity: 0.9 }]}
        accessibilityRole="button"
        accessibilityLabel="Emergenze: chiama il 112"
        testID="salute-112"
      >
        <Ionicons name="alert-circle" size={26} color="#FFFFFF" />
        <View style={{ flex: 1 }}>
          <Text style={styles.emergenzaTitolo}>Emergenza? Chiama il 112</Text>
          <Text style={styles.emergenzaSub}>Numero unico per ambulanza, vigili del fuoco e forze dell&apos;ordine</Text>
        </View>
      </Pressable>

      <Avviso style={{ marginTop: spacing.md }}>
        I collegamenti portano ai siti ufficiali della Regione, dell&apos;azienda sanitaria
        o delle farmacie. Orari e turni possono cambiare: controlla sempre sulla fonte.
      </Avviso>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  head: { flexDirection: "row", alignItems: "center", gap: spacing.sm, marginBottom: spacing.sm },
  icona: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: colors.brandSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  titolo: { fontSize: 16, fontWeight: "800", color: colors.onSurface, flex: 1 },
  bold: { fontWeight: "800" },
  emergenza: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: "#A3261B",
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  emergenzaTitolo: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
  emergenzaSub: { color: "#FFFFFF", fontSize: 12.5, marginTop: 2, lineHeight: 17 },
});
