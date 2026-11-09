// "La mia pagina" — demo bianca (prova con la cecità).
//
// Una schermata bianca che si compone con ciò che la persona fa davvero:
//  - se ha scritto i dati del suo verbale → compare la sezione "Il mio verbale" (marrone)
//  - se ha aggiunto una categoria con il tastino (per ora: cecità e ipovisione) → compare la
//    sezione "Associazioni e sport" (rosso), con le associazioni che l'app ha già in elenco
//
// Regole: la categoria non si deduce da una ricerca, la sceglie la persona; ogni sezione dice perché è lì
// e si toglie con un tocco; il verbale è "come l'hai indicato tu" (l'app non lo verifica);
// le funzioni di sempre restano a un tocco dal bottone in basso; tutto resta su questo telefono.
// Pagina sperimentale: non ha un link dalla Home, si apre da /bianca.

import React, { useCallback, useState } from "react";
import { Linking, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useFocusEffect, useRouter } from "expo-router";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useNomeUtente } from "@/src/lib/nomeUtente";
import { type Associazione } from "@/src/lib/associazioni";
import { Bottone } from "@/src/components/Pagina";
import { daIso, giorniDaOggi, inItaliano } from "@/src/lib/scadenze";
import {
  associazioniPerCategoria,
  caricaStato,
  caricaVerbale,
  CATEGORIE,
  COLORI_SEZIONE,
  ID_CATEGORIE,
  quandoFra,
  righeVerbale,
  salvaStato,
  type CategoriaId,
  type DatiVerbale,
  type SezioneId,
  type StatoBianca,
} from "@/src/lib/paginaBianca";

type Icona = React.ComponentProps<typeof Ionicons>["name"];

const apri = (url: string) => Linking.openURL(url).catch(() => {});

/** Una sezione della pagina: colore + icona + nome scritto, perché è qui, e "Togli". */
function Sezione({
  id,
  icona,
  titolo,
  perche,
  onTogli,
  children,
  testID,
}: {
  id: SezioneId;
  icona: Icona;
  titolo: string;
  perche: string;
  onTogli: () => void;
  children: React.ReactNode;
  testID: string;
}) {
  const c = COLORI_SEZIONE[id];
  return (
    <View style={[st.sezione, { backgroundColor: c.soft, borderLeftColor: c.main }]} testID={testID}>
      <View style={st.sezioneTesta}>
        <View style={[st.icona, { backgroundColor: c.main }]}>
          <Ionicons name={icona} size={20} color={colors.onSurface} />
        </View>
        <Text style={st.sezioneTitolo} accessibilityRole="header">
          {titolo}
        </Text>
      </View>
      <Text style={st.perche}>{perche}</Text>
      {children}
      <Pressable
        onPress={onTogli}
        style={({ pressed }) => [st.togli, pressed && { opacity: 0.7 }]}
        accessibilityRole="button"
        accessibilityLabel={`Togli «${titolo}» dalla mia pagina`}
        testID={`${testID}-togli`}
      >
        <Ionicons name="close-circle-outline" size={18} color={colors.onSurface} />
        <Text style={st.togliTesto}>Togli dalla mia pagina</Text>
      </Pressable>
    </View>
  );
}

