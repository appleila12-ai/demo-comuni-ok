// "Dopo l'incontro": la persona scrive con parole sue com'è andato. Sono note personali, non
// informazioni verificate: restano solo su questo telefono (diario) e i passi con una data
// diventano date dell'agenda. Tutti i campi sono facoltativi, ma ne serve almeno uno.

import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, radius, spacing } from "@/src/theme";
import { Avviso, Bottone, Campo, Intro, Pagina } from "@/src/components/Pagina";
import { CampoData } from "@/src/components/CampoData";
import { InvitoCopia } from "@/src/components/CopiaSicurezza";
import { storage } from "@/src/utils/storage";
import { SCADENZE_KEY, aTestoItaliano, aIso, daTestoItaliano, type Scadenza } from "@/src/lib/scadenze";
import { CONTATTI_KEY, leggiContatti, type Contatto } from "@/src/lib/contatti";
import { caricaDiario, salvaDiario } from "@/src/lib/diario";
import {
  MAX_CAPITO,
  MAX_DOCUMENTI,
  MAX_PASSI,
  MAX_TESTO_BREVE,
  MAX_TESTO_ELENCO,
  conVoce,
  nuovoId,
  pulisci,
  pulisciLungo,
  voceVuota,
  type Diario,
  type Documento,
  type Passo,
  type VoceDiario,
} from "@/src/lib/diarioCore";

const unParam = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

type PassoRiga = { id: string; testo: string; data: string; fatto: boolean };

