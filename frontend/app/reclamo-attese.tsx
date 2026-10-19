// Reclamo per i tempi di attesa: modulo compilabile, destinatari e invio per email.
// Tutto avviene su questo dispositivo: i dati non vengono inviati a nessun server.

import { useEffect, useMemo, useState } from "react";
import { Image, Linking, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import * as Clipboard from "expo-clipboard";

import { colors, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { storage } from "@/src/utils/storage";
import { useSezione } from "@/src/lib/statistiche";
import { creaPdf } from "@/src/lib/documenti";
import {
  APS,
  DESTINATARI,
  PRIORITA,
  REGIONI,
  indirizzi,
  lineaFirma,
  mailto,
  mancanti,
  nasAutomatico,
  paragrafiModulo,
  regionePredefinita,
  struttureDi,
  suggerimentiPer,
  testoModulo,
  htmlModulo,
  type Allegati,
  type Struttura,
  type Valori,
} from "@/src/lib/reclamo";
import { Avviso, Bottone, Campo, Intro, Pagina, Scelte, paginaStili } from "@/src/components/Pagina";

const DATI_KEY = "tutelapp:reclamo:dati";
/** Dati personali che l'app ricorda su questo dispositivo (non quelli della prestazione) */
const RICORDATI = ["nome", "cognome", "luogoN", "provN", "nascita", "comune", "prov", "cap", "via", "civ", "cf", "cell", "tel", "email"];
const PASSI = ["Come funziona", "I tuoi dati", "La prestazione", "A chi inviare", "Controlla e invia"];
const LOGO = require("../assets/images/aps-gazebo-logo.png");

function BloccoAps() {
  return (
    <View style={st.aps} testID="reclamo-aps">
      <Image source={LOGO} style={st.apsLogo} accessibilityLabel="Logo APS Gazebo Sanità e Beni Comuni" />
      <View style={st.flex}>
        <Text style={st.apsNome}>{APS.nome}</Text>
        <Text style={st.apsRiga}>{APS.attivita}</Text>
        <Text style={st.apsRiga}>{APS.indirizzo} · {APS.cf}</Text>
        <Text style={st.apsRiga}>Tel. {APS.telefono} · {APS.email}</Text>
        <Text style={st.apsRiga}>{APS.sito}</Text>
        <Text style={st.apsRiga}>Facebook: {APS.facebook} · Instagram: {APS.instagram}</Text>
      </View>
    </View>
  );
}

function Disclaimer() {
  return (
    <View style={{ marginTop: spacing.md }}>
      <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>{APS.disclaimer}</Text>
      <BloccoAps />
    </View>
  );
}

function Spunta({ label, on, onPress, testID }: { label: string; on: boolean; onPress: () => void; testID?: string }) {
  return (
    <Pressable
      onPress={onPress}
      style={st.spunta}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: on }}
      testID={testID}
    >
      <Ionicons name={on ? "checkbox" : "square-outline"} size={24} color={on ? colors.brandPrimaryDark : "#8C8374"} />
      <Text style={st.spuntaText}>{label}</Text>
    </Pressable>
  );
}

