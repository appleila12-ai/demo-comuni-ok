// Bonus e contributi: misure della Regione e del territorio del Comune attivo.
// I dati sono in `src/lib/bonus.ts` (ogni misura ha fonte e data di controllo).

import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { bonusDelComune, dataScadenzaLeggibile, GIORNI_SCADUTO_VISIBILE, STATO_BONUS, type Bonus, type StatoBonus } from "@/src/lib/bonus";
import { Avviso, Intro, Pagina, paginaStili } from "@/src/components/Pagina";
import { BottoneSalva } from "@/src/components/BottoneSalva";
import IN_VALIDAZIONE from "@/src/content/in-validazione.json";
import { DOVE_CERCARE, PAROLE_GENERALI, PORTALE_NAZIONALE } from "@/src/lib/doveCercare";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

const COLORI_STATO: Record<StatoBonus, { fondo: string; testo: string }> = {
  scaduto: { fondo: colors.errorSoft, testo: colors.onSurface },
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
    <View style={paginaStili.card} testID={`bonus-${b.id}`}>
      <View
        style={[styles.badge, { backgroundColor: c.fondo }]}
        accessible
        accessibilityLabel={`Stato: ${stato.etichetta}. ${stato.spiegazione}`}
      >
        <Ionicons
          name={b.stato === "scaduto" ? "alert-circle-outline" : b.stato === "chiuso" ? "lock-closed-outline" : b.stato === "da-verificare" ? "help-circle-outline" : "checkmark-circle-outline"}
          size={16}
          color={c.testo}
        />
        <Text style={[styles.badgeText, { color: c.testo }]}>
          {b.stato === "scaduto" && b.scade ? `Scaduto il ${dataScadenzaLeggibile(b.scade)}` : stato.etichetta}
        </Text>
      </View>

      {b.stato === "scaduto" && b.scade ? (
        <View style={styles.scadutoBox} accessible accessibilityRole="alert">
          <Text style={styles.scadutoTesto}>
            Questo bando è scaduto il {dataScadenzaLeggibile(b.scade)}: non si può più chiedere. Lo teniamo qui per
            {" "}{GIORNI_SCADUTO_VISIBILE} giorni, per aiutare chi ha già presentato domanda a ritrovare le informazioni.
          </Text>
        </View>
      ) : null}

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
            id: `bonus:${b.id}`,
            titolo: b.titolo,
            sotto: STATO_BONUS[b.stato].etichetta,
            url: b.fonte.url,
            route: "/bonus",
          }}
        />
      </View>
      <Text style={styles.controllo}>Controllato il {b.verificatoIl} · {b.fonte.label}</Text>
    </View>
  );
}

