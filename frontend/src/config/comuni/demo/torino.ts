import type { ComuneConfig, PuntoSupporto } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Torino (TO) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Fonti (pagine ufficiali del Comune, controllate il 13 ottobre 2026): "Assistenza domiciliare", "Progetti di Vita", scheda di via Pio VII.
// Un servizio sociale per ogni distretto (4 distretti, 8 Circoscrizioni), per appuntamento. Il centralino del Comune è 011 011 999.
// Informadisabilità: https://www.comune.torino.it/amministrazione/informadisabilita (aggiornata 19/11/2025, controllata 11/11/2026).
// Distretti: https://www.comune.torino.it/servizi/valutazione-della-disabilita (aggiornata 25/03/2026, controllata 11/11/2026).
// Da fare: PUA e UVG; bonus comunali con importi; sport e tempo libero.
export const torino: ComuneConfig = {
  slug: "torino",
  tipo: "comune",
  nome: "Comune di Torino",
  nomeBreve: "Torino",
  delEnte: "del Comune di Torino",
  soggetto: "Il Comune",
  provincia: "TO",
  regione: "Piemonte",

  ente: "Informadisabilità · orientamento ai Servizi Sociali",
  responsabile: "",
  indirizzo: "Corso Unione Sovietica 228/D, 10134 Torino",
  telefono: "011 011 21631",
  email: "informadisabilita@comune.torino.it",
  pec: "servizi.sociali@cert.comune.torino.it",
  orari: "Lun-ven 9:00-12:30; anche mar e gio 14:00-16:00. Informazioni per telefono e email; in presenza su appuntamento",
  sitoWeb: "https://www.comune.torino.it/amministrazione/informadisabilita",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    {
      icon: "business-outline",
      title: "Dipartimento Servizi Sociali, Sociosanitari e Abitativi",
      subtitle: "Via Carlo Ignazio Giulio 22 · Tel. 011 011 25520 (alternativo 011 011 25111) · Fonte: sito del Comune, consultato il 10/11/2026",
      action: { type: "tel", value: "01101125520" },
    },
    {
      icon: "information-circle-outline",
      title: "PIÙ – Punto Informativo Unificato",
      subtitle: "Per orientarti tra i servizi del Comune · Tel. 011 011 23010 · Numero verde 800 019 531 · piu@comune.torino.it · Pagina aggiornata il 03/09/2026",
      action: { type: "tel", value: "01101123010" },
    },
    {
      icon: "people-outline",
      title: "Servizi sociali Circoscrizioni 1 e 8 (via Pio VII 61)",
      // https://www.comune.torino.it/vivere-comune/luoghi/servizi-sociali-via-pio-vii (aggiornata 10/11/2026, controllata 11/11/2026). Discordanza sugli orari nel registro.
      subtitle: "Equipe Disabili. Per informazioni e appuntamenti: s.socialedistrettosudest@comune.torino.it · Tel. 011 011 30100",
      action: { type: "tel", value: "01101130100" },
    },
    {
      icon: "people-outline",
      title: "Servizi sociali Circoscrizioni 2 e 3 (via Filadelfia)",
      subtitle: "Per appuntamento, lun-ven 9:00-13:00. Email distretto sud ovest: s.socialedistrettosudovest@comune.torino.it",
      action: { type: "tel", value: "01101128800" },
    },
    {
      icon: "people-outline",
      title: "Servizi sociali Circoscrizioni 4 e 5 (via Val della Torre)",
      subtitle: "Per appuntamento, lun-ven 9:00-13:00. Email distretto nord ovest: s.socialedistrettonordovest@comune.torino.it",
      action: { type: "tel", value: "01101121411" },
    },
    {
      icon: "people-outline",
      title: "Servizi sociali Circoscrizioni 6 e 7 (Lungo Dora Savona)",
      subtitle: "Per appuntamento, lun-ven 9:00-13:00. Email distretto nord est: s.socialedistrettonordest@comune.torino.it",
      action: { type: "tel", value: "01101134511" },
    },
    {
      icon: "compass-outline",
      title: "Progetti di Vita per persone con disabilità",
      subtitle: "Per chi ha la certificazione Legge 104 e vive a Torino: gratuito, di norma entro 90 giorni. Si chiede con un modulo al servizio sociale del tuo territorio",
      action: { type: "web", value: "https://www.comune.torino.it/servizi/progetti-vita-per-persone-disabilita" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Città di Torino",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslcittaditorino.it" },
    },
    {
      icon: "information-circle-outline",
      title: "Informadisabilità · ascolto e orientamento",
      subtitle: "Corso Unione Sovietica 228/D · informadisabilita@comune.torino.it · Lun-ven 9:00-12:30; mar e gio anche 14:00-16:00. Per venire in sede concorda un appuntamento. Per l'interpretariato LIS: serviziolis@comune.torino.it · Fonte: Comune, controllata 11/11/2026",
      action: { type: "tel", value: "01101121631" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Città di Torino · Esenzioni ticket",
    url: "https://www.aslcittaditorino.it/sportelli-per-pratiche-amministrative/",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Fonte passo 2: pagina "Commissione Invalidi Civili, Handicap, Cecità, Sordità e Disabilità" di ASL Città di Torino (aslcittaditorino.it), letta il 28/10/2026.
// La pagina non dice quale ambulatorio serva quale zona.
const COMMISSIONE_ASL_TORINO: PuntoSupporto = {
  icon: "medkit-outline",
  title: "ASL Città di Torino · Commissione invalidi civili e handicap",
  subtitle:
    "Visita solo su prenotazione, in uno dei tre ambulatori di Medicina legale: via Farinelli 25 (tel. 011 566 4067, martedì e giovedì 13:30–15:30), via Luzzatti 50, 2° piano (tel. 011 4395570, informazioni lunedì–venerdì 9:00–12:00), via Montanaro 60 (tel. 011 240 2522, martedì, mercoledì e giovedì 13:30–15:30)",
  action: {
    type: "web",
    value: "https://www.aslcittaditorino.it/prestazioni/commissione-invalidi-civili-handicap-cecita-sordita-e-disabilita/",
  },
};
// Passo 4: servizi sociali delle Circoscrizioni; passo 5: Progetti di Vita del Comune.
torino.percorsoTerritorio = percorso(torino.puntiSupporto, [8, 2, 3, 4, 5], [COMMISSIONE_ASL_TORINO], [], [6]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
torino.percorsoTerritorio = { ...torino.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
