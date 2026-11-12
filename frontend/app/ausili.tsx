// Ausili, protesi e ortesi: parte NAZIONALE, scritta solo dal DPCM 12 gennaio 2017 (artt. 17 e 18),
// Gazzetta Ufficiale n. 65 del 18/03/2017, S.O. n. 15. Le regole locali (uffici, moduli, tempi dell'ASL)
// non sono qui: si aggiungono solo con la risposta scritta dell'ASL (ASL 5 Spezzino: src/lib/ausiliAsl5.ts, risposta dell'URP, novembre 2026).

import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

import { spacing } from "@/src/theme";
import { comune } from "@/src/config/comune";
import { useSezione } from "@/src/lib/statistiche";
import { Avviso, Bottone, Intro, Pagina, paginaStili } from "@/src/components/Pagina";
import { fattoCapoAsl5 } from "@/src/lib/esenzioneAsl5";
import {
  COME_SI_PRESENTA_AUSILI_ASL5,
  DOCUMENTI_AUSILI_ASL5,
  FONTE_AUSILI_ASL5,
  RIPARAZIONE_AUSILI_ASL5,
  TRASPORTO_ASL5_MANCA,
  SENZA_MAIL_AUSILI_ASL5,
  SPORTELLI_AUSILI_ASL5,
  TEMPI_AUSILI_ASL5,
  mailProtesicaAsl5,
} from "@/src/lib/ausiliAsl5";

const apri = (url: string) => Linking.openURL(url).catch(() => {});

const DPCM_URL = "https://www.gazzettaufficiale.it/eli/gu/2017/03/18/65/so/15/sg/pdf";
const MINISTERO_URL = "https://www.salute.gov.it/new/it/tema/livelli-essenziali-di-assistenza/assistenza-protesica/";

const CHI_HA_DIRITTO = [
  "Le persone con invalidità civile, di guerra o per servizio, i ciechi e gli ipovedenti gravi e i sordi, per le menomazioni accertate",
  "I minori di 18 anni che hanno bisogno di prevenzione, cura o riabilitazione per un'invalidità grave e permanente",
  "Chi ha presentato domanda di riconoscimento dell'invalidità con riduzione della capacità lavorativa superiore a un terzo",
  "Chi è in attesa dell'accertamento, se lo specialista che prescrive attesta che l'ausilio è necessario e urgente",
  "Le persone amputate di un arto, le donne senza mammelle o sottoposte a mastectomia, chi ha subito un intervento che ha asportato l'occhio",
  "Le persone con una malattia rara dell'elenco ministeriale, per le menomazioni collegate alla malattia",
];

const COSA_COMPRENDE = [
  "Protesi e ortesi su misura, realizzate da un professionista abilitato",
  "Ausili di serie che devono essere applicati da un professionista sanitario",
  "Ausili di serie pronti all'uso, che non richiedono un professionista",
];

const COME_FUNZIONA = [
  "La prescrizione la fa il medico specialista, dentro un piano riabilitativo-assistenziale che spiega a cosa serve l'ausilio",
  "La fornitura la autorizza l'ASL: senza la sua autorizzazione il Servizio sanitario non paga",
  "Di norma il dispositivo diventa di tua proprietà e sei tu a custodirlo e a tenerlo in buono stato",
];

const SOSTITUZIONE = [
  "Per i maggiorenni, un nuovo ausilio si può avere dopo i tempi minimi di rinnovo previsti per quel tipo di dispositivo",
  "Prima di quei tempi, se cambiano le esigenze terapeutiche o riabilitative o lo stato di salute (serve la relazione dettagliata del medico che prescrive)",
  "Prima di quei tempi, se l'ausilio si rompe o si consuma senza colpa tua (non per uso improprio o incuria) e la riparazione non è possibile o non conviene",
  "Per i minori di 18 anni non valgono i tempi minimi: l'ASL autorizza sostituzioni o modifiche in base ai controlli clinici e al piano riabilitativo",
];

function Elenco({ voci }: { voci: string[] }) {
  return (
    <View style={paginaStili.card}>
      {voci.map((v) => (
        <Text key={v} style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
          • {v}
        </Text>
      ))}
    </View>
  );
}

// Carro, Maissana e Varese Ligure sono in provincia della Spezia ma fanno capo all'ASL 4: per loro la scheda ASL 5 non vale
const asl5 = () => comune.provincia === "SP" && fattoCapoAsl5(comune.nomeBreve);

