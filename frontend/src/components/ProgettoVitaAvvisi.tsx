// Avvisi della pagina "Il mio Progetto di Vita":
//  - AvvisoComplessita: in cima e in fondo, per tutti i Comuni
//  - StatoRiformaProgetto: solo per i Comuni con `mostraStatoRiformaInProgetto`
//  - ContattoProgettoVitaCard: solo per i Comuni con `contattoProgettoVita`

import type { ComponentProps } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { RIFORMA_FONTE, RIFORMA_VERIFICATA, statoRiforma } from "@/src/lib/riformaTerritorio";

export function AvvisoComplessita({ posizione }: { posizione: "inizio" | "fine" }) {
  const inizio = posizione === "inizio";
  return (
    <View
      style={[styles.box, !inizio && { marginTop: spacing.md }]}
      testID={`progetto-avviso-${posizione}`}
    >
      <View style={styles.boxHead}>
        <Ionicons name="people-outline" size={20} color={colors.accentDark} />
        <Text style={styles.boxTitle}>
          {inizio ? "Prima di iniziare" : "Ricorda: non sei da solo"}
        </Text>
      </View>
      {inizio ? (
        <>
          <Text style={styles.boxText}>
            Il Progetto di vita è uno strumento complesso: tiene insieme salute,
            casa, scuola o lavoro, relazioni, tempo libero e i sostegni che
            servono.
          </Text>
          <Text style={styles.boxText}>
            Questo questionario non è il Progetto di vita: ti mostra gli ambiti
            su cui ti verranno fatte domande, così arrivi preparato. Il
            Progetto vero si costruisce con un&apos;équipe, insieme a una persona
            che ti accompagni: un familiare, un operatore dei servizi sociali o
            un&apos;associazione.
          </Text>
          <Text style={styles.boxSmall}>
            Non sostituisce la richiesta ufficiale né il colloquio con
            l&apos;Ambito Territoriale Sociale (ATS).
          </Text>
        </>
      ) : (
        <Text style={styles.boxText}>
          Quello che hai appuntato serve a orientare il dialogo, non a decidere
          da solo. Porta il riepilogo all&apos;incontro e fatti accompagnare da
          una persona di fiducia o da chi già ti segue: servizi sociali o
          associazione. Insieme è più semplice capire quali sostegni chiedere.
        </Text>
      )}
    </View>
  );
}

export function StatoRiformaProgetto() {
  if (!comune.mostraStatoRiformaInProgetto) return null;
  const stato = statoRiforma();
  return (
    <View
      style={[styles.riforma, stato.attiva ? styles.riformaOn : styles.riformaOff]}
      testID="progetto-stato-riforma"
    >
      <View style={styles.boxHead}>
        <Ionicons
          name={stato.attiva ? "checkmark-circle-outline" : "time-outline"}
          size={20}
          color={colors.onSurface}
        />
        <Text style={styles.boxTitle}>
          {stato.attiva
            ? "Riforma attiva"
            : `Provincia di ${comune.nomeBreve}: non in sperimentazione`}
        </Text>
      </View>
      <Text style={styles.boxText}>{stato.frase}</Text>
      {!stato.attiva && (
        <Text style={styles.boxText}>
          Il progetto individuale si può già chiedere oggi al Comune (legge
          328/2000, art. 14): rivolgiti al {comune.ente} {comune.delEnte}. Le
          indicazioni sulla richiesta online più sotto riguardano la riforma.
        </Text>
      )}
      <Text style={styles.boxSmall}>
        Fonte: {RIFORMA_FONTE}. Verificato il {RIFORMA_VERIFICATA}.
      </Text>
    </View>
  );
}

function Riga({
  icon,
  label,
  onPress,
  a11y,
}: {
  icon: ComponentProps<typeof Ionicons>["name"];
  label: string;
  onPress?: () => void;
  a11y?: string;
}) {
  const content = (
    <>
      <Ionicons name={icon} size={18} color={colors.brandPrimary} />
      <Text style={[styles.rigaText, onPress && styles.rigaLink]}>{label}</Text>
    </>
  );
  if (!onPress) return <View style={styles.riga}>{content}</View>;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.riga, pressed && { opacity: 0.7 }]}
      accessibilityRole="link"
      accessibilityLabel={a11y ?? label}
    >
      {content}
    </Pressable>
  );
}

const apri = (url: string) => Linking.openURL(url).catch(() => {});

export function ContattoProgettoVitaCard() {
  const c = comune.contattoProgettoVita;
  if (!c) return null;
  return (
    <View style={styles.contatto} testID="progetto-contatto">
      <Text style={styles.contattoLabel}>Chi può accompagnarti a {comune.nomeBreve}</Text>
      <Text style={styles.contattoNome}>{c.nome}</Text>
      <Text style={styles.boxText}>{c.descrizione}</Text>
      {c.referente && <Riga icon="person-outline" label={c.referente} />}
      {c.indirizzo && <Riga icon="location-outline" label={c.indirizzo} />}
      {c.orari && <Riga icon="time-outline" label={c.orari} />}
      {c.telefono && (
        <Riga
          icon="call-outline"
          label={c.telefono}
          a11y={`Chiama ${c.nome}, ${c.telefono}`}
          onPress={() => apri(`tel:${c.telefono!.replace(/\s/g, "")}`)}
        />
      )}
      {c.email && (
        <Riga
          icon="mail-outline"
          label={c.email}
          a11y={`Scrivi a ${c.email}`}
          onPress={() => apri(`mailto:${c.email}`)}
        />
      )}
      {c.sportello && (
        <View style={styles.sportello}>
          <Text style={styles.sportelloNome}>{c.sportello.nome}</Text>
          <Text style={styles.boxText}>{c.sportello.descrizione}</Text>
          {c.sportello.email && (
            <Riga
              icon="mail-outline"
              label={c.sportello.email}
              a11y={`Scrivi allo sportello, ${c.sportello.email}`}
              onPress={() => apri(`mailto:${c.sportello!.email}`)}
            />
          )}
        </View>
      )}
      {c.sitoWeb && (
        <Riga
          icon="open-outline"
          label="Sito dell'associazione"
          onPress={() => apri(c.sitoWeb!)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.accentSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  boxHead: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  boxTitle: {
    flex: 1,
    fontFamily: fonts.serif,
    fontSize: 16,
    fontWeight: "700",
    color: colors.onSurface,
  },
  boxText: { fontSize: 14, lineHeight: 21, color: colors.onSurface },
  boxSmall: { fontSize: 14, lineHeight: 20, color: colors.onSurfaceTertiary },

  riforma: {
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    gap: spacing.sm,
    borderWidth: 1,
  },
  riformaOn: { backgroundColor: colors.successSoft, borderColor: colors.success },
  riformaOff: { backgroundColor: colors.surface, borderColor: colors.borderStrong },

  contatto: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  contattoLabel: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.onSurfaceTertiary,
  },
  contattoNome: {
    fontFamily: fonts.serif,
    fontSize: 17,
    fontWeight: "700",
    color: colors.onSurface,
  },
  riga: { flexDirection: "row", alignItems: "center", gap: spacing.sm, minHeight: 32 },
  rigaText: { flex: 1, fontSize: 14, lineHeight: 20, color: colors.onSurface },
  rigaLink: { color: colors.brandPrimary, fontWeight: "700", textDecorationLine: "underline" },
  sportello: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  sportelloNome: { fontSize: 15, fontWeight: "700", color: colors.onSurface },
});
