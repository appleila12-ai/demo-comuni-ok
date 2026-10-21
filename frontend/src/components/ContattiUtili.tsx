// "I miei contatti utili": la rubrica personale dell'agenda.
// La persona scrive chi chiamare (medico, assistente sociale, patronato…):
// i dati restano solo su questo dispositivo.

import { useEffect, useState } from "react";
import { Linking, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, radius, spacing, topics } from "@/src/theme";
import { storage } from "@/src/utils/storage";
import {
  CONTATTI_KEY,
  RUOLI,
  etichettaRuolo,
  leggiContatti,
  linkChiamata,
  pulisciTelefono,
  type Contatto,
  type RuoloContatto,
} from "@/src/lib/contatti";
import { Bottone, paginaStili } from "@/src/components/Pagina";

export function ContattiUtili() {
  const router = useRouter();
  const [lista, setLista] = useState<Contatto[]>([]);
  const [aperto, setAperto] = useState(false);
  const [ruolo, setRuolo] = useState<RuoloContatto>("medico");
  const [nome, setNome] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nota, setNota] = useState("");
  const [errore, setErrore] = useState("");

  useEffect(() => {
    storage.getItem<string>(CONTATTI_KEY, "").then((raw) => setLista(leggiContatti(raw)));
  }, []);

  const salva = (nuova: Contatto[]) => {
    setLista(nuova);
    storage.setItem(CONTATTI_KEY, JSON.stringify(nuova));
  };

  const chiudi = () => {
    setAperto(false);
    setNome("");
    setTelefono("");
    setNota("");
    setErrore("");
  };

  const aggiungi = () => {
    if (!nome.trim()) {
      setErrore("Scrivi il nome della persona o dell'ufficio.");
      return;
    }
    let tel: string | undefined;
    if (telefono.trim()) {
      const p = pulisciTelefono(telefono);
      if (!p) {
        setErrore("Il numero non sembra giusto. Scrivilo con il prefisso, per esempio 0187 123456.");
        return;
      }
      tel = p;
    }
    salva([
      ...lista,
      {
        id: `contatto-${Date.now()}`,
        ruolo,
        nome: nome.trim().slice(0, 80),
        telefono: tel,
        nota: nota.trim() ? nota.trim().slice(0, 200) : undefined,
      },
    ]);
    chiudi();
  };

  return (
    <View style={{ marginTop: spacing.md }} testID="contatti-utili">
      <Text style={paginaStili.titoloSezione}>I miei contatti utili</Text>
      <Text style={[paginaStili.piccolo, { marginBottom: spacing.sm }]}>
        Scrivi qui chi chiamare quando serve: li ritrovi insieme alle tue date. Restano solo su questo telefono.
      </Text>

      {lista.map((c) => {
        const info = RUOLI.find((r) => r.ruolo === c.ruolo)!;
        return (
          <View key={c.id} style={[paginaStili.card, styles.contatto]}>
            <View style={styles.riga}>
              <View style={[styles.icona, { backgroundColor: topics.salute.soft }]}>
                <Ionicons name={info.icon as any} size={20} color={colors.onSurface} />
              </View>
              <View style={styles.flex}>
                <Text style={styles.ruolo}>{etichettaRuolo(c.ruolo)}</Text>
                <Text style={styles.nome}>{c.nome}</Text>
                {c.telefono ? <Text style={paginaStili.piccolo}>{c.telefono}</Text> : null}
                {c.nota ? <Text style={paginaStili.piccolo}>{c.nota}</Text> : null}
              </View>
            </View>
            <View style={styles.azioni}>
              {c.telefono ? (
                <Pressable
                  onPress={() => Linking.openURL(linkChiamata(c.telefono!)).catch(() => {})}
                  style={({ pressed }) => [styles.chiama, pressed && { opacity: 0.85 }]}
                  accessibilityRole="button"
                  accessibilityLabel={`Chiama ${c.nome}`}
                >
                  <Ionicons name="call-outline" size={16} color="#FFFFFF" />
                  <Text style={styles.chiamaText}>Chiama</Text>
                </Pressable>
              ) : null}
              <Pressable
                onPress={() => salva(lista.filter((x) => x.id !== c.id))}
                hitSlop={8}
                style={styles.togli}
                accessibilityRole="button"
                accessibilityLabel={`Togli ${c.nome} dai contatti`}
              >
                <Ionicons name="trash-outline" size={14} color={colors.onSurfaceSecondary} />
                <Text style={styles.togliText}>Togli</Text>
              </Pressable>
            </View>
          </View>
        );
      })}

      {aperto ? (
        <View style={[paginaStili.card, styles.form]}>
          <Text style={styles.domanda}>Chi è?</Text>
          <View style={styles.chips}>
            {RUOLI.map((r) => {
              const on = ruolo === r.ruolo;
              return (
                <Pressable
                  key={r.ruolo}
                  onPress={() => setRuolo(r.ruolo)}
                  style={[styles.chip, on && styles.chipOn]}
                  accessibilityRole="button"
                  accessibilityState={{ selected: on }}
                >
                  <Text style={[styles.chipText, on && { color: "#FFFFFF" }]}>{r.etichetta}</Text>
                </Pressable>
              );
            })}
          </View>
          <TextInput
            value={nome}
            onChangeText={(v) => {
              setNome(v);
              setErrore("");
            }}
            placeholder="Nome (es. dott.ssa Rossi)"
            placeholderTextColor="#9A9284"
            style={styles.input}
            accessibilityLabel="Nome del contatto"
            testID="contatti-nome"
          />
          <TextInput
            value={telefono}
            onChangeText={(v) => {
              setTelefono(v);
              setErrore("");
            }}
            placeholder="Telefono (facoltativo)"
            placeholderTextColor="#9A9284"
            keyboardType="phone-pad"
            style={styles.input}
            accessibilityLabel="Telefono del contatto, facoltativo"
            testID="contatti-telefono"
          />
          <TextInput
            value={nota}
            onChangeText={setNota}
            placeholder="Una nota (es. riceve il martedì mattina)"
            placeholderTextColor="#9A9284"
            style={styles.input}
            maxLength={200}
            accessibilityLabel="Nota sul contatto, facoltativa"
            testID="contatti-nota"
          />
          {errore ? <Text style={styles.errore}>{errore}</Text> : null}
          <Bottone label="Aggiungi contatto" icon="checkmark" onPress={aggiungi} testID="contatti-aggiungi" />
          <Pressable onPress={chiudi} style={styles.annulla} accessibilityRole="button">
            <Text style={styles.togliText}>Annulla</Text>
          </Pressable>
        </View>
      ) : (
        <Bottone label="Aggiungi un contatto" icon="person-add-outline" variante="vuoto" onPress={() => setAperto(true)} testID="contatti-apri" />
      )}

      <Pressable
        onPress={() => router.push("/territorio" as any)}
        style={styles.comune}
        accessibilityRole="link"
        accessibilityLabel="Apri i contatti del tuo Comune"
      >
        <Ionicons name="business-outline" size={16} color={colors.brandPrimaryDark} />
        <Text style={styles.comuneText}>Cerchi i contatti del tuo Comune? Li trovi in «Aiuti e contatti»</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  contatto: { padding: spacing.md, marginBottom: spacing.sm },
  riga: { flexDirection: "row", gap: spacing.md },
  icona: { width: 38, height: 38, borderRadius: radius.md, alignItems: "center", justifyContent: "center" },
  ruolo: { fontSize: 12, fontWeight: "800", color: colors.brandPrimaryDark, textTransform: "uppercase", letterSpacing: 0.4 },
  nome: { fontSize: 15, fontWeight: "800", color: colors.onSurface, marginTop: 2 },
  azioni: { flexDirection: "row", alignItems: "center", gap: spacing.md, marginTop: spacing.sm },
  chiama: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: colors.brandPrimaryDark,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chiamaText: { fontSize: 13, fontWeight: "800", color: "#FFFFFF" },
  togli: { flexDirection: "row", alignItems: "center", gap: 4 },
  togliText: { fontSize: 12, color: colors.onSurfaceSecondary, textDecorationLine: "underline" },
  form: { padding: spacing.md, gap: 8, marginBottom: spacing.sm },
  domanda: { fontSize: 14, fontWeight: "800", color: colors.onSurface },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceSecondary,
  },
  chipOn: { backgroundColor: colors.brandPrimaryDark },
  chipText: { fontSize: 13, fontWeight: "700", color: colors.onSurface },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.onSurface,
  },
  errore: { fontSize: 13, fontWeight: "700", color: colors.brandPrimaryDark },
  annulla: { alignSelf: "center", padding: 6 },
  comune: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: spacing.md },
  comuneText: { flex: 1, fontSize: 13, color: colors.brandPrimaryDark, textDecorationLine: "underline" },
});
