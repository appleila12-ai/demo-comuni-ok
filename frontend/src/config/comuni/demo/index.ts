// Comuni DIMOSTRATIVI: enti reali che non hanno (ancora) aderito a TutelApp.
// Servono per le demo online. L'app mostra in ogni pagina iniziale l'avviso
// "Versione dimostrativa". Per nasconderli tutti: EXPO_PUBLIC_COMUNI_DEMO=no.
// Quando un Comune aderisce: sposta il suo file in `comuni/`, togli
// `dimostrativo: true` e aggiungilo all'elenco principale.

import type { ComuneConfig } from "../types";
import { alba } from "./alba";
import { albenga } from "./albenga";
import { ancona } from "./ancona";
import { arcola } from "./arcola";
import { arezzo } from "./arezzo";
import { ascoliPiceno } from "./ascoli-piceno";
import { asti } from "./asti";
import { bari } from "./bari";
import { bassanoDelGrappa } from "./bassano-del-grappa";
import { battipaglia } from "./battipaglia";
import { bergamo } from "./bergamo";
import { bollate } from "./bollate";
import { bologna } from "./bologna";
import { brescia } from "./brescia";
import { brindisi } from "./brindisi";
import { cagliari } from "./cagliari";
import { calolziocorte } from "./calolziocorte";
import { caprarola } from "./caprarola";
import { carpi } from "./carpi";
import { carrara } from "./carrara";
import { casatenovo } from "./casatenovo";
import { castelSanGiovanni } from "./castel-san-giovanni";
import { castelfrancoVeneto } from "./castelfranco-veneto";
import { catania } from "./catania";
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
import { cuneo } from "./cuneo";
import { desio } from "./desio";
import { empoli } from "./empoli";
import { faenza } from "./faenza";
import { fano } from "./fano";
import { ferentino } from "./ferentino";
import { fiorenzuolaDArda } from "./fiorenzuola-d-arda";
import { firenze } from "./firenze";
import { fiumicino } from "./fiumicino";
import { frascati } from "./frascati";
import { galbiate } from "./galbiate";
import { genova } from "./genova";
import { giudicarie } from "./giudicarie";
import { guidoniaMontecelio } from "./guidonia-montecelio";
import { imola } from "./imola";
import { jesolo } from "./jesolo";
import { laSpezia } from "./la-spezia";
import { laquila } from "./laquila";
import { lecco } from "./lecco";
import { legnago } from "./legnago";
import { legnano } from "./legnano";
import { lerici } from "./lerici";
import { lissone } from "./lissone";
import { lodi } from "./lodi";
import { magenta } from "./magenta";
import { mantova } from "./mantova";
import { marsala } from "./marsala";
import { merate } from "./merate";
import { messina } from "./messina";
import { milano } from "./milano";
import { mira } from "./mira";
import { modena } from "./modena";
import { monopoli } from "./monopoli";
import { napoli } from "./napoli";
import { nepi } from "./nepi";
import { ocre } from "./ocre";
import { olbia } from "./olbia";
import { ortona } from "./ortona";
import { osimo } from "./osimo";
import { padova } from "./padova";
import { palermo } from "./palermo";
import { parabiago } from "./parabiago";
import { pavia } from "./pavia";
import { perugia } from "./perugia";
import { piacenza } from "./piacenza";
import { pinerolo } from "./pinerolo";
import { pioltello } from "./pioltello";
import { podenzano } from "./podenzano";
import { pontedera } from "./pontedera";
import { portovenere } from "./portovenere";
import { prato } from "./prato";
import { rapallo } from "./rapallo";
import { ravenna } from "./ravenna";
import { reggioEmilia } from "./reggio-emilia";
import { riccoDelGolfo } from "./ricco-del-golfo";
import { roma } from "./roma";
import { rottofreno } from "./rottofreno";
import { rovereto } from "./rovereto";
import { rozzano } from "./rozzano";
import { sanBonifacio } from "./san-bonifacio";
import { sanDonatoMilanese } from "./san-donato-milanese";
import { segrate } from "./segrate";
import { senigallia } from "./senigallia";
import { seregno } from "./seregno";
import { sestriLevante } from "./sestri-levante";
import { sondrio } from "./sondrio";
import { spinea } from "./spinea";
import { taranto } from "./taranto";
import { tarquinia } from "./tarquinia";
import { teramo } from "./teramo";
import { torino } from "./torino";
import { treviso } from "./treviso";
import { trieste } from "./trieste";
import { valmadrera } from "./valmadrera";
import { venezia } from "./venezia";
import { verona } from "./verona";
import { vetralla } from "./vetralla";
import { viareggio } from "./viareggio";
import { vimercate } from "./vimercate";
import { viterbo } from "./viterbo";
import { reggioCalabria } from "./reggio-calabria";
import { livorno } from "./livorno";
import { rimini } from "./rimini";
import { salerno } from "./salerno";
import { ferrara } from "./ferrara";
import { sassari } from "./sassari";
import { latina } from "./latina";
import { monza } from "./monza";
import { siracusa } from "./siracusa";
import { pescara } from "./pescara";
import { foggia } from "./foggia";
import { bolzano } from "./bolzano";
import { vicenza } from "./vicenza";
import { terni } from "./terni";
import { trento } from "./trento";
import { novara } from "./novara";
import { forli } from "./forli";
import { lecce } from "./lecce";
import { udine } from "./udine";
import { giuglianoInCampania } from "./giugliano-in-campania";
import { ameglia } from "./ameglia";
import { luni } from "./luni";
import { castelnuovoMagra } from "./castelnuovo-magra";
import { santoStefanoDiMagra } from "./santo-stefano-di-magra";
import { vezzanoLigure } from "./vezzano-ligure";

