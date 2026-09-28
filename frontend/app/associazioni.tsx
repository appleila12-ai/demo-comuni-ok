// Associazioni del territorio: volontariato e famiglie, e (sezione a parte) sport.
// Si vede l'elenco della provincia del Comune attivo, prima quelle del Comune.

import React, { useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useLocalSearchParams } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { associazioniDelComune, type Associazione } from "@/src/lib/associazioni";
import { Avviso, Intro, Pagina, paginaStili } from "@/src/components/Pagina";
import { BottoneSalva } from "@/src/components/BottoneSalva";

type Tab = "volontariato" | "sport";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

function Azione({ icon, label, onPress }: { icon: React.ComponentProps<typeof Ionicons>["name"]; label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.azione, pressed && { opacity: 0.85 }]}
      accessibilityRole="button"
    >
      <Ionicons name={icon} size={15} color={colors.brandPrimaryDark} />
      <Text style={styles.azioneText} numberOfLines={1}>{label}</Text>
    </Pressable>
  );
}

function Scheda({ a, vicina }: { a: Associazione; vicina: boolean }) {
  return (
    <View style={paginaStili.card} testID={`associazione-${a.nome}`}>
      {vicina ? <Text style={[styles.badge, { color: comune.theme.warmDark, backgroundColor: comune.theme.warmSoft }]}>Vicino a te</Text> : null}
      <Text style={styles.nome}>{a.nome}</Text>
      <Text style={paginaStili.testo}>{a.cosa}</Text>
      {a.dove ? (
        <View style={styles.dove}>
          <Ionicons name="location-outline" size={14} color={colors.onSurfaceSecondary} />
          <Text style={paginaStili.piccolo}>{a.dove}</Text>
        </View>
      ) : null}
      <View style={styles.azioni}>
        {a.telefono ? <Azione icon="call-outline" label={a.telefono} onPress={() => apri(`tel:${a.telefono!.replace(/[^\d+]/g, "")}`)} /> : null}
        {a.email ? <Azione icon="mail-outline" label="Email" onPress={() => apri(`mailto:${a.email}`)} /> : null}
        {a.sito ? <Azione icon="globe-outline" label="Sito" onPress={() => apri(a.sito!)} /> : null}
        <BottoneSalva
          conTesto
          elemento={{ id: `associazione:${a.nome}`, titolo: a.nome, sotto: a.cosa, tel: a.telefono, email: a.email, url: a.sito, route: "/associazioni" }}
        />
      </View>
      {a.verificare ? <Text style={[paginaStili.piccolo, { marginTop: 6 }]}>Recapito da confermare.</Text> : null}
    </View>
  );
}

export default function Associazioni() {
  useSezione("associazioni");
  const { tipo } = useLocalSearchParams<{ tipo?: string }>();
  const [scheda, setScheda] = useState<Tab>(tipo === "sport" ? "sport" : "volontariato");
  const d = associazioniDelComune();

  const TAB: { id: Tab; label: string; icon: React.ComponentProps<typeof Ionicons>["name"] }[] = [
    { id: "volontariato", label: "Volontariato e famiglie", icon: "people-outline" },
    { id: "sport", label: "Sport", icon: "football-outline" },
  ];

  return (
    <Pagina titolo="Associazioni del territorio" testID="associazioni-screen">
      <Intro>
        Associazioni che si occupano di disabilità nella zona di {comune.nomeBreve}: per avere
        sostegno, conoscere altre famiglie, fare sport.
      </Intro>

      <View style={styles.tabs} accessibilityRole="tablist">
        {TAB.map((t) => {
          const on = scheda === t.id;
          return (
            <Pressable
              key={t.id}
              onPress={() => setScheda(t.id)}
              style={[styles.tab, on && { backgroundColor: colors.brandPrimaryDark, borderColor: colors.brandPrimaryDark }]}
              accessibilityRole="tab"
              accessibilityState={{ selected: on }}
              testID={`associazioni-tab-${t.id}`}
            >
              <Ionicons name={t.icon} size={16} color={on ? "#FFFFFF" : colors.onSurface} />
              <Text style={[styles.tabText, on && { color: "#FFFFFF" }]}>{t.label}</Text>
            </Pressable>
          );
        })}
      </View>

      {scheda === "volontariato" ? (
        <View testID="associazioni-volontariato">
          {d.volontariato.map((a) => <Scheda key={a.nome} a={a} vicina={d.vicina(a)} />)}
          {d.volontariatoLocali === 0 ? (
            <Avviso>
              Stiamo raccogliendo le associazioni della tua zona. Intanto chiedi ai {comune.ente}{" "}
              {comune.delEnte}: conoscono quelle attive sul territorio.
            </Avviso>
          ) : null}
          <Text style={paginaStili.titoloSezione}>Per trovarne altre</Text>
          {d.volontariatoNazionali.map((a) => <Scheda key={a.nome} a={a} vicina={false} />)}
        </View>
      ) : (
        <View testID="associazioni-sport">
          <Text style={[paginaStili.testo, { marginBottom: spacing.md }]}>
            Lo sport fa bene al corpo e aiuta a fare amicizia. Molte società accolgono atleti con
            disabilità di ogni età e livello: chiama per una prova.
          </Text>
          {d.sport.map((a) => <Scheda key={a.nome} a={a} vicina={d.vicina(a)} />)}
          {d.sportRegione.length ? (
            <>
              <Text style={paginaStili.titoloSezione}>In Regione {comune.regione}</Text>
              {d.sportRegione.map((a) => <Scheda key={a.nome} a={a} vicina={false} />)}
            </>
          ) : null}
          {d.sportNazionali.length ? (
            <>
              <Text style={paginaStili.titoloSezione}>Per trovare una società vicina</Text>
              {d.sportNazionali.map((a) => <Scheda key={a.nome} a={a} vicina={false} />)}
            </>
          ) : null}
        </View>
      )}

      <Avviso style={{ marginTop: spacing.md }}>
        Elenco di orientamento raccolto da fonti pubbliche a settembre 2026. Conosci
        un'associazione che manca? Segnalala ai {comune.ente} {comune.delEnte}.
      </Avviso>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  tabs: { flexDirection: "row", gap: spacing.sm, marginBottom: spacing.md },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  tabText: { fontSize: 14, fontWeight: "800", color: colors.onSurface },
  badge: {
    alignSelf: "flex-start",
    fontSize: 11,
    fontWeight: "800",
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 6,
    overflow: "hidden",
  },
  nome: { fontSize: 16, fontWeight: "800", color: colors.onSurface, marginBottom: 4 },
  dove: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 6 },
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
