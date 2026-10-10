// "Il tuo verbale": la persona copia dal verbale pochi dati e l'app mostra
// cosa POTREBBE spettarle, sempre "da confermare con l'ente".
// Le risposte restano su questo dispositivo. Le regole sono in `src/lib/verbale.ts`.

import React, { useEffect, useMemo, useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useRouter } from "expo-router";

import { colors, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { storage } from "@/src/utils/storage";
import { useSezione } from "@/src/lib/statistiche";
import { AREE, calcola, completo, ESITO, type Diritto, type Esito, type Verbale } from "@/src/lib/verbale";
import { Avviso, Bottone, Campo, Intro, Pagina, paginaStili, Scelte } from "@/src/components/Pagina";
import { calcolaEventi, daTestoItaliano, giorniDaOggi, inItaliano, type Scadenza } from "@/src/lib/scadenze";
import { BottoneSalva } from "@/src/components/BottoneSalva";

const KEY = "tutelapp:verbale";
const AREA_BONUS = "Bonus regionali e comunali";
// Le date si salvano nello stesso posto di "Le mie scadenze", così compaiono anche lì e nel calendario.
const KEY_SCAD = "tutelapp:scadenze";
const isoInItaliano = (iso: string) => iso.split("-").reverse().join("/");
const apri = (url: string) => Linking.openURL(url).catch(() => {});

const COLORI_ESITO: Record<Esito, string> = {
  probabile: colors.successSoft,
  verificare: colors.warningSoft,
  "non-risulta": colors.surfaceTertiary,
};

function Scheda({ d, onBonus, onLettera }: { d: Diritto; onBonus: () => void; onLettera: (id: string) => void }) {
  return (
    <View style={paginaStili.card} testID={`verbale-${d.id}`}>
      <View
        style={[styles.badge, { backgroundColor: COLORI_ESITO[d.esito] }]}
        accessible
        accessibilityLabel={`Esito: ${ESITO[d.esito].etichetta}`}
      >
        <Ionicons
          name={d.esito === "probabile" ? "checkmark-circle-outline" : d.esito === "verificare" ? "help-circle-outline" : "remove-circle-outline"}
          size={16}
          color={colors.onSurface}
        />
        <Text style={styles.badgeText}>{ESITO[d.esito].etichetta}</Text>
      </View>
      <Text style={styles.titolo} accessibilityRole="header">
        {d.titolo}
      </Text>
      <Text style={styles.testo}>{d.cosa}</Text>
      <Text style={styles.rigaTitolo}>Come si chiede</Text>
      <Text style={styles.testo}>{d.comeSiChiede}</Text>
      <View style={styles.piede}>
        {d.letteraId ? (
          <Pressable
            onPress={() => onLettera(d.letteraId!)}
            style={({ pressed }) => [styles.link, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            accessibilityLabel="Prepara la lettera per il datore di lavoro"
          >
            <Ionicons name="mail-outline" size={22} color={colors.brandPrimaryDark} />
            <Text style={styles.linkText}>Prepara la lettera per il datore di lavoro</Text>
          </Pressable>
        ) : null}
        {d.bonusId ? (
          <Pressable
            onPress={onBonus}
            style={({ pressed }) => [styles.link, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            accessibilityLabel={`Vedi la scheda completa: ${d.titolo}`}
          >
            <Ionicons name="document-text-outline" size={22} color={colors.brandPrimaryDark} />
            <Text style={styles.linkText}>Vedi la scheda completa</Text>
          </Pressable>
        ) : null}
        {d.fonte ? (
          <Pressable
            onPress={() => apri(d.fonte!.url)}
            style={({ pressed }) => [styles.link, pressed && { opacity: 0.85 }]}
            accessibilityRole="link"
            accessibilityLabel={`Apri la fonte: ${d.fonte.label}`}
          >
            <Ionicons name="open-outline" size={22} color={colors.brandPrimaryDark} />
            <Text style={styles.linkText}>Apri la fonte ufficiale</Text>
          </Pressable>
        ) : null}
        <BottoneSalva
          conTesto
          elemento={{ id: `verbale:${d.id}`, titolo: d.titolo, sotto: ESITO[d.esito].etichetta, route: "/verbale" }}
        />
      </View>
      {d.fonte ? <Text style={styles.controllo}>{d.fonte.label}</Text> : null}
    </View>
  );
}

/** Date del verbale: restano sul telefono e diventano scadenze con avviso. */
function DateVerbale({ onScadenze }: { onScadenze: () => void }) {
  const [lista, setLista] = useState<Scadenza[]>([]);
  const [dataVerbale, setDataVerbale] = useState("");
  const [dataRevisione, setDataRevisione] = useState("");
  const [errore, setErrore] = useState("");
  const [salvato, setSalvato] = useState(false);

  useEffect(() => {
    let vivo = true;
    storage.getItem<string>(KEY_SCAD, "").then((raw) => {
      if (!vivo || !raw) return;
      try {
        const l = JSON.parse(raw);
        if (!Array.isArray(l)) return;
        setLista(l);
        const v = l.find((x: Scadenza) => x.tipo === "verbale");
        const r = l.find((x: Scadenza) => x.tipo === "revisione");
        if (v?.data) setDataVerbale(isoInItaliano(v.data));
        if (r?.data) setDataRevisione(isoInItaliano(r.data));
      } catch {
        /* date non leggibili: si riparte da zero */
      }
    });
    return () => {
      vivo = false;
    };
  }, []);

  const salvaDate = () => {
    setErrore("");
    setSalvato(false);
    const v = dataVerbale.trim() ? daTestoItaliano(dataVerbale) : "";
    const r = dataRevisione.trim() ? daTestoItaliano(dataRevisione) : "";
    if (v === null || r === null) {
      setErrore("Scrivi la data come giorno/mese/anno, per esempio 05/08/2026.");
      return;
    }
    if (!v && !r) {
      setErrore("Scrivi almeno una data.");
      return;
    }
    let nuova = lista;
    const ora = Date.now();
    if (v) nuova = [...nuova.filter((x) => x.tipo !== "verbale"), { id: `verbale-${ora}`, tipo: "verbale", data: v }];
    if (r) nuova = [...nuova.filter((x) => x.tipo !== "revisione"), { id: `revisione-${ora}`, tipo: "revisione", data: r }];
    setLista(nuova);
    storage.setItem(KEY_SCAD, JSON.stringify(nuova));
    setSalvato(true);
  };

  const eventi = calcolaEventi(lista).filter((e) => /-(atp|rev)$/.test(e.id));

  return (
    <View style={paginaStili.card} testID="verbale-date">
      <Text style={styles.titolo}>Date da ricordare</Text>
      <Text style={styles.testo}>
        Salviamo le date sul telefono e ti mostriamo le scadenze, anche in "Le mie scadenze" e nel calendario.
      </Text>
      <Campo
        label="Data del verbale"
        aiuto="Il giorno in cui ti è arrivato. Da qui contano i 6 mesi per un eventuale ricorso."
        value={dataVerbale}
        onChange={setDataVerbale}
        placeholder="gg/mm/aaaa"
        testID="verbale-data"
      />
      <Campo
        label="Data di revisione (se scritta)"
        aiuto="Se il verbale prevede una nuova visita, di solito c'è scritta la data."
        value={dataRevisione}
        onChange={setDataRevisione}
        placeholder="gg/mm/aaaa"
        testID="verbale-data-revisione"
      />
      {errore ? <Text style={[styles.testo, { fontWeight: "700" }]}>{errore}</Text> : null}
      <Bottone label="Salva le date" icon="calendar-outline" onPress={salvaDate} testID="verbale-salva-date" />
      {salvato ? <Text style={[styles.testo, { marginTop: spacing.sm }]}>Salvate. Le trovi anche nelle tue scadenze.</Text> : null}

      {eventi.map((e) => {
        const g = giorniDaOggi(e.data);
        const vicina = g >= 0 && g <= e.anticipo;
        return (
          <View key={e.id} style={{ marginTop: spacing.md }}>
            {vicina ? (
              <Avviso>
                {e.titolo}: {inItaliano(e.data)} ({g === 0 ? "oggi" : `tra ${g} giorni`}). {e.spiegazione}
              </Avviso>
            ) : (
              <Text style={styles.testo}>
                {e.titolo}: {inItaliano(e.data)} {g < 0 ? "(passata)" : `(tra ${g} giorni)`}
              </Text>
            )}
          </View>
        );
      })}
      {eventi.length > 0 ? (
        <Pressable
          onPress={onScadenze}
          style={styles.link}
          accessibilityRole="button"
          accessibilityLabel="Apri Le mie scadenze"
        >
          <Ionicons name="calendar-outline" size={22} color={colors.brandPrimaryDark} />
          <Text style={styles.linkText}>Apri Le mie scadenze</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export default function VerbalePagina() {
  useSezione("verbale-guida");
  const router = useRouter();
  const [v, setV] = useState<Verbale>({});
  const [caricato, setCaricato] = useState(false);

  useEffect(() => {
    let vivo = true;
    storage.getItem<string>(KEY, "").then((raw) => {
      if (!vivo) return;
      try {
        if (raw) setV(JSON.parse(raw) as Verbale);
      } catch {
        /* risposte non leggibili: si riparte da zero */
      }
      setCaricato(true);
    });
    return () => {
      vivo = false;
    };
  }, []);

  const scegli = <K extends keyof Verbale>(k: K, val: Verbale[K]) => {
    const nuovo = { ...v, [k]: val };
    setV(nuovo);
    storage.setItem(KEY, JSON.stringify(nuovo));
  };

  const cancella = () => {
    setV({});
    storage.setItem(KEY, "");
  };

  const pronto = caricato && completo(v);
  const diritti = useMemo(() => (pronto ? calcola(v) : []), [pronto, v]);
  const mostraArea = (area: string) => {
    const lista = diritti.filter((d) => d.area === area);
    if (lista.length === 0) return null;
    return (
      <View key={area}>
        <Text style={paginaStili.titoloSezione} accessibilityRole="header">
          {area}
        </Text>
        {lista.map((d) => (
          <Scheda key={d.id} d={d} onBonus={vaiBonus} onLettera={vaiLettera} />
        ))}
      </View>
    );
  };
  const vaiBonus = () => router.push("/bonus" as any);
  const vaiLettera = (id: string) => router.push(`/lettere?id=${id}` as any);
  const vaiScadenze = () => router.push("/scadenze" as any);

  return (
    <Pagina titolo="Il tuo verbale" testID="verbale-screen" sottotitoloSalvato="Cosa potrebbe spettarti">
      <Intro>
        Hai in mano il verbale e non sai cosa chiedere? Copia qui sotto i dati che trovi scritti: non serve la
        diagnosi. Ti diciamo cosa potrebbe spettarti, da confermare con l'ente.
      </Intro>
      <Avviso>Le risposte restano su questo telefono: non le inviamo a nessuno.</Avviso>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Cosa c'è scritto sul verbale
      </Text>
      <View style={paginaStili.card}>
        <Scelte
          domanda="Legge 104"
          aiuto="Cerca «Condizione di disabilità (Legge 104/92)»."
          opzioni={[
            { id: "nessuna", label: "Non riconosciuta" },
            { id: "art3c1", label: "Art. 3 comma 1" },
            { id: "art3c3", label: "Art. 3 comma 3 (gravità)" },
          ]}
          valore={v.legge104}
          onScegli={(x) => scegli("legge104", x)}
          testID="verbale-104"
        />
        <Scelte
          domanda="Invalidità civile"
          aiuto="Cerca «Invalido con...» e la percentuale."
          opzioni={[
            { id: "nessuna", label: "Non riconosciuta" },
            { id: "fino45", label: "Fino al 45%" },
            { id: "da46a99", label: "Dal 46% al 99%" },
            { id: "100", label: "100% (totale e permanente)" },
          ]}
          valore={v.invalidita}
          onScegli={(x) => scegli("invalidita", x)}
          testID="verbale-invalidita"
        />
        <Scelte
          domanda="Indennità di accompagnamento"
          aiuto="Se è riconosciuta, sul verbale c'è scritto. Se non la trovi, scegli No."
          opzioni={[
            { id: "si", label: "Sì, è scritta" },
            { id: "no", label: "No / non la trovo" },
          ]}
          valore={v.accompagnamento}
          onScegli={(x) => scegli("accompagnamento", x)}
          testID="verbale-accompagnamento"
        />
        <Scelte
          domanda="Esonero da future visite di revisione"
          aiuto="In fondo al verbale, alla voce «Esonero da future visite di revisione»."
          opzioni={[
            { id: "si", label: "Sì" },
            { id: "no", label: "No" },
            { id: "nonso", label: "Non lo so" },
          ]}
          valore={v.esonero}
          onScegli={(x) => scegli("esonero", x)}
          testID="verbale-esonero"
        />
      </View>

      <DateVerbale onScadenze={vaiScadenze} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        La tua situazione
      </Text>
      <View style={paginaStili.card}>
        <Scelte
          domanda="Età della persona con il verbale"
          opzioni={[
            { id: "minore", label: "Minorenne" },
            { id: "adulto", label: "Da 18 a 66 anni" },
            { id: "over67", label: "67 anni o più" },
          ]}
          valore={v.eta}
          onScegli={(x) => scegli("eta", x)}
          testID="verbale-eta"
        />
        <Scelte
          domanda="Vive in una struttura residenziale?"
          opzioni={[
            { id: "no", label: "No, vive a casa" },
            { id: "si", label: "Sì" },
          ]}
          valore={v.struttura}
          onScegli={(x) => scegli("struttura", x)}
          testID="verbale-struttura"
        />
        <Scelte
          domanda="ISEE sociosanitario"
          aiuto="Serve per i bonus. Se non ce l'hai ancora, scegli «Non lo so»."
          opzioni={[
            { id: "f35", label: "Fino a 35.000 euro" },
            { id: "f50", label: "Da 35.001 a 50.000 euro" },
            { id: "f65", label: "Da 50.001 a 65.000 euro" },
            { id: "oltre", label: "Oltre 65.000 euro" },
            { id: "nonso", label: "Non lo so" },
          ]}
          valore={v.isee}
          onScegli={(x) => scegli("isee", x)}
          testID="verbale-isee"
        />
        <Text style={styles.testo}>Comune: {comune.nomeBreve} · Regione: {comune.regione}</Text>
      </View>

      {!pronto ? (
        <Avviso>Rispondi almeno a Legge 104, invalidità ed età per vedere cosa potrebbe spettarti.</Avviso>
      ) : (
        <>
          {v.esonero === "no" ? (
            <Avviso>
              Il verbale non ti esonera dalle visite di revisione: potresti essere richiamato a visita. Segna la
              data se è indicata sul verbale.
            </Avviso>
          ) : null}

          {AREE.filter((a) => a !== AREA_BONUS).map(mostraArea)}

          <Text style={paginaStili.titoloSezione} accessibilityRole="header">
            Cosa fare adesso
          </Text>
          <View style={paginaStili.card} testID="verbale-passi">
            <Text style={styles.testo}>
              1. Il verbale non attiva nulla da solo: ogni prestazione ha la sua domanda.{"\n"}
              2. INPS (o patronato, gratuito): pensione, indennità e permessi.{"\n"}
              3. ASL: esenzione dal ticket e ausili.{"\n"}
              4. Datore di lavoro: permessi della Legge 104, dopo la domanda all'INPS.{"\n"}
              5. {comune.ente}: servizi sociali e bonus del territorio.
            </Text>
            {!!comune.telefono && (
              <Pressable
                onPress={() => apri(`tel:${comune.telefono.replace(/\s/g, "")}`)}
                style={styles.link}
                accessibilityRole="button"
                accessibilityLabel={`Chiama ${comune.ente}`}
              >
                <Ionicons name="call-outline" size={22} color={colors.brandPrimaryDark} />
                <Text style={styles.linkText}>Chiama {comune.telefono}</Text>
              </Pressable>
            )}
          </View>

          {mostraArea(AREA_BONUS)}

          <Avviso>
            Questa è una guida informativa, non una valutazione ufficiale e non sostituisce patronato, INPS o
            servizi sociali. Ogni voce è "da confermare con l'ente" prima di fare domanda.
          </Avviso>
          <Bottone label="Cancella le mie risposte" icon="trash-outline" variante="vuoto" onPress={cancella} testID="verbale-cancella" />
        </>
      )}
    </Pagina>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.pill,
    marginBottom: spacing.sm,
  },
  badgeText: { fontSize: 17, fontWeight: "800", color: colors.onSurface },
  titolo: { fontSize: 20, lineHeight: 27, fontWeight: "700", color: colors.onSurface, marginBottom: spacing.sm },
  rigaTitolo: { fontSize: 17, fontWeight: "800", color: colors.onSurface, marginTop: spacing.sm, marginBottom: 2 },
  testo: { fontSize: 17, lineHeight: 25, color: colors.onSurface },
  piede: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: spacing.sm, marginTop: spacing.md },
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 44,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.brandPrimaryDark,
    alignSelf: "flex-start",
    marginTop: spacing.sm,
  },
  linkText: { fontSize: 17, fontWeight: "800", color: colors.brandPrimaryDark },
  controllo: { fontSize: 17, lineHeight: 24, color: colors.onSurfaceSecondary, marginTop: spacing.sm },
});