function Azione({ icon, label, onPress }: { icon: Icona; label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [st.azione, pressed && { opacity: 0.85 }]}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Ionicons name={icon} size={16} color={colors.brandPrimaryDark} />
      <Text style={st.azioneTesto} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

function SchedaAssociazione({ a, vicina }: { a: Associazione; vicina: boolean }) {
  return (
    <View style={st.scheda} testID={`bianca-assoc-${a.nome}`}>
      {vicina ? <Text style={st.badge}>Vicino a te</Text> : null}
      <Text style={st.schedaNome}>{a.nome}</Text>
      <Text style={st.testo}>{a.cosa}</Text>
      {a.dove ? <Text style={st.piccolo}>{a.dove}</Text> : null}
      <View style={st.azioni}>
        {a.telefono ? (
          <Azione icon="call-outline" label={a.telefono} onPress={() => apri(`tel:${a.telefono!.replace(/[^\d+]/g, "")}`)} />
        ) : null}
        {a.email ? <Azione icon="mail-outline" label="Email" onPress={() => apri(`mailto:${a.email}`)} /> : null}
        {a.sito ? <Azione icon="globe-outline" label="Sito" onPress={() => apri(a.sito!)} /> : null}
      </View>
    </View>
  );
}

function SezioneVerbale({ dati, onTogli }: { dati: DatiVerbale; onTogli: () => void }) {
  const router = useRouter();
  const righe = dati.verbale ? righeVerbale(dati.verbale) : [];
  const dataRev = dati.revisione ? daIso(dati.revisione) : null;
  return (
    <Sezione
      id="verbale"
      icona="document-text-outline"
      titolo="Il mio verbale"
      perche="Perché hai scritto qui i dati del tuo verbale."
      onTogli={onTogli}
      testID="bianca-verbale"
    >
      <Text style={st.testo}>Come li hai indicato tu (TutelApp non li verifica):</Text>
      {righe.map((r) => (
        <Text key={r} style={st.riga}>
          • {r}
        </Text>
      ))}
      {dataRev ? (
        <Text style={[st.testo, { marginTop: spacing.sm, fontWeight: "700" }]}>
          Revisione che hai indicato: {inItaliano(dataRev)} ({quandoFra(giorniDaOggi(dataRev))})
        </Text>
      ) : null}
      <View style={{ marginTop: spacing.md }}>
        <Bottone
          label="Apri il mio verbale"
          icon="document-text-outline"
          variante="vuoto"
          onPress={() => router.push("/verbale" as any)}
          testID="bianca-verbale-apri"
        />
      </View>
    </Sezione>
  );
}

function SezioneCategoria({ id, onTogli }: { id: CategoriaId; onTogli: () => void }) {
  const router = useRouter();
  const cat = CATEGORIE[id];
  const el = associazioniPerCategoria(id);
  const vuoto = el.volontariato.length + el.sport.length === 0;
  return (
    <Sezione
      id="associazioni"
      icona="people-outline"
      titolo={`Associazioni e sport · ${cat.titolo}`}
      perche={`Perché hai aggiunto «${cat.titolo}».`}
      onTogli={onTogli}
      testID={`bianca-cat-${id}`}
    >
      <Text style={st.testo}>Nella zona di {comune.nomeBreve}, più quelle nazionali.</Text>
      {vuoto ? (
        <Text style={[st.testo, { marginTop: spacing.sm }]}>
          Per il tuo Comune non abbiamo ancora associazioni per questa categoria nell'elenco dell'app.
        </Text>
      ) : null}
      {el.volontariato.length ? (
        <>
          <Text style={st.sottoTitolo} accessibilityRole="header">
            Associazioni
          </Text>
          {el.volontariato.map((a) => (
            <SchedaAssociazione key={a.nome} a={a} vicina={el.vicina(a)} />
          ))}
        </>
      ) : null}
      {el.sport.length ? (
        <>
          <Text style={st.sottoTitolo} accessibilityRole="header">
            Sport e tempo libero
          </Text>
          {el.sport.map((a) => (
            <SchedaAssociazione key={a.nome} a={a} vicina={el.vicina(a)} />
          ))}
        </>
      ) : null}
      <Text style={[st.piccolo, { marginTop: spacing.md }]}>
        Elenco raccolto dai siti delle associazioni e degli enti tra settembre e novembre 2026. Prima di andare, chiama
        per conferma.
      </Text>
      <Text style={[st.piccolo, { marginTop: spacing.xs }]}>
        In questa pagina trovi per ora solo associazioni e sport. Per bonus e agevolazioni apri «Il mio verbale».
      </Text>
      <View style={{ marginTop: spacing.md }}>
        <Bottone
          label="Tutte le associazioni"
          icon="people-outline"
          variante="vuoto"
          onPress={() => router.push("/associazioni" as any)}
          testID={`bianca-cat-${id}-tutte`}
        />
      </View>
    </Sezione>
  );
}

/** Un invito a mettere qualcosa nella pagina: sempre una scelta della persona. */
function Invito({
  icona,
  titolo,
  sotto,
  onPress,
  testID,
}: {
  icona: Icona;
  titolo: string;
  sotto: string;
  onPress: () => void;
  testID: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [st.invito, pressed && { opacity: 0.85 }]}
      accessibilityRole="button"
      accessibilityLabel={`${titolo}. ${sotto}`}
      testID={testID}
    >
      <Ionicons name={icona} size={24} color={colors.brandPrimaryDark} />
      <View style={{ flex: 1 }}>
        <Text style={st.invitoTitolo}>{titolo}</Text>
        <Text style={st.piccolo}>{sotto}</Text>
      </View>
    </Pressable>
  );
}