export default function ReclamoAttese() {
  useSezione("reclamo-attese");
  const [passo, setPasso] = useState(0);
  const [v, setV] = useState<Valori>({});
  const [alleg, setAlleg] = useState<Allegati>({ identita: true, impegnativa: true, solleciti: false });
  const [regione, setRegione] = useState<string>(regionePredefinita(comune.regione) ?? "");
  const [struttura, setStruttura] = useState<Struttura | undefined>();
  const [cerca, setCerca] = useState("");
  const [addr, setAddr] = useState<Record<number, string>>({});
  const [provato, setProvato] = useState(false);
  const [avviso, setAvviso] = useState("");

  useEffect(() => {
    (async () => {
      const raw = await storage.getItem<string>(DATI_KEY, "");
      if (raw) {
        try {
          setV((x) => ({ ...JSON.parse(raw), ...x }));
        } catch {
          /* ignora */
        }
      }
    })();
  }, []);

  const set = (k: string, t: string) => {
    const nuovi = { ...v, [k]: k === "cf" ? t.toUpperCase() : t };
    setV(nuovi);
    if (RICORDATI.includes(k)) {
      storage.setItem(DATI_KEY, JSON.stringify(Object.fromEntries(RICORDATI.map((r) => [r, nuovi[r] || ""]))));
    }
  };

  const strutture = useMemo(() => struttureDi(regione), [regione]);
  const trovate = useMemo(() => {
    const q = cerca.trim().toLowerCase();
    if (!q) return [];
    return strutture.filter((s) => `${s[1]} ${s[0]}`.toLowerCase().includes(q)).slice(0, 25);
  }, [strutture, cerca]);

  const scegliRegione = (r: string) => {
    setRegione(r);
    setStruttura(undefined);
    setCerca("");
    setAddr({});
  };
  const scegliStruttura = (s: Struttura) => {
    setStruttura(s);
    setCerca("");
    setAddr((a) => ({ ...a, 0: s[2] || "", 4: nasAutomatico(regione, s[0]) }));
  };

  const mancano = mancanti(v);
  const haA = [0, 1].some((i) => indirizzi(addr[i]).length > 0);

  const avanti = () => {
    setAvviso("");
    setPasso((p) => Math.min(p + 1, PASSI.length - 1));
  };
  const indietro = () => setPasso((p) => Math.max(p - 1, 0));

  const prova = (azione: () => Promise<void> | void) => async () => {
    setProvato(true);
    if (mancano.length > 0) {
      setAvviso(`Completa prima: ${mancano.join(", ")}.`);
      return;
    }
    setAvviso("");
    try {
      await azione();
    } catch (e) {
      console.warn("reclamo", e);
      setAvviso("Non è stato possibile completare l'operazione. Riprova.");
    }
  };

  const campo = (id: string, label: string, extra?: { placeholder?: string; obbligatorio?: boolean; aiuto?: string; multiline?: boolean }) => (
    <Campo
      key={id}
      label={`${label}${extra?.obbligatorio ? " *" : ""}`}
      value={v[id] || ""}
      onChange={(t) => set(id, t)}
      placeholder={extra?.placeholder}
      multiline={extra?.multiline}
      aiuto={provato && extra?.obbligatorio && !(v[id] || "").trim() ? "Manca questa informazione" : extra?.aiuto}
      testID={`reclamo-${id}`}
    />
  );

  const piede = (
    <View>
      {avviso ? <Text style={st.errore}>{avviso}</Text> : null}
      <View style={st.piedeRiga}>
        {passo > 0 ? (
          <View style={st.flex}>
            <Bottone label="Indietro" icon="arrow-back" variante="vuoto" onPress={indietro} testID="reclamo-indietro" />
          </View>
        ) : null}
        {passo < PASSI.length - 1 ? (
          <View style={st.flex}>
            <Bottone label={passo === 0 ? "Inizia a compilare" : "Avanti"} icon="arrow-forward" onPress={avanti} testID="reclamo-avanti" />
          </View>
        ) : null}
      </View>
    </View>
  );

  return (
    <Pagina
      titolo="Reclamo liste d'attesa"
      testID="reclamo-screen"
      sottotitoloSalvato="Modulo pronto per l'invio"
      piede={piede}
    >
      <Text style={st.passo} accessibilityRole="header">
        Passo {passo + 1} di {PASSI.length} · {PASSI[passo]}
      </Text>

      {passo === 0 ? (
        <View>
          <Text style={st.titolo}>Reclamo per i tempi di attesa di visite ed esami</Text>
          <Intro>
            Hai ricevuto un appuntamento oltre i tempi indicati dal medico nella prescrizione? Qui
            compili il modulo, scegli a chi inviarlo e lo mandi per email, tutto in pochi passi.
          </Intro>
          <Avviso>
            I tuoi dati restano su questo dispositivo. TutelApp prepara il modulo e propone i
            destinatari: l&apos;invio lo decidi sempre tu e non garantisce l&apos;esito della richiesta.
          </Avviso>
          <Text style={paginaStili.titoloSezione}>Cosa ti serve</Text>
          <Text style={paginaStili.testo}>
            • la prescrizione (impegnativa){"\n"}• un documento d&apos;identità{"\n"}• la data in cui hai prenotato
            e quella dell&apos;appuntamento assegnato
          </Text>
          <Disclaimer />
        </View>
      ) : null}

      {passo === 1 ? (
        <View>
          <Text style={st.titolo}>I tuoi dati</Text>
          <Text style={[paginaStili.piccolo, { marginBottom: spacing.md }]}>
            Sono i campi «Io sottoscritto/a» del modulo. I campi con * sono necessari.
          </Text>
          {campo("nome", "Nome", { obbligatorio: true })}
          {campo("cognome", "Cognome", { obbligatorio: true })}
          {campo("luogoN", "Nato/a a", { obbligatorio: true })}
          {campo("provN", "Provincia di nascita", { placeholder: "Es. SP" })}
          {campo("nascita", "Data di nascita", { obbligatorio: true, placeholder: "gg/mm/aaaa" })}
          {campo("comune", "Residente in (città)", { obbligatorio: true })}
          {campo("prov", "Provincia", { placeholder: "Es. SP" })}
          {campo("cap", "C.A.P.")}
          {campo("via", "Via", { obbligatorio: true })}
          {campo("civ", "N.")}
          {campo("cf", "Codice fiscale", { obbligatorio: true, placeholder: "16 caratteri" })}
          {campo("cell", "Cellulare")}
          {campo("tel", "Telefono")}
          {campo("email", "E-mail")}
        </View>
      ) : null}

      {passo === 2 ? (
        <View>
          <Text style={st.titolo}>La prestazione</Text>
          {campo("dPresc", "In data (prescrizione)", { obbligatorio: true, placeholder: "gg/mm/aaaa" })}
          {campo("medico", "Il medico dr.", { obbligatorio: true })}
          {campo("prest", "Accertamento diagnostico prescritto", { obbligatorio: true, placeholder: "Es. Risonanza magnetica lombare" })}
          {campo("quesito", "Quesito diagnostico", { placeholder: "Es. Lombosciatalgia persistente" })}
          <Scelte
            domanda="Classe di priorità indicata nella prescrizione *"
            aiuto="I tempi massimi sono quelli scritti dal medico sulla prescrizione."
            opzioni={PRIORITA.map((p) => ({ id: p.id, label: p.label }))}
            valore={v.prio as any}
            onScegli={(x) => set("prio", x)}
            testID="reclamo-prio"
          />
          {campo("dPren", "In data (prenotazione)", { obbligatorio: true, placeholder: "gg/mm/aaaa" })}
          <Text style={paginaStili.titoloSezione}>Facoltativo</Text>
          <Text style={[paginaStili.piccolo, { marginBottom: spacing.sm }]}>
            Non compare nel modulo: lo usiamo solo nel testo dell&apos;email.
          </Text>
          {campo("dApp", "Data dell'appuntamento assegnato", { placeholder: "gg/mm/aaaa" })}
          {campo("struttura", "Struttura presso cui è stato prenotato")}
          {campo("note", "Eventuali note", { multiline: true })}
        </View>
      ) : null}

      {passo === 3 ? (
        <View>
          <Text style={st.titolo}>A chi inviare</Text>
          <Text style={[paginaStili.piccolo, { marginBottom: spacing.md }]}>
            Un&apos;unica email a tutti. Chi deve rispondere va in «A», gli altri enti in copia per
            conoscenza. Sono proposte: le puoi cambiare.
          </Text>

          <Text style={st.etichetta}>Regione</Text>
          <View style={st.chips}>
            {REGIONI.map((r) => (
              <Pressable
                key={r}
                onPress={() => scegliRegione(r)}
                style={[st.chip, r === regione && st.chipOn]}
                accessibilityRole="radio"
                accessibilityState={{ selected: r === regione }}
              >
                <Text style={[st.chipText, r === regione && st.chipTextOn]}>{r}</Text>
              </Pressable>
            ))}
          </View>

          {regione ? (
            <View style={{ marginTop: spacing.md }}>
              <Text style={st.etichetta}>Struttura (da qui prendiamo la mail URP)</Text>
              {struttura ? (
                <View style={st.scelta}>
                  <Ionicons name="checkmark-circle" size={22} color={colors.brandPrimaryDark} />
                  <View style={st.flex}>
                    <Text style={st.sceltaNome}>{struttura[1]}</Text>
                    <Text style={paginaStili.piccolo}>
                      {struttura[0]}
                      {struttura[2] ? "" : " · mail URP non pubblicata: inseriscila a mano"}
                    </Text>
                  </View>
                  <Pressable onPress={() => setStruttura(undefined)} hitSlop={8} accessibilityLabel="Cambia struttura">
                    <Text style={st.cambia}>Cambia</Text>
                  </Pressable>
                </View>
              ) : strutture.length ? (
                <View>
                  <TextInput
                    value={cerca}
                    onChangeText={setCerca}
                    placeholder="Scrivi il nome della struttura o della città"
                    placeholderTextColor="#9A9284"
                    style={st.input}
                    accessibilityLabel="Cerca la struttura"
                    testID="reclamo-cerca"
                  />
                  {cerca.trim() && !trovate.length ? (
                    <Text style={[paginaStili.piccolo, { marginTop: 6 }]}>
                      Nessuna struttura trovata: puoi inserire gli indirizzi a mano qui sotto.
                    </Text>
                  ) : null}
                  {trovate.map((s, i) => (
                    <Pressable key={`${s[1]}-${i}`} onPress={() => scegliStruttura(s)} style={st.riga} accessibilityRole="button">
                      <Text style={st.sceltaNome}>{s[1]}</Text>
                      <Text style={paginaStili.piccolo}>
                        {s[0]}
                        {s[2] ? "" : " · mail URP non pubblicata"}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              ) : (
                <Text style={paginaStili.piccolo}>
                  Per questa Regione non abbiamo ancora un elenco di strutture: inserisci gli
                  indirizzi a mano.
                </Text>
              )}
            </View>
          ) : null}

          {DESTINATARI.map((d) => {
            const sug = regione ? suggerimentiPer(d.id, regione, struttura) : suggerimentiPer(d.id, "", undefined);
            const attuale = indirizzi(addr[d.id]);
            return (
              <View key={d.id} style={st.dest}>
                <Text style={st.destNome}>
                  {d.id + 1}. {d.nome} <Text style={st.destGruppo}>({d.gruppo === "A" ? "A" : "Cc, per conoscenza"})</Text>
                </Text>
                <TextInput
                  value={addr[d.id] || ""}
                  onChangeText={(t) => setAddr((a) => ({ ...a, [d.id]: t }))}
                  placeholder="Indirizzo email o PEC"
                  placeholderTextColor="#9A9284"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={st.input}
                  accessibilityLabel={`Indirizzo: ${d.nome}`}
                  testID={`reclamo-addr-${d.id}`}
                />
                {d.id === 0 && struttura && !struttura[2] ? (
                  <Text style={st.attenzione}>Per questa struttura non risulta una mail URP pubblicata: cercala sul sito dell&apos;ente.</Text>
                ) : null}
                {sug.length ? (
                  <View style={st.chips}>
                    {sug.slice(0, 40).map((s, i) => {
                      const gia = attuale.includes(s.valore);
                      return (
                        <Pressable
                          key={`${s.valore}-${i}`}
                          onPress={() =>
                            setAddr((a) => {
                              const l = indirizzi(a[d.id]);
                              return { ...a, [d.id]: l.includes(s.valore) ? l.filter((x) => x !== s.valore).join(", ") : [...l, s.valore].join(", ") };
                            })
                          }
                          style={[st.chip, gia && st.chipOn]}
                          accessibilityRole="button"
                          accessibilityLabel={`${gia ? "Togli" : "Aggiungi"} ${s.etichetta}: ${s.valore}`}
                        >
                          <Text style={[st.chipText, gia && st.chipTextOn]}>
                            {s.consigliato ? "★ " : ""}
                            {s.etichetta}
                            {"\n"}
                            <Text style={st.chipMail}>{s.valore}</Text>
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                ) : (
                  <Text style={paginaStili.piccolo}>Nessun indirizzo proposto: scrivilo a mano.</Text>
                )}
              </View>
            );
          })}
          <Avviso style={{ marginTop: spacing.md }}>
            Gli indirizzi vengono da elenchi pubblici e possono cambiare: controllali sul sito
            dell&apos;ente prima di inviare. Il ★ indica l&apos;ufficio che copre la provincia della struttura.
          </Avviso>
        </View>
      ) : null}

      {passo === 4 ? (
        <View>
          <Text style={st.titolo}>Controlla e invia</Text>
          {mancano.length ? (
            <Avviso>Mancano ancora: {mancano.join(", ")}. Puoi tornare indietro a completarli.</Avviso>
          ) : (
            <Avviso>Tutti i dati richiesti sono compilati.</Avviso>
          )}

          <Text style={paginaStili.titoloSezione}>Allegati che aggiungerai alla mail</Text>
          <Spunta label="Documento di identità" on={alleg.identita} onPress={() => setAlleg((a) => ({ ...a, identita: !a.identita }))} testID="reclamo-all-id" />
          <Spunta label="Prescrizione (impegnativa)" on={alleg.impegnativa} onPress={() => setAlleg((a) => ({ ...a, impegnativa: !a.impegnativa }))} testID="reclamo-all-imp" />
          <Spunta label="Dettagli di eventuali solleciti già fatti" on={alleg.solleciti} onPress={() => setAlleg((a) => ({ ...a, solleciti: !a.solleciti }))} testID="reclamo-all-soll" />

          <Text style={paginaStili.titoloSezione}>Anteprima del modulo</Text>
          <View style={[paginaStili.card, st.carta]} testID="reclamo-anteprima">
            <Image source={LOGO} style={st.logoModulo} accessibilityLabel="Logo APS Gazebo Sanità e Beni Comuni" />
            <Text style={st.cartaTitolo}>RECLAMO{"\n"}MANCATO RISPETTO DEI TEMPI DI ATTESA PER VISITE ED ESAMI</Text>
            {paragrafiModulo(v, alleg).map((p, i) => (
              <Text key={i} style={p === "Premesso che" || p === "Chiedo" ? st.cartaSezione : st.cartaTesto}>
                {p}
              </Text>
            ))}
            <View style={st.firma}>
              <Text style={st.cartaTesto}>{lineaFirma(v).luogoData}</Text>
              <Text style={[st.cartaTesto, { textAlign: "center" }]}>In fede{"\n"}{lineaFirma(v).infede}</Text>
            </View>
          </View>

          <Text style={paginaStili.titoloSezione}>Destinatari</Text>
          <View style={paginaStili.card}>
            {DESTINATARI.map((d) => (
              <Text key={d.id} style={st.riepilogo}>
                <Text style={{ fontWeight: "800" }}>{d.gruppo === "A" ? "A" : "Cc"} · {d.nome}: </Text>
                {indirizzi(addr[d.id]).join(", ") || "—"}
              </Text>
            ))}
          </View>

          <Text style={paginaStili.titoloSezione}>Invia</Text>
          <Text style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
            1) Crea il PDF e salvalo. 2) Apri la mail: destinatari e testo sono già pronti. 3) Allega
            il PDF e i documenti scelti, controlla e invia.
          </Text>
          <Bottone
            label={Platform.OS === "web" ? "1. Crea il PDF da salvare" : "1. Crea e condividi il PDF"}
            icon="document-text-outline"
            onPress={prova(() => creaPdf(htmlModulo(v, alleg), "Reclamo_tempi_di_attesa.pdf"))}
            testID="reclamo-pdf"
          />
          <View style={{ height: spacing.sm }} />
          <Bottone
            label="2. Apri la mail pronta"
            icon="mail-outline"
            variante="vuoto"
            onPress={prova(() => {
              if (!haA) {
                setAvviso("Inserisci almeno l'indirizzo dell'URP della struttura o del distretto.");
                return;
              }
              return Linking.openURL(mailto(addr, v));
            })}
            testID="reclamo-mail"
          />
          <View style={{ height: spacing.sm }} />
          <Bottone
            label="Copia il testo del modulo"
            icon="copy-outline"
            variante="vuoto"
            onPress={prova(async () => {
              await Clipboard.setStringAsync(testoModulo(v, alleg));
              setAvviso("Testo copiato: puoi incollarlo in una email o in un documento.");
            })}
            testID="reclamo-copia"
          />
          <Disclaimer />
        </View>
      ) : null}
    </Pagina>
  );
}

const st = StyleSheet.create({
  flex: { flex: 1 },
  passo: { fontSize: 14, fontWeight: "700", color: colors.brandPrimaryDark, marginBottom: spacing.sm },
  titolo: { fontSize: 22, fontWeight: "800", color: colors.onSurface, marginBottom: spacing.sm },
  etichetta: { fontSize: 15, fontWeight: "800", color: colors.onSurface, marginBottom: 6 },
  errore: { fontSize: 14, fontWeight: "700", color: colors.brandPrimaryDark, textAlign: "center", marginBottom: 6 },
  piedeRiga: { flexDirection: "row", gap: spacing.sm },
  spunta: { flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 8 },
  spuntaText: { fontSize: 15, color: colors.onSurface, flex: 1 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  chip: { borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, borderRadius: radius.md, paddingVertical: 8, paddingHorizontal: 12, maxWidth: "100%" },
  chipOn: { borderColor: colors.brandPrimaryDark, backgroundColor: "#F6E7C8" },
  chipText: { fontSize: 13, lineHeight: 18, color: colors.onSurface, fontWeight: "700" },
  chipTextOn: { color: colors.brandPrimaryDark },
  chipMail: { fontWeight: "400", fontSize: 12 },
  input: { borderWidth: 1, borderColor: colors.border, backgroundColor: "#FFFFFF", borderRadius: radius.md, paddingHorizontal: 12, paddingVertical: 12, fontSize: 16, color: colors.onSurface },
  riga: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.border },
  scelta: { flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md },
  sceltaNome: { fontSize: 15, fontWeight: "800", color: colors.onSurface },
  cambia: { fontSize: 14, fontWeight: "800", color: colors.brandPrimaryDark, textDecorationLine: "underline" },
  dest: { marginTop: spacing.lg, paddingTop: spacing.md, borderTopWidth: 1, borderTopColor: colors.border },
  destNome: { fontSize: 15, fontWeight: "800", color: colors.onSurface, marginBottom: 6 },
  destGruppo: { fontWeight: "400", fontSize: 13 },
  attenzione: { fontSize: 13, color: colors.brandPrimaryDark, marginTop: 6 },
  carta: { backgroundColor: "#FFFFFF" },
  logoModulo: { width: 84, height: 84, alignSelf: "center", resizeMode: "contain", marginBottom: 6 },
  cartaTitolo: { fontSize: 15, fontWeight: "800", textAlign: "center", color: colors.onSurface, marginBottom: 12 },
  cartaSezione: { fontSize: 16, fontWeight: "800", textAlign: "center", color: colors.onSurface, marginVertical: 8 },
  cartaTesto: { fontSize: 14, lineHeight: 21, color: colors.onSurface, marginBottom: 8 },
  firma: { flexDirection: "row", justifyContent: "space-between", gap: 12, marginTop: 16 },
  riepilogo: { fontSize: 14, lineHeight: 21, color: colors.onSurface, marginBottom: 6 },
  aps: { flexDirection: "row", gap: 12, alignItems: "center", backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.lg, padding: spacing.md },
  apsLogo: { width: 80, height: 80, resizeMode: "contain", backgroundColor: "#FFFFFF", borderRadius: radius.sm },
  apsNome: { fontSize: 14, fontWeight: "800", color: colors.onSurface, marginBottom: 2 },
  apsRiga: { fontSize: 12, lineHeight: 18, color: colors.onSurface },
});
