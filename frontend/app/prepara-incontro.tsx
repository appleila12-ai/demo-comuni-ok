// "Preparo l'incontro": prima dell'appuntamento la persona scrive dove va, cosa porta e cosa vuole
// chiedere. Nasce un appuntamento dell'agenda (stesso archivio delle altre date), contrassegnato come
// incontro: dopo la data l'app chiede "Com'è andato?". Nessun dato esce dal telefono.

import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { Avviso, Bottone, Campo, Intro, Pagina, paginaStili } from "@/src/components/Pagina";
import { CampoData } from "@/src/components/CampoData";
import { storage } from "@/src/utils/storage";
import { aggiornaPromemoria } from "@/src/lib/promemoriaApp";
import { SCADENZE_KEY, daTestoItaliano, daTestoOra, type Scadenza } from "@/src/lib/scadenze";
import { caricaDiario } from "@/src/lib/diario";
import { MAX_DOCUMENTI, MAX_PASSI, MAX_TESTO_BREVE, MAX_TESTO_ELENCO, passiAperti, pulisci } from "@/src/lib/diarioCore";

const unParam = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

/** Un elemento per riga → elenco pulito (righe vuote scartate, lunghezza limitata) */
const aElenco = (t: string, max: number): string[] =>
  t
    .split("\n")
    .map((r) => pulisci(r, MAX_TESTO_ELENCO))
    .filter(Boolean)
    .slice(0, max);

