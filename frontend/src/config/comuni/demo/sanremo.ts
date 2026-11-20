import type { ComuneConfig } from "../types";
import { percorso } from "../percorso";

// Comune di Sanremo (IM) — VERSIONE DIMOSTRATIVA, SCHEDA SNELLA (14 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Argomento "Integrazione sociale" del sito del Comune (controllato il 14 ottobre 2026). Il link dell'azienda sanitaria è da verificare.
// Da fare: telefono, email, indirizzo e orari dei Servizi Sociali; bonus del Comune, associazioni, sport e tempo libero.
export const sanremo: ComuneConfig = {
  slug: "sanremo",
  tipo: "comune",
  nome: "Comune di Sanremo",
  nomeBreve: "Sanremo",
  delEnte: "del Comune di Sanremo",
  soggetto: "Il Comune",
  provincia: "IM",
  regione: "Liguria",

  ente: "Servizi Sociali",
  responsabile: "Simona Donati",
  indirizzo: "Corso G. Garibaldi 30, 18038 Sanremo",
  telefono: "0184 52901",
  email: "sicurezzasociale@comunedisanremo.it",
  pec: "",
  orari: "Orari di ricevimento Ambito Sociale non verificati: contattare l’ufficio",
  sitoWeb: "https://www.comune.sanremo.im.it/it/unita_organizzative/ambito-sociale",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    // Solo uffici, sportelli e servizi di accesso. Schede da ricollocare archiviate in docs.
    {
      icon: "medkit-outline",
      title: "Sanremo · Neuropsichiatria infantile: prima visita",
      subtitle: "Palafiori, Corso Garibaldi 1. Per la prima visita serve richiesta del pediatra o del medico di medicina generale. Prenotazioni: 0184 536709, martedì e giovedì 10–12. Attività lun–ven 8:30–17:30. Fonte ASL1.",
      action: { type: "web", value: "https://www.asl1.liguria.it/territorio/dipartimento-integrato-salute-mentale-e-dipendenze/542-neuropsichiatria-infantile.html" },
    },
    {
      icon: "people-outline",
      title: "Sanremo · Centro autismo: riferimenti clinici",
      subtitle: "Palafiori, Corso Garibaldi 1. Responsabile indicato da ASL1: dott. Giuseppe Pili, tel. 0184 536779. Psicologi: Valentina Boeri 0184 536787; Martina Magaglio e Andrea Barbero 0184 536623. Per primo accesso seguire la procedura NPI.",
      action: { type: "web", value: "https://www.asl1.liguria.it/territorio/dipartimento-integrato-salute-mentale-e-dipendenze/542-neuropsichiatria-infantile.html" },
    },
    {
      icon: "medkit-outline",
      title: "Sanremo · Centro autismo e neuropsichiatria infantile",
      subtitle: "Palafiori, Corso Garibaldi 1: il Distretto sanitario sanremese indica Centro autismo, Neuropsichiatria infantile, Logopedia e Psicologia. Contattare ASL1 per modalità di accesso e prenotazione; orari specifici NON VERIFICATI.",
      action: { type: "web", value: "https://www.asl1.liguria.it/territorio/distretti-sanitari/distretto-sanitario-sanremese.html" },
    },
    {
      icon: "accessibility-outline",
      title: "Sanremo · Presidi, protesi e ausili tecnici",
      subtitle: "Sportello Accoglienza ASL1, Palafiori, Corso Garibaldi 1; tel. 0184 536784; lun–ven 8–13. Per protesi, ortesi, ausili e forniture sanitarie verificare prescrizioni e autorizzazioni con ASL1.",
      action: { type: "web", value: "https://www.asl1.liguria.it/component/content/article.html?Itemid=101&id=130%3Aerogazione-presidi-ausili-tecnici" },
    },
    {
      icon: "medkit-outline",
      title: "Sanremo · CUP, ticket e anagrafe sanitaria",
      subtitle: "Sportello polifunzionale ASL1 al Palafiori, Corso Garibaldi 1, lun–ven 8–13; tel. 0184 536784. Per prenotazioni, pagamento ticket e pratiche anagrafiche sanitarie.",
      action: { type: "web", value: "https://www.asl1.liguria.it/servizi-dalla-a-alla-z/2243-sportelli-polifunzionali.html" },
    },
    {
      icon: "home-outline",
      title: "Sanremo · Vita indipendente, caregiver e Dopo di Noi: accesso PUA",
      subtitle: "Il PUA ASL1 elenca Fondo non autosufficienza, gravissime disabilità, Vita indipendente, contributo caregiver e Dopo di Noi. È il punto di orientamento per l'attivazione delle procedure: non significa che tutti i finanziamenti siano aperti.",
      action: { type: "web", value: "https://www.asl1.liguria.it/servizi-dalla-a-alla-z/1498-punto-unico-accesso.html" },
    },
    {
      icon: "phone-portrait-outline",
      title: "Sanremo · Medici Casa della Comunità: recapito regionale",
      subtitle: "La Regione Liguria indica il numero 0184 534714 per contattare i medici della Casa della Comunità di Sanremo (notizia 04/06/2026). Non è il numero specifico del PUA.",
      action: { type: "web", value: "https://www.regione.liguria.it/homepage-salute/ultime-dal-canale/item/46570-numeri-medici-case-comunita.html" },
    },
    {
      icon: "people-outline",
      title: "Ambito Sociale Sanremo · primo accesso",
      subtitle: "Corso G. Garibaldi 30. Responsabile Simona Donati. Telefoni 0184 52901, 0184 529010 e 0184 529035. Accoglienza, orientamento e presa in carico per minori, adulti, anziani e disabilità. Orari non confermati. Fonte Comune di Sanremo, letta 09/11/2026.",
      action: { type: "web", value: "https://www.comune.sanremo.im.it/it/unita_organizzative/ambito-sociale" },
    },
    {
      icon: "medkit-outline",
      title: "Casa della Comunità Sanremo · ASL1",
      subtitle: "Via San Francesco 96, Palasalute, piano 2. Medico di assistenza primaria ad accesso libero 24 ore su 24, 7 giorni su 7; PUA, ambulatori infermieristici, IFoC e ADI. Attenzione: gli orari del PUA sono discordanti tra pagine ASL1; verificare prima di recarsi. Fonte ASL1, aggiornata 31/08/2026.",
      action: { type: "web", value: "https://www.asl1.liguria.it/territorio/distretti-sanitari/casa-comunita/casa-comunita-sanremo.html" },
    },
    {
      icon: "location-outline",
      title: "PUA Sanremo · verifica orari prima di andare",
      subtitle: "Palasalute, Via San Francesco 96. La pagina Casa della Comunità indica lun–ven 8–13; la pagina generale PUA indica lun/mer/ven 8:30–13. Fonti ASL1 in conflitto: orario NON VERIFICATO.",
      action: { type: "web", value: "https://www.asl1.liguria.it/servizi-dalla-a-alla-z/1498-punto-unico-accesso.html" },
    },
    {
      icon: "car-outline",
      title: "Sanremo · trasporto sociale e contrassegno disabili",
      subtitle: "Il Comune pubblica procedure per trasporto di anziani e persone con disabilità e per rilascio/rinnovo del contrassegno permanente o temporaneo. Consultare la scheda specifica.",
      action: { type: "web", value: "https://www.comune.sanremo.im.it/index.php/it/topics/assistenza-agli-invalidi/3" },
    },
    {
      icon: "home-outline",
      title: "Sanremo · assistenza domiciliare e strutture",
      subtitle: "Procedure comunali per assistenza domiciliare integrata, comunità sociosanitaria (CSS), residenza sanitaria disabili (RSD) e integrazione rette. Verificare requisiti e valutazione.",
      action: { type: "web", value: "https://www.comune.sanremo.im.it/index.php/it/topics/assistenza-agli-invalidi/3" },
    },
    {
      icon: "people-outline",
      title: "Sanremo · Ufficio di Prossimità",
      subtitle: "Corso Garibaldi 30; lunedì 15–17 e giovedì 9:30–12:30. Tel. 0184 52901, email ufficiodiprossimita@comune.sanremo.im.it. Fonte Regione Liguria.",
      action: { type: "web", value: "https://ufficiprossimita.regione.liguria.it/uffici-di-prossimita/ufficio-di-prossimita.html?mid=28" },
    },
    {
      icon: "medkit-outline",
      title: "ASL1 Imperiese · servizi sanitari ed esenzioni",
      subtitle: "Sito istituzionale per servizi sociosanitari, esenzioni ticket, scelta del medico e assistenza territoriale.",
      action: { type: "web", value: "https://www.asl1.liguria.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL 1 Imperiese · Esenzioni ticket",
    url: "https://www.asl1.liguria.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passi 1-3 vuoti: nessun recapito verificato (29/10/2026).
sanremo.percorsoTerritorio = percorso(sanremo.puntiSupporto, sanremo.puntiSupporto.map((_, i) => i));
