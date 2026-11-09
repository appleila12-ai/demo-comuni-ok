// Esenzione ticket per patologia cronica o invalidità: cosa portare, in base al caso.
// Contenuto della scheda ufficiale dell'ASL 5 Spezzino (vedi src/lib/esenzioneAsl5.ts).
// Per i Comuni di altre aziende sanitarie la scheda non c'è: si rimanda al link ufficiale.

import React, { useState } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { ASL5_CENTRALINO, ASL5_ESENZIONE } from "@/src/config/comuni/percorso";
import {
  CASI_ESENZIONE,
  COME_SI_PRESENTA,
  DELEGA,
  DOCUMENTI_COMUNI,
  DOCUMENTI_PER_CASO,
  FONTE_ESENZIONE,
  URL_ANAGRAFE_ASL5,
  distrettoAsl5,
  NOTA_DOMICILIO_SANITARIO,
  NOTA_MAIL,
  NOTA_SPORTELLI,
  SPORTELLI_ASL5,
  PROVA_INVALIDITA,
  PROVE_PATOLOGIA,
  type CasoEsenzione,
} from "@/src/lib/esenzioneAsl5";
import { Avviso, Bottone, Intro, Pagina, Scelte, paginaStili } from "@/src/components/Pagina";
import { EsenzioneGenova } from "@/src/components/EsenzioneGenova";
import { EsenzioneNuoro } from "@/src/components/EsenzioneNuoro";
import { EsenzioneAsl } from "@/src/components/EsenzioneAsl";
import { ESENZIONE_ASL } from "@/src/lib/esenzioneAslRisposte";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

function Elenco({ voci, testID }: { voci: string[]; testID?: string }) {
  return (
    <View testID={testID}>
      {voci.map((v) => (
        <View key={v} style={st.riga}>
          <Ionicons name="checkbox-outline" size={20} color={colors.brandPrimaryDark} style={st.icona} />
          <Text style={[paginaStili.testo, st.flex]}>{v}</Text>
        </View>
      ))}
    </View>
  );
}

function Punti({ voci }: { voci: string[] }) {
  return (
    <View>
      {voci.map((v) => (
        <View key={v} style={st.riga}>
          <Text style={[paginaStili.testo, st.punto]}>•</Text>
          <Text style={[paginaStili.testo, st.flex]}>{v}</Text>
        </View>
      ))}
    </View>
  );
}

