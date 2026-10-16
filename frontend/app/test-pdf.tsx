// Test tecnico isolato — Fase 2: compatibilità pdfjs-dist con Expo web export.
// Questa pagina è SOLO per il test: va rimossa dopo la verifica.
// Nessun dato viene inviato all'esterno.

import { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, fonts, radius, spacing, topics } from "@/src/theme";
import { Pagina, paginaStili } from "@/src/components/Pagina";
import { estraiTestoPdf, type PdfTestResult } from "@/src/lib/pdf-extract";

const IS_WEB = Platform.OS === "web";

type Stato = "idle" | "caricamento" | "estrazione" | "completato" | "errore";

export default function TestPdf() {
  const [stato, setStato] = useState<Stato>("idle");
  const [nomeFile, setNomeFile] = useState("");
  const [risultato, setRisultato] = useState<PdfTestResult | null>(null);
  const [log, setLog] = useState<string[]>([]);

  const aggiungiLog = (msg: string) =>
    setLog((prev) => [...prev, `[${new Date().toLocaleTimeString("it-IT")}] ${msg}`]);

  const scegliPdf = async () => {
    setStato("caricamento");
    setRisultato(null);
    setLog([]);
    aggiungiLog("Apertura selettore file...");

    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      });

      if (res.canceled || !res.assets?.length) {
        aggiungiLog("Selezione annullata.");
        setStato("idle");
        return;
      }

      const file = res.assets[0];
      setNomeFile(file.name);
      aggiungiLog(`File selezionato: ${file.name} (${formatBytes(file.size ?? 0)})`);
      aggiungiLog(`URI: ${file.uri.slice(0, 60)}...`);
      aggiungiLog(`MIME: ${file.mimeType ?? "non rilevato"}`);

      if (!IS_WEB) {
        aggiungiLog("ERRORE: l'estrazione PDF è disponibile solo nella versione web.");
        setStato("errore");
        setRisultato({ ok: false, errore: "Solo web: su native pdf.js non è supportato." });
        return;
      }

      // Estrazione testo
      setStato("estrazione");
      aggiungiLog("Avvio estrazione testo con pdfjs-dist...");

      const result = await estraiTestoPdf(file.uri);
      setRisultato(result);

      if (result.ok) {
        aggiungiLog(`Estrazione completata in ${result.tempoMs}ms`);
        aggiungiLog(`Pagine: ${result.pagine}`);
        aggiungiLog(`Caratteri estratti: ${result.testo.length}`);
        aggiungiLog(`Primi 100 caratteri: "${result.testo.slice(0, 100)}..."`);
        setStato("completato");
      } else {
        aggiungiLog(`ERRORE: ${result.errore}`);
        setStato("errore");
      }
    } catch (e) {
      aggiungiLog(`Eccezione: ${String(e)}`);
      setStato("errore");
      setRisultato({ ok: false, errore: String(e) });
    }
  };

  return (
    <Pagina titolo="Test PDF (Fase 2)" testID="test-pdf-screen">
      <View style={paginaStili.card}>
        <Text style={paginaStili.testo}>
          Test tecnico isolato per verificare la compatibilità di{" "}
          <Text style={{ fontWeight: "800" }}>pdfjs-dist</Text> con Expo web export.
          {"\n\n"}Seleziona un PDF dal dispositivo: l&apos;app tenterà di estrarne il testo
          interamente in locale, senza inviare nulla a server esterni.
        </Text>

        {!IS_WEB && (
          <View style={styles.avviso}>
            <Ionicons name="warning-outline" size={16} color={colors.error} />
            <Text style={[paginaStili.piccolo, { color: colors.error, flex: 1 }]}>
              Questo test funziona solo nella versione web. Su dispositivo nativo
              l&apos;estrazione PDF non è disponibile.
            </Text>
          </View>
        )}

        <Pressable
          onPress={scegliPdf}
          disabled={stato === "estrazione"}
          style={({ pressed }) => [
            styles.bottone,
            pressed && { opacity: 0.85 },
            stato === "estrazione" && { opacity: 0.5 },
          ]}
          accessibilityRole="button"
          testID="test-pdf-scegli"
        >
          <Ionicons
            name={stato === "estrazione" ? "hourglass-outline" : "document-attach-outline"}
            size={18}
            color="#FFFFFF"
          />
          <Text style={styles.bottoneText}>
            {stato === "estrazione" ? "Estrazione in corso..." : "Scegli un PDF"}
          </Text>
        </Pressable>
      </View>

      {/* Risultato */}
      {risultato && (
        <View style={paginaStili.card}>
          <Text style={paginaStili.titoloSezione}>
            {risultato.ok ? "Estrazione riuscita" : "Estrazione fallita"}
          </Text>

          {risultato.ok ? (
            <>
              <View style={styles.metaRow}>
                <Badge label={`${risultato.pagine} pagine`} color={colors.success} />
                <Badge label={`${risultato.tempoMs}ms`} color={colors.brandPrimaryDark} />
                <Badge label={`${risultato.testo.length} car.`} color={topics.lavoro.main} />
              </View>
              <Text style={styles.testoLabel}>Testo estratto (prime 500 righe):</Text>
              <ScrollView
                style={styles.testoBox}
                nestedScrollEnabled
              >
                <Text style={styles.testoEstratto} selectable>
                  {risultato.testo.slice(0, 2000)}
                  {risultato.testo.length > 2000 ? "\n\n[...troncato...]" : ""}
                </Text>
              </ScrollView>
            </>
          ) : (
            <View style={styles.avviso}>
              <Ionicons name="close-circle" size={16} color={colors.error} />
              <Text style={[paginaStili.testo, { color: colors.error, flex: 1 }]}>
                {risultato.errore}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Log tecnico */}
      {log.length > 0 && (
        <View style={paginaStili.card}>
          <Text style={paginaStili.titoloSezione}>Log tecnico</Text>
          {log.map((l, i) => (
            <Text key={i} style={styles.logRiga} selectable>
              {l}
            </Text>
          ))}
        </View>
      )}

      {/* Diagnostica ambiente */}
      <View style={paginaStili.card}>
        <Text style={paginaStili.titoloSezione}>Ambiente</Text>
        <Text style={styles.logRiga}>Platform: {Platform.OS}</Text>
        <Text style={styles.logRiga}>React Native Web: {Platform.OS === "web" ? "sì" : "no"}</Text>
        <Text style={styles.logRiga}>
          Worker support: {typeof Worker !== "undefined" ? "sì" : "no"}
        </Text>
        <Text style={styles.logRiga}>
          Fetch API: {typeof fetch !== "undefined" ? "sì" : "no"}
        </Text>
        <Text style={styles.logRiga}>
          ArrayBuffer: {typeof ArrayBuffer !== "undefined" ? "sì" : "no"}
        </Text>
      </View>
    </Pagina>
  );
}

// ---- Componenti interni ----

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <View style={[styles.badge, { backgroundColor: color + "22" }]}>
      <Text style={[styles.badgeText, { color }]}>{label}</Text>
    </View>
  );
}

function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

// ---- Stili ----

const styles = StyleSheet.create({
  bottone: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.brandPrimaryDark,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    marginTop: spacing.md,
  },
  bottoneText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  avviso: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.errorSoft,
    padding: spacing.md,
    borderRadius: radius.sm,
    marginTop: spacing.sm,
  },
  metaRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.md,
    flexWrap: "wrap",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: radius.pill,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "800",
  },
  testoLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.brandPrimaryDark,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  testoBox: {
    maxHeight: 300,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.sm,
    padding: spacing.md,
  },
  testoEstratto: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.onSurface,
    fontFamily: Platform.OS === "web" ? "monospace" : "monospace",
  },
  logRiga: {
    fontSize: 11,
    lineHeight: 16,
    color: colors.borderStrong,
    fontFamily: Platform.OS === "web" ? "monospace" : "monospace",
    paddingVertical: 1,
  },
});