function DoveCercareRiquadro({ regione, nessuna }: { regione: string; nessuna: boolean }) {
  const d = DOVE_CERCARE[regione];
  return (
    <View style={paginaStili.card} testID="bonus-dove-cercare">
      <Text style={styles.titolo} accessibilityRole="header">
        {nessuna ? "Dove cercare" : "Altri bonus: dove cercare"}
      </Text>
      <Text style={styles.testo}>
        Questo è un punto di partenza, non l'elenco dei bandi aperti: non sappiamo quali siano aperti, in
        scadenza o chiusi. Alcuni contributi si chiedono al Comune, all'ambito sociale o all'ASL, altri dopo
        una valutazione sociale o sanitaria.
      </Text>
      {d ? (
        <>
          {d.link.map((l) => (
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
          <Riga titolo={`Parole da cercare (${regione})`} testo={d.cerca} />
        </>
      ) : null}
      <Riga titolo="Parole da cercare in ogni Regione" testo={PAROLE_GENERALI} />
      <Pressable
        onPress={() => apri(PORTALE_NAZIONALE.url)}
        style={({ pressed }) => [styles.fonte, pressed && { opacity: 0.85 }]}
        accessibilityRole="link"
        accessibilityLabel={`Apri il sito ufficiale: ${PORTALE_NAZIONALE.label}`}
      >
        <Ionicons name="open-outline" size={16} color={colors.brandPrimaryDark} />
        <Text style={styles.fonteText}>Avvisi nazionali del Dipartimento per la disabilità</Text>
      </Pressable>
      <Text style={styles.controllo}>Pagine ufficiali raccolte il 13/10/2026: possono essere spostate dagli enti.</Text>
    </View>
  );
}

export default function Bonus() {
  useSezione("bonus");
  const { locali, regionali, nazionali, regione } = bonusDelComune();
  const nessuna = locali.length + regionali.length + nazionali.length === 0;

  return (
    <Pagina titolo="Bonus e contributi" testID="bonus-screen" sottotitoloSalvato="Misure della Regione e del territorio">
      <Intro>
        Contributi e bonus per persone con disabilità e famiglie, raccolti da siti ufficiali. Scadenze e
        requisiti possono cambiare: prima di fare domanda conferma sempre con l'ente.
      </Intro>

      {nessuna ? (
        <View style={paginaStili.card} testID="bonus-vuoto">
          <Text style={styles.titolo}>Stiamo raccogliendo le misure per {regione}</Text>
          <Text style={styles.testo}>
            Per ora non abbiamo schede verificate per questa Regione. Chiedi ai {comune.ente} quali contributi
            sono aperti: spesso passano da lì.
          </Text>
          {!!comune.telefono && (
            <Pressable
              onPress={() => apri(`tel:${comune.telefono.replace(/\s/g, "")}`)}
              style={styles.fonte}
              accessibilityRole="button"
              accessibilityLabel={`Chiama ${comune.ente}`}
            >
              <Ionicons name="call-outline" size={16} color={colors.brandPrimaryDark} />
              <Text style={styles.fonteText}>Chiama {comune.ente} · {comune.telefono}</Text>
            </Pressable>
          )}
          {!comune.telefono && !!comune.email && (
            <Pressable
              onPress={() => apri(`mailto:${comune.email}`)}
              style={styles.fonte}
              accessibilityRole="button"
              accessibilityLabel={`Scrivi a ${comune.ente}`}
            >
              <Ionicons name="mail-outline" size={16} color={colors.brandPrimaryDark} />
              <Text style={styles.fonteText}>Scrivi a {comune.ente} · {comune.email}</Text>
            </Pressable>
          )}
          {!comune.telefono && !comune.email && !!comune.sitoWeb && (
            <Pressable
              onPress={() => apri(comune.sitoWeb)}
              style={styles.fonte}
              accessibilityRole="button"
              accessibilityLabel={`Sito ${comune.ente}`}
            >
              <Ionicons name="globe-outline" size={16} color={colors.brandPrimaryDark} />
              <Text style={styles.fonteText}>Sito {comune.ente}</Text>
            </Pressable>
          )}
        </View>
      ) : null}

      {locali.length === 0 && (IN_VALIDAZIONE as Record<string, Record<string, unknown>>)[comune.slug]?.["bonus-comunali"] ? (
        <Avviso>
          Informazione in validazione: stiamo verificando con il Comune se esistono contributi propri per le persone con
          disabilità. Nel frattempo chiedi ai Servizi Sociali: possono indicarti anche le misure dell'ambito sociale.
        </Avviso>
      ) : null}

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

      {nazionali.length > 0 ? (
        <>
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            In tutta Italia
          </Text>
          {nazionali.map((b) => (
            <Scheda key={b.id} b={b} />
          ))}
        </>
      ) : null}

      <DoveCercareRiquadro regione={regione} nessuna={nessuna} />

      {!nessuna ? (
        <Avviso>
          Questa è una guida informativa, non una valutazione ufficiale. Se una misura risulta "Da confermare
          con l'ente", chiama o scrivi all'ufficio indicato prima di prepararti alla domanda.
        </Avviso>
      ) : null}
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
  scadutoBox: {
    backgroundColor: colors.errorSoft,
    borderWidth: 1.5,
    borderColor: colors.error,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  scadutoTesto: { fontSize: 15, lineHeight: 22, fontWeight: "700", color: colors.onSurface },
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
