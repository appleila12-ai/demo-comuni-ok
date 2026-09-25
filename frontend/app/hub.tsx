import { useCallback, useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useFocusEffect, useRouter } from "expo-router";

import { colors, fonts, radius, spacing, topics } from "@/src/theme";
import { storage } from "@/src/utils/storage";
import { Wordmark } from "@/src/components/Brand";
import { EtichettaComune, HeaderComune } from "@/src/components/HeaderComune";
import { formatDate, listReports, Report } from "@/src/lib/reports";
import { comune } from "@/src/config/comune";
import { registra, useSezione } from "@/src/lib/statistiche";

const MOMENTO_KEY = "tutelapp:hub:momento";

type Momento = "diagnosi" | "iter" | "diritti" | null;

const MOMENTI: { id: Exclude<Momento, null>; label: string; sub: string; icon: any }[] = [
  {
    id: "diagnosi",
    label: "Ho appena ricevuto una diagnosi",
    sub: "Ti mostriamo i primi passi e come ottenere il riconoscimento",
    icon: "leaf-outline",
  },
  {
    id: "iter",
    label: "Ho già avviato una pratica",
    sub: "Segui le tappe, le scadenze e cosa preparare",
    icon: "footsteps-outline",
  },
  {
    id: "diritti",
    label: "Voglio capire i miei diritti",
    sub: "Scopri aiuti, agevolazioni e permessi che ti spettano",
    icon: "shield-checkmark-outline",
  },
];

type Link = { label: string; route: string };
type Tappa = {
  id: string;
  titolo: string;
  testo: string;
  icon: any;
  color: { main: string; soft: string };
  principale: Link;
  altri: Link[];
};

// Tutte le sezioni dell'app, messe in ordine come un percorso
const TAPPE: Tappa[] = [
  {
    id: "diagnosi",
    titolo: "Dopo la diagnosi",
    testo: "Esenzione dal ticket, malattia al lavoro, sportello sociale: le prime cose da sapere.",
    icon: "leaf-outline",
    color: topics.percorso,
    principale: { label: "Primi passi", route: "/primi-passi" },
    altri: [],
  },
  {
    id: "riconoscimento",
    titolo: "Il riconoscimento",
    testo: "Dal certificato del medico alla visita INPS, fino al verbale.",
    icon: "document-text-outline",
    color: topics.invalidita,
    principale: { label: "Il percorso passo passo", route: "/percorso" },
    altri: [{ label: "Cosa cambia con la riforma", route: "/riforma" }],
  },
  {
    id: "pratica",
    titolo: "Segui la tua pratica",
    testo: "Segna le tappe e ricevi un promemoria per le scadenze importanti.",
    icon: "footsteps-outline",
    color: topics.salute,
    principale: { label: "La mia pratica", route: "/tracker" },
    altri: [{ label: "Le mie scadenze", route: "/scadenze" }],
  },
  {
    id: "diritti",
    titolo: "I tuoi diritti",
    testo: "Aiuti economici, permessi, agevolazioni e le lettere per chiederli.",
    icon: "shield-checkmark-outline",
    color: topics.esenzioni,
    principale: { label: "A cosa hai diritto", route: "/agevolazioni" },
    altri: [
      { label: "Valutazione personalizzata", route: "/valutazione" },
      { label: "Lettere pronte", route: "/lettere" },
      { label: "Importi aggiornati", route: "/importi" },
    ],
  },
  {
    id: "progetto",
    titolo: "Il Progetto di Vita",
    testo: "Prepara i tuoi desideri da portare all'équipe che valuta (UVM) e al Comune.",
    icon: "sparkles-outline",
    color: topics.lavoro,
    principale: { label: "Il mio Progetto di Vita", route: "/progetto" },
    altri: [],
  },
  {
    id: "territorio",
    titolo: "Gli aiuti vicino a te",
    testo: "Assistenza a casa, trasporti e i contatti dei servizi del territorio.",
    icon: "home-outline",
    color: topics.patronato,
    principale: { label: "Aiuti sul territorio", route: "/territorio" },
    altri: [{ label: "Punti di supporto", route: "/contatti" }],
  },
];

