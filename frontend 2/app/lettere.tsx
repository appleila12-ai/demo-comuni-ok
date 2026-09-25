// Lettere pronte: scegli il modello, completa pochi campi, crea il PDF o invia per email.

import { useEffect, useMemo, useState } from "react";
import { Linking, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams, useRouter } from "expo-router";

import { colors, radius, spacing, topics } from "@/src/theme";
import { storage } from "@/src/utils/storage";
import { useSezione } from "@/src/lib/statistiche";
import { creaPdf } from "@/src/lib/documenti";
import {
  LETTERE,
  htmlLettera,
  mancanti,
  testoLettera,
  trovaLettera,
  type Valori,
} from "@/src/lib/lettere";
import { Avviso, Bottone, Campo, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const DATI_KEY = "tutelapp:lettere:dati";
/** Campi che l'app ricorda da una lettera all'altra (solo su questo dispositivo) */
const RICORDATI = ["nome", "nascita", "indirizzo", "recapiti"];

export default function Lettere() {
  useSezione("lettere");
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const lettera = trovaLettera(params.id);

  const [valori, setValori] = useState<Valori>({});
  const [avviso, setAvviso] = useState("");
  const [provato, setProvato] = useState(false);

  useEffect(() => {
    (async () => {
      const raw = await storage.getItem<string>(DATI_KEY, "");
      if (raw) {
        try {
          setValori(JSON.parse(raw));
        } catch {
          /* ignora */
        }
      }
    })();
  }, []);

  const aggiorna = (id: string, v: string) => {
    const nuovi = { ...valori, [id]: v };
    setValori(nuovi);
    if (RICORDATI.includes(id)) {
      const daSalvare = Object.fromEntries(RICORDATI.map((k) => [k, nuovi[k] || ""]));
      storage.setItem(DATI_KEY, JSON.stringify(daSalvare));
    }
  };

  const mancano = useMemo(() => (lettera ? mancanti(lettera, valori) : []), [lettera, valori]);

  const conControllo = (azione: () => Promise<void> | void) => async () => {
    setProvato(true);
    if (mancano.length > 0) {
      setAvviso(`Completa prima: ${mancano.map((c) => c.label.toLowerCase()).join(", ")}.`);
      return;
    }
    setAvviso("");
    try {
      await azione();
    } catch (e) {
      console.warn("lettera", e);
      setAvviso("Non è stato possibile completare l'operazione. Riprova.");
    }
  };

  // ---------- Elenco dei modelli ----------
  if (!lettera) {
    return (
      <Pagina titolo="Lettere pronte" testID="lettere-screen">
        <Intro>
          Scegli cosa devi chiedere: completi pochi campi e l&apos;app prepara la lettera, da
          stampare, firmare o inviare per email.
        </Intro>
        {LETTERE.map((l) => (
          <Pressable
            key={l.id}
            onPress={() => router.setParams({ id: l.id })}
            style={({ pressed }) => [styles.modello, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            testID={`lettera-${l.id}`}
          >
            <View style={[styles.icona, { backgroundColor: topics.documenti.soft }]}>
              <Ionicons name={l.icon as any} size={22} color={colors.brandPrimaryDark} />
            </View>
            <View style={styles.flex}>
              <Text style={styles.modelloTitolo}>{l.titolo}</Text>
              <Text style={paginaStili.piccolo}>{l.sottotitolo}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.onSurfaceTertiary} />
          </Pressable>
        ))}
        <Avviso style={{ marginTop: spacing.md }}>
          I dati che scrivi restano solo su questo dispositivo. I modelli sono un aiuto per
          iniziare: l&apos;ufficio può chiederti di usare un suo modulo.
        </Avviso>
      </Pagina>
    );
  }

  // ---------- Compilazione ----------
  const email = lettera.email?.();
  const oggetto = lettera.oggetto(valori);

  return (
    <Pagina
      titolo="Lettere pronte"
      testID="lettera-form"
      piede={
        <View>
          {avviso ? <Text style={styles.errore}>{avviso}</Text> : null}
          <Bottone
            label={Platform.OS === "web" ? "Crea il PDF da stampare" : "Crea e condividi il PDF"}
            icon="document-text-outline"
            onPress={conControllo(() =>
              creaPdf(htmlLettera(lettera, valori), `Lettera_${lettera.id}.pdf`),
            )}
            testID="lettera-pdf"
          />
        </View>
      }
    >
      <Pressable onPress={() => router.setParams({ id: "" })} hitSlop={8} style={styles.tutte}>
        <Ionicons name="arrow-back" size={14} color={colors.onSurface} />
        <Text style={styles.tutteText}>Tutte le lettere</Text>
      </Pressable>
      <Text style={styles.titolo}>{lettera.titolo}</Text>
      <Text style={[paginaStili.piccolo, { marginBottom: spacing.md }]}>
        <Text style={{ fontWeight: "800" }}>Quando serve: </Text>
        {lettera.quando}
      </Text>

      {lettera.campi.map((c) => (
        <Campo
          key={c.id}
          label={`${c.label}${c.obbligatorio ? " *" : ""}`}
          value={valori[c.id] || ""}
          onChange={(t) => aggiorna(c.id, t)}
          placeholder={c.placeholder}
          aiuto={provato && c.obbligatorio && !(valori[c.id] || "").trim() ? "Manca questa informazione" : c.aiuto}
          multiline={c.multiline}
          testID={`lettera-campo-${c.id}`}
        />
      ))}

      <Text style={paginaStili.titoloSezione}>Anteprima</Text>
      <View style={[paginaStili.card, styles.anteprima]} testID="lettera-anteprima">
        <Text style={styles.anteprimaTesto}>{testoLettera(lettera, valori)}</Text>
      </View>

      <View style={styles.azioni}>
        {email ? (
          <Bottone
            label="Invia per email"
            icon="mail-outline"
            variante="vuoto"
            onPress={conControllo(() =>
              Linking.openURL(
                `mailto:${email}?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(testoLettera(lettera, valori))}`,
              ),
            )}
            testID="lettera-email"
          />
        ) : null}
        <Bottone
          label="Copia il testo"
          icon="copy-outline"
          variante="vuoto"
          onPress={conControllo(async () => {
            await Clipboard.setStringAsync(testoLettera(lettera, valori));
            setAvviso("Testo copiato: puoi incollarlo in una email o in un documento.");
          })}
          testID="lettera-copia"
        />
      </View>

      {lettera.nota ? <Avviso style={{ marginTop: spacing.md }}>{lettera.nota}</Avviso> : null}
      <Text style={[paginaStili.piccolo, { marginTop: spacing.sm }]}>
        Ricorda di firmare la lettera e di allegare una copia del documento d&apos;identità.
        Se la consegni a mano, fatti rilasciare una copia con il timbro di ricevuta.
      </Text>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  modello: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  icona: { width: 44, height: 44, borderRadius: radius.md, alignItems: "center", justifyContent: "center" },
  modelloTitolo: { fontSize: 15, fontWeight: "800", color: colors.onSurface, marginBottom: 2 },
  tutte: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: spacing.sm },
  tutteText: { fontSize: 13, fontWeight: "700", color: colors.onSurface, textDecorationLine: "underline" },
  titolo: { fontSize: 21, fontWeight: "800", color: colors.onSurface, marginBottom: 6 },
  anteprima: { backgroundColor: "#FFFFFF" },
  anteprimaTesto: { fontSize: 13, lineHeight: 20, color: colors.onSurface },
  azioni: { gap: spacing.xs },
  errore: { fontSize: 13, fontWeight: "700", color: colors.brandPrimaryDark, textAlign: "center", marginBottom: 4 },
});
