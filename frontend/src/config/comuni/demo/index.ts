// Comuni DIMOSTRATIVI: enti reali che non hanno (ancora) aderito a TutelApp.
// Servono per le demo online. L'app mostra in ogni pagina iniziale l'avviso
// "Versione dimostrativa". Per nasconderli tutti: EXPO_PUBLIC_COMUNI_DEMO=no.
// Quando un Comune aderisce: sposta il suo file in `comuni/`, togli
// `dimostrativo: true` e aggiungilo all'elenco principale.

import type { ComuneConfig } from "../types";
import { agrigento } from "./agrigento";
import { alba } from "./alba";
import { albenga } from "./albenga";
import { alessandria } from "./alessandria";
import { ameglia } from "./ameglia";
import { ancona } from "./ancona";
import { andria } from "./andria";
import { aosta } from "./aosta";
import { arcola } from "./arcola";
import { arezzo } from "./arezzo";
import { ascoliPiceno } from "./ascoli-piceno";
import { asti } from "./asti";
import { avellino } from "./avellino";
import { bari } from "./bari";
import { barletta } from "./barletta";
import { bassanoDelGrappa } from "./bassano-del-grappa";
import { battipaglia } from "./battipaglia";
import { benevento } from "./benevento";
import { bergamo } from "./bergamo";
import { bollate } from "./bollate";
import { bologna } from "./bologna";
import { bolzano } from "./bolzano";
import { brescia } from "./brescia";
import { brindisi } from "./brindisi";
import { bustoArsizio } from "./busto-arsizio";
import { cagliari } from "./cagliari";
import { calolziocorte } from "./calolziocorte";
import { campobasso } from "./campobasso";
import { caprarola } from "./caprarola";
import { carpi } from "./carpi";
import { carrara } from "./carrara";
import { casatenovo } from "./casatenovo";
import { caserta } from "./caserta";
import { castelSanGiovanni } from "./castel-san-giovanni";
import { castelfrancoVeneto } from "./castelfranco-veneto";
import { castelnuovoMagra } from "./castelnuovo-magra";
import { catania } from "./catania";
import { catanzaro } from "./catanzaro";
import { cesena } from "./cesena";
import { chiavari } from "./chiavari";
import { ciniselloBalsamo } from "./cinisello-balsamo";
import { cittaDiCastello } from "./citta-di-castello";
import { civitaCastellana } from "./civita-castellana";
import { civitavecchia } from "./civitavecchia";
import { colognoMonzese } from "./cologno-monzese";
import { como } from "./como";
import { conegliano } from "./conegliano";
import { cortemaggiore } from "./cortemaggiore";
import { cosenza } from "./cosenza";
import { cremona } from "./cremona";
import { cuneo } from "./cuneo";
import { desio } from "./desio";
import { empoli } from "./empoli";
import { faenza } from "./faenza";
import { fano } from "./fano";
import { ferentino } from "./ferentino";
import { ferrara } from "./ferrara";
import { fiorenzuolaDArda } from "./fiorenzuola-d-arda";
import { firenze } from "./firenze";
import { fiumicino } from "./fiumicino";
import { foggia } from "./foggia";
import { forli } from "./forli";
import { frascati } from "./frascati";
import { galbiate } from "./galbiate";
import { genova } from "./genova";
import { giudicarie } from "./giudicarie";
import { giuglianoInCampania } from "./giugliano-in-campania";
import { grosseto } from "./grosseto";
import { guidoniaMontecelio } from "./guidonia-montecelio";
import { imola } from "./imola";
import { jesolo } from "./jesolo";
import { laSpezia } from "./la-spezia";
import { laquila } from "./laquila";
import { latina } from "./latina";
import { lecce } from "./lecce";
import { lecco } from "./lecco";
import { legnago } from "./legnago";
import { legnano } from "./legnano";
import { lerici } from "./lerici";
import { lissone } from "./lissone";
import { livorno } from "./livorno";
import { lodi } from "./lodi";
import { lucca } from "./lucca";
import { luni } from "./luni";
import { magenta } from "./magenta";
import { mantova } from "./mantova";
import { marsala } from "./marsala";
import { matera } from "./matera";
import { merate } from "./merate";
import { messina } from "./messina";
import { milano } from "./milano";
import { mira } from "./mira";
import { modena } from "./modena";
import { monopoli } from "./monopoli";
import { monza } from "./monza";
import { napoli } from "./napoli";
import { nepi } from "./nepi";
import { novara } from "./novara";
import { ocre } from "./ocre";
import { olbia } from "./olbia";
import { ortona } from "./ortona";
import { osimo } from "./osimo";
import { padova } from "./padova";
import { palermo } from "./palermo";
import { parabiago } from "./parabiago";
import { pavia } from "./pavia";
import { perugia } from "./perugia";
import { pescara } from "./pescara";
import { piacenza } from "./piacenza";
import { pinerolo } from "./pinerolo";
import { pioltello } from "./pioltello";
import { pisa } from "./pisa";
import { podenzano } from "./podenzano";
import { pontedera } from "./pontedera";
import { portovenere } from "./portovenere";
import { potenza } from "./potenza";
import { prato } from "./prato";
import { rapallo } from "./rapallo";
import { ravenna } from "./ravenna";
import { reggioCalabria } from "./reggio-calabria";
import { reggioEmilia } from "./reggio-emilia";
import { riccoDelGolfo } from "./ricco-del-golfo";
import { rimini } from "./rimini";
import { roma } from "./roma";
import { rottofreno } from "./rottofreno";
import { rovereto } from "./rovereto";
import { rozzano } from "./rozzano";
import { salerno } from "./salerno";
import { sanBonifacio } from "./san-bonifacio";
import { sanDonatoMilanese } from "./san-donato-milanese";
import { santoStefanoDiMagra } from "./santo-stefano-di-magra";
import { sassari } from "./sassari";
import { segrate } from "./segrate";
import { senigallia } from "./senigallia";
import { seregno } from "./seregno";
import { sestriLevante } from "./sestri-levante";
import { siracusa } from "./siracusa";
import { sondrio } from "./sondrio";
import { spinea } from "./spinea";
import { taranto } from "./taranto";
import { tarquinia } from "./tarquinia";
import { teramo } from "./teramo";
import { terni } from "./terni";
import { torino } from "./torino";
import { trapani } from "./trapani";
import { trento } from "./trento";
import { treviso } from "./treviso";
import { trieste } from "./trieste";
import { udine } from "./udine";
import { valmadrera } from "./valmadrera";
import { varese } from "./varese";
import { venezia } from "./venezia";
import { verona } from "./verona";
import { vetralla } from "./vetralla";
import { vezzanoLigure } from "./vezzano-ligure";
import { viareggio } from "./viareggio";
import { vicenza } from "./vicenza";
import { vimercate } from "./vimercate";
import { viterbo } from "./viterbo";

