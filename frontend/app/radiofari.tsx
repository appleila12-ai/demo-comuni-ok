// Radiofari LETIsmart e percorsi accessibili: cosa risulta per il Comune attivo.
// Dati: src/content/letismart.json (mappa e pagine ufficiali LETIsmart, consultate a novembre 2026).
// TutelApp INFORMA: non sostituisce LETIsmart e non guida i percorsi. Se per il Comune non ci sono
// informazioni verificate si dice solo questo, senza scrivere che i radiofari non esistono.
// Accessibilità: nessuna mappa (solo testo), testi da 14 in su, aree toccabili da almeno 48.

import React, { useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import {
  CONTATTI_LETISMART,
  DATA_LETISMART,
  NESSUN_RADIOFARO,
  TESTO_STATO,
  URL_MAPPA_LETISMART,
  cittaPerStato,
  dataLeggibile,
  radiofariDelComune,
} from "@/src/lib/uici";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

function Azione({
  icon,
  testo,
  etichetta,
  onPress,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  testo: string;
  etichetta: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [st.azione, pressed && { opacity: 0.85 }]}
      accessibilityRole="button"
      accessibilityLabel={etichetta}
    >
      <Ionicons name={icon} size={20} color={colors.brandPrimaryDark} />
      <Text style={st.azioneTesto}>{testo}</Text>
    </Pressable>
  );
}

function Elenco({ titolo, citta }: { titolo: string; citta: string[] }) {
  return (
    <View style={st.gruppo}>
      <Text style={st.gruppoTitolo} accessibilityRole="header">
        {titolo} ({citta.length})
      </Text>
      <Text style={st.riga}>{citta.join(", ")}.</Text>
    </View>
  );
}

