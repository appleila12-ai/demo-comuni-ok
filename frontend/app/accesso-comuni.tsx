// TutelApp – Percorsi Territoriali: area riservata ai Comuni (solo web).
// Indirizzo: /accesso-comuni?comune=mediglia (oppure sarzana, genova). Non è collegata da nessun menu
// dell'app e non è indicizzata (intestazione X-Robots-Tag in netlify.toml).
//
// L'accesso è controllato sul server (netlify/functions/percorsi.mjs): nessuna password sta nel
// codice dell'app. Compilare e salvare il modulo NON modifica l'app pubblica: i dati vanno in
// app solo con una modifica del repository approvata da TutelApp ("pubblica").
// Non si raccolgono dati personali o sanitari dei cittadini.

import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { Avviso, Bottone, Campo, Intro, Pagina, Scelte, paginaStili } from "@/src/components/Pagina";
import { COMUNI_PERCORSI, precompila } from "@/src/percorsi/comuni";
import {
  PERCORSI,
  SEZIONI,
  STATI,
  gruppoVuoto,
  idCampoPassaggio,
  idCampoSezione,
  idGruppoPassaggio,
  type CampoModulo,
  type DatiModulo,
  type GruppoDati,
  type StatoGruppo,
} from "@/src/percorsi/schema";
import { colors, radius, spacing } from "@/src/theme";

const API = "/api/percorsi";
const CHIAVE_GETTONE = (slug: string) => `tutelapp-percorsi-gettone-${slug}`;

type Ruolo = "comune" | "admin";
type Blocco = {
  gid: string;
  titolo: string;
  descrizione?: string;
  paginaApp?: string;
  campi: { id: string; def: CampoModulo }[];
};

function bloccoSezione(s: (typeof SEZIONI)[number]): Blocco {
  return {
    gid: s.id,
    titolo: s.titolo,
    descrizione: s.descrizione,
    paginaApp: s.paginaApp,
    campi: s.campi.map((def) => ({ id: idCampoSezione(s.id, def.id), def })),
  };
}

const BLOCCHI_DATI: Blocco[] = SEZIONI.map(bloccoSezione);
const BLOCCHI_PERCORSI: { id: string; titolo: string; descrizione: string; blocchi: Blocco[] }[] = PERCORSI.map((p) => ({
  id: p.id,
  titolo: p.titolo,
  descrizione: p.descrizione,
  blocchi: p.passaggi.map((pa) => ({
    gid: idGruppoPassaggio(p.id, pa.n),
    titolo: `Passaggio ${pa.n}`,
    campi: pa.campi.map((def) => ({ id: idCampoPassaggio(p.id, pa.n, def.id), def })),
  })),
}));

function leggiGettone(slug: string): string | null {
  try {
    return typeof sessionStorage !== "undefined" ? sessionStorage.getItem(CHIAVE_GETTONE(slug)) : null;
  } catch {
    return null;
  }
}
function salvaGettone(slug: string, g: string | null) {
  try {
    if (typeof sessionStorage === "undefined") return;
    if (g) sessionStorage.setItem(CHIAVE_GETTONE(slug), g);
    else sessionStorage.removeItem(CHIAVE_GETTONE(slug));
  } catch {
    /* la sessione resta solo in memoria */
  }
}

async function chiama(
  azione: string,
  slug: string,
  gettone: string | null,
  extra: Record<string, unknown> = {},
): Promise<{ stato: number; corpo: any }> {
  const r = await fetch(API, {
    method: "POST",
    headers: { "content-type": "application/json", ...(gettone ? { authorization: `Bearer ${gettone}` } : {}) },
    body: JSON.stringify({ azione, comune: slug, ...extra }),
  });
  let corpo: any = {};
  try {
    corpo = await r.json();
  } catch {
    /* risposta non JSON */
  }
  return { stato: r.status, corpo };
}

const EMAIL_TUTELAPP = "info@tutelapp.it";

