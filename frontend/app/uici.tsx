// UICI: sede per il Comune attivo (ciechi e ipovedenti).
// Dati: src/content/uici-sedi.json (solo da pagine ufficiali UICI, con data di consultazione).
// Accessibilità: testi da 14 in su, aree toccabili da almeno 48, nessuna informazione solo col colore,
// ordine di lettura = ordine a schermo, ogni azione ha un'etichetta parlata completa.

import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { DATA_UICI, fontiSede, nomeSede, numeroDaChiamare, sediDelComune, type SedeUici } from "@/src/lib/uici";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

function Azione({
  icon,
  testo,
  etichetta,
  onPress,
}: {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  testo: string;
  etichetta: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [st.azione, pressed && { opacity: 0.85 }]}
      accessibilityRole="button"
      accessibilityLabel={etichetta}
    >
      <Ionicons name={icon} size={20} color={colors.brandPrimaryDark} />
      <Text style={st.azioneTesto}>{testo}</Text>
    </Pressable>
  );
}

function Riga({ titolo, valore }: { titolo: string; valore: string }) {
  return (
    <Text style={st.riga}>
      <Text style={st.rigaTitolo}>{titolo}: </Text>
      {valore}
    </Text>
  );
}

function SchedaSede({ s }: { s: SedeUici }) {
  const nome = nomeSede(s);
  const fonti = fontiSede(s);
  return (
    <View style={paginaStili.card} testID={`uici-${s.id}`}>
      <Text style={st.nome} accessibilityRole="header">
        {nome}
      </Text>
      {s.parziale ? (
        <Text style={st.riga}>Questa sezione segue una parte della provincia.</Text>
      ) : null}
      {s.ind ? <Riga titolo="Indirizzo" valore={s.ind} /> : null}
      {s.orari ? <Riga titolo="Orari" valore={s.orari} /> : null}
      {s.servizi ? <Riga titolo="Servizi indicati" valore={s.servizi} /> : null}

      {(s.tel ?? []).map((t) => (
        <Azione
          key={t}
          icon="call-outline"
          testo={`Telefono ${t}`}
          etichetta={`Chiama ${nome}, numero ${t}`}
          onPress={() => apri(`tel:${numeroDaChiamare(t)}`)}
        />
      ))}
      {(s.email ?? []).map((e) => (
        <Azione
          key={e}
          icon="mail-outline"
          testo={`Email ${e}`}
          etichetta={`Scrivi a ${nome}, indirizzo ${e}`}
          onPress={() => apri(`mailto:${e}`)}
        />
      ))}
      {(s.pec ?? []).map((e) => (
        <Azione
          key={e}
          icon="shield-checkmark-outline"
          testo={`PEC ${e}`}
          etichetta={`Scrivi in posta certificata a ${nome}, indirizzo ${e}`}
          onPress={() => apri(`mailto:${e}`)}
        />
      ))}
      {s.sito ? (
        <Azione
          icon="globe-outline"
          testo="Sito ufficiale"
          etichetta={`Apri il sito ufficiale di ${nome}`}
          onPress={() => apri(s.sito!)}
        />
      ) : null}

      <Text style={st.fonte}>
        Fonte: UICI, consultata il {DATA_UICI}.
      </Text>
      {fonti.slice(0, 1).map((u) => (
        <Azione
          key={u}
          icon="document-text-outline"
          testo="Apri la pagina della fonte"
          etichetta={`Apri la pagina ufficiale UICI da cui vengono i dati di ${nome}`}
          onPress={() => apri(u)}
        />
      ))}
    </View>
  );
}

export default function Uici() {
  useSezione("uici");
  const router = useRouter();
  const { principali, regionale, nazionale, piuSezioni, soloRegionale } = sediDelComune();

  return (
    <Pagina titolo="UICI: ciechi e ipovedenti" testID="uici" sottotitoloSalvato="Sede UICI del tuo Comune">
      <Intro>
        L'Unione Italiana dei Ciechi e degli Ipovedenti (UICI) ha sezioni in tutta Italia. Ti possono dare informazioni
        e aiuto su diritti, ausili, autonomia e vita quotidiana. Qui trovi la sede per {comune.nomeBreve}.
      </Intro>

      {soloRegionale ? (
        <Avviso>
          Per {comune.nomeBreve} non abbiamo ancora una sezione provinciale verificata. Ti indichiamo il riferimento
          regionale: chiedi lì a quale sezione rivolgerti.
        </Avviso>
      ) : null}
      {piuSezioni ? (
        <Avviso>
          In questa provincia ci sono più sezioni UICI e non possiamo dirti quale sia la tua: se hai dubbi, chiama
          una delle sezioni e ti indicheranno quella giusta.
        </Avviso>
      ) : null}

      {principali.length ? (
        <Text style={paginaStili.titoloSezione} accessibilityRole="header">
          {principali.length > 1 ? "Le sedi UICI della tua zona" : "La sede UICI della tua zona"}
        </Text>
      ) : null}
      {principali.map((s) => (
        <SchedaSede key={s.id} s={s} />
      ))}

      {regionale ? (
        <>
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Riferimento regionale
          </Text>
          <SchedaSede s={regionale} />
        </>
      ) : null}

      {nazionale ? (
        <>
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Sede nazionale
          </Text>
          <SchedaSede s={nazionale} />
        </>
      ) : null}

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Muoverti in autonomia
      </Text>
      <Text style={st.riga}>
        In alcune città ci sono i radiofari del progetto LETIsmart. Guarda se ce ne sono dove vivi.
      </Text>
      <Bottone label="Radiofari e percorsi accessibili" icon="navigate-outline" onPress={() => router.push("/radiofari")} />

      <Text style={st.fonte}>
        Orari e recapiti possono cambiare. Se qualcosa non risponde o è sbagliato, scrivi a info@tutelapp.it e lo
        correggiamo subito.
      </Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  nome: { fontSize: 17, lineHeight: 24, fontWeight: "700", color: colors.onSurface, marginBottom: spacing.sm },
  riga: { fontSize: 15, lineHeight: 22, color: colors.onSurface, marginBottom: spacing.xs },
  rigaTitolo: { fontWeight: "700" },
  fonte: { fontSize: 14, lineHeight: 20, color: colors.onSurface, marginTop: spacing.sm, marginBottom: spacing.xs },
  azione: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    minHeight: 48,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginTop: spacing.xs,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.brandPrimaryDark,
    backgroundColor: colors.surface,
  },
  azioneTesto: { flex: 1, fontSize: 15, lineHeight: 21, fontWeight: "600", color: colors.brandPrimaryDark },
});
