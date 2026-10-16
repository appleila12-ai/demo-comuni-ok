// Il mio cassetto — vista unificata di documenti, pratiche, scadenze, appunti e salvati.
// I documenti si caricano e gestiscono direttamente qui.
// I dati restano esclusivamente sul dispositivo dell'utente.

import { useCallback, useEffect, useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import * as Sharing from "expo-sharing";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system/legacy";

import { colors, fonts, radius, spacing, topics } from "@/src/theme";
import { useSezione } from "@/src/lib/statistiche";
import { inItaliano, giorniDaOggi } from "@/src/lib/scadenze";
import {
  caricaCassetto,
  subscribeVault,
  type CassettoData,
  type VaultFile,
} from "@/src/lib/cassetto";
import {
  addVaultFile,
  removeVaultFileEntry,
  updateVaultFileData,
} from "@/src/lib/vault";
import {
  estraiDatiDocumento,
  type CampoEstratto,
  type RisultatoEstrazione,
} from "@/src/lib/doc-extract";
import { Avviso, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

// ---- Costanti ----

const CAMPI_RICORDATI_LABEL: Record<string, string> = {
  nome: "Nome e cognome",
  nascita: "Data di nascita",
  indirizzo: "Indirizzo",
  recapiti: "Recapiti",
};

const IS_WEB = Platform.OS === "web";

function toast(msg: string) {
  if (Platform.OS === "android") ToastAndroid.show(msg, ToastAndroid.SHORT);
  else console.log(msg);
}

// ---- Componente principale ----

export default function Cassetto() {
  useSezione("cassetto");
  const router = useRouter();
  const [dati, setDati] = useState<CassettoData | null>(null);

  const carica = useCallback(async () => {
    setDati(await caricaCassetto());
  }, []);

  // Ricarica ogni volta che la pagina prende il focus
  useFocusEffect(
    useCallback(() => {
      let attivo = true;
      caricaCassetto().then((d) => attivo && setDati(d));
      return () => { attivo = false; };
    }, []),
  );

  // Aggiornamenti in tempo reale dal vault
  useEffect(() => {
    const unsub = subscribeVault(() => carica());
    return unsub;
  }, [carica]);

  if (!dati) return null;

  const {
    documenti,
    tappe,
    scadenze,
    datiLettera,
    salvati,
    haVerbale,
  } = dati;

  const tappeCompletate = tappe.filter((t) => t.done).length;
  const campiSalvati = Object.entries(datiLettera).filter(
    ([k, v]) => CAMPI_RICORDATI_LABEL[k] && v,
  );

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: true,
        multiple: false,
      });
      if (res.canceled || !res.assets?.length) return;
      const asset = res.assets[0];
      let uri = asset.uri;
      if (!IS_WEB) {
        const ext = asset.name?.split(".").pop() || "bin";
        const dest = `${FileSystem.documentDirectory}${Date.now()}_doc.${ext}`;
        await FileSystem.copyAsync({ from: asset.uri, to: dest });
        uri = dest;
      }
      await addVaultFile(asset.name || "Documento", uri);
      toast("Documento aggiunto");
      carica();
    } catch (e) {
      console.warn("pick failed", e);
      toast("Impossibile caricare il documento");
    }
  };

  return (
    <Pagina titolo="Il mio cassetto" testID="cassetto-screen">
      <Intro>
        Qui trovi tutto quello che hai inserito: documenti, tappe della pratica,
        scadenze, appunti delle lettere e pagine salvate. Tutto resta solo su
        questo dispositivo.
      </Intro>

      {/* ─── Badge privacy ─── */}
      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Ionicons name="phone-portrait-outline" size={14} color={colors.onSurface} />
          <Text style={styles.badgeText}>Sul dispositivo</Text>
        </View>
        <View style={styles.badge}>
          <Ionicons name="cloud-off-outline" size={14} color={colors.onSurface} />
          <Text style={styles.badgeText}>Nessun invio</Text>
        </View>
      </View>

      {/* ─── 1. Documenti ─── */}
      <Text style={paginaStili.titoloSezione}>Documenti</Text>
      <View style={paginaStili.card} testID="cassetto-documenti">
        {documenti.length === 0 ? (
          <Text style={paginaStili.piccolo}>
            Nessun documento nell&apos;elenco. Carica il primo documento
            con il bottone qui sotto.
          </Text>
        ) : (
          documenti.map((f, i) => (
            <DocumentoRiga key={f.id} file={f} indice={i} onRemove={carica} />
          ))
        )}
        <View style={styles.docActions}>
          <Pressable
            onPress={pickDocument}
            style={({ pressed }) => [styles.caricaBtn, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            testID="cassetto-carica-doc"
          >
            <Ionicons name="cloud-upload-outline" size={15} color={colors.onSurface} />
            <Text style={styles.caricaBtnText}>Carica documento</Text>
          </Pressable>
        </View>
      </View>

      {IS_WEB && documenti.length > 0 && (
        <Avviso>
          Nel browser i file caricati o stampati potrebbero non restare
          disponibili al prossimo accesso: conserva sempre gli originali.
        </Avviso>
      )}

      {/* ─── 2. La mia pratica ─── */}
      <Text style={paginaStili.titoloSezione}>La mia pratica</Text>
      <View style={paginaStili.card} testID="cassetto-pratica">
        {tappeCompletate === 0 && !haVerbale ? (
          <Text style={paginaStili.piccolo}>
            Nessuna tappa segnata ancora. Vai alla pratica per seguire il
            tuo percorso.
          </Text>
        ) : (
          <>
            {tappe.map((t) => (
              <View key={t.id} style={styles.tappaRiga}>
                <Ionicons
                  name={t.done ? "checkmark-circle" : "ellipse-outline"}
                  size={18}
                  color={t.done ? colors.success : colors.borderStrong}
                />
                <View style={styles.flex}>
                  <Text style={[styles.tappaTitle, !t.done && { color: colors.borderStrong }]}>
                    {t.title}
                  </Text>
                  {t.done && t.date ? (
                    <Text style={paginaStili.piccolo}>{t.date}</Text>
                  ) : null}
                </View>
              </View>
            ))}
            {haVerbale && (
              <View style={styles.tappaRiga}>
                <Ionicons name="document-text" size={18} color={topics.esenzioni.main} />
                <Text style={styles.tappaTitle}>Verbale inserito</Text>
              </View>
            )}
          </>
        )}
        <LinkSezione
          label="Vai alla pratica"
          route="/tracker"
          icon="footsteps-outline"
          testID="cassetto-vai-pratica"
        />
      </View>

      {/* ─── 3. Scadenze ─── */}
      <Text style={paginaStili.titoloSezione}>Scadenze</Text>
      <View style={paginaStili.card} testID="cassetto-scadenze">
        {scadenze.length === 0 ? (
          <Text style={paginaStili.piccolo}>
            Nessuna scadenza inserita. Puoi aggiungere date importanti per
            ricorsi, revisioni, ISEE e altro.
          </Text>
        ) : (
          scadenze.map((e) => {
            const g = giorniDaOggi(e.data);
            const passata = g < 0;
            const vicina = g >= 0 && g <= e.anticipo;
            return (
              <View
                key={e.id}
                style={[
                  styles.scadenzaRiga,
                  passata && { opacity: 0.55 },
                ]}
              >
                <View style={[styles.scadenzaBadge, vicina && { backgroundColor: colors.brandPrimaryDark }]}>
                  <Text style={[styles.scadenzaBadgeText, vicina && { color: "#FFFFFF" }]}>
                    {passata ? "passata" : g === 0 ? "oggi" : `tra ${g}g`}
                  </Text>
                </View>
                <View style={styles.flex}>
                  <Text style={styles.scadenzaData}>{inItaliano(e.data)}</Text>
                  <Text style={paginaStili.piccolo} numberOfLines={2}>{e.titolo}</Text>
                </View>
              </View>
            );
          })
        )}
        <LinkSezione
          label="Gestisci scadenze"
          route="/scadenze"
          icon="alarm-outline"
          testID="cassetto-vai-scadenze"
        />
      </View>

      {/* ─── 4. Appunti lettere ─── */}
      <Text style={paginaStili.titoloSezione}>Appunti delle lettere</Text>
      <View style={paginaStili.card} testID="cassetto-lettere">
        {campiSalvati.length === 0 ? (
          <Text style={paginaStili.piccolo}>
            Quando compili una lettera, l&apos;app ricorda nome, indirizzo e
            recapiti per le lettere successive. Queste informazioni restano
            solo su questo dispositivo.
          </Text>
        ) : (
          campiSalvati.map(([k, v]) => (
            <View key={k} style={styles.campoRiga}>
              <Text style={styles.campoLabel}>{CAMPI_RICORDATI_LABEL[k] ?? k}</Text>
              <Text style={paginaStili.testo}>{v}</Text>
            </View>
          ))
        )}
        <LinkSezione
          label="Vai alle lettere"
          route="/lettere"
          icon="create-outline"
          testID="cassetto-vai-lettere"
        />
      </View>

      {/* ─── 5. Salvati ─── */}
      <Text style={paginaStili.titoloSezione}>I miei salvati</Text>
      <View style={paginaStili.card} testID="cassetto-salvati">
        {salvati.length === 0 ? (
          <Text style={paginaStili.piccolo}>
            Non hai ancora salvato nulla. Quando trovi qualcosa che ti
            interessa, tocca il segnalibro: lo ritrovi qui.
          </Text>
        ) : (
          <>
            {salvati.slice(0, 5).map((s) => (
              <Pressable
                key={s.id}
                onPress={() => s.route && router.push(s.route as any)}
                style={({ pressed }) => [styles.salvatoRiga, pressed && { opacity: 0.85 }]}
                disabled={!s.route}
                accessibilityRole={s.route ? "link" : "text"}
              >
                <Ionicons name="bookmark" size={14} color={topics.lavoro.main} />
                <Text style={styles.salvatoTitolo} numberOfLines={1}>{s.titolo}</Text>
                {s.route && <Ionicons name="chevron-forward" size={14} color={colors.borderStrong} />}
              </Pressable>
            ))}
            {salvati.length > 5 && (
              <Text style={paginaStili.piccolo}>
                …e altri {salvati.length - 5} salvati.
              </Text>
            )}
          </>
        )}
        <LinkSezione
          label="Vedi tutti i salvati"
          route="/salvati"
          icon="bookmark-outline"
          testID="cassetto-vai-salvati"
        />
      </View>

      {/* ─── Avviso finale ─── */}
      <Avviso style={{ marginTop: spacing.md }}>
        Tutto quello che vedi qui resta esclusivamente su questo dispositivo:
        non viene inviato a nessuno, non c&apos;è un account e non ne esiste una
        copia online.{IS_WEB ? " Nel browser, i dati sono conservati nella memoria del browser (localStorage): se cancelli i dati del sito, andranno persi." : ""}
      </Avviso>
    </Pagina>
  );
}

// ---- Componenti interni ----

function DocumentoRiga({ file, indice, onRemove }: { file: VaultFile; indice: number; onRemove?: () => void }) {
  const haFile = !!file.uri;
  const [espanso, setEspanso] = useState(false);
  const [estraendo, setEstraendo] = useState(false);
  const [erroreEstrazione, setErroreEstrazione] = useState("");
  const [campiLocali, setCampiLocali] = useState<CampoEstratto[]>(file.campiEstratti || []);
  const haEstrazione = campiLocali.length > 0 || !!file.testoEstratto;

  const apri = async () => {
    if (!file.uri) return;
    if (IS_WEB) {
      window.open(file.uri, "_blank");
      return;
    }
    try {
      if (await Sharing.isAvailableAsync()) await Sharing.shareAsync(file.uri);
    } catch {
      /* ignora */
    }
  };

  const rimuovi = async () => {
    if (file.uri && !IS_WEB) {
      FileSystem.deleteAsync(file.uri, { idempotent: true }).catch(() => {});
    }
    await removeVaultFileEntry(file.id);
    onRemove?.();
  };

  const leggiDocumento = async () => {
    if (!file.uri) return;
    setEstraendo(true);
    setErroreEstrazione("");
    try {
      const res = await estraiDatiDocumento(file.uri, file.name);
      if ("errore" in res) {
        setErroreEstrazione(res.errore);
      } else {
        setCampiLocali(res.campi);
        await updateVaultFileData(file.id, res.campi, res.testoGrezzo);
        setEspanso(true);
        toast(
          res.campi.length > 0
            ? `Trovati ${res.campi.length} campi (${res.tempoMs}ms)`
            : "Nessun campo riconosciuto",
        );
      }
    } catch (e) {
      setErroreEstrazione(String(e));
    } finally {
      setEstraendo(false);
    }
  };

  return (
    <View testID={`cassetto-doc-${indice}`}>
      <View style={styles.docRiga}>
        <Ionicons
          name={haFile ? "document-attach" : "document-outline"}
          size={16}
          color={haFile ? topics.patronato.main : colors.borderStrong}
        />
        <View style={styles.flex}>
          <Pressable onPress={apri} disabled={!haFile}>
            <Text style={styles.docNome} numberOfLines={1}>{file.name}</Text>
          </Pressable>
          <Text style={paginaStili.piccolo}>
            {new Date(file.date).toLocaleDateString("it-IT")}
            {!haFile ? " · Solo riferimento, file originale non conservato" : ""}
            {haEstrazione ? " · Dati estratti ✓" : ""}
          </Text>
        </View>

        {/* Bottone leggi documento */}
        {haFile && (
          <Pressable
            onPress={haEstrazione ? () => setEspanso(!espanso) : leggiDocumento}
            hitSlop={8}
            disabled={estraendo}
            accessibilityLabel={haEstrazione ? "Mostra dati estratti" : `Leggi ${file.name}`}
            testID={`cassetto-doc-leggi-${indice}`}
          >
            <Ionicons
              name={estraendo ? "hourglass-outline" : haEstrazione ? (espanso ? "chevron-up" : "chevron-down") : "scan-outline"}
              size={17}
              color={estraendo ? colors.borderStrong : colors.brandPrimaryDark}
            />
          </Pressable>
        )}

        <Pressable
          onPress={rimuovi}
          hitSlop={8}
          accessibilityLabel={`Elimina ${file.name}`}
          testID={`cassetto-doc-delete-${indice}`}
        >
          <Ionicons name="trash-outline" size={17} color={colors.onSurfaceTertiary} />
        </Pressable>
      </View>

      {/* Errore estrazione */}
      {erroreEstrazione ? (
        <View style={styles.estrazioneErrore}>
          <Ionicons name="warning-outline" size={14} color={colors.error} />
          <Text style={[paginaStili.piccolo, { color: colors.error, flex: 1 }]}>
            {erroreEstrazione}
          </Text>
        </View>
      ) : null}

      {/* Campi estratti */}
      {espanso && haEstrazione && (
        <View style={styles.estrazioneBox}>
          <Text style={styles.estrazioneTitle}>Dati estratti dal documento</Text>
          <Text style={[paginaStili.piccolo, { marginBottom: spacing.sm }]}>
            I dati sono suggerimenti automatici, da verificare. Nessun dato è stato inviato a servizi esterni.
          </Text>
          {campiLocali.length > 0 ? (
            campiLocali.map((campo, ci) => (
              <View key={ci} style={styles.campoRiga}>
                <Text style={styles.campoLabel}>{campo.label}</Text>
                <Text style={styles.campoValore} selectable>{campo.valore}</Text>
                {campo.confidenza < 0.7 && (
                  <Text style={styles.campoAvviso}>⚠ da verificare</Text>
                )}
              </View>
            ))
          ) : (
            <Text style={paginaStili.piccolo}>
              Nessun campo strutturato riconosciuto. Il testo del documento è stato comunque salvato.
            </Text>
          )}

          {/* Riesegui estrazione */}
          <Pressable
            onPress={leggiDocumento}
            disabled={estraendo}
            style={({ pressed }) => [styles.rieseguiBtn, pressed && { opacity: 0.85 }]}
            testID={`cassetto-doc-riesegui-${indice}`}
          >
            <Ionicons name="refresh-outline" size={13} color={colors.brandPrimaryDark} />
            <Text style={[styles.caricaBtnText, { fontSize: 11 }]}>Rileggi documento</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

function LinkSezione({
  label,
  route,
  icon,
  testID,
}: {
  label: string;
  route: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  testID: string;
}) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(route as any)}
      style={({ pressed }) => [styles.linkSezione, pressed && { opacity: 0.85 }]}
      accessibilityRole="link"
      testID={testID}
    >
      <Ionicons name={icon} size={15} color={colors.brandPrimaryDark} />
      <Text style={styles.linkSezioneText}>{label}</Text>
      <Ionicons name="chevron-forward" size={14} color={colors.brandPrimaryDark} />
    </Pressable>
  );
}

// ---- Stili ----

const styles = StyleSheet.create({
  flex: { flex: 1 },

  badgeRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.successSoft,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radius.pill,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.onSurface,
  },

  // Documenti
  docRiga: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.surfaceSecondary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    marginBottom: spacing.xs,
  },
  docNome: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.onSurface,
  },
  docActions: {
    marginTop: spacing.sm,
  },
  caricaBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: topics.patronato.soft,
    minHeight: 46,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    alignSelf: "flex-start",
  },
  caricaBtnText: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.onSurface,
  },

  // Estrazione dati
  estrazioneBox: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    marginTop: -spacing.xs,
  },
  estrazioneTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.brandPrimaryDark,
    textTransform: "uppercase" as const,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  estrazioneErrore: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 4,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginBottom: spacing.xs,
  },
  campoRiga: {
    flexDirection: "row" as const,
    alignItems: "baseline" as const,
    gap: spacing.sm,
    paddingVertical: 3,
    flexWrap: "wrap" as const,
  },
  campoLabel: {
    fontSize: 11,
    fontWeight: "800" as const,
    color: colors.onSurfaceSecondary,
    minWidth: 110,
  },
  campoValore: {
    fontSize: 13,
    fontWeight: "700" as const,
    color: colors.onSurface,
    flex: 1,
  },
  campoAvviso: {
    fontSize: 10,
    color: colors.warning,
    fontWeight: "700" as const,
  },
  rieseguiBtn: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 4,
    marginTop: spacing.sm,
    alignSelf: "flex-start" as const,
    paddingVertical: 4,
  },

  // Pratica
  tappaRiga: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: 6,
  },
  tappaTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.onSurface,
  },

  // Scadenze
  scadenzaRiga: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: 6,
  },
  scadenzaBadge: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
    minWidth: 52,
    alignItems: "center",
  },
  scadenzaBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    color: colors.onSurface,
  },
  scadenzaData: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.brandPrimaryDark,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },

  // Lettere
  campoRiga: {
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.divider,
  },
  campoLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: colors.brandPrimaryDark,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 1,
  },

  // Salvati
  salvatoRiga: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: 6,
  },
  salvatoTitolo: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    color: colors.onSurface,
  },

  // Link sezione
  linkSezione: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    marginTop: spacing.sm,
    minHeight: 36,
  },
  linkSezioneText: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.brandPrimaryDark,
  },
});
