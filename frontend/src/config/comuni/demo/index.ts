// Comuni DIMOSTRATIVI: enti reali che non hanno (ancora) aderito a TutelApp.
// Servono per le demo online. L'app mostra in ogni pagina iniziale l'avviso
// "Versione dimostrativa". Per nasconderli tutti: EXPO_PUBLIC_COMUNI_DEMO=no.
// Quando un Comune aderisce: sposta il suo file in `comuni/`, togli
// `dimostrativo: true` e aggiungilo all'elenco principale.

import type { ComuneConfig } from "../types";
import { acerra } from "./acerra";
import { acireale } from "./acireale";
import { afragola } from "./afragola";
import { agrigento } from "./agrigento";
import { alba } from "./alba";
import { albenga } from "./albenga";
import { alessandria } from "./alessandria";
import { alghero } from "./alghero";
import { altamura } from "./altamura";
import { ameglia } from "./ameglia";
import { ancona } from "./ancona";
import { andria } from "./andria";
import { aosta } from "./aosta";
import { aprilia } from "./aprilia";
import { arcola } from "./arcola";
import { arezzo } from "./arezzo";
import { ascoliPiceno } from "./ascoli-piceno";
import { asti } from "./asti";
import { avellino } from "./avellino";
import { aversa } from "./aversa";
import { bagheria } from "./bagheria";
import { bari } from "./bari";
import { barletta } from "./barletta";
import { bassanoDelGrappa } from "./bassano-del-grappa";
import { battipaglia } from "./battipaglia";
import { belluno } from "./belluno";
import { benevento } from "./benevento";
import { bergamo } from "./bergamo";
import { biella } from "./biella";
import { bitonto } from "./bitonto";
import { bollate } from "./bollate";
import { bologna } from "./bologna";
import { bolzano } from "./bolzano";
import { brescia } from "./brescia";
import { brindisi } from "./brindisi";
import { bustoArsizio } from "./busto-arsizio";
import { cagliari } from "./cagliari";
import { calolziocorte } from "./calolziocorte";
import { caltanissetta } from "./caltanissetta";
import { campobasso } from "./campobasso";
import { caprarola } from "./caprarola";
import { carbonia } from "./carbonia";
import { carpi } from "./carpi";
import { carrara } from "./carrara";
import { casatenovo } from "./casatenovo";
import { caserta } from "./caserta";
import { casoria } from "./casoria";
import { castelSanGiovanni } from "./castel-san-giovanni";
import { castelfrancoVeneto } from "./castelfranco-veneto";
import { castellammareDiStabia } from "./castellammare-di-stabia";
import { castelnuovoMagra } from "./castelnuovo-magra";
import { catania } from "./catania";
import { catanzaro } from "./catanzaro";
import { cavaDeTirreni } from "./cava-de-tirreni";
import { cerignola } from "./cerignola";
import { cesanoMaderno } from "./cesano-maderno";
import { cesena } from "./cesena";
import { chiavari } from "./chiavari";
import { chieti } from "./chieti";
import { ciniselloBalsamo } from "./cinisello-balsamo";
import { cittaDiCastello } from "./citta-di-castello";
import { civitaCastellana } from "./civita-castellana";
import { civitavecchia } from "./civitavecchia";
import { colognoMonzese } from "./cologno-monzese";
import { como } from "./como";
import { conegliano } from "./conegliano";
import { coriglianoRossano } from "./corigliano-rossano";
import { cortemaggiore } from "./cortemaggiore";
import { cosenza } from "./cosenza";
import { cremona } from "./cremona";
import { crotone } from "./crotone";
import { cuneo } from "./cuneo";
import { desio } from "./desio";
import { empoli } from "./empoli";
import { enna } from "./enna";
import { faenza } from "./faenza";
import { fano } from "./fano";
import { ferentino } from "./ferentino";
import { fermo } from "./fermo";
import { ferrara } from "./ferrara";
import { fiorenzuolaDArda } from "./fiorenzuola-d-arda";
import { firenze } from "./firenze";
import { fiumicino } from "./fiumicino";
import { foggia } from "./foggia";
import { forli } from "./forli";
import { frascati } from "./frascati";
import { frosinone } from "./frosinone";
import { galbiate } from "./galbiate";
import { gallarate } from "./gallarate";
import { gela } from "./gela";
import { genova } from "./genova";
import { giudicarie } from "./giudicarie";
import { giuglianoInCampania } from "./giugliano-in-campania";
import { gorizia } from "./gorizia";
import { grosseto } from "./grosseto";
import { guidoniaMontecelio } from "./guidonia-montecelio";
import { imola } from "./imola";
import { imperia } from "./imperia";
import { isernia } from "./isernia";
import { jesolo } from "./jesolo";
import { laSpezia } from "./la-spezia";
import { lameziaTerme } from "./lamezia-terme";
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
import { macerata } from "./macerata";
import { magenta } from "./magenta";
import { manfredonia } from "./manfredonia";
import { mantova } from "./mantova";
import { maranoDiNapoli } from "./marano-di-napoli";
import { marsala } from "./marsala";
import { massa } from "./massa";
import { matera } from "./matera";
import { mazaraDelVallo } from "./mazara-del-vallo";
import { merate } from "./merate";
import { messina } from "./messina";
import { milano } from "./milano";
import { mira } from "./mira";
import { modena } from "./modena";
import { molfetta } from "./molfetta";
import { moncalieri } from "./moncalieri";
import { monopoli } from "./monopoli";
import { montesilvano } from "./montesilvano";
import { monza } from "./monza";
import { napoli } from "./napoli";
import { nepi } from "./nepi";
import { novara } from "./novara";
import { nuoro } from "./nuoro";
import { ocre } from "./ocre";
import { olbia } from "./olbia";
import { oristano } from "./oristano";
import { ortona } from "./ortona";
import { osimo } from "./osimo";
import { padova } from "./padova";
import { palermo } from "./palermo";
import { parabiago } from "./parabiago";
import { paterno } from "./paterno";
import { pavia } from "./pavia";
import { perugia } from "./perugia";
import { pesaro } from "./pesaro";
import { pescara } from "./pescara";
import { piacenza } from "./piacenza";
import { pinerolo } from "./pinerolo";
import { pioltello } from "./pioltello";
import { pisa } from "./pisa";
import { pistoia } from "./pistoia";
import { podenzano } from "./podenzano";
import { pomezia } from "./pomezia";
import { pontedera } from "./pontedera";
import { pordenone } from "./pordenone";
import { portici } from "./portici";
import { portovenere } from "./portovenere";
import { potenza } from "./potenza";
import { pozzuoli } from "./pozzuoli";
import { prato } from "./prato";
import { quartuSantElena } from "./quartu-sant-elena";
import { ragusa } from "./ragusa";
import { rapallo } from "./rapallo";
import { ravenna } from "./ravenna";
import { reggioCalabria } from "./reggio-calabria";
import { reggioEmilia } from "./reggio-emilia";
import { rho } from "./rho";
import { riccoDelGolfo } from "./ricco-del-golfo";
import { rieti } from "./rieti";
import { rimini } from "./rimini";
import { roma } from "./roma";
import { rottofreno } from "./rottofreno";
import { rovereto } from "./rovereto";
import { rovigo } from "./rovigo";
import { rozzano } from "./rozzano";
import { salerno } from "./salerno";
import { sanBonifacio } from "./san-bonifacio";
import { sanDonatoMilanese } from "./san-donato-milanese";
import { sanremo } from "./sanremo";
import { santoStefanoDiMagra } from "./santo-stefano-di-magra";
import { sassari } from "./sassari";
import { savona } from "./savona";
import { segrate } from "./segrate";
import { senigallia } from "./senigallia";
import { seregno } from "./seregno";
import { sestoSanGiovanni } from "./sesto-san-giovanni";
import { sestriLevante } from "./sestri-levante";
import { siena } from "./siena";
import { siracusa } from "./siracusa";
import { sondrio } from "./sondrio";
import { spinea } from "./spinea";
import { taranto } from "./taranto";
import { tarquinia } from "./tarquinia";
import { teramo } from "./teramo";
import { terni } from "./terni";
import { torino } from "./torino";
import { torreDelGreco } from "./torre-del-greco";
import { trani } from "./trani";
import { trapani } from "./trapani";
import { trento } from "./trento";
import { treviso } from "./treviso";
import { trieste } from "./trieste";
import { udine } from "./udine";
import { valmadrera } from "./valmadrera";
import { varese } from "./varese";
import { venezia } from "./venezia";
import { verbania } from "./verbania";
import { vercelli } from "./vercelli";
import { verona } from "./verona";
import { vetralla } from "./vetralla";
import { vezzanoLigure } from "./vezzano-ligure";
import { viareggio } from "./viareggio";
import { viboValentia } from "./vibo-valentia";
import { vicenza } from "./vicenza";
import { vigevano } from "./vigevano";
import { vimercate } from "./vimercate";
import { viterbo } from "./viterbo";

