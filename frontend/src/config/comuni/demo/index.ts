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
import { albanoLaziale } from "./albano-laziale";
import { albenga } from "./albenga";
import { alcamo } from "./alcamo";
import { alessandria } from "./alessandria";
import { alghero } from "./alghero";
import { altamura } from "./altamura";
import { ameglia } from "./ameglia";
import { ancona } from "./ancona";
import { andria } from "./andria";
import { angri } from "./angri";
import { anzio } from "./anzio";
import { aosta } from "./aosta";
import { aprilia } from "./aprilia";
import { arcola } from "./arcola";
import { ardea } from "./ardea";
import { arezzo } from "./arezzo";
import { ascoliPiceno } from "./ascoli-piceno";
import { asti } from "./asti";
import { augusta } from "./augusta";
import { avellino } from "./avellino";
import { aversa } from "./aversa";
import { avezzano } from "./avezzano";
import { bagheria } from "./bagheria";
import { barcellonaPozzoDiGotto } from "./barcellona-pozzo-di-gotto";
import { bari } from "./bari";
import { barletta } from "./barletta";
import { bassanoDelGrappa } from "./bassano-del-grappa";
import { battipaglia } from "./battipaglia";
import { belluno } from "./belluno";
import { benevento } from "./benevento";
import { bergamo } from "./bergamo";
import { biella } from "./biella";
import { bisceglie } from "./bisceglie";
import { bitonto } from "./bitonto";
import { bollate } from "./bollate";
import { bologna } from "./bologna";
import { bolzano } from "./bolzano";
import { brescia } from "./brescia";
import { brindisi } from "./brindisi";
import { brugherio } from "./brugherio";
import { bustoArsizio } from "./busto-arsizio";
import { cagliari } from "./cagliari";
import { calolziocorte } from "./calolziocorte";
import { caltagirone } from "./caltagirone";
import { caltanissetta } from "./caltanissetta";
import { campiBisenzio } from "./campi-bisenzio";
import { campobasso } from "./campobasso";
import { cantu } from "./cantu";
import { capannori } from "./capannori";
import { caprarola } from "./caprarola";
import { carbonia } from "./carbonia";
import { carpi } from "./carpi";
import { carrara } from "./carrara";
import { casalecchioDiReno } from "./casalecchio-di-reno";
import { casalnuovoDiNapoli } from "./casalnuovo-di-napoli";
import { casatenovo } from "./casatenovo";
import { cascina } from "./cascina";
import { caserta } from "./caserta";
import { casoria } from "./casoria";
import { cassino } from "./cassino";
import { castelSanGiovanni } from "./castel-san-giovanni";
import { castelfrancoVeneto } from "./castelfranco-veneto";
import { castellammareDiStabia } from "./castellammare-di-stabia";
import { castelnuovoMagra } from "./castelnuovo-magra";
import { catania } from "./catania";
import { catanzaro } from "./catanzaro";
import { cavaDeTirreni } from "./cava-de-tirreni";
import { cerignola } from "./cerignola";
import { cernuscoSulNaviglio } from "./cernusco-sul-naviglio";
import { cerveteri } from "./cerveteri";
import { cesanoMaderno } from "./cesano-maderno";
import { cesena } from "./cesena";
import { chiavari } from "./chiavari";
import { chieri } from "./chieri";
import { chieti } from "./chieti";
import { chioggia } from "./chioggia";
import { ciampino } from "./ciampino";
import { ciniselloBalsamo } from "./cinisello-balsamo";
import { cisternaDiLatina } from "./cisterna-di-latina";
import { cittaDiCastello } from "./citta-di-castello";
import { civitaCastellana } from "./civita-castellana";
import { civitanovaMarche } from "./civitanova-marche";
import { civitavecchia } from "./civitavecchia";
import { collegno } from "./collegno";
import { colognoMonzese } from "./cologno-monzese";
import { como } from "./como";
import { conegliano } from "./conegliano";
import { corato } from "./corato";
import { coriglianoRossano } from "./corigliano-rossano";
import { cortemaggiore } from "./cortemaggiore";
import { cosenza } from "./cosenza";
import { crema } from "./crema";
import { cremona } from "./cremona";
import { crotone } from "./crotone";
import { cuneo } from "./cuneo";
import { desio } from "./desio";
import { eboli } from "./eboli";
import { empoli } from "./empoli";
import { enna } from "./enna";
import { ercolano } from "./ercolano";
import { faenza } from "./faenza";
import { fano } from "./fano";
import { favara } from "./favara";
import { ferentino } from "./ferentino";
import { fermo } from "./fermo";
import { ferrara } from "./ferrara";
import { fiorenzuolaDArda } from "./fiorenzuola-d-arda";
import { firenze } from "./firenze";
import { fiumicino } from "./fiumicino";
import { foggia } from "./foggia";
import { foligno } from "./foligno";
import { fondi } from "./fondi";
import { forli } from "./forli";
import { formia } from "./formia";
import { francavillaFontana } from "./francavilla-fontana";
import { frascati } from "./frascati";
import { frattamaggiore } from "./frattamaggiore";
import { frosinone } from "./frosinone";
import { galbiate } from "./galbiate";
import { gallarate } from "./gallarate";
import { gela } from "./gela";
import { genova } from "./genova";
import { giudicarie } from "./giudicarie";
import { giuglianoInCampania } from "./giugliano-in-campania";
import { gorizia } from "./gorizia";
import { gravinaInPuglia } from "./gravina-in-puglia";
import { grosseto } from "./grosseto";
import { grugliasco } from "./grugliasco";
import { guidoniaMontecelio } from "./guidonia-montecelio";
import { iglesias } from "./iglesias";
import { imola } from "./imola";
import { imperia } from "./imperia";
import { isernia } from "./isernia";
import { jesi } from "./jesi";
import { jesolo } from "./jesolo";
import { laSpezia } from "./la-spezia";
import { ladispoli } from "./ladispoli";
import { lameziaTerme } from "./lamezia-terme";
import { lanciano } from "./lanciano";
import { lanusei } from "./lanusei";
import { laquila } from "./laquila";
import { latina } from "./latina";
import { lecce } from "./lecce";
import { lecco } from "./lecco";
import { legnago } from "./legnago";
import { legnano } from "./legnano";
import { lerici } from "./lerici";
import { licata } from "./licata";
import { lissone } from "./lissone";
import { livorno } from "./livorno";
import { lodi } from "./lodi";
import { lucca } from "./lucca";
import { lucera } from "./lucera";
import { luni } from "./luni";
import { macerata } from "./macerata";
import { maddaloni } from "./maddaloni";
import { magenta } from "./magenta";
import { manfredonia } from "./manfredonia";
import { mantova } from "./mantova";
import { maranoDiNapoli } from "./marano-di-napoli";
import { marcianise } from "./marcianise";
import { marino } from "./marino";
import { marsala } from "./marsala";
import { martinaFranca } from "./martina-franca";
import { massa } from "./massa";
import { matera } from "./matera";
import { mazaraDelVallo } from "./mazara-del-vallo";
import { merano } from "./merano";
import { merate } from "./merate";
import { messina } from "./messina";
import { milano } from "./milano";
import { milazzo } from "./milazzo";
import { mira } from "./mira";
import { misterbianco } from "./misterbianco";
import { modena } from "./modena";
import { modica } from "./modica";
import { modugno } from "./modugno";
import { molfetta } from "./molfetta";
import { moncalieri } from "./moncalieri";
import { monopoli } from "./monopoli";
import { monterotondo } from "./monterotondo";
import { montesilvano } from "./montesilvano";
import { monza } from "./monza";
import { napoli } from "./napoli";
import { nardo } from "./nardo";
import { nepi } from "./nepi";
import { nettuno } from "./nettuno";
import { nichelino } from "./nichelino";
import { noceraInferiore } from "./nocera-inferiore";
import { novara } from "./novara";
import { nuoro } from "./nuoro";
import { ocre } from "./ocre";
import { olbia } from "./olbia";
import { oristano } from "./oristano";
import { ortona } from "./ortona";
import { osimo } from "./osimo";
import { padernoDugnano } from "./paderno-dugnano";
import { padova } from "./padova";
import { pagani } from "./pagani";
import { palermo } from "./palermo";
import { parabiago } from "./parabiago";
import { partinico } from "./partinico";
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
import { quarto } from "./quarto";
import { quartuSantElena } from "./quartu-sant-elena";
import { ragusa } from "./ragusa";
import { rapallo } from "./rapallo";
import { ravenna } from "./ravenna";
import { reggioCalabria } from "./reggio-calabria";
import { reggioEmilia } from "./reggio-emilia";
import { rende } from "./rende";
import { rho } from "./rho";
import { riccoDelGolfo } from "./ricco-del-golfo";
import { rieti } from "./rieti";
import { rimini } from "./rimini";
import { rivoli } from "./rivoli";
import { roma } from "./roma";
import { rottofreno } from "./rottofreno";
import { rovereto } from "./rovereto";
import { rovigo } from "./rovigo";
import { rozzano } from "./rozzano";
import { salerno } from "./salerno";
import { sanBenedettoDelTronto } from "./san-benedetto-del-tronto";
import { sanBonifacio } from "./san-bonifacio";
import { sanDonaDiPiave } from "./san-dona-di-piave";
import { sanDonatoMilanese } from "./san-donato-milanese";
import { sanGiorgioACremano } from "./san-giorgio-a-cremano";
import { sanGiulianoMilanese } from "./san-giuliano-milanese";
import { sanSevero } from "./san-severo";
import { sanluri } from "./sanluri";
import { sanremo } from "./sanremo";
import { santoStefanoDiMagra } from "./santo-stefano-di-magra";
import { saronno } from "./saronno";
import { sassari } from "./sassari";
import { sassuolo } from "./sassuolo";
import { savona } from "./savona";
import { scafati } from "./scafati";
import { scandicci } from "./scandicci";
import { sciacca } from "./sciacca";
import { segrate } from "./segrate";
import { senigallia } from "./senigallia";
import { seregno } from "./seregno";
import { sestoFiorentino } from "./sesto-fiorentino";
import { sestoSanGiovanni } from "./sesto-san-giovanni";
import { sestriLevante } from "./sestri-levante";
import { settimoTorinese } from "./settimo-torinese";
import { siena } from "./siena";
import { siracusa } from "./siracusa";
import { sondrio } from "./sondrio";
import { spinea } from "./spinea";
import { spoleto } from "./spoleto";
import { taranto } from "./taranto";
import { tarquinia } from "./tarquinia";
import { tempioPausania } from "./tempio-pausania";
import { teramo } from "./teramo";
import { termoli } from "./termoli";
import { terni } from "./terni";
import { terracina } from "./terracina";
import { tivoli } from "./tivoli";
import { torino } from "./torino";
import { torreAnnunziata } from "./torre-annunziata";
import { torreDelGreco } from "./torre-del-greco";
import { tortoli } from "./tortoli";
import { trani } from "./trani";
import { trapani } from "./trapani";
import { trento } from "./trento";
import { treviglio } from "./treviglio";
import { treviso } from "./treviso";
import { trieste } from "./trieste";
import { udine } from "./udine";
import { urbino } from "./urbino";
import { valmadrera } from "./valmadrera";
import { varese } from "./varese";
import { vasto } from "./vasto";
import { velletri } from "./velletri";
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
import { villacidro } from "./villacidro";
import { vimercate } from "./vimercate";
import { viterbo } from "./viterbo";
import { vittoria } from "./vittoria";

