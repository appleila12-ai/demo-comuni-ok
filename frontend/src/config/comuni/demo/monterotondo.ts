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
    {
      icon: "sunny-outline",
      title: "Monterotondo · Centri estivi 2026 (SCADUTO)",
      subtitle: "Avviso comunale per minori residenti di 3–17 anni: sostegno alle attività socioeducative e all'assistenza qualificata per minori con disabilità certificata ai sensi della L.104/1992; rimborso di 150 euro per centri estivi alle famiglie con ISEE minorenni non superiore a 25.000 euro. Scadenza prorogata al 02/07/2026 ore 12:00. NON È APERTO; verificare un eventuale nuovo avviso 2027.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/notizie/centro-estivi.html" },
    },
    {
      icon: "document-text-outline",
      title: "Monterotondo · Avvisi sociali e graduatorie",
      subtitle: "Il portale comunale pubblica avvisi per disabilità gravissima, progetti di vita, autismo e servizi sociali. Controllare data e scadenza della singola misura: una graduatoria non equivale all'apertura di nuove domande.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/info/argomenti/007.html" },
    },
    // Associazioni e partecipazione: schede istituzionali Comune, verifica 09/11/2026.
    {
      icon: "musical-notes-outline",
      title: "Il Tamburo · Musica e inclusione",
      subtitle: "Associazione censita dal Comune: arti espressive, prevenzione del disagio psicosociale e qualità della vita delle persone con disabilità e delle famiglie. Tel. 3333922534, info@iltamburo.org; orario indicato 9–15. Scheda comunale aggiornata 07/02/2024: confermare attività e orari prima di recarsi.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/vivere/Associazioni~Associazione-3~.html" },
    },
    {
      icon: "people-outline",
      title: "Primavera 86 · Volontariato",
      subtitle: "Realtà presente nell'elenco ufficiale delle associazioni comunali. Via Gramsci, Monterotondo; tel. 06 90622342, primavera86@gmail.com. Specifici servizi e modalità di accesso per disabilità: NON VERIFICATI.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/vivere/Associazioni.html" },
    },
    {
      icon: "medkit-outline",
      title: "Croce Rossa · Comitato di Monterotondo",
      subtitle: "Associazione presente nell'elenco comunale: tel. 06 90623342, segreteria.monterotondo@crimorlupo.org. Servizi attivi, trasporto accessibile e modalità di richiesta: DA CONFERMARE direttamente al Comitato.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/vivere/Associazioni.html" },
    },
    {
      icon: "people-outline",
      title: "Monterotondo · Elenco associazioni",
      subtitle: "Elenco comunale di volontariato, sociale, cultura e protezione civile: include anche Maluba, AVO, Secicas, Spes Pietrara, CAI e altre realtà. Non tutte sono specializzate nella disabilità: verificare la singola attività.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/vivere/Associazioni.html" },
    },
    {
      icon: "football-outline",
      title: "Monterotondo · Albo associazioni sportive",
      subtitle: "Il Comune ha pubblicato il 26/01/2026 gli albi delle associazioni sportive, culturali e di volontariato approvati nel 2025. Sono elenchi di enti, NON una conferma di corsi sportivi adattati o gratuiti: contattare le singole associazioni.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/notizie/ALBI-DELLE-ASSOCIAZIONI-CULTURALI--SPORTIVE-E-DI-VOLONTARIATO---.html" },
    },
    {
      icon: "calendar-outline",
      title: "Monterotondo · Iscrizione albi associazioni 2026",
      subtitle: "Avviso per associazioni culturali, sportive e di volontariato sociale pubblicato il 27/04/2026, scadenza originaria 26/05/2026; risultano successivi avvisi di riapertura termini. Non è un bonus per cittadini e non va presentato come attualmente aperto.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/notizie/VVISO-PUBBLICO-PER-L-ISCRIZIONE-AGLI-ALBI-DELLE-ASSOCIAZIONI-CULTURALI--SPORTIVE-E-DI-VOLONTARIATO-SOCIALE-DEL-COMUNE-DI-MONTEROTONDO-ANNO-2026.html" },
    },
    {
      icon: "accessibility-outline",
      title: "Monterotondo · Accessibilità e inclusione PIAO",
      subtitle: "Consultazione per associazioni rappresentative delle persone con disabilità sugli obiettivi di accessibilità fisica e digitale del PIAO 2027–2029. Scadenza osservazioni 09/10/2026, già trascorsa. Utile come riferimento di partecipazione, non come domanda aperta.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/notizie/PIAO-2027---2029--OBIETTIVI-PER-LA-PIENA-ACCESSIBILITA-FISICA-E-DIGITALE-Avviso-Pubblico-per-il-coinvolgimento-delle-associazioni-rappresentative-delle-persone-con-disabilit-.html" },
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
      subtitle: "Servizio rivolto a residenti con disabilità, anziani e minori in particolari condizioni. La pagina comunale storica (aggiornata nel 2021) indica domanda al Protocollo con ISEE e documentazione sanitaria; eventuale compartecipazione legata al nucleo familiare. Procedura e contatti attuali DA CONFERMARE.",
      action: { type: "web", value: "https://old.comune.monterotondo.rm.it/essere/assistenza-sostegno-e-integrazione/assistenza-domiciliare" },
    },
    {
      icon: "bus-outline",
      title: "Monterotondo · Trasporto sociale: requisiti e domanda",
      subtitle: "La pagina comunale storica (2021) prevede il servizio per residenti in disagio economico con disabilità, studenti con disabilità fuori dalla scuola dell'obbligo e anziani con difficoltà certificate. Domanda ai Servizi Sociali con ISEE e certificazione sanitaria, dopo colloquio. Attivazione e modulistica attuali DA CONFERMARE.",
      action: { type: "web", value: "https://old.comune.monterotondo.rm.it/essere/assistenza-sostegno-e-integrazione/assistenza-domiciliare" },
    },
    {
      icon: "call-outline",
      title: "Monterotondo · Telesoccorso e teleassistenza",
      subtitle: "Il Comune descrive un servizio per anziani e adulti con disabilità soli o non autosufficienti. La fonte è una pagina comunale storica (2021): disponibilità, requisiti e modalità di accesso attuali NON VERIFICATI.",
      action: { type: "web", value: "https://old.comune.monterotondo.rm.it/essere/assistenza-sostegno-e-integrazione/assistenza-domiciliare" },
    },
    {
      icon: "people-outline",
      title: "Distretto RM 5.1 · Servizi vacanza e soggiorni",
      subtitle: "Il portale del Comune segnala nel 2026 servizi vacanza per minori e adulti con disabilità e disagio psichico. Date, posti e domande NON VERIFICATI: consultare l'avviso ufficiale prima di fare richiesta.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/info/argomenti/006.html" },
    },
    {
      icon: "people-outline",
      title: "Distretto RM 5.1 · Progetto AUT AUT ET ET",
      subtitle: "Interventi per persone nello spettro autistico dai 6 anni fino oltre i 65; graduatoria pubblicata nel 2025. Non è un bando 2026 aperto: verificare eventuali nuove annualità.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/info/argomenti/006.html" },
    },
    {
      icon: "document-text-outline",
      title: "Monterotondo · Contrassegno disabilità",
      subtitle: "Il Comune pubblica documentazione sul contrassegno e sulla viabilità per persone con disabilità. Requisiti, modulo e ufficio attuale: da confermare nella scheda comunale dedicata.",
      action: { type: "web", value: "https://www.comune.monterotondo.rm.it/home/info/argomenti/006.html" },
    },
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
monterotondo.percorsoTerritorio = percorso(monterotondo.puntiSupporto, monterotondo.puntiSupporto.map((_, i) => i));
monterotondo.percorsoTerritorio = { ...monterotondo.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
