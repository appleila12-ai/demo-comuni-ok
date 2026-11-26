import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { Bottone } from "@/src/components/Pagina";
import { creaPromemoria, dettagliCalendario, type DataOggi } from "@/src/lib/oggiCore";
import { scaricaFile } from "@/src/lib/documenti";
import { getComuneAttivo } from "@/src/config/comune";
import { colors, radius, spacing } from "@/src/theme";

// Solo esportazione: non modifica la data originale e non programma notifiche.
export function CalendarioOggi({ evento, onChiudi, verificaAttuale }: { evento: DataOggi; onChiudi: () => void; verificaAttuale: () => Promise<boolean> }) {
  const [ora, setOra] = useState(evento.ora || "");
  const [anticipo, setAnticipo] = useState(0);
  const [messaggio, setMessaggio] = useState("");
  const [dettagli, setDettagli] = useState("");
  const [busy, setBusy] = useState(false);
  async function prepara() {
    if (busy) return;
    setBusy(true); setMessaggio("");
    try {
      if (Platform.OS !== "web" || !globalThis.crypto?.subtle) throw Error("Il file non è disponibile in questo browser. Puoi creare l’evento a mano.");
      if (!await verificaAttuale()) throw Error("La data è cambiata o non è leggibile. Chiudi il calendario e controlla l’elenco.");
      const testo = dettagliCalendario(evento.data, ora);
      setDettagli(testo);
      // Identità della singola esportazione: stessa voce e stesse impostazioni => stesso UID.
      // Nessun ID grezzo, titolo, nota o Comune viene incluso nel file o inviato in rete.
      const raw = JSON.stringify([getComuneAttivo().slug, evento.id, evento.data, ora, anticipo]);
      const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw));
      const hex = Array.from(new Uint8Array(digest), n => n.toString(16).padStart(2, "0")).join("");
      const file = creaPromemoria({ data: evento.data, ora, anticipo, uid: `oggi-${hex}@tutelapp.invalid` });
      const esito = await scaricaFile("TutelApp-promemoria.ics", file, "text/calendar", false);
      setMessaggio(esito === "annullato" ? "Operazione annullata. La data salvata non cambia." : "File calendario preparato. Se è stato scaricato, aprilo e controlla che l’avviso sia attivo.");
    } catch (e) {
      setMessaggio(e instanceof Error ? e.message : "File non creato. La data salvata non cambia.");
      try { setDettagli(dettagliCalendario(evento.data, ora)); } catch { /* ora da completare */ }
    } finally { setBusy(false); }
  }
  async function copia() {
    try { await Clipboard.setStringAsync(dettagliCalendario(evento.data, ora)); setMessaggio("Dettagli copiati. Nessun evento è stato aggiunto automaticamente."); }
    catch { setMessaggio("Copia automatica non disponibile. Leggi o seleziona i dettagli qui sotto."); }
  }
  const [y, m, d] = evento.data.split("-");
  return <View style={s.box} testID="oggi-calendario">
    <Text style={s.titolo} accessibilityRole="header">Vuoi un avviso nel calendario?</Text>
    <Text style={s.testo}>Il file può non aggiungersi su alcuni telefoni. La data resta nell’app.</Text>
    <Text style={s.testo}>Data salvata: {d}/{m}/{y}. Non viene modificata qui.</Text>
    <Text style={s.testo}>Titolo nel calendario: Promemoria TutelApp</Text>
    <Text style={s.label}>Ora del promemoria · Europe/Rome</Text>
    <TextInput accessibilityLabel="Ora del promemoria, formato ore e minuti" value={ora} onChangeText={v => { setOra(v); setDettagli(""); setMessaggio(""); }} placeholder="es. 12:00" keyboardType="numbers-and-punctuation" style={s.input} testID="oggi-calendario-ora" />
    <Text style={s.label}>Quando vuoi l’avviso?</Text>
    {[{ n: 0, t: "All’ora scelta" }, { n: 15, t: "15 minuti prima" }, { n: 1440, t: "1 giorno prima" }].map(a => <Pressable key={a.n} onPress={() => setAnticipo(a.n)} accessibilityRole="radio" accessibilityState={{ checked: anticipo === a.n }} style={[s.scelta, anticipo === a.n && s.selezionata]}><Text style={s.testo}>{anticipo === a.n ? "✓ " : ""}{a.t}</Text></Pressable>)}
    <Text style={s.testo}>Il calendario scelto può sincronizzare l’evento online. Il file non contiene titolo della pratica o note.</Text>
    <Text style={s.testo}>Importare più volte può creare duplicati. Se cambi ora o anticipo, elimina il vecchio evento nel calendario.</Text>
    <Bottone label="Prepara il file calendario (.ics)" onPress={prepara} disabled={busy} testID="oggi-calendario-scarica" />
    <Text style={s.titolo}>Il file non si aggiunge?</Text>
    <Text style={s.testo}>Puoi ricreare l’evento a mano. Completa l’ora, poi copia i dettagli.</Text>
    <Text selectable style={s.testo} testID="oggi-calendario-dettagli">{dettagli || `Titolo: Promemoria TutelApp\nData: ${d}/${m}/${y}\nOra: ${ora || "da scegliere"} — Europe/Rome`}</Text>
    <Bottone label="Copia i dettagli" onPress={copia} variante="vuoto" />
    {messaggio ? <Text style={s.testo} accessibilityLiveRegion="polite" testID="oggi-calendario-messaggio">{messaggio}</Text> : null}
    <Bottone label="Chiudi calendario" onPress={onChiudi} variante="vuoto" />
  </View>;
}
const s = StyleSheet.create({ box: { padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.lg, gap: 12 }, titolo: { fontSize: 20, lineHeight: 28, fontWeight: "700", color: colors.onSurface }, testo: { fontSize: 18, lineHeight: 27, color: colors.onSurface }, label: { fontSize: 18, fontWeight: "700", color: colors.onSurface }, input: { padding: 12, minHeight: 50, borderWidth: 1, borderColor: colors.onSurfaceSecondary, borderRadius: radius.md, color: colors.onSurface, fontSize: 18 }, scelta: { minHeight: 48, padding: 10, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md }, selezionata: { borderColor: colors.brandPrimaryDark, borderWidth: 2 } });
