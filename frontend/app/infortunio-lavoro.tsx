// Mi sono fatto male al lavoro: a chi rivolgersi (INAIL).
// Contiene SOLO dati letti sulle pagine ufficiali di inail.it o scritti dall'INAIL in risposta a TutelApp (testo e allegati), ciascuno con fonte e data.
// Gli importi stanno in `src/lib/inailImporti.ts` (copiati dalla tabella INAIL, da ricontrollare ogni luglio).

import React, { useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

import { colors, fonts, radius, spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { euro, INAIL_CAPITALE_2019, INAIL_IMPORTI_AGGIORNATI_AL, INAIL_RENDITA_ANNUA } from "@/src/lib/inailImporti";
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


// ---------- Risposta scritta dell'INAIL (Direzione regionale Puglia, 03/11/2026) ----------
const FONTE_PUGLIA = "INAIL Direzione regionale Puglia · risposta scritta a TutelApp del 03/11/2026";
const RISPOSTA_IL = "03/11/2026";
const FONTE_GUIDA =
  "INAIL · Guida alle prestazioni (edizione 2018), allegata alla risposta della Direzione regionale Puglia del 03/11/2026";
const FONTE_TABELLA =
  "INAIL · Tabella indennizzo danno biologico, importi dal 01/07/2026, allegata alla risposta della Direzione regionale Puglia del 03/11/2026";

type Voce = { titolo: string; testo: string };
type SchedaTesto = {
  id: string;
  titolo: string;
  intro?: string;
  voci: Voce[];
  riferimenti?: string;
  /** Se manca, vale la risposta scritta della Direzione regionale Puglia */
  fonte?: string;
};

const SCHEDE_RISPOSTA: SchedaTesto[] = [
  {
    id: "indennita-giornaliera",
    titolo: "Se non puoi lavorare: l'indennità giornaliera",
    fonte: FONTE_GUIDA,
    intro:
      "È un indennizzo per la retribuzione che non prendi mentre sei assente dal lavoro a causa dell'infortunio o della malattia professionale.",
    voci: [
      {
        titolo: "Chi ne ha diritto",
        testo:
          "Serve che l'infortunio o la malattia siano causati dal lavoro e che l'inabilità ti tenga lontano dal lavoro per più di tre giorni.",
      },
      {
        titolo: "Da quando",
        testo:
          "Dal quarto giorno dopo la data dell'infortunio, o dopo quella in cui si è manifestata la malattia professionale.",
      },
      {
        titolo: "Per quanto tempo",
        testo: "Per tutto il periodo in cui non puoi lavorare, compresi i giorni festivi.",
      },
      {
        titolo: "Quanto",
        testo:
          "Il 60% della retribuzione media giornaliera fino al 90° giorno e il 75% dal 91° giorno fino alla guarigione clinica. La retribuzione media si calcola su quella effettivamente pagata nei 15 giorni prima dell'evento.",
      },
      {
        titolo: "Cosa paga il datore di lavoro",
        testo:
          "Deve pagarti l'intera retribuzione del giorno dell'infortunio e il 60% per i 3 giorni successivi, salvo condizioni migliori previste dai contratti collettivi.",
      },
      {
        titolo: "Tasse",
        testo: "L'indennità è soggetta a Irpef: la trattenuta la fa l'INAIL, che rilascia la certificazione fiscale.",
      },
    ],
  },
  {
    id: "danno-biologico",
    titolo: "Se resta una menomazione: l'indennizzo del danno biologico",
    fonte: FONTE_GUIDA,
    intro:
      "Se dopo l'infortunio o la malattia professionale resta una menomazione dell'integrità fisica o psichica, l'INAIL la valuta con una percentuale, secondo le tabelle del D.Lgs. 38/2000.",
    voci: [
      {
        titolo: "Chi ne ha diritto",
        testo:
          "Serve che la causa sia il lavoro e che la menomazione sia compresa tra il 6% e il 100%. Vale per gli infortuni dal 25 luglio 2000 e per le malattie professionali denunciate da quella data.",
      },
      { titolo: "Sotto il 6%", testo: "Nessun indennizzo per danno biologico." },
      {
        titolo: "Dal 6% al 15%",
        testo: "Indennizzo in una somma unica (in capitale), che dipende dal grado e dall'età.",
      },
      {
        titolo: "Dal 16% al 100%",
        testo:
          "Indennizzo in rendita, cioè un importo che si riceve ogni anno, più una quota di rendita per le conseguenze sul lavoro (conseguenze patrimoniali), calcolata con i coefficienti dell'INAIL.",
      },
      { titolo: "Tasse", testo: "Non è soggetto a Irpef." },
    ],
  },
  {
    id: "ausili",
    titolo: "Protesi, ortesi e ausili",
    intro:
      "Se l'infortunio o la malattia professionale hanno lasciato conseguenze, l'INAIL può fornire protesi, ortesi e ausili tecnici per recuperare autonomia e capacità di lavorare. Rientrano anche ausili informatici e per la casa, adattamenti del veicolo e interventi contro le barriere architettoniche.",
    voci: [
      {
        titolo: "Come parte la pratica",
        testo:
          "Può partire dal medico INAIL durante una visita, da una prescrizione di uno specialista di una struttura sanitaria esterna, oppure da una tua richiesta diretta.",
      },
      {
        titolo: "Se parti tu",
        testo:
          "Porti alla sede INAIL competente il modulo, con la documentazione sanitaria che serve a valutare il bisogno. Se il dispositivo deve essere fatto da un fornitore che scegli tu, serve anche un preventivo di spesa dettagliato: l'INAIL lo valuta.",
      },
      {
        titolo: "Prima l'autorizzazione",
        testo:
          "Di regola serve l'autorizzazione dell'INAIL prima dell'acquisto. Solo in caso di necessità e urgenza puoi acquistare da solo: poi l'INAIL controlla che fosse appropriato e rimborsa le spese nei limiti che ritiene congrui.",
      },
      {
        titolo: "Dopo il via libera",
        testo:
          "L'INAIL autorizza la fornitura e paga. Il dispositivo viene collaudato dal punto di vista sanitario. Nei casi previsti l'INAIL si occupa anche di manutenzione straordinaria, riparazione e rinnovo.",
      },
    ],
    riferimenti: "Riferimenti indicati dall'INAIL: Delibera del Consiglio di amministrazione n. 404/2021, Circolare INAIL n. 7/2022.",
  },
  {
    id: "reinserimento",
    titolo: "Tornare al lavoro dopo l'infortunio",
    intro:
      "Per chi ha conseguenze permanenti di un infortunio sul lavoro o di una malattia professionale, l'INAIL prevede un percorso per mantenere il posto di lavoro o riprendere l'attività, togliendo gli ostacoli che rendono difficile la mansione.",
    voci: [
      {
        titolo: "Cosa si può fare",
        testo:
          "Eliminare le barriere architettoniche nei luoghi di lavoro; adattare la postazione; fornire ausili, attrezzature e tecnologie per svolgere la mansione; organizzare formazione, addestramento e riqualificazione professionale.",
      },
      {
        titolo: "Chi può far partire il percorso",
        testo:
          "Il lavoratore, che spiega alla sede INAIL le difficoltà nel riprendere il lavoro; il datore di lavoro, che segnala la necessità di adattamenti; oppure l'INAIL stessa, quando i suoi operatori vedono il bisogno.",
      },
      {
        titolo: "Come funziona",
        testo:
          "1) La sede INAIL competente riceve la richiesta. 2) Medico, assistente sociale, consulente tecnico e personale amministrativo valutano la situazione. 3) Si esamina la mansione e l'ambiente di lavoro, anche con un sopralluogo e incontri con il datore di lavoro. 4) Si prepara un progetto personalizzato con obiettivi, misure, tempi, costi e soggetti coinvolti. 5) L'INAIL approva e finanzia. 6) Si realizzano gli interventi. 7) L'INAIL verifica che il lavoratore mantenga o recuperi la capacità di lavorare.",
      },
      {
        titolo: "L'assistente sociale INAIL",
        testo:
          "Aiuta a valutare i bisogni, ti accompagna nell'accesso alle prestazioni e alle opportunità del territorio, tiene il dialogo tra te, l'azienda e i servizi, e segue il percorso fino ai risultati.",
      },
    ],
    riferimenti:
      "Riferimenti indicati dall'INAIL: art. 1, comma 166, Legge n. 190/2014; Circolari INAIL n. 51/2016, n. 30/2017 e n. 6/2019.",
  },
  {
    id: "compatibilita",
    titolo: "Rendita INAIL e altri aiuti",
    intro:
      "Rendita e indennizzo INAIL hanno regole diverse da quelle di altri aiuti. Per ogni aiuto controlla sempre i requisiti sanitari ed economici e le eventuali incompatibilità.",
    voci: [
      {
        titolo: "Invalidità civile",
        testo:
          "Avere una rendita o un indennizzo INAIL non impedisce di chiedere l'invalidità civile: sono accertamenti diversi. La percentuale riconosciuta dall'INAIL non passa in automatico all'invalidità civile; serve il procedimento sanitario dell'INPS.",
      },
      {
        titolo: "Assegno di inclusione",
        testo:
          "Rendita o indennizzo INAIL, da soli, non escludono l'Assegno di inclusione. Dipende dai requisiti economici e dagli altri requisiti del nucleo familiare. La presenza in famiglia di una persona con disabilità è una delle condizioni che permettono di chiederlo.",
      },
      {
        titolo: "Indennità di accompagnamento",
        testo:
          "L'accompagnamento per invalidità civile è incompatibile con prestazioni analoghe riconosciute per invalidità da causa di lavoro, e si può scegliere il trattamento più favorevole. Avere una rendita INAIL non basta, da sola, a farlo scattare: conta se la prestazione INAIL ha natura e scopo analoghi all'accompagnamento.",
      },
      {
        titolo: "Legge 104",
        testo:
          "Il riconoscimento di una menomazione da parte dell'INAIL non vale in automatico come riconoscimento ai fini della Legge 104/1992. Per le agevolazioni, e in particolare per i permessi di lavoro, serve lo specifico riconoscimento sanitario previsto (per i permessi conta la condizione dell'art. 3, comma 3).",
      },
      {
        titolo: "Riforma della disabilità",
        testo:
          "Con la riforma (D.Lgs. 62/2024), nelle province dove è in corso la sperimentazione l'accertamento segue già la nuova valutazione di base dell'INPS (dal 1° marzo 2026 anche Brindisi e Roma). In tutta Italia è prevista dal 1° gennaio 2027.",
      },
    ],
  },
];

type SedePuglia = {
  citta: string;
  indirizzo: string;
  telefono: string;
  pec: string;
  sportello: string;
  ambulatorio: string;
};

const SEDI_PUGLIA: SedePuglia[] = [
  { citta: "Bari", indirizzo: "Corso Trieste 29, 70126 Bari", telefono: "080 5436111", pec: "bari@postacert.inail.it", sportello: "Da lunedì a venerdì mattina 8.30-12.00", ambulatorio: "Da lunedì a venerdì mattina 8.30-12.00" },
  { citta: "Barletta", indirizzo: "Via A. Vespucci 1, 76121 Barletta (BT)", telefono: "0883 343111", pec: "barletta@postacert.inail.it", sportello: "Martedì e giovedì mattina 8.30-12.00", ambulatorio: "Da lunedì a venerdì mattina 8.30-12.00" },
  { citta: "Monopoli", indirizzo: "Via Vittorio Veneto 62, 70043 Monopoli (BA)", telefono: "080 9302211", pec: "monopoli@postacert.inail.it", sportello: "Lunedì, martedì, mercoledì e venerdì mattina 8.30-12.00", ambulatorio: "Da lunedì a venerdì mattina 8.30-12.00" },
  { citta: "Altamura", indirizzo: "Via Lago Passarello 5, 70022 Altamura (BA)", telefono: "080 5436111", pec: "altamura@postacert.inail.it", sportello: "Lunedì e giovedì mattina 8.30-11.30", ambulatorio: "Lunedì, giovedì e venerdì mattina 8.30-11.30" },
  { citta: "Brindisi", indirizzo: "Via Palestro 4, 72100 Brindisi (BR)", telefono: "0831 472111", pec: "brindisi@postacert.inail.it", sportello: "Lunedì, martedì, giovedì e venerdì mattina 9.00-12.00", ambulatorio: "Da lunedì a venerdì mattina 9.00-12.30" },
  { citta: "Foggia", indirizzo: "Via A. Gramsci 19/21, 71122 Foggia (FG)", telefono: "0881 812111", pec: "foggia@postacert.inail.it", sportello: "Martedì e venerdì mattina 8.30-12.00", ambulatorio: "Da lunedì a venerdì mattina 8.30-14.00" },
  { citta: "Lecce", indirizzo: "Viale Oronzo Quarta 19B, 73100 Lecce (LE)", telefono: "0832 666111", pec: "lecce@postacert.inail.it", sportello: "Da lunedì a giovedì mattina 8.30-11.30", ambulatorio: "Da lunedì a venerdì mattina 8.30-12.30" },
  { citta: "Casarano", indirizzo: "Via Agnesi, contrada Pigna, 73042 Casarano (LE)", telefono: "0833 1939811", pec: "casarano@postacert.inail.it", sportello: "Lunedì, mercoledì e venerdì mattina 9.00-12.00", ambulatorio: "Lunedì, martedì, mercoledì e venerdì mattina 9.00-12.00" },
  { citta: "Taranto", indirizzo: "Via Plinio angolo Via Salinella, 74121 Taranto (TA)", telefono: "099 7322111", pec: "taranto@postacert.inail.it", sportello: "Lunedì e mercoledì mattina 8.15-12.15", ambulatorio: "Da lunedì a giovedì mattina 8.15-12.15" },
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


function SchedaRisposta({ s }: { s: SchedaTesto }) {
  return (
    <View style={paginaStili.card} testID={`infortunio-${s.id}`}>
      <Text style={styles.titolo} accessibilityRole="header">
        {s.titolo}
      </Text>
      {s.intro ? <Text style={styles.testo}>{s.intro}</Text> : null}
      {s.voci.map((v) => (
        <View key={v.titolo} style={styles.voce}>
          <Text style={styles.voceTitolo}>{v.titolo}</Text>
          <Text style={styles.testo}>{v.testo}</Text>
        </View>
      ))}
      {s.riferimenti ? <Text style={styles.controllo}>{s.riferimenti}</Text> : null}
      <Text style={styles.controllo}>
        Fonte: {s.fonte ?? FONTE_PUGLIA}. Controllato il {RISPOSTA_IL}.
      </Text>
    </View>
  );
}

function etichettaEta(e: string): string {
  return `${e} anni`;
}

function Importi() {
  const [rendita, setRendita] = useState(false);
  const [capitale, setCapitale] = useState(false);
  const [grado, setGrado] = useState(6);
  const gradi = Object.keys(INAIL_CAPITALE_2019).map(Number);
  return (
    <View testID="infortunio-importi">
      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Gli importi dal 1° luglio {INAIL_IMPORTI_AGGIORNATI_AL.slice(-4)}
      </Text>

      <View style={paginaStili.card} testID="infortunio-rendita">
        <Text style={styles.titolo} accessibilityRole="header">
          Rendita per danno biologico (dal 16%)
        </Text>
        <Text style={styles.testo}>
          Importo annuo in euro, per grado di menomazione. Gli importi vengono rivalutati ogni anno dal 1° luglio:
          questi sono quelli in vigore dal 1° luglio 2026 (aumento dell'1,4%). Non comprendono la quota per le
          conseguenze patrimoniali.
        </Text>
        <Pressable
          onPress={() => setRendita((v) => !v)}
          style={({ pressed }) => [styles.fonte, { marginTop: spacing.md }, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityState={{ expanded: rendita }}
          testID="infortunio-rendita-apri"
        >
          <Ionicons name={rendita ? "chevron-up" : "chevron-down"} size={16} color={colors.brandPrimaryDark} />
          <Text style={styles.fonteText}>{rendita ? "Nascondi la tabella" : "Mostra la tabella (dal 16% al 100%)"}</Text>
        </Pressable>
        {rendita
          ? INAIL_RENDITA_ANNUA.map((r) => (
              <View key={r.grado} style={styles.rigaTabella}>
                <Text style={styles.testo}>Grado {r.grado}%</Text>
                <Text style={styles.importo}>€ {euro(r.importo)} all'anno</Text>
              </View>
            ))
          : null}
        <Text style={styles.controllo}>Fonte: {FONTE_TABELLA}.</Text>
      </View>

      <View style={paginaStili.card} testID="infortunio-capitale">
        <Text style={styles.titolo} accessibilityRole="header">
          Somma unica per danno biologico (dal 6% al 15%)
        </Text>
        <Text style={styles.testo}>
          Importo in euro, per grado di menomazione e per età di chi ha avuto l'infortunio. Sono i valori della tabella
          2019 (D.M. n. 45/2019) aggiornati al 1° luglio 2026. Il file INAIL contiene anche una tabella del 2000, diversa
          per uomini e donne: se non sai quale vale per il tuo caso, chiedilo alla sede INAIL.
        </Text>
        <Pressable
          onPress={() => setCapitale((v) => !v)}
          style={({ pressed }) => [styles.fonte, { marginTop: spacing.md }, pressed && { opacity: 0.85 }]}
          accessibilityRole="button"
          accessibilityState={{ expanded: capitale }}
          testID="infortunio-capitale-apri"
        >
          <Ionicons name={capitale ? "chevron-up" : "chevron-down"} size={16} color={colors.brandPrimaryDark} />
          <Text style={styles.fonteText}>{capitale ? "Nascondi la tabella" : "Mostra la tabella"}</Text>
        </Pressable>
        {capitale ? (
          <View>
            <Text style={[styles.voceTitolo, { marginTop: spacing.md }]}>Scegli il grado di menomazione</Text>
            <View style={styles.gradi}>
              {gradi.map((g) => (
                <Pressable
                  key={g}
                  onPress={() => setGrado(g)}
                  style={({ pressed }) => [styles.grado, g === grado && styles.gradoAttivo, pressed && { opacity: 0.85 }]}
                  accessibilityRole="button"
                  accessibilityState={{ selected: g === grado }}
                  accessibilityLabel={`Grado ${g} per cento`}
                  testID={`infortunio-grado-${g}`}
                >
                  <Text style={[styles.fonteText, g === grado && { color: colors.onSurface }]}>{g}%</Text>
                </Pressable>
              ))}
            </View>
            {INAIL_CAPITALE_2019[grado].map((r) => (
              <View key={r.eta} style={styles.rigaTabella}>
                <Text style={styles.testo}>{etichettaEta(r.eta)}</Text>
                <Text style={styles.importo}>€ {euro(r.importo)}</Text>
              </View>
            ))}
          </View>
        ) : null}
        <Text style={styles.controllo}>Fonte: {FONTE_TABELLA}.</Text>
      </View>
    </View>
  );
}

function SediPuglia() {
  return (
    <View testID="infortunio-sedi-puglia">
      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Le sedi INAIL in Puglia
      </Text>
      {SEDI_PUGLIA.map((x) => (
        <View key={x.citta} style={paginaStili.card}>
          <Text style={styles.titolo} accessibilityRole="header">
            {x.citta}
          </Text>
          <Text style={styles.testo}>{x.indirizzo}</Text>
          <View style={styles.voce}>
            <Text style={styles.voceTitolo}>Sportello lavoratori</Text>
            <Text style={styles.testo}>{x.sportello}</Text>
          </View>
          <View style={styles.voce}>
            <Text style={styles.voceTitolo}>Ambulatorio</Text>
            <Text style={styles.testo}>{x.ambulatorio}</Text>
          </View>
          <View style={styles.voce}>
            <Text style={styles.voceTitolo}>PEC</Text>
            <Text style={styles.testo}>{x.pec}</Text>
          </View>
          <View style={styles.piede}>
            <Pressable
              onPress={() => apri(`tel:${x.telefono.replace(/\s/g, "")}`)}
              style={({ pressed }) => [styles.chiama, pressed && { opacity: 0.85 }]}
              accessibilityRole="button"
              accessibilityLabel={`Chiama la sede INAIL di ${x.citta}, ${x.telefono}`}
              testID={`infortunio-chiama-${x.citta.toLowerCase()}`}
            >
              <Ionicons name="call-outline" size={18} color={colors.onSurface} />
              <Text style={styles.chiamaTesto}>Chiama {x.telefono}</Text>
            </Pressable>
          </View>
        </View>
      ))}
      <Text style={styles.controllo}>
        Fonte: {FONTE_PUGLIA}. Controllato il {RISPOSTA_IL}.
      </Text>
    </View>
  );
}

export default function InfortunioLavoro() {
  return (
    <Pagina titolo="Mi sono fatto male al lavoro" testID="infortunio-lavoro-screen" sottotitoloSalvato="INAIL: a chi chiedere">
      <Intro>
        L'INAIL è l'istituto che assicura chi si fa male sul lavoro o si ammala per il suo lavoro, e dà prestazioni
        economiche, sanitarie e socio-sanitarie. Qui trovi cosa spetta, gli importi aggiornati, come chiedere protesi
        e ausili, come tornare al lavoro, il rapporto con gli altri aiuti e a chi rivolgerti.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        A chi chiedo
      </Text>
      {CONTATTI.map((c) => (
        <Scheda key={c.id} c={c} />
      ))}

      {SCHEDE_RISPOSTA.map((x) => (
        <SchedaRisposta key={x.id} s={x} />
      ))}

      <Importi />

      {comune.regione === "Puglia" ? <SediPuglia /> : null}

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
  voce: { marginTop: spacing.sm },
  rigaTabella: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.sm,
    minHeight: 44,
    borderBottomWidth: 1,
    borderBottomColor: colors.surfaceTertiary,
  },
  importo: { fontSize: 15, lineHeight: 22, fontWeight: "800", color: colors.onSurface },
  gradi: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm, marginVertical: spacing.sm },
  grado: {
    minWidth: 52,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.brandPrimaryDark,
  },
  gradoAttivo: { backgroundColor: colors.warningSoft },
  voceTitolo: { fontSize: 14, fontWeight: "800", color: colors.onSurface, marginBottom: 2 },
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
