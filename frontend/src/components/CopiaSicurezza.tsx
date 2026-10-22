// Copia di sicurezza: invito che compare dopo ogni inserimento e sezione "Una copia dei tuoi dati"
// (salva / ripristina). La copia è un file che la persona conserva dove preferisce.
// Contiene solo ciò che esiste dentro TutelApp, non i documenti originali.

import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, radius, spacing, topics } from "@/src/theme";
import { AVVISO_ICONA, applicaCopia, consegnaCopia, dovePuoiTrovarla, leggiCopia, scegliFileCopia } from "@/src/lib/copia";

const AVVISO_DATI =
  "La copia contiene i tuoi dati personali: conservala in un posto sicuro e non condividerla.";

function Tasto({
  label,
  icon,
  onPress,
  pieno = true,
  disabled,
  testID,
}: {
  label: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
  pieno?: boolean;
  disabled?: boolean;
  testID?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      testID={testID}
      style={({ pressed }) => [
        s.tasto,
        pieno ? s.tastoPieno : s.tastoVuoto,
        disabled && { opacity: 0.5 },
        pressed && { opacity: 0.85 },
      ]}
    >
      {icon ? <Ionicons name={icon} size={18} color={colors.onSurface} /> : null}
      <Text style={s.tastoTesto}>{label}</Text>
    </Pressable>
  );
}

/** Compare dopo l'inserimento di un documento o di un appuntamento. */
export function InvitoCopia({
  onCalendario,
  onChiudi,
}: {
  onCalendario?: () => void;
  onChiudi: () => void;
}) {
  const [occupato, setOccupato] = useState(false);
  const [esito, setEsito] = useState("");

  const salva = async () => {
    setOccupato(true);
    setEsito("");
    try {
      const { nomeFile } = await consegnaCopia();
      setEsito(`Copia pronta. ${dovePuoiTrovarla(nomeFile)} ${AVVISO_DATI}`);
    } catch {
      setEsito("Non è stato possibile creare la copia. Riprova tra un attimo.");
    } finally {
      setOccupato(false);
    }
  };

  return (
    <View style={s.invito} testID="invito-copia" accessibilityLiveRegion="polite">
      <Text style={s.invitoTitolo}>Vuoi una copia al sicuro?</Text>
      <Text style={s.testo}>
        Salva una copia dei tuoi appuntamenti e dei tuoi dati: scegli tu dove tenerla.
      </Text>
      <View style={s.riga}>
        <Tasto label="Salva una copia" icon="shield-checkmark-outline" onPress={salva} disabled={occupato} testID="invito-copia-salva" />
        {onCalendario ? (
          <Tasto label="Aggiungi al calendario" icon="calendar-outline" onPress={onCalendario} pieno={false} testID="invito-copia-calendario" />
        ) : null}
        <Tasto label="Più tardi" onPress={onChiudi} pieno={false} testID="invito-copia-chiudi" />
      </View>
      {esito ? <Text style={s.esito}>{esito}</Text> : null}
    </View>
  );
}

