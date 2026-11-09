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
    // Approfondimento 09/11/2026: avvisi e servizi da fonti istituzionali.
    {
      icon: "calendar-outline",
      title: "Distretto RM 5.1 · Contributo autismo minori 2026 (SCADUTO)",
      subtitle: "Avviso del 22/09/2026 per famiglie di minori con diagnosi di disturbo dello spettro autistico fino a 12 anni, residenti a Monterotondo, Mentana o Fonte Nuova. Rimborso di interventi psicologici, comportamentali ed educativi documentati, fino a 5.000 euro annui per beneficiario e nei limiti delle risorse. SCADENZA 21/10/2026 ore 12:00: NON PRESENTARE COME BANDO APERTO. Fonte Comune verificata 09/11/2026.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/notizie/Bando-Autismo-2026-del-Distretto-RM5.1.html" },
    },
    {
      icon: "home-outline",
      title: "Monterotondo · Centro Assistenza Domiciliare ASL Roma 5",
      subtitle: "CAD, Via dell'Aeronautica 53/b, tel. 06 90075918 (infermieri), 06 90075915 (fisioterapisti), 06 90075958 (medici); cad.monterotondo@aslroma5.it. Apertura al pubblico lunedì 9–11; telefonate lun–ven 8–10. Valutazione per ADI e dimissioni protette.",
      action: { type: "web", value: "https://www.aslroma5.it/servizi_distrettuali/centro-assistenza-domiciliare-cad-distretto-di-monterotondo/" },
    },
    {
      icon: "document-text-outline",
      title: "Distretto RM 5.1 · Progetti di vita personalizzati 2026",
      subtitle: "Il Comune ha pubblicato il 06/03/2026 un avviso per persone con disabilità, anziani parzialmente autosufficienti e non autosufficienti, con modulo di avvio progetto e modulo di continuità per disabilità gravissima. Consultare l'avviso integrale per requisiti e validità; apertura nuove domande NON VERIFICATA.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/notizie/Avviso-Pubblico-Interventi-Disabilit--Gravissima.html" },
    },
    {
      icon: "car-outline",
      title: "Monterotondo · Contributo vettura per disabilità",
      subtitle: "Il Comune pubblica un documento denominato 'Contributo vettura disabile' (deliberazione Consiglio comunale n. 125/2006). Requisiti, importi, attuale finanziamento e apertura domande NON VERIFICATI: non considerarlo automaticamente un bonus attivo.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/info/argomenti/006.html" },
    },
    // Fonti ufficiali Comune Monterotondo e ASL Roma 5, verifica 09/11/2026.
    {
      icon: "people-outline",
      title: "Monterotondo · Servizi Sociali",
      subtitle: "Piazza Angelo Frammartino 4. Responsabile Marco Montanari, dirigente Manuela Colacchi. Ricevimento martedì 9:10–13:05 e 15:10–17:10. Sostegno disabilità, minori, anziani, reddito e inclusione. Telefono diretto ed email ordinaria: NON VERIFICATI.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/amministrazione/uffici/Ufficio-18.html" },
    },
    {
      icon: "medkit-outline",
      title: "Monterotondo · PUA Casa della Comunità",
      subtitle: "Piazza Mentana angolo Viale Bruno Buozzi, tel. 06 90093533, pua.monterotondo@aslroma5.it. Accesso integrato a servizi sociali e sanitari. Per valutazioni RSA: lunedì e mercoledì 9:30–12:30, martedì 14:30–16:30; non estendere automaticamente questi orari a ogni prestazione.",
      action: { type: "web", value: "https://www.aslroma5.it/servizi_distrettuali/pua-punto-unico-di-accesso-casa-della-comunita-monterotondo/" },
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
      action: { type: "web", value: "https://www.aslroma5.it/distretti/distretto-di-monterotondo/" },
    },
    {
      icon: "people-outline",
      title: "Monterotondo · Unità di valutazione multidimensionale",
      subtitle: "UVMD, Via dell'Aeronautica 53/b, tel. 06 90075967, uvmd.monterotondo@aslroma5.it. Ricevimento lun–ven previo appuntamento. Attivazione tramite richiesta del medico di base, pediatra o medico ospedaliero secondo la procedura ASL.",
      action: { type: "web", value: "https://www.aslroma5.it/servizi_distrettuali/uvmd-distretto-monterotondo/" },
    },
    {
      icon: "calendar-outline",
      title: "Distretto RM 5.1 · Disabilità gravissima 2026",
      subtitle: "Il Comune ha pubblicato la graduatoria provvisoria l'11/06/2026 e una rettifica il 19/06/2026. Riguarda Monterotondo, Mentana e Fonte Nuova. È una graduatoria, NON un bando attualmente aperto: verificare la posizione e gli aggiornamenti nell'avviso ufficiale.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/notizie/Pubblicazione-Graduatoria-Interventi-Disabilit--Gravissima-2026.html" },
    },
    {
      icon: "home-outline",
      title: "Monterotondo · Progetti di Vita e Vita indipendente",
      subtitle: "La pagina ufficiale dei Servizi Sociali elenca avvisi per progetti di vita individuali e vita indipendente, rivolti anche a persone con disabilità del Distretto RM 5.1. Requisiti e apertura domande 2026: NON VERIFICATI; consultare il singolo avviso.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/amministrazione/uffici/Ufficio-18.html" },
    },
    {
      icon: "bus-outline",
      title: "Monterotondo · Trasporto sociale",
      subtitle: "Il Comune documenta una procedura di convenzionamento con associazioni per il trasporto sociale di anziani e persone con disabilità. Modalità di accesso e disponibilità attuale: NON VERIFICATE.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/amministrazione/uffici/Ufficio-18.html" },
    },
    {
      icon: "people-outline",
      title: "Monterotondo · Autismo minori e centro diurno",
      subtitle: "Il Comune elenca interventi per famiglie di minori fino a 12 anni nello spettro autistico e il centro diurno socioeducativo riabilitativo intercomunale CSERDI. Non sono confermate nuove domande aperte: verificare singoli avvisi e modalità.",
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
monterotondo.percorsoTerritorio = percorso(monterotondo.puntiSupporto, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
monterotondo.percorsoTerritorio = { ...monterotondo.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
