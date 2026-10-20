// Lavoro e disabilità: collocamento mirato, misure della Regione e del Comune attivo.
// I dati sono in `src/lib/lavoro.ts` (ogni misura ha fonte e data di controllo).

import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { STATO_BONUS, type Bonus, type StatoBonus } from "@/src/lib/bonus";
import { LAVORO_DOVE_CERCARE, lavoroDelComune } from "@/src/lib/lavoro";
import { Avviso, Intro, Pagina, paginaStili } from "@/src/components/Pagina";
import { BottoneSalva } from "@/src/components/BottoneSalva";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

const COLORI_STATO: Record<StatoBonus, { fondo: string; testo: string }> = {
  aperto: { fondo: colors.successSoft, testo: colors.onSurface },
  attivo: { fondo: colors.successSoft, testo: colors.onSurface },
  chiuso: { fondo: colors.surfaceTertiary, testo: colors.onSurface },
  "da-verificare": { fondo: colors.warningSoft, testo: colors.onSurface },
};

function Riga({ titolo, testo }: { titolo: string; testo: string }) {
  return (
    <View style={styles.riga}>
      <Text style={styles.rigaTitolo}>{titolo}</Text>
      <Text style={styles.testo}>{testo}</Text>
    </View>
  );
}

function Scheda({ b }: { b: Bonus }) {
  const stato = STATO_BONUS[b.stato];
  const c = COLORI_STATO[b.stato];
  return (
    <View style={paginaStili.card} testID={`lavoro-${b.id}`}>
      <View
        style={[styles.badge, { backgroundColor: c.fondo }]}
        accessible
        accessibilityLabel={`Stato: ${stato.etichetta}. ${stato.spiegazione}`}
      >
        <Ionicons
          name={b.stato === "chiuso" ? "lock-closed-outline" : b.stato === "da-verificare" ? "help-circle-outline" : "checkmark-circle-outline"}
          size={16}
          color={c.testo}
        />
        <Text style={[styles.badgeText, { color: c.testo }]}>{stato.etichetta}</Text>
      </View>

      <Text style={styles.titolo} accessibilityRole="header">
        {b.titolo}
      </Text>

      <Riga titolo="Per chi" testo={b.perChi} />
      <Riga titolo="Cosa si ottiene" testo={b.cosa} />
      {b.quando ? <Riga titolo="Quando" testo={b.quando} /> : null}
      <Riga titolo="Come si chiede" testo={b.comeSiChiede} />
      {b.nota ? <Text style={[styles.testo, styles.nota]}>{b.nota}</Text> : null}

      <View style={styles.piede}>
        <Pressable
          onPress={() => apri(b.fonte.url)}
          style={({ pressed }) => [styles.fonte, pressed && { opacity: 0.85 }]}
          accessibilityRole="link"
          accessibilityLabel={`Apri la fonte: ${b.fonte.label}`}
        >
          <Ionicons name="open-outline" size={16} color={colors.brandPrimaryDark} />
          <Text style={styles.fonteText}>Apri la fonte ufficiale</Text>
        </Pressable>
        <BottoneSalva
          conTesto
          elemento={{
            id: `lavoro:${b.id}`,
            titolo: b.titolo,
            sotto: STATO_BONUS[b.stato].etichetta,
            url: b.fonte.url,
            route: "/lavoro",
          }}
        />
      </View>
      <Text style={styles.controllo}>Controllato il {b.verificatoIl} · {b.fonte.label}</Text>
    </View>
  );
}

function DoveCercareRiquadro({ regione }: { regione: string }) {
  return (
    <View style={paginaStili.card} testID="lavoro-dove-cercare">
      <Text style={styles.titolo} accessibilityRole="header">
        Altre misure: dove cercare
      </Text>
      <Text style={styles.testo}>
        Questo è un punto di partenza, non l'elenco dei bandi aperti. Chiedi al centro per l'impiego
        (ufficio di collocamento mirato) e ai {comune.ente} quali percorsi e quali bandi sono attivi vicino a te.
      </Text>
      {LAVORO_DOVE_CERCARE.link.map((l) => (
        <Pressable
          key={l.url}
          onPress={() => apri(l.url)}
          style={({ pressed }) => [styles.fonte, pressed && { opacity: 0.85 }]}
          accessibilityRole="link"
          accessibilityLabel={`Apri il sito ufficiale: ${l.label}`}
        >
          <Ionicons name="open-outline" size={16} color={colors.brandPrimaryDark} />
          <Text style={styles.fonteText}>{l.label}</Text>
        </Pressable>
      ))}
      <Riga titolo={`Parole da cercare sul sito della Regione ${regione}`} testo={LAVORO_DOVE_CERCARE.cerca} />
      <Text style={styles.controllo}>Pagine ufficiali raccolte il 20/10/2026: possono essere spostate dagli enti.</Text>
    </View>
  );
}

export default function Lavoro() {
  useSezione("lavoro");
  const { nazionali, locali, regionali, regione } = lavoroDelComune();

  return (
    <Pagina titolo="Lavoro" testID="lavoro-screen" sottotitoloSalvato="Lavoro e disabilità">
      <Intro>
        Come cercare lavoro, o un percorso di inserimento, se hai una disabilità. Le informazioni arrivano da
        siti ufficiali. Requisiti e scadenze possono cambiare: prima di fare domanda conferma sempre con l'ente.
      </Intro>

      {locali.length > 0 ? (
        <>
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Vicino a te · {comune.nomeBreve}
          </Text>
          {locali.map((b) => (
            <Scheda key={b.id} b={b} />
          ))}
        </>
      ) : null}

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        In tutta Italia
      </Text>
      {nazionali.map((b) => (
        <Scheda key={b.id} b={b} />
      ))}

      {regionali.length > 0 ? (
        <>
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Regione {regione}
          </Text>
          {regionali.map((b) => (
            <Scheda key={b.id} b={b} />
          ))}
        </>
      ) : null}

      <DoveCercareRiquadro regione={regione} />

      <Avviso>
        Questa è una guida informativa, non una valutazione ufficiale. Se una misura risulta "Da confermare
        con l'ente", chiama o scrivi all'ufficio indicato prima di prepararti alla domanda.
      </Avviso>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.pill,
    marginBottom: spacing.sm,
  },
  badgeText: { fontSize: 14, fontWeight: "800" },
  titolo: {
    fontFamily: fonts.serif,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },
  riga: { marginTop: spacing.sm },
  rigaTitolo: { fontSize: 14, fontWeight: "800", color: colors.onSurface, marginBottom: 2 },
  testo: { fontSize: 15, lineHeight: 22, color: colors.onSurface },
  nota: { marginTop: spacing.md, fontWeight: "700" },
  piede: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  fonte: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 44,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.brandPrimaryDark,
    alignSelf: "flex-start",
    marginTop: spacing.sm,
  },
  fonteText: { fontSize: 14, fontWeight: "800", color: colors.brandPrimaryDark },
  controllo: { fontSize: 14, lineHeight: 20, color: colors.onSurfaceSecondary, marginTop: spacing.sm },
});
