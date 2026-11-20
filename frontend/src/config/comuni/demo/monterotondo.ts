import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE, percorso } from "../percorso";

// Comune di Monterotondo (RM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (15 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Pagina "Salute, benessere e assistenza" del sito del Comune (controllata il 15 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const monterotondo: ComuneConfig = {
  slug: "monterotondo",
  tipo: "comune",
  nome: "Comune di Monterotondo",
  nomeBreve: "Monterotondo",
  delEnte: "del Comune di Monterotondo",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "Marco Montanari",
  indirizzo: "Piazza Angelo Frammartino 4, 00015 Monterotondo (RM)",
  telefono: "06 909641",
  email: "",
  pec: "",
  orari: "Martedì 9:10–13:05 e 15:10–17:10 (Servizi Sociali, fonte Comune)",
  sitoWeb: "https://www.comune.monterotondo.rm.it/home/amministrazione/uffici/Ufficio-18.html",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    // Solo sportelli, servizi e uffici di accesso. Altre voci archiviate in docs/monterotondo-ricollocazione-contenuti-2026-11-09.json
    {
      icon: "accessibility-outline",
      title: "Progetto V.O.C.E. · Sportello Vita Indipendente",
      subtitle: "Via San Martino 21, Monterotondo. Sportello per persone con disabilità fisiche, psichiche e sensoriali dei distretti RM 5.1–5.3; orientamento e accompagnamento all'autonomia, anche attività sportive inclusive. Per appuntamento: 349 9743733 (Francesca Pagliani). Per disabilità visiva: uiclazio@uici.it, oggetto AVI. Avviato maggio 2026 per 12 mesi: confermare prima di recarsi.",
      action: { type: "tel", value: "3499743733" },
    },
    {
      icon: "call-outline",
      title: "Folias · Pronto Intervento Sociale RM 5.1",
      subtitle: "Per situazioni di emergenza sociale a Monterotondo, Mentana e Fonte Nuova: numero verde 800 66 82 58, pis@comune.monterotondo.rm.it. Servizio dichiarato dal gestore accessibile 24 ore su 24, 365 giorni l'anno; sede Via di San Matteo 27b/c. Non sostituisce i numeri di emergenza sanitaria o di pubblica sicurezza.",
      action: { type: "tel", value: "800668258" },
    },
    {
      icon: "people-outline",
      title: "ASL Roma 5 · Disabilità adulti e pazienti fragili",
      subtitle: "UOSD Via dell'Aeronautica 53/b, Monterotondo Scalo; uosddisabilitaadulti@aslroma5.it. Valutazioni e progetti riabilitativi, passaggio dai servizi per minori a quelli per adulti, vita indipendente e Dopo di Noi. Per nuovi utenti adulti: richiesta del medico o specialista tramite PUA.",
      action: { type: "web", value: "https://www.aslroma5.it/strutture/uosd-disabili-adulti-e-pazienti-fragili/" },
    },
    {
      icon: "home-outline",
      title: "Monterotondo · Assistenza domiciliare comunale",
      subtitle: "Servizio rivolto a residenti con disabilità, anziani e minori in particolari condizioni. La pagina comunale storica (aggiornata nel 2021) indica domanda al Protocollo con ISEE e documentazione sanitaria; eventuale compartecipazione legata al nucleo familiare. Procedura e contatti attuali da verificare con l'ufficio competente.",
      action: { type: "web", value: "https://old.comune.monterotondo.rm.it/essere/assistenza-sostegno-e-integrazione/assistenza-domiciliare" },
    },
    {
      icon: "bus-outline",
      title: "Monterotondo · Trasporto sociale: requisiti e domanda",
      subtitle: "La pagina comunale storica (2021) prevede il servizio per residenti in disagio economico con disabilità, studenti con disabilità fuori dalla scuola dell'obbligo e anziani con difficoltà certificate. Domanda ai Servizi Sociali con ISEE e certificazione sanitaria, dopo colloquio. Attivazione e modulistica attuali da verificare con l'ufficio competente.",
      action: { type: "web", value: "https://old.comune.monterotondo.rm.it/essere/assistenza-sostegno-e-integrazione/assistenza-domiciliare" },
    },
    {
      icon: "call-outline",
      title: "Monterotondo · Telesoccorso e teleassistenza",
      subtitle: "Il Comune descrive un servizio per anziani e adulti con disabilità soli o non autosufficienti. La fonte è una pagina comunale storica (2021): disponibilità, requisiti e modalità di accesso attuali non indicati nella pagina consultata.",
      action: { type: "web", value: "https://old.comune.monterotondo.rm.it/essere/assistenza-sostegno-e-integrazione/assistenza-domiciliare" },
    },
    {
      icon: "home-outline",
      title: "Monterotondo · Centro Assistenza Domiciliare ASL Roma 5",
      subtitle: "CAD, Via dell'Aeronautica 53/b, tel. 06 90075918 (infermieri), 06 90075915 (fisioterapisti), 06 90075958 (medici); cad.monterotondo@aslroma5.it. Apertura al pubblico lunedì 9–11; telefonate lun–ven 8–10. Valutazione per ADI e dimissioni protette.",
      action: { type: "tel", value: "0690075918" },
    },
    {
      icon: "people-outline",
      title: "Monterotondo · Servizi Sociali",
      subtitle: "Piazza Angelo Frammartino 4. Responsabile Marco Montanari, dirigente Manuela Colacchi. Ricevimento martedì 9:10–13:05 e 15:10–17:10. Sostegno disabilità, minori, anziani, reddito e inclusione. Telefono diretto ed email ordinaria: non indicati nella pagina consultata.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/amministrazione/uffici/Ufficio-18.html" },
    },
    {
      icon: "medkit-outline",
      title: "Monterotondo · PUA Casa della Comunità",
      subtitle: "Piazza Mentana angolo Viale Bruno Buozzi, tel. 06 90093533, pua.monterotondo@aslroma5.it. Accesso integrato a servizi sociali e sanitari. Per valutazioni RSA: lunedì e mercoledì 9:30–12:30, martedì 14:30–16:30; non estendere automaticamente questi orari a ogni prestazione.",
      action: { type: "tel", value: "0690093533" },
    },
    {
      icon: "location-outline",
      title: "Monterotondo · PUA comunale",
      subtitle: "Piazza Angelo Frammartino 4; martedì e giovedì 9–12:30 e 15:30–17:30. Orari indicati nella pagina ufficiale ASL Roma 5: confermare prima di recarsi.",
      action: { type: "web", value: "https://www.aslroma5.it/servizi_distrettuali/pua-punto-unico-di-accesso-casa-della-comunita-monterotondo/" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 5 · Distretto Monterotondo",
      subtitle: "Distretto RM 5.1 per Monterotondo, Mentana e Fonte Nuova. Sede Via dell'Aeronautica 53/b, Monterotondo Scalo; direzione Federico Guerriero; distretto.monterotondo@aslroma5.it. Segreteria Via Vulcano 5, lun–ven 9–13, tel. 06 90075920 / 45.",
      action: { type: "tel", value: "0690075920" },
    },
    {
      icon: "people-outline",
      title: "Monterotondo · Unità di valutazione multidimensionale",
      subtitle: "UVMD, Via dell'Aeronautica 53/b, tel. 06 90075967, uvmd.monterotondo@aslroma5.it. Ricevimento lun–ven previo appuntamento. Attivazione tramite richiesta del medico di base, pediatra o medico ospedaliero secondo la procedura ASL.",
      action: { type: "tel", value: "0690075967" },
    },
    {
      icon: "bus-outline",
      title: "Monterotondo · Trasporto sociale",
      subtitle: "Il Comune documenta una procedura di convenzionamento con associazioni per il trasporto sociale di anziani e persone con disabilità. Modalità di accesso e disponibilità attuale: non indicati nella pagina consultata.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/amministrazione/uffici/Ufficio-18.html" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 5 · Assistenza sanitaria e ausili",
      subtitle: "Dal portale del Distretto si raggiungono assistenza domiciliare integrata, assistenza protesica, neuropsichiatria infantile, consultorio e ambulatori. Per indirizzi e orari delle singole prestazioni consultare le relative schede ASL.",
      action: { type: "web", value: "https://www.aslroma5.it/distretti/distretto-di-monterotondo/" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 5 · Esenzioni ticket",
    url: "https://www.aslroma5.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
monterotondo.percorsoTerritorio = percorso(monterotondo.puntiSupporto, monterotondo.puntiSupporto.map((_, i) => i));
monterotondo.percorsoTerritorio = { ...monterotondo.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
