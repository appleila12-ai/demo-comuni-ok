// Mi sono fatto male al lavoro: a chi rivolgersi (INAIL).
// Per ora contiene SOLO dati letti sulle pagine ufficiali di inail.it, ciascuno con fonte e data.
// Importi, soglie e compatibilità con 104 e invalidità civile si aggiungono solo dopo la conferma dell'INAIL.

import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { Avviso, Intro, Pagina, paginaStili } from "@/src/components/Pagina";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

const VERIFICATO_IL = "02/11/2026";

type Contatto = {
  id: string;
  titolo: string;
  testo: string;
  telefono?: { etichetta: string; valore: string };
  fonte: { label: string; url: string };
};

const CONTATTI: Contatto[] = [
  {
    id: "contact-center",
    titolo: "Contact Center INAIL",
    testo: "Il numero generale dell'INAIL. Risponde dal lunedì al venerdì, dalle 9.00 alle 18.00.",
    telefono: { etichetta: "06.6001", valore: "+39066001" },
    fonte: { label: "INAIL · Contact Center", url: "https://www.inail.it/portale/it/supporto/contact-center.html" },
  },
  {
    id: "superabile",
    titolo: "SuperAbile INAIL",
    testo:
      "Il contact center dell'INAIL sulla disabilità. Numero verde 800 810 810; da cellulare o dall'estero 06 45539607. La pagina ufficiale non indica gli orari.",
    telefono: { etichetta: "800 810 810", valore: "800810810" },
    fonte: {
      label: "INAIL · Contact center integrato SuperAbile",
      url: "https://www.inail.it/portale/assicurazione/it/focus/contact-center-integrato-superabile-inail.html",
    },
  },
  {
    id: "sedi",
    titolo: "La sede INAIL vicino a te",
    testo: "Indirizzi, telefoni ed email della Direzione regionale e delle sedi, scegliendo la tua Regione.",
    fonte: { label: "INAIL · Sedi", url: "https://www.inail.it/portale/it/supporto/sedi.html" },
  },
];

function Scheda({ c }: { c: Contatto }) {
  return (
    <View style={paginaStili.card} testID={`infortunio-${c.id}`}>
      <Text style={styles.titolo} accessibilityRole="header">
        {c.titolo}
      </Text>
      <Text style={styles.testo}>{c.testo}</Text>
      <View style={styles.piede}>
        {c.telefono ? (
          <Pressable
            onPress={() => apri(`tel:${c.telefono!.valore}`)}
            style={({ pressed }) => [styles.chiama, pressed && { opacity: 0.85 }]}
            accessibilityRole="button"
            accessibilityLabel={`Chiama ${c.titolo}, ${c.telefono.etichetta}`}
            testID={`infortunio-chiama-${c.id}`}
          >
            <Ionicons name="call-outline" size={18} color={colors.onSurface} />
            <Text style={styles.chiamaTesto}>Chiama {c.telefono.etichetta}</Text>
          </Pressable>
        ) : null}
        <Pressable
          onPress={() => apri(c.fonte.url)}
          style={({ pressed }) => [styles.fonte, pressed && { opacity: 0.85 }]}
          accessibilityRole="link"
          accessibilityLabel={`Apri la fonte: ${c.fonte.label}`}
        >
          <Ionicons name="open-outline" size={16} color={colors.brandPrimaryDark} />
          <Text style={styles.fonteText}>Apri la pagina ufficiale</Text>
        </Pressable>
      </View>
      <Text style={styles.controllo}>
        Controllato il {VERIFICATO_IL} · {c.fonte.label}
      </Text>
    </View>
  );
}

export default function InfortunioLavoro() {
  return (
    <Pagina titolo="Mi sono fatto male al lavoro" testID="infortunio-lavoro-screen" sottotitoloSalvato="INAIL: a chi chiedere">
      <Intro>
        L'INAIL è l'istituto che assicura chi si fa male sul lavoro o si ammala per il suo lavoro, e dà prestazioni
        economiche, sanitarie e socio-sanitarie. Per ora qui trovi a chi rivolgerti. Importi, soglie e rapporto con
        la Legge 104 e con l'invalidità civile li aggiungiamo solo quando li abbiamo verificati con l'INAIL.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        A chi chiedo
      </Text>
      {CONTATTI.map((c) => (
        <Scheda key={c.id} c={c} />
      ))}

      <Avviso>
        TutelApp non sostituisce l'INAIL, il patronato o il medico. Ti aiuta a capire dove andare: per la tua
        situazione chiedi sempre conferma all'ente.
      </Avviso>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  titolo: {
    fontFamily: fonts.serif,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: colors.onSurface,
    marginBottom: spacing.sm,
  },
  testo: { fontSize: 15, lineHeight: 22, color: colors.onSurface },
  piede: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  chiama: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 44,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: colors.warningSoft,
  },
  chiamaTesto: { fontSize: 14, fontWeight: "800", color: colors.onSurface },
  fonte: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 44,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.brandPrimaryDark,
    alignSelf: "flex-start",
  },
  fonteText: { fontSize: 14, fontWeight: "800", color: colors.brandPrimaryDark },
  controllo: { fontSize: 14, lineHeight: 20, color: colors.onSurfaceSecondary, marginTop: spacing.sm },
});
