// Pagina "Per i Comuni": modulo con cui un Comune, un ambito sociale o un ente
// può contattare TutelApp. La richiesta arriva a info@tutelapp.it (Netlify Forms,
// nessun server da gestire). Il modulo "gemello" che Netlify riconosce al
// momento della pubblicazione è in public/form-contatto.html: i nomi dei campi
// devono restare identici.

import { useState } from "react";
import { Linking, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { Avviso, Bottone, Campo, Intro, Pagina, Scelte } from "@/src/components/Pagina";
import { comune, comuneScelto } from "@/src/config/comune";
import { CANALE_YOUTUBE, CONTATTO_TUTELAPP, SITO_TUTELAPP } from "@/src/lib/richiestaComune";
import { colors, radius, spacing } from "@/src/theme";

const NOME_FORM = "contatto-comune";
const BASE_INVIO = Platform.OS === "web" ? "" : "https://www.tutelapp.it";
// Si prova prima la pagina principale, poi la pagina del modulo nascosto di Netlify
const INDIRIZZI_INVIO = [`${BASE_INVIO}/`, `${BASE_INVIO}/form-contatto.html`];

type Motivo = "demo" | "info" | "altro";
const MOTIVI: { id: Motivo; label: string }[] = [
  { id: "demo", label: "Vorrei una presentazione o una demo" },
  { id: "info", label: "Vorrei avere più informazioni" },
  { id: "altro", label: "Altro" },
];
const ETICHETTA_MOTIVO: Record<Motivo, string> = {
  demo: "Presentazione o demo",
  info: "Più informazioni",
  altro: "Altro",
};

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Stato = "pronto" | "invio" | "inviato" | "errore";

function codifica(dati: Record<string, string>): string {
  return Object.entries(dati)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

export default function PerIComuni() {
  const [ente, setEnte] = useState(comuneScelto() ? comune.nome : "");
  const [nome, setNome] = useState("");
  const [ruolo, setRuolo] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [motivo, setMotivo] = useState<Motivo | undefined>(undefined);
  const [messaggio, setMessaggio] = useState("");
  const [consenso, setConsenso] = useState(false);
  const [errori, setErrori] = useState<string[]>([]);
  const [stato, setStato] = useState<Stato>("pronto");

  const controlla = (): string[] => {
    const e: string[] = [];
    if (!ente.trim()) e.push("Scrivi il nome del Comune o dell'ente.");
    if (!nome.trim()) e.push("Scrivi il tuo nome e cognome.");
    if (!EMAIL_OK.test(email.trim())) e.push("Scrivi un indirizzo email o PEC valido, così possiamo risponderti.");
    if (!consenso) e.push("Per inviare serve spuntare l'autorizzazione a usare i dati per risponderti.");
    return e;
  };

  const invia = async () => {
    const e = controlla();
    setErrori(e);
    if (e.length) return;
    setStato("invio");
    try {
      const corpo = codifica({
        "form-name": NOME_FORM,
        ente: ente.trim(),
        nome: nome.trim(),
        ruolo: ruolo.trim(),
        email: email.trim(),
        telefono: telefono.trim(),
        motivo: motivo ? ETICHETTA_MOTIVO[motivo] : "",
        messaggio: messaggio.trim(),
        consenso: "sì",
      });
      let risposta: Response | undefined;
      for (const indirizzo of INDIRIZZI_INVIO) {
        try {
          risposta = await fetch(indirizzo, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: corpo,
          });
          if (risposta.ok) break;
        } catch {
          /* prova l'indirizzo successivo */
        }
      }
      if (!risposta) throw new Error("invio non riuscito");
      setStato(risposta.ok ? "inviato" : "errore");
    } catch {
      setStato("errore");
    }
  };

  // Se l'invio non riesce resta la via classica: una mail già compilata
  const scriviMail = () => {
    const corpo = [
      `Ente: ${ente.trim()}`,
      `Nome: ${nome.trim()}`,
      ruolo.trim() ? `Ruolo: ${ruolo.trim()}` : "",
      `Email: ${email.trim()}`,
      telefono.trim() ? `Telefono: ${telefono.trim()}` : "",
      motivo ? `Motivo: ${ETICHETTA_MOTIVO[motivo]}` : "",
      "",
      messaggio.trim(),
    ]
      .filter((r, i, a) => r !== "" || (i > 0 && a[i - 1] !== ""))
      .join("\r\n");
    Linking.openURL(
      `mailto:${CONTATTO_TUTELAPP}?subject=${encodeURIComponent("Richiesta da un ente - TutelApp")}&body=${encodeURIComponent(corpo)}`,
    ).catch(() => {});
  };

  // Il libretto è un file del sito (frontend/public/libretto.pdf): si apre in una nuova scheda
  const apriLibretto = () => {
    if (Platform.OS === "web") {
      window.open("/libretto.pdf", "_blank", "noopener");
    } else {
      Linking.openURL(`https://${SITO_TUTELAPP.replace(/^https?:\/\//, "")}/libretto.pdf`).catch(() => {});
    }
  };

  if (stato === "inviato") {
    return (
      <Pagina titolo="Per i Comuni" testID="per-i-comuni-screen" salvabile={false}>
        <View style={styles.esito} testID="per-i-comuni-ok" accessibilityLiveRegion="polite">
          <Ionicons name="checkmark-circle" size={36} color={colors.success} />
          <Text style={styles.esitoTitolo}>Richiesta inviata</Text>
          <Text style={styles.esitoTesto}>
            Grazie! Ti risponderemo all'indirizzo che hai indicato ({email.trim()}). Se hai fretta
            puoi scriverci a {CONTATTO_TUTELAPP}.
          </Text>
        </View>
      </Pagina>
    );
  }

  return (
    <Pagina titolo="Per i Comuni" testID="per-i-comuni-screen" salvabile={false}>
      <Intro>
        Sei un Comune, un ambito sociale o un ente? Compila il modulo: ti rispondiamo per
        presentarti TutelApp e capire insieme come attivarla sul tuo territorio. Puoi vederla
        subito su {SITO_TUTELAPP} e vedere i video sul canale YouTube.
      </Intro>

      <Pressable
        onPress={() => Linking.openURL(CANALE_YOUTUBE).catch(() => {})}
        style={styles.link}
        accessibilityRole="link"
        accessibilityLabel="Guarda i video di TutelApp sul canale YouTube"
        testID="per-i-comuni-youtube"
      >
        <Ionicons name="logo-youtube" size={18} color={colors.brandPrimaryDark} />
        <Text style={styles.linkTesto}>Guarda i video sul canale YouTube di TutelApp</Text>
      </Pressable>

      <Pressable
        onPress={apriLibretto}
        style={styles.link}
        accessibilityRole="link"
        accessibilityLabel="Scarica il libretto di TutelApp per i Comuni, in PDF"
        testID="per-i-comuni-libretto"
      >
        <Ionicons name="document-text-outline" size={18} color={colors.brandPrimaryDark} />
        <Text style={styles.linkTesto}>Scarica il libretto</Text>
      </Pressable>

      <Campo label="Comune o ente" value={ente} onChange={setEnte} placeholder="Es. Comune di Sarzana" testID="per-i-comuni-ente" />
      <Campo label="Nome e cognome" value={nome} onChange={setNome} testID="per-i-comuni-nome" />
      <Campo
        label="Ruolo (facoltativo)"
        value={ruolo}
        onChange={setRuolo}
        placeholder="Es. Assessore ai Servizi Sociali"
        testID="per-i-comuni-ruolo"
      />
      <Campo
        label="Email o PEC"
        value={email}
        onChange={setEmail}
        placeholder="nome@comune.it"
        testID="per-i-comuni-email"
      />
      <Campo
        label="Telefono (facoltativo)"
        value={telefono}
        onChange={setTelefono}
        testID="per-i-comuni-telefono"
      />
      <Scelte
        domanda="Come possiamo aiutarti?"
        opzioni={MOTIVI}
        valore={motivo}
        onScegli={setMotivo}
        testID="per-i-comuni-motivo"
      />
      <Campo
        label="Messaggio (facoltativo)"
        value={messaggio}
        onChange={setMessaggio}
        multiline
        testID="per-i-comuni-messaggio"
      />

      <Pressable
        onPress={() => setConsenso((v) => !v)}
        style={styles.consenso}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: consenso }}
        accessibilityLabel="Autorizzo TutelApp a usare questi dati solo per rispondere alla mia richiesta"
        testID="per-i-comuni-consenso"
      >
        <Ionicons
          name={consenso ? "checkbox" : "square-outline"}
          size={26}
          color={consenso ? colors.brandPrimaryDark : colors.onSurface}
        />
        <Text style={styles.consensoTesto}>
          Autorizzo TutelApp a usare questi dati solo per rispondere alla mia richiesta. Non
          chiediamo dati di persone con disabilità.
        </Text>
      </Pressable>

      {errori.length > 0 ? (
        <View style={styles.errori} accessibilityLiveRegion="assertive" testID="per-i-comuni-errori">
          {errori.map((m) => (
            <Text key={m} style={styles.erroreTesto}>
              • {m}
            </Text>
          ))}
        </View>
      ) : null}

      {stato === "errore" ? (
        <Avviso style={{ marginBottom: spacing.md }}>
          Non siamo riusciti a inviare il modulo. Riprova tra poco, oppure scrivici direttamente
          a {CONTATTO_TUTELAPP}.
        </Avviso>
      ) : null}

      <Bottone
        label={stato === "invio" ? "Invio in corso…" : "Invia la richiesta"}
        icon="paper-plane-outline"
        onPress={invia}
        disabled={stato === "invio"}
        testID="per-i-comuni-invia"
      />
      {stato === "errore" ? (
        <View style={{ marginTop: spacing.sm }}>
          <Bottone
            label="Scrivici una mail"
            icon="mail-outline"
            variante="vuoto"
            onPress={scriviMail}
            testID="per-i-comuni-mail"
          />
        </View>
      ) : null}
    </Pagina>
  );
}

const styles = StyleSheet.create({
  link: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
  },
  linkTesto: { fontSize: 15, fontWeight: "700", color: colors.brandPrimaryDark, flex: 1 },
  consenso: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  consensoTesto: { flex: 1, fontSize: 15, lineHeight: 22, color: colors.onSurface },
  errori: {
    backgroundColor: colors.errorSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    gap: 4,
  },
  erroreTesto: { fontSize: 15, lineHeight: 21, color: colors.onSurface },
  esito: {
    backgroundColor: colors.successSoft,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
    gap: spacing.md,
  },
  esitoTitolo: { fontSize: 20, fontWeight: "800", color: colors.onSurface },
  esitoTesto: { fontSize: 16, lineHeight: 23, color: colors.onSurface, textAlign: "center" },
});
