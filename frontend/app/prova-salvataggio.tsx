// PAGINA DI PROVA (non collegata a nessun menu): serve a vedere, su iPhone e su Android veri,
// quali "posti" già sincronizzati dal telefono possono tenere un codice di recupero.
// Usa solo dati finti. Non legge né scrive i dati dell'app.

import React, { useEffect, useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const el = React.createElement as any;

/** codice finto di lunghezza scelta (lettere e numeri) */
const codice = (n: number) => {
  const a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < n; i++) s += a[(i * 7 + 3) % a.length];
  return s.replace(/(.{4})/g, "$1-").replace(/-$/, "");
};

const LUNGHEZZE = [40, 600, 2000];

export default function ProvaSalvataggio() {
  const [info, setInfo] = useState<string[]>([]);
  const [esito, setEsito] = useState("");
  const [n, setN] = useState(LUNGHEZZE[0]);
  const testo = codice(n);

  useEffect(() => {
    if (Platform.OS !== "web") return;
    const nav: any = navigator;
    const w: any = window;
    const righe = [
      `Dall'icona sulla Home: ${w.matchMedia?.("(display-mode: standalone)")?.matches || nav.standalone ? "SÌ" : "no (è nel browser)"}`,
      `Menu di condivisione: ${nav.share ? "sì" : "no"}`,
      `Condivisione file: ${nav.canShare?.({ files: [new File(["a"], "a.txt", { type: "text/plain" })] }) ? "sì" : "no"}`,
      `Salvataggio password (PasswordCredential): ${w.PasswordCredential ? "sì" : "no"}`,
    ];
    setInfo(righe);
    nav.storage?.persisted?.().then((p: boolean) => setInfo((v) => [...v, `Dati "persistenti": ${p ? "sì" : "no"}`]));
  }, []);

  if (Platform.OS !== "web") {
    return (
      <View style={s.p}>
        <Text style={s.t}>Pagina di prova solo per il sito.</Text>
      </View>
    );
  }

  const nav: any = navigator;

  const provaPassword = async () => {
    try {
      const w: any = window;
      if (w.PasswordCredential && nav.credentials?.store) {
        await nav.credentials.store(new w.PasswordCredential({ id: "TutelApp prova", password: testo, name: "TutelApp prova" }));
      }
    } catch {
      /* ok: ci pensa il modulo */
    }
    // il modulo vero va "inviato" in un riquadro nascosto, così il telefono propone di salvare la password
    (document.getElementById("modulo-prova") as HTMLFormElement | null)?.requestSubmit?.();
    setEsito("Prova 1 inviata: è comparsa la domanda «Salvare la password?» (o «Salva password»)?");
  };

  const ics = () =>
    [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//TutelApp//Prova//IT",
      "BEGIN:VEVENT",
      `UID:prova-${Date.now()}@tutelapp`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
      "DTSTART;VALUE=DATE:20301231",
      "DTEND;VALUE=DATE:20310101",
      "SUMMARY:Copia TutelApp (PROVA)",
      `DESCRIPTION:Codice di prova: ${testo}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

  const provaCalendarioFile = async () => {
    const f = new File([ics()], "TutelApp-prova.ics", { type: "text/calendar" });
    try {
      if (nav.canShare?.({ files: [f] })) {
        await nav.share({ files: [f], title: "Copia TutelApp (PROVA)" });
        setEsito("Prova 2a: si è aperto il menu. C'era «Aggiungi al calendario»? L'evento è comparso il 31/12/2030?");
        return;
      }
    } catch (e: any) {
      if (e?.name === "AbortError") return;
    }
    scarica(f);
    setEsito("Prova 2a: file scaricato. Aprilo: il telefono propone di aggiungerlo al calendario?");
  };
  const scarica = (f: File) => {
    const u = URL.createObjectURL(f);
    const a = document.createElement("a");
    a.href = u;
    a.download = f.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const provaCalendarioScarica = () => {
    scarica(new File([ics()], "TutelApp-prova.ics", { type: "text/calendar" }));
    setEsito("Fatto. Il telefono ti ha proposto di aggiungere l'evento al calendario? Compare il 31/12/2030?");
  };

  const provaEmail = () => {
    const corpo = encodeURIComponent(`Codice di prova TutelApp:\n${testo}`);
    window.location.href = `mailto:?subject=${encodeURIComponent("Copia TutelApp (PROVA)")}&body=${corpo}`;
    setEsito("Prova 3: si è aperta la posta con il testo già scritto? Il codice è intero?");
  };

  const provaTesto = async () => {
    try {
      await nav.share({ text: `Codice di prova TutelApp: ${testo}` });
      setEsito("Prova 4: nel menu c'era «Note» (o simile)? Il testo è arrivato intero?");
    } catch (e: any) {
      if (e?.name !== "AbortError") setEsito("Prova 4: il menu non si apre su questo telefono.");
    }
  };

  return (
    <ScrollView contentContainerStyle={s.p}>
      <Text style={s.h}>Prova</Text>
      <Text style={s.t}>Tocca il tasto: il telefono ti propone di aggiungere l'evento al calendario. Dati finti.</Text>
      <Pressable style={s.b} onPress={provaCalendarioScarica} accessibilityRole="button" accessibilityLabel="Salva">
        <Text style={s.bt}>Salva</Text>
      </Pressable>

      {esito ? <Text style={s.esito}>{esito}</Text> : null}

    </ScrollView>
  );
}

const s = StyleSheet.create({
  p: { padding: 20, maxWidth: 560, width: "100%", alignSelf: "center", paddingBottom: 80 },
  h: { fontSize: 26, fontWeight: "800", marginBottom: 8 },
  sub: { fontSize: 17, fontWeight: "800", marginTop: 20, marginBottom: 8 },
  t: { fontSize: 16, lineHeight: 23, marginBottom: 4 },
  riga: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 12 },
  chip: { borderWidth: 1.5, borderColor: "#2F6F5E", borderRadius: 20, paddingVertical: 8, paddingHorizontal: 14 },
  chipOn: { backgroundColor: "#2F6F5E" },
  chipT: { fontSize: 15, fontWeight: "700", color: "#2F6F5E" },
  b: { backgroundColor: "#2F6F5E", borderRadius: 28, minHeight: 54, justifyContent: "center", paddingHorizontal: 20, marginTop: 10 },
  bt: { color: "#fff", fontSize: 17, fontWeight: "800" },
  esito: { marginTop: 16, fontSize: 16, lineHeight: 23, fontWeight: "700", backgroundColor: "#FFF4D6", padding: 12, borderRadius: 10 },
});
