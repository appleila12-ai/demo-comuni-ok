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
    // Uffici verificati sul portale istituzionale di Roma Capitale il 09/11/2026.
    {
      icon: "location-outline",
      title: "Municipio II · PUA e Segretariato Sociale",
      subtitle: "Ufficio PUA, Segretariato Sociale e Integrazione Socio Sanitaria. Telefoni 06 69602598 / 2605 / 2600 / 2599 e 06 77303708. Email pua.mun02@comune.roma.it. Responsabile indicata: Katia Vitri. Orari e sede operativa da verificare sul portale ufficiale.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/amministrazione-trasparente-uffici.page?cpz=persone_anziane&mun=municipio_ii" },
    },
    {
      icon: "people-outline",
      title: "Municipio II · Disabilità, SAISH, Dopo di Noi e caregiver",
      subtitle: "Il Municipio II distingue gli uffici per SAISH e progetti autismo, autonomia/Dopo di Noi e disabilità gravissima/caregiver. Controlla gli uffici e i contatti aggiornati prima di presentare domanda.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/municipio-ii-uffici-e-contatti.page" },
    },
    {
      icon: "location-outline",
      title: "Municipio III · Segretariato Sociale e prima accoglienza",
      subtitle: "Via Umberto Fracchia 45, piano terra; telefono 06 69604652 / 653; martedì 8:30–12:30, giovedì 8:30–12:30 e 14–16 (orari da newsletter istituzionale 06/2025: riconfermare). Contatto ufficio Irene Dettori, irene.dettori@comune.roma.it.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/amministrazione-trasparente-uffici.page?cpz=persone_anziane&mun=municipio_iii" },
    },
    {
      icon: "location-outline",
      title: "Municipio IV · Segretariato Sociale",
      subtitle: "Via Tiburtina 1163, ingresso B, piano terra; su appuntamento. Tel. 06 69605430 / 34 / 605; segretariatosociale.mun04@comune.roma.it. Orari dettagliati nella newsletter istituzionale 06/2025: confermarli prima di recarsi.",
      action: { type: "web", value: "https://www.comune.roma.it/web-resources/cms/documents/Newsletter_Spazio_Comune_2_giugno_2025.pdf" },
    },
    {
      icon: "location-outline",
      title: "Municipio V · PUA ASL Roma 2",
      subtitle: "Casa della Salute S. Caterina della Rosa, Via N. Forteguerri 4; tel. 06 51007426 / 8525; pua.distretto5@aslroma2.it. Orari dalla newsletter istituzionale 06/2025: mar 9–13 e 15–17, gio 9–15, ven 9–13. Confermare prima di recarsi.",
      action: { type: "web", value: "https://www.comune.roma.it/web-resources/cms/documents/Newsletter_Spazio_Comune_2_giugno_2025.pdf" },
    },
    {
      icon: "calendar-outline",
      title: "Municipio VI · Avviso sollievo caregiver 2026",
      subtitle: "Avviso pubblicato il 28/10/2026 per caregiver formalmente riconosciuti con CardGiver. Domanda tramite protocollo Municipio VI o PEC, entro il 15° giorno dalla pubblicazione; verificare nel testo dell'avviso il termine effettivo. Documenti: moduli A/B, CardGiver, ISEE, documento identità.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/bando-concorso.page?contentId=BEC1663991" },
    },
    // Verifica istituzionale 09/11/2026: distinguere i diritti dalle erogazioni effettivamente finanziate.
    {
      icon: "people-outline",
      title: "Lazio · CardGiver e riconoscimento caregiver",
      subtitle: "Per il riconoscimento dello status di caregiver familiare rivolgersi allo Sportello Caregiver del PUA di residenza. Dopo valutazione UVMD è prevista la CardGiver. Informazioni regionali: 06 99500. Fonte Salute Lazio, letta 09/11/2026.",
      action: { type: "web", value: "https://salutelazio.it/it/servizi/sostegno-ai-caregiver" },
    },
    {
      icon: "cash-outline",
      title: "Lazio · budget personale caregiver (fino a 1.000 euro/anno)",
      subtitle: "La Regione descrive un budget personale di 1.000 euro/anno per caregiver con ISEE inferiore a 24.000 euro, destinato a formazione, tempo libero e cura personale. Per modalità di accesso e disponibilità effettiva rivolgersi al PUA: non è un pagamento automatico. Fonte Salute Lazio, 09/11/2026.",
      action: { type: "web", value: "https://salutelazio.it/it/servizi/sostegno-ai-caregiver" },
    },
    {
      icon: "home-outline",
      title: "Lazio · sollievo caregiver e sostituzione temporanea",
      subtitle: "Rimborso fino a 500 euro/anno, o fino a 600 euro in caso di disabilità complessa, per assistenza sostitutiva programmata; previste anche misure per emergenze. Verificare attivazione e requisiti presso PUA/Sportello Caregiver. Fonte Salute Lazio, 09/11/2026.",
      action: { type: "web", value: "https://salutelazio.it/it/servizi/sostegno-ai-caregiver" },
    },
    {
      icon: "location-outline",
      title: "Municipio XII · Sportello Caregiver",
      subtitle: "Via Fabiola 14, primo piano, stanze 1.18/1.19. Martedì e mercoledì 8:30–13:00 e 14:00–17:00; altri giorni su appuntamento. Offre orientamento e raccoglie le domande di riconoscimento caregiver. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF1037074" },
    },
    {
      icon: "people-outline",
      title: "Municipio VI · Ufficio Settore Disabilità",
      subtitle: "Viale Duilio Cambellotti 11. Segue SAISH adulti e minori, disabilità gravissima, caregiver, OEPAC, autismo, Dopo di Noi, vita indipendente e centri diurni. Referente: Annalisa Montagnoli, tel. 06 69608946. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=UFF28713" },
    },
    {
      icon: "location-outline",
      title: "Roma · Segretariato Sociale e PUA di tutti i Municipi",
      subtitle: "Indice ufficiale degli uffici dei Municipi I–XV per orientamento, assistenza e domande sociali. I recapiti specifici vanno verificati nella pagina di ciascun ufficio. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF87122" },
    },
    // Lazio e Municipi: fonti ufficiali lette il 09/11/2026.
    // Le misure regionali sono percorsi di accesso, NON bandi automaticamente aperti.
    {
      icon: "people-outline",
      title: "Regione Lazio · riconoscimento del caregiver familiare",
      subtitle: "Norme, procedura di riconoscimento, modulistica e misure di sostegno; l'accesso alle iniziative concrete dipende dagli avvisi territoriali. Verifica 09/11/2026.",
      action: { type: "web", value: "https://www.regione.lazio.it/cittadini/sociale-famiglie/caregiver-familiare" },
    },
    {
      icon: "home-outline",
      title: "Regione Lazio · Vita indipendente (18–64 anni)",
      subtitle: "Progetti personalizzati per autonomia, assistenza personale, trasporto e soluzioni abitative; domanda e valutazione attraverso PUA e distretti. Non è un bonus a erogazione automatica. Verifica 09/11/2026.",
      action: { type: "web", value: "https://regione.lazio.it/cittadini/sociale-famiglie/disabilita/vita-indipendente" },
    },
    {
      icon: "medkit-outline",
      title: "Regione Lazio · disabilità gravissima e assistenza domiciliare",
      subtitle: "Servizi domiciliari, assegno di cura e contributo di cura secondo valutazione e requisiti; gestione territoriale tramite distretti. Verifica 09/11/2026.",
      action: { type: "web", value: "https://www.regione.lazio.it/cittadini/sociale-famiglie/disabilita/disabilita-gravissima" },
    },
    {
      icon: "home-outline",
      title: "Regione Lazio · Dopo di Noi",
      subtitle: "Accesso agli interventi per persone con disabilità grave prive del sostegno familiare attraverso gli Ambiti territoriali, con valutazione UVM e progetto personalizzato. Verifica 09/11/2026.",
      action: { type: "web", value: "https://www.regione.lazio.it/cittadini/sociale-famiglie/disabilita/dopo-di-noi" },
    },
    {
      icon: "people-outline",
      title: "Regione Lazio · sostegno domiciliare per persone con SLA",
      subtitle: "Interventi e misure economiche o assistenziali gestite territorialmente; consultare condizioni e accesso nella pagina ufficiale. Verifica 09/11/2026.",
      action: { type: "web", value: "https://regione.lazio.it/cittadini/sociale-famiglie/disabilita/sla" },
    },
    {
      icon: "calendar-outline",
      title: "Autismo · socializzazione fino a 21 anni (scadenza 12 novembre 2026)",
      subtitle: "Per minori e giovani fino a 21 anni con disturbo dello spettro autistico: 500 euro al mese fino a 12 mensilità, nei limiti delle risorse. Domanda al Municipio di residenza entro il 12/11/2026; Diverso dall'avviso per trattamenti educativi 0–17 anni scaduto il 05/11/2026. Da archiviare dopo la scadenza secondo la regola dei 10 giorni. Verifica 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/informazione-di-servizio.page?contentId=IDS1655727" },
    },
    {
      icon: "location-outline",
      title: "Municipio I · PUA Eroi (Prati)",
      subtitle: "Casa della Comunità Eroi, Via Fra Albenzio 10. Lun–ven 8:30–12:30. Tel. 06 60105419 / 06 60105582 / 06 60105418; messaggi 338 5080024. Email segretariatosociale.mun1@comune.roma.it e pua1@aslroma1.it. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF30480" },
    },
    {
      icon: "location-outline",
      title: "Municipio I · PUA Nuovo Regina Margherita (Trastevere)",
      subtitle: "Casa della Comunità Nuovo Regina Margherita, Via Roma Libera 76. Lun–ven 8:30–12:30. Tel. 06 60106473 / 475 / 484 / 485; messaggi 366 6603044. Email pua1@aslroma1.it. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF30480" },
    },
    {
      icon: "location-outline",
      title: "Municipio I · PUA Esquilino (sede in apertura)",
      subtitle: "Via Luigi Luzzatti 8. La pagina istituzionale riporta martedì e giovedì 8:30–12:30, mercoledì 14:30–17:30, ma indica sede in via di apertura: verificare telefonicamente prima di andare. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF30480" },
    },
    {
      icon: "people-outline",
      title: "Municipio I · Segretariato Sociale Petroselli",
      subtitle: "Via Luigi Petroselli 50, primo piano. Lun/mer/ven 9–13; mar/gio 9–13 e 14–16. Tel. 06 69601665; segretariatosociale.mun1@comune.roma.it. Orientamento, pratiche sociali, agevolazioni tariffarie e richieste sosta disabili. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/dettaglio.page?contentId=UFF30480" },
    },
    {
      icon: "home-outline",
      title: "Municipio I · Assistenza domiciliare SAISH e SAISA",
      subtitle: "SAISH: assistenza domiciliare per persone con disabilità; SAISA: per anziani con autonomia limitata. Il servizio sociale municipale valuta il bisogno insieme alla ASL e definisce il piano individuale. Chiedi accesso al PUA/Segretariato del Municipio I. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web-resources/cms/documents/20240808_DIAPOSITIVE_Segretariato_Sociale_PUA.pdf" },
    },
    {
      icon: "document-text-outline",
      title: "Roma · Disabilità gravissima: domanda e documenti",
      subtitle: "Domanda ai Servizi Sociali o PUA del Municipio durante l'anno. Allegare certificazione specialistica pubblica, ISEE ordinario e sociosanitario, documenti di identità, tessera sanitaria, certificazioni invalidità/accompagnamento e L.104 art.3 c.3, secondo la scheda ufficiale. Valutazione multidisciplinare e disponibilità fondi. Fonte Roma Capitale, 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/scheda-servizi.page?contentId=INF117440" },
    },
    {
      icon: "location-outline",
      title: "Municipio XIII · Segretariato Sociale",
      subtitle: "Per orientamento e aiuto con le domande: 06 69618600 / 06 69618604; segretariatosociale.mun13@comune.roma.it. Consultare il sito municipale per appuntamento. Verifica 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/bando-concorso.page?contentId=BEC1656054" },
    },
    {
      icon: "location-outline",
      title: "Municipio XV · PUA e bandi sociali",
      subtitle: "Informazioni PUA: pua.mun15@comune.roma.it. Gli avvisi del Municipio XV, compresi quelli per la disabilità, sono nella pagina ufficiale; verificare la scadenza del singolo avviso. Verifica 09/11/2026.",
      action: { type: "web", value: "https://www.comune.roma.it/web/it/bandi-e-concorsi.page?mun=municipio_xv&tem=disabilita" },
    },
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