function AusiliAsl5() {
  const { mail, zona } = mailProtesicaAsl5(comune.nomeBreve);
  return (
    <View testID="ausili-asl5">
      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Dove presentare la richiesta (ASL 5)
      </Text>
      <Text style={[paginaStili.testo, st.nota]}>{COME_SI_PRESENTA_AUSILI_ASL5}</Text>
      <Text style={[paginaStili.testo, st.nota]}>Per {zona}:</Text>
      <Bottone
        label={`Scrivi a ${mail}`}
        icon="mail-outline"
        onPress={() => apri(`mailto:${mail}`)}
        testID="ausili-asl5-mail"
      />
      <Text style={[paginaStili.testo, st.nota]}>{SENZA_MAIL_AUSILI_ASL5}</Text>
      <View style={paginaStili.card}>
        {SPORTELLI_AUSILI_ASL5.map((s) => (
          <Text key={s.luogo} style={[paginaStili.testo, { marginBottom: spacing.sm }]}>
            • {s.luogo}: {s.quando}
          </Text>
        ))}
      </View>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Cosa portare
      </Text>
      <Elenco voci={DOCUMENTI_AUSILI_ASL5} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Quanto ci vuole
      </Text>
      <Elenco voci={TEMPI_AUSILI_ASL5} />
      <Text style={[paginaStili.testo, st.nota]}>{RIPARAZIONE_AUSILI_ASL5}</Text>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        {TRASPORTO_ASL5_MANCA.titolo}
      </Text>
      <Avviso>{TRASPORTO_ASL5_MANCA.testo}</Avviso>
      <Text style={[paginaStili.testo, st.nota]}>{TRASPORTO_ASL5_MANCA.invito}</Text>
      <Bottone
        label={`Scrivi all'URP dell'ASL 5 · ${TRASPORTO_ASL5_MANCA.mail}`}
        icon="mail-outline"
        variante="vuoto"
        onPress={() => apri(`mailto:${TRASPORTO_ASL5_MANCA.mail}`)}
        testID="ausili-asl5-trasporto-mail"
      />
      <Bottone
        label={`Chiama l'URP · ${TRASPORTO_ASL5_MANCA.telefono}`}
        icon="call-outline"
        variante="vuoto"
        onPress={() => apri(`tel:${TRASPORTO_ASL5_MANCA.telefono.replace(/\s+/g, "")}`)}
        testID="ausili-asl5-trasporto-tel"
      />
      <Text style={[paginaStili.testo, st.nota]}>
        Dal telefono fisso si può chiamare anche il numero verde {TRASPORTO_ASL5_MANCA.telefonoVerde}.
      </Text>
      <Text style={[paginaStili.testo, st.fonte]}>Fonte: {FONTE_AUSILI_ASL5}</Text>
    </View>
  );
}

export default function Ausili() {
  useSezione("ausili");
  return (
    <Pagina titolo="Ausili e protesi" testID="ausili-screen" sottotitoloSalvato="Ausili, protesi e ortesi">
      <Intro>
        Il Servizio sanitario garantisce protesi, ortesi e ausili a chi ne ha diritto. Prima di comprare un ausilio
        da solo, chiedi al medico specialista se rientra tra quelli forniti dal Servizio sanitario.
      </Intro>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Chi ha diritto
      </Text>
      <Elenco voci={CHI_HA_DIRITTO} />
      <Avviso>Per gli infortuni sul lavoro i dispositivi li fornisce l&apos;INAIL, con le sue modalità.</Avviso>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Cosa comprende
      </Text>
      <Elenco voci={COSA_COMPRENDE} />
      <Text style={[paginaStili.testo, st.nota]}>
        L&apos;elenco dei dispositivi garantiti è il «nomenclatore» dei livelli essenziali di assistenza. Se vuoi un
        dispositivo con caratteristiche diverse da quelle previste, l&apos;ASL può autorizzarlo ma la differenza di
        costo resta a tuo carico.
      </Text>

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Come funziona
      </Text>
      <Elenco voci={COME_FUNZIONA} />

      <Text style={paginaStili.titoloSezione} accessibilityRole="header">
        Sostituzione e riparazione
      </Text>
      <Elenco voci={SOSTITUZIONE} />
      <Text style={[paginaStili.testo, st.nota]}>
        Nei casi eccezionali di gravissime disabilità l&apos;ASL può garantire anche dispositivi non compresi nel
        nomenclatore, secondo le procedure della tua Regione.
      </Text>

      {asl5() ? (
        <AusiliAsl5 />
      ) : (
        <Avviso>
          Non abbiamo ancora i dati della tua ASL: a quale ufficio presentare la richiesta, quali moduli usare e i tempi
          di risposta cambiano da una ASL all&apos;altra. Chiedili all&apos;ufficio protesi e ausili del tuo Distretto
          o ai Servizi Sociali {comune.delEnte}.
        </Avviso>
      )}

      {comune.telefono ? (
        <Bottone
          label={`Chiama ${comune.ente} · ${comune.telefono}`}
          icon="call-outline"
          onPress={() => apri(`tel:${comune.telefono.replace(/\s+/g, "")}`)}
          testID="ausili-servizi-sociali"
        />
      ) : null}
      <Bottone
        label="Ministero della Salute · Assistenza protesica"
        icon="open-outline"
        variante="vuoto"
        onPress={() => apri(MINISTERO_URL)}
        testID="ausili-ministero"
      />
      <Text style={[paginaStili.testo, st.fonte]}>
        Fonte: DPCM 12 gennaio 2017 (livelli essenziali di assistenza), articoli 17 e 18, Gazzetta Ufficiale n. 65 del
        18 marzo 2017.
      </Text>
      <Bottone
        label="Leggi il decreto in Gazzetta Ufficiale"
        icon="open-outline"
        variante="vuoto"
        onPress={() => apri(DPCM_URL)}
        testID="ausili-dpcm"
      />
    </Pagina>
  );
}

const st = StyleSheet.create({
  nota: { marginTop: spacing.sm },
  fonte: { marginTop: spacing.lg },
});