export const COMUNI_DEMO: ComuneConfig[] = [
  acerra,
  acireale,
  afragola,
  agrigento,
  alba,
  albanoLaziale,
  albenga,
  alcamo,
  alessandria,
  alghero,
  altamura,
  ameglia,
  ancona,
  andria,
  angri,
  anzio,
  aosta,
  aprilia,
  arcola,
  ardea,
  arezzo,
  ascoliPiceno,
  asti,
  augusta,
  avellino,
  aversa,
  avezzano,
  bagheria,
  barcellonaPozzoDiGotto,
  bari,
  barletta,
  bassanoDelGrappa,
  battipaglia,
  belluno,
  benevento,
  bergamo,
  biella,
  bisceglie,
  bitonto,
  bollate,
  bologna,
  bolzano,
  brescia,
  brindisi,
  brugherio,
  bustoArsizio,
  cagliari,
  calolziocorte,
  caltagirone,
  caltanissetta,
  campiBisenzio,
  campobasso,
  cantu,
  capannori,
  caprarola,
  carbonia,
  carpi,
  carrara,
  casalecchioDiReno,
  casalnuovoDiNapoli,
  casatenovo,
  cascina,
  caserta,
  casoria,
  cassino,
  castelSanGiovanni,
  castelfrancoVeneto,
  castellammareDiStabia,
  castelnuovoMagra,
  catania,
  catanzaro,
  cavaDeTirreni,
  cerignola,
  cernuscoSulNaviglio,
  cerveteri,
  cesanoMaderno,
  cesena,
  chiavari,
  chieri,
  chieti,
  chioggia,
  ciampino,
  ciniselloBalsamo,
  cisternaDiLatina,
  cittaDiCastello,
  civitaCastellana,
  civitanovaMarche,
  civitavecchia,
  collegno,
  colognoMonzese,
  como,
  conegliano,
  corato,
  coriglianoRossano,
  cortemaggiore,
  cosenza,
  crema,
  cremona,
  crotone,
  cuneo,
  desio,
  eboli,
  empoli,
  enna,
  ercolano,
  faenza,
  fano,
  favara,
  ferentino,
  fermo,
  ferrara,
  fiorenzuolaDArda,
  firenze,
  fiumicino,
  foggia,
  foligno,
  fondi,
  forli,
  formia,
  francavillaFontana,
  frascati,
  frattamaggiore,
  frosinone,
  galbiate,
  gallarate,
  gela,
  genova,
  giudicarie,
  giuglianoInCampania,
  gorizia,
  gravinaInPuglia,
  grosseto,
  grugliasco,
  guidoniaMontecelio,
  iglesias,
  imola,
  imperia,
  isernia,
  jesi,
  jesolo,
  laSpezia,
  ladispoli,
  lameziaTerme,
  lanciano,
  lanusei,
  laquila,
  latina,
  lecce,
  lecco,
  legnago,
  legnano,
  lerici,
  licata,
  lissone,
  livorno,
  lodi,
  lucca,
  lucera,
  luni,
  macerata,
  maddaloni,
  magenta,
  manfredonia,
  mantova,
  maranoDiNapoli,
  marcianise,
  marino,
  marsala,
  martinaFranca,
  massa,
  matera,
  mazaraDelVallo,
  merano,
  merate,
  messina,
  milano,
  milazzo,
  mira,
  misterbianco,
  modena,
  modica,
  modugno,
  molfetta,
  moncalieri,
  monopoli,
  monterotondo,
  montesilvano,
  monza,
  napoli,
  nardo,
  nepi,
  nettuno,
  nichelino,
  noceraInferiore,
  novara,
  nuoro,
  ocre,
  olbia,
  oristano,
  ortona,
  osimo,
  padernoDugnano,
  padova,
  pagani,
  palermo,
  parabiago,
  partinico,
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
  quarto,
  quartuSantElena,
  ragusa,
  rapallo,
  ravenna,
  reggioCalabria,
  reggioEmilia,
  rende,
  rho,
  riccoDelGolfo,
  rieti,
  rimini,
  rivoli,
  roma,
  rottofreno,
  rovereto,
  rovigo,
  rozzano,
  salerno,
  sanBenedettoDelTronto,
  sanBonifacio,
  sanDonaDiPiave,
  sanDonatoMilanese,
  sanGiorgioACremano,
  sanGiulianoMilanese,
  sanSevero,
  sanluri,
  sanremo,
  santoStefanoDiMagra,
  saronno,
  sassari,
  sassuolo,
  savona,
  scafati,
  scandicci,
  sciacca,
  segrate,
  senigallia,
  seregno,
  sestoFiorentino,
  sestoSanGiovanni,
  sestriLevante,
  settimoTorinese,
  siena,
  siracusa,
  sondrio,
  spinea,
  spoleto,
  taranto,
  tarquinia,
  tempioPausania,
  teramo,
  termoli,
  terni,
  terracina,
  tivoli,
  torino,
  torreAnnunziata,
  torreDelGreco,
  tortoli,
  trani,
  trapani,
  trento,
  treviglio,
  treviso,
  trieste,
  udine,
  urbino,
  valmadrera,
  varese,
  vasto,
  velletri,
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
  villacidro,
  vimercate,
  viterbo,
  vittoria,
];
