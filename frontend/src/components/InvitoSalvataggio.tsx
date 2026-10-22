// "Metti al sicuro i tuoi dati": invito della Home, solo sul sito web e solo se serve:
// la persona ha dati suoi o ha già detto il nome, TutelApp non è ancora sulla schermata Home, e non ha scelto "Più tardi" da poco.
// Il motivo: il browser può cancellare i dati dei siti che non si aprono per un po'.
// Dall'icona sulla schermata Home la cancellazione automatica non c'è.

import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, radius, spacing } from "@/src/theme";
import { Bottone } from "@/src/components/Pagina";
import { AVVISO_ICONA, consegnaCopia, dovePuoiTrovarla } from "@/src/lib/copia";
import { haDatiPersonali } from "@/src/lib/datiLocali";
import { useNomeUtente } from "@/src/lib/nomeUtente";
import { invitoRimandato, rimandaInvito, sistema, staInstallata, type Sistema } from "@/src/lib/persistenza";

/** conCopia = false: la persona non ha ancora dati da salvare (ha solo detto il nome), basta l'icona sulla Home. */
export function passiPer(s: Sistema, conCopia = true): string[] {
  if (s === "ios") {
    return conCopia
      ? [
          "Tocca «Salva una copia» qui sotto e conserva il file.",
          "In Safari tocca il tasto Condividi (il quadrato con la freccia) e poi «Aggiungi alla schermata Home».",
          "Apri TutelApp dalla nuova icona e, in fondo alla Home, scegli «Ripristina i tuoi dati» con il file salvato.",
        ]
      : [
          "In Safari tocca il tasto Condividi (il quadrato con la freccia) e poi «Aggiungi alla schermata Home».",
          "Apri TutelApp dalla nuova icona.",
        ];
  }
  return conCopia
    ? [
        "Tocca «Salva una copia» qui sotto e conserva il file.",
        "Nel menu del browser (i tre puntini) scegli «Installa app» oppure «Aggiungi a schermata Home».",
      ]
    : ["Nel menu del browser (i tre puntini) scegli «Installa app» oppure «Aggiungi a schermata Home»."];
}

export function InvitoSalvataggio() {
  const [visibile, setVisibile] = useState(false);
  const [sis, setSis] = useState<Sistema>("altro");
  const [esito, setEsito] = useState("");
  const [haDati, setHaDati] = useState(false);
  const nome = useNomeUtente();

  useEffect(() => {
    if (Platform.OS !== "web") return;
    const s = sistema();
    // Sul computer il browser non cancella i dati come su iPhone: nessun invito
    if (s === "altro" || staInstallata() || invitoRimandato()) return;
    let vivo = true;
    // L'invito compare se la persona ha dati suoi OPPURE ha già detto il nome: anche il nome
    // si perde se il browser cancella i dati del sito
    haDatiPersonali().then((ha) => {
      if (vivo && (ha || nome)) {
        setSis(s);
        setHaDati(ha);
        setVisibile(true);
      }
    });
    return () => {
      vivo = false;
    };
  }, [nome]);

  if (!visibile) return null;

  const salva = async () => {
    setEsito("");
    try {
      const { voci, nomeFile } = await consegnaCopia();
      setEsito(
        voci === 0
          ? "Non c'è ancora nulla da copiare."
          : `Copia pronta. ${dovePuoiTrovarla(nomeFile)} Conservala in un posto sicuro.`,
      );
    } catch {
      setEsito("Non è stato possibile creare la copia. Riprova tra un attimo.");
    }
  };

  const passi = passiPer(sis, haDati);

  return (
    <View style={styles.box} testID="invito-salvataggio" accessibilityLiveRegion="polite">
      <View style={styles.titoloRiga}>
        <Ionicons name="shield-checkmark-outline" size={20} color={colors.brandPrimaryDark} />
        <Text style={styles.titolo}>{haDati ? "Metti al sicuro i tuoi dati" : "Metti TutelApp sulla schermata Home"}</Text>
      </View>
      <Text style={styles.testo}>
        {haDati
          ? "I tuoi dati stanno solo su questo telefono. Il browser potrebbe cancellarli se non apri il sito per un po': con TutelApp sulla schermata Home questo non succede."
          : "Così la trovi con un tocco e il browser non cancella il tuo nome e le tue scelte, anche se non la apri per un po'."}
      </Text>
      <Text style={[styles.testo, { fontWeight: "700" }]}>{AVVISO_ICONA}</Text>
      {passi.map((p, i) => (
        <Text key={i} style={styles.passo}>
          {i + 1}. {p}
        </Text>
      ))}
      {esito ? <Text style={styles.esito}>{esito}</Text> : null}
      <View style={styles.azioni}>
        {haDati ? (
          <Bottone label="Salva una copia" icon="shield-checkmark-outline" onPress={salva} testID="invito-salvataggio-copia" />
        ) : null}
        <Bottone
          label="Più tardi"
          variante="vuoto"
          onPress={() => {
            rimandaInvito(30);
            setVisibile(false);
          }}
          testID="invito-salvataggio-dopo"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.surface,
    borderColor: colors.brandPrimaryDark,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    gap: 6,
  },
  titoloRiga: { flexDirection: "row", alignItems: "center", gap: 8 },
  titolo: { fontSize: 15, fontWeight: "800", color: colors.onSurface },
  testo: { fontSize: 14, lineHeight: 20, color: colors.onSurface },
  passo: { fontSize: 14, lineHeight: 20, color: colors.onSurface },
  esito: { fontSize: 13, fontWeight: "700", color: colors.brandPrimaryDark },
  azioni: { gap: 8, marginTop: 4 },
});
