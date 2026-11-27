// Dati e logica condivisa per gli Aiuti Pratici sul Territorio.

import type { IoniconsIconName } from "@react-native-vector-icons/ionicons";
import { ImageSourcePropType } from "react-native";

import { topics } from "@/src/theme";
import { IMAGES } from "@/src/lib/images";
import { comune } from "@/src/config/comune";
import {
  esc,
  raggruppa,
  rigaDaNumero,
  rigaDaVoce,
  tabellaHtml,
  type NumeroUtile,
  type RigaGuida,
} from "@/src/lib/guidaTabella";

export const REGIONE_KEY = "salutenav:regione";

/** Portali ufficiali per tutte le 20 regioni italiane */
export const REGIONAL_PORTALS: Record<string, { label: string; url: string }> = {
  Abruzzo: { label: "Regione Abruzzo — Salute", url: "https://www.regione.abruzzo.it" },
  Basilicata: { label: "Regione Basilicata — Sanità", url: "https://www.regione.basilicata.it" },
  Calabria: { label: "Regione Calabria — Salute", url: "https://www.regione.calabria.it" },
  Campania: { label: "Regione Campania — Sanità", url: "https://www.regione.campania.it" },
  "Emilia-Romagna": { label: "Salute Emilia-Romagna", url: "https://salute.regione.emilia-romagna.it" },
  "Friuli-Venezia Giulia": { label: "Regione FVG — Salute", url: "https://www.regione.fvg.it" },
  Lazio: { label: "Salute Lazio", url: "https://www.salutelazio.it" },
  Liguria: { label: "Regione Liguria — Salute e Sociale", url: "https://www.regione.liguria.it" },
  Lombardia: { label: "Regione Lombardia — Welfare", url: "https://www.regione.lombardia.it" },
  Marche: { label: "Regione Marche — Salute", url: "https://www.regione.marche.it" },
  Molise: { label: "Regione Molise — Salute", url: "https://www.regione.molise.it" },
  Piemonte: { label: "Regione Piemonte — Sanità", url: "https://www.regione.piemonte.it" },
  Puglia: { label: "Sanità Puglia", url: "https://www.sanita.puglia.it" },
  Sardegna: { label: "Regione Sardegna — Sanità", url: "https://www.regione.sardegna.it" },
  Sicilia: { label: "Regione Siciliana — Salute", url: "https://www.regione.sicilia.it" },
  Toscana: { label: "Regione Toscana — Salute", url: "https://www.regione.toscana.it" },
  "Trentino-Alto Adige": { label: "Regione Trentino-Alto Adige", url: "https://www.regione.taa.it" },
  Umbria: { label: "Regione Umbria — Salute", url: "https://www.regione.umbria.it" },
  "Valle d'Aosta": { label: "Regione Valle d'Aosta — Sanità", url: "https://www.regione.vda.it" },
  Veneto: { label: "Regione Veneto — Sanità", url: "https://www.regione.veneto.it" },
};

/** Tutte le 20 regioni italiane, in ordine alfabetico */
export const REGIONI = Object.keys(REGIONAL_PORTALS);

export function transportContacts(regione: string): string {
  // Nella regione del Comune attivo mostriamo il riferimento locale della sua scheda
  if (regione === comune.regione) {
    return comune.trasporto;
  }
  return `In ${regione} cerca la Pubblica Assistenza (rete ANPAS — anpas.org) o la Croce Rossa del tuo Comune: chiedi del servizio di trasporto sanitario/sociale.`;
}

export interface HelpCard {
  id: string;
  icon: IoniconsIconName;
  color: string;
  soft: string;
  dark: string;
  label: string;
  title: string;
  body: string;
  image: ImageSourcePropType;
  rows: { label: string; text: string }[];
}

export const HELP_CARDS: HelpCard[] = [
  {
    id: "trasporto",
    icon: "car-outline",
    color: topics.salute.main,
    soft: topics.salute.soft,
    dark: topics.salute.dark,
    label: "TRASPORTI E PUBBLICA ASSISTENZA",
    title: "Trasporto per esami e visite",
    body: "Come richiedere il trasporto protetto con la Pubblica Assistenza per visite ed esami.",
    image: IMAGES.trasporti,
    rows: [
      {
        label: "Requisiti",
        text: "Impossibilità di deambulazione o patologie complesse. La richiesta passa dal Medico di Medicina Generale o dalla convenzione ASL.",
      },
    ],
  },
  {
    id: "domicilio",
    icon: "home-outline",
    color: topics.legge104.main,
    soft: topics.legge104.soft,
    dark: topics.legge104.dark,
    label: "ASSISTENZA DOMICILIARE (ADI / SAD)",
    title: "Assistenza a domicilio (Infermieri e OSS)",
    body: "Due servizi diversi che spesso si confondono: ADI e SAD.",
    image: IMAGES.domiciliare,
    rows: [
      {
        label: "ADI (ASL)",
        text: "Assistenza Domiciliare Integrata: cure sanitarie a casa (infermieri, medicazioni, prelievi). È gratuita e la attiva il Medico Curante.",
      },
      {
        label: "SAD (Comune)",
        text: "Servizio di Assistenza Domiciliare: igiene e cura personale con OSS. Si richiede ai Servizi Sociali del Comune (contributo in base all'ISEE).",
      },
      {
        label: "Come attivare",
        text: "Richiesta al Medico Curante (ADI) o appuntamento con l'assistente sociale del Comune (SAD).",
      },
    ],
  },
  {
    id: "fisioterapia",
    icon: "fitness-outline",
    color: topics.esenzioni.main,
    soft: topics.esenzioni.soft,
    dark: topics.esenzioni.dark,
    label: "FISIOTERAPIA E RIABILITAZIONE",
    title: "Fisioterapia e riabilitazione",
    body: "Diritto a cicli riabilitativi a domicilio o presso centri convenzionati.",
    image: IMAGES.fisioterapia,
    rows: [
      {
        label: "Come funziona",
        text: "Serve la prescrizione dello specialista (fisiatra) su ricettario SSN. I cicli si svolgono nei centri convenzionati o a domicilio se non puoi spostarti.",
      },
      {
        label: "Esenzioni",
        text: "Ricorda di verificare l'esenzione ticket per patologia o per invalidità: in molti casi i cicli riabilitativi sono gratuiti.",
      },
    ],
  },
  {
    id: "rsa",
    icon: "bed-outline",
    color: topics.invalidita.main,
    soft: topics.invalidita.soft,
    dark: topics.invalidita.dark,
    label: "RSA E RICOVERI DI SOLLIEVO",
    title: "Periodi in RSA e ricoveri di sollievo",
    body: "Accesso a ricoveri temporanei per riabilitazione o per garantire un periodo di sollievo al caregiver.",
    image: IMAGES.rsa,
    rows: [
      {
        label: "Come procedere",
        text: "La valutazione passa dall'Unità Valutativa Multidimensionale (UVM) della ASL: chiedi al Medico Curante o al distretto sanitario di attivarla.",
      },
      {
        label: "Buono a sapersi",
        text: "I ricoveri di sollievo durano in genere 30-60 giorni e aiutano la famiglia a riprendere fiato senza perdere la continuità delle cure.",
      },
    ],
  },
];

