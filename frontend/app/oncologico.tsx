// Malattia oncologica: invalidità, prestazioni, lavoro e ticket. Parte NAZIONALE, scritta solo dall'opuscolo INPS
// «Diritti e tutele in caso di malattie oncologiche» (2025, senza data di edizione) e dalla Circolare INPS n. 42 del
// 17/02/2025 (par. 1.2), letti il 17/11/2026. Importi, part-time e tempi di pagamento non sono indicati: si rimanda
// all'INPS o a un patronato.

import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { spacing } from "@/src/theme";
import { useSezione } from "@/src/lib/statistiche";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

const OPUSCOLO_URL = "https://www.inps.it/content/dam/inps-site/pdf/allegatinews/2025/diritti_tutele_malattie_oncologiche.pdf";
const CIRCOLARE_URL =
  "https://www.inps.it/content/dam/inps-site/it/scorporati/circolari-e-messaggi/2025/02/Circolare_14832/Allegati/15908_Circolare-numero-42-del-17-02-2025.pdf";

const INVALIDITA = [
  "Per chi ha una malattia oncologica l'iter è più veloce (legge 80/2006): la visita deve farsi entro 15 giorni dalla domanda e l'esito produce subito i benefici",
  "Le prestazioni in denaro spettano con un'invalidità civile dal 74% al 100%; con meno del 74% si hanno prestazioni non in denaro, come protesi, ausili ed esenzione ticket",
  "Se la malattia peggiora puoi sempre presentare una nuova domanda, anche se la pratica precedente è ancora in corso",
];

const PROCEDURA = [
  "Il medico (di famiglia o curante) compila il certificato medico, indicando con precisione la malattia, e lo invia online all'INPS. Ti dà la ricevuta con il codice e una copia da portare alla visita",
  "Entro 90 giorni dal certificato presenti la domanda, solo online sul sito INPS (SPID, CNS o CIE) o tramite un patronato o un'associazione abilitata",
  "Nelle province dove la riforma è in sperimentazione il certificato introduttivo vale anche come domanda e, per le malattie oncologiche, il termine per concludere scende da 90 a 15 giorni",
];

const PRESTAZIONI = [
  "Assegno mensile: con invalidità dal 74% al 99%, tra 18 e 67 anni, con reddito personale entro la soglia annuale e senza attività lavorativa",
  "Pensione di inabilità: con invalidità al 100%, tra 18 e 67 anni e con reddito entro i limiti previsti",
  "Indennità di accompagnamento: con invalidità al 100% se non si riesce a camminare senza aiuto o a compiere gli atti quotidiani senza assistenza continua. Non ha limiti di reddito e si può avere anche lavorando",
];

const LAVORO = [
  "Il posto di lavoro si conserva per il periodo di comporto, come previsto dalla legge e dai contratti collettivi",
  "Nelle terapie salvavita, compresa la chemioterapia, non devi rispettare le fasce di reperibilità; la visita fiscale è possibile solo previo accordo con te",
  "Con invalidità civile oltre il 50% puoi avere fino a 30 giorni all'anno di congedo per cure, anche non di fila, con la documentazione adatta",
  "Con handicap grave (legge 104) hai 3 giorni di permesso al mese, anche a ore; lo stesso vale per chi assiste un familiare con handicap grave",
  "Per assistere un familiare con handicap grave c'è anche il congedo retribuito fino a 2 anni, con un ordine di priorità tra i familiari",
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

export default function Oncologico() {
  useSezione("oncologico");
  const router = useRouter();
  return (
    <Pagina titolo="Malattia oncologica" testID="oncologico-screen" sottotitoloSalvato="Malattia oncologica">
      <Intro>
        Con un tumore o un'altra malattia oncologica ci sono percorsi più rapidi per l&apos;invalidità e tutele sul lavoro.
        Qui trovi cosa dice l&apos;INPS. Ogni caso è diverso: chiedi conferma all&apos;INPS o a un patronato.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Invalidità e handicap
      </Text>
      <Elenco voci={INVALIDITA} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Come si fa la domanda
      </Text>
      <Elenco voci={PROCEDURA} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Prestazioni in denaro
      </Text>
      <Elenco voci={PRESTAZIONI} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Lavoro: permessi e congedi
      </Text>
      <Elenco voci={LAVORO} />
      <Bottone
        label="Lettera per i permessi 104"
        icon="document-text-outline"
        variante="vuoto"
        onPress={() => router.push("/lettere?id=permessi-104" as any)}
        testID="oncologico-lettera-104"
      />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Ticket
      </Text>
      <View style={paginaStili.card}>
        <Text style={paginaStili.testo}>
          Per i malati oncologici l&apos;esenzione dal ticket è totale per controlli, visite, esami e farmaci legati alla
          malattia.
        </Text>
      </View>
      <Bottone
        label="Esenzione ticket: cosa portare"
        icon="medkit-outline"
        variante="vuoto"
        onPress={() => router.push("/esenzione-ticket" as any)}
        testID="oncologico-esenzione"
      />

      <Avviso>
        Le informazioni vengono dall&apos;opuscolo INPS «Diritti e tutele in caso di malattie oncologiche» (2025, senza
        data di edizione), letto il 17/11/2026. Non sono indicati importi, part-time né tempi di pagamento. La riforma
        della disabilità cambia la procedura nelle province in sperimentazione: controlla sul sito INPS o chiedi a un
        patronato.
      </Avviso>

      <Bottone
        label="INPS · Diritti e tutele in caso di malattie oncologiche"
        icon="open-outline"
        onPress={() => apri(OPUSCOLO_URL)}
        testID="oncologico-opuscolo"
      />
      <Bottone
        label="INPS · Circolare n. 42 del 17/02/2025"
        icon="open-outline"
        variante="vuoto"
        onPress={() => apri(CIRCOLARE_URL)}
        testID="oncologico-circolare"
      />
      <Text style={[paginaStili.testo, st.fonte]}>
        Fonti: INPS, opuscolo «Diritti e tutele in caso di malattie oncologiche» e Circolare n. 42 del 17/02/2025.
      </Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  fonte: { marginTop: spacing.lg },
});
