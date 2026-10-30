// Amministratore di sostegno: parte NAZIONALE, scritta solo dalla pagina del Ministero della Giustizia
// (giustizia.it, "Come fare per: amministratore di sostegno", letta il 30/10/2026).
// Tribunale competente, moduli e costi non sono indicati in quella pagina: si rimanda alla cancelleria.

import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

import { spacing } from "@/src/theme";
import { useSezione } from "@/src/lib/statistiche";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

const GIUSTIZIA_URL = "https://www.giustizia.it/giustizia/page/it/come_fare_per_amministratore_sostegno";

const CHI_PUO_CHIEDERE = [
  "La persona stessa che ha bisogno di sostegno, anche se minore, interdetta o inabilitata",
  "Il coniuge o la persona che convive stabilmente con lei",
  "I parenti entro il quarto grado e gli affini entro il secondo grado",
  "Il tutore o il curatore",
  "Il pubblico ministero",
];

const COSA_DECIDE = [
  "Per quanto tempo dura l'incarico (può essere anche a tempo indeterminato)",
  "Di cosa si occupa l'amministratore e quali atti può compiere per conto della persona",
  "Quali atti la persona può compiere solo con l'assistenza dell'amministratore",
  "Quanto si può spendere con le somme della persona",
  "Ogni quanto l'amministratore deve riferire al giudice",
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

export default function AmministratoreSostegno() {
  useSezione("amministratore-sostegno");
  return (
    <Pagina
      titolo="Amministratore di sostegno"
      testID="amministratore-sostegno-screen"
      sottotitoloSalvato="Amministratore di sostegno"
    >
      <Intro>
        L&apos;amministratore di sostegno è una persona nominata dal giudice per aiutare chi, per una malattia o una
        menomazione fisica o psichica, non riesce a occuparsi dei propri interessi, anche solo in parte o per un
        periodo. Può essere nominato anche in previsione di una futura incapacità.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Chi può chiederlo
      </Text>
      <Elenco voci={CHI_PUO_CHIEDERE} />
      <Text style={[paginaStili.testo, st.nota]}>
        I responsabili dei servizi sanitari e sociali che seguono la persona devono proporre il ricorso al giudice
        tutelare oppure segnalare il caso al pubblico ministero.
      </Text>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Come si fa
      </Text>
      <View style={paginaStili.card}>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          • Si presenta un ricorso al giudice tutelare, che nomina l&apos;amministratore con un decreto
        </Text>
        <Text style={paginaStili.testo}>• Per il ricorso non è necessaria l&apos;assistenza di un avvocato</Text>
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Cosa stabilisce il giudice
      </Text>
      <Elenco voci={COSA_DECIDE} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Chi può essere nominato
      </Text>
      <View style={paginaStili.card}>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          Il giudice sceglie guardando solo alla cura e agli interessi della persona. Se possibile preferisce, in questo
          ordine: il coniuge non separato legalmente, la persona che convive stabilmente, il padre o la madre, un
          figlio, un fratello o una sorella, un parente entro il quarto grado, oppure la persona indicata dal genitore
          rimasto in vita.
        </Text>
        <Text style={paginaStili.testo}>
          Gli operatori dei servizi che hanno in cura la persona non possono essere nominati.
        </Text>
      </View>

      <Avviso>
        La pagina ufficiale non indica il tribunale competente, i documenti da allegare né i costi. Chiedili alla
        cancelleria del giudice tutelare del tuo Tribunale.
      </Avviso>

      <Bottone
        label="Ministero della Giustizia · Amministratore di sostegno"
        icon="open-outline"
        onPress={() => apri(GIUSTIZIA_URL)}
        testID="amministratore-sostegno-giustizia"
      />
      <Text style={[paginaStili.testo, st.fonte]}>
        Fonte: Ministero della Giustizia, pagina «Come fare per: amministratore di sostegno».
      </Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  nota: { marginTop: spacing.sm },
  fonte: { marginTop: spacing.lg },
});
