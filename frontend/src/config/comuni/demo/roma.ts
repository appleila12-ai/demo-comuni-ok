import type { ComuneConfig } from "../types";
import { INPS_TERZA_FASE } from "../percorso";
import { percorso } from "../percorso";

// Comune di Roma (RM) — VERSIONE DIMOSTRATIVA (completata il 13 ottobre 2026).
// Il Comune NON ha aderito a TutelApp: l'app lo segnala ai cittadini con un avviso.
// Il sito del Comune non è leggibile in automatico (robots). Fonti: pagina PUA di ASL Roma 1 (Distretti 1, 2, 3, 13, 14, 15),
// sito dell'Agenzia per la Vita Indipendente di Roma Capitale.
// Roma ha 15 Municipi e più ASL: qui c'è solo il PUA di ASL Roma 1. Gli altri Distretti (ASL Roma 2-6) vanno aggiunti.
// Da fare: recapiti dei Servizi Sociali di ogni Municipio (pua.mun02@comune.roma.it e pua.mun15@comune.roma.it sono citati nella pagina ASL), PUA delle altre ASL.
export const roma: ComuneConfig = {
  slug: "roma",
  tipo: "comune",
  nome: "Roma Capitale",
  nomeBreve: "Roma",
  delEnte: "di Roma Capitale",
  soggetto: "Il Comune",
  provincia: "RM",
  regione: "Lazio",

  ente: "Servizi Sociali",
  responsabile: "",
  indirizzo: "",
  telefono: "06 0606",
  email: "",
  pec: "",
  orari: "Sedi e orari cambiano per Municipio e Distretto: guarda la pagina del PUA",
  sitoWeb: "https://www.comune.roma.it",

  logo: null,

  theme: {
    warm: "#E6A07C",
    warmSoft: "#F8E4D8",
    warmDark: "#9A4A25",
    cream: "#F8F3EC",
  },

  puntiSupporto: [
    // Fonti ufficiali Roma Capitale, verificate il 09/11/2026. Queste sono misure continuative,
    // non bandi con una scadenza annuale: non indicarle come finanziamenti garantiti.
    {
      icon: "cash-outline",
      title: "Assegno di cura per disabilità gravissima · Roma Capitale",
      subtitle: "Da 500 a 800 euro mensili secondo ISEE e servizi attivi. Domanda presso Servizi Sociali o PUA del proprio Municipio in qualsiasi momento dell'anno; erogazione secondo requisiti e risorse disponibili. Fonte verificata 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF117423" },
    },
    {
      icon: "people-outline",
      title: "Contributo di cura per caregiver familiare · Roma Capitale",
      subtitle: "Da 400 a 700 euro mensili per disabilità gravissima assistita dal caregiver, secondo ISEE e servizi attivi. Domanda presso Servizi Sociali o PUA del Municipio durante l'anno; disponibilità subordinata alle risorse. Fonte verificata 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF117423&pagina=4" },
    },
    {
      icon: "home-outline",
      title: "Dopo di Noi · progetto di autonomia abitativa",
      subtitle: "Percorsi personalizzati per persone con disabilità grave prive di adeguato sostegno familiare. Roma Capitale ha attivato il servizio di domanda online; verificare requisiti e stato della procedura sul portale. Fonte verificata 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF1550524&stem=persone_con_disabilita" },
    },
    {
      icon: "location-outline",
      title: "Trova il PUA e i Servizi Sociali del tuo Municipio (I–XV)",
      subtitle: "Roma comprende 15 Municipi: per assegni di cura e assistenza occorre rivolgersi al proprio PUA o Servizio Sociale. La pagina ufficiale elenca i riferimenti municipali. Fonte verificata 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF117423&pagina=5" },
    },
    {
      icon: "people-outline",
      title: "Punto Unico di Accesso (PUA), ASL Roma 1",
      subtitle: "Accoglienza e orientamento ai servizi sociali e sanitari, creato da Distretto e Municipio. Ci si va di persona, con una persona di fiducia, o per telefono e email. Sul sito trovi le sedi dei Distretti 1, 2, 3, 13, 14 e 15 con telefoni e orari",
      action: { type: "web", value: "https://www.aslroma1.it/punto-unico-accesso" },
    },
    {
      icon: "home-outline",
      title: "Agenzia per la Vita Indipendente di Roma Capitale",
      subtitle: "Informazioni e consulenze su assistenza, casa, fisco, invalidità, lavoro, mobilità e scuola, con sedi Roma 1, 2 e 3. Roma 1: via Prospero Santacroce 5, tel. 06 98261600 (int. 202) per prenotare un colloquio",
      action: { type: "tel", value: "0698261600" },
    },
    {
      icon: "medkit-outline",
      title: "ASL Roma 1",
      subtitle: "Esenzione ticket per patologia e invalidità, scelta del medico e servizi sanitari del territorio",
      action: { type: "web", value: "https://www.aslroma1.it" },
    },
  ],

  trasporto:
    "Chiedi ai Servizi Sociali del Comune quali servizi di trasporto sociale sono attivi. Puoi rivolgerti anche alle associazioni di volontariato della zona (Croce Rossa, Pubbliche Assistenze, Misericordie) e alle associazioni che trovi nella sezione Associazioni.",

  esenzioneTicket: {
    label: "ASL Roma 1 · Esenzioni ticket",
    url: "https://www.aslroma1.it",
  },

  daVerificare: true,
  dimostrativo: true,
};

// Passi 4 e 5: voci già in scheda con fonte. Passo 2 senza voci: la pagina ASL Roma 1 "Invalidità civile" tratta la L. 210/92 e non indica sedi (letta il 28/10/2026).
roma.percorsoTerritorio = percorso(roma.puntiSupporto, [0, 1]);

// Passo 1: provincia nella terza fase della sperimentazione INPS (dal 1° marzo 2026).
roma.percorsoTerritorio = { ...roma.percorsoTerritorio, 1: [INPS_TERZA_FASE] };
