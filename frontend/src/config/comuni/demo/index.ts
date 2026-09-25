// Comuni DIMOSTRATIVI: enti reali che non hanno (ancora) aderito a TutelApp.
// Servono per le demo online. L'app mostra in ogni pagina iniziale l'avviso
// "Versione dimostrativa". Per nasconderli tutti: EXPO_PUBLIC_COMUNI_DEMO=no.
// Quando un Comune aderisce: sposta il suo file in `comuni/`, togli
// `dimostrativo: true` e aggiungilo all'elenco principale.

import type { ComuneConfig } from "../types";
import { alba } from "./alba";
import { albenga } from "./albenga";
import { ancona } from "./ancona";
import { arezzo } from "./arezzo";
import { ascoliPiceno } from "./ascoli-piceno";
import { asti } from "./asti";
import { bassanoDelGrappa } from "./bassano-del-grappa";
import { battipaglia } from "./battipaglia";
import { bergamo } from "./bergamo";
import { bollate } from "./bollate";
import { brindisi } from "./brindisi";
import { carpi } from "./carpi";
import { carrara } from "./carrara";
import { castelfrancoVeneto } from "./castelfranco-veneto";
import { cesena } from "./cesena";
import { chiavari } from "./chiavari";
import { ciniselloBalsamo } from "./cinisello-balsamo";
import { cittaDiCastello } from "./citta-di-castello";
import { civitavecchia } from "./civitavecchia";
import { colognoMonzese } from "./cologno-monzese";
import { como } from "./como";
import { conegliano } from "./conegliano";
import { cuneo } from "./cuneo";
import { desio } from "./desio";
import { empoli } from "./empoli";
import { faenza } from "./faenza";
import { fano } from "./fano";
import { frascati } from "./frascati";
import { guidoniaMontecelio } from "./guidonia-montecelio";
import { imola } from "./imola";
import { jesolo } from "./jesolo";
import { laSpezia } from "./la-spezia";
import { lecco } from "./lecco";
import { legnago } from "./legnago";
import { legnano } from "./legnano";
import { lerici } from "./lerici";
import { lissone } from "./lissone";
import { magenta } from "./magenta";
import { mantova } from "./mantova";
import { marsala } from "./marsala";
import { mira } from "./mira";
import { monopoli } from "./monopoli";
import { olbia } from "./olbia";
import { ortona } from "./ortona";
import { osimo } from "./osimo";
import { parabiago } from "./parabiago";
import { pavia } from "./pavia";
import { pinerolo } from "./pinerolo";
import { pioltello } from "./pioltello";
import { pontedera } from "./pontedera";
import { rapallo } from "./rapallo";
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
import { teramo } from "./teramo";
import { treviso } from "./treviso";
import { viareggio } from "./viareggio";
import { vimercate } from "./vimercate";

export const COMUNI_DEMO: ComuneConfig[] = [
  alba,
  albenga,
  ancona,
  arezzo,
  ascoliPiceno,
  asti,
  bassanoDelGrappa,
  battipaglia,
  bergamo,
  bollate,
  brindisi,
  carpi,
  carrara,
  castelfrancoVeneto,
  cesena,
  chiavari,
  ciniselloBalsamo,
  cittaDiCastello,
  civitavecchia,
  colognoMonzese,
  como,
  conegliano,
  cuneo,
  desio,
  empoli,
  faenza,
  fano,
  frascati,
  guidoniaMontecelio,
  imola,
  jesolo,
  laSpezia,
  lecco,
  legnago,
  legnano,
  lerici,
  lissone,
  magenta,
  mantova,
  marsala,
  mira,
  monopoli,
  olbia,
  ortona,
  osimo,
  parabiago,
  pavia,
  pinerolo,
  pioltello,
  pontedera,
  rapallo,
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
  teramo,
  treviso,
  viareggio,
  vimercate,
];
