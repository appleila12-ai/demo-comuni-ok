// "Promemoria gentili": accende o spegne gli avvisi sul telefono.
// Sull'app installata gli avvisi sono programmati sul telefono stesso;
// sul sito web si usa il calendario (bottone "Aggiungi al calendario" qui sopra).

import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, spacing } from "@/src/theme";
import { paginaStili } from "@/src/components/Pagina";
import { chiediPermesso, notificheDisponibili, statoPermesso } from "@/src/lib/notifiche";
import { aggiornaPromemoria, leggiImpostazioni, salvaImpostazioni } from "@/src/lib/promemoriaApp";
import { IMPOSTAZIONI_BASE, type Impostazioni } from "@/src/lib/promemoria";

export function PromemoriaSezione() {
  const [imp, setImp] = useState<Impostazioni>(IMPOSTAZIONI_BASE);
  const [messaggio, setMessaggio] = useState("");
  const disponibili = notificheDisponibili();

  useEffect(() => {
    leggiImpostazioni().then(setImp);
  }, []);

  const cambia = useCallback(
    async (acceso: boolean) => {
      setMessaggio("");
      if (acceso) {
        const ok = await chiediPermesso();
        if (!ok) {
          const stato = await statoPermesso();
          setMessaggio(
            stato === "negato"
              ? "Gli avvisi sono bloccati nelle impostazioni del telefono. Puoi riattivarli da lì quando vuoi."
              : "Senza il permesso del telefono non posso mandarti gli avvisi. Puoi riprovare quando vuoi.",
          );
          return;
        }
      }
      const nuove = { ...imp, attivi: acceso };
      setImp(nuove);
      await salvaImpostazioni(nuove);
      await aggiornaPromemoria();
      setMessaggio(acceso ? "Fatto. Ti scriverò poco e con garbo." : "Avvisi spenti.");
    },
    [imp],
  );

  return (
    <View style={[paginaStili.card, styles.box]} testID="promemoria-sezione">
      <View style={styles.riga}>
        <View style={styles.icona}>
          <Ionicons name="notifications-outline" size={20} color={colors.onSurface} />
        </View>
        <View style={styles.flex}>
          <Text style={styles.titolo}>Promemoria gentili</Text>
          <Text style={paginaStili.piccolo}>
            {disponibili
              ? "Un avviso sul telefono prima delle scadenze e degli appuntamenti, e ogni tanto un invito a riprendere ciò che hai lasciato a metà."
              : "Sul sito gli avvisi arrivano dal calendario del telefono: usa il bottone «Aggiungi al calendario». Gli avvisi dell'app sono disponibili nell'app installata."}
          </Text>
        </View>
        {disponibili && (
          <Switch
            value={imp.attivi}
            onValueChange={cambia}
            accessibilityLabel="Promemoria gentili sul telefono"
            testID="promemoria-switch"
          />
        )}
      </View>
      {disponibili && (
        <Text style={[paginaStili.piccolo, styles.regole]}>
          Al massimo un avviso al giorno, mai di notte (silenzio dalle {imp.silenzioDa} alle {imp.silenzioA}). Gli
          avvisi non mostrano dati personali: i dettagli si leggono solo aprendo l'app. Puoi spegnerli quando vuoi.
        </Text>
      )}
      {messaggio ? <Text style={styles.messaggio}>{messaggio}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  box: { padding: spacing.md, marginTop: spacing.md },
  riga: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  icona: { width: 38, height: 38, borderRadius: 12, alignItems: "center", justifyContent: "center", backgroundColor: colors.surfaceSecondary },
  titolo: { fontSize: 15, fontWeight: "800", color: colors.onSurface, marginBottom: 2 },
  regole: { marginTop: spacing.sm },
  messaggio: { fontSize: 13, lineHeight: 18, color: colors.onSurface, marginTop: spacing.sm },
});