/** Da quale tappa partire in base al momento scelto */
const PARTENZA: Record<Exclude<Momento, null>, string> = {
  diagnosi: "diagnosi",
  iter: "pratica",
  diritti: "diritti",
};

export default function Hub() {
  useSezione("orientarsi");
  const router = useRouter();

  const [history, setHistory] = useState<Report[]>([]);
  const [momento, setMomento] = useState<Momento>(null);
  const [guidaOpen, setGuidaOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const m = await storage.getItem<string>(MOMENTO_KEY, "");
      if (m === "diagnosi" || m === "iter" || m === "diritti") setMomento(m);
    })();
  }, []);

  // Storico valutazioni: si aggiorna ogni volta che si torna qui
  useFocusEffect(
    useCallback(() => {
      let active = true;
      (async () => {
        const list = await listReports();
        if (active) setHistory(list.slice(0, 3));
      })();
      return () => {
        active = false;
      };
    }, []),
  );

  // La risposta porta direttamente alla pagina giusta
  const pickMomento = async (m: Exclude<Momento, null>) => {
    setMomento(m);
    storage.setItem(MOMENTO_KEY, m);
    registra("momento", m);
    if (m === "diagnosi") return router.push("/percorso");
    if (m === "iter") return router.push("/tracker");
    const list = await listReports();
    if (list.length > 0) router.push(`/risultati/${list[0].id}`);
    else router.push("/valutazione");
  };

  const partenza = momento ? PARTENZA[momento] : null;
  const vai = (route: string) => router.push(route as any);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Top bar: indietro + logo + stemma */}
        <View style={styles.topBar} testID="home-topbar">
          <Pressable
            onPress={() => router.back()}
            hitSlop={12}
            style={styles.hubBackBtn}
            accessibilityLabel="Indietro"
            testID="hub-back-btn"
          >
            <Ionicons name="chevron-back" size={20} color={colors.onSurface} />
          </Pressable>
          <Wordmark size="sm" showLogo={true} logoVariant="soft" />
          <View style={styles.topRight}>
            <HeaderComune />
          </View>
        </View>

        <View style={styles.pageTitleBox} testID="home-title">
          <Text style={styles.pageTitle}>Orientarsi insieme</Text>
          <Text style={styles.pageSub}>
            Dove sei adesso e qual è il prossimo passo, con le regole della Riforma
            della disabilità (D.Lgs. 62/2024).
          </Text>
          <View style={{ marginTop: 10 }}>
            <EtichettaComune testID="hub-comune" />
          </View>
          <Text style={styles.regioneNota} testID="hub-regione">
            Informazioni per la Regione {comune.regione}
          </Text>
        </View>

        {/* 1 — Da dove partire */}
        <Text style={styles.sectionLabel}>DA DOVE VUOI PARTIRE?</Text>
        <View style={styles.momenti} testID="hub-filter-card">
          {MOMENTI.map((m) => {
            const on = momento === m.id;
            return (
              <Pressable
                key={m.id}
                onPress={() => pickMomento(m.id)}
                style={({ pressed }) => [
                  styles.momento,
                  on && styles.momentoOn,
                  pressed && { opacity: 0.9 },
                ]}
                accessibilityRole="button"
                accessibilityState={{ selected: on }}
                testID={`hub-momento-${m.id}`}
              >
                <View style={[styles.momentoIcon, on && { backgroundColor: colors.surface }]}>
                  <Ionicons name={m.icon} size={22} color={colors.brandPrimaryDark} />
                </View>
                <View style={styles.flex}>
                  <Text style={styles.momentoTitle}>{m.label}</Text>
                  <Text style={styles.momentoSub}>{m.sub}</Text>
                </View>
                <Ionicons name="arrow-forward" size={18} color={colors.brandPrimaryDark} />
              </Pressable>
            );
          })}
        </View>

        {/* 2 — Tutto il percorso, in ordine */}
        <Text style={styles.sectionLabel}>IL PERCORSO, TAPPA DOPO TAPPA</Text>
        <View style={styles.tappe} testID="hub-tappe">
          {TAPPE.map((t, i) => {
            const qui = partenza === t.id;
            const ultima = i === TAPPE.length - 1;
            return (
              <View key={t.id} style={styles.tappaRiga} testID={`hub-tappa-${t.id}`}>
                <View style={styles.tappaSx}>
                  <View style={[styles.tappaNum, { backgroundColor: qui ? colors.brandPrimaryDark : t.color.soft }]}>
                    <Text style={[styles.tappaNumText, qui && { color: "#FFFFFF" }]}>{i + 1}</Text>
                  </View>
                  {!ultima && <View style={styles.tappaLinea} />}
                </View>
                <View style={[styles.tappaCard, qui && styles.tappaCardQui]}>
                  {qui && <Text style={styles.tappaQui}>SEI QUI</Text>}
                  <View style={styles.tappaHead}>
                    <Ionicons name={t.icon} size={18} color={t.color.main} />
                    <Text style={styles.tappaTitolo}>{t.titolo}</Text>
                  </View>
                  <Text style={styles.tappaTesto}>{t.testo}</Text>
                  <Pressable
                    onPress={() => vai(t.principale.route)}
                    style={({ pressed }) => [styles.tappaBtn, pressed && { opacity: 0.85 }]}
                    accessibilityRole="button"
                    testID={`hub-card-${t.id}`}
                  >
                    <Text style={styles.tappaBtnText}>{t.principale.label}</Text>
                    <Ionicons name="arrow-forward" size={15} color="#FFFFFF" />
                  </Pressable>
                  {t.altri.length > 0 && (
                    <View style={styles.tappaAltri}>
                      {t.altri.map((l) => (
                        <Pressable
                          key={l.route}
                          onPress={() => vai(l.route)}
                          hitSlop={6}
                          accessibilityRole="link"
                          style={styles.tappaLink}
                        >
                          <Text style={styles.tappaLinkText}>{l.label}</Text>
                          <Ionicons name="chevron-forward" size={13} color={colors.brandPrimaryDark} />
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        {/* Valutazioni già fatte */}
        {history.length > 0 && (
          <View style={styles.historyBox} testID="home-history">
            <Text style={styles.historyLabel}>LE TUE VALUTAZIONI</Text>
            {history.map((r) => (
              <Pressable
                key={r.id}
                onPress={() => router.push(`/risultati/${r.id}`)}
                style={({ pressed }) => [styles.historyRow, pressed && { opacity: 0.8 }]}
                accessibilityRole="button"
                testID={`home-history-item-${r.id}`}
              >
                <View style={styles.historyIcon}>
                  <Ionicons name="document-text-outline" size={16} color={colors.brandPrimary} />
                </View>
                <View style={styles.flex}>
                  <Text style={styles.historyTitle} numberOfLines={1}>
                    {r.answers.who} · {r.answers.work}
                  </Text>
                  <Text style={styles.historyDate}>{formatDate(r.createdAt)}</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color={colors.borderStrong} />
              </Pressable>
            ))}
          </View>
        )}

        {/* Domande e parole difficili */}
        <View style={styles.quickRow}>
          <Pressable
            onPress={() => router.push("/faq")}
            style={({ pressed }) => [styles.quickCard, pressed && { opacity: 0.9 }]}
            accessibilityRole="button"
            testID="home-faq-link"
          >
            <Ionicons name="help-circle-outline" size={22} color={colors.brandPrimary} />
            <Text style={styles.quickTitle}>Domande frequenti</Text>
            <Text style={styles.quickSub}>Risposte chiare</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/faq?sezione=glossario" as any)}
            style={({ pressed }) => [styles.quickCard, pressed && { opacity: 0.9 }]}
            accessibilityRole="button"
            testID="home-glossario-link"
          >
            <Ionicons name="book-outline" size={22} color={colors.brandPrimary} />
            <Text style={styles.quickTitle}>Glossario</Text>
            <Text style={styles.quickSub}>Le parole difficili</Text>
          </Pressable>
        </View>

        {/* Questa guida fa per te? */}
        <View style={styles.guidaBox} testID="hub-guida-box">
          <Pressable
            onPress={() => setGuidaOpen((o) => !o)}
            style={styles.guidaHead}
            accessibilityRole="button"
            accessibilityState={{ expanded: guidaOpen }}
            testID="hub-guida-toggle"
          >
            <Ionicons name="help-circle-outline" size={20} color={colors.brandPrimary} />
            <Text style={styles.guidaTitle}>Questa guida fa per te?</Text>
            <Ionicons
              name={guidaOpen ? "chevron-up" : "chevron-down"}
              size={18}
              color={colors.borderStrong}
            />
          </Pressable>
          {guidaOpen && (
            <Text style={styles.guidaText} testID="hub-guida-text">
              Questa guida copre invalidità civile, cecità e sordità civile e
              Legge 104, ora unificate nello stesso accertamento INPS
              (Valutazione di Base). Se la tua condizione deriva da un
              infortunio sul lavoro o una malattia professionale, il percorso è
              gestito da INAIL, non da INPS. Se sei un dipendente pubblico e la
              tua invalidità è per causa di servizio, il percorso è diverso e va
              seguito con il tuo ente di appartenenza.
            </Text>
          )}
        </View>

        <View style={styles.datiRiga} testID="hub-dati-locali">
          <Ionicons name="phone-portrait-outline" size={16} color={colors.onSurfaceSecondary} />
          <Text style={styles.datiText}>
            Nessun account: i tuoi dati restano salvati solo su questo dispositivo.
          </Text>
        </View>

        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  regioneNota: { fontSize: 12, color: colors.onSurfaceSecondary, marginTop: 6 },
  momenti: { gap: spacing.sm, marginBottom: spacing.lg },
  momento: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  momentoOn: { borderColor: colors.brandPrimaryDark, borderWidth: 1.5, backgroundColor: colors.brandSecondary },
  momentoIcon: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.brandSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  momentoTitle: { fontSize: 15.5, fontWeight: "800", color: colors.onSurface, lineHeight: 20 },
  momentoSub: { fontSize: 12.5, lineHeight: 17, color: colors.onSurfaceSecondary, marginTop: 2 },
  tappe: { marginBottom: spacing.lg },
  tappaRiga: { flexDirection: "row", gap: spacing.md },
  tappaSx: { alignItems: "center", width: 30 },
  tappaNum: { width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center" },
  tappaNumText: { fontSize: 14, fontWeight: "800", color: colors.onSurface },
  tappaLinea: { flex: 1, width: 2, backgroundColor: colors.border, marginVertical: 4 },
  tappaCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  tappaCardQui: { borderColor: colors.brandPrimaryDark, borderWidth: 1.5 },
  tappaQui: { fontSize: 10, fontWeight: "800", letterSpacing: 1, color: colors.brandPrimaryDark, marginBottom: 4 },
  tappaHead: { flexDirection: "row", alignItems: "center", gap: 8 },
  tappaTitolo: { fontFamily: fonts.serif, fontSize: 17, fontWeight: "700", color: colors.onSurface, flex: 1 },
  tappaTesto: { fontSize: 13.5, lineHeight: 19, color: colors.onSurfaceSecondary, marginTop: 4 },
  tappaBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    backgroundColor: colors.brandPrimaryDark,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginTop: spacing.sm,
  },
  tappaBtnText: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },
  tappaAltri: { flexDirection: "row", flexWrap: "wrap", gap: 14, marginTop: 10 },
  tappaLink: { flexDirection: "row", alignItems: "center", gap: 2 },
  tappaLinkText: { fontSize: 13, fontWeight: "700", color: colors.brandPrimaryDark, textDecorationLine: "underline" },
  datiRiga: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: spacing.md, paddingHorizontal: 4 },
  datiText: { flex: 1, fontSize: 12, lineHeight: 17, color: colors.onSurfaceSecondary },
  flex: { flex: 1 },
  container: {
    flexGrow: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    alignItems: "stretch",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
    minHeight: 36,
  },
  hubBackBtn: {
    width: 32,
    height: 32,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
    marginRight: -4,
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  pageTitleBox: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  pageTitle: {
    fontFamily: fonts.serif,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "600",
    color: colors.onSurface,
    letterSpacing: -0.4,
  },
  pageSub: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.onSurfaceSecondary,
    marginTop: spacing.xs,
  },

  // Domanda filtro
  filterCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  filterQuestion: {
    fontFamily: fonts.serif,
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  filterCol: { gap: spacing.sm },
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    minHeight: 48,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.brandPrimary,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
  },
  filterBtnOn: { backgroundColor: colors.brandPrimary },
  filterBtnText: { fontSize: 14, fontWeight: "800", color: colors.brandPrimary },
  filterBtnTextOn: { color: colors.onBrandPrimary },

  // Sezioni principali (griglia 2x2)
  sectionLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.1,
    color: colors.onSurfaceTertiary,
    marginBottom: spacing.sm,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  gridCard: {
    width: "47.5%",
    flexGrow: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 0.5,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: 6,
    minHeight: 150,
  },
  gridIcon: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  gridTitle: {
    fontFamily: fonts.serif,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "700",
    color: colors.onSurface,
  },
  gridSub: {
    fontSize: 12,
    lineHeight: 17,
    color: colors.onSurfaceTertiary,
  },

  // Bottoni che aprono le pagine dedicate
  navCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    minHeight: 72,
  },
  navIcon: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  navTitle: {
    fontFamily: fonts.serif,
    fontSize: 16,
    fontWeight: "700",
    color: colors.onSurface,
  },
  navSub: {
    fontSize: 12,
    lineHeight: 17,
    color: colors.onSurfaceTertiary,
    marginTop: 2,
  },

  // Bottoni che aprono le pagine dedicate
  quickRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  quickCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
    gap: 4,
    minHeight: 88,
  },
  quickTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.onSurface,
    marginTop: 2,
  },
  quickSub: {
    fontSize: 11,
    color: colors.onSurfaceTertiary,
    lineHeight: 15,
  },

  spacer: { flex: 1, minHeight: spacing.lg },

  accountBox: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginTop: spacing.lg,
  },
  accountLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.1,
    color: colors.onSurfaceTertiary,
    marginTop: spacing.xs,
    marginBottom: spacing.xs,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    minHeight: 56,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  accountRowTitle: { fontSize: 14, fontWeight: "700", color: colors.onSurface },
  accountRowSub: { fontSize: 12, color: colors.onSurfaceTertiary, marginTop: 1 },

  guidaBox: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    marginTop: spacing.lg,
  },
  guidaHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    minHeight: 52,
  },
  guidaTitle: {
    flex: 1,
    fontFamily: fonts.serif,
    fontSize: 15,
    fontWeight: "700",
    color: colors.onSurface,
  },
  guidaText: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.onSurfaceSecondary,
    paddingBottom: spacing.md,
  },

  historyBox: {
    marginBottom: spacing.md,
  },
  historyLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: colors.onSurfaceTertiary,
    letterSpacing: 1.1,
    marginBottom: spacing.sm,
  },
  historyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.xs,
    minHeight: 48,
  },
  historyIcon: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.brandSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  historyTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.onSurface,
  },
  historyDate: {
    fontSize: 11,
    color: colors.onSurfaceTertiary,
    marginTop: 1,
  },

  // Modals
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(51,47,38,0.42)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceTertiary,
    alignSelf: "center",
    marginBottom: spacing.md,
  },
  sheetTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },
  sheetScroll: {
    maxHeight: 420,
  },
  sheetItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  sheetItemText: {
    fontSize: 15,
    color: colors.onSurfaceSecondary,
    fontWeight: "600",
  },
  sheetItemTextSelected: {
    color: colors.onSurface,
    fontWeight: "800",
  },

  // User card
});