export default function PreparaIncontro() {
  const router = useRouter();
  const p = useLocalSearchParams<{ titolo?: string; dove?: string; portare?: string; chiedere?: string }>();
  const [titolo, setTitolo] = useState(unParam(p.titolo));
  const [dove, setDove] = useState(unParam(p.dove));
  const [testoData, setTestoData] = useState("");
  const [testoOra, setTestoOra] = useState("");
  const [portare, setPortare] = useState(unParam(p.portare));
  const [chiedere, setChiedere] = useState(unParam(p.chiedere));
  const [passi, setPassi] = useState<string[]>([]);
  const [errore, setErrore] = useState("");
  const [salvo, setSalvo] = useState(false);

  // Cose ancora da fare, scritte dopo altri incontri: si possono portare qui con un tocco
  useEffect(() => {
    caricaDiario().then((d) => setPassi(passiAperti(d).map((x) => x.passo.testo).slice(0, 5)));
  }, []);

  const aggiungiRiga = (testo: string, campo: string, set: (v: string) => void) => {
    const righe = campo.split("\n").filter((r) => r.trim());
    if (righe.some((r) => r.trim() === testo)) return;
    set([...righe, testo].join("\n"));
  };

  const salva = async () => {
    const iso = daTestoItaliano(testoData);
    if (!iso) {
      setErrore("Scegli o scrivi la data dell'incontro: giorno/mese/anno, per esempio 15/03/2027.");
      return;
    }
    let ora: string | undefined;
    if (testoOra.trim()) {
      const o = daTestoOra(testoOra);
      if (!o) {
        setErrore("Scrivi l'ora così: 9:30 (oppure lascia vuoto).");
        return;
      }
      ora = o;
    }
    setErrore("");
    setSalvo(true);
    const elPortare = aElenco(portare, MAX_DOCUMENTI);
    const elChiedere = aElenco(chiedere, MAX_PASSI + 3);
    const doveP = pulisci(dove, MAX_TESTO_BREVE);
    const nuova: Scadenza = {
      id: `altro-${Date.now()}`,
      tipo: "altro",
      data: iso,
      titolo: pulisci(titolo, MAX_TESTO_BREVE) || "Incontro",
      ...(ora ? { ora } : {}),
      incontro: true,
      ...(doveP ? { dove: doveP } : {}),
      ...(elPortare.length ? { portare: elPortare } : {}),
      ...(elChiedere.length ? { chiedere: elChiedere } : {}),
    };
    try {
      const raw = await storage.getItem<string>(SCADENZE_KEY, "");
      let lista: Scadenza[] = [];
      try {
        const v = raw ? JSON.parse(raw) : [];
        if (Array.isArray(v)) lista = v;
      } catch {
        lista = [];
      }
      const ok = await storage.setItem(SCADENZE_KEY, JSON.stringify([...lista, nuova]));
      if (!ok) throw new Error("salvataggio");
      await aggiornaPromemoria();
      router.replace("/scadenze" as any);
    } catch {
      setSalvo(false);
      setErrore("Non sono riuscito a salvare sul telefono. Riprova tra un momento.");
    }
  };

  return (
    <Pagina
      titolo="Preparo l'incontro"
      testID="prepara-incontro"
      sottotitoloSalvato="Scrivi cosa portare e cosa chiedere"
      piede={<Bottone label="Salva nell'agenda" icon="checkmark" onPress={salva} disabled={salvo} testID="prepara-salva" />}
    >
      <Intro>
        Scrivi qui, con calma, cosa ti serve per l'incontro. Dopo, potrai segnare com'è andato. Sei tu a decidere
        cosa scrivere: tutto resta solo su questo telefono.
      </Intro>
      <Avviso>
        Meglio non scrivere nomi di altre persone, codici fiscali o dettagli clinici: i dati sul telefono non sono
        cifrati.
      </Avviso>

      <Campo
        label="Che incontro è?"
        value={titolo}
        onChange={setTitolo}
        placeholder="Per esempio: Sportello Disabilità"
        testID="prepara-titolo"
      />
      <Campo
        label="Dove o con chi (facoltativo)"
        value={dove}
        onChange={setDove}
        placeholder="Per esempio: ufficio al primo piano"
        testID="prepara-dove"
      />

      <Text style={styles.label}>Quando</Text>
      <CampoData valore={testoData} onChange={setTestoData} label="Data dell'incontro" scorciatoie testID="prepara-data" />
      <View style={{ height: spacing.md }} />
      <Campo
        label="Ora (facoltativa)"
        value={testoOra}
        onChange={setTestoOra}
        placeholder="9:30"
        testID="prepara-ora"
      />

      <Campo
        label="Cosa porto"
        aiuto="Una cosa per riga (al massimo 8). Sono i documenti che pensi ti serviranno."
        value={portare}
        onChange={setPortare}
        multiline
        placeholder={"Documento d'identità\nCertificato ricevuto"}
        testID="prepara-portare"
      />
      <Campo
        label="Cosa chiedo"
        aiuto="Una domanda per riga. Scrivere le domande prima aiuta a non dimenticarle."
        value={chiedere}
        onChange={setChiedere}
        multiline
        placeholder={"Quali documenti servono?\nQuanto tempo ci vuole?"}
        testID="prepara-chiedere"
      />

      {passi.length > 0 ? (
        <View style={{ marginBottom: spacing.md }}>
          <Text style={paginaStili.piccolo}>Cose che ti eri segnato di fare. Tocca per portarle tra le domande:</Text>
          <View style={styles.chips}>
            {passi.map((t) => (
              <Pressable
                key={t}
                onPress={() => aggiungiRiga(t, chiedere, setChiedere)}
                style={styles.chip}
                accessibilityRole="button"
                accessibilityLabel={`Aggiungi tra le domande: ${t}`}
              >
                <Text style={styles.chipText}>{t}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ) : null}

      {errore ? (
        <Text style={styles.errore} accessibilityLiveRegion="polite" accessibilityRole="alert">
          {errore}
        </Text>
      ) : null}
    </Pagina>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 14, fontWeight: "800", color: colors.onSurface, marginBottom: 6 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm, marginTop: spacing.sm },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    minHeight: 44,
    justifyContent: "center",
  },
  chipText: { fontSize: 13, color: colors.onSurface },
  errore: { color: "#8A1C1C", fontSize: 14, fontWeight: "700", marginBottom: spacing.md },
});