export const COMUNI_DEMO: ComuneConfig[] = [
  alba,
  albenga,
  ancona,
  arcola,
  arezzo,
  ascoliPiceno,
  asti,
  bari,
  bassanoDelGrappa,
  battipaglia,
  bergamo,
  bollate,
  bologna,
  brescia,
  brindisi,
  cagliari,
  calolziocorte,
  caprarola,
  carpi,
  carrara,
  casatenovo,
  castelSanGiovanni,
  castelfrancoVeneto,
  catania,
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
  cuneo,
  desio,
  empoli,
  faenza,
  fano,
  ferentino,
  fiorenzuolaDArda,
  firenze,
  fiumicino,
  frascati,
  galbiate,
  genova,
  giudicarie,
  guidoniaMontecelio,
  imola,
  jesolo,
  laSpezia,
  laquila,
  lecco,
  legnago,
  legnano,
  lerici,
  lissone,
  lodi,
  magenta,
  mantova,
  marsala,
  merate,
  messina,
  milano,
  mira,
  modena,
  monopoli,
  napoli,
  nepi,
  ocre,
  olbia,
  ortona,
  osimo,
  padova,
  palermo,
  parabiago,
  pavia,
  perugia,
  piacenza,
  pinerolo,
  pioltello,
  podenzano,
  pontedera,
  portovenere,
  prato,
  rapallo,
  ravenna,
  reggioEmilia,
  riccoDelGolfo,
  roma,
  rottofreno,
  rovereto,
  rozzano,
  sanBonifacio,
  sanDonatoMilanese,
  segrate,
  senigallia,
  seregno,
  sestriLevante,
  sondrio,
  spinea,
  taranto,
  tarquinia,
  teramo,
  torino,
  treviso,
  trieste,
  valmadrera,
  venezia,
  verona,
  vetralla,
  viareggio,
  vimercate,
  viterbo,
  reggioCalabria,
  livorno,
  rimini,
  salerno,
  ferrara,
  sassari,
  latina,
  monza,
  siracusa,
  pescara,
  foggia,
  bolzano,
  vicenza,
  terni,
  trento,
  novara,
  forli,
  lecce,
  udine,
  giuglianoInCampania,
  ameglia,
  luni,
  castelnuovoMagra,
  santoStefanoDiMagra,
  vezzanoLigure,
];
