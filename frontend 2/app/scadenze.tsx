// Scadenzario: la persona inserisce poche date, l'app calcola le scadenze
// e le mette nel calendario del telefono con un promemoria.

import { useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, radius, spacing, topics } from "@/src/theme";
import { storage } from "@/src/utils/storage";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { scaricaFile } from "@/src/lib/documenti";
import {
  TIPI,
  calcolaEventi,
  creaIcs,
  daTestoItaliano,
  giorniDaOggi,
  inItaliano,
  tipoInfo,
  type Scadenza,
  type TipoScadenza,
} from "@/src/lib/scadenze";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const KEY = "tutelapp:scadenze";

export default function Scadenze() {
  useSezione("scadenze");
  const [lista, setLista] = useState<Scadenza[]>([]);
  const [aperto, setAperto] = useState<TipoScadenza | null>(null);
  const [testoData, setTestoData] = useState("");
  const [titolo, setTitolo] = useState("");
  const [errore, setErrore] = useState("");
  const [messaggio, setMessaggio] = useState("");

  useEffect(() => {
    (async () => {
      const raw = await storage.getItem<string>(KEY, "");
      if (!raw) return;
      try {
        const v = JSON.parse(raw);
        if (Array.isArray(v)) setLista(v);
      } catch {
        /* ignora */
      }
    })();
  }, []);

  const salva = (nuova: Scadenza[]) => {
    setLista(nuova);
    storage.setItem(KEY, JSON.stringify(nuova));
  };

  const eventi = useMemo(() => calcolaEventi(lista), [lista]);

  const apri = (t: TipoScadenza) => {
    setAperto(aperto === t ? null : t);
    setTestoData("");
    setTitolo("");
    setErrore("");
    setMessaggio("");
  };

  const aggiungi = () => {
    if (!aperto) return;
    const info = tipoInfo(aperto);
    let data = "";
    if (info.chiedeData) {
      const iso = daTestoItaliano(testoData);
      if (!iso) {
        setErrore("Scrivi la data come giorno/mese/anno, per esempio 15/03/2026.");
        return;
      }
      data = iso;
    }
    if (aperto === "isee" && lista.some((s) => s.tipo === "isee")) {
      setAperto(null);
      return;
    }
    const nuova: Scadenza = {
      id: `${aperto}-${Date.now()}`,
      tipo: aperto,
      data,
      titolo: aperto === "altro" ? titolo : undefined,
    };
    salva([...lista.filter((s) => aperto === "altro" || s.tipo !== aperto), nuova]);
    setAperto(null);
  };

  const togli = (idEvento: string) => {
    const idScadenza = lista.find((s) => idEvento.startsWith(s.id))?.id;
    if (idScadenza) salva(lista.filter((s) => s.id !== idScadenza));
  };

  const esporta = async () => {
    try {
      await scaricaFile("TutelApp-scadenze.ics", creaIcs(eventi, comune.nome), "text/calendar");
      setMessaggio(
        "Fatto! Apri il file scaricato: il telefono ti chiederà di aggiungere le date al calendario, con un promemoria prima di ognuna.",
      );
    } catch {
      setMessaggio("Non è stato possibile creare il file del calendario.");
    }
  };

  return (
    <Pagina
      titolo="Le mie scadenze"
      testID="scadenze-screen"
      piede={
        eventi.length > 0 ? (
          <View>
            {messaggio ? <Text style={styles.messaggio}>{messaggio}</Text> : null}
            <Bottone
              label="Aggiungi al calendario del telefono"
              icon="calendar-outline"
              onPress={esporta}
              testID="scadenze-ics"
            />
          </View>
        ) : undefined
      }
    >
      <Intro>
        Inserisci le date che conosci: TutelApp calcola le scadenze importanti e ti ricorda
        in tempo cosa fare.
      </Intro>

      {/* Scadenze calcolate */}
      {eventi.length > 0 && (
        <View style={{ marginBottom: spacing.md }} testID="scadenze-elenco">
          {eventi.map((e) => {
            const g = giorniDaOggi(e.data);
            const passata = g < 0;
            const vicina = g >= 0 && g <= e.anticipo;
            return (
              <View
                key={e.id}
                style={[
                  paginaStili.card,
                  styles.evento,
                  vicina && { borderColor: colors.brandPrimaryDark, borderWidth: 1.5 },
                  passata && { opacity: 0.6 },
                ]}
              >
                <View style={styles.eventoTop}>
                  <View style={styles.flex}>
                    <Text style={styles.eventoData}>{inItaliano(e.data)}</Text>
                    <Text style={styles.eventoTitolo}>{e.titolo}</Text>
                  </View>
                  <View style={[styles.badge, vicina && { backgroundColor: colors.brandPrimaryDark }]}>
                    <Text style={[styles.badgeText, vicina && { color: "#FFFFFF" }]}>
                      {passata ? "passata" : g === 0 ? "oggi" : `tra ${g} giorni`}
                    </Text>
                  </View>
                </View>
                <Text style={paginaStili.piccolo}>{e.spiegazione}</Text>
                <Pressable onPress={() => togli(e.id)} hitSlop={8} style={styles.togli}>
                  <Ionicons name="trash-outline" size={14} color={colors.onSurfaceSecondary} />
                  <Text style={styles.togliText}>Togli</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      )}

      <Text style={paginaStili.titoloSezione}>
        {eventi.length > 0 ? "Aggiungi un'altra data" : "Cosa vuoi ricordare?"}
      </Text>
      {TIPI.map((t) => {
        const on = aperto === t.tipo;
        return (
          <View key={t.tipo} style={[styles.tipo, on && styles.tipoOn]}>
            <Pressable
              onPress={() => apri(t.tipo)}
              style={styles.tipoRiga}
              accessibilityRole="button"
              accessibilityState={{ expanded: on }}
              testID={`scadenze-tipo-${t.tipo}`}
            >
              <View style={[styles.icona, { backgroundColor: topics.salute.soft }]}>
                <Ionicons name={t.icon as any} size={20} color={colors.onSurface} />
              </View>
              <Text style={styles.tipoTitolo}>{t.titolo}</Text>
              <Ionicons name={on ? "chevron-up" : "add-circle-outline"} size={20} color={colors.brandPrimaryDark} />
            </Pressable>
            {on && (
              <View style={styles.form}>
                <Text style={paginaStili.piccolo}>{t.aiuto}</Text>
                {t.tipo === "altro" && (
                  <TextInput
                    value={titolo}
                    onChangeText={setTitolo}
                    placeholder="Cosa devi ricordare (es. visita INPS)"
                    placeholderTextColor="#9A9284"
                    style={styles.input}
                  />
                )}
                {t.chiedeData && (
                  <>
                    <Text style={styles.domanda}>{t.domanda}</Text>
                    <TextInput
                      value={testoData}
                      onChangeText={(v) => {
                        setTestoData(v);
                        setErrore("");
                      }}
                      placeholder="gg/mm/aaaa"
                      placeholderTextColor="#9A9284"
                      keyboardType="numbers-and-punctuation"
                      style={styles.input}
                      accessibilityLabel={t.domanda}
                      testID="scadenze-data"
                    />
                  </>
                )}
                {errore ? <Text style={styles.errore}>{errore}</Text> : null}
                <Bottone label="Aggiungi" icon="checkmark" onPress={aggiungi} testID="scadenze-aggiungi" />
              </View>
            )}
          </View>
        );
      })}

      <Avviso style={{ marginTop: spacing.md }}>
        Le date restano solo su questo dispositivo. I calcoli sono un promemoria: per
        ricorsi e rinnovi fai sempre riferimento a quanto scritto nei tuoi documenti e chiedi
        conferma a un patronato.
      </Avviso>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  evento: { padding: spacing.md, marginBottom: spacing.sm },
  eventoTop: { flexDirection: "row", alignItems: "flex-start", gap: spacing.sm, marginBottom: 6 },
  eventoData: { fontSize: 12, fontWeight: "800", color: colors.brandPrimaryDark, textTransform: "uppercase", letterSpacing: 0.4 },
  eventoTitolo: { fontSize: 15, fontWeight: "800", color: colors.onSurface, marginTop: 2 },
  badge: { backgroundColor: colors.surfaceSecondary, borderRadius: radius.pill, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: 12, fontWeight: "800", color: colors.onSurface },
  togli: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 8, alignSelf: "flex-start" },
  togliText: { fontSize: 12, color: colors.onSurfaceSecondary, textDecorationLine: "underline" },
  tipo: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
    overflow: "hidden",
  },
  tipoOn: { borderColor: colors.brandPrimaryDark },
  tipoRiga: { flexDirection: "row", alignItems: "center", gap: spacing.md, padding: spacing.md },
  icona: { width: 38, height: 38, borderRadius: radius.md, alignItems: "center", justifyContent: "center" },
  tipoTitolo: { flex: 1, fontSize: 15, fontWeight: "700", color: colors.onSurface },
  form: { paddingHorizontal: spacing.md, paddingBottom: spacing.md, gap: 6 },
  domanda: { fontSize: 14, fontWeight: "800", color: colors.onSurface, marginTop: 6 },
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
  messaggio: { fontSize: 13, lineHeight: 18, color: colors.onSurface, textAlign: "center", marginBottom: 4 },
});
