// "Passi da fare" e "Il mio diario" dentro La mia pratica. Le voci sono note personali scritte dalla
// persona dopo un incontro: non sono informazioni verificate e restano solo su questo telefono.

import { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, radius, spacing } from "@/src/theme";
import { Bottone, paginaStili } from "@/src/components/Pagina";
import { aTestoItaliano, daIso, inItaliano } from "@/src/lib/scadenze";
import { caricaDiario, cancellaDiario, salvaDiario } from "@/src/lib/diario";
import {
  DIARIO_VUOTO,
  conDocumentoPronto,
  conPassoFatto,
  passiAperti,
  senzaVoce,
  type Diario,
} from "@/src/lib/diarioCore";

const giorno = (iso: string) => {
  const d = daIso(iso);
  return d ? inItaliano(d) : aTestoItaliano(iso);
};

export function DiarioSezione() {
  const router = useRouter();
  const [diario, setDiario] = useState<Diario>({ ...DIARIO_VUOTO, voci: [] });
  const [conferma, setConferma] = useState<string>(""); // id voce, oppure "tutto"
  const [errore, setErrore] = useState("");

  useFocusEffect(
    useCallback(() => {
      caricaDiario().then(setDiario);
    }, []),
  );

  const aggiorna = async (nuovo: Diario) => {
    const prima = diario;
    setDiario(nuovo);
    setErrore("");
    const ok = await salvaDiario(nuovo);
    if (!ok) {
      setDiario(prima);
      setErrore("Non sono riuscito a salvare sul telefono. Riprova.");
    }
  };

  const aperti = passiAperti(diario);

  return (
    <View testID="diario-sezione">
      <Text style={paginaStili.titoloSezione}>Passi da fare</Text>
      {aperti.length === 0 ? (
        <Text style={[paginaStili.piccolo, { marginBottom: spacing.sm }]}>
          Nessun passo in sospeso. Dopo un incontro puoi scrivere cosa devi fare adesso.
        </Text>
      ) : (
        aperti.map(({ passo, voce }) => (
          <Pressable
            key={passo.id}
            onPress={() => aggiorna(conPassoFatto(diario, voce.id, passo.id, true))}
            style={styles.riga}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: false }}
            accessibilityLabel={`${passo.testo}${passo.data ? `, entro il ${giorno(passo.data)}` : ""}. Tocca per segnarlo come fatto`}
          >
            <Ionicons name="square-outline" size={24} color={colors.brandPrimaryDark} />
            <View style={{ flex: 1 }}>
              <Text style={styles.rigaTesto}>{passo.testo}</Text>
              <Text style={paginaStili.piccolo}>
                {passo.data ? `Entro il ${giorno(passo.data)} · ` : ""}dall'incontro «{voce.titolo}»
              </Text>
            </View>
          </Pressable>
        ))
      )}

      <Text style={paginaStili.titoloSezione}>Il mio diario</Text>
      <Text style={[paginaStili.piccolo, { marginBottom: spacing.sm }]}>
        Qui scrivi tu, dopo ogni incontro. Sono note tue, non informazioni verificate. Restano solo su questo telefono.
      </Text>

      {diario.voci.map((v) => (
        <View key={v.id} style={[paginaStili.card, { padding: spacing.md }]} testID={`diario-voce-${v.id}`}>
          <Text style={styles.data}>{giorno(v.data)}</Text>
          <Text style={styles.titolo}>{v.titolo}</Text>
          <Text style={styles.etichetta}>Nota mia, non verificata</Text>
          {v.conChi || v.ente ? (
            <Text style={paginaStili.testo}>
              Ho parlato con: {[v.conChi, v.ente].filter(Boolean).join(" · ")}
            </Text>
          ) : null}
          {v.capito ? <Text style={paginaStili.testo}>Ho capito: {v.capito}</Text> : null}
          {v.passi.length > 0 ? (
            <View style={{ marginTop: spacing.sm }}>
              <Text style={styles.sotto}>Passi</Text>
              {v.passi.map((p) => (
                <Pressable
                  key={p.id}
                  onPress={() => aggiorna(conPassoFatto(diario, v.id, p.id, !p.fatto))}
                  style={styles.riga2}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: p.fatto }}
                  accessibilityLabel={`${p.testo}${p.data ? `, entro il ${giorno(p.data)}` : ""}`}
                >
                  <Ionicons name={p.fatto ? "checkbox" : "square-outline"} size={22} color={colors.brandPrimaryDark} />
                  <Text style={[styles.rigaTesto, p.fatto && { textDecorationLine: "line-through", opacity: 0.6 }]}>
                    {p.testo}
                    {p.data ? ` (entro il ${giorno(p.data)})` : ""}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : null}
          {v.documenti.length > 0 ? (
            <View style={{ marginTop: spacing.sm }}>
              <Text style={styles.sotto}>Documenti da preparare</Text>
              {v.documenti.map((x) => (
                <Pressable
                  key={x.id}
                  onPress={() => aggiorna(conDocumentoPronto(diario, v.id, x.id, !x.pronto))}
                  style={styles.riga2}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: x.pronto }}
                  accessibilityLabel={`${x.testo}${x.pronto ? ", pronto" : ""}`}
                >
                  <Ionicons name={x.pronto ? "checkbox" : "square-outline"} size={22} color={colors.brandPrimaryDark} />
                  <Text style={[styles.rigaTesto, x.pronto && { textDecorationLine: "line-through", opacity: 0.6 }]}>
                    {x.testo}
                  </Text>
                </Pressable>
              ))}
            </View>
          ) : null}

          {conferma === v.id ? (
            <View style={{ marginTop: spacing.sm }}>
              <Text style={paginaStili.testo} accessibilityLiveRegion="polite">
                Vuoi cancellare questa nota? Non si può recuperare.
              </Text>
              <Bottone label="Sì, cancella" icon="trash-outline" onPress={() => { setConferma(""); aggiorna(senzaVoce(diario, v.id)); }} />
              <Bottone label="No, la tengo" variante="vuoto" onPress={() => setConferma("")} />
            </View>
          ) : (
            <View style={styles.azioni}>
              <Pressable
                onPress={() => router.push(`/dopo-incontro?voce=${encodeURIComponent(v.id)}` as any)}
                style={styles.azione}
                accessibilityRole="button"
                accessibilityLabel={`Modifica la nota del ${giorno(v.data)}`}
              >
                <Ionicons name="create-outline" size={18} color={colors.brandPrimaryDark} />
                <Text style={styles.azioneTesto}>Modifica</Text>
              </Pressable>
              <Pressable
                onPress={() => setConferma(v.id)}
                style={styles.azione}
                accessibilityRole="button"
                accessibilityLabel={`Cancella la nota del ${giorno(v.data)}`}
              >
                <Ionicons name="trash-outline" size={18} color={colors.brandPrimaryDark} />
                <Text style={styles.azioneTesto}>Cancella</Text>
              </Pressable>
            </View>
          )}
        </View>
      ))}

      {errore ? (
        <Text style={styles.errore} accessibilityLiveRegion="polite" accessibilityRole="alert">
          {errore}
        </Text>
      ) : null}

      <Bottone label="Preparo un incontro" icon="clipboard-outline" variante="vuoto" onPress={() => router.push("/prepara-incontro" as any)} testID="diario-prepara" />
      <Bottone label="Scrivo com'è andato" icon="create-outline" onPress={() => router.push("/dopo-incontro" as any)} testID="diario-scrivi" />

      {diario.voci.length > 0 ? (
        conferma === "tutto" ? (
          <View style={{ marginTop: spacing.sm }}>
            <Text style={paginaStili.testo} accessibilityLiveRegion="polite">
              Cancello tutto il diario e i passi con data? Non si può recuperare.
            </Text>
            <Bottone label="Sì, cancella tutto" icon="trash-outline" onPress={async () => { setConferma(""); setDiario({ ...DIARIO_VUOTO, voci: [] }); await cancellaDiario(); }} />
            <Bottone label="No, tengo tutto" variante="vuoto" onPress={() => setConferma("")} />
          </View>
        ) : (
          <Pressable onPress={() => setConferma("tutto")} style={styles.azione} accessibilityRole="button" accessibilityLabel="Cancella tutto il mio diario">
            <Ionicons name="trash-outline" size={18} color={colors.onSurfaceSecondary} />
            <Text style={[styles.azioneTesto, { color: colors.onSurfaceSecondary }]}>Cancella tutto il mio diario</Text>
          </Pressable>
        )
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  riga: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    minHeight: 52,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  riga2: { flexDirection: "row", alignItems: "center", gap: spacing.sm, minHeight: 44 },
  rigaTesto: { flex: 1, fontSize: 15, color: colors.onSurface, lineHeight: 21 },
  data: { fontSize: 12, fontWeight: "800", color: colors.brandPrimaryDark, textTransform: "uppercase", letterSpacing: 0.4 },
  titolo: { fontSize: 16, fontWeight: "800", color: colors.onSurface, marginTop: 2 },
  etichetta: { fontSize: 12, fontWeight: "700", color: colors.onSurfaceSecondary, marginVertical: 4 },
  sotto: { fontSize: 13, fontWeight: "800", color: colors.onSurface },
  azioni: { flexDirection: "row", gap: spacing.lg, marginTop: spacing.sm },
  azione: { flexDirection: "row", alignItems: "center", gap: 6, minHeight: 44 },
  azioneTesto: { fontSize: 14, fontWeight: "700", color: colors.brandPrimaryDark },
  errore: { color: "#8A1C1C", fontSize: 14, fontWeight: "700", marginVertical: spacing.sm },
});
