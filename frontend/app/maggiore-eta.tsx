// Compiere 18 anni: cosa fare con l'INPS. Parte NAZIONALE, scritta solo dalla Circolare INPS n. 42 del 17/02/2025
// (paragrafi 1.5 e 1.6, art. 25 commi 5 e 6 del D.L. 90/2014) e dalla scheda INPS «Indennità mensile di frequenza»,
// lette il 17/11/2026. Importi, tempi di pagamento e costi non sono indicati: si rimanda all'INPS o a un patronato.

import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { spacing } from "@/src/theme";
import { useSezione } from "@/src/lib/statistiche";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

const CIRCOLARE_URL =
  "https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2025/02/Circolare_14832/Allegati/15908_Circolare-numero-42-del-17-02-2025.pdf";
const FREQUENZA_URL = "https://www.inps.it/it/it/dettaglio-approfondimento.schede-informative.indennit-mensile-di-frequenza.html";

const SENZA_VISITA = [
  "Prendi l'indennità di accompagnamento per invalidi civili o per ciechi civili, oppure l'indennità di comunicazione",
  "Hai menomazioni o patologie stabilizzate o che peggiorano nel tempo, la sindrome da talidomide o la sindrome di Down",
];

const FREQUENZA = [
  "L'indennità di frequenza spetta solo a chi ha meno di 18 anni",
  "Puoi presentare domanda nei sei mesi prima del compleanno dei 18 anni: al compimento ti spettano in via provvisoria le prestazioni per i maggiorenni",
  "Se poi i controlli (visita e requisiti economici) escludono il diritto, l'INPS toglie il beneficio e può chiedere indietro le somme già pagate",
  "Puoi anche chiedere la visita sugli atti, cioè senza presentarti, allegando online la documentazione sanitaria",
  "La prestazione parte dal mese dopo il compimento dei 18 anni",
];

function Elenco({ voci }: { voci: string[] }) {
  return (
    <View style={paginaStili.card}>
      {voci.map((v) => (
        <Text key={v} style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          • {v}
        </Text>
      ))}
    </View>
  );
}

export default function MaggioreEta() {
  useSezione("maggiore-eta");
  const router = useRouter();
  return (
    <Pagina titolo="Compiere 18 anni" testID="maggiore-eta-screen" sottotitoloSalvato="Compiere 18 anni">
      <Intro>
        A 18 anni finiscono alcune prestazioni INPS per i minorenni e se ne possono chiedere altre, per i maggiorenni.
        Qui trovi cosa dice l&apos;INPS. Ogni caso è diverso: se hai dubbi chiedi all&apos;INPS o a un patronato.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Se si riceve l&apos;indennità di frequenza
      </Text>
      <Elenco voci={FREQUENZA} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Quando non serve una nuova visita
      </Text>
      <Text style={[paginaStili.testo, st.nota]}>
        Le prestazioni per i maggiorenni spettano senza altri accertamenti sanitari se, da minorenne:
      </Text>
      <Elenco voci={SENZA_VISITA} />
      <View style={paginaStili.card}>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          • Non devi presentare una nuova domanda di accertamento sanitario
        </Text>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          • Devi solo mandare all&apos;INPS i dati su reddito e situazione economica con il modulo «AP70», che trovi nella
          sezione Moduli del sito INPS
        </Text>
        <Text style={paginaStili.testo}>• L&apos;INPS può comunque fare una verifica sanitaria in seguito</Text>
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Se serve un verbale aggiornato ai 18 anni
      </Text>
      <View style={paginaStili.card}>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          Per avere un verbale con il giudizio medico aggiornato alla maggiore età, anche per il collocamento mirato
          (legge 68/1999), serve una nuova domanda di invalidità civile.
        </Text>
        <Text style={paginaStili.testo}>
          Se dall&apos;esito nasce una prestazione economica, parte dal mese dopo la nuova domanda, o da un&apos;altra data
          indicata dalle commissioni mediche.
        </Text>
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Chi presenta la domanda
      </Text>
      <View style={paginaStili.card}>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          Dopo i 18 anni la domanda online la presenta la persona stessa, oppure un delegato o chi la rappresenta
          (tutore, amministratore di sostegno), con la propria identità digitale.
        </Text>
        <Text style={paginaStili.testo}>
          Se la persona non riesce a occuparsi dei propri interessi si può chiedere un amministratore di sostegno.
        </Text>
      </View>
      <Bottone
        label="Amministratore di sostegno"
        icon="people-outline"
        variante="vuoto"
        onPress={() => router.push("/amministratore-sostegno" as any)}
        testID="maggiore-eta-amministratore"
      />

      <Avviso>
        Le regole sono quelle della circolare INPS n. 42 del 17/02/2025, lette il 17/11/2026. Importi, tempi di pagamento
        e costi non sono indicati qui. Le procedure possono cambiare con la riforma della disabilità: controlla sul sito
        INPS o chiedi a un patronato.
      </Avviso>

      <Bottone
        label="INPS · Circolare n. 42 del 17/02/2025"
        icon="open-outline"
        onPress={() => apri(CIRCOLARE_URL)}
        testID="maggiore-eta-circolare"
      />
      <Bottone
        label="INPS · Indennità mensile di frequenza"
        icon="open-outline"
        variante="vuoto"
        onPress={() => apri(FREQUENZA_URL)}
        testID="maggiore-eta-frequenza"
      />
      <Text style={[paginaStili.testo, st.fonte]}>
        Fonti: INPS, Circolare n. 42 del 17/02/2025 (paragrafi 1.5 e 1.6) e scheda «Indennità mensile di frequenza».
      </Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  nota: { marginBottom: spacing.sm },
  fonte: { marginTop: spacing.lg },
});