/** Avviso in evidenza: non c'è una notifica automatica, quindi il Comune ci scrive quando è pronto. */
function ScriviciQuandoPronti({ comune }: { comune: string }) {
  const apriPosta = () => {
    if (Platform.OS === "web") {
      window.location.href = `mailto:${EMAIL_TUTELAPP}?subject=${encodeURIComponent("Modulo TutelApp pronto: " + comune)}`;
    }
  };
  return (
    <Avviso>
      Quando avete finito, o quando volete che guardiamo il lavoro fatto, scriveteci a{" "}
      <Text style={stili.link} onPress={apriPosta} accessibilityRole="link">
        {EMAIL_TUTELAPP}
      </Text>
      . Noi non riceviamo un avviso quando salvate il modulo.
    </Avviso>
  );
}

export default function AccessoComuni() {
  const { comune: parametro } = useLocalSearchParams<{ comune?: string }>();
  const router = useRouter();
  const slug = String(parametro || "").toLowerCase();
  const config = COMUNI_PERCORSI[slug];

  const [gettone, setGettone] = useState<string | null>(null);
  const [ruolo, setRuolo] = useState<Ruolo>("comune");
  const [password, setPassword] = useState("");
  const [errore, setErrore] = useState("");
  const [occupato, setOccupato] = useState(false);

  const [dati, setDati] = useState<DatiModulo | null>(null);
  const [versioneServer, setVersioneServer] = useState(0);
  const [versioni, setVersioni] = useState<string[]>([]);
  const [operatore, setOperatore] = useState("");
  const [modificato, setModificato] = useState(false);
  const [messaggio, setMessaggio] = useState("");
  const [vista, setVista] = useState<"dati" | "percorsi">("dati");
  const [aperto, setAperto] = useState<string | null>(null);
  const [percorsoAperto, setPercorsoAperto] = useState<string | null>(null);

  const esci = useCallback(
    (testo = "") => {
      salvaGettone(slug, null);
      setGettone(null);
      setDati(null);
      setPassword("");
      setErrore(testo);
    },
    [slug],
  );

  const caricaModulo = useCallback(
    async (g: string) => {
      setOccupato(true);
      try {
        const r = await chiama("carica", slug, g);
        if (r.stato === 401) return esci("Sessione scaduta. Accedi di nuovo.");
        if (r.stato !== 200) throw new Error(r.corpo?.errore || "Errore");
        const corrente = r.corpo.corrente as DatiModulo | null;
        setVersioneServer(corrente?.versione ?? 0);
        setVersioni(r.corpo.versioni || []);
        setDati(corrente ?? precompila(slug));
        setModificato(false);
        setMessaggio(
          corrente
            ? `Ultimo salvataggio: versione ${corrente.versione}, ${new Date(corrente.aggiornatoIl || "").toLocaleString("it-IT")}, ${corrente.aggiornatoDa || ""}.`
            : "Nessun salvataggio: i dati di partenza vengono dalla scheda già pubblicata. Controllali e salva.",
        );
      } catch (e: any) {
        setErrore(e?.message || "Non riesco a caricare il modulo. Riprova.");
      } finally {
        setOccupato(false);
      }
    },
    [slug, esci],
  );

  // Ripresa della sessione nella stessa scheda del browser
  useEffect(() => {
    if (!config) return;
    const g = leggiGettone(slug);
    if (g) {
      setGettone(g);
      caricaModulo(g);
    }
  }, [slug, config, caricaModulo]);

  // Avviso se si chiude la pagina con modifiche non salvate
  useEffect(() => {
    if (Platform.OS !== "web" || !modificato) return;
    const f = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", f);
    return () => window.removeEventListener("beforeunload", f);
  }, [modificato]);

  const accedi = async () => {
    setErrore("");
    if (password.length < 1) return setErrore("Scrivi la password.");
    setOccupato(true);
    try {
      const r = await chiama("login", slug, null, { password });
      if (r.stato !== 200) throw new Error(r.corpo?.errore || "Accesso non riuscito.");
      salvaGettone(slug, r.corpo.gettone);
      setGettone(r.corpo.gettone);
      setRuolo(r.corpo.ruolo);
      setPassword("");
      await caricaModulo(r.corpo.gettone);
    } catch (e: any) {
      setErrore(e?.message || "Accesso non riuscito.");
    } finally {
      setOccupato(false);
    }
  };

  const cambiaCampo = (bloccoGid: string, id: string, valore: string) => {
    setDati((d) => {
      if (!d) return d;
      const campi = { ...d.campi, [id]: valore };
      const gruppi = { ...d.gruppi };
      if (!gruppi[bloccoGid]) gruppi[bloccoGid] = gruppoVuoto();
      return { ...d, campi, gruppi };
    });
    setModificato(true);
    setMessaggio("");
  };

  const cambiaGruppo = (gid: string, parte: Partial<GruppoDati>) => {
    setDati((d) => (d ? { ...d, gruppi: { ...d.gruppi, [gid]: { ...(d.gruppi[gid] || gruppoVuoto()), ...parte } } } : d));
    setModificato(true);
    setMessaggio("");
  };

  const salva = async () => {
    if (!dati || !gettone) return;
    if (operatore.trim().length < 2) {
      setMessaggio("Scrivi il tuo nome e cognome in alto: serve a ricordare chi ha salvato.");
      return;
    }
    setOccupato(true);
    try {
      const r = await chiama("salva", slug, gettone, {
        campi: dati.campi,
        gruppi: dati.gruppi,
        operatore: operatore.trim(),
        versioneBase: versioneServer,
      });
      if (r.stato === 401) return esci("Sessione scaduta. Accedi di nuovo.");
      if (r.stato === 409) {
        setMessaggio(r.corpo?.errore || "Qualcuno ha salvato nel frattempo.");
        return;
      }
      if (r.stato !== 200) throw new Error(r.corpo?.errore || "Salvataggio non riuscito.");
      const nuovo = r.corpo.corrente as DatiModulo;
      setDati(nuovo);
      setVersioneServer(nuovo.versione);
      setVersioni((v) => [String(nuovo.versione).padStart(6, "0"), ...v].slice(0, 30));
      setModificato(false);
      setMessaggio(`Salvato (versione ${nuovo.versione}). L'app pubblica non è cambiata.`);
    } catch (e: any) {
      setMessaggio(e?.message || "Salvataggio non riuscito: i dati sono ancora qui, riprova.");
    } finally {
      setOccupato(false);
    }
  };

  const apriVersione = async (v: string) => {
    if (!gettone) return;
    setOccupato(true);
    try {
      const r = await chiama("versione", slug, gettone, { numero: Number(v) });
      if (r.stato === 200 && r.corpo.versione) {
        setDati(r.corpo.versione);
        setModificato(true);
        setMessaggio(`Aperta la versione ${Number(v)}. Se la salvi, diventa una nuova versione.`);
      }
    } finally {
      setOccupato(false);
    }
  };

  const conteggio = useMemo(() => {
    const n = (b: Blocco) => b.campi.filter((c) => (dati?.campi[c.id] || "").trim()).length;
    return n;
  }, [dati]);

  if (!config) {
    return (
      <Pagina salvabile={false} titolo="Area riservata ai Comuni" testID="accesso-comuni-non-valido">
        <Avviso>Indirizzo non valido. Usa il link che ti ha inviato TutelApp.</Avviso>
      </Pagina>
    );
  }

  if (!gettone || !dati) {
    return (
      <Pagina salvabile={false} titolo={config.titolo} testID="accesso-comuni-login">
        <Intro>
          Area riservata a {config.nome}. I dati già presenti in TutelApp sono stati riportati nel modulo: controllali e
          correggi solo ciò che non è esatto. Aggiungi il resto, in più sessioni, insieme ai percorsi che il cittadino segue.
          Quello che scrivi non compare subito nell'app: TutelApp lo controlla prima.
        </Intro>
        <Avviso>Non scrivere dati personali o sanitari di cittadini: il modulo serve solo per i dati degli uffici.</Avviso>
        <ScriviciQuandoPronti comune={config.nome} />
        <Text style={stili.etichetta}>Password del Comune</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={accedi}
          accessibilityLabel="Password del Comune"
          testID="accesso-password"
          style={stili.input}
        />
        {!!errore && (
          <Text accessibilityRole="alert" style={stili.errore}>
            {errore}
          </Text>
        )}
        <Bottone label={occupato ? "Un momento…" : "Entra"} onPress={accedi} disabled={occupato} testID="accesso-entra" />
      </Pagina>
    );
  }

  const stati = STATI.filter((s) => ruolo === "admin" || s.chiPuoImpostarlo === "comune");
  const percorso = BLOCCHI_PERCORSI.find((p) => p.id === percorsoAperto) || null;

  const renderBlocco = (b: Blocco) => {
    const g = dati.gruppi[b.gid] || gruppoVuoto();
    const aperta = aperto === b.gid;
    const compilati = conteggio(b);
    return (
      <View key={b.gid} style={paginaStili.card}>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ expanded: aperta }}
          accessibilityLabel={`${b.titolo}, ${compilati} campi su ${b.campi.length} compilati`}
          onPress={() => setAperto(aperta ? null : b.gid)}
          style={stili.testata}
        >
          <Text style={paginaStili.titoloSezione}>{b.titolo}</Text>
          <Text style={paginaStili.piccolo}>
            {compilati}/{b.campi.length} compilati · {STATI.find((s) => s.id === g.stato)?.etichetta}
          </Text>
        </Pressable>
        {aperta && (
          <View>
            {!!b.descrizione && <Text style={paginaStili.piccolo}>{b.descrizione}</Text>}
            {!!b.paginaApp && <Text style={paginaStili.piccolo}>Questi dati servono alla pagina dell'app: {b.paginaApp}</Text>}
            {b.campi.map((c) => (
              <Campo
                key={c.id}
                label={c.def.etichetta}
                aiuto={c.def.aiuto}
                value={dati.campi[c.id] || ""}
                onChange={(v) => cambiaCampo(b.gid, c.id, v)}
                multiline={c.def.tipo === "lungo"}
                testID={`campo-${c.id}`}
              />
            ))}
            <Scelte<StatoGruppo>
              domanda="Stato di questa parte"
              opzioni={stati.map((s) => ({ id: s.id, label: s.etichetta }))}
              valore={g.stato}
              onScegli={(v) => cambiaGruppo(b.gid, { stato: v })}
              testID={`stato-${b.gid}`}
            />
            <Campo label="Fonte (norma, delibera, pagina ufficiale)" value={g.fonte} onChange={(v) => cambiaGruppo(b.gid, { fonte: v })} multiline />
            <Campo label="Data della verifica (gg/mm/aaaa)" value={g.data} onChange={(v) => cambiaGruppo(b.gid, { data: v })} />
            <Campo label="Note e cose che mancano" value={g.nota} onChange={(v) => cambiaGruppo(b.gid, { nota: v })} multiline />
          </View>
        )}
      </View>
    );
  };

  return (
    <Pagina salvabile={false} titolo={config.titolo} testID="accesso-comuni-modulo">
      <Intro>
        {config.nome}. {config.nota || ""} Quello che scrivi si salva solo quando premi «Salva»: puoi fermarti e riprendere in
        un'altra sessione. L'app pubblica non cambia da sola.
      </Intro>
      <ScriviciQuandoPronti comune={config.nome} />
      <Avviso>
        Da dove iniziare. Non serve compilare tutto e potete farlo poco alla volta, anche in giorni diversi. Partite da tre
        cose: 1) controllare «Dati del Comune» e «Referenti»; 2) controllare «Servizi sociali»; 3) descrivere un solo
        percorso, «Dopo una diagnosi: primi passi». Il resto è facoltativo e lo completiamo insieme.
      </Avviso>
      {ruolo === "admin" && (
        <Avviso>
          Accesso TutelApp. Comune aperto: {config.nome}.{" "}
          {Object.keys(COMUNI_PERCORSI)
            .filter((s) => s !== slug)
            .map((s) => (
              <Text key={s} style={stili.link} onPress={() => router.replace(`/accesso-comuni?comune=${s}`)}>
                Apri {COMUNI_PERCORSI[s].nome}{" "}
              </Text>
            ))}
        </Avviso>
      )}
      <Campo label="Il tuo nome e cognome" value={operatore} onChange={setOperatore} testID="operatore" />
      {!!messaggio && (
        <Text accessibilityRole="alert" style={stili.messaggio}>
          {messaggio}
        </Text>
      )}
      <View style={stili.riga}>
        <Bottone label={occupato ? "Un momento…" : "Salva"} onPress={salva} disabled={occupato || !modificato} testID="salva" />
        <Bottone variante="vuoto" label="Stampa" onPress={() => Platform.OS === "web" && window.print()} />
        <Bottone variante="vuoto" label="Esci" onPress={() => esci()} />
      </View>
      <Scelte<"dati" | "percorsi">
        domanda="Che cosa vuoi compilare?"
        opzioni={[
          { id: "dati", label: "Dati del Comune e servizi" },
          { id: "percorsi", label: "Percorsi del cittadino" },
        ]}
        valore={vista}
        onScegli={(v) => {
          setVista(v);
          setAperto(null);
        }}
      />
      {vista === "dati" && BLOCCHI_DATI.map(renderBlocco)}
      {vista === "percorsi" && !percorso &&
        BLOCCHI_PERCORSI.map((p) => (
          <Pressable
            key={p.id}
            accessibilityRole="button"
            accessibilityLabel={p.titolo}
            onPress={() => setPercorsoAperto(p.id)}
            style={paginaStili.card}
          >
            <Text style={paginaStili.titoloSezione}>{p.titolo}</Text>
            <Text style={paginaStili.piccolo}>{p.descrizione}</Text>
          </Pressable>
        ))}
      {vista === "percorsi" && percorso && (
        <View>
          <Bottone variante="vuoto" label="Torna all'elenco dei percorsi" onPress={() => setPercorsoAperto(null)} />
          <Text style={paginaStili.titoloSezione}>{percorso.titolo}</Text>
          <Text style={paginaStili.piccolo}>
            Compila i passaggi nell'ordine in cui il cittadino li vive. Usa i nomi che usate allo sportello, così la persona li
            ritrova in app.
          </Text>
          {percorso.blocchi.map(renderBlocco)}
        </View>
      )}
      {versioni.length > 0 && (
        <View style={paginaStili.card}>
          <Text style={paginaStili.titoloSezione}>Versioni salvate</Text>
          <Text style={paginaStili.piccolo}>Tocca una versione per riaprirla. Aprirla non cancella nulla.</Text>
          <View style={stili.riga}>
            {versioni.slice(0, 10).map((v) => (
              <Pressable key={v} accessibilityRole="button" accessibilityLabel={`Apri la versione ${Number(v)}`} onPress={() => apriVersione(v)} style={stili.chip}>
                <Text style={paginaStili.testo}>v{Number(v)}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </Pagina>
  );
}

const stili = StyleSheet.create({
  testata: { minHeight: 44, justifyContent: "center", paddingVertical: spacing.xs },
  riga: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm, marginBottom: spacing.md },
  chip: {
    minHeight: 44,
    minWidth: 44,
    paddingHorizontal: spacing.md,
    justifyContent: "center",
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.brandPrimaryDark,
    backgroundColor: colors.surface,
  },
  etichetta: { fontSize: 14, fontWeight: "800", color: colors.onSurface, marginBottom: 4 },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  errore: { color: "#8A1F1F", fontSize: 14, fontWeight: "700", marginBottom: spacing.md },
  messaggio: { color: colors.onSurface, fontSize: 14, marginBottom: spacing.md },
  link: { fontWeight: "800", textDecorationLine: "underline", color: colors.brandPrimaryDark },
});