export default function EsenzioneTicket() {
  useSezione("esenzione-ticket");
  const [caso, setCaso] = useState<CasoEsenzione | undefined>(undefined);
  const asl5 = comune.provincia === "SP";

  // Genova: scheda dell'ASL 3 Genovese
  if (comune.slug === "genova") return <EsenzioneGenova />;
  // Nuoro: scheda dell'ASL Nuoro (risposta scritta dell'URP)
  if (comune.slug === "nuoro") return <EsenzioneNuoro />;
  // Altre ASL che hanno risposto per iscritto (Palermo, Cagliari)
  const schedaAsl = ESENZIONE_ASL[comune.slug];
  if (schedaAsl) return <EsenzioneAsl scheda={schedaAsl} />;

  if (!asl5) {
    return (
      <Pagina
        titolo="Esenzione ticket"
        testID="esenzione-ticket-screen"
        sottotitoloSalvato="Cosa portare per l'esenzione ticket"
      >
        <Intro>
          Per {comune.nomeBreve} la scheda con l&apos;elenco dei documenti per l&apos;esenzione ticket non è ancora
          pronta. Qui sotto trovi la pagina ufficiale della tua {comune.soloElenco ? "Regione" : "azienda sanitaria"}.
        </Intro>
        <Bottone
          label={comune.esenzioneTicket.label}
          icon="open-outline"
          onPress={() => apri(comune.esenzioneTicket.url)}
          testID="esenzione-ticket-link"
        />
      </Pagina>
    );
  }

  return (
    <Pagina
      titolo="Esenzione ticket"
      testID="esenzione-ticket-screen"
      sottotitoloSalvato="Cosa portare per l'esenzione ticket (ASL 5)"
    >
      <Intro>
        L&apos;esenzione per patologia cronica o invalidità si chiede all&apos;ASL 5: la patologia o
        l&apos;invalidità viene registrata sul libretto sanitario. Scegli il tuo caso e vedi cosa
        portare.
      </Intro>

      <View style={paginaStili.card}>
        <Scelte<CasoEsenzione>
          domanda="Per chi è la richiesta?"
          opzioni={CASI_ESENZIONE}
          valore={caso}
          onScegli={setCaso}
          testID="esenzione-caso"
        />
      </View>

      {caso ? (
        <View testID="esenzione-checklist">
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Cosa portare
          </Text>
          <View style={paginaStili.card}>
            <Elenco voci={[...DOCUMENTI_COMUNI, ...DOCUMENTI_PER_CASO[caso]]} />
          </View>

          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Se va un&apos;altra persona al posto tuo
          </Text>
          <View style={paginaStili.card}>
            <Elenco voci={DELEGA} />
          </View>
        </View>
      ) : (
        <Avviso>Scegli il caso qui sopra: ti mostro l&apos;elenco giusto.</Avviso>
      )}

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Quali documenti dimostrano la patologia
      </Text>
      <View style={paginaStili.card}>
        <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          Per la patologia cronica serve la copia di uno di questi documenti:
        </Text>
        <Punti voci={PROVE_PATOLOGIA} />
        <Text style={[paginaStili.testo, { marginTop: spacing.md, marginBottom: spacing.sm }]}>
          Per l&apos;invalidità:
        </Text>
        <Punti voci={[PROVA_INVALIDITA]} />
        <Text style={[paginaStili.testo, { marginTop: spacing.md }]}>{NOTA_DOMICILIO_SANITARIO}</Text>
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Come si presenta
      </Text>
      <View style={paginaStili.card}>
        <Punti voci={COME_SI_PRESENTA} />
        <Text style={[paginaStili.testo, { marginTop: spacing.md }]}>{NOTA_MAIL}</Text>
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Il tuo distretto
      </Text>
      <View style={paginaStili.card} testID="esenzione-distretto">
        <Text style={paginaStili.testo}>
          {comune.nomeBreve} fa capo al Distretto {distrettoAsl5(comune.nomeBreve)} dell&apos;ASL 5. La
          richiesta va fatta allo sportello o all&apos;indirizzo mail del tuo distretto.
        </Text>
      </View>
      {SPORTELLI_ASL5.filter((x) => x.distretto === distrettoAsl5(comune.nomeBreve)).map((x) => (
        <View key={x.localita} style={paginaStili.card} testID={`esenzione-sportello-${x.localita}`}>
          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Sportello di {x.localita}
          </Text>
          {x.indirizzo ? <Text style={paginaStili.testo}>{x.indirizzo}</Text> : null}
          <Punti voci={x.orari} />
          {x.appuntamento ? <Text style={paginaStili.testo}>{x.appuntamento}</Text> : null}
          <Text style={paginaStili.testo}>Telefono: {x.telefoni.join(" · ")}</Text>
          <Text style={paginaStili.testo}>Mail: {x.mail}</Text>
        </View>
      ))}
      <Avviso>{NOTA_SPORTELLI}</Avviso>
      <Bottone
        label="Sportelli, mail e orari del distretto"
        icon="open-outline"
        onPress={() => apri(URL_ANAGRAFE_ASL5)}
        testID="esenzione-ticket-sportelli"
      />
      <Bottone
        label="Pagina ASL 5 sull'esenzione ticket"
        variante="vuoto"
        icon="open-outline"
        onPress={() => apri(ASL5_ESENZIONE.action.value)}
        testID="esenzione-ticket-asl5"
      />
      <Bottone
        label="Chiama il centralino ASL 5 · 0187 5331"
        icon="call-outline"
        variante="vuoto"
        onPress={() => apri(`tel:${ASL5_CENTRALINO.action.value}`)}
        testID="esenzione-ticket-centralino"
      />
      <Text style={[paginaStili.testo, st.fonte]}>Fonte: {FONTE_ESENZIONE}</Text>
    </Pagina>
  );
}

const st = StyleSheet.create({
  flex: { flex: 1 },
  riga: { flexDirection: "row", alignItems: "flex-start", gap: spacing.sm, marginBottom: spacing.sm },
  icona: { marginTop: 1 },
  punto: { width: 14 },
  fonte: { marginTop: spacing.lg, color: colors.onSurfaceSecondary },
});