export default function Radiofari() {
  useSezione("radiofari");
  const router = useRouter();
  const { voci, luoghi, vuoto } = radiofariDelComune();
  const [apertoElenco, setApertoElenco] = useState(false);
  const nazionale = cittaPerStato();

  return (
    <Pagina titolo="Radiofari e percorsi accessibili" testID="radiofari" sottotitoloSalvato="Radiofari LETIsmart nel tuo Comune">
      <Intro>
        LETIsmart è un progetto, collegato a UICI, per rendere luoghi e percorsi accessibili a chi non vede o vede poco.
        Come funziona e quali dispositivi servono lo spiega LETIsmart sul suo sito ufficiale. TutelApp ti dà solo le
        informazioni: non sostituisce LETIsmart e non guida i tuoi spostamenti.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        {comune.nomeBreve}
      </Text>

      {vuoto ? (
        <Avviso>{NESSUN_RADIOFARO}</Avviso>
      ) : (
        <>
          {voci.map((v) => (
            <View key={v.citta} style={paginaStili.card}>
              <Text style={st.riga} testID={`radiofari-stato-${v.citta}`}>
                {TESTO_STATO[v.stato]}
              </Text>
              {voci.length > 1 ? <Text style={st.fonte}>Voce della mappa: {v.citta}.</Text> : null}
            </View>
          ))}

          {luoghi.length ? (
            <>
              <Text style={paginaStili.titoloSezione} accessibilityRole="header">
                Installazioni documentate da LETIsmart
              </Text>
              {luoghi.map((l, i) => (
                <View key={`${l.fonte}-${i}`} style={paginaStili.card}>
                  <Text style={st.nome} accessibilityRole="header">
                    {l.nome}
                  </Text>
                  <Text style={st.riga}>Tipo: {l.tipo}. Pubblicata il {dataLeggibile(l.data)}.</Text>
                  <Azione
                    icon="document-text-outline"
                    testo="Apri la pagina di LETIsmart"
                    etichetta={`Apri la pagina ufficiale LETIsmart su ${l.nome}`}
                    onPress={() => apri(l.fonte)}
                  />
                </View>
              ))}
              <Avviso>
                Questo non è l'elenco completo dei radiofari: sono le installazioni che LETIsmart ha raccontato sul
                suo sito. Per sapere dove sono tutti, chiedi alla sede UICI o a LETIsmart.
              </Avviso>
            </>
          ) : (
            <Avviso>
              Non abbiamo l'elenco dei punti attrezzati di questa città. Per sapere dove sono, chiedi alla sede UICI o
              a LETIsmart.
            </Avviso>
          )}
        </>
      )}

      <Text style={st.fonte}>Fonte: LETIsmart, consultata il {DATA_LETISMART}.</Text>
      <Azione
        icon="globe-outline"
        testo="Apri le informazioni ufficiali LETIsmart"
        etichetta="Apri la pagina ufficiale di LETIsmart con la mappa delle città"
        onPress={() => apri(URL_MAPPA_LETISMART)}
      />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        A chi chiedere
      </Text>
      <Text style={st.riga}>La sede UICI del tuo Comune sa dirti dove sono i radiofari e come usarli.</Text>
      <Bottone label="La sede UICI della mia zona" icon="people-outline" onPress={() => router.push("/uici")} />
      <Azione
        icon="mail-outline"
        testo={`Email LETIsmart ${CONTATTI_LETISMART.email}`}
        etichetta={`Scrivi a LETIsmart, indirizzo ${CONTATTI_LETISMART.email}`}
        onPress={() => apri(`mailto:${CONTATTI_LETISMART.email}`)}
      />
      <Azione
        icon="call-outline"
        testo={`Telefono LETIsmart ${CONTATTI_LETISMART.telefono}`}
        etichetta={`Chiama LETIsmart, numero ${CONTATTI_LETISMART.telefono}`}
        onPress={() => apri(`tel:${CONTATTI_LETISMART.telefono.replace(/\s/g, "")}`)}
      />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Le città, in elenco
      </Text>
      <Text style={st.riga}>È l'elenco scritto della mappa di LETIsmart, per chi non può usare la mappa.</Text>
      <Pressable
        onPress={() => setApertoElenco((v) => !v)}
        style={({ pressed }) => [st.azione, pressed && { opacity: 0.85 }]}
        accessibilityRole="button"
        accessibilityState={{ expanded: apertoElenco }}
        accessibilityLabel={apertoElenco ? "Nascondi l'elenco delle città" : "Mostra l'elenco delle città"}
      >
        <Ionicons name={apertoElenco ? "chevron-up" : "chevron-down"} size={20} color={colors.brandPrimaryDark} />
        <Text style={st.azioneTesto}>{apertoElenco ? "Nascondi l'elenco" : "Mostra l'elenco delle città"}</Text>
      </Pressable>
      {apertoElenco ? (
        <View testID="radiofari-elenco">
          <Elenco titolo="Città indicate come già attive" citta={nazionale.attiva} />
          <Elenco titolo="Tavola rotonda in corso" citta={nazionale.tavola} />
          <Elenco titolo="Manifestazione di interesse" citta={nazionale.interesse} />
          <Text style={st.fonte}>
            Alcune voci della mappa non sono chiare (nomi scritti in modo diverso o non riferiti a una città) e per
            ora non le mostriamo.
          </Text>
        </View>
      ) : null}

      <Text style={st.fonte}>
        Se qualcosa è sbagliato o cambia, scrivi a info@tutelapp.it e lo correggiamo subito.
      </Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  nome: { fontSize: 17, lineHeight: 24, fontWeight: "700", color: colors.onSurface, marginBottom: spacing.sm },
  riga: { fontSize: 15, lineHeight: 22, color: colors.onSurface, marginBottom: spacing.xs },
  fonte: { fontSize: 14, lineHeight: 20, color: colors.onSurface, marginTop: spacing.sm, marginBottom: spacing.xs },
  gruppo: { marginTop: spacing.md },
  gruppoTitolo: { fontSize: 16, lineHeight: 22, fontWeight: "700", color: colors.onSurface, marginBottom: spacing.xs },
  azione: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    minHeight: 48,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginTop: spacing.xs,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.brandPrimaryDark,
    backgroundColor: colors.surface,
  },
  azioneTesto: { flex: 1, fontSize: 15, lineHeight: 21, fontWeight: "600", color: colors.brandPrimaryDark },
});