/** Sezione per il Cassetto: salva e ripristina. */
export function CopiaSicurezzaSezione() {
  const [occupato, setOccupato] = useState(false);
  const [esito, setEsito] = useState("");
  const [inAttesa, setInAttesa] = useState<ReturnType<typeof leggiCopia>>(null);

  const salva = async () => {
    setOccupato(true);
    setEsito("");
    try {
      const { voci, nomeFile } = await consegnaCopia();
      setEsito(
        voci === 0
          ? "Non c'è ancora nulla da copiare: inserisci prima qualche appuntamento o dato."
          : `Copia pronta. ${dovePuoiTrovarla(nomeFile)} ${AVVISO_DATI}`,
      );
    } catch {
      setEsito("Non è stato possibile creare la copia. Riprova tra un attimo.");
    } finally {
      setOccupato(false);
    }
  };

  const scegli = async () => {
    setEsito("");
    setInAttesa(null);
    try {
      const testo = await scegliFileCopia();
      if (testo === null) return;
      const c = leggiCopia(testo);
      if (!c) {
        setEsito("Questo file non è una copia di TutelApp. Scegli il file «TutelApp-copia-….json».");
        return;
      }
      setInAttesa(c);
    } catch {
      setEsito("Non è stato possibile leggere il file. Riprova.");
    }
  };

  const ripristina = async () => {
    if (!inAttesa) return;
    setOccupato(true);
    try {
      const { scritte } = await applicaCopia(inAttesa);
      setInAttesa(null);
      if (Platform.OS === "web") {
        setEsito(`Ripristinato (${scritte} gruppi di dati). Ricarico la pagina…`);
        setTimeout(() => window.location.reload(), 1200);
      } else {
        setEsito(`Ripristinato (${scritte} gruppi di dati). Chiudi e riapri l'app per vedere tutto.`);
      }
    } catch {
      setEsito("Non è stato possibile ripristinare. Riprova.");
    } finally {
      setOccupato(false);
    }
  };

  return (
    <View style={s.sezione} testID="copia-sicurezza">
      <Text style={s.sezioneTitolo}>Una copia dei tuoi dati</Text>
      <Text style={s.testo}>
        Appuntamenti, scadenze, tappe della pratica, dati delle lettere e salvati esistono solo qui.
        Puoi salvarne una copia e tenerla dove preferisci: se cambi telefono o cancelli i dati del
        browser, la ripristini. I documenti originali non sono nella copia: restano dove li hai presi
        (telefono, Foto, File).
      </Text>
      <Text style={[s.testo, { fontWeight: "700" }]}>{AVVISO_ICONA}</Text>
      <View style={s.riga}>
        <Tasto label="Salva una copia" icon="shield-checkmark-outline" onPress={salva} disabled={occupato} testID="copia-salva" />
        <Tasto label="Ripristina da una copia" icon="download-outline" onPress={scegli} pieno={false} disabled={occupato} testID="copia-ripristina" />
      </View>
      {inAttesa ? (
        <View style={s.conferma} testID="copia-conferma">
          <Text style={s.testo}>
            Copia del {new Date(inAttesa.creata).toLocaleDateString("it-IT")} ({inAttesa.comune}).
            Ripristinare sostituisce i dati che ci sono ora in questa sezione del Comune attivo.
          </Text>
          <View style={s.riga}>
            <Tasto label="Sì, ripristina" onPress={ripristina} disabled={occupato} testID="copia-conferma-si" />
            <Tasto label="Annulla" pieno={false} onPress={() => setInAttesa(null)} testID="copia-conferma-no" />
          </View>
        </View>
      ) : null}
      {esito ? <Text style={s.esito} accessibilityLiveRegion="polite">{esito}</Text> : null}
    </View>
  );
}

const s = StyleSheet.create({
  invito: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderLeftWidth: 4,
    borderLeftColor: topics.patronato.main,
  },
  invitoTitolo: { fontSize: 16, fontWeight: "800", color: colors.onSurface, marginBottom: 4 },
  sezione: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  sezioneTitolo: { fontSize: 17, fontWeight: "800", color: colors.onSurface, marginBottom: 4 },
  testo: { fontSize: 14, lineHeight: 21, color: colors.onSurface, marginBottom: spacing.sm },
  esito: { fontSize: 14, lineHeight: 20, fontWeight: "700", color: colors.brandPrimaryDark, marginTop: spacing.sm },
  conferma: { marginTop: spacing.sm },
  riga: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  tasto: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    minHeight: 48,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
  },
  tastoPieno: { backgroundColor: topics.patronato.main },
  tastoVuoto: { backgroundColor: topics.patronato.soft },
  tastoTesto: { fontSize: 14, fontWeight: "800", color: colors.onSurface },
});
