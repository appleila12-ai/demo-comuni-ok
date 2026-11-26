import { useCallback, useEffect, useRef, useState } from "react";
import { AppState, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { chiavePerComune } from "@/src/config/comune";
import { storage } from "@/src/utils/storage";
import { prossimoPasso, type Suggerimento } from "@/src/lib/prossimoPasso";
import { PROGETTO_KEY } from "@/src/lib/progetto";
import { SCADENZE_KEY, calcolaEventi, type Scadenza } from "@/src/lib/scadenze";
import { dataValida, decodificaDateOggi, oggiRoma, scegliDate, type DataOggi } from "@/src/lib/oggiCore";
import { CalendarioOggi } from "@/src/components/CalendarioOggi";
import { colors, radius, spacing } from "@/src/theme";

const DISCRETO = "tutelapp:oggi-discreto";
// Oggi legge gli archivi esistenti: non duplica e non sovrascrive date o pratiche.
export function OggiHome() {
  const router = useRouter();
  const privacyOverride = useRef<boolean | null>(null);
  const privacySaving = useRef(false);
  const [stato, setStato] = useState<{ pronto: boolean; nascosto: boolean; passo: Suggerimento | null; date: DataOggi[]; errore: string }>({ pronto: false, nascosto: true, passo: null, date: [], errore: "" });
  const [calendario, setCalendario] = useState<DataOggi | null>(null);
  const [avviso, setAvviso] = useState("");
  const [tutte, setTutte] = useState(false);
  const [giorno, setGiorno] = useState(oggiRoma());
  const carica = useCallback(async () => {
    const [tracker, verbale, progetto, rawDate, nascosto] = await Promise.all([
      storage.getItem<string>("tutelapp:tracker", ""), storage.getItem<string>("tutelapp:verbale", ""), storage.getItem<string>(PROGETTO_KEY, ""), AsyncStorage.getItem(chiavePerComune(SCADENZE_KEY)), storage.getItem<boolean>(DISCRETO, false),
    ]);
    let date: DataOggi[] = [], errore = "";
    try {
      const lista: unknown = decodificaDateOggi(rawDate);
      if (!Array.isArray(lista)) throw Error();
      // Non correggere in silenzio una data corrotta (es. 30 febbraio).
      if (lista.some(x => !x || !["altro", "isee", "verbale", "revisione", "cude"].includes(x.tipo) || typeof x.id !== "string" || (x.tipo !== "isee" && !dataValida(x.data)))) throw Error();
      date = calcolaEventi(lista as Scadenza[]).map(e => ({ id: e.id, titolo: e.titolo, data: `${e.data.getFullYear()}-${String(e.data.getMonth() + 1).padStart(2, "0")}-${String(e.data.getDate()).padStart(2, "0")}`, ora: e.ora, personale: e.appuntamento === true }));
    } catch { errore = "Non riesco a leggere le date salvate. Apri Le mie scadenze per controllarle. Nessun dato è stato modificato."; }
    const suggerimento = prossimoPasso({ tracker, verbale, progetto });
    const passo = !suggerimento.predefinito && suggerimento.tipo !== "neutro" ? suggerimento : null;
    return { pronto: true, nascosto: privacyOverride.current ?? (nascosto === true), passo, date, errore };
  }, []);
  useFocusEffect(useCallback(() => {
    let attivo = true;
    const aggiorna = () => carica().then(s => { if (attivo) { setStato(s); setGiorno(oggiRoma()); } }).catch(() => { if (attivo) setStato(s => ({ ...s, pronto: true, errore: "Lettura non riuscita. Le date mostrate potrebbero non essere aggiornate. Riapri la pagina per riprovare." })); });
    aggiorna();
    const timer = setInterval(aggiorna, 60000);
    const subscription = AppState.addEventListener("change", s => { if (s === "active") aggiorna(); });
    if (Platform.OS === "web") window.addEventListener("focus", aggiorna);
    return () => { attivo = false; clearInterval(timer); subscription.remove(); if (Platform.OS === "web") window.removeEventListener("focus", aggiorna); };
  }, [carica]));
  useEffect(() => {
    if (stato.nascosto) { setCalendario(null); return; }
    if (calendario && !stato.date.some(e => e.id === calendario.id && e.data === calendario.data && e.ora === calendario.ora)) {
      setCalendario(null); setAvviso("La data è cambiata. Controlla l’elenco prima di preparare il calendario.");
    }
  }, [stato, calendario]);
  async function discreto() {
    if (privacySaving.current) return;
    privacySaving.current = true;
    const next = !stato.nascosto;
    privacyOverride.current = next;
    // Nascondere è immediato; un errore di persistenza non riporta dati sullo schermo.
    setCalendario(null); setStato(s => ({ ...s, nascosto: next }));
    const ok = await storage.setItem(DISCRETO, next);
    setAvviso(ok ? "" : "La scelta non è stata salvata. Alla riapertura i dettagli potrebbero essere visibili.");
    privacySaving.current = false;
  }
  const elenco = scegliDate(stato.date, giorno);
  const dataBreve = (iso: string) => { const [y, m, d] = iso.split("-"); return `${d}/${m}/${y}`; };
  const link = (testo: string, route: string, id?: string) => <Pressable onPress={() => router.push(route as any)} accessibilityRole="button" style={s.bottone} testID={id}><Text style={s.bottoneTesto}>{testo}</Text></Pressable>;
  return <View style={s.box} testID="home-oggi">
    <View style={s.riga}><Text style={s.titolo} accessibilityRole="header">Oggi</Text>{stato.pronto ? <Pressable onPress={discreto} accessibilityRole="button" style={s.discreto}><Text style={s.link}>{stato.nascosto ? "Mostra Oggi" : "Nascondi Oggi"}</Text></Pressable> : null}</View>
    {stato.errore ? <Text style={s.testo} accessibilityLiveRegion="polite">{stato.errore}</Text> : null}
    {!stato.pronto ? <Text style={s.testo}>Leggo i dati salvati in questo browser…</Text> : stato.nascosto ? <Text style={s.testo}>Dettagli di Oggi nascosti. Questo non blocca l’accesso e non nasconde le altre sezioni dell’app.</Text> : <>
      <Text style={s.testo}>Qui ritrovi cosa fare. Questa schermata non invia avvisi quando l’app è chiusa.</Text>
      <Text style={s.sottotitolo} accessibilityRole="header">Il prossimo passo</Text>
      {stato.passo?.route ? <>
        <Text style={s.testo}>Hai già iniziato un percorso su questo dispositivo. Puoi controllare il punto salvato.</Text>
        {link(stato.passo.tipo === "tracker" ? "Apri la mia pratica" : stato.passo.tipo === "verbale" ? "Apri il mio verbale" : "Apri il Progetto di Vita", stato.passo.route, "home-oggi-passo")}
      </> : <>
        <Text style={s.testo}>Puoi salvare una data personale, poi ritrovarla qui.</Text>
        {link("Aggiungi una data", "/scadenze", "home-oggi-prima-data")}
      </>}
      {elenco.passate.length ? <View style={s.avviso}><Text style={s.testo}>Date passate ancora nell’elenco: {elenco.passate.length}. Controlla se conservarle. L’app non sa se hai completato l’azione.</Text>{link("Controlla le date passate", "/scadenze")}</View> : null}
      <Text style={s.sottotitolo} accessibilityRole="header">Le date entro 14 giorni</Text>
      {!elenco.vicine.length && !stato.errore ? <Text style={s.testo}>Nessuna data salvata nei prossimi 14 giorni.</Text> : null}
      {(tutte ? elenco.vicine : elenco.vicine.slice(0, 3)).map(e => <View key={e.id} style={s.data}>
        <Text style={s.dataTitolo}>{e.titolo}</Text>
        <Text style={s.testo}>{dataBreve(e.data)}{e.ora ? `, ore ${e.ora}` : ""}</Text>
        <Text style={s.testo}>{e.personale ? "Data inserita da te" : "Data indicativa calcolata dall’app: controlla il documento di riferimento."}</Text>
        <Pressable onPress={() => { setCalendario(e); setAvviso(""); }} accessibilityRole="button" style={s.bottone} testID={`oggi-calendario-${e.id}`}><Text style={s.bottoneTesto}>Prepara un promemoria</Text></Pressable>
      </View>)}
      {elenco.vicine.length > 3 ? <Pressable onPress={() => setTutte(!tutte)} accessibilityRole="button" accessibilityState={{ expanded: tutte }} style={s.discreto}><Text style={s.link}>{tutte ? "Mostra meno date" : `Mostra tutte le ${elenco.vicine.length} date vicine`}</Text></Pressable> : null}
      {elenco.successive ? <Text style={s.testo}>Altre date oltre i 14 giorni: {elenco.successive}.</Text> : null}
      {link("Apri Le mie scadenze", "/scadenze", "home-oggi-scadenze")}
      {calendario ? <CalendarioOggi key={`${calendario.id}-${calendario.data}-${calendario.ora}`} evento={calendario} verificaAttuale={async () => { const attuale = await carica(); return !attuale.nascosto && !attuale.errore && attuale.date.some(e => e.id === calendario.id && e.data === calendario.data && e.ora === calendario.ora); }} onChiudi={() => setCalendario(null)} /> : null}
      <Text style={s.piccolo}>Dati letti dall’archivio già usato dall’app. Nessun account richiesto da Oggi. Le copie e il ripristino restano nella sezione già presente in Home.</Text>
    </>}
    {avviso ? <Text style={s.testo} accessibilityLiveRegion="polite">{avviso}</Text> : null}
  </View>;
}
const s = StyleSheet.create({ box: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.lg, gap: 12 }, riga: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }, titolo: { fontSize: 28, lineHeight: 36, fontWeight: "800", color: colors.onSurface }, sottotitolo: { fontSize: 21, lineHeight: 29, fontWeight: "700", color: colors.onSurface }, testo: { fontSize: 18, lineHeight: 27, color: colors.onSurface }, piccolo: { fontSize: 16, lineHeight: 24, color: colors.onSurfaceSecondary }, link: { fontSize: 18, color: colors.brandPrimaryDark, textDecorationLine: "underline" }, discreto: { paddingVertical: 10, minHeight: 48, justifyContent: "center" }, bottone: { backgroundColor: colors.brandPrimaryDark, minHeight: 50, borderRadius: radius.md, padding: 12, alignItems: "center", justifyContent: "center" }, bottoneTesto: { color: "#FFFFFF", fontSize: 18, fontWeight: "700", textAlign: "center" }, data: { borderTopWidth: 1, borderColor: colors.border, paddingTop: 14, gap: 8 }, dataTitolo: { fontSize: 19, lineHeight: 27, fontWeight: "700", color: colors.onSurface }, avviso: { borderLeftWidth: 3, borderColor: colors.brandPrimaryDark, paddingLeft: 12, gap: 10 } });