/** Contatti del Comune attivo, in una riga */
const contattiComune = () =>
  `${comune.ente} · ${comune.indirizzo} · Tel. ${comune.telefono}`;

/** Card adattate alla regione e al Comune attivo */
export function getHelpCards(regione: string): HelpCard[] {
  return HELP_CARDS.map((c) => {
    if (c.id === "trasporto") {
      return {
        ...c,
        rows: [...c.rows, { label: "Contatti locali", text: transportContacts(regione) }],
      };
    }
    if (c.id === "domiciliare") {
      // Il SAD si chiede ai Servizi Sociali: indichiamo quelli del Comune attivo
      return {
        ...c,
        rows: [...c.rows, { label: `A ${comune.nomeBreve}`, text: contattiComune() }],
      };
    }
    return c;
  });
}

export function buildGuideHtml(regione: string, numeriUtili: readonly NumeroUtile[] = []): string {
  // Guida in forma di tabella: Nome · Servizio · Recapiti. Solo i dati già verificati della scheda del Comune.
  const primo: RigaGuida = {
    nome: `${comune.nome} — ${comune.ente}`,
    servizio: "Primo riferimento per assistenza a casa, trasporto, contributi e ausili: chiedi un colloquio",
    recapiti: [
      comune.indirizzo,
      comune.telefono ? `Tel. ${comune.telefono}` : "",
      comune.email,
      comune.orari,
    ].filter(Boolean),
    sito: comune.sitoWeb && comune.sitoWeb.startsWith("https://") ? comune.sitoWeb : undefined,
  };
  const gruppi = raggruppa(comune.puntiSupporto.map(rigaDaVoce));
  gruppi.unshift({ titolo: "Il Comune", righe: [primo] });
  if (numeriUtili.length > 0) gruppi.push({ titolo: "Numeri utili", righe: numeriUtili.map(rigaDaNumero) });

  return `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="utf-8" />
<title>TutelApp — Guida ai servizi ${esc(comune.delEnte)}</title>
<style>
  @page { size: A4; margin: 14mm; }
  body { font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; color: #0F172A; margin: 0; padding: 0; }
  .brand { color: #C1602F; font-weight: 800; font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; }
  h1 { font-size: 21px; margin: 4px 0 2px 0; }
  .sub { color: #4B5563; font-size: 12px; margin-bottom: 10px; }
  h2 { font-size: 14px; margin: 18px 0 6px 0; color: #8A3F1C; }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  th { text-align: left; font-size: 10.5px; color: #6B7280; border-bottom: 2px solid #E5D3BF; padding: 4px 6px; }
  td { vertical-align: top; font-size: 11.5px; line-height: 1.45; padding: 6px; border-bottom: 1px solid #EEE4D6; overflow-wrap: anywhere; }
  tr { break-inside: avoid; }
  th:nth-child(1), td:nth-child(1) { width: 27%; }
  th:nth-child(2), td:nth-child(2) { width: 36%; }
  td.nome { font-weight: 700; }
  td.rec div { margin-bottom: 2px; }
  a { color: #8A3F1C; text-decoration: none; }
  .nota { margin-top: 16px; padding-top: 8px; border-top: 1px solid #E5E7EB; color: #4B5563; font-size: 10.5px; line-height: 1.5; }
</style>
</head>
<body>
  <div class="brand">TutelApp</div>
  <h1>Guida ai servizi ${esc(comune.delEnte)}</h1>
  <div class="sub">Regione ${esc(regione)}. Chi chiamare, per cosa, e dove trovarlo.</div>
  ${tabellaHtml(gruppi)}
  <div class="nota">Informazioni di orientamento prese dai siti ufficiali degli enti: verifica sempre prima di andare. Tutto il resto, con i dettagli, è nell'app: www.tutelapp.it · info.tutelapp.it · info@tutelapp.it</div>
</body>
</html>`;
}
