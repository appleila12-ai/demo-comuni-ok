// "A cosa potresti avere diritto": poche domande, poi l'elenco delle agevolazioni
// possibili con il motivo e il prossimo passo.

import { useEffect, useMemo, useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { storage } from "@/src/utils/storage";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import {
  DOMANDE,
  calcola,
  completate,
  type Agevolazione,
  type Risposte,
} from "@/src/lib/agevolazioni";
import { Avviso, Bottone, Intro, Pagina, Scelte, paginaStili } from "@/src/components/Pagina";

const KEY = "tutelapp:agevolazioni";

const ICONE: Record<Agevolazione["area"], string> = {
  Salute: "medkit-outline",
  Soldi: "cash-outline",
  Lavoro: "briefcase-outline",
  "Casa e bollette": "flash-outline",
  "Auto e spostamenti": "car-outline",
  "Servizi del Comune": "people-outline",
};

export default function Agevolazioni() {
  useSezione("agevolazioni");
  const router = useRouter();
  const [risposte, setRisposte] = useState<Risposte>({});
  const [risultati, setRisultati] = useState(false);

  useEffect(() => {
    (async () => {
      const raw = await storage.getItem<string>(KEY, "");
      if (!raw) return;
      try {
        setRisposte(JSON.parse(raw));
      } catch {
        /* ignora */
      }
    })();
  }, []);

  const rispondi = (id: keyof Risposte, v: string) => {
    const nuove = { ...risposte, [id]: v } as Risposte;
    setRisposte(nuove);
    storage.setItem(KEY, JSON.stringify(nuove));
  };

  const elenco = useMemo(() => calcola(risposte), [risposte]);
  const fatte = completate(risposte);

  const apri = (href: string) => {
    if (href.startsWith("http")) Linking.openURL(href).catch(() => {});
    else router.push(href as any);
  };

  if (risultati) {
    const aree = Array.from(new Set(elenco.map((a) => a.area)));
    return (
      <Pagina titolo="A cosa hai diritto" testID="agevolazioni-risultati">
        <Pressable onPress={() => setRisultati(false)} hitSlop={8} style={styles.indietro}>
          <Ionicons name="arrow-back" size={14} color={colors.onSurface} />
          <Text style={styles.indietroText}>Cambia le risposte</Text>
        </Pressable>
        <Intro>
          In base alle tue risposte, ecco{" "}
          <Text style={{ fontWeight: "800" }}>{elenco.length} aiuti</Text> che potrebbero
          riguardarti. Per ognuno trovi il perché e il prossimo passo.
        </Intro>

        {aree.map((area) => (
          <View key={area}>
            <Text style={paginaStili.titoloSezione}>{area}</Text>
            {elenco
              .filter((a) => a.area === area)
              .map((a) => (
                <View key={a.id} style={paginaStili.card} testID={`agevolazione-${a.id}`}>
                  <View style={styles.cardTop}>
                    <View style={styles.icona}>
                      <Ionicons name={ICONE[a.area] as any} size={18} color={colors.brandPrimaryDark} />
                    </View>
                    <View style={styles.flex}>
                      <Text style={styles.titolo}>{a.titolo}</Text>
                      {a.forse ? (
                        <Text style={styles.forse}>Da verificare: dipende da altri requisiti</Text>
                      ) : null}
                    </View>
                  </View>
                  <Text style={styles.etichetta}>Perché</Text>
                  <Text style={paginaStili.testo}>{a.perche}</Text>
                  <Text style={styles.etichetta}>Cosa fare</Text>
                  <Text style={paginaStili.testo}>{a.come}</Text>
                  {a.link ? (
                    <Pressable onPress={() => apri(a.link!.href)} hitSlop={6} style={styles.link}>
                      <Text style={styles.linkText}>{a.link.label}</Text>
                      <Ionicons
                        name={a.link.href.startsWith("http") ? "open-outline" : "arrow-forward"}
                        size={14}
                        color={colors.brandPrimaryDark}
                      />
                    </Pressable>
                  ) : null}
                </View>
              ))}
          </View>
        ))}

        <Avviso style={{ marginTop: spacing.md }}>
          Questo elenco è un orientamento, non una valutazione ufficiale. Per la conferma
          rivolgiti ai {comune.ente} {comune.delEnte}, a un patronato o a un CAF: sono
          gratuiti.
        </Avviso>
        <Bottone
          label="Chiedi un colloquio ai Servizi Sociali"
          icon="chatbubbles-outline"
          variante="vuoto"
          onPress={() => router.push("/lettere?id=colloquio" as any)}
        />
      </Pagina>
    );
  }

  return (
    <Pagina
      titolo="A cosa hai diritto"
      testID="agevolazioni-screen"
      piede={
        <View>
          <Text style={styles.progresso}>
            Risposte date: {fatte} di {DOMANDE.length}
            {fatte < DOMANDE.length ? " · puoi saltare quelle che non sai" : ""}
          </Text>
          <Bottone
            label="Vedi gli aiuti possibili"
            icon="arrow-forward"
            onPress={() => setRisultati(true)}
            testID="agevolazioni-vedi"
          />
        </View>
      }
    >
      <Intro>
        Rispondi a qualche domanda: ti mostriamo bonus, agevolazioni e servizi a cui potresti
        avere diritto. Ci vogliono due minuti e le risposte restano su questo dispositivo.
      </Intro>
      {DOMANDE.map((d) => (
        <Scelte
          key={d.id}
          domanda={d.testo}
          aiuto={d.aiuto}
          opzioni={d.opzioni}
          valore={risposte[d.id] as string | undefined}
          onScegli={(v) => rispondi(d.id, v)}
          testID={`agevolazioni-${d.id}`}
        />
      ))}
    </Pagina>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  indietro: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: spacing.sm },
  indietroText: { fontSize: 13, fontWeight: "700", color: colors.onSurface, textDecorationLine: "underline" },
  cardTop: { flexDirection: "row", gap: spacing.md, alignItems: "flex-start", marginBottom: spacing.sm },
  icona: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: colors.brandSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  titolo: { fontSize: 16, fontWeight: "800", color: colors.onSurface, lineHeight: 21 },
  forse: { fontSize: 12, fontWeight: "700", color: colors.brandPrimaryDark, marginTop: 2 },
  etichetta: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: colors.onSurfaceSecondary,
    marginTop: spacing.sm,
    marginBottom: 2,
  },
  link: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: spacing.sm },
  linkText: { fontSize: 14, fontWeight: "800", color: colors.brandPrimaryDark, textDecorationLine: "underline" },
  progresso: { fontSize: 13, color: colors.onSurface, textAlign: "center", fontWeight: "600" },
});
