// Scuola e sostegno: PEI, GLO, ore di sostegno ed educatore. Parte NAZIONALE, scritta solo da documenti del Ministero
// dell'Istruzione e del Merito letti il 17/11/2026: Linee guida PEI (Allegato B, D.I. 153/2023), legge 104/1992 art. 15
// come riportata nell'Allegato B, glossario iscrizioni online MIM, nota USR Campania del 26/05/2025.
// Certificazione, tempi, ore concesse e rimedi non sono indicati in queste fonti: si rimanda alla scuola e all'ASL.

import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

import { spacing } from "@/src/theme";
import { useSezione } from "@/src/lib/statistiche";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

const LINEE_GUIDA_URL = "https://www.istruzione.it/inclusione-e-nuovo-pei/allegati/ALLEGATO_%20B_%20Linee%20Guida.pdf";
const GLOSSARIO_URL = "https://www.mim.gov.it/en/glossario-iscrizioni-online";

const GLO = [
  "Gli insegnanti della classe o il consiglio di classe, compreso l'insegnante di sostegno",
  "I genitori dell'alunno, o chi esercita la responsabilità genitoriale: partecipano al gruppo",
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

export default function ScuolaSostegno() {
  useSezione("scuola-sostegno");
  return (
    <Pagina titolo="Scuola e sostegno" testID="scuola-sostegno-screen" sottotitoloSalvato="Scuola e sostegno">
      <Intro>
        A scuola, per ogni alunno con disabilità si costruisce un piano chiamato PEI. Qui trovi cosa dice il Ministero
        dell&apos;Istruzione su chi lo decide e su come si arriva alle ore di sostegno e all&apos;educatore.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Cos&apos;è il PEI
      </Text>
      <View style={paginaStili.card}>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          Il PEI è il Piano educativo individualizzato. Viene discusso, approvato e controllato da un gruppo di lavoro,
          il GLO, formato per ogni alunno con disabilità, e vale un anno scolastico.
        </Text>
        <Text style={paginaStili.testo}>
          Tiene conto dell&apos;accertamento della condizione di disabilità e del Profilo di funzionamento.
        </Text>
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Chi fa parte del GLO
      </Text>
      <Elenco voci={GLO} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Ore di sostegno
      </Text>
      <View style={paginaStili.card}>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          Il GLO prepara la proposta sulle ore di sostegno e sulle altre misure di aiuto, tenendo conto del Profilo di
          funzionamento.
        </Text>
        <Text style={paginaStili.testo}>
          Verso la fine dell&apos;anno scolastico le scuole convocano il GLO per controllare il PEI e proporre le risorse di
          sostegno per l&apos;anno dopo. Se la scuola non ti ha convocato, puoi chiedere alla segreteria quando si riunisce.
        </Text>
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Educatore
      </Text>
      <View style={paginaStili.card}>
        <Text style={paginaStili.testo}>
          Sulla base della certificazione, la scuola chiede l&apos;insegnante di sostegno e, se serve, gli assistenti
          educativi, che sono a carico dell&apos;Ente locale (di solito il Comune). Per chiedere l&apos;educatore parti quindi
          dalla scuola.
        </Text>
      </View>

      <Avviso>
        Queste fonti non indicano come si ottiene la certificazione, i tempi, quante ore vengono assegnate né cosa fare se
        mancano: chiedilo alla segreteria della scuola, all&apos;ASL e ai Servizi Sociali del Comune. Le procedure possono
        cambiare da Regione a Regione.
      </Avviso>

      <Bottone
        label="Ministero dell'Istruzione · Linee guida PEI"
        icon="open-outline"
        onPress={() => apri(LINEE_GUIDA_URL)}
        testID="scuola-sostegno-linee-guida"
      />
      <Bottone
        label="Ministero dell'Istruzione · Iscrizioni e alunni con disabilità"
        icon="open-outline"
        variante="vuoto"
        onPress={() => apri(GLOSSARIO_URL)}
        testID="scuola-sostegno-glossario"
      />
      <Text style={[paginaStili.testo, st.fonte]}>
        Fonti: Ministero dell&apos;Istruzione e del Merito, Linee guida PEI (Allegato B del D.I. 153/2023) e glossario
        iscrizioni online; nota dell&apos;Ufficio Scolastico Regionale della Campania del 26/05/2025.
      </Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  fonte: { marginTop: spacing.lg },
});