export const COMUNI_DEMO: ComuneConfig[] = [
  agrigento,
  alba,
  albenga,
  alessandria,
  ameglia,
  ancona,
  andria,
  aosta,
  arcola,
  arezzo,
  ascoliPiceno,
  asti,
  avellino,
  bari,
  barletta,
  bassanoDelGrappa,
  battipaglia,
  benevento,
  bergamo,
  bollate,
  bologna,
  bolzano,
  brescia,
  brindisi,
  bustoArsizio,
  cagliari,
  calolziocorte,
  campobasso,
  caprarola,
  carpi,
  carrara,
  casatenovo,
  caserta,
  castelSanGiovanni,
  castelfrancoVeneto,
  castelnuovoMagra,
  catania,
  catanzaro,
  cesena,
  chiavari,
  ciniselloBalsamo,
  cittaDiCastello,
  civitaCastellana,
  civitavecchia,
  colognoMonzese,
  como,
  conegliano,
  cortemaggiore,
  cosenza,
  cremona,
  cuneo,
  desio,
  empoli,
  faenza,
  fano,
  ferentino,
  ferrara,
  fiorenzuolaDArda,
  firenze,
  fiumicino,
  foggia,
  forli,
  frascati,
  galbiate,
  genova,
  giudicarie,
  giuglianoInCampania,
  grosseto,
  guidoniaMontecelio,
  imola,
  jesolo,
  laSpezia,
  laquila,
  latina,
  lecce,
  lecco,
  legnago,
  legnano,
  lerici,
  lissone,
  livorno,
  lodi,
  lucca,
  luni,
  magenta,
  mantova,
  marsala,
  matera,
  merate,
  messina,
  milano,
  mira,
  modena,
  monopoli,
  monza,
  napoli,
  nepi,
  novara,
  ocre,
  olbia,
  ortona,
  osimo,
  padova,
  palermo,
  parabiago,
  pavia,
  perugia,
  pescara,
  piacenza,
  pinerolo,
  pioltello,
  pisa,
  podenzano,
  pontedera,
  portovenere,
  potenza,
  prato,
  rapallo,
  ravenna,
  reggioCalabria,
  reggioEmilia,
  riccoDelGolfo,
  rimini,
  roma,
  rottofreno,
  rovereto,
  rozzano,
  salerno,
  sanBonifacio,
  sanDonatoMilanese,
  santoStefanoDiMagra,
  sassari,
  segrate,
  senigallia,
  seregno,
  sestriLevante,
  siracusa,
  sondrio,
  spinea,
  taranto,
  tarquinia,
  teramo,
  terni,
  torino,
  trapani,
  trento,
  treviso,
  trieste,
  udine,
  valmadrera,
  varese,
  venezia,
  verona,
  vetralla,
  vezzanoLigure,
  viareggio,
  vicenza,
  vimercate,
  viterbo,
];