export default function Bianca() {
  const router = useRouter();
  const nome = useNomeUtente();
  const [stato, setStato] = useState<StatoBianca | null>(null);
  const [dati, setDati] = useState<DatiVerbale | null>(null);

  // Si rilegge ogni volta che si torna sulla pagina (per esempio dopo aver scritto il verbale)
  useFocusEffect(
    useCallback(() => {
      let attivo = true;
      Promise.all([caricaStato(), caricaVerbale()]).then(([s, d]) => {
        if (!attivo) return;
        setStato(s);
        setDati(d);
      });
      return () => {
        attivo = false;
      };
    }, []),
  );

  const cambia = (nuovo: StatoBianca) => {
    setStato(nuovo);
    salvaStato(nuovo);
  };

  const tornaAlleFunzioni = () => router.push("/" as any);
  const indietro = () => (router.canGoBack() ? router.back() : router.replace("/" as any));

  let corpo: React.ReactNode = null;
  if (stato && dati) {
    const haVerbale = !!dati.verbale;
    const verbaleTolto = stato.tolte.includes("verbale");
    const verbaleVisibile = haVerbale && !verbaleTolto;
    const categorieDaAggiungere = ID_CATEGORIE.filter((c) => !stato.categorie.includes(c));
    const piena = verbaleVisibile || stato.categorie.length > 0;
    const hoInviti = !haVerbale || verbaleTolto || categorieDaAggiungere.length > 0;

    corpo = (
      <>
        {!piena ? (
          <Text style={[st.testo, { marginBottom: spacing.lg }]} testID="bianca-vuota">
            Per ora la tua pagina è bianca. Si riempie con quello che scegli di aggiungere.
          </Text>
        ) : null}

        {verbaleVisibile ? (
          <SezioneVerbale dati={dati} onTogli={() => cambia({ ...stato, tolte: [...stato.tolte, "verbale"] })} />
        ) : null}

        {stato.categorie.map((id) => (
          <SezioneCategoria
            key={id}
            id={id}
            onTogli={() => cambia({ ...stato, categorie: stato.categorie.filter((c) => c !== id) })}
          />
        ))}

        {hoInviti ? (
          <>
            <Text style={st.titoloBlocco} accessibilityRole="header">
              Aggiungi alla mia pagina
            </Text>
            {!haVerbale ? (
              <Invito
                icona="document-text-outline"
                titolo="Il mio verbale"
                sotto="Copia i dati dal verbale: compaiono qui."
                onPress={() => router.push("/verbale" as any)}
                testID="bianca-invito-verbale"
              />
            ) : null}
            {verbaleTolto ? (
              <Invito
                icona="add-circle-outline"
                titolo="Rimetti «Il mio verbale»"
                sotto="Torna nella tua pagina."
                onPress={() => cambia({ ...stato, tolte: stato.tolte.filter((x) => x !== "verbale") })}
                testID="bianca-invito-rimetti-verbale"
              />
            ) : null}
            {categorieDaAggiungere.map((id) => (
              <Invito
                key={id}
                icona="add-circle-outline"
                titolo={CATEGORIE[id].titolo}
                sotto={`${CATEGORIE[id].invito}. Aggiungila solo se riguarda te o chi aiuti.`}
                onPress={() => cambia({ ...stato, categorie: [...stato.categorie, id] })}
                testID={`bianca-invito-${id}`}
              />
            ))}
          </>
        ) : null}
      </>
    );
  }

  return (
    <SafeAreaView style={st.safe} edges={["top"]} testID="bianca-screen">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={st.header}>
        <Pressable onPress={indietro} style={st.back} hitSlop={12} accessibilityLabel="Indietro" testID="bianca-back">
          <Ionicons name="chevron-back" size={22} color={colors.onSurface} />
        </Pressable>
        <Text style={st.headerTitolo} numberOfLines={1}>
          La mia pagina
        </Text>
        <View style={st.back} />
      </View>

      <ScrollView contentContainerStyle={st.contenuto}>
        {nome ? <Text style={st.saluto}>Ciao {nome},</Text> : null}
        <Text style={st.h1} accessibilityRole="header">
          Di cosa hai bisogno adesso?
        </Text>
        <Text style={st.testo}>Questa pagina è tua: si compone con quello che scegli. Resta solo su questo telefono.</Text>
        <View style={{ marginTop: spacing.md, marginBottom: spacing.lg }}>
          <Bottone
            label="Scrivi di cosa hai bisogno"
            icon="search-outline"
            variante="vuoto"
            onPress={tornaAlleFunzioni}
            testID="bianca-cerca"
          />
        </View>

        {corpo}
      </ScrollView>

      {/* Via d'uscita sempre visibile: nessuna funzione si perde */}
      <View style={st.piede}>
        <Bottone label="Tutte le funzioni di TutelApp" icon="apps-outline" onPress={tornaAlleFunzioni} testID="bianca-tutte" />
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  back: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  headerTitolo: { flex: 1, textAlign: "center", fontSize: 18, fontWeight: "800", color: colors.onSurface },
  contenuto: { paddingHorizontal: spacing.lg, paddingTop: spacing.md, paddingBottom: spacing.xxl },
  saluto: { fontSize: 16, fontWeight: "800", color: colors.brandPrimaryDark, marginBottom: spacing.xs },
  h1: { fontFamily: fonts.serif, fontSize: 28, lineHeight: 34, fontWeight: "700", color: colors.onSurface, marginBottom: spacing.sm },
  testo: { fontSize: 16, lineHeight: 23, color: colors.onSurface },
  piccolo: { fontSize: 14, lineHeight: 20, color: colors.onSurface },
  riga: { fontSize: 16, lineHeight: 24, color: colors.onSurface, marginTop: 2 },
  titoloBlocco: { fontSize: 20, fontWeight: "800", color: colors.onSurface, marginTop: spacing.lg, marginBottom: spacing.sm },
  sottoTitolo: { fontSize: 17, fontWeight: "800", color: colors.onSurface, marginTop: spacing.md, marginBottom: spacing.xs },
  sezione: {
    borderLeftWidth: 8,
    borderRadius: radius.md,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  sezioneTesta: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  icona: { width: 36, height: 36, borderRadius: radius.pill, alignItems: "center", justifyContent: "center" },
  sezioneTitolo: { flex: 1, fontSize: 19, fontWeight: "800", color: colors.onSurface },
  perche: { fontSize: 14, lineHeight: 20, color: colors.onSurface, marginTop: spacing.sm, marginBottom: spacing.sm, fontStyle: "italic" },
  togli: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", marginTop: spacing.md, paddingVertical: spacing.sm },
  togliTesto: { fontSize: 15, fontWeight: "700", color: colors.onSurface, textDecorationLine: "underline" },
  scheda: {
    backgroundColor: "#FFFFFF",
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginTop: spacing.sm,
  },
  schedaNome: { fontSize: 17, fontWeight: "800", color: colors.onSurface, marginBottom: 2 },
  badge: {
    alignSelf: "flex-start",
    fontSize: 13,
    fontWeight: "800",
    color: colors.onSurface,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    marginBottom: 6,
    overflow: "hidden",
  },
  azioni: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm, marginTop: spacing.sm },
  azione: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    minHeight: 40,
    backgroundColor: "#FFFFFF",
  },
  azioneTesto: { fontSize: 15, fontWeight: "700", color: colors.brandPrimaryDark },
  invito: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: colors.borderStrong,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    minHeight: 64,
  },
  invitoTitolo: { fontSize: 17, fontWeight: "800", color: colors.onSurface },
  piede: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: "#FFFFFF",
  },
});