export const COMUNI_DEMO: ComuneConfig[] = [
  acerra,
  acireale,
  afragola,
  agrigento,
  alba,
  albenga,
  alessandria,
  alghero,
  altamura,
  ameglia,
  ancona,
  andria,
  aosta,
  aprilia,
  arcola,
  arezzo,
  ascoliPiceno,
  asti,
  avellino,
  aversa,
  bagheria,
  bari,
  barletta,
  bassanoDelGrappa,
  battipaglia,
  belluno,
  benevento,
  bergamo,
  biella,
  bitonto,
  bollate,
  bologna,
  bolzano,
  brescia,
  brindisi,
  bustoArsizio,
  cagliari,
  calolziocorte,
  caltanissetta,
  campobasso,
  caprarola,
  carbonia,
  carpi,
  carrara,
  casatenovo,
  caserta,
  casoria,
  castelSanGiovanni,
  castelfrancoVeneto,
  castellammareDiStabia,
  castelnuovoMagra,
  catania,
  catanzaro,
  cavaDeTirreni,
  cerignola,
  cesanoMaderno,
  cesena,
  chiavari,
  chieti,
  ciniselloBalsamo,
  cittaDiCastello,
  civitaCastellana,
  civitavecchia,
  colognoMonzese,
  como,
  conegliano,
  coriglianoRossano,
  cortemaggiore,
  cosenza,
  cremona,
  crotone,
  cuneo,
  desio,
  empoli,
  enna,
  faenza,
  fano,
  ferentino,
  fermo,
  ferrara,
  fiorenzuolaDArda,
  firenze,
  fiumicino,
  foggia,
  forli,
  frascati,
  frosinone,
  galbiate,
  gallarate,
  gela,
  genova,
  giudicarie,
  giuglianoInCampania,
  gorizia,
  grosseto,
  guidoniaMontecelio,
  imola,
  imperia,
  isernia,
  jesolo,
  laSpezia,
  lameziaTerme,
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
  macerata,
  magenta,
  manfredonia,
  mantova,
  maranoDiNapoli,
  marsala,
  massa,
  matera,
  mazaraDelVallo,
  merate,
  messina,
  milano,
  mira,
  modena,
  molfetta,
  moncalieri,
  monopoli,
  montesilvano,
  monza,
  napoli,
  nepi,
  novara,
  nuoro,
  ocre,
  olbia,
  oristano,
  ortona,
  osimo,
  padova,
  palermo,
  parabiago,
  paterno,
  pavia,
  perugia,
  pesaro,
  pescara,
  piacenza,
  pinerolo,
  pioltello,
  pisa,
  pistoia,
  podenzano,
  pomezia,
  pontedera,
  pordenone,
  portici,
  portovenere,
  potenza,
  pozzuoli,
  prato,
  quartuSantElena,
  ragusa,
  rapallo,
  ravenna,
  reggioCalabria,
  reggioEmilia,
  rho,
  riccoDelGolfo,
  rieti,
  rimini,
  roma,
  rottofreno,
  rovereto,
  rovigo,
  rozzano,
  salerno,
  sanBonifacio,
  sanDonatoMilanese,
  sanremo,
  santoStefanoDiMagra,
  sassari,
  savona,
  segrate,
  senigallia,
  seregno,
  sestoSanGiovanni,
  sestriLevante,
  siena,
  siracusa,
  sondrio,
  spinea,
  taranto,
  tarquinia,
  teramo,
  terni,
  torino,
  torreDelGreco,
  trani,
  trapani,
  trento,
  treviso,
  trieste,
  udine,
  valmadrera,
  varese,
  venezia,
  verbania,
  vercelli,
  verona,
  vetralla,
  vezzanoLigure,
  viareggio,
  viboValentia,
  vicenza,
  vigevano,
  vimercate,
  viterbo,
];