export default function DopoIncontro() {
  const router = useRouter();
  const p = useLocalSearchParams<{ id?: string; voce?: string }>();
  const idScadenza = unParam(p.id);
  const idVoce = unParam(p.voce);

  const [diario, setDiario] = useState<Diario | null>(null);
  const [contatti, setContatti] = useState<Contatto[]>([]);
  const [voceId, setVoceId] = useState(idVoce || nuovoId("v"));
  const [creata, setCreata] = useState(new Date().toISOString());
  const [titolo, setTitolo] = useState("");
  const [testoData, setTestoData] = useState(aTestoItaliano(aIso(new Date())));
  const [conChi, setConChi] = useState("");
  const [ente, setEnte] = useState("");
  const [capito, setCapito] = useState("");
  const [passi, setPassi] = useState<PassoRiga[]>([]);
  const [documenti, setDocumenti] = useState("");
  const [vecchiDoc, setVecchiDoc] = useState<Documento[]>([]);
  const [salvaContatto, setSalvaContatto] = useState(false);
  const [errore, setErrore] = useState("");
  const [fatto, setFatto] = useState(false);
  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
    (async () => {
      const d = await caricaDiario();
      setDiario(d);
      setContatti(leggiContatti(await storage.getItem<string>(CONTATTI_KEY, "")));
      if (idVoce) {
        const v = d.voci.find((x) => x.id === idVoce);
        if (v) {
          setCreata(v.creata || new Date().toISOString());
          setTitolo(v.titolo);
          setTestoData(aTestoItaliano(v.data));
          setConChi(v.conChi ?? "");
          setEnte(v.ente ?? "");
          setCapito(v.capito ?? "");
          setPassi(v.passi.map((x) => ({ id: x.id, testo: x.testo, data: x.data ? aTestoItaliano(x.data) : "", fatto: x.fatto })));
          setVecchiDoc(v.documenti);
          setDocumenti(v.documenti.map((x) => x.testo).join("\n"));
        }
        return;
      }
      if (idScadenza) {
        try {
          const raw = await storage.getItem<string>(SCADENZE_KEY, "");
          const lista: Scadenza[] = raw ? JSON.parse(raw) : [];
          const s = Array.isArray(lista) ? lista.find((x) => x.id === idScadenza) : undefined;
          if (s) {
            setTitolo(s.titolo || "Incontro");
            setTestoData(aTestoItaliano(s.data));
            if (s.dove) setEnte(s.dove);
          }
        } catch {
          /* resta il modulo vuoto */
        }
      }
    })();
  }, [idScadenza, idVoce]);

  const aggiungiPasso = () => {
    if (passi.length >= MAX_PASSI) return;
    setPassi([...passi, { id: nuovoId("p"), testo: "", data: "", fatto: false }]);
  };
  const cambiaPasso = (id: string, c: Partial<PassoRiga>) => setPassi(passi.map((x) => (x.id === id ? { ...x, ...c } : x)));
  const togliPasso = (id: string) => setPassi(passi.filter((x) => x.id !== id));

  const salva = async () => {
    if (!diario) return;
    const iso = daTestoItaliano(testoData);
    if (!iso) {
      setErrore("Scrivi il giorno dell'incontro: giorno/mese/anno, per esempio 15/03/2027.");
      return;
    }
    const listaPassi: Passo[] = [];
    for (const r of passi) {
      const testo = pulisci(r.testo, MAX_TESTO_ELENCO);
      if (!testo) continue;
      let data: string | undefined;
      if (r.data.trim()) {
        const d = daTestoItaliano(r.data);
        if (!d) {
          setErrore(`La data di «${testo}» non è chiara: scrivila così, 15/03/2027, oppure lasciala vuota.`);
          return;
        }
        data = d;
      }
      listaPassi.push({ id: r.id, testo, ...(data ? { data } : {}), fatto: r.fatto });
    }
    const listaDoc: Documento[] = documenti
      .split("\n")
      .map((t) => pulisci(t, MAX_TESTO_ELENCO))
      .filter(Boolean)
      .slice(0, MAX_DOCUMENTI)
      .map((testo) => {
        const prima = vecchiDoc.find((x) => x.testo === testo);
        return prima ?? { id: nuovoId("d"), testo, pronto: false };
      });
    const chi = pulisci(conChi, MAX_TESTO_BREVE);
    const en = pulisci(ente, MAX_TESTO_BREVE);
    const cap = pulisciLungo(capito, MAX_CAPITO);
    const base = { conChi: chi || undefined, ente: en || undefined, capito: cap || undefined, passi: listaPassi, documenti: listaDoc };
    if (voceVuota(base)) {
      setErrore("Scrivi almeno una cosa: con chi hai parlato, cosa hai capito, un passo da fare o un documento.");
      return;
    }
    const esistente = diario.voci.find((x) => x.id === voceId);
    const voce: VoceDiario = {
      id: voceId,
      creata,
      data: iso,
      titolo: pulisci(titolo, MAX_TESTO_BREVE) || "Incontro",
      ...(esistente?.appuntamentoId || idScadenza ? { appuntamentoId: esistente?.appuntamentoId || idScadenza } : {}),
      ...(chi ? { conChi: chi } : {}),
      ...(en ? { ente: en } : {}),
      ...(cap ? { capito: cap } : {}),
      passi: listaPassi,
      documenti: listaDoc,
    };
    setErrore("");
    setSalvo(true);
    const ok = await salvaDiario(conVoce(diario, voce));
    if (!ok) {
      setSalvo(false);
      setErrore("Non sono riuscito a salvare sul telefono. Riprova tra un momento.");
      return;
    }
    if (salvaContatto && chi && !contatti.some((c) => c.nome.toLowerCase() === chi.toLowerCase())) {
      const nuovo: Contatto = { id: `contatto-${Date.now()}`, ruolo: "altro", nome: chi };
      await storage.setItem(CONTATTI_KEY, JSON.stringify([...contatti, nuovo]));
    }
    setVoceId(voce.id);
    setFatto(true);
  };

  if (fatto) {
    return (
      <Pagina titolo="Dopo l'incontro" testID="dopo-incontro" salvabile={false}>
        <Intro>Fatto: l'hai scritto nel tuo diario. Lo trovi in «La mia pratica», con i passi da fare.</Intro>
        <InvitoCopia onChiudi={() => {}} />
        <Bottone label="Apri il mio diario" icon="book-outline" onPress={() => router.replace("/tracker" as any)} />
        <Bottone label="Torna alla home" variante="vuoto" onPress={() => router.replace("/")} />
      </Pagina>
    );
  }

  const nomiContatti = contatti.slice(0, 6);

  return (
    <Pagina
      titolo="Dopo l'incontro"
      testID="dopo-incontro"
      sottotitoloSalvato="Scrivi com'è andato e cosa fare adesso"
      piede={<Bottone label="Salva nel mio diario" icon="checkmark" onPress={salva} disabled={salvo || !diario} testID="dopo-salva" />}
    >
      <Intro>
        Scrivi con parole tue com'è andata. Puoi compilare solo ciò che ti serve: basta una cosa. Puoi anche
        usare il microfono della tastiera per dettare.
      </Intro>
      <Avviso>
        Sono tue note personali, non informazioni verificate. Meglio non scrivere nomi, codici fiscali o dettagli
        clinici: i dati sul telefono non sono cifrati.
      </Avviso>

      <Campo label="Che incontro era?" value={titolo} onChange={setTitolo} placeholder="Per esempio: Sportello Disabilità" testID="dopo-titolo" />
      <Text style={styles.label}>Giorno dell'incontro</Text>
      <CampoData valore={testoData} onChange={setTestoData} label="Giorno dell'incontro" testID="dopo-data" />
      <View style={{ height: spacing.md }} />

      <Campo label="Con chi ho parlato" value={conChi} onChange={setConChi} placeholder="Per esempio: l'operatore dello sportello" testID="dopo-chi" />
      {nomiContatti.length > 0 ? (
        <View style={styles.chips}>
          {nomiContatti.map((c) => (
            <Pressable key={c.id} onPress={() => setConChi(c.nome)} style={styles.chip} accessibilityRole="button" accessibilityLabel={`Ho parlato con ${c.nome}`}>
              <Text style={styles.chipText}>{c.nome}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
      <Campo label="Ente o ufficio (facoltativo)" value={ente} onChange={setEnte} testID="dopo-ente" />
      {conChi.trim() && !contatti.some((c) => c.nome.toLowerCase() === conChi.trim().toLowerCase()) ? (
        <Pressable
          onPress={() => setSalvaContatto(!salvaContatto)}
          style={styles.riga}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: salvaContatto }}
          accessibilityLabel="Salva questa persona tra i miei contatti"
        >
          <Ionicons name={salvaContatto ? "checkbox" : "square-outline"} size={22} color={colors.brandPrimaryDark} />
          <Text style={styles.rigaText}>Salva tra i miei contatti</Text>
        </Pressable>
      ) : null}

      <Campo
        label="Cosa ho capito"
        aiuto={`Al massimo ${MAX_CAPITO} caratteri. Ti restano ${Math.max(0, MAX_CAPITO - capito.length)}.`}
        value={capito}
        onChange={(t) => setCapito(t.slice(0, MAX_CAPITO))}
        multiline
        testID="dopo-capito"
      />

      <Text style={styles.label}>Cosa devo fare adesso</Text>
      {passi.map((r, i) => (
        <View key={r.id} style={styles.passo}>
          <Campo label={`Passo ${i + 1}`} value={r.testo} onChange={(t) => cambiaPasso(r.id, { testo: t })} testID={`dopo-passo-${i}`} />
          <Text style={styles.sub}>Entro quando? (facoltativo)</Text>
          <CampoData valore={r.data} onChange={(t) => cambiaPasso(r.id, { data: t })} label={`Data del passo ${i + 1}`} />
          <Pressable onPress={() => togliPasso(r.id)} style={styles.togli} accessibilityRole="button" accessibilityLabel={`Togli il passo ${i + 1}`}>
            <Ionicons name="trash-outline" size={16} color={colors.brandPrimaryDark} />
            <Text style={styles.chipText}>Togli questo passo</Text>
          </Pressable>
        </View>
      ))}
      {passi.length < MAX_PASSI ? <Bottone label="Aggiungi un passo" icon="add" variante="vuoto" onPress={aggiungiPasso} testID="dopo-aggiungi-passo" /> : null}
      <Text style={styles.nota}>I passi con una data compaiono anche nelle tue date.</Text>

      <View style={{ height: spacing.md }} />
      <Campo
        label="Documenti da preparare"
        aiuto="Uno per riga (al massimo 8)."
        value={documenti}
        onChange={setDocumenti}
        multiline
        testID="dopo-documenti"
      />

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
  sub: { fontSize: 12, color: colors.onSurfaceSecondary, marginBottom: 4 },
  nota: { fontSize: 12, lineHeight: 18, color: colors.onSurfaceSecondary, marginTop: spacing.sm },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm, marginBottom: spacing.md },
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
  riga: { flexDirection: "row", alignItems: "center", gap: spacing.sm, minHeight: 44, marginBottom: spacing.md },
  rigaText: { fontSize: 14, color: colors.onSurface },
  passo: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  togli: { flexDirection: "row", alignItems: "center", gap: 6, minHeight: 44, marginTop: spacing.sm },
  errore: { color: "#8A1C1C", fontSize: 14, fontWeight: "700", marginTop: spacing.md },
});
